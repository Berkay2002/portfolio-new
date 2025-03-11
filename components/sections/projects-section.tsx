"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, FolderKanban } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Suspense } from "react";
import { cn } from "@/lib/utils";

import { projects } from "@/lib/data/portfolio-data";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectImagePlaceholder } from "@/components/ui/project-image-placeholder";
import { BlurImage } from "@/components/ui/blur-image";
import { useLanguage } from "@/components/layout/language-provider";
import { ViewDetailsButton, ViewProjectButton, SourceCodeButton } from "@/components/ui/project-card-button";

// Array of gradient variants to cycle through
const gradientVariants = ["blue", "green", "purple", "orange", "pink"] as const;

// Create a client-side projects loader component
const ProjectsLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div 
          key={i} 
          className="relative h-64 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden"
        >
          <div className="absolute bottom-0 w-full p-4">
            <div className="h-5 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Project card component with better accessibility
const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const gradientVariant = gradientVariants[index % gradientVariants.length];
  const { t, locale } = useLanguage();
  
  // Get localized description based on selected language
  const getLocalizedDescription = () => {
    if (locale === "sv" && project.descriptionSv) {
      return project.descriptionSv;
    }
    return project.description;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl border hover:border-blue-500 group">
        {/* Project Image */}
        <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt || project.title}
              width={400}
              height={192}
              className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          ) : (
            <ProjectImagePlaceholder 
              title={project.title}
              variant={gradientVariant}
            />
          )}
          
          {/* Technology badges overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="tech" className="text-[0.65rem] py-0.5">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="outline" className="text-[0.65rem] py-0.5">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <CardHeader className="pb-2 pt-3">
          <motion.div 
            className="space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="text-xl flex items-center justify-between gap-2">
              <Link href={`/projects/${project.id}`} className="hover:text-blue-500 transition-colors">
                <span>{project.title}</span>
              </Link>
              {project.link && (
                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Visit {project.title}</span>
                </Link>
              )}
            </CardTitle>
            {project.institution && (
              <p className="text-sm text-muted-foreground">{project.institution}</p>
            )}
          </motion.div>
        </CardHeader>
        
        <CardContent className="pb-4 pt-0 flex-grow">
          <p className="text-muted-foreground line-clamp-3 group-hover:text-foreground/80 transition-colors">
            {getLocalizedDescription()}
          </p>
        </CardContent>
        
        <CardFooter className="pt-0 mt-auto flex justify-between">
          <div className="flex gap-2">
            {project.githubLink && (
              <SourceCodeButton href={project.githubLink} />
            )}
          </div>
          
          <div className="flex gap-2 ml-auto">
            <ViewDetailsButton projectId={project.id} />
            
            {project.link && (
              <ViewProjectButton href={project.link} />
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export function ProjectsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  return (
    <section id="projects" className="py-16 bg-background">
      <Container>
        <SectionHeading
          title={t("sections.projects.title")}
        />
        
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
} 