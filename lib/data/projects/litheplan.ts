import type { Project } from "@/types";

export const litheplan: Project = {
  id: "litheplan",
  title: "LiTHePlan",
  description:
    "A comprehensive academic planning platform for Linköping University civil engineering students to discover, explore, and plan their 90hp master's degree courses across 15 different specializations. Features 475 courses, intelligent course conflict detection, and profile sharing capabilities.",
  descriptionSv:
    "En omfattande akademisk planeringsplattform för civilingenjörsstudenter vid Linköpings universitet att upptäcka, utforska och planera sina 90hp masterexamenskurser över 15 olika specialiseringar. Har 475 kurser, intelligent kurskonfliktdetektering och profildelningsfunktioner.",
  technologies: [
    "TypeScript",
    "Next.js 15",
    "React 19",
    "Tailwind CSS",
    "shadcn/ui",
    "Supabase",
    "PostgreSQL",
    "@hello-pangea/dnd",
    "Lucide React",
    "Radix UI",
  ],
  link: "https://www.litheplan.tech",
  image: "/images/projects/litheplan.png",
  imageAlt: "LiTHePlan course planning interface with interactive pinboard",
  detailedDescription:
    "LiTHePlan is a sophisticated academic planning platform specifically designed for civil engineering master's students at Linköping University. The application addresses the significant challenge students face when planning their final 90hp (terms 7-9) by providing centralized access to course information that is typically scattered across multiple university portals. With a comprehensive database of 475 courses across 15 official civil engineering programs, LiTHePlan empowers students to discover cross-disciplinary opportunities and create personalized academic profiles that align with their career goals.",
  detailedDescriptionSv:
    "LiTHePlan är en sofistikerad akademisk planeringsplattform specifikt designad för civilingenjörsmasterstudenter vid Linköpings universitet. Applikationen tar itu med den betydande utmaning studenter står inför när de planerar sina slutliga 90hp (termin 7-9) genom att tillhandahålla centraliserad tillgång till kursinformation som vanligtvis är spridd över flera universitetsportaler. Med en omfattande databas med 475 kurser över 15 officiella civilingenjörsprogram ger LiTHePlan studenter möjlighet att upptäcka tvärvetenskapliga möjligheter och skapa personliga akademiska profiler som stämmer överens med deras karriärmål.",
  features: [
    "Comprehensive Course Database - 475 master's level courses (terms 7-9) covering all 15 civil engineering programs at Linköping University",
    "Intelligent Course Discovery - Advanced filtering by multiple criteria including term, block, pace, campus, and 25+ program specializations",
    "Interactive Profile Builder - Visual 'pinboard' interface for organizing courses across 3 semesters with drag-and-drop functionality",
    "Course Conflict Resolution - Sophisticated conflict detection system with user-friendly modal for resolving scheduling conflicts",
    "Requirements Validation - Real-time tracking of degree requirements including 90hp total and 30hp advanced course minimums",
    "User Authentication & Profile Sharing - Supabase-powered user accounts with persistent profile storage and shareable URLs",
    "OBS Warning System - Special alerts for courses with restrictions, prerequisites, or limited availability",
    "Mobile-Responsive Design - Fully responsive interface optimized for desktop, tablet, and mobile devices",
    "Advanced Search Functionality - Comprehensive search with instant results and filter persistence",
    "Database Statistics & Analytics - Real-time database statistics and course distribution analysis",
  ],
  featuresSv: [
    "Omfattande kursdatabas - 475 masternivåkurser (termin 7-9) som täcker alla 15 civilingenjörsprogram vid Linköpings universitet",
    "Intelligent kursupptäckt - Avancerad filtrering med flera kriterier inklusive termin, block, studietakt, campus och 25+ programspecialiseringar",
    "Interaktiv profilbyggare - Visuellt 'anslagstavla'-gränssnitt för att organisera kurser över 3 terminer med dra-och-släpp-funktionalitet",
    "Kurskonflik-resolution - Sofistikerat konfliktdetekteringssystem med användarvänlig modal för att lösa schemaläggningskonflikter",
    "Kravvalidering - Realtidsspårning av examenskrav inklusive 90hp totalt och 30hp avancerade kurser minimum",
    "Användarautentisering och profildelning - Supabase-driven användarkonton med persistent profillagring och delbara URL:er",
    "OBS-varningssystem - Speciella varningar för kurser med restriktioner, förkunskapskrav eller begränsad tillgänglighet",
    "Mobil-responsiv design - Helt responsivt gränssnitt optimerat för dator, surfplatta och mobila enheter",
    "Avancerad sökfunktionalitet - Omfattande sökning med omedelbara resultat och filterpersistering",
    "Databasstatistik och analys - Realtids databasstatistik och kursfördelningsanalys",
  ],
  challenges: [
    "Data Centralization - Consolidating course information from multiple scattered university systems into a single, coherent database",
    "Complex Course Relationships - Managing intricate course dependencies, scheduling conflicts, and prerequisite chains",
    "User Experience Complexity - Balancing comprehensive functionality with intuitive navigation for 475+ courses across multiple programs",
    "Real-time Conflict Detection - Implementing sophisticated algorithms to detect and resolve scheduling conflicts in real-time",
    "Mobile Interaction Design - Creating touch-friendly drag-and-drop interactions that work seamlessly across all device types",
    "Database Performance - Optimizing query performance for complex filtering operations across large course datasets",
  ],
  challengesSv: [
    "Datacentralisering - Konsolidera kursinformation från flera spridda universitetssystem till en enda, sammanhängande databas",
    "Komplexa kursrelationer - Hantera invecklade kursberoenden, schemaläggningskonflikter och förkunskapskedjor",
    "Användarupplevelskomplexitet - Balansera omfattande funktionalitet med intuitiv navigering för 475+ kurser över flera program",
    "Realtids konfliktdetektering - Implementera sofistikerade algoritmer för att upptäcka och lösa schemaläggningskonflikter i realtid",
    "Mobil interaktionsdesign - Skapa touchvänliga dra-och-släpp-interaktioner som fungerar sömlöst på alla enhetstyper",
    "Databasprestanda - Optimera frågeprestanda för komplexa filtreringsoperationer över stora kursdataset",
  ],
  solution:
    "LiTHePlan is built with a modern tech stack using Next.js 15 and React 19 for optimal performance and developer experience. The application leverages Supabase as the backend-as-a-service platform, providing PostgreSQL database, user authentication, and real-time capabilities. The course database contains 475 carefully curated courses with comprehensive metadata including descriptions, credits, levels, scheduling information, and program affiliations.\n\nKey technical implementations include:\n- Advanced filtering system with real-time updates and filter persistence\n- Sophisticated course conflict detection using temporal overlap algorithms\n- Interactive drag-and-drop interface powered by @hello-pangea/dnd\n- Responsive design system using Tailwind CSS and shadcn/ui components\n- Real-time requirements validation with credit tracking and compliance checking\n- User authentication and profile management with Supabase Auth\n- Database statistics generation script for comprehensive course analytics\n- Mobile-optimized touch interactions with skeleton loading states",
  solutionSv:
    "LiTHePlan är byggd med en modern teknikstack som använder Next.js 15 och React 19 för optimal prestanda och utvecklarupplevelse. Applikationen utnyttjar Supabase som backend-as-a-service-plattform, vilket ger PostgreSQL-databas, användarautentisering och realtidskapacitet. Kursdatabasen innehåller 475 noggrant kurerade kurser med omfattande metadata inklusive beskrivningar, poäng, nivåer, schemaläggningsinformation och programtillhörigheter.\n\nViktiga tekniska implementeringar inkluderar:\n- Avancerat filtreringssystem med realtidsuppdateringar och filterpersistering\n- Sofistikerad kurskonflik-detektering med temporala överlappningsalgoritmer\n- Interaktivt dra-och-släpp-gränssnitt drivet av @hello-pangea/dnd\n- Responsivt designsystem med Tailwind CSS och shadcn/ui-komponenter\n- Realtidskravvalidering med kreditspårning och efterlevnadskontroll\n- Användarautentisering och profilhantering med Supabase Auth\n- Databasstatistikgenereringsskript för omfattande kursanalys\n- Mobiloptimerade touchinteraktioner med skelettladdningstillstånd",
  outcome:
    "LiTHePlan successfully transforms the academic planning experience for civil engineering students at Linköping University. The platform has demonstrated significant impact by providing centralized access to course information that was previously scattered across multiple systems. Students can now efficiently discover courses from different specializations, create comprehensive 90hp study plans, and validate their profiles against degree requirements in real-time.\n\nThe application's sophisticated course conflict detection system prevents scheduling errors and ensures students can build viable academic paths. The profile sharing functionality facilitates collaboration with academic advisors and enables students to seek guidance on their customized study plans. The responsive design ensures accessibility across all devices, making academic planning possible anywhere.\n\nTechnical achievements include processing 475+ courses with complex relationships, implementing real-time collaborative features, and maintaining excellent performance with advanced filtering and search capabilities. The project demonstrates expertise in full-stack development, database design, user experience optimization, and academic domain modeling. LiTHePlan represents a significant contribution to educational technology, providing a scalable solution for academic planning that could be adapted for other universities and programs.",
  outcomeSv:
    "LiTHePlan transformerar framgångsrikt den akademiska planeringsupplevelsen för civilingenjörsstudenter vid Linköpings universitet. Plattformen har visat betydande påverkan genom att tillhandahålla centraliserad tillgång till kursinformation som tidigare var spridd över flera system. Studenter kan nu effektivt upptäcka kurser från olika specialiseringar, skapa omfattande 90hp studieplaner och validera sina profiler mot examenskrav i realtid.\n\nApplikationens sofistikerade kurskonflik-detekteringssystem förhindrar schemaläggningsfel och säkerställer att studenter kan bygga genomförbara akademiska vägar. Profildelningsfunktionen underlättar samarbete med studievägledare och gör det möjligt för studenter att söka vägledning om sina anpassade studieplaner. Den responsiva designen säkerställer tillgänglighet på alla enheter, vilket gör akademisk planering möjlig var som helst.\n\nTekniska prestationer inkluderar bearbetning av 475+ kurser med komplexa relationer, implementering av realtidssamarbetsfunktioner och upprätthållande av utmärkt prestanda med avancerad filtrering och sökkapacitet. Projektet demonstrerar expertis inom fullstack-utveckling, databasdesign, användarupplevelseoptimering och akademisk domänmodellering. LiTHePlan representerar ett betydande bidrag till utbildningsteknologi, vilket ger en skalbar lösning för akademisk planering som kan anpassas för andra universitet och program.",
  githubLink: "https://github.com/Berkay2002/LiTHePlan",
};