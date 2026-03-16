import type { Project } from "@/types";

export const fracturedCrown: Project = {
  id: "fractured-crown",
  title: "Fractured Crown",
  description:
    "Browser-based multiplayer social deduction game for 5–10 players with server-authoritative logic on Supabase Edge Functions and Discord Activity support.",
  descriptionSv:
    "Webbläsarbaserat multiplayer-socialdeduktionsspel för 5–10 spelare med serverauktoritativ logik på Supabase Edge Functions och Discord Activity-stöd.",
  technologies: [
    "TypeScript",
    "React",
    "Vite",
    "Tailwind CSS",
    "Supabase",
    "Supabase Edge Functions",
    "Supabase Realtime",
    "Framer Motion",
    "Discord Activity SDK",
    "Web Audio API",
    "PWA",
  ],
  link: "https://fractured-crown.lovable.app/",
  githubLink: "https://github.com/Berkay2002/fractured-crown",
  video: "/videos/fractured-crown-intro.mp4",
  image: "/images/projects/fractured-crown/lobby.avif",
  imageAlt: "Fractured Crown lobby screen",
  detailedDescription:
    "A social deduction game based on Secret Hitler, set in a dark medieval fantasy world where Loyalists, Traitors, and a hidden Usurper fight through elections, legislation, and executions. The client is completely untrusted — 13 Supabase Edge Functions handle role assignment, deck shuffling, vote tallying, and win conditions. State syncs to players through Supabase Realtime (Postgres CDC on 6 tables, Broadcast for cursors and emoji reactions, Presence for lobby tracking), backed by a polling fallback for reliability. Works as a standalone web app or embedded inside Discord as an Activity.",
  detailedDescriptionSv:
    "Ett socialdeduktionsspel baserat på Secret Hitler, satt i en mörk medeltidsfantasyvärld där Loyalister, Förrädare och en dold Usurpator kämpar genom val, lagstiftning och avrättningar. Klienten är helt opålitlig — 13 Supabase Edge Functions hanterar rolltilldelning, kortblandning, rösträkning och vinstvillkor. State synkas till spelare via Supabase Realtime (Postgres CDC på 6 tabeller, Broadcast för markörer och emojireaktioner, Presence för lobbyspårning), med polling-fallback för tillförlitlighet. Fungerar som fristående webbapp eller inbäddat i Discord som en Activity.",
  features: [
    "Server-authoritative game loop: 13 Edge Functions enforce the full ruleset including elections, legislation, executive powers, veto, chaos enactment, and all win conditions — the client never touches game state",
    "Realtime sync: Postgres CDC on 6 tables for game state, Broadcast for ephemeral things like cursors and emoji reactions, Presence for lobby tracking, plus a 2-second polling fallback because Realtime isn't always reliable",
    "Visual decay system: as shadow edicts pile up, the UI gradually deteriorates — ash particles, vignetting, crimson bleeds, screen-shake — six stages total, each layered independently through CSS and Framer Motion",
    "Secret information via RLS: votes stay hidden until the server flips a revealed flag, roles are only visible to their owner until game over, and card hands are delivered through Edge Function responses rather than database columns",
    "Discord Activity support: plays inside Discord with OAuth2 auth and Supabase traffic proxied through the iframe to get around cross-origin restrictions",
    "Procedural audio: all game sounds are synthesized from Web Audio API oscillators and noise buffers — no audio files at all",
    "Mobile-friendly multiplayer: three responsive breakpoints, a dedicated mobile action bar, keyboard shortcuts for voting (J/N), and cinematic card-flip animations for role reveals",
  ],
  featuresSv: [
    "Serverauktoritativ spelloop: 13 Edge Functions upprätthåller hela regelverket inklusive val, lagstiftning, exekutiva befogenheter, veto, kaosenactment och alla vinstvillkor — klienten rör aldrig spelstate",
    "Realtidssynk: Postgres CDC på 6 tabeller för spelstate, Broadcast för tillfälliga saker som markörer och emojireaktioner, Presence för lobbyspårning, plus 2-sekunders polling-fallback eftersom Realtime inte alltid är pålitligt",
    "Visuellt förfallssystem: allt eftersom skuggedikt samlas försämras UI:t gradvis — askpartiklar, vinjettering, karmosinblödningar, skakningar — sex steg totalt, vart och ett lagrat oberoende via CSS och Framer Motion",
    "Hemlig information via RLS: röster förblir dolda tills servern slår en revealed-flagga, roller syns bara för sin ägare tills spelets slut, och korthänder levereras via Edge Function-svar istället för databaskolumner",
    "Discord Activity-stöd: spelbart i Discord med OAuth2-auth och Supabase-trafik proxyad genom iframen för att kringgå cross-origin-restriktioner",
    "Procedurellt ljud: alla spelljud syntetiseras från Web Audio API-oscillatorer och brusbuffertar — inga ljudfiler alls",
    "Mobilvänligt multiplayer: tre responsiva brytpunkter, en dedikerad mobil-actionbar, tangentbordsgenvägar för röstning (J/N) och filmiska kortflipanimationer vid rollvisning",
  ],
  challenges: [
    "The full Secret Hitler ruleset is surprisingly tricky to encode as a distributed state machine — edge cases like 5-player term limits, restoring the Herald pointer after special elections, and chaos enactment on three consecutive failed votes all needed careful handling across 13 separate edge functions",
    "RLS and Supabase Realtime don't play nicely together by default — restrictive policies silently block event delivery, which took multiple migration iterations to figure out",
    "The players table has a recursive RLS problem (a player's policy needs to check which room they're in, which queries the players table again), solved with a SECURITY DEFINER helper function",
    "Keeping 7 CDC subscriptions on one Realtime channel in sync during fast phase transitions without race conditions or missed updates",
  ],
  challengesSv: [
    "Hela Secret Hitlers regelverk är förvånansvärt knepigt att koda som en distribuerad tillståndsmaskin — kantfall som 5-spelars mandatbegränsningar, återställning av Herald-pekaren efter specialval och kaosenactment vid tre misslyckade röstningar i rad krävde noggrann hantering över 13 separata edge functions",
    "RLS och Supabase Realtime fungerar inte bra ihop som standard — restriktiva policyer blockerar tyst eventleverans, vilket tog flera migrationsiterationer att lista ut",
    "Players-tabellen har ett rekursivt RLS-problem (en spelares policy behöver kolla vilket rum de är i, vilket frågar players-tabellen igen), löst med en SECURITY DEFINER-hjälpfunktion",
    "Hålla 7 CDC-prenumerationer på en Realtime-kanal synkade under snabba fasövergångar utan race conditions eller missade uppdateringar",
  ],
  solution:
    "Each edge function verifies the caller via an anon-key Supabase client, then mutates through a service-role client — basically a privilege escalation gate per request. The policy deck is rows in Postgres with pile/position columns, and RLS uses a SECURITY DEFINER helper to break the recursive lookup loop. Votes have a 'revealed' column gating SELECT visibility that the server flips atomically after tallying. Realtime is split into Presence for lobby identity and Broadcast for high-frequency stuff like cursors, with a 2-second polling interval as a safety net.",
  solutionSv:
    "Varje edge function verifierar anroparen via en anon-key Supabase-klient och muterar sedan genom en service-role-klient — i princip en behörighetseskaleringsgräns per request. Policykortleken är rader i Postgres med pile/position-kolumner, och RLS använder en SECURITY DEFINER-hjälpare för att bryta den rekursiva uppslagningsloopen. Röster har en 'revealed'-kolumn som styr SELECT-synlighet och som servern slår atomärt efter räkning. Realtime delas upp i Presence för lobbyidentitet och Broadcast för högfrekvent data som markörer, med 2-sekunders pollingintervall som säkerhetsnät.",
  outcome:
    "A fully playable social deduction game for 5–10 players in real time, with server-enforced rules, cinematic animations, a progressive decay effect that makes the board feel increasingly ominous, and dual deployment as a web app and Discord Activity. The database spans 10 tables with row-level security, and the game loop covers the full Secret Hitler ruleset — including the less common mechanics like veto power, chaos enactment, and special election pointer restoration.",
  outcomeSv:
    "Ett fullt spelbart socialdeduktionsspel för 5–10 spelare i realtid, med serverupprätthållna regler, filmiska animationer, en progressiv förfallseffekt som gör brädet alltmer olycksbådande, och dubbel deployment som webbapp och Discord Activity. Databasen omfattar 10 tabeller med row-level security, och spelloopen täcker hela Secret Hitlers regelverk — inklusive de ovanligare mekanikerna som vetorätt, kaosenactment och specialvalpekarens återställning.",
};
