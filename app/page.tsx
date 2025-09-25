"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsCarouselSection } from "@/components/sections/projects-carousel-section";
import { TimelineSection } from "@/components/sections/timeline-section";

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
  return (
    <>
      {/* Global particle background for the entire page */}
      <ParticleBackground />
      <ScrollManager />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsCarouselSection />
      {/* Commenting out BlogPreviewSection for now
      <BlogPreviewSection /> */}
      <ContactSection />
    </>
  );
}
