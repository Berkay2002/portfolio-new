// Copy for the landing page (design/specs/landing-r2.md), English and Swedish.
import type { Locale } from "@/types";

type Copy = {
  nav: { work: string; research: string; experience: string; about: string; contact: string };
  hero: { overline: string; headline: [string, string]; lede: string; cta: string; cv: string };
  work: {
    index: string;
    title: string;
    all: (n: number) => string;
    caption: string;
    stations: [string, string][];
  };
  research: {
    index: string;
    title: [string, string];
    meta: string;
    question: string;
    field: string;
    few: string;
    body: string;
    read: string;
    benchmark: string;
    also: string;
    with: string;
  };
  experience: {
    index: string;
    title: string;
    moments: { title: string; line: string }[];
  };
  about: {
    index: string;
    bio: [string, string, string];
    how: string;
    layers: string[];
    photos: string;
    cv: string;
  };
  contact: { index: string; title: [string, string]; top: string };
};

export const landingCopy: Record<Locale, Copy> = {
  en: {
    nav: { work: "Work", research: "Research", experience: "Experience", about: "About", contact: "Contact" },
    hero: {
      overline: "AI ENGINEER · LINKÖPING",
      headline: ["I build AI that", "works outside the demo."],
      lede: "Agentic retrieval, voice pipelines and the web apps around them. Now a software developer at Ericsson.",
      cta: "See my work",
      cv: "Download CV",
    },
    work: {
      index: "02 / WORK",
      title: "Things I've shipped.",
      all: (n) => `All ${n} projects →`,
      caption: "FastTalk: a real-time voice assistant, streamed end to end over WebSocket.",
      stations: [
        ["you speak", "48 kHz audio"],
        ["Whisper", "speech to text"],
        ["LLM", "streams tokens"],
        ["Kokoro", "speaks back"],
      ],
    },
    research: {
      index: "03 / RESEARCH",
      title: ["My master's thesis,", "at Ericsson."],
      meta: "When Agentic Workflows Help · Ericsson · Jan–Jun 2026",
      question: "which tests cover this change?",
      field: "11,366 production test cases",
      few: "the few that matter",
      body: "An assistant that helps engineers find the right tests. I built 52 retrieval tasks by hand and ran them through two agent designs, ReAct and orchestrator-worker, on three open models.",
      read: "Read the thesis",
      benchmark: "Benchmark →",
      also: "Also:",
      with: "with",
    },
    experience: {
      index: "04 / EXPERIENCE",
      title: "Where I've been.",
      moments: [
        { title: "BSc, Media Technology", line: "Linköping University · 2021–2024" },
        { title: "MSc, Machine Learning", line: "Linköping University · 2024–2026" },
        { title: "Thesis, then R&D intern", line: "Ericsson · Jan–Sep 2026" },
        { title: "Software Developer", line: "Ericsson · Linköping · since Oct 2026" },
      ],
    },
    about: {
      index: "05 / ABOUT",
      bio: [
        "I like the part ",
        "after the demo",
        ": retrieval that returns the right thing, a voice that answers fast enough to feel like a conversation, and the web app people actually use.",
      ],
      how: "how I build",
      layers: ["interface", "agents", "models", "data", "infra"],
      photos: "off the clock: photography, Japan and Portugal",
      cv: "Download CV →",
    },
    contact: {
      index: "06 / CONTACT",
      title: ["Building something", "that has to work?"],
      top: "Back to top ↑",
    },
  },
  sv: {
    nav: { work: "Projekt", research: "Forskning", experience: "Erfarenhet", about: "Om mig", contact: "Kontakt" },
    hero: {
      overline: "AI-INGENJÖR · LINKÖPING",
      headline: ["Jag bygger AI som", "fungerar utanför demon."],
      lede: "Agentisk sökning, röstpipelines och webbapparna runt dem. Nu mjukvaruutvecklare på Ericsson.",
      cta: "Se mina projekt",
      cv: "Ladda ner CV",
    },
    work: {
      index: "02 / PROJEKT",
      title: "Saker jag har byggt.",
      all: (n) => `Alla ${n} projekt →`,
      caption: "FastTalk: en röstassistent i realtid, strömmad hela vägen över WebSocket.",
      stations: [
        ["du pratar", "48 kHz ljud"],
        ["Whisper", "tal till text"],
        ["LLM", "strömmar tokens"],
        ["Kokoro", "svarar med röst"],
      ],
    },
    research: {
      index: "03 / FORSKNING",
      title: ["Mitt examensarbete,", "på Ericsson."],
      meta: "When Agentic Workflows Help · Ericsson · jan–jun 2026",
      question: "vilka tester täcker ändringen?",
      field: "11 366 testfall från produktion",
      few: "de få som spelar roll",
      body: "En assistent som hjälper ingenjörer att hitta rätt tester. Jag byggde 52 sökuppgifter för hand och körde dem genom två agentdesigner, ReAct och orchestrator-worker, på tre öppna modeller.",
      read: "Läs uppsatsen",
      benchmark: "Benchmark →",
      also: "Även:",
      with: "med",
    },
    experience: {
      index: "04 / ERFARENHET",
      title: "Där jag har varit.",
      moments: [
        { title: "Kandidat, Medieteknik", line: "Linköpings universitet · 2021–2024" },
        { title: "Master, Maskininlärning", line: "Linköpings universitet · 2024–2026" },
        { title: "Exjobb, sedan R&D-praktik", line: "Ericsson · jan–sep 2026" },
        { title: "Mjukvaruutvecklare", line: "Ericsson · Linköping · sedan okt 2026" },
      ],
    },
    about: {
      index: "05 / OM MIG",
      bio: [
        "Jag gillar delen ",
        "efter demon",
        ": sökning som hittar rätt, en röst som svarar snabbt nog för att kännas som ett samtal, och webbappen som folk faktiskt använder.",
      ],
      how: "hur jag bygger",
      layers: ["gränssnitt", "agenter", "modeller", "data", "infra"],
      photos: "på fritiden: fotografi, Japan och Portugal",
      cv: "Ladda ner CV →",
    },
    contact: {
      index: "06 / KONTAKT",
      title: ["Bygger du något", "som måste fungera?"],
      top: "Till toppen ↑",
    },
  },
};

// Tools per layer in "how I build"; the same in both languages.
export const stack = [
  "Next.js · React",
  "LangGraph · PydanticAI",
  "vLLM · PyTorch",
  "PostgreSQL · Qdrant · Neo4j",
  "Docker · Kubernetes",
];

// Berkay's own photos in public/images/photography/ (800x600 webp, metadata stripped). Empty hides the column.
export const photos: { src: string; alt: string }[] = [
  { src: "/images/photography/japan-fushimi-inari.webp", alt: "Gate at Fushimi Inari, Kyoto, at dusk" },
  { src: "/images/photography/japan-fuji.webp", alt: "Mount Fuji under a pale sky" },
  { src: "/images/photography/porto-lighthouse.webp", alt: "Felgueiras lighthouse in Porto at sunset" },
  { src: "/images/photography/porto-tram.webp", alt: "Tram 18 to Clérigos in Porto" },
];
