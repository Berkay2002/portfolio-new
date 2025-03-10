"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillProgressProps {
  name: string;
  value: number;
  className?: string;
}

export function SkillProgress({ name, value, className }: SkillProgressProps) {
  const cappedValue = Math.min(100, Math.max(0, value)); // Ensure value is between 0 and 100
  
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-muted-foreground">{cappedValue}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${cappedValue}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
} 