import type { Project } from "@/types";

export const medieteknik: Project = {
  id: "medieteknik",
  title: "medieteknik.nu",
  description:
    "Rebuilt the official Medieteknik program site for Linköping University with a modern App Router stack and Swedish-first UX.",
  descriptionSv:
    "Byggde om den officiella webbplatsen för Medieteknikprogrammet vid Linköpings universitet med modern App Router-stack och svenskspråkig UX.",
  technologies: [
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel Analytics",
  ],
  link: "https://medieteknik.nu",
  institution: "Linköping University",
  image: "/images/projects/medieteknik.png",
  imageAlt: "Medieteknik program website",
  detailedDescription:
    "A refreshed Medieteknik program website built on Next.js 16 (App Router), React 19, and Tailwind CSS 4. The site is written in Swedish, optimized for mobile-first browsing, and highlights program values, student life, and Medieteknikdagen with interactive motion cues.",
  detailedDescriptionSv:
    "En uppdaterad webbplats för Medieteknikprogrammet byggd på Next.js 16 (App Router), React 19 och Tailwind CSS 4. Sidan är på svenska, mobilanpassad och lyfter programmets värderingar, studentliv och Medieteknikdagen med interaktiva rörelseinslag.",
  features: [
    "Draggable hero cubes: Framer Motion drag interactions sized dynamically per device",
    "Mobile-aware layout: MobileStateProvider drives typography and component sizing",
    "Values grid: JSON-driven cards that summarize program pillars with imagery",
    "Student life focus: Highlighted sections for Nolle-P and links to associations",
    "Event CTA: Medieteknikdagen block with external registration link",
    "Carousel + wavy separators: Motion carousel with themed background transitions",
    "Analytics: Vercel Analytics and Speed Insights wired into the layout",
  ],
  featuresSv: [
    "Draggable kuber i hero: Framer Motion-drag som skalar efter enhet",
    "Mobilmedveten layout: MobileStateProvider styr typografi och komponentstorlek",
    "Värde-kort: JSON-baserade kort som beskriver programmets pelare med bilder",
    "Fokus på studentliv: Sektioner om Nolle-P och länkar till föreningar",
    "Event-CTA: Medieteknikdagen-block med extern anmälningslänk",
    "Karusell + vågseparators: Motionskarusell med tematiska bakgrundsövergångar",
    "Analys: Vercel Analytics och Speed Insights integrerade i layouten",
  ],
  solution:
    "Built with Next.js 16 App Router and TypeScript, styled with Tailwind CSS 4. A MobileStateProvider tracks device breakpoints to adapt drag targets and typography, while Framer Motion powers the interactive cubes and carousel. Content (values, carousel items) is loaded from JSON for easy updates, and Vercel Analytics/Speed Insights are wired through the root layout.",
  solutionSv:
    "Byggd med Next.js 16 App Router och TypeScript, stylad med Tailwind CSS 4. MobileStateProvider spårar brytpunkter för att anpassa dragytor och typografi, medan Framer Motion driver de interaktiva kuberna och karusellen. Innehåll (värden, karusellposter) hämtas från JSON för enkla uppdateringar, och Vercel Analytics/Speed Insights kopplas via root layout.",
  outcome:
    "Delivered a Swedish-first, responsive experience with motion-driven hero cubes, carousel storytelling, and clearly segmented sections for värderingar, studentliv och Medieteknikdagen. The mobile-aware context keeps layouts legible across devices, and analytics provide insight into engagement after launch.",
  outcomeSv:
    "Levererade en svenskspråkig, responsiv upplevelse med rörelsedrivna hero-kuber, karusellberättande och tydligt avgränsade sektioner för värderingar, studentliv och Medieteknikdagen. Den mobilmedvetna kontexten håller layouten läsbar på alla enheter och analyser ger insikter om engagemang efter lansering.",
  githubLink: "https://github.com/webbchef/medieteknik",
};