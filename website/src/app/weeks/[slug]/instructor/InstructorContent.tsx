"use client";

import PasswordGate from "@/components/PasswordGate";
import MathContent from "@/components/MathContent";
import Link from "next/link";

interface Props {
  slug: string;
  weekNumber: number;
  title: string;
  html: string;
}

export default function InstructorContent({
  slug,
  weekNumber,
  title,
  html,
}: Props) {
  return (
    <PasswordGate requiredTier="instructor">
      <div className="container page">
        <div style={{ marginBottom: "1.5rem" }}>
          <Link
            href={`/weeks/${slug}`}
            style={{ color: "var(--color-primary)", textDecoration: "none" }}
          >
            &larr; Back to Week {weekNumber}
          </Link>
        </div>
        <div className="card-number" style={{ marginBottom: "0.25rem" }}>
          Week {weekNumber} &mdash; Instructor Notes
        </div>
        <h1>{title}</h1>
        <MathContent html={html} />
      </div>
    </PasswordGate>
  );
}
