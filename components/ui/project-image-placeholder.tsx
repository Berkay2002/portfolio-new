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
  variant = "blue"
}: ProjectImagePlaceholderProps) {
  const gradientId = useId();
  
  const getGradient = () => {
    switch (variant) {
      case "blue":
        return {
          from: "#3b82f6",
          to: "#06b6d4"
        };
      case "green":
        return {
          from: "#22c55e",
          to: "#10b981"
        };
      case "purple":
        return {
          from: "#8b5cf6",
          to: "#d946ef"
        };
      case "orange":
        return {
          from: "#f97316",
          to: "#eab308"
        };
      case "pink":
        return {
          from: "#ec4899",
          to: "#f43f5e"
        };
      default:
        return {
          from: "#3b82f6",
          to: "#06b6d4"
        };
    }
  };
  
  const { from, to } = getGradient();
  
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 300"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={from} stopOpacity="0.3" />
            <stop offset="100%" stopColor={to} stopOpacity="0.3" />
          </linearGradient>
          <filter id={`blur-${gradientId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
        </defs>
        
        {/* Background */}
        <rect
          width="600"
          height="300"
          fill={`url(#${gradientId})`}
        />
        
        {/* Animated blobs */}
        <circle
          cx="150"
          cy="150"
          r="80"
          fill={from}
          opacity="0.3"
          filter={`url(#blur-${gradientId})`}
          className="animate-blob"
        />
        <circle
          cx="450"
          cy="150"
          r="70"
          fill={to}
          opacity="0.3"
          filter={`url(#blur-${gradientId})`}
          className="animate-blob animation-delay-2000"
        />
        <circle
          cx="300"
          cy="250"
          r="60"
          fill={from}
          opacity="0.3"
          filter={`url(#blur-${gradientId})`}
          className="animate-blob animation-delay-4000"
        />
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-sm text-foreground/70">{title}</p>
        </div>
      </div>
    </div>
  );
} 