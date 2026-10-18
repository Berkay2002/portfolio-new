import type { Project } from "@/types";

export const ignitionLab: Project = {
  id: "ignition-lab",
  title: "Ignition Lab: An Interactive V8 from Equations",
  description:
    "A V8 engine built from equations in the browser: live thermodynamics, synthesized exhaust sound and an open Blender assembly of 1,494 named parts. Strict TypeScript with zero runtime dependencies.",
  descriptionSv:
    "En V8-motor byggd av ekvationer i webbläsaren: levande termodynamik, syntetiserat avgasljud och en öppen Blender-modell med 1 494 namngivna delar. Strikt TypeScript utan runtime-beroenden.",
  technologies: [
    "TypeScript",
    "WebGL",
    "Web Audio",
    "AudioWorklet",
    "Blender",
    "glTF",
    "Vercel",
    "GitHub Actions",
  ],
  projectInfo: [
    {
      label: "Type",
      labelSv: "Typ",
      value: "Interactive engineering study",
      valueSv: "Interaktiv ingenjörsstudie",
    },
    {
      label: "Model",
      labelSv: "Modell",
      value: "4.0 L V8, Wiebe burn, RK4 integration",
      valueSv: "4,0 L V8, Wiebe-förbränning, RK4-integration",
    },
    {
      label: "Runtime dependencies",
      labelSv: "Runtime-beroenden",
      value: "None",
      valueSv: "Inga",
    },
    {
      label: "3D assets",
      labelSv: "3D-tillgångar",
      value: "Blender scene + GLB, MIT licensed",
      valueSv: "Blender-scen + GLB, MIT-licens",
    },
  ],
  projectLinks: [
    {
      label: "Project showcase",
      labelSv: "Projektpresentation",
      href: "https://ignition-lab-berkay.vercel.app/showcase.html",
    },
    {
      label: "Download Blender scene",
      labelSv: "Ladda ner Blender-scenen",
      href: "https://github.com/Berkay2002/ignition-lab/releases/latest",
    },
  ],
  link: "https://ignition-lab-berkay.vercel.app/",
  linkLabel: "Open the Lab",
  linkLabelSv: "Öppna labbet",
  githubLink: "https://github.com/Berkay2002/ignition-lab",
  image: "/images/projects/ignition-lab/cutaway.webp",
  imageAlt:
    "Ignition Lab cutaway view of the V8 with the pressure-volume diagram, cycle work and exhaust pulse trace",
  imageAltSv: "Ignition Labs genomskurna V8 med tryck-volym-diagram, cykelarbete och avgaspulser",
  detailedDescription:
    "Ignition Lab is a V8 engine you can turn, cut open and listen to, with the engine's numbers computed from equations. Cylinder volume comes from slider-crank geometry, a Wiebe burn curve releases heat into an ideal gas, and a fourth-order Runge-Kutta integrator follows the energy through compression and expansion. The signed area inside the pressure-volume loop gives cycle work. A separate driving lab integrates wheel force, traction, drag and rolling resistance for six vehicle profiles, and the exhaust sound is synthesized from the engine's own events instead of played back from a recording. The whole thing is strict TypeScript compiled to native browser modules, with zero runtime dependencies.",
  detailedDescriptionSv:
    "Ignition Lab är en V8-motor man kan vrida på, skära upp och lyssna på, där motorns siffror räknas fram ur ekvationer. Cylindervolymen kommer från vevstaksgeometrin, en Wiebe-förbränningskurva frigör värme i en ideal gas och en Runge-Kutta-integrator av fjärde ordningen följer energin genom kompression och expansion. Den orienterade arean inuti tryck-volym-loopen ger cykelarbetet. Ett separat körlabb integrerar hjulkraft, väggrepp, luftmotstånd och rullmotstånd för sex fordonsprofiler, och avgasljudet syntetiseras ur motorns egna händelser istället för att spelas upp från en inspelning. Allt är strikt TypeScript kompilerat till webbläsarens inbyggda moduler, utan några runtime-beroenden.",
  features: [
    "Three views of the same engine: assembled, cutaway and exploded across ten layers, with orbit, zoom, part picking, and hide or isolate per assembly",
    "Live cycle model: adjust RPM, throttle, compression and ignition advance and the cycle is solved again, with a pressure-volume diagram, cycle work and indicated power next to the engine",
    "Crank angle scrubbing and a firing-sequence strip: select a cylinder to follow its intake, compression, power and exhaust strokes while the pistons, rods and valve gear move",
    "Driving lab with six vehicle profiles and scenarios for 0 to 100, 100 to 200, 80 to 160 km/h, braking, a single-gear dyno sweep and free drive, with a speed trace and run comparison",
    "Synthesized exhaust: separate exhaust banks with cross-plane or flat-plane cadence, blowdown pulses, pipe reflections and resonant body tones, with stock, sports and open exhausts and a choice of tailpipe, engine bay, cabin or roadside listening position",
    "Export and recording: completed runs export as JSON, and video with sound can be recorded locally, capturing the engine, telemetry and generated audio",
    "Open assets: a Blender scene with named collections and an explode controller, plus a static GLB, both built from 1,494 named parts",
  ],
  featuresSv: [
    "Tre vyer av samma motor: hopsatt, genomskuren och sprängd över tio lager, med orbit, zoom, delval samt dölj eller isolera per sammanställning",
    "Levande cykelmodell: ändra varvtal, gasreglage, kompression och tändläge så löses cykeln om, med tryck-volym-diagram, cykelarbete och indikerad effekt bredvid motorn",
    "Dra i vevvinkeln och se tändföljden: välj en cylinder för att följa insugs-, kompressions-, arbets- och avgastakten medan kolvar, vevstakar och ventilmekanik rör sig",
    "Körlabb med sex fordonsprofiler och scenarier för 0 till 100, 100 till 200, 80 till 160 km/h, inbromsning, ett dynosvep i en växel och fri körning, med hastighetskurva och jämförelse mellan körningar",
    "Syntetiserat avgasljud: separata avgasbankar med cross-plane- eller flat-plane-takt, utblåsningspulser, rörreflektioner och resonanta kroppstoner, med standard-, sport- och öppet avgassystem samt val av lyssningsposition vid avgasrör, i motorrum, kupé eller vid vägkanten",
    "Export och inspelning: färdiga körningar exporteras som JSON, och video med ljud kan spelas in lokalt med motorn, telemetrin och det genererade ljudet",
    "Öppna tillgångar: en Blender-scen med namngivna samlingar och en explode-kontroll, plus en statisk GLB, båda byggda av 1 494 namngivna delar",
  ],
  challenges: [
    "Keeping the physics honest: the engine study uses a prescribed RPM and a steady cycle, so it can show cycle work without pretending to simulate crank acceleration, knock or mechanical losses",
    "Making sound without recordings: exhaust pulses, pipe reflections and body resonances have to follow RPM and cylinder pressure in real time, independently of the slower study animation",
    "Zero runtime dependencies for a WebGL scene, an audio engine and a UI, including a typed boundary for the generated Blender mesh data and for audio worklet messages",
    "Separating what is sourced from what is estimated: manufacturer peak figures are cited, while estimated torque curves and unverified inputs are marked as such",
  ],
  challengesSv: [
    "Hålla fysiken ärlig: motorstudien använder ett förutbestämt varvtal och en stabil cykel, så den kan visa cykelarbete utan att låtsas simulera vevaxelacceleration, knack eller mekaniska förluster",
    "Skapa ljud utan inspelningar: avgaspulser, rörreflektioner och kroppsresonanser måste följa varvtal och cylindertryck i realtid, oberoende av den långsammare studieanimationen",
    "Noll runtime-beroenden för en WebGL-scen, en ljudmotor och ett gränssnitt, inklusive en typad gräns för genererad Blender-meshdata och för meddelanden till audio worklet",
    "Skilja på vad som är källbelagt och vad som är uppskattat: tillverkarnas toppvärden anges med källa, medan uppskattade momentkurvor och overifierade indata markeras som sådana",
  ],
  solution:
    "The cycle is solved from first principles: slider-crank volume, a Wiebe burn curve and an RK4 energy integration, with work taken as the signed area of the pressure-volume loop. The driving model is built on integrated wheel force rather than target times, so no acceleration figure is prescribed. Sound is generated in an AudioWorklet from exhaust events, with pressure-derived load shaping strength and brightness and smoothed RPM transitions. The 3D assembly is authored in Blender, exported as meshes validated at the typed renderer boundary, and the model and assumptions are written up in the repo. Tests cover 81 thermodynamic parameter combinations, energy balance, integration convergence, the audio configurations, all 36 vehicle profile and scenario combinations and the 1,494-part GLB, and run in GitHub Actions on every push.",
  solutionSv:
    "Cykeln löses från grundprinciper: volym ur vevstaksgeometrin, en Wiebe-förbränningskurva och RK4-integration av energin, där arbetet är den orienterade arean av tryck-volym-loopen. Körmodellen bygger på integrerad hjulkraft istället för förinställda tider, så ingen accelerationssiffra är förutbestämd. Ljudet genereras i en AudioWorklet ur avgashändelser, där tryckhärledd last styr styrka och ljusstyrka och varvtalsövergångar mjukas upp. 3D-modellen är byggd i Blender, exporteras som meshdata som valideras vid den typade renderargränsen, och modellen och antagandena är dokumenterade i repot. Testerna täcker 81 termodynamiska parameterkombinationer, energibalans, integrationskonvergens, ljudkonfigurationerna, alla 36 kombinationer av fordonsprofil och scenario samt GLB-filen med 1 494 delar, och körs i GitHub Actions vid varje push.",
  outcome:
    "A deployed interactive lab at ignition-lab-berkay.vercel.app with a showcase page, generated sound demos and downloadable Blender and GLB assets under the MIT license. At the default settings the model gives 663.2 J per cylinder per cycle and 106.1 kW indicated power, with an energy residual of 0.042 J. The repo is clear that these checks show internal consistency, not agreement with a real engine.",
  outcomeSv:
    "Ett driftsatt interaktivt labb på ignition-lab-berkay.vercel.app med en presentationssida, genererade ljuddemos och nedladdningsbara Blender- och GLB-tillgångar under MIT-licens. Vid standardinställningarna ger modellen 663,2 J per cylinder och cykel och 106,1 kW indikerad effekt, och energiresten är 0,042 J. Repot är tydligt med att kontrollerna visar intern konsistens, inte överensstämmelse med en verklig motor.",
  gallery: [
    {
      image: "/images/projects/ignition-lab/driving-lab.webp",
      alt: "Driving lab after a 0 to 100 km/h run, with the speed trace, run comparison and exhaust pulses",
      caption: "Driving lab: a calculated 0 to 100 km/h run with speed trace and exhaust pulses",
      captionSv: "Körlabb: en beräknad körning 0 till 100 km/h med hastighetskurva och avgaspulser",
    },
    {
      image: "/images/projects/ignition-lab/exploded.webp",
      alt: "Exploded view of the V8 separated into its ten layers",
      caption: "Exploded view: the ten layers of the assembly pulled apart",
      captionSv: "Sprängvy: monteringens tio lager isärdragna",
    },
  ],
};
