# Pages r1: the pages outside the landing page

Status: approved and built (2026-10-06). See `design/README.md` for what the build left out.

The landing page and `/photography` are in the new graphite and lime look. The other pages still use
the old white template with cards, tag pills, icons and coloured charts: `/projects`, `/projects/<id>`,
`/papers`, `/papers/<id>`, `/playground`, `/playground/tdde19` (the FastTalk benchmark) and the 404
page. This round mocks each of them in the landing's language, desktop and phone on one board.

References attached with -i, in this order: a screenshot of the current page from
`design/screens/before/` (for its content only,
not its look); the approved landing hero (`design/approved/landing-desktop.png`) for colours, type,
header and the trace; the built `/photography` page (`design/screens/photography.1440.png`) for how a
sub page opens ("← Back", a small lime index, a large headline).

## Shared

A clean presentation board, 1536x1024, flat deep graphite #0A0B0C. On the left, about 1080 px wide, a
flat screenshot crop of the top of one page of a desktop website, starting with its header (no browser
chrome). On the right, one iPhone-style screen (390x844 proportions, thin dark bezel, rounded corners),
straight on, no perspective, no hands, showing the top of the same page on a phone. Even gaps, nothing
else on the board, no watermark.

The website is Berkay Orhan's portfolio in the look of the second attached image. Header as there:
"Berkay Orhan" in the grotesk at the left; "Work", "Research", "Experience", "About" and "EN / SV" in
small monospace; a lime "Contact" button with graphite text at the right. On the phone the header is
"Berkay Orhan", the lime "Contact" button and a two-line menu mark. Under the header, as on the third
attached image: "← Back" in dim monospace, a small lime monospace index, then a large headline.

The trace: one thin lime line, about 2 px, runs down the far left of the page (about 2 percent in on
desktop, 20 px in on the phone), like an oscilloscope trace: flat where nothing happens, a short
vertical waveform burst where a section starts, and small lime ticks or dots where it passes each item
of a list. Information hangs off it with thin faint leader lines.

Palette: background deep graphite #0F1012 with a very subtle grain, text off-white #ECEAE4, dim text
#8A8C90, faint #2A2D31 for rules and guide lines, one accent acid lime #C8F542. No other hues, no
gradients, no glow, no gloss, no shadows, no 3D. Screenshots of projects keep their own colours but sit
small, flat and unframed. Type: headlines in a geometric grotesk like Space Grotesk 600 with tight
tracking; everything else in a monospace like JetBrains Mono. All text in English, crisp and legible,
taken from the first attached image where it says so.

Composition: editorial and asymmetric, big contrast in scale, lots of empty graphite. Information is
drawn or set as type, never boxed.

Must not appear: cards, boxes or panels with borders or fills, tables with cell borders, tag pills or
chips, icons, emoji, logos of companies or models, blue links, coloured buttons other than the one lime
button style, radar charts, gradients, any person.

## a-projects

`/projects`. Index "WORK", headline "Things I've shipped.", a dim one-line count "19 projects". A row of
plain monospace filters under it, "All · AI · Web · Graphics · Mobile", with "All" underlined in lime.
Then the projects as a numbered list down the page, one row each, separated by faint full-width rules,
with a small lime tick on the trace beside each row: a dim number ("01"), the project name in the
grotesk at about 28 px (wikillm, Fractured Crown, VoxelCraft, Stats for Spotify, Municipality Chatbot,
Alertz, FastTalk, SynGraph), one dim line of what it is from the first attached image, the stack in dim
monospace joined by " · " (no pills), and the year at the far right. The first row is hovered: its name
is lime, and a small flat screenshot of the project (about 240 px wide) floats at the right of the row.
On the phone the rows stack name, line and stack, with the number above, no screenshot.

## b-project

`/projects/wikillm`. "← All projects", index "PROJECT / 2026", headline "wikillm" with a dim subtitle
"LLM-maintained knowledge bases", then one lede sentence from the first attached image. At the right on
desktop, a facts column as plain label and value pairs in monospace, no box: "type CLI + agent plugin",
"distribution npm + plugin marketplace", "hosts Claude Code, Codex", "stack TypeScript · Node.js ·
Obsidian · Markdown"; under it the links as underlined monospace text: "npm ↗", "Source ↗", "Install
CLI →". Below the lede, the sections "Overview", "Key features", "Challenges", "Solution", "Outcome"
start down the left, each with a small lime waveform burst on the trace and a dim number ("01 /
Overview"); the key features are short lines with a lime en dash, not bullets. On the phone the facts
column moves under the lede.

## c-papers

`/papers`. Index "RESEARCH", headline "Papers.", a dim line "My thesis and the papers from my
projects." Then the three papers from the first attached image as rows separated by faint rules, each
with a lime dot on the trace: the year and venue in dim monospace ("2026 · MASTER'S THESIS ·
ERICSSON"), the title in the grotesk at about 30 px, the authors in dim monospace, two lines of the
abstract, then underlined monospace links "Read the paper →" and, for the thesis, "Benchmark →". The
thesis row comes first and is larger, with its title lime on hover.

## d-paper

`/papers/when-agentic-workflows-help`. "← Papers", index "MASTER'S THESIS · ERICSSON · 2026", the long
title in the grotesk at about 44 px over three lines, "Download PDF ↓" as underlined monospace. Then the
benchmark highlights as four large numbers set in a row on one faint rule, not in boxes: "52 evaluation
scenarios", "11,366 production test cases", "3 metric families", "18 controlled setups", each number
large in the grotesk and its label in dim monospace. Under them the leaderboard as a list of rows on
faint rules (no cell borders): model and workflow in monospace, the setup dim, a thin horizontal bar
for the functional pass rate in off-white with the top row's bar in lime, and the figures right-aligned
in monospace (90.4%, 0.597, 4.43, 167s, 36), with a plain monospace setup switch above it ("All · Full
prompt · Prompt + skills · Guided skills", "All" underlined in lime). On the phone the highlights are a
two by two grid of numbers and the leaderboard rows show model, bar and pass rate only.

## e-playground

`/playground`. Index "PLAYGROUND", headline "Experiments.", a dim line "Things you can run and poke
at." Then the one experiment as a large row with a lime waveform burst on the trace beside it: dim
"TDDE19 · 2025", the title "FastTalk benchmark" in the grotesk at about 40 px, one line "Three local
models in a real-time voice loop, compared on latency, consistency and reliability.", a small drawing
of a latency waveform in fine off-white line with one lime spike, and "Open →" underlined. Below it, a
dim line "More soon." On the phone the same row stacks.

## f-fasttalk

`/playground/tdde19`. "← Playground", index "TDDE19 · FASTTALK · DEC 2025", headline "Three models, one
voice loop.", a dim line "Whisper large-v3-turbo · Kokoro TTS · Q4 · all local". Then the three models
as three columns of type separated by faint vertical rules, no boxes: "Qwen3 8B", "Llama 3.1 8B",
"Ministral 3 8B", each with its success rate and median user-perceived latency in large monospace
figures (93.3% / 280 ms, 86.7% / 308 ms, 100% / 320 ms). Under them a plain monospace tab row
("Overview · Latency · Variance · Distribution · Raw data", "Overview" underlined in lime), and one chart
drawn in the trace's line style: latency per run as three thin lines over 30 runs, Qwen3 in lime,
Llama in off-white, Ministral in dim grey, with a faint 440 ms P95 rule and small monospace axis labels.
On the phone the three models stack as rows and the chart is full width.

## g-404

The 404 page. No back link. Index "404", headline "Off the trace.", a dim line "This page does not
exist, or it moved." and an underlined monospace "Back to the start →". The trace comes down the left
edge, runs across the screen under the headline as a flat line with one small waveform, and stops short
in the middle with a small lime dot at its end, as if the signal was cut. On the phone the same, the
line stopping in the middle of the screen.
