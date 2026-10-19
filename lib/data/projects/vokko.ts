import type { Project } from "@/types";

export const vokko: Project = {
  id: "vokko",
  title: "Vokko: Open Source Community Chat",
  description:
    "Open source, self-hostable community chat app aiming for Discord parity, with no paid tiers. A Rust server and a React client that runs in the browser or in a Tauri desktop shell, with voice, video and built-in games.",
  descriptionSv:
    "En chattapp för communities med öppen källkod som du kan driva själv och som siktar på Discord-paritet, utan betalnivåer. En Rust-server och en React-klient som körs i webbläsaren eller i ett Tauri-skrivbordsskal, med röst, video och inbyggda spel.",
  technologies: [
    "Rust",
    "Axum",
    "Tokio",
    "PostgreSQL",
    "SQLx",
    "React 19",
    "TypeScript",
    "Vite",
    "Tauri 2",
    "WebSockets",
    "LiveKit",
    "Playwright",
    "Vitest",
    "Docker Compose",
    "Caddy",
  ],
  projectInfo: [
    {
      label: "Type",
      labelSv: "Typ",
      value: "Self-hostable chat server + web and desktop client",
      valueSv: "Självhostad chattserver + webb- och skrivbordsklient",
    },
    {
      label: "Status",
      labelSv: "Status",
      value: "Pre-1.0, under active development",
      valueSv: "Före 1.0, under aktiv utveckling",
    },
    {
      label: "Server",
      labelSv: "Server",
      value: "One Rust binary + PostgreSQL",
      valueSv: "En Rust-binär + PostgreSQL",
    },
    {
      label: "Clients",
      labelSv: "Klienter",
      value: "Browser and Tauri desktop",
      valueSv: "Webbläsare och Tauri-skrivbord",
    },
    {
      label: "License",
      labelSv: "Licens",
      value: "AGPL-3.0-or-later (protocol types and bot examples Apache-2.0)",
      valueSv:
        "AGPL-3.0-or-later (protokolltyper och bottexempel Apache-2.0)",
    },
  ],
  githubLink: "https://github.com/Berkay2002/vokko",
  image: "/images/projects/vokko/chat.webp",
  imageAlt:
    "Vokko web client showing a server with channels, a channel conversation with a Rust code block and the member list",
  imageAltSv: "Vokkos webbklient: en server med kanaler, en konversation med ett kodblock i Rust och medlemslistan",
  detailedDescription:
    "Vokko is an open source community chat app with feature and layout parity with Discord as the target, and no paid tiers: every perk Discord sells is a normal feature here, and only the paid machinery (billing, shop, boosts, quests, badges) is out of scope. The backend is a self-hostable Rust server built on Axum, Tokio and PostgreSQL that serves a REST API and a WebSocket gateway. The client is React 19 and TypeScript, and it runs either in the browser or inside a Tauri 2 desktop shell. Servers, channels, threads, DMs and group DMs, roles and permissions, invites, replies, reactions, polls, stickers, custom emoji, attachments, link previews, friends and presence all exist, together with voice and video through LiveKit, bots with slash commands, a soundboard, moderation tools and an audit log. Calls can also host Activities, web games that run on the call grid: Sketch (draw and guess), chess, four in a row, Codewords, Werewolf and more, plus Spotify and Stremio activities driven by bots. The project is pre-1.0 and says so: a parity inventory tracks every row of the target feature list, with how it looks and how it works judged separately and honestly.",
  detailedDescriptionSv:
    "Vokko är en chattapp för communities med öppen källkod som siktar på samma funktioner och layout som Discord, utan betalnivåer: varje förmån som Discord säljer är en vanlig funktion här, och bara själva betalmaskineriet (fakturering, butik, boosts, quests, märken) ligger utanför. Backenden är en Rust-server byggd på Axum, Tokio och PostgreSQL, som du kan driva själv och som har ett REST-API och en WebSocket-gateway. Klienten är React 19 och TypeScript och körs antingen i webbläsaren eller i ett Tauri 2-skrivbordsskal. Servrar, kanaler, trådar, DM och grupp-DM, roller och behörigheter, inbjudningar, svar, reaktioner, omröstningar, klistermärken, egna emojis, bilagor, länkförhandsvisningar, vänner och närvaro finns, tillsammans med röst och video via LiveKit, botar med slash-kommandon, en soundboard, modereringsverktyg och en granskningslogg. Samtal kan dessutom vara värd för Activities, webbspel som körs i samtalsrutnätet: Sketch (rita och gissa), schack, fyra i rad, Codewords, Werewolf och fler, plus Spotify- och Stremio-aktiviteter som drivs av botar. Projektet är före 1.0 och säger det öppet: en paritetsinventering följer varje rad i målfunktionslistan, där utseende och beteende bedöms var för sig och ärligt.",
  features: [
    "Servers, channels, threads, DMs and group DMs, roles and permissions, invites, replies, reactions, polls, stickers, custom emoji, attachments and link previews, friends and presence",
    "Voice and video calls through LiveKit, with a call grid, screen sharing and a soundboard",
    "Activities: sandboxed web games that run on the call grid, including Sketch, chess, four in a row, Codewords, Werewolf, trivia and Who's the Spy, plus a documented games SDK so anyone can add their own",
    "Bots and slash commands over the public API, with a small echo-bot example, plus Spotify and Stremio bots and an AI bridge",
    "Moderation tools and an audit log, with permissions checked by the server rather than the client",
    "One client for browser and desktop: the same React app runs on the web and inside a Tauri 2 shell, and on phones it becomes a list page, a chat page and a details page with bottom sheets",
    "Self-hosting with Docker Compose, optional Caddy for HTTPS and LiveKit for media, plus backup and restore scripts and a free-tier hosting guide",
    "A wire contract documented in docs/api.md, with Rust types in a shared protocol crate and their TypeScript twins in the client",
  ],
  featuresSv: [
    "Servrar, kanaler, trådar, DM och grupp-DM, roller och behörigheter, inbjudningar, svar, reaktioner, omröstningar, klistermärken, egna emojis, bilagor och länkförhandsvisningar, vänner och närvaro",
    "Röst- och videosamtal via LiveKit, med samtalsrutnät, skärmdelning och en soundboard",
    "Activities: webbspel i sandlåda som körs i samtalsrutnätet, bland annat Sketch, schack, fyra i rad, Codewords, Werewolf, frågesport och Who's the Spy, plus ett dokumenterat spel-SDK så att vem som helst kan lägga till egna",
    "Botar och slash-kommandon över det publika API:et, med ett litet echo-bot-exempel, plus Spotify- och Stremio-botar och en AI-brygga",
    "Modereringsverktyg och en granskningslogg, där behörigheterna kontrolleras av servern och inte av klienten",
    "En klient för webb och skrivbord: samma React-app körs på webben och i ett Tauri 2-skal, och på mobilen blir den en listsida, en chattsida och en detaljsida med bottenpaneler",
    "Självhosting med Docker Compose, valfri Caddy för HTTPS och LiveKit för media, plus backup- och återställningsskript och en guide för gratis hosting",
    "Ett dokumenterat kommunikationskontrakt i docs/api.md, med Rust-typer i en delad protokollcrate och deras TypeScript-tvillingar i klienten",
  ],
  challenges: [
    "Matching a product as large as Discord means hundreds of small behaviours, and a screen that looks right is not the same as a feature that works, so progress is easy to overstate",
    "The same client has to run in the browser, in a Tauri desktop shell and on a phone-sized screen, and has to be developed and tested without a running backend",
    "Third-party web games run inside a call, so they need to be isolated from the app while still sharing state with everyone in the call",
    "A self-hostable server has to stay small and easy to run: one binary and a database, not a fleet of services",
  ],
  challengesSv: [
    "Att matcha en produkt lika stor som Discord innebär hundratals små beteenden, och en skärm som ser rätt ut är inte samma sak som en funktion som fungerar, så det är lätt att överdriva framstegen",
    "Samma klient måste köras i webbläsaren, i ett Tauri-skrivbordsskal och på en mobilstor skärm, och måste kunna utvecklas och testas utan en körande backend",
    "Webbspel från tredje part körs inuti ett samtal, så de måste vara isolerade från appen och ändå dela tillstånd med alla i samtalet",
    "En server som folk ska driva själva måste vara liten och enkel att köra: en binär och en databas, inte en hel flotta tjänster",
  ],
  solution:
    "The parity roadmap tracks every row of the target inventory, and the two questions, whether it looks the same and whether it works the same, get separate columns, with notes that name the evidence or what is missing. The client ships a built-in in-memory backend: without an API address it runs against a mock, which is what the Playwright end-to-end suite uses, while a real-server mode runs a separate spec set against vokko-server. The wire contract is written down in docs/api.md with Rust types in a protocol crate and TypeScript twins in the client, and `cargo xtask layers` enforces the dependency layers between crates. Games are loaded in sandboxed iframes and talk to the host over a versioned protocol on a MessagePort, so a game can sync its state through the app without any access to it. The server is a single Rust binary plus PostgreSQL, and migrations run on every start, so there is no separate setup step.",
  solutionSv:
    "Paritetsfärdplanen följer varje rad i målinventeringen, och de två frågorna, ser det likadant ut och fungerar det likadant, får egna kolumner, med anteckningar som anger underlaget eller vad som saknas. Klienten har en inbyggd backend i minnet: utan API-adress körs den mot en mock, vilket är vad Playwright-sviten med end-to-end-tester använder, medan ett riktigt serverläge kör en separat uppsättning tester mot vokko-server. Kommunikationskontraktet är nedskrivet i docs/api.md med Rust-typer i en protokollcrate och TypeScript-tvillingar i klienten, och `cargo xtask layers` upprätthåller beroendelagren mellan crates. Spel laddas i iframes i sandlåda och pratar med värden över ett versionerat protokoll på en MessagePort, så ett spel kan synka sitt tillstånd via appen utan att få åtkomst till den. Servern är en enda Rust-binär plus PostgreSQL, och migreringar körs vid varje start, så det finns inget separat installationssteg.",
  outcome:
    "A working open source chat platform you can run yourself: a Rust server, a web and desktop client, voice and video, bots and a games SDK, released under AGPL-3.0. It is pre-1.0 and expects rough edges, and the repository says so plainly, with the roadmap as the honest record of what is done and what is partial.",
  outcomeSv:
    "En fungerande chattplattform med öppen källkod som du kan köra själv: en Rust-server, en webb- och skrivbordsklient, röst och video, botar och ett spel-SDK, släppt under AGPL-3.0. Den är före 1.0 och har skavanker, och repot säger det rakt ut, med färdplanen som ärlig redovisning av vad som är klart och vad som är delvis klart.",
  gallery: [
    {
      image: "/images/projects/vokko/chat.webp",
      alt: "Vokko web client with the server rail, channel list, a dev-talk channel with a Rust code block and the member list",
      caption:
        "A server in the web client: channel list, threads, a code block in the conversation and the member list",
      captionSv:
        "En server i webbklienten: kanallista, trådar, ett kodblock i konversationen och medlemslistan",
    },
    {
      image: "/images/projects/vokko/activities.webp",
      alt: "Vokko Activities picker in a voice call listing Watch Together, Stremio, Spotify and Sketch",
      caption:
        "The Activities picker in a voice call, listing shared activities and games",
      captionSv:
        "Activities-väljaren i ett röstsamtal med delade aktiviteter och spel",
    },
    {
      image: "/images/projects/vokko/sketch.webp",
      alt: "Sketch, a draw-and-guess game, running on the Vokko call grid with a drawing of a mountain",
      caption:
        "Sketch running on the call grid: draw the word, everyone else guesses",
      captionSv:
        "Sketch i samtalsrutnätet: rita ordet, alla andra gissar",
    },
    {
      image: "/images/projects/vokko/phone.webp",
      alt: "Vokko on a phone: a dev-talk channel with a code block",
      caption: "The same client at phone width, with its own chat page",
      captionSv: "Samma klient i mobilbredd, med en egen chattsida",
    },
  ],
};
