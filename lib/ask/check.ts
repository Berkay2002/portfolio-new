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
assert.ok(ids("KPIs").includes("oversee")); // a word only in a cover's caption
assert.ok(ids("reload-plugins").includes("wikillm")); // an install command under a project link
assert.deepEqual(ids("Which projects use Java?"), []); // "java" is not "javascript"
assert.ok(ids("berkayorhan@hotmail.se").includes("contact")); // the address itself finds the contact page
assert.ok(profile.includes("(2025;")); // every project's year, for list questions
assert.deepEqual(ids("Which projects use Go?"), []); // "go" is a whole word, not "Google"
assert.ok(ids("Which projects are from 2025?").length > 0); // the year a project started
assert.ok(excerpt("statsforspotify").includes("github.com/Berkay2002/statsforspotify")); // the source link, always
assert.ok(excerpt("wikillm").includes("npmjs.com/package/wikillm")); // a project link's address, not just its label
assert.ok(excerpt("fasttalk").includes("github.com/Berkay2002/fasttalk-stt-microservice")); // a service's repository
assert.ok(askDocs.filter((d) => d.kind === "paper").every((d) => excerpt(d.id).includes("PDF: "))); // where to download it
// Its own PDF path finds it (a project that links the same PDF may rank first).
for (const d of askDocs.filter((d) => d.kind === "paper")) assert.ok(ids(excerpt(d.id).match(/PDF: (\S+)\./)![1]!).includes(d.id), d.id);
assert.ok(ids("Jonatan Ebenholm").length > 0); // a coauthor, as /papers lists them
assert.ok(ids("Where has he worked?").includes("experience")); // "worked" is not a stop word
assert.ok(ids("Var har han jobbat?").includes("experience"));
assert.equal(ids("https://github.com/Berkay2002/statsforspotify")[0], "statsforspotify"); // a page's own address finds it
assert.ok(ids("Graph Theory metadata").includes("litheplan")); // a screenshot's alt text
assert.ok(ids("download add-on").includes("solar-system")); // the main link's own label
assert.ok(!ids("Vilka projekt använder LangGraph?").includes("statsforspotify")); // "använder" is a stop word
assert.ok(!ids("Which projects use Bun?").includes("wikillm")); // "Bun" is not "bundle"
assert.ok(profile.includes("Next.js")); // every project's stack, for list questions
assert.ok(ids("Where is he working?").includes("experience")); // an inflected question finds the base word
assert.ok(ids("What did he study?").includes("experience")); // "study" finds "studied"
assert.ok(!ids("Which project uses LangGraph?").includes("statsforspotify")); // "uses" is a stop word
assert.deepEqual(ids("Which projects use AudioWorklet API?"), ["fasttalk"]);
assert.ok(!ids("Which projects use Web Audio API?").includes("statsforspotify")); // every rarer word, when a page has them all // "API" alone doesn't let a page in
assert.ok(excerpt("voxel-project", "What challenges did VoxelCraft face?").includes("Challenge: ")); // the section asked about
assert.ok(excerpt("contact").includes("linkedin.com/in/"));
assert.ok(!ids("Which projects use React?").includes("paper-when-agentic-workflows-help")); // "ReAct" is not React
assert.equal(ids("Where can I download his CV?")[0], "contact");
assert.deepEqual(ids("Which projects use React Query?").sort(), ["animatch", "statsforspotify"]); // a tech's name is one phrase, not every React project
assert.equal(ids("Vad handlar hans exjobb om?")[0], "paper-when-agentic-workflows-help");
assert.equal(ids("Var pluggade han?")[0], "experience");
assert.ok(ids("What papers has he written?").includes("paper-when-agentic-workflows-help"));
assert.deepEqual(ids("Hej!"), []); // a greeting finds no page // the address, not just the word
assert.ok(excerpt("voxel-project", "How many lines is VoxelCraft?").includes("340k")); // the model reads what matched

// Everything that leaves the server: the browser's index, and the profile and excerpts the model reads. None of
// the benchmark's measured values (the non-integer numbers, like a pass rate of 71.2) may appear in it.
const index = JSON.stringify(askDocs);
const sent = [index, profile, ...askDocs.map((d) => excerpt(d.id))].join("\n");
const values = whenAgenticWorkflowsPaper.benchmark.mainResults.flatMap((row) => Object.values(row).filter((v) => typeof v === "number" && !Number.isInteger(v)));
assert.ok(values.length > 0);
for (const v of values) assert.ok(!new RegExp(`(^|[^0-9.])${String(v).replace(".", "[.]")}(?![0-9])`).test(sent), `benchmark value ${v} leaks`);
console.log("ask: ok", { docs: askDocs.length, bytes: index.length });
