import type { Glyph } from "@/lib/data/flows";
import { cn } from "@/lib/utils";
import { pad } from "./page-parts";
import { A, Wave } from "./trace";

// How a project works, drawn on its page's trace (design/approved/project-arch-across.png): on desktop the
// line leaves the left lane under the lede, runs right through the stations and drops back into the lane;
// on phones it stays in the lane and the stations sit on it, top to bottom. Stations are in lib/data/flows.ts.

type Pt = [x: number, y: number];

// The drawings that aren't waveforms, in a 96 x 48 box with the line along y = 24. A phone gets the
// same drawing turned to run down (x and y swapped).
const scatter: [Pt, number][] = [
  [[10, 8], 6], [[8, 36], 8], [[20, 16], 5], [[18, 30], 7], [[30, 6], 4], [[32, 40], 5],
  [[34, 20], 6], [[46, 12], 5], [[44, 32], 6], [[58, 18], 7], [[56, 28], 5], [[70, 22], 6],
];
const nodes: Pt[] = [[12, 24], [28, 12], [40, 32], [54, 14], [66, 34], [82, 24], [50, 24]];
const links: [number, number][] = [[0, 1], [0, 2], [1, 3], [2, 6], [1, 6], [3, 6], [6, 4], [3, 5], [4, 5]];
const fan = ["M4 24C24 24 28 8 48 8S72 24 92 24", "M4 24C24 24 28 40 48 40S72 24 92 24"];

function Drawing({ glyph, down, className }: { glyph: Glyph; down?: boolean; className?: string }) {
  if (glyph === "wave" || glyph === "ticks")
    return (
      <Wave
        className={className}
        floor={glyph === "ticks" ? 0.16 : 0.05}
        n={glyph === "ticks" ? 11 : 21}
        peaks={glyph === "ticks" ? [] : [[0.5, 0.24, 0.9]]}
        vertical={down}
      />
    );
  const p = ([x, y]: Pt) => (down ? [y, x] : [x, y]);
  return (
    <svg aria-hidden className={cn("glyph pointer-events-none", className)} data-wave fill="none" stroke="var(--lime)" viewBox={down ? "0 0 48 96" : "0 0 96 48"}>
      {glyph === "in" &&
        scatter.map(([at, len]) => {
          const [x1, y1] = p(at);
          const [x2, y2] = p([at[0] + len, at[1]]);
          return <line key={`${at}`} strokeLinecap="round" strokeWidth={2} x1={x1} x2={x2} y1={y1} y2={y2} />;
        })}
      {glyph === "graph" && (
        <>
          {links.map(([a, b]) => {
            const [x1, y1] = p(nodes[a]!);
            const [x2, y2] = p(nodes[b]!);
            return <line key={`${a}-${b}`} strokeWidth={1.25} x1={x1} x2={x2} y1={y1} y2={y2} />;
          })}
          {nodes.map((n) => {
            const [cx, cy] = p(n);
            return <circle cx={cx} cy={cy} fill="var(--lime)" key={`${n}`} r={2.8} stroke="none" />;
          })}
        </>
      )}
      {glyph === "fan" && (
        <g strokeWidth={2} transform={down ? "matrix(0 1 1 0 0 0)" : undefined}>
          {fan.map((d) => (
            <path d={d} key={d} />
          ))}
          {([[48, 8], [48, 40]] as Pt[]).map(([cx, cy]) => (
            <circle cx={cx} cy={cy} fill="var(--lime)" key={cy} r={2.8} stroke="none" />
          ))}
        </g>
      )}
    </svg>
  );
}

export function Flow({ label, stations }: { label: string; stations: { glyph: Glyph; name: string; what: string }[] }) {
  return (
    <section className="relative mt-16 lg:mt-24 lg:pb-16">
      <p className={cn(pad, "text-(--dim) text-sm")}>{label}</p>
      <div className="relative mt-8 lg:mt-6">
        {/* Desktop: out of the lane, across at the glyphs' middle (48 px down), then down and back. */}
        <A className="top-0 left-[2%] hidden lg:block" />
        <A className="top-12 left-[4%] hidden [--dir:h] lg:block" />
        <A className="top-12 right-[4%] hidden [--dir:h] lg:block" />
        <A className="top-[calc(100%+24px)] right-[2%] hidden lg:block" />
        <A className="top-[calc(100%+72px)] left-[2%] hidden lg:block" />
        <ol className="flex flex-col gap-8 pr-6 pl-12 lg:flex-row lg:justify-between lg:gap-8 lg:px-[4%]">
          {stations.map((st) => (
            <li className="relative flex min-h-20 items-center lg:block" key={st.name}>
              <Drawing className="mt-2 hidden h-20 w-32 lg:block" glyph={st.glyph} />
              <Drawing className="-left-7 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 h-20 w-10 lg:hidden" down glyph={st.glyph} />
              <p className="text-sm leading-snug lg:mt-3">
                {st.name}
                <br />
                <span className="text-(--dim)">{st.what}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
