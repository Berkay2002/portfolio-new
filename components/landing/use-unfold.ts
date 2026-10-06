import { type RefObject, useEffect } from "react";

// Sets --p on `root` from 0 to 1 as `box` scrolls up into view: 0 while its first `closed` share is
// still coming up from the bottom of the screen, 1 once its bottom is on screen. Adds .open near 1 and removes it below 0.9.
// Skipped with reduced motion, so the CSS default (--p: 1) applies.
export function useUnfold(root: RefObject<HTMLElement | null>, box: RefObject<Element | null>, closed: number) {
  useEffect(() => {
    const el = root.current;
    const target = box.current;
    if (!el || !target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      const { top, height } = target.getBoundingClientRect();
      if (height === 0) return; // hidden at this breakpoint
      const edge = window.innerHeight - Math.min(32, window.innerHeight * 0.04);
      const t = Math.min(1, Math.max(0, (edge - top - closed * height) / (height * (1 - closed))));
      const p = t * t * (3 - 2 * t);
      el.style.setProperty("--p", p.toFixed(3));
      if (p > 0.995) el.classList.add("open");
      else if (p < 0.9) el.classList.remove("open");
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [root, box, closed]);
}
