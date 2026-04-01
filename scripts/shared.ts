import path from "path";
import fs from "fs";
import url from "url";
import matter from "gray-matter";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
export const ROOT = path.resolve(__dirname, "..");
export const CONTENT = path.join(ROOT, "content");
export const MANUSCRIPT = path.join(ROOT, "manuscript");
export const TEMPLATES = path.join(MANUSCRIPT, "templates");
export const BUILD = path.join(MANUSCRIPT, "build");

export interface WeekMeta {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  published: boolean;
  keyModels: string[];
  keyEquations: string[];
}

export interface ProblemMeta {
  id: number;
  title: string;
  week: number;
  difficulty: "Introductory" | "Intermediate" | "Advanced";
  modelingSteps: number[];
  tags: string[];
}

export interface GlossaryEntry {
  term: string;
  definition: string;
  relatedTerms?: string[];
  firstAppears?: number;
}

export interface AppendixMeta {
  slug: string;
  letter: string;
  title: string;
  description: string;
}

export const WEEK_SEQUENCE = [
  { number: 1, chapter: 4, title: "Introduction to Modeling in Behavior Science" },
  { number: 2, chapter: 5, title: "Historical Models -- Matching Law" },
  { number: 3, chapter: 6, title: "Historical Models -- Discounting" },
  { number: 4, chapter: 7, title: "Historical Models -- Demand" },
  { number: 5, chapter: 8, title: "Historical Models -- Respondent Conditioning" },
  { number: 6, chapter: 9, title: "Model Comparisons" },
  { number: 7, chapter: 10, title: "How to Construct a Model" },
  { number: 8, chapter: 11, title: "Probability Theory & Probabilistic Models" },
  { number: 9, chapter: 12, title: "Multilevel Modeling & Time-Series Forecasting" },
  { number: 10, chapter: 13, title: "Dynamical Systems Models" },
  { number: 11, chapter: 14, title: "Computational Models" },
  { number: 12, chapter: 15, title: "Machine Learning & Artificial Intelligence" },
  { number: 13, chapter: 16, title: "Final Project Presentations" },
] as const;

export function readMarkdownFile(filePath: string): { data: Record<string, unknown>; content: string } {
  const raw = fs.readFileSync(filePath, "utf-8");
  return matter(raw);
}

export function readAllInDir(dir: string): { filename: string; data: Record<string, unknown>; content: string }[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((filename) => {
      const { data, content } = readMarkdownFile(path.join(dir, filename));
      return { filename, data, content };
    });
}

/**
 * Shift all markdown headings down by `levels`.
 * e.g., shiftHeadings(content, 1) turns ## into ###
 */
export function shiftHeadings(md: string, levels: number): string {
  const prefix = "#".repeat(levels);
  return md.replace(/^(#{1,6})\s/gm, (match, hashes: string) => {
    const newLevel = Math.min(hashes.length + levels, 6);
    return "#".repeat(newLevel) + " ";
  });
}

export function ensureBuildDir(): void {
  if (!fs.existsSync(BUILD)) {
    fs.mkdirSync(BUILD, { recursive: true });
  }
}
