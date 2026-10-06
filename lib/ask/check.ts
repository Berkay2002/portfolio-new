// Run with `bun lib/ask/check.ts`: the search finds what it should, and the index holds nothing from the
// thesis benchmark data.
import assert from "node:assert/strict";

import { whenAgenticWorkflowsPaper } from "@/lib/data/when-agentic-workflows-paper";
import { askDocs } from "./docs";
import { search } from "./search";

const ids = (q: string) => search(askDocs, q).map((h) => h.doc.id);
assert.ok(ids("Has he shipped anything with voice?").includes("fasttalk"));
assert.ok(ids("What did he do at Ericsson?").includes("experience"));
assert.ok(ids("Vad gjorde han på Ericsson?").includes("experience"));
assert.ok(ids("Which projects use LangGraph?").includes("researcher"));
assert.ok(ids("What has he built with AI?").length > 0); // two-letter terms count
assert.deepEqual(ids("has he the and"), []);

const index = JSON.stringify(askDocs);
for (const row of whenAgenticWorkflowsPaper.benchmark.mainResults) assert.ok(!index.includes(JSON.stringify(row)));
console.log("ask: ok", { docs: askDocs.length, bytes: index.length });
