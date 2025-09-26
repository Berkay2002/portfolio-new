import type { Project } from "@/types";

export const livenotes: Project = {
  id: "livenotes",
  title: "LiveNotes",
  description:
    "A real-time collaborative document editor built with Next.js 14 and Liveblocks. It offers a Google Docs-like experience with rich text editing and real-time collaboration features in a modern, responsive interface.",
  descriptionSv:
    "En realtidsbaserad samarbetseditor för dokument byggd med Next.js 14 och Liveblocks. Den erbjuder en Google Docs-liknande upplevelse med funktioner för avancerad textredigering och realtidssamarbete i ett modernt, responsivt gränssnitt.",
  technologies: [
    "TypeScript",
    "Next.js",
    "Liveblocks",
    "Lexical",
    "Tailwind CSS",
    "Clerk",
    "Radix UI",
  ],
  link: "https://livenotes-iota.vercel.app/",
  image: "/images/projects/livenotes.png",
  imageAlt: "LiveNotes collaborative text editor interface",
  detailedDescription:
    "LiveNotes is a real-time collaborative document editor built with Next.js 14 and Liveblocks. It offers a Google Docs-like experience with rich text editing and real-time collaboration features in a modern, responsive interface.",
  detailedDescriptionSv:
    "LiveNotes är en realtidsbaserad samarbetseditor för dokument byggd med Next.js 14 och Liveblocks. Den erbjuder en Google Docs-liknande upplevelse med funktioner för avancerad textredigering och realtidssamarbete i ett modernt, responsivt gränssnitt.",
  features: [
    "Real-time Collaboration - Multiple users can edit documents simultaneously with changes synced instantly",
    "Rich Text Editor - Format text with headings, styling, and alignment options",
    "Commenting System - Add comments to specific text selections and resolve discussions",
    "Document Sharing - Control access with editor and viewer permission levels",
    "User Presence - See who's currently viewing or editing the document",
    "Progressive Web App - Install on mobile and desktop for offline capabilities",
    "Responsive Design - Optimized UI for both desktop and mobile devices",
    "Document Management - Create, search, and organize documents from a central dashboard",
    "Real-time Notifications - Get notified of mentions and document shares",
  ],
  featuresSv: [
    "Realtidssamarbete - Flera användare kan redigera dokument samtidigt med ändringar som synkroniseras direkt",
    "Avancerad textredigerare - Formatera text med rubriker, stilar och justeringsalternativ",
    "Kommentarsystem - Lägg till kommentarer till specifika textmarkeringar och lös diskussioner",
    "Dokumentdelning - Kontrollera åtkomst med behörighetsnivåer för redaktörer och visare",
    "Användarvisning - Se vem som för närvarande visar eller redigerar dokumentet",
    "Progressiv webbapp - Installera på mobil och dator för offlinefunktionalitet",
    "Responsiv design - Optimerat användargränssnitt för både stationära och mobila enheter",
    "Dokumenthantering - Skapa, sök och organisera dokument från en central instrumentpanel",
    "Realtidsaviseringar - Få meddelanden om omnämnanden och dokumentdelningar",
  ],
  solution:
    "Built with Next.js 14, TypeScript, and Tailwind CSS, LiveNotes leverages Liveblocks for real-time collaboration and Lexical for rich text editing. Authentication is handled by Clerk, with UI components from Radix UI for accessibility and consistency.",
  solutionSv:
    "Byggd med Next.js 14, TypeScript och Tailwind CSS, använder LiveNotes Liveblocks för realtidssamarbete och Lexical för avancerad textredigering. Autentisering hanteras av Clerk, med UI-komponenter från Radix UI för tillgänglighet och konsistens.",
  outcome:
    "The application features optimized performance with debounced searches, optimistic UI updates, and progressive enhancement techniques. The server-components architecture of Next.js 14 provides excellent performance while maintaining a great developer experience. This project demonstrates advanced frontend development skills including real-time data synchronization, complex state management, and responsive UI design principles.",
  outcomeSv:
    "Applikationen har optimerad prestanda med fördröjda sökningar, optimistiska UI-uppdateringar och progressiva förbättringstekniker. Serverkomponentarkitekturen i Next.js 14 ger utmärkt prestanda samtidigt som den upprätthåller en bra utvecklarupplevelse. Detta projekt visar avancerade kunskaper inom frontend-utveckling, inklusive realtidsdatasynkronisering, komplex tillståndshantering och responsiva UI-designprinciper.",
  githubLink: "https://github.com/Berkay2002/LiveNotes",
};