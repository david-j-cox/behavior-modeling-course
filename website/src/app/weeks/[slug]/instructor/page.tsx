import { notFound } from "next/navigation";
import { getWeek, getWeekSlugs, getInstructorNote } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import MathContent from "@/components/MathContent";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getWeekSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = getWeek(slug);
  if (!data) return { title: "Not Found" };
  return {
    title: `Instructor Notes: Week ${data.meta.number} — ${data.meta.title}`,
  };
}

export default async function InstructorNotePage({ params }: Props) {
  const { slug } = await params;
  const weekData = getWeek(slug);
  if (!weekData) notFound();

  const note = getInstructorNote(weekData.meta.number);
  if (!note) notFound();

  const html = await renderMarkdown(note.content);

  return (
    <div className="container page">
      <div style={{ marginBottom: "1.5rem" }}>
        <Link
          href={`/weeks/${slug}`}
          style={{ color: "var(--color-primary)", textDecoration: "none" }}
        >
          &larr; Back to Week {weekData.meta.number}
        </Link>
      </div>
      <div className="card-number" style={{ marginBottom: "0.25rem" }}>
        Week {weekData.meta.number} &mdash; Instructor Notes
      </div>
      <h1>{weekData.meta.title}</h1>
      <MathContent html={html} />
    </div>
  );
}
