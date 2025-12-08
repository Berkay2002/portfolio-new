"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { personalInfo } from "@/lib/data/portfolio-data";
import { useLanguage } from "../layout/language-provider";
import { Button } from "../ui/button";

// Particle background is rendered globally from app/page.tsx

// Motion / animation timing constants
const MOTION_DURATION_SHORT = 0.5;
const MOTION_DELAY_H1 = 0.2;
const MOTION_DELAY_H2 = 0.4;
const MOTION_DELAY_PARAGRAPH = 0.6;
const MOTION_DELAY_BUTTONS = 0.8;
// Arrow motion constants removed — arrow/button was removed

// Small vertical offset used for initial motion entrance
const MOTION_INITIAL_Y = 20;

// ParticleBackground removed — global background is provided by app/page.tsx

export function HeroSection() {
  const { t, locale } = useLanguage();

  return (
    <section
      aria-label="Hero Section"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16 md:py-0"
      id="hero"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-linear-to-b from-background/80 via-background/60 to-transparent" />

      {/* Particle effect is provided globally (app/page.tsx) */}

      {/* Animated gradient blur */}
      <div className="-top-40 -left-40 absolute h-80 w-80 animate-blob rounded-full bg-blue-500/5 blur-3xl" />
      <div className="-bottom-40 -right-40 animation-delay-2000 absolute h-80 w-80 animate-blob rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="-translate-x-1/2 animation-delay-4000 absolute left-1/2 h-80 w-80 animate-blob rounded-full bg-blue-400/5 blur-3xl" />

      {/* Container with vertical centering */}
      <div className="md:-mt-10 container relative z-10 mx-auto mt-0 flex h-full max-w-7xl flex-col items-center justify-center px-4 md:px-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-8 text-center"
          initial={{ opacity: 0, y: MOTION_INITIAL_Y }}
          transition={{ duration: MOTION_DURATION_SHORT }}
        >
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: MOTION_INITIAL_Y }}
            transition={{
              duration: MOTION_DURATION_SHORT,
              delay: MOTION_DELAY_H1,
            }}
          >
            {t("sections.hero.greeting")}{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-muted-foreground text-xl md:text-2xl"
            initial={{ opacity: 0, y: MOTION_INITIAL_Y }}
            transition={{
              duration: MOTION_DURATION_SHORT,
              delay: MOTION_DELAY_H2,
            }}
          >
            <h2>{personalInfo.title}</h2>
          </motion.div>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl text-muted-foreground leading-normal sm:text-xl sm:leading-8"
            initial={{ opacity: 0, y: MOTION_INITIAL_Y }}
            transition={{
              duration: MOTION_DURATION_SHORT,
              delay: MOTION_DELAY_PARAGRAPH,
            }}
          >
            {locale === "sv" && personalInfo.bioSv
              ? personalInfo.bioSv
              : personalInfo.bioEn || personalInfo.bio}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: MOTION_INITIAL_Y }}
            transition={{
              duration: MOTION_DURATION_SHORT,
              delay: MOTION_DELAY_BUTTONS,
            }}
          >
            <Button asChild className="group relative" size="lg">
              <Link href="#projects">
                <span className="relative z-10">
                  {t("common.viewProjects")}
                </span>
                <span className="absolute inset-0 rounded-md bg-linear-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#about">{t("common.aboutMe")}</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Bouncing arrow button removed per request */}
      </div>

      {/* Fade-out gradient at the bottom for smoother transition */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-40 bg-linear-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
