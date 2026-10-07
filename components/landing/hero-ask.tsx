"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type CSSProperties, type FormEvent, type RefObject, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { socialLinks } from "@/lib/data/portfolio-data";
import { cn } from "@/lib/utils";
import { Index, useCopy } from "./sections";
import { Wave } from "./trace";

// The hero's text and its Ask flow (design/specs/ask-r9.md, then ask-r8 a-bubbles): at rest the hero is
// main's overline, headline, lede, "See my work" and "Download CV", with a quiet "Or ask me about my work"
// line under them that swaps the buttons for the composer; the first question turns the hero into a conversation, the composer docked above the signal.
// A question goes to /api/ask with the last few turns; while the model is off it goes to /ask instead.

type Ref = { href: string; title: { en: string; sv: string } };
type Turn = { q: string } & ({ state: "wait" | "rate" | "failed" | "none" } | { state: "done"; text: string; links: Ref[] });

// Links each page the answer names: "SynGraph: Deep Research Agent" is named as "SynGraph".
function Linked({ text, links, locale }: { text: string; links: Ref[]; locale: "en" | "sv" }) {
  // Reversed, so a name two pages share ("SynGraph", the project and its paper) links the higher-ranked one.
  const names = new Map(links.map((l) => [l.title[locale].split(":")[0]!.trim().toLowerCase(), l.href] as const).reverse());
  if (names.size === 0) return text;
  const re = new RegExp(`(${[...names.keys()].map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return text.split(re).map((part, i) =>
    i % 2 ? (
      // The pseudo-element stretches the tap target to 44 px tall without moving the line.
      <Link className="relative text-(--lime) after:absolute after:inset-x-0 after:-inset-y-3 hover:underline" href={names.get(part.toLowerCase()) ?? "/ask"} key={i}>
        {part}
      </Link>
    ) : (
      part
    )
  );
}

// The swaps run as a view transition where the browser has one: the "Or ask me" line grows into the composer,
// and the composer glides down to its dock. Reduced motion, or no support, swaps at once.
function shift(update: () => void) {
  if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) return update();
  document.startViewTransition(() => flushSync(update));
}

// /ask searches with the conversation's earlier questions too, so a follow-up like "what does it use?" keeps its topic.
// Four questions of up to 200 characters each fit whole, so a long follow-up never cuts the one that named the topic.
const askHref = (turns: Turn[], q: string) =>
  `/ask?q=${encodeURIComponent([...turns.flatMap((t) => (t.state === "done" ? [t.q] : [])).slice(-3), q].join(" "))}`;

// iOS Safari scrolls a focused field into view as if the fixed header were not there: the composer ended up
// behind the header with the Work section under it. As soon as the keyboard is up, the composer is moved to sit
// just above it instead, like a chat app's, below the header, so the headline stays in view. Since iOS 26
// the keyboard shrinks the layout viewport as well as the visual one, so a keyboard is told by the visual viewport
// getting more than 150 px shorter than it was while no field had focus. Without a keyboard nothing moves.
// Returns the visible height while the keyboard is up, so the conversation can shrink to fit above it.
function useAboveKeyboard(form: RefObject<HTMLFormElement | null>) {
  const [fit, setFit] = useState<number | null>(null);
  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const height = () => vv.height * vv.scale; // in the page's unzoomed px, so pinch zoom isn't a keyboard
    const typing = () => document.activeElement?.matches("input, textarea, [contenteditable]") ?? false;
    const width = () => Math.round(vv.width * vv.scale);
    // The height without a keyboard for each width the page has had, so turning the phone while typing keeps it.
    // A width first seen while typing falls back to most of the screen's height that way up (toolbars aside).
    const full = new Map([[width(), height()]]);
    const short = Math.min(screen.width, screen.height);
    const keyboard = () => (full.get(width()) ?? (width() > short ? short : Math.max(screen.width, screen.height)) * 0.8) - height() > 150;
    // Safari's own scroll and the keyboard's slide run for a while after the tap. The composer is placed as soon
    // as the keyboard is there, again on every frame Safari moves the page for the next 2.5 s, and once more
    // when it stops, so it never shows where Safari put it.
    let until = 0;
    let timer = 0;
    let late = 0;
    let frame = 0;
    const place = () => {
      const f = form.current;
      const up = keyboard() && !!f?.contains(document.activeElement);
      flushSync(() => setFit(up ? Math.round(height()) : null));
      if (!f || !up || vv.scale > 1.01) return; // zoomed in, the visitor is placing the view themselves
      // Since iOS 26 the layout viewport shrinks with the keyboard and Safari slides the visual one down onto it,
      // so its offset is on its way to 0: aim for where it ends up, not for a frame of the slide.
      const offset = document.documentElement.clientHeight - vv.height < 40 ? 0 : vv.offsetTop;
      const head = document.querySelector("header");
      const headed = !head ? 0 : getComputedStyle(head).position === "fixed" ? head.offsetHeight : head.getBoundingClientRect().bottom;
      const top = Math.max(headed, offset) + 16;
      const bottom = offset + vv.height - 24; // the burst on the composer's edge hangs below it
      const r = f.getBoundingClientRect();
      const by = Math.round(Math.min(r.bottom - bottom, r.top - top)); // if it can't fit, its top wins
      if (Math.abs(by) > 1) window.scrollBy({ top: by, behavior: "instant" });
    };
    const wait = () => {
      if (performance.now() > until) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(place);
      clearTimeout(timer);
      timer = window.setTimeout(place, 150);
    };
    const arm = () => {
      until = performance.now() + 2500;
      wait();
      clearTimeout(late);
      late = window.setTimeout(place, 2600);
    };
    const onFocus = (e: FocusEvent) => form.current?.contains(e.target as Node) && arm();
    const onResize = () => {
      if (!typing()) full.set(width(), height()); // no keyboard can be up
      if (!keyboard()) setFit(null); // closed: the conversation gets its height back at once
      else place(); // at once, before Safari's own scroll shows
      arm();
    };
    const stop = () => {
      until = 0; // the visitor is scrolling themselves
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      clearTimeout(late);
    };
    document.addEventListener("focusin", onFocus);
    vv.addEventListener("resize", onResize);
    vv.addEventListener("scroll", wait);
    window.addEventListener("scroll", wait, { passive: true });
    window.addEventListener("touchmove", stop, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      clearTimeout(late);
      document.removeEventListener("focusin", onFocus);
      vv.removeEventListener("resize", onResize);
      vv.removeEventListener("scroll", wait);
      window.removeEventListener("scroll", wait);
      window.removeEventListener("touchmove", stop);
    };
  }, [form]);
  return fit;
}

export function HeroAsk() {
  const { c, locale } = useCopy();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const list = useRef<HTMLOListElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const conversation = useRef(0); // "New question" starts another, so a late answer to the old one is dropped
  const chat = turns.length > 0;
  const waiting = turns.at(-1)?.state === "wait";

  const fit = useAboveKeyboard(form);

  useEffect(() => {
    list.current?.scrollTo({ top: list.current.scrollHeight });
  }, [turns, fit]);

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
    const at = conversation.current;
    const r = await fetch("/api/ask", { method: "POST", body: JSON.stringify({ question, locale, history }) }).catch(() => null);
    if (at !== conversation.current) return;
    if (r?.status === 503) return router.push(askHref(turns, question)); // the model is off: search instead
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
    <form className="relative [view-transition-name:hero-ask]" onSubmit={submit} ref={form} role="search">
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
      // With the keyboard up the column fits above it (88 px: the header's 64 and a margin; 128 px on wide screens,
      // where it starts 104 px down), so the latest turn stays in view.
      <div
        className="relative z-10 flex h-[min(calc(100svh-224px),calc(var(--fit,9999px)-88px))] min-h-[min(400px,calc(var(--fit,9999px)-88px))] flex-col px-6 pt-6 lg:absolute lg:top-[104px] lg:bottom-[calc(3%+120px)] lg:left-[4%] lg:h-auto lg:max-h-[calc(var(--fit,9999px)-128px)] lg:w-[min(760px,52vw)] lg:px-0"
        data-chat
        style={fit ? ({ "--fit": `${fit}px` } as CSSProperties) : undefined}
      >
        <button
          className="flex min-h-11 items-center self-start text-(--dim) text-sm underline underline-offset-4 hover:text-(--fg) disabled:opacity-40"
          disabled={waiting} // the pending answer still spends the visitor's allowance, so it finishes first
          onClick={() => {
            conversation.current++;
            shift(() => setTurns([]));
          }}
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
                  <Link className="relative text-(--lime) after:absolute after:inset-x-0 after:-inset-y-3 hover:underline" href={askHref(turns.slice(0, i), t.q)}>
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
    <div className="-mt-10 relative z-10 px-6 lg:mt-0 lg:max-w-[66%] lg:px-0 lg:pt-[200px] lg:pl-[4%]" data-typing={fit ? "" : undefined}>
      <Index className="tracking-[0.12em]">{c.hero.overline}</Index>
      <h1 className="font-display mt-3 text-[44px] leading-[0.98] lg:mt-6 lg:text-[clamp(48px,4.3vw,64px)]">
        <span className="lg:block">{c.hero.headline[0]}</span> <span className="lg:block">{c.hero.headline[1]}</span>
      </h1>
      <p className="mt-4 max-w-[38ch] text-(--fg)/70 text-[15px] leading-relaxed lg:mt-6 lg:max-w-[44ch] lg:text-[20px]">{c.hero.lede}</p>
      {open ? (
        <div className="mt-6 lg:mt-10 lg:w-[min(760px,52vw)]">
          {composer}
          <button className="mt-2 flex min-h-11 items-center text-(--dim) text-sm underline underline-offset-4 hover:text-(--fg)" onClick={() => shift(() => setOpen(false))} type="button">
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
            className="group mt-3 flex min-h-11 items-center gap-3 text-(--fg)/70 text-sm [view-transition-name:hero-ask] hover:text-(--fg) lg:mt-5 lg:text-[15px]"
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
