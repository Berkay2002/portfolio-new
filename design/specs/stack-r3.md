# Stack r3: "how I build", exploded looks

In round 2 (`stack-r2.md`) Berkay liked the idea of an exploded stack (a-exploded) but not its look:
thin wireframe planes in a plain isometric column. This round keeps the idea and the five drawings and
tries four different looks for the exploded view. References attached with -i: the approved hero
(`design/approved/landing-desktop.png`) first as the style reference, then the approved About screen
(`design/approved/landing-s5-about.png`) that this replaces part of.

## Shared

A clean presentation board, 1536x1024, flat deep graphite #0A0B0C. On the left, about 1080 px wide, a
flat screenshot crop of one part of a desktop website (no browser chrome, no header). On the right,
one iPhone-style screen (390x844 proportions, thin dark bezel, rounded corners), straight on, no
perspective, no hands, showing the same part of the same website on a phone. Even gaps, nothing else
on the board, no labels on the board, no watermark.

Both show the "how I build" part of the About section of Berkay Orhan's portfolio website. The first
attached image is the style reference: match its colours and type. The second attached image is the
About section as it is now; keep its index "05 / ABOUT" at the top left of the desktop crop and the
phone screen, and replace the flat line with five ticks by the exploded view described below. Do not
show the bio headline, the photographs or a portrait: the "how I build" part fills the crop and the
phone screen.

Palette inside both: background deep graphite #0F1012 with a very subtle grain, text off-white
#ECEAE4, dim text #8A8C90, greys from #1A1C1F to #3A3D42 for surfaces and guide lines, one accent acid
lime #C8F542 used sparingly. No other hues, no glow, no bloom, no gloss, no reflections.

The exploded view: the stack of five layers pulled apart, interface on top and infra at the bottom,
each layer carrying its own drawing on its top face:

- interface: a small web app screen, a chat thread with two message bubbles as rounded outlines, grey
  lines standing in for text, an input field at the bottom with a lime cursor.
- agents: a small state graph, four or five small circular nodes joined by thin arrows, one arrow
  curving back from a later node to an earlier one (the loop), one node ringed in lime as the current
  step. No words on the nodes.
- models: a row of short grey token stubs ending in one lime token being generated, with a small
  next-token distribution under it, a handful of thin vertical bars, the tallest one lime.
- data: a scatter of small grey dots like an embedding space, one lime query point with its three
  nearest dots ringed and joined to it; at one edge a few dots joined as a small graph.
- infra: a row of identical small squares like container replicas, one dashed as it restarts, all
  fed from one thin line that fans out to them like a load balancer.

No readable words inside any drawing; grey lines stand in for text.

Type: a dim monospace caption "how I build" (like JetBrains Mono, about 13 px) where the part starts.
Each layer name in off-white monospace about 15 px, its tools in dim monospace about 13 px under it,
on the phone too (labels must stay easy to read on the phone). Under everything, a small off-white link
"Download CV →" with a thin lime underline.

The five layers, in this order, with their tools, spelled exactly: "interface" / "Next.js · React";
"agents" / "LangGraph · PydanticAI"; "models" / "vLLM · PyTorch"; "data" / "PostgreSQL · Qdrant ·
Neo4j"; "infra" / "Docker · Kubernetes". All text in English, crisp and legible; no other words or
numbers.

On the phone margins are 24 px, generous empty graphite, never cramped. The phone shows the same look
as the desktop, scaled to the narrow screen.

Must not appear: cards, boxes or panels holding text, tables, tag pills, skill bars or anything that
rates a tool, logos of the tools, clip-art icons, robots, brains, glowing neural networks, circuit
boards, particles, code rain, emoji, any person.

## a-slabs

Solid slabs. Each layer is a thick rounded-corner slab of matte graphite, like machined dark aluminium
or slate, about 14 px thick, seen from a three-quarter view from above, flat matte shading only (top
face #1E2023, side faces #141518, a hairline lighter top edge). The drawings sit on the top faces as
if engraved, in off-white and grey with their one lime element. The slabs float apart with even gaps
and each casts a soft, very faint shadow on the slab below. One slab, models, is lifted a little
further out than the rest, as if pulled out of the stack to look at. Labels to the right, aligned to
each slab's front edge. On the phone the slabs are smaller and the labels sit under each slab.

## b-patent

A patent-drawing exploded assembly. Everything in fine off-white ink line on graphite, like a 1970s
engineering patent sheet: each layer a thin plate drawn in oblique projection with hatching on its
visible edge, the drawings in fine line on top, and dashed vertical alignment lines running between
the corners of the plates to show how they fit together. Each layer's name and tools sit at the end of
a thin leader line with a small open circle where it touches its plate, the leaders spread to both
sides so nothing crowds. The only lime is the one live element in each drawing. On the phone the
assembly is narrower and the leaders all go to the right.

## c-glass

Frosted glass sheets. Each layer is a thin sheet of dark smoked glass, slightly translucent, seen in a
steep perspective from above and to the side, so the sheets overlap and the drawing on each sheet is
faintly visible through the sheet above it. Each sheet has a crisp thin lighter edge. The drawings are
printed on the glass in off-white with their one lime element. The sheets are spaced wider the lower
they are, as if the stack is falling open. Labels in a clean column at the right, each joined by a
short horizontal hairline to its sheet's edge. On the phone the sheets are seen more from above, the
labels under each sheet.

## d-fan

A wide fan for the wide desktop. The five layers are thin flat plates of matte graphite (no text on
them, only the drawings), seen in a three-quarter view, fanned out diagonally from the top left to the
bottom right across the whole width, each layer offset down and to the right of the one above, like
sheets spread on a table, with even overlapping spacing so each drawing is fully visible. Each layer's
name and tools sit just under its plate's lower left corner. One thin lime line, a single request,
runs through the centre of all five plates in order. On the phone the fan runs straight down instead,
each plate slightly offset to the right of the one above, labels to the left of the offset.
