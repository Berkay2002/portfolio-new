"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { personalInfo } from "@/lib/data/portfolio-data";
import { useLanguage } from "../layout/language-provider";
import { Button } from "../ui/button";

// Particle animation component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size - extending it further to create smoother transition
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.5; // Make canvas even taller for better transition
    };

    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();

    // Particle properties
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }

    const particles: Particle[] = [];
    // Increase particle count slightly for denser effect
    const particleCount = Math.min(window.innerWidth / 8, 150);
    const colors = ["#3b82f6", "#06b6d4", "#0ea5e9"]; // Blue shades

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.1, // Slightly increased opacity range
      });
    }

    // Animation function
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle) => {
        // Create a more gradual fade-out effect toward the bottom
        const fadeOutFactor = 1 - ((particle.y / canvas.height) * 0.7) ** 2;
        ctx.globalAlpha = particle.opacity * fadeOutFactor;

        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-25 dark:opacity-35"
      ref={canvasRef}
    />
  );
};

export function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Hero Section"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16 md:py-0"
      id="hero"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-background/80 via-background/60 to-transparent" />

      {/* Particle effect - now with z-index to ensure it's behind content but shows through header */}
      <ParticleBackground />

      {/* Animated gradient blur - reduced opacity */}
      <div className="-top-40 -left-40 absolute h-80 w-80 animate-blob rounded-full bg-blue-500/5 blur-3xl" />
      <div className="-bottom-40 -right-40 animation-delay-2000 absolute h-80 w-80 animate-blob rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="-translate-x-1/2 animation-delay-4000 absolute left-1/2 h-80 w-80 animate-blob rounded-full bg-blue-400/5 blur-3xl" />

      {/* Container with vertical centering */}
      <div className="md:-mt-10 container relative z-10 mx-auto mt-0 flex h-full max-w-7xl flex-col items-center justify-center px-4 md:px-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("sections.hero.greeting")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-muted-foreground text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>{personalInfo.title}</h2>
          </motion.div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-[42rem] text-muted-foreground leading-normal sm:text-xl sm:leading-8"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {locale === "sv" && personalInfo.bioSv
              ? personalInfo.bioSv
              : personalInfo.bioEn || personalInfo.bio}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button asChild className="group relative" size="lg">
              <Link href="#projects">
                <span className="relative z-10">
                  {t("common.viewProjects")}
                </span>
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#about">{t("common.aboutMe")}</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1 }}
          className="absolute bottom-10 hidden md:block"
          initial={{ opacity: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Button
            asChild
            className="h-10 w-10 animate-bounce rounded-full"
            size="icon"
            variant="ghost"
          >
            <Link aria-label={t("common.aboutMe")} href="#about">
              <ArrowDown className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Fade-out gradient at the bottom for smoother transition - increased height and adjusted gradient */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
