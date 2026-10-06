"use client";

import Link from "next/link";
import { type ReactNode, useState } from "react";

import { useLanguage } from "@/components/layout/language-provider";
import { landingCopy, photos, shipped, stack } from "@/lib/data/landing";
import { photos as allPhotos } from "@/lib/data/photos";
import { projects, socialLinks } from "@/lib/data/portfolio-data";
import { whenAgenticWorkflowsPaper } from "@/lib/data/when-agentic-workflows-paper";
import type { Commits } from "@/lib/github";
import { cn } from "@/lib/utils";
import { Prints } from "./prints";
import { Stack } from "./stack";
import { A, Wave } from "./trace";

// The landing page sections (design/specs/landing-r2.md, mobile in landing-mobile-r1.md).
// On phones the trace runs in a lane 20 px from the left edge and most text starts at 48 px; on
// desktop the lane is at 2 % and text starts between 4 and 9 %, per section. Below lg the drawings turn from left-to-right to top-to-bottom.

const EMAIL = "berkayorhan@hotmail.se";
const CV = socialLinks.cv;

export function useCopy() {
  const { locale, setLocale } = useLanguage();
  return { c: landingCopy[locale], locale, setLocale };
}

export function Index({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-(--lime) text-sm tracking-[0.08em]", className)}>{children}</p>;
}

// Takes the trace sideways between two x positions in a strip of its own (desktop only).
function Wire({ from, to }: { from: string; to: string }) {
  const r = 40; // corner size in px
  const num = (x: string) => Number.parseFloat(x.replace("calc(", ""));
  const right = num(from) < num(to);
  const bend = (x: string, out: boolean) => `calc(${x} ${right === out ? "+" : "-"} ${r}px)`;
  return (
    <div aria-hidden className="relative col-span-full hidden h-24 lg:block">
      <A className="top-0" style={{ left: from }} />
      <A className="top-1/2 [--dir:h]" style={{ left: bend(from, true) }} />
      <A className="top-1/2 [--dir:h]" style={{ left: bend(to, false) }} />
      <A className="bottom-0" style={{ left: to }} />
    </div>
  );
}

function Dot({ x, y }: { x: number; y: number }) {
  return (
    <span
      className="-translate-x-1/2 -translate-y-1/2 absolute size-2.5 rounded-full bg-(--lime)"
      style={{ left: `${x}%`, top: `${y}%` }}
    />
  );
}

export function Header() {
  const { c, locale, setLocale } = useCopy();
  const [open, setOpen] = useState(false);
  const links: [string, string][] = [
    ["/#work", c.nav.work],
    ["/#research", c.nav.research],
    ["/#experience", c.nav.experience],
    ["/#about", c.nav.about],
  ];
  const lang = (
    <button
      aria-label={locale === "en" ? "Byt till svenska" : "Switch to English"}
      className="hover:text-(--fg)"
      onClick={() => setLocale(locale === "en" ? "sv" : "en")}
      type="button"
    >
      <span className={locale === "en" ? "text-(--fg)" : "text-(--dim)"}>EN</span>
      <span className="text-(--dim)"> / </span>
      <span className={locale === "sv" ? "text-(--fg)" : "text-(--dim)"}>SV</span>
    </button>
  );
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-(--bg)/90 backdrop-blur lg:absolute lg:bg-transparent lg:backdrop-blur-none">
      <div className="flex h-16 items-center justify-between pr-3 pl-6 lg:h-[124px] lg:px-[4%]">
        <Link className="font-display text-xl lg:text-[28px]" href="/#top">
          Berkay Orhan
        </Link>
        <nav className="hidden items-center gap-10 text-[15px] lg:flex">
          {links.map(([href, label]) => (
            <Link className="hover:text-(--lime)" href={href} key={href}>
              {label}
            </Link>
          ))}
          {lang}
          <Link className="rounded-md bg-(--lime) px-7 py-3 font-medium text-(--bg)" href="/#contact">
            {c.nav.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <Link className="rounded-md bg-(--lime) px-4 py-2 font-medium text-(--bg) text-sm" href="/#contact">
            {c.nav.contact}
          </Link>
          <button
            aria-expanded={open}
            aria-label="Menu"
            className="grid size-11 place-items-center"
            onClick={() => setOpen(!open)}
            type="button"
          >
            <svg aria-hidden fill="none" height="12" stroke="currentColor" strokeWidth="1.5" width="24">
              <path d={open ? "M4 1l16 10M4 11L20 1" : "M0 1h24M0 11h24"} />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col border-(--faint) border-t px-6 pb-4 lg:hidden">
          {links.map(([href, label]) => (
            <Link className="flex h-12 items-center" href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="flex h-12 items-center">{lang}</div>
        </nav>
      )}
    </header>
  );
}

const heroPeaks: [number, number, number][] = [
  [0.26, 0.03, 0.12],
  [0.42, 0.03, 0.18],
  [0.6, 0.05, 0.22],
  [0.8, 0.04, 0.6],
  [0.87, 0.03, 0.95],
  [0.93, 0.03, 0.45],
];

export function Hero() {
  const { c } = useCopy();
  return (
    <section className="relative pt-16 lg:min-h-[max(720px,100svh)] lg:pt-0" id="top">
      <div className="relative h-[50svh] max-h-[440px] lg:absolute lg:top-[72px] lg:right-[2%] xl:right-[6%] lg:h-[calc(92%-72px)] lg:max-h-none">
        {/* eslint-disable-next-line @next/next/no-img-element -- images are served unoptimized */}
        <img alt="Berkay Orhan" fetchPriority="high" className="portrait-fade size-full object-cover object-[50%_calc(20px-22.5vw)] lg:object-[50%_45%] lg:h-full lg:w-auto" src="/images/hero-portrait.jpg" />
      </div>
      <div className="-mt-10 relative z-10 px-6 lg:mt-0 lg:max-w-[66%] lg:px-0 lg:pt-[200px] lg:pl-[4%]">
        <Index className="tracking-[0.12em]">{c.hero.overline}</Index>
        <h1 className="font-display mt-3 text-[44px] leading-[0.98] lg:mt-6 lg:text-[clamp(48px,4.3vw,64px)]">
          <span className="lg:block">{c.hero.headline[0]}</span> <span className="lg:block">{c.hero.headline[1]}</span>
        </h1>
        <p className="mt-4 max-w-[38ch] text-(--fg)/70 text-[15px] leading-relaxed lg:mt-6 lg:max-w-[44ch] lg:text-[20px]">{c.hero.lede}</p>
        <div className="mt-6 flex flex-col gap-3 lg:mt-10 lg:flex-row lg:gap-6">
          <a
            className="flex h-12 items-center justify-center rounded-md bg-(--lime) px-10 font-medium text-(--bg) lg:h-14"
            href="#work"
          >
            {c.hero.cta}
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-md border border-(--fg)/40 px-10 hover:border-(--fg) lg:h-14"
            href={CV}
          >
            {c.hero.cv}
          </a>
        </div>
      </div>
      <div className="relative mt-10 h-24 lg:absolute lg:inset-x-0 lg:bottom-[3%] lg:mt-0 lg:h-[130px]">
        {/* Phone: the trace leaves the signal's left end and turns down into the 20 px lane. */}
        <Wave className="absolute inset-y-0 left-11 h-full w-[calc(100%-44px)] lg:hidden" live n={60} peaks={heroPeaks} />
        <Wave className="absolute inset-y-0 left-0 hidden h-full w-[75%] lg:block" n={180} peaks={heroPeaks} sweep />
        <A className="top-1/2 left-11 [--dir:h] lg:left-[75%]" />
        <A className="top-[calc(50%+40px)] left-5 lg:hidden" />
        <A className="top-[calc(50%+40px)] left-[calc(75%+40px)] hidden lg:block" />
      </div>
    </section>
  );
}

const featured = [
  ["fasttalk", "FastTalk"],
  ["researcher", "SynGraph"],
  ["wikillm", "wikillm"],
  ["litheplan", "LiTHePlan"],
];

export function Work() {
  const { c } = useCopy();
  return (
    <section className="relative scroll-mt-16 pt-24 lg:grid lg:grid-cols-[43%_1fr] lg:pt-40" id="work">
      {/* Desktop: the trace drops from the hero's signal, runs left above the caption and turns down into the pipeline. */}
      <A className="top-[160px] left-[calc(75%+40px)] hidden lg:block" />
      <A className="top-[200px] left-[75%] hidden [--dir:h] lg:block" />
      <div className="pr-6 pl-12 lg:pr-0 lg:pl-[9.3%]">
        <Index>{c.work.index}</Index>
        <h2 className="font-display mt-4 text-[40px] leading-none lg:text-[clamp(40px,3.9vw,56px)]">{c.work.title}</h2>
        <ol className="mt-10 lg:mt-16">
          {featured.map(([id, name], i) => (
            <li key={id}>
              <Link className="group flex items-baseline gap-5 py-1 lg:py-2" href={`/projects/${id}`}>
                <span className="w-6 shrink-0 text-(--dim) text-sm">0{i + 1}</span>
                <span
                  className={cn(
                    "font-display text-[44px] leading-[1.15] transition-colors lg:text-[clamp(56px,5.6vw,84px)]",
                    i === 0
                      ? "underline decoration-(--lime) decoration-[3px] underline-offset-[10px]"
                      : "text-(--dim) group-hover:text-(--fg)"
                  )}
                >
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <Link className="mt-8 inline-block text-(--dim) hover:text-(--fg)" href="/projects">
          {c.work.all(projects.length)}
        </Link>
      </div>
      <div className="mt-20 pr-6 pl-12 lg:relative lg:mt-0 lg:pt-[110px] lg:pr-[6%] lg:pl-[5%]">
        <A className="top-10 left-[5%] hidden [--dir:h] lg:block" />
        <A className="top-20 left-[calc(5%-40px)] hidden lg:block" />
        <p className="max-w-[46ch] text-(--dim) text-sm leading-relaxed lg:ml-14 lg:text-base">{c.work.caption}</p>
        <ol className="relative mt-16 flex flex-col gap-4 lg:mt-24 lg:flex-row lg:justify-between lg:gap-0">
          <A className="-top-12 -left-7 lg:hidden" />
          <A className="top-2 -left-10 hidden lg:block" />
          <A className="top-0 left-12 lg:top-12 lg:left-0 lg:[--dir:h]" />
          {c.work.stations.map(([name, what], i) => (
            <li className="flex items-center gap-4 lg:flex-col lg:gap-3" key={name}>
              <div className="relative size-24 shrink-0">
                <Wave
                  className="absolute inset-0 m-auto h-[72%] w-full max-lg:rotate-90"
                  floor={i === 2 ? 0.16 : 0.05}
                  n={i === 2 ? 11 : 21}
                  peaks={i === 2 ? [] : [[0.5, 0.24, i === 0 ? 0.95 : 0.7]]}
                />
              </div>
              <p className="text-sm leading-snug lg:text-center">
                {name}
                <br />
                <span className="text-(--fg)/70">{what}</span>
              </p>
            </li>
          ))}
          <A className="bottom-0 left-12 lg:top-12 lg:right-0 lg:bottom-auto lg:left-auto lg:[--dir:h]" />
          <A className="-bottom-12 -left-7 lg:hidden" />
        </ol>
      </div>
      {/* The pipeline ends at 43 % + 57 % x 94 % of the page; the trace turns down 40 px past it. */}
      <Wire from="calc(96.58% + 40px)" to="2%" />
    </section>
  );
}

// Strands from the question into the field: label row and lit dot, in % of the drawing.
const strands = [
  { id: "dense", y: 10, end: 71 },
  { id: "keyword", y: 30, end: 74 },
  { id: "sql", y: 50, end: 64 },
  { id: "main", y: 70, end: 76 },
];
const strandLabel = { dense: "dense", keyword: "keyword", sql: "SQL", main: "graph" } as Record<string, string>;
const extraDots = [
  [80, 42],
  [88, 60],
  [92, 82],
  [67, 88],
];

// The same on a phone, top to bottom: x in % of the width, y in px.
const strandsMobile = [
  { id: "dense", x: 30, end: 250 },
  { id: "keyword", x: 48, end: 370 },
  { id: "sql", x: 66, end: 300 },
  { id: "main", x: 84, end: 430 },
];

export function Research() {
  const { c } = useCopy();
  const thesis = whenAgenticWorkflowsPaper.pdfUrl;
  return (
    <section className="relative scroll-mt-16 pt-24 lg:pt-10" id="research">
      <div className="pr-6 pl-12 lg:pl-[6%]">
        <Index>{c.research.index}</Index>
        <h2 className="font-display mt-4 text-[40px] leading-[1.02] lg:text-[clamp(48px,5vw,72px)]">
          <span className="lg:block">{c.research.title[0]}</span> <span className="lg:block">{c.research.title[1]}</span>
        </h2>
        <p className="mt-4 text-(--fg)/70 text-sm lg:text-lg">{c.research.meta}</p>
      </div>

      {/* Desktop: left to right. */}
      <div className="relative mt-24 hidden h-[380px] lg:block">
        <A className="top-[30%] left-[5%] [--dir:h]" />
        <Wave className="-translate-y-1/2 absolute top-[30%] left-[11%] h-16 w-14" n={13} peaks={[[0.5, 0.3, 0.95]]} />
        <p className="absolute top-[calc(30%-40px)] left-[16%] text-[15px]">{c.research.question}</p>
        <A className="top-[30%] left-[37%] [--dir:h]" on="main dense keyword sql" />
        <div className="dot-field absolute top-0 left-[55%] h-full w-[41%]" />
        <p className="-top-9 absolute left-[55%] text-(--dim) text-sm">{c.research.field}</p>
        <p className="-top-9 absolute left-[84%] text-sm">{c.research.few}</p>
        <svg aria-hidden className="absolute inset-0 size-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          {[...strands.map((s) => [s.end, s.y]), ...extraDots].map(([x, y]) => (
            <line
              key={`${x}-${y}`}
              stroke="var(--dim)"
              strokeOpacity={0.5}
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
              x1={86}
              x2={x}
              y1={-4}
              y2={y}
            />
          ))}
        </svg>
        {strands.map((s) => (
          <div key={s.id}>
            <A className="[--dir:h]" on={s.id} style={{ left: "43%", top: `${s.y}%` }} />
            <span className="absolute text-sm" style={{ left: "43.4%", top: `calc(${s.y}% - 26px)` }}>
              {strandLabel[s.id]}
            </span>
            <A className="[--dir:h]" on={s.id} style={{ left: `${s.end}%`, top: `${s.y}%` }} />
            <Dot x={s.end} y={s.y} />
          </div>
        ))}
        {extraDots.map(([x, y]) => (
          <Dot key={`${x}-${y}`} x={x!} y={y!} />
        ))}
        <A className="top-[96%] left-[calc(76%+40px)]" />
      </div>

      {/* Phone: top to bottom. */}
      <div className="relative mt-12 h-[720px] lg:hidden">
        <A className="top-0 left-5" />
        <Wave className="-translate-x-1/2 -translate-y-1/2 absolute top-[56px] left-5 h-12 w-10" n={11} peaks={[[0.5, 0.3, 0.95]]} vertical />
        <p className="absolute top-[44px] left-12 text-sm">{c.research.question}</p>
        <A className="top-[100px] left-5" on="main dense keyword sql" />
        {strandsMobile.map((s) => (
          <div key={s.id}>
            <A on={s.id} style={{ left: `${s.x}%`, top: "160px" }} />
            <span className="absolute text-xs" style={{ left: `calc(${s.x}% + 6px)`, top: "136px" }}>
              {strandLabel[s.id]}
            </span>
            <A on={s.id} style={{ left: `${s.x}%`, top: `${s.end}px` }} />
            <span
              className="-translate-x-1/2 -translate-y-1/2 absolute size-2.5 rounded-full bg-(--lime)"
              style={{ left: `${s.x}%`, top: `${s.end}px` }}
            />
          </div>
        ))}
        <p className="absolute top-[520px] left-12 text-(--dim) text-xs">{c.research.field}</p>
        <div className="dot-field absolute top-[190px] right-6 left-12 h-[310px]" />
        <p className="absolute top-[544px] left-12 text-xs">{c.research.few}</p>
        <A className="top-[580px] left-[84%]" />
        <A className="top-[700px] left-5" />
      </div>

      <div className="mt-10 pr-6 pl-12 lg:mt-20 lg:pl-[6%]">
        <p className="max-w-[560px] text-(--fg)/80 text-sm leading-relaxed lg:text-base">{c.research.body}</p>
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
          <a
            className="flex h-12 items-center justify-center rounded-md bg-(--lime) px-8 font-medium text-(--bg)"
            href={thesis}
            rel="noopener noreferrer"
            target="_blank"
          >
            {c.research.read}
          </a>
          <Link className="flex h-11 items-center hover:text-(--lime)" href="/papers/when-agentic-workflows-help">
            {c.research.benchmark}
          </Link>
        </div>
        <p className="mt-8 text-(--dim) text-xs lg:text-sm">
          {c.research.also}{" "}
          <Link className="hover:text-(--fg)" href="/papers/researcher">
            SynGraph
          </Link>{" "}
          ·{" "}
          <Link className="hover:text-(--fg)" href="/papers/animatch">
            AniMatch
          </Link>{" "}
          ({c.research.with} Jonatan Ebenholm)
        </p>
      </div>
      <Wire from="calc(76% + 40px)" to="2%" />
    </section>
  );
}

// Year to % along the time axis (desktop, from the left) and px down the phone's axis. The years before
// 2024 barely show on GitHub, so they get a third of the room the later ones do.
const axis = (stops: number[]) => (year: number) => {
  const i = Math.min(stops.length - 2, Math.max(0, Math.floor(year - 2021)));
  return stops[i]! + (year - 2021 - i) * (stops[i + 1]! - stops[i]!);
};
const X = axis([5, 12, 19, 26, 48, 70, 102]);
const Ypx = axis([40, 90, 140, 190, 330, 470, 620]);
const Y = (year: number) => Ypx(year) / 6.4;
const years = [2021, 2022, 2023, 2024, 2025, 2026];
// Where each moment sits on the axis, and on desktop whether it hangs above it.
const moments = [
  { at: 2021, above: false },
  { at: 2024.6, above: true },
  { at: 2026, above: false },
  { at: 2026.75, above: false },
];
// The drawn wave, for builds without GitHub data: small at the BSc, more through the MSc, most at Ericsson
// (t along the axis, 2021 to now).
const careerPeaks: [number, number, number][] = [
  [0.04, 0.06, 0.05],
  [0.2, 0.08, 0.08],
  [0.36, 0.08, 0.12],
  [0.52, 0.06, 0.22],
  [0.68, 0.08, 0.3],
  [0.87, 0.04, 0.55],
  [0.93, 0.04, 0.65],
  [0.985, 0.025, 1],
];
// The middle of the week starting on `start`, as a year on the axis.
const yearOf = (start: string) => 2021 + (Date.parse(start) + 3.5 * 864e5 - Date.UTC(2021, 0, 1)) / (365.25 * 864e5);

// Experience (design/approved/experience-r1-a-annotated.png): each bar is a week of GitHub contributions,
// as tall as the square root of the week's count so quiet weeks still show; year totals sit under the years
// and the busiest week is called out.
export function Experience({ commits }: { commits: Commits | null }) {
  const { c, locale } = useCopy();
  const weeks = commits?.weeks.some((w) => w.count) ? commits.weeks : undefined;
  const from = weeks ? yearOf(weeks[0]!.start) : 2021;
  const to = weeks ? yearOf(weeks.at(-1)!.start) : 2026.77;
  const peak = weeks?.reduce((a, b) => (b.count > a.count ? b : a));
  const values = weeks?.map((w) => Math.round(Math.max(0.02, Math.sqrt(w.count / peak!.count)) * 1000) / 1000);
  const tag = locale === "sv" ? "sv-SE" : "en-GB";
  const num = (n: number) => n.toLocaleString(tag);
  const thisYear = weeks && +weeks.at(-1)!.start.slice(0, 4);
  // A year's total, and "so far" on its own line for this year so the label stays narrow.
  const total = (y: number) =>
    commits?.years[y] !== undefined && [num(commits.years[y]), y === thisYear && c.experience.soFar].filter(Boolean).map((l) => <span className="block" key={`${l}`}>{l}</span>);
  const at = peak ? yearOf(peak.start) : 0;
  const peakLabel = peak && [
    c.experience.peak(num(peak.count)),
    c.experience.week(new Intl.DateTimeFormat(tag, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(peak.start))),
  ];
  const wave = { floor: 0.02, peaks: careerPeaks, sweep: true };
  // One stretch of bars per year, since the years are drawn at different widths.
  const stretches = weeks
    ? years.map((y) => ({
        from: y === 2021 ? from : y,
        to: y === years.at(-1) ? to : y + 1,
        values: values!.filter((_, i) => Math.max(2021, Math.floor(yearOf(weeks[i]!.start))) === y),
      }))
    : [{ from, to, values: undefined }];
  return (
    <section className="relative scroll-mt-16 pt-24 lg:pt-20" id="experience">
      <div className="pr-6 pl-12 lg:pl-[4%]">
        <Index>{c.experience.index}</Index>
        <h2 className="font-display mt-4 text-[40px] leading-none lg:text-[clamp(48px,5vw,72px)]">{c.experience.title}</h2>
        {peakLabel && (
          <p className="mt-4 text-(--dim) text-xs lg:hidden">
            {c.experience.bars}
            <span className="mt-1 flex items-center gap-2">
              <span className="size-2 rounded-full bg-(--lime)" />
              {peakLabel.join(", ")}
            </span>
          </p>
        )}
      </div>

      {/* Desktop: the trace comes in on the left and runs the axis from 2021 to now, a bar a week. */}
      <div className="relative mt-6 hidden h-[500px] lg:block">
        <A className="top-[calc(50%-40px)] left-[2%]" />
        <A className="top-1/2 [--dir:h]" style={{ left: `${X(from)}%` }} />
        {stretches.map((st) => (
          <div className="-translate-y-1/2 absolute top-1/2 h-[170px]" key={st.from} style={{ left: `${X(st.from)}%`, width: `${X(st.to) - X(st.from)}%` }}>
            <Wave className="size-full" n={st.values?.length ?? 240} values={st.values} {...wave} />
          </div>
        ))}
        {years.map((y) => (
          <div key={y}>
            <span className="-translate-x-1/2 absolute top-[calc(50%-136px)] whitespace-nowrap text-center text-(--dim) text-sm" style={{ left: `${X(y)}%` }}>
              {y}
              {weeks && <span className="block text-(--dim)/70 text-xs">{total(y)}</span>}
            </span>
            <span className="absolute top-[calc(50%-78px)] h-[70px] border-(--faint) border-l border-dashed" style={{ left: `${X(y)}%` }} />
          </div>
        ))}
        {peakLabel && (
          <>
            <span className="-translate-x-1/2 -translate-y-1/2 absolute top-[calc(50%-85px)] size-2 rounded-full bg-(--lime)" style={{ left: `${X(at)}%` }} />
            <span className="absolute top-[calc(50%-150px)] h-[65px] w-px bg-(--dim)/60" style={{ left: `${X(at)}%` }} />
            <p className="absolute bottom-[calc(50%+154px)] whitespace-nowrap text-sm" style={{ left: `${X(at)}%` }}>
              {peakLabel[0]}
              <span className="block text-(--dim)">{peakLabel[1]}</span>
            </p>
          </>
        )}
        {moments.map((m, i) => {
          const t = c.experience.moments[i]!;
          const last = i === moments.length - 1;
          return (
            <div key={m.at}>
              <span
                className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 size-3 rounded-full border-2 border-(--lime) bg-(--bg)"
                style={{ left: `${X(m.at)}%` }}
              />
              <span
                className={cn("absolute w-px bg-(--dim)/60", last ? "top-[calc(50%+8px)] h-[150px]" : m.above ? "top-[calc(50%-150px)] h-[142px]" : "top-[calc(50%+8px)] h-[72px]")}
                style={{ left: `${X(m.at)}%` }}
              />
              <div
                className={cn("absolute", last ? "top-[calc(50%+164px)]" : m.above ? "bottom-[calc(50%+154px)]" : "top-[calc(50%+86px)]", "whitespace-nowrap", X(m.at) > 80 && "text-right")}
                style={X(m.at) > 80 ? { right: `${100 - X(m.at) - 0.2}%` } : { left: `${X(m.at)}%` }}
              >
                <p className={cn("font-display text-[24px]", last && "text-(--lime)")}>{t.title}</p>
                <p className="mt-1 text-(--fg)/70 text-sm">{t.line}</p>
              </div>
            </div>
          );
        })}
        {weeks && <p className="absolute top-[calc(50%+190px)] left-[4%] text-(--dim) text-sm">{c.experience.bars}</p>}
        <A className="top-1/2 [--dir:h]" style={{ left: `${X(to)}%` }} />
        <A className="top-[calc(50%+40px)] left-[98%]" />
      </div>
      <Wire from="98%" to="2%" />

      {/* Phone: the axis runs down from 2021, 88 px in. */}
      <div className="relative mt-10 h-[640px] lg:hidden">
        <A className="top-0 left-5" />
        <A className="left-[88px]" style={{ top: Ypx(from) }} />
        {stretches.map((st) => (
          <div className="-translate-x-1/2 absolute left-[88px] w-10" key={st.from} style={{ top: Ypx(st.from), height: Ypx(st.to) - Ypx(st.from) }}>
            <Wave className="size-full" n={st.values?.length ?? 90} values={st.values} vertical {...wave} />
          </div>
        ))}
        {years.map((y) => (
          <span className="-translate-y-1/2 absolute left-6 text-(--dim) text-xs" key={y} style={{ top: `${Y(y)}%` }}>
            {y}
            {weeks && <span className="block text-(--dim)/70">{total(y)}</span>}
          </span>
        ))}
        {peakLabel && <span className="-translate-x-1/2 -translate-y-1/2 absolute left-[108px] size-2 rounded-full bg-(--lime)" style={{ top: Ypx(at) }} />}
        {moments.map((m, i) => {
          const t = c.experience.moments[i]!;
          return (
            <div className="absolute right-6 left-[150px]" key={m.at} style={{ top: `calc(${Y(m.at)}% - 12px)` }}>
              <span className="-left-[62px] -translate-x-1/2 -translate-y-1/2 absolute top-3 size-3 rounded-full border-2 border-(--lime) bg-(--bg)" />
              <span className="-left-[54px] absolute top-3 h-px w-[42px] bg-(--dim)/60" />
              <p className={cn("font-display text-[19px] leading-tight", i === 3 && "text-(--lime)")}>{t.title}</p>
              <p className="mt-1 text-(--fg)/70 text-xs">{t.line}</p>
            </div>
          );
        })}
        <A className="left-[88px]" style={{ top: Ypx(to) }} />
        <A className="bottom-0 left-5" />
      </div>
    </section>
  );
}

export function About() {
  const { c } = useCopy();
  const [before, lime, after] = c.about.bio;
  return (
    <section className="relative scroll-mt-16 pt-28 lg:pt-40" id="about">
      <Wave className="-translate-x-1/2 absolute top-12 left-5 h-14 w-10 lg:top-24 lg:left-[2%]" n={11} peaks={[[0.5, 0.3, 0.9]]} vertical />
      <div className="pr-6 pl-12 lg:pl-[5%]">
        <Index>{c.about.index}</Index>
        <p className="font-display mt-5 max-w-[30ch] text-[30px] leading-[1.15] lg:text-[clamp(32px,3.2vw,46px)]">
          {before}
          <span className="text-(--lime)">{lime}</span>
          {after}
        </p>
      </div>
      <div className="mt-16 pr-6 pl-12 lg:mt-20 lg:pr-0 lg:pl-[5%]">
        <p className="mb-4 text-(--dim) text-xs">{c.about.how}</p>
        <Stack heading={c.about.shipped} layers={c.about.layers} shipped={shipped} tools={stack} />
      </div>
      <a className="mt-14 ml-12 inline-block border-(--lime) border-b pb-1 lg:ml-[5%]" href={CV}>
        {c.about.cv}
      </a>
      <Wave className="-translate-x-1/2 absolute bottom-0 left-5 h-14 w-10 lg:left-[2%]" n={11} peaks={[[0.5, 0.3, 0.8]]} vertical />
    </section>
  );
}

// Off the clock: the photos as prints dealt across the page, after About.
export function Photos() {
  const { c } = useCopy();
  if (photos.length === 0) return null;
  return (
    <section className="relative scroll-mt-16 pt-20 lg:pt-28" id="photos">
      <div className="pr-6 pl-12 lg:pl-[5%]">
        <Index>{c.photos.index}</Index>
        <h2 className="font-display mt-5 text-[30px] leading-[1.15] lg:text-[clamp(32px,3.2vw,46px)]">{c.photos.title}</h2>
        <Link className="mt-5 inline-block border-(--lime) border-b pb-1" href="/photography">
          {c.photos.all(allPhotos.length)}
        </Link>
      </div>
      <div className="mt-14 lg:mt-20">
        <Prints photos={photos} places={{ japan: c.gallery.japan, portugal: c.gallery.portugal }} />
      </div>
    </section>
  );
}

const link = "hover:text-(--fg)";
const external = { rel: "noopener noreferrer", target: "_blank" };

export function Contact() {
  const { c } = useCopy();
  return (
    <section className="relative scroll-mt-16 pt-32 text-center lg:pt-48" id="contact">
      <div className="px-6 lg:px-12">
        <Index>{c.contact.index}</Index>
        <h2 className="font-display mt-5 text-[32px] leading-[1.02] lg:text-[clamp(56px,6.6vw,96px)]">
          <span className="block">{c.contact.title[0]}</span>
          <span className="block">{c.contact.title[1]}</span>
        </h2>
      </div>
      <div className="relative mt-8 h-32 lg:mt-10 lg:h-[200px]">
        <A className="top-[calc(50%-40px)] left-5 lg:left-[2%]" />
        <A className="top-1/2 left-[60px] [--dir:h] lg:left-[calc(2%+40px)]" />
        <Wave className="absolute inset-y-0 left-[60px] h-full w-[calc(100%-60px)] lg:hidden" n={58} peaks={[[0.5, 0.12, 1]]} sweep />
        <Wave className="absolute inset-y-0 left-[calc(2%+40px)] hidden h-full w-[calc(98%-40px)] lg:block" n={232} peaks={[[0.5, 0.1, 1], [0.38, 0.05, 0.3], [0.62, 0.05, 0.3]]} sweep />
        <A className="top-1/2 right-0 [--dir:h]" />
      </div>
      <a className="mt-8 inline-block border-(--lime) border-b-2 pb-1 text-lg lg:mt-10 lg:text-[28px]" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <p className="mt-6 flex justify-center gap-10 text-(--dim) text-sm">
        <a className={link} href={socialLinks.github} {...external}>
          GitHub ↗
        </a>
        <a className={link} href={socialLinks.linkedin} {...external}>
          LinkedIn ↗
        </a>
      </p>
      <Footer />
    </section>
  );
}

// The landing page's links are anchors on the same page; elsewhere they lead back to it.
export function Footer({ home = true }: { home?: boolean }) {
  const { c } = useCopy();
  const at = home ? "" : "/";
  const footer: [string, string][] = [
    [`${at}#work`, c.nav.work],
    [`${at}#research`, c.nav.research],
    [`${at}#experience`, c.nav.experience],
    [CV, "CV"],
    ["#top", c.contact.top],
  ];
  return (
    <footer className="mx-6 mt-28 flex flex-col gap-6 border-(--faint) border-t py-10 text-left lg:mx-[4%] lg:flex-row lg:items-center lg:justify-between">
      <p className="flex items-baseline gap-4">
        <span className="font-display text-2xl">Berkay Orhan</span>
        <span className="text-(--dim) text-sm">© 2026</span>
      </p>
      <nav className="flex flex-wrap gap-x-6 text-(--dim) text-sm lg:gap-x-10">
        {footer.map(([href, label]) => (
          <a className={cn("flex h-11 items-center", link)} href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
