"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timelineEvents } from "@/lib/data/portfolio-data";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { Timeline } from "../ui/timeline";
import { useLanguage } from "../layout/language-provider";

export function TimelineSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax movement values
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  
  return (
    <Container id="timeline" size="small" className="relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements with parallax */}
      <motion.div 
        className="absolute -top-10 -right-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl z-0"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute -bottom-10 -left-20 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl z-0"
        style={{ y: y2 }}
      />
      
      <div className="relative z-10">
        <SectionHeading
          title={t("sections.timeline.title")}
          description={t("sections.timeline.description")}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl mx-auto"
        >
          {/* Drawing animation for the timeline's vertical line */}
          <motion.div
            className="absolute left-[19px] top-[156px] w-[2px] bg-border dark:bg-neutral-800 z-0"
            style={{
              height: timelineEvents.length * 160 + "px", // Approximate height based on number of events
              scaleY: useTransform(
                scrollYProgress,
                [0.1, 0.6], // start drawing when scrolled 10% into view, complete by 60%
                [0, 1]
              ),
              transformOrigin: "top"
            }}
          />
          
          <Timeline events={timelineEvents} />
        </motion.div>
      </div>
    </Container>
  );
} 