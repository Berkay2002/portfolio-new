# Landing r2: the signal

Round 1 (`landing-r1.md`) was rejected as soulless, blocky and generic: equal cards, rows of text in
panels, a stat table. Round 2 gives the page one idea: the lime waveform from the hero is a signal that
runs down the whole page. It enters each screen where the last one left it and becomes that section's
drawing (the FastTalk pipeline, the retrieval fan-out, the career timeline), then leaves for the next.
Information is drawn, not boxed. Same palette and type as the approved hero, attached as the only
reference. The portrait appears only in the hero.

Approved 2026-10-06. Berkay named the line "the trace". Motion, for the build (the mockups stay still):
the trace draws itself on scroll down to a pen point low in the viewport, as Genomlyst's thread does
(`genomlyst/src/web/site/Landing.tsx`). Its tip is a small bright lime dot, like an oscilloscope spot.
Each section's waveform swells from flat when the tip reaches it; flat stretches stay flat. With
prefers-reduced-motion the trace is drawn in full and nothing moves.

## Shared

One screen of Berkay Orhan's personal portfolio website, further down the same long page as the attached
hero, which is the style reference: match its colours, type, flat matte look and its thin lime waveform
line exactly. Do NOT repeat its headline, its portrait or its layout.

Render: one landscape image, 1536x1024, a flat desktop website screenshot of one scrolled screen (1440 px
viewport), no browser chrome, no site header (we are mid-page). All text in English, spelled exactly as
written here, crisp and legible.

Palette: background deep graphite #0F1012 with a very subtle grain, text off-white #ECEAE4, dim text
#8A8C90, faint #2A2D31 for guide lines and inactive marks, one accent acid lime #C8F542 for the signal
line, highlights and the primary button (lime fill, graphite text). No other hues, no gradients, no
glow, no bloom, no glossy 3D.

Type: headlines in a geometric grotesk like Space Grotesk, weight 600, tight tracking. Labels, captions
and small text in a monospace like JetBrains Mono.

The signal: one continuous thin lime line, about 2 px, entering the screen from the top edge and
leaving at the bottom edge, drawn like an oscilloscope trace: flat where nothing happens, a waveform
where something does. It is the main visual of every screen and carries the information: short
monospace labels sit directly on or beside it, with thin faint leader lines.

Composition: asymmetric and editorial, with big contrast in scale: a large headline, small precise
labels, lots of empty graphite. A small lime monospace index sits above each headline ("02 / WORK").

Must not appear: cards, boxes or panels holding text, tables, rows of stats, grids of equal tiles, tag
pills, skill bars, progress bars, icons; any person, face or body; robots, brains, circuit boards,
glowing networks, particles, code rain, emoji, company logos, any text or number not written here.

## s2-work

Index "02 / WORK", headline about 56 px top left: "Things I've shipped."

Left half: the four projects as an index set very large in the grotesk, about 84 px, stacked one per
line, each with a small dim monospace number before it: "01 FastTalk", "02 SynGraph", "03 wikillm",
"04 LiTHePlan". "FastTalk" is the active one, in off-white with a thin lime line under it; the other
three are dim #8A8C90. Under the list, a small monospace link "All 19 projects →".

Right half: what FastTalk does, drawn on the signal. The signal comes down from the top edge and runs
right to left as a voice waveform through four stations, each a small lime tick on the line with a
two-line monospace label under it: "you speak" / "48 kHz audio"; "Whisper" / "speech to text"; "LLM" /
"streams tokens"; "Kokoro" / "speaks back". Between the LLM and Kokoro stations the waveform turns into a
short row of small lime dashes (tokens). Above the line, one dim monospace caption: "FastTalk: a real-time
voice assistant, streamed end to end over WebSocket." The signal then leaves through the bottom edge.

## s3-research

Index "03 / RESEARCH", headline top left: "My master's thesis, at Ericsson." Under it, small dim
monospace: "When Agentic Workflows Help · Ericsson · Jan–Jun 2026".

The main visual across the middle of the screen, left to right: the signal enters from the top left
and reaches a short monospace question in off-white: "which tests cover this change?". From there it
splits into four parallel lime strands, each labelled at its start in small monospace: "dense",
"keyword", "SQL", "graph". The strands run right into a large field of tiny dim dots, a dense even dot
matrix about 620 px wide and 360 px tall, labelled above in dim monospace "11,366 production test
cases". Inside the field about eight dots are lit lime and the strands end on them; a thin leader line
from the lit dots to a small label "the few that matter". From the field, one strand continues down and
leaves through the bottom edge.

Bottom left, under the visual, one paragraph in monospace, about 560 px wide: "An assistant that helps
engineers find the right tests. I built 52 retrieval tasks by hand and ran them through two agent
designs, ReAct and orchestrator-worker, on three open models." Then the lime button "Read the thesis" and
a small link "Benchmark →". Bottom right, small dim monospace on one line: "Also: SynGraph · AniMatch
(with Jonatan Ebenholm)".

## s4-experience

Index "04 / EXPERIENCE", headline top left: "Where I've been."

The signal comes in from the top and turns into one horizontal time axis across the full width at mid
height, with faint year ticks labelled "2021", "2022", "2023", "2024", "2025", "2026". Its amplitude
tells the story: nearly flat from 2021 to 2024, a gentle steady wave from 2024, rising sharply in 2026
into a strong burst at the right end, then it leaves the screen downward. Four moments hang off the line
on thin faint leader lines, alternating above and below, each a title in the grotesk about 26 px and one
dim monospace line:
- at 2021, below: "BSc, Media Technology" / "Linköping University · 2021–2024"
- at 2024, above: "MSc, Machine Learning" / "Linköping University · 2024–now"
- at early 2026, below: "Master's thesis" / "Ericsson · Jan–Jun 2026"
- at mid 2026, above, the brightest, its title in lime: "AI Engineer, R&D" / "Ericsson · Linköping · since Jun 2026"

## s5-about

Index "05 / ABOUT". No separate headline: the bio is the headline. Left two thirds, set large in the
grotesk, about 46 px, off-white, four lines: "I like the part after the demo: retrieval that returns the
right thing, a voice that answers fast enough to feel like a conversation, and the web app people
actually use." The words "after the demo" are in lime.

Below it, the signal runs across as a thin flat line and five stops sit on it, like stations on a line,
each a small lime tick with a dim monospace layer name above and the tools below in off-white
monospace: "interface" / "Next.js · React"; "agents" / "LangGraph · PydanticAI"; "models" / "vLLM ·
PyTorch"; "data" / "PostgreSQL · Qdrant · Neo4j"; "infra" / "Docker · Kubernetes". A dim caption at
its start: "how I build".

Right edge, a narrow column of three small photographs stacked with gaps, about 190 px wide each,
desaturated: a Swedish lake at dusk, a city street at night, a forest path. A small dim monospace
caption under them: "off the clock: photography". Bottom left, a small link "Download CV →". The
signal leaves through the bottom edge.

## s6-contact

The last screen. The signal comes down from the top edge at the centre and becomes one long horizontal
waveform across the full width at mid height, quiet at both ends with a strong burst in the centre.
Above it, centred, index "06 / CONTACT" and a large headline in the grotesk, about 96 px, two lines:
"Building something" / "that has to work?" Under the waveform, centred: the email in off-white
monospace about 28 px, "berkayorhan@hotmail.se", with a thin lime underline; under it small dim
monospace links "GitHub ↗" and "LinkedIn ↗" side by side.

Footer at the bottom, separated by a faint rule: left "Berkay Orhan" in the grotesk and "© 2026" in dim
monospace; right, dim monospace links "Work", "Research", "Experience", "CV", "Back to top ↑".
