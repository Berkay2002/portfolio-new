"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsCarouselSection } from "@/components/sections/projects-carousel-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardDescription,
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
import { PDFViewerPopup } from "@/components/ui/pdf-viewer-popup";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { animatchPaper } from "@/lib/data/animatch-paper";
import { syngraphPaper } from "@/lib/data/syngraph-paper";

// Keeping the import but not using it for now
// import { BlogPreviewSection } from "@/components/sections/blog-preview-section";

import ParticleBackground from "@/components/layout/particle-background";

// Timeout in ms to ensure DOM is loaded before scrolling
const SCROLL_DELAY_MS = 100;

// Client component wrapper for scroll behavior
function ScrollManager() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the section from URL query parameter
    const section = searchParams.get("section");
    if (section) {
      // Find the section element and scroll to it
      const element = document.getElementById(section);
      if (element) {
        // Use a small timeout to ensure the DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, SCROLL_DELAY_MS);
      }
    }
  }, [searchParams]);

  return null;
}

export default function Home() {
  const papers = [
    {
      id: "researcher",
      title: syngraphPaper.title,
      authors: syngraphPaper.authors,
      abstract: syngraphPaper.abstractContent,
      pdfUrl: syngraphPaper.pdfUrl,
      projectHref: "/projects/researcher",
    },
    {
      id: "animatch",
      title: animatchPaper.title,
      authors: animatchPaper.authors,
      abstract: animatchPaper.abstractContent,
      pdfUrl: animatchPaper.pdfUrl,
      projectHref: "/projects/animatch",
    },
  ];

  return (
    <>
      {/* Global particle background for the entire page */}
      <ParticleBackground />
      <ScrollManager />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsCarouselSection />
      <Container className="pt-0" id="papers">
        <SectionHeading
          align="center"
          description="Research papers with inline preview and download."
          title="Papers"
        />
        <div className="mt-12">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: papers.length > 2,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {papers.map((paper) => (
                <CarouselItem
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                  key={paper.id}
                >
                  <div className="h-full p-1">
                    <Card className="flex h-full flex-col">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">
                          {paper.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {paper.authors.join(", ")}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-1 flex-col gap-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {paper.abstract}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-3">
                          <PDFViewerPopup
                            buttonVariant="secondary"
                            fileName={`${paper.title} - Research Paper`}
                            pdfUrl={paper.pdfUrl}
                            triggerClassName="w-full justify-between sm:w-auto"
                          />
                          <Button asChild variant="outline">
                            <Link href={paper.projectHref}>View project</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/papers">View All Papers ({papers.length})</Link>
          </Button>
        </div>
      </Container>
      {/* Commenting out BlogPreviewSection for now
      <BlogPreviewSection /> */}
      <ContactSection />
    </>
  );
}
