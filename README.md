# Introduction to Mathematical Modeling in Behavior Science

A unified, open-source repository for a doctoral-level course (ABA 761) on building, evaluating, and applying formal models of behavior-environment relations.

**Live site:** Deployed on Vercel

## What's on the site

| Section | Description |
|:--------|:------------|
| **Syllabus** | Full course policies, grading, assignment descriptions, and topical outline |
| **Framework** | The 8-step modeling framework used throughout the course |
| **Weeks** | 13 weeks of content with key models, equations, worked examples, reading guides, and section navigation |
| **Labs** | Jupyter notebooks and downloadable datasets for hands-on exercises (Weeks 2-12) |
| **Problems** | 16 practice problems (Introductory through Advanced) with worked answers |
| **Readings** | ~50 research articles organized by week (required + supplemental) |
| **Glossary** | 150+ searchable terms with definitions |
| **Appendices** | Key equations, model comparison guide, quick reference |

## Course structure

| Week | Topic | Key Models |
|:-----|:------|:-----------|
| 1 | Introduction to Modeling in Behavior Science | Linear model, verbal models |
| 2 | Historical Models — Matching and Discounting | Herrnstein's hyperbola, GME, Mazur's hyperbolic |
| 3 | Historical Models — Demand | Hursh-Silberberg exponential demand |
| 4 | Associative Learning Models | Rescorla-Wagner, Mackintosh attention |
| 5 | Behavioral Momentum and Response Persistence | Behavioral momentum theory |
| 6 | Model Comparisons | AIC, BIC, cross-validation |
| 7 | How to Construct a Model | Sensitivity analysis, lifecycle diagrams |
| 8 | Probability Theory and Probabilistic Models | Bayes' theorem, Monte Carlo |
| 9 | Multilevel Modeling and Time-Series Forecasting | HLM, time-series decomposition |
| 10 | Dynamical Systems Models | Logistic ODE, phase portraits |
| 11 | Computational Models | Q-learning, agent-based models |
| 12 | Machine Learning and Artificial Intelligence | Decision trees, neural networks |
| 13 | Final Project Presentations | Course integration |

## The 8-step modeling framework

Every week uses this framework:

1. Get the behavioral phenomenon clearly in mind
2. Define the behavioral processes and scope
3. Identify quantitative laws and functional relationships
4. State all simplifying assumptions explicitly
5. Write the model verbally, then mathematically
6. Verify dimensional consistency
7. Specify starting values and constraints
8. Check the math, test against data, derive predictions

## Access control

The site is open-source by design. Most content is publicly accessible. Two tiers of password protection gate sensitive materials:

- **Student password** — Required for PDF article downloads (copyright protection)
- **Instructor password** — Required for instructor notes and dataset creation notebooks

Passwords are set via environment variables (`STUDENT_PASSWORD`, `INSTRUCTOR_PASSWORD`).

## Tech stack

- **Framework:** Next.js 15 (App Router, static generation)
- **Content:** Markdown with YAML frontmatter, processed via unified/remark/rehype
- **Math:** KaTeX for LaTeX rendering
- **Styling:** Custom CSS with CSS variables (no Tailwind)
- **Deployment:** Vercel (standalone output)

## Repository structure

```
behavior-modeling-course/
├── content/                # All course content (markdown + YAML)
│   ├── weeks/              # Week 1-13 content files
│   ├── problems/           # 16 practice problems
│   ├── answers/            # Worked solutions
│   ├── labs/               # Lab metadata (week, notebooks, data files)
│   ├── readings/           # Reading metadata (citations, required/supplemental)
│   ├── instructor/         # Instructor notes (password-gated)
│   ├── appendices/         # Reference materials
│   ├── glossary/           # Glossary entries (JSON)
│   ├── framework.md        # 8-step framework
│   ├── syllabus.md         # Course syllabus
│   └── course-overview.md  # Course overview
├── website/                # Next.js application
│   ├── src/
│   │   ├── app/            # Routes (syllabus, weeks, labs, problems, etc.)
│   │   ├── components/     # Reusable components (MathContent, PasswordGate, etc.)
│   │   └── lib/            # Content loaders, markdown pipeline, types
│   └── public/
│       ├── labs/            # Jupyter notebooks + CSV data files
│       ├── readings/        # PDF articles (by week)
│       └── images/          # Embedded images
```

## Local development

```bash
cd website
npm install
npm run dev
```

Create a `.env.local` with:

```
STUDENT_PASSWORD=your-student-password
INSTRUCTOR_PASSWORD=your-instructor-password
```

## Deployment

Push to GitHub, connect to Vercel, set root directory to `website`. Add environment variables for passwords.

## License

Course content is provided for educational use. Research articles in `website/public/readings/` are copyrighted by their respective publishers and are provided for enrolled students only.
