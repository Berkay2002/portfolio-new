"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

// Maximum number of tech badges to show on project card
const MAX_TECH_BADGES = 4;

// Project card component optimized for carousel
const ProjectCarouselCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const gradientVariant = gradientVariants[index % gradientVariants.length];
  const { locale } = useLanguage();

  // Get localized description based on selected language
  const getLocalizedDescription = () => {
    if (locale === "sv" && project.descriptionSv) {
      return project.descriptionSv;
    }
    return project.description;
  };

  return (
    <Card className="group flex h-full flex-col overflow-hidden border transition-all duration-300 hover:border-blue-500 hover:shadow-xl">
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        {project.image ? (
          <Image
            alt={project.imageAlt || project.title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            height={256}
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

        {/* Project link overlay */}
        {project.link && (
          <div className="absolute top-3 right-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
                    size="icon"
                    variant="outline"
                  >
                    <Link
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Visit {project.title}</span>
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Visit live project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="flex items-start justify-between gap-2">
          <Link
            className="flex-1 transition-colors hover:text-blue-500"
            href={`/projects/${project.id}`}
          >
            <span className="text-xl leading-tight">{project.title}</span>
          </Link>
        </CardTitle>
        {project.institution && (
          <p className="text-muted-foreground text-sm">{project.institution}</p>
        )}
      </CardHeader>

      <CardContent className="flex-grow pb-4">
        <p className="mb-4 line-clamp-3 text-muted-foreground transition-colors group-hover:text-foreground/80">
          {getLocalizedDescription()}
        </p>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, MAX_TECH_BADGES).map((tech) => (
            <Badge className="py-0.5 text-[0.65rem]" key={tech} variant="tech">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > MAX_TECH_BADGES && (
            <Badge className="py-0.5 text-[0.65rem]" variant="outline">
              +{project.technologies.length - MAX_TECH_BADGES}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex justify-between pt-0">
        <div className="flex gap-2">
          {project.githubLink && <SourceCodeButton href={project.githubLink} />}
        </div>

        <div className="flex gap-2">
          <ViewDetailsButton projectId={project.id} />
          {project.link && <ViewProjectButton href={project.link} />}
        </div>
      </CardFooter>
    </Card>
  );
};

export function ProjectsCarouselSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-16" id="projects">
      <Container>
        <SectionHeading title={t("sections.projects.title")} />

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                  key={project.id}
                >
                  <div className="h-full p-1">
                    <ProjectCarouselCard index={index} project={project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View All Projects ({projects.length})</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
