import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Introduction to Mathematical Modeling in Behavior Science",
  description:
    "Course companion for doctoral-level mathematical and computational modeling in behavior science.",
};

const themeInitScript = `
(function(){try{
  var s=localStorage.getItem('theme');
  var d=s?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  if(s==='system'){d=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
  document.documentElement.setAttribute('data-theme',d);
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-brand">
              Modeling in Behavior Science
            </Link>
            <ul className="nav-links">
              <li>
                <Link href="/syllabus">Syllabus</Link>
              </li>
              <li>
                <Link href="/framework">Framework</Link>
              </li>
              <li>
                <Link href="/weeks">Weeks</Link>
              </li>
              <li>
                <Link href="/labs">Labs</Link>
              </li>
              <li>
                <Link href="/problems">Problems</Link>
              </li>
              <li>
                <Link href="/readings">Readings</Link>
              </li>
              <li>
                <Link href="/glossary">Glossary</Link>
              </li>
              <li>
                <Link href="/appendices">Appendices</Link>
              </li>
              <li>
                <Link href="/book">Get the Book</Link>
              </li>
            </ul>
            <ThemeToggle />
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            Introduction to Mathematical Modeling in Behavior Science
            &mdash; A doctoral course companion.
          </div>
        </footer>
      </body>
    </html>
  );
}
