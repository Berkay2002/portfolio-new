// Copy for the landing page (design/specs/landing-r2.md), English and Swedish.
import type { Locale } from "@/types";
import { photos as allPhotos } from "./photos";

type Copy = {
  nav: { work: string; research: string; experience: string; about: string; ask: string; contact: string };
  hero: { overline: string; headline: [string, string]; lede: string; cta: string; cv: string; open: string; close: string; ask: string; follow: string; reset: string; failed: string; rate: string; none: string; search: string };
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
    shipped: string;
    cv: string;
  };
  photos: { index: string; title: string; all: (n: number) => string };
  gallery: { index: string; title: string; back: string; japan: string; portugal: string; close: string };
  contact: { index: string; title: [string, string]; top: string };
  pages: {
    projects: { index: string; title: string; count: (n: number) => string; filters: [string, string][] };
    project: {
      back: string;
      index: string;
      sections: [string, string, string, string, string];
      services: string;
      screens: string;
      next: string;
      stack: string;
      live: string;
      source: string;
      paper: string;
      benchmark: string;
    };
    papers: { index: string; title: string; lede: string; back: string; abstract: string; read: string; benchmark: string; pdf: string; project: string; kinds: { thesis: string; project: string } };
    playground: { index: string; title: string; lede: string; back: string; item: [string, string]; open: string; soon: string };
    notFound: { title: string; line: string; home: string };
    ask: {
      index: string;
      title: string;
      lede: string;
      placeholder: string;
      submit: string;
      try: string;
      examples: string[];
      on: string;
      off: string;
      answer: string;
      thinking: string;
      found: (n: number) => string;
      none: string;
      rate: string;
      failed: string;
    };
  };
};

export const landingCopy: Record<Locale, Copy> = {
  en: {
    nav: { work: "Work", research: "Research", experience: "Experience", about: "About", ask: "Ask", contact: "Contact" },
    hero: {
      overline: "SOFTWARE DEVELOPER · LINKÖPING",
      headline: ["I build AI that", "works outside the demo."],
      lede: "Agentic retrieval, voice pipelines and the web apps around them. Now a software developer at Ericsson.",
      cta: "See my work",
      cv: "Download CV",
      open: "Ask me",
      close: "Close",
      ask: "Ask me anything about my work",
      failed: "The model didn't answer this time.",
      rate: "That's enough questions for a while.",
      none: "Nothing on the site matches that.",
      follow: "Ask a follow-up",
      reset: "New question",
      search: "Search the site for it →",
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
      shipped: "where it shipped",
      cv: "Download CV →",
    },
    photos: { index: "06 / OFF THE CLOCK", title: "Photography.", all: (n) => `All ${n} photos →` },
    gallery: { index: "PHOTOGRAPHY", title: "Off the clock.", back: "← Back", japan: "Japan", portugal: "Portugal", close: "Close" },
    contact: {
      index: "07 / CONTACT",
      title: ["Building something", "that has to work?"],
      top: "Back to top ↑",
    },
    pages: {
      projects: {
        index: "WORK",
        title: "Things I've shipped.",
        count: (n) => `${n} projects`,
        filters: [
          ["all", "All"],
          ["ai", "AI"],
          ["web", "Web"],
          ["graphics", "Graphics"],
          ["mobile", "Mobile"],
        ],
      },
      project: {
        back: "← All projects",
        index: "PROJECT",
        sections: ["Overview", "Key features", "Challenges", "Solution", "Outcome"],
        services: "Services",
        screens: "Screens",
        next: "Next →",
        stack: "stack",
        live: "Live site ↗",
        source: "Source ↗",
        paper: "Paper →",
        benchmark: "Benchmark →",
      },
      papers: {
        index: "RESEARCH",
        title: "Papers.",
        lede: "My thesis and the papers from my projects.",
        back: "← Papers",
        abstract: "Abstract",
        read: "Read the paper →",
        benchmark: "Benchmark →",
        kinds: { thesis: "MASTER'S THESIS · ERICSSON", project: "PROJECT PAPER" },
        pdf: "Download PDF ↓",
        project: "Project →",
      },
      playground: {
        index: "PLAYGROUND",
        title: "Experiments.",
        lede: "Things you can run and poke at.",
        back: "← Playground",
        item: ["FastTalk benchmark", "Three local models in a real-time voice loop, compared on latency, consistency and reliability."],
        open: "Open →",
        soon: "More soon.",
      },
      notFound: { title: "Off the trace.", line: "This page does not exist, or it moved.", home: "Back to the start →" },
      ask: {
        index: "ASK",
        title: "Ask the site.",
        lede: "Ask about my projects, my thesis or where I've worked. The search runs in your browser, and when my home server is on, a free model adds a short answer.",
        placeholder: "Has he shipped anything with voice?",
        submit: "Ask",
        try: "Try",
        examples: ["Has he shipped anything with voice?", "What did he do at Ericsson?", "Which projects use LangGraph?"],
        on: "answers from a free model on my home server",
        off: "search only, the answer model is off right now",
        answer: "answer",
        thinking: "Reading the matches…",
        found: (n) => (n === 1 ? "1 match" : `${n} matches`),
        none: "Nothing on the site matches that. Try a project, a tool or a year.",
        rate: "That's enough questions for a while. The search still works.",
        failed: "The model didn't answer this time. Here's what the search found.",
      },
    },
  },
  sv: {
    nav: { work: "Projekt", research: "Forskning", experience: "Erfarenhet", about: "Om mig", ask: "Fråga", contact: "Kontakt" },
    hero: {
      overline: "MJUKVARUUTVECKLARE · LINKÖPING",
      headline: ["Jag bygger AI som", "fungerar utanför demon."],
      lede: "Agentisk sökning, röstpipelines och webbapparna runt dem. Nu mjukvaruutvecklare på Ericsson.",
      cta: "Se mina projekt",
      cv: "Ladda ner CV",
      open: "Fråga mig",
      close: "Stäng",
      ask: "Fråga mig vad som helst om mitt arbete",
      failed: "Modellen svarade inte den här gången.",
      rate: "Det räcker med frågor en stund.",
      none: "Inget på sajten matchar det.",
      follow: "Ställ en följdfråga",
      reset: "Ny fråga",
      search: "Sök på sajten efter det →",
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
      shipped: "där det används",
      cv: "Ladda ner CV →",
    },
    photos: { index: "06 / PÅ FRITIDEN", title: "Fotografi.", all: (n) => `Alla ${n} foton →` },
    gallery: { index: "FOTOGRAFI", title: "På fritiden.", back: "← Tillbaka", japan: "Japan", portugal: "Portugal", close: "Stäng" },
    contact: {
      index: "07 / KONTAKT",
      title: ["Bygger du något", "som måste fungera?"],
      top: "Till toppen ↑",
    },
    pages: {
      projects: {
        index: "PROJEKT",
        title: "Saker jag har byggt.",
        count: (n) => `${n} projekt`,
        filters: [
          ["all", "Alla"],
          ["ai", "AI"],
          ["web", "Webb"],
          ["graphics", "Grafik"],
          ["mobile", "Mobil"],
        ],
      },
      project: {
        back: "← Alla projekt",
        index: "PROJEKT",
        sections: ["Översikt", "Funktioner", "Utmaningar", "Lösning", "Resultat"],
        services: "Tjänster",
        screens: "Bilder",
        next: "Nästa →",
        stack: "stack",
        live: "Live ↗",
        source: "Källkod ↗",
        paper: "Rapport →",
        benchmark: "Benchmark →",
      },
      papers: {
        index: "FORSKNING",
        title: "Rapporter.",
        lede: "Mitt examensarbete och rapporterna från mina projekt.",
        back: "← Rapporter",
        abstract: "Sammanfattning",
        read: "Läs rapporten →",
        benchmark: "Benchmark →",
        kinds: { thesis: "EXAMENSARBETE · ERICSSON", project: "PROJEKTRAPPORT" },
        pdf: "Ladda ner PDF ↓",
        project: "Projektet →",
      },
      playground: {
        index: "LEKPLATS",
        title: "Experiment.",
        lede: "Saker du kan köra och peta på.",
        back: "← Lekplats",
        item: ["FastTalk-benchmark", "Tre lokala modeller i en röstloop i realtid, jämförda på latens, jämnhet och tillförlitlighet."],
        open: "Öppna →",
        soon: "Mer kommer.",
      },
      notFound: { title: "Utanför spåret.", line: "Sidan finns inte, eller så har den flyttat.", home: "Tillbaka till start →" },
      ask: {
        index: "FRÅGA",
        title: "Fråga sajten.",
        lede: "Fråga om mina projekt, min uppsats eller var jag har jobbat. Sökningen körs i din webbläsare, och när min hemmaserver är på skriver en gratis modell ett kort svar.",
        placeholder: "Har han byggt något med röst?",
        submit: "Fråga",
        try: "Testa",
        examples: ["Har han byggt något med röst?", "Vad gjorde han på Ericsson?", "Vilka projekt använder LangGraph?"],
        on: "svar från en gratis modell på min hemmaserver",
        off: "bara sökning, svarsmodellen är avstängd just nu",
        answer: "svar",
        thinking: "Läser träffarna…",
        found: (n) => (n === 1 ? "1 träff" : `${n} träffar`),
        none: "Inget på sajten matchar det. Testa ett projekt, ett verktyg eller ett år.",
        rate: "Det räcker med frågor en stund. Sökningen fungerar fortfarande.",
        failed: "Modellen svarade inte den här gången. Här är vad sökningen hittade.",
      },
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

// The projects built on each layer, as [name, project id]: a selection of the ones whose stack uses that layer's tools.
export const shipped: [string, string][][] = [
  [["Stats for Spotify", "statsforspotify"], ["Oversee", "oversee"], ["Alertz", "alertz"], ["LiTHePlan", "litheplan"], ["Fractured Crown", "fractured-crown"]],
  [["Municipality Chatbot", "municipality-chatbot"], ["SynGraph", "researcher"], ["FastTalk", "fasttalk"]],
  [["FastTalk", "fasttalk"]],
  [["Stats for Spotify", "statsforspotify"], ["Alertz", "alertz"], ["Municipality Chatbot", "municipality-chatbot"], ["Clairvoyant", "clairvoyant"]],
  [["FastTalk", "fasttalk"], ["Municipality Chatbot", "municipality-chatbot"]],
];

// The five prints dealt out in the photo section, the middle one in colour; the rest are on
// /photography. Empty hides the section.
const picks = ["japan-1044", "japan-1766", "portugal-3825", "portugal-8416", "japan-1197"];
export const photos = picks.map((id) => allPhotos.find((p) => p.id === id)!);
