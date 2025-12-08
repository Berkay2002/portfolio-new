import type { Project } from "@/types";

export const animatch: Project = {
  id: "animatch",
  title: "AniMatch: Anime Recommendation",
  description:
    "Multi-select anime recommender built on Next.js 16 with BERT embeddings, MongoDB, and a web worker that blends user-picked titles into weighted similarity scores.",
  descriptionSv:
    "Anime-rekommendationer byggda med Next.js 16, BERT-inbäddningar, MongoDB och en web worker som väger samman användarvalda titlar till likhetspoäng.",
  technologies: [
    "TypeScript",
    "Next.js 16",
    "React 19",
    "Tailwind CSS 4",
    "Radix UI",
    "Framer Motion",
    "MongoDB",
    "Web Workers",
    "BERT embeddings",
  ],
  link: "https://github.com/Berkay2002/anime-recommendation",
  detailedDescription:
    "A Next.js 16 App Router web app that delivers anime recommendations from BERT embeddings stored in MongoDB. Users pick multiple titles, which are merged into weighted vectors (descriptions, genres, demographics, ratings, themes) and processed in a web worker to keep the UI responsive. The interface persists choices in localStorage, exposes trending/top-ranked lists, and uses Radix UI + Tailwind 4 for mobile-first layouts.",
  detailedDescriptionSv:
    "En Next.js 16 App Router-app som levererar animerekommendationer från BERT-inbäddningar lagrade i MongoDB. Användare väljer flera titlar som vägs samman till vektorer (beskrivningar, genrer, demografi, betyg, teman) och beräknas i en web worker för att hålla UI responsivt. Gränssnittet sparar val i localStorage, visar trending/topplistor och använder Radix UI + Tailwind 4 för mobilanpassade layouter.",
  features: [
    "Multi-select recommendations: Combine several chosen titles into a single weighted similarity query",
    "Web worker scoring: Offloads cosine similarity across embeddings to avoid blocking the UI",
    "Weighted embeddings: Adjustable weights across descriptions, genres, themes, demographics, and ratings",
    "MongoDB-backed API: Fetches embeddings and metadata via Next.js API routes",
    "Persistent choices: localStorage keeps user selections across visits",
    "Responsive UI kit: Radix UI + Tailwind 4 with motion flourishes",
    "Discovery views: Trending and top-ranked sections plus CTA to browse more",
  ],
  featuresSv: [
    "Multi-select-rekommendationer: Kombinerar flera valda titlar till en viktad likhetsförfrågan",
    "Web worker-beräkning: Flyttar cosinuslikhet till en worker för att undvika UI-blockering",
    "Viktade inbäddningar: Justerbara vikter för beskrivningar, genrer, teman, demografi och betyg",
    "MongoDB-API: Hämtar inbäddningar och metadata via Next.js API-rutter",
    "Bestående val: localStorage sparar användarval mellan besök",
    "Responsivt UI-kit: Radix UI + Tailwind 4 med rörelseinslag",
    "Upptäcktsvyer: Trending- och topplistor samt CTA för att utforska fler titlar",
  ],
  solution:
    "Next.js 16 handles the UI, API routes, and worker host. A MongoDB-backed API serves both metadata and BERT embedding vectors; a client web worker computes cosine similarity with configurable weights to aggregate multiple selected titles. State is persisted client-side for fast revisit flows, and UI primitives come from Radix + Tailwind, with Framer Motion for subtle motion cues.",
  solutionSv:
    "Next.js 16 hanterar UI, API-rutter och worker. Ett MongoDB-stöd serverar både metadata och BERT-inbäddningar; en client-web worker beräknar cosinuslikhet med justerbara vikter och slår samman flera valda titlar. Tillstånd sparas på klientsidan för snabba återbesök och UI-primitiver kommer från Radix + Tailwind, med Framer Motion för rörelseinslag.",
  outcome:
    "Delivers responsive, multi-title recommendations without UI jank by offloading similarity math to a worker and persisting choices. Users can explore trending and top-ranked lists, then refine picks to surface contextually similar anime based on rich embedding signals.",
  outcomeSv:
    "Ger responsiva rekommendationer för flera titlar utan UI-lag genom att flytta likhetsberäkning till en worker och spara val. Användare kan utforska trending- och topplistor och därefter förfina valen för att få kontextuellt liknande anime baserat på rika inbäddningssignaler.",
  githubLink: "https://github.com/Berkay2002/anime-recommendation",
  paperLink: "/papers/animatch-paper.pdf",
};