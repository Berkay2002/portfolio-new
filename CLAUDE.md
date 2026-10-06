# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository. `AGENTS.md`
carries the same text for Codex; keep the two in step.

## Commands

```bash
bun install          # Install dependencies (bun only; bun.lock is the lockfile)
bun dev              # Dev server on :3000
bun run build        # Production build (also type-checks)
bun run lint         # ESLint (eslint-config-next core-web-vitals + typescript)
bunx tsc --noEmit    # Type-check without building
```

There is no test suite. Validate with `bun run lint` and `bun run build`. UI work is not done until it has been
checked at desktop (1440 px) and phone (390 px) widths with Playwright screenshots (`bunx playwright`; it is not a
dependency). Screenshots worth keeping go in `design/screens/<name>.<width>[.full].png`.

## Stack

Next.js 16 App Router, React 19, TypeScript (strict), Tailwind CSS v4, deployed on Vercel at berkay.se. No database
and no API routes: all content is hardcoded in `lib/data/`.

## Design

The site has one look, specified in [`design/README.md`](design/README.md). Read it before any visual change. In short:

- Palette (scoped to `.landing` in `app/globals.css`): graphite `#0F1012`, off-white `#ECEAE4`, dim `#8A8C90`,
  faint `#2A2D31`, one accent lime `#C8F542` (`var(--lime)`). No other hues, gradients or glow.
- Type: Space Grotesk 600 for headlines (`.font-display`), JetBrains Mono for everything else.
- No cards, boxes, tables, tag pills, skill bars or icons. Information is drawn on the trace.
- The trace is one lime line down every page (`components/landing/trace.tsx`). Sections place zero-size anchors
  (`<A />`) and `<TraceRoot>` joins them with curves; an anchor hidden at a breakpoint is skipped, so desktop and
  phone route differently. `<Wave />` draws the waveforms. With `prefers-reduced-motion` everything is drawn in full
  and nothing moves.
- Phone: the trace runs in a lane 20 px from the left edge, text starts at 48 px, tap targets are at least 44 px.
- New visual work goes through a spec round (`design/specs/<surface>-r<round>.md`, rendered with Codex by
  `design/scripts/render.ps1`). Berkay picks; only approved renders are kept, in `design/approved/`. Renders that
  were not picked are deleted from `design/mockups/` once the round is settled.

## Layout

- `app/page.tsx`: the landing page. Sections from `components/landing/sections.tsx` in order: Hero, Work, Research,
  Experience, About, Photos, Contact.
- `app/(site)/layout.tsx`: every other page gets the landing's header and footer and the trace straight down the
  left lane. Pages: `projects`, `projects/[id]`, `papers`, `papers/[id]`, `playground`, `playground/tdde19`
  (FastTalk benchmark), `photography`. Page bodies live in `components/landing/pages.tsx`, `gallery.tsx`,
  `thesis.tsx` and `fasttalk.tsx`; shared bits (bursts, ticks, page heads) in `page-parts.tsx`.
- `app/not-found.tsx`, `app/loading.tsx`, `app/sitemap.ts`. SEO metadata and fonts are in `app/layout.tsx`;
  JSON-LD in `components/layout/json-ld.tsx`.
- `proxy.ts`: 301 redirect from www to the apex domain (Next 16's replacement for `middleware.ts`).

## Content

- Projects: one module per project in `lib/data/projects/<id>.ts` (type `Project` in `types/index.ts`). To add one,
  import it in `lib/data/portfolio-data.ts`, add it to `projects` and give it a `year` and `tags` in `projectMeta`.
  Project ids must be unique and URL-safe; they drive `/projects/[id]` and the sitemap.
- Papers: `lib/data/papers.ts` lists them (thesis first); each paper's content is its own module in `lib/data/`.
  LaTeX is rendered with KaTeX by `components/ui/markdown-latex-renderer.tsx` (`lib/utils/latex-helpers.ts`);
  KaTeX CSS comes from the CDN link in `app/layout.tsx`.
- Photos: `lib/data/photos.ts`, files in `public/images/photography/<place>-<n>.webp` (1800 px) and `-sm.webp`
  (720 px), metadata stripped.
- Images are served unoptimized (`next.config.mjs`), so use plain `<img>` with the
  `@next/next/no-img-element` disable comment, as the existing pages do.

## Languages (EN/SV)

Every user-facing string needs English and Swedish.

- Page copy lives in `lib/data/landing.ts` (`landingCopy.en` / `landingCopy.sv`, typed by `Copy`). Read it in a
  component with `useCopy()` from `components/landing/sections.tsx`.
- Project modules carry Swedish in `*Sv` fields (`descriptionSv`, `featuresSv`, ...), with English as the fallback.
- The language is saved in localStorage (`language`). `LanguageProvider` renders English on the server and during
  hydration, then switches, so Swedish visitors get no hydration mismatch. Keep browser-only reads behind
  `useSyncExternalStore` or an effect the same way.

## Conventions

- Server components by default; add `"use client"` only for state, effects or handlers.
- Imports use the `@/*` alias. ESLint flags unused imports.
- File names are kebab-case; components are PascalCase, variables and functions camelCase.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- Leftovers from the old site are still in the tree and no page uses them: most of `components/ui/` (everything
  except `markdown-latex-renderer.tsx`), `components/layout/particle-toggle.tsx`, `lib/config/particle-config.ts`,
  `lib/translations.ts` (only behind the provider's unused `t()`), and `skills`, `skillDetails` and
  `timelineEvents` in `portfolio-data.ts`. Don't build on them.
