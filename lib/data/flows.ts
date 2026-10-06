// How each project works, drawn on its page's trace as a row of stations (design/specs/project-arch-r1.md
// a-across). A station's glyph says what kind of step it is: "in" what comes in, "wave" a model or a step
// that does the work, "ticks" a stream, schedule or queue, "graph" stored data, "fan" a split or what goes out.

export type Glyph = "in" | "wave" | "ticks" | "graph" | "fan";
export type Station = { glyph: Glyph; name: string; nameSv?: string; what: string; whatSv: string };

const s = (glyph: Glyph, name: string, what: string, whatSv: string, nameSv?: string): Station => ({ glyph, name, nameSv, what, whatSv });

export const flows: Record<string, Station[]> = {
  wikillm: [
    s("in", "raw sources", "notes, PDFs, links", "anteckningar, PDF:er, länkar", "råkällor"),
    s("wave", "ingest", "Claude Code or Codex", "Claude Code eller Codex"),
    s("graph", "compiled wiki", "one concept per page", "ett begrepp per sida", "kompilerad wiki"),
    s("fan", "query", "reads the wiki first", "läser wikin först", "fråga"),
  ],
  "fractured-crown": [
    s("in", "players", "5 to 10 in a lobby", "5 till 10 i en lobby", "spelare"),
    s("wave", "edge functions", "the server decides every move", "servern avgör varje drag"),
    s("graph", "Postgres", "deck, votes, row-level security", "kortlek, röster, radsäkerhet"),
    s("fan", "realtime", "presence and broadcast", "presence och broadcast"),
  ],
  "voxel-project": [
    s("in", "seed", "noise for terrain and caves", "brus för terräng och grottor"),
    s("fan", "worker threads", "mesh chunks in parallel", "meshar chunkar parallellt", "arbetstrådar"),
    s("ticks", "upload queue", "4 meshes per frame", "4 meshar per bildruta", "uppladdningskö"),
    s("wave", "render passes", "shadows, SSAO, water", "skuggor, SSAO, vatten", "renderingspass"),
  ],
  statsforspotify: [
    s("in", "Spotify", "what you listen to", "det du lyssnar på"),
    s("graph", "Postgres", "history and friends", "historik och vänner"),
    s("wave", "SQL recaps", "computed in the database", "räknas i databasen", "SQL-sammanfattningar"),
    s("fan", "the app", "stats, player, friends", "statistik, spelare, vänner", "appen"),
  ],
  "municipality-chatbot": [
    s("in", "municipal sites", "scraped pages and PDFs", "skrapade sidor och PDF:er", "kommunens sajter"),
    s("graph", "pgvector + Neo4j", "chunks and relations", "textbitar och relationer"),
    s("wave", "LangGraph agent", "GraphRAG retrieval", "GraphRAG-sökning", "LangGraph-agent"),
    s("ticks", "widget", "streams answers over SSE", "strömmar svar över SSE"),
  ],
  alertz: [
    s("ticks", "pg_cron", "runs on a schedule", "körs på schema"),
    s("wave", "edge function", "pulls prices, checks levels", "hämtar kurser, kollar nivåer"),
    s("graph", "Postgres", "claims each level once", "tar varje nivå en gång"),
    s("fan", "alerts", "email, retried on failure", "mejl, nytt försök vid fel", "larm"),
  ],
  fasttalk: [
    s("in", "you speak", "48 kHz audio", "48 kHz ljud", "du pratar"),
    s("wave", "Whisper", "speech to text", "tal till text"),
    s("ticks", "LLM", "streams tokens", "strömmar tokens"),
    s("wave", "Kokoro", "speaks back", "svarar med röst"),
  ],
  researcher: [
    s("in", "question", "you ask", "du frågar", "fråga"),
    s("wave", "clarify", "asks back if it's vague", "frågar tillbaka om den är oklar", "förtydliga"),
    s("fan", "supervisor", "workers search Tavily and Exa", "workers söker i Tavily och Exa"),
    s("wave", "report", "Gemini Pro writes it", "Gemini Pro skriver den", "rapport"),
  ],
  oversee: [
    s("in", "Excel files", "uploaded reports", "uppladdade rapporter", "Excel-filer"),
    s("wave", "assistant", "GLM with tool calling", "GLM med verktygsanrop", "assistent"),
    s("graph", "Supabase", "scoped per org and role", "per organisation och roll"),
    s("fan", "dashboards", "analytics in Swedish", "analys på svenska", "dashboards"),
  ],
  "primitive-ui": [
    s("in", "CustomPainter", "draws every pixel", "ritar varje pixel"),
    s("ticks", "RenderBox", "its own layout", "egen layout"),
    s("wave", "animation", "redraws every frame", "ritar om varje bildruta", "animation"),
    s("fan", "docs", "live demos in Nextra", "livedemos i Nextra", "dokumentation"),
  ],
  snapgredient: [
    s("in", "photo", "your ingredients", "dina ingredienser", "foto"),
    s("wave", "Gemini", "finds what's there", "hittar vad som finns"),
    s("fan", "recipes", "fit your profile", "anpassade efter din profil", "recept"),
    s("graph", "Firebase", "saved history", "sparad historik"),
  ],
  retrofy: [
    s("in", "image + prompt", "resized in the browser", "skalas om i webbläsaren", "bild + prompt"),
    s("wave", "Gemini", "edits the image", "redigerar bilden"),
    s("graph", "history", "every version kept", "varje version sparas", "historik"),
  ],
  albyradet: [
    s("in", "forms", "membership and contact", "medlemskap och kontakt", "formulär"),
    s("wave", "API", "rate-limits and sanitizes", "begränsar och tvättar"),
    s("graph", "MongoDB", "applications", "ansökningar"),
    s("fan", "email", "sent over SMTP", "skickas över SMTP", "mejl"),
  ],
  animatch: [
    s("in", "Jikan", "quarterly title sync", "kvartalsvis synk av titlar"),
    s("ticks", "queue", "daily embedding job", "dagligt embeddingjobb", "kö"),
    s("graph", "pgvector", "five embeddings per title", "fem embeddings per titel"),
    s("fan", "recommend", "on the server or in your browser", "på servern eller i webbläsaren", "rekommendera"),
  ],
  clairvoyant: [
    s("in", "prompt", "chat or research", "chatt eller research"),
    s("wave", "Gemini", "2.5 Pro or Flash", "2.5 Pro eller Flash"),
    s("fan", "tools", "Exa, scraper, MCP", "Exa, skrapa, MCP", "verktyg"),
    s("graph", "Qdrant + Neo4j", "sources and links", "källor och kopplingar"),
    s("ticks", "generative UI", "streams components", "strömmar komponenter", "generativt UI"),
  ],
  kliv: [
    s("in", "Google Calendar", "the board adds events", "styrelsen lägger in event"),
    s("ticks", "webhook", "flags new events", "flaggar nya event"),
    s("graph", "Redis", "pending queue", "väntande kö"),
    s("fan", "approve", "emails every subscriber", "mejlar alla prenumeranter", "godkänn"),
  ],
  litheplan: [
    s("graph", "courses", "339 courses, 15 programs", "339 kurser, 15 program", "kurser"),
    s("in", "your plan", "pick 90 credits", "välj 90 hp", "din plan"),
    s("wave", "checks", "overlaps and exclusions", "krockar och uteslutningar", "kontroller"),
    s("fan", "share", "a profile for your advisor", "en profil till studievägledaren", "dela"),
  ],
  medieteknik: [
    s("graph", "JSON content", "values and carousel", "värderingar och karusell", "JSON-innehåll"),
    s("wave", "Next.js", "App Router, Swedish first", "App Router, svenska först"),
    s("fan", "devices", "drag and type adapt", "drag och typsnitt anpassas", "enheter"),
  ],
  "solar-system": [
    s("in", "bodies", "planets and moons", "planeter och månar", "kroppar"),
    s("wave", "Euler", "NumPy integration loop", "integration i NumPy"),
    s("ticks", "keyframes", "every 100 steps", "var 100:e steg", "nyckelbilder"),
    s("fan", "Blender", "animated orbits", "animerade banor"),
  ],
};
