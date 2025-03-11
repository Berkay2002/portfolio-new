"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Code } from "lucide-react";

interface ViewCodeButtonProps {
  href: string;
  className?: string;
}

export function ViewCodeButton({ href, className }: ViewCodeButtonProps) {
  return (
    <Button 
      asChild 
      variant="outline" 
      className={cn("flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800/50", className)}
    >
      <Link href={href}>
        <Code className="mr-1 h-3.5 w-3.5" />
        <span>Source</span>
      </Link>
    </Button>
  );
}

interface ViewDetailsButtonProps {
  href: string;
  className?: string;
}

export function ProjectViewDetailsButton({ href, className }: ViewDetailsButtonProps) {
  return (
    <Button 
      asChild 
      className={cn("flex items-center gap-1.5 rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-black dark:bg-blue-600 dark:hover:bg-blue-700", className)}
    >
      <Link href={href}>
        <span>View Details</span>
      </Link>
    </Button>
  );
}

interface ViewProjectButtonProps {
  href: string;
  className?: string;
}

export function ProjectViewLiveButton({ href, className }: ViewProjectButtonProps) {
  return (
    <Button 
      asChild 
      variant="outline" 
      className={cn("flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800/50", className)}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <span>View Project</span>
        <ExternalLink className="ml-1 h-3.5 w-3.5" />
      </Link>
    </Button>
  );
} 