import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ViewDetailsButton,
  ViewProjectButton,
} from "@/components/ui/project-card-button";
import { ProjectImagePlaceholder } from "@/components/ui/project-image-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data/portfolio-data";

export const metadata = {
  title: "Projects | Berkay Orhan",
  description: "A showcase of all projects by Berkay Orhan.",
};

const gradientVariants = ["blue", "green", "purple", "orange", "pink"] as const;
const MAX_TECH_BADGES = 3;

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <SectionHeading title="Projects" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const gradientVariant =
            gradientVariants[index % gradientVariants.length];
          return (
            <Card
              className="group flex h-full flex-col overflow-hidden border transition-all duration-300 hover:border-blue-500 hover:shadow-xl"
              key={project.id}
            >
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
                <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-background/90 to-transparent p-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies
                      .slice(0, MAX_TECH_BADGES)
                      .map((tech) => (
                        <Badge
                          className="py-0.5 text-[0.65rem]"
                          key={tech}
                          variant="tech"
                        >
                          {tech}
                        </Badge>
                      ))}
                    {project.technologies.length > MAX_TECH_BADGES && (
                      <Badge
                        className="py-0.5 text-[0.65rem]"
                        variant="outline"
                      >
                        +{project.technologies.length - MAX_TECH_BADGES}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <CardHeader className="pt-3 pb-2">
                <CardTitle className="flex items-center justify-between gap-2 text-xl">
                  <Link
                    className="transition-colors hover:text-blue-500"
                    href={`/projects/${project.id}`}
                  >
                    <span>{project.title}</span>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="grow pt-0 pb-4">
                <p className="line-clamp-3 text-muted-foreground transition-colors group-hover:text-foreground/80">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="mt-auto flex justify-end gap-2 pt-0">
                <ViewDetailsButton projectId={project.id} />
                {project.link && <ViewProjectButton href={project.link} />}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
