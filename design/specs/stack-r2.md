# Stack r2: "how I build"

Round 1 (`stack-r1.md`) gave each layer a different waveform on the trace. Berkay rejected all three:
a waveform does not say what a layer is. This round draws what each layer actually does, as small
precise technical line drawings, and lets the trace step back. References attached with -i: the
approved hero (`design/approved/landing-desktop.png`) first as the style reference, then the approved
About screen (`design/approved/landing-s5-about.png`) that this replaces part of.

## Shared

A clean presentation board, 1536x1024, flat deep graphite #0A0B0C. On the left, about 1080 px wide, a
flat screenshot crop of one part of a desktop website (no browser chrome, no header). On the right,
one iPhone-style screen (390x844 proportions, thin dark bezel, rounded corners), straight on, no
perspective, no hands, showing the same part of the same website on a phone. Even gaps, nothing else
on the board, no labels on the board, no watermark.

Both show the "how I build" part of the About section of Berkay Orhan's portfolio website. The first
attached image is the style reference: match its colours, type and flat matte look exactly. The second
attached image is the About section as it is now; keep its index "05 / ABOUT" at the top left of the
desktop crop and the phone screen, and replace the flat line with five ticks by the drawing described
below. Do not show the bio headline, the photographs or a portrait: the "how I build" part fills the
crop and the phone screen.

Palette inside both: background deep graphite #0F1012 with a very subtle grain, text off-white
#ECEAE4, dim text #8A8C90, faint #2A2D31 for guide lines, one accent acid lime #C8F542 used sparingly
for the one live element in each drawing. No other hues, no gradients, no glow, no bloom, no glossy 3D.

The five drawings, the same in every variant:

- interface: a wireframe of a small web app screen, a chat thread with two message bubbles drawn as
  rounded outlines, grey lines standing in for text, and an input field at the bottom with a lime
  cursor.
- agents: a small state graph like LangGraph draws, four or five small circular nodes joined by thin
  arrows, with one arrow curving back from a later node to an earlier one (the loop), and one node
  ringed in lime as the current step. No words on the nodes.
- models: a row of short grey token stubs ending in one lime token being generated, with a small
  next-token distribution under it: a handful of thin vertical bars of different heights, the tallest
  one lime.
- data: a scatter of small grey dots like an embedding space, one lime query point, with the three
  nearest dots ringed and joined to it by thin lines; at the edge a few dots joined as a small graph.
- infra: a row of identical small outlined squares like container replicas, one drawn dashed as it
  restarts, all fed from one thin line that fans out to them like a load balancer.

The drawings: thin 1.5 px off-white and grey lines on graphite, like plates in an engineering
notebook or a technical manual, precise and quiet, each about the same visual weight. They are
diagrams of the work, not icons and not clip art. No readable words inside any drawing; grey lines
stand in for text.

Type: a dim monospace caption "how I build" (like JetBrains Mono, about 13 px) where the part starts.
Each layer name in off-white monospace about 15 px, its tools in dim monospace about 13 px under it.
Under everything, a small off-white link "Download CV →" with a thin lime underline.

The site's thin lime trace line may enter from the top in a lane on the left (about 20 px from the edge
on the phone) and leave at the bottom, but it is a quiet guide, not the subject.

The five layers, in this order, with their tools, spelled exactly: "interface" / "Next.js · React";
"agents" / "LangGraph · PydanticAI"; "models" / "vLLM · PyTorch"; "data" / "PostgreSQL · Qdrant ·
Neo4j"; "infra" / "Docker · Kubernetes". All text in English, crisp and legible; no other words or
numbers.

On the phone margins are 24 px, generous empty graphite, never cramped.

Must not appear: cards, boxes or panels holding text, tables, tag pills, skill bars or anything that
rates a tool, logos of the tools, clip-art icons, robots, brains, glowing neural networks, circuit
boards, particles, code rain, emoji, any person.

## a-exploded

The stack as an exploded view. Five thin flat planes drawn in clean line isometric (outlines only,
no fill, no shading), floating one above the other with even gaps, interface at the top and infra at
the bottom. Each plane has its drawing etched on its surface. One thin lime line, a single request,
drops vertically through all five planes, with a small lime dot where it pierces each one. Each
layer's name and tools sit to the right of its plane, joined to it by a short thin grey leader line.

On the phone the exploded stack is narrower and taller, centred, the planes smaller, each label pair
under its plane.

## b-plates

Five drawings side by side in one row, like five plates in a technical field guide, evenly spaced,
each about 170 px wide and 150 px tall, sitting on one faint shared baseline. Under each plate, its
layer name and then its tools, left-aligned to the plate. Above the row the caption "how I build".
Very faint thin arrows between neighbouring plates show the order, interface to infra.

On the phone the five plates stack down the screen, one per row, the drawing at the left (about
110 px wide) and its layer name and tools to its right.

## c-journey

One request travelling down the stack, told as a sequence. The interface drawing at the top left
shows the question being typed; a thin lime line leaves its send arrow and runs on to the agents
graph, through its loop, out to the model's token row, which reaches out to the data scatter for the
nearest dots, and the answer runs back up to the interface as a second chat bubble. The infra row of
replicas runs along the bottom under everything, with thin grey lines up to the drawings it hosts. The
drawings sit in a loose diagonal from top left to bottom right, each with its layer name and tools
beside it. Only the request line is lime.

On the phone the sequence runs top to bottom: interface, agents, models, data, then the answer
returning as a thin lime line up the left lane, and infra across the bottom. Each layer name and its
tools beside its drawing.
