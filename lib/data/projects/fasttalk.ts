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
    "Kokoro/Chatterbox TTS",
    "Next.js 16",
    "React 19",
    "Tailwind v4",
    "AudioWorklet API",
    "Radix UI",
    "Recharts",
  ],
  link: "https://github.com/Berkay2002/fasttalk-llm-microservice",
  frontendLink: "https://github.com/Berkay2002/fasttalk-frontend",
  playgroundLink: "/playground/tdde19",
  imageAlt: "FastTalk microservice stack",
  detailedDescription:
    "Voice pipeline with a backend orchestrator coordinating optional STT/LLM/TTS microservices. Whisper-based STT with VAD handles transcription, PydanticAI drives LLM inference with tool-calling (DuckDuckGo search) on vLLM or Ollama backends, and TTS runs through Kokoro (CPU/ONNX) or Chatterbox (GPU, multilingual). The WebSocket layer streams tokens and audio chunks, manages turn detection and barge-in, and tracks 11 timestamps that feed 9 derived latency metrics. The Next.js 16 frontend captures microphone audio through AudioWorklet processors running off the main thread, batches 48 kHz PCM into ~42 ms chunks, plays back TTS through a second worklet, and renders the full metrics dashboard with color-coded latency thresholds. Each microservice has its own Docker setup with GPU, CPU, and Apple Silicon profiles.",
  detailedDescriptionSv:
    "Röstpipeline med en backend-orkestrerare som koordinerar valfria STT/LLM/TTS-mikrotjänster. Whisper-baserad STT med VAD hanterar transkription, PydanticAI driver LLM-inferens med verktygsanrop (DuckDuckGo-sökning) via vLLM eller Ollama, och TTS kör genom Kokoro (CPU/ONNX) eller Chatterbox (GPU, flerspråkig). WebSocket-lagret strömmar tokens och ljudchunkar, hanterar turdetektering och barge-in, och spårar 11 tidsstämplar som ger 9 härledda latensmetrik. Next.js 16-frontenden fångar mikrofonljud genom AudioWorklet-processorer som kör utanför huvudtråden, batchar 48 kHz PCM i ~42 ms-chunk, spelar upp TTS genom en andra worklet och renderar hela metrikdashboarden med färgkodade latensgränser. Varje mikrotjänst har sin egen Docker-konfiguration med GPU-, CPU- och Apple Silicon-profiler.",
  features: [
    "WebSocket streaming for STT→LLM→TTS with barge-in, turn detection, and mid-stream cancellation",
    "Kokoro (CPU/ONNX) and Chatterbox (GPU, multilingual) TTS engines, plus Whisper STT with VAD",
    "PydanticAI-driven LLM with DuckDuckGo tool calling on vLLM or Ollama backends",
    "AudioWorklet-based audio I/O — PCM capture at 48 kHz batched into ~42 ms chunks, TTS playback through a separate worklet, all off the main thread",
    "Nine latency metrics (STT FTL/FL, LLM TTFT/TTSR/TRT, TTS TAL/TST, E2E Total/User) with color-coded thresholds per metric",
    "Switchable deployment: monolith, distributed microservices, or hybrid — Docker Compose profiles for GPU, CPU, and Apple Silicon",
    "Three-column dashboard with collapsible conversations/chat/metrics panels, live connection state, and recording/speaking indicators",
  ],
  featuresSv: [
    "WebSocket-strömning för STT→LLM→TTS med barge-in, turdetektering och avbrytning mitt i strömmen",
    "Kokoro (CPU/ONNX) och Chatterbox (GPU, flerspråkig) TTS-motorer, plus Whisper STT med VAD",
    "PydanticAI-driven LLM med DuckDuckGo-verktygsanrop via vLLM eller Ollama",
    "AudioWorklet-baserad ljud-I/O — PCM-fångst på 48 kHz batchad i ~42 ms-chunk, TTS-uppspelning genom en separat worklet, allt utanför huvudtråden",
    "Nio latensmetrik (STT FTL/FL, LLM TTFT/TTSR/TRT, TTS TAL/TST, E2E Total/User) med färgkodade gränsvärden per metrik",
    "Växla driftläge: monolit, distribuerade mikrotjänster eller hybrid — Docker Compose-profiler för GPU, CPU och Apple Silicon",
    "Trekolumnsdashboard med hopfällbara konversations-/chat-/metrikpaneler, live-anslutningsstatus och inspelnings-/talarindikatorer",
  ],
  challenges: [
    "Keeping audio capture and playback off the main thread while synchronizing with React state — AudioWorklet processors run in a separate context with no direct DOM access",
    "Tracking latency across three independent services: 11 timestamps per utterance, each recorded at a different hop, then stitched into 9 meaningful metrics",
    "Handling barge-in cleanly — when the user starts talking mid-TTS, the server needs to interrupt generation and the frontend needs to flush its audio buffer without popping",
    "Supporting GPU, CPU, and Apple Silicon from the same codebase without a combinatorial explosion of Docker configs",
  ],
  challengesSv: [
    "Hålla ljudfångst och uppspelning utanför huvudtråden medan React-state synkroniseras — AudioWorklet-processorer kör i en separat kontext utan direkt DOM-åtkomst",
    "Spåra latens över tre oberoende tjänster: 11 tidsstämplar per yttrande, var och en registrerad vid ett olika hopp, som sedan sys ihop till 9 meningsfulla metrik",
    "Hantera barge-in smidigt — när användaren börjar prata mitt i TTS måste servern avbryta generering och frontenden tömma sin ljudbuffer utan knäpp",
    "Stödja GPU, CPU och Apple Silicon från samma kodbas utan en kombinatorisk explosion av Docker-konfigurationer",
  ],
  solution:
    "Async WebSocket handlers coordinate STT/LLM/TTS streams with structured payloads and VAD-based turn control. PydanticAI wraps the LLM layer with typed tool calling and conversation history trimming. The frontend uses two AudioWorklet processors — one for PCM capture with 2048-sample batching and an 8-byte header (timestamp + TTS-playing flag), another for buffered TTS playback — keeping audio processing off the main thread entirely. Docker Compose profiles and per-service Dockerfiles (GPU, CPU, Apple Silicon) handle the deployment matrix without duplicating configs.",
  solutionSv:
    "Asynkrona WebSocket-handlers koordinerar STT/LLM/TTS-strömmar med strukturerade payloads och VAD-baserad turkontroll. PydanticAI kapslar LLM-lagret med typade verktygsanrop och konversationshistoriktrimmning. Frontenden använder två AudioWorklet-processorer — en för PCM-fångst med 2048-samplingsbatchning och ett 8-byte-huvud (tidsstämpel + TTS-spelar-flagga), en annan för buffrad TTS-uppspelning — och håller all ljudbearbetning utanför huvudtråden. Docker Compose-profiler och per-tjänst Dockerfiler (GPU, CPU, Apple Silicon) hanterar driftmatrisen utan att duplicera konfigurationer.",
  outcome:
    "Low-latency voice pipeline that runs locally or as microservices, with vLLM or Ollama LLM backends and agentic tool calling via PydanticAI. Hits sub-2 s first-token and sub-1 s TTS targets across GPU, CPU, and Apple Silicon. The frontend streams audio through AudioWorklet processors and renders a live metrics dashboard with per-metric color thresholds, so you can actually see where latency is going per hop.",
  outcomeSv:
    "Låg-latens röstpipeline som kan köras lokalt eller som mikrotjänster, med vLLM eller Ollama som LLM-backend och agentiska verktygsanrop via PydanticAI. Når mål för första token under 2 s och TTS under 1 s på GPU, CPU och Apple Silicon. Frontenden strömmar ljud genom AudioWorklet-processorer och renderar en live metrikdashboard med färgkodade gränsvärden per metrik, så man faktiskt kan se var latensen hamnar per hopp.",
  githubLink: "https://github.com/Berkay2002/fasttalk-llm-microservice",
  microservices: [
    {
      name: "STT Service",
      description:
        "Whisper-based speech-to-text with VAD and word-level timestamps, exposed over WebSocket/HTTP. Supports batch file processing and live microphone modes alongside the streaming API.",
      descriptionSv:
        "Whisper-baserad speech-to-text med VAD och tidsstämplar på ordnivå, exponerad via WebSocket/HTTP. Stöder batchfilbearbetning och live-mikrofonlägen utöver strömmande API.",
      technologies: ["Faster-whisper", "webrtcvad", "FastAPI", "WebSockets", "Docker"],
      link: "https://github.com/Berkay2002/fasttalk-stt-microservice",
    },
    {
      name: "LLM Service",
      description:
        "vLLM (OpenAI-compatible) or Ollama WebSocket LLM with PydanticAI agent layer, DuckDuckGo tool calling, conversation history trimming, and mid-stream request cancellation.",
      descriptionSv:
        "vLLM (OpenAI-kompatibel) eller Ollama WebSocket-LLM med PydanticAI-agentlager, DuckDuckGo-verktygsanrop, konversationshistoriktrimmning och avbrytning mitt i strömmen.",
      technologies: [
        "vLLM",
        "PydanticAI",
        "Ollama",
        "FastAPI",
        "WebSockets",
        "Docker",
      ],
      link: "https://github.com/Berkay2002/fasttalk-llm-microservice",
    },
    {
      name: "TTS Service",
      description:
        "Text-to-speech with Kokoro (CPU/ONNX) and Chatterbox (GPU, multilingual) backends, streaming audio over WebSocket. Handles EPUB and PDF document parsing for batch synthesis.",
      descriptionSv:
        "Text-till-tal med Kokoro (CPU/ONNX) och Chatterbox (GPU, flerspråkig), strömmar ljud via WebSocket. Hanterar EPUB- och PDF-dokumentparsning för batchsyntes.",
      technologies: [
        "Kokoro",
        "Chatterbox",
        "PyTorch",
        "Flask",
        "WebSockets",
        "Docker",
      ],
      link: "https://github.com/Berkay2002/fasttalk-tts-microservice",
    },
    {
      name: "Frontend",
      description:
        "Next.js 16 voice-first dashboard with AudioWorklet-based PCM capture and TTS playback, three-column layout, nine latency metrics with color-coded thresholds, and auto-reconnecting WebSocket client.",
      descriptionSv:
        "Next.js 16 röstförst-dashboard med AudioWorklet-baserad PCM-fångst och TTS-uppspelning, trekolumnslayout, nio latensmetrik med färgkodade gränsvärden och auto-återanslutande WebSocket-klient.",
      technologies: [
        "Next.js 16",
        "React 19",
        "Tailwind v4",
        "AudioWorklet API",
        "Radix UI",
      ],
      link: "https://github.com/Berkay2002/fasttalk-frontend",
    },
  ],
};
