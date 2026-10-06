# Stack r1: "how I build"

Berkay found the stack line in About (`landing-r2.md`, s5-about) generic: a flat line with five ticks
and text under each. This round redraws only that part, on desktop and phone together, so one board
per variant shows both. References attached with -i: the approved hero
(`design/approved/landing-desktop.png`) first as the style reference, then the approved About screen
(`design/approved/landing-s5-about.png`) that this replaces part of.

The content stays the same five layers and tools. What changes is the drawing: the trace should carry
the stack the way it carries the FastTalk pipeline and the retrieval fan-out, as a signal, not a list.

## Shared

A clean presentation board, 1536x1024, flat deep graphite #0A0B0C. On the left, about 1080 px wide, a
flat screenshot crop of one part of a desktop website (no browser chrome, no header). On the right,
one iPhone-style screen (390x844 proportions, thin dark bezel, rounded corners), straight on, no
perspective, no hands, showing the same part of the same website on a phone. Even gaps, nothing else
on the board, no labels on the board, no watermark.

Both show the "how I build" part of the About section of Berkay Orhan's portfolio website. The first
attached image is the style reference: match its colours, type, flat matte look and its thin lime
waveform line exactly. The second attached image is the About section as it is now; keep its index
"05 / ABOUT" at the top left of the desktop crop and the phone screen, and replace the flat line with
five ticks by the drawing described below. Do not show the bio headline, the photographs or a
portrait.

Palette inside both: background deep graphite #0F1012 with a very subtle grain, text off-white
#ECEAE4, dim text #8A8C90, faint #2A2D31 for guide lines and inactive marks, one accent acid lime
#C8F542 for the trace and highlights. No other hues, no gradients, no glow, no bloom, no glossy 3D.

Type: labels and tool names in a monospace like JetBrains Mono, layer names about 13 px dim, tool
names about 15 px off-white. A dim monospace caption "how I build" where the drawing starts. Under the
drawing, a small off-white link "Download CV →" with a thin lime underline.

The trace: one continuous thin lime line, about 2 px, entering from the top edge in a lane on the left
(about 20 px from the edge on the phone), drawn like an oscilloscope trace: flat where nothing happens,
a waveform where something does. It becomes the drawing and leaves through the bottom edge. Corners
where it turns are rounded, never sharp.

The five layers, in this order, with their tools, spelled exactly: "interface" / "Next.js · React";
"agents" / "LangGraph · PydanticAI"; "models" / "vLLM · PyTorch"; "data" / "PostgreSQL · Qdrant ·
Neo4j"; "infra" / "Docker · Kubernetes". All text in English, crisp and legible; no other words or
numbers.

On the phone the drawing runs top to bottom down the screen instead of left to right, with the labels
to the right of the trace, margins 24 px, generous empty graphite, never cramped.

Must not appear: cards, boxes or panels holding text, tables, grids of equal tiles, tag pills, skill
bars or anything that rates a tool, logos of the tools, icons, robots, brains, circuit boards, glowing
networks, particles, code rain, emoji, any person.

## a-channels

The drawing is a five-channel scope readout, like a logic analyzer. Where the trace arrives it splits,
with rounded corners, into five thin parallel horizontal lanes stacked one above the other with even
gaps, interface at the top and infra at the bottom. Each lane carries its own signal, so the layers
read as different kinds of work: interface a clean slow sine; agents a line that loops back on itself
in small repeated loops, like a reasoning loop; models a dense high-frequency burst in the middle of
the lane; data a row of discrete short pulses with small dots; infra a steady square-wave clock. At the
left end of each lane its layer name in dim monospace; at the right end its tools in off-white
monospace. At the far right the five lanes merge back into one line with rounded corners, which leaves
downwards. Faint dotted vertical gridlines behind the lanes, like a scope graticule.

On the phone the channels stack down the screen: each layer is a short vertical stretch of the trace
in the left lane with its own signal (the same five characters, drawn vertically), its layer name and
tools to the right, one under the other.

## b-request

The drawing is one request travelling through the stack. Five faint horizontal bands, like strata in a
cross-section, stacked from interface at the top to infra at the bottom, each with its layer name in
dim monospace at the left edge of the band and its tools in off-white monospace at the right edge,
separated by thin faint rules. The trace comes in at the top and descends through the bands on a
diagonal-free stepped path with rounded corners, moving a little to the right in each band, and inside
each band it changes character: a calm sine in interface, small loops in agents, a sharp dense burst in
models, discrete pulses with small dots in data, a steady square clock in infra. Below infra it
straightens and leaves downwards. It reads like a request going down the stack and back out.

On the phone the bands are full-width horizontal strata stacked down the screen, each about 120 px
tall, the trace descending through them in the left third with the same five characters, layer name
and tools to its right.

## c-modulated

The drawing is one long horizontal stretch of the trace across the full width that changes character
five times, like a single signal passed through five stages. Five segments of equal length, divided by
small lime tick marks on the line: a clean slow sine (interface), small loops where the line curls back
on itself (agents), a dense high-frequency burst with the tallest amplitude (models), discrete short
pulses with small dots (data), a steady square clock (infra). Above each segment its layer name in dim
monospace; below each segment its tools in off-white monospace, centred on the segment. The trace
arrives from the left lane with a rounded corner into the start of the line and leaves from its right
end with a rounded corner downwards.

On the phone the same signal runs vertically down the left lane, five segments one under another with
the same five characters drawn vertically, each layer name and its tools to the right of its segment.
