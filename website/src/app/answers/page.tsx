import { getAllProblems, getAnswer } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import AnswersContent from "./AnswersContent";

export const metadata = { title: "Worked Answers" };

export default async function AnswersPage() {
  const problems = getAllProblems();

  const items = await Promise.all(
    problems.map(async (p) => {
      const answerRaw = getAnswer(p.meta.id);
      const answerHtml = answerRaw ? await renderMarkdown(answerRaw) : null;
      return {
        id: p.meta.id,
        title: p.meta.title,
        week: p.meta.week,
        difficulty: p.meta.difficulty,
        answerHtml,
      };
    })
  );

  return <AnswersContent items={items} />;
}
