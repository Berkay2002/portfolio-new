"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Download, X } from "lucide-react";

interface PDFViewerDialogProps {
  pdfUrl: string;
  fileName: string;
}

export function PDFViewerDialog({ pdfUrl, fileName }: PDFViewerDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-between gap-2">
          <span>View Research Paper</span>
          <FileText className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] h-[80vh] p-0">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold">{fileName}</h2>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="gap-1"
              asChild
            >
              <a 
                href={pdfUrl}
                download
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </a>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
        <div className="h-full w-full overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            className="w-full h-full"
            title={fileName}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
} 