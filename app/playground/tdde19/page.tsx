"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TDDE19Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex items-center gap-4 px-4 py-4">
          <Link href="/playground">
            <Button type="button" variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Playground
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">TDDE19 - FastTalk</h1>
            <p className="text-sm text-muted-foreground">Advanced Project Course - AI and Machine Learning</p>
          </div>
        </div>
      </div>

      {/* Main content with iframe */}
      <div className="flex-1 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto h-full px-4 py-6">
          <div className="relative h-[calc(100vh-12rem)] w-full overflow-hidden rounded-lg border bg-background shadow-lg">
            <iframe
              src="https://claude.site/public/artifacts/42e793ed-8003-4b23-be45-00f3f0957ddb/embed"
              title="TDDE19 - Advanced Programming in C++"
              className="h-full w-full"
              allow="clipboard-write"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
