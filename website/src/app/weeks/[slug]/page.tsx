import { notFound } from "next/navigation";
import Link from "next/link";
import { getWeek, getWeekSlugs, getInstructorNote } from "@/lib/content";
import { renderMarkdown, extractToc } from "@/lib/markdown";
import MathContent from "@/components/MathContent";
import TableOfContents from "@/components/TableOfContents";
import WeekNav from "@/components/WeekNav";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getWeekSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = getWeek(slug);
  if (!data) return { title: "Week Not Found" };
  return { title: `Week ${data.meta.number}: ${data.meta.title}` };
}

export default async function WeekPage({ params }: Props) {
  const { slug } = await params;
  const data = getWeek(slug);
  if (!data) notFound();

  const { meta, content } = data;
  const html = await renderMarkdown(content);
  const toc = extractToc(content);
  const hasInstructorNotes = getInstructorNote(meta.number) !== null;

  return (
    <div className="container page">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.25rem",
        }}
      >
        <div className="card-number">Week {meta.number}</div>
        {hasInstructorNotes && (
          <Link
            href={`/weeks/${meta.slug}/instructor`}
            className="badge badge-step"
            style={{ textDecoration: "none", fontSize: "0.85rem" }}
          >
            Instructor Notes
          </Link>
        )}
      </div>
      <h1>{meta.title}</h1>
      {meta.subtitle && (
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--color-text-muted)",
            marginBottom: "0.5rem",
          }}
        >
          {meta.subtitle}
        </p>
      )}
      {meta.keyEquations.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: "2rem",
          }}
        >
          {meta.keyEquations.map((eq) => (
            <span key={eq} className="badge badge-step">
              {eq}
            </span>
          ))}
        </div>
      )}
      <TableOfContents entries={toc} />
      <MathContent html={html} />
      <WeekNav current={meta.number} />
    </div>
  );
}
