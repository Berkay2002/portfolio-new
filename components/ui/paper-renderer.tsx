"use client";

import { Download, FileText } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Card } from "./card";
import { MarkdownLatexRenderer } from "./markdown-latex-renderer";

type PaperRendererProps = {
  title: string;
  authors: string[];
  abstractContent: string;
  sections: {
    title: string;
    content: string;
  }[];
  pdfUrl: string;
};

export function PaperRenderer({
  title,
  authors,
  abstractContent,
  sections,
  pdfUrl,
}: PaperRendererProps) {
  const [showFullPaper, setShowFullPaper] = useState(false);

  return (
    <div className="paper-container mx-auto max-w-4xl space-y-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="font-bold text-2xl">{title}</h1>
        <Button asChild className="gap-2" variant="outline">
          <a download href={pdfUrl} rel="noopener noreferrer" target="_blank">
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </a>
        </Button>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">Abstract</h2>
          <MarkdownLatexRenderer content={abstractContent} />
        </div>

        <div className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">Authors</h2>
          <ul className="list-disc pl-5">
            {authors.map((author) => (
              <li key={author}>{author}</li>
            ))}
          </ul>
        </div>

        {showFullPaper ? (
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-2 font-semibold text-xl">{section.title}</h2>
                <MarkdownLatexRenderer content={section.content} />
              </div>
            ))}
            <Button
              className="w-full justify-center"
              onClick={() => setShowFullPaper(false)}
              variant="outline"
            >
              Hide Full Paper
            </Button>
          </div>
        ) : (
          <Button
            className="w-full justify-center gap-2"
            onClick={() => setShowFullPaper(true)}
            variant="outline"
          >
            <FileText className="h-4 w-4" />
            <span>View Full Paper</span>
          </Button>
        )}
      </Card>
    </div>
  );
}
