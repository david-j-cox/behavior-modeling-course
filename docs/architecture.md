# Repository Architecture

## Overview

This monorepo contains course materials for Introduction to Mathematical Modeling in Behavior Science. The key design principle is **single-source content**: all course content lives in `/content/`, and both the handbook manuscript generator and the companion website read from that directory.

## Directory Structure

```
behavior-modeling-course/
  content/                  # CANONICAL content (single source of truth)
    weeks/                  # week-1.md through week-13.md
    problems/               # problem-01.md through problem-NN.md
    answers/                # answer-01.md through answer-NN.md
    appendices/             # key-equations.md, etc.
    glossary/               # glossary.json
    framework.md            # The 8-step modeling framework
    course-overview.md      # Course overview and sequence
  manuscript/               # Handbook manuscript generation
    templates/              # Chapter wrappers, front matter, metadata
    build/                  # Generated output (gitignored)
    pagebreak.lua           # Pandoc Lua filter for page breaks
  scripts/                  # Build and validation scripts (TypeScript)
    shared.ts               # Shared types, constants, utilities
    build-manuscript.ts     # Assembles handbook from content + templates
    validate-metadata.ts    # Validates all frontmatter
    generate-problems.ts    # Generates standalone problems document
    build-website.sh        # Validates then builds the website
  website/                  # Next.js companion website
    src/app/                # App Router pages
    src/components/         # React components
    src/lib/                # Content loading, markdown rendering, types
  docs/                     # Project documentation
```

## Content Flow

```
content/weeks/week-10.md
        |                    \
        v                     v
  scripts/build-manuscript   website/src/lib/content.ts
        |                     |
        v                     v
  manuscript/build/          website/.next/
  handbook.md                (static site)
        |
        v
  Pandoc --> handbook.docx
```

## How the Website Reads Content

The file `website/src/lib/content.ts` resolves the content directory via:

```typescript
const contentDir = path.resolve(
  process.cwd(),
  process.env.CONTENT_DIR || path.join("..", "content")
);
```

When running `cd website && npm run dev`, `process.cwd()` is `website/`, so `../content` resolves to the canonical content directory. The `CONTENT_DIR` env var allows overriding this path for non-standard setups.

## How the Manuscript Builder Works

`scripts/build-manuscript.ts` performs these steps:

1. Emits YAML metadata from `manuscript/templates/metadata.yaml`
2. Emits front matter from `manuscript/templates/front-matter.md`
3. For each of the 13 weeks, reads `content/weeks/week-N.md`, strips frontmatter, shifts headings down one level, and wraps in a chapter heading with pagebreak markers
4. Reads all problems from `content/problems/`, emits statements and answers as separate sections
5. Reads appendices from `content/appendices/`
6. Writes the assembled markdown to `manuscript/build/handbook.md`

The output can then be converted to DOCX via Pandoc:

```bash
pandoc manuscript/build/handbook.md -o handbook.docx \
  --lua-filter=manuscript/pagebreak.lua \
  --toc --number-sections
```

## The 13-Week Sequence

The canonical week sequence is defined in `scripts/shared.ts` as `WEEK_SEQUENCE`. This maps week numbers (1-13) to chapter numbers (4-16) and titles. Both the manuscript builder and validation script reference this constant.

## Content Validation

`scripts/validate-metadata.ts` checks:

- All 13 weeks exist with valid frontmatter
- No duplicate week numbers or slugs
- All problems have required fields and valid difficulty levels
- Every problem has a corresponding answer file
- Appendices have required fields
- Glossary JSON is valid and has no duplicate terms
- Framework content file exists and is non-empty
