import { getAllProblems, getAnswer } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import MathContent from "@/components/MathContent";
import Link from "next/link";

export const metadata = { title: "Worked Answers" };

const difficultyClass: Record<string, string> = {
  Introductory: "badge-intro",
  Intermediate: "badge-intermediate",
  Advanced: "badge-advanced",
};

export default async function AnswersPage() {
  const problems = getAllProblems();

  const items = await Promise.all(
    problems.map(async (p) => {
      const answerRaw = getAnswer(p.meta.id);
      const answerHtml = answerRaw ? await renderMarkdown(answerRaw) : null;
      return { meta: p.meta, answerHtml };
    })
  );

  return (
    <div className="container page">
      <h1>Worked Answers</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
        Complete solutions for all practice problems. Attempt each problem
        before consulting its answer.
      </p>

      {items.map((item) => (
        <div
          key={item.meta.id}
          id={`problem-${item.meta.id}`}
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
                Problem {item.meta.id} &middot; Week {item.meta.week}
              </div>
              <h2
                style={{
                  fontSize: "1.2rem",
                  border: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {item.meta.title}
              </h2>
            </div>
            <div style={{ display: "flex", gap: "0.3rem", flexShrink: 0 }}>
              <span
                className={`badge ${difficultyClass[item.meta.difficulty]}`}
              >
                {item.meta.difficulty}
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
            href={`/problems#problem-${item.meta.id}`}
            style={{ fontSize: "0.875rem", marginTop: "0.5rem", display: "inline-block" }}
          >
            &larr; Back to problem statement
          </Link>
        </div>
      ))}
    </div>
  );
}
