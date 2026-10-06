import Link from "next/link";
import { type CSSProperties, useEffect, useRef } from "react";

import { type Photo, photoUrl } from "@/lib/data/photos";
import { useUnfold } from "./use-unfold";

// The photos as prints dealt across the page (design/approved/photos-prints.png). They start as a
// pile in the middle and spread out as the row scrolls into view, the same way the About plates open;
// the middle print sits forward, straight and in colour. They are dealt over half a screen of scrolling,
// so the row is well on screen first. On phones the row runs off both edges and swipes sideways.
const deal = [
  { r: -4, y: -4 },
  { r: 3, y: 10 },
  { r: 0, y: 0 },
  { r: -3, y: 12 },
  { r: 5, y: -2 },
];

export function Prints({ photos, places }: { photos: Photo[]; places: Record<Photo["place"], string> }) {
  const root = useRef<HTMLDivElement>(null);
  useUnfold(root, root, 0, 0.5);
  // On phones the row scrolls sideways: start it on the middle print, again whenever the screen narrows to a phone's.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const phone = window.matchMedia("(max-width: 1023.98px)");
    const centre = () => {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    };
    // After a resize the new layout and the snap settle first, so centre on the next frame.
    let frame = 0;
    const later = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(centre);
    };
    centre();
    phone.addEventListener("change", later);
    return () => {
      cancelAnimationFrame(frame);
      phone.removeEventListener("change", later);
    };
  }, []);
  const mid = (photos.length - 1) / 2;
  return (
    <div className="prints relative" ref={root}>
      {photos.map((p, i) => {
        const { r, y } = deal[i % deal.length]!;
        const style = { "--i": i - mid, "--r": `${r}deg`, "--y": `${y}px`, zIndex: 10 - Math.abs(i - mid) } as CSSProperties;
        return (
          <Link className="print" data-side={i < mid ? "l" : i > mid ? "r" : "mid"} href="/photography" key={p.id} style={style}>
            <span aria-hidden className="print-guide" />
            {/* eslint-disable-next-line @next/next/no-img-element -- images are served unoptimized */}
            <img alt={p.alt} className="print-photo" loading="lazy" src={photoUrl(p, true)} />
            <span className="print-place">{places[p.place]}</span>
          </Link>
        );
      })}
    </div>
  );
}
