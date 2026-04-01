import { notFound } from "next/navigation";
import { getWeek, getWeekSlugs } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import MathContent from "@/components/MathContent";
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

  return (
    <div className="container page">
      <div className="card-number" style={{ marginBottom: "0.25rem" }}>
        Week {meta.number}
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
      <MathContent html={html} />
      <WeekNav current={meta.number} />
    </div>
  );
}
