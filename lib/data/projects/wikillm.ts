import type { Project } from "@/types";

export const wikillm: Project = {
  id: "wikillm",
  title: "wikillm: LLM-Maintained Knowledge Bases",
  description:
    "TypeScript CLI and agent plugin that compiles raw sources into cross-linked Obsidian markdown wikis for Claude Code and Codex, without a vector-store RAG stack.",
  descriptionSv:
    "TypeScript-CLI och agentplugin som kompilerar råkällor till korslänkade Obsidian-wikis för Claude Code och Codex, utan en vector-store/RAG-stack.",
  technologies: [
    "TypeScript",
    "Node.js",
    "npm CLI",
    "Inquirer",
    "Obsidian",
    "Markdown",
    "Claude Code Plugins",
    "Codex Plugins",
    "Marp",
  ],
  projectInfo: [
    {
      label: "Type",
      labelSv: "Typ",
      value: "CLI + agent plugin",
      valueSv: "CLI + agentplugin",
    },
    {
      label: "Distribution",
      labelSv: "Distribution",
      value: "npm package + plugin marketplace",
      valueSv: "npm-paket + pluginmarknad",
    },
    {
      label: "CLI command",
      labelSv: "CLI-kommando",
      value: "npx wikillm",
    },
    {
      label: "Agent hosts",
      labelSv: "Agent-hostar",
      value: "Claude Code and Codex",
      valueSv: "Claude Code och Codex",
    },
    {
      label: "Knowledge model",
      labelSv: "Kunskapsmodell",
      value: "Compiled markdown wiki",
      valueSv: "Kompilerad markdown-wiki",
    },
  ],
  projectLinks: [
    {
      label: "View npm package",
      labelSv: "Visa npm-paket",
      icon: "npm",
      href: "https://www.npmjs.com/package/wikillm",
    },
    {
      label: "Copy Claude Code install",
      labelSv: "Kopiera Claude Code-installation",
      icon: "claude",
      command:
        "/plugin marketplace add Berkay2002/wikillm\n/plugin install wikillm@wikillm\n/reload-plugins",
    },
    {
      label: "Copy Codex install",
      labelSv: "Kopiera Codex-installation",
      icon: "openai",
      command: "codex plugin marketplace add Berkay2002/wikillm",
    },
  ],
  imageAlt: "wikillm knowledge base scaffold and agent workflow",
  detailedDescription:
    "wikillm is a TypeScript CLI and plugin bundle for building LLM-maintained markdown knowledge bases. The npx wizard creates a vault with raw sources, compiled wiki articles, Obsidian config, host-specific CLAUDE.md and AGENTS.md schemas, optional outputs, and automation guidance. The plugin ships skills for ingest, query, lint, Obsidian CLI, Marp, schema regeneration, and onboarding across Claude Code and Codex.",
  detailedDescriptionSv:
    "wikillm är en TypeScript-CLI och pluginbundle för LLM-underhållna kunskapsbaser i markdown. npx-guiden skapar ett vault med råkällor, kompilerade wikiartiklar, Obsidian-konfiguration, host-specifika CLAUDE.md- och AGENTS.md-scheman, valfria outputs och automationsvägledning. Pluginet skickar med skills för ingest, query, lint, Obsidian CLI, Marp, schemagenerering och onboarding för både Claude Code och Codex.",
  features: [
    "Interactive vault scaffold: npx wikillm asks for personal/project mode, host targets, features, domain, and optional schedule before creating the vault structure",
    "Host-aware schemas: CLAUDE.md and AGENTS.md are generated from the same TypeScript renderer, with command prefixes and install/update copy kept in host profiles",
    "Compiled wiki workflow: ingest skills turn raw files into one-concept markdown articles with YAML frontmatter, [[wikilinks]], provenance, indices, and git commits",
    "Query and lint skills: query starts from compiled wiki articles and graph traversal, while lint checks links, frontmatter, orphans, contradictions, stale claims, duplicates, and graph clusters",
    "Obsidian and Marp integration: skills use Obsidian CLI for search/backlinks when available and can generate slide decks from wiki content through Marp",
    "Automation guidance: the CLI writes .wikillm/automation.json prompts for Claude Desktop or Codex automations, but leaves actual scheduling to the selected host",
  ],
  featuresSv: [
    "Interaktiv vault-scaffold: npx wikillm frågar om personal/project-läge, hostar, features, domän och eventuell schemaläggning innan vault-strukturen skapas",
    "Host-medvetna scheman: CLAUDE.md och AGENTS.md genereras från samma TypeScript-renderare, med kommandoprefix och install/update-text samlade i host-profiler",
    "Kompilerat wiki-flöde: ingest-skills gör råfiler till en-koncept-artiklar i markdown med YAML-frontmatter, [[wikilinks]], proveniens, index och git-commits",
    "Query- och lint-skills: query börjar i kompilerade wikiartiklar och graftraversering, medan lint kontrollerar länkar, frontmatter, orphans, motsägelser, stale claims, duplicat och grafkluster",
    "Obsidian- och Marp-integration: skills använder Obsidian CLI för sök/backlinks när det finns och kan skapa slides från wikiinnehåll via Marp",
    "Automationsvägledning: CLI:n skriver .wikillm/automation.json-prompter för Claude Desktop eller Codex-automationer, men låter vald host skapa själva schemat",
  ],
  challenges: [
    "Keeping Claude Code and Codex first-class without duplicating the whole workflow",
    "Creating vault instructions without clobbering a project's own root CLAUDE.md or AGENTS.md",
    "Making a markdown wiki behave like a maintained knowledge base instead of a loose notes folder",
    "Being honest about automation: the CLI can record commands and prompts, but the host app still owns scheduling",
  ],
  challengesSv: [
    "Hålla Claude Code och Codex förstklassiga utan att duplicera hela arbetsflödet",
    "Skapa vault-instruktioner utan att skriva över projektets egna CLAUDE.md eller AGENTS.md i roten",
    "Få en markdown-wiki att fungera som en underhållen kunskapsbas istället för en lös anteckningsmapp",
    "Vara ärlig med automation: CLI:n kan spara kommandon och prompter, men host-appen äger fortfarande schemaläggningen",
  ],
  solution:
    "The implementation separates pure vault planning from disk writes, centralizes host differences in profiles, and renders schema files in-process so setup is deterministic. The skills define the long-running behavior: ingest owns wiki compilation, query reads compiled articles first, lint keeps graph health visible, and automation metadata stays explicit rather than pretending the CLI installed a scheduler.",
  solutionSv:
    "Implementationen separerar ren vault-planering från filskrivning, samlar host-skillnader i profiler och renderar schemafiler in-process så setupen blir deterministisk. Skillsen definierar det långsiktiga beteendet: ingest äger wiki-kompileringen, query läser kompilerade artiklar först, lint synliggör grafhälsa och automationsmetadata hålls explicit istället för att låtsas att CLI:n installerade ett schema.",
  outcome:
    "Ships as an npm CLI plus Claude Code/Codex plugin bundle. It gives agents a durable, plain-markdown knowledge workflow where expensive synthesis happens once during ingest, then later questions read the compiled wiki directly.",
  outcomeSv:
    "Skickas som npm-CLI plus pluginbundle för Claude Code och Codex. Det ger agenter ett hållbart kunskapsflöde i ren markdown där dyr syntes görs en gång vid ingest, och senare frågor läser den kompilerade wikin direkt.",
  githubLink: "https://github.com/Berkay2002/wikillm",
};
