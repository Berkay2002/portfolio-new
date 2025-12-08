"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState, use } from "react";

import { Container } from "@/components/ui/container";
import { PaperRenderer } from "@/components/ui/paper-renderer";
import { animatchPaper } from "@/lib/data/animatch-paper";

// Map of available papers
const papers = {
  animatch: animatchPaper,
};

export default function PaperPage(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params);
  const [mounted, setMounted] = useState(false);

  // Get the paper data
  const paperData = papers[params.id as keyof typeof papers];

  // Use document title for SEO
  useEffect(() => {
    if (paperData) {
      document.title = `${paperData.title} | Research Paper`;
    }
  }, [paperData]);

  useEffect(() => {
    setMounted(true);

    // Add KaTeX CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css";
    link.integrity =
      "sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    return () => {
      // Clean up
      const links = document.head.querySelectorAll('link[href*="katex"]');
      // biome-ignore lint/style/useForOf: <Stop>
      for (let i = 0; i < links.length; i += 1) {
        const katexLink = links[i];
        if (document.head.contains(katexLink)) {
          document.head.removeChild(katexLink);
        }
      }
    };
  }, []);

  if (!mounted) {
    return null; // Avoid rendering on server to prevent hydration issues with LaTeX
  }

  if (!paperData) {
    notFound();
  }

  return (
    <Container className="py-12">
      {/* Back button */}
      <Link
        className="mb-6 inline-flex items-center text-muted-foreground text-sm transition-colors hover:text-foreground"
        href={`/projects/${params.id}`}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to project
      </Link>

      <PaperRenderer
        abstractContent={paperData.abstractContent}
        authors={paperData.authors}
        pdfUrl={paperData.pdfUrl}
        sections={paperData.sections}
        title={paperData.title}
      />
    </Container>
  );
}
