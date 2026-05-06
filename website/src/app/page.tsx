import Link from "next/link";

const sections = [
  {
    href: "/framework",
    label: "The 8-Step Framework",
    desc: "A systematic method for building, evaluating, and communicating formal models of behavior.",
  },
  {
    href: "/weeks",
    label: "Weekly Course Guide",
    desc: "Thirteen chapters covering matching, discounting, demand, dynamical systems, computational models, and more.",
  },
  {
    href: "/problems",
    label: "Practice Problems",
    desc: "Thirty problems with worked answers, organized by week and tagged by difficulty and modeling step.",
  },
  {
    href: "/glossary",
    label: "Glossary",
    desc: "Searchable definitions of key terms from mathematical modeling, statistics, and behavior science.",
  },
  {
    href: "/appendices",
    label: "Appendices",
    desc: "Key equations, reference sheets, model comparison guides, and quick-reference materials.",
  },
];

export default function HomePage() {
  return (
    <div className="container page">
      <h1>Mathematical &amp; Computational Modeling in Behavior Science</h1>
      <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", maxWidth: "38rem" }}>
        A doctoral course companion for building, evaluating, and applying
        formal models of behavior-environment relations.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ borderBottom: "none", marginTop: "0" }}>About This Course</h2>
        <p>
          Behavior science has a rich tradition of quantitative thinking. From
          Herrnstein&apos;s matching law to Mazur&apos;s hyperbolic discounting model, the
          field has developed mathematical accounts of behavior that rival the
          precision found in more traditionally quantitative disciplines. Yet
          many doctoral students receive limited formal training in the logic of
          model construction, evaluation, and comparison.
        </p>
        <p>
          This course seeks to help close that gap. Over thirteen weeks, students
          learn to read, evaluate, build, and communicate quantitative models of
          behavior. The backbone of the course is an eight-step modeling framework
          adapted from engineering and the physical sciences, translated into
          behavior-science language, and applied to every model encountered.
        </p>
        <p>
          The goal is fluency in approach, not mastery of pure mathematics.
          Here, fluency means you can read a model and understand what it claims,
          evaluate whether its assumptions are reasonable, build a simple model from 
          scratch, fit it to data, compare it to alternatives, and communicate
          the results clearly.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ borderBottom: "none", marginTop: "0" }}>Explore</h2>
        <div className="card-grid">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="card">
              <div className="card-title">{s.label}</div>
              <div className="card-desc">{s.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ borderBottom: "none", marginTop: "0" }}>Course Sequence</h2>
        <table className="prose" style={{ fontSize: "0.875rem" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid var(--color-border)", padding: "0.5rem" }}>Week</th>
              <th style={{ border: "1px solid var(--color-border)", padding: "0.5rem" }}>Topic</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Introduction to Modeling",
              "Historical Models -- Matching and Discounting",
              "Historical Models -- Demand",
              "Associative Learning Models",
              "Behavioral Momentum and Response Persistence",
              "Model Comparisons",
              "How to Construct a Model",
              "Probability Theory & Probabilistic Models",
              "Multilevel Modeling & Time-Series",
              "Dynamical Systems Models",
              "Computational Models",
              "Machine Learning & AI",
              "Final Project Presentations",
            ].map((topic, i) => (
              <tr key={i}>
                <td style={{ border: "1px solid var(--color-border)", padding: "0.5rem", textAlign: "center" }}>
                  {i + 1}
                </td>
                <td style={{ border: "1px solid var(--color-border)", padding: "0.5rem" }}>
                  <Link href={`/weeks/week-${i + 1}`}>{topic}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
