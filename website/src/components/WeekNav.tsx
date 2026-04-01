import Link from "next/link";

interface WeekNavProps {
  current: number;
  total?: number;
}

export default function WeekNav({ current, total = 13 }: WeekNavProps) {
  const prev = current > 1 ? current - 1 : null;
  const next = current < total ? current + 1 : null;

  return (
    <div className="week-nav">
      {prev ? (
        <Link href={`/weeks/week-${prev}`}>&larr; Week {prev}</Link>
      ) : (
        <span />
      )}
      <Link href="/weeks">All Weeks</Link>
      {next ? (
        <Link href={`/weeks/week-${next}`}>Week {next} &rarr;</Link>
      ) : (
        <span />
      )}
    </div>
  );
}
