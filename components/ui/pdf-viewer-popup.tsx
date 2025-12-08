"use client";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { cn } from "@/lib/utils";
import { Button } from "./button";

type PdfViewerPopupProps = {
  pdfUrl: string;
  fileName: string;
  triggerClassName?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline-solid"
    | "secondary"
    | "ghost"
    | "link";
};

export function PDFViewerPopup({
  pdfUrl,
  fileName,
  triggerClassName,
  buttonVariant = "outline-solid",
}: PdfViewerPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn("gap-2", triggerClassName)}
          variant={buttonVariant}
        >
          <span>{t("projectPage.viewResearchPaper")}</span>
          <FileText className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 max-h-[95vh] w-[1000px] max-w-[95vw] transform gap-0 overflow-hidden rounded-lg border bg-card p-0 shadow-lg">
        <div className="flex items-center justify-between border-b bg-card p-4">
          <DialogTitle asChild>
            <h3 className="font-medium text-card-foreground">{fileName}</h3>
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button
              asChild
              className="h-8 gap-1 bg-background hover:bg-muted"
              size="sm"
              variant="outline"
            >
              <a
                download
                href={pdfUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Download className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only">
                  {t("projectPage.download")}
                </span>
              </a>
            </Button>
            <Button
              asChild
              className="h-8 gap-1 bg-background hover:bg-muted"
              size="sm"
              variant="outline"
            >
              <a href={pdfUrl} rel="noopener noreferrer" target="_blank">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only sm:not-sr-only">
                  {t("projectPage.open")}
                </span>
              </a>
            </Button>
            <Button
              className="h-8 w-8 p-0 hover:bg-muted"
              onClick={() => setIsOpen(false)}
              size="sm"
              variant="ghost"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">{t("projectPage.close")}</span>
            </Button>
          </div>
        </div>

        <div className="relative h-[80vh] w-full bg-white dark:bg-zinc-900">
          <iframe
            className="h-full w-full border-0"
            src={`${pdfUrl}#view=FitH&toolbar=1&navpanes=1`}
            title={fileName}
          />
        </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
