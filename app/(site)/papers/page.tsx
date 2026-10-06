import type { Metadata } from "next";

import { PaperList } from "@/components/landing/pages";

export const metadata: Metadata = {
  title: "Papers | Berkay Orhan",
  description: "Berkay Orhan's master's thesis and the papers from his projects.",
};

export default function PapersPage() {
  return <PaperList />;
}
