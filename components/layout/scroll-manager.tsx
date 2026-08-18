"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function ScrollManager() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (!section) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      const element = document.getElementById(section);
      if (!element) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });

    return () => cancelAnimationFrame(frame);
  }, [searchParams]);

  return null;
}
