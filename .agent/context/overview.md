# Project Overview

## Description
Next.js App Router portfolio site for Berkay Orhan (machine learning engineer) with bilingual English/Swedish content, dynamic project and paper pages, and rich UI/SEO polish.

## Goals
- Showcase personal background, skills, education timeline, and featured projects/papers.
- Provide localized UX with deep project detail pages (features, outcomes, galleries, PDFs).
- Maintain performant, accessible presentation with consistent theming and metadata.

## Key Terminology
- Projects: Defined in lib/data/portfolio-data.ts and per-project modules under lib/data/projects/*; drive /projects/[id] routes.
- Papers: Mapped via lib/data/*-paper.ts modules and exposed both at /papers/[id] and the /papers listing page with inline PDF viewer buttons.
- Translations: EN/SV strings in lib/translations.ts consumed through LanguageProvider.
- Theme: Dark/light handled by next-themes; particle background is a global visual layer.

## Target Users
- Hiring managers, recruiters, collaborators, and peers evaluating ML/web engineering work.

## Notes
- Sources: direct code scan and current repository state (legacy CLAUDE/GEMINI docs removed).
