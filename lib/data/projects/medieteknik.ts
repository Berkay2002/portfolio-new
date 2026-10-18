import type { Project } from "@/types";

export const medieteknik: Project = {
  id: "medieteknik",
  title: "medieteknik.nu",
  description:
    "Moved the Medieteknik student section's website at Linköping University to the Next.js App Router and Tailwind CSS, as one of several student contributors.",
  descriptionSv:
    "Flyttade Medietekniksektionens webbplats vid Linköpings universitet till Next.js App Router och Tailwind CSS, som en av flera studenter som bidragit.",
  technologies: [
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Radix UI",
    "Vercel Analytics",
  ],
  link: "https://medieteknik.nu",
  institution: "Linköping University",
  image: "/images/projects/medieteknik.png",
  imageAlt: "Medieteknik student section website",
  imageAltSv: "Webbplatsen för sektionen Medieteknik",
  detailedDescription:
    "The website of the Medieteknik student section at Linköping University, built by students over several years and now on Next.js 16 (App Router), React 19 and Tailwind CSS 4. The site is in Swedish, adapts its layout to phone, tablet and desktop, and covers program values, student life, the section board, partners, and Medieteknikdagen with interactive motion cues.",
  detailedDescriptionSv:
    "Medietekniksektionens webbplats vid Linköpings universitet, byggd av studenter under flera år och numera på Next.js 16 (App Router), React 19 och Tailwind CSS 4. Sidan är på svenska, anpassar layouten efter mobil, surfplatta och dator och tar upp programmets värderingar, studentliv, sektionens styrelse, samarbetspartners och Medieteknikdagen med interaktiva rörelseinslag.",
  features: [
    "Draggable hero cubes: Framer Motion drag interactions sized dynamically per device",
    "Mobile-aware layout: MobileStateProvider drives typography and component sizing",
    "Values grid: JSON-driven cards that summarize program pillars with imagery",
    "Student life: Nolle-P, housing and recurring section events, with links to student associations",
    "Section page: Board member cards that open a detail dialog, plus a link to the section's documents",
    "News feed: Posts from the section's Facebook page",
    "Partners: Partner section with logos and links, next to a Medieteknikdagen block that links to its own site",
    "Carousel and wavy dividers: a Framer Motion carousel on a wave-edged band",
    "Analytics: Vercel Analytics and Speed Insights wired into the layout",
  ],
  featuresSv: [
    "Dragbara kuber i hero: Framer Motion-drag med kubstorlek som anpassas efter enhet",
    "Layout efter enhet: MobileStateProvider styr typografi och komponentstorlekar",
    "Värderingskort: kort från JSON som beskriver programmets grundpelare med bilder",
    "Studentliv: Nolle-P, boende och sektionens återkommande event, med länkar till studentföreningar",
    "Sektionssida: Styrelsekort som öppnar en dialogruta med mer information, plus länk till sektionens dokument",
    "Nyhetsflöde: Inlägg från sektionens Facebook-sida",
    "Samarbeten: Sektion för partners med logotyper och länkar, bredvid ett Medieteknikdagen-block som länkar till dess egen sida",
    "Karusell och vågiga avdelare: en Framer Motion-karusell på ett band med vågkanter",
    "Analys: Vercel Analytics och Speed Insights inkopplade i layouten",
  ],
  solution:
    "My part: in 2025 I moved the site from the Pages Router to the Next.js 16 App Router, replaced CSS modules and inline styles with Tailwind CSS, added shadcn/ui (Radix) components, and wired Vercel Analytics and Speed Insights into the root layout. In 2023 I worked on an Instagram image carousel and the documents section on the section page. The hero cubes, carousel, MobileStateProvider and JSON content come from the section's other student developers.",
  solutionSv:
    "Min del: 2025 flyttade jag sidan från Pages Router till Next.js 16 App Router, bytte ut CSS-moduler och inline-stilar mot Tailwind CSS, lade till shadcn/ui-komponenter (Radix) och kopplade in Vercel Analytics och Speed Insights i rotlayouten. 2023 arbetade jag med en bildkarusell från Instagram och dokumentdelen på sektionssidan. Kuberna i hero, karusellen, MobileStateProvider och JSON-innehållet kommer från sektionens andra studentutvecklare.",
  outcome:
    "The section's site runs on the App Router with Tailwind CSS, and its content (board, values, events, partners, carousel) lives in JSON files instead of in the components.",
  outcomeSv:
    "Sektionens webbplats körs på App Router med Tailwind CSS, och innehållet (styrelse, värderingar, event, partners, karusell) ligger i JSON-filer i stället för i komponenterna.",
  githubLink: "https://github.com/webbchef/medieteknik",
};