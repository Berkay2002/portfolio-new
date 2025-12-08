# Conventions

## Language & Framework
- TypeScript (strict) with Next.js 14 App Router; React 18; Tailwind CSS + shadcn/ui (Radix primitives) for UI.
- Bundler/runner: bun preferred; npm compatible. Images run unoptimized per next.config.mjs.

## Naming Conventions
- PascalCase for React components/files under components/; camelCase for variables/functions; kebab-case for routes and folders.
- Project IDs/paths in lib/data/portfolio-data.ts must stay unique and URL-safe to drive dynamic routes.

## Code Style
- ESLint flat config using eslint-config-next/core-web-vitals plus eslint-config-next/typescript; run via `bun run lint`.
- Prefer server components by default; add "use client" only when needed (state, effects, event handlers).
- Keep imports absolute via @/* alias; avoid unused imports/vars (ESLint enforced).

## Best Practices
- i18n: Fetch strings via useLanguage/ translations.ts; provide both EN/SV when adding new text.
- Data source of truth: project/paper metadata lives in lib/data; avoid duplicating descriptions elsewhere.
- Hydration safety: gate browser-only logic on mounted state for client components (PDF viewer, particle effects, project page).
- Accessibility/SEO: use rel="noopener noreferrer" with target="_blank" links; rely on layout metadata/JsonLd; keep <html lang> via HtmlLangSetter.
- Media: use ExpandableImage with unoptimized flag to match disabled Next image optimization; preload critical assets in layout when needed.

## Notes
- Sources: current code/config scan; legacy CLAUDE/GEMINI docs removed.
