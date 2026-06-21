import { getSyllabusContent } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import MathContent from "@/components/MathContent";

export const metadata = {
  title: "Syllabus — Introduction to Mathematical Modeling in Behavior Science",
};

export default async function SyllabusPage() {
  const content = getSyllabusContent();
  const html = await renderMarkdown(content);

  return (
    <div className="container page">
      <h1>Course Syllabus</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
        ABA 761 — Introduction to Mathematical Modeling in Behavior Science
      </p>
      <MathContent html={html} />
    </div>
  );
}
