import "katex/dist/katex.min.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PaperDetail } from "@/components/landing/pages";
import { papers } from "@/lib/data/papers";
import { renderLatex } from "@/lib/utils/latex-helpers";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { id } = await props.params;
  const entry = papers.find((p) => p.id === id);
  if (!entry) return { title: "Paper Not Found" };
  return { title: `${entry.paper.title} | Paper`, description: entry.paper.abstractContent };
}

export function generateStaticParams() {
  return papers.map((p) => ({ id: p.id }));
}

export default async function PaperPage(props: Props) {
  const { id } = await props.params;
  const entry = papers.find((p) => p.id === id);
  if (!entry) notFound();
  const { paper } = entry;
  const [abstract, ...sections] = await Promise.all(
    [paper.abstractContent, ...paper.sections.map((s) => s.content)].map(renderLatex)
  );
  return (
    <PaperDetail
      paper={{
        id,
        kind: entry.kind,
        year: entry.year,
        title: paper.title,
        authors: paper.authors,
        pdf: paper.pdfUrl,
        abstract: abstract!,
        sections: paper.sections.map((s, i) => ({ title: s.title, html: sections[i]! })),
      }}
      thesis={"benchmark" in paper ? { benchmark: paper.benchmark, highlights: paper.highlights } : undefined}
    />
  );
}
