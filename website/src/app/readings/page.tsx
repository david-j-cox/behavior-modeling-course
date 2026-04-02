import { getAllReadings } from "@/lib/content";
import ReadingsContent from "./ReadingsContent";

export const metadata = {
  title: "Course Readings — Mathematical & Computational Modeling in Behavior Science",
};

export default function ReadingsPage() {
  const weeks = getAllReadings();
  return <ReadingsContent weeks={weeks} />;
}
