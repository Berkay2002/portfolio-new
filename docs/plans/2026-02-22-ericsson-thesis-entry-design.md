# Design: Add Ericsson Master's Thesis Entry to Portfolio Timeline

**Date:** 2026-02-22  
**Author:** Selin (AI assistant)  
**Status:** Approved

---

## Summary

Add a new `work` type timeline entry for Berkay's master's thesis placement at Ericsson, running January 19 – June 8, 2025 (20 weeks). The thesis is titled *"Agentic RAG with Knowledge Graphs for Test Scope Analysis"* and was conducted in an industrial CI/CD environment.

---

## Data Shape

The entry follows the existing `TimelineEvent` type in `lib/data/portfolio-data.ts`:

```ts
{
  id: "ericsson-thesis",
  title: "Master's Thesis – Agentic HybridRAG for Test Scope Analysis",
  titleSv: "Examensarbete – Agentbaserad HybridRAG för testomfångsanalys",
  location: "Ericsson",
  locationSv: "Ericsson",
  description: "Designed and evaluated an agentic retrieval assistant for recommending relevant test cases in industrial CI/CD workflows, combining hybrid RAG, knowledge graphs, and polyglot persistence.",
  descriptionSv: "Utformade och utvärderade ett agentbaserat retrieval-system för att rekommendera relevanta testfall i industriella CI/CD-flöden, med kombination av hybrid-RAG, kunskapsgrafer och polyglot persistens.",
  detailedDescription: "...(full EN text)...",
  detailedDescriptionSv: "...(full SV text)...",
  date: "Jan 2025 – Jun 2025",
  type: "work",
}
```

---

## Placement

Appended at the end of `timelineEvents[]` in `lib/data/portfolio-data.ts`, after the existing `masters` entry. The commented-out `internship` stub remains as-is.

---

## Detailed Descriptions

### English
Conducted a 20-week master's thesis at Ericsson, investigating how to improve the reliability of an agentic retrieval assistant for test scope analysis in a large-scale industrial CI/CD environment. The system — referred to as Agentic HybridRAG — combines dense semantic retrieval, sparse lexical matching, and bounded knowledge-graph navigation within an agentic ReAct-style workflow. Artifacts (requirements, test cases, defect reports, trace links) are stored across polyglot backends (relational, vector, graph) and enriched before indexing. Research questions covered benchmark design for heterogeneous retrieval, the effect of agent workflow and tool-interface strictness on retrieval quality, and how LLM characteristics (instruction tuning, MoE vs. dense) affect tool-use reliability. Evaluation combined IR metrics (Precision@k, Recall@k, MAP) with LLM-as-a-judge scoring and practitioner usability assessment.

### Swedish
Genomförde ett 20-veckors examensarbete på Ericsson med fokus på att förbättra tillförlitligheten hos ett agentbaserat retrieval-system för testomfångsanalys i en storskalig industriell CI/CD-miljö. Systemet — kallat Agentic HybridRAG — kombinerar tät semantisk sökning, gles lexikal matchning och begränsad kunskapsgrafnavigering inom ett agentbaserat ReAct-arbetsflöde. Artefakter (krav, testfall, felrapporter, spårlänkar) lagras i polyglota backends (relationsdatabas, vektordatabas, grafdatabas) och berikas innan indexering. Forskningsfrågorna täckte benchmark-design för heterogen retrieval, effekten av agentarbetsflöde och verktygsstrikthet på retrieval-kvalitet, samt hur LLM-egenskaper (instruktionstuning, MoE vs. tät modell) påverkar tillförlitlig verktygsanvändning. Utvärderingen kombinerade IR-mätvärden (Precision@k, Recall@k, MAP) med LLM-som-domare-poängsättning och användbarhetsbedömning av praktiker.

---

## Files to Change

| File | Change |
|------|--------|
| `lib/data/portfolio-data.ts` | Add new `ericsson-thesis` entry to `timelineEvents[]` |

No component changes needed — the timeline renders dynamically from the data array.

---

## Success Criteria

- Entry appears in the timeline with correct date, title, location
- `type: "work"` renders it in the work/experience section
- Both EN and SV descriptions are populated
- `bun run build` passes with no errors
