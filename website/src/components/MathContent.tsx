"use client";

import { useEffect, useRef } from "react";
import katex from "katex";

interface MathContentProps {
  html: string;
}

export default function MathContent({ html }: MathContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Render any unprocessed LaTeX that survived as text nodes.
    // The server already runs rehype-katex, but this catches edge cases.
    const elements = ref.current.querySelectorAll(".math-inline, .math-display");
    elements.forEach((el) => {
      const tex = el.textContent ?? "";
      if (!tex) return;
      try {
        katex.render(tex, el as HTMLElement, {
          throwOnError: false,
          displayMode: el.classList.contains("math-display"),
        });
      } catch {
        // leave the raw TeX visible
      }
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className="prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
