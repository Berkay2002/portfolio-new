"use client";

import {
  Check,
  ChevronDown,
  ChevronLeft,
  Clipboard,
  Download,
  ExternalLink,
  Github,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import type { IconType } from "react-icons";
import { SiClaude, SiNpm, SiOpenai } from "react-icons/si";
import { useLanguage } from "@/components/layout/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExpandableImage } from "@/components/ui/expandable-image";
import type { Project } from "@/types";

const PDFViewerPopup = dynamic(
  () => import("@/components/ui/pdf-viewer-popup").then((mod) => mod.PDFViewerPopup),
  { ssr: false }
);

type ProjectPageContentProps = {
  project: Project;
};

const projectLinkIcons: Record<string, IconType | undefined> = {
  claude: SiClaude,
  npm: SiNpm,
  openai: SiOpenai,
};

function renderProjectLinkIcon(icon?: string) {
  if (icon === "agent-stack") {
    return (
      <span className="relative inline-flex h-4 w-6 shrink-0">
        <SiClaude className="absolute left-0 top-0 h-4 w-4" />
        <span className="absolute left-2 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-1 ring-background">
          <SiOpenai className="h-3.5 w-3.5" />
        </span>
      </span>
    );
  }

  const IconComponent = icon ? projectLinkIcons[icon] : undefined;
  return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <Ignore>
export default function ProjectPageContent({
  project,
}: ProjectPageContentProps) {
  const { t, locale } = useLanguage();
  const [copiedAction, setCopiedAction] = useState<string | null>(null);

  // Get localized content based on selected language
  const getLocalizedContent = (enContent?: string, svContent?: string) => {
    if (locale === "sv" && svContent) {
      return svContent;
    }
    return enContent || "";
  };

  // Get localized array content based on selected language
  const getLocalizedArray = (enArray?: string[], svArray?: string[]) => {
    if (locale === "sv" && svArray && svArray.length > 0) {
      return svArray;
    }
    return enArray || [];
  };

  const copyCommand = async (key: string, command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedAction(key);
      window.setTimeout(() => setCopiedAction(null), 1600);
    } catch {
      setCopiedAction(null);
    }
  };

  const getLocalizedMicroservices = (
    services?: {
      name: string;
      description: string;
      descriptionSv?: string;
      technologies?: string[];
      link?: string;
    }[]
  ) => {
    if (!services) return [];
    return services.map((svc) => ({
      ...svc,
      description:
        locale === "sv" && svc.descriptionSv ? svc.descriptionSv : svc.description,
    }));
  };

  return (
    <Container className="pt-2 pb-6">
      {/* Back button */}
      <Link
        className="mb-3 inline-flex items-center text-muted-foreground text-sm transition-colors hover:text-foreground"
        href="/?section=projects"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        {t("projectPage.backToProjects")}
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="space-y-8 lg:col-span-2">
          <div>
            <h1 className="font-bold text-3xl tracking-tight">
              {project.title}
            </h1>
            {project.institution && (
              <p className="mt-1 text-lg text-muted-foreground">
                {project.institution}
              </p>
            )}
          </div>

          {/* Hero video or image */}
          {project.video ? (
            <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
              <video
                autoPlay
                className="h-full w-full object-cover object-top"
                loop
                muted
                playsInline
                poster={project.image}
              >
                <source src={project.video} type="video/mp4" />
              </video>
            </div>
          ) : project.image ? (
            <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
              <ExpandableImage
                alt={project.imageAlt || project.title}
                className="object-cover object-top"
                fill
                src={project.image}
                unoptimized
              />
            </div>
          ) : null}

          {/* Project description */}
          <div className="space-y-4">
            <h2 className="font-semibold text-xl">
              {t("projectPage.overview")}
            </h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                {getLocalizedContent(
                  project.detailedDescription,
                  project.detailedDescriptionSv
                ) ||
                  getLocalizedContent(
                    project.description,
                    project.descriptionSv
                  )}
              </p>
            </div>
          </div>

          {/* Features section */}
          {((project.features && project.features.length > 0) ||
            (project.featuresSv &&
              locale === "sv" &&
              project.featuresSv.length > 0)) && (
            <div className="space-y-4">
              <h2 className="font-semibold text-xl">
                {t("projectPage.keyFeatures")}
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                {getLocalizedArray(project.features, project.featuresSv).map(
                  (feature) => (
                    <li key={feature}>{feature}</li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Microservices section */}
          {project.microservices && project.microservices.length > 0 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-xl">Microservices</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {getLocalizedMicroservices(project.microservices).map((svc) => (
                  <Card key={svc.name} className="border bg-card p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-lg leading-tight">{svc.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{svc.description}</p>
                      </div>
                      {svc.link && (
                        <Link
                          aria-label={`${svc.name} GitHub`}
                          className="inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
                          href={svc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                    {svc.technologies && svc.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {svc.technologies.map((tech) => (
                          <Badge key={tech} variant="tech" className="text-[0.7rem] py-0.5">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Challenges and solutions */}
          {(project.challenges ||
            project.solution ||
            (locale === "sv" &&
              (project.challengesSv || project.solutionSv))) && (
            <div className="space-y-4">
              {((project.challenges && project.challenges.length > 0) ||
                (locale === "sv" &&
                  project.challengesSv &&
                  project.challengesSv.length > 0)) && (
                <>
                  <h2 className="font-semibold text-xl">
                    {t("projectPage.challenges")}
                  </h2>
                  <ul className="list-disc space-y-2 pl-5">
                    {getLocalizedArray(
                      project.challenges,
                      project.challengesSv
                    ).map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </>
              )}

              {(project.solution ||
                (locale === "sv" && project.solutionSv)) && (
                <>
                  <h2 className="font-semibold text-xl">
                    {t("projectPage.solution")}
                  </h2>
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p>
                      {getLocalizedContent(
                        project.solution,
                        project.solutionSv
                      )}
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Outcome/results */}
          {(project.outcome || (locale === "sv" && project.outcomeSv)) && (
            <div className="space-y-4">
              <h2 className="font-semibold text-xl">
                {t("projectPage.outcome")}
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p>{getLocalizedContent(project.outcome, project.outcomeSv)}</p>
              </div>
            </div>
          )}

          {/* Image gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-xl">
                {t("projectPage.gallery")}
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {project.gallery.map((item) => (
                  <div
                    className="group relative aspect-video overflow-hidden rounded-lg border bg-muted"
                    key={item.image}
                  >
                    {item.video ? (
                      <video
                        autoPlay
                        className="h-full w-full object-cover object-top"
                        loop
                        muted
                        playsInline
                        poster={item.image}
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    ) : (
                      <ExpandableImage
                        alt={item.alt}
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        fill
                        src={item.image}
                        unoptimized
                      />
                    )}
                    {(item.caption || (locale === "sv" && item.captionSv)) && (
                      <div className="absolute inset-x-0 bottom-0 bg-background/80 p-2 text-sm backdrop-blur-xs">
                        {getLocalizedContent(item.caption, item.captionSv)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">
              {t("projectPage.projectInfo")}
            </h2>

            {project.projectInfo && project.projectInfo.length > 0 && (
              <div className="mb-6 space-y-3">
                {project.projectInfo.map((item) => {
                  const label = getLocalizedContent(item.label, item.labelSv);
                  const value = getLocalizedContent(item.value, item.valueSv);

                  return (
                    <div key={`${item.label}-${item.value}`}>
                      <h3 className="font-medium text-muted-foreground text-sm">
                        {label}
                      </h3>
                      {item.href ? (
                        <Link
                          className="text-sm underline-offset-4 hover:underline"
                          href={item.href}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {value}
                        </Link>
                      ) : (
                        <p className="text-sm">{value}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="mb-2 font-medium text-muted-foreground text-sm">
                {t("projectPage.technologies")}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="tech">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              {project.projectLinks?.map((item) => {
                const label = getLocalizedContent(item.label, item.labelSv);
                const actionKey = `${item.label}-${item.href || item.command || ""}`;
                const itemIcon = renderProjectLinkIcon(item.icon);

                if (item.items && item.items.length > 0) {
                  return (
                    <DropdownMenu key={`${item.label}-dropdown`}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          className="w-full justify-between"
                          type="button"
                          variant="outline"
                        >
                          <span>{label}</span>
                          <span className="inline-flex items-center gap-2">
                            {itemIcon}
                            <ChevronDown className="h-4 w-4" />
                          </span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-[var(--radix-dropdown-menu-trigger-width)]"
                      >
                        {item.items.map((dropdownItem) => {
                          const itemLabel = getLocalizedContent(
                            dropdownItem.label,
                            dropdownItem.labelSv
                          );
                          const dropdownActionKey = `${item.label}-${dropdownItem.label}-${dropdownItem.href || dropdownItem.command || ""}`;
                          const dropdownIcon = renderProjectLinkIcon(
                            dropdownItem.icon
                          );

                          if (dropdownItem.href) {
                            return (
                              <DropdownMenuItem
                                asChild
                                key={dropdownActionKey}
                              >
                                <Link
                                  href={dropdownItem.href}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  {dropdownIcon || (
                                    <ExternalLink className="h-4 w-4" />
                                  )}
                                  <span>{itemLabel}</span>
                                </Link>
                              </DropdownMenuItem>
                            );
                          }

                          if (dropdownItem.command) {
                            return (
                              <DropdownMenuItem
                                key={dropdownActionKey}
                                onSelect={(event) => {
                                  event.preventDefault();
                                  void copyCommand(
                                    dropdownActionKey,
                                    dropdownItem.command as string
                                  );
                                }}
                              >
                                {dropdownIcon || (
                                  <Clipboard className="h-4 w-4" />
                                )}
                                <span className="flex-1">{itemLabel}</span>
                                {copiedAction === dropdownActionKey && (
                                  <Check className="h-4 w-4" />
                                )}
                              </DropdownMenuItem>
                            );
                          }

                          return null;
                        })}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                if (item.href) {
                  return (
                    <Button
                      asChild
                      className="w-full justify-between"
                      key={actionKey}
                      variant="outline"
                    >
                      <Link
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>{label}</span>
                        {itemIcon || (
                          <ExternalLink className="h-4 w-4" />
                        )}
                      </Link>
                    </Button>
                  );
                }

                if (item.command) {
                  return (
                    <Button
                      className="w-full justify-between"
                      key={actionKey}
                      onClick={() => {
                        void copyCommand(actionKey, item.command as string);
                      }}
                      type="button"
                      variant="outline"
                    >
                      <span>{label}</span>
                      {copiedAction === actionKey ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        itemIcon || <Clipboard className="h-4 w-4" />
                      )}
                    </Button>
                  );
                }

                return null;
              })}

              {project.frontendLink && (
                <Button
                  asChild
                  className="w-full justify-between"
                  variant="outline"
                >
                  <Link href={project.frontendLink}>
                    <span>View Frontend</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              )}

              {project.playgroundLink && (
                <Button
                  asChild
                  className="w-full justify-between"
                  variant="outline"
                >
                  <Link href={project.playgroundLink}>
                    <span>{t("projectPage.viewPlayground")}</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              )}

              {project.link && (
                <Button
                  asChild
                  className="w-full justify-between"
                  variant="outline"
                >
                  {project.link.endsWith(".zip") ? (
                    <a href={project.link} download>
                      <span>
                        {(locale === "sv" && project.linkLabelSv) ||
                          project.linkLabel ||
                          t("projectPage.viewLiveProject")}
                      </span>
                      <Download className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>
                        {(locale === "sv" && project.linkLabelSv) ||
                          project.linkLabel ||
                          t("projectPage.viewLiveProject")}
                      </span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </Button>
              )}

              {project.githubLink && (
                <Button
                  asChild
                  className="w-full justify-between"
                  variant="outline"
                >
                  <Link
                    href={project.githubLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{t("projectPage.viewSourceCode")}</span>
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              )}

              {project.paperLink && (
                <PDFViewerPopup
                  fileName={`${project.title} - Research Paper`}
                  pdfUrl={
                    project.paperLink.endsWith(".pdf")
                      ? project.paperLink
                      : "/papers/animatch-paper.pdf"
                  }
                  triggerClassName="w-full justify-between"
                />
              )}
            </div>
          </Card>

          {/* Related projects (you could add this later) */}
        </div>
      </div>
    </Container>
  );
}
