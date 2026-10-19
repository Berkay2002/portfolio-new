import type { Project } from "@/types";

export const researcher: Project = {
  id: "researcher",
  title: "SynGraph: Deep Research Agent",
  description:
    "LangGraph + Next.js workflow that orchestrates supervisor/worker agents for deep research with Tavily and Exa search and clarifying questions to the user.",
  descriptionSv:
    "LangGraph + Next.js-arbetsflöde som orkestrerar supervisor-/worker-agenter för djup research med sökning via Tavily och Exa och förtydligande frågor till användaren.",
  technologies: [
    "TypeScript",
    "Next.js",
    "LangGraph",
    "Google Gemini",
    "Tavily",
    "Exa",
    "Tailwind CSS",
  ],
  link: "https://researcher-eight.vercel.app",
  imageAlt: "SynGraph deep research flow",
  imageAltSv: "SynGraphs flöde för djupresearch",
  detailedDescription:
    "Course project (TNM114) that builds an agentic research stack: a router detects follow-ups vs new requests, a supervisor delegates to parallel researcher agents, and reports are synthesized with citations. Runs on Gemini 3 Pro with a configurable model per node (routing, research, compression, report), and uses Tavily or Exa for web/semantic search.",
  detailedDescriptionSv:
    "Kursprojekt (TNM114) som bygger en agentisk forskningsstack: en router upptäcker uppföljningar kontra nya förfrågningar, en supervisor delegerar till parallella forskaragenter och rapporter syntetiseras med källhänvisningar. Körs på Gemini 3 Pro med konfigurerbar modell per nod (routing, research, komprimering, rapport) och använder Tavily eller Exa för webb-/semantisk sökning.",
  features: [
    "Supervisor-worker LangGraph with typed state and parallel researchers",
    "Asks a clarifying question when a request is ambiguous, before planning",
    "Tavily or Exa search (set per run) with compression and source tracking",
    "Follow-up handling to merge prior context with new queries",
    "Report generation pipeline producing cited research briefs",
  ],
  featuresSv: [
    "Supervisor-worker-LangGraph med typad state och parallella forskare",
    "Ställer en förtydligande fråga när en förfrågan är otydlig, innan planeringen",
    "Sökning med Tavily eller Exa (väljs per körning) med komprimering och källspårning",
    "Uppföljningshantering som slår ihop tidigare kontext med nya frågor",
    "Rapportgenereringspipeline som producerar citerade research-briefs",
  ],
  challenges: [
    "Routing between new research and follow-up answers reliably",
    "Keeping research loops transparent with cited sources",
    "Balancing depth vs speed with a separate model setting per graph node",
  ],
  challengesSv: [
    "Pålitlig routing mellan ny research och uppföljningssvar",
    "Behålla transparens i researchloopar med citerade källor",
    "Balansera djup kontra hastighet med en separat modellinställning per grafnod",
  ],
  solution:
    "Implements typed graph nodes for route/clarify/brief/supervisor/report, integrates Tavily and Exa connectors, and gives each role (routing, follow-up, research, compression, report) its own configurable model, with Gemini 3 Pro as the default.",
  solutionSv:
    "Implementerar typade grafnoder för route/clarify/brief/supervisor/report, integrerar Tavily- och Exa-anslutningar och ger varje roll (routing, uppföljning, research, komprimering, rapport) en egen konfigurerbar modell, med Gemini 3 Pro som standard.",
  outcome:
    "A deep-research flow with clarifying questions, parallel subtopic research and cited reports, written up in a course report.",
  outcomeSv:
    "Ett deep-research-flöde med förtydligande frågor, parallell research per delämne och rapporter med källhänvisningar, beskrivet i en kursrapport.",
  githubLink: "https://github.com/Berkay2002/researcher",
  paperLink: "/papers/syngraph.pdf",
};
