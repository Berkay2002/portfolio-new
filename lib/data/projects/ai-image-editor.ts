import type { Project } from "@/types";

export const retrofy: Project = {
  id: "retrofy",
  title: "Retrofy: AI Image Editor",
  description:
    "A modern, mobile-first AI-powered image editing application built with Next.js 15 and Google's Generative AI. Transform images with natural language prompts and maintain complete editing history with a custom retro/brutalist design system.",
  descriptionSv:
    "En modern, mobilanpassad AI-driven bildredigeringsapplikation byggd med Next.js 15 och Google's Generative AI. Transformera bilder med naturliga språkprompts och behåll komplett redigeringshistorik med ett anpassat retro/brutalistiskt designsystem.",
  technologies: [
    "Next.js 15",
    "TypeScript",
    "Google Generative AI",
    "Tailwind CSS",
    "React 19",
    "PWA",
    "Canvas API",
    "Radix UI",
  ],
  link: "https://github.com/Berkay2002/image-editor",
  image: "/images/projects/retrofy.png",
  imageAlt:
    "Retrofy interface showing retro design with image editing capabilities",
  detailedDescription:
    "Retrofy is a sophisticated, mobile-first web application that leverages Google's Gemini 2.5 Flash Image Preview API to transform images through natural language prompts. Built with Next.js 15 and featuring a distinctive retro/brutalist design system, the application provides both text-to-image generation and image-to-image editing capabilities. The project demonstrates advanced client-server architecture patterns, real-time image processing, and comprehensive state management for professional-grade editing workflows.",
  detailedDescriptionSv:
    "Retrofy är en sofistikerad, mobilanpassad webbapplikation som utnyttjar Google's Gemini 2.5 Flash Image Preview API för att transformera bilder genom naturliga språkprompts. Byggd med Next.js 15 och med ett distinkt retro/brutalistiskt designsystem, tillhandahåller applikationen både text-till-bild-generering och bild-till-bild-redigeringsmöjligheter. Projektet demonstrerar avancerade klient-server-arkitekturmönster, realtidsbildbehandling och omfattande tillståndshantering för professionella redigeringsarbetsflöden.",
  features: [
    "AI-Powered Image Editing - Transform images using natural language prompts powered by Google's Gemini 2.5 Flash Image Preview API",
    "Mobile-First Design - Zero-scroll interface optimized for mobile devices with sticky action bars and touch-friendly 44px+ targets",
    "Smart History Management - Visual thumbnail history with one-click revert functionality and linear editing workflow with branch management",
    "Advanced Image Processing - Client-side image optimization, automatic compression, format conversion, and Canvas API integration for resizing",
    "Multi-Image Support - Support for additional images in prompts, batch processing, and intelligent file size management",
    "Custom Design System - Retro/brutalist UI with bold typography (Archivo Black, Space Grotesk), high contrast, and consistent 2px borders",
    "Progressive Web App - PWA capabilities with offline support, install prompts, and automatic update notifications",
    "Real-time Processing - Server actions with React transitions for non-blocking UI updates and comprehensive loading states",
    "Responsive Architecture - Resizable desktop panels and optimized mobile layout with separate interaction patterns",
    "Production-Ready Features - Error boundaries, comprehensive error handling, TypeScript strict mode, and zero ESLint warnings",
  ],
  featuresSv: [
    "AI-driven bildredigering - Transformera bilder med naturliga språkprompts drivna av Google's Gemini 2.5 Flash Image Preview API (Retrofy)",
    "Mobilanpassad design - Noll-scroll-gränssnitt optimerat för mobila enheter med klibbiga åtgärdsstaplar och touchvänliga 44px+ mål",
    "Smart historikhantering - Visuell miniatyrhistorik med ett-klicks återställningsfunktionalitet och linjärt redigeringsarbetsflöde med grenhantering",
    "Avancerad bildbehandling - Klientsida bildoptimering, automatisk komprimering, formatkonvertering och Canvas API-integration för storleksändring",
    "Flerbild-stöd - Stöd för ytterligare bilder i prompts, batchbearbetning och intelligent filstorlekshantering",
    "Anpassat designsystem - Retro/brutalistiskt UI med fet typografi (Archivo Black, Space Grotesk), hög kontrast och konsekventa 2px-ramar",
    "Progressiv webbapp - PWA-kapacitet med offlinestöd, installationsprompts och automatiska uppdateringsaviseringar",
    "Realtidsbearbetning - Serveråtgärder med React-övergångar för icke-blockerande UI-uppdateringar och omfattande laddningstillstånd",
    "Responsiv arkitektur - Storleksändringsbara skrivbordspaneler och optimerad mobil layout med separata interaktionsmönster",
    "Produktionsklara funktioner - Felgränser, omfattande felhantering, TypeScript strikt läge och noll ESLint-varningar",
  ],
  challenges: [
    "Mobile-First Optimization - Creating a zero-scroll interface that works seamlessly across all device sizes while maintaining full functionality",
    "AI API Integration - Implementing robust error handling for Google Gemini API including rate limits, safety filters, and content moderation",
    "Image Processing Performance - Managing client-side image compression, resizing, and format conversion without blocking the UI",
    "State Management Complexity - Handling complex editing history, image caching, blob URL management, and concurrent operations",
    "Memory Management - Preventing memory leaks from blob URLs, image data, and history storage while maintaining smooth performance",
    "Progressive Web App Implementation - Integrating PWA features with advanced image editing capabilities and offline functionality",
  ],
  challengesSv: [
    "Mobilanpassad optimering - Skapa ett noll-scroll-gränssnitt som fungerar sömlöst över alla enhetsstorlekar samtidigt som full funktionalitet bibehålls",
    "AI API-integration - Implementera robust felhantering för Google Gemini API inklusive hastighetsgränser, säkerhetsfilter och innehållsmoderation",
    "Bildbehandlingsprestanda - Hantera klientsida bildkomprimering, storleksändring och formatkonvertering utan att blockera användargränssnittet",
    "Tillståndshanteringskomplexitet - Hantera komplex redigeringshistorik, bildcachning, blob URL-hantering och samtidiga operationer",
    "Minneshantering - Förhindra minnesläckor från blob-URL:er, bilddata och historiklagring samtidigt som smidig prestanda bibehålls",
    "Progressiv webbapp-implementering - Integrera PWA-funktioner med avancerade bildredigeringsmöjligheter och offlinefunktionalitet",
  ],
  solution:
    "The application is built using Next.js 15 with App Router architecture and React 19 for cutting-edge performance. The AI integration uses Google's Gemini 2.5 Flash Image Preview API through server actions, ensuring secure API key management and optimized request handling. Client-side image processing leverages the HTML5 Canvas API for efficient resizing, compression, and format conversion before server upload.\n\nKey technical implementations include:\n- Custom blob URL manager for memory-efficient image handling and caching\n- Smart image history system with linear workflow and branch management capabilities\n- Advanced mobile-first responsive design with separate desktop and mobile interaction patterns\n- Progressive Web App implementation with next-pwa for offline capabilities and install prompts\n- Custom retro/brutalist design system using Tailwind CSS with CSS custom properties\n- Comprehensive error handling covering API limits, safety filters, and processing failures\n- React Dropzone integration for drag-and-drop file uploads with extensive validation\n- Turbopack integration for development and production builds with optimized performance",
  solutionSv:
    "Applikationen är byggd med Next.js 15 med App Router-arkitektur och React 19 för banbrytande prestanda. AI-integrationen använder Google's Gemini 2.5 Flash Image Preview API genom serveråtgärder, vilket säkerställer säker API-nyckelhantering och optimerad förfråganshantering. Klientsida bildbehandling utnyttjar HTML5 Canvas API för effektiv storleksändring, komprimering och formatkonvertering före serveruppladdning.\n\nViktiga tekniska implementeringar inkluderar:\n- Anpassad blob URL-hanterare för minneseffektiv bildhantering och cachning\n- Smart bildhistoriksystem med linjärt arbetsflöde och grenhanteringsmöjligheter\n- Avancerad mobilanpassad responsiv design med separata desktop- och mobilinteraktionsmönster\n- Progressiv webbapp-implementering med next-pwa för offlinekapacitet och installationsprompts\n- Anpassat retro/brutalistiskt designsystem med Tailwind CSS med CSS anpassade egenskaper\n- Omfattande felhantering som täcker API-gränser, säkerhetsfilter och bearbetningsfel\n- React Dropzone-integration för dra-och-släpp filuppladdningar med omfattande validering\n- Turbopack-integration för utvecklings- och produktionsbyggen med optimerad prestanda",
  outcome:
    "Retrofy successfully demonstrates cutting-edge web technologies in a practical, user-focused application. The mobile-first approach ensures excellent usability across all devices, with the zero-scroll interface providing intuitive navigation. The AI integration delivers consistent, high-quality image transformations while maintaining reasonable processing times and comprehensive error handling.\n\nThe project showcases advanced React patterns including server actions, transitions, and modern state management techniques. The custom design system creates a distinctive visual identity that sets it apart from generic AI tools. The Progressive Web App implementation provides native app-like experiences with offline capabilities and installation prompts.\n\nTechnical achievements include sophisticated image processing workflows, memory-efficient blob URL management, and production-ready error handling covering all edge cases. The application handles multiple image formats, intelligent resizing, and batch processing while maintaining smooth performance. The comprehensive history management system enables professional editing workflows with easy reversion capabilities.\n\nBuilt with the latest Next.js 15 and React 19 features, the project represents state-of-the-art web development practices including Turbopack for builds, server components architecture, and modern TypeScript patterns. Retrofy demonstrates expertise in AI integration, responsive design, image processing, and production deployment while delivering a polished, accessible user experience.",
  outcomeSv:
    "Retrofy demonstrerar framgångsrikt banbrytande webbteknologier i en praktisk, användarfokuserad applikation. Det mobilanpassade tillvägagångssättet säkerställer utmärkt användbarhet över alla enheter, med noll-scroll-gränssnittet som ger intuitiv navigering. AI-integrationen levererar konsekventa, högkvalitativa bildtransformationer samtidigt som rimliga bearbetningstider och omfattande felhantering bibehålls.\n\nProjektet visar avancerade React-mönster inklusive serveråtgärder, övergångar och moderna tillståndshanteringstekniker. Det anpassade designsystemet skapar en distinkt visuell identitet som skiljer den från generiska AI-verktyg. Progressiv webbapp-implementeringen ger inbyggda app-liknande upplevelser med offlinekapacitet och installationsprompts.\n\nTekniska prestationer inkluderar sofistikerade bildbehandlingsarbetsflöden, minneseffektiv blob URL-hantering och produktionsklar felhantering som täcker alla kantfall. Applikationen hanterar flera bildformat, intelligent storleksändring och batchbearbetning samtidigt som smidig prestanda bibehålls. Det omfattande historikhanteringssystemet möjliggör professionella redigeringsarbetsflöden med enkla återställningsmöjligheter.\n\nByggd med de senaste Next.js 15 och React 19-funktionerna, representerar projektet toppmoderna webbutvecklingsmetoder inklusive Turbopack för byggen, serverkomponentarkitektur och moderna TypeScript-mönster. Retrofy demonstrerar expertis inom AI-integration, responsiv design, bildbehandling och produktionsutplacering samtidigt som en polerad, tillgänglig användarupplevelse levereras.",
  githubLink: "https://github.com/Berkay2002/image-editor",
};
