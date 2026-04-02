"use client";

import Link from "next/link";
import MathContent from "@/components/MathContent";
import { useAccessTier } from "@/components/useAccessTier";
import type { LabNotebook } from "@/lib/types";

interface LabItem {
  week: number;
  title: string;
  description: string;
  notebooks: LabNotebook[];
  instructorNotebooks: LabNotebook[];
  dataFiles: string[];
  html: string;
}

interface Props {
  labs: LabItem[];
}

export default function LabsContent({ labs }: Props) {
  const tier = useAccessTier();
  const isInstructor = tier === "instructor";

  return (
    <div className="container page">
      <h1>Lab Assignments</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
        Hands-on experiential notebooks for each week. Download the data files,
        open the notebook, and work through the exercises.
      </p>

      {labs.map((lab) => {
        const weekDir = `week-${String(lab.week).padStart(2, "0")}`;

        return (
          <div
            key={lab.week}
            id={`week-${lab.week}`}
            className="card"
            style={{ marginBottom: "1.5rem", display: "block" }}
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
                <div className="card-number">Week {lab.week}</div>
                <div className="card-title">{lab.title}</div>
              </div>
              <Link
                href={`/weeks/week-${lab.week}`}
                className="badge badge-step"
                style={{
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  flexShrink: 0,
                }}
              >
                Week Content
              </Link>
            </div>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                marginBottom: "1rem",
              }}
            >
              {lab.description}
            </p>

            {lab.notebooks.length > 0 && (
              <div style={{ marginBottom: "0.75rem" }}>
                <div className="readings-label">Notebooks</div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                >
                  {lab.notebooks.map((nb) => (
                    <a
                      key={nb.filename}
                      href={`/labs/${weekDir}/${nb.filename}`}
                      download
                      className="badge"
                      style={{ textDecoration: "none" }}
                    >
                      {nb.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {isInstructor && lab.instructorNotebooks.length > 0 && (
              <div style={{ marginBottom: "0.75rem" }}>
                <div className="readings-label" style={{ color: "var(--color-warning)" }}>
                  Instructor Only
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                >
                  {lab.instructorNotebooks.map((nb) => (
                    <a
                      key={nb.filename}
                      href={`/labs/${weekDir}/${nb.filename}`}
                      download
                      className="badge badge-advanced"
                      style={{ textDecoration: "none" }}
                    >
                      {nb.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {lab.dataFiles.length > 0 && (
              <div style={{ marginBottom: "0.75rem" }}>
                <div className="readings-label">Data Files</div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                >
                  {lab.dataFiles.map((file) => (
                    <a
                      key={file}
                      href={`/labs/${weekDir}/${file}`}
                      download
                      className="badge badge-step"
                      style={{ textDecoration: "none", fontSize: "0.8rem" }}
                    >
                      {file}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {lab.html && (
              <details style={{ marginTop: "0.75rem" }}>
                <summary
                  style={{
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                  }}
                >
                  Lab Instructions
                </summary>
                <div style={{ marginTop: "0.75rem" }}>
                  <MathContent html={lab.html} />
                </div>
              </details>
            )}
          </div>
        );
      })}
    </div>
  );
}
