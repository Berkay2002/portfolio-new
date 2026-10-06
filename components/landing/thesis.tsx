"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Burst, pad } from "./page-parts";

// The thesis benchmark on /papers/when-agentic-workflows-help (design/specs/pages-r1.md d-paper):
// four numbers on one rule, then the leaderboard as rows with a thin pass-rate bar, the top one lime.

type Strategy = "P&E" | "ReAct";
type Augmentation = "Prompt" | "Skill+Meta" | "Skill";

export type MainResult = {
  model: string;
  strategy: Strategy;
  augmentation: Augmentation;
  passRate: number;
  ndcg10: number;
  meanScore: number;
  time: number;
};

export type EfficiencyResult = {
  model: string;
  strategy: Strategy;
  augmentation: Augmentation;
  tools: number;
  inputTokens: number;
  outputTokens: number;
};

export type JudgeIrCorrelation = {
  dimension: string;
  ndcg5: number;
  ndcg10: number;
  mrr10: number;
  recall10: number;
};

export type AbstentionResult = {
  model: string;
  strategy: Strategy;
  augmentation: Augmentation;
  correct: number;
  falseAbstention: number;
  missed: number;
};

export type ToolReliability = {
  model: string;
  strategy: Strategy;
  totalCalls: number;
  successRate: number;
  errorRate: number;
  meanGrounding?: number;
};

export type ThesisBenchmarkData = {
  mainResults: MainResult[];
  efficiency: EfficiencyResult[];
  judgeIrCorrelations: JudgeIrCorrelation[];
  abstention: AbstentionResult[];
  toolReliability: ToolReliability[];
};

const setups: ["All" | Augmentation, string][] = [
  ["All", "All"],
  ["Prompt", "Full prompt"],
  ["Skill", "Prompt + skills"],
  ["Skill+Meta", "Guided skills"],
];
const setupName = Object.fromEntries(setups) as Record<Augmentation, string>;
const workflow: Record<Strategy, string> = { "P&E": "Orchestrator-worker", ReAct: "ReAct" };
const key = (r: { model: string; strategy: Strategy; augmentation: Augmentation }) => `${r.model}|${r.strategy}|${r.augmentation}`;

// The 52 scenarios by family: how many, and the mean pass rate and NDCG@10 over all setups.
const families = [
  { name: "Traceability", n: 16, pass: 94.1, ndcg: 0.391, what: "Follow explicit links between procedures, requirements, backlog items and test cases." },
  { name: "Search", n: 14, pass: 54.0, ndcg: 0.325, what: "Find relevant tests from natural-language descriptions where the wording does not match cleanly." },
  { name: "Lookup", n: 10, pass: 95.0, ndcg: 0.762, what: "Resolve known entities or identifiers to the relevant test artifacts and evidence." },
  { name: "Impact", n: 8, pass: 66.7, ndcg: 0.246, what: "Estimate which tests are affected by a changed component or related artifact." },
  { name: "Comparison", n: 4, pass: 66.7, ndcg: 0.838, what: "Compare related artifact sets and explain overlaps, gaps or differences." },
];

function Heading({ children }: { children: string }) {
  return (
    <div className="relative">
      <Burst className="top-3.5" />
      <h2 className={cn(pad, "text-lg leading-7 lg:text-xl")}>{children}</h2>
    </div>
  );
}

export function Thesis({
  highlights,
  benchmark,
}: {
  highlights: readonly { value: string; label: string; detail: string }[];
  benchmark: ThesisBenchmarkData;
}) {
  const [setup, setSetup] = useState<"All" | Augmentation>("All");
  const [all, setAll] = useState(false);
  const tools = new Map(benchmark.efficiency.map((e) => [key(e), e.tools]));
  const rows = benchmark.mainResults
    .filter((r) => setup === "All" || r.augmentation === setup)
    .sort((a, b) => b.passRate - a.passRate || b.ndcg10 - a.ndcg10);
  const shown = all ? rows : rows.slice(0, 10);
  const best = (f: (r: MainResult) => number) => rows.reduce((a, b) => (f(b) > f(a) ? b : a));
  const leaders: [string, string, MainResult, string][] = rows.length
    ? [
        ["Functional pass", `${best((r) => r.passRate).passRate.toFixed(1)}%`, best((r) => r.passRate), "Deterministic checks for the expected artifacts and entities. 0 to 100 %."],
        ["IR, NDCG@10", best((r) => r.ndcg10).ndcg10.toFixed(3), best((r) => r.ndcg10), "How high the expected artifacts rank. 0 to 1."],
        ["LLM as judge", best((r) => r.meanScore).meanScore.toFixed(2), best((r) => r.meanScore), "Mean answer-quality score. 1 to 5."],
      ]
    : [];

  return (
    <>
      <div className={cn(pad, "mt-14 lg:mt-20")}>
        <div className="grid grid-cols-2 border-(--faint) border-t lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div className={cn("py-6 pr-4 lg:py-8", i % 2 === 1 && "max-lg:border-(--faint) max-lg:border-l max-lg:pl-4", i > 0 && "lg:border-(--faint) lg:border-l lg:pl-6", i > 1 && "max-lg:border-(--faint) max-lg:border-t")} key={h.label}>
              <p className="font-display text-[34px] leading-none lg:text-[52px]">{h.value.split(" ")[0]}</p>
              <p className="mt-2 text-(--dim) text-xs lg:text-sm">{h.value.includes(" ") ? h.value.split(" ").slice(1).join(" ") : h.label.toLowerCase()}</p>
              <p className="mt-3 hidden max-w-[30ch] text-(--fg)/60 text-xs leading-relaxed lg:block">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-16 scroll-mt-24 lg:mt-24" id="benchmark">
        <Heading>Benchmark results</Heading>
        <div className={pad}>
          <p className="mt-4 max-w-[70ch] text-(--fg)/70 text-sm leading-relaxed">
            Results over 52 industrial retrieval scenarios, comparing ReAct and orchestrator-worker across full-prompt and skill-based setups.
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            {setups.map(([value, label], i) => (
              <span className="flex items-center gap-3" key={value}>
                {i > 0 && <span className="text-(--dim)">·</span>}
                <button
                  aria-pressed={setup === value}
                  className={cn("h-9", setup === value ? "border-(--lime) border-b text-(--lime)" : "text-(--dim) hover:text-(--fg)")}
                  onClick={() => {
                    setSetup(value);
                    setAll(false);
                  }}
                  type="button"
                >
                  {label}
                </button>
              </span>
            ))}
          </p>
          <div className="mt-6 text-sm">
            <div className="hidden grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,1.6fr)_repeat(4,minmax(0,0.5fr))] gap-x-4 border-(--faint) border-b pb-3 text-(--dim) text-xs uppercase tracking-[0.08em] lg:grid">
              <span>Model / workflow</span>
              <span>Setup</span>
              <span>Functional pass</span>
              <span className="text-right">NDCG@10</span>
              <span className="text-right">Judge</span>
              <span className="text-right">Time</span>
              <span className="text-right">Tools</span>
            </div>
            {shown.map((r, i) => (
              <div
                className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-x-4 border-(--faint) border-b py-3 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,1.6fr)_repeat(4,minmax(0,0.5fr))]"
                key={key(r)}
              >
                <span>
                  {r.model}
                  <span className="block text-(--dim) text-xs">
                    {workflow[r.strategy]}
                    <span className="lg:hidden"> · {setupName[r.augmentation]}</span>
                  </span>
                </span>
                <span className="hidden text-(--dim) lg:block">{setupName[r.augmentation]}</span>
                <span className="flex items-center gap-3">
                  <span className="h-1.5 flex-1 bg-(--faint)">
                    <span className={cn("block h-full", i === 0 ? "bg-(--lime)" : "bg-(--fg)/85")} style={{ width: `${r.passRate}%` }} />
                  </span>
                  <span className="hidden w-14 text-right tabular-nums lg:block">{r.passRate.toFixed(1)}%</span>
                </span>
                <span className="text-right tabular-nums lg:hidden">{r.passRate.toFixed(1)}%</span>
                <span className="hidden text-right tabular-nums lg:block">{r.ndcg10.toFixed(3)}</span>
                <span className="hidden text-right tabular-nums lg:block">{r.meanScore.toFixed(2)}</span>
                <span className="hidden text-right tabular-nums lg:block">{r.time.toFixed(0)}s</span>
                <span className="hidden text-right tabular-nums lg:block">{tools.get(key(r)) ?? "–"}</span>
              </div>
            ))}
            {rows.length > 10 && (
              <button className="mt-4 h-11 text-(--dim) text-sm hover:text-(--fg)" onClick={() => setAll(!all)} type="button">
                {all ? "Show the top 10" : `Show all ${rows.length} →`}
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="mt-16 lg:mt-24">
        <Heading>Best per metric</Heading>
        <div className={pad}>
          <p className="mt-4 max-w-[70ch] text-(--fg)/70 text-sm leading-relaxed">
            Shown separately because they answer different questions: is the task done, are the right artifacts on top, and is the answer good.
          </p>
          <div className="mt-6 text-sm">
            {leaders.map(([label, value, r, what]) => (
              <div className="grid gap-1 border-(--faint) border-t py-4 lg:grid-cols-[12rem_8rem_minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-x-6" key={label}>
                <span className="text-(--dim)">{label}</span>
                <span className="font-display text-2xl leading-none">{value}</span>
                <span>
                  {r.model}, {workflow[r.strategy]}
                  {setup === "All" && `, ${setupName[r.augmentation]}`}
                </span>
                <span className="text-(--dim) text-xs leading-relaxed">{what}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 lg:mt-24">
        <Heading>Scenario families</Heading>
        <div className={pad}>
          <p className="mt-4 max-w-[70ch] text-(--fg)/70 text-sm leading-relaxed">
            The 52 scenarios are stratified by family instead of sampled as one pool. Each has expected artifacts, expected entity references, a reference
            answer and an answerability label, at three levels: single-hop, multi-hop and reasoning.
          </p>
          <div className="mt-6 text-sm">
            {families.map((f) => (
              <div className="grid gap-2 border-(--faint) border-t py-4 lg:grid-cols-[12rem_minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-x-6" key={f.name}>
                <span>
                  {f.name}
                  <span className="block text-(--dim) text-xs">{f.n} scenarios</span>
                </span>
                <span className="flex items-center gap-3">
                  <span className="h-1.5 flex-1 bg-(--faint)">
                    <span className="block h-full bg-(--fg)/85" style={{ width: `${f.pass}%` }} />
                  </span>
                  <span className="w-28 text-right text-xs tabular-nums">
                    {f.pass.toFixed(1)}% · {f.ndcg.toFixed(3)}
                  </span>
                </span>
                <span className="text-(--dim) text-xs leading-relaxed">{f.what}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-(--dim) text-xs">Bar: functional pass rate. Figures: pass rate · NDCG@10.</p>
        </div>
      </section>
    </>
  );
}
