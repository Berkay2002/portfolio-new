import type { Project } from "@/types";

export const agentTooling: Project = {
  id: "agent-tooling",
  title: "Agent tooling: Tools for AI Coding Agents",
  description:
    "Six open-source tools I built around Claude Code and Codex: a knowledge-base compiler (wikillm), a PR babysitter and demo recorder, Claude Code mods, a cost-first agent setup, an HTML publishing and review workspace, and a YouTube transcript tool.",
  descriptionSv:
    "Sex open source-verktyg jag byggt kring Claude Code och Codex: en kunskapsbaskompilator (wikillm), en PR-vakt med demoinspelning, Claude Code-mods, en kostnadsmedveten agentuppsättning, en arbetsyta för att publicera och granska HTML samt ett verktyg för YouTube-transkript.",
  technologies: [
    "TypeScript",
    "Node.js",
    "Python",
    "Next.js",
    "Neon Postgres",
    "Drizzle",
    "Clerk",
    "Vercel Blob",
    "Obsidian",
    "Marp",
    "Playwright",
    "Claude Code Plugins",
    "Codex Plugins",
    "MCP",
  ],
  projectInfo: [
    {
      label: "Type",
      labelSv: "Typ",
      value: "CLIs, agent plugins and Claude Code mods",
      valueSv: "CLI:er, agentpluginer och Claude Code-mods",
    },
    {
      label: "Parts",
      labelSv: "Delar",
      value: "wikillm, babysit-pr, berkays-mods, claude-config, htmlpub, yt-scribe",
    },
    {
      label: "Agent hosts",
      labelSv: "Agentmiljöer",
      value: "Claude Code and Codex",
      valueSv: "Claude Code och Codex",
    },
    {
      label: "Distribution",
      labelSv: "Distribution",
      value: "Plugin marketplaces, npm and GitHub",
      valueSv: "Pluginmarknader, npm och GitHub",
    },
    {
      label: "License",
      labelSv: "Licens",
      value: "MIT",
    },
  ],
  projectLinks: [
    { label: "wikillm", icon: "claude", href: "https://github.com/Berkay2002/wikillm" },
    { label: "wikillm on npm", labelSv: "wikillm på npm", icon: "npm", href: "https://www.npmjs.com/package/wikillm" },
    { label: "babysit-pr", icon: "claude", href: "https://github.com/Berkay2002/babysit-pr" },
    { label: "berkays-mods", icon: "claude", href: "https://github.com/Berkay2002/berkays-mods" },
    { label: "claude-config", icon: "claude", href: "https://github.com/Berkay2002/claude-config" },
    { label: "htmlpub", icon: "claude", href: "https://github.com/Berkay2002/htmlpub" },
    { label: "yt-scribe", icon: "claude", href: "https://github.com/Berkay2002/yt-scribe" },
    {
      label: "Install wikillm CLI",
      labelSv: "Installera wikillm-CLI",
      icon: "npm",
      items: [
        { label: "npx wikillm", icon: "npm", command: "npx wikillm" },
        { label: "npm i wikillm", icon: "npm", command: "npm i wikillm" },
        { label: "npm i -g wikillm", icon: "npm", command: "npm i -g wikillm" },
      ],
    },
    {
      label: "Install wikillm plugin",
      labelSv: "Installera wikillm-plugin",
      icon: "agent-stack",
      items: [
        {
          label: "Claude Code",
          icon: "claude",
          command:
            "/plugin marketplace add Berkay2002/wikillm\n/plugin install wikillm@wikillm\n/reload-plugins",
        },
        {
          label: "Codex",
          icon: "openai",
          command: "codex plugin marketplace add Berkay2002/wikillm",
        },
      ],
    },
    {
      label: "Install babysit-pr",
      labelSv: "Installera babysit-pr",
      icon: "agent-stack",
      items: [
        {
          label: "Claude Code",
          icon: "claude",
          command: "/plugin marketplace add Berkay2002/babysit-pr\n/plugin install babysit-pr@berkay",
        },
        {
          label: "Codex",
          icon: "openai",
          command: "codex plugin marketplace add Berkay2002/babysit-pr\ncodex plugin add babysit-pr@berkay",
        },
      ],
    },
    {
      label: "Install berkays-mods",
      labelSv: "Installera berkays-mods",
      icon: "claude",
      items: [
        {
          label: "Claude Code (workers mod)",
          labelSv: "Claude Code (modden workers)",
          icon: "claude",
          command: "claude plugin marketplace add Berkay2002/berkays-mods\nclaude plugin install workers@berkays-mods",
        },
      ],
    },
    {
      label: "Install yt-scribe",
      labelSv: "Installera yt-scribe",
      items: [
        {
          label: "pip",
          command:
            "python -m pip install --upgrade git+https://github.com/Berkay2002/yt-scribe.git\npython -m yt_scribe setup",
        },
      ],
    },
  ],
  detailedDescription:
    "Agent tooling is the set of small tools I use to make AI coding agents more reliable, cheaper to run and easier to supervise. wikillm is a TypeScript CLI and plugin bundle: an npx wizard scaffolds a vault with raw sources, compiled wiki articles, Obsidian config and host-specific CLAUDE.md and AGENTS.md schemas, and the plugin skills handle ingest, query, lint, Obsidian CLI, Marp and onboarding for Claude Code and Codex. babysit-pr (shown as PR Toolkit) carries a GitHub pull request or GitLab merge request through failing checks and review feedback, then records a short demo of the change working. berkays-mods is a set of Claude Code mods for orchestrator and worker sessions. claude-config is the cost-first setup those sessions run on: one Opus session plans and reviews, Haiku reads, Sonnet builds, each at an explicit effort level. htmlpub is a private workspace for publishing self-contained HTML reports and reviewing them with text-anchored comments, and yt-scribe turns a YouTube link into a transcript and then into readable notes through Codex or OpenCode.",
  detailedDescriptionSv:
    "Agentverktyg är den samling små verktyg jag använder för att göra AI-kodagenter mer pålitliga, billigare att köra och enklare att övervaka. wikillm är en TypeScript-CLI och pluginbundle: en npx-guide skapar ett vault med råkällor, kompilerade wikiartiklar, Obsidian-konfiguration och host-specifika CLAUDE.md- och AGENTS.md-scheman, och pluginets skills sköter inläsning, frågor, lint, Obsidian CLI, Marp och introduktion för Claude Code och Codex. babysit-pr (visas som PR Toolkit) tar en pull request på GitHub eller en merge request på GitLab förbi misslyckade checkar och granskningskommentarer och spelar sedan in en kort demo av ändringen. berkays-mods är en uppsättning Claude Code-mods för orkestrator- och worker-sessioner. claude-config är den kostnadsmedvetna uppsättningen sessionerna körs på: en Opus-session planerar och granskar, Haiku läser, Sonnet bygger, alla på en uttrycklig effort-nivå. htmlpub är en privat arbetsyta för att publicera fristående HTML-rapporter och granska dem med textförankrade kommentarer, och yt-scribe gör en YouTube-länk till ett transkript och sedan till läsbara anteckningar via Codex eller OpenCode.",
  features: [
    "wikillm vault scaffold: npx wikillm asks for personal or project mode, host targets, features, domain and optional automation guidance before it creates the vault structure",
    "wikillm host-aware schemas: CLAUDE.md and AGENTS.md are generated from the same TypeScript renderer, with command prefixes and install/update copy kept in host profiles",
    "wikillm compiled wiki: ingest skills turn raw files into one-concept markdown articles with YAML frontmatter, [[wikilinks]], provenance, indices and git commits; query reads the compiled articles first and lint checks links, frontmatter, orphans, contradictions, stale claims, duplicates and graph clusters",
    "wikillm Obsidian and Marp integration: skills use the Obsidian CLI for search and backlinks when it is available and can generate slide decks from wiki content through Marp",
    "babysit-pr: two skills for Claude Code and Codex on GitHub and GitLab. Babysit PR makes scoped fixes, validates and pushes, then reports readiness tied to the current PR head; PR Demo records a short video of the change working (Playwright for web, VHS for terminal apps) and attaches it to the PR with the recorded commit",
    "berkays-mods: nine Claude Code mods (two adapted from other MIT projects), among them limit-resume (continues a session when the 5-hour limit resets), workers (a pane with every worker session), proof-gate (asks a worker that reports done without screenshots to send them), effort-gate (blocks Opus at xhigh/max in workers unless approved) and route-ledger (records every model and effort choice, with /routing-review)",
    "claude-config: shared rules, three agents (scout on Haiku, builder on Sonnet, reviewer on Opus), an orchestrate skill that runs a feature as parallel background sessions in git worktrees, and installers for macOS, Linux and Windows that merge the shared settings into each device",
    "htmlpub: Clerk-authenticated Next.js dashboard, immutable version history, text-anchored owner comments, a blocking htmlpub review wait so an agent can publish and continue once the review is decided, revocable share links, and an isolated cookie-free renderer for the published HTML",
    "yt-scribe: fetches public YouTube captions without downloading video or audio and polishes them into notes, summaries, cleaned text or article-style prose; stable JSON output, an optional MCP server, and agent skills installed with yt-scribe setup",
  ],
  featuresSv: [
    "wikillm vault-scaffold: npx wikillm frågar efter personligt läge eller projektläge, agentmiljöer, funktioner, domän och valfri automationsvägledning innan vault-strukturen skapas",
    "wikillm-scheman per agentmiljö: CLAUDE.md och AGENTS.md genereras från samma TypeScript-renderare, med kommandoprefix och installations- och uppdateringstext samlade i en profil per miljö",
    "wikillm kompilerad wiki: ingest-skills gör råfiler till markdown-artiklar med ett koncept var, YAML-frontmatter, [[wikilinks]], källspårning, index och git-commits; query läser de kompilerade artiklarna först och lint kontrollerar länkar, frontmatter, föräldralösa sidor, motsägelser, inaktuella påståenden, dubbletter och isolerade grafkluster",
    "wikillm Obsidian- och Marp-integration: skills använder Obsidian CLI för sökning och bakåtlänkar när den finns och kan skapa slides från wikiinnehåll via Marp",
    "babysit-pr: två skills för Claude Code och Codex på GitHub och GitLab. Babysit PR gör avgränsade fixar, validerar och pushar och rapporterar sedan om PR:en är redo, kopplat till dess aktuella head; PR Demo spelar in en kort video av ändringen i funktion (Playwright för webb, VHS för terminalappar) och bifogar den på PR:en med den inspelade committen",
    "berkays-mods: nio Claude Code-mods (två anpassade från andra MIT-projekt), bland dem limit-resume (fortsätter en session när 5-timmarsgränsen nollställs), workers (en panel med alla worker-sessioner), proof-gate (ber en worker som rapporterar klart utan skärmdumpar att skicka dem), effort-gate (blockerar Opus på xhigh/max i workers om inte jag godkänt) och route-ledger (loggar varje modell- och effort-val, med /routing-review)",
    "claude-config: gemensamma regler, tre agenter (scout på Haiku, builder på Sonnet, reviewer på Opus), en orchestrate-skill som kör en feature som parallella bakgrundssessioner i git worktrees samt installerare för macOS, Linux och Windows som slår ihop de delade inställningarna på varje enhet",
    "htmlpub: Clerk-autentiserad Next.js-dashboard, oföränderlig versionshistorik, textförankrade ägarkommentarer, ett blockerande htmlpub review wait så att en agent kan publicera och fortsätta när granskningen är avgjord, återkallbara delningslänkar och en isolerad, cookiefri renderare för den publicerade HTML:en",
    "yt-scribe: hämtar publika YouTube-undertexter utan att ladda ner video eller ljud och polerar dem till anteckningar, sammanfattningar, städad text eller artikelprosa; stabil JSON-utdata, en valfri MCP-server och agent-skills som installeras med yt-scribe setup",
  ],
  challenges: [
    "Keeping Claude Code and Codex first-class without duplicating the whole workflow",
    "Creating vault instructions without clobbering a project's own root CLAUDE.md or AGENTS.md",
    "Making a markdown wiki behave like a maintained knowledge base instead of a loose notes folder",
    "Being honest about automation: wikillm can record commands and prompts, but the host app owns scheduling, and a monitoring skill does not outlive the session unless the host provides an automation facility",
    "Treating a green check as not enough: babysit-pr ties readiness to the current PR head and names a specific blocker (pending checks, missing approvals, conflicts, access) instead",
    "Guardrails that only see text: effort-gate reads the literal command a session runs, so it denies what it cannot parse but cannot see through variables or scripts written and then run",
  ],
  challengesSv: [
    "Hålla Claude Code och Codex förstklassiga utan att duplicera hela arbetsflödet",
    "Skapa vault-instruktioner utan att skriva över projektets egna CLAUDE.md eller AGENTS.md i roten",
    "Få en markdown-wiki att fungera som en underhållen kunskapsbas istället för en lös anteckningsmapp",
    "Vara ärlig med automation: wikillm kan spara kommandon och prompter, men host-appen äger schemaläggningen, och en bevakande skill lever inte vidare efter sessionen om inte hosten har en automationsfunktion",
    "Behandla en grön check som otillräcklig: babysit-pr kopplar statusen till PR:ens aktuella head och pekar i stället ut ett konkret hinder (väntande checkar, saknade godkännanden, konflikter, åtkomst)",
    "Skyddsräcken som bara ser text: effort-gate läser det exakta kommandot en session kör, så den nekar det den inte kan tolka men ser inte genom variabler eller skript som skrivs och sedan körs",
  ],
  solution:
    "Each tool is small and keeps its limits explicit. wikillm separates pure vault planning from disk writes, centralizes host differences in profiles and renders schema files in-process so setup is deterministic; the skills own the long-running behavior, with ingest compiling the wiki, query reading compiled articles first and lint keeping graph health visible. babysit-pr and htmlpub make the agent's work reviewable: a readiness report or a recorded demo for a PR, a versioned page with anchored comments for a report. berkays-mods and claude-config move the supervision into the setup itself, with explicit model and effort per worker, a gate on the expensive choices and a ledger to review them afterwards. yt-scribe keeps the human path to one command and gives agents the same CLI with stable JSON.",
  solutionSv:
    "Varje verktyg är litet och håller sina gränser uttalade. wikillm separerar ren vault-planering från filskrivning, samlar host-skillnader i profiler och renderar schemafiler in-process så setupen blir deterministisk; skillsen äger det långsiktiga beteendet, där ingest kompilerar wikin, query läser kompilerade artiklar först och lint synliggör grafhälsa. babysit-pr och htmlpub gör agentens arbete granskningsbart: en statusrapport eller en inspelad demo för en PR, en versionerad sida med förankrade kommentarer för en rapport. berkays-mods och claude-config flyttar övervakningen in i själva uppsättningen, med uttrycklig modell och effort per worker, en spärr på de dyra valen och en logg att granska dem i efterhand. yt-scribe håller den mänskliga vägen till ett kommando och ger agenter samma CLI med stabil JSON.",
  outcome:
    "Six public repositories under github.com/Berkay2002, each installable on its own: wikillm as an npm CLI plus a Claude Code and Codex plugin bundle, babysit-pr as a plugin for both hosts, berkays-mods and claude-config for Claude Code, htmlpub as a CLI and plugin on top of a web app you deploy yourself, and yt-scribe as a Python CLI. Together they give agents a durable knowledge workflow, a way to show a PR working, and a setup where model choice, effort and review are explicit.",
  outcomeSv:
    "Sex publika repon under github.com/Berkay2002, alla installerbara var för sig: wikillm som npm-CLI plus en pluginbundle för Claude Code och Codex, babysit-pr som plugin för båda hostarna, berkays-mods och claude-config för Claude Code, htmlpub som CLI och plugin ovanpå en webbapp man driftsätter själv samt yt-scribe som Python-CLI. Tillsammans ger de agenter ett hållbart kunskapsflöde, ett sätt att visa att en PR fungerar och en uppsättning där modellval, effort och granskning är uttalade.",
  microservices: [
    {
      name: "wikillm",
      description:
        "CLI and agent plugin that compiles raw sources into a cross-linked Obsidian markdown wiki, with no vector store or RAG pipeline. Ingest, query, lint, Obsidian CLI, Marp and onboarding skills for Claude Code and Codex.",
      descriptionSv:
        "CLI och agentplugin som kompilerar råkällor till en korslänkad Obsidian-wiki i markdown, utan vector store eller RAG-pipeline. Skills för ingest, query, lint, Obsidian CLI, Marp och onboarding för Claude Code och Codex.",
      technologies: ["TypeScript", "Node.js", "Obsidian", "Marp"],
      link: "https://github.com/Berkay2002/wikillm",
    },
    {
      name: "babysit-pr",
      description:
        "PR Toolkit: Babysit PR fixes scoped CI and review feedback and reports verified readiness; PR Demo records a short video of the change and attaches it to the PR. GitHub and GitLab, Claude Code and Codex.",
      descriptionSv:
        "PR Toolkit: Babysit PR åtgärdar avgränsade CI-fel och granskningskommentarer och rapporterar när PR:en verifierat är redo; PR Demo spelar in en kort video av ändringen och bifogar den på PR:en. GitHub och GitLab, Claude Code och Codex.",
      technologies: ["Agent skills", "Playwright", "VHS"],
      link: "https://github.com/Berkay2002/babysit-pr",
    },
    {
      name: "berkays-mods",
      description:
        "Claude Code mods for orchestrator and worker sessions: usage-limit resume, a workers pane, session identity, a proof gate, an effort gate, a routing ledger and config sync.",
      descriptionSv:
        "Claude Code-mods för orkestrator- och worker-sessioner: återupptagning efter användningsgränsen, en workers-panel, sessionsidentitet, en bevisspärr, en effort-spärr, en routinglogg och konfigurationssynk.",
      technologies: ["Claude Code Plugins", "TypeScript"],
      link: "https://github.com/Berkay2002/berkays-mods",
    },
    {
      name: "claude-config",
      description:
        "A cost-first Claude Code setup: Opus plans and reviews, Haiku reads, Sonnet builds, each at an explicit effort level. Rules, agents, an orchestrate skill and installers that keep every device on the same config.",
      descriptionSv:
        "En kostnadsmedveten Claude Code-uppsättning: Opus planerar och granskar, Haiku läser, Sonnet bygger, alla på en uttrycklig effort-nivå. Regler, agenter, en orchestrate-skill och installerare som håller varje enhet på samma konfiguration.",
      technologies: ["Claude Code", "Shell", "PowerShell"],
      link: "https://github.com/Berkay2002/claude-config",
    },
    {
      name: "htmlpub",
      description:
        "Private workspace for publishing self-contained HTML reports: immutable versions, text-anchored comments, blocking agent review waits, revocable share links and an isolated renderer. Includes a Node CLI and Codex and Claude Code plugins.",
      descriptionSv:
        "Privat arbetsyta för att publicera fristående HTML-rapporter: oföränderliga versioner, textförankrade kommentarer, blockerande agentväntan på granskning, återkallbara delningslänkar och en isolerad renderare. Innehåller en Node-CLI samt plugin för Codex och Claude Code.",
      technologies: ["Next.js", "Neon Postgres", "Drizzle", "Clerk", "Vercel Blob"],
      link: "https://github.com/Berkay2002/htmlpub",
    },
    {
      name: "yt-scribe",
      description:
        "Python CLI that fetches public YouTube captions and polishes them into notes, summaries or articles through Codex or OpenCode. Stable JSON for agents and an optional MCP server.",
      descriptionSv:
        "Python-CLI som hämtar publika YouTube-undertexter och polerar dem till anteckningar, sammanfattningar eller artiklar via Codex eller OpenCode. Stabil JSON för agenter och en valfri MCP-server.",
      technologies: ["Python", "youtube-transcript-api", "MCP"],
      link: "https://github.com/Berkay2002/yt-scribe",
    },
  ],
};
