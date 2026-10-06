import { flows } from "@/lib/data/flows";
import { landingCopy } from "@/lib/data/landing";
import { papers } from "@/lib/data/papers";
import { projectMeta, projects, socialLinks } from "@/lib/data/portfolio-data";
import { type AskDoc, matches, terms, words } from "./search";

// What "Ask the site" can find: only what the site already shows. Each paper is its title, authors, year, PDF
// and abstract; the sections stay out on purpose, because they carry the thesis benchmark's numbers (the
// Ericsson logs behind them are under NDA). Server only: the page
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

// A project page below its description: its facts and links, the long description, features, challenges,
// solution, outcome, services, the trace's stations and the picture captions.
function pageText(p: (typeof projects)[number], l: "en" | "sv") {
  const sv = l === "sv";
  const t = (en?: string, s?: string) => (sv ? (s ?? en) : en);
  // Labelled, so "What challenges did VoxelCraft face?" picks the challenges out of the excerpt.
  const label = (en: string, s: string, texts?: (string | undefined)[]) => (texts ?? []).flatMap((x) => (x ? [`${t(en, s)}: ${x}`] : []));
  return [
    projectMeta[p.id] && `${sv ? "Startat" : "Started"} ${projectMeta[p.id]!.year}.`,
    p.institution,
    p.link && t(p.linkLabel, p.linkLabelSv), // what the page calls its main link, like "Download Add-on (.zip)"
    ...(p.projectInfo ?? []).map((f) => `${t(f.label, f.labelSv)}: ${t(f.value, f.valueSv)}.`),
    ...(p.projectLinks ?? []).flatMap((k) => [`${t(k.label, k.labelSv)}${k.href ? `: ${k.href}` : ""}.`, ...(k.items ?? []).map((i) => `${t(i.label, i.labelSv)}${i.command ? `: ${i.command}` : ""}.`)]),
    p.imageAlt,
    ...(p.gallery ?? []).flatMap((g) => [t(g.caption, g.captionSv), g.alt]),
    sv ? p.detailedDescriptionSv : p.detailedDescription,
    ...label("Feature", "Funktion", sv ? p.featuresSv : p.features),
    ...label("Challenge", "Utmaning", sv ? p.challengesSv : p.challenges),
    ...label("Solution", "Lösning", [sv ? p.solutionSv : p.solution]),
    ...label("Outcome", "Resultat", [sv ? p.outcomeSv : p.outcome]),
    ...(p.microservices ?? []).map((m) => `${m.name}: ${sv ? m.descriptionSv : m.description} ${(m.technologies ?? []).join(", ")}${m.link ? ` ${m.link}` : ""}`),
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
      stack: p.technologies.map((t) => words(t).join(" ")),
      // Everything the project page shows, in both languages.
      body: [p.description, p.descriptionSv, p.link, p.frontendLink, p.githubLink, p.playgroundLink, p.paperLink, ...pageText(p, "en"), ...pageText(p, "sv")].join(" "),
      // The year and the page's links always reach the model, so "where's the code?" gets the address.
      excerpt: {
        lead: [
          `${p.description} Stack: ${p.technologies.join(", ")}.`,
          projectMeta[p.id] && `Started ${projectMeta[p.id]!.year}.`,
          ...Object.entries({ [p.linkLabel ?? "Live"]: p.link, Frontend: p.frontendLink, Source: p.githubLink, Playground: p.playgroundLink, Paper: p.paperLink }).flatMap(([k, v]) => (v ? [`${k}: ${v}.`] : [])),
          ...(p.projectLinks ?? []).flatMap((k) => (k.href ? [`${k.label}: ${k.href}.`] : [])),
          ...(p.microservices ?? []).flatMap((m) => (m.link ? [`${m.name}: ${m.link}.`] : [])),
        ]
          .filter(Boolean)
          .join(" "),
        en: pageText(p, "en"),
        sv: pageText(p, "sv"),
      },
    })
  ),
  ...papers.map(({ id, paper, kind, year }) =>
    doc({
      id: `paper-${id}`,
      href: `/papers/${id}`,
      kind: "paper",
      title: { en: paper.title, sv: paper.title },
      summary: {
        en: kind === "thesis" ? "Master's thesis at Ericsson, 2026." : "Project paper.",
        sv: kind === "thesis" ? "Masteruppsats på Ericsson, 2026." : "Projektrapport.",
      },
      head: `${paper.title} paper rapport ${kind === "thesis" ? "thesis ericsson uppsats masteruppsats exjobb examensarbete" : ""}`,
      // The authors and year /papers shows, so a coauthor's name or "2024" finds it.
      // "ReAct" (the agent loop) is not React, so it is indexed as "re-act".
      body: `${paper.authors.join(" ")} ${year} ${paper.pdfUrl ?? ""} ${paper.abstractContent.replace(/ReAct/g, "re-act")}`,
      stack: [],
      excerpt: { lead: `${kind === "thesis" ? "Master's thesis at Ericsson." : "Project paper."} ${year}. Authors: ${paper.authors.join(", ")}.${paper.pdfUrl ? ` PDF: ${paper.pdfUrl}.` : ""} ${paper.abstractContent}` },
    })
  ),
  doc({
    id: "experience",
    href: "/#experience",
    kind: "page",
    title: { en: "Experience", sv: "Erfarenhet" },
    summary: { en: moments("en"), sv: moments("sv") },
    head: "experience erfarenhet education utbildning job jobb jobbat work worked arbete arbetat career study studied studerade plugga pluggade university universitet",
    body: `${moments("en")} ${moments("sv")}`,
    stack: [],
    excerpt: { lead: `Berkay's path: ${moments("en")}` },
  }),
  doc({
    id: "contact",
    href: "/#contact",
    kind: "page",
    title: { en: "Contact", sv: "Kontakt" },
    summary: { en: "Email berkayorhan@hotmail.se, or find him on GitHub and LinkedIn.", sv: "Mejla berkayorhan@hotmail.se, eller hitta honom på GitHub och LinkedIn." },
    head: "contact kontakt email mejl hire anställa reach cv resume",
    body: `github linkedin email mail berkayorhan@hotmail.se ${socialLinks.github} ${socialLinks.linkedin} ${socialLinks.cv}`,
    stack: [],
    excerpt: { lead: `Contact: email berkayorhan@hotmail.se. GitHub ${socialLinks.github}. LinkedIn ${socialLinks.linkedin}. CV at ${socialLinks.cv}.` },
  }),
];

const sentences = (texts: (string | undefined)[] = []) => texts.flatMap((t) => t?.split(/(?<=[.!?])\s+/) ?? []).filter(Boolean);

export function excerpt(id: string, question = "") {
  const e = excerpts.get(id);
  if (!e) return "";
  const qs = terms(question);
  const hit = (sentence: string) => qs.length > 0 && words(sentence).some((w) => qs.some((q) => matches(w, q)));
  const en = sentences(e.en);
  const picked = [...en, ...sentences(e.sv)].filter(hit);
  return [e.lead, ...picked, ...en.filter((s) => !picked.includes(s))].join(" ").slice(0, 1200);
}

// Who he is, sent with every question so "Who is Berkay?" has an answer whatever the search finds.
const en = landingCopy.en;
export const profile = [
  `Berkay Orhan: ${en.hero.lede}`,
  en.about.bio.join(""),
  `Path: ${moments("en")}`,
  // Each with its year and stack, so "which are from 2025?" or "which use Next.js?" gets the whole list, not just
  // the pages the search sends.
  `Projects on the site: ${projects.map((p) => `${p.title} (${[projectMeta[p.id]?.year, (p.technologies ?? []).join(", ")].filter(Boolean).join("; ")})`).join(". ")}.`,
].join("\n");
