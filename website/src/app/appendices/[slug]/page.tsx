import { notFound } from "next/navigation";
import { getAppendix, getAllAppendices } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import MathContent from "@/components/MathContent";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAppendices().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  try {
    const { meta } = getAppendix(slug);
    return { title: `Appendix ${meta.letter}: ${meta.title}` };
  } catch {
    return { title: "Appendix Not Found" };
  }
}

export default async function AppendixPage({ params }: Props) {
  const { slug } = await params;
  let data;
  try {
    data = getAppendix(slug);
  } catch {
    notFound();
  }

  const { meta, content } = data;
  const html = await renderMarkdown(content);

  return (
    <div className="container page">
      <div className="card-number" style={{ marginBottom: "0.25rem" }}>
        Appendix {meta.letter}
      </div>
      <h1>{meta.title}</h1>
      <MathContent html={html} />
      <div style={{ marginTop: "2rem" }}>
        <Link href="/appendices">&larr; All Appendices</Link>
      </div>
    </div>
  );
}
