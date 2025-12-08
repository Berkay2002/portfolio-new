import type { Project } from "@/types";

export const researcher: Project = {
  id: "researcher",
  title: "SynGraph: Deep Research Agent",
  description:
    "LangGraph + Next.js workflow that orchestrates supervisor/worker agents for deep research with dual search engines and human clarifications.",
  descriptionSv:
    "LangGraph + Next.js-arbetsflöde som orkestrerar supervisor-/worker-agenter för djup research med dubbla sökmotorer och mänskliga förtydliganden.",
  technologies: [
    "TypeScript",
    "Next.js",
    "LangGraph",
    "Google Gemini",
    "Tavily",
    "Exa",
    "MDX",
  ],
  link: "https://github.com/Berkay2002/researcher",
  imageAlt: "SynGraph deep research flow",
  detailedDescription:
    "Course project (TNM114) that builds an agentic research stack: a router detects follow-ups vs new requests, a supervisor delegates to parallel researcher agents, and reports are synthesized with citations. Uses Gemini 3 Pro for reasoning, Gemini 2.5 Flash for routing/summarization, and Tavily + Exa for web/semantic search.",
  detailedDescriptionSv:
    "Kursprojekt (TNM114) som bygger en agentisk forskningsstack: en router upptäcker uppföljningar kontra nya förfrågningar, en supervisor delegerar till parallella forskaragenter och rapporter syntetiseras med källhänvisningar. Använder Gemini 3 Pro för resonemang, Gemini 2.5 Flash för routing/summering samt Tavily + Exa för webb-/semantisk sökning.",
  features: [
    "Supervisor-worker LangGraph with typed state and parallel researchers",
    "Clarification interrupts for ambiguous requests before planning",
    "Dual search (Tavily + Exa) with compression and source tracking",
    "Follow-up handling to merge prior context with new queries",
    "Report generation pipeline producing cited research briefs",
  ],
  featuresSv: [
    "Supervisor-worker-LangGraph med typad state och parallella forskare",
    "Förtydligandeinterrupter för otydliga förfrågningar innan planering",
    "Dubbel sökning (Tavily + Exa) med komprimering och källspårning",
    "Uppföljningshantering som slår ihop tidigare kontext med nya frågor",
    "Rapportgenereringspipeline som producerar citerade research-briefs",
  ],
  challenges: [
    "Routing between new research and follow-up answers reliably",
    "Keeping research loops transparent with cited sources",
    "Balancing depth vs speed across Gemini Pro and Flash roles",
  ],
  challengesSv: [
    "Pålitlig routing mellan ny research och uppföljningssvar",
    "Behålla transparens i researchloopar med citerade källor",
    "Balansera djup kontra hastighet mellan Gemini Pro och Flash-roller",
  ],
  solution:
    "Implements typed graph nodes for route/clarify/brief/supervisor/report, integrates Tavily and Exa connectors, and separates model roles so heavy reasoning stays on Gemini Pro while fast routing/summarization uses Flash.",
  solutionSv:
    "Implementerar typade grafnoder för route/clarify/brief/supervisor/report, integrerar Tavily- och Exa-anslutningar och separerar modellroller så tungt resonemang körs på Gemini Pro medan snabb routing/summering använder Flash.",
  outcome:
    "Demonstrates reliable deep-research UX with human-in-the-loop clarifications, parallel subtopic exploration, and cited reports suitable for coursework assessment.",
  outcomeSv:
    "Visar en pålitlig deep-research-upplevelse med mänskliga förtydliganden, parallell delämnesutforskning och citerade rapporter som passar kursbedömning.",
  githubLink: "https://github.com/Berkay2002/researcher",
};
