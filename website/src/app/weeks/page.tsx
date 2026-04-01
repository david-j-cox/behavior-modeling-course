import Link from "next/link";
import { getAllWeeks } from "@/lib/content";

export const metadata = {
  title: "Weekly Course Guide",
};

export default function WeeksIndex() {
  const weeks = getAllWeeks();

  return (
    <div className="container page">
      <h1>Weekly Course Guide</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
        Thirteen weeks covering the foundations of mathematical and
        computational modeling in behavior science.
      </p>
      <div className="card-grid">
        {weeks.map((w) => (
          <Link key={w.slug} href={`/weeks/${w.slug}`} className="card">
            <div className="card-number">Week {w.number}</div>
            <div className="card-title">{w.title}</div>
            <div className="card-desc">{w.description}</div>
            {w.keyModels.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.3rem",
                  marginTop: "0.5rem",
                }}
              >
                {w.keyModels.map((m) => (
                  <span key={m} className="badge badge-step">
                    {m}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
