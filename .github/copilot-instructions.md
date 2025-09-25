# Copilot instructions for this repository

This file gives concise, actionable guidance so AI coding agents can be productive immediately.

Overview
- Next.js 14 TypeScript portfolio site using the app/ router. UI is built from small reusable components in `components/` and data is driven from `lib/data/`.
- Styling: Tailwind CSS (see `tailwind.config.ts`, `postcss.config.mjs`). Animations: Framer Motion. Accessibility primitives: Radix UI (wrapped under `components/ui`).
- Markdown + LaTeX rendering via `components/ui/markdown-latex-renderer.tsx` and KaTeX packages. Papers (PDFs) live under `public/papers/` and are referenced from `lib/data/animatch-paper.ts` and `lib/data/portfolio-data.ts`.

How to run
- Development: `npm run dev` (starts Next dev server on http://localhost:3000). Use the same `npm` commands on Windows PowerShell.
- Build: `npm run build` then `npm run start` for a production server.
- Lint: `npm run lint` (uses Next's eslint config).

Big-picture architecture and data flow
- app/ directory contains top-level routes and layouts (server components by default). `app/layout.tsx` sets site metadata and providers.
- UI composition:
  - `components/layout/*` — site-level shell pieces (header, footer, theme/language providers).
  - `components/sections/*` — page sections composed into `app/page.tsx`.
  - `components/ui/*` — design-system primitives (Button, Card, Container, PDF viewers, Markdown renderers). Many of these wrap Radix primitives or third-party libs.
- Source-of-truth data: `lib/data/portfolio-data.ts` (projects, skills, social links). Pages read from that file rather than fetching a remote API. To add a project or paper, update this file and relevant assets in `public/` (example below).

Server / client boundary rules (critical)
- Default is server components. Files that use browser-only APIs or state/hook must include `"use client"` at the top (search the repo for existing examples in `components/*`).
- Common mistake: referencing `window`, `navigator` or DOM APIs inside server components. Move such logic into a client component or add `"use client"`.

Common, concrete tasks (examples)
- Add a project
  1. Add project metadata in `lib/data/portfolio-data.ts`, include `id`, `title`, `image` (place image under `public/images/projects/`).
  2. The routes are data-driven: `app/projects/[id]/page.tsx` reads `id` and looks up the project. No extra route wiring typically needed.

- Add a paper PDF
  1. Drop `.pdf` into `public/papers/`.
  2. Update `lib/data/animatch-paper.ts` or `lib/data/portfolio-data.ts` -> `paperLink: "/papers/your-file.pdf"`.
  3. `components/ui/paper-renderer.tsx` and `components/ui/pdf-viewer-popup.tsx` handle preview/downloads.

- Localize text
  - Translations live in `lib/translations.ts`. Components use `useLanguage` from `components/layout/language-provider.tsx`. Add new keys there and reference via the hook.

Project-specific patterns and conventions
- UI primitives wrap Radix + smaller props: study `components/ui/*` for consistent prop names (e.g., many components accept `className`, `asChild`, or `variant`). Prefer reuse rather than adding new low-level primitives.
- `mounted` checks are used before rendering browser-only components (e.g., PDF popup or features relying on localStorage/theme). Follow existing patterns in `components/project-page-content.tsx`.
- KaTeX + Markdown: `components/ui/markdown-latex-renderer.tsx` uses `remark`/`rehype` pipeline — when adding Markdown content, ensure it is safe and uses the same pipeline.
- Animations: Framer Motion is used widely — prefer declarative motion props instead of direct DOM manipulation.

Integration points & external dependencies to watch
- Email: `@emailjs/browser` and `nodemailer` appear in dependencies — check `components/sections/contact-section.tsx` (or similar) for usage and required environment variables.
- Images: `next.config.mjs` currently sets `images.unoptimized = true` (disables Next image optimization). Expect Image components to serve images as-is. If you change this, test image domains and remotePatterns.
- Theme + i18n: `next-themes` and a custom `language-provider` are used. Inspect `components/layout/theme-provider.tsx` and `components/layout/language-provider.tsx` for behavior.

Debugging hints
- Server vs client errors often surface as runtime errors in the browser console or during build-time (references to window/navigator in server components). Reproduce locally with `npm run dev` and watch terminal + browser console.
- For broken images or PDF links, verify path under `public/` and `lib/data/` references.

Files worth reading first
- `app/layout.tsx` — site providers & metadata
- `app/page.tsx` — top-level composition
- `lib/data/portfolio-data.ts` — projects and site content (single source of truth)
- `components/layout/*` and `components/ui/*` — patterns for components and wrappers
- `lib/translations.ts` and `components/layout/language-provider.tsx` — localization flow
- `next.config.mjs`, `package.json`, `tailwind.config.ts` — build/runtime config

Quality gates for edits
- Make small changes and run `npm run dev` to smoke-test. Run `npm run build` to catch server-side or type errors.
- Keep `"use client"` placement minimal and confined to components that need it.

If anything is unclear or you need examples for a concrete change (add project, add paper, fix PDF viewer), tell me which task and I'll add focused snippets and tests.

Clean code & repository rules
- This repo includes machine-readable cursor rules under `.cursorrules/` (e.g. `clean-code.mdc`). Respect those rules when producing edits.
- Key expectations:
  - Prefer named constants over magic numbers. When adding site-wide values, add them to a small, obvious place (for data/constants use `lib/data/*`, for UI tokens consider a new `lib/constants.ts` or top of the component file).
  - Use descriptive, self-explanatory names. Variables, components and hooks should reveal intent (see `components/sections/*` for existing naming patterns).
  - Keep functions focused and small. If a function needs a comment to explain what it does, split it into smaller, well-named functions.
  - Avoid duplication: extract shared UI patterns into `components/ui/*` primitives (many existing buttons/cards follow this pattern).
  - Comments should explain "why" not "what". Add doc comments for non-obvious algorithms (examples: the AniMatch embedding logic described in `lib/data/animatch-paper.ts`).

  Next.js best-practices (from `.cursorrules/nextjs.mdc`)
  - Use the App Router and prefer Server Components by default; mark client code with `"use client"`.
  - Wrap client components in `Suspense` where appropriate and use dynamic imports for non-critical UI to keep initial bundles small.
  - Data fetching: prefer Server Components for fetching and implement loading/error UI in routes (see `app/**/loading.tsx` and `app/**/not-found.tsx`).
  - Routing: conform to app-router dynamic routes; `app/projects/[id]/page.tsx` reads `id` from params and looks up `lib/data/portfolio-data.ts`.
  - Forms & validation: the team recommends Zod + react-hook-form patterns (note: verify `zod` in `package.json` before adding). If you implement forms, handle server-side validation too.
  - Performance: minimize client state, prefer RSCs, optimize images (repo currently sets `images.unoptimized = true` in `next.config.mjs` — change only after testing).

  Shadcn / UI component conventions (from `.cursorrules/shadcn.mdc`)
  - This project uses a small design system in `components/ui/*` (many components follow shadcn patterns). Prefer reusing these primitives instead of adding new low-level UI elements.
  - Typical pattern: components accept `className`, `variant`, `asChild`. See `components/ui/button.tsx`, `components/ui/card.tsx` for examples.
  - If you need more shadcn components, the team convention (documented in `.cursorrules`) is to use `npx shadcn@latest add <component>` — but check compatibility and commit the generated UI files into `components/ui/`.
  - Styling variant: the project uses Tailwind + `class-variance-authority` patterns; preserve existing class patterns and theme tokens.

