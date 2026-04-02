"use client";

import PasswordGate from "@/components/PasswordGate";
import Link from "next/link";
import type { ReadingWeek } from "@/lib/types";

interface Props {
  weeks: ReadingWeek[];
}

export default function ReadingsContent({ weeks }: Props) {
  return (
    <PasswordGate requiredTier="student">
      <div className="container page">
        <h1>Course Readings</h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
          Required and supplemental readings organized by week. Download PDFs
          for use in this course only.
        </p>

        {weeks.map((week) => {
          const required = week.readings.filter((r) => r.type === "required");
          const supplemental = week.readings.filter(
            (r) => r.type === "supplemental"
          );
          const weekDir = `week-${String(week.week).padStart(2, "0")}`;

          return (
            <div
              key={week.week}
              id={`week-${week.week}`}
              className="card"
              style={{ marginBottom: "1.5rem", display: "block" }}
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
                  <div className="card-number">Week {week.week}</div>
                  <div className="card-title">{week.title}</div>
                </div>
                <Link
                  href={`/weeks/week-${week.week}`}
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

              {required.length > 0 && (
                <div style={{ marginBottom: "0.75rem" }}>
                  <div className="readings-label">Required</div>
                  <ul className="readings-list">
                    {required.map((r) => (
                      <li key={r.filename}>
                        <a
                          href={`/readings/${weekDir}/${encodeURIComponent(r.filename)}`}
                          download
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: r.citation
                                .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                            }}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {supplemental.length > 0 && (
                <div>
                  <div className="readings-label">Supplemental</div>
                  <ul className="readings-list">
                    {supplemental.map((r) => (
                      <li key={r.filename}>
                        <a
                          href={`/readings/${weekDir}/${encodeURIComponent(r.filename)}`}
                          download
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: r.citation
                                .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                            }}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </PasswordGate>
  );
}
