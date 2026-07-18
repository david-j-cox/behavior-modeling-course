import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Book | Modeling in Behavior Science",
  description:
    "Introduction to Mathematical Modeling in Behavior Science is in progress. The ebook and paperback will be available once all modules are finished and reviewed.",
};

export default function BookPage() {
  return (
    <div className="container page">
      <h1>The Book</h1>
      <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", maxWidth: "38rem" }}>
        The full course, in a form you can read on a plane or mark up with a pen.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <div
          className="card"
          style={{ display: "block", padding: "1.5rem", borderLeft: "4px solid var(--color-link)" }}
        >
          <div className="card-title" style={{ marginBottom: "0.5rem" }}>
            Coming soon
          </div>
          <p style={{ margin: 0 }}>
            The book is still being written and reviewed. The ebook and
            paperback editions will be available once all modules are finished.
            In the meantime, all of the content is free on the{" "}
            <Link href="/">course site</Link>.
          </p>
        </div>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ borderBottom: "none", marginTop: "0" }}>About the Book</h2>
        <p>
          <em>Introduction to Mathematical Modeling in Behavior Science</em> is
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
