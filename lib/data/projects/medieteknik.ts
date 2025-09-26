import type { Project } from "@/types";

export const medieteknik: Project = {
  id: "medieteknik",
  title: "medieteknik.nu",
  description:
    "Collaborated with a team to create and maintain the official program website for Medieteknik program in Linköping University.",
  descriptionSv:
    "Samarbetade med ett team för att skapa och underhålla den officiella programwebbplatsen för Medieteknikprogrammet vid Linköpings universitet.",
  technologies: [
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Material UI",
    "Framer Motion",
  ],
  link: "https://medieteknik.nu",
  institution: "Linköping University",
  image: "/images/projects/medieteknik.png",
  imageAlt: "Medieteknik program website",
  detailedDescription:
    "A collaborative project developed with a team of 5 students, creating a modern, responsive website for the Medieteknik (Media Technology) program at Linköping University, providing current and prospective students with program information, news, and resources.",
  detailedDescriptionSv:
    "Ett samarbetsprojekt utvecklat med ett team av 5 studenter, som skapade en modern, responsiv webbplats för Medieteknikprogrammet vid Linköpings universitet, vilket ger nuvarande och blivande studenter programinformation, nyheter och resurser.",
  features: [
    "Responsive Design: Fully adaptive layout that works across desktop, tablet, and mobile devices",
    "Dynamic Navigation: Context-aware header that changes appearance based on scroll position",
    "Interactive Elements: Animated components including carousels, cards, and motion effects",
    "Integrated Social Media: Instagram and Facebook feeds for student life showcase",
    "Responsive Typography: Typography that adapts to different screen sizes",
    "Accessible Information Architecture: Well-organized content sections for different user needs",
    "Event Showcase: Timeline layout for displaying program events",
    "Team Presentation: Grid layout with modal details for program leadership",
  ],
  featuresSv: [
    "Responsiv design: Helt anpassningsbar layout som fungerar på stationära datorer, surfplattor och mobila enheter",
    "Dynamisk navigering: Kontextmedvetet sidhuvud som ändrar utseende baserat på rullningsposition",
    "Interaktiva element: Animerade komponenter inklusive karuseller, kort och rörelseeffekter",
    "Integrerade sociala medier: Instagram- och Facebook-flöden för att visa studentlivet",
    "Responsiv typografi: Typografi som anpassar sig till olika skärmstorlekar",
    "Tillgänglig informationsarkitektur: Välorganiserade innehållssektioner för olika användarbehov",
    "Evenemangsvisning: Tidslinje-layout för att visa programevenemang",
    "Teampresentation: Rutnätslayout med modaldetaljer för programledning",
  ],
  solution:
    "Built using Next.js and TypeScript with Material UI as the component library, this project implements a mobile-first responsive design approach. The architecture employs context providers for device detection and theme management, enabling conditional rendering based on screen size.",
  solutionSv:
    "Byggd med Next.js och TypeScript med Material UI som komponentbibliotek, implementerar detta projekt en mobil-först responsiv designmetod. Arkitekturen använder kontextleverantörer för enhetsdetektering och temahantering, vilket möjliggör villkorlig rendering baserad på skärmstorlek.",
  outcome:
    "The site includes several distinctive design elements including wavy background transitions between sections, interactive cards with hover effects, dynamic image loading with Next.js Image optimization, animated page transitions using Framer Motion, mobile-friendly drawer navigation, and context-sensitive styling based on scroll position.\n\nThe codebase is organized around reusable components, with custom hooks for state management. The project connects to external APIs to display real-time content from social media platforms, enhancing the representation of student life and activities.",
  outcomeSv:
    "Webbplatsen innehåller flera distinkta designelement inklusive vågiga bakgrundsövergångar mellan sektioner, interaktiva kort med hover-effekter, dynamisk bildladdning med Next.js Image-optimering, animerade sidövergångar med Framer Motion, mobilanpassad lådnavigering och kontextkänslig styling baserat på rullningsposition.\n\nKodbasen är organiserad kring återanvändbara komponenter, med anpassade hooks för tillståndshantering. Projektet ansluter till externa API:er för att visa realtidsinnehåll från sociala medieplattformar, vilket förbättrar representationen av studentliv och aktiviteter.",
  githubLink: "https://github.com/Berkay2002/medieteknik",
};