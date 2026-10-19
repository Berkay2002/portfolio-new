import type { Project } from "@/types";

export const stackkit: Project = {
  id: "stackkit",
  title: "Stackkit: Managed Monorepo Generator",
  description:
    "TypeScript CLI that generates multi-language Turborepo monorepos from modules, presets or offline recipe codes, then keeps track of what it owns so the project can be inspected, diffed and evolved later. Comes with a visual customizer for building the command.",
  descriptionSv:
    "TypeScript-CLI som genererar flerspråkiga Turborepo-monorepon från moduler, presets eller offline-receptkoder och sedan håller koll på vad den äger, så att projektet kan inspekteras, jämföras och utvecklas vidare. Levereras med en visuell customizer för att bygga kommandot.",
  technologies: [
    "TypeScript",
    "Node.js",
    "pnpm",
    "Turborepo",
    "Next.js",
    "React",
    "Vitest",
    "FastAPI",
    "PostgreSQL",
    "Auth0",
    "Docker",
    "Claude Code",
    "Codex",
  ],
  projectInfo: [
    {
      label: "Type",
      labelSv: "Typ",
      value: "CLI + web customizer",
      valueSv: "CLI + webb-customizer",
    },
    {
      label: "Status",
      labelSv: "Status",
      value: "Early alpha",
      valueSv: "Tidig alfa",
    },
    {
      label: "Supported preset",
      labelSv: "Stödd preset",
      value: "next-fastapi-postgres-auth0",
    },
    {
      label: "Distribution",
      labelSv: "Distribution",
      value: "npm packages under @berkayorhan",
      valueSv: "npm-paket under @berkayorhan",
    },
    {
      label: "Requires",
      labelSv: "Kräver",
      value: "Node.js 22+",
    },
  ],
  link: "https://stackkit-customizer.vercel.app",
  linkLabel: "Open the customizer",
  linkLabelSv: "Öppna customizern",
  githubLink: "https://github.com/Berkay2002/stackkit",
  projectLinks: [
    {
      label: "View npm package",
      labelSv: "Visa npm-paket",
      icon: "npm",
      href: "https://www.npmjs.com/package/@berkayorhan/stackkit",
    },
  ],
  image: "/images/projects/stackkit/customizer.webp",
  imageAlt:
    "The Stackkit customizer: choose a preset or stack, and copy the offline recipe command",
  imageAltSv: "Stackkit-customizern: välj en preset eller stack och kopiera offline-receptkommandot",
  detailedDescription:
    "Stackkit is a TypeScript CLI for generating and maintaining multi-language monorepos. Most boilerplate generators stop after the first write; Stackkit is built around the longer lifecycle. It creates a managed Turborepo project from modules, presets, stack-axis flags (web, API, database, auth) or an offline recipe code, and records what it owns in .stackkit/project.json. Later commands (doctor, diff, info, add, remove, update, migrate and skills sync) read that manifest instead of guessing. The repo is a pnpm workspace of small packages with one direction of dependency: schemas, templates, core, registry and cli, plus a client-side Next.js customizer app that builds the create command visually.",
  detailedDescriptionSv:
    "Stackkit är en TypeScript-CLI för att generera och underhålla flerspråkiga monorepon. De flesta boilerplate-generatorer slutar efter första skrivningen; Stackkit är byggd kring den längre livscykeln. Den skapar ett hanterat Turborepo-projekt från moduler, presets, stack-flaggor (web, API, databas, auth) eller en offline-receptkod och sparar vad den äger i .stackkit/project.json. Senare kommandon (doctor, diff, info, add, remove, update, migrate och skills sync) läser det manifestet istället för att gissa. Repot är ett pnpm-workspace med små paket som beror åt ett håll: schemas, templates, core, registry och cli, plus en Next.js-customizer som körs helt i webbläsaren och bygger create-kommandot visuellt.",
  features: [
    "Create from modules, presets, stack-axis flags such as --web next --api fastapi --db postgres --auth auth0, or an offline recipe code (stackkit recipe encode / create --recipe sk_...)",
    "Dry-run mode that previews the plan and any planned file (--dry-run --view <path>) without writing anything",
    "Managed projects: ownership is recorded in .stackkit/project.json with canonical module IDs, so stackkit doctor and stackkit diff --file can check generated files against what Stackkit wrote",
    "Deterministic output: README.md, .env.example, root dev/build/test/typecheck/lint/format scripts and starter files are rendered from typed inputs, and the generated auth tests use a local mock JWT/JWKS adapter so no Auth0 tenant is needed",
    "Module discovery and registry listing: module list, module search, module inspect --json, preset list and preset inspect",
    "Lifecycle commands (add, remove, update, migrate), still alpha, plus resumable create (--resume, with --retry-initializers before re-running a step that may have left partial output)",
    "AI skills for generated projects: project-local skill targets for Codex (.agents/skills) and Claude Code (.claude/skills), installed, planned, copied or symlinked with --skills and --skill-link",
    "Client-side visual customizer that maps friendly technology choices to canonical modules, validates them with the core resolver, and outputs the copy-ready recipe command",
  ],
  featuresSv: [
    "Skapa från moduler, presets, stack-flaggor som --web next --api fastapi --db postgres --auth auth0, eller en offline-receptkod (stackkit recipe encode / create --recipe sk_...)",
    "Dry-run-läge som förhandsvisar planen och valfri planerad fil (--dry-run --view <sökväg>) utan att skriva något",
    "Hanterade projekt: ägarskap sparas i .stackkit/project.json med kanoniska modul-ID:n, så stackkit doctor och stackkit diff --file kan kontrollera genererade filer mot det Stackkit skrev",
    "Deterministisk output: README.md, .env.example, dev/build/test/typecheck/lint/format-skript i roten och startfiler renderas från typade indata, och de genererade auth-testerna använder en lokal mock-JWT/JWKS-adapter så ingen Auth0-tenant behövs",
    "Modulupptäckt och registerlistning: module list, module search, module inspect --json, preset list och preset inspect",
    "Livscykelkommandon (add, remove, update, migrate), fortfarande alfa, samt återupptagbar create (--resume, med --retry-initializers innan ett steg som kan ha lämnat halvfärdig output körs om)",
    "AI-skills för genererade projekt: projektlokala skill-mål för Codex (.agents/skills) och Claude Code (.claude/skills), som installeras, planeras, kopieras eller symlänkas med --skills och --skill-link",
    "Visuell customizer, helt i webbläsaren, som mappar vanliga teknikval till kanoniska moduler, validerar dem med core-resolvern och ger ett kopieringsklart receptkommando",
  ],
  challenges: [
    "Generators usually stop after the first write, which leaves nothing to check the project against later",
    "One customizer and one CLI must agree on what is a valid stack, without duplicating module or preset logic in two places",
    "Being honest about maturity: one preset is supported, runnable alternatives are marked preview, and declaration-only modules cannot be created yet",
    "Multi-language output (a Next.js frontend and a FastAPI backend with Postgres and auth) has to be validated as a whole, not per template",
  ],
  challengesSv: [
    "Generatorer slutar oftast efter första skrivningen, vilket inte lämnar något att kontrollera projektet mot senare",
    "En customizer och en CLI måste vara överens om vad som är en giltig stack, utan att duplicera modul- eller preset-logik på två ställen",
    "Vara ärlig om mognadsgraden: en preset stöds, körbara alternativ är markerade som preview och moduler som bara är deklarerade kan ännu inte skapas",
    "Flerspråkig output (en Next.js-frontend och en FastAPI-backend med Postgres och auth) måste valideras som en helhet, inte per mall",
  ],
  solution:
    "Packages depend in one direction: schemas define the public data shapes, templates render file operations from typed inputs, core resolves modules, plans changes, checks safety, writes files and records manifests, registry declares modules and presets without writing anything, and cli owns commands, prompts and output. The create flow resolves, validates capabilities and conflicts, builds a plan, renders files, checks conflicts, writes, installs skills, writes the manifest and runs doctor. The customizer reads presets and support levels from the registry and uses the shared recipe and resolver code, so it only owns labels, icons and the mapping from choices to modules. CI runs a smoke test and a golden-path job that packs the CLI, generates the supported preset and runs the generated project's own test, typecheck, lint and build steps.",
  solutionSv:
    "Paketen beror åt ett håll: schemas definierar publika datastrukturer, templates renderar filoperationer från typade indata, core löser moduler, planerar ändringar, kontrollerar säkerhet, skriver filer och sparar manifest, registry deklarerar moduler och presets utan att skriva något, och cli äger kommandon, prompter och output. Create-flödet löser upp, validerar capabilities och konflikter, bygger en plan, renderar filer, kontrollerar konflikter, skriver, installerar skills, skriver manifestet och kör doctor. Customizern läser presets och supportnivåer från registret och använder den delade recept- och resolverkoden, så den äger bara etiketter, ikoner och mappningen från val till moduler. CI kör ett smoke-test och ett golden path-jobb som paketerar CLI:t, genererar den stödda presetn och kör det genererade projektets egna test-, typecheck-, lint- och build-steg.",
  outcome:
    "An early-alpha generator platform in a public monorepo, with one supported preset (Next.js, ShadCN, FastAPI, Postgres, SQLAlchemy, Auth0 and Docker), runnable preview alternatives, five runtime packages under the @berkayorhan npm scope, and a deployed customizer at stackkit-customizer.vercel.app that produces offline recipe commands. The goal is not a single fixed starter but a way to generate, check and evolve customizable monorepo boilerplates.",
  outcomeSv:
    "En generatorplattform i tidig alfa i ett publikt monorepo, med en stödd preset (Next.js, ShadCN, FastAPI, Postgres, SQLAlchemy, Auth0 och Docker), körbara preview-alternativ, fem runtime-paket under npm-scopet @berkayorhan och en driftsatt customizer på stackkit-customizer.vercel.app som ger offline-receptkommandon. Målet är inte en enda fast startmall utan ett sätt att generera, kontrollera och utveckla anpassningsbara monorepo-boilerplates.",
  gallery: [
    {
      image: "/images/projects/stackkit/customizer.webp",
      alt: "Stackkit customizer start page with project name, package manager, preset cards and the generated recipe command",
      caption:
        "Customizer: pick a preset or build a custom stack, then copy the offline recipe command",
      captionSv:
        "Customizer: välj en preset eller bygg en egen stack och kopiera sedan offline-receptkommandot",
    },
    {
      image: "/images/projects/stackkit/modules.webp",
      alt: "Stackkit customizer showing application shape and data choices next to the resolved canonical modules",
      caption:
        "Choices resolve to canonical modules such as web/nextjs, api/fastapi and auth/auth0-nextjs",
      captionSv:
        "Valen löses upp till kanoniska moduler som web/nextjs, api/fastapi och auth/auth0-nextjs",
    },
    {
      image: "/images/projects/stackkit/customizer-phone.webp",
      alt: "Stackkit customizer on a phone-width screen",
      caption: "The customizer at phone width",
      captionSv: "Customizern i telefonbredd",
    },
  ],
};
