"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { socialLinks } from "@/lib/data/portfolio-data";
import { cn } from "@/lib/utils";
import { Index, useCopy } from "./sections";
import { Wave } from "./trace";

// The hero's text and its Ask flow (design/specs/ask-r9.md, then ask-r8 a-bubbles): at rest the hero is
// the headline with "See my work", "Download CV" and "Ask me". "Ask me" swaps the buttons for the
// composer; the first question turns the hero into a conversation, the composer docked above the signal.
// A question goes to /api/ask with the last few turns; while the model is off it goes to /ask instead.

type Ref = { href: string; title: { en: string; sv: string } };
type Turn = { q: string } & ({ state: "wait" | "rate" | "failed" | "none" } | { state: "done"; text: string; links: Ref[] });

// Links each page the answer names: "SynGraph: Deep Research Agent" is named as "SynGraph".
function Linked({ text, links, locale }: { text: string; links: Ref[]; locale: "en" | "sv" }) {
  const names = new Map(links.map((l) => [l.title[locale].split(":")[0]!.trim().toLowerCase(), l.href]));
  if (names.size === 0) return text;
  const re = new RegExp(`(${[...names.keys()].map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return text.split(re).map((part, i) =>
    i % 2 ? (
      <Link className="text-(--lime) hover:underline" href={names.get(part.toLowerCase()) ?? "/ask"} key={i}>
        {part}
      </Link>
    ) : (
      part
    )
  );
}

// The swaps run as a view transition where the browser has one: the Ask button grows into the composer,
// and the composer glides down to its dock. Reduced motion, or no support, swaps at once.
function shift(update: () => void) {
  if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) return update();
  document.startViewTransition(() => flushSync(update));
}

const askHref = (q: string) => `/ask?q=${encodeURIComponent(q)}`;

export function HeroAsk() {
  const { c, locale } = useCopy();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const list = useRef<HTMLOListElement>(null);
  const chat = turns.length > 0;
  const waiting = turns.at(-1)?.state === "wait";

  useEffect(() => {
    list.current?.scrollTo({ top: list.current.scrollHeight });
  }, [turns]);

  async function submit(e?: FormEvent) {
    e?.preventDefault();
    const question = q.trim();
    if (!question || waiting) return;
    const history = turns.flatMap((t) => (t.state === "done" ? [{ q: t.q, a: t.text }] : [])).slice(-3);
    shift(() => {
      setTurns((ts) => [...ts, { q: question, state: "wait" }]);
      setQ("");
    });
    if (!chat) scrollTo(0, 0); // the conversation fills the first screen, so it starts at the top of the page
    const r = await fetch("/api/ask", { method: "POST", body: JSON.stringify({ question, locale, history }) }).catch(() => null);
    if (r?.status === 503) return router.push(askHref(question)); // the model is off: search instead
    const d = r?.ok ? ((await r.json().catch(() => null)) as { answer?: string | null; links?: Ref[] } | null) : null;
    const turn: Turn =
      r?.status === 429
        ? { q: question, state: "rate" }
        : !d
          ? { q: question, state: "failed" }
          : d.answer
            ? { q: question, state: "done", text: d.answer, links: d.links ?? [] }
            : { q: question, state: "none" };
    setTurns((ts) => ts.map((t, i) => (i === ts.length - 1 ? turn : t)));
  }

  const composer = (
    <form className="relative [view-transition-name:hero-ask]" onSubmit={submit} role="search">
      <textarea
        aria-label={c.hero.ask}
        autoFocus={!chat} // it opens on a click, so focus belongs in it
        className={cn(
          "block max-h-40 min-h-14 w-full resize-none rounded-[28px] border border-(--faint) bg-(--fg)/[0.04] py-4 pr-16 pl-6 font-(family-name:--font-grotesk) text-left text-base leading-6 caret-(--lime) outline-none [field-sizing:content] placeholder:text-(--dim) focus:border-(--fg)/25 lg:font-(family-name:--font-mono) lg:text-[20px]",
          !chat && "lg:min-h-32 lg:pt-6"
        )}
        enterKeyHint="send"
        maxLength={200}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            submit();
          }
        }}
        placeholder={chat ? c.hero.follow : c.hero.ask}
        rows={1}
        value={q}
      />
      <button
        aria-label={c.pages.ask.submit}
        className={cn(
          "absolute top-1.5 right-1.5 grid size-11 place-items-center rounded-full bg-(--lime) text-(--bg) transition-opacity disabled:opacity-40",
          !chat && "lg:top-auto lg:right-4 lg:bottom-4"
        )}
        disabled={!q.trim() || waiting}
        type="submit"
      >
        <svg aria-hidden fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16">
          <path d="M8 14V2M3 7l5-5 5 5" />
        </svg>
      </button>
      {/* The trace on the edge: lime round the bottom left corner, then a burst that swells while an answer is on its way. */}
      <span aria-hidden className="-bottom-px -left-px pointer-events-none absolute h-10 w-[14%] rounded-bl-[28px] border-(--lime) border-b-2 border-l-2" />
      <Wave
        className={cn("absolute bottom-0 left-[14%] h-7 w-[26%] translate-y-1/2 transition-transform duration-500", waiting && "scale-y-[1.8]")}
        floor={0.04}
        live
        n={44}
        peaks={[
          [0.22, 0.1, 0.9],
          [0.38, 0.07, 0.45],
        ]}
      />
    </form>
  );

  if (chat)
    return (
      <div
        className="relative z-10 flex h-[calc(100svh-224px)] min-h-[400px] flex-col px-6 pt-6 lg:absolute lg:top-[104px] lg:bottom-[calc(3%+120px)] lg:left-[4%] lg:h-auto lg:w-[min(760px,52vw)] lg:px-0"
        data-chat
      >
        <button
          className="self-start text-(--dim) text-sm underline underline-offset-4 hover:text-(--fg)"
          onClick={() => shift(() => setTurns([]))}
          type="button"
        >
          {c.hero.reset}
        </button>
        <ol aria-live="polite" className="mt-4 flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto pb-6 [scrollbar-width:thin]" ref={list}>
          {turns.map((t, i) => (
            <li className="flex flex-col gap-4" key={i}>
              <p className="ml-auto max-w-[85%] rounded-[20px] border border-(--faint) bg-(--fg)/[0.04] px-4 py-2.5 text-[14px] leading-snug lg:text-[15px]">
                {t.q}
              </p>
              {t.state === "wait" ? (
                <Wave className="h-6 w-14" live n={15} peaks={[[0.5, 0.25, 0.9]]} />
              ) : t.state === "done" ? (
                <p className="max-w-[56ch] font-(family-name:--font-grotesk) text-[16px] leading-snug lg:text-[20px]">
                  <Linked links={t.links} locale={locale} text={t.text} />
                </p>
              ) : (
                <p className="text-(--fg)/70 text-sm">
                  {c.hero[t.state]}{" "}
                  <Link className="text-(--lime) hover:underline" href={askHref(t.q)}>
                    {c.hero.search}
                  </Link>
                </p>
              )}
            </li>
          ))}
        </ol>
        {composer}
      </div>
    );

  return (
    <div className="-mt-10 relative z-10 px-6 lg:mt-0 lg:max-w-[66%] lg:px-0 lg:pt-[200px] lg:pl-[4%]">
      <Index className="tracking-[0.12em]">{c.hero.overline}</Index>
      <h1 className="font-display mt-3 text-[44px] leading-[0.98] lg:mt-6 lg:text-[clamp(48px,4.3vw,64px)]">
        <span className="lg:block">{c.hero.headline[0]}</span> <span className="lg:block">{c.hero.headline[1]}</span>
      </h1>
      <p className="mt-4 max-w-[38ch] text-(--fg)/70 text-[15px] leading-relaxed lg:mt-6 lg:max-w-[44ch] lg:text-[20px]">{c.hero.lede}</p>
      {open ? (
        <div className="mt-6 lg:mt-10 lg:w-[min(760px,52vw)]">
          {composer}
          <button className="mt-4 text-(--dim) text-sm underline underline-offset-4 hover:text-(--fg)" onClick={() => shift(() => setOpen(false))} type="button">
            {c.hero.close}
          </button>
        </div>
      ) : (
        <>
          <div className="mt-6 flex flex-col gap-3 lg:mt-10 lg:flex-row lg:gap-6">
            <a className="flex h-12 items-center justify-center rounded-md bg-(--lime) px-10 font-medium text-(--bg) lg:h-14" href="#work">
              {c.hero.cta}
            </a>
            <a className="flex h-12 items-center justify-center rounded-md border border-(--fg)/40 px-10 hover:border-(--fg) lg:h-14" href={socialLinks.cv}>
              {c.hero.cv}
            </a>
          </div>
          {/* Not a third button: a quiet line under the two, led by a burst of the trace. */}
          <button
            className="group mt-5 flex items-center gap-3 text-(--fg)/70 text-sm [view-transition-name:hero-ask] hover:text-(--fg) lg:mt-7 lg:text-[15px]"
            onClick={() => shift(() => setOpen(true))}
            type="button"
          >
            <Wave className="h-5 w-6" live n={5} peaks={[[0.5, 0.4, 1]]} />
            <span className="underline decoration-(--faint) underline-offset-4 group-hover:decoration-(--lime)">{c.hero.open}</span>
          </button>
        </>
      )}
    </div>
  );
}
