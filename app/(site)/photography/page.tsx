import type { Metadata } from "next";

import { Gallery } from "@/components/landing/gallery";

export const metadata: Metadata = { title: "Photography" };

export default function PhotographyPage() {
  return <Gallery />;
}
