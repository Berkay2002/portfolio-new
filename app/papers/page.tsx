"use client";

import Link from "next/link";

import { useLanguage } from "@/components/layout/language-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { PDFViewerPopup } from "@/components/ui/pdf-viewer-popup";
import { animatchPaper } from "@/lib/data/animatch-paper";
import { syngraphPaper } from "@/lib/data/syngraph-paper";

const papers = [
  {
    id: "researcher",
    title: syngraphPaper.title,
    authors: syngraphPaper.authors,
    abstract: syngraphPaper.abstractContent,
    pdfUrl: syngraphPaper.pdfUrl,
    projectHref: "/projects/researcher",
  },
  {
    id: "animatch",
    title: animatchPaper.title,
    authors: animatchPaper.authors,
    abstract: animatchPaper.abstractContent,
    pdfUrl: animatchPaper.pdfUrl,
    projectHref: "/projects/animatch",
  },
];

export default function PapersPage() {
  const { t } = useLanguage();

  return (
    <Container className="pt-20">
      <div className="mx-auto mb-10 flex max-w-3xl flex-col gap-3 text-center">
        <p className="text-primary text-sm font-medium uppercase tracking-wide">
          {t("nav.papers")}
        </p>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
          Research Papers
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Explore published project papers with inline previews and downloads.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {papers.map((paper) => (
          <Card key={paper.id} className="flex h-full flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {paper.title}
              </CardTitle>
              <CardDescription className="text-sm">
                {paper.authors.join(", ")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {paper.abstract}
              </p>
              <div className="mt-auto flex flex-wrap gap-3">
                <PDFViewerPopup
                  buttonVariant="secondary"
                  fileName={`${paper.title} - Research Paper`}
                  pdfUrl={paper.pdfUrl}
                  triggerClassName="w-full justify-between sm:w-auto"
                />
                <Button asChild variant="secondary">
                  <Link href={paper.projectHref}>View project</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
