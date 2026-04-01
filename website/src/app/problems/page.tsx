"use client";

import { useEffect, useState } from "react";
import type { ProblemMeta } from "@/lib/types";

interface ProblemWithContent {
  meta: ProblemMeta;
  html: string;
}

const difficultyClass: Record<string, string> = {
  Introductory: "badge-intro",
  Intermediate: "badge-intermediate",
  Advanced: "badge-advanced",
};

export default function ProblemsPage() {
  const [problems, setProblems] = useState<ProblemWithContent[]>([]);
  const [filterWeek, setFilterWeek] = useState<number | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/problems")
      .then((r) => r.json())
      .then((data: ProblemWithContent[]) => {
        setProblems(data);
        setLoading(false);
      });
  }, []);

  const weeks = [...new Set(problems.map((p) => p.meta.week))].sort(
    (a, b) => a - b
  );

  const filtered = problems.filter((p) => {
    if (filterWeek !== null && p.meta.week !== filterWeek) return false;
    if (filterDifficulty !== null && p.meta.difficulty !== filterDifficulty)
      return false;
    return true;
  });

  return (
    <div className="container page">
      <h1>Practice Problems</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
        Thirty problems organized by week. Each is tagged with difficulty and
        the modeling framework steps it exercises.
      </p>

      <div className="filter-bar">
        <button
          className={`filter-btn ${filterWeek === null ? "active" : ""}`}
          onClick={() => setFilterWeek(null)}
        >
          All Weeks
        </button>
        {weeks.map((w) => (
          <button
            key={w}
            className={`filter-btn ${filterWeek === w ? "active" : ""}`}
            onClick={() => setFilterWeek(filterWeek === w ? null : w)}
          >
            Week {w}
          </button>
        ))}
      </div>

      <div className="filter-bar">
        {["Introductory", "Intermediate", "Advanced"].map((d) => (
          <button
            key={d}
            className={`filter-btn ${filterDifficulty === d ? "active" : ""}`}
            onClick={() =>
              setFilterDifficulty(filterDifficulty === d ? null : d)
            }
          >
            {d}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ color: "var(--color-text-muted)" }}>
          Loading problems...
        </p>
      ) : (
        <div>
          {filtered.map((p) => (
            <div
              key={p.meta.id}
              id={`problem-${p.meta.id}`}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "6px",
                padding: "1.25rem",
                marginBottom: "1rem",
                background: "var(--color-bg-alt)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.5rem",
                }}
              >
                <div>
                  <div className="card-number">
                    Problem {p.meta.id} &middot; Week {p.meta.week}
                  </div>
                  <div className="card-title">{p.meta.title}</div>
                </div>
                <div
                  style={{ display: "flex", gap: "0.3rem", flexShrink: 0 }}
                >
                  <span
                    className={`badge ${difficultyClass[p.meta.difficulty]}`}
                  >
                    {p.meta.difficulty}
                  </span>
                  {p.meta.modelingSteps.map((s) => (
                    <span key={s} className="badge badge-step">
                      Step {s}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: p.html }}
              />
              <div style={{ marginTop: "0.75rem" }}>
                <a href={`/answers#problem-${p.meta.id}`}>
                  View worked answer &rarr;
                </a>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ color: "var(--color-text-muted)" }}>
              No problems match the current filters.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
