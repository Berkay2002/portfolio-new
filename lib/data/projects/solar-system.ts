import type { Project } from "@/types";

export const solarSystem: Project = {
  id: "solar-system",
  title: "Interactive Solar System Simulation",
  description:
    "Blender add-on that simulates planetary orbits using Euler approximation, with keyframe animations, procedural shaders, and a sidebar UI for building custom solar systems.",
  descriptionSv:
    "Blender-tillägg som simulerar planetbanor med Euler-approximation, med keyframe-animationer, procedurella shaders och ett sidofälts-UI för att bygga egna solsystem.",
  technologies: [
    "Blender",
    "Python",
    "NumPy",
    "Blender API (bpy)",
    "Euler Method",
  ],
  institution: "Linköping University",
  image: "/images/projects/solar-system.png",
  imageAlt: "Interactive Solar System Simulation screenshot",
  imageAltSv: "Skärmbild från den interaktiva solsystemssimuleringen",
  detailedDescription:
    "A Blender 4.0+ add-on, made for the TNM085 Modelling Project course by a team of four, that models planetary orbits around a sun using Euler integration. Planets are created as UV spheres with procedural noise-based materials or mapped textures for the eight real planets. The simulation runs in two modes: standard (only sun gravity) and advanced (N-body with inter-planet gravitational forces). Results are baked into keyframe animations so you can scrub through the timeline or render the orbits directly in Blender.",
  detailedDescriptionSv:
    "Ett Blender 4.0+-tillägg, gjort för kursen TNM085 Modelleringsprojekt av en grupp på fyra, som modellerar planetbanor runt en sol med Euler-integration. Planeterna skapas som UV-sfärer med procedurella brusmaterial eller texturkartor för de åtta riktiga planeterna. Simuleringen körs i två lägen: standard (bara solens gravitation) och avancerat (N-kropp med gravitationskrafter mellan planeter). Resultaten bakas in i keyframe-animationer så att man kan skrubba genom tidslinjen eller rendera banorna direkt i Blender.",
  features: [
    "Euler integration: calculates orbital positions step-by-step using gravitational acceleration from the sun, with a fixed 300-second time step and a configurable simulation length in years",
    "Preset planets: Mercury through Neptune with real aphelion distances and masses; each body starts at the circular orbital speed for its distance, √(GM/r)",
    "Advanced N-body mode: toggles inter-planet gravitational forces on top of sun gravity, which gets expensive fast with more planets",
    "Procedural materials: custom planets get noise-based shaders through a color ramp with random colors, while preset planets load actual texture maps",
    "Sun shader: emission-based material with noise textures and a cardinal color ramp for that fiery look",
    "Keyframe baking: simulation results are written directly to Blender keyframes, so orbits play back in the viewport timeline",
  ],
  featuresSv: [
    "Euler-integration: beräknar banpositioner steg-för-steg med gravitationsacceleration från solen, med ett fast tidssteg på 300 sekunder och en inställbar simuleringstid i år",
    "Förinställda planeter: Merkurius till Neptunus med verkliga aphelieavstånd och massor; varje kropp startar med den cirkulära banhastigheten för sitt avstånd, √(GM/r)",
    "Avancerat N-kroppsläge: slår på gravitationskrafter mellan planeter utöver solens gravitation, vilket blir dyrt snabbt med fler planeter",
    "Procedurella material: egna planeter får brusbaserade shaders via en färgramp med slumpade färger, medan förinställda planeter laddar riktiga texturer",
    "Sol-shader: emissionsbaserat material med brustexturer och en cardinal-färgramp för ett eldigt utseende",
    "Keyframe-bakning: simuleringsresultat skrivs direkt till Blender-keyframes, så banorna spelas upp i viewportens tidslinje",
  ],
  challenges: [
    "Shader node names changed in newer Blender versions, so the material code had to be updated to match",
    "The advanced simulation scales quadratically — every planet pair needs force calculations each timestep, and with 300-second steps over simulated years, that adds up",
    "Long simulations: the whole run happens synchronously on Blender's main thread, so Blender is busy until it finishes",
  ],
  challengesSv: [
    "Shader-noderna bytte namn i nyare Blender-versioner, så materialkoden fick uppdateras",
    "Den avancerade simuleringen skalar kvadratiskt — varje planetpar kräver kraftberäkningar varje tidssteg, och med 300-sekunders steg över simulerade år blir det mycket",
    "Långa simuleringar: hela körningen sker synkront på Blenders huvudtråd, så Blender är upptaget tills den är klar",
  ],
  solution:
    "Built as a standard Blender add-on with register/unregister hooks and a custom N-panel. The physics uses a CelestialBody base class with Planet and Moon subclasses, NumPy arrays for position/velocity/acceleration vectors, and Euler integration in a tight loop. Positions are sampled every 100 steps and converted to keyframes after the simulation finishes. While it runs, a flag replaces the panel with a “Running simulation, please wait” message.",
  solutionSv:
    "Byggt som ett standard Blender-tillägg med register/unregister-hooks och en anpassad N-panel. Fysiken använder en CelestialBody-basklass med Planet- och Moon-subklasser, NumPy-arrayer för positions-/hastighets-/accelerationsvektorer och Euler-integration i en tät loop. Positioner samplas var 100:e steg och konverteras till keyframes efter att simuleringen är klar. Under körningen ersätter en flagga panelen med meddelandet “Running simulation, please wait”.",
  outcome:
    "The add-on installs into Blender's sidebar and lets you build a solar system from scratch or use real planet presets, run the simulation, and get a playable animation out of it. The standard mode is the quick one. The advanced mode adds gravity between the planets but can take a long while depending on planet count and simulation length — the README warns you to save your project and keep a backup first, which about sums it up.",
  outcomeSv:
    "Tillägget installeras i Blenders sidofält och låter dig bygga ett solsystem från grunden eller använda riktiga planetförinställningar, köra simuleringen och få ut en animation som går att spela upp. Standardläget är det snabba. Det avancerade läget lägger till gravitation mellan planeterna men kan ta lång tid beroende på antal planeter och simuleringstid — README:n varnar att man bör spara sitt projekt och ha en backup först, vilket säger det mesta.",
  link: "/downloads/SolarSystem.zip",
  linkLabel: "Download Add-on (.zip)",
  linkLabelSv: "Ladda ner tillägg (.zip)",
  githubLink: "https://github.com/Sahriz/BlenderSolarsystemSim",
};
