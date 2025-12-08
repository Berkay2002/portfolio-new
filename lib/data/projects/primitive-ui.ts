import type { Project } from "@/types";

export const primitiveUi: Project = {
  id: "primitive-ui",
  title: "Primitive UI Library",
  description:
    "Flutter UI library built entirely from primitive painting/layout APIs with a demo app, docs site, and lab series for multi-framework comparisons.",
  descriptionSv:
    "Flutter UI-bibliotek byggt helt med primitiva renderings- och layout-API:er med demoapp, dokumentationssajt och labbserie för ramverksjämförelser.",
  technologies: [
    "Flutter",
    "Dart",
    "CustomPaint",
    "RenderBox",
    "AnimationController",
    "Kotlin Compose",
    "React Native",
    "Next.js (docs)",
  ],
  link: "https://github.com/Berkay2002/tddc73",
  imageAlt: "Primitive UI components and demos",
  detailedDescription:
    "TDDC73 course project that implements nine UI/layout components (cards, toggle, slider, progress, buttons, inputs, VStack/HStack/ZStack) from scratch using only CustomPaint, GestureDetector, custom RenderBox, and animations. Includes multi-framework labs (Flutter, Kotlin Compose/XML, React Native) and a Next.js documentation/demo site.",
  detailedDescriptionSv:
    "Kursprojekt för TDDC73 som implementerar nio UI-/layoutkomponenter (kort, toggle, slider, progress, knappar, inputs, VStack/HStack/ZStack) från grunden med enbart CustomPaint, GestureDetector, egen RenderBox och animationer. Inkluderar fler-ramverkslabb (Flutter, Kotlin Compose/XML, React Native) samt en Next.js-dokumentations-/demosajt.",
  features: [
    "Primitive UI library with cards, toggles, sliders, progress, buttons, inputs, and stack layouts",
    "Manual rendering/layout via CustomPaint + RenderBox without high-level widgets",
    "Demo app plus Nextra-based docs site and live Vercel demo",
    "Labs comparing identical UI in Flutter, Kotlin Compose/XML, and React Native",
    "Widget tests and requirement documentation",
  ],
  featuresSv: [
    "Primitivt UI-bibliotek med kort, toggles, sliders, progress, knappar, inputs och stacklayouter",
    "Manuell rendering/layout via CustomPaint + RenderBox utan hög-nivå-widgets",
    "Demoapp samt Nextra-baserad dokumentationssajt och live Vercel-demo",
    "Labbar som jämför identisk UI i Flutter, Kotlin Compose/XML och React Native",
    "Widgettester och kravdokumentation",
  ],
  challenges: [
    "Recreating ergonomic UI without relying on Flutter's high-level widgets",
    "Aligning behavior/animations across multiple platform implementations",
    "Documenting components for both coursework and public demos",
  ],
  challengesSv: [
    "Återskapa ergonomisk UI utan att använda Flutters högnivå-widgets",
    "Matcha beteende/animationer över flera plattformsimplementationer",
    "Dokumentera komponenter både för kursen och publika demo",
  ],
  solution:
    "Built custom render objects, gesture handling, and implicit animations for each component, paired with exhaustive lab write-ups and a Next.js docs site to show usage and comparisons.",
  solutionSv:
    "Byggde egna render-objekt, gester och implicita animationer för varje komponent, tillsammans med utförliga labbrapporter och en Next.js-doksajt som visar användning och jämförelser.",
  outcome:
    "Delivered a from-scratch Flutter component library with tested primitives, a live demo, and multi-framework learnings suitable for the TDDC73 curriculum.",
  outcomeSv:
    "Levererade ett Flutter-komponentbibliotek byggt från grunden med testade primitiv, en livedemo och fler-ramverksinsikter anpassade för TDDC73-kursen.",
  githubLink: "https://github.com/Berkay2002/tddc73",
};
