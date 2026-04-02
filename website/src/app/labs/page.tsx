import { getAllLabs } from "@/lib/content";
import { renderMarkdown } from "@/lib/markdown";
import LabsContent from "./LabsContent";

export const metadata = {
  title: "Lab Assignments — Mathematical & Computational Modeling in Behavior Science",
};

export default async function LabsPage() {
  const labs = await Promise.all(
    getAllLabs().map(async (lab) => ({
      week: lab.meta.week,
      title: lab.meta.title,
      description: lab.meta.description,
      notebooks: lab.meta.notebooks,
      instructorNotebooks: lab.meta.instructorNotebooks || [],
      dataFiles: lab.meta.dataFiles,
      html: await renderMarkdown(lab.content),
    }))
  );

  return <LabsContent labs={labs} />;
}
