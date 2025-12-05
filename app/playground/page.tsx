import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Playground | Berkay Orhan",
  description: "Interactive demonstrations and experiments by Berkay Orhan.",
};

const playgroundItems = [
  {
    id: "tdde19",
    title: "TDDE19 - FastTalk",
    description: "Advanced Project Course - AI and Machine Learning. Real-time voice conversation system with AI.",
    path: "/playground/tdde19",
  },
];

export default function PlaygroundPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <SectionHeading title="Playground" />
      <p className="mt-4 text-muted-foreground">
        Interactive demonstrations and experiments.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {playgroundItems.map((item) => (
          <Card key={item.id} className="transition-all duration-300 hover:border-blue-500 hover:shadow-lg">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={item.path}>
                <Button type="button" variant="default" className="w-full">
                  View
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
