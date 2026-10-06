"use client";

import Link from "next/link";
import { type FormEvent, useEffect, useMemo, useState } from "react";

import { type AskDoc, search, terms } from "@/lib/ask/search";
import { cn } from "@/lib/utils";
import { Burst, PageHead, Tick, pad, two } from "./page-parts";
import { useCopy } from "./sections";
import { Wave } from "./trace";

// "Ask the site" (/ask): the search runs here over the index the page passes in, as you type. Asking
// also requests a short answer from /api/ask, which only works while the model on the Mac mini is up;
// otherwise the page is search only.

type Answer = { q: string; state: "wait" | "done" | "rate" | "failed"; text?: string | null };

// Lights the words a question matched, the same prefix match the search uses.
function Marked({ text, qs }: { text: string; qs: string[] }) {
  if (qs.length === 0) return text;
  const esc = qs.map((q) => q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(?<![\\p{L}\\p{N}])((?:${esc.join("|")})[\\p{L}\\p{N}]*)`, "giu");
  return text.split(re).map((part, i) => (i % 2 ? <span className="text-(--lime)" key={i}>{part}</span> : part));
}

// `initial` is ?q= from the hero: its composer while the model is off, or a turn's "Search the site for it" link.
export function Ask({ docs, initial = "" }: { docs: AskDoc[]; initial?: string }) {
  const { c, locale } = useCopy();
  const a = c.pages.ask;
  const [q, setQ] = useState(initial);
  const [up, setUp] = useState<boolean | null>(null);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const hits = useMemo(() => search(docs, q), [docs, q]);
  const qs = useMemo(() => terms(q), [q]);
  const asked = answer?.q === q.trim() ? answer : null;

  useEffect(() => {
    fetch("/api/ask")
      .then((r) => r.json())
      .then((d: { up?: boolean }) => setUp(!!d.up))
      .catch(() => setUp(false));
  }, []);

  async function ask(question: string) {
    const text = question.trim();
    if (!text || !up || answer?.state === "wait") return; // one question at a time: each spends the visitor's hourly allowance
    setAnswer({ q: text, state: "wait" });
    const r = await fetch("/api/ask", { method: "POST", body: JSON.stringify({ question: text, locale }) }).catch(() => null);
    if (r?.status === 503) setUp(false);
    const d = r?.ok ? ((await r.json().catch(() => null)) as { answer?: string | null } | null) : null;
    setAnswer((cur) =>
      cur?.q !== text ? cur : r?.status === 429 ? { q: text, state: "rate" } : d ? { q: text, state: "done", text: d.answer } : { q: text, state: "failed" }
    );
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    ask(q);
  }

  return (
    <>
      <PageHead index={a.index} title={a.title}>
        <p className="mt-6 max-w-[62ch] text-(--fg)/70 text-sm leading-relaxed lg:text-base">{a.lede}</p>
      </PageHead>

      <section className="relative mt-12 lg:mt-16">
        <Burst className="top-7 lg:top-9" />
        <form className={pad} onSubmit={submit} role="search">
          <div className="flex items-center gap-3 border-(--fg)/40 border-b focus-within:border-(--lime) lg:gap-6">
            <input
              aria-label={a.title}
              autoComplete="off"
              className="font-display min-w-0 flex-1 bg-transparent py-3 text-[22px] outline-none placeholder:text-(--dim)/70 lg:text-[36px] [&::-webkit-search-cancel-button]:appearance-none"
              enterKeyHint="search"
              maxLength={200}
              onChange={(e) => setQ(e.target.value)}
              placeholder={a.placeholder}
              type="search"
              value={q}
            />
            {up && (
              <button className="h-11 shrink-0 rounded-md bg-(--lime) px-5 font-medium text-(--bg) disabled:opacity-40 lg:h-12 lg:px-8" disabled={!q.trim() || answer?.state === "wait"} type="submit">
                {a.submit}
              </button>
            )}
          </div>
          <p className="mt-3 flex min-h-5 items-center gap-2 text-(--dim) text-xs">
            {up !== null && (
              <>
                <span className={cn("size-1.5 rounded-full", up ? "bg-(--lime)" : "bg-(--dim)")} />
                {up ? a.on : a.off}
              </>
            )}
          </p>
          {!q && (
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="text-(--dim)">{a.try}</span>
              {a.examples.map((x, i) => (
                <span className="flex items-center gap-3" key={x}>
                {i > 0 && <span className="text-(--dim)">·</span>}
                <button
                  className="min-h-11 text-left text-(--fg)/80 hover:text-(--lime)"
                  onClick={() => {
                    setQ(x);
                    ask(x);
                  }}
                  type="button"
                >
                  {x}
                </button>
                </span>
              ))}
            </p>
          )}
        </form>
      </section>

      {asked && (
        <section aria-live="polite" className="relative mt-14 lg:mt-20">
          <Burst className="top-3" />
          <div className={pad}>
            <p className="text-(--dim) text-xs">{a.answer}</p>
            {asked.state === "wait" ? (
              <div className="mt-3 flex items-center gap-4 text-(--dim) text-sm">
                <Wave className="h-8 w-16" live n={15} peaks={[[0.5, 0.25, 0.9]]} />
                {a.thinking}
              </div>
            ) : (
              <p className={cn("mt-3 max-w-[44ch] leading-snug", asked.text ? "font-display text-[22px] lg:text-[30px]" : "text-(--fg)/70 text-sm")}>
                {asked.state === "rate" ? a.rate : asked.state === "failed" || !asked.text ? a.failed : asked.text}
              </p>
            )}
          </div>
        </section>
      )}

      {q.trim() && (
        <section className="relative mt-14 lg:mt-20">
          <div className={pad}>
            <p className="text-(--dim) text-xs">{hits.length ? a.found(hits.length) : a.none}</p>
          </div>
          <ol className="mt-4">
            {hits.map(({ doc }, i) => (
              <li className="relative" key={doc.id}>
                <Tick className="top-[37px] lg:top-[45px]" />
                <Link className={cn("group block", pad)} href={doc.href}>
                  <div className="flex gap-4 border-(--faint) border-b py-6 lg:gap-0 lg:py-8">
                    <span className="w-8 shrink-0 pt-1.5 text-(--dim) text-sm lg:w-[7%]">{two(i + 1)}</span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-[22px] leading-tight transition-colors group-hover:text-(--lime) lg:text-[28px]">
                        <Marked qs={qs} text={doc.title[locale]} />
                      </h2>
                      <p className="mt-2 line-clamp-2 max-w-[70ch] text-(--fg)/70 text-sm leading-relaxed">
                        <Marked qs={qs} text={doc.summary[locale]} />
                      </p>
                    </div>
                    <span className="hidden shrink-0 pt-1.5 text-(--dim) text-sm sm:block">{doc.href}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}
    </>
  );
}
