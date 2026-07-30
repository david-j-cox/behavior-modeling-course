import type { TocEntry } from "@/lib/markdown";

interface Props {
  entries: TocEntry[];
}

interface TocGroup {
  parent: TocEntry;
  children: TocEntry[];
}

// Roughly how many characters fit on one line of a column. Used only to guess
// which entries wrap onto a second line when balancing the two columns.
const CHARS_PER_LINE = 46;
const CHARS_PER_LINE_NESTED = 44;

// Nest each heading with its subheadings so the two never end up in different
// columns.
function groupEntries(entries: TocEntry[]): TocGroup[] {
  const groups: TocGroup[] = [];

  for (const entry of entries) {
    const current = groups[groups.length - 1];
    if (entry.level > 2 && current) {
      current.children.push(entry);
    } else {
      groups.push({ parent: entry, children: [] });
    }
  }

  return groups;
}

function lineCount(text: string, nested: boolean): number {
  const width = nested ? CHARS_PER_LINE_NESTED : CHARS_PER_LINE;
  return Math.max(1, Math.ceil(text.length / width));
}

function groupHeight(group: TocGroup): number {
  return (
    lineCount(group.parent.text, false) +
    group.children.reduce((sum, child) => sum + lineCount(child.text, true), 0)
  );
}

// Split the groups across two columns. The browser's own column balancing can
// leave the right column longer than the left, which reads oddly, so the split
// is done here: fill the left until it holds at least half the total height,
// which puts any leftover on the left rather than the right.
function splitIntoColumns(groups: TocGroup[]): [TocGroup[], TocGroup[]] {
  const total = groups.reduce((sum, group) => sum + groupHeight(group), 0);
  const target = Math.ceil(total / 2);

  const left: TocGroup[] = [];
  const right: TocGroup[] = [];
  let filled = 0;

  for (const group of groups) {
    if (filled < target) {
      left.push(group);
      filled += groupHeight(group);
    } else {
      right.push(group);
    }
  }

  return [left, right];
}

function Column({ groups }: { groups: TocGroup[] }) {
  if (groups.length === 0) return null;

  return (
    <ul className="toc-list">
      {groups.map((group) => (
        <li key={group.parent.id} className="toc-group">
          <div className="toc-item">
            <a href={`#${group.parent.id}`}>{group.parent.text}</a>
          </div>
          {group.children.length > 0 && (
            <ul className="toc-sublist">
              {group.children.map((child) => (
                <li key={child.id} className="toc-item-nested">
                  <a href={`#${child.id}`}>{child.text}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function TableOfContents({ entries }: Props) {
  if (entries.length === 0) return null;

  const [left, right] = splitIntoColumns(groupEntries(entries));

  return (
    <nav className="toc">
      <div className="toc-title">On this page</div>
      <div className="toc-columns">
        <Column groups={left} />
        <Column groups={right} />
      </div>
    </nav>
  );
}
