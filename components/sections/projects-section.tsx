"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, FolderKanban, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { Badge } from "@/components/ui/badge";
import { BlurImage } from "@/components/ui/blur-image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
  SourceCodeButton,
  ViewDetailsButton,
  ViewProjectButton,
} from "@/components/ui/project-card-button";
import { ProjectImagePlaceholder } from "@/components/ui/project-image-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data/portfolio-data";
import { cn } from "@/lib/utils";

// Array of gradient variants to cycle through
const gradientVariants = ["blue", "green", "purple", "orange", "pink"] as const;

// Create a client-side projects loader component
const ProjectsLoader = () => (
  <div className="grid animate-pulse grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {[1, 2, 3].map((i) => (
      <div
        className="relative h-64 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800"
        key={i}
      >
        <div className="absolute bottom-0 w-full p-4">
          <div className="mb-2 h-5 w-2/3 rounded bg-gray-300 dark:bg-gray-700" />
          <div className="h-4 w-full rounded bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
    ))}
  </div>
);

// Project card component with better accessibility
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
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
      className="h-full"
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Card className="group flex h-full flex-col overflow-hidden border transition-all duration-300 hover:border-blue-500 hover:shadow-xl">
        {/* Project Image */}
        <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          {project.image ? (
            <Image
              alt={project.imageAlt || project.title}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              height={192}
              src={project.image}
              unoptimized
              width={400}
            />
          ) : (
            <ProjectImagePlaceholder
              title={project.title}
              variant={gradientVariant}
            />
          )}

          {/* Technology badges overlay */}
          <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-background/90 to-transparent p-3">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge
                  className="py-0.5 text-[0.65rem]"
                  key={tech}
                  variant="tech"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge className="py-0.5 text-[0.65rem]" variant="outline">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <CardHeader className="pt-3 pb-2">
          <motion.div
            animate={{ opacity: 1 }}
            className="space-y-1"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="flex items-center justify-between gap-2 text-xl">
              <Link
                className="transition-colors hover:text-blue-500"
                href={`/projects/${project.id}`}
              >
                <span>{project.title}</span>
              </Link>
              {project.link && (
                <Link
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Visit {project.title}</span>
                </Link>
              )}
            </CardTitle>
            {project.institution && (
              <p className="text-muted-foreground text-sm">
                {project.institution}
              </p>
            )}
          </motion.div>
        </CardHeader>

        <CardContent className="flex-grow pt-0 pb-4">
          <p className="line-clamp-3 text-muted-foreground transition-colors group-hover:text-foreground/80">
            {getLocalizedDescription()}
          </p>
        </CardContent>

        <CardFooter className="mt-auto flex justify-between pt-0">
          <div className="flex gap-2">
            {project.githubLink && (
              <SourceCodeButton href={project.githubLink} />
            )}
          </div>

          <div className="ml-auto flex gap-2">
            <ViewDetailsButton projectId={project.id} />

            {project.link && <ViewProjectButton href={project.link} />}
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
    offset: ["start end", "end start"],
  });

  return (
    <section className="bg-background py-16" id="projects">
      <Container>
        <SectionHeading title={t("sections.projects.title")} />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
