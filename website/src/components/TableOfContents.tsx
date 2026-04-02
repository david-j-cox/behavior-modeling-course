import type { TocEntry } from "@/lib/markdown";

interface Props {
  entries: TocEntry[];
}

export default function TableOfContents({ entries }: Props) {
  if (entries.length === 0) return null;

  return (
    <nav className="toc">
      <div className="toc-title">On this page</div>
      <ul className="toc-list">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className={entry.level === 3 ? "toc-item-nested" : "toc-item"}
          >
            <a href={`#${entry.id}`}>{entry.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
