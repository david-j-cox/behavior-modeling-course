import { getAllReadings } from "@/lib/content";
import ReadingsContent from "./ReadingsContent";

export const metadata = {
  title: "Course Readings — Introduction to Mathematical Modeling in Behavior Science",
};

export default function ReadingsPage() {
  const weeks = getAllReadings();
  return <ReadingsContent weeks={weeks} />;
}
