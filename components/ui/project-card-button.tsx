"use client";

import { Code, ExternalLink } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectCardButtonProps = {
  href: string;
  variant?:
    | "default"
    | "outline"
    | "outline-solid"
    | "secondary"
    | "destructive"
    | "ghost"
    | "link";
  className?: string;
  icon?: React.ReactNode;
  text: string;
  isExternal?: boolean;
};

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
      className={cn("gap-1 font-medium text-sm", className)}
      size="sm"
      variant={variant}
    >
      <Link
        href={href}
        rel={isExternal ? "noopener noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
      >
        {icon}
        <span>{text}</span>
        {isExternal && !icon && <ExternalLink className="ml-1 h-3.5 w-3.5" />}
      </Link>
    </Button>
  );
}

export function ViewDetailsButton({
  projectId,
  className,
}: {
  projectId: string;
  className?: string;
}) {
  const { t } = useLanguage();

  return (
    <ProjectCardButton
      className={cn("bg-blue-600 text-white hover:bg-blue-700", className)}
      href={`/projects/${projectId}`}
      text={t("sections.projects.viewDetails")}
      variant="default"
    />
  );
}

export function ViewProjectButton({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  const { t } = useLanguage();

  return (
    <ProjectCardButton
      className={className}
      href={href}
      icon={<ExternalLink className="mr-1 h-3.5 w-3.5" />}
      isExternal
      text={t("sections.projects.viewProject")}
      variant="secondary"
    />
  );
}

export function SourceCodeButton({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  return (
    <ProjectCardButton
      className={cn("hover:bg-slate-100 dark:hover:bg-slate-800", className)}
      href={href}
      icon={<Code className="mr-1 h-3.5 w-3.5" />}
      isExternal
      text="Source"
      variant="outline"
    />
  );
}
