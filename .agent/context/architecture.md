# Architecture

## Directory Structure
- app/: App Router pages; home at page.tsx, dynamic project route at projects/[id]/page.tsx, paper route at papers/[id]/page.tsx, shared layout/metadata in layout.tsx.
- components/: layout shell (header/footer/providers), sections for homepage blocks, ui primitives (shadcn/Radix based), and specialized renderers (markdown/latex, pdf viewers, particle background).
- lib/: translations.ts, data/ portfolio-data.ts plus project modules, animatch-paper.ts, config/, and utils/ helpers.
- public/: static assets including project images and papers; site.webmanifest, robots.txt.
- middleware.ts: hostname normalization; next.config.mjs/tailwind.config.ts/tsconfig.json set build, styling, and TS settings.

## Key Files
- app/layout.tsx: sets metadata/viewport, providers (ThemeProvider, LanguageProvider), HtmlLangSetter, JsonLd, shell, and KaTeX/font preloads.
- app/page.tsx: client page composing hero/about/timeline/projects carousel/contact with particle background and query-driven scroll manager.
- app/projects/[id]/page.tsx: static params/metadata from projects array; renders ProjectPageContent.
- components/project-page-content.tsx: client detail page with localized text, features, galleries, and external links (live, GitHub, paper PDF popup).
- app/papers/[id]/page.tsx: client renderer for animatch paper via PaperRenderer, injects KaTeX CSS on mount, links back to project.
- lib/data/portfolio-data.ts: single source for personal info, skills, timeline, social links, and project registry.
- lib/translations.ts: EN/SV string tables consumed by LanguageProvider/useLanguage hook.
- middleware.ts: 301 redirect from www subdomain to apex.
- next.config.mjs: images unoptimized; tailwind.config.ts defines theme tokens; eslint.config.mjs uses Next core-web-vitals + TypeScript rules; tsconfig.json strict.

## Patterns & Conventions
- Default to server components; mark interactive pieces with "use client" (ProjectPageContent, PaperPage, home page for scroll manager/particles).
- Data-driven rendering: project/paper data pulled from lib/data; translations resolved via LanguageProvider.
- Hydration safety: gate browser-only work on mounted state via requestAnimationFrame flip before rendering (e.g., ProjectPageContent, PaperPage, particle effects, skill bars).
- SEO: rich metadata/OpenGraph/Twitter in layout; JSON-LD component; www-to-apex middleware; preloads for fonts/KaTeX.
- Media: images served unoptimized with ExpandableImage; PDFs via PDFViewerPopup/ PaperRenderer with KaTeX styling.

## Dependencies
- Runtime: Next.js 16, React 19, TypeScript (strict).
- UI/Styling: Tailwind CSS, tailwindcss-animate, shadcn/ui, Radix primitives, class-variance-authority, Framer Motion, particle background.
- State/i18n/theme: next-themes, custom LanguageProvider with translations.ts.
- Content/rendering: rehype/remark + KaTeX/react-katex for math, markdown rendering helpers.
- Forms/email: react-hook-form + @hookform/resolvers + zod; emailjs/browser and nodemailer.
- Carousel/visuals: embla-carousel-react; lucide-react and react-icons for icons.

## Notes
- Sources: current repository scan; legacy CLAUDE/GEMINI docs removed.
