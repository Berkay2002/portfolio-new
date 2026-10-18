import type { Project } from "@/types";

export const formulaRacing: Project = {
  id: "formula-racing",
  title: "FORMULA: Simcade Racing Prototype",
  description:
    "Simcade open-wheel racing prototype in Unreal Engine 5.8 and C++ with custom vehicle dynamics, race control, pit stops and a Silverstone circuit rebuilt from open map and terrain data.",
  descriptionSv:
    "Simcade-racingprototyp med formelbilar i Unreal Engine 5.8 och C++ med egen fordonsdynamik, tävlingsstyrning, depåstopp och en Silverstone-bana återskapad från öppna kart- och terrängdata.",
  technologies: [
    "Unreal Engine 5.8",
    "C++17",
    "Slate",
    "Unreal Replication",
    "Python",
    "Blender",
    "PowerShell",
    "OpenStreetMap",
  ],
  projectInfo: [
    {
      label: "Type",
      labelSv: "Typ",
      value: "Racing game prototype",
      valueSv: "Racingspelsprototyp",
    },
    {
      label: "Engine",
      labelSv: "Motor",
      value: "Unreal Engine 5.8, gameplay in C++ with no Blueprints",
      valueSv: "Unreal Engine 5.8, spellogik i C++ utan Blueprints",
    },
    {
      label: "Platform",
      labelSv: "Plattform",
      value: "Windows",
    },
    {
      label: "Circuit",
      labelSv: "Bana",
      value: "Silverstone, 5.9 km, 118 timing gates",
      valueSv: "Silverstone, 5,9 km, 118 tidtagningsportar",
    },
    {
      label: "Multiplayer",
      labelSv: "Flerspelarläge",
      value: "Listen-server free drive (in progress)",
      valueSv: "Fri körning online via listen-server (under arbete)",
    },
  ],
  image: "/images/projects/formula-racing/race-hud.webp",
  imageAlt: "Six-car race at Silverstone with the broadcast-style HUD: standings, minimap, tire state and speed cluster",
  imageAltSv: "Lopp med sex bilar på Silverstone med HUD i tv-stil: placeringar, minikarta, däckstatus och fartinstrument",
  detailedDescription:
    "FORMULA is a keyboard-first racing game in the spirit of Forza Horizon: believable weight and speed, forgiving grip, and mistakes you can recover from. The gameplay is plain C++ on top of Unreal, with no Chaos Vehicles and no Blueprint logic. The vehicle simulation, race rules and pit logic are header-only cores with no engine dependencies, so they run in standalone test suites that build with a plain compiler. The circuit is a reconstruction of Silverstone from OpenStreetMap and Environment Agency LIDAR data, and Python tools drive the Unreal and Blender editors over their MCP servers to build it.",
  detailedDescriptionSv:
    "FORMULA är ett tangentbordsfokuserat racingspel i andan av Forza Horizon: trovärdig tyngd och fart, förlåtande grepp och misstag man kan reda ut. Spelkoden är ren C++ ovanpå Unreal, utan Chaos Vehicles och utan Blueprint-logik. Fordonssimuleringen, tävlingsreglerna och depålogiken är header-only-kärnor utan motorberoenden, så de körs i fristående testsviter som bygger med en vanlig kompilator. Banan är en rekonstruktion av Silverstone från OpenStreetMap och Environment Agencys LIDAR-data, och Python-verktyg styr Unreal- och Blender-editorerna via deras MCP-servrar för att bygga den.",
  features: [
    "Custom vehicle dynamics: a fixed 240 Hz step independent of frame rate, with suspension, combined-slip tires, downforce, an eight-speed automatic gearbox, and toggleable ABS, traction control and light stability assists",
    "Race mode: six-car races where AI opponents use the same physics as the player, with five-light starts, ordered timing gates, track-limit penalties, DNF handling and results, plus a separate time-trial mode with saved personal bests",
    "Pit stops and tires: Soft, Medium and Hard compounds with distance-based wear, a mandatory compound change, an 80 km/h limiter on the pit asphalt, and teammates queuing for a shared box",
    "Silverstone from open data: the Grand Prix layout from OpenStreetMap with elevation sampled from 1 m LIDAR, plus kerbs, run-off and landmark buildings",
    "Broadcast-style HUD and menus: standings, minimap with car markers, tire state, speed and RPM cluster and assist indicators drawn in C++, with Home, race setup and settings screens in Slate",
    "Networked free drive: each machine simulates its own car and remote cars are Hermite-interpolated between 30 Hz state updates, with a procedurally synthesised engine and road audio mix",
  ],
  featuresSv: [
    "Egen fordonsdynamik: ett fast 240 Hz-steg oberoende av bildfrekvensen, med fjädring, däck med kombinerad slip, downforce, en åttastegs automatlåda samt ABS, antispinn och lätt stabilitetshjälp som kan stängas av",
    "Racingläge: lopp med sex bilar där AI-motståndarna använder samma fysik som spelaren, med femljusstart, ordnade tidtagningsportar, tidsstraff för att lämna banan, DNF-hantering och resultat, samt ett separat tidsprovsläge med sparade personbästa",
    "Depåstopp och däck: Soft-, Medium- och Hard-blandningar med distansbaserat slitage, ett obligatoriskt däckbyte, en 80 km/h-begränsare på depåasfalten och teamkamrater som köar till en delad box",
    "Silverstone från öppna data: Grand Prix-banan från OpenStreetMap med höjd samplad från 1 m LIDAR, plus curbs, avåkningszoner och kända byggnader",
    "HUD och menyer i tv-stil: placeringslista, minikarta med bilmarkörer, däckstatus, fart- och varvtalsinstrument och hjälpindikatorer ritade i C++, med hem-, loppinställnings- och inställningsskärmar i Slate",
    "Nätverksspel med fri körning: varje maskin simulerar sin egen bil och fjärrbilar Hermite-interpoleras mellan tillståndsuppdateringar på 30 Hz, med proceduralt syntetiserat motor- och vägljud",
  ],
  challenges: [
    "Keeping a handling model that feels forgiving on a keyboard while staying a real simulation, with wheels that can lock and spin and weight that transfers under braking and cornering",
    "Making race progress hard to cheat: a lap counts only when every gate is crossed forward and in order, so a shortcut, a wrong-way crossing or a sudden jump cannot advance a car",
    "Networking cars that each run their own physics at 240 Hz without visible jumps or input lag for the owner",
    "Building a believable circuit from open geodata alone, where the source ways are partly estimates and the terrain survey predates the 2019 resurfacing",
  ],
  challengesSv: [
    "Behålla en hanteringsmodell som känns förlåtande på tangentbord men ändå är en riktig simulering, med hjul som kan låsa och spinna och tyngd som överförs vid bromsning och kurvtagning",
    "Göra loppframsteget svårt att fuska med: ett varv räknas bara om varje port passeras framåt och i ordning, så att en genväg, en passage åt fel håll eller ett plötsligt hopp inte kan flytta fram en bil",
    "Synka bilar över nätverket när var och en kör sin egen fysik i 240 Hz, utan synliga hopp och utan inputfördröjning för den som kör",
    "Bygga en trovärdig bana enbart från öppna geodata, där källornas vägar delvis är uppskattningar och terrängundersökningen är äldre än omasfalteringen 2019",
  ],
  solution:
    "The simulation core is a header-only C++17 model in SI units with no Unreal dependency, converted to engine units only at the pawn boundary, and the race and pit rules live in their own engine-independent headers. Standalone suites cover dynamics, controls, race rules, pits, time trial and networking. Multiplayer is owner-authoritative: each player's machine runs its own car exactly as in single-player, sends a quantised state about 30 times per second, and other clients render remote cars slightly behind real time with Hermite interpolation. The circuit comes from a data pipeline of Python scripts that turn OpenStreetMap and LIDAR into route, pit and landmark files, which an Unreal actor builds into the map.",
  solutionSv:
    "Simuleringskärnan är en header-only-modell i C++17 med SI-enheter och inget Unreal-beroende, som konverteras till motorenheter först vid pawn-gränsen, och lopp- och depåreglerna ligger i egna motoroberoende headers. Fristående sviter täcker dynamik, kontroller, loppregler, depå, tidsprov och nätverk. Multiplayer är ägarauktoritativt: varje spelares maskin kör sin egen bil precis som i enspelarläget, skickar ett kvantiserat tillstånd ungefär 30 gånger i sekunden, och andra klienter visar fjärrbilar något efter verklig tid med Hermite-interpolering. Banan kommer från en datapipeline av Python-skript som gör om OpenStreetMap och LIDAR till rutt-, depå- och landmärkesfiler, som en Unreal-actor bygger till kartan.",
  outcome:
    "A playable six-car race prototype with real tire strategy, assists and a broadcast-style HUD, released as open source under the MIT license. The game content (maps and meshes) is not in the public repository, so the C++ project compiles and the simulation tests run, but playing needs those assets. Multiplayer currently covers free drive only.",
  outcomeSv:
    "En spelbar lopprototyp med sex bilar, riktig däckstrategi, körhjälp och en HUD i tv-stil, utgiven som öppen källkod under MIT-licens. Spelinnehållet (kartor och modeller) finns inte i det publika repot, så C++-projektet kompilerar och simuleringstesterna körs, men för att spela behövs de tillgångarna. Multiplayer omfattar just nu bara fri körning.",
  githubLink: "https://github.com/Berkay2002/formula-racing",
  gallery: [
    {
      image: "/images/projects/formula-racing/silverstone-aerial.webp",
      alt: "Aerial view of the reconstructed Silverstone circuit",
      caption: "The Silverstone Grand Prix layout rebuilt from OpenStreetMap and LIDAR data",
      captionSv: "Silverstones Grand Prix-bana återskapad från OpenStreetMap- och LIDAR-data",
    },
    {
      image: "/images/projects/formula-racing/silverstone-straight.webp",
      alt: "Hamilton Straight at Silverstone from track level",
      caption: "Hamilton Straight from track level",
      captionSv: "Hamilton Straight sett från banan",
    },
  ],
};
