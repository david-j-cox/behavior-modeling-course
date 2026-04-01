import Link from "next/link";
import { getAllAppendices } from "@/lib/content";

export const metadata = { title: "Appendices" };

export default function AppendicesIndex() {
  const appendices = getAllAppendices();

  return (
    <div className="container page">
      <h1>Appendices</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
        Reference materials, key equations, and quick-reference guides.
      </p>
      <div className="card-grid">
        {appendices.map((a) => (
          <Link
            key={a.slug}
            href={`/appendices/${a.slug}`}
            className="card"
          >
            <div className="card-number">Appendix {a.letter}</div>
            <div className="card-title">{a.title}</div>
            <div className="card-desc">{a.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
