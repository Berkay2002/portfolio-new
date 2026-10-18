import type { Project } from "@/types";

export const clairvoyant: Project = {
  id: "clairvoyant",
  title: "Clairvoyant: AI Research Chat",
  description:
    "AI chat and research app with two agents: a Gemini chat agent that calls tools and renders their results as UI components, and a research agent that searches the web with Exa and writes a cited report you can export as PDF. Built with Next.js and the Vercel AI SDK.",
  descriptionSv:
    "AI-app för chatt och research med två agenter: en chattagent på Gemini som anropar verktyg och visar resultaten som UI-komponenter, och en researchagent som söker på webben med Exa och skriver en rapport med källhänvisningar som kan exporteras som PDF. Byggd med Next.js och Vercel AI SDK.",
  technologies: [
    "TypeScript",
    "Next.js 15",
    "React 19",
    "Vercel AI SDK",
    "Google Gemini",
    "Exa API",
    "Tailwind CSS",
    "shadcn/ui",
    "MCP",
    "ElevenLabs",
    "Qdrant",
    "Neo4j",
  ],
  image: undefined,
  imageAlt: "Clairvoyant AI chat and research platform interface",
  imageAltSv: "Clairvoyants gränssnitt för AI-chatt och research",
  detailedDescription:
    "Clairvoyant combines a tool-calling chat agent with a multi-step research agent. Both run on Google Gemini 2.5 Pro and Flash through the Vercel AI SDK, stream their answers, and show tool results as components instead of plain text.",
  detailedDescriptionSv:
    "Clairvoyant kombinerar en chattagent som anropar verktyg med en researchagent som arbetar i flera steg. Båda körs på Google Gemini 2.5 Pro och Flash via Vercel AI SDK, strömmar sina svar och visar verktygsresultat som komponenter i stället för ren text.",
  features: [
    "Chat agent on Gemini 2.5 Pro/Flash with streaming answers and a reasoning mode",
    "Research agent that plans, finds sources with Exa, scores their relevance and credibility, and writes a synthesised report",
    "Tool results rendered as components: weather forecast, calculator, time, stock card (mock data) and website scraper",
    "Gemini's built-in Google Search, URL Context and code execution tools",
    "PDF export of research reports with inline citations",
    "Text-to-speech playback of answers and reports through ElevenLabs",
    "Context7 documentation lookup over the Model Context Protocol (MCP)",
    "Separate mobile input components for small screens",
  ],
  featuresSv: [
    "Chattagent på Gemini 2.5 Pro/Flash med strömmade svar och ett resonemangsläge",
    "Researchagent som planerar, hittar källor med Exa, bedömer hur relevanta och trovärdiga de är och skriver en sammanställd rapport",
    "Verktygsresultat som komponenter: väderprognos, miniräknare, tid, aktiekort (låtsasdata) och webbskrapa",
    "Geminis inbyggda verktyg för Google-sökning, URL-kontext och kodkörning",
    "PDF-export av researchrapporter med källhänvisningar i texten",
    "Uppläsning av svar och rapporter med ElevenLabs",
    "Uppslag i Context7-dokumentation via Model Context Protocol (MCP)",
    "Egna inmatningskomponenter för mobil",
  ],
  challenges: [
    "Splitting the work between a chat agent and a research agent with their own pipelines",
    "Rendering different tool outputs as matching UI components inside a streamed answer",
    "Filtering research sources by relevance and credibility before synthesis",
    "Connecting MCP tools (Context7) to the chat agent alongside Gemini's own tools",
    "An experimental graph RAG agent that pairs Qdrant vector search with Neo4j graph context",
  ],
  challengesSv: [
    "Att dela upp arbetet mellan en chattagent och en researchagent med var sin pipeline",
    "Att visa olika verktygsresultat som passande UI-komponenter i ett strömmat svar",
    "Att sålla researchkällor efter relevans och trovärdighet innan de sammanställs",
    "Att koppla MCP-verktyg (Context7) till chattagenten bredvid Geminis egna verktyg",
    "En experimentell graph RAG-agent som kombinerar vektorsökning i Qdrant med grafkontext från Neo4j",
  ],
  solution:
    "The app uses the Next.js 15 App Router with React 19. The chat route streams Gemini responses through the Vercel AI SDK and gives the model a set of tools (weather from Open-Meteo, calculator, time, text helper, stock card, scraper), Gemini's Google Search, URL Context and code execution, and Context7 over MCP. The research route asks Gemini for a plan, fetches sources and their content from the Exa API, has the model score each source for relevance and credibility, keeps the ones that pass, and synthesises the findings into a report. Reports are exported to PDF with Puppeteer, and an ElevenLabs route reads text aloud.",
  solutionSv:
    "Appen använder Next.js 15 App Router med React 19. Chattrouten strömmar svar från Gemini via Vercel AI SDK och ger modellen en uppsättning verktyg (väder från Open-Meteo, miniräknare, tid, texthjälp, aktiekort, webbskrapa), Geminis verktyg för Google-sökning, URL-kontext och kodkörning, samt Context7 via MCP. Researchrouten låter Gemini göra en plan, hämtar källor och innehåll från Exa API, låter modellen bedöma varje källas relevans och trovärdighet, behåller de som klarar gränsen och sammanställer resultaten till en rapport. Rapporterna exporteras till PDF med Puppeteer, och en route med ElevenLabs läser upp text.",
  outcome:
    "Built between 31 August and 5 September 2025. The project explores how far the Vercel AI SDK's tool calling and generative UI work with Gemini, and how a research pipeline can be put together from plain model calls and a search API.",
  outcomeSv:
    "Byggd mellan 31 augusti och 5 september 2025. Projektet utforskar hur långt verktygsanrop och generativt UI i Vercel AI SDK räcker tillsammans med Gemini, och hur en researchpipeline kan byggas av vanliga modellanrop och ett sök-API.",
  githubLink: "https://github.com/Berkay2002/Clairvoyant",
};
