"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { FileText, X, Download, ExternalLink } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/layout/language-provider";

interface PDFViewerPopupProps {
  pdfUrl: string;
  fileName: string;
  triggerClassName?: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export function PDFViewerPopup({
  pdfUrl,
  fileName,
  triggerClassName,
  buttonVariant = "outline"
}: PDFViewerPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className={cn("gap-2", triggerClassName)}>
          <span>{t("projectPage.viewResearchPaper")}</span>
          <FileText className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-[1000px] p-0 gap-0 rounded-lg border bg-card shadow-lg overflow-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-between p-4 border-b bg-card">
          <h3 className="font-medium text-card-foreground">{fileName}</h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1 h-8 bg-background hover:bg-muted" asChild>
              <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only">{t("projectPage.download")}</span>
              </a>
            </Button>
            <Button variant="outline" size="sm" className="gap-1 h-8 bg-background hover:bg-muted" asChild>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only">{t("projectPage.open")}</span>
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0 hover:bg-muted" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">{t("projectPage.close")}</span>
            </Button>
          </div>
        </div>
        
        <div className="relative w-full h-[80vh] bg-white dark:bg-zinc-900">
          <iframe
            src={`${pdfUrl}#view=FitH&toolbar=1&navpanes=1`}
            className="w-full h-full border-0"
            title={fileName}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
} 