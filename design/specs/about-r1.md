# About r1: filling the right side of About

The landing's About section (`landing-r2.md`, with the stack drawing from `stack-r4.md` a-surfaces) puts
the bio and the "how I build" stack in the left half of the page; on a wide screen the right half is
empty graphite from the bio down. This round mocks three ways to use that space, desktop and phone on
one board. The copy is fixed: the bio, the five layers and their tools, and the projects named below
(each layer's projects are the ones whose stack uses that layer's tools).

References attached with -i, in this order: a screenshot of the current section at 2025 px wide
(`design/screens/before/about.2025.png`, for its content only); the approved landing hero
(`design/approved/landing-desktop.png`) for colours, type and the trace; the approved stack drawing
(`design/approved/landing-s5-stack.png`), to be drawn the same way.

## Shared

A clean presentation board, 1536x1024, flat deep graphite #0A0B0C. On the left, about 1080 px wide, a
flat crop of one section of a desktop web page, about 1440 px wide scaled down, no browser chrome. On
the right, one iPhone-style screen (390x844 proportions, thin dark bezel, rounded corners), straight
on, no perspective, no hands, showing the same section on a phone. Even gaps, nothing else on the
board, no watermark.

The section is "About" on Berkay Orhan's portfolio, in the look of the second attached image. It
starts with a small lime monospace index "05 / ABOUT", then the bio in the grotesk at about 40 px:
"I like the part after the demo: retrieval that returns the right thing, a voice that answers fast
enough to feel like a conversation, and the web app people actually use." with "after the demo" in
lime. Then a dim monospace label "how I build" and the stack drawing from the third attached image:
five thin white line-drawn plates stacked in isometric view with a little lime on each, a small circle
at each plate's right corner with a short leader line to its label. The labels, top to bottom, each a
name in off-white monospace with its tools under it in dim monospace: "interface / Next.js · React",
"agents / LangGraph · PydanticAI", "models / vLLM · PyTorch", "data / PostgreSQL · Qdrant · Neo4j",
"infra / Docker · Kubernetes". Under the section an underlined monospace link "Download CV ↓".

The trace: one thin lime line, about 2 px, runs down the far left of the page (about 2 percent in on
desktop, 20 px in on the phone), with a short vertical lime waveform burst where the section starts.

Palette: background deep graphite #0F1012 with a very subtle grain, text off-white #ECEAE4, dim text
#8A8C90, faint #2A2D31 for rules and guide lines, one accent acid lime #C8F542. No other hues, no
gradients, no glow, no shadows. Type: the bio in a geometric grotesk like Space Grotesk 600 with tight
tracking; everything else in a monospace like JetBrains Mono. All text in English, crisp and legible.

Composition: editorial and asymmetric, lots of empty graphite but no dead half. Information is drawn
or set as type, never boxed.

Must not appear: cards, boxes or panels, tag pills or chips, icons, emoji, logos, skill bars,
percentages, radar charts, photos, any person, coloured buttons.

## a-side

Bio and stack side by side instead of one under the other. The bio takes the left column, about 45
percent of the width, at about 44 px, with "Download CV ↓" under it. The stack drawing moves to the
right column beside it, larger (about 560 px wide), its top level with the index "05 / ABOUT", its
labels at its right running to near the right edge of the page. The section is about as tall as the
stack.

On the phone: the bio, then the stack drawing full width with the labels under each plate instead of
beside it, then the link.

## b-used-in

The bio and stack stay where they are on the left. Each plate's leader line runs on past its label,
long and thin and faint, across the empty right half of the page, and ends in the projects built on
that layer, in off-white monospace joined by " · ", with a small lime dot where the line meets them:
"interface" → "Stats for Spotify · Oversee · Alertz · LiTHePlan · Fractured Crown"; "agents" →
"Municipality Chatbot · SynGraph · FastTalk"; "models" → "FastTalk"; "data" → "Stats
for Spotify · Alertz · Municipality Chatbot · Clairvoyant"; "infra" → "FastTalk · Municipality Chatbot". Above the first of these, a dim monospace heading "where it shipped" aligned with the
project lists. One list is hovered: its line and its plate's lime parts are brighter and the project
names are underlined.

On the phone: under each plate's label, its projects as one dim line, then the next plate.

## c-margin

The bio and stack stay on the left. The right half carries a quiet margin column, aligned to start
level with the bio's first line, in small monospace with faint rules between entries, like notes in a
book's margin: "now" / "Software developer, Ericsson, Linköping"; "studied" / "MSc Engineering,
Linköping University"; "thesis" / "When agentic workflows help, Ericsson, 2026" as an underlined link;
"off the clock" / "Photography" as an underlined link. Each label in dim monospace,
its value in off-white under it. Below the last entry the column stays empty.

On the phone: the margin entries come after the stack, before "Download CV ↓", as label and value
pairs.
