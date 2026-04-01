import { getFrameworkContent } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import MathContent from "@/components/MathContent";

export const metadata = {
  title: "The 8-Step Modeling Framework",
};

export default async function FrameworkPage() {
  const raw = getFrameworkContent();
  const html = await renderMarkdown(raw);

  return (
    <div className="container page">
      <h1>The 8-Step Modeling Framework</h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
        A systematic method adapted from engineering and the physical sciences,
        translated into behavior-science language, and applied to every model in
        this course.
      </p>
      <MathContent html={html} />
    </div>
  );
}
