"use client";

import { useEffect, useRef } from "react";
import katex from "katex";

/**
 * Client-side KaTeX post-processor. Wraps server-rendered HTML content
 * and applies KaTeX rendering to any unprocessed math elements.
 */
export default function MathProcessor({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

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
  }, []);

  return <div ref={ref}>{children}</div>;
}
