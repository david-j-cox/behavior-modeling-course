import { notFound } from "next/navigation";
import { getWeek, getWeekSlugs, getInstructorNote } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import InstructorContent from "./InstructorContent";

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
    <InstructorContent
      slug={slug}
      weekNumber={weekData.meta.number}
      title={weekData.meta.title}
      html={html}
    />
  );
}
