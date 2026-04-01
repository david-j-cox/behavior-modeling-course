import { NextResponse } from "next/server";
import { getAllProblems } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";

export async function GET() {
  const problems = getAllProblems();

  const results = await Promise.all(
    problems.map(async (p) => ({
      meta: p.meta,
      html: await renderMarkdown(p.content),
    }))
  );

  return NextResponse.json(results);
}
