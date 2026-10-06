import { animatchPaper } from "./animatch-paper";
import { syngraphPaper } from "./syngraph-paper";
import { whenAgenticWorkflowsPaper } from "./when-agentic-workflows-paper";

// The papers on /papers, the thesis first. The year is when the work was done (the repository's
// creation date for the project papers).
export const papers = [
  { id: "when-agentic-workflows-help", paper: whenAgenticWorkflowsPaper, kind: "thesis", year: 2026 },
  { id: "researcher", paper: syngraphPaper, kind: "project", year: 2025, project: "researcher" },
  { id: "animatch", paper: animatchPaper, kind: "project", year: 2024, project: "animatch" },
] as const;
