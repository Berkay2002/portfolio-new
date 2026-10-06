import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PaperDetail } from "@/components/landing/pages";
import { papers } from "@/lib/data/papers";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { id } = await props.params;
  const entry = papers.find((p) => p.id === id);
  if (!entry) return { title: "Paper Not Found" };
  return { title: `${entry.paper.title} | Paper | Berkay Orhan`, description: entry.paper.abstractContent };
}

export function generateStaticParams() {
  return papers.map((p) => ({ id: p.id }));
}

export default async function PaperPage(props: Props) {
  const { id } = await props.params;
  if (!papers.some((p) => p.id === id)) notFound();
  return <PaperDetail id={id} />;
}
