"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

import { cn } from "@/lib/utils";
import { useCopy } from "./sections";
import { Wave } from "./trace";

// The hero's composer (design/specs/ask-r7.md): a question goes straight to /api/ask and the short answer
// shows under it, with the pages it names linked. While the model is off, the question goes to /ask,
// where the search runs in the browser. The trace runs along the composer's bottom edge into a burst,
// which swells while an answer is on its way.

type Ref = { href: string; title: { en: string; sv: string } };
type State = { state: "wait" } | { state: "done"; text: string; links: Ref[] } | { state: "rate" | "failed" | "none" };

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

export function HeroAsk() {
  const { c, locale } = useCopy();
  const router = useRouter();
  const [q, setQ] = useState("");
  const [res, setRes] = useState<State | null>(null);
  const search = `/ask?q=${encodeURIComponent(q.trim())}`;

  async function submit(e?: FormEvent) {
    e?.preventDefault();
    const question = q.trim();
    if (!question || res?.state === "wait") return;
    setRes({ state: "wait" });
    const r = await fetch("/api/ask", { method: "POST", body: JSON.stringify({ question, locale }) }).catch(() => null);
    if (r?.status === 503) return router.push(search); // the model is off: search instead
    if (r?.status === 429) return setRes({ state: "rate" });
    const d = r?.ok ? ((await r.json().catch(() => null)) as { answer?: string | null; links?: Ref[] } | null) : null;
    setRes(!d ? { state: "failed" } : d.answer ? { state: "done", text: d.answer, links: d.links ?? [] } : { state: "none" });
  }

  return (
    <div className="mt-8 lg:mt-12 lg:w-[min(760px,52vw)]">
      <form className="relative" onSubmit={submit} role="search">
        <textarea
          aria-label={c.hero.ask}
          className="block max-h-40 min-h-14 w-full resize-none rounded-[28px] border border-(--faint) bg-(--fg)/[0.04] py-4 pr-16 pl-6 font-(family-name:--font-grotesk) text-left text-base leading-6 caret-(--lime) outline-none [field-sizing:content] placeholder:text-(--dim) focus:border-(--fg)/25 lg:min-h-32 lg:pt-6 lg:font-(family-name:--font-mono) lg:text-[20px]"
          enterKeyHint="send"
          maxLength={200}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
          placeholder={c.hero.ask}
          rows={1}
          value={q}
        />
        <button
          aria-label={c.pages.ask.submit}
          className="absolute top-1.5 right-1.5 grid size-11 place-items-center rounded-full bg-(--lime) text-(--bg) transition-opacity disabled:opacity-40 lg:top-auto lg:right-4 lg:bottom-4"
          disabled={!q.trim()}
          type="submit"
        >
          <svg aria-hidden fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16">
            <path d="M8 14V2M3 7l5-5 5 5" />
          </svg>
        </button>
        {/* The trace on the edge: lime round the bottom left corner, then a burst. */}
        <span aria-hidden className="-bottom-px -left-px pointer-events-none absolute h-10 w-[14%] rounded-bl-[28px] border-(--lime) border-b-2 border-l-2" />
        <Wave
          className={cn("absolute bottom-0 left-[14%] h-7 w-[26%] translate-y-1/2 transition-transform duration-500", res?.state === "wait" && "scale-y-[1.8]")}
          floor={0.04}
          live
          n={44}
          peaks={[
            [0.22, 0.1, 0.9],
            [0.38, 0.07, 0.45],
          ]}
        />
      </form>
      <div aria-live="polite" className="text-left">
        {res && res.state !== "wait" && (res.state === "done" ? (
            <p className="font-display mt-6 max-w-[52ch] text-[17px] leading-snug lg:text-[22px]">
              <Linked links={res.links} locale={locale} text={res.text} />
            </p>
          ) : (
            <p className="mt-6 text-(--fg)/70 text-sm">
              {c.hero[res.state]}{" "}
              <Link className="text-(--lime) hover:underline" href={search}>
                {c.hero.search}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
}
