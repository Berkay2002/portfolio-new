"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timelineEvents } from "@/lib/data/portfolio-data";
import { useLanguage } from "../layout/language-provider";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Timeline } from "../ui/timeline";

// Meaningful constant for the primary decorative parallax Y offsets
const PRIMARY_DECOR_PARALLAX_START = 50;
const PRIMARY_DECOR_PARALLAX_END = -50;

// Meaningful constant for the secondary decorative parallax Y offset
const SECONDARY_DECOR_PARALLAX_END = -30;
// Extracted constants above cover decorative parallax and spacing; timeline draw is handled by the Timeline component

export function TimelineSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement values
  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [PRIMARY_DECOR_PARALLAX_START, PRIMARY_DECOR_PARALLAX_END]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, SECONDARY_DECOR_PARALLAX_END]
  );

  // Timeline draw is handled inside the Timeline component; no global scale transform required here

  return (
    <Container
      className="relative overflow-hidden"
      id="timeline"
      ref={sectionRef}
      // removed size="small" to match Project section
    >
      {/* Decorative elements with parallax */}
      <motion.div
        className="-top-10 -right-20 absolute z-0 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="-bottom-10 -left-20 absolute z-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl"
        style={{ y: y2 }}
      />

      <div className="relative z-10">
        <SectionHeading title={t("sections.timeline.title")} />

        <motion.div
          className="mx-auto mt-16 max-w-3xl"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <Timeline events={timelineEvents} />
        </motion.div>
      </div>
    </Container>
  );
}
