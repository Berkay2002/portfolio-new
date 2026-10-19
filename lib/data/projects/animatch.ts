import type { Project } from "@/types";

export const animatch: Project = {
  id: "animatch",
  title: "AniMatch: Anime Recommendation",
  description:
    "Anime recommender that runs multi-field cosine similarity both server-side (pgvector on Neon Postgres) and client-side (Web Worker), with a Jikan sync pipeline and GitHub Actions keeping embeddings fresh.",
  descriptionSv:
    "Anime-rekommendationssystem som kör flerfälts cosinuslikhet både på servern (pgvector på Neon Postgres) och i klienten (Web Worker), med en Jikan-synkpipeline och GitHub Actions som håller inbäddningar uppdaterade.",
  technologies: [
    "TypeScript",
    "Python",
    "Next.js",
    "React 19",
    "Tailwind CSS",
    "Radix UI",
    "Framer Motion",
    "Neon Postgres",
    "pgvector",
    "Google text-embedding-004",
    "Web Workers",
    "React Query",
    "IndexedDB",
    "Jikan API",
    "Clerk Auth",
    "GitHub Actions",
  ],
  detailedDescription:
    "A Next.js App Router web app for discovering and getting anime recommendations. Users can browse a paginated, filterable catalog, search with debounced full-text queries, and select multiple titles to generate recommendations. The recommendation engine works two ways: a pgvector cosine-distance query on the server, and a Web Worker that computes weighted similarity across five embedding dimensions (synopsis, genres, themes, demographic, rating) entirely in the browser. Embeddings are generated via Google's text-embedding-004 and stored as 768-d vectors in Neon Postgres. A Jikan API sync pipeline backed by GitHub Actions keeps the dataset current — daily runs drain an embedding queue, quarterly runs pull new seasonal titles.",
  detailedDescriptionSv:
    "En Next.js App Router-webbapp för att upptäcka och få animerekommendationer. Användare kan bläddra i en paginerad, filtrerbar katalog, söka med fritextsökning (med debounce) och välja flera titlar för att generera rekommendationer. Rekommendationsmotorn fungerar på två sätt: en pgvector cosinusavståndsförfrågan på servern och en Web Worker som beräknar viktad likhet över fem inbäddningsdimensioner (synopsis, genrer, teman, demografi, betyg) helt i webbläsaren. Inbäddningar genereras via Googles text-embedding-004 och lagras som 768-d vektorer i Neon Postgres. En Jikan API-synkpipeline med GitHub Actions håller datasetet aktuellt — dagliga körningar tömmer en inbäddningskö, kvartalsvisa körningar hämtar nya säsongstitlar.",
  features: [
    "Multi-select recommendations: Pick several anime and get a blended similarity score — the weights across synopsis, genres, themes, demographic, and rating are tunable without rerunning any inference",
    "Dual recommendation path: pgvector runs cosine distance on the server for per-anime pages, while a Web Worker handles the multi-select case entirely client-side to avoid per-query server cost",
    "Three-tier caching: Postgres is the source of truth, React Query handles in-memory deduplication with stale-while-revalidate, and IndexedDB stores the full embedding dataset in-browser with a 24-hour TTL",
    "Browse and search: Paginated anime grid with multi-select genre filters, sort options, and a Ctrl+K search bar that hits Postgres first and falls back to Jikan for missing titles",
    "Automated data pipeline: GitHub Actions runs daily to generate embeddings for queued anime (Google text-embedding-004) and quarterly to sync new seasonal titles from the Jikan API",
    "Anime detail pages: Individual pages with metadata, server-side recommendations, user reviews from MAL, and character/staff info pulled from Jikan",
  ],
  featuresSv: [
    "Multi-select-rekommendationer: Välj flera anime och få en sammanvägd likhetspoäng — vikterna för synopsis, genrer, teman, demografi och betyg kan justeras utan att köra om inferens",
    "Dubbel rekommendationsväg: pgvector kör cosinusavstånd på servern för enskilda anime-sidor, medan en Web Worker hanterar multi-select helt på klientsidan för att slippa serverkostnad per fråga",
    "Cache i tre lager: Postgres är sanningskällan, React Query hanterar in-memory-deduplicering med stale-while-revalidate, och IndexedDB lagrar hela inbäddningsdatasetet i webbläsaren med 24-timmars TTL",
    "Bläddra och sök: Paginerat anime-rutnät med genrefilter där flera genrer kan väljas, sortering och ett Ctrl+K-sökfält som slår mot Postgres först och faller tillbaka på Jikan för saknade titlar",
    "Automatiserad datapipeline: GitHub Actions kör dagligen för att generera inbäddningar (Google text-embedding-004) och kvartalsvis för att synka nya säsongstitlar från Jikan API",
    "Anime-detaljsidor: Individuella sidor med metadata, serverbaserade rekommendationer, användarrecensioner från MAL samt rollfigurer och produktionsteam från Jikan",
  ],
  challenges: [
    "Loading the whole catalog's 768-dimensional vectors into the browser for client-side similarity is a big payload. The Web Worker keeps the UI responsive, but memory is the real ceiling — IndexedDB caching with a 24-hour TTL was the compromise between freshness and not re-downloading everything on each visit",
    "Vercel's free-tier 10-second function timeout limits the embedding API route to 2 anime per invocation. So the queue tables and priority levels are drained by a Python script on a daily GitHub Actions cron instead, in batches of 50, because you can't batch-process hundreds of anime in one serverless call",
    "Jikan rate-limits at about 3 requests/second, so the sync script pauses between pages and backs off for a minute on a 429. Bulk imports still take a while — the queue decouples ingestion from embedding so at least the data is immediately searchable",
    "The project started on MongoDB with BERT embeddings and migrated to Neon Postgres with pgvector and Google embeddings. That migration involved deduplication across data sources, normalized title matching, and handling edge cases like doubled genre strings from the original scraper",
  ],
  challengesSv: [
    "Att ladda hela katalogens 768-dimensionella vektorer i webbläsaren för likhetsberäkning på klienten är tung last. Web Workern håller gränssnittet responsivt, men minnet är den verkliga begränsningen — IndexedDB-caching med 24-timmars TTL blev kompromissen mellan färskhet och att inte ladda ner allt vid varje besök",
    "Vercels gratisnivå har en 10-sekunders timeout som begränsar inbäddnings-API-rutten till 2 anime per anrop. Därför töms kötabellerna och prioritetsnivåerna i stället av ett Python-skript på en daglig GitHub Actions-cron, i omgångar om 50, eftersom man inte kan batchprocessa hundratals anime i ett serverless-anrop",
    "Jikan tillåter ungefär 3 förfrågningar i sekunden, så synkskriptet pausar mellan sidorna och väntar en minut vid 429. Större importer tar ändå tid — kön frikopplar inmatning från inbäddning så att data åtminstone är sökbar direkt",
    "Projektet började med MongoDB och BERT-inbäddningar och migrerades till Neon Postgres med pgvector och Google-inbäddningar. Migreringen innebar deduplicering mellan datakällor, normaliserad titelmatchning och hantering av kantfall som duplicerade genre-strängar från den ursprungliga skraparen",
  ],
  solution:
    "Next.js handles the frontend, API routes, and worker host. Neon Postgres with pgvector stores both structured anime data and five-field embedding vectors per title. The recommendation engine runs in two modes: server-side pgvector queries for individual anime pages, and a client-side Web Worker for multi-select where the user picks several titles and similarity is computed in-browser from IndexedDB-cached vectors. A priority queue in Postgres decouples data ingestion from embedding generation — search results that arrive without embeddings get enqueued and processed asynchronously by a daily GitHub Actions workflow (a Python script) calling Google's text-embedding-004. Quarterly sync runs pull new titles from the Jikan API.",
  solutionSv:
    "Next.js hanterar frontend, API-rutter och worker. Neon Postgres med pgvector lagrar både strukturerad animedata och fem-fälts inbäddningsvektorer per titel. Rekommendationsmotorn kör i två lägen: pgvector-förfrågningar på servern för enskilda anime-sidor och en klientsidig Web Worker för multi-select där användaren väljer flera titlar och likhet beräknas i webbläsaren från IndexedDB-cachade vektorer. En prioritetskö i Postgres frikopplar datainmatning från inbäddningsgenerering — sökresultat utan inbäddningar köas och bearbetas asynkront av ett dagligt GitHub Actions-arbetsflöde (ett Python-skript) som anropar Googles text-embedding-004. Kvartalsvis synkronisering hämtar nya titlar från Jikan API.",
  outcome:
    "Ships a responsive recommendation app where similarity math runs either on the server or entirely in the browser depending on the use case, with no per-query cost for the multi-select flow. The automated pipeline keeps the dataset growing — new anime get indexed on search, embedded overnight, and available for recommendations by the next visit. Started as a university project with MongoDB and local BERT, then evolved into a production stack on Vercel + Neon with automated syncing.",
  outcomeSv:
    "Levererar en responsiv rekommendationsapp där likhetsberäkning körs antingen på servern eller helt i webbläsaren beroende på användningsfallet, utan serverkostnad per fråga för multi-select-flödet. Den automatiserade pipelinen håller datasetet växande — nya anime indexeras vid sökning, inbäddas över natten och är tillgängliga för rekommendationer vid nästa besök. Började som ett universitetsprojekt med MongoDB och lokal BERT, och utvecklades sedan till en produktionsstack på Vercel + Neon med automatiserad synkronisering.",
  githubLink: "https://github.com/Berkay2002/anime-recommendation",
  paperLink: "/papers/animatch-paper.pdf",
};
