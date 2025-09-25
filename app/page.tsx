"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TimelineSection } from "@/components/sections/timeline-section";

// Keeping the import but not using it for now
// import { BlogPreviewSection } from "@/components/sections/blog-preview-section";

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
        }, 100);
      }
    }
  }, [searchParams]);

  return null;
}

export default function Home() {
  return (
    <>
      <ScrollManager />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      {/* Commenting out BlogPreviewSection for now
      <BlogPreviewSection /> */}
      <ContactSection />
    </>
  );
}
