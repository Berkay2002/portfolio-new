import type { Project } from "@/types";

export const inkwell: Project = {
  id: "inkwell",
  title: "Inkwell: A Fast, Private PDF App for Windows",
  description:
    "Free, open-source PDF app for Windows that covers the tool areas of Acrobat Pro (editing, forms, signatures, redaction, OCR, compare, preflight and print production) with no account, no telemetry and no cloud. Built with Tauri, Rust and a patched MuPDF.",
  descriptionSv:
    "Gratis PDF-app med öppen källkod för Windows som täcker Acrobat Pros verktygsområden (redigering, formulär, signaturer, maskning, OCR, jämförelse, preflight och tryckproduktion) utan konto, telemetri eller moln. Byggd med Tauri, Rust och en patchad MuPDF.",
  technologies: [
    "Rust",
    "Tauri 2",
    "MuPDF",
    "React 19",
    "TypeScript",
    "Vite",
    "Zustand",
    "WebView2",
    "Vitest",
    "Windows OCR",
    "Codex CLI",
    "Claude Code CLI",
    "WiX / MSI",
    "pnpm",
  ],
  projectInfo: [
    {
      label: "Type",
      labelSv: "Typ",
      value: "Desktop app for Windows",
      valueSv: "Skrivbordsapp för Windows",
    },
    {
      label: "Engine",
      labelSv: "Motor",
      value: "Rust on a patched MuPDF",
      valueSv: "Rust på en patchad MuPDF",
    },
    {
      label: "Privacy",
      labelSv: "Integritet",
      value: "No account, no telemetry, runs locally",
      valueSv: "Inget konto, ingen telemetri, körs lokalt",
    },
    {
      label: "License",
      labelSv: "Licens",
      value: "AGPL-3.0-or-later",
    },
    {
      label: "Status",
      labelSv: "Status",
      value: "Early, no releases yet: build from source",
      valueSv: "Tidigt skede, inga releaser ännu: bygg från källkod",
    },
  ],
  githubLink: "https://github.com/Berkay2002/inkwell",
  image: "/images/projects/inkwell/viewer.webp",
  imageAlt:
    "Inkwell with a PDF open in a tab, showing the page viewer, the tabs and the toolbar",
  imageAltSv: "Inkwell med en PDF öppen i en flik: sidvisaren, flikarna och verktygsfältet",
  detailedDescription:
    "Inkwell is a PDF app for Windows built to be fast and to keep your documents on your machine. A Rust engine on a patched MuPDF cuts every page into 512 px tiles and streams them to a React and TypeScript interface running in a Tauri 2 shell (WebView2). On top of the viewer sits a long list of tool areas that follows Adobe Acrobat Pro: comments, forms with a sandboxed form-JavaScript runtime, text and image editing, page organizing and portfolios, fill-and-sign and digital signatures, passwords, redaction, compression, OCR, compare, version history, print production, preflight and PDF/A, accessibility checks and batch actions. The repo has a coverage page that lists each area against Acrobat Pro, including the gaps that are still open. There are no accounts and no telemetry. The only outside connection is an optional assistant that drives the Codex (ChatGPT) or Claude Code CLI you already have signed in, so it runs on your own subscription with no API key. It can search and summarise the open document and also act on it; in the default mode every edit waits on an Apply or Reject card. The project is early: Windows only, no releases, an unsigned MSI, and you build it from source.",
  detailedDescriptionSv:
    "Inkwell är en PDF-app för Windows som är byggd för att vara snabb och för att hålla dina dokument på din dator. En Rust-motor på en patchad MuPDF delar upp varje sida i 512 px-rutor och strömmar dem till ett React- och TypeScript-gränssnitt som körs i ett Tauri 2-skal (WebView2). Ovanpå visaren finns en lång rad verktygsområden som följer Adobe Acrobat Pro: kommentarer, formulär med en sandboxad körmiljö för formulär-JavaScript, text- och bildredigering, sidorganisering och portföljer, fyll-i-och-signera och digitala signaturer, lösenord, maskning, komprimering, OCR, jämförelse, versionshistorik, tryckproduktion, preflight och PDF/A, tillgänglighetskontroller och batchåtgärder. Repot har en täckningssida som ställer varje område mot Acrobat Pro, inklusive de luckor som ännu finns. Inga konton och ingen telemetri. Den enda yttre anslutningen är en valfri assistent som styr den Codex- (ChatGPT) eller Claude Code-CLI du redan är inloggad i, så den körs på din egen prenumeration utan API-nyckel. Den kan söka i och sammanfatta det öppna dokumentet och även agera på det, och i standardläget väntar varje ändring på ett Godkänn- eller Avvisa-kort. Projektet är i ett tidigt skede: bara Windows, inga releaser, en osignerad MSI, och du bygger det från källkod.",
  features: [
    "Tiled viewer: pages are cut into 512 px tiles that are served as raw RGBA over a custom inkwell:// protocol (no JSON), with tabs, outline, thumbnails, full-text search and zoom that keeps old tiles on screen until the new ones arrive",
    "Tool areas that follow Acrobat Pro: comments and markup, forms (including form JavaScript in a sandbox), edit text and images, organize pages, combine files, portfolios, fill-and-sign, digital signatures, passwords and permissions, redaction, compression, OCR, compare, print production, preflight, PDF/A and PDF/UA, header/footer, watermark and Bates numbering, measure and batch actions",
    "Version history: every save, assistant turn or outside change becomes an immutable, encrypted version in a chunked store, and a restore is byte-exact so signatures survive",
    "Optional assistant that reuses the Codex or Claude Code CLI you already have signed in, with no API key. It can read and search the document and use Inkwell's own tools. In the default mode every edit appears as an Apply or Reject card, and each one counts as one undo step",
    "Permission modes for the assistant: ask for every edit (the default), ask only for destructive or permanent changes, or ask only for permanent ones. It never saves the file; Save stays with the user",
    "Windows' own OCR as the default engine (nothing to install), with Tesseract as an optional extra, and a text layer that is either invisible or real editable text",
    "Command palette (Ctrl+K), keyboard shortcuts for navigation and zoom, light and dark themes, and multiple files opened as tabs from the command line or by drag and drop",
    "Per-machine MSI built by the Tauri WiX bundler, with Explorer integration documented in the repo (unsigned for now)",
  ],
  featuresSv: [
    "Rutbaserad visare: sidor delas upp i 512 px-rutor som levereras som rå RGBA över ett eget inkwell://-protokoll (ingen JSON), med flikar, innehållsförteckning, miniatyrer, fulltextsökning och zoom som behåller gamla rutor på skärmen tills de nya är på plats",
    "Verktygsområden som följer Acrobat Pro: kommentarer och markering, formulär (inklusive formulär-JavaScript i en sandbox), redigera text och bilder, organisera sidor, slå ihop filer, portföljer, fyll-i-och-signera, digitala signaturer, lösenord och behörigheter, maskning, komprimering, OCR, jämförelse, tryckproduktion, preflight, PDF/A och PDF/UA, sidhuvud/sidfot, vattenstämpel och Bates-numrering, mätning och batchåtgärder",
    "Versionshistorik: varje sparning, assistentomgång eller ändring utifrån blir en oföränderlig, krypterad version i ett uppdelat lager, och en återställning är byte-exakt så att signaturer överlever",
    "Valfri assistent som återanvänder den Codex- eller Claude Code-CLI du redan är inloggad i, utan API-nyckel. Den kan läsa och söka i dokumentet och använda Inkwells egna verktyg. I standardläget visas varje ändring som ett Godkänn- eller Avvisa-kort, och varje ändring räknas som ett ångra-steg",
    "Behörighetslägen för assistenten: fråga vid varje ändring (standard), fråga bara vid destruktiva eller permanenta ändringar, eller fråga bara vid permanenta. Den sparar aldrig filen, det gör alltid användaren",
    "Windows egen OCR som standardmotor (inget att installera), med Tesseract som valfritt tillägg, och ett textlager som antingen är osynligt eller riktig redigerbar text",
    "Kommandopalett (Ctrl+K), kortkommandon för navigering och zoom, ljust och mörkt tema, och flera filer som öppnas i flikar från kommandoraden eller med dra och släpp",
    "MSI per dator byggd med Tauris WiX-paketerare, med Utforskar-integration beskriven i repot (osignerad för tillfället)",
  ],
  challenges: [
    "Keeping a big PDF smooth while zooming and scrolling fast, when every request for a tile can be outdated by the time it is answered",
    "Stock MuPDF decodes JPEG 2000 images one at a time under a global lock, which stalls pages that are full of JPX pictures",
    "Edits, saves and the viewer all touch the same file: a save has to replace the original without leaving stale readers on the old bytes, and a signed or certified document must not be broken by an edit",
    "Letting an AI assistant change a document without handing it the keys: it has to run on the user's own CLI login, never see their credentials, and never act without approval",
  ],
  challengesSv: [
    "Att hålla ett stort PDF-dokument flytande vid snabb zoom och scroll, när varje begäran om en ruta kan vara föråldrad när den besvaras",
    "Standard-MuPDF avkodar JPEG 2000-bilder en i taget under ett globalt lås, vilket får sidor fulla av JPX-bilder att hacka",
    "Ändringar, sparning och visaren rör samma fil: en sparning måste ersätta originalet utan att lämna kvar läsare på de gamla byten, och ett signerat eller certifierat dokument får inte gå sönder av en ändring",
    "Att låta en AI-assistent ändra ett dokument utan att ge den nycklarna: den måste köra på användarens egen CLI-inloggning, aldrig se deras inloggningsuppgifter och aldrig agera utan godkännande",
  ],
  solution:
    "Every change in what is wanted on screen bumps a per-stream epoch. The engine answers queued jobs older than the newest epoch with HTTP 410, and the client asks again only for the tiles that are still needed, one request per tile at a time. Render scale is quantised to quarter-octaves so tiles survive zoom steps, and zooming in restretches the old tiles until the settled scale arrives. The engine keeps a few read-only replicas of each file for viewing and runs every edit on one serial lane against a single authoritative document; each committed edit snapshots to memory and bumps a generation, replicas reopen from that snapshot, and a save writes a temp file, releases every replica and renames it over the original. Signed documents stay incremental and certified ones refuse the edit. The webview never gets a file path, only tokens that Rust issues and checks. A vendored copy of mupdf-sys makes JPEG 2000 decoding thread-parallel. The assistant is one shared tool registry that runs the Codex or Claude Code CLI as a child process, gives Claude an allowlisted environment, refuses to run Claude if an API key or token variable is set (the answer would not be billed to the user's plan), never reads or stores the login, and gates every tool by class (read, edit, destructive, permanent) against the chosen permission mode.",
  solutionSv:
    "Varje ändring i vad som efterfrågas på skärmen höjer en epok per ström. Motorn svarar på köade jobb som är äldre än den senaste epoken med HTTP 410, och klienten ber bara om de rutor som fortfarande behövs, en begäran per ruta åt gången. Renderingsskalan kvantiseras i kvartsoktaver så att rutor överlever zoomsteg, och vid inzoomning sträcks de gamla rutorna ut tills den nya skalan har satt sig. Motorn håller några skrivskyddade repliker av varje fil för visning och kör varje ändring på ett enda seriellt spår mot ett enda auktoritativt dokument; varje genomförd ändring tar en ögonblicksbild i minnet och höjer en generation, replikerna öppnas om från ögonblicksbilden, och en sparning skriver en temporärfil, släpper alla repliker och döper om den över originalet. Signerade dokument förblir inkrementella och certifierade dokument avvisar ändringen. Webbvyn får aldrig en filsökväg, bara token som Rust utfärdar och kontrollerar. En vendorad kopia av mupdf-sys gör JPEG 2000-avkodningen trådparallell. Assistenten är ett gemensamt verktygsregister som kör Codex- eller Claude Code-CLI:n som en barnprocess, ger Claude en tillåtelselista för miljövariabler, vägrar köra Claude om en API-nyckel eller token-variabel är satt (svaret skulle inte debiteras användarens abonnemang), aldrig läser eller sparar inloggningen och spärrar varje verktyg efter klass (läs, redigera, destruktiv, permanent) mot det valda behörighetsläget.",
  outcome:
    "A working Windows PDF app in early shape, open source under AGPL-3.0, with the tool areas of Acrobat Pro implemented and the remaining gaps documented area by area in the repo. The engine has Rust unit tests and the UI has Vitest tests, and the repo carries a benchmark for the engine and screenshot harnesses for the features. There are no releases yet, so for now you build it from source (Rust, Node, pnpm, LLVM and the VS Build Tools; the first build compiles MuPDF and takes several minutes) or build the unsigned MSI yourself. In the repo's own note, the app idles around 550 MB in total with WebView2 in low-end-device mode.",
  outcomeSv:
    "En fungerande PDF-app för Windows i ett tidigt skede, med öppen källkod under AGPL-3.0, där Acrobat Pros verktygsområden är implementerade och de återstående luckorna är dokumenterade område för område i repot. Motorn har enhetstester i Rust och gränssnittet har Vitest-tester, och repot innehåller en benchmark för motorn och skärmbildsskript för funktionerna. Det finns inga releaser ännu, så tills vidare bygger du den från källkod (Rust, Node, pnpm, LLVM och VS Build Tools; det första bygget kompilerar MuPDF och tar flera minuter) eller bygger den osignerade MSI-filen själv. Enligt repots egen anteckning ligger appen på cirka 550 MB totalt i viloläge med WebView2 i läget för enklare enheter.",
  gallery: [
    {
      image: "/images/projects/inkwell/viewer.webp",
      alt: "Inkwell viewer with a PDF open in a tab and the page thumbnails on the left",
      caption: "The tiled viewer with tabs, page thumbnails and a document open",
      captionSv:
        "Den rutbaserade visaren med flikar, sidminiatyrer och ett öppet dokument",
    },
    {
      image: "/images/projects/inkwell/tools.webp",
      alt: "Inkwell All tools panel listing Measure, Links, Bookmarks, Compress, Recognize text and Preflight",
      caption:
        "The All tools panel, grouped by job: comment and measure, edit, optimize and page marks",
      captionSv:
        "Panelen Alla verktyg, grupperad efter uppgift: kommentera och mät, redigera, optimera och sidmarkeringar",
    },
    {
      image: "/images/projects/inkwell/organize.webp",
      alt: "Inkwell Organize mode showing page thumbnails with rotate, delete, extract, insert, split and combine actions",
      caption:
        "Organize mode: rotate, delete, extract, insert, split and combine pages",
      captionSv:
        "Organisera-läget: rotera, ta bort, extrahera, infoga, dela och slå ihop sidor",
    },
  ],
};
