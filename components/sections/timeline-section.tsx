"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timelineEvents } from "@/lib/data/portfolio-data";
import { useLanguage } from "../layout/language-provider";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Timeline } from "../ui/timeline";

export function TimelineSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax movement values
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <Container
      className="relative overflow-hidden"
      id="timeline"
      ref={sectionRef}
      size="small"
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
          {/* Drawing animation for the timeline's vertical line */}
          <motion.div
            className="absolute top-[156px] left-[19px] z-0 w-[2px] bg-border dark:bg-neutral-800"
            style={{
              height: timelineEvents.length * 160 + "px", // Approximate height based on number of events
              scaleY: useTransform(
                scrollYProgress,
                [0.1, 0.6], // start drawing when scrolled 10% into view, complete by 60%
                [0, 1]
              ),
              transformOrigin: "top",
            }}
          />

          <Timeline events={timelineEvents} />
        </motion.div>
      </div>
    </Container>
  );
}
