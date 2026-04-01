# Contributing

Thank you for your interest in contributing to the Mathematical & Computational Modeling in Behavior Science course materials.

## How to Contribute

### Reporting Issues

If you find an error in the content (incorrect equation, typo, unclear explanation), please open a GitHub issue with:

- The file path where the error appears
- A description of the error
- A suggested correction (if you have one)

### Adding or Improving Content

1. Fork the repository
2. Create a branch: `git checkout -b add-week-N-content`
3. Make your changes in the `content/` directory
4. Run validation: `npm run validate`
5. Test the website: `npm run dev`
6. Submit a pull request

### Content Guidelines

**Canonical content lives in `/content/`.** Both the handbook manuscript and the website read from this directory. Do not place content directly in `manuscript/` or `website/`.

**Frontmatter is required.** Every markdown file in `content/` must have YAML frontmatter matching the expected schema. Run `npm run validate` to check.

**Math notation.** Use standard LaTeX syntax: `$...$` for inline math, `$$...$$` for display math. Both KaTeX (website) and Pandoc (manuscript) support this syntax.

**Plain-language explanations.** Every display equation should be followed by a plain-language interpretation. This is a core pedagogical principle of the course.

**No fabricated citations.** Do not invent references. If you want to cite a source, verify it exists.

### Week Content Structure

Each week file (`content/weeks/week-N.md`) should include:

- YAML frontmatter (slug, number, title, subtitle, description, keyModels, keyEquations)
- Why This Topic Matters
- Core Concepts
- Main Model Families (with equations and plain-language explanations)
- Applying the 8-Step Framework (all 8 steps)
- Worked Example (with numerical calculations)
- Assumptions and Limitations
- Connection to Empirical Behavior Science
- Exercises for Reflection
- Key Takeaways

### Problem Structure

Problem files (`content/problems/problem-NN.md`) need:

- Frontmatter: id, title, week, difficulty, modelingSteps, tags
- Problem statement only (no solution)

Answer files (`content/answers/answer-NN.md`) need:

- Frontmatter: id
- Complete worked solution

### Running Locally

```bash
# Install dependencies
npm install
cd website && npm install && cd ..

# Validate all content
npm run validate

# Run the website
npm run dev

# Build the manuscript
npm run build:manuscript
```

## Code of Conduct

Be respectful, constructive, and focused on improving the educational materials. This project serves doctoral students learning quantitative modeling -- contributions should prioritize clarity and accuracy.
