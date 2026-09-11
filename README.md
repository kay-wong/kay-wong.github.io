# Research notebook

A fresh, writing-first Astro blog inspired by Tone's restrained typography. Static HTML, plain CSS, system fonts, Markdown/MDX, and minimal browser JavaScript.

## Local development

For this already-configured workspace, rebuild after editing with:

```sh
sh scripts/rebuild.sh
```

Run it from the project directory, then refresh the localhost tab. This uses Node from your PATH or the existing Codex bundled runtime. It rebuilds the files served by the current preview; it does not start a server. On a fresh machine, follow the installation steps below.

Install Node.js 22.12 or newer and pnpm 11, then:

```sh
pnpm install
pnpm dev
```

Open http://localhost:4321/. Changes refresh automatically. Stop with Ctrl+C.

```sh
pnpm check
pnpm build
pnpm test:build
pnpm preview
```

## Make it yours

- Edit `src/site.ts`: name, descriptions, GitHub link, email, and default social image.
- Edit the introduction in `src/pages/index.astro` and biography in `src/pages/about.astro`.
- Replace the three clearly labeled example posts in `src/content/posts/`.
- Adjust light/dark design tokens and typography in `src/styles/global.css`.
- Replace `public/social-default.png` with your own 1200×630 PNG/JPEG.

## Writing

Add `.md` or `.mdx` files in `src/content/posts/`. Their filenames become `/blog/filename/`. Nested folders are supported. Frontmatter:

```yaml
---
title: My post
description: A short summary for the index, feed, and search engines.
date: 2026-09-11
updated: 2026-09-12 # optional
tags: [Machine learning, Notes]
draft: false
toc: true
comments: false
commentId: my-stable-post-id # optional; preserve this when renaming a post
socialImage: /images/my-post.png # optional; relative to public/, or absolute https URL
socialImageAlt: A description of the image
---
```

Omit `socialImage` to use the site fallback. Images supplied in frontmatter are for sharing and are not automatically rendered as article banners. Drafts and future-dated posts are excluded from pages, index, RSS, and sitemap. Future posts require a rebuild to publish. Markdown supports tables, footnotes, highlighted code, and KaTeX math (`$inline$` / `$$display$$`). MDX supports static Astro components; see the included callout example. For body asset links under a GitHub project path, use relative links or import `path()` from `src/lib/urls.ts` in MDX.

For a restrained quantitative result in an MDX post, import and use the finding component:

```mdx
import Finding from '../../components/Finding.astro';

<Finding
  value="Top 0.27%"
  interpretation="The variant ranks among the highest predicted molecular impacts."
  label="AlphaGenome result"
/>
```

For a captioned figure, import the component and image. Set `size` to `compact`, `prose`, or `wide`. The default is `prose`; reserve `wide` for landscape figures that benefit from leaving the text column:

```mdx
import Figure from '../../components/Figure.astro';
import resultFigure from './my-post-assets/result.png';

<Figure
  src={resultFigure}
  alt="Describe the information in the figure"
  caption="Figure 1. A concise explanation of what the reader should notice."
  size="wide"
/>
```

## Comments

Set `PUBLIC_DISQUS_SHORTNAME` in a local `.env` file or GitHub Actions repository variable, and set `comments: true` only on posts that should allow discussion. No Disqus request occurs until the reader selects **Load comments**. A missing shortname hides the discussion section entirely. Canonical production URLs and stable identifiers are passed to Disqus. Live Disqus behavior requires your real shortname and appropriate domain configuration.

## Analytics

Google Analytics is optional and disabled by default. To enable it locally, create a `.env` file containing your GA4 Measurement ID:

```sh
PUBLIC_GA_MEASUREMENT_ID=G-ABC123DEF4
```

Then rebuild the site. For GitHub Pages, add the same value as a repository variable named `PUBLIC_GA_MEASUREMENT_ID` under **Settings → Secrets and variables → Actions → Variables**. The tracking script is emitted only when the value is a valid `G-...` ID. Verify installation using Google Analytics Realtime or Tag Assistant after deployment.

The integration lives in `src/components/Analytics.astro`. Replace that component later if you change providers. Depending on where your readers live and how you configure Analytics, you may also need a consent mechanism and privacy notice.

## GitHub Pages

1. Push this project to your GitHub repository on `main`.
2. In Settings → Pages, select **GitHub Actions** as the source.
3. The included workflow checks, builds, verifies, and deploys `dist/`.

The workflow obtains the domain and project base path from GitHub Pages. Optional repository variables `SITE_URL` (origin, e.g. `https://username.github.io`) and `BASE_PATH` (e.g. `/my-blog` or `/`) override them. For a custom domain, configure it in Pages settings first and set these variables if necessary. No GitHub repository or deployment is created automatically by local setup.

For a local production build with deployment URLs:

```sh
SITE_URL=https://username.github.io BASE_PATH=/my-blog pnpm build
pnpm test:build
pnpm preview
```

Open the printed URL with `/my-blog/` appended. Shell variables are used by `astro.config.mjs`; do not rely on `.env` for `SITE_URL` or `BASE_PATH`. The development fallback is `https://example.com`, so configure your deployment origin before publishing.

## Manual checks

Visit Home, Writing, About, and both Markdown/MDX articles. Toggle dark mode and reload. Check a narrow window and keyboard navigation. Check equations, code overflow, TOC links, `/rss.xml`, and `/sitemap-index.xml`. To exercise Disqus, configure your shortname and use the sample evaluation post; inspect that no Disqus requests happen before clicking. To check per-post images, add a local PNG path to frontmatter and inspect the generated `og:image` and `twitter:image` tags.

## Migrating dates and categories

`date` is the original publication date: backdate it freely. It controls ordering, displayed date, RSS, and publication metadata, independently of filesystem timestamps. Optional `created` preserves the original creation date as authoring metadata (not displayed); `updated` is displayed when supplied. Migration alone does not require changing `updated`.

Set `category: Machine learning` (one category per post). The Writing page generates static category filters with counts and shareable URLs, with no additional JavaScript. Omitted categories default to Uncategorized. `tags` remain optional descriptive labels.
