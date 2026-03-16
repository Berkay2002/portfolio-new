---
name: project
description: Add or update a portfolio project entry by deeply exploring a GitHub repo (or local path). Use when adding a new project, updating an existing one after major changes, refreshing a stale entry, or when the user provides a GitHub URL or repo name and wants it in the portfolio. Trigger on "add project", "update project", "refresh project", "sync project", or any mention of portfolio project entries.
disable-model-invocation: true
---

# Portfolio Project Manager

Adds new or updates existing project data modules in `lib/data/projects/` by deeply exploring the actual codebase — not just the README.

## Detect Mode

Check whether `lib/data/projects/{kebab-name}.ts` already exists:

- **Exists** → Update mode: read the current entry, explore the repo, generate an updated version, show a diff
- **Doesn't exist** → Create mode: explore the repo, generate a new entry, register it

The user will typically mention whether it's new or an update. If ambiguous, check the filesystem.

## Input Modes

The argument determines how context is gathered:

| Argument | Mode | Example |
|----------|------|---------|
| GitHub URL | Deep repo exploration | `/project https://github.com/Berkay2002/foo` |
| `owner/repo` | Deep repo exploration | `/project Berkay2002/foo` |
| Repo name (assumes `Berkay2002/`) | Deep repo exploration | `/project foo` |
| Local path | Read local files | `/project ./path/to/project` |

If the argument looks like it could be a repo name under `Berkay2002/`, try the GitHub path first. If that fails (404), fall back to treating it as a plain project name and ask the user for details manually.

## Reference Files

Before generating any project entry, read these bundled reference files:

- **`references/examples.md`** — real project entry examples at different complexity levels (simple, medium, complex with microservices). Explorers and the synthesizer should read this to match tone and structure.
- **`references/project-type.md`** — the full `Project` type definition with field annotations. Read this to know which fields to populate and what each field expects.

Instruct explorer agents to read these files before writing their reports, and read them yourself before synthesizing the final entry.

## Phase 1: Deep Repo Exploration (GitHub Mode)

The README is a starting point, not the answer. The goal is to understand the project deeply enough to describe it better than the README does.

### Step 1: Locate the repo locally or clone it

Always prefer working with local files — it's faster, more powerful, and avoids API rate limits.

**1a. Check if the repo already exists locally.** Search these paths for a directory matching the repo name:

```bash
find ~/personal ~/projects ~/ -maxdepth 2 -type d -name "{repo-name}" 2>/dev/null | head -5
```

Also check current working directory siblings (e.g., `../{repo-name}`).

**1b. If found locally** → use that path directly. No clone needed. Set `REPO_PATH` to the found directory.

**1c. If not found locally** → clone into a temp directory:

```bash
TEMP_DIR=$(mktemp -d)
git clone --depth 1 https://github.com/{owner}/{repo}.git "$TEMP_DIR/{repo-name}"
REPO_PATH="$TEMP_DIR/{repo-name}"
```

> **Cleanup note:** If a temp clone was created, clean it up (`rm -rf "$TEMP_DIR"`) after the skill completes (after Phase 3).

### Step 2: Gather orientation

Fetch repo metadata via `gh` CLI (still useful for description, topics, languages, homepage URL):

```bash
gh repo view {owner/repo} --json name,description,repositoryTopics,languages,url,homepageUrl
```

Then use local file tools to explore the codebase:

```
# Read the README
Read: $REPO_PATH/README.md

# Discover the file tree
Glob: $REPO_PATH/**/*  (or use `ls -R` for a quick overview)

# Read package manifests
Read: $REPO_PATH/package.json
Read: $REPO_PATH/pyproject.toml
Read: $REPO_PATH/Cargo.toml
# (whichever exists)
```

### Step 3: Identify exploration areas

From the file tree and README, identify 3-5 distinct areas of the codebase worth exploring. Think like a developer trying to understand what this project actually does. Typical areas:

- **Core logic / business domain** — the files where the main thing happens (agents, pipelines, algorithms, core modules)
- **API / backend** — routes, handlers, server config
- **Frontend / UI** — pages, components, layouts
- **Infrastructure** — Docker, CI/CD, deployment configs
- **Data layer** — schemas, models, database setup, embeddings

### Step 4: Spawn parallel explorer agents

For each area, spawn an Agent (general-purpose subagent) in parallel. Each explorer uses native file tools — `Read`, `Grep`, and `Glob` — to explore the local codebase. This is much more powerful than API-based file fetching: no base64 decoding, no rate limits, and agents can search for patterns across the codebase.

Each explorer should:

1. Use `Read` to read specific source files from the local repo path
2. Use `Grep` to search for patterns across the codebase (imports, function definitions, config keys)
3. Use `Glob` to discover files by pattern (e.g., `**/*.ts`, `**/docker-compose*`)
4. Read the actual source code — not just config files
5. Answer these questions in its report:
   - What does this subsystem do, concretely?
   - What technologies/libraries does it use?
   - What's architecturally interesting or non-obvious?
   - What challenges would the developer have faced?

**Explorer prompt template:**

```
Explore the "{area_name}" area of the project at {REPO_PATH}.

First, read the reference files to understand the expected output format:
- Read: {skill_dir}/references/examples.md
- Read: {skill_dir}/references/project-type.md

Then explore these files using local file tools:
{list of 5-15 file paths relevant to this area}

Use these tools to explore:
- Read: to read specific files (use absolute paths like {REPO_PATH}/src/main.ts)
- Grep: to search for patterns (e.g., imports, function names, config keys) within {REPO_PATH}
- Glob: to find files by pattern (e.g., {REPO_PATH}/**/*.ts)

Read the actual code. Then write a concise report (200-400 words) answering:
1. What does this subsystem do, concretely? Be specific — don't just repeat the README.
2. What technologies and libraries does it use? List exact package names.
3. What's architecturally interesting or non-obvious about the implementation?
4. What challenges would building this have involved?

Do NOT write any files. Just return your report as text.
```

Give each explorer only files relevant to its area. Aim for 5-15 files per explorer — enough to understand the area, not so many that context fills up.

### Step 5: Synthesize into project entry

Once all explorers report back, combine their findings into the project data. Read the reference files yourself (`references/examples.md` and `references/project-type.md`) before writing the entry. The descriptions should be:

- **Specific and technical** — mention actual technologies, patterns, and architecture decisions
- **Grounded in code** — describe what the code does, not what the README claims
- **Honest about scope** — don't inflate a small utility into a platform
- **Consistent in tone** — match existing entries (see `references/examples.md` for calibration)

## Phase 2: Generate the Project Entry

### Derive identifiers

From the repo name or provided project name:
- **File name**: kebab-case → `lib/data/projects/{kebab-name}.ts`
- **Export name**: camelCase (e.g. `my-cool-app` → `myCoolApp`)
- **Project ID**: kebab-case, must be URL-safe (drives `/projects/[id]` route)

For create mode: verify the ID doesn't collide with existing project IDs in `portfolio-data.ts`.

### Draft the module

Generate the full `Project` object. All user-facing strings need both EN and SV variants. Write Swedish translations yourself — use informal-professional tone matching existing entries.

```typescript
import type { Project } from "@/types";

export const {camelName}: Project = {
  id: "{kebab-name}",
  title: "{Title}",
  description: "{EN description — one compelling sentence}",
  descriptionSv: "{SV description}",
  technologies: [/* actual technologies from code, not just languages */],
  link: "{repo URL or live site}",
  githubLink: "{repo URL}",
  detailedDescription: "{EN — 2-4 sentences grounded in what the code actually does}",
  detailedDescriptionSv: "{SV}",
  features: [/* 4-7 specific features, each one sentence */],
  featuresSv: [/* SV versions */],
  challenges: [/* 2-4 real engineering challenges */],
  challengesSv: [/* SV versions */],
  solution: "{EN — how the challenges were addressed, mentioning specific tech}",
  solutionSv: "{SV}",
  outcome: "{EN — what the project achieves or demonstrates}",
  outcomeSv: "{SV}",
  // Include these only if applicable:
  // frontendLink, playgroundLink, paperLink, microservices, gallery
};
```

Rules:
- Import type from `@/types` (not a relative path)
- Every user-facing string field needs both EN and SV variants
- Only include fields that have actual content — omit undefined optionals entirely
- Don't set `image: undefined` — just omit the field
- Match the formatting style of existing modules (see `researcher.ts`, `animatch.ts`, `fasttalk.ts`)

### Present draft for approval

**Create mode:** Show the complete generated entry to the user before writing any files.

**Update mode:** Show a clear before/after comparison highlighting what changed and why. Call out:
- New or removed technologies
- Changed descriptions (and what prompted the change from the code)
- Added/updated features, challenges, solution, outcome
- Any fields that stayed the same (briefly, so the user knows nothing was lost)

The user may want to:
- Adjust wording or emphasis
- Keep some original text over the generated version
- Add/remove features
- Correct technical details
- Add gallery images or paper links

## Phase 3: Write and Register

Only after user approval:

### Create mode

1. **Create the module file** — write to `lib/data/projects/{kebab-name}.ts`
2. **Register in portfolio-data.ts** — add two things:
   - **Import** — add alphabetically among the existing project imports:
     ```typescript
     import { camelName } from "./projects/{kebab-name}";
     ```
   - **Array entry** — add to the `projects` array. Place near the top for recent projects, or ask the user.

### Update mode

1. **Overwrite the module file** — replace the contents of `lib/data/projects/{kebab-name}.ts`
2. **No registration needed** — the import and array entry already exist in `portfolio-data.ts`

### Verify

Run `bun run lint` and `bun run build` to confirm no errors.

### Confirm

Tell the user:
- The file created/updated and its path
- Project ID → URL will be `/projects/{kebab-name}`
- For create mode: remind them to add images to `public/images/projects/{kebab-name}/` and paper PDFs to `public/papers/` if relevant
- For update mode: summarize what changed
