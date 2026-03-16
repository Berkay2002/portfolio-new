import type { Project } from "@/types";

export const primitiveUi: Project = {
  id: "primitive-ui",
  title: "Primitive UI Library",
  description:
    "Flutter component library built from scratch using only CustomPaint, Canvas, and custom RenderBox — no high-level widgets. Ships with a Nextra docs site featuring live embedded demos.",
  descriptionSv:
    "Flutter-komponentbibliotek byggt från grunden med enbart CustomPaint, Canvas och egen RenderBox — inga högnivå-widgets. Levereras med en Nextra-dokumentationssajt med inbäddade livedemos.",
  technologies: [
    "Flutter",
    "Dart",
    "CustomPaint",
    "Canvas API",
    "RenderBox",
    "AnimationController",
    "Next.js (docs)",
    "Nextra 4",
    "Tailwind v4",
    "Pagefind",
  ],
  link: "https://tddc73.vercel.app",
  imageAlt: "Primitive UI components and documentation site",
  detailedDescription:
    "Nine UI and layout components (cards, toggles, sliders, progress indicators, buttons, inputs, VStack/HStack/ZStack) implemented using only CustomPaint, GestureDetector, custom RenderBox subclasses, and AnimationController. Every component draws directly to the Canvas — no Column, Row, Stack, or Card widgets anywhere. The library is paired with a Nextra 4 docs site that embeds live Flutter demos via AppEmbed iframes alongside editable DartPad snippets, plus auto-generated API tables for each component's properties.",
  detailedDescriptionSv:
    "Nio UI- och layoutkomponenter (kort, toggles, sliders, progressindikatorer, knappar, inputs, VStack/HStack/ZStack) implementerade med enbart CustomPaint, GestureDetector, egna RenderBox-subklasser och AnimationController. Varje komponent ritar direkt till Canvas — inga Column-, Row-, Stack- eller Card-widgets. Biblioteket har en Nextra 4-dokumentationssajt med inbäddade Flutter-livedemos via AppEmbed-iframes, redigerbara DartPad-snippets och autogenererade API-tabeller för varje komponents egenskaper.",
  features: [
    "Six UI components (Card, ToggleSwitch, Slider, CircularProgress, Button, Input) and three layout containers (VStack, HStack, ZStack), all rendered from primitives",
    "Canvas-level rendering: shadows via drawShadow, color interpolation with Color.lerp, rounded rectangles with RRect, and MaskFilter.blur for depth",
    "Custom multi-child RenderBox layout that handles flex factors, intrinsic sizing, and main/cross axis alignment without Flutter's built-in flex system",
    "Implicit animations using AnimationController and TweenAnimationBuilder for smooth state transitions on toggles, elevation changes, and color shifts",
    "Nextra 4 docs site with 20+ live AppEmbed demos, DartPad code snippets, API parameter tables, full-text search via Pagefind, and architecture explainers",
    "Widget test suite covering tap behavior, state transitions, and edge cases across all components",
  ],
  featuresSv: [
    "Sex UI-komponenter (Card, ToggleSwitch, Slider, CircularProgress, Button, Input) och tre layoutcontainrar (VStack, HStack, ZStack), alla renderade från primitiv",
    "Canvas-nivå rendering: skuggor via drawShadow, färginterpolering med Color.lerp, rundade rektanglar med RRect och MaskFilter.blur för djup",
    "Egen multi-child RenderBox-layout som hanterar flexfaktorer, intrinsic sizing och main/cross axis-alignment utan Flutters inbyggda flexsystem",
    "Implicita animationer med AnimationController och TweenAnimationBuilder för mjuka övergångar på toggles, elevation och färgskiften",
    "Nextra 4-dokumentationssajt med 20+ live AppEmbed-demos, DartPad-kodsnippets, API-parametertabeller, fulltextsökning via Pagefind och arkitekturförklaringar",
    "Widgettester som täcker tap-beteende, tillståndsövergångar och edge cases för alla komponenter",
  ],
  challenges: [
    "Building flex layout from scratch — VStack/HStack needed two-pass constraint propagation, flex factor division, and intrinsic size computation without any of Flutter's layout helpers",
    "Getting smooth animations on components that draw directly to Canvas, where you can't lean on widget-level animation helpers",
    "Embedding live Flutter demos inside a static docs site without it feeling clunky or slow to load",
  ],
  challengesSv: [
    "Bygga flexlayout från grunden — VStack/HStack krävde tvåstegs constraint-propagering, flexfaktoruppdelning och intrinsic size-beräkning utan Flutters layouthjälpare",
    "Få mjuka animationer på komponenter som ritar direkt till Canvas, där man inte kan luta sig mot widget-nivåns animationshjälpare",
    "Bädda in live Flutter-demos i en statisk dokumentationssajt utan att det känns klumpigt eller långsamt att ladda",
  ],
  solution:
    "Each component uses CustomPainter subclasses for rendering and ContainerRenderObjectMixin for multi-child layout, with AnimationController driving interpolated canvas redraws. The docs site uses Nextra 4 with AppEmbed iframes pointing at compiled Flutter web snippets, so demos load independently of the docs build.",
  solutionSv:
    "Varje komponent använder CustomPainter-subklasser för rendering och ContainerRenderObjectMixin för multi-child-layout, med AnimationController som driver interpolerade canvas-omritningar. Dokumentationssajten använder Nextra 4 med AppEmbed-iframes som pekar på kompilerade Flutter-webbsnippets, så demos laddas oberoende av docs-bygget.",
  outcome:
    "A working Flutter component library where every pixel is owner-drawn — useful as both a course deliverable (TDDC73, grade 5) and a reference for how Flutter's rendering pipeline works under the abstraction layer. The docs site at tddc73.vercel.app serves as a living showcase with interactive examples.",
  outcomeSv:
    "Ett fungerande Flutter-komponentbibliotek där varje pixel ritas manuellt — användbart både som kursleverans (TDDC73, betyg 5) och referens för hur Flutters renderingspipeline fungerar under abstraktionslagret. Dokumentationssajten på tddc73.vercel.app fungerar som ett levande skyltfönster med interaktiva exempel.",
  githubLink: "https://github.com/Berkay2002/tddc73",
};
