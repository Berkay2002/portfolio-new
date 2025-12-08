# Changelog

<!-- 
Living history of project changes.
Agents: Add an entry after completing any task.

Format:
## YYYY-MM-DD
- **Brief summary** - Details about what changed
-->

## 2025-12-08
- **Build fixes** - Added `outline-solid` button variant support, corrected PDF viewer dynamic import, aligned BlurImage placeholder typing with Next Image, and updated rehype-katex options to avoid type errors; build now passes.
- **Migrated agent notes and scanned codebase** - Linked CLAUDE.md/GEMINI.md in AGENTS.md; updated overview, architecture, conventions, and commands with current Next.js App Router structure, data flow, linting rules, and scripts; logged middleware/domain handling and i18n patterns.
- **Adjusted context after legacy doc deletion** - Removed AGENTS references to deleted CLAUDE/GEMINI files and retagged source notes to rely on current code/config scan.
- **Filled context templates** - Replaced placeholders in overview/architecture/conventions with concrete project details and removed code-scan placeholder headings; commands now list actionable bun/npm workflows.
- **Switched linting to ESLint** - Removed Biome/Ultracite, set `lint` script to `eslint .`, updated eslint.config.mjs with Next core-web-vitals + TypeScript configs, and refreshed conventions/commands/architecture docs.
- **Next 16 lint cleanup** - Resolved post-upgrade ESLint errors (React 19 set-state-in-effect and static components), hoisted shared dashboard rows/cards, swapped KaTeX/particle toggles to rAF guards, converted PDF viewer to dynamic import, typed Markdown renderer without `any`, migrated Tailwind plugin import to ESM, and excluded legacy JSX dashboard from lint scope.
