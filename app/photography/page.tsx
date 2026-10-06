import type { Metadata } from "next";

import { Gallery } from "@/components/landing/gallery";
import { Header } from "@/components/landing/sections";

export const metadata: Metadata = { title: "Photography" };

export default function PhotographyPage() {
  return (
    <div className="landing min-h-screen overflow-x-clip">
      <Header />
      <Gallery />
    </div>
  );
}
