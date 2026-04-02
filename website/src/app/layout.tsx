import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathematical & Computational Modeling in Behavior Science",
  description:
    "Course companion for doctoral-level mathematical and computational modeling in behavior science.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
                <Link href="/problems">Problems</Link>
              </li>
              <li>
                <Link href="/glossary">Glossary</Link>
              </li>
              <li>
                <Link href="/appendices">Appendices</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            Mathematical &amp; Computational Modeling in Behavior Science
            &mdash; A doctoral course companion.
          </div>
        </footer>
      </body>
    </html>
  );
}
