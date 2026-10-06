"use client";

import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

// The trace: one lime line down the whole landing page (design/specs/landing-r2.md).
// Sections place zero-size anchors (<A />) where it should pass; the root measures them and joins
// them with curves. An anchor's --dir (h or v, default v) is the line's direction through it.
// An anchor can sit on several lines: data-trace="main dense" starts the "dense" branch there.
// The line draws itself down to a pen point low in the viewport as the page scrolls.

type Pt = { x: number; y: number; h: boolean };
type Line = { id: string; d: string };
type Sample = { len: number; x: number; y: number; thr: number };

const PEN = 0.75; // the pen sits at 75 % of the viewport height
const STEP = 6; // px between samples along a line

const R = 40; // corner radius in px

// Joins the anchors. Where the line turns from sideways to down (or back), it runs straight and
// takes a rounded corner of up to R px; two anchors in the same direction are joined by an S curve.
function curve(pts: Pt[]) {
  return pts
    .map((q, i) => {
      if (i === 0) return `M${q.x} ${q.y}`;
      const p = pts[i - 1]!;
      const dx = q.x - p.x;
      const dy = q.y - p.y;
      const sx = Math.sign(dx);
      const sy = Math.sign(dy);
      const r = Math.min(R, Math.abs(dx), Math.abs(dy));
      if (p.h && !q.h) {
        const x = q.x - sx * r;
        return `L${x} ${p.y}C${x + (sx * r) / 2} ${p.y} ${q.x} ${p.y + (sy * r) / 2} ${q.x} ${p.y + sy * r}L${q.x} ${q.y}`;
      }
      if (!p.h && q.h) {
        const y = q.y - sy * r;
        return `L${p.x} ${y}C${p.x} ${y + (sy * r) / 2} ${p.x + (sx * r) / 2} ${q.y} ${p.x + sx * r} ${q.y}L${q.x} ${q.y}`;
      }
      const c1 = p.h ? `${p.x + dx / 2} ${p.y}` : `${p.x} ${p.y + dy / 2}`;
      const c2 = q.h ? `${q.x - dx / 2} ${q.y}` : `${q.x} ${q.y - dy / 2}`;
      return `C${c1} ${c2} ${q.x} ${q.y}`;
    })
    .join("");
}

// thr is the pen height at which a point is drawn: its own height, except that a sideways run is
// drawn while the pen moves on by a sixth of its length, and the line catches up after it.
function sample(path: SVGPathElement): Sample[] {
  const total = path.getTotalLength();
  const out: Sample[] = [];
  for (let len = 0; ; len = Math.min(total, len + STEP)) {
    const { x, y } = path.getPointAtLength(len);
    const prev = out.at(-1);
    const thr = prev ? Math.max(y, prev.thr + 0.15 * Math.abs(x - prev.x) + 0.3 * Math.abs(y - prev.y)) : y;
    out.push({ len, x, y, thr });
    if (len === total) return out;
  }
}

export function TraceRoot({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const svg = useRef<SVGSVGElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const state = useRef({
    still: false,
    samples: new Map<string, { path: SVGPathElement; s: Sample[] }>(),
    waves: [] as { el: Element; thr: number }[],
    bars: [] as { el: Element; thr: number }[],
  });

  const layout = useCallback(() => {
    const el = root.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const anchors = [...el.querySelectorAll<HTMLElement>("[data-trace]")].filter((a) => a.getClientRects().length > 0);
    const ids = [...new Set(anchors.flatMap((a) => a.dataset.trace!.split(" ")))];
    setLines(
      ids.map((id) => ({
        id,
        d: curve(
          anchors
            .filter((a) => a.dataset.trace!.split(" ").includes(id))
            .map((a) => {
              const r = a.getBoundingClientRect();
              return {
                x: Math.round(r.left - box.left + r.width / 2),
                y: Math.round(r.top - box.top + r.height / 2),
                h: getComputedStyle(a).getPropertyValue("--dir").trim() === "h",
              };
            })
        ),
      }))
    );
    setSize({ w: el.offsetWidth, h: el.offsetHeight });
  }, []);

  const draw = useCallback(() => {
    const el = root.current;
    if (!el) return;
    const { still, samples, waves } = state.current;
    const vh = window.innerHeight;
    const top = el.getBoundingClientRect().top;
    // Near the end of the page the pen slides down to the bottom edge, so the last lines finish.
    const rest = document.documentElement.scrollHeight - (window.scrollY + vh);
    const pen = still || rest < 2 ? Number.POSITIVE_INFINITY : vh * (PEN + (1 - PEN) * Math.min(1, Math.max(0, 1 - rest / (vh * 0.5)))) - top;
    for (const [id, { path, s }] of samples) {
      const total = s.at(-1)?.len ?? 0;
      let drawn = 0;
      for (const p of s) {
        if (p.thr > pen) break;
        drawn = p.len;
      }
      path.style.strokeDashoffset = String(total - drawn);
      if (id === "main") {
        const tip = svg.current?.querySelector<SVGCircleElement>("[data-tip]");
        const at = s.find((p) => p.len === drawn);
        if (tip && at) {
          tip.setAttribute("cx", String(at.x));
          tip.setAttribute("cy", String(at.y));
          tip.style.opacity = drawn > 0 && drawn < total ? "1" : "0";
        }
      }
    }
    for (const w of waves) w.el.classList.toggle("on", w.thr <= pen);
    for (const b of state.current.bars) b.el.classList.toggle("on", b.thr <= pen);
  }, []);

  // After the lines render, sample them and find where each waveform sits on them.
  useEffect(() => {
    const el = root.current;
    const s = svg.current;
    if (!el || !s) return;
    const samples = new Map<string, { path: SVGPathElement; s: Sample[] }>();
    for (const path of s.querySelectorAll<SVGPathElement>("path[data-id]")) {
      const pts = sample(path);
      const total = pts.at(-1)?.len ?? 0;
      path.style.strokeDasharray = String(total);
      samples.set(path.dataset.id!, { path, s: pts });
    }
    const box = el.getBoundingClientRect();
    const all = [...samples.values()].flatMap((v) => v.s);
    state.current.samples = samples;
    // The threshold of the line point nearest to (x, y), if one is within 80 px.
    const near = (x: number, y: number) => {
      let best: { d: number; thr?: number } = { d: 80 * 80 };
      for (const p of all) {
        const d = (p.x - x) ** 2 + (p.y - y) ** 2;
        if (d < best.d) best = { d, thr: p.thr };
      }
      return best.thr;
    };
    const mid = (r: DOMRect) => [r.left - box.left + r.width / 2, r.top - box.top + r.height / 2] as const;
    state.current.waves = [...el.querySelectorAll("[data-wave]:not(.live):not(.sweep)")].map((w) => {
      const [x, y] = mid(w.getBoundingClientRect());
      return { el: w, thr: near(x, y) ?? y };
    });
    // A sweep wave fills bar by bar as the line passes each bar. A sweep wave the line only leaves
    // (the hero's) fills left to right, from where the pen starts on the first screen to its right end.
    const start = window.innerHeight * PEN - (box.top + window.scrollY);
    state.current.bars = [...el.querySelectorAll("[data-wave].sweep")]
      .filter((w) => w.getClientRects().length > 0)
      .flatMap((w) => {
        const r = w.getBoundingClientRect();
        const end = near(r.right - box.left, mid(r)[1]) ?? mid(r)[1];
        const rects = [...w.querySelectorAll("rect")];
        return rects.map((b, i) => {
          const linear = Math.min(start, end) + (i / Math.max(1, rects.length - 1)) * Math.max(0, end - start);
          return { el: b, thr: near(...mid(b.getBoundingClientRect())) ?? linear };
        });
      });
    draw();
  }, [lines, draw]);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    state.current.still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!state.current.still) el.dataset.anim = "";
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };
    const ro = new ResizeObserver(() => layout());
    ro.observe(el);
    document.fonts?.ready.then(layout);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [layout, draw]);

  return (
    <div className={cn("relative", className)} ref={root}>
      <svg
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 z-0"
        height={size.h}
        ref={svg}
        width={size.w}
      >
        {lines.map((l) => (
          <path
            d={l.d}
            data-id={l.id}
            fill="none"
            key={l.id}
            stroke="var(--lime)"
            strokeLinecap="round"
            strokeWidth={2}
          />
        ))}
        <circle data-tip fill="var(--lime)" opacity={0} r={4} />
      </svg>
      {children}
    </div>
  );
}

// An anchor the trace passes through. `on` lists the lines (default the main one).
export function A({ on = "main", className, style }: { on?: string; className?: string; style?: React.CSSProperties }) {
  return <i aria-hidden className={cn("pointer-events-none absolute block size-0", className)} data-trace={on} style={style} />;
}

type Peak = [at: number, width: number, height: number]; // all in 0..1

// A row of waveform bars, quiet at `floor` with bursts at `peaks`. It swells when the trace reaches it.
export function Wave({
  n,
  peaks,
  floor = 0.05,
  vertical = false,
  live = false,
  sweep = false,
  className,
}: {
  n: number;
  peaks: Peak[];
  floor?: number;
  vertical?: boolean;
  live?: boolean; // already swelled when the page opens
  sweep?: boolean; // fills bar by bar as the line passes (or, if the line only leaves it, as the page starts to scroll)
  className?: string;
}) {
  const bars = Array.from({ length: n }, (_, i) => {
    const t = n === 1 ? 0.5 : i / (n - 1);
    const jitter = 0.5 + 0.5 * Math.abs(Math.sin(i * 12.9898 + n * 78.233));
    const a = peaks.reduce((sum, [at, w, h]) => sum + h * Math.exp(-(((t - at) / w) ** 2)), 0);
    // Rounded so the server and the browser agree on the last digits (hydration).
    return Math.round(Math.min(1, floor + a * jitter) * 1000) / 1000;
  });
  return (
    <svg
      aria-hidden
      className={cn("wave pointer-events-none", vertical && "vertical", live && "live on", sweep && "sweep on", className)}
      data-wave
      preserveAspectRatio="none"
      viewBox={vertical ? `0 0 100 ${n}` : `0 0 ${n} 100`}
    >
      {bars.map((a, i) =>
        vertical ? (
          <rect fill="var(--lime)" height={0.42} key={i} style={{ "--i": i } as React.CSSProperties} width={a * 100} x={50 - a * 50} y={i + 0.29} />
        ) : (
          <rect fill="var(--lime)" height={a * 100} key={i} style={{ "--i": i } as React.CSSProperties} width={0.42} x={i + 0.29} y={50 - a * 50} />
        )
      )}
    </svg>
  );
}
