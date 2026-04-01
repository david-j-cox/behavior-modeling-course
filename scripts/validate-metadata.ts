/**
 * validate-metadata.ts
 *
 * Validates frontmatter in all canonical content files.
 * Exit code 0 = all valid, 1 = errors found.
 *
 * Usage: npx tsx scripts/validate-metadata.ts
 */

import path from "path";
import fs from "fs";
import { CONTENT, readAllInDir, readMarkdownFile } from "./shared.js";

let errors: string[] = [];

function err(file: string, msg: string) {
  errors.push(`  [ERROR] ${file}: ${msg}`);
}

function requiredString(data: Record<string, unknown>, field: string, file: string) {
  if (typeof data[field] !== "string" || (data[field] as string).trim() === "") {
    err(file, `missing or empty required field "${field}"`);
  }
}

function requiredNumber(data: Record<string, unknown>, field: string, file: string) {
  if (typeof data[field] !== "number") {
    err(file, `missing or non-numeric required field "${field}"`);
  }
}

function requiredArray(data: Record<string, unknown>, field: string, file: string) {
  if (!Array.isArray(data[field])) {
    err(file, `missing or non-array required field "${field}"`);
  }
}

// --- Validate weeks ---
console.log("Validating weeks...");
const weeksDir = path.join(CONTENT, "weeks");
const weeks = readAllInDir(weeksDir);

if (weeks.length === 0) {
  err("content/weeks/", "no week files found");
} else {
  const seenNumbers = new Set<number>();
  const seenSlugs = new Set<string>();

  for (const { filename, data } of weeks) {
    const f = `weeks/${filename}`;
    requiredString(data, "slug", f);
    requiredNumber(data, "number", f);
    requiredString(data, "title", f);
    requiredString(data, "description", f);
    requiredArray(data, "keyModels", f);
    requiredArray(data, "keyEquations", f);

    const num = data.number as number;
    if (seenNumbers.has(num)) err(f, `duplicate week number ${num}`);
    seenNumbers.add(num);

    const slug = data.slug as string;
    if (seenSlugs.has(slug)) err(f, `duplicate slug "${slug}"`);
    seenSlugs.add(slug);

    if (slug && !filename.startsWith(slug)) {
      err(f, `filename does not match slug "${slug}"`);
    }
  }

  // Check for missing weeks 1-13
  for (let i = 1; i <= 13; i++) {
    if (!seenNumbers.has(i)) {
      err("content/weeks/", `missing week ${i}`);
    }
  }
}

// --- Validate problems ---
console.log("Validating problems...");
const problemsDir = path.join(CONTENT, "problems");
const problems = readAllInDir(problemsDir);

const seenProblemIds = new Set<number>();
for (const { filename, data } of problems) {
  const f = `problems/${filename}`;
  requiredNumber(data, "id", f);
  requiredString(data, "title", f);
  requiredNumber(data, "week", f);
  requiredString(data, "difficulty", f);
  requiredArray(data, "modelingSteps", f);

  const id = data.id as number;
  if (seenProblemIds.has(id)) err(f, `duplicate problem id ${id}`);
  seenProblemIds.add(id);

  const diff = data.difficulty as string;
  if (!["Introductory", "Intermediate", "Advanced"].includes(diff)) {
    err(f, `invalid difficulty "${diff}" (must be Introductory, Intermediate, or Advanced)`);
  }

  const steps = data.modelingSteps as number[];
  if (Array.isArray(steps)) {
    for (const s of steps) {
      if (s < 1 || s > 8) err(f, `modeling step ${s} out of range (1-8)`);
    }
  }
}

// --- Validate answers match problems ---
console.log("Validating answers...");
const answersDir = path.join(CONTENT, "answers");
for (const id of seenProblemIds) {
  const answerFile = path.join(answersDir, `answer-${String(id).padStart(2, "0")}.md`);
  if (!fs.existsSync(answerFile)) {
    err(`answers/answer-${String(id).padStart(2, "0")}.md`, `missing answer for problem ${id}`);
  }
}

// --- Validate appendices ---
console.log("Validating appendices...");
const appendicesDir = path.join(CONTENT, "appendices");
const appendices = readAllInDir(appendicesDir);

for (const { filename, data } of appendices) {
  const f = `appendices/${filename}`;
  requiredString(data, "slug", f);
  requiredString(data, "letter", f);
  requiredString(data, "title", f);
  requiredString(data, "description", f);
}

// --- Validate glossary ---
console.log("Validating glossary...");
const glossaryPath = path.join(CONTENT, "glossary", "glossary.json");
if (!fs.existsSync(glossaryPath)) {
  err("glossary/glossary.json", "file not found");
} else {
  try {
    const entries = JSON.parse(fs.readFileSync(glossaryPath, "utf-8"));
    if (!Array.isArray(entries)) {
      err("glossary/glossary.json", "root element must be an array");
    } else {
      const seenTerms = new Set<string>();
      for (let i = 0; i < entries.length; i++) {
        const e = entries[i];
        if (!e.term || typeof e.term !== "string") {
          err("glossary/glossary.json", `entry ${i}: missing or invalid "term"`);
        }
        if (!e.definition || typeof e.definition !== "string") {
          err("glossary/glossary.json", `entry ${i}: missing or invalid "definition"`);
        }
        if (e.term && seenTerms.has(e.term.toLowerCase())) {
          err("glossary/glossary.json", `duplicate term "${e.term}"`);
        }
        if (e.term) seenTerms.add(e.term.toLowerCase());
      }
      console.log(`  ${entries.length} glossary entries found`);
    }
  } catch {
    err("glossary/glossary.json", "invalid JSON");
  }
}

// --- Validate framework ---
console.log("Validating framework...");
const fwPath = path.join(CONTENT, "framework.md");
if (!fs.existsSync(fwPath)) {
  err("framework.md", "file not found");
} else {
  const { content } = readMarkdownFile(fwPath);
  if (content.trim().length < 100) {
    err("framework.md", "content appears too short (< 100 characters)");
  }
}

// --- Report ---
console.log("");
if (errors.length === 0) {
  console.log("All content validated successfully.");
  console.log(`  ${weeks.length} weeks, ${problems.length} problems, ${appendices.length} appendices`);
  process.exit(0);
} else {
  console.log(`Validation failed with ${errors.length} error(s):`);
  for (const e of errors) console.log(e);
  process.exit(1);
}
