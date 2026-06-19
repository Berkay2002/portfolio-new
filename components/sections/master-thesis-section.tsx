"use client";

import { ArrowRight, BarChart3, BookOpen, Building2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/layout/language-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PDFViewerPopup } from "@/components/ui/pdf-viewer-popup";
import { SectionHeading } from "@/components/ui/section-heading";
import { whenAgenticWorkflowsPaper } from "@/lib/data/when-agentic-workflows-paper";

const THESIS_STATS = [
  {
    value: "52",
    labelKey: "sections.thesis.scenarios",
    detailKey: "sections.thesis.scenariosDetail",
  },
  {
    value: "11,366",
    labelKey: "sections.thesis.testCases",
    detailKey: "sections.thesis.testCasesDetail",
  },
  {
    value: "2",
    labelKey: "sections.thesis.workflows",
    detailKey: "sections.thesis.workflowsDetail",
  },
  {
    value: "3",
    labelKey: "sections.thesis.models",
    detailKey: "sections.thesis.modelsDetail",
  },
  {
    value: "3",
    labelKey: "sections.thesis.metricFamilies",
    detailKey: "sections.thesis.metricFamiliesDetail",
  },
] as const;

export function MasterThesisSection() {
  const { t } = useLanguage();

  return (
    <Container className="pt-0" id="master-thesis">
      <SectionHeading title={t("sections.thesis.title")} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-start">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Building2 className="h-4 w-4" />
            <span>{t("sections.thesis.collaboration")}</span>
          </div>

          <div className="space-y-4">
            <p className="max-w-3xl font-medium text-2xl leading-tight sm:text-3xl">
              {t("sections.thesis.summary")}
            </p>
            <h3 className="max-w-3xl text-muted-foreground text-lg leading-relaxed">
              {whenAgenticWorkflowsPaper.title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/papers/when-agentic-workflows-help">
                <BarChart3 className="h-4 w-4" />
                {t("sections.thesis.exploreBenchmark")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <PDFViewerPopup
              buttonVariant="outline-solid"
              fileName={`${whenAgenticWorkflowsPaper.title} - ${t(
                "sections.thesis.title"
              )}`}
              pdfUrl={whenAgenticWorkflowsPaper.pdfUrl}
              triggerLabel={t("sections.thesis.readThesis")}
            />
          </div>
        </motion.div>

        <motion.div
          className="border-t lg:border-t-0 lg:border-l lg:pl-8"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 py-4 text-muted-foreground text-sm lg:pt-0">
            <BookOpen className="h-4 w-4" />
            <span>{t("sections.thesis.evidence")}</span>
          </div>
          <dl className="divide-y">
            {THESIS_STATS.map((stat) => (
              <div
                className="grid gap-3 py-4 sm:grid-cols-[7rem_1fr] lg:grid-cols-1 xl:grid-cols-[7rem_1fr]"
                key={stat.labelKey}
              >
                <dt>
                  <span className="block font-semibold text-2xl tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {t(stat.labelKey)}
                  </span>
                </dt>
                <dd className="text-muted-foreground text-sm leading-relaxed">
                  {t(stat.detailKey)}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </Container>
  );
}
