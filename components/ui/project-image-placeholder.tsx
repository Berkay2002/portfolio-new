"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface ProjectImagePlaceholderProps {
  title: string;
  className?: string;
  variant?: "blue" | "green" | "purple" | "orange" | "pink";
}

export function ProjectImagePlaceholder({
  title,
  className,
  variant = "blue",
}: ProjectImagePlaceholderProps) {
  const gradientId = useId();

  const getGradient = () => {
    switch (variant) {
      case "blue":
        return {
          from: "#3b82f6",
          to: "#06b6d4",
        };
      case "green":
        return {
          from: "#22c55e",
          to: "#10b981",
        };
      case "purple":
        return {
          from: "#8b5cf6",
          to: "#d946ef",
        };
      case "orange":
        return {
          from: "#f97316",
          to: "#eab308",
        };
      case "pink":
        return {
          from: "#ec4899",
          to: "#f43f5e",
        };
      default:
        return {
          from: "#3b82f6",
          to: "#06b6d4",
        };
    }
  };

  const { from, to } = getGradient();

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <svg
        className="absolute inset-0"
        height="100%"
        viewBox="0 0 600 300"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={from} stopOpacity="0.3" />
            <stop offset="100%" stopColor={to} stopOpacity="0.3" />
          </linearGradient>
          <filter
            height="200%"
            id={`blur-${gradientId}`}
            width="200%"
            x="-50%"
            y="-50%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
        </defs>

        {/* Background */}
        <rect fill={`url(#${gradientId})`} height="300" width="600" />

        {/* Animated blobs */}
        <circle
          className="animate-blob"
          cx="150"
          cy="150"
          fill={from}
          filter={`url(#blur-${gradientId})`}
          opacity="0.3"
          r="80"
        />
        <circle
          className="animation-delay-2000 animate-blob"
          cx="450"
          cy="150"
          fill={to}
          filter={`url(#blur-${gradientId})`}
          opacity="0.3"
          r="70"
        />
        <circle
          className="animation-delay-4000 animate-blob"
          cx="300"
          cy="250"
          fill={from}
          filter={`url(#blur-${gradientId})`}
          opacity="0.3"
          r="60"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-4 text-center">
          <p className="text-foreground/70 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
}
