export const syngraphPaper = {
  title: "SynGraph: Deep Research Agent",
  authors: ["Berkay Orhan"],
  abstractContent:
    "SynGraph documents a LangGraph-based research agent that routes user prompts, clarifies ambiguity, orchestrates parallel researcher workers, and synthesizes cited briefs. The stack pairs Gemini models for reasoning and routing with dual web/semantic search (Tavily + Exa) to keep outputs grounded.",
  sections: [
    {
      title: "Overview",
      content:
        "The paper outlines a supervisor-worker graph where a router detects follow-ups versus new asks, a supervisor fans out parallel researcher agents, and a report node merges findings with citations. Human-in-the-loop clarifications reduce off-topic branches, and typed state keeps the graph predictable.",
    },
    {
      title: "Tooling",
      content:
        "SynGraph uses Gemini 3 Pro for deep reasoning, Gemini 2.5 Flash for routing and summarization, and Tavily plus Exa for complementary web and semantic search. Results are compressed and merged before the report is produced.",
    },
    {
      title: "Outcomes",
      content:
        "The system delivers cited briefs that balance speed and depth, demonstrating reliable follow-up handling and source transparency suitable for coursework assessment (TNM114).",
    },
  ],
  pdfUrl: "/papers/syngraph.pdf",
};