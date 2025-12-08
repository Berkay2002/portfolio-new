"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FastTalkComparison from "@/components/fasttalk-benchmark-dashboard";

export default function TDDE19Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
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

      {/* Main content with FastTalk dashboard */}
      <div className="flex-1">
        <FastTalkComparison />
      </div>
    </div>
  );
}
