"use client";

import { useEffect, useRef, useState } from "react";
import { DEFAULT_PARTICLE_CONFIG } from "@/lib/config/particle-config";

type Props = {
  /** If true the canvas will be sized to the parent element (absolute); otherwise it will be fixed to the viewport */
  local?: boolean;
  className?: string;
  densityDivisor?: number;
  maxCount?: number;
  opacity?: number;
  colors?: string[];
};

export default function ParticleBackground({
  local = false,
  className = "",
  densityDivisor = DEFAULT_PARTICLE_CONFIG.global.densityDivisor,
  maxCount = DEFAULT_PARTICLE_CONFIG.global.maxCount,
  opacity = DEFAULT_PARTICLE_CONFIG.global.opacity,
  colors = DEFAULT_PARTICLE_CONFIG.colors,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return true;
    }

    try {
      const saved = localStorage.getItem(DEFAULT_PARTICLE_CONFIG.storageKey);
      if (saved !== null) {
        return saved === "true";
      }
    } catch {
      // ignore localStorage errors
    }

    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq?.matches) {
      return false;
    }

    return true;
  });

  // initialize preference and listen for toggles
  useEffect(() => {
    const onToggle = (e: Event) => {
      const detail = (e as CustomEvent)?.detail as
        | { enabled: boolean }
        | undefined;
      if (detail && typeof detail.enabled === "boolean") {
        setEnabled(detail.enabled);
      }
    };

    window.addEventListener("particles:toggled", onToggle as EventListener);
    return () =>
      window.removeEventListener(
        "particles:toggled",
        onToggle as EventListener
      );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let parent = null as HTMLElement | null;
    if (local) {
      parent = canvas.parentElement as HTMLElement | null;
    }

    const setSize = () => {
      if (local && parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = document.documentElement.scrollHeight;
      }
    };

    setSize();
    window.addEventListener("resize", setSize);

    if (!enabled) {
      return;
    }

    const animator = createParticleAnimator(canvas, ctx, {
      colors,
      densityDivisor,
      maxCount,
      opacity,
      local,
    });

    const stop = animator.start();

    return () => {
      stop();
      window.removeEventListener("resize", setSize);
    };
  }, [local, densityDivisor, maxCount, opacity, colors, enabled]);

  // For global mode we want the canvas to cover the full page height and scroll with it (absolute)
  // For local mode we use absolute to cover the parent container
  const baseClass = local
    ? "pointer-events-none absolute inset-0 z-0"
    : "pointer-events-none absolute top-0 left-0 z-0";

  return (
    <canvas
      aria-hidden
      className={`${baseClass} ${className}`}
      ref={canvasRef}
    />
  );
}

// Helper factory: create an animator for a canvas/context and return a start function that returns a stop function
function createParticleAnimator(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  opts: {
    colors: string[];
    densityDivisor: number;
    maxCount: number;
    opacity: number;
    local: boolean;
  }
) {
  type Particle = {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    opacity: number;
  };

  const PARTICLE_SIZE_MIN = 1;
  const PARTICLE_SIZE_VARIANCE = 3;
  const PARTICLE_SPEED_RANGE = 0.5;
  const PARTICLE_SPEED_RANDOM_CENTER = 0.5;
  const PARTICLE_OPACITY_MIN = 0.1;
  const PARTICLE_OPACITY_VARIANCE = 0.6;
  const CONNECTION_DISTANCE = 150; // Max distance to draw a line
  const CONNECTION_OPACITY_FACTOR = 0.5; // Multiplier for line opacity

  const SMALL_SCREEN_BREAKPOINT = 640;
  const DEFAULT_SMALL_MULTIPLIER = 1.7;

  const smallMultiplier =
    DEFAULT_PARTICLE_CONFIG.responsive.smallScreenDensityDivisorMultiplier ??
    DEFAULT_SMALL_MULTIPLIER;
  const effectiveDivisor =
    window.innerWidth < SMALL_SCREEN_BREAKPOINT
      ? opts.densityDivisor * smallMultiplier
      : opts.densityDivisor;

  const particleCount = Math.min(
    Math.floor(
      (opts.local ? canvas.width || 0 : window.innerWidth) / effectiveDivisor
    ),
    opts.maxCount
  );

  const particles: Particle[] = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * PARTICLE_SIZE_VARIANCE + PARTICLE_SIZE_MIN,
      speedX:
        (Math.random() - PARTICLE_SPEED_RANDOM_CENTER) * PARTICLE_SPEED_RANGE,
      speedY:
        (Math.random() - PARTICLE_SPEED_RANDOM_CENTER) * PARTICLE_SPEED_RANGE,
      color: opts.colors[Math.floor(Math.random() * opts.colors.length)],
      opacity: Math.random() * PARTICLE_OPACITY_VARIANCE + PARTICLE_OPACITY_MIN,
    });
  }

  const FADE_OUT_BOTTOM_SCALE = 0.7;
  const FADE_OUT_EXPONENT = 2;
  const computeFadeOutFactor = (y: number, height: number) =>
    1 - ((y / height) * FADE_OUT_BOTTOM_SCALE) ** FADE_OUT_EXPONENT;

  const drawParticle = (p: Particle) => {
    const fadeOutFactor = computeFadeOutFactor(p.y, canvas.height);
    ctx.globalAlpha = p.opacity * fadeOutFactor * opts.opacity;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  };

  const updateParticle = (p: Particle) => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) {
      p.speedX *= -1;
    }
    if (p.y < 0 || p.y > canvas.height) {
      p.speedY *= -1;
    }
  };

  let rafId = 0;
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw particles and connections
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      drawParticle(p1);
      updateParticle(p1);

      // Draw connections to other particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < CONNECTION_DISTANCE) {
          const opacity = (1 - distance / CONNECTION_DISTANCE) * opts.opacity * CONNECTION_OPACITY_FACTOR;
          
          // Use the color of the first particle for the line, or a mix
          ctx.beginPath();
          ctx.strokeStyle = p1.color;
          ctx.globalAlpha = opacity;
          ctx.lineWidth = 1;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
    rafId = requestAnimationFrame(animate);
  };

  const start = () => {
    animate();
    return () => cancelAnimationFrame(rafId);
  };

  return { start };
}
