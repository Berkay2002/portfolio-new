import type { Project } from "@/types";

export const oversee: Project = {
  id: "oversee",
  title: "Oversee: Ops & AI Dashboard",
  description:
    "Multi-tenant workshop management platform with role-based access, an AI assistant that can parse Excel files and manage reports through tool-calling, and Swedish-first analytics dashboards.",
  descriptionSv:
    "Multitenant verkstadshanteringsplattform med rollbaserad åtkomst, en AI-assistent som kan tolka Excel-filer och hantera rapporter via verktygsanrop, och svenskspråkiga analysdashboards.",
  technologies: [
    "TypeScript",
    "Next.js 16",
    "React 19",
    "Supabase",
    "shadcn/ui",
    "TanStack Table",
    "Vercel AI SDK",
    "Z.AI GLM-4.7",
    "Zod",
    "react-hook-form",
    "Recharts",
    "MDX",
    "Framer Motion",
    "Playwright",
  ],
  link: "https://oversee-fawn.vercel.app",
  imageAlt: "Oversee dashboard with KPIs, trend charts, and AI assistant",
  detailedDescription:
    "Workshop management system where organizations track vehicle repairs, assign technicians, and monitor performance. Users create reports with registration numbers, problem descriptions, categories, and time tracking. An org-scoped AI assistant powered by Z.AI GLM-4.7 handles multi-step workflows — parsing Excel uploads into reports, querying the database, generating charts, and bulk-updating records — with human-in-the-loop approval before any destructive action. The whole interface is Swedish-first, built for field teams who may not be familiar with AI tools.",
  detailedDescriptionSv:
    "Verkstadshanteringssystem där organisationer spårar fordonsreparationer, tilldelar tekniker och följer upp prestanda. Användare skapar rapporter med registreringsnummer, problembeskrivningar, kategorier och tidsuppföljning. En organisationsavgränsad AI-assistent driven av Z.AI GLM-4.7 hanterar flerstegsarbetsflöden — tolkar Excel-uppladdningar till rapporter, frågar databasen, genererar diagram och massuppdaterar poster — med mänskligt godkännande innan destruktiva åtgärder. Hela gränssnittet är svenskt, byggt för fältteam som kanske inte är vana vid AI-verktyg.",
  features: [
    "Role-based multi-tenancy: owners, admins, members, and technicians each see different data and controls, enforced by Supabase RLS",
    "AI assistant with 10+ tools for database queries, report CRUD, Excel parsing, chart generation, and web search — all scoped to the active organization",
    "Human-in-the-loop approval dialogs before the AI creates, updates, or deletes reports",
    "Report management with registration numbers, categories, technician assignment, time tracking, and bulk operations via drag-reorderable data tables",
    "Dashboard analytics: KPI cards, daily/weekly/monthly trend charts, category distribution, technician performance bars, and top reported issues",
    "Vehicle inspection tracking (Bilkollen) for recurring check-ups alongside ad-hoc repair reports",
    "Invitation system with join requests, org creation flow, and onboarding for new users",
  ],
  featuresSv: [
    "Rollbaserad multitenancy: ägare, admins, medlemmar och tekniker ser olika data och kontroller, upprätthållet av Supabase RLS",
    "AI-assistent med 10+ verktyg för databasfrågor, rapport-CRUD, Excel-tolkning, diagramgenerering och webbsökning — allt avgränsat till aktiv organisation",
    "Godkännandedialoger innan AI:n skapar, uppdaterar eller tar bort rapporter",
    "Rapporthantering med registreringsnummer, kategorier, teknikertilldelning, tidsuppföljning och massoperationer via omsorterbara datatabeller",
    "Dashboard-analys: KPI-kort, dags/vecko/månadstrender, kategorifördelning, teknikerprestanda och mest rapporterade problem",
    "Fordonsbesiktning (Bilkollen) för återkommande kontroller vid sidan av reparationsrapporter",
    "Inbjudningssystem med anslutningsförfrågningar, organisationsskapande och onboarding för nya användare",
  ],
  challenges: [
    "Z.AI's GLM-4.7 only supports Chat API, rejects system role messages, and doesn't handle images — so the integration needed workarounds for message formatting and graceful degradation when users attach files",
    "Multi-step AI workflows like Excel import (fetch technician names → category names → parse → create reports) had to preserve context across 5+ tool calls without blowing up the token budget",
    "Technicians should only see their own reports while admins see everything — getting RLS policies right for that asymmetry across all query paths took careful testing",
    "Base64 images from screenshots can exceed Vercel's 8MB request limit, so the client compresses them iteratively before sending",
  ],
  challengesSv: [
    "Z.AI:s GLM-4.7 stöder bara Chat API, avvisar systemrollmeddelanden och hanterar inte bilder — så integrationen krävde workarounds för meddelandeformatering och graceful degradation när användare bifogar filer",
    "Flerstegs-AI-arbetsflöden som Excel-import (hämta teknikernamn → kategorinamn → tolka → skapa rapporter) behövde bevara kontext över 5+ verktygsanrop utan att spränga tokenbudgeten",
    "Tekniker ska bara se sina egna rapporter medan admins ser allt — att få RLS-policyer rätt för den asymmetrin över alla frågavägar krävde noggranna tester",
    "Base64-bilder från skärmdumpar kan överskrida Vercels 8MB-gräns, så klienten komprimerar dem iterativt innan de skickas",
  ],
  solution:
    "System prompt gets prepended to the first user message to work around GLM's missing system role. AI tools use names_only flags and pagination to keep token usage low during multi-step operations. RLS policies enforce org + role scoping at the database level, and server actions validate membership before any mutation. Client-side Canvas API compression reduces image payloads by 60-80% with iterative quality reduction. Rate limiting (30 req/hour per user per org) prevents abuse without blocking normal usage.",
  solutionSv:
    "Systemprompten läggs till i första användarmeddelandet för att kringgå GLM:s avsaknad av systemroll. AI-verktyg använder names_only-flaggor och paginering för att hålla tokenanvändningen låg under flerstegsoperationer. RLS-policyer upprätthåller org- och rollscopning på databasnivå, och serveractions validerar medlemskap innan varje mutation. Klientsidans Canvas API-komprimering minskar bildpayloads med 60-80% genom iterativ kvalitetssänkning. Hastighetsbegränsning (30 förfrågningar/timme per användare per org) förhindrar missbruk utan att blockera normal användning.",
  outcome:
    "Used in production by a workshop organization to track repairs and technician workload. The AI assistant handles the bulk of data entry — field technicians snap a photo or paste an Excel export and the assistant turns it into structured reports after confirmation. What started as a KPI dashboard grew into the primary tool for day-to-day operations.",
  outcomeSv:
    "Används i produktion av en verkstadsorganisation för att spåra reparationer och teknikerarbetsbelastning. AI-assistenten hanterar merparten av datainmatningen — fälttekniker tar en bild eller klistrar in en Excel-export och assistenten omvandlar det till strukturerade rapporter efter bekräftelse. Det som började som en KPI-dashboard blev det primära verktyget för daglig drift.",
  githubLink: "https://github.com/Berkay2002/oversee",
};
