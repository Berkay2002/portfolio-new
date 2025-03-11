"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/layout/language-provider";

interface ProjectCardButtonProps {
  href: string;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  className?: string;
  icon?: React.ReactNode;
  text: string;
  isExternal?: boolean;
}

export function ProjectCardButton({
  href,
  variant = "outline",
  className,
  icon,
  text,
  isExternal = false,
}: ProjectCardButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      size="sm"
      className={cn(
        "gap-1 text-sm font-medium",
        className
      )}
    >
      <Link 
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {icon}
        <span>{text}</span>
        {isExternal && !icon && <ExternalLink className="h-3.5 w-3.5 ml-1" />}
      </Link>
    </Button>
  );
}

export function ViewDetailsButton({ projectId, className }: { projectId: string, className?: string }) {
  const { t } = useLanguage();
  
  return (
    <ProjectCardButton
      href={`/projects/${projectId}`}
      variant="default"
      text={t("sections.projects.viewDetails")}
      className={cn("bg-blue-600 hover:bg-blue-700 text-white", className)}
    />
  );
}

export function ViewProjectButton({ href, className }: { href: string, className?: string }) {
  const { t } = useLanguage();
  
  return (
    <ProjectCardButton
      href={href}
      variant="secondary"
      text={t("sections.projects.viewProject")}
      isExternal
      icon={<ExternalLink className="h-3.5 w-3.5 mr-1" />}
      className={className}
    />
  );
}

export function SourceCodeButton({ href, className }: { href: string, className?: string }) {
  return (
    <ProjectCardButton
      href={href}
      variant="outline"
      text="Source"
      isExternal
      icon={<Code className="h-3.5 w-3.5 mr-1" />}
      className={cn("hover:bg-slate-100 dark:hover:bg-slate-800", className)}
    />
  );
} 