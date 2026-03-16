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
  detailedDescription:
    "A Blender 4.0+ add-on that models planetary orbits around a sun using Euler integration. Planets are created as UV spheres with procedural noise-based materials or mapped textures for the eight real planets. The simulation runs in two modes: standard (only sun gravity) and advanced (N-body with inter-planet gravitational forces). Results are baked into keyframe animations so you can scrub through the timeline or render the orbits directly in Blender.",
  detailedDescriptionSv:
    "Ett Blender 4.0+-tillägg som modellerar planetbanor runt en sol med Euler-integration. Planeter skapas som UV-sfärer med procedurella brus-baserade material eller mappade texturer för de åtta riktiga planeterna. Simuleringen körs i två lägen: standard (bara solens gravitation) och avancerat (N-kropp med gravitationskrafter mellan planeter). Resultaten bakas in i keyframe-animationer så att man kan skrubba genom tidslinjen eller rendera banorna direkt i Blender.",
  features: [
    "Euler integration: calculates orbital positions step-by-step using gravitational acceleration from the sun, with configurable time steps and simulation duration",
    "Preset planets: Mercury through Neptune with real aphelion distances, masses, and orbital velocities baked in",
    "Advanced N-body mode: toggles inter-planet gravitational forces on top of sun gravity, which gets expensive fast with more planets",
    "Procedural materials: custom planets get randomized noise-based shaders through a color ramp, while preset planets load actual texture maps",
    "Sun shader: emission-based material with noise textures and a cardinal color ramp for that fiery look",
    "Keyframe baking: simulation results are written directly to Blender keyframes, so orbits play back in the viewport timeline",
  ],
  featuresSv: [
    "Euler-integration: beräknar banpositioner steg-för-steg med gravitationsacceleration från solen, med konfigurerbar tidssteg och simuleringstid",
    "Förinställda planeter: Merkurius till Neptunus med verkliga aphelieavstånd, massor och banfarter inlagda",
    "Avancerat N-kroppsläge: slår på gravitationskrafter mellan planeter utöver solens gravitation, vilket blir dyrt snabbt med fler planeter",
    "Procedurella material: egna planeter får randomiserade brus-baserade shaders genom en färgramp, medan förinställda planeter laddar riktiga texturkartor",
    "Sol-shader: emissionsbaserat material med brustexturer och en cardinal-färgramp för den där eldiga looken",
    "Keyframe-bakning: simuleringsresultat skrivs direkt till Blender-keyframes, så banorna spelas upp i viewportens tidslinje",
  ],
  challenges: [
    "Blender's shader node API changed names between versions, so the material code had to be rewritten to work with Blender 4.0+",
    "The advanced simulation scales quadratically — every planet pair needs force calculations each timestep, and with 300-second steps over simulated years, that adds up",
    "Keeping the custom UI responsive while a long simulation runs, since Blender's Python execution blocks the main thread",
  ],
  challengesSv: [
    "Blenders shader-nod-API bytte namn mellan versioner, så materialkoden fick skrivas om för att fungera med Blender 4.0+",
    "Den avancerade simuleringen skalar kvadratiskt — varje planetpar kräver kraftberäkningar varje tidssteg, och med 300-sekunders steg över simulerade år blir det mycket",
    "Hålla det anpassade gränssnittet responsivt medan en lång simulering körs, eftersom Blenders Python-exekvering blockerar huvudtråden",
  ],
  solution:
    "Built as a standard Blender add-on with register/unregister hooks and a custom N-panel. The physics uses a CelestialBody base class with Planet and Moon subclasses, NumPy arrays for position/velocity/acceleration vectors, and Euler integration in a tight loop. Positions are sampled every 100 steps and converted to keyframes after the simulation finishes. The UI disables itself during simulation to prevent conflicting state.",
  solutionSv:
    "Byggt som ett standard Blender-tillägg med register/unregister-hooks och en anpassad N-panel. Fysiken använder en CelestialBody-basklass med Planet- och Moon-subklasser, NumPy-arrayer för positions-/hastighets-/accelerationsvektorer och Euler-integration i en tight loop. Positioner samplas var 100:e steg och konverteras till keyframes efter att simuleringen är klar. Gränssnittet inaktiveras under simulering för att förhindra motstridigt tillstånd.",
  outcome:
    "The add-on installs into Blender's sidebar and lets you build a solar system from scratch or use real planet presets, run the simulation, and get a playable animation out of it. The standard mode handles quick visualizations in seconds. The advanced mode with N-body gravity is more accurate but can take a while depending on planet count and simulation length — the README warns you to save your project first, which about sums it up.",
  outcomeSv:
    "Tillägget installeras i Blenders sidofält och låter dig bygga ett solsystem från grunden eller använda riktiga planetförinställningar, köra simuleringen och få en spelbar animation. Standardläget hanterar snabba visualiseringar på sekunder. Det avancerade läget med N-kroppsgravitation är mer exakt men kan ta en stund beroende på antal planeter och simuleringstid — README:n varnar att man bör spara sitt projekt först, vilket säger det mesta.",
  githubLink: "https://github.com/Sahriz/BlenderSolarsystemSim",
};
