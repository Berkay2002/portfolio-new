import type { Project } from "@/types";

export const oversee: Project = {
  id: "oversee",
  title: "Oversee",
  description:
    "Multi-tenant operations dashboard with Supabase auth, Swedish UX, and AI-assisted context that surfaces KPIs, trends, and top issues per organization.",
  descriptionSv:
    "Multitenant operationsdashboard med Supabase-autentisering, svensk UX och AI-kontext som visar nyckeltal, trender och topproblem per organisation.",
  technologies: [
    "TypeScript",
    "Next.js 16",
    "React 19",
    "Supabase",
    "shadcn/ui",
    "TanStack Query",
    "Vercel AI SDK",
    "MDX",
    "D3/Recharts",
  ],
  link: "https://github.com/Berkay2002/oversee",
  imageAlt: "Oversee dashboard with KPIs and charts",
  detailedDescription:
    "Authenticated org workspace that redirects users to their default org and renders an overview (Översikt) with KPI cards, day/week/month trends, category distribution, technician performance, and top reported issues. The page registers context for the built-in AI assistant and ships Swedish help docs via MDX.",
  detailedDescriptionSv:
    "Autentiserad organisationsyta som skickar användare till sin standardorganisation och visar en översikt med KPI-kort, dags/vecko/månadstrender, kategorifördelning, teknikerprestation och mest rapporterade problem. Sidan registrerar kontext för den inbyggda AI-assistenten och levererar svenska hjälpsidor via MDX.",
  features: [
    "Supabase-based authentication and org membership routing",
    "Dashboard KPIs (total reports, avg/max days, active categories)",
    "Trend charts with daily/weekly/monthly aggregation",
    "Category distribution pie and technician performance bar charts",
    "Top-problem table plus contextual help docs in Swedish",
  ],
  featuresSv: [
    "Supabase-baserad autentisering och org-routning",
    "Dashboard-KPI:er (totalt antal rapporter, genomsnitt/max dagar, aktiva kategorier)",
    "Trenddiagram med daglig/veckovis/månadsvis aggregering",
    "Kategorifördelning (cirkeldiagram) och teknikerprestation (staplar)",
    "Toppproblem-tabell samt kontextuell hjälp på svenska",
  ],
  challenges: [
    "Ensuring fast, safe redirects for authenticated users to the right org",
    "Keeping charts responsive while fetching multiple datasets in parallel",
    "Localizing dashboards and docs for Swedish field teams",
  ],
  challengesSv: [
    "Säkra snabba omdirigeringar för autentiserade användare till rätt org",
    "Behålla responsiva diagram samtidigt som flera dataset hämtas parallellt",
    "Lokalisera dashboards och dokumentation för svenska fältteam",
  ],
  solution:
    "Uses server-side Supabase helpers for auth + org lookup, parallel data fetching for KPIs/trends/breakdowns, and Suspense skeletons for perceived performance. MDX-driven help pages document each widget and tie into the AI assistant context.",
  solutionSv:
    "Använder server-side Supabase-helpers för auth + org-uppslag, parallell datahämtning för KPI:er/trender/fördelningar samt Suspense-skelett för upplevd prestanda. MDX-hjälpsidor dokumenterar varje widget och kopplas till AI-assistentens kontext.",
  outcome:
    "Provides a bilingual operations overview that keeps technicians aligned on open issues and performance trends, ready for further modules beyond the dashboard.",
  outcomeSv:
    "Ger en tvåspråkig driftöversikt som håller tekniker synkade kring öppna problem och prestationstrender, redo för fler moduler utöver dashboarden.",
  githubLink: "https://github.com/Berkay2002/oversee",
};
