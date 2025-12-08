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
