import parse from "html-react-parser";

interface MathContentProps {
  html: string;
}

export default function MathContent({ html }: MathContentProps) {
  return <div className="prose">{parse(html)}</div>;
}
