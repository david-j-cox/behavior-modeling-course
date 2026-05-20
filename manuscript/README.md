# Manuscript

This folder is the Leanpub-native source for the printed/ebook version of *Mathematical and Computational Modeling in Behavior Science*. It is generated from canonical content under `/content` and should never be edited by hand. To change a chapter, edit the source markdown under `/content` and re-run the build.

## Build

From the repository root:

```
npm run build:leanpub
```

The script (`scripts/build-leanpub.ts`) reads every relevant file under `/content`, converts standard Markdown to Markua (Leanpub's flavor), and writes the result into this folder. Each run deletes and re-creates all generated files; only `templates/`, `images/`, and this `README.md` survive between runs.

Validate frontmatter first with `npm run validate` if you have just edited content.

## Layout

| File / Folder | Purpose |
| --- | --- |
| `Book.txt` | Chapter manifest read by Leanpub. Generated. |
| `Sample.txt` | Subset of chapters included in the free Leanpub sample. Generated. |
| `images/` | Copied from `website/public/images`. Generated. |
| `templates/` | Hand-edited source for the preface and book metadata. Persistent. |
| `preface.md` | Front matter (title page, preface, how-to-use). Generated from `templates/front-matter.md`. |
| `ch-NN-*.md` | Mainmatter chapters in reading order. Generated from `/content`. |
| `part-iii-problems.md`, `part-iii-answers.md` | Practice problems and worked solutions. Generated from `/content/problems` and `/content/answers`. |
| `app-X-*.md` | Backmatter appendices. Generated from `/content/appendices`. |
| `glossary.md` | Backmatter glossary. Generated from `/content/glossary/glossary.json`. |

## Content -> chapter mapping

| Source | Output |
| --- | --- |
| `content/course-overview.md` | `ch-01-overview.md` |
| `content/framework.md` | `ch-02-framework.md` |
| `content/weeks/week-N.md` | `ch-{N+2}-week-NN.md` (chapter number = week number + 2) |
| `content/readings/readings-week-NN.md` | Appended to each week's chapter as "Recommended Readings" |
| `content/labs/lab-week-NN.md` | Appended to each week's chapter as "Lab" section with run-this-lab callout |
| `content/problems/problem-NN.md` | Section in `part-iii-problems.md` |
| `content/answers/answer-NN.md` | Section in `part-iii-answers.md` |
| `content/appendices/*.md` | `app-{letter}-{slug}.md` |
| `content/glossary/glossary.json` | `glossary.md` |
| `content/syllabus.md` | Not included (course logistics, not book content). |

## Lab callouts and the companion URL

Every week chapter that has a corresponding lab brief ends with a "Lab" section that begins with a Markua aside pointing to:

```
https://www.behavioral-data-science.org/book/labs/week-NN
```

The base URL is defined in one place in `scripts/build-leanpub.ts` as the constant `LAB_URL_BASE`. If you ever change domains, edit that constant and rebuild.

The plan is to host redirects at `behavioral-data-science.org/book/labs/week-NN` that point to wherever the actual lab notebooks live (currently the Next.js site on Vercel). This keeps printed URLs permanent even if the course site moves.

## Markua conversion notes

The build performs these transforms from source Markdown to Markua:

- `![alt](/images/foo.png)` -> `![alt](images/foo.png)` (Markua resolves relative to the manuscript root).
- `$$ ... $$` display math -> `{$$} ... {/$$}`.
- `$ x $` inline math -> `{$$}x{/$$}`.
- Pandoc-style `{.unnumbered}` heading attributes are stripped from the preface.
- Lab sections get an `A>` Markua aside with the run-this-lab callout.
- All YAML frontmatter from source files is stripped; chapter titles come from frontmatter `title:` fields where present, otherwise from the `WEEK_SEQUENCE` table in `scripts/shared.ts`.

Other Markdown constructs pass through unchanged.

## Publishing to Leanpub

1. Sign in to leanpub.com and create a book.
2. Choose "Write in GitHub" mode and point it at this repository, with `manuscript/` as the manuscript folder.
3. Pick "Markua" as the writing mode.
4. Push the latest build (`npm run build:leanpub` then commit). Leanpub will pull and produce PDF/EPUB/MOBI within a minute or two.
5. Iterate: edit `/content`, rebuild, commit, preview.
6. Upload a cover image (1600 x 2400 px JPG) in the Leanpub dashboard.
7. Configure pricing and publish.

## Publishing to Kindle (KDP)

After the Leanpub build looks right:

1. Download the EPUB from Leanpub.
2. Create an account at kdp.amazon.com.
3. New title -> upload EPUB -> upload cover (KDP wants ~2560 x 1600 px).
4. Fill in title, subtitle, description, categories, keywords, and pricing.
5. Submit. Kindle goes live within 24 - 72 hours.
6. For a paperback, also upload the Leanpub PDF (or a print-tuned variant), select trim size (6 x 9 in is standard), and order a proof copy before publishing.

Do **not** enroll in KDP Select if you intend to keep selling the EPUB on Leanpub; Select requires Kindle-store exclusivity.

## Adding a new week

1. Add the week file at `content/weeks/week-NN.md` with frontmatter (`title`, `subtitle`, etc.).
2. Add an entry to `WEEK_SEQUENCE` in `scripts/shared.ts` with the next chapter number.
3. (Optional) Add `content/readings/readings-week-NN.md` and `content/labs/lab-week-NN.md`.
4. Run `npm run build:leanpub`.

## Adding a new appendix

1. Add `content/appendices/<slug>.md` with frontmatter `letter`, `title`, `slug`, `description`.
2. Run `npm run build:leanpub`. Appendices are picked up automatically in filename order; reorder by renaming files if needed.

## Updating the preface

Edit `manuscript/templates/front-matter.md` directly (it is treated as persistent source, not generated output) and rebuild.
