/** biome-ignore-all assist/source/organizeImports: <> */
"use client";

import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEFAULT_PARTICLE_CONFIG } from "@/lib/config/particle-config";

export function ParticleToggle() {
  const storageKey = DEFAULT_PARTICLE_CONFIG.storageKey;
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Respect reduced motion preference by default disabling particles
    if (typeof window !== "undefined") {
      const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
      const prefersReduced = mq ? mq.matches : false;
      if (prefersReduced) {
        setEnabled(false);
        return;
      }
    }

    const saved = localStorage.getItem(storageKey);
    if (saved === null) {
      setEnabled(true);
    } else {
      setEnabled(saved === "true");
    }
  }, [storageKey]);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    try {
      localStorage.setItem(storageKey, next.toString());
    } catch {
      // ignore storage write errors (e.g., private mode)
    }
    // dispatch a custom event so other components can react if needed
    window.dispatchEvent(
      new CustomEvent("particles:toggled", { detail: { enabled: next } })
    );
  };

  return (
    <Button
      aria-label={enabled ? "Disable particles" : "Enable particles"}
      aria-pressed={enabled}
      className="h-9 w-9 rounded-md"
      onClick={toggle}
      size="icon"
      variant="ghost"
    >
      {enabled ? <Sparkles className="h-4 w-4" /> : <X className="h-4 w-4" />}
      <span className="sr-only">Toggle particle background</span>
    </Button>
  );
}
