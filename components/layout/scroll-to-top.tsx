"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const SCROLL_TO_TOP_VISIBILITY_THRESHOLD = 300;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  // Set up scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_TO_TOP_VISIBILITY_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Hide the floating button when the footer is visible on screen
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setFooterVisible(entry.isIntersecting && entry.intersectionRatio > 0);
        }
      },
      { root: null, threshold: 0 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {isVisible && !footerVisible && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="fixed right-6 bottom-6 z-50"
          exit={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
        >
          <Button
            aria-label="Scroll to top"
            className="h-10 w-10 rounded-full border border-neutral-200 bg-background/80 shadow-md backdrop-blur-xs transition-all duration-300 hover:scale-110 hover:bg-background/90 hover:text-blue-500 dark:border-neutral-800"
            onClick={scrollToTop}
            variant="outline"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
