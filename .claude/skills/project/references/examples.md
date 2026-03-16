# Project Module Examples

These are real entries from the portfolio codebase. When creating new project modules, match the tone, structure, and level of detail shown here. All user-facing text must include both EN and SV variants.

---

## Simple: Solar System Simulation

A straightforward academic project with no external links beyond GitHub, no challenges section, and no microservices. Good baseline for smaller or self-contained projects.

```ts
import type { Project } from "@/types";

export const solarSystem: Project = {
  id: "solar-system",
  title: "Interactive Solar System Simulation",
  description:
    "Created an interactive solar system simulation using Euler's approximation, with keyframe animations and a custom Blender UI. Enabled users to design and visualize their own planetary systems while simulating realistic orbits.",
  descriptionSv:
    "Skapade en interaktiv solsystemssimulering med Euler-approximation, med keyframe-animationer och ett anpassat Blender-gränssnitt. Möjliggjorde för användare att designa och visualisera sina egna planetsystem med realistiska omloppsbanor.",
  technologies: [
    "Blender",
    "Python",
    "ODE",
    "Physics Simulation",
    "3D Modeling",
  ],
  institution: "Linköping University",
  image: "/images/projects/solar-system.png",
  imageAlt: "Interactive Solar System Simulation screenshot",
  detailedDescription:
    "A comprehensive solar system simulation built as a Blender add-on that uses Euler approximation to accurately model planetary orbits around a sun, with customizable parameters and visualization capabilities.",
  detailedDescriptionSv:
    "En omfattande solsystemssimulering byggd som ett Blender-tillägg som använder Euler-approximation för att noggrant modellera planetbanor runt en sol, med anpassningsbara parametrar och visualiseringsmöjligheter.",
  features: [
    "Physics-Based Simulation: Uses Euler approximation to calculate accurate planetary orbits",
    "Custom UI Panel: Intuitive interface for creating and customizing solar systems",
    "Keyframe Animation: Automatically animates each planet's movement",
    "Customizable Parameters: Adjust masses, distances, velocities, and other orbital parameters",
    "Advanced Mode: Option for exponentially more precise but computationally intensive simulations",
    "Visual Effects: Custom shaders and lighting for realistic planet and space rendering",
  ],
  featuresSv: [
    "Fysikbaserad simulering: Använder Euler-approximation för att beräkna exakta planetbanor",
    "Anpassad UI-panel: Intuitivt gränssnitt för att skapa och anpassa solsystem",
    "Keyframe-animering: Animerar automatiskt varje planets rörelse",
    "Anpassningsbara parametrar: Justera massor, avstånd, hastigheter och andra banparametrar",
    "Avancerat läge: Alternativ för exponentiellt mer exakta men beräkningsintensiva simuleringar",
    "Visuella effekter: Anpassade shaders och belysning för realistisk planet- och rymdåtergivning",
  ],
  solution:
    "This project was created as part of the TNM085 Modeling Project course at Linköping University. It demonstrates practical application of physics simulation in a 3D environment, combining mathematical modeling with visual representation.",
  solutionSv:
    "Detta projekt skapades som en del av kursen TNM085 Modelleringsprojekt vid Linköpings universitet. Det visar praktisk tillämpning av fysiksimulering i en 3D-miljö, där matematisk modellering kombineras med visuell representation.",
  outcome:
    "The system allows users to create multiple planets with unique properties, visualize their orbits, and generate animations showing the dynamic interactions between celestial bodies. The code has been updated to match modern Blender Python standards, particularly regarding shader node implementation.\n\nThe add-on can be installed directly into Blender, making it accessible as a tool in the sidebar panel. Users can choose between standard simulation for quick results or advanced simulation for more precise orbital mechanics.",
  outcomeSv:
    "Systemet låter användare skapa flera planeter med unika egenskaper, visualisera deras banor och generera animationer som visar de dynamiska interaktionerna mellan himlakroppar. Koden har uppdaterats för att matcha moderna Blender Python-standarder, särskilt när det gäller implementering av shader-noder.\n\nTillägget kan installeras direkt i Blender, vilket gör det tillgängligt som ett verktyg i sidopanelen. Användare kan välja mellan standardsimulering för snabba resultat eller avancerad simulering för mer exakt banmekanik.",
  githubLink: "https://github.com/Berkay2002/blender-solar-system",
};
```

---

## Medium: SynGraph Deep Research Agent

Includes challenges/solution narrative, a paper link, and a live link. No microservices or gallery, but more sections than the simple example.

```ts
import type { Project } from "@/types";

export const researcher: Project = {
  id: "researcher",
  title: "SynGraph: Deep Research Agent",
  description:
    "LangGraph + Next.js workflow that orchestrates supervisor/worker agents for deep research with dual search engines and human clarifications.",
  descriptionSv:
    "LangGraph + Next.js-arbetsflöde som orkestrerar supervisor-/worker-agenter för djup research med dubbla sökmotorer och mänskliga förtydliganden.",
  technologies: [
    "TypeScript",
    "Next.js",
    "LangGraph",
    "Google Gemini",
    "Tavily",
    "Exa",
    "MDX",
  ],
  link: "https://github.com/Berkay2002/researcher",
  imageAlt: "SynGraph deep research flow",
  detailedDescription:
    "Course project (TNM114) that builds an agentic research stack: a router detects follow-ups vs new requests, a supervisor delegates to parallel researcher agents, and reports are synthesized with citations. Uses Gemini 3 Pro for reasoning, Gemini 2.5 Flash for routing/summarization, and Tavily + Exa for web/semantic search.",
  detailedDescriptionSv:
    "Kursprojekt (TNM114) som bygger en agentisk forskningsstack: en router upptäcker uppföljningar kontra nya förfrågningar, en supervisor delegerar till parallella forskaragenter och rapporter syntetiseras med källhänvisningar. Använder Gemini 3 Pro för resonemang, Gemini 2.5 Flash för routing/summering samt Tavily + Exa för webb-/semantisk sökning.",
  features: [
    "Supervisor-worker LangGraph with typed state and parallel researchers",
    "Clarification interrupts for ambiguous requests before planning",
    "Dual search (Tavily + Exa) with compression and source tracking",
    "Follow-up handling to merge prior context with new queries",
    "Report generation pipeline producing cited research briefs",
  ],
  featuresSv: [
    "Supervisor-worker-LangGraph med typad state och parallella forskare",
    "Förtydligandeinterrupter för otydliga förfrågningar innan planering",
    "Dubbel sökning (Tavily + Exa) med komprimering och källspårning",
    "Uppföljningshantering som slår ihop tidigare kontext med nya frågor",
    "Rapportgenereringspipeline som producerar citerade research-briefs",
  ],
  challenges: [
    "Routing between new research and follow-up answers reliably",
    "Keeping research loops transparent with cited sources",
    "Balancing depth vs speed across Gemini Pro and Flash roles",
  ],
  challengesSv: [
    "Pålitlig routing mellan ny research och uppföljningssvar",
    "Behålla transparens i researchloopar med citerade källor",
    "Balansera djup kontra hastighet mellan Gemini Pro och Flash-roller",
  ],
  solution:
    "Implements typed graph nodes for route/clarify/brief/supervisor/report, integrates Tavily and Exa connectors, and separates model roles so heavy reasoning stays on Gemini Pro while fast routing/summarization uses Flash.",
  solutionSv:
    "Implementerar typade grafnoder för route/clarify/brief/supervisor/report, integrerar Tavily- och Exa-anslutningar och separerar modellroller så tungt resonemang körs på Gemini Pro medan snabb routing/summering använder Flash.",
  outcome:
    "Demonstrates reliable deep-research UX with human-in-the-loop clarifications, parallel subtopic exploration, and cited reports suitable for coursework assessment.",
  outcomeSv:
    "Visar en pålitlig deep-research-upplevelse med mänskliga förtydliganden, parallell delämnesutforskning och citerade rapporter som passar kursbedömning.",
  githubLink: "https://github.com/Berkay2002/researcher",
  paperLink: "/papers/syngraph.pdf",
};
```

---

## Complex: FastTalk Real-Time Voice Stack (with microservices)

Full-featured entry with microservices array, frontend link, playground link, challenges, and extensive technology list. Use this as a reference when a project has independently deployable sub-components.

```ts
import type { Project } from "@/types";

export const fasttalk: Project = {
  id: "fasttalk",
  title: "FastTalk: Real-Time Voice Stack",
  description:
    "Real-time voice conversation stack with STT→LLM→TTS, supporting monolith or distributed microservices and WebSocket streaming end to end.",
  descriptionSv:
    "Realtidsröstsamtal med STT→LLM→TTS som kan köras monolitiskt eller som mikrotjänster med WebSocket-strömning hela vägen.",
  technologies: [
    "Python",
    "FastAPI",
    "vLLM (OpenAI-compatible)",
    "PydanticAI",
    "Ollama",
    "WebSockets",
    "Faster-whisper",
    "Docker",
    "CUDA/MPS",
    "Whisper VAD STT",
    "Kokoro/Orpheus/Coqui TTS",
    "Next.js 16 frontend",
    "Tailwind v4",
  ],
  link: "https://github.com/Berkay2002/fasttalk-llm-microservice",
  frontendLink: "https://github.com/Berkay2002/fasttalk-frontend",
  playgroundLink: "/playground/tdde19",
  image: undefined,
  imageAlt: "FastTalk microservice stack",
  detailedDescription:
    "Production-ready voice pipeline with backend orchestration plus optional STT/LLM/TTS microservices. Supports Whisper-based STT with VAD, multiple TTS engines (Kokoro, Orpheus 3B, Coqui XTTS), and flexible LLM backends via vLLM (OpenAI-compatible) or Ollama. WebSocket streaming handles token/audio flow, turn detection/barge-in, and conversation management. A Next.js 16 frontend provides a voice-first dashboard with collapsible chat/metrics panels, live connection state, and color-coded latency thresholds. Deployable on GPU, CPU, or Apple Silicon with health and metrics endpoints, and each microservice can be consumed independently by other applications.",
  detailedDescriptionSv:
    "Produktionsklar röstpipeline med backend-orkestrering och valfria STT/LLM/TTS-mikrotjänster. Stöder Whisper-baserad STT med VAD, flera TTS-motorer (Kokoro, Orpheus 3B, Coqui XTTS) och flexibla LLM-backends via vLLM (OpenAI-kompatibel) eller Ollama. WebSocket-strömning hanterar token-/ljudflöde, turdetektering/barge-in och konversationshantering. Ett Next.js 16-gränssnitt ger en röstförst dashboard med hopfällbara chat-/metrikpaneler, live-anslutningsstatus och färgkodade latensgränser. Kan köras på GPU, CPU eller Apple Silicon med hälso- och metrikändpunkter, och varje mikrotjänst kan återanvändas av andra applikationer.",
  features: [
    "Real-time WebSocket streaming for STT→LLM→TTS with barge-in and turn management",
    "Multiple TTS engines (Kokoro, Orpheus 3B, Coqui XTTS) and Whisper STT with VAD",
    "Flexible LLM backends via vLLM (OpenAI-compatible) or Ollama with tool-calling search",
    "Microservices (STT/LLM/TTS) exposed over WebSockets/HTTP for reuse beyond FastTalk",
    "Switchable deployment modes: local monolith, distributed microservices, or hybrid, with health/metrics endpoints and Docker Compose profiles for GPU, CPU, and Apple Silicon",
    "Next.js 16 dashboard with collapsible conversations/chat/metrics panels, voice-first controls, and live status + latency coloring",
  ],
  featuresSv: [
    "WebSocket-strömning för STT→LLM→TTS med barge-in och turhantering",
    "Flera TTS-motorer (Kokoro, Orpheus 3B, Coqui XTTS) och Whisper STT med VAD",
    "Flexibla LLM-backends via vLLM (OpenAI-kompatibel) eller Ollama med verktygsanrop och sök",
    "Mikrotjänster (STT/LLM/TTS) exponerade över WebSockets/HTTP för återanvändning utanför FastTalk",
    "Växla driftläge: lokal monolit, distribuerade mikrotjänster eller hybrid, med hälso-/metrikändpunkter och Docker Compose-profiler för GPU, CPU och Apple Silicon",
    "Next.js 16-dashboard med hopfällbara konversations-/chat-/metrikpaneler, röstförst-kontroller och live status + latensfärger",
  ],
  challenges: [
    "Balancing latency with multi-backend support (GPU, CPU, MPS)",
    "Maintaining turn accuracy with barge-in across streaming STT/LLM/TTS",
    "Exposing observability and health across multiple services without overhead",
  ],
  challengesSv: [
    "Balans mellan latens och flera backendprofiler (GPU, CPU, MPS)",
    "Bibehålla turprecision med barge-in över strömmande STT/LLM/TTS",
    "Exponera observabilitet och hälsa över flera tjänster utan overhead",
  ],
  solution:
    "Async WebSocket handlers coordinate STT/LLM/TTS streams with structured payloads, VAD-based turn control, and configurable worker pools per hardware target. Docker Compose profiles cover monolith and remote services; health/metrics endpoints and model selection toggles keep deployments observable and hardware-aware (CUDA, CPU, MPS).",
  solutionSv:
    "Asynkrona WebSocket-handlers koordinerar STT/LLM/TTS-strömmar med strukturerade payloads, VAD-baserad turkontroll och konfigurerbara workerpooler per hårdvarumål. Docker Compose-profiler täcker monolit och fjärrtjänster; hälso-/metrikändpunkter och modellval håller driften observerbar och hårdvaruanpassad (CUDA, CPU, MPS).",
  outcome:
    "Delivers a low-latency voice pipeline that runs locally or as microservices, supports multiple STT/TTS stacks with vLLM (OpenAI-compatible) or Ollama LLM backends, meets sub-2s first-token and sub-1s TTS targets across GPU, CPU, or Apple Silicon, and now ships with a WebSocket-driven frontend showing live chat, connection state, and latency benchmarks.",
  outcomeSv:
    "Ger en låg-latenspipeline som kan köras lokalt eller som mikrotjänster, stöder flera STT/TTS-stackar med vLLM (OpenAI-kompatibel) eller Ollama som LLM-backend, möter mål för första token under 2 s och TTS under 1 s på GPU, CPU eller Apple Silicon, och inkluderar ett WebSocket-drivet frontend som visar livechat, anslutningsstatus och latensmätare.",
  githubLink: "https://github.com/Berkay2002/fasttalk-llm-microservice",
  microservices: [
    {
      name: "STT Service",
      description:
        "Whisper-based speech-to-text with VAD, exposed over WebSocket/HTTP, with CUDA, CPU, and Apple Silicon profiles.",
      descriptionSv:
        "Whisper-baserad speech-to-text med VAD, exponerad via WebSocket/HTTP och profiler för CUDA, CPU och Apple Silicon.",
      technologies: ["Faster-whisper", "FastAPI", "WebSockets", "Docker"],
      link: "https://github.com/Berkay2002/fasttalk-stt-microservice",
    },
    {
      name: "LLM Service",
      description:
        "vLLM (OpenAI-compatible) or Ollama WebSocket LLM with conversation state, metrics, and tool-calling support.",
      descriptionSv:
        "vLLM (OpenAI-kompatibel) eller Ollama WebSocket-LLM med konversationsstate, metrik och verktygsanrop.",
      technologies: ["vLLM", "Ollama", "FastAPI", "WebSockets", "Docker"],
      link: "https://github.com/Berkay2002/fasttalk-llm-microservice",
    },
    {
      name: "TTS Service",
      description:
        "Text-to-speech with Kokoro, Orpheus 3B, and Coqui XTTS engines, streaming audio over WebSocket.",
      descriptionSv:
        "Text-till-tal med Kokoro, Orpheus 3B och Coqui XTTS som strömmar ljud via WebSocket.",
      technologies: ["Kokoro", "Orpheus 3B", "Coqui XTTS", "FastAPI", "WebSockets", "Docker"],
      link: "https://github.com/Berkay2002/fasttalk-tts-microservice",
    },
  ],
};
```
