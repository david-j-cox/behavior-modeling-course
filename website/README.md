# Mathematical & Computational Modeling in Behavior Science

Companion website for a doctoral-level course on building, evaluating, and applying formal models of behavior-environment relations.

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript**
- **KaTeX** for math rendering
- **Markdown** content with gray-matter frontmatter
- Deployable on **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site Structure

| Route | Description |
|-------|-------------|
| `/` | Home page with course overview |
| `/framework` | The 8-step modeling framework |
| `/weeks` | Week index (13 weeks) |
| `/weeks/week-N` | Individual week pages |
| `/problems` | Problem browser with filtering |
| `/answers` | Worked answers |
| `/glossary` | Searchable glossary |
| `/appendices` | Appendix pages |

## Content

All course content lives in `src/content/`:

```
src/content/
  framework.md          # 8-step framework page
  glossary.json         # Glossary entries
  weeks/                # Weekly chapter markdown files
    week-1.md
    week-10.md          # Dynamical Systems (fully implemented)
    ...
  problems/             # Practice problem statements
    problem-01.md
    ...
  answers/              # Worked solutions
    answer-01.md
    ...
  appendices/           # Reference materials
    key-equations.md
    model-comparison-guide.md
    quick-reference.md
```

### Adding a New Week

Create `src/content/weeks/week-N.md` with YAML frontmatter:

```yaml
---
slug: "week-N"
number: N
title: "Week Title"
subtitle: "Optional subtitle"
description: "Brief description for the card on the week index."
keyModels: ["Model A", "Model B"]
keyEquations: ["equation label"]
---

Markdown content here. Use $...$ for inline math and $$...$$ for display math.
```

### Adding a Problem

Create `src/content/problems/problem-NN.md`:

```yaml
---
id: NN
title: "Problem Title"
week: N
difficulty: "Introductory"  # or Intermediate, Advanced
modelingSteps: [1, 2, 3]
tags: ["topic"]
---

Problem statement in markdown.
```

And the corresponding `src/content/answers/answer-NN.md`:

```yaml
---
id: NN
---

Worked solution in markdown.
```

## Math Rendering

Equations use KaTeX via remark-math and rehype-katex. Use standard LaTeX syntax:

- Inline: `$V = A/(1 + kD)$`
- Display: `$$\frac{dx}{dt} = r \cdot x \cdot \left(1 - \frac{x}{K}\right)$$`

## Deployment

Push to GitHub and connect to Vercel. No additional configuration needed.

```bash
# Or deploy directly
npx vercel
```

## License

This project is open source. Course content is provided for educational use.
