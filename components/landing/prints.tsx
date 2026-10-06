import Link from "next/link";
import { type CSSProperties, useRef } from "react";

import { type Photo, photoUrl } from "@/lib/data/photos";
import { useUnfold } from "./use-unfold";

// The photos as prints dealt across the page (design/mockups/photos-r3-b-prints.png). They start as a
// pile in the middle and spread out as the row scrolls into view, the same way the About plates open;
// the middle print sits forward, straight and in colour. On phones the row runs off both edges.
const deal = [
  { r: -4, y: -4 },
  { r: 3, y: 10 },
  { r: 0, y: 0 },
  { r: -3, y: 12 },
  { r: 5, y: -2 },
];

export function Prints({ photos, places }: { photos: Photo[]; places: Record<Photo["place"], string> }) {
  const root = useRef<HTMLDivElement>(null);
  useUnfold(root, root, 0);
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
