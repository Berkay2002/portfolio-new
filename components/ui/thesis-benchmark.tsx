"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Strategy = "P&E" | "ReAct";
type Augmentation = "Prompt" | "Skill+Meta" | "Skill";
type AugmentationFilter = "All" | Augmentation;
type CostMetricKey = "time" | "tools" | "inputTokens";

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

type ThesisBenchmarkProps = {
  data: ThesisBenchmarkData;
};

type BenchmarkRow = MainResult & EfficiencyResult;

const AUGMENTATIONS: Augmentation[] = ["Prompt", "Skill", "Skill+Meta"];
const AUGMENTATION_FILTERS: AugmentationFilter[] = ["All", ...AUGMENTATIONS];
const PASS_SAMPLE_SIZE = 52;

const SETUP_LABELS: Record<
  Augmentation,
  { label: string; shortLabel: string; detail: string }
> = {
  Prompt: {
    label: "Full system prompt",
    shortLabel: "Full prompt",
    detail: "All benchmark guidance is carried in the system prompt.",
  },
  Skill: {
    label: "Base prompt + skills",
    shortLabel: "Prompt + skills",
    detail: "A base system prompt stays active; task guidance is loaded through skills.",
  },
  "Skill+Meta": {
    label: "Base prompt + guided skills",
    shortLabel: "Guided skills",
    detail: "A base system prompt plus skills with explicit selection guidance.",
  },
};

const FILTER_LABELS: Record<
  AugmentationFilter,
  { label: string; shortLabel: string; detail: string }
> = {
  All: {
    label: "All prompt/skill setups",
    shortLabel: "All",
    detail: "All three prompt/skill setups are shown together.",
  },
  ...SETUP_LABELS,
};

const STRATEGY_LABELS: Record<Strategy, string> = {
  "P&E": "Orchestrator-worker",
  ReAct: "ReAct",
};

const STRATEGY_COLORS: Record<Strategy, string> = {
  "P&E": "hsl(var(--chart-1))",
  ReAct: "hsl(var(--chart-2))",
};

const STRATEGY_BADGES: Record<Strategy, string> = {
  "P&E":
    "border-orange-500/25 bg-orange-500/10 text-orange-700 dark:text-orange-300",
  ReAct:
    "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
};

const COST_METRICS: {
  key: CostMetricKey;
  label: string;
  axisLabel: string;
  format: (value: number) => string;
}[] = [
  {
    key: "time",
    label: "Time",
    axisLabel: "Mean wall-clock time",
    format: (value) => `${value.toFixed(0)}s`,
  },
  {
    key: "tools",
    label: "Tool calls",
    axisLabel: "Median tool calls",
    format: (value) => value.toFixed(0),
  },
  {
    key: "inputTokens",
    label: "Input tokens",
    axisLabel: "Median input tokens",
    format: formatCompactNumber,
  },
];

function configKey(row: {
  model: string;
  strategy: Strategy;
  augmentation: Augmentation;
}) {
  return `${row.model}|${row.strategy}|${row.augmentation}`;
}

function percent(value: number) {
  return `${value.toFixed(1)}%`;
}

function formatDecimal(value: number, digits = 3) {
  return value.toFixed(digits);
}

function formatCompactNumber(value: number) {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2)}M`;
  }

  if (value >= 10_000) {
    return `${Math.round(value / 1_000)}k`;
  }

  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}k`;
  }

  return value.toLocaleString();
}

function wilsonInterval(percentValue: number, n = PASS_SAMPLE_SIZE) {
  const z = 1.96;
  const p = percentValue / 100;
  const denominator = 1 + (z * z) / n;
  const center = (p + (z * z) / (2 * n)) / denominator;
  const halfWidth =
    (z * Math.sqrt((p * (1 - p) + (z * z) / (4 * n)) / n)) / denominator;

  return [
    Math.max(0, (center - halfWidth) * 100),
    Math.min(100, (center + halfWidth) * 100),
  ] as const;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function scaleLinear(
  value: number,
  domain: [number, number],
  range: [number, number]
) {
  const [domainMin, domainMax] = domain;
  const [rangeMin, rangeMax] = range;

  if (domainMin === domainMax) {
    return rangeMin;
  }

  const normalized = (value - domainMin) / (domainMax - domainMin);
  return rangeMin + normalized * (rangeMax - rangeMin);
}

function spreadLabelPositions(
  points: { key: string; y: number }[],
  minY: number,
  maxY: number,
  gap: number
) {
  const sorted = points
    .map((point) => ({ ...point, labelY: clamp(point.y, minY, maxY) }))
    .sort((a, b) => a.labelY - b.labelY);

  for (let index = 1; index < sorted.length; index += 1) {
    sorted[index].labelY = Math.max(
      sorted[index].labelY,
      sorted[index - 1].labelY + gap
    );
  }

  const bottomOverflow = sorted.length
    ? sorted[sorted.length - 1].labelY - maxY
    : 0;

  if (bottomOverflow > 0) {
    for (const point of sorted) {
      point.labelY -= bottomOverflow;
    }
  }

  for (let index = sorted.length - 2; index >= 0; index -= 1) {
    sorted[index].labelY = Math.min(
      sorted[index].labelY,
      sorted[index + 1].labelY - gap
    );
  }

  const topOverflow = sorted.length ? minY - sorted[0].labelY : 0;

  if (topOverflow > 0) {
    for (const point of sorted) {
      point.labelY += topOverflow;
    }
  }

  return new Map(sorted.map((point) => [point.key, point.labelY]));
}

function PromptSkillSelector({
  value,
  onChange,
}: {
  value: AugmentationFilter;
  onChange: (nextValue: AugmentationFilter) => void;
}) {
  const selectedSetup = FILTER_LABELS[value];

  return (
    <div className="space-y-2 border-y py-3">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div className="space-y-1">
          <h3 className="font-medium text-sm">Prompt / skill setup</h3>
          <p className="max-w-2xl text-muted-foreground text-xs leading-relaxed">
            <span className="text-foreground">{selectedSetup.label}.</span>{" "}
            {selectedSetup.detail}
          </p>
        </div>
        <div
          aria-label="Prompt and skill setup"
          className="flex flex-wrap gap-1"
          role="tablist"
        >
          {AUGMENTATION_FILTERS.map((option) => {
            const selected = option === value;
            const label = FILTER_LABELS[option];

            return (
              <button
                aria-selected={selected}
                className={cn(
                  "border px-3 py-1.5 text-xs transition-colors",
                  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                  selected
                    ? "border-foreground bg-foreground text-background hover:bg-foreground hover:text-background"
                    : "text-muted-foreground hover:bg-muted/25 hover:text-foreground"
                )}
                key={option}
                onClick={() => onChange(option)}
                role="tab"
                type="button"
              >
                {label.shortLabel}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CostSelector({
  value,
  onChange,
}: {
  value: CostMetricKey;
  onChange: (nextValue: CostMetricKey) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1">
      {COST_METRICS.map((metric) => {
        const selected = metric.key === value;

        return (
          <button
            aria-pressed={selected}
            className={cn(
              "border px-3 py-1.5 text-xs transition-colors",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              selected
                ? "border-foreground bg-foreground text-background hover:bg-foreground hover:text-background"
                : "text-muted-foreground hover:bg-muted/25 hover:text-foreground"
            )}
            key={metric.key}
            onClick={() => onChange(metric.key)}
            type="button"
          >
            {metric.label}
          </button>
        );
      })}
    </div>
  );
}

function PassRateBar({
  value,
  strategy,
}: {
  value: number;
  strategy: Strategy;
}) {
  const [lower, upper] = wilsonInterval(value);

  return (
    <div className="relative h-3 w-full min-w-36 overflow-visible rounded-sm bg-muted/40">
      <div
        className="h-full rounded-sm"
        style={{
          backgroundColor: STRATEGY_COLORS[strategy],
          opacity: 0.78,
          width: `${clamp(value, 0, 100)}%`,
        }}
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 h-4 -translate-y-1/2 border-muted-foreground/70 border-l"
        style={{ left: `${lower}%` }}
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 h-4 -translate-y-1/2 border-muted-foreground/70 border-l"
        style={{ left: `${upper}%` }}
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 h-px -translate-y-1/2 bg-muted-foreground/45"
        style={{
          left: `${lower}%`,
          width: `${Math.max(upper - lower, 0)}%`,
        }}
      />
    </div>
  );
}

function LeaderboardTable({
  rows,
  activeKey,
  onActiveChange,
  showSetup,
}: {
  rows: BenchmarkRow[];
  activeKey: string | null;
  onActiveChange: (key: string | null) => void;
  showSetup: boolean;
}) {
  return (
    <div className="overflow-x-auto border">
      <table className="min-w-[820px] w-full border-collapse text-sm">
        <thead>
          <tr className="border-b bg-muted/20 text-muted-foreground text-[11px] uppercase tracking-[0.12em]">
            <th className="px-3 py-2 text-left font-medium">Configuration</th>
            <th className="px-3 py-2 text-left font-medium">
              <span className="block">Functional pass</span>
              <span className="normal-case tracking-normal">
                0-100%, higher is better
              </span>
            </th>
            <th className="px-3 py-2 text-right font-medium">
              <span className="block">IR NDCG@10</span>
              <span className="normal-case tracking-normal">
                0-1, higher is better
              </span>
            </th>
            <th className="px-3 py-2 text-right font-medium">
              <span className="block">LLM judge</span>
              <span className="normal-case tracking-normal">
                1-5, higher is better
              </span>
            </th>
            <th className="px-3 py-2 text-right font-medium">
              <span className="block">Time</span>
              <span className="normal-case tracking-normal">
                lower is better
              </span>
            </th>
            <th className="px-3 py-2 text-right font-medium">
              <span className="block">Tools</span>
              <span className="normal-case tracking-normal">
                lower is better
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const key = configKey(row);
            const active = key === activeKey;

            return (
              <tr
                className={cn(
                  "border-b border-border/70 transition-colors last:border-b-0",
                  "hover:bg-muted/20 focus-within:bg-muted/20",
                  active && "bg-muted/25"
                )}
                key={key}
                onFocus={() => onActiveChange(key)}
                onMouseEnter={() => onActiveChange(key)}
                onMouseLeave={() => onActiveChange(null)}
              >
                <td className="px-3 py-2.5 align-middle">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium">{row.model}</span>
                    <span
                      className={cn(
                        "rounded border px-1.5 py-0.5 text-[11px]",
                        STRATEGY_BADGES[row.strategy]
                      )}
                    >
                      {STRATEGY_LABELS[row.strategy]}
                    </span>
                    {showSetup ? (
                      <span className="border px-1.5 py-0.5 text-muted-foreground text-[11px]">
                        {SETUP_LABELS[row.augmentation].shortLabel}
                      </span>
                    ) : null}
                  </div>
                </td>
                <td className="px-3 py-2.5 align-middle">
                  <div className="grid grid-cols-[1fr_4.5rem] items-center gap-3">
                    <PassRateBar strategy={row.strategy} value={row.passRate} />
                    <span className="text-right font-medium tabular-nums">
                      {percent(row.passRate)}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">
                  {formatDecimal(row.ndcg10)}
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">
                  {row.meanScore.toFixed(2)}
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">
                  {row.time.toFixed(0)}s
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">
                  {row.tools}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function TradeoffScatter({
  rows,
  activeKey,
  costMetric,
  onActiveChange,
  showSetup,
}: {
  rows: BenchmarkRow[];
  activeKey: string | null;
  costMetric: CostMetricKey;
  onActiveChange: (key: string | null) => void;
  showSetup: boolean;
}) {
  const width = 780;
  const height = 300;
  const margin = { top: 42, right: 190, bottom: 44, left: 46 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const costConfig =
    COST_METRICS.find((metric) => metric.key === costMetric) ??
    COST_METRICS[0];
  const maxCost = Math.max(...rows.map((row) => row[costMetric]), 1);
  const xMax = maxCost * 1.1;
  const xTicks = [0, xMax / 2, xMax];
  const yTicks = [0, 25, 50, 75, 100];
  const yQualityThreshold = 75;
  const xCostThreshold = xMax / 2;
  const xScale = (value: number) =>
    scaleLinear(value, [0, xMax], [margin.left, margin.left + innerWidth]);
  const yScale = (value: number) =>
    scaleLinear(value, [0, 100], [margin.top + innerHeight, margin.top]);
  const xThresholdPosition = xScale(xCostThreshold);
  const yThresholdPosition = yScale(yQualityThreshold);
  const plotRight = margin.left + innerWidth;
  const points = rows.map((row) => {
    const key = configKey(row);

    return {
      key,
      row,
      x: xScale(row[costMetric]),
      y: yScale(row.passRate),
      active: key === activeKey,
    };
  });
  const labelLimit = showSetup ? 6 : 10;
  const labelledPointKeys = new Set(
    (rows.length > labelLimit
      ? [...points]
          .sort(
            (a, b) =>
              b.row.passRate - a.row.passRate ||
              b.row.ndcg10 - a.row.ndcg10
          )
          .slice(0, labelLimit)
      : points
    ).map((point) => point.key)
  );

  if (activeKey) {
    labelledPointKeys.add(activeKey);
  }

  const labelledPoints = points.filter((point) =>
    labelledPointKeys.has(point.key)
  );
  const labelX = margin.left + innerWidth + 16;
  const labelPositions = spreadLabelPositions(
    labelledPoints.map((point) => ({ key: point.key, y: point.y })),
    margin.top + 12,
    margin.top + innerHeight - 12,
    showSetup ? 28 : 31
  );

  return (
    <div className="space-y-2">
      <p className="text-muted-foreground text-xs">
        Functional pass uses a 0-100% scale where higher is better. The cost
        axis range shown is 0-{costConfig.format(xMax)}, where lower is better.
        The shaded high-pass band starts at 75%; green is the lower-cost half
        and orange is the higher-cost half.
      </p>
      <div className="flex flex-wrap gap-3 text-muted-foreground text-xs">
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 border border-emerald-500/20 bg-emerald-500/20"
          />
          high pass, lower cost
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 border border-orange-500/20 bg-orange-500/20"
          />
          high pass, higher cost
        </span>
      </div>
      <svg
        aria-label={`Functional pass rate by ${costConfig.axisLabel.toLowerCase()}`}
        className="h-[300px] w-full"
        onMouseLeave={() => onActiveChange(null)}
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <g>
          <rect
            fill="rgb(16 185 129)"
            height={yThresholdPosition - margin.top}
            opacity={0.1}
            width={xThresholdPosition - margin.left}
            x={margin.left}
            y={margin.top}
          />
          <rect
            fill="rgb(249 115 22)"
            height={yThresholdPosition - margin.top}
            opacity={0.08}
            width={plotRight - xThresholdPosition}
            x={xThresholdPosition}
            y={margin.top}
          />
          <line
            opacity={0.45}
            stroke="hsl(var(--border))"
            strokeDasharray="4 4"
            x1={xThresholdPosition}
            x2={xThresholdPosition}
            y1={margin.top}
            y2={yThresholdPosition}
          />
          <line
            opacity={0.45}
            stroke="hsl(var(--border))"
            strokeDasharray="4 4"
            x1={margin.left}
            x2={plotRight}
            y1={yThresholdPosition}
            y2={yThresholdPosition}
          />

          {yTicks.map((tick) => {
            const y = yScale(tick);

            return (
              <g key={tick}>
                <line
                  opacity={tick === 0 ? 0.75 : 0.45}
                  stroke="hsl(var(--border))"
                  x1={margin.left}
                  x2={margin.left + innerWidth}
                  y1={y}
                  y2={y}
                />
                <text
                  dominantBaseline="middle"
                  fill="hsl(var(--muted-foreground))"
                  fontSize="11"
                  textAnchor="end"
                  x={margin.left - 8}
                  y={y}
                >
                  {tick}%
                </text>
              </g>
            );
          })}

          {xTicks.map((tick) => {
            const x = xScale(tick);

            return (
              <g key={tick}>
                <line
                  opacity={0.35}
                  stroke="hsl(var(--border))"
                  x1={x}
                  x2={x}
                  y1={margin.top}
                  y2={margin.top + innerHeight}
                />
                <text
                  fill="hsl(var(--muted-foreground))"
                  fontSize="11"
                  textAnchor="middle"
                  x={x}
                  y={height - 17}
                >
                  {costConfig.format(tick)}
                </text>
              </g>
            );
          })}

          <text
            fill="hsl(var(--foreground))"
            fontSize="12"
            fontWeight="600"
            x={margin.left}
            y={16}
          >
            Functional pass rate
          </text>
          <text
            fill="hsl(var(--muted-foreground))"
            fontSize="11"
            textAnchor="end"
            x={margin.left + innerWidth}
            y={height - 2}
          >
            {costConfig.axisLabel}, lower is better
          </text>

          {labelledPoints.map((point) => {
            const labelY = labelPositions.get(point.key) ?? point.y;

            return (
              <g key={`${point.key}-label`}>
                <line
                  opacity={point.active ? 0.55 : 0.28}
                  stroke="hsl(var(--muted-foreground))"
                  x1={point.x + 6}
                  x2={labelX - 8}
                  y1={point.y}
                  y2={labelY - 5}
                />
                <text
                  fill={
                    point.active
                      ? "hsl(var(--foreground))"
                      : "hsl(var(--muted-foreground))"
                  }
                  fontSize="11"
                  fontWeight={point.active ? 600 : 500}
                  x={labelX}
                  y={labelY - 4}
                >
                  {point.row.model}
                </text>
                <text
                  fill="hsl(var(--muted-foreground))"
                  fontSize="10"
                  x={labelX}
                  y={labelY + 9}
                >
                  {showSetup
                    ? `${STRATEGY_LABELS[point.row.strategy]} / ${
                        SETUP_LABELS[point.row.augmentation].shortLabel
                      }`
                    : STRATEGY_LABELS[point.row.strategy]}
                </text>
              </g>
            );
          })}

          {points.map((point) => (
            <g
              aria-label={`${point.row.model}, ${
                STRATEGY_LABELS[point.row.strategy]
              }${
                showSetup
                  ? `, ${SETUP_LABELS[point.row.augmentation].label}`
                  : ""
              }, ${percent(point.row.passRate)} pass rate, ${costConfig.format(
                point.row[costMetric]
              )} ${costConfig.label}`}
              key={point.key}
              onFocus={() => onActiveChange(point.key)}
              onMouseEnter={() => onActiveChange(point.key)}
              tabIndex={0}
            >
              <circle
                cx={point.x}
                cy={point.y}
                fill={STRATEGY_COLORS[point.row.strategy]}
                opacity={point.active ? 1 : 0.82}
                r={point.active ? 5.5 : 4.5}
                stroke="hsl(var(--background))"
                strokeWidth={point.active ? 3 : 2}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function MetricFamilyResults({
  rows,
  showSetup,
}: {
  rows: BenchmarkRow[];
  showSetup: boolean;
}) {
  const bestPass = [...rows].sort((a, b) => b.passRate - a.passRate)[0];
  const bestIr = [...rows].sort((a, b) => b.ndcg10 - a.ndcg10)[0];
  const bestJudge = [...rows].sort((a, b) => b.meanScore - a.meanScore)[0];
  const configLabel = (row: BenchmarkRow | undefined) => {
    if (!row) {
      return "n/a";
    }

    const setup = showSetup
      ? `, ${SETUP_LABELS[row.augmentation].shortLabel}`
      : "";

    return `${row.model}, ${STRATEGY_LABELS[row.strategy]}${setup}`;
  };

  const items = [
    {
      label: "Functional pass",
      value: bestPass ? percent(bestPass.passRate) : "n/a",
      config: configLabel(bestPass),
      detail:
        "0-100%, higher is better. Deterministic expected-artifact and entity checks.",
    },
    {
      label: "IR metric",
      value: bestIr ? formatDecimal(bestIr.ndcg10) : "n/a",
      config: configLabel(bestIr),
      detail:
        "NDCG@10 ranges from 0 to 1, higher is better. 1.000 means expected artifacts are ranked at the top.",
    },
    {
      label: "LLM-as-judge",
      value: bestJudge ? bestJudge.meanScore.toFixed(2) : "n/a",
      config: configLabel(bestJudge),
      detail:
        "Mean 1-5 score, higher is better, across response-quality dimensions.",
    },
  ];

  return (
    <section className="space-y-3 border-y py-4">
      <div>
        <h3 className="font-medium text-sm">Metric-family leaders</h3>
        <p className="text-muted-foreground text-xs leading-relaxed">
          These metrics are shown separately because they answer different
          questions: task correctness, retrieval ranking, and answer quality.
        </p>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            className="grid gap-1 border-t pt-2 text-sm sm:grid-cols-[9rem_9rem_1fr]"
            key={item.label}
          >
            <div>
              <p className="text-muted-foreground text-xs">
                {item.label}
              </p>
              <p className="font-semibold tabular-nums">
                {item.value}
              </p>
            </div>
            <p className="text-xs leading-relaxed">{item.config}</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ScenarioDesignSummary() {
  const complexities = ["Single-hop", "Multi-hop", "Reasoning"];
  const familyRows = [
    {
      family: "Traceability",
      scenarios: 16,
      passRate: 94.1,
      ndcg10: 0.391,
      detail:
        "Follow explicit links between procedures, requirements, backlog items, and test cases.",
    },
    {
      family: "Search",
      scenarios: 14,
      passRate: 54.0,
      ndcg10: 0.325,
      detail:
        "Find relevant tests from natural-language descriptions where wording does not match cleanly.",
    },
    {
      family: "Lookup",
      scenarios: 10,
      passRate: 95.0,
      ndcg10: 0.762,
      detail:
        "Resolve known entities or identifiers to the relevant test artifacts and evidence.",
    },
    {
      family: "Impact",
      scenarios: 8,
      passRate: 66.7,
      ndcg10: 0.246,
      detail:
        "Estimate which tests are affected by a changed component or related artifact.",
    },
    {
      family: "Comparison",
      scenarios: 4,
      passRate: 66.7,
      ndcg10: 0.838,
      detail:
        "Compare related artifact sets and explain overlaps, gaps, or differences.",
    },
  ];

  return (
    <section className="space-y-3 border-t pt-4">
      <div>
        <h3 className="font-medium text-sm">Scenario families</h3>
        <p className="text-muted-foreground text-xs leading-relaxed">
          The 52 scenarios were deliberately stratified across retrieval
          families instead of sampled as one undifferentiated pool.
        </p>
        <p className="text-muted-foreground text-xs leading-relaxed">
          Pass is shown on a 0-100% scale. IR is NDCG@10 on a 0-1 scale. Higher
          is better for both.
        </p>
      </div>
      <div className="space-y-2">
        {familyRows.map((row) => (
          <div className="space-y-1 border-t pt-2 text-xs" key={row.family}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="font-medium">{row.family}</p>
                <p className="text-muted-foreground">
                  {row.scenarios} scenarios
                </p>
              </div>
              <div className="flex gap-3 text-muted-foreground tabular-nums">
                <span>{percent(row.passRate)} pass</span>
                <span>{formatDecimal(row.ndcg10)} IR</span>
              </div>
            </div>
            <div>
              <div className="h-1.5 bg-muted/35">
                <div
                  className="h-1.5 bg-foreground/60"
                  style={{ width: `${(row.scenarios / 52) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-muted-foreground leading-relaxed">
                {row.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3 border-t pt-3 text-xs">
        <p className="leading-relaxed">
          <span className="text-muted-foreground">Each scenario includes </span>
          expected artifacts, expected entity references, a reference answer,
          and an answerability label.
        </p>
        <div className="space-y-2">
          <p className="text-muted-foreground">Complexity strata</p>
          <div className="flex flex-wrap gap-1.5">
            {complexities.map((complexity) => (
              <span className="border px-2 py-1 text-[11px]" key={complexity}>
                {complexity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ThesisBenchmark({ data }: ThesisBenchmarkProps) {
  const [augmentation, setAugmentation] = useState<AugmentationFilter>("All");
  const [costMetric, setCostMetric] = useState<CostMetricKey>("time");
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [showFullLeaderboard, setShowFullLeaderboard] = useState(false);

  const rows = useMemo(() => {
    const efficiencyByConfig = new Map(
      data.efficiency.map((row) => [configKey(row), row])
    );

    return data.mainResults.map((row) => {
      const efficiency = efficiencyByConfig.get(configKey(row));

      return {
        ...row,
        tools: efficiency?.tools ?? 0,
        inputTokens: efficiency?.inputTokens ?? 0,
        outputTokens: efficiency?.outputTokens ?? 0,
      };
    });
  }, [data.efficiency, data.mainResults]);

  const visibleRows = useMemo(
    () =>
      rows
        .filter((row) =>
          augmentation === "All" ? true : row.augmentation === augmentation
        )
        .sort((a, b) => b.passRate - a.passRate || b.ndcg10 - a.ndcg10),
    [augmentation, rows]
  );

  const selectedSetup = FILTER_LABELS[augmentation];
  const showSetup = augmentation === "All";
  const leaderboardRows = showFullLeaderboard
    ? visibleRows
    : visibleRows.slice(0, 10);
  const hiddenLeaderboardRows = Math.max(
    visibleRows.length - leaderboardRows.length,
    0
  );
  const leaderboardTitle =
    augmentation === "All"
      ? "Leaderboard across all prompt/skill setups"
      : `Leaderboard for ${selectedSetup.label.toLowerCase()}`;

  function handleAugmentationChange(nextValue: AugmentationFilter) {
    setAugmentation(nextValue);
    setActiveKey(null);
    setShowFullLeaderboard(false);
  }

  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h2 className="font-semibold text-xl">Interactive Benchmark Results</h2>
        <p className="max-w-3xl text-muted-foreground text-sm leading-relaxed">
          Results over 52 industrial retrieval scenarios. The charts compare
          ReAct and Orchestrator-worker across full-prompt and skill-based
          setups.
        </p>
      </div>

      <div>
        <PromptSkillSelector
          onChange={handleAugmentationChange}
          value={augmentation}
        />
      </div>

      <div className="space-y-3">
        <div className="flex flex-col justify-between gap-2 border-b pb-2 sm:flex-row sm:items-end">
          <div>
            <h3 className="font-medium text-sm">{leaderboardTitle}</h3>
            <p className="text-muted-foreground text-xs">
              Thin whiskers show an approximate 95% binomial interval for the 52
              scenario pass-rate estimate.
            </p>
          </div>
        </div>

        <LeaderboardTable
          activeKey={activeKey}
          onActiveChange={setActiveKey}
          rows={leaderboardRows}
          showSetup={showSetup}
        />
        {visibleRows.length > 10 ? (
          <div className="flex justify-center border-x border-b py-2">
            <button
              className="border px-3 py-1.5 text-muted-foreground text-xs transition-colors hover:bg-muted/25 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              onClick={() =>
                setShowFullLeaderboard((currentValue) => !currentValue)
              }
              type="button"
            >
              {showFullLeaderboard
                ? "Show top 10"
                : `Load more (${hiddenLeaderboardRows})`}
            </button>
          </div>
        ) : null}
      </div>

      <MetricFamilyResults rows={visibleRows} showSetup={showSetup} />

      <section className="space-y-2">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div className="space-y-1">
            <h3 className="font-medium text-sm">Cost-performance trade-off</h3>
            <p className="text-muted-foreground text-xs">
              Each point is one model/workflow pair for the selected
              prompt/skill setup.
            </p>
          </div>
          <CostSelector onChange={setCostMetric} value={costMetric} />
        </div>
        <TradeoffScatter
          activeKey={activeKey}
          costMetric={costMetric}
          onActiveChange={setActiveKey}
          rows={visibleRows}
          showSetup={showSetup}
        />
      </section>

      <ScenarioDesignSummary />
    </section>
  );
}
