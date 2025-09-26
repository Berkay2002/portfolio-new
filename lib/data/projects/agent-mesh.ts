import type { Project } from "@/types";

export const agentMesh: Project = {
  id: "agent-mesh",
  title: "Agent Mesh",
  description:
    "An extensible multi-agent AI application built with Next.js, Vercel AI SDK, and Google Gemini models. Features specialized AI agents that collaborate to solve complex tasks through inter-agent communication.",
  descriptionSv:
    "En utbyggbar fleragens AI-applikation byggd med Next.js, Vercel AI SDK och Google Gemini-modeller. Har specialiserade AI-agenter som samarbetar för att lösa komplexa uppgifter genom inter-agentskommunikation.",
  technologies: [
    "TypeScript",
    "Next.js 15",
    "Vercel AI SDK",
    "Google Gemini 2.5",
    "Google Vertex AI",
    "Google Cloud Run",
    "Google Cloud TTS",
    "Tailwind CSS",
    "shadcn/ui",
    "AI Elements",
    "Python",
    "FastAPI",
  ],
  link: "https://github.com/Berkay2002/agent-mesh",
  image: "/images/projects/agent-mesh.png",
  imageAlt:
    "Agent Mesh multi-agent AI interface with chat and agent selection",
  detailedDescription:
    "Agent Mesh is an extensible, multi-agent AI application that provides a framework for creating specialized AI agents that can collaborate to solve complex tasks by delegating to one another. The user interacts with a single chat interface, but behind the scenes, a 'mesh' of agents work together, each leveraging its unique tools and capabilities. Built with Next.js 14, the Vercel AI SDK, and powered by Google Gemini models, it demonstrates advanced AI orchestration patterns.",
  detailedDescriptionSv:
    "Agent Mesh är en utbyggbar fleragens AI-applikation som tillhandahåller ett ramverk för att skapa specialiserade AI-agenter som kan samarbeta för att lösa komplexa uppgifter genom att delegera till varandra. Användaren interagerar med ett enda chat-gränssnitt, men bakom kulisserna arbetar ett 'mesh' av agenter tillsammans, var och en utnyttjar sina unika verktyg och förmågor. Byggd med Next.js 14, Vercel AI SDK och driven av Google Gemini-modeller, demonstrerar den avancerade AI-orkestreringsmönster.",
  features: [
    "Multi-Agent Architecture - Four specialized agents: General (versatile assistant), Research (web search with Tavily/Exa), Coding (Python execution), and Knowledge (document search foundation)",
    "Inter-Agent Collaboration - Agents can call each other as tools, enabling complex workflows and task delegation",
    "Advanced AI Models - Powered by Google Gemini 2.5 Pro for complex reasoning and Gemini 2.5 Flash for fast conversations",
    "Rich Streaming UI - Built with AI Elements for real-time streaming responses, chain-of-thought visualization, and tool usage display",
    "Secure Code Execution - Remote FastAPI service on Google Cloud Run for sandboxed Python code execution with scientific libraries",
    "Text-to-Speech Integration - Google Cloud TTS with high-quality voices for reading responses aloud",
    "Web Search Capabilities - Integration with Tavily API for web search and Exa API for semantic search",
    "Tool Visualization - Real-time display of tool parameters, results, and execution flow",
    "Extensible Architecture - Modular design allowing easy addition of new agents and tools",
  ],
  featuresSv: [
    "Fleragens-arkitektur - Fyra specialiserade agenter: Generell (mångsidig assistent), Forskning (webbsökning med Tavily/Exa), Kodning (Python-körning) och Kunskap (dokumentsökning grund)",
    "Inter-agentsamarbete - Agenter kan kalla på varandra som verktyg, vilket möjliggör komplexa arbetsflöden och uppgiftsdelegering",
    "Avancerade AI-modeller - Driven av Google Gemini 2.5 Pro för komplext resonemang och Gemini 2.5 Flash för snabba konversationer",
    "Rikt streaming-UI - Byggd med AI Elements för realtids-streaming-svar, kedjan-av-tanke-visualisering och verktygsanvändningsvisning",
    "Säker kodkörning - Fjärr-FastAPI-tjänst på Google Cloud Run för sandbox Python-kodkörning med vetenskapliga bibliotek",
    "Text-till-tal-integration - Google Cloud TTS med högkvalitativa röster för att läsa upp svar högt",
    "Webbsökningsmöjligheter - Integration med Tavily API för webbsökning och Exa API för semantisk sökning",
    "Verktygsvisualisering - Realtidsvisning av verktygsparametrar, resultat och körningsflöde",
    "Utbyggbar arkitektur - Modulär design som möjliggör enkel tillägg av nya agenter och verktyg",
  ],
  solution:
    "The application follows a modular architecture where the UI communicates with a central chat API that routes requests to specialized agent endpoints. Built with Next.js 15 and React 19, it uses Google Vertex AI for model access and the Vercel AI SDK for streaming responses. Each agent has its own API route with unique system prompts and toolsets. The Coding Agent utilizes a remote FastAPI service for secure Python execution with scientific libraries including matplotlib for data visualization.\n\nKey technical implementations include:\n- Turbopack for fast development and builds\n- Server components architecture for optimal performance\n- Integrated Google Cloud services (Vertex AI, TTS, Cloud Run)\n- Advanced prompt engineering with agent-specific instructions\n- Real-time streaming with proper error handling and fallbacks\n- Modular tool system allowing easy extension of agent capabilities",
  solutionSv:
    "Applikationen följer en modulär arkitektur där användargränssnittet kommunicerar med en central chat-API som dirigerar förfrågningar till specialiserade agentändpunkter. Byggd med Next.js 15 och React 19, använder den Google Vertex AI för modellåtkomst och Vercel AI SDK för streaming-svar. Varje agent har sin egen API-rutt med unika systempromptar och verktygsuppsättningar. Kodningsagenten använder en fjärr-FastAPI-tjänst för säker Python-körning med vetenskapliga bibliotek inklusive matplotlib för datavisualisering.\n\nViktiga tekniska implementeringar inkluderar:\n- Turbopack för snabb utveckling och byggen\n- Serverkomponentarkitektur för optimal prestanda\n- Integrerade Google Cloud-tjänster (Vertex AI, TTS, Cloud Run)\n- Avancerad prompt-engineering med agentspecifika instruktioner\n- Realtids-streaming med korrekt felhantering och reservalternativ\n- Modulärt verktygssystem som möjliggör enkel utvidgning av agentmöjligheter",
  outcome:
    "Agent Mesh successfully demonstrates advanced multi-agent AI orchestration with a practical, user-friendly interface. The system enables complex task workflows where the General Agent can request research from the Research Agent, which then passes data to the Coding Agent for analysis and visualization. This collaborative approach significantly enhances the capability beyond single-agent systems.\n\nThe application showcases modern AI development practices with streaming responses, proper error handling, and extensible architecture. The integration of Google's latest Gemini 2.5 models provides state-of-the-art performance for both reasoning and speed. The secure code execution environment allows for safe data analysis and visualization capabilities.\n\nBuilt with the latest web technologies including Next.js 15, React 19, and AI Elements, the project represents cutting-edge AI application development. The modular design makes it an excellent foundation for building more sophisticated multi-agent systems and demonstrates expertise in AI integration, cloud services, and modern web development patterns.",
  outcomeSv:
    "Agent Mesh demonstrerar framgångsrikt avancerad fleragens AI-orkestrering med ett praktiskt, användarvänligt gränssnitt. Systemet möjliggör komplexa uppgiftsarbetsflöden där den Generella Agenten kan begära forskning från Forskningsagenten, som sedan skickar data till Kodningsagenten för analys och visualisering. Detta samarbetsbaserade tillvägagångssätt förbättrar avsevärt kapaciteten utöver enagentssystem.\n\nApplikationen visar moderna AI-utvecklingsmetoder med streaming-svar, korrekt felhantering och utbyggbar arkitektur. Integrationen av Googles senaste Gemini 2.5-modeller ger toppmodern prestanda för både resonemang och hastighet. Den säkra kodköringsmiljön möjliggör säker dataanalys och visualiseringskapacitet.\n\nByggd med de senaste webbteknologierna inklusive Next.js 15, React 19 och AI Elements, representerar projektet banbrytande AI-applikationsutveckling. Den modulära designen gör den till en utmärkt grund för att bygga mer sofistikerade fleragens-system och demonstrerar expertis inom AI-integration, molntjänster och moderna webbutvecklingsmönster.",
  githubLink: "https://github.com/Berkay2002/agent-mesh",
};