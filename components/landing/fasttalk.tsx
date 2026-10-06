"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Dashes, PageHead, pad } from "./page-parts";
import { useCopy } from "./sections";

// /playground/tdde19 (design/specs/pages-r1.md f-fasttalk): three local models in one voice loop,
// as columns of figures, then tabs drawn in the trace's line style. Qwen3 is lime, Llama off-white,
// Ministral grey. Measured 5 December 2025, 30 runs per model; UPL is user-perceived latency.

type Stat = { mean: number; std: number; median?: number; min?: number; max?: number; p5?: number; p95?: number };
type Model = {
  name: string;
  tone: string;
  runs: number;
  ok: number;
  rate: number;
  upl: Required<Stat>;
  ttsr: Required<Stat>;
  ttft: Stat;
  trt: Stat;
  ftl: Required<Stat>;
  tokens: Stat;
  strengths: string[];
  caveat: string;
  shape: [string, string];
};

const models: Model[] = [
  {
    name: "Qwen3 8B",
    tone: "var(--lime)",
    runs: 30,
    ok: 28,
    rate: 93.3,
    upl: { mean: 317.89, std: 139.1, median: 280.37, min: 265.4, max: 928.8, p5: 265.89, p95: 369.74 },
    ttsr: { mean: 311.68, std: 144.01, median: 277.0, min: 163, max: 927, p5: 206.15, p95: 543.2 },
    ttft: { mean: 477.32, std: 603.77, median: 194.5, min: 166, max: 2589 },
    trt: { mean: 1723.71, std: 1720.11 },
    ftl: { mean: 480.39, std: 27.06, median: 485.5, min: 439, max: 571, p5: 446.05, p95: 518.2 },
    tokens: { mean: 161.4, std: 209.05, median: 80.5, min: 7, max: 679 },
    strengths: ["Fastest median UPL (280 ms)", "Fastest median time to start reply (277 ms)", "Lowest speech-to-text spread (σ 27 ms)", "Best on short questions"],
    caveat: "One 929 ms outlier",
    shape: ["Left-skewed", "Most runs between 265 and 290 ms, with rare outliers up to 929 ms."],
  },
  {
    name: "Llama 3.1 8B",
    tone: "var(--fg)",
    runs: 30,
    ok: 26,
    rate: 86.7,
    upl: { mean: 313.72, std: 26.5, median: 308.43, min: 275.09, max: 378.49, p5: 276.7, p95: 345.55 },
    ttsr: { mean: 307.58, std: 49.3, median: 303.5, min: 231, max: 485, p5: 254.0, p95: 368.25 },
    ttft: { mean: 361.96, std: 401.25, median: 226.0, min: 170, max: 1482 },
    trt: { mean: 1331.04, std: 1166.91 },
    ftl: { mean: 499.04, std: 46.51, median: 493.5, min: 447, max: 629, p5: 448.0, p95: 610.0 },
    tokens: { mean: 123.0, std: 163.83, median: 76.5, min: 1, max: 594 },
    strengths: ["Lowest UPL spread (σ 27 ms)", "Tightest P5 to P95 range (69 ms)", "No extreme outliers (max 378 ms)", "Most concise answers"],
    caveat: "4 failed long-question runs",
    shape: ["Normal", "Tightly clustered around 300 to 320 ms, no extreme values."],
  },
  {
    name: "Ministral 3 8B",
    tone: "var(--dim)",
    runs: 30,
    ok: 30,
    rate: 100.0,
    upl: { mean: 365.75, std: 148.97, median: 319.5, min: 258.66, max: 987.77, p5: 268.9, p95: 435.63 },
    ttsr: { mean: 334.67, std: 142.4, median: 307.5, min: 153, max: 986, p5: 211.2, p95: 438.4 },
    ttft: { mean: 503.47, std: 485.38, median: 243.5, min: 169, max: 1488 },
    trt: { mean: 2250.63, std: 1898.69 },
    ftl: { mean: 492.7, std: 35.1, median: 491.0, min: 450, max: 627, p5: 457.9, p95: 545.65 },
    tokens: { mean: 228.0, std: 238.64, median: 136.5, min: 1, max: 709 },
    strengths: ["100 % success (30 of 30)", "No speech-to-text failures", "Most detailed answers", "Handles long questions well"],
    caveat: "Slowest overall (320 ms median)",
    shape: ["Right-skewed", "Wide spread from 259 to 988 ms, higher on medium questions."],
  },
];

// UPL in ms per run: ten short questions, then ten medium ones.
const runs = [
  [268.78, 270.4, 282.41, 278.32, 288.55, 296.99, 267.52, 265.4, 285.57, 278.16, 306.37, 269.81, 267.87, 278.13, 265.81, 270.52, 292.95, 298.51, 350.81, 311.07],
  [298.56, 314.0, 307.98, 308.88, 300.28, 321.66, 275.09, 305.3, 324.09, 303.16, 315.66, 318.3, 334.81, 316.66, 345.09, 320.32, 300.09, 304.87, 378.49, 331.66],
  [315.18, 283.09, 302.43, 258.66, 268.15, 295.43, 296.21, 328.57, 316.08, 299.17, 322.12, 335.73, 363.65, 341.82, 416.87, 302.46, 430.82, 435.89, 402.69, 426.88],
];

// Median UPL by question length (long questions were only measured without streaming overlap).
const byLength: [string, string, string[]][] = [
  ["Short, about 2.3 s", "What's the last thing that genuinely surprised you?", ["278 ms", "306 ms", "296 ms"]],
  ["Medium, about 8.4 s", "If you could redesign one everyday object...", ["291 ms", "320 ms", "378 ms"]],
  ["Long, about 16.8 s", "How would this reshape education, careers...", ["~650 ms", "none, audio started before speech ended", "~652 ms"]],
];

// Runs per UPL range, all measured runs.
const histogram: [string, number[]][] = [
  ["250–270", [3, 0, 2]],
  ["270–290", [5, 1, 2]],
  ["290–310", [2, 6, 3]],
  ["310–330", [1, 7, 3]],
  ["330–360", [1, 4, 4]],
  ["360–400", [0, 2, 4]],
  ["400–500", [0, 0, 3]],
  ["500+", [1, 0, 1]],
];

type Row = [label: string, values: number[], unit: string, lower: boolean];
const pick = (f: (m: Model) => number) => models.map(f);
const raw: [string, Row[]][] = [
  [
    "User-perceived latency",
    [
      ["Median", pick((m) => m.upl.median), "ms", true],
      ["Mean", pick((m) => m.upl.mean), "ms", true],
      ["Std dev", pick((m) => m.upl.std), "ms", true],
      ["Min", pick((m) => m.upl.min), "ms", true],
      ["Max", pick((m) => m.upl.max), "ms", true],
      ["P5", pick((m) => m.upl.p5), "ms", true],
      ["P95", pick((m) => m.upl.p95), "ms", true],
    ],
  ],
  [
    "LLM",
    [
      ["Time to start reply, median", pick((m) => m.ttsr.median), "ms", true],
      ["Time to start reply, std dev", pick((m) => m.ttsr.std), "ms", true],
      ["Time to first token, median", pick((m) => m.ttft.median ?? 0), "ms", true],
      ["Time to first token, std dev", pick((m) => m.ttft.std), "ms", true],
      ["Total response time", pick((m) => m.trt.mean), "ms", true],
    ],
  ],
  [
    "Speech to text",
    [
      ["First transcript, mean", pick((m) => m.ftl.mean), "ms", true],
      ["First transcript, std dev", pick((m) => m.ftl.std), "ms", true],
      ["Final latency", [1.45, 1.56, 1.56], "ms", true],
    ],
  ],
  [
    "Tokens",
    [
      ["Mean", pick((m) => m.tokens.mean), "", true],
      ["Median", pick((m) => m.tokens.median ?? 0), "", true],
      ["Std dev", pick((m) => m.tokens.std), "", true],
    ],
  ],
  [
    "Reliability",
    [
      ["Runs", pick((m) => m.runs), "", false],
      ["Successful runs", pick((m) => m.ok), "", false],
      ["Success rate", pick((m) => m.rate), "%", false],
    ],
  ],
];

const tabs = ["Overview", "Latency", "Variance", "Distribution", "Raw data"] as const;
const fmt = (v: number, unit: string) => `${Number.isInteger(v) ? v : v.toFixed(1)}${unit === "%" ? "%" : unit ? ` ${unit}` : ""}`;

function Title({ children, note }: { children: string; note?: string }) {
  return (
    <div className="mt-14 first:mt-0">
      <h3 className="text-base lg:text-lg">{children}</h3>
      {note && <p className="mt-1 text-(--dim) text-xs">{note}</p>}
    </div>
  );
}

// Three thin bars per row, one per model, scaled to the row's largest value.
function Bars({ rows, unit = "ms" }: { rows: [string, number[]][]; unit?: string }) {
  return (
    <div className="mt-5 text-sm">
      {rows.map(([label, values]) => {
        const top = Math.max(...values);
        return (
          <div className="grid gap-2 border-(--faint) border-t py-4 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-x-8" key={label}>
            <span className="text-(--dim)">{label}</span>
            <div className="space-y-1.5">
              {values.map((v, i) => (
                <div className="flex items-center gap-3" key={models[i]!.name}>
                  <span className="h-1.5 flex-1 bg-(--faint)">
                    <span className="block h-full" style={{ width: `${top ? (v / top) * 100 : 0}%`, background: models[i]!.tone }} />
                  </span>
                  <span className="w-20 text-right text-xs tabular-nums">{fmt(v, unit)}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const LO = 240;
const HI = 460;
const ticks = [250, 300, 350, 400, 450];

function RunChart() {
  const x = (i: number) => (i / 19) * 100;
  const y = (v: number) => 100 - ((v - LO) / (HI - LO)) * 100;
  return (
    <div className="mt-5">
      <div className="relative ml-10 h-[220px] border-(--faint) border-b border-l lg:h-[300px]">
        {ticks.map((t) => (
          <span className="-translate-y-1/2 absolute -left-10 w-8 text-right text-(--dim) text-[11px]" key={t} style={{ top: `${y(t)}%` }}>
            {t}
          </span>
        ))}
        <span className="absolute inset-x-0 border-(--dim)/60 border-t border-dashed" style={{ top: `${y(440)}%` }} />
        <span className="absolute right-0 text-(--dim) text-[11px]" style={{ top: `calc(${y(440)}% - 18px)` }}>
          P95 under 440 ms
        </span>
        <span className="absolute inset-y-0 border-(--faint) border-l border-dashed" style={{ left: `${(x(9) + x(10)) / 2}%` }} />
        <svg aria-hidden className="absolute inset-0 size-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          {[...runs].reverse().map((r, k) => {
            const m = models[runs.length - 1 - k]!;
            return (
              <polyline
                fill="none"
                key={m.name}
                points={r.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
                stroke={m.tone}
                strokeLinejoin="round"
                strokeWidth={m.tone === "var(--lime)" ? 2 : 1.25}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>
      </div>
      <div className="ml-10 flex justify-between text-(--dim) text-[11px]">
        <span>short questions, runs 1–10</span>
        <span>medium questions, runs 1–10</span>
      </div>
      <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs">
        {models.map((m) => (
          <span className="flex items-center gap-2" key={m.name}>
            <span className="h-0.5 w-5" style={{ background: m.tone }} />
            {m.name}
          </span>
        ))}
      </p>
    </div>
  );
}

export function FastTalk() {
  const { c } = useCopy();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");
  return (
    <>
      <PageHead back={["/playground", c.pages.playground.back]} index="TDDE19 · FASTTALK · DEC 2025" title="Three models, one voice loop.">
        <p className="mt-4 text-(--dim) text-sm lg:text-lg">Whisper large-v3-turbo · Kokoro TTS · Q4 · all local</p>
      </PageHead>

      <div className={cn(pad, "mt-12 lg:mt-16")}>
        <div className="grid lg:grid-cols-3">
          {models.map((m, i) => (
            <div className={cn("border-(--faint) py-5 max-lg:border-t lg:py-0", i > 0 && "lg:border-l lg:pl-8")} key={m.name}>
              <p className="font-display text-xl lg:text-2xl" style={{ color: i === 0 ? "var(--lime)" : undefined }}>
                {m.name}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-4 lg:mt-5 lg:grid-cols-1 lg:gap-5">
                <p>
                  <span className="block text-(--dim) text-xs">Success rate</span>
                  <span className="text-[26px] tabular-nums lg:text-[40px]">{m.rate.toFixed(m.rate === 100 ? 0 : 1)}%</span>
                </p>
                <p>
                  <span className="block text-(--dim) text-xs">User-perceived latency, median</span>
                  <span className="text-[26px] tabular-nums lg:text-[40px]">{Math.round(m.upl.median)} ms</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm lg:mt-16">
          {tabs.map((t, i) => (
            <span className="flex items-center gap-3" key={t}>
              {i > 0 && <span className="text-(--dim)">·</span>}
              <button
                aria-pressed={tab === t}
                className={cn("h-9", tab === t ? "border-(--lime) border-b text-(--lime)" : "text-(--dim) hover:text-(--fg)")}
                onClick={() => setTab(t)}
                type="button"
              >
                {t}
              </button>
            </span>
          ))}
        </p>

        <div className="mt-10">
          {tab === "Overview" && (
            <>
              <Title note="User-perceived latency in ms, from the end of speech to the first audio back.">Latency per run</Title>
              <RunChart />
              <Title>What each model is best at</Title>
              <div className="mt-5 grid gap-10 text-sm lg:grid-cols-3">
                {models.map((m) => (
                  <div key={m.name}>
                    <p className="mb-3">{m.name}</p>
                    <Dashes items={m.strengths} />
                    <p className="mt-3 text-(--dim) text-xs">But: {m.caveat.toLowerCase()}</p>
                  </div>
                ))}
              </div>
              <Title>Which to use</Title>
              <p className="mt-4 max-w-[80ch] text-(--fg)/80 text-sm leading-relaxed">
                All three stay under 440 ms P95 for conversational turns, well inside the one-second target. Llama 3.1 8B gives the best experience because
                its latency is predictable. Qwen3 8B is the choice when raw speed matters more than consistency, and Ministral 3 8B when every run has to
                succeed.
              </p>
            </>
          )}
          {tab === "Latency" && (
            <>
              <Title note="Lower is better.">Medians</Title>
              <Bars
                rows={[
                  ["User-perceived latency", pick((m) => m.upl.median)],
                  ["Time to start reply", pick((m) => m.ttsr.median)],
                  ["Time to first token", pick((m) => m.ttft.median ?? 0)],
                  ["First transcript (mean)", pick((m) => m.ftl.mean)],
                ]}
              />
              <Title note="Median user-perceived latency by question length.">By question length</Title>
              <div className="mt-5 text-sm">
                {byLength.map(([label, example, values]) => (
                  <div className="grid gap-2 border-(--faint) border-t py-4 lg:grid-cols-[14rem_minmax(0,1fr)_repeat(3,8rem)] lg:gap-x-6" key={label}>
                    <span>
                      {label}
                      <span className="block text-(--dim) text-xs">“{example}”</span>
                    </span>
                    <span className="hidden lg:block" />
                    {values.map((v, i) => (
                      <span className="text-xs lg:text-right lg:text-sm" key={models[i]!.name} style={{ color: models[i]!.tone }}>
                        <span className="text-(--dim) lg:hidden">{models[i]!.name}: </span>
                        {v}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
          {tab === "Variance" && (
            <>
              <Title note="Standard deviation. Lower is more consistent.">Spread</Title>
              <Bars
                rows={[
                  ["User-perceived latency", pick((m) => m.upl.std)],
                  ["Time to start reply", pick((m) => m.ttsr.std)],
                  ["First transcript", pick((m) => m.ftl.std)],
                ]}
              />
              <Title note="Fastest and slowest user-perceived latency.">Extremes</Title>
              <Bars rows={models.map((m) => [`${m.name}, ${Math.round(m.upl.max - m.upl.min)} ms range`, [m.upl.min, m.upl.max]] as [string, number[]])} />
            </>
          )}
          {tab === "Distribution" && (
            <>
              <Title note="Runs per range of user-perceived latency, all measured runs.">Distribution</Title>
              <Bars rows={histogram.map(([range, counts]) => [`${range} ms`, counts] as [string, number[]])} unit="" />
              <div className="mt-10 grid gap-8 text-sm lg:grid-cols-3">
                {models.map((m) => (
                  <div key={m.name}>
                    <p>{m.name}</p>
                    <p className="mt-1 text-(--dim)">{m.shape[0]}</p>
                    <p className="mt-2 text-(--fg)/70 text-xs leading-relaxed">{m.shape[1]}</p>
                  </div>
                ))}
              </div>
            </>
          )}
          {tab === "Raw data" && (
            <div className="text-sm">
              <div className="grid grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))] gap-x-4 pb-3 text-(--dim) text-xs">
                <span />
                {models.map((m) => (
                  <span className="text-right" key={m.name}>
                    {m.name}
                  </span>
                ))}
              </div>
              {raw.map(([group, rows]) => (
                <div className="mt-6" key={group}>
                  <p className="text-(--dim) text-xs uppercase tracking-[0.08em]">{group}</p>
                  {rows.map(([label, values, unit, lower]) => {
                    const best = lower ? Math.min(...values) : Math.max(...values);
                    return (
                      <div className="grid grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))] gap-x-4 border-(--faint) border-b py-2.5" key={label}>
                        <span>{label}</span>
                        {values.map((v, i) => (
                          <span className={cn("text-right tabular-nums", v === best && values.some((w) => w !== best) && "text-(--lime)")} key={models[i]!.name}>
                            {fmt(v, unit)}
                          </span>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}
              <p className="mt-6 text-(--dim) text-xs">Lime marks the best value in a row. 30 runs per model, 3 question lengths, local GPU.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
