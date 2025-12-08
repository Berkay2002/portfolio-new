"use client";

import { motion, useInView } from "framer-motion";
// Add: theme hook
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
// Named imports (avoid namespace imports to keep bundle small)
import {
  SiCplusplus,
  SiD3Dotjs,
  SiFirebase,
  SiHuggingface,
  SiJavascript,
  SiKeras,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrain, TbChartDots, TbCode, TbNetwork } from "react-icons/tb";
import { cn } from "@/lib/utils";

type AnimatedSkillBarProps = {
  name: string;
  icon?: string; // Icon name like "SiPython", "SiTensorflow", etc.
  value: number; // 0-100
  color?: string; // Optional color override
  className?: string;
  delay?: number; // Delay before animation starts
};

// Map of skill names to their respective icons and colors
// (BERT uses TbBrain to avoid referencing an uncertain icon name)
const skillIconMap: Record<string, { icon: string; color: string }> = {
  // Programming Languages
  Python: { icon: "SiPython", color: "#3776AB" },
  TypeScript: { icon: "SiTypescript", color: "#3178C6" },
  JavaScript: { icon: "SiJavascript", color: "#F7DF1E" },
  "C++": { icon: "SiCplusplus", color: "#00599C" },

  // Machine Learning & Data Science
  TensorFlow: { icon: "SiTensorflow", color: "#FF6F00" },
  Keras: { icon: "SiKeras", color: "#D00000" },
  PyTorch: { icon: "SiPytorch", color: "#EE4C2C" },
  "Scikit-learn": { icon: "SiScikitlearn", color: "#F7931E" },
  BERT: { icon: "TbBrain", color: "#8A2BE2" },

  "Hugging Face": { icon: "SiHuggingface", color: "#FFCC33" },
  "Deep Learning": { icon: "TbBrain", color: "#9333EA" },
  "Neural Networks": { icon: "TbNetwork", color: "#2563EB" },
  "Data Mining": { icon: "TbChartDots", color: "#16A34A" },

  // Web Development
  React: { icon: "SiReact", color: "#61DAFB" },
  "Next.js": { icon: "SiNextdotjs", color: "#000000" },
  "Node.js": { icon: "SiNodedotjs", color: "#339933" },
  "Tailwind CSS": { icon: "SiTailwindcss", color: "#06B6D4" },

  // Databases
  MongoDB: { icon: "SiMongodb", color: "#47A248" },
  Firebase: { icon: "SiFirebase", color: "#FFCA28" },
  Supabase: { icon: "SiSupabase", color: "#3ECF8E" },

  // Deployment
  Vercel: { icon: "SiVercel", color: "#000000" },

  // Data Visualization
  Matplotlib: { icon: "SiPython", color: "#11557C" },
  Seaborn: { icon: "SiPython", color: "#4EABD1" },
  "D3.js": { icon: "SiD3Dotjs", color: "#F9A03C" },

  // Default
  default: { icon: "TbCode", color: "#6366F1" },
};

// Map icon string keys to imported icon components (only named imports used)
const ICON_COMPONENT_MAP: Record<string, IconType | undefined> = {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiD3Dotjs,
  TbBrain,
  TbNetwork,
  TbChartDots,
  TbCode,
};

// Descriptive constant for the standard cubic-bezier easing used across UI motion transitions.
// Using a named constant avoids magic-number lint warnings and clarifies intent.
// biome-ignore lint/style/noMagicNumbers: <Dont worry>
const EASING_STANDARD_CUBIC_BEZIER = [0.4, 0.0, 0.2, 1.0] as const;

// Add: extracted constant for animation duration (seconds)
const DEFAULT_TRANSITION_DURATION = 1;

// Add: extracted constant for the useInView threshold (amount)
const IN_VIEW_THRESHOLD = 0.3;

// Extracted constants for skill value bounds
const MIN_SKILL_VALUE = 0;
const MAX_SKILL_VALUE = 100;

// New: named constant for color channel max to avoid magic number
const COLOR_CHANNEL_MAX = 255;

// Add: explicit hex parsing constants used by adjustHexBrightness
const HEX_RED_START = 0;
const HEX_GREEN_START = 2;
const HEX_BLUE_START = 4;
const HEX_CHANNEL_HEX_LENGTH = 2;
const HEX_RADIX = 16;

// Extracted constant for short hex length (e.g. "#abc")
const SHORT_HEX_LENGTH = 3;

// New: pad settings for hex channel formatting (avoid magic numbers in padStart)
const HEX_PAD_LENGTH = HEX_CHANNEL_HEX_LENGTH;
const HEX_PAD_CHAR = "0";

// New: small, safe hex color adjuster (lighten by percentage 0..1, or darken with negative)
// Keeps types strict and avoids external deps.
function adjustHexBrightness(hex: string, percent: number): string {
  // Normalize short hex (#abc) to full form (#aabbcc)
  const normalized = hex.replace("#", "");
  const fullHex =
    normalized.length === SHORT_HEX_LENGTH
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized;

  // Use named constants instead of magic slice indices and radix
  const r = Number.parseInt(
    fullHex.slice(HEX_RED_START, HEX_RED_START + HEX_CHANNEL_HEX_LENGTH),
    HEX_RADIX
  );
  const g = Number.parseInt(
    fullHex.slice(HEX_GREEN_START, HEX_GREEN_START + HEX_CHANNEL_HEX_LENGTH),
    HEX_RADIX
  );
  const b = Number.parseInt(
    fullHex.slice(HEX_BLUE_START, HEX_BLUE_START + HEX_CHANNEL_HEX_LENGTH),
    HEX_RADIX
  );

  const clamp = (v: number) =>
    Math.max(0, Math.min(COLOR_CHANNEL_MAX, Math.round(v)));

  if (percent === 0) {
    return `#${fullHex}`;
  }

  // Positive percent -> lighten towards COLOR_CHANNEL_MAX, negative -> darken towards 0
  const newR =
    percent > 0
      ? clamp(r + (COLOR_CHANNEL_MAX - r) * percent)
      : clamp(r * (1 + percent));
  const newG =
    percent > 0
      ? clamp(g + (COLOR_CHANNEL_MAX - g) * percent)
      : clamp(g * (1 + percent));
  const newB =
    percent > 0
      ? clamp(b + (COLOR_CHANNEL_MAX - b) * percent)
      : clamp(b * (1 + percent));

  const toHex = (n: number) =>
    n.toString(HEX_RADIX).padStart(HEX_PAD_LENGTH, HEX_PAD_CHAR);
  return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
}

// New: extracted constant for dark mode color lightening (avoid magic number inline)
const DARK_MODE_COLOR_LIGHTEN_FACTOR = 0.12;

export function AnimatedSkillBar({
  name,
  icon,
  value,
  color,
  className,
  delay = 0,
}: AnimatedSkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: IN_VIEW_THRESHOLD });

  // Find the correct icon name based on skill name if not provided
  const iconInfo = icon
    ? { icon, color: color || "#3b82f6" }
    : skillIconMap[name] || skillIconMap.default;

  // Get icon component dynamically
  const getIconComponent = () => {
    const IconComponent = ICON_COMPONENT_MAP[iconInfo.icon];
    return IconComponent ? <IconComponent /> : null;
  };

  // Safe value between MIN_SKILL_VALUE - MAX_SKILL_VALUE
  const safeValue = Math.min(MAX_SKILL_VALUE, Math.max(MIN_SKILL_VALUE, value));

  // Bar color based on the provided color or the icon's color
  const barColor = color || iconInfo.color;

  // New: theme handling with mounted guard to avoid hydration mismatch
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Lighten slightly when in dark mode so the color reads well on dark backgrounds.
  // Use a small percentage for subtlety; adjust if needed.
  const effectiveColor =
    mounted && theme === "dark"
      ? adjustHexBrightness(barColor, DARK_MODE_COLOR_LIGHTEN_FACTOR)
      : barColor;

  return (
    <div className={cn("space-y-2", className)} ref={ref}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[1.2rem]" style={{ color: effectiveColor }}>
            {getIconComponent()}
          </span>
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-muted-foreground text-sm">{safeValue}%</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          animate={{ width: isInView ? `${safeValue}%` : 0 }}
          className="h-full rounded-full"
          initial={{ width: 0 }}
          style={{ backgroundColor: effectiveColor }}
          transition={{
            duration: DEFAULT_TRANSITION_DURATION,
            delay,
            ease: EASING_STANDARD_CUBIC_BEZIER,
          }}
        />
      </div>
    </div>
  );
}
