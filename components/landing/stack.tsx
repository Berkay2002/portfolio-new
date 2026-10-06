import { Fragment, type ReactNode, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

// "how I build" as an exploded patent drawing (design/approved/landing-s5-stack.png): five plates,
// interface on top, each machined with a finish that stands for its layer. Each finish is drawn flat
// (u across 0..300, v deep 0..170) and the plate's matrix lays it into the oblique view.
// Scrolling pulls the plates apart: they are fully open once the whole drawing is on screen, and close
// again as it leaves the bottom. While open, each finish runs a small loop (the .stack-anim parts).
const W = 300;
const D = 170;
const EX = [0.96, 0.21] as const; // screen step per unit of u
const EY = [0.8, -0.55] as const; // screen step per unit of v
const T = 7; // plate thickness
const X0 = 20;
const Y0 = 110;
const VW = 480;

const at = (x: number, y: number, u: number, v: number) => [x + u * EX[0] + v * EY[0], y + u * EX[1] + v * EY[1]] as const;
const pts = (p: (readonly [number, number])[]) => p.map(([x, y]) => `${r(x)},${r(y)}`).join(" ");
// Rounded so the server and the browser agree on the last digits (hydration).
const r = (n: number) => Math.round(n * 10) / 10;

const line = { fill: "none", stroke: "var(--fg)", strokeWidth: 1, vectorEffect: "non-scaling-stroke" } as const;
const faint = { ...line, stroke: "var(--dim)", strokeOpacity: 0.6 } as const;

// interface: a twelve-column page layout with a few regions hatched in and one focused field.
const cols = Array.from({ length: 13 }, (_, k) => 14 + (k * 272) / 12);
const layout = (
  <>
    {cols.map((u) => <line {...faint} key={u} x1={r(u)} x2={r(u)} y1={14} y2={156} />)}
    {[14, 40, 96, 156].map((v) => <line {...faint} key={v} x1={14} x2={286} y1={v} y2={v} />)}
    {[[0, 6, 40, 96], [8, 12, 40, 96], [0, 4, 96, 156], [6, 12, 96, 156]].map(([a, b, v0, v1]) => (
      <rect {...line} fill="url(#stack-fine)" key={`${a}-${v0}`} height={v1! - v0!} width={cols[b!]! - cols[a!]!} x={cols[a!]} y={v0} />
    ))}
    <g className="stack-anim stack-focus">
      <rect {...line} height={14} stroke="var(--lime)" strokeWidth={1.5} width={cols[5]! - cols[1]!} x={cols[1]} y={20} />
      <line className="stack-anim stack-caret" stroke="var(--lime)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" x1={cols[1]! + 6} x2={cols[1]! + 6} y1={23} y2={31} />
    </g>
  </>
);

// agents: one groove that runs forward, turns back on itself in a loop and carries on, with pads where it pauses.
const groove = "M24 120 H170 C205 120 205 55 170 55 H112 C86 55 86 88 112 88 H205 C240 88 240 120 276 120";
const loop = (
  <>
    <path d={groove} fill="none" stroke="var(--fg)" strokeLinecap="round" strokeWidth={4} vectorEffect="non-scaling-stroke" />
    <path d={groove} fill="none" stroke="var(--bg)" strokeLinecap="round" strokeWidth={2} vectorEffect="non-scaling-stroke" />
    {[[24, 120], [112, 120], [140, 55], [160, 88]].map(([u, v]) => (
      <circle {...line} cx={u} cy={v} fill="var(--bg)" key={u} r={7} />
    ))}
    <path className="stack-anim stack-run" d={groove} fill="none" pathLength={100} stroke="var(--lime)" strokeDasharray="7 93" strokeLinecap="round" strokeWidth={2} vectorEffect="non-scaling-stroke" />
    <circle cx={276} cy={120} fill="var(--lime)" r={7} />
    <circle {...line} className="stack-anim stack-ping" cx={276} cy={120} r={11} stroke="var(--lime)" />
  </>
);

// models: a weight matrix, most cells empty, many hatched, a few dense, one live.
const cells: { i: number; j: number; k: number }[] = [];
for (let i = 0; i < 16; i++) for (let j = 0; j < 9; j++) cells.push({ i, j, k: (i * 7 + j * 13 + ((i * j) % 4)) % 9 });
const matrix = (
  <>
    {cells.map(({ i, j, k }) => (
      <rect
        {...faint}
        fill={i === 10 && j === 4 ? "var(--lime)" : k < 3 ? "url(#stack-fine)" : k === 4 ? "url(#stack-dense)" : "none"}
        height={17}
        key={`${i}-${j}`}
        stroke={i === 10 && j === 4 ? "var(--lime)" : faint.stroke}
        width={17}
        x={14 + i * 17}
        y={10 + j * 17}
      />
    ))}
    {[[3, 2], [5, 6], [7, 1], [9, 7], [12, 3], [13, 5], [2, 5]].map(([i, j], n) => (
      <rect className="stack-anim stack-blink" fill="var(--lime)" height={17} key={`${i}-${j}`} style={{ animationDelay: `${n * 0.4}s` }} width={17} x={14 + i! * 17} y={10 + j! * 17} />
    ))}
  </>
);

// data: contour lines of an embedding landscape, rings closing in on two low points, the query in the deepest.
const ring = (cu: number, cv: number, rad: number, k: number) => {
  const p = Array.from({ length: 48 }, (_, n) => {
    const a = (n / 48) * Math.PI * 2;
    const s = rad * (1 + 0.13 * Math.sin(3 * a + k) + 0.06 * Math.cos(5 * a - k));
    return [cu + s * Math.cos(a) * 1.3, cv + s * Math.sin(a)] as const;
  });
  return `M${p.map(([u, v]) => `${r(u)} ${r(v)}`).join("L")}Z`;
};
const rings = [
  ...Array.from({ length: 8 }, (_, k) => ring(105, 92, 9 + k * 13, k)),
  ...Array.from({ length: 4 }, (_, k) => ring(232, 58, 7 + k * 12, k + 2)),
];
const contours = (
  <>
    <g clipPath="url(#stack-face)">
      {rings.map((d, k) => <path {...(k < 3 || (k > 7 && k < 10) ? line : faint)} d={d} key={d} />)}
      {[0, 1.3].map((delay) => (
        <circle {...line} className="stack-anim stack-ripple" cx={105} cy={92} key={delay} r={12} stroke="var(--lime)" style={{ animationDelay: `${delay}s` }} />
      ))}
    </g>
    <circle cx={105} cy={92} fill="var(--lime)" r={4} />
  </>
);

// infra: a rack of identical slots cut through the plate, one live.
const rack = (
  <>
    {Array.from({ length: 9 }, (_, k) => (
      <rect {...line} height={110} key={k} rx={6} stroke={k === 6 ? "var(--lime)" : line.stroke} strokeWidth={k === 6 ? 1.5 : 1} width={12} x={30 + k * 29} y={30} />
    ))}
    {Array.from({ length: 9 }, (_, k) => (
      <rect {...line} className="stack-anim stack-roll" height={110} key={k} rx={6} stroke="var(--lime)" strokeWidth={1.5} style={{ animationDelay: `${k * 0.35}s` }} width={12} x={30 + k * 29} y={30} />
    ))}
  </>
);

const finishes: ReactNode[] = [layout, loop, matrix, contours, rack];

function Plate({ i, pitch }: { i: number; pitch: number }) {
  const x = X0;
  const y = Y0 + i * pitch;
  const L = at(x, y, 0, 0);
  const F = at(x, y, W, 0);
  const R = at(x, y, W, D);
  const B = at(x, y, 0, D);
  const down = (p: readonly [number, number]) => [p[0], p[1] + T] as const;
  // Closed, each plate rests a few units under the one above it.
  return (
    <g className="stack-plate" style={{ "--shut": `${-i * (pitch - 16)}px` } as React.CSSProperties}>
      <polygon {...line} fill="url(#stack-edge)" points={pts([L, F, down(F), down(L)])} />
      <polygon {...line} fill="url(#stack-edge)" points={pts([F, R, down(R), down(F)])} />
      <polygon {...line} fill="var(--bg)" points={pts([L, F, R, B])} />
      <g transform={`matrix(${EX[0]} ${EX[1]} ${EY[0]} ${EY[1]} ${x} ${y})`}>{finishes[i]}</g>
      <line {...line} x1={r(R[0])} x2={VW} y1={r(R[1])} y2={r(R[1])} />
      <circle {...line} cx={r(R[0])} cy={r(R[1])} fill="var(--bg)" r={3.5} />
    </g>
  );
}

// The plates and their labels, spread `pitch` units apart. Phones spread them wider so the labels fit.
function Drawing({ layers, tools, pitch, className }: { layers: string[]; tools: string[]; pitch: number; className: string }) {
  const vh = Y0 + 4 * pitch + 80;
  const root = useRef<HTMLDivElement>(null);
  const svg = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = root.current;
    const box = svg.current;
    if (!el || !box || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Closed, the stack is as tall as the top plate plus four small steps.
    const closed = (93.5 + 63 + T + 4 * 16) / vh;
    let frame = 0;
    const update = () => {
      const { top, height } = box.getBoundingClientRect();
      if (height === 0) return; // the other breakpoint's drawing
      const edge = window.innerHeight - Math.min(32, window.innerHeight * 0.04);
      // 0 while the closed stack is still coming up from the bottom, 1 once the open drawing's bottom is on screen.
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
  }, [vh]);

  // The three visible corners, from the top plate to the bottom one.
  const guides = [
    [0, 0],
    [W, 0],
    [W, D],
  ].map(([u, v]) => [at(X0, Y0, u!, v!), at(X0, Y0 + 4 * pitch, u!, v!)] as const);
  return (
    <div className={cn("stack", className)} ref={root}>
      {/* On desktop the width also follows the window's height, so the open stack always fits on screen. */}
      <svg
        aria-hidden
        className="w-[56%] shrink-0 overflow-visible lg:w-[min(clamp(380px,40vw,520px),calc((100svh-140px)*0.66))]"
        ref={svg}
        viewBox={`0 0 ${VW} ${vh}`}
      >
        <g className="stack-guides">
          {guides.map(([a, b]) => (
            <line {...faint} key={a[0]} strokeDasharray="3 4" x1={r(a[0])} x2={r(b[0])} y1={r(a[1])} y2={r(b[1]) + T} />
          ))}
        </g>
        {[4, 3, 2, 1, 0].map((i) => <Plate i={i} key={i} pitch={pitch} />)}
      </svg>
      <ul className="relative flex-1">
        {layers.map((layer, i) => (
          <li
            className="stack-label -translate-y-[9px] absolute left-0 pl-2 lg:-translate-y-[11px] lg:pl-4"
            key={layer}
            style={{ top: `${((Y0 + i * pitch + W * EX[1] + D * EY[1]) / vh) * 100}%` }}
          >
            <p className="text-[13px] lg:text-[15px]">{layer}</p>
            <p className="mt-0.5 text-(--dim) text-[11px] leading-snug lg:mt-1 lg:text-[13px]">
              {/* Wraps only between whole tool names. */}
              {tools[i]!.split(" · ").map((t, k, all) => (
                <Fragment key={t}>
                  <span className="whitespace-nowrap">{k < all.length - 1 ? `${t} ·` : t}</span>
                  {k < all.length - 1 && " "}
                </Fragment>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Stack({ layers, tools }: { layers: string[]; tools: string[] }) {
  return (
    <>
      {/* Shared by both drawings, so a drawing hidden at this width does not take the patterns with it. */}
      <svg aria-hidden className="absolute size-0">
        <defs>
          <pattern height={4} id="stack-edge" patternTransform="rotate(-50)" patternUnits="userSpaceOnUse" width={4}>
            <rect fill="var(--bg)" height={4} width={4} />
            <line stroke="var(--dim)" strokeWidth={1} x1={0} x2={0} y1={0} y2={4} />
          </pattern>
          <pattern height={5} id="stack-fine" patternTransform="rotate(45)" patternUnits="userSpaceOnUse" width={5}>
            <line stroke="var(--dim)" strokeWidth={0.8} x1={0} x2={0} y1={0} y2={5} />
          </pattern>
          <pattern height={3} id="stack-dense" patternTransform="rotate(45)" patternUnits="userSpaceOnUse" width={3}>
            <line stroke="var(--fg)" strokeOpacity={0.7} strokeWidth={0.9} x1={0} x2={0} y1={0} y2={3} />
          </pattern>
          <clipPath id="stack-face">
            <rect height={D - 8} width={W - 8} x={4} y={4} />
          </clipPath>
        </defs>
      </svg>
      <Drawing className="flex lg:hidden" layers={layers} pitch={180} tools={tools} />
      <Drawing className="hidden lg:flex" layers={layers} pitch={132} tools={tools} />
    </>
  );
}
