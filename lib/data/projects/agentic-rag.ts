import type { Project } from "@/types";

export const agenticRag: Project = {
  id: "agentic-rag",
  title: "Agentic GraphRAG for Test Scope Analysis",
  description:
    "Master's thesis system that fuses knowledge graphs, pgvector, and human-in-the-loop agents to answer test-scope questions for telecom software.",
  descriptionSv:
    "Examensarbetesystem som kombinerar kunskapsgrafer, pgvector och human-in-the-loop-agenter för att svara på testfrågor inom telekommjukvara.",
  technologies: [
    "Python",
    "LangChain",
    "LangGraph",
    "Neo4j",
    "PostgreSQL",
    "pgvector",
    "BM25",
    "Docling",
    "Poetry",
  ],
  link: "https://github.com/Berkay2002/agentic-rag-test-scope-analysis",
  imageAlt: "Agentic GraphRAG architecture diagram",
  detailedDescription:
    "Research-grade agentic RAG that evaluates retrieval strategies (vector, keyword, graph, hybrid) over Neo4j + PostgreSQL, with LangChain create_agent orchestration, middleware for limits/PII, and HITL checkpoints. Includes ingestion pipelines powered by Docling and Tree-sitter plus full evaluation metrics (P@k, MAP, MRR).",
  detailedDescriptionSv:
    "Forskningsfokuserad agentisk RAG som utvärderar sökstrategier (vektor, nyckelord, graf, hybrid) över Neo4j + PostgreSQL, med LangChain create_agent-orkestrering, middleware för limiter/PII och HITL-checkpoints. Innehåller ingest-pipelines med Docling och Tree-sitter samt kompletta utvärderingsmått (P@k, MAP, MRR).",
  features: [
    "Dual storage: Neo4j knowledge graph + Postgres/pgvector + BM25",
    "@tool-based retrieval suite (vector, keyword, graph traverse, hybrid RRF)",
    "LangChain create_agent with middleware (model/tool limits, PII, HITL)",
    "Docling-based document loader and AST-aware code loader via Tree-sitter",
    "Evaluation CLI with precision/recall/MAP/MRR across strategies",
  ],
  featuresSv: [
    "Dubbellagring: Neo4j-kunskapsgraf + Postgres/pgvector + BM25",
    "@tool-baserad hämtningssvit (vektor, nyckelord, graftraversering, hybrid RRF)",
    "LangChain create_agent med middleware (modell-/verktygsgränser, PII, HITL)",
    "Docling-baserad dokumentladdare och AST-medveten kodladdare via Tree-sitter",
    "Utvärderings-CLI med precision/recall/MAP/MRR över strategier",
  ],
  challenges: [
    "Aligning graph, vector, and lexical retrieval quality for test queries",
    "Keeping agent tool use safe via limits and human approvals",
    "Building reproducible ingestion across diverse document and code formats",
  ],
  challengesSv: [
    "Justera graf-, vektor- och lexikalisk sökkvalitet för testfrågor",
    "Hålla agentens verktygsanvändning säker via begränsningar och mänskliga godkännanden",
    "Bygga reproducerbar ingestion över många dokument- och kodformat",
  ],
  solution:
    "Implements modular @tool factories, dual storage writers with retries, HITL middleware, and configurable Gemini thinking budgets. Provides CLI commands for chat, query, load, ingest, evaluate, and info to reproduce experiments.",
  solutionSv:
    "Implementerar modulära @tool-fabriker, dubbla lagringssidor med retries, HITL-middleware och konfigurerbara Gemini thinking-budgetar. Tillhandahåller CLI-kommandon för chat, query, load, ingest, evaluate och info för att återskapa experiment.",
  outcome:
    "Delivers a transparent research artifact for Ericsson collaboration, enabling side-by-side evaluation of retrieval strategies and agent behaviors with full observability via LangSmith.",
  outcomeSv:
    "Ger ett transparent forskningsartefakt för samarbete med Ericsson, som möjliggör jämförande utvärdering av sökstrategier och agentbeteenden med full observabilitet via LangSmith.",
  githubLink: "https://github.com/Berkay2002/agentic-rag-test-scope-analysis",
  paperLink: undefined,
};
