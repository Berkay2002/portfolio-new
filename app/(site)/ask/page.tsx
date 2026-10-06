import type { Metadata } from "next";

import { Ask } from "@/components/landing/ask";
import { askDocs } from "@/lib/ask/docs";

export const metadata: Metadata = {
  title: "Ask",
  description: "Ask about Berkay Orhan's projects, thesis and experience.",
};

export default async function AskPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const { q } = await searchParams;
  return <Ask docs={askDocs} initial={typeof q === "string" ? q.slice(0, 800) : ""} />;
}
