/** biome-ignore-all lint/correctness/noUnusedVariables: <Dont worry> */
/** biome-ignore-all lint/correctness/noUnusedImports: <Dont worry> */
"use client";

import { motion, useScroll } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/components/layout/language-provider";
import { Badge } from "@/components/ui/badge";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/lib/data/portfolio-data";

// Array of gradient variants to cycle through
const gradientVariants = ["blue", "green", "purple", "orange", "pink"] as const;

// Animation timing constants (avoid magic numbers)
const CARD_ANIMATION_DURATION = 0.5;
const CARD_ANIMATION_DELAY_STEP = 0.1;

// Maximum number of tech badges to show on project card (avoid magic number)
const MAX_TECH_BADGES = 3;

// Number of skeleton placeholders to render while loading
const PLACEHOLDER_COUNT = 3;

// Generate stable placeholder keys (use crypto.randomUUID if available, fallback to deterministic ids)
const PLACEHOLDER_KEYS = (() => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return Array.from({ length: PLACEHOLDER_COUNT }, () => crypto.randomUUID());
  }
  return Array.from(
    { length: PLACEHOLDER_COUNT },
    (_, i) => `placeholder-${i + 1}`
  );
})();

// Create a client-side projects loader component
const ProjectsLoader = () => (
  <div className="grid animate-pulse grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {PLACEHOLDER_KEYS.map((key) => (
      <div
        className="relative h-64 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800"
        key={key}
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
      transition={{
        duration: CARD_ANIMATION_DURATION,
        delay: index * CARD_ANIMATION_DELAY_STEP,
      }}
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
              {project.technologies.slice(0, MAX_TECH_BADGES).map((tech) => (
                <Badge
                  className="py-0.5 text-[0.65rem]"
                  key={tech}
                  variant="tech"
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > MAX_TECH_BADGES && (
                <Badge className="py-0.5 text-[0.65rem]" variant="outline">
                  +{project.technologies.length - MAX_TECH_BADGES}
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
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Visit {project.title}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Visit live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
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
