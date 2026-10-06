import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { PaperRenderer } from "@/components/ui/paper-renderer";
import { animatchPaper } from "@/lib/data/animatch-paper";
import { syngraphPaper } from "@/lib/data/syngraph-paper";
import { whenAgenticWorkflowsPaper } from "@/lib/data/when-agentic-workflows-paper";

// Map of available papers
const papers = {
  "when-agentic-workflows-help": whenAgenticWorkflowsPaper,
  animatch: animatchPaper,
  researcher: syngraphPaper,
};

const paperBackLinks = {
  animatch: "/projects/animatch",
  researcher: "/projects/researcher",
};

type PaperId = keyof typeof papers;

type PaperPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  props: PaperPageProps
): Promise<Metadata> {
  const params = await props.params;
  const paperData = papers[params.id as PaperId];

  if (!paperData) {
    return {
      title: "Paper Not Found",
    };
  }

  return {
    title: `${paperData.title} | Research Paper | Berkay Orhan`,
    description: paperData.abstractContent,
  };
}

export async function generateStaticParams() {
  return Object.keys(papers).map((id) => ({ id }));
}

export default async function PaperPage(props: PaperPageProps) {
  const params = await props.params;
  const paperData = papers[params.id as PaperId];

  if (!paperData) {
    notFound();
  }

  const backHref =
    paperBackLinks[params.id as keyof typeof paperBackLinks] ?? "/papers";
  const backLabel = backHref === "/papers" ? "Back to papers" : "Back to project";

  return (
    <Container className="py-12">
      {/* Back button */}
      <Link
        className="mb-6 inline-flex items-center text-muted-foreground text-sm transition-colors hover:text-foreground"
        href={backHref}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        {backLabel}
      </Link>

      <PaperRenderer
        abstractContent={paperData.abstractContent}
        authors={paperData.authors}
        benchmark={"benchmark" in paperData ? paperData.benchmark : undefined}
        highlights={
          "highlights" in paperData ? paperData.highlights : undefined
        }
        pdfUrl={paperData.pdfUrl}
        sections={paperData.sections}
        title={paperData.title}
      />
    </Container>
  );
}
