import type { Project } from "@/types";

export const fasttalk: Project = {
  id: "fasttalk",
  title: "FastTalk: Real-Time Voice Stack",
  description:
    "Real-time voice conversation stack with STT→LLM→TTS as standalone WebSocket microservices, plus a Next.js dashboard that streams audio and shows per-hop latency.",
  descriptionSv:
    "Stack för röstsamtal i realtid med STT→LLM→TTS som fristående WebSocket-mikrotjänster, plus en Next.js-dashboard som strömmar ljud och visar latens per hopp.",
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
  imageAltSv: "FastTalks stack av mikrotjänster",
  detailedDescription:
    "Voice pipeline built from three standalone WebSocket microservices (STT, LLM, TTS) that are meant to plug into a backend orchestration layer. Whisper-based STT with VAD handles transcription, PydanticAI drives LLM inference with tool calling (DuckDuckGo search) on vLLM, with Ollama kept as a legacy backend without tool calling, and TTS runs through Kokoro (CPU/ONNX) or Chatterbox (GPU, multilingual). The frontend's WebSocket protocol streams partial and final transcripts, assistant tokens and TTS audio chunks, handles TTS interruption for barge-in, and tracks 11 timestamps that feed 9 derived latency metrics. The Next.js 16 frontend captures microphone audio through AudioWorklet processors running off the main thread, batches 48 kHz PCM into ~42 ms chunks, plays back TTS through a second worklet, and renders the full metrics dashboard with color-coded latency thresholds. The LLM and STT services ship Docker Compose files for GPU, CPU and Apple Silicon; the TTS service ships one CUDA image that runs Kokoro on CPU or Chatterbox on GPU.",
  detailedDescriptionSv:
    "Röstpipeline byggd av tre fristående WebSocket-mikrotjänster (STT, LLM, TTS) som är tänkta att kopplas in i ett orkestreringslager på backend-sidan. Whisper-baserad STT med VAD hanterar transkription, PydanticAI driver LLM-inferens med verktygsanrop (DuckDuckGo-sökning) via vLLM, med Ollama kvar som äldre backend utan verktygsanrop, och TTS kör genom Kokoro (CPU/ONNX) eller Chatterbox (GPU, flerspråkig). Frontendens WebSocket-protokoll strömmar delvisa och slutliga transkript, assistenttokens och TTS-ljudchunkar, hanterar TTS-avbrott för barge-in, och spårar 11 tidsstämplar som ger 9 härledda latensmetrik. Next.js 16-frontenden fångar mikrofonljud genom AudioWorklet-processorer som kör utanför huvudtråden, batchar 48 kHz PCM i ~42 ms-chunk, spelar upp TTS genom en andra worklet och renderar hela metrikdashboarden med färgkodade latensgränser. LLM- och STT-tjänsterna har Docker Compose-filer för GPU, CPU och Apple Silicon, medan TTS-tjänsten har en CUDA-image som kör Kokoro på CPU eller Chatterbox på GPU.",
  features: [
    "WebSocket streaming for STT→LLM→TTS with barge-in (TTS interruption) and mid-stream generation cancel",
    "Kokoro (CPU/ONNX) and Chatterbox (GPU, multilingual) TTS engines, plus Whisper STT with VAD",
    "PydanticAI-driven LLM with DuckDuckGo tool calling on vLLM, with Ollama as a legacy backend",
    "AudioWorklet-based audio I/O — PCM capture at 48 kHz batched into ~42 ms chunks, TTS playback through a separate worklet, all off the main thread",
    "Nine latency metrics (STT FTL/FL, LLM TTFT/TTSR/TRT, TTS TAL/TST, E2E Total/User) with color-coded thresholds per metric",
    "Standalone microservices: LLM and STT with Docker Compose files for GPU, CPU and Apple Silicon, TTS as one CUDA image",
    "Three-column dashboard (conversations, chat, metrics) with collapsible side panels, live connection state, and recording/speaking indicators",
  ],
  featuresSv: [
    "WebSocket-strömning för STT→LLM→TTS med barge-in (TTS-avbrott) och avbrytning av generering mitt i strömmen",
    "Kokoro (CPU/ONNX) och Chatterbox (GPU, flerspråkig) TTS-motorer, plus Whisper STT med VAD",
    "PydanticAI-driven LLM med DuckDuckGo-verktygsanrop via vLLM, med Ollama som äldre backend",
    "AudioWorklet-baserad ljud-I/O — PCM-fångst på 48 kHz batchad i ~42 ms-chunk, TTS-uppspelning genom en separat worklet, allt utanför huvudtråden",
    "Nio latensmetrik (STT FTL/FL, LLM TTFT/TTSR/TRT, TTS TAL/TST, E2E Total/User) med färgkodade gränsvärden per metrik",
    "Fristående mikrotjänster: LLM och STT med Docker Compose-filer för GPU, CPU och Apple Silicon, TTS som en CUDA-image",
    "Dashboard i tre kolumner (konversationer, chatt, metrik) med hopfällbara sidopaneler, live-anslutningsstatus och indikatorer för inspelning och tal",
  ],
  challenges: [
    "Keeping audio capture and playback off the main thread while synchronizing with React state — AudioWorklet processors run in a separate context with no direct DOM access",
    "Tracking latency across three independent services: 11 timestamps per utterance, each recorded at a different hop, then stitched into 9 meaningful metrics",
    "Handling barge-in — when the user talks over the reply, the frontend has to drop the TTS audio already queued in the playback worklet at once",
    "Supporting GPU, CPU, and Apple Silicon from the same codebase without a separate fork per platform",
  ],
  challengesSv: [
    "Hålla ljudfångst och uppspelning utanför huvudtråden medan React-state synkroniseras — AudioWorklet-processorer kör i en separat kontext utan direkt DOM-åtkomst",
    "Spåra latens över tre oberoende tjänster: 11 tidsstämplar per yttrande, var och en registrerad vid ett olika hopp, som sedan sys ihop till 9 meningsfulla metrik",
    "Hantera barge-in — när användaren pratar i mun på svaret måste frontenden direkt slänga det TTS-ljud som redan ligger i kö i uppspelningsworkleten",
    "Stödja GPU, CPU och Apple Silicon från samma kodbas utan en separat variant av koden per plattform",
  ],
  solution:
    "Async WebSocket handlers carry STT/LLM/TTS streams with structured payloads, and the STT service uses VAD to detect end of speech. PydanticAI wraps the LLM layer with typed tool calling and conversation history trimming. The frontend uses two AudioWorklet processors — one for PCM capture with 2048-sample batching and an 8-byte header (timestamp + TTS-playing flag), another for buffered TTS playback — keeping audio processing off the main thread entirely. The LLM and STT services pick the platform through separate Docker Compose files (GPU, CPU, Apple Silicon) and environment config, and the TTS service picks its engine and device through environment variables.",
  solutionSv:
    "Asynkrona WebSocket-handlers bär STT/LLM/TTS-strömmar med strukturerade payloads, och STT-tjänsten använder VAD för att upptäcka talslut. PydanticAI kapslar LLM-lagret med typade verktygsanrop och konversationshistoriktrimmning. Frontenden använder två AudioWorklet-processorer — en för PCM-fångst med 2048-samplingsbatchning och ett 8-byte-huvud (tidsstämpel + TTS-spelar-flagga), en annan för buffrad TTS-uppspelning — och håller all ljudbearbetning utanför huvudtråden. LLM- och STT-tjänsterna väljer plattform med separata Docker Compose-filer (GPU, CPU, Apple Silicon) och miljökonfiguration, och TTS-tjänsten väljer motor och enhet med miljövariabler.",
  outcome:
    "Voice pipeline that runs locally as standalone microservices, with a vLLM backend (Ollama as legacy) and agentic tool calling via PydanticAI. The dashboard grades each metric against latency thresholds, for example end-to-end under 1 s is excellent and under 2 s acceptable. The frontend streams audio through AudioWorklet processors and renders a live metrics dashboard with per-metric color thresholds, so you can actually see where latency is going per hop.",
  outcomeSv:
    "Röstpipeline som körs lokalt som fristående mikrotjänster, med vLLM som backend (Ollama som äldre alternativ) och agentiska verktygsanrop via PydanticAI. Dashboarden betygsätter varje metrik mot latensgränser, till exempel är end-to-end under 1 s utmärkt och under 2 s acceptabelt. Frontenden strömmar ljud genom AudioWorklet-processorer och renderar en live metrikdashboard med färgkodade gränsvärden per metrik, så man faktiskt kan se var latensen hamnar per hopp.",
  githubLink: "https://github.com/Berkay2002/fasttalk-llm-microservice",
  microservices: [
    {
      name: "STT Service",
      description:
        "Whisper-based speech-to-text with VAD and word-level timestamps, exposed over WebSocket. Also runs in audio-file and live-microphone modes besides the WebSocket server.",
      descriptionSv:
        "Whisper-baserad speech-to-text med VAD och tidsstämplar på ordnivå, exponerad via WebSocket. Kan också köras i lägen för ljudfiler och livemikrofon utöver WebSocket-servern.",
      technologies: ["Faster-whisper", "webrtcvad", "FastAPI", "WebSockets", "Docker"],
      link: "https://github.com/Berkay2002/fasttalk-stt-microservice",
    },
    {
      name: "LLM Service",
      description:
        "vLLM (OpenAI-compatible) WebSocket LLM with PydanticAI agent layer, DuckDuckGo tool calling, conversation history trimming, and mid-stream request cancellation. Ollama remains as a legacy backend without tool calling.",
      descriptionSv:
        "vLLM (OpenAI-kompatibel) WebSocket-LLM med PydanticAI-agentlager, DuckDuckGo-verktygsanrop, konversationshistoriktrimmning och avbrytning av begäran mitt i strömmen. Ollama finns kvar som äldre backend utan verktygsanrop.",
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
        "Text-to-speech with Kokoro (CPU/ONNX) and Chatterbox (GPU, multilingual) backends selected by an environment variable, returning a synthesized WAV file per WebSocket request (Kokoro can also return MP3 and sends progress updates). The Kokoro layer builds on the open-source kokoro-tts project, and Chatterbox is Resemble AI's model.",
      descriptionSv:
        "Text-till-tal med Kokoro (CPU/ONNX) och Chatterbox (GPU, flerspråkig) som väljs via en miljövariabel och returnerar en syntetiserad WAV-fil per WebSocket-begäran (Kokoro kan även ge MP3 och skickar förloppsuppdateringar). Kokoro-delen bygger på open source-projektet kokoro-tts, och Chatterbox är Resemble AI:s modell.",
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
        "Röststyrd Next.js 16-dashboard med AudioWorklet-baserad PCM-fångst och TTS-uppspelning, trekolumnslayout, nio latensmetrik med färgkodade gränsvärden och auto-återanslutande WebSocket-klient.",
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
