import type { Project } from "@/types";

export const chatbot: Project = {
  id: "municipality-chatbot",
  title: "Municipality Chatbot: AI-Powered Citizen Services",
  description:
    "Enterprise AI chatbot platform for Swedish municipalities with GraphRAG, multi-provider LLM support, and embeddable React widget. Self-hosted, GDPR-compliant solution with full data sovereignty.",
  descriptionSv:
    "Företags-AI-chattbot för svenska kommuner med GraphRAG, stöd för flera LLM-leverantörer och inbäddningsbar React-widget. Självhostlösning som följer GDPR med fullständig datakontroll.",
  technologies: [
    "Python 3.11+",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "PostgreSQL",
    "pgvector",
    "Neo4j",
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS v4",
    "Docker",
    "SSE (Server-Sent Events)",
    "Pydantic",
    "i18next",
  ],
  link: "https://github.com/Berkay2002/chatbot",
  githubLink: "https://github.com/Berkay2002/chatbot",
  image: undefined,
  imageAlt: "Municipality Chatbot AI Platform",
  detailedDescription:
    "A turnkey AI chatbot solution designed specifically for Swedish municipalities to help citizens find information about municipal services 24/7. Built with LangChain/LangGraph for orchestration, the platform features GraphRAG technology combining vector search (pgvector) with knowledge graphs (Neo4j) and keyword matching. Supports multiple LLM providers including Google Gemini, Azure OpenAI, AWS Bedrock, and local models. The embeddable React widget integrates with any website via script tag, JavaScript, or React component. Complete data sovereignty with self-hosted deployment means citizen conversations never leave municipal infrastructure. Includes powerful CLI tools for content ingestion from websites (sitemap), PDFs, and Jira, with automatic sync capabilities. Production-ready with Docker containerization, health endpoints, structured logging, and conversation persistence.",
  detailedDescriptionSv:
    "En färdig AI-chattbot-lösning designad specifikt för svenska kommuner för att hjälpa medborgare hitta information om kommunala tjänster dygnet runt. Byggd med LangChain/LangGraph för orkestrering, plattformen har GraphRAG-teknik som kombinerar vektorsökning (pgvector) med kunskapsgrafer (Neo4j) och nyckelordsmatchning. Stöder flera LLM-leverantörer inklusive Google Gemini, Azure OpenAI, AWS Bedrock och lokala modeller. Den inbäddningsbara React-widgeten integreras med vilken webbplats som helst via script-tagg, JavaScript eller React-komponent. Fullständig datakontroll med självhostad distribution innebär att medborgarsamtal aldrig lämnar kommunens infrastruktur. Inkluderar kraftfulla CLI-verktyg för innehållsimport från webbplatser (sitemap), PDF-filer och Jira, med automatiska synkroniseringsfunktioner. Produktionsklar med Docker-containerisering, hälsoändpunkter, strukturerad loggning och samtalspersistens.",
  features: [
    "GraphRAG technology combining vector search (pgvector), knowledge graphs (Neo4j), and hybrid keyword matching for accurate retrieval",
    "Multi-provider LLM support with Google Gemini, Azure OpenAI, AWS Bedrock, OpenAI, and local model options via LangChain's init_chat_model",
    "Embeddable React 19 widget with three integration methods: simple script tag, JavaScript initialization, or React component import",
    "Self-hosted, GDPR-compliant architecture with complete data sovereignty—all processing happens within municipal infrastructure",
    "Powerful CLI for content ingestion from sitemaps, individual URLs, PDFs, and Jira with checkpoint/resume support and automatic sync scheduling",
    "Real-time streaming responses via Server-Sent Events (SSE) with LangGraph checkpointing for conversation persistence in PostgreSQL",
    "Multi-language support (Swedish, English, Finnish, Arabic, Turkish, Somali, Spanish, Syriac) with i18next internationalization",
    "Production-ready with Docker Compose, health check endpoints, structured logging, graceful shutdown, rate limiting, and API key authentication",
  ],
  featuresSv: [
    "GraphRAG-teknik som kombinerar vektorsökning (pgvector), kunskapsgrafer (Neo4j) och hybrid nyckelordsmatchning för exakt hämtning",
    "Stöd för flera LLM-leverantörer med Google Gemini, Azure OpenAI, AWS Bedrock, OpenAI och lokala modellalternativ via LangChain's init_chat_model",
    "Inbäddningsbar React 19-widget med tre integrationsmetoder: enkel script-tagg, JavaScript-initialisering eller React-komponentimport",
    "Självhostad, GDPR-följande arkitektur med fullständig datakontroll—all bearbetning sker inom kommunens infrastruktur",
    "Kraftfull CLI för innehållsimport från sitemaps, enskilda URL:er, PDF-filer och Jira med checkpoint/återuppta-stöd och automatisk synkroniseringsschemaläggning",
    "Realtidsströmmade svar via Server-Sent Events (SSE) med LangGraph-checkpointing för samtalspersistens i PostgreSQL",
    "Stöd för flera språk (svenska, engelska, finska, arabiska, turkiska, somaliska, spanska, syriska) med i18next-internationalisering",
    "Produktionsklar med Docker Compose, hälsokontrollsändpunkter, strukturerad loggning, graciös avstängning, hastighetsbegränsning och API-nyckelautentisering",
  ],
  challenges: [
    "Ensuring GDPR compliance and data sovereignty while supporting cloud LLM providers",
    "Building a flexible retrieval system that works for diverse municipal content (policies, forms, organizational info)",
    "Creating a widget that integrates seamlessly across different CMS platforms (WordPress, Drupal, Episerver, Sitevision, custom)",
    "Managing conversation state and streaming responses with LangGraph's async architecture",
    "Designing a CLI ingestion system that handles large websites with resumable checkpointing",
  ],
  challengesSv: [
    "Säkerställa GDPR-efterlevnad och datakontroll samtidigt som moln-LLM-leverantörer stöds",
    "Bygga ett flexibelt hämtningssystem som fungerar för olika kommunalt innehåll (policyer, formulär, organisationsinformation)",
    "Skapa en widget som integreras sömlöst över olika CMS-plattformar (WordPress, Drupal, Episerver, Sitevision, anpassade)",
    "Hantera samtalsstatus och strömmande svar med LangGraph's asynkrona arkitektur",
    "Designa ett CLI-importsystem som hanterar stora webbplatser med återuppta-checkpoint",
  ],
  solution:
    "Implemented a layered architecture with LangGraph agent orchestration, PostgreSQL+pgvector for vector search, and Neo4j for relationship mapping. LangChain's init_chat_model provides unified multi-provider support while keeping data local. The React widget compiles to both a standalone embed script and an npm package, supporting multiple integration patterns. SSE streaming with LangGraph checkpointing enables real-time responses while persisting conversation state. The CLI uses BeautifulSoup for web scraping, PyMuPDF for PDFs, and implements checkpoint/resume with progress tracking. All services run in Docker containers with configurable profiles for development and production.",
  solutionSv:
    "Implementerade en lagerad arkitektur med LangGraph-agenttorkestrering, PostgreSQL+pgvector för vektorsökning och Neo4j för relationskartläggning. LangChain's init_chat_model ger enhetligt stöd för flera leverantörer samtidigt som data hålls lokalt. React-widgeten kompileras till både ett fristående inbäddningsskript och ett npm-paket, vilket stöder flera integrationsmönster. SSE-strömning med LangGraph-checkpointing möjliggör realtidssvar samtidigt som samtalsstatus sparas. CLI:n använder BeautifulSoup för webbskrapning, PyMuPDF för PDF-filer och implementerar checkpoint/återuppta med framstegsföljning. Alla tjänster körs i Docker-containrar med konfigurerbara profiler för utveckling och produktion.",
  outcome:
    "Delivers a production-ready, self-hosted chatbot platform that reduces customer service workload by 20-40% while improving citizen satisfaction with 24/7 availability and instant responses. Municipalities maintain full data sovereignty with GDPR-native compliance, choosing their preferred LLM provider (Google Gemini EU, Azure OpenAI Sweden, AWS Bedrock EU, or local models). The universal widget integrates with any CMS in minutes via script tag, serving multilingual citizens across Swedish municipalities. Supports content ingestion from entire websites via sitemap sync, with automated nightly updates to keep the knowledge base current.",
  outcomeSv:
    "Levererar en produktionsklar, självhostad chattbot-plattform som minskar kundservicearbetsbelastningen med 20-40% samtidigt som medborgarnas tillfredsställelse förbättras med tillgänglighet dygnet runt och omedelbara svar. Kommuner behåller fullständig datakontroll med GDPR-följande efterlevnad, och väljer sin föredragna LLM-leverantör (Google Gemini EU, Azure OpenAI Sverige, AWS Bedrock EU eller lokala modeller). Den universella widgeten integreras med vilket CMS som helst på några minuter via script-tagg, och betjänar flerspråkiga medborgare över svenska kommuner. Stöder innehållsimport från hela webbplatser via sitemap-synk, med automatiserade nattliga uppdateringar för att hålla kunskapsbasen aktuell.",
  microservices: [
    {
      name: "FastAPI Backend",
      description:
        "High-performance API server with SSE streaming, thread management, run endpoints, security middleware (rate limiting, API key auth), and health checks. Orchestrates LangGraph agent execution.",
      descriptionSv:
        "Högpresterande API-server med SSE-strömning, trådhantering, körningsändpunkter, säkerhetsmiddleware (hastighetsbegränsning, API-nyckelautentisering) och hälsokontroller. Orkestrerar LangGraph-agentkörning.",
      technologies: ["FastAPI", "Uvicorn", "SSE-Starlette", "Pydantic", "Redis"],
      link: undefined,
    },
    {
      name: "LangGraph Agent",
      description:
        "AI agent with GraphRAG retrieval (vector, keyword, graph traversal), tool calling, conversation state management, and PostgreSQL checkpointing for persistence and resumption.",
      descriptionSv:
        "AI-agent med GraphRAG-hämtning (vektor, nyckelord, graftraversering), verktygsanrop, samtalstillståndshantering och PostgreSQL-checkpointing för persistens och återupptagning.",
      technologies: ["LangChain", "LangGraph", "PostgreSQL", "pgvector", "Neo4j"],
      link: undefined,
    },
    {
      name: "React Chat Widget",
      description:
        "Embeddable chat interface with React 19, TypeScript, Tailwind CSS v4, i18next multilingual support, theme customization, and three integration methods (script tag, JS init, React component).",
      descriptionSv:
        "Inbäddningsbart chattgränssnitt med React 19, TypeScript, Tailwind CSS v4, i18next flerspråksstöd, temanpassning och tre integrationsmetoder (script-tagg, JS init, React-komponent).",
      technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "i18next"],
      link: undefined,
    },
    {
      name: "Ingestion CLI",
      description:
        "Command-line tools for content ingestion from sitemaps, URLs, PDFs, and Jira. Features checkpoint/resume for large imports, automatic sync scheduling, and stats reporting.",
      descriptionSv:
        "Kommandoradsverktyg för innehållsimport från sitemaps, URL:er, PDF-filer och Jira. Funktioner inkluderar checkpoint/återuppta för stora importer, automatisk synkroniseringsschemaläggning och statistikrapportering.",
      technologies: ["Python", "BeautifulSoup", "PyMuPDF", "HTTPX", "Click", "Rich"],
      link: undefined,
    },
  ],
};