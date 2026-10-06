"use client";

import Link from "next/link";
import { type ReactNode, useRef, useState } from "react";

import { MarkdownLatexRenderer } from "@/components/ui/markdown-latex-renderer";
import { papers } from "@/lib/data/papers";
import { type ProjectTag, projectMeta, projects } from "@/lib/data/portfolio-data";
import { cn } from "@/lib/utils";
import { Burst, Dashes, PageHead, Part, Tick, pad, two, under } from "./page-parts";
import { Header, Index, useCopy } from "./sections";
import { Thesis } from "./thesis";
import { A, TraceRoot, Wave } from "./trace";

// The pages outside the landing page (design/specs/pages-r1.md): projects, papers, playground, 404.

export function ProjectList() {
  const { c, locale } = useCopy();
  const p = c.pages.projects;
  const [tag, setTag] = useState("all");
  const list = projects.filter((x) => tag === "all" || projectMeta[x.id]?.tags.includes(tag as ProjectTag));
  return (
    <>
      <PageHead index={p.index} title={p.title}>
        <p className="mt-3 text-(--dim) text-sm">{p.count(list.length)}</p>
        <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          {p.filters.map(([key, label], i) => (
            <span className="flex items-center gap-3" key={key}>
              {i > 0 && <span className="text-(--dim)">·</span>}
              <button
                aria-pressed={tag === key}
                className={cn("h-9", tag === key ? "border-(--lime) border-b text-(--lime)" : "text-(--dim) hover:text-(--fg)")}
                onClick={() => setTag(key)}
                type="button"
              >
                {label}
              </button>
            </span>
          ))}
        </p>
      </PageHead>
      <ol className="mt-10 lg:mt-14">
        {list.map((x, i) => (
          <li className="relative" key={x.id}>
            <Tick className="top-[37px] lg:top-[45px]" />
            <Link className={cn("group block", pad)} href={`/projects/${x.id}`}>
              <div className="flex gap-4 border-(--faint) border-b py-6 lg:gap-0 lg:py-8">
                <span className="w-8 shrink-0 pt-1.5 text-(--dim) text-sm lg:w-[7%]">{two(i + 1)}</span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-[22px] leading-tight transition-colors group-hover:text-(--lime) lg:text-[28px]">{x.title}</h2>
                  <p className="mt-2 line-clamp-2 max-w-[60ch] text-(--fg)/70 text-sm leading-relaxed">
                    {(locale === "sv" && x.descriptionSv) || x.description}
                  </p>
                  <p className="mt-2 text-(--dim) text-xs lg:text-sm">{x.technologies.slice(0, 3).join(" · ")}</p>
                </div>
                {x.image && (
                  // eslint-disable-next-line @next/next/no-img-element -- images are served unoptimized
                  <img
                    alt=""
                    className="-translate-y-1/2 pointer-events-none absolute top-1/2 right-[12%] hidden aspect-[16/10] w-[240px] object-cover object-top opacity-0 transition-opacity group-hover:opacity-100 lg:block"
                    loading="lazy"
                    src={x.image}
                  />
                )}
                <span className="shrink-0 pt-1.5 text-(--dim) text-sm">{projectMeta[x.id]?.year}</span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export function ProjectDetail({ id }: { id: string }) {
  const { c, locale } = useCopy();
  const p = c.pages.project;
  const x = projects.find((q) => q.id === id)!;
  const t = (en?: string, sv?: string) => (locale === "sv" && sv) || en;
  const [name, sub] = x.title.split(/:\s(.+)/);
  const paper = papers.find((q) => "project" in q && q.project === id);
  const links: [string, string][] = [];
  if (x.link) links.push([x.link, t(x.linkLabel, x.linkLabelSv) ?? p.live]);
  if (x.githubLink && x.githubLink !== x.link) links.push([x.githubLink, p.source]);
  if (x.frontendLink) links.push([x.frontendLink, "Frontend ↗"]);
  if (x.playgroundLink) links.push([x.playgroundLink, p.benchmark]);
  if (x.paperLink) links.push([paper ? `/papers/${paper.id}` : x.paperLink, p.paper]);
  for (const l of x.projectLinks ?? []) if (l.href) links.push([l.href, `${t(l.label, l.labelSv)} ↗`]);
  const installs = (x.projectLinks ?? []).filter((l) => l.items);

  const aside = (
    <>
      <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 text-sm">
        {x.projectInfo?.map((f) => (
          <div className="contents" key={f.label}>
            <dt className="text-(--dim)">{t(f.label, f.labelSv)?.toLowerCase()}</dt>
            <dd>{t(f.value, f.valueSv)}</dd>
          </div>
        ))}
        <dt className="text-(--dim)">{p.stack}</dt>
        <dd>{x.technologies.join(" · ")}</dd>
      </dl>
      {links.length > 0 && (
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {links.map(([href, label]) => (
            <a className={under} download={href.endsWith(".zip") || undefined} href={href} key={href} {...(href.startsWith("http") ? { rel: "noopener noreferrer", target: "_blank" } : {})}>
              {label}
            </a>
          ))}
        </p>
      )}
      {installs.map((l) => (
        <div className="mt-8 text-xs" key={l.label}>
          <p className="text-(--dim)">{t(l.label, l.labelSv)}</p>
          {l.items?.map((item) => (
            <div className="mt-3" key={item.label}>
              {item.label !== item.command && <p className="text-(--dim)">{item.label}</p>}
              <pre className="mt-1 whitespace-pre-wrap text-(--fg)">{item.command}</pre>
            </div>
          ))}
        </div>
      ))}
    </>
  );

  const parts: [string, ReactNode][] = [];
  const detail = t(x.detailedDescription, x.detailedDescriptionSv);
  const features = (locale === "sv" && x.featuresSv) || x.features;
  const challenges = (locale === "sv" && x.challengesSv) || x.challenges;
  const solution = t(x.solution, x.solutionSv);
  const outcome = t(x.outcome, x.outcomeSv);
  if (detail) parts.push([p.sections[0], <p key="d">{detail}</p>]);
  if (features?.length) parts.push([p.sections[1], <Dashes items={features} key="f" />]);
  if (challenges?.length) parts.push([p.sections[2], <Dashes items={challenges} key="c" />]);
  if (solution) parts.push([p.sections[3], <p key="s">{solution}</p>]);
  if (outcome) parts.push([p.sections[4], <p key="o">{outcome}</p>]);
  if (x.microservices?.length)
    parts.push([
      p.services,
      <ul className="space-y-6" key="m">
        {x.microservices.map((m) => (
          <li key={m.name}>
            <p className="text-(--fg)">
              {m.link ? (
                <a className={under} href={m.link} rel="noopener noreferrer" target="_blank">
                  {m.name} ↗
                </a>
              ) : (
                m.name
              )}
            </p>
            <p className="mt-1">{t(m.description, m.descriptionSv)}</p>
            {m.technologies && <p className="mt-1 text-(--dim) text-xs">{m.technologies.join(" · ")}</p>}
          </li>
        ))}
      </ul>,
    ]);

  const year = projectMeta[id]?.year;
  return (
    <>
      <PageHead
        aside={aside}
        back={["/projects", p.back]}
        index={[p.index, year, x.institution?.toUpperCase()].filter(Boolean).join(" / ")}
        title={name ?? x.title}
      >
        {sub && <p className="mt-3 text-(--dim) text-xl lg:text-[28px]">{sub}</p>}
        <p className="mt-6 max-w-[60ch] text-(--fg)/80 text-sm leading-relaxed lg:text-base">{t(x.description, x.descriptionSv)}</p>
      </PageHead>
      {(x.video || x.image) && (
        // The cover runs from the text column to the page's right edge, hung off the trace by a faint rule.
        <figure className="relative mt-14 pl-12 lg:mt-20 lg:pl-[4%]">
          <span className="absolute top-0 left-5 h-px w-7 bg-(--faint) lg:left-[2%] lg:w-[2%]" />
          <Tick className="top-0" />
          {x.video ? (
            <video autoPlay className="w-full max-w-[1400px]" loop muted playsInline poster={x.image}>
              <source src={x.video} type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element -- images are served unoptimized
            <img alt={x.imageAlt || x.title} className="w-full max-w-[1400px]" src={x.image} />
          )}
          {x.imageAlt && <figcaption className="mt-3 pr-6 text-(--dim) text-xs">{x.imageAlt}</figcaption>}
        </figure>
      )}
      {parts.map(([title, body], i) => (
        <Part key={title} n={i + 1} title={title}>
          {body}
        </Part>
      ))}
      {x.gallery?.length ? (
        <section className="relative mt-16 lg:mt-24">
          <Burst className="top-3.5" />
          <h2 className={cn(pad, "text-lg leading-7 lg:text-xl")}>
            <span className="text-(--dim) text-sm">{two(parts.length + 1)} / </span>
            {p.screens}
          </h2>
          <Reel items={x.gallery.map((g) => ({ ...g, caption: t(g.caption, g.captionSv) }))} next={p.next} />
        </section>
      ) : null}
    </>
  );
}

type Shot = { image: string; video?: string; alt?: string; caption?: string };

// The screens as a sideways reel (design/approved/project-media-reel.png): large shots at one height on a
// faint rule, a tick over each, the current one lime; the last one runs off the page's right edge.
function Reel({ items, next }: { items: Shot[]; next: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);
  const shots = () => [...(track.current?.children ?? [])] as HTMLElement[];
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const [first] = shots();
    const left = el.scrollLeft + (first?.offsetLeft ?? 0);
    // At the end of the track the last shot is current, even if it never reaches the left edge.
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    setAt(end ? items.length - 1 : shots().reduce((best, s, i) => (Math.abs(s.offsetLeft - left) < Math.abs((shots()[best]?.offsetLeft ?? 0) - left) ? i : best), 0));
  };
  const go = () => {
    const el = track.current;
    const [first] = shots();
    const target = shots()[at + 1 < items.length ? at + 1 : 0];
    if (el && first && target) el.scrollTo({ left: target.offsetLeft - first.offsetLeft });
  };
  return (
    <div className="mt-6">
      {items.length > 1 && (
        <p className={cn(pad, "flex justify-end gap-6 text-sm")}>
          <span className="text-(--dim) tabular-nums">
            {two(at + 1)} / {two(items.length)}
          </span>
          <button className={under} onClick={go} type="button">
            {next}
          </button>
        </p>
      )}
      <div
        className="relative mt-3 ml-12 flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] motion-safe:scroll-smooth lg:ml-[4%]"
        onScroll={onScroll}
        ref={track}
      >
        {items.map((g, i) => (
          <figure className="relative shrink-0 snap-start border-(--faint) border-t pt-6 pr-6 lg:pr-8" key={g.video ?? g.image}>
            <span className={cn("-translate-y-1/2 absolute top-0 left-0 size-2 rounded-full", i === at ? "bg-(--lime)" : "bg-(--dim)/60")} />
            {g.video ? (
              <video autoPlay className="w-[78vw] lg:h-[clamp(280px,30vw,440px)] lg:w-auto" loop muted playsInline poster={g.image}>
                <source src={g.video} type="video/mp4" />
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element -- images are served unoptimized
              <img alt={g.alt ?? ""} className="w-[78vw] lg:h-[clamp(280px,30vw,440px)] lg:w-auto" loading="lazy" src={g.image} />
            )}
            {/* As wide as the shot, never wider. */}
            <figcaption className="mt-3 flex w-0 min-w-full gap-3 text-xs leading-relaxed">
              <span className="text-(--dim)">{two(i + 1)}</span>
              <span className="text-(--dim)">{g.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function PaperList() {
  const { c } = useCopy();
  const p = c.pages.papers;
  return (
    <>
      <PageHead index={p.index} title={p.title}>
        <p className="mt-4 text-(--dim) text-sm lg:text-base">{p.lede}</p>
      </PageHead>
      <ol className="mt-10 lg:mt-14">
        {papers.map((x, i) => (
          <li className="relative" key={x.id}>
            <Tick className="top-[42px] lg:top-[50px]" />
            <div className={pad}>
              <div className="border-(--faint) border-b py-8 lg:py-10 lg:pl-[6%]">
                <p className="text-(--dim) text-xs tracking-[0.08em]">
                  {x.year} · {p.kinds[x.kind]}
                </p>
                <h2 className={cn("font-display mt-3 max-w-[34ch]", i === 0 ? "text-[26px] lg:text-[40px]" : "text-[22px] lg:text-[30px]", "leading-[1.1]")}>
                  <Link className="transition-colors hover:text-(--lime)" href={`/papers/${x.id}`}>
                    {x.paper.title}
                  </Link>
                </h2>
                <p className="mt-3 text-(--dim) text-sm">{x.paper.authors.join(", ")}</p>
                <p className="mt-4 line-clamp-2 max-w-[80ch] text-(--fg)/70 text-sm leading-relaxed">{x.paper.abstractContent}</p>
                <p className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                  <Link className={under} href={`/papers/${x.id}`}>
                    {p.read}
                  </Link>
                  {"benchmark" in x.paper && (
                    <Link className={under} href={`/papers/${x.id}#benchmark`}>
                      {p.benchmark}
                    </Link>
                  )}
                  {"project" in x && (
                    <Link className={under} href={`/projects/${x.project}`}>
                      {p.project}
                    </Link>
                  )}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export function PaperDetail({ id }: { id: string }) {
  const { c } = useCopy();
  const p = c.pages.papers;
  const x = papers.find((q) => q.id === id)!;
  return (
    <>
      <PageHead back={["/papers", p.back]} index={`${p.kinds[x.kind]} · ${x.year}`} title={x.paper.title} titleClassName="max-w-[24ch] text-[28px] leading-[1.1] lg:text-[44px] lg:leading-[1.08]">
        <p className="mt-4 text-(--dim) text-sm">{x.paper.authors.join(", ")}</p>
        <a className={cn(under, "mt-6 inline-block text-sm")} download href={x.paper.pdfUrl}>
          {p.pdf}
        </a>
      </PageHead>
      {"benchmark" in x.paper && <Thesis benchmark={x.paper.benchmark} highlights={x.paper.highlights} />}
      <Part n={1} title={p.abstract}>
        <MarkdownLatexRenderer content={x.paper.abstractContent} />
      </Part>
      {x.paper.sections.map((s, i) => (
        <Part key={s.title} n={i + 2} title={s.title}>
          <MarkdownLatexRenderer content={s.content} />
        </Part>
      ))}
    </>
  );
}

// The FastTalk row's waveform: quiet, with one spike near the end.
const talkPeaks: [number, number, number][] = [
  [0.1, 0.04, 0.3],
  [0.22, 0.05, 0.45],
  [0.4, 0.06, 0.35],
  [0.55, 0.05, 0.5],
  [0.79, 0.015, 1],
  [0.9, 0.04, 0.3],
];

export function Playground() {
  const { c } = useCopy();
  const p = c.pages.playground;
  return (
    <>
      <PageHead index={p.index} title={p.title}>
        <p className="mt-4 text-(--dim) text-sm lg:text-base">{p.lede}</p>
      </PageHead>
      <div className="relative mt-16 lg:mt-24">
        <Burst className="top-2.5" />
        <div className={pad}>
          <div className="lg:pl-[6%]">
            <p className="text-(--dim) text-sm">TDDE19 · 2025</p>
            <h2 className="font-display mt-3 text-[32px] leading-tight lg:text-[48px]">
              <Link className="transition-colors hover:text-(--lime)" href="/playground/tdde19">
                {p.item[0]}
              </Link>
            </h2>
            <p className="mt-4 max-w-[60ch] text-(--fg)/70 text-sm leading-relaxed lg:text-base">{p.item[1]}</p>
            <Wave className="mt-8 h-16 w-full max-w-[860px]" floor={0.08} n={120} peaks={talkPeaks} />
            <Link className={cn(under, "mt-8 inline-block")} href="/playground/tdde19">
              {p.open}
            </Link>
          </div>
        </div>
      </div>
      <div className="relative mt-20">
        <Tick className="top-1/2" />
        <p className={cn(pad, "text-(--dim) text-sm")}>{p.soon}</p>
      </div>
    </>
  );
}

// The 404 page: the trace comes down, turns under the headline and is cut off with a dot.
export function NotFound() {
  const { c } = useCopy();
  const p = c.pages.notFound;
  return (
    <div className="landing min-h-screen overflow-x-clip">
      <TraceRoot className="mx-auto min-h-screen max-w-[1440px]">
        <Header />
        <A className="top-16 left-5 lg:top-[124px] lg:left-[2%]" />
        <main className="pt-36 lg:pt-[240px]">
          <div className={pad}>
            <Index>404</Index>
            <h1 className="font-display mt-3 text-[44px] leading-none lg:text-[80px]">{p.title}</h1>
          </div>
          <div className="relative mt-6 h-20 lg:mt-8">
            <Wave className="-translate-y-1/2 absolute top-1/2 left-[56px] h-12 w-16 lg:left-[calc(2%+56px)] lg:w-24" live n={17} peaks={[[0.35, 0.18, 1]]} />
            <A className="top-1/2 left-[70%] [--dir:h] lg:left-[45%]" />
            <span className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-[70%] size-2.5 rounded-full bg-(--lime) lg:left-[45%]" />
          </div>
          <div className={cn(pad, "mt-4")}>
            <p className="text-(--dim) text-sm lg:text-base">{p.line}</p>
            <Link className={cn(under, "mt-8 inline-block")} href="/">
              {p.home}
            </Link>
          </div>
        </main>
      </TraceRoot>
    </div>
  );
}
