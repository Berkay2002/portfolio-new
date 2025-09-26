import type { Project } from "@/types";

export const kliv: Project = {
  id: "kliv",
  title: "Kliv Idrottsförening",
  description:
    "A modern, responsive website for Kliv Idrottsförening - a Swedish sports association specializing in judo and martial arts. Features Google Calendar integration, email systems, and a sophisticated monochromatic design system with red accents.",
  descriptionSv:
    "En modern, responsiv webbplats för Kliv Idrottsförening - en svensk idrottsförening specialiserad på judo och kampsport. Har Google Calendar-integration, e-postsystem och ett sofistikerat monokromt designsystem med röda accenter.",
  technologies: [
    "TypeScript",
    "Next.js 15",
    "React 19",
    "Tailwind CSS",
    "shadcn/ui",
    "Google Calendar API",
    "Google Maps API",
    "Nodemailer",
    "Redis",
    "Framer Motion",
    "Clerk Auth",
    "Cloudinary",
  ],
  link: "https://kliv.vercel.app",
  image: "/images/projects/kliv.png",
  imageAlt: "Kliv Idrottsförening website homepage with judo theme",
  detailedDescription:
    "A comprehensive website solution for Kliv Idrottsförening Botkyrka, a Swedish sports association specializing in judo and martial arts. Built with Next.js 15 and a modern tech stack, the site serves as the organization's digital headquarters, providing information about programs, events, and community engagement. The website features real-time calendar integration, automated email notifications, and a custom design system that reflects the organization's identity through a sophisticated monochromatic theme with strategic red accents.",
  detailedDescriptionSv:
    "En omfattande webbplatslösning för Kliv Idrottsförening Botkyrka, en svensk idrottsförening specialiserad på judo och kampsport. Byggd med Next.js 15 och en modern teknikstack, fungerar webbplatsen som organisationens digitala huvudkvarter och ger information om program, evenemang och samhällsengagemang. Webbplatsen har realtids kalenderintegration, automatiska e-postaviseringar och ett anpassat designsystem som speglar organisationens identitet genom ett sofistikerat monokromt tema med strategiska röda accenter.",
  features: [
    "Real-time Google Calendar Integration - Live event synchronization with webhook notifications for automatic updates",
    "Comprehensive Admin Dashboard - Event management system with approval workflows and Clerk authentication",
    "Email Notification System - Automated subscriber notifications and contact form handling with Nodemailer",
    "Custom Design System - Monochromatic theme with warm/cool variants and Kliv red accent colors",
    "Multi-page Architecture - Home, activities, judo programs, contact, and administrative sections",
    "Team Management - Dynamic team member profiles with contact information and role descriptions",
    "Event Creation & Management - User-friendly interfaces for creating, editing, and managing calendar events",
    "Image Upload Integration - Cloudinary integration for event images and media management",
    "Responsive Mobile Design - Mobile-first approach optimized for all device sizes",
    "Redis Data Storage - Efficient subscriber management and caching system",
    "Dark/Light Mode Support - Complete theme system with seamless mode switching",
    "Accessibility Features - ARIA labels, semantic HTML, and keyboard navigation support",
    "Analytics Integration - Vercel Analytics for performance monitoring and user insights",
  ],
  featuresSv: [
    "Realtids Google Calendar-integration - Live-evenemangssynkronisering med webhook-aviseringar för automatiska uppdateringar",
    "Omfattande administratörspanel - Evenemangshanteringssystem med godkännandearbetsflöden och Clerk-autentisering",
    "E-postaviseringssystem - Automatiska prenumerantaviseringar och kontaktformulärhantering med Nodemailer",
    "Anpassat designsystem - Monokromt tema med varma/kalla varianter och Kliv röda accentfärger",
    "Flersidiga arkitektur - Hem, aktiviteter, judoprogram, kontakt och administrativa sektioner",
    "Teamhantering - Dynamiska teammedlemsprofiler med kontaktinformation och rollbeskrivningar",
    "Evenemangskapande och hantering - Användarvänliga gränssnitt för att skapa, redigera och hantera kalenderevenemang",
    "Bilduppladdningsintegration - Cloudinary-integration för evenemangsbilder och mediehantering",
    "Responsiv mobildesign - Mobil-först-tillvägagångssätt optimerat för alla enhetsstorlekar",
    "Redis-datalagring - Effektiv prenumeranthantering och cachesystem",
    "Mörk/ljust läge-stöd - Komplett temasystem med sömlös lägesväxling",
    "Tillgänglighetsfunktioner - ARIA-etiketter, semantisk HTML och tangentbordsnavigationsstöd",
    "Analysintegration - Vercel Analytics för prestandaövervakning och användarinsikter",
  ],
  challenges: [
    "Google Calendar Webhook Integration - Implementing reliable real-time synchronization with Google's API limitations and webhook setup complexity",
    "Admin Authentication Flow - Designing secure admin access with Clerk while maintaining user-friendly event creation workflows",
    "Complex State Management - Managing pending vs. existing events across multiple components with proper error handling",
    "Mobile-First Responsive Design - Creating touch-friendly interfaces for event management on mobile devices",
    "Email System Reliability - Ensuring consistent delivery of notifications across different email providers",
    "Custom Theme Implementation - Building a flexible design system that works across light/dark modes with brand consistency",
  ],
  challengesSv: [
    "Google Calendar Webhook-integration - Implementera tillförlitlig realtidssynkronisering med Googles API-begränsningar och webhook-inställningskomplexitet",
    "Admin-autentiseringsflöde - Designa säker administratörsåtkomst med Clerk samtidigt som användarvänliga evenemangskapande-arbetsflöden bibehålls",
    "Komplex tillståndshantering - Hantera väntande vs. befintliga evenemang över flera komponenter med korrekt felhantering",
    "Mobil-först responsiv design - Skapa touchvänliga gränssnitt för evenemangshantering på mobila enheter",
    "E-postsystemtillförlitlighet - Säkerställa konsekvent leverans av aviseringar över olika e-postleverantörer",
    "Anpassad temaimplementering - Bygga ett flexibelt designsystem som fungerar över ljusa/mörka lägen med varumärkeskonsistens",
  ],
  solution:
    "The website is built using Next.js 15 with App Router architecture and React 19 for optimal performance. The backend integrates multiple Google Cloud services including Calendar API for event management and Maps API for location services. Clerk provides robust authentication for admin users, while Redis handles subscriber data storage and caching. The email system uses Nodemailer with SMTP configuration for reliable message delivery.\n\nKey technical implementations include:\n- Webhook system for real-time Google Calendar synchronization with proper error handling\n- Admin dashboard with tabs interface for managing both pending and existing events\n- Image upload system using Cloudinary for event media management\n- Custom CSS variables system for theming with warm/cool color variants\n- Mobile-optimized UI components using shadcn/ui and Framer Motion animations\n- Redis-based subscriber management with email notification workflows\n- Environment variable validation and security best practices\n- Comprehensive API routes for calendar operations, email handling, and diagnostics",
  solutionSv:
    "Webbplatsen är byggd med Next.js 15 med App Router-arkitektur och React 19 för optimal prestanda. Backend integrerar flera Google Cloud-tjänster inklusive Calendar API för evenemangshantering och Maps API för platstjänster. Clerk tillhandahåller robust autentisering för administratörer, medan Redis hanterar prenumerantdatalagring och cachning. E-postsystemet använder Nodemailer med SMTP-konfiguration för tillförlitlig meddelandeleverans.\n\nViktiga tekniska implementeringar inkluderar:\n- Webhook-system för realtids Google Calendar-synkronisering med korrekt felhantering\n- Administratörspanel med flik-gränssnitt för att hantera både väntande och befintliga evenemang\n- Bilduppladdningssystem med Cloudinary för evenemangsmediehantering\n- Anpassat CSS-variabelsystem för tematisering med varma/kalla färgvarianter\n- Mobiloptimerade UI-komponenter med shadcn/ui och Framer Motion-animationer\n- Redis-baserad prenumeranthantering med e-postaviseringsarbetsflöden\n- Miljövariabelvalidering och säkerhetsbästa praxis\n- Omfattande API-rutter för kalenderoperationer, e-posthantering och diagnostik",
  outcome:
    "Kliv Idrottsförening now has a professional web presence that significantly enhances their community outreach and member engagement capabilities. The real-time calendar integration ensures event information is always current, while the automated notification system keeps members informed of upcoming activities. The admin dashboard streamlines event management workflows, allowing organization leaders to efficiently manage content and approve submissions.\n\nThe website successfully demonstrates enterprise-level features in a community organization context, including secure authentication, real-time data synchronization, and responsive design principles. The custom design system creates a cohesive brand experience that reflects the organization's professional approach to martial arts instruction. Performance optimizations including image compression, lazy loading, and efficient caching ensure fast loading times across all devices.\n\nThe project showcases advanced full-stack development skills including Google Cloud API integration, real-time webhook processing, email automation, and modern web development practices. Built with accessibility in mind, the site serves as an inclusive platform for community engagement and represents a significant upgrade from traditional static websites to a dynamic, data-driven web application.",
  outcomeSv:
    "Kliv Idrottsförening har nu en professionell webbnärvaro som avsevärt förbättrar deras samhällsutåtriktade verksamhet och medlemsengagemang. Realtids kalenderintegration säkerställer att evenemangsinformation alltid är aktuell, medan det automatiska aviseringssystemet håller medlemmar informerade om kommande aktiviteter. Administratörspanelen effektiviserar evenemangshanteringsarbetsflöden och tillåter organisationsledare att effektivt hantera innehåll och godkänna inlämningar.\n\nWebbplatsen demonstrerar framgångsrikt företagsnivåfunktioner i en samhällsorganisationskontext, inklusive säker autentisering, realtids datasynkronisering och responsiva designprinciper. Det anpassade designsystemet skapar en sammanhängande varumärkesupplevelse som speglar organisationens professionella tillvägagångssätt för kampsportsundervisning. Prestandaoptimeringar inklusive bildkomprimering, lat laddning och effektiv cachning säkerställer snabba laddningstider på alla enheter.\n\nProjektet visar avancerade fullstack-utvecklingskunskaper inklusive Google Cloud API-integration, realtids webhook-bearbetning, e-postautomation och moderna webbutvecklingsmetoder. Byggd med tillgänglighet i åtanke, fungerar webbplatsen som en inkluderande plattform för samhällsengagemang och representerar en betydande uppgradering från traditionella statiska webbplatser till en dynamisk, datadriven webbapplikation.",
  githubLink: "https://github.com/Berkay2002/kliv",
};