# Landing mobile r1: the trace at 390x844

Berkay liked landing r2 (the signal, now called the trace) on 2026-10-06. This round adapts the hero
and the five sections to one column. Same method as Genomlyst's mobile round: 3 boards, each three
phone screens side by side, so the whole scroll fits in 9 screens. References attached with -i: the
approved hero (`design/approved/landing-desktop.png`) first, then the landing-r2 desktop screens that
board adapts.

On a phone the trace runs vertically. Drawings that ran left to right on desktop now run top to
bottom along it.

## Shared

A clean presentation board, 1536x1024, flat deep graphite #0A0B0C. Three identical iPhone-style screens
(390x844 proportions, thin dark bezel, rounded corners) standing side by side with even gaps, straight on,
no perspective, no hands. Each screen shows one moment of Berkay Orhan's portfolio website, scrolled
further down from left to right. The first attached image is the approved desktop hero and the style
reference; the other attached images are the desktop sections this board adapts. Match their colours,
type, flat matte look and thin lime waveform line exactly.

Palette inside the screens: background deep graphite #0F1012 with a very subtle grain, text off-white
#ECEAE4, dim text #8A8C90, faint #2A2D31 for guide lines and inactive marks, one accent acid lime #C8F542
for the trace, highlights and the primary button (lime fill, graphite text). No other hues, no
gradients, no glow, no bloom, no glossy 3D.

Type: headlines in a geometric grotesk like Space Grotesk, weight 600, tight tracking, about 40 px on
the phone. Labels, captions and body text in a monospace like JetBrains Mono, body about 15 px.

The trace: one continuous thin lime line, about 2 px, running down the screens and continuing from
screen to screen and from board to board, drawn like an oscilloscope trace: flat where nothing happens,
a waveform where something does. On the phone it runs vertically, mostly in a lane about 20 px from
the left edge, and swings in to become each section's drawing. Short monospace labels sit beside it
with thin faint leader lines.

Layout: margins 24 px, text column never under the trace. A small lime monospace index above each
headline ("02 / WORK"). Every tap target at least 44 px tall. Generous empty graphite, never cramped.
All text in English, spelled exactly as written here, crisp and legible. No text outside the screens,
no labels on the board, no watermark.

Must not appear: cards, boxes or panels holding text, tables, rows of stats, grids of equal tiles, tag
pills, skill bars, icons other than the menu button and arrows; any person other than the hero portrait;
robots, brains, circuit boards, glowing networks, particles, code rain, emoji, company logos, any text or
number not written here.

## mobile-1

- Screen 1, the hero. Header: "Berkay Orhan" in the grotesk at the left, at the right a small lime
  "Contact" button and a menu button with two short lines. Behind the top half of the screen, the same
  portrait as in the hero reference, unchanged (same man, same glasses, beard and dark hoodie, same
  graphite duotone with the dark lime tint), cropped to head and shoulders, dim, fading into the
  background below his chin. Over the fade, lower on the screen: the overline "AI ENGINEER · LINKÖPING"
  in lime, the headline on three lines "I build AI that" / "works outside" / "the demo.", the lede
  "Agentic retrieval, voice pipelines and the web apps around them. Now in R&D at Ericsson." Then a
  full-width lime button "See my work" and under it a full-width outlined button "Download CV". At the
  bottom of the screen the hero's lime waveform crosses the full width and turns down at the left
  into the trace's lane.
- Screen 2, Work. The trace comes down the left lane. Index "02 / WORK", headline "Things I've
  shipped." The four projects stacked large in the grotesk, about 44 px, each with a small dim
  monospace number before it: "01 FastTalk", "02 SynGraph", "03 wikillm", "04 LiTHePlan". "FastTalk"
  is active, off-white with a thin lime line under it; the other three are dim #8A8C90. Under the list,
  a small monospace link "All 19 projects →".
- Screen 3, FastTalk drawn on the trace. The dim caption at the top: "FastTalk: a real-time voice
  assistant, streamed end to end over WebSocket." The trace swings in to run down the middle of the
  screen as a vertical voice waveform through four stations, each a small lime tick with a two-line
  monospace label to its right: "you speak" / "48 kHz audio"; "Whisper" / "speech to text"; "LLM" /
  "streams tokens"; "Kokoro" / "speaks back". Between LLM and Kokoro the waveform becomes a short column
  of small lime dashes (tokens). Below Kokoro the trace swings back to the left lane and leaves through
  the bottom edge.

## mobile-2

- Screen 1, Research. The trace comes down the left lane. Index "03 / RESEARCH", headline on three
  lines "My master's" / "thesis, at" / "Ericsson." Under it, small dim monospace: "When Agentic
  Workflows Help · Ericsson · Jan–Jun 2026". Then the trace reaches a short off-white monospace
  question "which tests cover this change?" and splits downward into four parallel lime strands, each
  labelled at its start in small monospace: "dense", "keyword", "SQL", "graph". They run down off the
  bottom of the screen.
- Screen 2, the field. The four strands come in from the top and end in a field of tiny dim dots, a
  dense even dot matrix the full text width and about 260 px tall, labelled above in dim monospace
  "11,366 production test cases". About eight dots are lit lime and the strands end on them; a thin
  leader line to a small label "the few that matter". Under the field, one paragraph in monospace: "An
  assistant that helps engineers find the right tests. I built 52 retrieval tasks by hand and ran them
  through two agent designs, ReAct and orchestrator-worker, on three open models." Then a full-width
  lime button "Read the thesis", a small link "Benchmark →", and small dim monospace "Also: SynGraph ·
  AniMatch (with Jonatan Ebenholm)". One strand leaves the field and becomes the left lane again.
- Screen 3, Experience. Index "04 / EXPERIENCE", headline "Where I've been." The trace becomes a
  vertical time axis down the left third, with faint year ticks labelled "2021" to "2026" from top to
  bottom. Its amplitude tells the story: nearly flat at 2021, a gentle steady wave from 2024, a strong
  burst at 2026 at the bottom. Four moments to its right on thin faint leader lines, each a title in the
  grotesk about 20 px and one dim monospace line: "BSc, Media Technology" / "Linköping University ·
  2021–2024"; "MSc, Machine Learning" / "Linköping University · 2024–now"; "Master's thesis" / "Ericsson ·
  Jan–Jun 2026"; and the brightest, title in lime, "AI Engineer, R&D" / "Ericsson · Linköping · since Jun
  2026".

## mobile-3

- Screen 1, About. The trace comes down the left lane with a small waveform at the top. Index "05 /
  ABOUT". The bio is the headline, set large in the grotesk, about 30 px, off-white: "I like the part
  after the demo: retrieval that returns the right thing, a voice that answers fast enough to feel like
  a conversation, and the web app people actually use." The words "after the demo" in lime. Under it, a
  small link "Download CV →".
- Screen 2, how I build. A dim caption "how I build" at the top. The trace runs down the left lane and
  five stops sit on it one under the other, each a small lime tick with a dim monospace layer name and
  the tools under it in off-white monospace: "interface" / "Next.js · React"; "agents" / "LangGraph ·
  PydanticAI"; "models" / "vLLM · PyTorch"; "data" / "PostgreSQL · Qdrant · Neo4j"; "infra" / "Docker ·
  Kubernetes". Under the stops, a horizontal row of three small desaturated photographs that runs off the
  right edge of the screen (a swipe row): a Swedish lake at dusk, a city street at night, a forest path.
  Under them a small dim caption "off the clock: photography".
- Screen 3, Contact and the end. The trace swings in to the centre and becomes a horizontal waveform
  across the full width, quiet at both ends with a strong burst in the centre. Above it, centred, index
  "06 / CONTACT" and the headline on two lines "Building something" / "that has to work?" Under the
  waveform, centred, the email in off-white monospace "berkayorhan@hotmail.se" with a thin lime
  underline, and under it small dim links "GitHub ↗" and "LinkedIn ↗" side by side. Footer on a faint
  rule: "Berkay Orhan" in the grotesk and "© 2026" in dim monospace, then dim monospace links stacked
  as tap rows "Work", "Research", "Experience", "CV", "Back to top ↑".
