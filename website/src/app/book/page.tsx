import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get the Book | Modeling in Behavior Science",
  description:
    "Mathematical and Computational Modeling in Behavior Science is available as an ebook and paperback. The full course content, in a form you can read on a plane or mark up with a pen.",
};

const formats = [
  {
    label: "Ebook (Leanpub)",
    desc: "PDF, EPUB, and MOBI. Pay what you want above the suggested minimum. Free updates whenever the course is revised.",
    href: "#",
    cta: "Buy on Leanpub",
  },
  {
    label: "Kindle",
    desc: "Read on any Kindle device or app. Same content as the Leanpub EPUB.",
    href: "#",
    cta: "Buy on Kindle",
  },
  {
    label: "Paperback",
    desc: "Print edition via Amazon KDP. 6 x 9 in, suitable for marking up alongside the labs.",
    href: "#",
    cta: "Order paperback",
  },
];

export default function BookPage() {
  return (
    <div className="container page">
      <h1>Get the Book</h1>
      <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", maxWidth: "38rem" }}>
        The full course, in a form you can read on a plane or mark up with a pen.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ borderBottom: "none", marginTop: "0" }}>About the Book</h2>
        <p>
          <em>Mathematical and Computational Modeling in Behavior Science</em> is
          the printed and ebook companion to this course. It contains the same
          thirteen chapters, eight-step framework, practice problems, worked
          answers, appendices, and glossary that you will find on this site,
          arranged for linear reading.
        </p>
        <p>
          The website remains the canonical home for the labs, which depend on
          a running Python kernel and a browser. The book is the place to read
          the theory end-to-end, study offline, or work through the practice
          problems away from a screen.
        </p>
        <p>
          Buying the book is the most direct way to support continued work on
          the course. All site content stays free.
        </p>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ borderBottom: "none", marginTop: "0" }}>Where to Buy</h2>
        <div className="card-grid">
          {formats.map((f) => (
            <a key={f.label} href={f.href} className="card">
              <div className="card-title">{f.label}</div>
              <div className="card-desc">{f.desc}</div>
              <div
                style={{
                  marginTop: "0.75rem",
                  fontWeight: 600,
                  color: "var(--color-link)",
                }}
              >
                {f.cta} &rarr;
              </div>
            </a>
          ))}
        </div>
        <p style={{ marginTop: "1.25rem", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
          Purchase links will be live once the book is published. Check back
          soon, or follow along on the <Link href="/">course site</Link> in the
          meantime.
        </p>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ borderBottom: "none", marginTop: "0" }}>What&apos;s Inside</h2>
        <ul>
          <li>Course overview and the eight-step modeling framework.</li>
          <li>
            Thirteen chapters covering matching, discounting, demand, associative
            learning, behavioral momentum, model comparison, model construction,
            probability, multilevel and time-series methods, dynamical systems,
            computational models, and machine learning.
          </li>
          <li>Thirty practice problems with worked answers.</li>
          <li>
            Appendices: key equations, model comparison guide, and a quick
            reference.
          </li>
          <li>Glossary of terms from mathematical modeling, statistics, and behavior science.</li>
        </ul>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ borderBottom: "none", marginTop: "0" }}>Who It&apos;s For</h2>
        <p>
          Doctoral students in behavior analysis, behavior science, and adjacent
          fields who want fluency in reading, evaluating, building, and
          communicating quantitative models of behavior. Self-study readers and
          instructors looking for a course-in-a-book are equally welcome.
        </p>
      </section>
    </div>
  );
}
