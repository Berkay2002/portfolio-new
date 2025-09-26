"use client";

import { ChevronLeft, ExternalLink, Github, Code, Play, Download, GitFork } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ExpandableImage } from "@/components/ui/expandable-image";
import { PDFViewerPopup } from "@/components/ui/pdf-viewer-popup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import type { Project } from "@/types";

type ProjectPageContentProps = {
  project: Project;
  mdxContent?: React.ComponentType;
};

export default function ProjectPageContentEnhanced({
  project,
  mdxContent: MDXContent,
}: ProjectPageContentProps) {
  const [mounted, setMounted] = useState(false);
  const { t, locale } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLocalizedContent = (enContent?: string, svContent?: string) => {
    if (locale === "sv" && svContent) {
      return svContent;
    }
    return enContent || "";
  };

  const getLocalizedArray = (enArray?: string[], svArray?: string[]) => {
    if (locale === "sv" && svArray && svArray.length > 0) {
      return svArray;
    }
    return enArray || [];
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

          {/* Hero image */}
          {project.image && (
            <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
              <ExpandableImage
                alt={project.imageAlt || project.title}
                className="object-cover object-top"
                fill
                src={project.image}
                unoptimized
              />
            </div>
          )}

          {/* Live Demo Embed */}
          {project.liveDemo && (
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Play className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-xl">
                  {project.liveDemo.title || "Live Demo"}
                </h2>
              </div>
              {project.liveDemo.description && (
                <p className="text-muted-foreground mb-4">
                  {getLocalizedContent(
                    project.liveDemo.description,
                    project.liveDemo.descriptionSv
                  )}
                </p>
              )}
              <div className="border rounded-lg overflow-hidden bg-background">
                <iframe
                  src={project.liveDemo.url}
                  className="w-full border-0"
                  height={project.liveDemo.height || 600}
                  title={`${project.title} Live Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                />
              </div>
            </Card>
          )}

          {/* Architecture Diagram */}
          {project.architectureDiagram && (
            <Card className="p-6">
              <h2 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Architecture Overview
              </h2>
              {project.architectureDiagram.description && (
                <p className="text-muted-foreground mb-4">
                  {getLocalizedContent(
                    project.architectureDiagram.description,
                    project.architectureDiagram.descriptionSv
                  )}
                </p>
              )}
              <div className="relative border rounded-lg overflow-hidden bg-muted p-4">
                <ExpandableImage
                  src={project.architectureDiagram.image}
                  alt={project.architectureDiagram.alt}
                  className="w-full h-auto"
                  width={800}
                  height={600}
                  unoptimized
                />
              </div>
            </Card>
          )}

          {/* Content Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="setup">Setup</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* MDX Content or fallback to existing description */}
              {MDXContent ? (
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <MDXContent />
                </div>
              ) : (
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
              )}

              {/* Outcome/results */}
              {(project.outcome || (locale === "sv" && project.outcomeSv)) && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    {t("projectPage.outcome")}
                  </h3>
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p>{getLocalizedContent(project.outcome, project.outcomeSv)}</p>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              {/* Features section */}
              {((project.features && project.features.length > 0) ||
                (project.featuresSv &&
                  locale === "sv" &&
                  project.featuresSv.length > 0)) && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    {t("projectPage.keyFeatures")}
                  </h3>
                  <ul className="space-y-3">
                    {getLocalizedArray(project.features, project.featuresSv).map(
                      (feature, index) => (
                        <li key={index} className="flex gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Image gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    {t("projectPage.gallery")}
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {project.gallery.map((item, index) => (
                      <div
                        className="group relative aspect-video overflow-hidden rounded-lg border bg-muted"
                        key={index}
                      >
                        <ExpandableImage
                          alt={item.alt}
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          fill
                          src={item.image}
                          unoptimized
                        />
                        {(item.caption || (locale === "sv" && item.captionSv)) && (
                          <div className="absolute inset-x-0 bottom-0 bg-background/80 p-2 text-sm backdrop-blur-sm">
                            {getLocalizedContent(item.caption, item.captionSv)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="technical" className="space-y-6">
              {/* Challenges and solutions */}
              {(project.challenges ||
                project.solution ||
                (locale === "sv" &&
                  (project.challengesSv || project.solutionSv))) && (
                <div className="space-y-6">
                  {((project.challenges && project.challenges.length > 0) ||
                    (locale === "sv" &&
                      project.challengesSv &&
                      project.challengesSv.length > 0)) && (
                    <div>
                      <h3 className="font-semibold text-lg mb-4">
                        {t("projectPage.challenges")}
                      </h3>
                      <ul className="space-y-3">
                        {getLocalizedArray(
                          project.challenges,
                          project.challengesSv
                        ).map((challenge, index) => (
                          <li key={index} className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(project.solution ||
                    (locale === "sv" && project.solutionSv)) && (
                    <div>
                      <h3 className="font-semibold text-lg mb-4">
                        {t("projectPage.solution")}
                      </h3>
                      <div className="prose prose-neutral dark:prose-invert max-w-none">
                        <p>
                          {getLocalizedContent(
                            project.solution,
                            project.solutionSv
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value="setup" className="space-y-6">
              {/* Installation Guide */}
              {project.installation && (
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Download className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Installation Guide</h3>
                  </div>
                  
                  {project.installation.prerequisites && (
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Prerequisites:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {project.installation.prerequisites.map((prereq, index) => (
                          <li key={index} className="text-sm">{prereq}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Steps:</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      {getLocalizedArray(
                        project.installation.steps,
                        project.installation.stepsSv
                      ).map((step, index) => (
                        <li key={index} className="text-sm">{step}</li>
                      ))}
                    </ol>
                  </div>
                  
                  {project.installation.additionalNotes && (
                    <div className="mt-4 p-3 bg-muted rounded-md">
                      <p className="text-sm text-muted-foreground">
                        {getLocalizedContent(
                          project.installation.additionalNotes,
                          project.installation.additionalNotesSv
                        )}
                      </p>
                    </div>
                  )}
                </Card>
              )}

              {/* Contributing Guidelines */}
              {project.contributing && (
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GitFork className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Contributing</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Guidelines:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {getLocalizedArray(
                          project.contributing.guidelines,
                          project.contributing.guidelinesSv
                        ).map((guideline, index) => (
                          <li key={index} className="text-sm">{guideline}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {project.contributing.setupSteps && (
                      <div>
                        <h4 className="font-medium mb-2">Development Setup:</h4>
                        <ol className="list-decimal pl-5 space-y-1">
                          {getLocalizedArray(
                            project.contributing.setupSteps,
                            project.contributing.setupStepsSv
                          ).map((step, index) => (
                            <li key={index} className="text-sm">{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="mb-4 font-semibold text-xl">
              {t("projectPage.projectInfo")}
            </h2>

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
              {project.link && (
                <Button
                  asChild
                  className="w-full justify-between"
                  variant="outline"
                >
                  <Link
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{t("projectPage.viewLiveProject")}</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
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

              {project.paperLink && mounted && (
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
        </div>
      </div>
    </Container>
  );
}