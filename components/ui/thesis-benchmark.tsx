"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Strategy = "P&E" | "ReAct";
type Augmentation = "Prompt" | "Skill+Meta" | "Skill";
type MetricKey = "passRate" | "ndcg10" | "meanScore" | "time";
type CorrelationMetric = "NDCG@5" | "NDCG@10" | "MRR@10" | "Recall@10";

export type MainResult = {
  model: string;
  strategy: Strategy;
  augmentation: Augmentation;
  passRate: number;
  ndcg10: number;
  meanScore: number;
  time: number;
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
  judgeIrCorrelations: JudgeIrCorrelation[];
  abstention: AbstentionResult[];
  toolReliability: ToolReliability[];
};

type ThesisBenchmarkProps = {
  data: ThesisBenchmarkData;
};

const AUGMENTATIONS: Augmentation[] = ["Prompt", "Skill", "Skill+Meta"];

const METRICS: {
  key: MetricKey;
  label: string;
  suffix: string;
  domain: [number, number];
}[] = [
  { key: "passRate", label: "Pass Rate", suffix: "%", domain: [0, 100] },
  { key: "ndcg10", label: "NDCG@10", suffix: "", domain: [0, 1] },
  { key: "meanScore", label: "Judge Score", suffix: "", domain: [1, 5] },
  { key: "time", label: "Mean Time", suffix: "s", domain: [0, 550] },
];

const CORRELATION_METRICS: {
  key: CorrelationMetric;
  field: keyof JudgeIrCorrelation;
}[] = [
  { key: "NDCG@5", field: "ndcg5" },
  { key: "NDCG@10", field: "ndcg10" },
  { key: "MRR@10", field: "mrr10" },
  { key: "Recall@10", field: "recall10" },
];

const CHART_COLORS = {
  plan: "hsl(var(--chart-1))",
  react: "hsl(var(--chart-2))",
  neutral: "hsl(var(--chart-3))",
  warning: "hsl(var(--chart-5))",
};

function percent(value: number) {
  return `${value.toFixed(1)}%`;
}

function formatNumber(value: number, suffix: string) {
  if (suffix === "%") {
    return percent(value);
  }
  if (suffix === "s") {
    return `${value.toFixed(1)}s`;
  }
  return value.toFixed(3);
}

function ToggleGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (nextValue: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-muted-foreground text-sm">{label}</span>
      {options.map((option) => (
        <Button
          className={cn(
            "h-8 px-3 text-xs",
            option === value && "border-primary"
          )}
          key={option}
          onClick={() => onChange(option)}
          size="sm"
          variant={option === value ? "secondary" : "outline"}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export function ThesisBenchmark({ data }: ThesisBenchmarkProps) {
  const [mounted, setMounted] = useState(false);
  const [augmentation, setAugmentation] =
    useState<Augmentation>("Prompt");
  const [metric, setMetric] = useState<MetricKey>("passRate");
  const [correlationMetric, setCorrelationMetric] =
    useState<CorrelationMetric>("NDCG@10");

  const metricConfig = METRICS.find((item) => item.key === metric) ?? METRICS[0];
  const correlationConfig =
    CORRELATION_METRICS.find((item) => item.key === correlationMetric) ??
    CORRELATION_METRICS[1];

  const comparisonData = useMemo(() => {
    const models = Array.from(
      new Set(data.mainResults.map((result) => result.model))
    );

    return models.map((model) => {
      const rows = data.mainResults.filter(
        (result) =>
          result.model === model && result.augmentation === augmentation
      );
      return {
        model,
        "P&E": rows.find((row) => row.strategy === "P&E")?.[metric] ?? 0,
        ReAct: rows.find((row) => row.strategy === "ReAct")?.[metric] ?? 0,
      };
    });
  }, [augmentation, data.mainResults, metric]);

  const abstentionData = useMemo(() => {
    const models = Array.from(
      new Set(data.abstention.map((result) => result.model))
    );

    return models.map((model) => {
      const rows = data.abstention.filter(
        (result) =>
          result.model === model && result.augmentation === augmentation
      );
      return {
        model,
        "P&E": rows.find((row) => row.strategy === "P&E")?.missed ?? 0,
        ReAct: rows.find((row) => row.strategy === "ReAct")?.missed ?? 0,
      };
    });
  }, [augmentation, data.abstention]);

  const correlationData = data.judgeIrCorrelations.map((row) => ({
    dimension: row.dimension,
    correlation: Number(row[correlationConfig.field]),
  }));

  const reliabilityData = data.toolReliability.map((row) => ({
    name: `${row.model} ${row.strategy}`,
    totalCalls: row.totalCalls,
    successRate: row.successRate * 100,
  }));

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="space-y-6">
      <div>
        <h2 className="font-semibold text-xl">Interactive Benchmark Results</h2>
        <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
          Results from 936 benchmark executions over 52 scenarios, comparing
          three model backbones, two agent workflows, and three
          knowledge-delivery modes.
        </p>
      </div>

      <div className="space-y-4 rounded-lg border bg-background p-4">
        <div className="flex flex-col gap-3">
          <ToggleGroup
            label="Augmentation"
            onChange={setAugmentation}
            options={AUGMENTATIONS}
            value={augmentation}
          />
          <ToggleGroup
            label="Metric"
            onChange={setMetric}
            options={METRICS.map((item) => item.key)}
            value={metric}
          />
        </div>
        <div className="h-80 w-full">
          {mounted ? (
            <ResponsiveContainer height="100%" width="100%">
              <BarChart data={comparisonData} margin={{ bottom: 18, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="model"
                  interval={0}
                  tick={{ fontSize: 12 }}
                  tickMargin={12}
                />
                <YAxis
                  domain={metricConfig.domain}
                  tickFormatter={(value) =>
                    formatNumber(Number(value), metricConfig.suffix)
                  }
                  width={48}
                />
                <Tooltip
                  formatter={(value) =>
                    formatNumber(Number(value), metricConfig.suffix)
                  }
                />
                <Legend />
                <Bar
                  dataKey="P&E"
                  fill={CHART_COLORS.plan}
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="ReAct"
                  fill={CHART_COLORS.react}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center rounded-md bg-muted/30 text-muted-foreground text-sm">
              Loading interactive chart
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-lg border bg-background p-4">
          <ToggleGroup
            label="IR metric"
            onChange={setCorrelationMetric}
            options={CORRELATION_METRICS.map((item) => item.key)}
            value={correlationMetric}
          />
          <div className="h-72 w-full">
            {mounted ? (
              <ResponsiveContainer height="100%" width="100%">
                <BarChart
                  data={correlationData}
                  layout="vertical"
                  margin={{ left: 18, right: 12 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis domain={[0, 0.6]} type="number" />
                  <YAxis
                    dataKey="dimension"
                    tick={{ fontSize: 12 }}
                    type="category"
                    width={112}
                  />
                  <Tooltip formatter={(value) => Number(value).toFixed(3)} />
                  <Bar
                    dataKey="correlation"
                    fill={CHART_COLORS.neutral}
                    name="Spearman rho"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center rounded-md bg-muted/30 text-muted-foreground text-sm">
                Loading interactive chart
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4 rounded-lg border bg-background p-4">
          <h3 className="font-medium text-base">Missed Abstention Rate</h3>
          <div className="h-72 w-full">
            {mounted ? (
              <ResponsiveContainer height="100%" width="100%">
                <BarChart data={abstentionData} margin={{ bottom: 18 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis
                    dataKey="model"
                    interval={0}
                    tick={{ fontSize: 12 }}
                    tickMargin={12}
                  />
                  <YAxis
                    domain={[0, 80]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip formatter={(value) => percent(Number(value))} />
                  <Legend />
                  <Bar
                    dataKey="P&E"
                    fill={CHART_COLORS.plan}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="ReAct"
                    fill={CHART_COLORS.react}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center rounded-md bg-muted/30 text-muted-foreground text-sm">
                Loading interactive chart
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-lg border bg-background p-4">
        <h3 className="font-medium text-base">Tool-Use Reliability</h3>
        <div className="h-80 w-full">
          {mounted ? (
            <ResponsiveContainer height="100%" width="100%">
              <ComposedChart data={reliabilityData} margin={{ bottom: 42 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  angle={-20}
                  dataKey="name"
                  interval={0}
                  textAnchor="end"
                  tick={{ fontSize: 11 }}
                />
                <YAxis
                  domain={[80, 100]}
                  tickFormatter={(value) => `${value}%`}
                  yAxisId="rate"
                />
                <YAxis
                  orientation="right"
                  tickFormatter={(value) => `${Number(value) / 1000}k`}
                  yAxisId="calls"
                />
                <Tooltip
                  formatter={(value, name) =>
                    name === "successRate"
                      ? percent(Number(value))
                      : Number(value).toLocaleString()
                  }
                />
                <Legend />
                <Bar
                  dataKey="totalCalls"
                  fill={CHART_COLORS.neutral}
                  name="Tool calls"
                  radius={[4, 4, 0, 0]}
                  yAxisId="calls"
                />
                <Line
                  dataKey="successRate"
                  name="Success rate"
                  stroke={CHART_COLORS.warning}
                  strokeWidth={3}
                  type="monotone"
                  yAxisId="rate"
                />
              </ComposedChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center rounded-md bg-muted/30 text-muted-foreground text-sm">
              Loading interactive chart
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
