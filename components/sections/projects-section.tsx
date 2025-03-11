"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

import { projects } from "@/lib/data/portfolio-data";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ProjectImagePlaceholder } from "../ui/project-image-placeholder";
import { BlurImage } from "../ui/blur-image";
import { useLanguage } from "../layout/language-provider";

// Array of gradient variants to cycle through
const gradientVariants = ["blue", "green", "purple", "orange", "pink"] as const;

export function ProjectsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  return (
    <Container id="projects" size="default" className="relative" ref={sectionRef}>
      {/* Background decoration elements with parallax */}
      <motion.div 
        className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-blue-500/5 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      />
      <motion.div 
        className="absolute bottom-20 -right-20 w-60 h-60 rounded-full bg-cyan-500/5 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
      />
      
      <SectionHeading
        title={t("sections.projects.title")}
        description={t("sections.projects.description")}
      />

      <div className="grid grid-cols-1 gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
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
                    variant={gradientVariants[index % gradientVariants.length]}
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
                  {project.description}
                </p>
              </CardContent>
              
              <CardFooter className="pt-0 mt-auto flex justify-between">
                <div className="hidden md:flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="tech" className="text-[0.65rem]">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="tech" className="text-[0.65rem]">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2 ml-auto">
                  <Button asChild variant="default" size="sm" className="gap-1 group">
                    <Link href={`/projects/${project.id}`}>
                      <span>{t("sections.projects.viewDetails")}</span>
                    </Link>
                  </Button>
                  
                  {project.link && (
                    <Button asChild variant="outline" size="sm" className="gap-1 group">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <span>{t("sections.projects.viewProject")}</span>
                        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
} 