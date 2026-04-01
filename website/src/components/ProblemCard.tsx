import Link from "next/link";
import type { ProblemMeta } from "@/lib/types";

interface ProblemCardProps {
  meta: ProblemMeta;
  showAnswer?: boolean;
}

const difficultyClass: Record<string, string> = {
  Introductory: "badge-intro",
  Intermediate: "badge-intermediate",
  Advanced: "badge-advanced",
};

export default function ProblemCard({
  meta,
  showAnswer = false,
}: ProblemCardProps) {
  const href = showAnswer
    ? `/answers#problem-${meta.id}`
    : `/problems#problem-${meta.id}`;

  return (
    <Link href={href} className="card">
      <div className="card-number">
        Problem {meta.id} &middot; Week {meta.week}
      </div>
      <div className="card-title">{meta.title}</div>
      <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.5rem" }}>
        <span className={`badge ${difficultyClass[meta.difficulty]}`}>
          {meta.difficulty}
        </span>
        {meta.modelingSteps.map((s) => (
          <span key={s} className="badge badge-step">
            Step {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
