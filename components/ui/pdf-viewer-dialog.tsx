"use client";

import { Download, FileText, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface PdfViewerDialogProps {
  pdfUrl: string;
  fileName: string;
}

export function PDFViewerDialog({ pdfUrl, fileName }: PdfViewerDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button className="w-full justify-between gap-2" variant="outline">
          <span>View Research Paper</span>
          <FileText className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[80vh] p-0 sm:max-w-[900px]">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="font-semibold text-lg">{fileName}</h2>
          <div className="flex items-center gap-2">
            <Button asChild className="gap-1" size="sm" variant="outline">
              <a download href={pdfUrl} onClick={(e) => e.stopPropagation()}>
                <Download className="h-4 w-4" />
                <span>Download</span>
              </a>
            </Button>
            <Button
              className="h-8 w-8 p-0"
              onClick={() => setIsOpen(false)}
              size="sm"
              variant="ghost"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
        <div className="h-full w-full overflow-hidden">
          <iframe
            className="h-full w-full"
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            title={fileName}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
