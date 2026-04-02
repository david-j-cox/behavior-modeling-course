"use client";

import PasswordGate from "@/components/PasswordGate";
import MathContent from "@/components/MathContent";
import Link from "next/link";

interface AnswerItem {
  id: number;
  title: string;
  week: number;
  difficulty: string;
  answerHtml: string | null;
}

interface Props {
  items: AnswerItem[];
}

const difficultyClass: Record<string, string> = {
  Introductory: "badge-intro",
  Intermediate: "badge-intermediate",
  Advanced: "badge-advanced",
};

export default function AnswersContent({ items }: Props) {
  return (
    <PasswordGate requiredTier="instructor">
      <div className="container page">
        <h1>Worked Answers</h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
          Complete solutions for all practice problems. Attempt each problem
          before consulting its answer.
        </p>

        {items.map((item) => (
          <div
            key={item.id}
            id={`problem-${item.id}`}
            style={{
              borderBottom: "1px solid var(--color-border)",
              paddingBottom: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.75rem",
              }}
            >
              <div>
                <div className="card-number">
                  Problem {item.id} &middot; Week {item.week}
                </div>
                <h2
                  style={{
                    fontSize: "1.2rem",
                    border: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {item.title}
                </h2>
              </div>
              <div style={{ display: "flex", gap: "0.3rem", flexShrink: 0 }}>
                <span
                  className={`badge ${difficultyClass[item.difficulty]}`}
                >
                  {item.difficulty}
                </span>
              </div>
            </div>
            {item.answerHtml ? (
              <MathContent html={item.answerHtml} />
            ) : (
              <p style={{ color: "var(--color-text-muted)", fontStyle: "italic" }}>
                Worked answer coming soon.
              </p>
            )}
            <Link
              href={`/problems#problem-${item.id}`}
              style={{
                fontSize: "0.875rem",
                marginTop: "0.5rem",
                display: "inline-block",
              }}
            >
              &larr; Back to problem statement
            </Link>
          </div>
        ))}
      </div>
    </PasswordGate>
  );
}
