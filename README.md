# Mathematical & Computational Modeling in Behavior Science

A unified, open-source repository for a doctoral-level course on building, evaluating, and applying formal models of behavior-environment relations.

This repository contains **canonical course content** shared by two outputs:

- A **course handbook** (assembled markdown, convertible to DOCX via Pandoc)
- A **companion website** (Next.js, deployable on Vercel)

Both read from the same `/content/` directory -- a single source of truth.

## Quick Start

```bash
# Install dependencies
npm install
cd website && npm install && cd ..

# Validate all content
npm run validate

# Run the website locally
npm run dev

# Build the handbook manuscript
npm run build:manuscript

# Build everything
npm run build:all
```

## Repository Structure

```
content/                # Canonical course content
  weeks/                # 13 weekly chapter files (markdown + frontmatter)
  problems/             # Practice problem statements
  answers/              # Worked solutions
  appendices/           # Reference materials
  glossary/             # Searchable glossary (JSON)
  framework.md          # The 8-step modeling framework
  course-overview.md    # Course overview and learning objectives

manuscript/             # Handbook generation
  templates/            # Front matter, metadata, chapter wrappers
  build/                # Generated output (gitignored)
  pagebreak.lua         # Pandoc Lua filter

scripts/                # Build and validation (TypeScript)
  build-manuscript.ts   # Assembles handbook from content + templates
  validate-metadata.ts  # Validates all frontmatter and cross-references
  generate-problems.ts  # Generates standalone problems document
  build-website.sh      # Validates, then builds the website

website/                # Next.js companion site
  src/app/              # App Router pages
  src/components/       # React components (MathContent, WeekNav, etc.)
  src/lib/              # Content loading, markdown/KaTeX rendering

docs/                   # Architecture and deployment documentation
```

## Course Sequence

| Week | Topic | Key Model |
|:-----|:------|:----------|
| 1 | Introduction to Modeling | R = kt |
| 2 | Matching Law | Herrnstein's hyperbola |
| 3 | Discounting | Mazur's hyperbolic model |
| 4 | Demand | Hursh-Silberberg equation |
| 5 | Respondent Conditioning | Rescorla-Wagner |
| 6 | Model Comparisons | AIC, BIC |
| 7 | How to Construct a Model | Sensitivity analysis |
| 8 | Probability & Probabilistic Models | Poisson, Bayes |
| 9 | Multilevel & Time-Series | HLM, ARIMA |
| 10 | **Dynamical Systems** | Logistic ODE |
| 11 | Computational Models | Q-learning |
| 12 | Machine Learning & AI | Decision trees, neural nets |
| 13 | Final Projects | Course integration |

## The 8-Step Modeling Framework

Every module uses this framework:

1. Get the behavioral phenomenon clearly in mind
2. Define the behavioral processes and scope
3. Identify quantitative laws and functional relationships
4. State all simplifying assumptions explicitly
5. Write the model verbally, then mathematically
6. Verify dimensional consistency
7. Specify starting values and constraints
8. Check the math, test against data, derive predictions

## Tech Stack

- **Content:** Markdown with YAML frontmatter, LaTeX math (`$...$`, `$$...$$`)
- **Website:** Next.js 15, TypeScript, KaTeX, App Router
- **Manuscript:** Pandoc with Lua filter for page breaks
- **Scripts:** TypeScript (via tsx), gray-matter for frontmatter parsing
- **Validation:** Custom script checking all frontmatter, cross-references, and completeness

## Adding Content

All content goes in `/content/`. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Add a week

Create `content/weeks/week-N.md` with frontmatter:

```yaml
---
slug: "week-N"
number: N
title: "Topic Title"
subtitle: ""
description: "Brief description."
keyModels: ["Model Name"]
keyEquations: ["equation label"]
---
```

### Add a problem

Create `content/problems/problem-NN.md` and `content/answers/answer-NN.md`.

### Validate

```bash
npm run validate
```

## Deployment

**Website:** Push to GitHub, connect to Vercel, set root directory to `website`.

**Handbook:** Run `npm run build:manuscript`, then convert with Pandoc:

```bash
pandoc manuscript/build/handbook.md -o handbook.docx \
  --lua-filter=manuscript/pagebreak.lua \
  --toc --number-sections
```

See [docs/deployment.md](docs/deployment.md) for full instructions.

## License

[MIT](LICENSE)
