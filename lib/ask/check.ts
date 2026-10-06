// Run with `bun lib/ask/check.ts`: the search finds what it should, and the index holds nothing from the
// thesis benchmark data.
import assert from "node:assert/strict";

import { whenAgenticWorkflowsPaper } from "@/lib/data/when-agentic-workflows-paper";
import { askDocs, excerpt, profile } from "./docs";
import { search } from "./search";

const ids = (q: string) => search(askDocs, q).map((h) => h.doc.id);
assert.ok(ids("Has he shipped anything with voice?").includes("fasttalk"));
assert.ok(ids("What did he do at Ericsson?").includes("experience"));
assert.ok(ids("Vad gjorde han på Ericsson?").includes("experience"));
assert.ok(ids("Which projects use LangGraph?").includes("researcher"));
assert.ok(ids("What has he built with AI?").length > 0); // two-letter terms count
assert.deepEqual(ids("has he the and"), []);
assert.ok(ids("trådsäker").includes("voxel-project")); // a word only in a project's Swedish challenges
assert.ok(ids("renderingspass").includes("voxel-project")); // a station on the project's trace
assert.ok(excerpt("voxel-project", "How many lines is VoxelCraft?").includes("340k")); // the model reads what matched

// Everything that leaves the server: the browser's index, and the profile and excerpts the model reads. None of
// the benchmark's measured values (the non-integer numbers, like a pass rate of 71.2) may appear in it.
const index = JSON.stringify(askDocs);
const sent = [index, profile, ...askDocs.map((d) => excerpt(d.id))].join("\n");
const values = whenAgenticWorkflowsPaper.benchmark.mainResults.flatMap((row) => Object.values(row).filter((v) => typeof v === "number" && !Number.isInteger(v)));
assert.ok(values.length > 0);
for (const v of values) assert.ok(!new RegExp(`(^|[^0-9.])${String(v).replace(".", "[.]")}(?![0-9])`).test(sent), `benchmark value ${v} leaks`);
console.log("ask: ok", { docs: askDocs.length, bytes: index.length });
