import type { Project } from "@/types";

export const chatbot: Project = {
  id: "municipality-chatbot",
  title: "Municipality Chatbot: AI-Powered Citizen Services",
  description:
    "Self-hosted AI chatbot platform for Swedish municipalities with GraphRAG, multi-provider LLM support, and an embeddable React widget. Conversations and the knowledge base stay on the municipality's own infrastructure.",
  descriptionSv:
    "Självhostad AI-chattbot för svenska kommuner med GraphRAG, stöd för flera LLM-leverantörer och en inbäddningsbar React-widget. Samtal och kunskapsbas ligger kvar på kommunens egen infrastruktur.",
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
    "Redis",
    "Docker",
    "Nginx",
    "SSE (Server-Sent Events)",
    "Pydantic",
    "i18next",
  ],
  // Repo is private (404 for visitors); uncomment when public.
  // githubLink: "https://github.com/Berkay2002/chatbot",
  image: undefined,
  imageAlt: "Municipality Chatbot AI Platform",
  imageAltSv: "Kommunchattbotens AI-plattform",
  detailedDescription:
    "An AI chatbot designed for Swedish municipalities to help citizens find information about municipal services 24/7. Built with LangChain/LangGraph for orchestration, the platform features GraphRAG technology combining vector search (pgvector) with knowledge graphs (Neo4j) and keyword matching. Supports multiple LLM providers: Google Gemini, OpenAI, Azure OpenAI, Vertex AI, AWS Bedrock, and local models through any OpenAI-compatible endpoint. The embeddable React widget integrates with any website via script tag, JavaScript, or React component. Self-hosted deployment keeps the database, conversation history and knowledge base on municipal infrastructure, and with a local model the prompts stay there too. Includes CLI tools for content ingestion from websites (sitemap), single URLs, PDFs and local files, with OCR for scanned PDFs, knowledge-graph extraction and scheduled sync. Docker Compose profiles, a health endpoint, request logging and conversation persistence for deployment.",
  detailedDescriptionSv:
    "En AI-chattbot för svenska kommuner som hjälper medborgare att hitta information om kommunala tjänster dygnet runt. Plattformen orkestreras med LangChain/LangGraph och använder GraphRAG som kombinerar vektorsökning (pgvector) med kunskapsgrafer (Neo4j) och nyckelordsmatchning. Stöder flera LLM-leverantörer: Google Gemini, OpenAI, Azure OpenAI, Vertex AI, AWS Bedrock och lokala modeller via valfri OpenAI-kompatibel endpoint. Den inbäddningsbara React-widgeten integreras med vilken webbplats som helst via script-tagg, JavaScript eller React-komponent. Självhostad drift håller databasen, samtalshistoriken och kunskapsbasen på kommunens infrastruktur, och med en lokal modell stannar även frågorna där. Inkluderar CLI-verktyg för innehållsimport från webbplatser (sitemap), enskilda URL:er, PDF-filer och lokala filer, med OCR för skannade PDF:er, extrahering till kunskapsgraf och schemalagd synkronisering. För driftsättning finns Docker Compose-profiler, en hälsoändpunkt, förfrågningsloggning och sparade samtal.",
  features: [
    "GraphRAG technology combining vector search (pgvector), knowledge graphs (Neo4j), and BM25 keyword search, with a hybrid mode that weights vector and keyword results",
    "Multi-provider LLM support with Google Gemini, OpenAI, Azure OpenAI, Vertex AI, AWS Bedrock, and local models via OpenAI-compatible endpoints, switched in config.yaml through LangChain's init_chat_model",
    "Embeddable React 19 widget with three integration methods: simple script tag, JavaScript initialization, or React component import",
    "Self-hosted architecture built for GDPR: database, conversation history and knowledge base stay on municipal infrastructure, and a local model keeps inference there too",
    "CLI for content ingestion from sitemaps, individual URLs, PDFs, and local files with OCR for scanned PDFs, checkpoint/resume support, and a sync scheduler for nightly updates",
    "Real-time streaming responses via Server-Sent Events (SSE) with LangGraph checkpointing for conversation persistence in PostgreSQL",
    "Multi-language support (Swedish, English, Finnish, Arabic, Turkish, Somali, Spanish, Syriac) with i18next internationalization",
    "Deployable with Docker Compose profiles and an Nginx reverse proxy, with health check endpoints, request logging, Redis-backed or in-memory rate limiting, API key authentication, and per-run model and tool call limits",
  ],
  featuresSv: [
    "GraphRAG-teknik som kombinerar vektorsökning (pgvector), kunskapsgrafer (Neo4j) och BM25-nyckelordssökning, med ett hybridläge som viktar vektor- och nyckelordsträffar",
    "Stöd för flera LLM-leverantörer med Google Gemini, OpenAI, Azure OpenAI, Vertex AI, AWS Bedrock och lokala modeller via OpenAI-kompatibla endpoints, valbara i config.yaml via LangChains init_chat_model",
    "Inbäddningsbar React 19-widget med tre integrationssätt: en enkel script-tagg, JavaScript-initialisering eller React-komponentimport",
    "Självhostad arkitektur byggd för GDPR: databas, samtalshistorik och kunskapsbas stannar på kommunens infrastruktur, och en lokal modell håller även inferensen där",
    "CLI för innehållsimport från sitemaps, enskilda URL:er, PDF-filer och lokala filer med OCR för skannade PDF:er, checkpoint/återuppta-stöd och en synkroniseringsschemaläggare för nattliga uppdateringar",
    "Realtidsströmmade svar via Server-Sent Events (SSE) med LangGraph-checkpointing för samtalspersistens i PostgreSQL",
    "Stöd för flera språk (svenska, engelska, finska, arabiska, turkiska, somaliska, spanska, syriska) med i18next-internationalisering",
    "Går att driftsätta med Docker Compose-profiler och en Nginx-reverse proxy, med hälsokontrollsändpunkter, förfrågningsloggning, hastighetsbegränsning (Redis eller i minnet), API-nyckelautentisering och gränser för modell- och verktygsanrop per körning",
  ],
  challenges: [
    "Keeping data on municipal infrastructure while still supporting cloud LLM providers",
    "Building a flexible retrieval system that works for diverse municipal content (policies, forms, organizational info)",
    "Creating a widget that embeds on any website, whichever CMS it runs (WordPress, Drupal, Episerver, Sitevision, custom)",
    "Managing conversation state and streaming responses with LangGraph's async architecture",
    "Designing a CLI ingestion system that handles large websites with resumable checkpointing",
  ],
  challengesSv: [
    "Hålla data på kommunens infrastruktur samtidigt som moln-LLM-leverantörer stöds",
    "Bygga ett flexibelt hämtningssystem som fungerar för olika kommunalt innehåll (policyer, formulär, organisationsinformation)",
    "Skapa en widget som kan bäddas in på vilken webbplats som helst, oavsett CMS (WordPress, Drupal, Episerver, Sitevision, anpassade)",
    "Hantera samtalsstatus och strömmande svar med LangGraphs asynkrona arkitektur",
    "Designa ett CLI-importsystem som hanterar stora webbplatser med återuppta-checkpoint",
  ],
  solution:
    "Implemented a layered architecture with LangGraph agent orchestration, PostgreSQL+pgvector for vector search, and Neo4j for relationship mapping. LangChain's init_chat_model provides one interface across all providers. The React widget builds both as a standalone embed script and as an importable component library, supporting multiple integration patterns. SSE streaming with LangGraph checkpointing enables real-time responses while persisting conversation state. The CLI uses BeautifulSoup for web scraping, PyMuPDF for PDFs, and implements checkpoint/resume with progress tracking. Services run in Docker containers with Compose profiles for development and production.",
  solutionSv:
    "Implementerade en lagerad arkitektur med LangGraph-agentorkestrering, PostgreSQL+pgvector för vektorsökning och Neo4j för relationskartläggning. LangChains init_chat_model ger ett gemensamt gränssnitt mot alla leverantörer. React-widgeten byggs både som ett fristående inbäddningsskript och som ett importerbart komponentbibliotek, vilket stöder flera integrationsmönster. SSE-strömning med LangGraph-checkpointing möjliggör realtidssvar samtidigt som samtalsstatus sparas. CLI:n använder BeautifulSoup för webbskrapning, PyMuPDF för PDF-filer och implementerar checkpoint/återuppta med framstegsföljning. Tjänsterna körs i Docker-containrar med Compose-profiler för utveckling och produktion.",
  outcome:
    "A self-hosted chatbot platform a municipality can run on its own servers: the agent, API, ingestion CLI and embeddable widget come together with Docker Compose profiles. The municipality picks its LLM provider (Vertex AI and Bedrock default to EU regions, or a local model keeps inference in-house), and the widget embeds on any site with a script tag. Sitemap sync keeps the knowledge base current, nightly by default.",
  outcomeSv:
    "En självhostad chattbot-plattform som en kommun kan köra på sina egna servrar: agenten, API:et, import-CLI:n och den inbäddningsbara widgeten hör ihop med Docker Compose-profiler. Kommunen väljer LLM-leverantör (Vertex AI och Bedrock använder EU-regioner som standard, och en lokal modell håller inferensen i egen regi), och widgeten bäddas in på vilken webbplats som helst med en script-tagg. Sitemap-synkning håller kunskapsbasen aktuell, som standard varje natt.",
  microservices: [
    {
      name: "FastAPI Backend",
      description:
        "API server with SSE streaming, thread management, run endpoints, security middleware (rate limiting, API key auth), and a health check. Orchestrates LangGraph agent execution.",
      descriptionSv:
        "API-server med SSE-strömning, trådhantering, körningsändpunkter, säkerhetsmiddleware (hastighetsbegränsning, API-nyckelautentisering) och hälsokontroll. Orkestrerar LangGraph-agentkörning.",
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
        "Command-line tools for content ingestion from sitemaps, URLs, PDFs, and local files. Features OCR for scanned PDFs, knowledge-graph extraction, checkpoint/resume for large imports, sync analysis, and stats reporting.",
      descriptionSv:
        "Kommandoradsverktyg för innehållsimport från sitemaps, URL:er, PDF-filer och lokala filer. Funktioner inkluderar OCR för skannade PDF:er, extrahering till kunskapsgraf, checkpoint/återuppta för stora importer, synkroniseringsanalys och statistikrapportering.",
      technologies: ["Python", "BeautifulSoup", "PyMuPDF", "HTTPX", "Click", "Rich", "Neo4j"],
      link: undefined,
    },
  ],
};