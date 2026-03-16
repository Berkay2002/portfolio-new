import type { Project } from "@/types";

export const litheplan: Project = {
  id: "litheplan",
  title: "LiTHePlan: LIU Course Planner",
  description:
    "Course planning tool for Linköping University master's students. Browse 339 courses across 15 civil engineering programs, build validated 90hp study plans, and share profiles with advisors.",
  descriptionSv:
    "Kursplaneringsverktyg för masterstudenter vid Linköpings universitet. Bläddra bland 339 kurser över 15 civilingenjörsprogram, bygg validerade 90hp-studieplaner och dela profiler med studievägledare.",
  technologies: [
    "TypeScript",
    "Next.js 16",
    "React 19",
    "Tailwind CSS v4",
    "shadcn/ui",
    "Supabase",
    "PostgreSQL",
    "Upstash Redis",
    "Zod v4",
    "@hello-pangea/dnd",
    "Sentry",
    "Playwright",
  ],
  link: "https://www.litheplan.tech",
  image: "/images/projects/litheplan/catalog-grid.png",
  imageAlt: "LiTHePlan course catalog grid view with course cards",
  detailedDescription:
    "An unofficial course planning tool for civil engineering master's students at LiU. Course info for terms 7-9 is normally scattered across multiple university portals — LiTHePlan pulls 339 courses into one place with filtering, scheduling conflict detection, and degree requirement validation. Users can build study plans as guests (localStorage) or sign in for cloud sync and shareable profile URLs.",
  detailedDescriptionSv:
    "Ett inofficiellt kursplaneringsverktyg för civilingenjörsmasterstudenterna vid LiU. Kursinformation för termin 7-9 är normalt utspridd över flera universitetsportaler — LiTHePlan samlar 339 kurser på ett ställe med filtrering, schemakonfliktdetektering och examenskravvalidering. Användare kan bygga studieplaner som gäster (localStorage) eller logga in för molnsynk och delbara profil-URL:er.",
  features: [
    "Multi-faceted filtering: term, block, pace, campus, program, subject area, and examination type — with filter state persisted to localStorage and deep-linkable via URL params",
    "Dual conflict detection: scheduling overlaps (block collisions within a period, with special handling for 50%-pace courses) and mutual exclusion parsing from bilingual free-text course notes",
    "Profile builder with drag-and-drop (hello-pangea/dnd) for organizing courses across terms 7-9, plus real-time validation against 90hp total and 60hp advanced-level requirements",
    "Hybrid storage: guests get full functionality via localStorage, authenticated users get Supabase cloud sync with realtime subscriptions and automatic fallback",
    "Related course recommendations powered by a PL/pgSQL scoring function (weighted by program overlap, subject area, level, and campus)",
    "Cmd+K command palette for fast course search and navigation across the app",
  ],
  featuresSv: [
    "Mångsidig filtrering: termin, block, studietakt, campus, program, huvudområde och examinationstyp — med filterläge sparat i localStorage och djuplänkbart via URL-parametrar",
    "Dubbel konfliktdetektering: schemaöverlappningar (blockkollisioner inom en period, med specialhantering för 50%-taktkurser) och ömsesidig exkludering tolkad från tvåspråkiga fritextkursnoteringar",
    "Profilbyggare med dra-och-släpp (hello-pangea/dnd) för att organisera kurser över termin 7-9, plus realtidsvalidering mot 90hp totalt och 60hp avancerad nivå",
    "Hybridlagring: gäster får full funktionalitet via localStorage, inloggade användare får Supabase-molnsynk med realtidsprenumerationer och automatisk fallback",
    "Relaterade kursrekommendationer via en PL/pgSQL-poängfunktion (viktad efter programöverlapp, huvudområde, nivå och campus)",
    "Cmd+K-kommandopalett för snabb kurssökning och navigering i appen",
  ],
  challenges: [
    "Swedish university scheduling is surprisingly complex: courses span multiple terms, periods, and blocks at different paces (50%/100%), and the combinations create a tricky constraint space for conflict detection",
    "Course restriction data lives in unstructured bilingual free-text notes — parsing mutual exclusions from Swedish and English sentences reliably required careful regex work",
    "Making the profile system feel seamless whether you're a guest or signed in, with localStorage and Supabase sync staying consistent without the UI caring which backend is active",
  ],
  challengesSv: [
    "Svensk universitetsschemaläggning är förvånansvärt komplex: kurser spänner över flera terminer, perioder och block i olika studietakt (50%/100%), och kombinationerna skapar ett knepigt villkorsutrymme för konfliktdetektering",
    "Kursbegränsningsdata finns i ostrukturerade tvåspråkiga fritextnoteringar — att pålitligt tolka ömsesidiga uteslutningar från svenska och engelska meningar krävde noggrant regex-arbete",
    "Att få profilsystemet att kännas sömlöst oavsett om man är gäst eller inloggad, med localStorage och Supabase-synk som håller sig konsistenta utan att UI:t bryr sig om vilken backend som är aktiv",
  ],
  solution:
    "Built with Next.js 16 and React 19 on Supabase (Postgres + Auth + Realtime). The API layer uses Zod v4 for strict input validation and Upstash Redis for per-IP rate limiting. Conflict detection runs two separate systems: one checks block-level scheduling overlaps with special 50%-pace logic, another parses the notes field with regex for mutual-exclusion phrases in Swedish and English. Profile state goes through a useReducer-based context that abstracts over localStorage and Supabase, so components never know where the data lives. Course recommendations use a PL/pgSQL function with weighted scoring (program overlap, subject area, level, campus) to avoid sorting in the application layer. RLS policies lock down personal data while still allowing shared profile viewing.",
  solutionSv:
    "Byggd med Next.js 16 och React 19 på Supabase (Postgres + Auth + Realtime). API-lagret använder Zod v4 för strikt indatavalidering och Upstash Redis för IP-baserad hastighetsbegränsning. Konfliktdetektering kör två separata system: ett kontrollerar blocknivå-schemaöverlappningar med speciell 50%-taktlogik, ett annat tolkar noteringsfältet med regex för ömsesidiga uteslutningsfraser på svenska och engelska. Profilstate går genom en useReducer-baserad kontext som abstraherar över localStorage och Supabase, så komponenter aldrig vet var datan finns. Kursrekommendationer använder en PL/pgSQL-funktion med viktad poängsättning (programöverlapp, huvudområde, nivå, campus) för att undvika sortering i applikationslagret. RLS-policyer låser ner personlig data men tillåter fortfarande delad profilvisning.",
  outcome:
    "Live at litheplan.tech. Students can browse all 339 master's courses for civil engineering, build 90hp study plans with real-time conflict checking and requirement validation, and share their profiles with advisors via URL. The hybrid storage model means zero sign-up friction — guests get the full experience, and signing in just adds cloud persistence and sharing.",
  outcomeSv:
    "Live på litheplan.tech. Studenter kan bläddra bland alla 339 masterkurser för civilingenjörer, bygga 90hp-studieplaner med realtidskonfliktavkänning och kravvalidering, och dela sina profiler med studievägledare via URL. Hybridlagringsmodellen innebär noll registreringsfriktioner — gäster får hela upplevelsen, och inloggning lägger bara till molnpersistens och delning.",
  githubLink: "https://github.com/Berkay2002/LiTHePlan",
  gallery: [
    {
      image: "/images/projects/litheplan/catalog-filters.png",
      alt: "Course catalog with filter sidebar open",
      caption: "Filter courses by program, term, block, pace, campus, and more",
      captionSv: "Filtrera kurser efter program, termin, block, studietakt, campus och mer",
    },
    {
      image: "/images/projects/litheplan/profile-editor.png",
      alt: "Profile editor with credit tracking and term slots",
      caption: "Build study plans across terms 7-9 with real-time credit and requirement validation",
      captionSv: "Bygg studieplaner över termin 7-9 med realtids kredit- och kravvalidering",
    },
    {
      image: "/images/projects/litheplan/course-detail.png",
      alt: "Course detail page showing Graph Theory metadata",
      caption: "Full course details with academic info, examination, and schedule",
      captionSv: "Fullständiga kursdetaljer med akademisk info, examination och schema",
    },
    {
      image: "/images/projects/litheplan/related-courses.png",
      alt: "Related courses section with recommendation cards",
      caption: "Related course recommendations scored by program overlap and subject area",
      captionSv: "Relaterade kursrekommendationer poängsatta efter programöverlapp och huvudområde",
    },
  ],
};
