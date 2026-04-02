import { getAllLabs } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import MathContent from "@/components/MathContent";
import Link from "next/link";

export const metadata = {
  title: "Lab Assignments — Mathematical & Computational Modeling in Behavior Science",
};

export default async function LabsPage() {
  const labs = await Promise.all(
    getAllLabs().map(async (lab) => ({
      meta: lab.meta,
      html: await renderMarkdown(lab.content),
    }))
  );

  return (
    <div className="container page">
      <h1>Lab Assignments</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
        Hands-on experiential notebooks for each week. Download the data files,
        open the notebook, and work through the exercises.
      </p>

      {labs.map((lab) => (
        <div
          key={lab.meta.week}
          id={`week-${lab.meta.week}`}
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
              <div className="card-number">Week {lab.meta.week}</div>
              <div className="card-title">{lab.meta.title}</div>
            </div>
            <Link
              href={`/weeks/week-${lab.meta.week}`}
              className="badge badge-step"
              style={{ textDecoration: "none", fontSize: "0.8rem", flexShrink: 0 }}
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
            {lab.meta.description}
          </p>

          {lab.meta.notebooks.length > 0 && (
            <div style={{ marginBottom: "0.75rem" }}>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--color-text-muted)",
                  marginBottom: "0.35rem",
                }}
              >
                Notebooks
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {lab.meta.notebooks.map((nb) => (
                  <a
                    key={nb.filename}
                    href={`/labs/week-${String(lab.meta.week).padStart(2, "0")}/${nb.filename}`}
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

          {lab.meta.dataFiles.length > 0 && (
            <div style={{ marginBottom: "0.75rem" }}>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "var(--color-text-muted)",
                  marginBottom: "0.35rem",
                }}
              >
                Data Files
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {lab.meta.dataFiles.map((file) => (
                  <a
                    key={file}
                    href={`/labs/week-${String(lab.meta.week).padStart(2, "0")}/${file}`}
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
      ))}
    </div>
  );
}
