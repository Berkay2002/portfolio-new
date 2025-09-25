"use client";

import React, { useEffect } from "react";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import "katex/dist/katex.min.css";
import {
  inlineLatexToMarkdown,
  preprocessLatex,
} from "@/lib/utils/latex-helpers";

interface MarkdownLatexRendererProps {
  content: string;
  className?: string;
  debug?: boolean;
}

export function MarkdownLatexRenderer({
  content,
  className,
  debug = false,
}: MarkdownLatexRendererProps) {
  const [html, setHtml] = React.useState<string>("");
  const [preprocessedContent, setPreprocessedContent] =
    React.useState<string>("");

  useEffect(() => {
    // Process LaTeX content
    const processContent = async () => {
      try {
        // Preprocess to convert LaTeX to Markdown with math
        const preprocessed = preprocessLatex(content);
        setPreprocessedContent(preprocessed);

        // Process with unified ecosystem
        const result = await unified()
          .use(remarkParse)
          .use(remarkMath)
          .use(remarkRehype, { allowDangerousHtml: true })
          .use(rehypeKatex, {
            throwOnError: false,
            trust: true,
          } as any) // Type casting as any to bypass type errors
          .use(rehypeRaw)
          .use(rehypeStringify)
          .process(preprocessed);

        setHtml(String(result));
      } catch (error) {
        console.error("Error processing LaTeX content:", error);
        // Show error in the UI
        setHtml(
          `<p class="text-red-500">Error rendering LaTeX content. See console for details.</p>`
        );
      }
    };

    processContent();
  }, [content]);

  return (
    <>
      <div
        className={`latex-content ${className || ""}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Debug view for development */}
      {debug && (
        <div className="mt-8 rounded bg-gray-100 p-4 dark:bg-gray-800">
          <h3 className="mb-2 font-semibold text-lg">
            Debug: Preprocessed Content
          </h3>
          <pre className="overflow-x-auto whitespace-pre-wrap text-xs">
            {preprocessedContent}
          </pre>
        </div>
      )}
    </>
  );
}
