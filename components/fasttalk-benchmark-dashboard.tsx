"use client";

import { useState } from 'react';
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { 
  Trophy, 
  Target, 
  CheckCircle, 
  BarChart3, 
  AlertTriangle, 
  FileText,
  TrendingUp,
  Activity
} from 'lucide-react';

type ModelKey = 'qwen' | 'llama' | 'ministral';

interface MetricCardProps {
  title: string;
  qwen: number;
  llama: number;
  ministral: number;
  unit?: string;
  lower?: boolean;
  highlight?: boolean;
}

interface WinnerBadgeProps {
  model: ModelKey;
}

interface MetricRowProps {
  label: string;
  qwen: number | null;
  llama: number | null;
  ministral: number | null;
  unit?: string;
  lower?: boolean;
  highlight?: boolean;
}

const COLORS = {
  qwen: '#8b5cf6',
  llama: '#06b6d4',
  ministral: '#f59e0b',
  excellent: '#22c55e',
  good: '#eab308',
  warning: '#f97316'
};

// Complete benchmark data from all three models
const modelData = {
  qwen3: {
    name: 'Qwen3 8B',
    short: 'Qwen3',
    vendor: 'Alibaba',
    color: COLORS.qwen,
    logo: '/logo/Qwen Ai Logo PNG Vector.png',
    runs: 30, successful: 28, successRate: 93.3,
    stt_ftl: { mean: 480.39, std: 27.06, median: 485.5, min: 439, max: 571, p5: 446.05, p95: 518.20 },
    llm_ttft: { mean: 477.32, std: 603.77, median: 194.5, min: 166, max: 2589 },
    llm_ttsr: { mean: 311.68, std: 144.01, median: 277.0, min: 163, max: 927, p5: 206.15, p95: 543.20 },
    llm_trt: { mean: 1723.71, std: 1720.11 },
    tokens: { mean: 161.4, std: 209.05, median: 80.5, min: 7, max: 679 },
    tts_tst: { mean: 3288.89, std: 5178.07 },
    e2e_total: { mean: 6889.32, std: 4061.98 },
    upl: { mean: 317.89, std: 139.10, median: 280.37, min: 265.40, max: 928.80, p5: 265.89, p95: 369.74, count: 22 }
  },
  llama31: {
    name: 'Llama 3.1 8B',
    short: 'Llama3.1',
    vendor: 'Meta',
    color: COLORS.llama,
    logo: '/logo/Meta-Ai-Logo-PNG-SVG-Vector.png',
    runs: 30, successful: 26, successRate: 86.7,
    stt_ftl: { mean: 499.04, std: 46.51, median: 493.5, min: 447, max: 629, p5: 448.0, p95: 610.0 },
    llm_ttft: { mean: 361.96, std: 401.25, median: 226.0, min: 170, max: 1482 },
    llm_ttsr: { mean: 307.58, std: 49.30, median: 303.5, min: 231, max: 485, p5: 254.0, p95: 368.25 },
    llm_trt: { mean: 1331.04, std: 1166.91 },
    tokens: { mean: 123.0, std: 163.83, median: 76.5, min: 1, max: 594 },
    tts_tst: { mean: 2878.42, std: 4641.24 },
    e2e_total: { mean: 6298.50, std: 3031.02 },
    upl: { mean: 313.72, std: 26.50, median: 308.43, min: 275.09, max: 378.49, p5: 276.70, p95: 345.55, count: 20 }
  },
  ministral3: {
    name: 'Ministral 3 8B',
    short: 'Ministral3',
    vendor: 'Mistral AI',
    color: COLORS.ministral,
    logo: '/logo/Mistral AI Icon Logo Vector.svg .png',
    runs: 30, successful: 30, successRate: 100.0,
    stt_ftl: { mean: 492.70, std: 35.10, median: 491.0, min: 450, max: 627, p5: 457.90, p95: 545.65 },
    llm_ttft: { mean: 503.47, std: 485.38, median: 243.5, min: 169, max: 1488 },
    llm_ttsr: { mean: 334.67, std: 142.40, median: 307.5, min: 153, max: 986, p5: 211.20, p95: 438.40 },
    llm_trt: { mean: 2250.63, std: 1898.69 },
    tokens: { mean: 228.0, std: 238.64, median: 136.5, min: 1, max: 709 },
    tts_tst: { mean: 4130.40, std: 5257.14 },
    e2e_total: { mean: 7113.30, std: 3963.43 },
    upl: { mean: 365.75, std: 148.97, median: 319.50, min: 258.66, max: 987.77, p5: 268.90, p95: 435.63, count: 22 }
  }
};

// Individual run data for short questions
const shortQuestionRuns = {
  qwen3: [
    { run: 1, upl: 268.78, ttsr: 267, ttft: 173, tokens: 10 },
    { run: 2, upl: 270.40, ttsr: 270, ttft: 179, tokens: 14 },
    { run: 3, upl: 282.41, ttsr: 282, ttft: 183, tokens: 10 },
    { run: 4, upl: 278.32, ttsr: 277, ttft: 180, tokens: 10 },
    { run: 5, upl: 288.55, ttsr: 288, ttft: 194, tokens: 8 },
    { run: 6, upl: 296.99, ttsr: 296, ttft: 195, tokens: 7 },
    { run: 7, upl: 267.52, ttsr: 266, ttft: 175, tokens: 9 },
    { run: 8, upl: 265.40, ttsr: 264, ttft: 166, tokens: 11 },
    { run: 9, upl: 285.57, ttsr: 284, ttft: 189, tokens: 13 },
    { run: 10, upl: 278.16, ttsr: 277, ttft: 189, tokens: 13 }
  ],
  llama31: [
    { run: 1, upl: 298.56, ttsr: 297, ttft: 197, tokens: 11 },
    { run: 2, upl: 314.00, ttsr: 313, ttft: 209, tokens: 14 },
    { run: 3, upl: 307.98, ttsr: 307, ttft: 217, tokens: 1 },
    { run: 4, upl: 308.88, ttsr: 307, ttft: 211, tokens: 8 },
    { run: 5, upl: 300.28, ttsr: 299, ttft: 198, tokens: 13 },
    { run: 6, upl: 321.66, ttsr: 320, ttft: 218, tokens: 12 },
    { run: 7, upl: 275.09, ttsr: 273, ttft: 190, tokens: 12 },
    { run: 8, upl: 305.30, ttsr: 304, ttft: 188, tokens: 1 },
    { run: 9, upl: 324.09, ttsr: 323, ttft: 170, tokens: 1 },
    { run: 10, upl: 303.16, ttsr: 302, ttft: 195, tokens: 8 }
  ],
  ministral3: [
    { run: 1, upl: 315.18, ttsr: 314, ttft: 220, tokens: 8 },
    { run: 2, upl: 283.09, ttsr: 282, ttft: 188, tokens: 19 },
    { run: 3, upl: 302.43, ttsr: 301, ttft: 218, tokens: 1 },
    { run: 4, upl: 258.66, ttsr: 257, ttft: 169, tokens: 6 },
    { run: 5, upl: 268.15, ttsr: 267, ttft: 190, tokens: 3 },
    { run: 6, upl: 295.43, ttsr: 295, ttft: 210, tokens: 1 },
    { run: 7, upl: 296.21, ttsr: 295, ttft: 191, tokens: 15 },
    { run: 8, upl: 328.57, ttsr: 328, ttft: 246, tokens: 1 },
    { run: 9, upl: 316.08, ttsr: 315, ttft: 221, tokens: 3 },
    { run: 10, upl: 299.17, ttsr: 298, ttft: 203, tokens: 6 }
  ]
};

// Medium question runs
const mediumQuestionRuns = {
  qwen3: [
    { run: 1, upl: 306.37, ttsr: 303, tokens: 63 },
    { run: 2, upl: 269.81, ttsr: 268, tokens: 72 },
    { run: 3, upl: 267.87, ttsr: 266, tokens: 68 },
    { run: 4, upl: 278.13, ttsr: 277, tokens: 83 },
    { run: 5, upl: 265.81, ttsr: 264, tokens: 80 },
    { run: 6, upl: 270.52, ttsr: 269, tokens: 84 },
    { run: 7, upl: 292.95, ttsr: 291, tokens: 91 },
    { run: 8, upl: 298.51, ttsr: 297, tokens: 95 },
    { run: 9, upl: 350.81, ttsr: 349, tokens: 81 },
    { run: 10, upl: 311.07, ttsr: 310, tokens: 86 }
  ],
  llama31: [
    { run: 1, upl: 315.66, ttsr: 314, tokens: 77 },
    { run: 2, upl: 318.30, ttsr: 317, tokens: 79 },
    { run: 3, upl: 334.81, ttsr: 333, tokens: 99 },
    { run: 4, upl: 316.66, ttsr: 315, tokens: 71 },
    { run: 5, upl: 345.09, ttsr: 344, tokens: 102 },
    { run: 6, upl: 320.32, ttsr: 319, tokens: 82 },
    { run: 7, upl: 300.09, ttsr: 299, tokens: 73 },
    { run: 8, upl: 304.87, ttsr: 303, tokens: 87 },
    { run: 9, upl: 378.49, ttsr: 377, tokens: 118 },
    { run: 10, upl: 331.66, ttsr: 330, tokens: 95 }
  ],
  ministral3: [
    { run: 1, upl: 322.12, ttsr: 320, tokens: 135 },
    { run: 2, upl: 335.73, ttsr: 334, tokens: 140 },
    { run: 3, upl: 363.65, ttsr: 362, tokens: 134 },
    { run: 4, upl: 341.82, ttsr: 340, tokens: 132 },
    { run: 5, upl: 416.87, ttsr: 415, tokens: 137 },
    { run: 6, upl: 302.46, ttsr: 301, tokens: 119 },
    { run: 7, upl: 430.82, ttsr: 429, tokens: 136 },
    { run: 8, upl: 435.89, ttsr: 434, tokens: 142 },
    { run: 9, upl: 402.69, ttsr: 401, tokens: 151 },
    { run: 10, upl: 426.88, ttsr: 425, tokens: 163 }
  ]
};

const MetricCard = ({ title, qwen, llama, ministral, unit = 'ms', lower = true, highlight = false }: MetricCardProps) => {
  const values = { qwen, llama, ministral };
  const winner = lower 
    ? Object.entries(values).reduce((a, b) => a[1] < b[1] ? a : b)[0]
    : Object.entries(values).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  
  const getColor = (model: string) => {
    if (model === 'qwen') return winner === 'qwen' ? 'text-purple-500 dark:text-purple-400' : 'text-muted-foreground';
    if (model === 'llama') return winner === 'llama' ? 'text-cyan-500 dark:text-cyan-400' : 'text-muted-foreground';
    return winner === 'ministral' ? 'text-amber-500 dark:text-amber-400' : 'text-muted-foreground';
  };
  
  return (
    <Card className={cn(highlight && 'ring-2 ring-primary')}>
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-purple-500 dark:text-purple-400 text-xs">Qwen3</span>
          <span className={cn("text-lg font-bold", getColor('qwen'))}>
            {qwen.toFixed(1)}{unit}
            {winner === 'qwen' && <Badge variant="secondary" className="ml-2 bg-purple-500/20 text-purple-500 dark:text-purple-400">✓</Badge>}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-cyan-500 dark:text-cyan-400 text-xs">Llama3.1</span>
          <span className={cn("text-lg font-bold", getColor('llama'))}>
            {llama.toFixed(1)}{unit}
            {winner === 'llama' && <Badge variant="secondary" className="ml-2 bg-cyan-500/20 text-cyan-500 dark:text-cyan-400">✓</Badge>}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-amber-500 dark:text-amber-400 text-xs">Ministral3</span>
          <span className={cn("text-lg font-bold", getColor('ministral'))}>
            {ministral.toFixed(1)}{unit}
            {winner === 'ministral' && <Badge variant="secondary" className="ml-2 bg-amber-500/20 text-amber-500 dark:text-amber-400">✓</Badge>}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const WinnerBadge = ({ model }: WinnerBadgeProps) => {
  const styles: Record<ModelKey, string> = {
    qwen: 'bg-purple-500/20 text-purple-500 dark:text-purple-400 border-purple-500/30',
    llama: 'bg-cyan-500/20 text-cyan-500 dark:text-cyan-400 border-cyan-500/30',
    ministral: 'bg-amber-500/20 text-amber-500 dark:text-amber-400 border-amber-500/30'
  };
  const names: Record<ModelKey, string> = { qwen: 'Qwen3', llama: 'Llama3.1', ministral: 'Ministral3' };
  return (
    <Badge variant="outline" className={cn(styles[model], "gap-1")}>
      <Trophy className="w-3 h-3" /> {names[model]}
    </Badge>
  );
};

const MetricRow = ({ label, qwen, llama, ministral, unit = 'ms', lower = true, highlight = false }: MetricRowProps) => {
  const values = { qwen, llama, ministral };
  const validValues = Object.entries(values).filter(([, v]) => v !== null && v !== undefined) as [string, number][];
  const winner = lower 
    ? validValues.reduce((a, b) => a[1] < b[1] ? a : b)[0]
    : validValues.reduce((a, b) => a[1] > b[1] ? a : b)[0];
  
  const format = (v: number | null) => v === null || v === undefined ? '-' : typeof v === 'number' ? v.toFixed(1) : v;
  
  return (
    <tr className={cn("border-b border-border", highlight && 'bg-primary/5')}>
      <td className="py-3 px-3 font-medium">{label}</td>
      <td className={cn("text-right px-3", winner === 'qwen' && 'text-purple-500 dark:text-purple-400 font-semibold')}>
        {format(qwen)}{unit && qwen !== null ? unit : ''}
      </td>
      <td className={cn("text-right px-3", winner === 'llama' && 'text-cyan-500 dark:text-cyan-400 font-semibold')}>
        {format(llama)}{unit && llama !== null ? unit : ''}
      </td>
      <td className={cn("text-right px-3", winner === 'ministral' && 'text-amber-500 dark:text-amber-400 font-semibold')}>
        {format(ministral)}{unit && ministral !== null ? unit : ''}
      </td>
      <td className="text-center px-3"><WinnerBadge model={winner as ModelKey} /></td>
    </tr>
  );
};

export default function FastTalkComparison() {
  const [activeTab, setActiveTab] = useState('overview');

  const models = Object.values(modelData);

  // Comparison bar data for median latencies
  const comparisonBarData = [
    { metric: 'UPL Median', qwen: modelData.qwen3.upl.median, llama: modelData.llama31.upl.median, ministral: modelData.ministral3.upl.median },
    { metric: 'TTSR Median', qwen: modelData.qwen3.llm_ttsr.median, llama: modelData.llama31.llm_ttsr.median, ministral: modelData.ministral3.llm_ttsr.median },
    { metric: 'TTFT Median', qwen: modelData.qwen3.llm_ttft.median, llama: modelData.llama31.llm_ttft.median, ministral: modelData.ministral3.llm_ttft.median },
    { metric: 'STT FTL', qwen: modelData.qwen3.stt_ftl.mean, llama: modelData.llama31.stt_ftl.mean, ministral: modelData.ministral3.stt_ftl.mean },
  ];

  // Variance comparison
  const varianceData = [
    { metric: 'UPL σ', qwen: modelData.qwen3.upl.std, llama: modelData.llama31.upl.std, ministral: modelData.ministral3.upl.std },
    { metric: 'TTSR σ', qwen: modelData.qwen3.llm_ttsr.std, llama: modelData.llama31.llm_ttsr.std, ministral: modelData.ministral3.llm_ttsr.std },
    { metric: 'STT FTL σ', qwen: modelData.qwen3.stt_ftl.std, llama: modelData.llama31.stt_ftl.std, ministral: modelData.ministral3.stt_ftl.std },
  ];

  // Radar chart data (normalized scores, higher = better)
  const radarData = [
    { 
      metric: 'Speed',
      qwen: 100 - (modelData.qwen3.upl.median - 250) / 1.5,
      llama: 100 - (modelData.llama31.upl.median - 250) / 1.5,
      ministral: 100 - (modelData.ministral3.upl.median - 250) / 1.5,
    },
    { 
      metric: 'Consistency',
      qwen: Math.max(0, 100 - modelData.qwen3.upl.std),
      llama: Math.max(0, 100 - modelData.llama31.upl.std),
      ministral: Math.max(0, 100 - modelData.ministral3.upl.std),
    },
    { 
      metric: 'Reliability',
      qwen: modelData.qwen3.successRate,
      llama: modelData.llama31.successRate,
      ministral: modelData.ministral3.successRate,
    },
    { 
      metric: 'P95 Bound',
      qwen: Math.max(0, 100 - (modelData.qwen3.upl.p95 - 300) / 2),
      llama: Math.max(0, 100 - (modelData.llama31.upl.p95 - 300) / 2),
      ministral: Math.max(0, 100 - (modelData.ministral3.upl.p95 - 300) / 2),
    },
    { 
      metric: 'Conciseness',
      qwen: Math.max(0, 100 - modelData.qwen3.tokens.median / 2),
      llama: Math.max(0, 100 - modelData.llama31.tokens.median / 2),
      ministral: Math.max(0, 100 - modelData.ministral3.tokens.median / 2),
    },
  ];

  // UPL distribution histogram
  const uplDistribution = [
    { range: '250-270', qwen: 3, llama: 0, ministral: 2 },
    { range: '270-290', qwen: 5, llama: 1, ministral: 2 },
    { range: '290-310', qwen: 2, llama: 6, ministral: 3 },
    { range: '310-330', qwen: 1, llama: 7, ministral: 3 },
    { range: '330-360', qwen: 1, llama: 4, ministral: 4 },
    { range: '360-400', qwen: 0, llama: 2, ministral: 4 },
    { range: '400-500', qwen: 0, llama: 0, ministral: 3 },
    { range: '500+', qwen: 1, llama: 0, ministral: 1 },
  ];

  // Line chart data for short questions
  const shortLineData = shortQuestionRuns.qwen3.map((q, i) => ({
    run: i + 1,
    qwen: q.upl,
    llama: shortQuestionRuns.llama31[i].upl,
    ministral: shortQuestionRuns.ministral3[i].upl
  }));

  // Line chart data for medium questions
  const mediumLineData = mediumQuestionRuns.qwen3.map((q, i) => ({
    run: i + 1,
    qwen: q.upl,
    llama: mediumQuestionRuns.llama31[i].upl,
    ministral: mediumQuestionRuns.ministral3[i].upl
  }));


  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">FastTalk Benchmark Results</h1>
          <p className="text-muted-foreground text-lg">Three-Model Comparison • December 5, 2025</p>
          <p className="text-muted-foreground/70 text-sm mt-1">Whisper large-v3-turbo • Kokoro TTS • Q4 Quantization • All Local</p>
        </div>

        {/* Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {models.map((model) => (
            <Card 
              key={model.name}
              className="border"
              style={{ 
                background: `linear-gradient(135deg, ${model.color}10, transparent)`,
                borderColor: `${model.color}40`
              }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-background flex items-center justify-center">
                    <Image 
                      src={model.logo} 
                      alt={`${model.vendor} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{model.name}</CardTitle>
                    <CardDescription>{model.vendor} • Q4 Quantization</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Success:</span>
                    <span className={cn("ml-2", {
                      'text-green-500 dark:text-green-400': model.successRate === 100,
                      'text-yellow-500 dark:text-yellow-400': model.successRate >= 90 && model.successRate < 100,
                      'text-orange-500 dark:text-orange-400': model.successRate < 90
                    })}>
                      {model.successRate}%
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">UPL:</span>
                    <span className="ml-2 font-medium">{model.upl.median.toFixed(0)}ms</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {['overview', 'latency', 'variance', 'distribution', 'raw-data'].map(tab => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'default' : 'outline-solid'}
              size="sm"
              onClick={() => setActiveTab(tab)}
            >
              {tab.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </Button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Hero Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card className="bg-linear-to-br from-green-500/10 to-transparent border-green-500/30">
                <CardHeader className="pb-2">
                  <CardDescription className="text-green-600 dark:text-green-400 font-medium flex items-center gap-1.5">
                    <Trophy className="w-4 h-4" /> Fastest Median UPL
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">280ms</div>
                  <div className="text-purple-500 dark:text-purple-400 text-sm mt-1">Qwen3 8B</div>
                </CardContent>
              </Card>
              <Card className="bg-linear-to-br from-blue-500/10 to-transparent border-blue-500/30">
                <CardHeader className="pb-2">
                  <CardDescription className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1.5">
                    <Target className="w-4 h-4" /> Most Consistent
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">σ = 27ms</div>
                  <div className="text-cyan-500 dark:text-cyan-400 text-sm mt-1">Llama 3.1 8B</div>
                </CardContent>
              </Card>
              <Card className="bg-linear-to-br from-amber-500/10 to-transparent border-amber-500/30">
                <CardHeader className="pb-2">
                  <CardDescription className="text-amber-600 dark:text-amber-400 font-medium flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> Most Reliable
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-amber-500 dark:text-amber-400 text-sm mt-1">Ministral 3 8B</div>
                </CardContent>
              </Card>
              <Card className="border-muted">
                <CardHeader className="pb-2">
                  <CardDescription className="font-medium flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4" /> All Models
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">&lt;440ms</div>
                  <div className="text-muted-foreground text-sm mt-1">P95 UPL</div>
                </CardContent>
              </Card>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <MetricCard title="User Perceived Latency (Median)" qwen={modelData.qwen3.upl.median} llama={modelData.llama31.upl.median} ministral={modelData.ministral3.upl.median} highlight />
              <MetricCard title="Time to Start Reply (Median)" qwen={modelData.qwen3.llm_ttsr.median} llama={modelData.llama31.llm_ttsr.median} ministral={modelData.ministral3.llm_ttsr.median} />
              <MetricCard title="LLM Time to First Token (Median)" qwen={modelData.qwen3.llm_ttft.median} llama={modelData.llama31.llm_ttft.median} ministral={modelData.ministral3.llm_ttft.median} />
              <MetricCard title="UPL Standard Deviation" qwen={modelData.qwen3.upl.std} llama={modelData.llama31.upl.std} ministral={modelData.ministral3.upl.std} />
            </div>

            {/* Radar Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Overall Performance Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={radarData}>
                    <PolarGrid className="stroke-border" />
                    <PolarAngleAxis dataKey="metric" tick={{ fill: 'currentColor', fontSize: 12 }} className="text-muted-foreground" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'currentColor' }} className="text-muted-foreground" />
                    <Radar name="Qwen3 8B" dataKey="qwen" stroke={COLORS.qwen} fill={COLORS.qwen} fillOpacity={0.2} strokeWidth={2} />
                    <Radar name="Llama 3.1 8B" dataKey="llama" stroke={COLORS.llama} fill={COLORS.llama} fillOpacity={0.2} strokeWidth={2} />
                    <Radar name="Ministral 3 8B" dataKey="ministral" stroke={COLORS.ministral} fill={COLORS.ministral} fillOpacity={0.2} strokeWidth={2} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
                <p className="text-muted-foreground text-xs text-center mt-2">Higher = better (latencies inverted, consistency = 100 - σ)</p>
              </CardContent>
            </Card>

            {/* Winner Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-purple-500/5 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-500 dark:text-purple-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Qwen3 8B Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>✓ Fastest median UPL (280ms)</li>
                    <li>✓ Fastest median TTSR (277ms)</li>
                    <li>✓ Lowest STT variance (σ=27ms)</li>
                    <li>✓ Best short-question performance</li>
                    <li className="text-muted-foreground flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Has one 929ms outlier</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-cyan-500/5 border-cyan-500/30">
                <CardHeader>
                  <CardTitle className="text-cyan-500 dark:text-cyan-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    Llama 3.1 8B Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>✓ Lowest UPL variance (σ=27ms)</li>
                    <li>✓ Tightest P5-P95 range (69ms)</li>
                    <li>✓ No extreme outliers (max 378ms)</li>
                    <li>✓ Most concise responses</li>
                    <li className="text-muted-foreground flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> 4 failed long-question runs</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-amber-500/5 border-amber-500/30">
                <CardHeader>
                  <CardTitle className="text-amber-500 dark:text-amber-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Ministral 3 8B Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>✓ 100% success rate (30/30)</li>
                    <li>✓ No STT failures</li>
                    <li>✓ Most verbose responses</li>
                    <li>✓ Good long-question handling</li>
                    <li className="text-muted-foreground flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Slowest overall (320ms median)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Latency Tab */}
        {activeTab === 'latency' && (
          <>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Median Latency Comparison (Lower = Better)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={comparisonBarData} layout="vertical" barGap={2}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis type="number" tick={{ fill: 'currentColor' }} className="text-muted-foreground" domain={[0, 550]} />
                    <YAxis dataKey="metric" type="category" tick={{ fill: 'currentColor' }} className="text-muted-foreground" width={100} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }}
                      formatter={(v: number) => [`${v.toFixed(1)}ms`]}
                    />
                    <Legend />
                    <Bar dataKey="qwen" name="Qwen3 8B" fill={COLORS.qwen} radius={[0, 4, 4, 0]} />
                    <Bar dataKey="llama" name="Llama 3.1 8B" fill={COLORS.llama} radius={[0, 4, 4, 0]} />
                    <Bar dataKey="ministral" name="Ministral 3 8B" fill={COLORS.ministral} radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Short Question UPL per Run</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={shortLineData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="run" tick={{ fill: 'currentColor' }} className="text-muted-foreground" />
                      <YAxis tick={{ fill: 'currentColor' }} className="text-muted-foreground" domain={[240, 340]} />
                      <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} formatter={(v) => [`${Number(v).toFixed(1)}ms`]} />
                      <Legend />
                      <Line type="monotone" dataKey="qwen" name="Qwen3" stroke={COLORS.qwen} strokeWidth={2} dot={{ fill: COLORS.qwen, r: 4 }} />
                      <Line type="monotone" dataKey="llama" name="Llama3.1" stroke={COLORS.llama} strokeWidth={2} dot={{ fill: COLORS.llama, r: 4 }} />
                      <Line type="monotone" dataKey="ministral" name="Ministral3" stroke={COLORS.ministral} strokeWidth={2} dot={{ fill: COLORS.ministral, r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Medium Question UPL per Run</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={mediumLineData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis dataKey="run" tick={{ fill: 'currentColor' }} className="text-muted-foreground" />
                      <YAxis tick={{ fill: 'currentColor' }} className="text-muted-foreground" domain={[250, 450]} />
                      <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} formatter={(v) => [`${Number(v).toFixed(1)}ms`]} />
                      <Legend />
                      <Line type="monotone" dataKey="qwen" name="Qwen3" stroke={COLORS.qwen} strokeWidth={2} dot={{ fill: COLORS.qwen, r: 4 }} />
                      <Line type="monotone" dataKey="llama" name="Llama3.1" stroke={COLORS.llama} strokeWidth={2} dot={{ fill: COLORS.llama, r: 4 }} />
                      <Line type="monotone" dataKey="ministral" name="Ministral3" stroke={COLORS.ministral} strokeWidth={2} dot={{ fill: COLORS.ministral, r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Latency Summary by Question Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-lg p-4 bg-green-500/10 border border-green-500/30">
                    <h4 className="text-green-600 dark:text-green-400 font-medium mb-2">Short Questions (~2.3s)</h4>
                    <p className="text-muted-foreground text-xs mb-3">&ldquo;What&#39;s the last thing that genuinely surprised you?&rdquo;</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between"><span className="text-purple-500 dark:text-purple-400">Qwen3</span><span className="font-medium">278ms</span></div>
                      <div className="flex justify-between"><span className="text-amber-500 dark:text-amber-400">Ministral3</span><span>296ms</span></div>
                      <div className="flex justify-between"><span className="text-cyan-500 dark:text-cyan-400">Llama3.1</span><span>306ms</span></div>
                    </div>
                  </div>
                  <div className="rounded-lg p-4 bg-yellow-500/10 border border-yellow-500/30">
                    <h4 className="text-yellow-600 dark:text-yellow-400 font-medium mb-2">Medium Questions (~8.4s)</h4>
                    <p className="text-muted-foreground text-xs mb-3">&ldquo;If you could redesign one everyday object...&rdquo;</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between"><span className="text-purple-500 dark:text-purple-400">Qwen3</span><span className="font-medium">291ms</span></div>
                      <div className="flex justify-between"><span className="text-cyan-500 dark:text-cyan-400">Llama3.1</span><span>320ms</span></div>
                      <div className="flex justify-between"><span className="text-amber-500 dark:text-amber-400">Ministral3</span><span>378ms</span></div>
                    </div>
                  </div>
                  <div className="rounded-lg p-4 bg-red-500/10 border border-red-500/30">
                    <h4 className="text-red-600 dark:text-red-400 font-medium mb-2">Long Questions (~16.8s)</h4>
                    <p className="text-muted-foreground text-xs mb-3">&ldquo;How would this reshape education, careers...&rdquo;</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between"><span className="text-purple-500 dark:text-purple-400">Qwen3</span><span>~650ms*</span></div>
                      <div className="flex justify-between"><span className="text-amber-500 dark:text-amber-400">Ministral3</span><span>~652ms*</span></div>
                      <div className="flex justify-between"><span className="text-cyan-500 dark:text-cyan-400">Llama3.1</span><span className="text-muted-foreground">null**</span></div>
                    </div>
                    <p className="text-muted-foreground text-xs mt-2">* Only measured when no streaming overlap<br/>** Audio started before speech ended</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Variance Tab */}
        {activeTab === 'variance' && (
          <>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Standard Deviation Comparison (Lower = More Consistent)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={varianceData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="metric" tick={{ fill: 'currentColor' }} className="text-muted-foreground" />
                    <YAxis tick={{ fill: 'currentColor' }} className="text-muted-foreground" />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} formatter={(v) => [`${Number(v).toFixed(1)}ms`]} />
                    <Legend />
                    <Bar dataKey="qwen" name="Qwen3 8B" fill={COLORS.qwen} />
                    <Bar dataKey="llama" name="Llama 3.1 8B" fill={COLORS.llama} />
                    <Bar dataKey="ministral" name="Ministral 3 8B" fill={COLORS.ministral} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-muted-foreground text-sm text-center mt-2">Llama 3.1 dominates consistency — 5x lower UPL variance than Qwen3 and Ministral3</p>
              </CardContent>
            </Card>

            {/* P5/P95 Range Tables */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    Qwen3 8B - P5/P95 Range
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-muted-foreground border-b border-border">
                        <th className="text-left py-2">Metric</th>
                        <th className="text-right">P5</th>
                        <th className="text-right">P95</th>
                        <th className="text-right">Spread</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2">UPL</td>
                        <td className="text-right">266ms</td>
                        <td className="text-right">370ms</td>
                        <td className="text-right text-yellow-500 dark:text-yellow-400">104ms</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">TTSR</td>
                        <td className="text-right">206ms</td>
                        <td className="text-right">543ms</td>
                        <td className="text-right text-red-500 dark:text-red-400">337ms</td>
                      </tr>
                      <tr>
                        <td className="py-2">STT FTL</td>
                        <td className="text-right">446ms</td>
                        <td className="text-right">518ms</td>
                        <td className="text-right text-green-500 dark:text-green-400">72ms</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    Llama 3.1 8B - P5/P95 Range
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-muted-foreground border-b border-border">
                        <th className="text-left py-2">Metric</th>
                        <th className="text-right">P5</th>
                        <th className="text-right">P95</th>
                        <th className="text-right">Spread</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2">UPL</td>
                        <td className="text-right">277ms</td>
                        <td className="text-right">346ms</td>
                        <td className="text-right text-green-500 dark:text-green-400">69ms</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">TTSR</td>
                        <td className="text-right">254ms</td>
                        <td className="text-right">368ms</td>
                        <td className="text-right text-green-500 dark:text-green-400">114ms</td>
                      </tr>
                      <tr>
                        <td className="py-2">STT FTL</td>
                        <td className="text-right">448ms</td>
                        <td className="text-right">610ms</td>
                        <td className="text-right text-yellow-500 dark:text-yellow-400">162ms</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    Ministral 3 8B - P5/P95 Range
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-muted-foreground border-b border-border">
                        <th className="text-left py-2">Metric</th>
                        <th className="text-right">P5</th>
                        <th className="text-right">P95</th>
                        <th className="text-right">Spread</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2">UPL</td>
                        <td className="text-right">269ms</td>
                        <td className="text-right">436ms</td>
                        <td className="text-right text-yellow-500 dark:text-yellow-400">167ms</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">TTSR</td>
                        <td className="text-right">211ms</td>
                        <td className="text-right">438ms</td>
                        <td className="text-right text-yellow-500 dark:text-yellow-400">227ms</td>
                      </tr>
                      <tr>
                        <td className="py-2">STT FTL</td>
                        <td className="text-right">458ms</td>
                        <td className="text-right">546ms</td>
                        <td className="text-right text-green-500 dark:text-green-400">88ms</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Min/Max Extremes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-muted-foreground border-b border-border">
                        <th className="text-left py-3 px-3">Model</th>
                        <th className="text-right px-3">Min UPL</th>
                        <th className="text-right px-3">Max UPL</th>
                        <th className="text-right px-3">Range</th>
                        <th className="text-center px-3">Verdict</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-3 text-purple-500 dark:text-purple-400 font-medium">Qwen3 8B</td>
                        <td className="text-right px-3 text-green-500 dark:text-green-400">265ms</td>
                        <td className="text-right px-3 text-red-500 dark:text-red-400">929ms</td>
                        <td className="text-right px-3 text-red-500 dark:text-red-400">664ms</td>
                        <td className="text-center px-3 text-yellow-500 dark:text-yellow-400"><span className="flex items-center justify-center gap-1"><AlertTriangle className="w-3 h-3" /> Wide</span></td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-3 text-cyan-500 dark:text-cyan-400 font-medium">Llama 3.1 8B</td>
                        <td className="text-right px-3">275ms</td>
                        <td className="text-right px-3 text-green-500 dark:text-green-400">378ms</td>
                        <td className="text-right px-3 text-green-500 dark:text-green-400">103ms</td>
                        <td className="text-center px-3 text-green-500 dark:text-green-400"><span className="flex items-center justify-center gap-1"><CheckCircle className="w-3 h-3" /> Tight</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 text-amber-500 dark:text-amber-400 font-medium">Ministral 3 8B</td>
                        <td className="text-right px-3 text-green-500 dark:text-green-400">259ms</td>
                        <td className="text-right px-3 text-red-500 dark:text-red-400">988ms</td>
                        <td className="text-right px-3 text-red-500 dark:text-red-400">729ms</td>
                        <td className="text-center px-3 text-yellow-500 dark:text-yellow-400"><span className="flex items-center justify-center gap-1"><AlertTriangle className="w-3 h-3" /> Wide</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Distribution Tab */}
        {activeTab === 'distribution' && (
          <>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>UPL Distribution (All Measured Runs)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={uplDistribution}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="range" tick={{ fill: 'currentColor' }} className="text-muted-foreground" label={{ value: 'UPL Range (ms)', position: 'insideBottom', offset: -5, fill: 'currentColor' }} />
                    <YAxis tick={{ fill: 'currentColor' }} className="text-muted-foreground" label={{ value: 'Count', angle: -90, position: 'insideLeft', fill: 'currentColor' }} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                    <Legend />
                    <Bar dataKey="qwen" name="Qwen3 8B" fill={COLORS.qwen} />
                    <Bar dataKey="llama" name="Llama 3.1 8B" fill={COLORS.llama} />
                    <Bar dataKey="ministral" name="Ministral 3 8B" fill={COLORS.ministral} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-muted-foreground text-sm text-center mt-2">
                  Qwen3 clusters in 270-290ms • Llama3.1 clusters in 300-330ms • Ministral3 spreads wider
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Distribution Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Target className="w-8 h-8 text-purple-500 dark:text-purple-400" />
                    </div>
                    <h4 className="text-purple-500 dark:text-purple-400 font-medium mb-1">Qwen3 8B</h4>
                    <p className="text-muted-foreground text-sm">Left-skewed distribution</p>
                    <p className="text-muted-foreground/70 text-xs mt-2">Most runs between 265-290ms with rare outliers up to 929ms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <Activity className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />
                    </div>
                    <h4 className="text-cyan-500 dark:text-cyan-400 font-medium mb-1">Llama 3.1 8B</h4>
                    <p className="text-muted-foreground text-sm">Normal distribution</p>
                    <p className="text-muted-foreground/70 text-xs mt-2">Tight clustering around 300-320ms, no extreme values</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-amber-500 dark:text-amber-400" />
                    </div>
                    <h4 className="text-amber-500 dark:text-amber-400 font-medium mb-1">Ministral 3 8B</h4>
                    <p className="text-muted-foreground text-sm">Right-skewed distribution</p>
                    <p className="text-muted-foreground/70 text-xs mt-2">Wide spread from 259-988ms, higher values on medium questions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Full Statistics Table</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-muted-foreground border-b border-border">
                        <th className="text-left py-3 px-3">Metric</th>
                        <th className="text-right px-3">Qwen3 8B</th>
                        <th className="text-right px-3">Llama 3.1 8B</th>
                        <th className="text-right px-3">Ministral 3 8B</th>
                        <th className="text-center px-3">Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      <MetricRow label="UPL Median" qwen={280.37} llama={308.43} ministral={319.50} highlight />
                      <MetricRow label="UPL Mean" qwen={317.89} llama={313.72} ministral={365.75} />
                      <MetricRow label="UPL σ (variance)" qwen={139.10} llama={26.50} ministral={148.97} />
                      <MetricRow label="UPL P5" qwen={265.89} llama={276.70} ministral={268.90} />
                      <MetricRow label="UPL P95" qwen={369.74} llama={345.55} ministral={435.63} />
                      <MetricRow label="UPL Min" qwen={265.40} llama={275.09} ministral={258.66} />
                      <MetricRow label="UPL Max" qwen={928.80} llama={378.49} ministral={987.77} />
                      <MetricRow label="TTSR Median" qwen={277.0} llama={303.5} ministral={307.5} highlight />
                      <MetricRow label="TTFT Median" qwen={194.5} llama={226.0} ministral={243.5} />
                      <MetricRow label="STT FTL Mean" qwen={480.39} llama={499.04} ministral={492.70} />
                      <MetricRow label="Success Rate" qwen={93.3} llama={86.7} ministral={100.0} unit="%" lower={false} />
                      <MetricRow label="Median Tokens" qwen={80.5} llama={76.5} ministral={136.5} unit="" />
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Raw Data Tab */}
        {activeTab === 'raw-data' && (
          <Card>
            <CardHeader>
              <CardTitle>Complete Benchmark Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-muted-foreground border-b border-border">
                      <th className="text-left py-3 px-3">Metric</th>
                      <th className="text-right px-3">Qwen3 8B</th>
                      <th className="text-right px-3">Llama 3.1 8B</th>
                      <th className="text-right px-3">Ministral 3 8B</th>
                      <th className="text-center px-3">Winner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-muted/50"><td colSpan={5} className="py-2 px-3 font-semibold text-muted-foreground">User Perceived Latency</td></tr>
                    <MetricRow label="  Mean" qwen={317.89} llama={313.72} ministral={365.75} />
                    <MetricRow label="  Median" qwen={280.37} llama={308.43} ministral={319.50} highlight />
                    <MetricRow label="  Std Dev" qwen={139.10} llama={26.50} ministral={148.97} />
                    <MetricRow label="  Min" qwen={265.40} llama={275.09} ministral={258.66} />
                    <MetricRow label="  Max" qwen={928.80} llama={378.49} ministral={987.77} />
                    <MetricRow label="  P5" qwen={265.89} llama={276.70} ministral={268.90} />
                    <MetricRow label="  P95" qwen={369.74} llama={345.55} ministral={435.63} />
                    
                    <tr className="bg-muted/50"><td colSpan={5} className="py-2 px-3 font-semibold text-muted-foreground">LLM Metrics</td></tr>
                    <MetricRow label="  TTSR Median" qwen={277.0} llama={303.5} ministral={307.5} />
                    <MetricRow label="  TTSR Std Dev" qwen={144.01} llama={49.30} ministral={142.40} />
                    <MetricRow label="  TTFT Median" qwen={194.5} llama={226.0} ministral={243.5} />
                    <MetricRow label="  TTFT Std Dev" qwen={603.77} llama={401.25} ministral={485.38} />
                    <MetricRow label="  Total Response Time" qwen={1723.71} llama={1331.04} ministral={2250.63} />
                    
                    <tr className="bg-muted/50"><td colSpan={5} className="py-2 px-3 font-semibold text-muted-foreground">STT Metrics</td></tr>
                    <MetricRow label="  FTL Mean" qwen={480.39} llama={499.04} ministral={492.70} />
                    <MetricRow label="  FTL Std Dev" qwen={27.06} llama={46.51} ministral={35.10} />
                    <MetricRow label="  Final Latency" qwen={1.45} llama={1.56} ministral={1.56} />
                    
                    <tr className="bg-muted/50"><td colSpan={5} className="py-2 px-3 font-semibold text-muted-foreground">Token Generation</td></tr>
                    <MetricRow label="  Mean Tokens" qwen={161.4} llama={123.0} ministral={228.0} unit="" />
                    <MetricRow label="  Median Tokens" qwen={80.5} llama={76.5} ministral={136.5} unit="" />
                    <MetricRow label="  Token Std Dev" qwen={209.05} llama={163.83} ministral={238.64} unit="" />
                    
                    <tr className="bg-muted/50"><td colSpan={5} className="py-2 px-3 font-semibold text-muted-foreground">Reliability</td></tr>
                    <MetricRow label="  Total Runs" qwen={30} llama={30} ministral={30} unit="" lower={false} />
                    <MetricRow label="  Successful Runs" qwen={28} llama={26} ministral={30} unit="" lower={false} />
                    <MetricRow label="  Success Rate" qwen={93.3} llama={86.7} ministral={100.0} unit="%" lower={false} />
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recommendation Box */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5" /> Thesis Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="text-purple-500 dark:text-purple-400 font-semibold mb-2">Best for Speed</h4>
                <p>Qwen3 8B — 280ms median UPL, fastest across all question types. Trade-off: occasional outliers up to 929ms.</p>
              </div>
              <div>
                <h4 className="text-cyan-500 dark:text-cyan-400 font-semibold mb-2">Best for Consistency</h4>
                <p>Llama 3.1 8B — σ=27ms variance, tightest P5-P95 range (69ms). Trade-off: slightly slower median (308ms).</p>
              </div>
              <div>
                <h4 className="text-amber-500 dark:text-amber-400 font-semibold mb-2">Best for Reliability</h4>
                <p>Ministral 3 8B — 100% success rate, no STT failures. Trade-off: slowest median (320ms) and verbose responses.</p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="text-muted-foreground text-sm">
              <strong className="text-foreground">Overall:</strong> All three models achieve sub-440ms P95 UPL for conversational turns — well within the sub-1s target. 
              For production use, <strong className="text-cyan-500 dark:text-cyan-400">Llama 3.1 8B</strong> offers the best UX due to predictable latency, 
              while <strong className="text-purple-500 dark:text-purple-400">Qwen3 8B</strong> is optimal when absolute speed matters more than consistency.
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>FastTalk Benchmark Suite v1.0 • 30 runs per model • 3 question types</p>
          <p className="mt-1">Hardware: Local GPU • Whisper large-v3-turbo • Kokoro TTS • Q4 Quantization</p>
        </div>
      </div>
    </div>
  );
}