/**
 * generate-problems.ts
 *
 * Reads all problems and answers from canonical content,
 * generates a standalone practice-problems document with
 * problems and answers in separate sections.
 *
 * Usage: npx tsx scripts/generate-problems.ts
 * Output: manuscript/build/practice-problems.md
 */

import fs from "fs";
import path from "path";
import {
  CONTENT,
  BUILD,
  WEEK_SEQUENCE,
  readAllInDir,
  readMarkdownFile,
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

// --- Load all problems ---
const problems = readAllInDir(path.join(CONTENT, "problems")).sort(
  (a, b) => (a.data.id as number) - (b.data.id as number)
);

if (problems.length === 0) {
  console.log("No problems found in content/problems/. Nothing to generate.");
  process.exit(0);
}

// --- Header ---
emit("---");
emit('title: "Practice Problems with Worked Answers"');
emit('subtitle: "Mathematical & Computational Modeling in Behavior Science"');
emit("---");
emit("");
emit("# Practice Problems");
emit("");
emit(`This document contains ${problems.length} practice problems organized by course week,`);
emit("each tagged with difficulty level and modeling framework steps.");
emit("Problems are presented first, followed by complete worked answers.");
emit("");

// --- Group problems by week ---
const byWeek = new Map<number, typeof problems>();
for (const p of problems) {
  const w = p.data.week as number;
  if (!byWeek.has(w)) byWeek.set(w, []);
  byWeek.get(w)!.push(p);
}

const weekNumbers = [...byWeek.keys()].sort((a, b) => a - b);

// --- Problem statements ---
emit("## Problem Statements");
emit("");

for (const wn of weekNumbers) {
  const weekInfo = WEEK_SEQUENCE.find((w) => w.number === wn);
  const weekTitle = weekInfo ? weekInfo.title : `Week ${wn}`;

  emit(`### Week ${wn}: ${weekTitle}`);
  emit("");

  for (const p of byWeek.get(wn)!) {
    const d = p.data;
    emit(`#### Problem ${d.id}: ${d.title}`);
    emit("");
    emit(`**Difficulty:** ${d.difficulty}`);
    emit(`**Modeling Steps:** ${(d.modelingSteps as number[]).join(", ")}`);
    if ((d.tags as string[])?.length > 0) {
      emit(`**Tags:** ${(d.tags as string[]).join(", ")}`);
    }
    emit("");
    emit(p.content.trim());
    emit("");
  }
}

pagebreak();

// --- Worked answers ---
emit("## Worked Answers");
emit("");

const answersDir = path.join(CONTENT, "answers");

for (const wn of weekNumbers) {
  const weekInfo = WEEK_SEQUENCE.find((w) => w.number === wn);
  const weekTitle = weekInfo ? weekInfo.title : `Week ${wn}`;

  emit(`### Week ${wn}: ${weekTitle}`);
  emit("");

  for (const p of byWeek.get(wn)!) {
    const id = p.data.id as number;
    const answerFile = path.join(answersDir, `answer-${String(id).padStart(2, "0")}.md`);

    emit(`#### Solution to Problem ${id}: ${p.data.title}`);
    emit("");

    if (fs.existsSync(answerFile)) {
      const { content } = readMarkdownFile(answerFile);
      emit(content.trim());
    } else {
      emit("*Worked answer not yet available.*");
    }
    emit("");
  }
}

// --- Summary table ---
pagebreak();
emit("## Problem Index");
emit("");
emit("| # | Title | Week | Difficulty | Steps |");
emit("|---|-------|------|------------|-------|");
for (const p of problems) {
  const d = p.data;
  emit(
    `| ${d.id} | ${d.title} | ${d.week} | ${d.difficulty} | ${(d.modelingSteps as number[]).join(", ")} |`
  );
}
emit("");

// --- Write output ---
const output = lines.join("\n");
const outputPath = path.join(BUILD, "practice-problems.md");
fs.writeFileSync(outputPath, output, "utf-8");

console.log(`Practice problems document generated: ${outputPath}`);
console.log(`  ${problems.length} problems across ${weekNumbers.length} weeks`);
