# Project arch r1: each project's architecture drawn on its trace

Status: a-across approved and built (2026-10-06, `design/approved/project-arch-across.png`). b and c
were not picked and are deleted; git history keeps them. The stations live in `lib/data/flows.ts`, the
drawing in `components/landing/flow.tsx`.

A project page (`/projects/<id>`, from `pages-r1.md` b-project) is a lede, a facts column and five
sections of text. The trace only runs straight down the left lane with a burst per section, so nothing
on the page shows how the thing works. On the landing page FastTalk's pipeline is drawn on the trace
(`design/approved/landing-s2-work.png`): the line runs through stations, each one a small drawing of
what happens there, with a two-line label under it. This round mocks three ways to give every project
page its own drawing like that, desktop and phone on one board, on `/projects/wikillm`. In code each
project module would carry a short list of stations (and, for c, one loop).

wikillm's flow, from its module: raw sources (notes, PDFs, links dropped in a folder) → the ingest
skill in Claude Code or Codex → a compiled markdown wiki (one-concept articles, [[wikilinks]],
frontmatter) → query, which reads the compiled articles and walks their links. Lint checks the wiki for
broken links, orphans and contradictions and feeds fixes back into it.

References attached with -i, in this order: a screenshot of the current page
(`design/screens/project.1440.png`, for its content only, not its layout); the approved landing hero
(`design/approved/landing-desktop.png`) for colours, type, header and the trace; the approved Work
section (`design/approved/landing-s2-work.png`) for how a pipeline is drawn on the trace.

## Shared

A clean presentation board, 1536x1024, flat deep graphite #0A0B0C. On the left, about 1080 px wide, a
flat screenshot crop of a desktop web page, starting with its header (no browser chrome around it). On
the right, one iPhone-style screen (390x844 proportions, thin dark bezel, rounded corners), straight on,
no perspective, no hands, showing the same page on a phone. Even gaps, nothing else on the board, no
watermark.

The website is Berkay Orhan's portfolio in the look of the second attached image. Header as there:
"Berkay Orhan" in the grotesk at the left; "Work", "Research", "Experience", "About" and "EN / SV" in
small monospace; a lime "Contact" button with graphite text at the right. On the phone the header is
"Berkay Orhan", the lime "Contact" button and a two-line menu mark.

The page is the project page for wikillm, a command-line tool and agent plugin that compiles raw notes
into a linked markdown wiki that AI coding agents read. Its top, as in the first attached image:
"← All projects" in dim monospace, a small lime monospace index "PROJECT / 2026", the headline
"wikillm" in the grotesk with a dim monospace subtitle "LLM-Maintained Knowledge Bases", the lede
"TypeScript CLI and agent plugin that compiles raw sources into cross-linked Obsidian markdown wikis
for Claude Code and Codex, without a vector-store RAG stack.", and at the right a facts column of plain
label and value pairs in monospace ("type  CLI + agent plugin", "agent hosts  Claude Code and Codex",
"knowledge model  Compiled markdown wiki") with the link "Source ↗" underlined. Sections further down
have a small lime waveform burst on the trace and a dim number ("01 / Overview").

The trace: one thin lime line, about 2 px, runs down the far left of the page (about 2 percent in on
desktop, 20 px in on the phone), like an oscilloscope trace. The architecture is drawn on it exactly in
the manner of the third attached image: the line runs through stations, and each station is a small
lime drawing made of the line itself that shows what happens there, with a thin leader line dropping to
a two-line monospace label (name in off-white, what it does in dim). The stations for wikillm:
"raw sources / notes, PDFs, links" drawn as a loose scatter of short lime dashes of different lengths
gathering into the line; "ingest / Claude Code or Codex" drawn as a dense waveform burst; "compiled wiki
/ one concept per page" drawn as a small cluster of six or seven lime dots joined by thin straight
links, like a tiny graph; "query / reads the wiki first" drawn as the line fanning into three short
branches that rejoin. Small lime dots where the line enters and leaves each station.

Palette: background deep graphite #0F1012 with a very subtle grain, text off-white #ECEAE4, dim text
#8A8C90, faint #2A2D31 for rules and guide lines, one accent acid lime #C8F542. No other hues, no
gradients, no glow, no gloss, no shadows, no 3D. Type: headlines in a geometric grotesk like Space
Grotesk 600 with tight tracking; everything else in a monospace like JetBrains Mono. All text in
English, crisp and legible.

Composition: editorial and asymmetric, big contrast in scale, lots of empty graphite. Information is
drawn on the line or set as type, never boxed.

Must not appear: cards, boxes or panels with borders or fills, flowchart rectangles or rounded nodes,
arrows with arrowheads, icons (no file, folder, database, robot or magnifier icons), tag pills or chips,
emoji, logos, blue links, coloured buttons other than the one lime button style, gradients, glowing
lines, any person.

## a-across

The desktop crop shows the page from the headline down to the start of "01 / Overview". Under the lede
and facts column, the trace leaves the left lane with a smooth curve, runs horizontally right across
the whole page through the four stations, evenly spaced, with their labels under them, and curves back
down into the left lane just before "01 / Overview" begins with its burst. One line of dim monospace
sits above the run at the left, hung off the line with a thin leader: "How it works: sources go in
once, agents read the compiled wiki after that." The drawing spans the page wide, like the FastTalk
pipeline in the third attached image, with generous empty graphite above and below it.

On the phone: the trace stays in its lane 20 px from the left and the stations run top to bottom on it,
each drawing turned to run vertically, each label to the right of its station at 48 px in, one under
the other, between the lede and "01 / Overview".

## b-solution

The drawing replaces the text of the Solution section instead of sitting under the lede. The desktop
crop shows "03 / Challenges" ending at the top, then "04 / Solution" with its burst on the trace. From
that burst the trace runs straight down the left lane and the four stations sit on the lane itself,
one under the other, about 120 px apart, each drawing running vertically. To the right of each
station, starting at the text column, its label in the two-line style and then one sentence of
off-white monospace saying how it was built, for example next to "compiled wiki": "Articles carry YAML
frontmatter and provenance, and every ingest is a git commit." The section's old paragraph is gone;
the station sentences are the solution. "05 / Outcome" begins under the last station.

On the phone: the same, top to bottom in the lane, label and sentence to the right of each station at
48 px in.

## c-loop

As a-across, but the drawing is a small graph, not a straight run, like the retrieval fan-out on the
landing page. The trace leaves the left lane under the lede and runs right through "raw sources",
"ingest" and "compiled wiki". After "compiled wiki" it forks: the upper branch runs on through "query /
reads the wiki first" and returns to the left lane; the lower branch runs through a fifth station,
"lint / links, orphans, contradictions", drawn as a row of short evenly spaced lime ticks with one
missing, and then curves back left and up to rejoin the line just before "compiled wiki", closing a
loop under the run. The loop is the point: the wiki is kept healthy, not written once.

On the phone: the stations run top to bottom in the lane; after "compiled wiki" the lint station sits
on a short side branch to the right that curves back up into the lane above "compiled wiki", and the
lane continues down through "query".
