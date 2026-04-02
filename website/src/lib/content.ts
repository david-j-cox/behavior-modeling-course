import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  WeekMeta,
  ProblemMeta,
  GlossaryEntry,
  AppendixMeta,
  InstructorNoteMeta,
} from "./types";

const contentDir = path.resolve(
  process.cwd(),
  process.env.CONTENT_DIR || path.join("..", "content")
);

// --- Week helpers ---

export function getAllWeeks(includeUnpublished = false): WeekMeta[] {
  const weeksDir = path.join(contentDir, "weeks");
  if (!fs.existsSync(weeksDir)) return [];

  const files = fs
    .readdirSync(weeksDir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(weeksDir, file), "utf-8");
      const { data } = matter(raw);
      return data as WeekMeta;
    })
    .filter((w) => includeUnpublished || w.published !== false)
    .sort((a, b) => a.number - b.number);
}

export function getWeek(slug: string): { meta: WeekMeta; content: string } | null {
  const filePath = path.join(contentDir, "weeks", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const meta = data as WeekMeta;
  if (meta.published === false) return null;
  return { meta, content };
}

export function getWeekSlugs(): string[] {
  return getAllWeeks().map((w) => w.slug);
}

// --- Problem helpers ---

export function getAllProblems(): { meta: ProblemMeta; content: string }[] {
  const dir = path.join(contentDir, "problems");
  if (!fs.existsSync(dir)) return [];

  const publishedWeeks = new Set(getAllWeeks().map((w) => w.number));

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      return { meta: data as ProblemMeta, content };
    })
    .filter((p) => publishedWeeks.has(p.meta.week));
}

export function getProblem(
  id: number
): { meta: ProblemMeta; content: string } | null {
  const all = getAllProblems();
  return all.find((p) => p.meta.id === id) ?? null;
}

// --- Answer helpers ---

export function getAnswer(id: number): string | null {
  const dir = path.join(contentDir, "answers");
  const filePath = path.join(dir, `answer-${String(id).padStart(2, "0")}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  return content;
}

// --- Glossary helpers ---

export function getGlossary(): GlossaryEntry[] {
  const filePath = path.join(contentDir, "glossary", "glossary.json");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as GlossaryEntry[];
}

// --- Appendix helpers ---

export function getAllAppendices(): AppendixMeta[] {
  const dir = path.join(contentDir, "appendices");
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    return data as AppendixMeta;
  });
}

export function getAppendix(
  slug: string
): { meta: AppendixMeta; content: string } {
  const filePath = path.join(contentDir, "appendices", `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: data as AppendixMeta, content };
}

// --- Framework ---

export function getFrameworkContent(): string {
  const filePath = path.join(contentDir, "framework.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  return content;
}

// --- Instructor Notes ---

export function getInstructorNote(
  weekNumber: number
): { meta: InstructorNoteMeta; content: string } | null {
  const filePath = path.join(
    contentDir,
    "instructor",
    `week-${weekNumber}.md`
  );
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: data as InstructorNoteMeta, content };
}

export function getInstructorNoteSlugs(): number[] {
  const dir = path.join(contentDir, "instructor");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseInt(f.replace("week-", "").replace(".md", ""), 10))
    .filter((n) => !isNaN(n))
    .sort((a, b) => a - b);
}
