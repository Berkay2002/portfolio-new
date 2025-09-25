"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SKILL_PROGRESS_MIN = 0;
const SKILL_PROGRESS_MAX = 100;

type SkillProgressProps = {
  name: string;
  value: number;
  className?: string;
};

export function SkillProgress({ name, value, className }: SkillProgressProps) {
  const cappedValue = Math.min(
    SKILL_PROGRESS_MAX,
    Math.max(SKILL_PROGRESS_MIN, value)
  ); // Ensure value is between 0 and 100

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-muted-foreground">{cappedValue}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
          initial={{ width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          whileInView={{ width: `${cappedValue}%` }}
        />
      </div>
    </div>
  );
}
