import type { Project } from "@/types";

export const statsforspotify: Project = {
  id: "statsforspotify",
  title: "Stats for Spotify: Music Analytics Platform",
  description:
    "Full-stack web app that tracks your Spotify listening history, visualizes how your taste evolves over time, and lets you compare stats with friends. Includes in-browser playback, recap insights, and a PWA for mobile.",
  descriptionSv:
    "Full-stack webbapp som spårar din Spotify-lyssningshistorik, visualiserar hur din smak förändras över tid och låter dig jämföra statistik med vänner. Inkluderar uppspelning i webbläsaren, recap-insikter och en PWA för mobilen.",
  technologies: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Spotify API",
    "Spotify Web Playback SDK",
    "Tailwind CSS 4",
    "shadcn/ui",
    "Recharts",
    "Framer Motion",
    "TanStack React Query",
    "Vercel Analytics",
    "Row Level Security (RLS)",
    "OAuth 2.0",
    "Edge Functions",
    "PWA",
    "Bun",
  ],
  link: "https://github.com/Berkay2002/statsforspotify",
  githubLink: "https://github.com/Berkay2002/statsforspotify",
  image: "/images/projects/statsforspotify-overview.png",
  imageAlt:
    "Stats for Spotify dashboard showing top artists, tracks, albums, and fun recaps",
  detailedDescription:
    "Music analytics platform built with Next.js 16 and Supabase that goes well beyond what Spotify Wrapped gives you. Tracks your top 50 artists, tracks, and albums across three time ranges with daily snapshots, then runs that data through Postgres RPCs to surface things like which album is dominating your listening, who your most consistent artists are, and where the biggest rank shakeups happened. A floating Spotify player lets you listen without leaving the app — it uses the Web Playback SDK on desktop and falls back to polling on mobile where the SDK is unreliable. The friend system is request-based with Discord-style usernames, privacy tiers, and the ability to browse each other's stats. Installable as a PWA on both Android and iOS.",
  detailedDescriptionSv:
    "Musikanalysplattform byggd med Next.js 16 och Supabase som går långt bortom vad Spotify Wrapped ger dig. Spårar dina topp 50 artister, låtar och album över tre tidsintervall med dagliga ögonblicksbilder, och kör sedan datan genom Postgres RPC:er för att hitta saker som vilket album som dominerar ditt lyssnande, vilka dina mest konsekventa artister är och var de största rangskakningarna skedde. En flytande Spotify-spelare låter dig lyssna utan att lämna appen — den använder Web Playback SDK på desktop och faller tillbaka till polling på mobilen där SDK:t är opålitligt. Vänsystemet är förfrågningsbaserat med Discord-stil användarnamn, sekretessnivåer och möjligheten att bläddra i varandras statistik. Installerbar som PWA på både Android och iOS.",
  features: [
    "Top 50 tracking for artists, tracks, and albums across 4-week, 6-month, and all-time ranges with automated daily snapshots",
    "Four recap cards — 3 Versions of You, Album Takeover, Hall of Fame, and Plot Twists — all computed server-side in Postgres RPCs so the frontend just renders the results",
    "Floating Spotify player using the Web Playback SDK on desktop, with adaptive polling fallback on mobile and a retry loop for device registration timing issues",
    "Historical trend charts with Recharts sparklines, line graphs, and color-coded rank badges (↑5, ↓3, NEW, —) that degrade gracefully when snapshot history is thin",
    "Request-based friend system with Discord-style usernames, auto-accept for mutual requests, useOptimistic for instant UI feedback, and three-tier privacy controls enforced by RLS",
    "Genre analytics page that derives genre rankings from your top artists, pre-fetched across all time ranges for instant tab switching",
    "Artist, track, and album detail pages with hero images, listening stats from Supabase, ranking history charts, follow/unfollow, and in-app playback",
    "PWA installable on Android (via beforeinstallprompt) and iOS (manual instructions), with platform-aware playback preference between in-app SDK and native Spotify deep links",
    "Data management with JSON/CSV export, profile customization, full data deletion, and account deletion for Spotify API compliance",
  ],
  featuresSv: [
    "Topp 50-spårning för artister, låtar och album över 4-veckors, 6-månaders och all-tids-intervall med automatiska dagliga ögonblicksbilder",
    "Fyra recap-kort — 3 Versions of You, Album Takeover, Hall of Fame och Plot Twists — alla beräknade server-side i Postgres RPC:er så frontenden bara renderar resultaten",
    "Flytande Spotify-spelare med Web Playback SDK på desktop, adaptiv polling-fallback på mobilen och en retry-loop för problem med enhetsregistreringstiming",
    "Historiska trenddiagram med Recharts sparklines, linjediagram och färgkodade rangmärken (↑5, ↓3, NEW, —) som degraderar graciöst när ögonblickshistoriken är tunn",
    "Förfrågningsbaserat vänsystem med Discord-stil användarnamn, auto-accept för ömsesidiga förfrågningar, useOptimistic för omedelbar UI-feedback och tre-nivåers sekretesskontroller med RLS",
    "Genre-analyssida som härleder genrerankningar från dina toppartister, förhämtade över alla tidsintervall för omedelbar flikväxling",
    "Artist-, låt- och albumdetaljsidor med hero-bilder, lyssningsstatistik från Supabase, ranghistorikdiagram, följ/avfölj och uppspelning i appen",
    "PWA installerbar på Android (via beforeinstallprompt) och iOS (manuella instruktioner), med plattformsmedveten uppspelningspreferens mellan in-app SDK och Spotify-djuplänkar",
    "Datahantering med JSON/CSV-export, profilanpassning, fullständig dataradering och kontoradering för Spotify API-efterlevnad",
  ],
  challenges: [
    "The Spotify Web Playback SDK only works for Premium users and behaves differently across browsers — plus device registration is asynchronous and racy, so playback can fail if you try to play before Spotify acknowledges the new device",
    "Recaps analytics involve substantial SQL: gaps-and-islands for streak detection, window functions for day-over-day deltas, and distinguishing 'new entry' from 'rank changed' across hundreds of snapshots. The plot-twists function alone is ~390 lines of CTEs",
    "Bidirectional friendship queries need to check both directions of the relationship in every query, and two users sending requests simultaneously could create duplicate rows without the auto-accept logic",
    "Genres don't come from a Spotify endpoint — they're derived from artist metadata, which means counting and ranking them client-side from aggregated artist data across time ranges",
  ],
  challengesSv: [
    "Spotify Web Playback SDK fungerar bara för Premium-användare och beter sig olika i olika webbläsare — plus att enhetsregistrering är asynkron och känslig för timing, så uppspelning kan misslyckas om man försöker spela innan Spotify har registrerat enheten",
    "Recaps-analysen innebär tung SQL: gaps-and-islands för streak-detektion, fönsterfunktioner för dag-till-dag-deltan och att skilja 'ny post' från 'rang ändrad' över hundratals ögonblicksbilder. Enbart plot-twists-funktionen är ~390 rader CTEs",
    "Dubbelriktade vänskapsförfrågningar måste kontrollera båda riktningarna i varje fråga, och två användare som skickar förfrågningar samtidigt kunde skapa dubbletter utan auto-accept-logiken",
    "Genrer kommer inte från en Spotify-endpoint — de härleds från artistmetadata, vilket innebär räkning och rankning på klientsidan från aggregerad artistdata över tidsintervall",
  ],
  solution:
    "The player uses a dual-mode architecture: Web Playback SDK on desktop with real-time state events, and adaptive polling (2s playing, 5s paused, 10s idle) on mobile where the SDK is unreliable. A retry loop handles the device registration race by catching 404s and re-transferring playback. All recap computations run as Postgres RPCs with security-definer functions that enforce privacy at the database level — the React components receive pre-shaped JSONB and do zero data processing. The friend system stores relationships in its own table (not Spotify's follow API) with bidirectional .or() queries and an auto-accept path when both users have pending requests to each other. Genre rankings are computed server-side across all three time ranges in parallel via Promise.all, then passed to the client as a single payload for instant tab switching. Database types stay in sync through GitHub Actions running supabase gen types daily.",
  solutionSv:
    "Spelaren använder en dual-mode-arkitektur: Web Playback SDK på desktop med realtids-state-events och adaptiv polling (2s vid uppspelning, 5s pausad, 10s inaktiv) på mobilen där SDK:t är opålitligt. En retry-loop hanterar enhetsregistreringsracet genom att fånga 404:or och överföra uppspelning igen. Alla recap-beräkningar körs som Postgres RPC:er med security-definer-funktioner som verkställer sekretess på databasnivå — React-komponenterna tar emot förformad JSONB och gör noll databearbetning. Vänsystemet lagrar relationer i en egen tabell (inte Spotifys följar-API) med dubbelriktade .or()-frågor och en auto-accept-väg när båda användarna har väntande förfrågningar till varandra. Genrerankningar beräknas server-side över alla tre tidsintervall parallellt via Promise.all och skickas till klienten som en enda payload för omedelbar flikväxling. Databastyper hålls synkade genom GitHub Actions som kör supabase gen types dagligen.",
  outcome:
    "A deployed music analytics platform at statsforspotify-chi.vercel.app with in-browser Spotify playback, four recap insight cards backed by complex Postgres analytics, a request-based social system with privacy controls, genre breakdowns, and full artist/track/album detail pages with ranking history. Installable as a PWA on both mobile platforms. The whole thing runs on Supabase with RLS enforcing privacy at the database layer, auto-generated types keeping the frontend in sync, and Vercel Analytics tracking real usage.",
  outcomeSv:
    "En driftsatt musikanalysplattform på statsforspotify-chi.vercel.app med Spotify-uppspelning i webbläsaren, fyra recap-insiktskort backade av komplex Postgres-analys, ett förfrågningsbaserat socialt system med sekretesskontroller, genreuppdelningar och fullständiga artist/låt/album-detaljsidor med ranghistorik. Installerbar som PWA på båda mobilplattformarna. Hela lösningen körs på Supabase med RLS som verkställer sekretess på databasnivå, autogenererade typer som håller frontenden synkad och Vercel Analytics som spårar verklig användning.",
  gallery: [
    {
      image: "/images/projects/statsforspotify-overview.png",
      alt: "Stats for Spotify dashboard overview",
      caption:
        "Dashboard overview with top artists, tracks, albums, and fun recaps",
      captionSv:
        "Dashboard-översikt med toppartister, låtar, album och roliga recaps",
    },
    {
      image: "/images/projects/statsforspotify-top-artists.png",
      alt: "Stats for Spotify top artists grid",
      caption:
        "Top Artists grid view with artist cards and Open in Spotify buttons",
      captionSv:
        "Toppartister i rutnätsvy med artistkort och Öppna i Spotify-knappar",
    },
    {
      image: "/images/projects/statsforspotify-top-tracks.png",
      alt: "Stats for Spotify top tracks list",
      caption: "Top Tracks list with sparkline toggle and rank indicators",
      captionSv: "Topplåtar-lista med sparkline-toggle och rangindikatorer",
    },
    {
      image: "/images/projects/statsforspotify-artist-detail.png",
      alt: "Stats for Spotify artist detail page for Lana Del Rey",
      caption:
        "Artist detail page with hero image, follow button, and personal top tracks",
      captionSv:
        "Artistdetaljsida med hero-bild, följ-knapp och personliga topplåtar",
    },
    {
      image: "/images/projects/statsforspotify-track-detail.png",
      alt: "Stats for Spotify track detail page showing ranking history chart",
      caption:
        "Track detail page with ranking history chart, peak position, and days charted",
      captionSv:
        "Låtdetaljsida med ranghistorikdiagram, toppposition och dagar på listan",
    },
    {
      image: "/images/projects/statsforspotify-recaps.png",
      alt: "Stats for Spotify Fun Recaps showing 3 Versions of You",
      caption:
        "Fun Recaps page with 3 Versions of You comparing taste across time ranges",
      captionSv:
        "Fun Recaps-sida med 3 Versions of You som jämför smak över tidsintervall",
    },
    {
      image: "/images/projects/statsforspotify-friend-profile.png",
      alt: "Stats for Spotify friend profile page",
      caption:
        "Friend profile page showing their top artists with privacy-gated access",
      captionSv:
        "Väns profilsida som visar deras toppartister med sekretessstyrd åtkomst",
    },
  ],
};
