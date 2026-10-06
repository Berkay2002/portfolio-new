import type { Metadata } from "next";

import { FastTalk } from "@/components/landing/fasttalk";

export const metadata: Metadata = {
  title: "FastTalk benchmark | Berkay Orhan",
  description: "Three local models in a real-time voice loop, compared on latency, consistency and reliability.",
};

export default function TDDE19Page() {
  return <FastTalk />;
}
