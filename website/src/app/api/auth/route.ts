import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = (await req.json()) as { password?: string };

  if (!password) {
    return NextResponse.json({ error: "Missing password" }, { status: 400 });
  }

  const instructorPw = process.env.INSTRUCTOR_PASSWORD;
  const studentPw = process.env.STUDENT_PASSWORD;

  if (instructorPw && password === instructorPw) {
    return NextResponse.json({ tier: "instructor" });
  }

  if (studentPw && password === studentPw) {
    return NextResponse.json({ tier: "student" });
  }

  return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
}
