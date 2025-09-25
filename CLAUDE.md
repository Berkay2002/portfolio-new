# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **⚠️ Important**: This project uses Ultracite for code quality and formatting. See `.claude/CLAUDE.md` for comprehensive coding rules, accessibility standards, and best practices enforced by the linter.

## Common Development Commands

- **Development server**: `npm run dev` (starts on http://localhost:3000)
- **Build**: `npm run build` (may fail if localhost is running with `npm run dev`)
- **Production server**: `npm run start` (after build)
- **Linting**: `npm run lint` (uses Biome via Ultracite)
- **Format**: `npx biome format . --write` (format all files)
- **Fix**: `npx biome check . --write` (fix auto-fixable issues)

## Project Architecture

This is a Next.js 14 TypeScript portfolio website using the App Router with comprehensive internationalization and dynamic content rendering.

### Core Structure

- **App Router**: Uses `app/` directory structure with dynamic routes
  - `app/projects/[id]/page.tsx` - Dynamic project pages
  - `app/papers/[id]/page.tsx` - Dynamic paper/publication pages
- **Data-driven content**: Single source of truth in `lib/data/portfolio-data.ts`
- **Internationalization**: English/Swedish support via `lib/translations.ts` and `components/layout/language-provider.tsx`

### Component Architecture

- **Layout components** (`components/layout/`): Site shell (header, footer, theme/language providers)
- **Page sections** (`components/sections/`): Composed into `app/page.tsx` (hero, about, projects, contact, etc.)
- **UI primitives** (`components/ui/`): Shadcn UI components with custom extensions
- **Specialized renderers**:
  - `components/ui/markdown-latex-renderer.tsx` - Handles Markdown + LaTeX via KaTeX
  - `components/ui/pdf-viewer-popup.tsx` - PDF preview/download for papers

### Data Flow

- **Portfolio data**: `lib/data/portfolio-data.ts` contains projects, skills, personal info
- **Papers**: `lib/data/animatch-paper.ts` for research publications
- **Static assets**: Papers in `public/papers/`, project images in `public/images/projects/`

## Server/Client Component Rules

- **Default**: Server components (faster, SEO-friendly)
- **Client components**: Must include `"use client"` directive
- **Common client needs**: Theme switching, language switching, form interactions, PDF popups
- **Mounted checks**: Use `mounted` state before rendering browser-dependent UI (see `components/project-page-content.tsx`)

## Styling & UI

- **Design system**: Shadcn UI with "new-york" style variant and neutral base color
- **Styling**: Tailwind CSS with CSS variables for theming
- **Animations**: Framer Motion for declarative animations
- **Dark mode**: Handled by `next-themes` via `components/layout/theme-provider.tsx`

### Adding Shadcn Components

```bash
npx shadcn@latest add [component-name]
```

Components auto-install to `components/ui/` following existing patterns.

## Content Management

### Adding Projects

1. Add project metadata to `lib/data/portfolio-data.ts`
2. Place images in `public/images/projects/`
3. Dynamic route `app/projects/[id]/page.tsx` handles rendering

### Adding Papers

1. Place PDF in `public/papers/`
2. Update `lib/data/animatch-paper.ts` or portfolio data
3. PDF viewer components handle preview/download

### Localization

- Add translation keys to `lib/translations.ts`
- Use `useLanguage` hook in components for dynamic text
- Support for English (`en`) and Swedish (`sv`)

## Development Conventions

### Clean Code (from .cursor/rules/)

- Use named constants over magic numbers
- Functions should have single responsibility
- Extract repeated code into reusable components
- Self-documenting code with minimal comments
- Meaningful variable/function names

### Next.js Patterns

- Server Components by default
- Mark client components with `'use client'`
- Wrap client components in Suspense
- Dynamic imports for non-critical components
- Proper loading/error state handling

### Component Patterns

- UI components accept `className`, `variant`, `asChild` props
- Follow existing Shadcn component structure
- Use `class-variance-authority` for variant handling
- Maintain consistent prop naming across components

## External Dependencies

- **Email**: Uses `@emailjs/browser` and `nodemailer` (check `components/sections/contact-section.tsx`)
- **Images**: `next.config.mjs` sets `images.unoptimized = true`
- **Math rendering**: KaTeX via `katex` and `react-katex` packages
- **Icons**: Lucide React and React Icons

## Key Files to Reference

- `app/layout.tsx` - Site metadata and providers
- `lib/data/portfolio-data.ts` - Main content source
- `components.json` - Shadcn configuration
- `lib/translations.ts` - Internationalization
- `next.config.mjs` - Build configuration
- `tailwind.config.ts` - Styling tokens
- Always read CLAUDE.md