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
    "Tailwind CSS",
    "Supabase",
    "shadcn/ui",
    "TanStack Table",
    "TanStack Query",
    "Vercel AI SDK",
    "Z.AI GLM-4.7",
    "Zod",
    "react-hook-form",
    "Recharts",
    "MDX",
    "Framer Motion",
    "Firecrawl",
    "Vitest",
    "Playwright",
  ],
  link: "https://oversee-fawn.vercel.app",
  imageAlt: "Oversee dashboard with KPIs, trend charts, and AI assistant",
  imageAltSv: "Oversee-dashboarden med KPI:er, trenddiagram och AI-assistent",
  detailedDescription:
    "Workshop management system where organizations track vehicle repairs, assign technicians, and monitor performance. Users create reports with registration numbers, problem descriptions, categories, and time tracking. An org-scoped AI assistant powered by Z.AI GLM-4.7 handles multi-step workflows — parsing Excel uploads into reports, querying the database, generating charts, and bulk-updating records — with human-in-the-loop approval before any destructive action. The whole interface is Swedish-first, built for field teams who may not be familiar with AI tools.",
  detailedDescriptionSv:
    "Verkstadshanteringssystem där organisationer spårar fordonsreparationer, tilldelar tekniker och följer upp prestanda. Användare skapar rapporter med registreringsnummer, problembeskrivningar, kategorier och tidsuppföljning. En organisationsavgränsad AI-assistent driven av Z.AI GLM-4.7 hanterar flerstegsarbetsflöden — tolkar Excel-uppladdningar till rapporter, frågar databasen, genererar diagram och massuppdaterar poster — med mänskligt godkännande innan destruktiva åtgärder. Hela gränssnittet är svenskt, byggt för fältteam som kanske inte är vana vid AI-verktyg.",
  features: [
    "Role-based multi-tenancy: owners, admins, members, and technicians each see different data and controls, enforced by Supabase RLS",
    "AI assistant with 20+ tools for database queries, report CRUD, Excel parsing, chart generation, analytics, and web search — all scoped to the active organization",
    "Human-in-the-loop approval dialogs before the AI creates, updates, or deletes reports",
    "Report management with registration numbers, categories, technician assignment, time tracking, and bulk operations via drag-reorderable data tables",
    "Dashboard analytics: KPI cards, daily/weekly/monthly trend charts, category distribution, technician performance bars, and top reported issues, plus SLA, flow, WIP, and insurance analytics for vehicle cases",
    "Vehicle case tracking (Bilkollen) with funding source, insurance status, inline editing, a change log, and an archive, alongside repair reports",
    "Realtime in-app messaging with direct and group conversations, built on Supabase Realtime",
    "Invitation system with join requests, org creation flow, and onboarding for new users",
  ],
  featuresSv: [
    "Rollbaserad multitenancy: ägare, admins, medlemmar och tekniker ser olika data och kontroller, upprätthållet av Supabase RLS",
    "AI-assistent med 20+ verktyg för databasfrågor, rapport-CRUD, Excel-tolkning, diagramgenerering, analys och webbsökning — allt avgränsat till aktiv organisation",
    "Godkännandedialoger innan AI:n skapar, uppdaterar eller tar bort rapporter",
    "Rapporthantering med registreringsnummer, kategorier, teknikertilldelning, tidsuppföljning och massoperationer via omsorterbara datatabeller",
    "Dashboard-analys: KPI-kort, dags/vecko/månadstrender, kategorifördelning, teknikerprestanda och mest rapporterade problem, plus SLA-, flödes-, WIP- och försäkringsanalys för fordonsärenden",
    "Ärendehantering för fordon (Bilkollen) med finansieringskälla, försäkringsstatus, redigering direkt i tabellen, ändringslogg och arkiv, vid sidan av reparationsrapporter",
    "Meddelanden i realtid med direkt- och gruppkonversationer, byggda på Supabase Realtime",
    "Inbjudningssystem med anslutningsförfrågningar, organisationsskapande och onboarding för nya användare",
  ],
  challenges: [
    "Z.AI's GLM-4.7 only supports Chat API, rejects system role messages, and doesn't handle images — so the integration needed workarounds for message formatting and graceful degradation when users attach files",
    "Multi-step AI workflows like Excel import (fetch technician names → category names → parse → create reports) had to fit in the agent's five-step limit and keep context without blowing up the token budget",
    "Technicians should only see their own reports while admins see everything — getting RLS policies right for that asymmetry across all query paths took careful testing",
    "Base64 images from screenshots can exceed Vercel's request size limit, so the client compresses them iteratively before sending",
  ],
  challengesSv: [
    "Z.AI:s GLM-4.7 stöder bara Chat API, avvisar systemrollmeddelanden och hanterar inte bilder — så integrationen krävde workarounds för meddelandeformatering och graceful degradation när användare bifogar filer",
    "Flerstegs-AI-arbetsflöden som Excel-import (hämta teknikernamn → kategorinamn → tolka → skapa rapporter) behövde rymmas inom agentens gräns på fem steg och behålla kontexten utan att spränga tokenbudgeten",
    "Tekniker ska bara se sina egna rapporter medan admins ser allt — att få RLS-policyer rätt för den asymmetrin över alla frågavägar krävde noggranna tester",
    "Base64-bilder från skärmdumpar kan överskrida Vercels gräns för förfrågningsstorlek, så klienten komprimerar dem iterativt innan de skickas",
  ],
  solution:
    "System prompt gets prepended to the first user message to work around GLM's missing system role. AI tools use names_only flags and pagination to keep token usage low during multi-step operations. RLS policies enforce org + role scoping at the database level, and server actions validate membership before any mutation. Client-side Canvas API compression shrinks image payloads with iterative quality reduction. Rate limiting (60 chat requests/hour per user per org) prevents abuse without blocking normal usage.",
  solutionSv:
    "Systemprompten läggs till i första användarmeddelandet för att kringgå GLM:s avsaknad av systemroll. AI-verktyg använder names_only-flaggor och paginering för att hålla tokenanvändningen låg under flerstegsoperationer. RLS-policyer upprätthåller org- och rollscopning på databasnivå, och serveractions validerar medlemskap innan varje mutation. Klientsidans Canvas API-komprimering minskar bildpayloads genom iterativ kvalitetssänkning. Hastighetsbegränsning (60 chattförfrågningar/timme per användare per org) förhindrar missbruk utan att blockera normal användning.",
  outcome:
    "Deployed on Vercel behind a login. Beyond the KPI dashboard it covers repair reports, vehicle cases, messaging and onboarding, and the AI assistant turns an uploaded Excel export into structured reports once a user approves them.",
  outcomeSv:
    "Driftsatt på Vercel bakom inloggning. Utöver KPI-dashboarden täcker den reparationsrapporter, fordonsärenden, meddelanden och onboarding, och AI-assistenten gör om en uppladdad Excel-export till strukturerade rapporter när en användare har godkänt dem.",
};
