import type { Metadata } from "next";

import { Ask } from "@/components/landing/ask";
import { askDocs } from "@/lib/ask/docs";

export const metadata: Metadata = {
  title: "Ask",
  description: "Ask about Berkay Orhan's projects, thesis and experience.",
};

export default function AskPage() {
  return <Ask docs={askDocs} />;
}
