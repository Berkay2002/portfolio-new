# Ericsson Thesis Timeline Entry Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a new `work` type timeline entry for Berkay's master's thesis at Ericsson (Jan 2025 – Jun 2025) to the portfolio timeline.

**Architecture:** Single data file change — append a new `TimelineEvent` object to `timelineEvents[]` in `lib/data/portfolio-data.ts`. No component changes required; the timeline renders dynamically from the array.

**Tech Stack:** TypeScript, Next.js 16, Bun

---

### Task 1: Add the Ericsson thesis entry to portfolio data

**Files:**
- Modify: `lib/data/portfolio-data.ts` (end of `timelineEvents[]`, before the closing `];`)

**Step 1: Open the file and locate the insertion point**

Find the end of `timelineEvents[]` in `lib/data/portfolio-data.ts` — right before the closing `];` after the commented-out `internship` block.

**Step 2: Insert the new entry**

Add the following object after the `masters` entry (and after the commented-out internship block):

```ts
{
  id: "ericsson-thesis",
  title: "Master's Thesis – Agentic HybridRAG for Test Scope Analysis",
  titleSv: "Examensarbete – Agentbaserad HybridRAG för testomfångsanalys",
  location: "Ericsson",
  locationSv: "Ericsson",
  description:
    "Designed and evaluated an agentic retrieval assistant for recommending relevant test cases in industrial CI/CD workflows, combining hybrid RAG, knowledge graphs, and polyglot persistence.",
  descriptionSv:
    "Utformade och utvärderade ett agentbaserat retrieval-system för att rekommendera relevanta testfall i industriella CI/CD-flöden, med kombination av hybrid-RAG, kunskapsgrafer och polyglot persistens.",
  detailedDescription:
    "Conducted a 20-week master's thesis at Ericsson, investigating how to improve the reliability of an agentic retrieval assistant for test scope analysis in a large-scale industrial CI/CD environment. The system — referred to as Agentic HybridRAG — combines dense semantic retrieval, sparse lexical matching, and bounded knowledge-graph navigation within an agentic ReAct-style workflow. Artifacts (requirements, test cases, defect reports, trace links) are stored across polyglot backends (relational, vector, and graph) and enriched before indexing. Research questions covered benchmark design for heterogeneous retrieval, the effect of agent workflow and tool-interface strictness on retrieval quality, and how LLM characteristics (instruction tuning, MoE vs. dense) affect tool-use reliability. Evaluation combined IR metrics (Precision@k, Recall@k, MAP) with LLM-as-a-judge scoring and practitioner usability assessment.",
  detailedDescriptionSv:
    "Genomförde ett 20-veckors examensarbete på Ericsson med fokus på att förbättra tillförlitligheten hos ett agentbaserat retrieval-system för testomfångsanalys i en storskalig industriell CI/CD-miljö. Systemet — kallat Agentic HybridRAG — kombinerar tät semantisk sökning, gles lexikal matchning och begränsad kunskapsgrafnavigering inom ett agentbaserat ReAct-arbetsflöde. Artefakter (krav, testfall, felrapporter, spårlänkar) lagras i polyglota backends (relationsdatabas, vektordatabas, grafdatabas) och berikas innan indexering. Forskningsfrågorna täckte benchmark-design för heterogen retrieval, effekten av agentarbetsflöde och verktygsstrikthet på retrieval-kvalitet, samt hur LLM-egenskaper (instruktionstuning, MoE vs. tät modell) påverkar tillförlitlig verktygsanvändning. Utvärderingen kombinerade IR-mätvärden (Precision@k, Recall@k, MAP) med LLM-som-domare-poängsättning och användbarhetsbedömning av praktiker.",
  date: "Jan 2025 – Jun 2025",
  type: "work",
},
```

**Step 3: Verify TypeScript compiles**

```bash
cd ~/dev/portfolio-new && bun run build
```

Expected: clean build, 26+ pages, no TypeScript errors.

**Step 4: Commit**

```bash
cd ~/dev/portfolio-new
git add lib/data/portfolio-data.ts docs/plans/
git commit -m "feat: add Ericsson master's thesis entry to timeline"
```

---

### Task 2: Push to origin

```bash
cd ~/dev/portfolio-new && git push
```

Expected: branch `main` pushed to `origin/main`.
