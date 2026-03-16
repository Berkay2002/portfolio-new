# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install              # Install dependencies (bun preferred; npm works too)
bun dev                  # Dev server on :3000
bun run build            # Production build
bun run start            # Serve production build
bun run lint             # ESLint (eslint-config-next/core-web-vitals + TypeScript)
bun x shadcn@latest add <component>  # Add shadcn/ui component
```

No test suite is configured; use `bun run lint` and `bun run build` to validate changes.

## Architecture

**Next.js 16 App Router** with React 19, TypeScript (strict), Tailwind CSS v4, and shadcn/ui (Radix primitives). Deployed on Vercel. Bun is the preferred package manager.

### Routing

- `/` — Client-rendered home page composing section components (hero, about, timeline, projects carousel, contact) with particle background and query-driven scroll
- `/projects/[id]` — Static params generated from `lib/data/portfolio-data.ts`; rendered by `components/project-page-content.tsx`
- `/papers` — Papers listing with inline PDF viewer buttons
- `/papers/[id]` — Paper detail with KaTeX LaTeX rendering
- `/playground/tdde19` — Interactive FastTalk demo
- `middleware.ts` — 301 redirect www → apex domain

### Data Flow

All project/paper data is hardcoded in `lib/data/` — no database or API routes. `lib/data/portfolio-data.ts` is the single source of truth for projects, skills, timeline, and personal info. Individual project modules live in `lib/data/projects/`.

Translations live in `lib/translations.ts` (EN/SV nested object). Consumed via `LanguageProvider` context and `useLanguage()` hook. Language preference persists to localStorage.

### Key Patterns

- **Server components by default** — only add `"use client"` when state, effects, or event handlers are needed
- **Hydration safety** — gate browser-only code on a `mounted` state flipped via `requestAnimationFrame` (used in PDF viewer, particle background, skill bars)
- **Bilingual (EN/SV)** — all user-facing text must have both EN and SV variants in `translations.ts` and project data modules
- **Imports** — use `@/*` path alias; avoid unused imports (ESLint enforced)
- **Images** — served unoptimized (`next.config.mjs`); use `ExpandableImage` component
- **SEO** — metadata/OpenGraph in `app/layout.tsx`; JSON-LD via `components/layout/json-ld.tsx`; dynamic sitemap in `app/sitemap.ts`
- **Theme** — `next-themes` with class strategy; storage key `theme-preference`

### Component Organization

- `components/layout/` — shell (header, footer, providers, JSON-LD, particle background)
- `components/sections/` — homepage section blocks
- `components/ui/` — shadcn/ui primitives (button, card, form, etc.)

## Conventions

- **Naming**: PascalCase for component files, camelCase for variables/functions, kebab-case for routes/folders
- **Project IDs** in `portfolio-data.ts` must be unique and URL-safe (they drive dynamic routes)
- **Links**: use `rel="noopener noreferrer"` with `target="_blank"`
- **Content rendering**: LaTeX processed via `lib/utils/latex-helpers.ts`; KaTeX CSS loaded from CDN and preloaded in layout
