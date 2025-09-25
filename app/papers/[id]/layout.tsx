import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Papers | Berkay Orhan",
  description: "Academic research papers and publications by Berkay Orhan",
};

export default function PaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="paper-layout">{children}</div>;
}
