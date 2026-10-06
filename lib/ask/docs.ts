import { landingCopy } from "@/lib/data/landing";
import { papers } from "@/lib/data/papers";
import { projects } from "@/lib/data/portfolio-data";
import { type AskDoc, words } from "./search";

// What "Ask the site" can find: only what the site already shows. Each paper is its title and abstract,
// never the thesis benchmark data (the Ericsson logs behind it are under NDA). Server only: the page
// passes the index to the browser, and the answer route reads `excerpt` for the model.

const excerpts = new Map<string, string>();

const unique = (text: string, skip = new Set<string>()) => [...new Set(words(text))].filter((w) => !skip.has(w)).join(" ");

function doc({ excerpt, ...d }: AskDoc & { excerpt: string }): AskDoc {
  excerpts.set(d.id, excerpt);
  const head = unique(d.head);
  return { ...d, head, body: unique(d.body, new Set(head.split(" "))) };
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
      body: [
        p.description,
        p.descriptionSv,
        p.detailedDescription,
        p.detailedDescriptionSv,
        ...(p.features ?? []),
        ...(p.featuresSv ?? []),
        ...(p.challenges ?? []),
        ...(p.challengesSv ?? []),
        p.solution,
        p.solutionSv,
        p.outcome,
        p.outcomeSv,
        ...(p.microservices ?? []).flatMap((m) => [m.name, m.description, m.descriptionSv, ...(m.technologies ?? [])]),
      ].join(" "),
      excerpt: [p.description, p.detailedDescription, p.outcome, `Stack: ${p.technologies.join(", ")}.`].filter(Boolean).join(" "),
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
      excerpt: `${kind === "thesis" ? "Master's thesis at Ericsson." : "Project paper."} Authors: ${paper.authors.join(", ")}. ${paper.abstractContent}`,
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
    excerpt: `Berkay's path: ${moments("en")}`,
  }),
  doc({
    id: "contact",
    href: "/#contact",
    kind: "page",
    title: { en: "Contact", sv: "Kontakt" },
    summary: { en: "Email berkayorhan@hotmail.se, or find him on GitHub and LinkedIn.", sv: "Mejla berkayorhan@hotmail.se, eller hitta honom på GitHub och LinkedIn." },
    head: "contact kontakt email mejl hire anställa reach",
    body: "github linkedin cv resume email mail",
    excerpt: "Contact: email berkayorhan@hotmail.se. GitHub github.com/Berkay2002, LinkedIn. CV at /Resume.pdf.",
  }),
];

export const excerpt = (id: string) => excerpts.get(id)?.slice(0, 1200) ?? "";

// Who he is, sent with every question so "Who is Berkay?" has an answer whatever the search finds.
const en = landingCopy.en;
export const profile = [
  `Berkay Orhan: ${en.hero.lede}`,
  en.about.bio.join(""),
  `Path: ${moments("en")}`,
  `Projects on the site: ${projects.map((p) => p.title).join("; ")}.`,
].join("\n");
