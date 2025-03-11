"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { BlurImage } from "@/components/ui/blur-image";
import { PDFViewerPopup } from "@/components/ui/pdf-viewer-popup";
import { Project } from "@/types";
import { useLanguage } from "@/components/layout/language-provider";

interface ProjectPageContentProps {
  project: Project;
}

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
  const [mounted, setMounted] = useState(false);
  const { t, locale } = useLanguage();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <Container className="pt-2 pb-6">
      {/* Back button */}
      <Link href="/?section=projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-3 transition-colors">
        <ChevronLeft className="mr-1 h-4 w-4" />
        {t("projectPage.backToProjects")}
      </Link>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
            {project.institution && (
              <p className="text-lg text-muted-foreground mt-1">{project.institution}</p>
            )}
          </div>
          
          {/* Hero image */}
          {project.image && (
            <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
              {/* Standard Image component */}
              <Image
                src={project.image}
                alt={project.imageAlt || project.title}
                className="object-cover object-top"
                fill
                priority
                unoptimized
              />
            </div>
          )}
          
          {/* Project description */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{t("projectPage.overview")}</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>{project.detailedDescription || project.description}</p>
            </div>
          </div>
          
          {/* Features section */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{t("projectPage.keyFeatures")}</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Challenges and solutions */}
          {(project.challenges || project.solution) && (
            <div className="space-y-4">
              {project.challenges && project.challenges.length > 0 && (
                <>
                  <h2 className="text-xl font-semibold">{t("projectPage.challenges")}</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {project.solution && (
                <>
                  <h2 className="text-xl font-semibold">{t("projectPage.solution")}</h2>
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <p>{project.solution}</p>
                  </div>
                </>
              )}
            </div>
          )}
          
          {/* Outcome/results */}
          {project.outcome && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{t("projectPage.outcome")}</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p>{project.outcome}</p>
              </div>
            </div>
          )}
          
          {/* Image gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">{t("projectPage.gallery")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((item, index) => (
                  <div key={index} className="relative aspect-video overflow-hidden rounded-lg border bg-muted group">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      fill
                      unoptimized
                    />
                    {item.caption && (
                      <div className="absolute inset-x-0 bottom-0 bg-background/80 backdrop-blur-sm p-2 text-sm">
                        {item.caption}
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
            <h2 className="text-xl font-semibold mb-4">{t("projectPage.projectInfo")}</h2>
            
            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">{t("projectPage.technologies")}</h3>
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
                <Button asChild variant="outline" className="w-full justify-between">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <span>{t("projectPage.viewLiveProject")}</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              
              {project.githubLink && (
                <Button asChild variant="outline" className="w-full justify-between">
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <span>{t("projectPage.viewSourceCode")}</span>
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              
              {project.paperLink && mounted && (
                <PDFViewerPopup 
                  pdfUrl={project.paperLink.endsWith(".pdf") 
                    ? project.paperLink 
                    : "/papers/animatch-paper.pdf"}
                  fileName={`${project.title} - Research Paper`}
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