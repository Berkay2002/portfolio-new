import type { Project } from "@/types";

export const agenticRag: Project = {
  id: "agentic-rag",
  title: "Agentic GraphRAG: Test Scope Analysis",
  description:
    "Thesis-grade agentic GraphRAG built for Ericsson: dynamic tool-orchestrated retrieval over knowledge graphs + pgvector with guardrails for telecom test scope analysis.",
  descriptionSv:
    "Examensarbetesystem för Ericsson: agentisk GraphRAG med dynamisk verktygsorkestrering över kunskapsgraf + pgvector och guardrails för testomfattningsanalys.",
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
    "Dynamic GraphRAG agent that follows information scent: a LangChain create_agent orchestrates vector, BM25, graph traversals, and hybrid RRF based on query intent over Neo4j + Postgres/pgvector. Implements safe vs YOLO modes with deterministic guardrails (PII scrubbing, existence checks) and HITL interrupts. Ingestion uses Docling for PDFs and Tree-sitter for AST-aware chunking, with entity linking into a software QA ontology. Evaluation harness is wired for P@k/MAP/MRR with LangSmith traces; evaluation runs are ongoing.",
  detailedDescriptionSv:
    "Dynamisk GraphRAG-agent som följer informationsdoft: en LangChain create_agent orkestrerar vektor-, BM25-, graf- och hybrid-RRF-sök beroende på frågeintent över Neo4j + Postgres/pgvector. Implementerar Safe vs YOLO-lägen med deterministiska guardrails (PII-scrubbing, existenskontroller) och HITL-avbrott. Ingestion använder Docling för PDF:er och Tree-sitter för AST-medveten chunking med entitetslänkning in i en QA-ontologi. Utvärderingsramverket är kopplat för P@k/MAP/MRR med LangSmith-spår; utvärderingskörningar pågår.",
  features: [
    "Dynamic agent picks vector, BM25, graph traverse, or hybrid RRF per query scent",
    "Knowledge graph ontology for requirements->code->tests with dual storage (Neo4j + pgvector)",
    "Guardrailed agent modes: Safe (HITL/PII checks) vs YOLO for faster iteration",
    "Docling + Tree-sitter ingestion for PDFs/specs and structure-aware chunking",
    "Evaluation CLI with LangSmith traces and P@k/Recall/MAP/MRR across strategies",
  ],
  featuresSv: [
    "Dynamisk agent väljer vektor, BM25, graftraversering eller hybrid RRF per informationsdoft",
    "Kunskapsgraf-ontologi för krav->kod->tester med dubbellagring (Neo4j + pgvector)",
    "Guardrail-lägen: Safe (HITL/PII-kontroller) vs YOLO för snabbare iteration",
    "Docling + Tree-sitter-ingest för PDF:er/specar och strukturanpassad chunking",
    "Utvärderings-CLI med LangSmith-spår och P@k/Recall/MAP/MRR över strategier",
  ],
  challenges: [
    "Entity linking noisy test cases and change requests into the graph ontology",
    "Balancing semantic, lexical, and structural retrieval without adding noise",
    "Maintaining guardrails (PII, HITL) while keeping agent loops responsive",
  ],
  challengesSv: [
    "Entitetslänka brusiga testfall och change requests in i grafontologin",
    "Balansera semantisk, lexikalisk och strukturell retrieval utan att addera brus",
    "Bibehålla guardrails (PII, HITL) och samtidigt hålla agentloopen responsiv",
  ],
  solution:
    "Modular tool factories (vector_search, graph_traverse, hybrid_search), dual-store writers with retries, and Safe/YOLO toggles backed by PII scrubbing + HITL interrupts. CLI supports chat, ingest, ontology load, and eval to reproduce Ericsson experiments with controllable thinking budgets.",
  solutionSv:
    "Modulära verktygsfabriker (vector_search, graph_traverse, hybrid_search), dubbla skrivare med retries samt Safe/YOLO-brytare med PII-scrubbing och HITL-avbrott. CLI täcker chat, ingest, ontologi-load och eval för att återskapa Ericsson-experiment med styrbara thinking-budgetar.",
  outcome:
    "Used as the Ericsson master’s thesis artifact; evaluation runs are ongoing with side-by-side baselines (BM25/vector/graph/hybrid vs agentic) instrumented in LangSmith for traceable practitioner feedback.",
  outcomeSv:
    "Används som examensartefakt för Ericsson; utvärderingskörningar pågår med jämförelser mellan BM25/vektor/graf/hybrid och agentisk strategi, instrumenterat i LangSmith för spårbar feedback från ingenjörer.",
  githubLink: "https://github.com/Berkay2002/agentic-rag-test-scope-analysis",
  paperLink: "/papers/Agentic_RAG___Knowledge_Graphs_for_Test_Scope_Analysis.pdf",
};
