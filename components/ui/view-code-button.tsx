"use client";

import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ViewCodeButtonProps = {
  href: string;
  className?: string;
};

export function ViewCodeButton({ href, className }: ViewCodeButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 font-medium text-neutral-800 text-sm shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800/50",
        className
      )}
      variant="outline"
    >
      <Link href={href}>
        <Code className="mr-1 h-3.5 w-3.5" />
        <span>Source</span>
      </Link>
    </Button>
  );
}

type ViewDetailsButtonProps = {
  href: string;
  className?: string;
};

export function ProjectViewDetailsButton({
  href,
  className,
}: ViewDetailsButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "flex items-center gap-1.5 rounded-md bg-neutral-900 px-3 py-1.5 font-medium text-sm text-white shadow-sm hover:bg-black dark:bg-blue-600 dark:hover:bg-blue-700",
        className
      )}
    >
      <Link href={href}>
        <span>View Details</span>
      </Link>
    </Button>
  );
}

type ViewProjectButtonProps = {
  href: string;
  className?: string;
};

export function ProjectViewLiveButton({
  href,
  className,
}: ViewProjectButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-1.5 font-medium text-neutral-800 text-sm shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800/50",
        className
      )}
      variant="outline"
    >
      <Link href={href} rel="noopener noreferrer" target="_blank">
        <span>View Project</span>
        <ExternalLink className="ml-1 h-3.5 w-3.5" />
      </Link>
    </Button>
  );
}
