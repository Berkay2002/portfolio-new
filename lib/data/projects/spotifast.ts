import type { Project } from "@/types";

export const spotifast: Project = {
  id: "spotifast",
  title: "Spotifast: A Native Spotify Client, Forked",
  description:
    "My fork of crmne's Spotifast, a native Rust Spotify app built on librespot. It adds an AI DJ driven by your own Claude Code, transitions between songs, prefetching of upcoming tracks, new visualizers, a customizable Library sidebar and its own Windows update channel.",
  descriptionSv:
    "Min fork av crmnes Spotifast, en inbyggd Rust-app för Spotify byggd på librespot. Den lägger till en AI-DJ som drivs av din egen Claude Code, övergångar mellan låtar, förhämtning av kommande låtar, nya visualiserare, ett anpassningsbart bibliotek i sidofältet och en egen uppdateringskanal för Windows.",
  technologies: [
    "Rust",
    "egui",
    "eframe",
    "fastframe",
    "librespot",
    "Spotify Connect",
    "Claude Code",
    "MCP",
    "GitHub Actions",
    "Windows Installer (MSI)",
    "Ed25519 signed updates",
    "Nix",
  ],
  projectInfo: [
    {
      label: "Type",
      labelSv: "Typ",
      value: "Native desktop app (fork)",
      valueSv: "Inbyggd skrivbordsapp (fork)",
    },
    {
      label: "Upstream",
      labelSv: "Upstream",
      value: "crmne/spotifast, built on librespot",
      valueSv: "crmne/spotifast, byggd på librespot",
    },
    {
      label: "My builds",
      labelSv: "Mina byggen",
      value: "Windows x64, versions 1.0.0 to 1.0.2",
      valueSv: "Windows x64, versionerna 1.0.0 till 1.0.2",
    },
    {
      label: "Playback",
      labelSv: "Uppspelning",
      value: "Needs Spotify Premium",
      valueSv: "Kräver Spotify Premium",
    },
    {
      label: "License",
      labelSv: "Licens",
      value: "MIT",
    },
  ],
  projectLinks: [
    {
      label: "Upstream: crmne/spotifast",
      labelSv: "Upstream: crmne/spotifast",
      href: "https://github.com/crmne/spotifast",
    },
    {
      label: "librespot",
      labelSv: "librespot",
      href: "https://github.com/librespot-org/librespot",
    },
  ],
  link: "https://github.com/Berkay2002/spotifast/releases",
  linkLabel: "Windows releases",
  linkLabelSv: "Windows-versioner",
  githubLink: "https://github.com/Berkay2002/spotifast",
  image: "/images/projects/spotifast/dj-chat.webp",
  imageAlt:
    "Spotifast AI DJ page in the app's demo mode, with the queue as a crate of records above a chat where the DJ has queued eight songs",
  imageAltSv: "Spotifasts AI-DJ-sida i appens demoläge, med kön som en låda med skivor ovanför en chatt där DJ:n har köat åtta låtar",
  detailedDescription:
    "Spotifast is crmne's native Spotify client: Rust, egui and the fastframe framework, playing through librespot, with no browser engine and a start in well under a second. All of that is their work, and this page is about my fork of it, not the original. The fork started as a small set of branches on top of crmne's releases and grew into an app of its own, 1.0.0, which still merges crmne's releases in and credits them in its release notes. On top of that base it adds an AI DJ that picks and plays music through your own Claude Code, transitions between songs, a prefetcher for upcoming tracks, two more player bar visualizers, a Library sidebar you can shape, and an updater that follows my releases instead of upstream's. Playback needs Spotify Premium, and builds are for Windows x64.",
  detailedDescriptionSv:
    "Spotifast är crmnes inbyggda Spotify-klient: Rust, egui och ramverket fastframe, som spelar via librespot, utan webbläsarmotor och med en start på långt under en sekund. Allt det är deras arbete, och den här sidan handlar om min fork av det, inte om originalet. Forken började som en handfull grenar ovanpå crmnes versioner och blev en egen app, 1.0.0, som fortfarande slår ihop crmnes versioner och tackar dem i releaseanteckningarna. Ovanpå den basen finns en AI-DJ som väljer och spelar musik via din egen Claude Code, övergångar mellan låtar, en förhämtare för kommande låtar, två visualiserare till i spelarfältet, ett bibliotek i sidofältet som du kan forma och en uppdaterare som följer mina versioner istället för upstreams. Uppspelning kräver Spotify Premium och byggena är för Windows x64.",
  features: [
    "AI DJ: a chat page that picks, queues and plays music by driving your own Claude Code, so Spotifast holds no Claude login or API key and refuses to start the DJ while an API key variable is set. It shows the queue as a crate of records with the playing disc, and lists what the DJ thought and which tools it used",
    "Asks before it changes your library: by default likes, new playlists, added or removed songs and renames wait for a yes or no on a card, and removals and renames ask even with that switched off. It adds songs only to playlists that are yours or collaborative, removes from and renames only your own, and has no tool for deleting a playlist or touching your account",
    "Transitions between songs: Off, Crossfade or Automix in Settings. Automix lines up downbeats and swaps the bass over eight bars, and Mix playlists can play the transitions saved in them",
    "Upcoming songs load ahead: the next tracks are fetched into the audio cache with a stall timeout and a shared bandwidth budget, so skipping and the next song start without waiting on the network. The artwork disk cache is capped at 512 MiB",
    "Mirror and LED visualizers in the player bar, next to the existing Spectrum and Waveform ones",
    "Library sidebar you can shape: choose which sections it shows (Playlists, Albums, Artists, Podcasts) and whether crmne's sort menu and By You button appear; turning Podcasts off also stops loading shows. The sidebar also takes the colour of the page's cover art, and shelves scroll with arrows instead of a scroll bar",
    "Playlists keep listing when Spotify's Web API turns requests away, by reading the account's own playlist list instead",
    "Own update channel for Windows: the built-in updater follows my GitHub releases and checks them against a fork signing key, with each release built from a recorded commit",
    "Opt-in puffin profiler and a local build profile with full link-time optimisation, for finding slow frames",
  ],
  featuresSv: [
    "AI-DJ: en chattsida som väljer, köar och spelar musik genom att styra din egen Claude Code, så Spotifast har varken Claude-inloggning eller API-nyckel och vägrar starta DJ:n när en API-nyckelvariabel är satt. Kön visas som en låda med skivor där den spelande skivan snurrar, och sidan listar vad DJ:n tänkte och vilka verktyg den använde",
    "Frågar innan den ändrar i ditt bibliotek: som standard väntar gillamarkeringar, nya spellistor, tillagda eller borttagna låtar och namnbyten på ett ja eller nej på ett kort, och borttagningar och namnbyten frågar även när det är avstängt. Den lägger bara till låtar i spellistor som är dina eller gemensamma, tar bort ur och byter namn på bara dina egna, och har inget verktyg för att radera en spellista eller röra ditt konto",
    "Övergångar mellan låtar: Av, Crossfade eller Automix i inställningarna. Automix synkar taktslagen och byter bas över åtta takter, och Mix-spellistor kan spela de övergångar som sparats i dem",
    "Kommande låtar laddas i förväg: nästa spår hämtas till ljudcachen med stall-timeout och en delad bandbreddsbudget, så hopp framåt och nästa låt startar utan att vänta på nätet. Omslagscachen på disk är begränsad till 512 MiB",
    "Mirror- och LED-visualiserare i spelarfältet, bredvid de befintliga Spectrum och Waveform",
    "Bibliotek i sidofältet som du kan forma: välj vilka sektioner som visas (spellistor, album, artister, poddar) och om crmnes sorteringsmeny och By You-knapp ska synas; stänger du av poddar slutar appen också hämta dem. Sidofältet tar också färgen från sidans omslagsbild, och hyllorna bläddras med pilar istället för en rullningslist",
    "Spellistor listas fortfarande när Spotifys Web API avvisar förfrågningar, genom att läsa kontots egen lista över spellistor istället",
    "Egen uppdateringskanal för Windows: den inbyggda uppdateraren följer mina GitHub-versioner och kontrollerar dem mot en egen signeringsnyckel, där varje version byggs från en angiven commit",
    "Valbar profilering med puffin och en lokal byggprofil med full länktidsoptimering, för att hitta långsamma bildrutor",
  ],
  challenges: [
    "Making the AI DJ safe to hand a music library to: a language model that can queue, like and remove songs needs hard limits, and the text it reads (song titles, playlist names) can try to steer it",
    "Mixing two songs inside a player that was built to play one at a time gaplessly: transitions need Spotify's beat grid and recipe data, an overlap mixer, and clean handling of skips and an Off setting that must still play nothing extra",
    "Keeping a fork current without losing it: crmne ships often, so every merge has to bring in their fixes while my own features keep working and the updater only ever sees a higher version",
    "Hiding network delay: prefetching upcoming tracks must not hog the connection or the disk, or fight playback that is already running",
  ],
  challengesSv: [
    "Göra AI-DJ:n säker att lämna ett musikbibliotek till: en språkmodell som kan köa, gilla och ta bort låtar behöver hårda gränser, och texten den läser (låttitlar, spellistnamn) kan försöka styra den",
    "Blanda två låtar i en spelare som byggdes för att spela en i taget utan glapp: övergångar behöver Spotifys beat-rutnät och receptdata, en överlappsmixer och korrekt hantering av hopp och en Av-inställning som ändå inte får spela något extra",
    "Hålla en fork aktuell utan att tappa den: crmne släpper ofta, så varje sammanslagning måste ta in deras fixar medan mina egna funktioner fortsätter fungera och uppdateraren bara ser en högre version",
    "Dölja nätverksfördröjning: förhämtning av kommande låtar får inte lägga beslag på anslutningen eller disken, eller konkurrera med uppspelning som redan pågår",
  ],
  solution:
    "The DJ runs Claude Code with none of its own tools apart from an optional web search, so it can only act through a small server on 127.0.0.1 that Spotifast starts, protected by a one-time token. Every tool call is checked for types, counts and URI kinds before the app acts on it, and library changes wait on an approval card; removals and anything the DJ does in a turn of its own always ask. Results from Spotify are treated as data and the DJ is told to ignore instructions inside them. Transitions are split into decoding (beat grid, mixability and Mix recipes), automation curves with bounds on their size and values, and a mixer that runs two tracks through a three-band isolator and a resonant filter per side; the planner picks a stored recipe, a downbeat-aligned bass swap or a plain crossfade. Prefetch is gated by a stall-based timeout, a shared budget and a suspend after stalls. For the fork itself, the first approach was a fork-sync workflow that rebuilt a release from each crmne tag plus a list of feature branches. In 1.0.0 that became simpler: main is the app, a sync routine merges crmne's releases in, and a release workflow publishes every version pushed to main.",
  solutionSv:
    "DJ:n kör Claude Code utan egna verktyg förutom en valfri webbsökning, så den kan bara agera genom en liten server på 127.0.0.1 som Spotifast startar, skyddad av en engångstoken. Varje verktygsanrop kontrolleras för typer, antal och URI-slag innan appen agerar på det, och biblioteksändringar väntar på ett godkännandekort; borttagningar och allt DJ:n gör i en egen tur frågar alltid. Svar från Spotify behandlas som data och DJ:n instrueras att ignorera instruktioner i dem. Övergångarna är uppdelade i avkodning (beat-rutnät, mixbarhet och Mix-recept), automationskurvor med gränser för storlek och värden, och en mixer som kör två spår genom en trebandsisolator och ett resonant filter per sida; planeraren väljer ett sparat recept, ett basbyte lagt på taktens första slag eller en vanlig crossfade. Förhämtningen styrs av en stall-baserad timeout, en delad budget och paus efter stopp. För själva forken var första lösningen ett fork-sync-arbetsflöde som byggde om en release från varje crmne-tagg plus en lista med funktionsgrenar. I 1.0.0 blev det enklare: main är appen, en synkrutin slår ihop crmnes versioner och ett releaseflöde publicerar varje version som pushas till main.",
  outcome:
    "Releases on GitHub for Windows x64: three fork builds on top of crmne's 0.13.0 (0.13.0 to 0.13.2), then my own 1.0.0, 1.0.1 and 1.0.2. 1.0.0 brought in crmne's 0.13.3 together with transitions, the AI DJ, prefetching, the new visualizers and the Library changes; 1.0.1 translated the DJ, and 1.0.2 added what is playing to the now-playing snapshot. The core app, its Spotify Connect and Google Cast support, the signed updater and Windows Installer package, the Spectrum and Waveform visualizers, the By You filter, and the Winamp mini player and MilkDrop visualizers all come from crmne and the contributors to Spotifast, and the audio from librespot.",
  outcomeSv:
    "Versioner på GitHub för Windows x64: tre forkbyggen ovanpå crmnes 0.13.0 (0.13.0 till 0.13.2), sedan mina egna 1.0.0, 1.0.1 och 1.0.2. 1.0.0 tog in crmnes 0.13.3 tillsammans med övergångar, AI-DJ:n, förhämtning, de nya visualiserarna och biblioteksändringarna; 1.0.1 översatte DJ:n och 1.0.2 lade till vad som spelas i now-playing-ögonblicksbilden. Själva kärnappen, dess stöd för Spotify Connect och Google Cast, den signerade uppdateraren och Windows Installer-paketet, visualiserarna Spectrum och Waveform, By You-filtret samt Winamp-miniläget och MilkDrop-visualiserarna kommer från crmne och Spotifasts bidragsgivare, och ljudet från librespot.",
  gallery: [
    {
      image: "/images/projects/spotifast/dj-chat.webp",
      alt: "Spotifast AI DJ page with the queue as a crate of records and a finished chat turn",
      caption:
        "The AI DJ page in demo mode: the queue as a crate of records, and the songs the DJ queued with its answer",
      captionSv:
        "AI-DJ-sidan i demoläge: kön som en låda med skivor, och låtarna DJ:n köade tillsammans med dess svar",
    },
    {
      image: "/images/projects/spotifast/dj-approval.webp",
      alt: "Spotifast AI DJ asking to approve creating a private playlist",
      caption:
        "A library change waits for Create or Cancel before the DJ does it",
      captionSv:
        "En biblioteksändring väntar på Skapa eller Avbryt innan DJ:n utför den",
    },
    {
      image: "/images/projects/spotifast/home.webp",
      alt: "Spotifast Home with the Library sidebar, its DJ entry and the player bar",
      caption:
        "Home in demo mode: the DJ entry in the sidebar, the Library sidebar with its section tabs, sort and By You filter, and the player bar. Sample data, not a real account",
      captionSv:
        "Home i demoläge: DJ-raden i sidofältet, bibliotekssidofältet med sina sektionsflikar, sortering och By You-filter samt spelarfältet. Exempeldata, inte ett riktigt konto",
    },
  ],
};
