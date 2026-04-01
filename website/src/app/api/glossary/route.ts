import { NextResponse } from "next/server";
import { getGlossary } from "@/lib/content";

export async function GET() {
  const entries = getGlossary();
  return NextResponse.json(entries);
}
