"use client";

import { useEffect, useState } from "react";
import type { GlossaryEntry } from "@/lib/types";

export default function GlossaryPage() {
  const [entries, setEntries] = useState<GlossaryEntry[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/glossary")
      .then((r) => r.json())
      .then((data: GlossaryEntry[]) => {
        setEntries(data);
        setLoading(false);
      });
  }, []);

  const filtered = entries.filter(
    (e) =>
      e.term.toLowerCase().includes(search.toLowerCase()) ||
      e.definition.toLowerCase().includes(search.toLowerCase())
  );

  const letters = [
    ...new Set(filtered.map((e) => e.term[0].toUpperCase())),
  ].sort();

  return (
    <div className="container page">
      <h1>Glossary</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem" }}>
        Key terms from mathematical modeling, statistics, and behavior science.
      </p>

      <input
        type="text"
        className="search-input"
        placeholder="Search terms or definitions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p style={{ color: "var(--color-text-muted)" }}>Loading glossary...</p>
      ) : (
        <>
          {letters.map((letter) => (
            <div key={letter} style={{ marginBottom: "1.5rem" }}>
              <h2
                style={{
                  fontSize: "1.3rem",
                  borderBottom: "2px solid var(--color-accent)",
                  paddingBottom: "0.25rem",
                  marginBottom: "0.75rem",
                  display: "inline-block",
                }}
              >
                {letter}
              </h2>
              {filtered
                .filter((e) => e.term[0].toUpperCase() === letter)
                .map((e) => (
                  <div
                    key={e.term}
                    style={{ marginBottom: "0.75rem" }}
                    id={e.term.toLowerCase().replace(/\s+/g, "-")}
                  >
                    <strong>{e.term}</strong>
                    {e.firstAppears && (
                      <span
                        className="badge badge-step"
                        style={{ marginLeft: "0.5rem" }}
                      >
                        Week {e.firstAppears}
                      </span>
                    )}
                    <div
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.9rem",
                        marginTop: "0.15rem",
                      }}
                    >
                      {e.definition}
                    </div>
                  </div>
                ))}
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ color: "var(--color-text-muted)" }}>
              No matching terms found.
            </p>
          )}
        </>
      )}
    </div>
  );
}
