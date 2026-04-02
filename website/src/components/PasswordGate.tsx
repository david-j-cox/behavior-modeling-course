"use client";

import { useState, useEffect, ReactNode } from "react";

export type AccessTier = "student" | "instructor";

interface PasswordGateProps {
  requiredTier: AccessTier;
  children: ReactNode;
}

const STORAGE_KEY = "course-access-tier";

export default function PasswordGate({
  requiredTier,
  children,
}: PasswordGateProps) {
  const [accessTier, setAccessTier] = useState<AccessTier | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY) as AccessTier | null;
    if (stored && meetsRequirement(stored, requiredTier)) {
      setAccessTier(stored);
    }
    setChecking(false);
  }, [requiredTier]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      setError("Incorrect password.");
      return;
    }

    const { tier } = (await res.json()) as { tier: AccessTier };

    if (!meetsRequirement(tier, requiredTier)) {
      setError("This content requires instructor access.");
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, tier);
    setAccessTier(tier);
  }

  if (checking) return null;

  if (accessTier && meetsRequirement(accessTier, requiredTier)) {
    return <>{children}</>;
  }

  const isInstructorOnly = requiredTier === "instructor";

  return (
    <div className="container page">
      <div className="password-gate">
        <h2>
          {isInstructorOnly ? "Instructor Access Required" : "Password Required"}
        </h2>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
          {isInstructorOnly
            ? "This content is restricted to course instructors."
            : "Enter the course password to view this content."}
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="search-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          {error && (
            <p className="password-gate-error">{error}</p>
          )}
          <button type="submit" className="password-gate-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function meetsRequirement(
  has: AccessTier,
  needs: AccessTier
): boolean {
  if (needs === "student") return has === "student" || has === "instructor";
  return has === "instructor";
}
