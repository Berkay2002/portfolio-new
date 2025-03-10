"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";
import * as TbIcons from "react-icons/tb";

interface AnimatedSkillBarProps {
  name: string;
  icon?: string; // Icon name like "SiPython", "SiTensorflow", etc.
  value: number; // 0-100
  color?: string; // Optional color override
  className?: string;
  delay?: number; // Delay before animation starts
}

// Map of skill names to their respective icons and colors
const skillIconMap: Record<string, { icon: string; color: string }> = {
  // Programming Languages
  "Python": { icon: "SiPython", color: "#3776AB" },
  "TypeScript": { icon: "SiTypescript", color: "#3178C6" },
  "JavaScript": { icon: "SiJavascript", color: "#F7DF1E" },
  "C++": { icon: "SiCplusplus", color: "#00599C" },
  
  // Machine Learning & Data Science
  "TensorFlow": { icon: "SiTensorflow", color: "#FF6F00" },
  "Keras": { icon: "SiKeras", color: "#D00000" },
  "PyTorch": { icon: "SiPytorch", color: "#EE4C2C" },
  "Scikit-learn": { icon: "SiScikitlearn", color: "#F7931E" },
  "BERT": { icon: "SiTransformer", color: "#8A2BE2" },
  "Hugging Face": { icon: "SiHuggingface", color: "#FFCC33" },
  "Deep Learning": { icon: "TbBrain", color: "#9333EA" },
  "Neural Networks": { icon: "TbNetwork", color: "#2563EB" },
  "Data Mining": { icon: "TbChartDots", color: "#16A34A" },
  
  // Web Development
  "React": { icon: "SiReact", color: "#61DAFB" },
  "Next.js": { icon: "SiNextdotjs", color: "#000000" },
  "Node.js": { icon: "SiNodedotjs", color: "#339933" },
  "Tailwind CSS": { icon: "SiTailwindcss", color: "#06B6D4" },
  
  // Databases
  "MongoDB": { icon: "SiMongodb", color: "#47A248" },
  "Firebase": { icon: "SiFirebase", color: "#FFCA28" },
  "Supabase": { icon: "SiSupabase", color: "#3ECF8E" },
  
  // Deployment
  "Vercel": { icon: "SiVercel", color: "#000000" },
  
  // Data Visualization
  "Matplotlib": { icon: "SiPython", color: "#11557C" },
  "Seaborn": { icon: "SiPython", color: "#4EABD1" },
  "D3.js": { icon: "SiD3Dotjs", color: "#F9A03C" },
  
  // Default
  "default": { icon: "TbCode", color: "#6366F1" }
};

export function AnimatedSkillBar({ 
  name, 
  icon, 
  value, 
  color,
  className, 
  delay = 0 
}: AnimatedSkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Find the correct icon name based on skill name if not provided
  const iconInfo = icon ? { icon, color: color || "#3b82f6" } : 
                  skillIconMap[name] || skillIconMap.default;
  
  // Get icon component dynamically
  const getIconComponent = () => {
    // Parse icon library prefix (Si, Di, Tb)
    const prefix = iconInfo.icon.substring(0, 2);
    const iconName = iconInfo.icon.substring(2);
    
    if (prefix === "Si") {
      // @ts-ignore - Dynamic icon access
      const IconComponent = SiIcons[iconInfo.icon];
      return IconComponent ? <IconComponent /> : null;
    } else if (prefix === "Di") {
      // @ts-ignore - Dynamic icon access
      const IconComponent = DiIcons[iconInfo.icon];
      return IconComponent ? <IconComponent /> : null;
    } else if (prefix === "Tb") {
      // @ts-ignore - Dynamic icon access
      const IconComponent = TbIcons[iconInfo.icon];
      return IconComponent ? <IconComponent /> : null;
    }
    
    return null;
  };

  // Safe value between 0-100
  const safeValue = Math.min(100, Math.max(0, value));
  
  // Bar color based on the provided color or the icon's color
  const barColor = color || iconInfo.color;
  
  return (
    <div 
      ref={ref}
      className={cn("space-y-2", className)}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-[1.2rem]" style={{ color: barColor }}>
            {getIconComponent()}
          </span>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{safeValue}%</span>
      </div>
      
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: barColor }}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${safeValue}%` : 0 }}
          transition={{ 
            duration: 1, 
            delay: delay,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
      </div>
    </div>
  );
} 