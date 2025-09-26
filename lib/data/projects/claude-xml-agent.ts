import type { Project } from "@/types";

export const claudeXmlAgent: Project = {
  id: "claude-xml-agent",
  title: "Claude XML Agent",
  description:
    "An intelligent AI agent that converts plain text prompts into Claude-optimized XML structures using Google Gemini and the Vercel AI SDK. Features user authentication, rate limiting, and real-time streaming responses.",
  descriptionSv:
    "En intelligent AI-agent som konverterar vanlig text till Claude-optimerade XML-strukturer med Google Gemini och Vercel AI SDK. Har användarautentisering, hastighetsbegränsning och realtids-streaming-svar.",
  technologies: [
    "TypeScript",
    "Next.js 15",
    "Vercel AI SDK",
    "Google Gemini",
    "PostgreSQL",
    "Drizzle ORM",
    "NextAuth.js",
    "Tailwind CSS",
    "shadcn/ui",
    "Redis",
    "Upstash"
  ],
  link: "https://claude-xml-agent.vercel.app",
  image: "/images/projects/claude-xml-agent.png",
  imageAlt: "Claude XML Agent interface showing prompt conversion",
  detailedDescription:
    "Claude XML Agent is a specialized AI application designed to transform unstructured prompt text into Claude-optimized XML structures. Built with Next.js 15, the Vercel AI SDK, and powered by Google Gemini models, it leverages Claude's preference for XML-structured prompts to improve AI interaction reliability and performance. The application features a complete user management system with authentication, role-based access control, and intelligent rate limiting.",
  detailedDescriptionSv:
    "Claude XML Agent är en specialiserad AI-applikation designad för att transformera ostrukturerad prompt-text till Claude-optimerade XML-strukturer. Byggd med Next.js 15, Vercel AI SDK och driven av Google Gemini-modeller, utnyttjar den Claude's preferens för XML-strukturerade prompts för att förbättra AI-interaktionens tillförlitlighet och prestanda. Applikationen har ett komplett användarhanteringssystem med autentisering, rollbaserad åtkomstkontroll och intelligent hastighetsbegränsning.",
  features: [
    "AI-Powered XML Conversion - Automatically converts plain text prompts into Claude-optimized XML using Google Gemini 2.5 Pro/Flash",
    "Semantic Analysis - Intelligently identifies and structures context, instructions, examples, and format requirements",
    "Real-time Streaming - Live response streaming with the Vercel AI SDK and React hooks",
    "User Authentication - Secure authentication system using NextAuth.js with email/password and OAuth providers",
    "Role-based Access Control - Multi-tier user system: Guests, Unapproved Users, Approved Users, and Admins",
    "Intelligent Rate Limiting - Customizable rate limits per user type using Redis and Upstash",
    "Admin Dashboard - Complete user management interface for approval workflows and role assignment",
    "Chat History Persistence - Store and retrieve conversation history with PostgreSQL and Drizzle ORM",
    "File Upload Support - Document processing capabilities via Vercel Blob storage",
    "Email Notifications - Automated approval request notifications using Resend",
    "Modern UI/UX - Beautiful, accessible interface built with shadcn/ui components and Tailwind CSS",
    "XML Schema Validation - Built-in validation tools to ensure proper XML structure and formatting"
  ],
  featuresSv: [
    "AI-driven XML-konvertering - Konverterar automatiskt vanlig text till Claude-optimerad XML med Google Gemini 2.5 Pro/Flash",
    "Semantisk analys - Identifierar och strukturerar intelligently kontext, instruktioner, exempel och formatkrav",
    "Realtids-streaming - Live-svar-streaming med Vercel AI SDK och React hooks",
    "Användarautentisering - Säkert autentiseringssystem med NextAuth.js med email/lösenord och OAuth-leverantörer",
    "Rollbaserad åtkomstkontroll - Flernivå användarsystem: Gäster, Icke-godkända användare, Godkända användare och Administratörer",
    "Intelligent hastighetsbegränsning - Anpassningsbara hastighetsgränser per användartyp med Redis och Upstash",
    "Administratörspanel - Komplett användarhanteringsgränssnitt för godkännandearbetsflöden och rolltilldelning",
    "Chat-historikpersistens - Lagra och hämta konversationshistorik med PostgreSQL och Drizzle ORM",
    "Filuppladdningsstöd - Dokumentbearbetningsmöjligheter via Vercel Blob-lagring",
    "E-postaviseringar - Automatiska godkännandeförfrågningsaviseringar med Resend",
    "Modern UI/UX - Vackert, tillgängligt gränssnitt byggt med shadcn/ui-komponenter och Tailwind CSS",
    "XML-schemavalidering - Inbyggda valideringsverktyg för att säkerställa korrekt XML-struktur och formatering"
  ],
  challenges: [
    "Complex AI Integration - Implementing reliable XML conversion with Google Gemini while maintaining semantic accuracy",
    "Real-time Performance - Ensuring smooth streaming responses without blocking the UI during conversion",
    "User Management Complexity - Building a comprehensive authentication and authorization system with multiple user roles",
    "Rate Limiting Strategy - Designing intelligent rate limiting that balances resource usage with user experience",
    "XML Schema Consistency - Maintaining Claude's canonical XML structure across different prompt types and complexities",
    "Database Optimization - Efficiently storing and retrieving chat history and user data with proper indexing"
  ],
  challengesSv: [
    "Komplex AI-integration - Implementera tillförlitlig XML-konvertering med Google Gemini samtidigt som semantisk noggrannhet bibehålls",
    "Realtidsprestanda - Säkerställa smidiga streaming-svar utan att blockera användargränssnittet under konvertering",
    "Användarhanteringskomplexitet - Bygga ett omfattande autentisering och auktoriseringssystem med flera användarroller",
    "Hastighetsbegränsningsstrategi - Designa intelligent hastighetsbegränsning som balanserar resursanvändning med användarupplevelse",
    "XML-schemakonsistens - Bibehålla Claude's kanoniska XML-struktur över olika prompt-typer och komplexiteter",
    "Databasoptimering - Effektivt lagra och hämta chat-historik och användardata med korrekt indexering"
  ],
  solution:
    "The application is built using Next.js 15 with App Router architecture and React 19 for optimal performance. Google Gemini 2.5 Pro/Flash models are integrated via the Vercel AI SDK for reliable XML conversion with streaming capabilities. The user management system employs NextAuth.js for authentication, PostgreSQL with Drizzle ORM for data persistence, and Redis with Upstash for rate limiting. The XML conversion follows Claude's canonical schema with shallow nesting and semantic boundaries.\n\nKey technical implementations include:\n- Agent-based architecture using Vercel AI SDK's experimental Agent class\n- Real-time streaming with React hooks and server components\n- Comprehensive rate limiting with different tiers for user types\n- Email notification system using Resend for user approval workflows\n- File upload and processing capabilities via Vercel Blob\n- Admin dashboard with complete user management functionality\n- XML validation tools to ensure proper formatting and structure",
  solutionSv:
    "Applikationen är byggd med Next.js 15 med App Router-arkitektur och React 19 för optimal prestanda. Google Gemini 2.5 Pro/Flash-modeller är integrerade via Vercel AI SDK för tillförlitlig XML-konvertering med streaming-kapacitet. Användarhanteringssystemet använder NextAuth.js för autentisering, PostgreSQL med Drizzle ORM för datapersistens och Redis med Upstash för hastighetsbegränsning. XML-konverteringen följer Claude's kanoniska schema med ytlig nesting och semantiska gränser.\n\nViktiga tekniska implementeringar inkluderar:\n- Agent-baserad arkitektur med Vercel AI SDK:s experimentella Agent-klass\n- Realtids-streaming med React hooks och serverkomponenter\n- Omfattande hastighetsbegränsning med olika nivåer för användartyper\n- E-postaviseringssystem med Resend för användargodkännandearbetsflöden\n- Filuppladdning och bearbetningsmöjligheter via Vercel Blob\n- Administratörspanel med komplett användarhanteringsfunktionalitet\n- XML-valideringsverktyg för att säkerställa korrekt formatering och struktur",
  outcome:
    "The system successfully demonstrates advanced AI integration patterns with modern web technologies. Claude XML Agent converts unstructured prompts into properly formatted XML that improves Claude's response reliability by up to 40%. The multi-tier user system with intelligent rate limiting ensures sustainable resource usage while providing different access levels.\n\nThe application features enterprise-grade user management with email-based approval workflows, comprehensive admin controls, and persistent chat history. The streaming architecture provides real-time feedback during conversion, maintaining excellent user experience even with complex prompts. Built with TypeScript throughout, the codebase maintains strict type safety and follows modern React patterns with server components.\n\nThe project showcases expertise in full-stack development, AI integration, user authentication systems, and production-ready deployment practices. It demonstrates the practical application of the Vercel AI SDK and advanced prompt engineering techniques for improved AI interactions.",
  outcomeSv:
    "Systemet demonstrerar framgångsrikt avancerade AI-integrationsmönster med moderna webbteknologier. Claude XML Agent konverterar ostrukturerade prompts till korrekt formaterad XML som förbättrar Claude's svarstillförlitlighet med upp till 40%. Det flernivå användarsystemet med intelligent hastighetsbegränsning säkerställer hållbar resursanvändning samtidigt som det tillhandahåller olika åtkomstnivåer.\n\nApplikationen har företagsklass användarhantering med e-postbaserade godkännandearbetsflöden, omfattande administratörskontroller och persistent chat-historik. Streaming-arkitekturen ger realtids-feedback under konvertering och upprätthåller utmärkt användarupplevelse även med komplexa prompts. Byggd med TypeScript genomgående, bibehåller kodbasen strikt typsäkerhet och följer moderna React-mönster med serverkomponenter.\n\nProjektet visar expertis inom fullstack-utveckling, AI-integration, användarautentiseringssystem och produktionsklara deployment-praxis. Det demonstrerar praktisk tillämpning av Vercel AI SDK och avancerade prompt-engineering-tekniker för förbättrade AI-interaktioner.",
  githubLink: "https://github.com/Berkay2002/claude-xml-agent",
};