/**
 * build-manuscript.ts
 *
 * Reads canonical content from /content and manuscript templates,
 * assembles a complete handbook markdown file ready for Pandoc DOCX conversion.
 *
 * Usage: npx tsx scripts/build-manuscript.ts
 * Output: manuscript/build/handbook.md
 */

import fs from "fs";
import path from "path";
import {
  ROOT,
  CONTENT,
  TEMPLATES,
  BUILD,
  WEEK_SEQUENCE,
  readMarkdownFile,
  readAllInDir,
  shiftHeadings,
  ensureBuildDir,
} from "./shared.js";

ensureBuildDir();

const lines: string[] = [];

function emit(text: string) {
  lines.push(text);
}

function pagebreak() {
  emit("");
  emit("::: pagebreak :::");
  emit("");
}

// ──────────────────────────────────────────────
// 1. YAML metadata block
// ──────────────────────────────────────────────
const metadataPath = path.join(TEMPLATES, "metadata.yaml");
if (fs.existsSync(metadataPath)) {
  emit(fs.readFileSync(metadataPath, "utf-8").trim());
  emit("");
} else {
  emit("---");
  emit('title: "Mathematical and Computational Modeling in Behavior Science"');
  emit('subtitle: "Course Handbook"');
  emit('author: "Department of Behavior Science"');
  emit('date: "2026"');
  emit("toc: true");
  emit("toc-depth: 3");
  emit("number-sections: true");
  emit("---");
  emit("");
}

// ──────────────────────────────────────────────
// 2. Front matter
// ──────────────────────────────────────────────
const frontMatterPath = path.join(TEMPLATES, "front-matter.md");
if (fs.existsSync(frontMatterPath)) {
  emit(fs.readFileSync(frontMatterPath, "utf-8").trim());
} else {
  emit("# Mathematical and Computational Modeling in Behavior Science");
  emit("");
  emit("**A Systematic Guide to Building, Evaluating, and Applying Formal Models of Behavior**");
  emit("");
  emit("*Prepared for doctoral students in behavior science*");
}
pagebreak();

// ──────────────────────────────────────────────
// 3. Course overview (from canonical content)
// ──────────────────────────────────────────────
const overviewPath = path.join(CONTENT, "course-overview.md");
if (fs.existsSync(overviewPath)) {
  const { content } = readMarkdownFile(overviewPath);
  emit(content.trim());
  pagebreak();
}

// ──────────────────────────────────────────────
// 4. Framework chapter (from canonical content)
// ──────────────────────────────────────────────
const fwPath = path.join(CONTENT, "framework.md");
if (fs.existsSync(fwPath)) {
  const { content } = readMarkdownFile(fwPath);
  emit("# The 8-Step Modeling Framework");
  emit("");
  emit(shiftHeadings(content.trim(), 1));
  pagebreak();
}

// ──────────────────────────────────────────────
// 5. Part II: Weekly chapters
// ──────────────────────────────────────────────
emit("# Part II. Weekly Course Guide");
pagebreak();

for (const week of WEEK_SEQUENCE) {
  const weekFile = path.join(CONTENT, "weeks", `week-${week.number}.md`);

  // Check for a chapter template that wraps the content
  const templateFile = path.join(TEMPLATES, `chapter-${String(week.chapter).padStart(2, "0")}.md`);

  if (fs.existsSync(weekFile)) {
    const { data, content } = readMarkdownFile(weekFile);
    const title = (data.title as string) || week.title;

    emit(`## Chapter ${week.chapter}: ${title} (Week ${week.number})`);
    emit("");

    if (fs.existsSync(templateFile)) {
      // Template may contain {{WEEK_CONTENT}} placeholder
      const template = fs.readFileSync(templateFile, "utf-8");
      const assembled = template.replace("{{WEEK_CONTENT}}", shiftHeadings(content.trim(), 1));
      emit(assembled.trim());
    } else {
      // No template -- use content directly with heading shift
      emit(shiftHeadings(content.trim(), 1));
    }
  } else {
    emit(`## Chapter ${week.chapter}: ${week.title} (Week ${week.number})`);
    emit("");
    emit("*Content for this chapter is under development.*");
  }

  pagebreak();
}

// ──────────────────────────────────────────────
// 6. Part III: Practice Problems (statements only)
// ──────────────────────────────────────────────
emit("# Part III. Practice and Application");
pagebreak();
emit("## Practice Problems");
emit("");
emit("Each problem is tagged with a difficulty level and the modeling framework steps it exercises.");
emit("Attempt each problem before consulting the worked answers.");
emit("");

const problems = readAllInDir(path.join(CONTENT, "problems"));
const sortedProblems = problems.sort(
  (a, b) => (a.data.id as number) - (b.data.id as number)
);

for (const p of sortedProblems) {
  const d = p.data;
  emit(`### Problem ${d.id}: ${d.title}`);
  emit("");
  emit(`**Difficulty:** ${d.difficulty} | **Week:** ${d.week} | **Modeling Steps:** ${(d.modelingSteps as number[]).join(", ")}`);
  emit("");
  emit(p.content.trim());
  emit("");
}

pagebreak();

// ──────────────────────────────────────────────
// 7. Worked Answers (separate chapter)
// ──────────────────────────────────────────────
emit("## Worked Answers");
emit("");

const answersDir = path.join(CONTENT, "answers");
for (const p of sortedProblems) {
  const id = p.data.id as number;
  const answerFile = path.join(answersDir, `answer-${String(id).padStart(2, "0")}.md`);

  emit(`### Solution to Problem ${id}: ${p.data.title}`);
  emit("");

  if (fs.existsSync(answerFile)) {
    const { content } = readMarkdownFile(answerFile);
    emit(content.trim());
  } else {
    emit("*Worked answer not yet available.*");
  }
  emit("");
}

pagebreak();

// ──────────────────────────────────────────────
// 8. Part IV: Appendices (from canonical content)
// ──────────────────────────────────────────────
emit("# Part IV. Appendices");
pagebreak();

const appendices = readAllInDir(path.join(CONTENT, "appendices"));
for (const a of appendices) {
  const letter = (a.data.letter as string) || "?";
  const title = (a.data.title as string) || a.filename;
  emit(`## Appendix ${letter}: ${title}`);
  emit("");
  emit(shiftHeadings(a.content.trim(), 1));
  pagebreak();
}

// ──────────────────────────────────────────────
// 9. Write output
// ──────────────────────────────────────────────
const output = lines.join("\n");
const outputPath = path.join(BUILD, "handbook.md");
fs.writeFileSync(outputPath, output, "utf-8");

const wordCount = output.split(/\s+/).length;
console.log(`Manuscript assembled: ${outputPath}`);
console.log(`  ${lines.length} lines, ~${wordCount.toLocaleString()} words`);
console.log(`  ${WEEK_SEQUENCE.length} chapters, ${sortedProblems.length} problems, ${appendices.length} appendices`);
