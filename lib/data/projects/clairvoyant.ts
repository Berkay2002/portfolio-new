import type { Project } from "@/types";

export const clairvoyant: Project = {
  id: "clairvoyant",
  title: "Clairvoyant: AI Research Chat",
  description:
    "An advanced AI-powered chat and research platform featuring dual-agent architecture with intelligent chat agents and comprehensive research capabilities. Built with Vercel AI SDK and Google Gemini integration, featuring generative UI components and multi-step research workflows.",
  descriptionSv:
    "En avancerad AI-driven chatt- och forskningsplattform med dual-agent arkitektur som innehåller intelligenta chattagenter och omfattande forskningskapacitet. Byggd med Vercel AI SDK och Google Gemini-integration, med generativa UI-komponenter och flerstegiga forskningsarbetsflöden.",
  technologies: [
    "TypeScript",
    "Next.js 15",
    "Vercel AI SDK",
    "Gemini SDK",
    "React 19",
    "Tailwind CSS",
    "Shadcn/ui",
    "Exa API",
    "Qdrant",
    "Neo4j",
    "MCP",
    "LangChain",
  ],
  link: "https://clairvoyant-berkay2002.vercel.app/",
  image: undefined,
  imageAlt: "Clairvoyant AI chat and research platform interface",
  detailedDescription:
    "Clairvoyant is a production-ready AI platform that combines intelligent chat agents with powerful research tools. The system implements a sophisticated dual-agent architecture powered by Vercel AI SDK and Google Gemini integration, featuring generative UI components and multi-step research workflows designed for productivity and accuracy.",
  detailedDescriptionSv:
    "Clairvoyant är en produktionsklar AI-plattform som kombinerar intelligenta chattagenter med kraftfulla forskningsverktyg. Systemet implementerar en sofistikerad dual-agent arkitektur driven av Vercel AI SDK och Google Gemini-integration, med generativa UI-komponenter och flerstegiga forskningsarbetsflöden designade för produktivitet och noggrannhet.",
  features: [
    "🧠 Enhanced Chat Agent with Google Gemini 2.5 Pro/Flash integration",
    "🔍 Research Agent with multi-step research pipeline and source analysis",
    "🎨 Generative UI components for weather, calculations, stocks, and web scraping",
    "🔧 Advanced tool ecosystem including Google Search and URL Context",
    "📄 PDF report generation with citations and references",
    "🎤 Text-to-speech audio playback for responses and research reports",
    "💬 Real-time response streaming with reasoning modes",
    "📱 Mobile-optimized responsive design with adaptive controls",
    "🔌 Model Context Protocol (MCP) integration with Context7 documentation access",
    "🔒 Production-ready architecture with type-safe APIs and error handling",
  ],
  featuresSv: [
    "🧠 Förbättrad chattagent med Google Gemini 2.5 Pro/Flash-integration",
    "🔍 Forskningsagent med flerstegig forskningspipeline och källanalys",
    "🎨 Generativa UI-komponenter för väder, kalkyler, aktier och webbskrapning",
    "🔧 Avancerat verktygsekosystem inklusive Google Search och URL Context",
    "📄 PDF-rapportgenerering med citat och referenser",
    "🎤 Text-till-tal ljuduppspelning för svar och forskningsrapporter",
    "💬 Realtidsströmning av svar med resoneringslägen",
    "📱 Mobiloptimerad responsiv design med adaptiva kontroller",
    "🔌 Model Context Protocol (MCP) integration med Context7 dokumentationstillgång",
    "🔒 Produktionsklar arkitektur med typsäkra APIer och felhantering",
  ],
  challenges: [
    "Implementing dual-agent architecture with specialized chat and research workflows",
    "Integrating multiple AI services (Google Gemini 2.5 Pro/Flash, Exa API) seamlessly",
    "Building generative UI components that adapt to different tool outputs",
    "Managing complex multi-step research pipelines with source credibility analysis",
    "Implementing real-time streaming responses with proper error handling",
    "Creating a scalable vector database architecture with Qdrant and Neo4j",
    "Building MCP (Model Context Protocol) integration for documentation access",
    "Designing responsive interfaces that work across desktop and mobile devices",
  ],
  challengesSv: [
    "Implementera dual-agent arkitektur med specialiserade chatt- och forskningsarbetsflöden",
    "Integrera flera AI-tjänster (Google Gemini 2.5 Pro/Flash, Exa API) sömlöst",
    "Bygga generativa UI-komponenter som anpassar sig till olika verktygsutdata",
    "Hantera komplexa flerstegiga forskningspipelines med källtrovärdighetsanalys",
    "Implementera realtidsströmning av svar med korrekt felhantering",
    "Skapa en skalbar vektordatabasarkitektur med Qdrant och Neo4j",
    "Bygga MCP (Model Context Protocol) integration för dokumentationstillgång",
    "Designa responsiva gränssnitt som fungerar över desktop- och mobilenheter",
  ],
  solution:
    "The platform is built using Next.js 15 with App Router architecture and React 19 for cutting-edge performance. The dual-agent system utilizes Vercel AI SDK for streamlined AI integration, with specialized agents for chat and research workflows. The chat agent provides real-time conversational AI with tool calling capabilities, while the research agent conducts comprehensive multi-step research with source analysis.\n\nKey technical implementations include:\n- Vercel AI SDK integration with Google Gemini 2.5 Pro/Flash models for different use cases\n- Generative UI system with React components that adapt to tool outputs (weather, calculator, stocks, web scraper)\n- Advanced research pipeline using Exa API for source discovery and content processing\n- Vector database architecture combining Qdrant for semantic search and Neo4j for graph relationships\n- Model Context Protocol (MCP) integration for accessing Context7 documentation\n- Real-time streaming responses with proper error handling and timeout management\n- PDF generation system for exporting research reports with citations\n- Text-to-speech integration using ElevenLabs for audio playback\n- Mobile-first responsive design with adaptive UI patterns\n- Comprehensive testing suite with Vitest for integration and performance testing",
  solutionSv:
    "Plattformen är byggd med Next.js 15 med App Router-arkitektur och React 19 för banbrytande prestanda. Dual-agent systemet använder Vercel AI SDK för strömlinjeformad AI-integration, med specialiserade agenter för chatt- och forskningsarbetsflöden. Chattagenten tillhandahåller realtids konversations-AI med verktygsanropskapacitet, medan forskningsagenten utför omfattande flerstegig forskning med källanalys.\n\nViktiga tekniska implementeringar inkluderar:\n- Vercel AI SDK-integration med Google Gemini 2.5 Pro/Flash-modeller för olika användningsfall\n- Generativt UI-system med React-komponenter som anpassar sig till verktygsutdata (väder, kalkylator, aktier, webbskrapare)\n- Avancerad forskningspipeline som använder Exa API för källupptäckt och innehållsbearbetning\n- Vektordatabasarkitektur som kombinerar Qdrant för semantisk sökning och Neo4j för grafförhållanden\n- Model Context Protocol (MCP) integration för att komma åt Context7-dokumentation\n- Realtidsströmning av svar med korrekt felhantering och timeout-hantering\n- PDF-genereringssystem för att exportera forskningsrapporter med citat\n- Text-till-tal-integration med ElevenLabs för ljuduppspelning\n- Mobilanpassad responsiv design med adaptiva UI-mönster\n- Omfattande testsvit med Vitest för integrations- och prestandatester",
  outcome:
    "Clairvoyant successfully demonstrates advanced AI platform architecture with production-ready dual-agent capabilities. The system provides sophisticated chat interactions through generative UI components that enhance user experience beyond traditional text-based interfaces. The research agent delivers comprehensive multi-step analysis with credible source discovery and synthesis, generating professional PDF reports with proper citations.\n\nThe platform showcases cutting-edge integration patterns including Vercel AI SDK for streamlined AI workflows, Model Context Protocol for documentation access, and advanced vector database architecture. The real-time streaming system provides responsive user interactions while maintaining robust error handling for production reliability.\n\nTechnical achievements include sophisticated tool calling mechanisms, adaptive generative UI patterns, and comprehensive research workflows with source credibility analysis. The application handles complex AI orchestration across multiple services while maintaining excellent performance and user experience. The mobile-optimized design ensures accessibility across all devices.\n\nBuilt with the latest Next.js 15, React 19, and modern TypeScript patterns, Clairvoyant represents state-of-the-art AI platform development. The project demonstrates expertise in AI integration, complex state management, real-time systems, and production deployment while delivering a polished, scalable platform for intelligent chat and research capabilities.",
  outcomeSv:
    "Clairvoyant demonstrerar framgångsrikt avancerad AI-plattformsarkitektur med produktionsklar dual-agent kapacitet. Systemet tillhandahåller sofistikerade chattinteraktioner genom generativa UI-komponenter som förbättrar användarupplevelsen bortom traditionella textbaserade gränssnitt. Forskningsagenten levererar omfattande flerstegig analys med trovärdig källupptäckt och syntes, och genererar professionella PDF-rapporter med korrekta citat.\n\nPlattformen visar banbrytande integrationsmönster inklusive Vercel AI SDK för strömlinjeformade AI-arbetsflöden, Model Context Protocol för dokumentationstillgång och avancerad vektordatabasarkitektur. Realtidsströmmingssystemet ger responsiva användarinteraktioner samtidigt som robust felhantering för produktionstillförlitlighet bibehålls.\n\nTekniska prestationer inkluderar sofistikerade verktygsanropsmekanismer, adaptiva generativa UI-mönster och omfattande forskningsarbetsflöden med källtrovärdighetsanalys. Applikationen hanterar komplex AI-orkestrering över flera tjänster samtidigt som utmärkt prestanda och användarupplevelse bibehålls. Den mobiloptimerade designen säkerställer tillgänglighet över alla enheter.\n\nByggd med de senaste Next.js 15, React 19 och moderna TypeScript-mönster, representerar Clairvoyant toppmodern AI-plattformsutveckling. Projektet demonstrerar expertis inom AI-integration, komplex tillståndshantering, realtidssystem och produktionsutplacering samtidigt som det levererar en polerad, skalbar plattform för intelligenta chatt- och forskningskapaciteter.",
  githubLink: "https://github.com/Berkay2002/Clairvoyant",
};