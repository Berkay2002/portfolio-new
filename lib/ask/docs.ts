import { flows } from "@/lib/data/flows";
import { landingCopy } from "@/lib/data/landing";
import { papers } from "@/lib/data/papers";
import { projects } from "@/lib/data/portfolio-data";
import { type AskDoc, terms, words } from "./search";

// What "Ask the site" can find: only what the site already shows. Each paper is its title and abstract,
// never the thesis benchmark data (the Ericsson logs behind it are under NDA). Server only: the page
// passes the index to the browser, and the answer route reads `excerpt` for the model.

// What the model reads about a page: a lead it always gets, then the sentences that match the question
// (in either language), then the rest in English, up to 1,200 characters.
type Excerpt = { lead: string; en?: (string | undefined)[]; sv?: (string | undefined)[] };
const excerpts = new Map<string, Excerpt>();

const unique = (text: string, skip = new Set<string>()) => [...new Set(words(text))].filter((w) => !skip.has(w)).join(" ");

function doc({ excerpt, ...d }: AskDoc & { excerpt: Excerpt }): AskDoc {
  excerpts.set(d.id, excerpt);
  const head = unique(d.head);
  return { ...d, head, body: unique(d.body, new Set(head.split(" "))) };
}

// A project page below its description: the long description, features, challenges, solution, outcome,
// services and the trace's stations.
function pageText(p: (typeof projects)[number], l: "en" | "sv") {
  const sv = l === "sv";
  return [
    sv ? p.detailedDescriptionSv : p.detailedDescription,
    ...((sv ? p.featuresSv : p.features) ?? []),
    ...((sv ? p.challengesSv : p.challenges) ?? []),
    sv ? p.solutionSv : p.solution,
    sv ? p.outcomeSv : p.outcome,
    ...(p.microservices ?? []).map((m) => `${m.name}: ${sv ? m.descriptionSv : m.description} ${(m.technologies ?? []).join(", ")}`),
    ...(flows[p.id] ?? []).map((st) => `${sv ? (st.nameSv ?? st.name) : st.name}: ${sv ? st.whatSv : st.what}.`),
  ];
}

const moments = (l: "en" | "sv") => landingCopy[l].experience.moments.map((m) => `${m.title}, ${m.line}.`).join(" ");

export const askDocs: AskDoc[] = [
  ...projects.map((p) =>
    doc({
      id: p.id,
      href: `/projects/${p.id}`,
      kind: "project",
      title: { en: p.title, sv: p.title },
      summary: { en: p.description, sv: p.descriptionSv ?? p.description },
      head: `${p.title} ${p.technologies.join(" ")}`,
      // Everything the project page shows, in both languages.
      body: [p.description, p.descriptionSv, ...pageText(p, "en"), ...pageText(p, "sv")].join(" "),
      excerpt: { lead: `${p.description} Stack: ${p.technologies.join(", ")}.`, en: pageText(p, "en"), sv: pageText(p, "sv") },
    })
  ),
  ...papers.map(({ id, paper, kind }) =>
    doc({
      id: `paper-${id}`,
      href: `/papers/${id}`,
      kind: "paper",
      title: { en: paper.title, sv: paper.title },
      summary: {
        en: kind === "thesis" ? "Master's thesis at Ericsson, 2026." : "Project paper.",
        sv: kind === "thesis" ? "Masteruppsats på Ericsson, 2026." : "Projektrapport.",
      },
      head: `${paper.title} ${kind === "thesis" ? "thesis ericsson uppsats" : "paper rapport"}`,
      body: paper.abstractContent,
      excerpt: { lead: `${kind === "thesis" ? "Master's thesis at Ericsson." : "Project paper."} Authors: ${paper.authors.join(", ")}. ${paper.abstractContent}` },
    })
  ),
  doc({
    id: "experience",
    href: "/#experience",
    kind: "page",
    title: { en: "Experience", sv: "Erfarenhet" },
    summary: { en: moments("en"), sv: moments("sv") },
    head: "experience erfarenhet education utbildning job jobb work arbete career",
    body: `${moments("en")} ${moments("sv")} university universitet studied studerade`,
    excerpt: { lead: `Berkay's path: ${moments("en")}` },
  }),
  doc({
    id: "contact",
    href: "/#contact",
    kind: "page",
    title: { en: "Contact", sv: "Kontakt" },
    summary: { en: "Email berkayorhan@hotmail.se, or find him on GitHub and LinkedIn.", sv: "Mejla berkayorhan@hotmail.se, eller hitta honom på GitHub och LinkedIn." },
    head: "contact kontakt email mejl hire anställa reach",
    body: "github linkedin cv resume email mail",
    excerpt: { lead: "Contact: email berkayorhan@hotmail.se. GitHub github.com/Berkay2002, LinkedIn. CV at /Resume.pdf." },
  }),
];

const sentences = (texts: (string | undefined)[] = []) => texts.flatMap((t) => t?.split(/(?<=[.!?])\s+/) ?? []).filter(Boolean);

export function excerpt(id: string, question = "") {
  const e = excerpts.get(id);
  if (!e) return "";
  const qs = terms(question);
  const matches = (sentence: string) => qs.length > 0 && words(sentence).some((w) => qs.some((q) => w.startsWith(q)));
  const en = sentences(e.en);
  const picked = [...en, ...sentences(e.sv)].filter(matches);
  return [e.lead, ...picked, ...en.filter((s) => !picked.includes(s))].join(" ").slice(0, 1200);
}

// Who he is, sent with every question so "Who is Berkay?" has an answer whatever the search finds.
const en = landingCopy.en;
export const profile = [
  `Berkay Orhan: ${en.hero.lede}`,
  en.about.bio.join(""),
  `Path: ${moments("en")}`,
  `Projects on the site: ${projects.map((p) => p.title).join("; ")}.`,
].join("\n");
