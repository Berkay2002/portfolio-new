"use client";

import { useState } from "react";
import { MarkdownLatexRenderer } from "./markdown-latex-renderer";
import { Button } from "./button";
import { Card } from "./card";
import { Download, FileText } from "lucide-react";

interface PaperRendererProps {
  title: string;
  authors: string[];
  abstractContent: string;
  sections: {
    title: string;
    content: string;
  }[];
  pdfUrl: string;
}

export function PaperRenderer({
  title,
  authors,
  abstractContent,
  sections,
  pdfUrl,
}: PaperRendererProps) {
  const [showFullPaper, setShowFullPaper] = useState(false);

  return (
    <div className="paper-container max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Button asChild variant="outline" className="gap-2">
          <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </a>
        </Button>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Abstract</h2>
          <MarkdownLatexRenderer content={abstractContent} />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Authors</h2>
          <ul className="list-disc pl-5">
            {authors.map((author, index) => (
              <li key={index}>{author}</li>
            ))}
          </ul>
        </div>

        {!showFullPaper ? (
          <Button
            variant="outline"
            className="w-full justify-center gap-2"
            onClick={() => setShowFullPaper(true)}
          >
            <FileText className="h-4 w-4" />
            <span>View Full Paper</span>
          </Button>
        ) : (
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                <MarkdownLatexRenderer content={section.content} />
              </div>
            ))}
            <Button
              variant="outline"
              className="w-full justify-center"
              onClick={() => setShowFullPaper(false)}
            >
              Hide Full Paper
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
} 