import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

// remark-math only produces display math when the $$ delimiters sit on their own
// lines. A single line of the form $$...$$ is parsed as inline math instead, so
// it renders left-aligned inside the paragraph rather than as a centred block.
// The course content is written the single-line way throughout (week 9 is the
// only file using the fenced form), and Pandoc and GitHub both accept it, so
// normalise those lines before parsing rather than rewriting the content.
function normaliseDisplayMath(markdown: string): string {
  const lines = markdown.split("\n");
  const out: string[] = [];
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      out.push(line);
      continue;
    }

    // A whole line that opens and closes with $$ and has something in between.
    // Trailing punctuation is kept: an equation is part of the sentence around
    // it, so the mark moves inside the display where it renders with the
    // equation rather than being stranded on its own line.
    const match = inCodeBlock
      ? null
      : line.match(/^[ \t]*\$\$(.+?)\$\$([.,;:]*)[ \t]*$/);
    if (match && match[1].trim().length > 0) {
      out.push("$$", match[1].trim() + match[2], "$$");
    } else {
      out.push(line);
    }
  }

  return out.join("\n");
}

export async function renderMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(normaliseDisplayMath(content));

  return result.toString();
}

export interface TocEntry {
  id: string;
  text: string;
  level: number;
}

export function extractToc(markdown: string): TocEntry[] {
  const entries: TocEntry[] = [];
  const lines = markdown.split("\n");
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/\*\*/g, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      entries.push({ id, text, level });
    }
  }

  return entries;
}
