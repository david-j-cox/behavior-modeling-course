import MathProcessor from "./MathProcessor";

interface MathContentProps {
  html: string;
}

export default function MathContent({ html }: MathContentProps) {
  return (
    <MathProcessor>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </MathProcessor>
  );
}
