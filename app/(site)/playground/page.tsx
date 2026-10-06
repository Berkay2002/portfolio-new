import type { Metadata } from "next";

import { Playground } from "@/components/landing/pages";

export const metadata: Metadata = {
  title: "Playground",
  description: "Interactive demonstrations and experiments by Berkay Orhan.",
};

export default function PlaygroundPage() {
  return <Playground />;
}
