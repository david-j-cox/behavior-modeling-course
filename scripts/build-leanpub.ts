/**
 * build-leanpub.ts
 *
 * Reads canonical content from /content and assembles a Leanpub-native
 * manuscript in /manuscript using Markua-flavored Markdown.
 *
 * Output layout (Leanpub convention):
 *   manuscript/
 *     Book.txt              -- chapter manifest (frontmatter/mainmatter/backmatter)
 *     Sample.txt            -- subset of chapters for the free sample
 *     images/               -- copied from website/public/images
 *     preface.md            -- front matter
 *     ch-01-overview.md     -- main matter chapters
 *     ch-02-framework.md
 *     ch-03-week-01.md ...
 *     part-iii-problems.md
 *     app-a-key-equations.md ...
 *     glossary.md
 *
 * Usage: npx tsx scripts/build-leanpub.ts
 */
import fs from "fs";
import path from "path";
import {
  ROOT,
  CONTENT,
  MANUSCRIPT,
  WEEK_SEQUENCE,
  readMarkdownFile,
  readAllInDir,
  shiftHeadings,
} from "./shared.js";

const IMAGES_SRC = path.join(ROOT, "website", "public", "images");
const IMAGES_DST = path.join(MANUSCRIPT, "images");

const LAB_URL_BASE = "https://www.behavioral-data-science.org/book/labs";

interface ChapterFile {
  filename: string;
  section: "frontmatter" | "mainmatter" | "backmatter";
  sample?: boolean;
}

const manifest: ChapterFile[] = [];

function write(filename: string, body: string, section: ChapterFile["section"], sample = false): void {
  fs.writeFileSync(path.join(MANUSCRIPT, filename), body.trimEnd() + "\n", "utf-8");
  manifest.push({ filename, section, sample });
}

/**
 * Convert standard Markdown to Markua. Handles the transforms that matter
 * for this manuscript; other constructs pass through unchanged.
 *
 * Transforms:
 *   - Image paths: /images/foo.png -> images/foo.png (Markua resolves relative
 *     to the manuscript root's images/ folder)
 *   - Inline math: $x$ -> {$$}x{/$$}
 *   - Display math: $$...$$ stays as-is; Markua/Leanpub render LaTeX in fenced
 *     {$$} blocks, and the converter wraps existing $$ display math
 *   - Strip Next.js-style absolute links to internal site routes (the book
 *     can't link inside itself by route); leave external https links alone
 */
function toMarkua(md: string): string {
  let out = md;

  out = out.replace(/!\[([^\]]*)\]\(\/images\/([^)]+)\)/g, "![$1](images/$2)");

  out = out.replace(/\$\$([\s\S]+?)\$\$/g, (_m, body) => {
    return "{$$}" + body.trim() + "{/$$}";
  });

  // Inline math: $...$ -> {$$}...{/$$}. Allow single-char bodies like $R$
  // and longer expressions, but reject empty bodies and stray dollar signs.
  // Run after display-math substitution so $$...$$ never matches here.
  out = out.replace(/(^|[^$\\])\$([^\s$][^$\n]*?)\$(?!\$)/g, (_m, pre, body) => {
    return `${pre}{$$}${body}{/$$}`;
  });

  return out;
}

function ensureCleanManuscript(): void {
  for (const entry of fs.readdirSync(MANUSCRIPT)) {
    if (entry === "templates" || entry === "images" || entry === "README.md") continue;
    fs.rmSync(path.join(MANUSCRIPT, entry), { recursive: true, force: true });
  }
  if (!fs.existsSync(IMAGES_DST)) fs.mkdirSync(IMAGES_DST, { recursive: true });
}

function copyImages(): void {
  if (!fs.existsSync(IMAGES_SRC)) return;
  for (const f of fs.readdirSync(IMAGES_SRC)) {
    fs.copyFileSync(path.join(IMAGES_SRC, f), path.join(IMAGES_DST, f));
  }
}

function loadReadings(week: number): string | null {
  const padded = String(week).padStart(2, "0");
  const fp = path.join(CONTENT, "readings", `readings-week-${padded}.md`);
  if (!fs.existsSync(fp)) return null;
  const { data } = readMarkdownFile(fp);
  const readings = (data.readings as Array<{ citation: string; type: string }>) || [];
  if (readings.length === 0) return null;
  const required = readings.filter((r) => r.type === "required");
  const optional = readings.filter((r) => r.type !== "required");
  const lines: string[] = ["## Recommended Readings", ""];
  if (required.length > 0) {
    lines.push("**Required:**", "");
    for (const r of required) lines.push(`- ${r.citation}`);
    lines.push("");
  }
  if (optional.length > 0) {
    lines.push("**Optional:**", "");
    for (const r of optional) lines.push(`- ${r.citation}`);
    lines.push("");
  }
  return lines.join("\n");
}

function loadLab(week: number): string | null {
  const fp = path.join(CONTENT, "labs", `lab-week-${String(week).padStart(2, "0")}.md`);
  if (!fs.existsSync(fp)) return null;
  const { data, content } = readMarkdownFile(fp);
  const title = (data.title as string) || `Week ${week} Lab`;
  const padded = String(week).padStart(2, "0");
  const labUrl = `${LAB_URL_BASE}/week-${padded}`;

  // Markua aside (A>) for the callout. Plain text, no emoji.
  const callout = [
    "A> **Run this lab.** Notebooks and data files are available at:",
    `A> [${labUrl}](${labUrl})`,
    "A>",
    "A> The companion materials include starter notebooks, the dataset(s) referenced below, and instructor-prepared solutions.",
  ].join("\n");

  const body = toMarkua(content.trim());
  return [`## Lab: ${title}`, "", callout, "", body].join("\n");
}

function buildPreface(): void {
  const fp = path.join(MANUSCRIPT, "templates", "front-matter.md");
  let raw = fs.existsSync(fp) ? fs.readFileSync(fp, "utf-8") : "";
  // The existing front-matter.md uses Pandoc {.unnumbered} attributes that
  // Markua doesn't understand. Strip them; Leanpub frontmatter is unnumbered
  // by section, not by attribute.
  raw = raw.replace(/\s*\{\.unnumbered\}/g, "");
  write("preface.md", toMarkua(raw), "frontmatter", true);
}

function buildOverview(): void {
  const fp = path.join(CONTENT, "course-overview.md");
  if (!fs.existsSync(fp)) return;
  const { content } = readMarkdownFile(fp);
  const body = ["# Course Overview", "", toMarkua(content.trim())].join("\n");
  write("ch-01-overview.md", body, "mainmatter", true);
}

function buildFramework(): void {
  const fp = path.join(CONTENT, "framework.md");
  if (!fs.existsSync(fp)) return;
  const { content } = readMarkdownFile(fp);
  // Shift headings so the chapter title is H1 and existing H1s in content
  // become H2s. (framework.md uses H2 already for sections, so we just
  // prepend a H1 chapter title.)
  const body = ["# The 8-Step Modeling Framework", "", toMarkua(content.trim())].join("\n");
  write("ch-02-framework.md", body, "mainmatter", true);
}

function buildWeeks(): void {
  // Each week becomes one chapter. Chapter numbering offsets by 2
  // (overview = 1, framework = 2, weeks start at 3).
  for (const week of WEEK_SEQUENCE) {
    const weekFile = path.join(CONTENT, "weeks", `week-${week.number}.md`);
    const chapterNum = week.number + 2;
    const padded = String(chapterNum).padStart(2, "0");
    const outName = `ch-${padded}-week-${String(week.number).padStart(2, "0")}.md`;

    const parts: string[] = [];
    let title = week.title;
    let weekBody = "";

    if (fs.existsSync(weekFile)) {
      const { data, content } = readMarkdownFile(weekFile);
      title = (data.title as string) || title;
      weekBody = toMarkua(content.trim());
    } else {
      weekBody = "_Content for this chapter is under development._";
    }

    parts.push(`# Chapter ${chapterNum}: ${title}`);
    parts.push("");
    parts.push(`> Week ${week.number} of the 13-week sequence.`);
    parts.push("");
    parts.push(weekBody);

    const readings = loadReadings(week.number);
    if (readings) {
      parts.push("");
      parts.push(readings);
    }

    const lab = loadLab(week.number);
    if (lab) {
      parts.push("");
      parts.push(lab);
    }

    write(outName, parts.join("\n"), "mainmatter", week.number === 1);
  }
}

function buildProblemsAndAnswers(): void {
  const problems = readAllInDir(path.join(CONTENT, "problems")).sort(
    (a, b) => (a.data.id as number) - (b.data.id as number)
  );
  const answersDir = path.join(CONTENT, "answers");

  const parts: string[] = ["# Practice Problems", ""];
  parts.push(
    "Each problem is tagged with a difficulty level and the modeling-framework steps it exercises. Attempt each problem before consulting the worked answers in the chapter that follows."
  );
  parts.push("");

  for (const p of problems) {
    const d = p.data;
    parts.push(`## Problem ${d.id}: ${d.title}`);
    parts.push("");
    parts.push(
      `**Difficulty:** ${d.difficulty}  |  **Week:** ${d.week}  |  **Modeling Steps:** ${(d.modelingSteps as number[]).join(", ")}`
    );
    parts.push("");
    parts.push(toMarkua(p.content.trim()));
    parts.push("");
  }

  write("part-iii-problems.md", parts.join("\n"), "mainmatter");

  const answerParts: string[] = ["# Worked Answers", ""];
  for (const p of problems) {
    const id = p.data.id as number;
    const fp = path.join(answersDir, `answer-${String(id).padStart(2, "0")}.md`);
    answerParts.push(`## Solution to Problem ${id}: ${p.data.title}`);
    answerParts.push("");
    if (fs.existsSync(fp)) {
      const { content } = readMarkdownFile(fp);
      answerParts.push(toMarkua(content.trim()));
    } else {
      answerParts.push("_Worked answer not yet available._");
    }
    answerParts.push("");
  }
  write("part-iii-answers.md", answerParts.join("\n"), "mainmatter");
}

function buildAppendices(): void {
  const appendices = readAllInDir(path.join(CONTENT, "appendices"));
  for (const a of appendices) {
    const letter = (a.data.letter as string) || "?";
    const title = (a.data.title as string) || a.filename;
    const slug = (a.data.slug as string) || a.filename.replace(/\.md$/, "");
    const body = [
      `# Appendix ${letter}: ${title}`,
      "",
      toMarkua(a.content.trim()),
    ].join("\n");
    write(`app-${letter.toLowerCase()}-${slug}.md`, body, "backmatter");
  }
}

function buildGlossary(): void {
  const fp = path.join(CONTENT, "glossary", "glossary.json");
  if (!fs.existsSync(fp)) return;
  type Entry = {
    term: string;
    definition: string;
    relatedTerms?: string[];
    firstAppears?: number;
  };
  const entries = JSON.parse(fs.readFileSync(fp, "utf-8")) as Entry[];
  entries.sort((a, b) => a.term.localeCompare(b.term));

  const parts: string[] = ["# Glossary", ""];
  for (const e of entries) {
    parts.push(`**${e.term}.**  ${e.definition}`);
    if (e.relatedTerms && e.relatedTerms.length > 0) {
      parts.push("");
      parts.push(`_See also:_ ${e.relatedTerms.join(", ")}.`);
    }
    parts.push("");
  }
  write("glossary.md", parts.join("\n"), "backmatter");
}

function writeManifest(): void {
  const lines: string[] = [];
  const groups: ChapterFile["section"][] = ["frontmatter", "mainmatter", "backmatter"];
  for (const g of groups) {
    const files = manifest.filter((m) => m.section === g);
    if (files.length === 0) continue;
    lines.push(`${g}:`);
    for (const f of files) lines.push(f.filename);
    lines.push("");
  }
  fs.writeFileSync(path.join(MANUSCRIPT, "Book.txt"), lines.join("\n"), "utf-8");

  const sampleLines: string[] = [];
  for (const g of groups) {
    const files = manifest.filter((m) => m.section === g && m.sample);
    if (files.length === 0) continue;
    sampleLines.push(`${g}:`);
    for (const f of files) sampleLines.push(f.filename);
    sampleLines.push("");
  }
  fs.writeFileSync(path.join(MANUSCRIPT, "Sample.txt"), sampleLines.join("\n"), "utf-8");
}

function main(): void {
  ensureCleanManuscript();
  copyImages();

  buildPreface();
  buildOverview();
  buildFramework();
  buildWeeks();
  buildProblemsAndAnswers();
  buildAppendices();
  buildGlossary();

  writeManifest();

  console.log(`Leanpub manuscript built: ${MANUSCRIPT}`);
  console.log(`  ${manifest.length} chapter files`);
  console.log(`  frontmatter: ${manifest.filter((m) => m.section === "frontmatter").length}`);
  console.log(`  mainmatter:  ${manifest.filter((m) => m.section === "mainmatter").length}`);
  console.log(`  backmatter:  ${manifest.filter((m) => m.section === "backmatter").length}`);
  console.log(`  in sample:   ${manifest.filter((m) => m.sample).length}`);
}

main();
