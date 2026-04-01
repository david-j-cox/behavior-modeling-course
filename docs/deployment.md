# Deployment Guide

## Website Deployment (Vercel)

### Quick Deploy

1. Push the repository to GitHub
2. Connect the repository to Vercel
3. Set the root directory to `website`
4. Set the environment variable: `CONTENT_DIR=../content`
5. Deploy

### Vercel Configuration

In your Vercel project settings:

- **Framework Preset:** Next.js
- **Root Directory:** `website`
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Environment Variables:**
  - `CONTENT_DIR` = `../content`

### Local Production Build

```bash
cd website
npm run build
npm start
```

## Manuscript Generation

### Prerequisites

- [Pandoc](https://pandoc.org/) 2.19+ (install via `brew install pandoc` on macOS)
- Node.js 18+

### Generate the Handbook

```bash
# From the repository root:
npm run build:manuscript

# Output: manuscript/build/handbook.md
```

### Convert to DOCX

```bash
cd manuscript
pandoc build/handbook.md \
  -o build/handbook.docx \
  --lua-filter=pagebreak.lua \
  --toc \
  --toc-depth=3 \
  --number-sections \
  -f markdown+pipe_tables+fenced_divs+yaml_metadata_block+tex_math_dollars

# Optional: use a custom reference template
pandoc build/handbook.md \
  -o build/handbook.docx \
  --reference-doc=custom-reference.docx \
  --lua-filter=pagebreak.lua \
  --toc --number-sections
```

### Generate Practice Problems Document

```bash
npm run build:problems
# Output: manuscript/build/practice-problems.md
```

## Full Build Pipeline

```bash
# Validate content, build manuscript, build website
npm run build:all
```
