import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

/**
 * Converts basic LaTeX environments to Markdown equivalents with KaTeX math
 *
 * This handles common LaTeX environments and converts them to a format
 * that can be processed by remark-rehype pipeline with math support
 */
export function preprocessLatex(latexContent: string): string {
  let content = latexContent;

  // Handle LaTeX newlines and paragraphs
  content = content.replace(/\\\\/g, "<br/>");
  content = content.replace(/\\par/g, "\n\n");

  // Convert \subsection{title} to markdown heading
  content = content.replace(/\\subsection\{([^}]+)\}/g, "\n\n### $1\n\n");

  // Convert \section{title} to markdown heading
  content = content.replace(/\\section\{([^}]+)\}/g, "\n\n## $1\n\n");

  // Handle LaTeX itemize environment
  content = content.replace(
    /\\begin\{itemize\}([\s\S]*?)\\end\{itemize\}/g,
    (_, items) =>
      "\n" +
      items
        .split("\\item")
        .filter(Boolean)
        .map((item: string) => `* ${item.trim()}`)
        .join("\n") +
      "\n"
  );

  // Handle LaTeX enumerate environment
  content = content.replace(
    /\\begin\{enumerate\}([\s\S]*?)\\end\{enumerate\}/g,
    (_, items) => {
      let i = 1;
      return (
        "\n" +
        items
          .split("\\item")
          .filter(Boolean)
          .map((item: string) => `${i++}. ${item.trim()}`)
          .join("\n") +
        "\n"
      );
    }
  );

  // Convert \textbf{text} to markdown bold
  content = content.replace(/\\textbf\{([^}]+)\}/g, "**$1**");

  // Convert \textit{text} to markdown italic
  content = content.replace(/\\textit\{([^}]+)\}/g, "*$1*");

  // Convert \vec{x} to $\vec{x}$ (vector notation)
  content = content.replace(/([^$])\\vec\{([^}]+)\}/g, "$1$\\vec{$2}$");

  // Leave equation environments as is for KaTeX processing
  // But ensure they have proper spacing and create proper markdown math blocks
  content = content.replace(
    /\\begin\{equation\}([\s\S]*?)\\end\{equation\}/g,
    "\n\n$$\n$1\n$$\n\n"
  );

  // Handle inline math by ensuring proper spacing
  // But don't double-convert already converted math
  content = content.replace(/([^$])(\$[^$\n]+\$)([^$])/g, "$1 $2 $3");

  // Convert \texttt{text} to markdown code
  content = content.replace(/\\texttt\{([^}]+)\}/g, "`$1`");

  // Handle LaTeX urls
  content = content.replace(/\\url\{([^}]+)\}/g, "<$1>");

  // Convert LaTeX hyperref links
  content = content.replace(/\\href\{([^}]+)\}\{([^}]+)\}/g, "[$2]($1)");

  // Convert \emph{text} to markdown emphasis
  content = content.replace(/\\emph\{([^}]+)\}/g, "*$1*");

  // Convert LaTeX quote environments to blockquotes
  content = content.replace(
    /\\begin\{quote\}([\s\S]*?)\\end\{quote\}/g,
    (_, text) =>
      text
        .split("\n")
        .map((line: string) => `> ${line}`)
        .join("\n")
  );

  // Convert LaTeX tabular environment to HTML tables
  content = content.replace(
    /\\begin\{tabular\}\{([^}]+)\}([\s\S]*?)\\end\{tabular\}/g,
    (_, __, tableContent) => {
      const rows = tableContent
        .split("\\\\")
        .filter((row: string) => row.trim());
      let tableHtml = "<table>\n";
      rows.forEach((row: string, index: number) => {
        const cells = row.split("&").map((cell: string) => cell.trim());
        tableHtml += "  <tr>\n";
        for (const cell of cells) {
          const tag = index === 0 ? "th" : "td";
          tableHtml += `    <${tag}>${cell}</${tag}>\n`;
        }
        tableHtml += "  </tr>\n";
      });
      tableHtml += "</table>";
      return tableHtml;
    }
  );

  // Add a newline before each paragraph if not already there
  content = content.replace(/([^\n])\n([^\n])/g, "$1\n\n$2");

  // Remove double spaces
  content = content.replace(/ {2,}/g, " ");

  return content;
}

// Paper text (LaTeX-flavoured markdown) to HTML with KaTeX math. Runs on the server when a paper page is
// built, so the text is in the HTML and none of this ships to the browser.
export async function renderLatex(content: string): Promise<string> {
  const html = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex, { strict: false, trust: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(preprocessLatex(content));
  return String(html);
}
