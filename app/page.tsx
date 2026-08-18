import Link from "next/link";
import { Suspense } from "react";
import ParticleBackground from "@/components/layout/particle-background";
import { ScrollManager } from "@/components/layout/scroll-manager";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MasterThesisSection } from "@/components/sections/master-thesis-section";
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
import { whenAgenticWorkflowsPaper } from "@/lib/data/when-agentic-workflows-paper";

const papers = [
  {
    id: "when-agentic-workflows-help",
    title: whenAgenticWorkflowsPaper.title,
    authors: whenAgenticWorkflowsPaper.authors,
    abstract: whenAgenticWorkflowsPaper.abstractContent,
    pdfUrl: whenAgenticWorkflowsPaper.pdfUrl,
    detailHref: "/papers/when-agentic-workflows-help",
  },
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

export default function Home() {
  return (
    <>
      {/* Global particle background for the entire page */}
      <ParticleBackground
        densityDivisor={10}
        maxCount={80}
        opacity={0.8}
      />
      <Suspense fallback={null}>
        <ScrollManager />
      </Suspense>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <MasterThesisSection />
      <ProjectsCarouselSection />
      <Container className="pt-0" id="papers">
        <SectionHeading
          align="center"
          description="Research papers with inline preview and download."
          title="Papers"
        />
        <div className="mt-12">
          <Carousel
            aria-label="Research papers"
            className="w-full"
            opts={{
              align: "start",
              loop: papers.length > 2,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {papers.map((paper, index) => (
                <CarouselItem
                  aria-label={`${index + 1} of ${papers.length}`}
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
                          {paper.detailHref && (
                            <Button asChild variant="outline">
                              <Link href={paper.detailHref}>
                                Benchmark results
                              </Link>
                            </Button>
                          )}
                          {paper.projectHref && (
                            <Button asChild variant="outline">
                              <Link href={paper.projectHref}>View project</Link>
                            </Button>
                          )}
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
      <ContactSection />
    </>
  );
}
