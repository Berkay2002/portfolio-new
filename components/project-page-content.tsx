"use client";

import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useLanguage } from "@/components/layout/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
// ...existing code...
import { ExpandableImage } from "@/components/ui/expandable-image";
import type { Project } from "@/types";

const PDFViewerPopup = dynamic(
  () => import("@/components/ui/pdf-viewer-popup").then((mod) => mod.PDFViewerPopup),
  { ssr: false }
);

type ProjectPageContentProps = {
  project: Project;
};

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <Ignore>
export default function ProjectPageContent({
  project,
}: ProjectPageContentProps) {
  const { t, locale } = useLanguage();

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
                    <ExpandableImage
                      alt={item.alt}
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      fill
                      src={item.image}
                      unoptimized
                    />
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
