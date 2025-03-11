"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PaperRenderer } from "@/components/ui/paper-renderer";
import { animatchPaper } from "@/lib/data/animatch-paper";

// Map of available papers
const papers = {
  "animatch": animatchPaper,
};

export default function PaperPage({ params }: { params: { id: string } }) {
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
    link.integrity = "sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
    
    return () => {
      // Clean up
      const links = document.head.querySelectorAll('link[href*="katex"]');
      links.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
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
        href={`/projects/${params.id}`}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to project
      </Link>
      
      <PaperRenderer
        title={paperData.title}
        authors={paperData.authors}
        abstractContent={paperData.abstractContent}
        sections={paperData.sections}
        pdfUrl={paperData.pdfUrl}
      />
    </Container>
  );
} 