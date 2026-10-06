import type { Metadata } from "next";

import { PaperList } from "@/components/landing/pages";
import { papers } from "@/lib/data/papers";

export const metadata: Metadata = {
  title: "Papers",
  description: "Berkay Orhan's master's thesis and the papers from his projects.",
};

export default function PapersPage() {
  const rows = papers.map((x) => ({
    id: x.id,
    kind: x.kind,
    year: x.year,
    title: x.paper.title,
    authors: x.paper.authors,
    abstract: x.paper.abstractContent,
    benchmark: "benchmark" in x.paper,
    project: "project" in x ? x.project : undefined,
  }));
  return <PaperList papers={rows} />;
}
