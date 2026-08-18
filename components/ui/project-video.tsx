"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ProjectVideoProps = {
  src: string;
  poster?: string;
  label: string;
  className?: string;
};

export function ProjectVideo({
  src,
  poster,
  label,
  className,
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      const animationFrame = window.requestAnimationFrame(() => {
        setIsNearViewport(true);
      });
      return () => window.cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { rootMargin: "240px" }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (isNearViewport && !reduceMotion) {
      void video.play().catch(() => {
        // Autoplay can be disabled by browser or user policy.
      });
      return;
    }

    video.pause();
  }, [isNearViewport, reduceMotion]);

  return (
    <video
      aria-label={label}
      className={className}
      controls={Boolean(reduceMotion)}
      loop
      muted
      playsInline
      poster={poster}
      preload="none"
      ref={videoRef}
    >
      {isNearViewport && <source src={src} type="video/mp4" />}
    </video>
  );
}
