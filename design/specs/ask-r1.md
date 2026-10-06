# Ask r1: the "Ask the site" page

Status: rejected (2026-10-06).

`/ask` was built from the `pages-r1` parts without a round of its own (`design/screens/ask.1440.full.png`):
a page head, the question on a burst, the answer on a burst, the matches as list rows. Berkay has not
picked a look for it yet. This round tries four directions, desktop and phone on one board, each showing
the page after a question was asked and answered.

References attached with -i, in this order: the built page (`design/screens/ask.1440.full.png`, for its
content and current layout only); the approved landing hero (`design/approved/landing-desktop.png`) for
colours, type, header and the trace; the approved projects page (`design/approved/pages-projects.png`)
for how a sub page opens and how list rows hang off the trace.

## Shared

A clean presentation board, 1536x1024, flat deep graphite #0A0B0C. On the left, about 1080 px wide, a
flat screenshot crop of the top of one page of a desktop website, starting with its header (no browser
chrome). On the right, one iPhone-style screen (390x844 proportions, thin dark bezel, rounded corners),
straight on, no perspective, no hands, showing the same page on a phone. Even gaps, nothing else on the
board, no watermark.

The website is Berkay Orhan's portfolio in the look of the second attached image. Header as there:
"Berkay Orhan" in the grotesk at the left; "Work", "Research", "Experience", "About", "Ask" and
"EN / SV" in small monospace, with "Ask" underlined in lime; a lime "Contact" button with graphite text
at the right. On the phone the header is "Berkay Orhan", the lime "Contact" button and a two-line menu
mark.

The page is "Ask the site": a visitor types a question about Berkay's work, the site searches its own
pages in the browser, and a small free model writes a one or two sentence answer from what it found.
Every board shows the moment after the visitor asked "Which projects use LangGraph?". The answer
reads: "Two of them. The Municipality Chatbot uses LangGraph to orchestrate its answers, and SynGraph
uses it to run a supervisor and its worker agents." The matches are, in order: "Municipality Chatbot:
AI-Powered Citizen Services" (/projects/municipality-chatbot, "AI chatbot platform for Swedish
municipalities with GraphRAG"), "SynGraph: Deep Research Agent" (/projects/researcher, "LangGraph +
Next.js workflow that orchestrates supervisor and worker agents"), "SynGraph: Deep Research Agent"
(/papers/researcher, "Project paper"). The word "LangGraph" is lit lime wherever it appears in a match. A tiny dim monospace status line with a small lime dot reads "answers from a
free model on my home server".

The trace: one thin lime line, about 2 px, runs down the far left of the page (about 2 percent in on
desktop, 20 px in on the phone), like an oscilloscope trace: flat where nothing happens, a short
vertical waveform burst where a section starts, and small lime ticks or dots where it passes each item
of a list. Information hangs off it with thin faint leader lines.

Palette: background deep graphite #0F1012 with a very subtle grain, text off-white #ECEAE4, dim text
#8A8C90, faint #2A2D31 for rules and guide lines, one accent acid lime #C8F542. No other hues, no
gradients, no glow, no gloss, no shadows, no 3D. Type: headlines in a geometric grotesk like Space
Grotesk 600 with tight tracking; everything else in a monospace like JetBrains Mono. All text in
English, crisp and legible, exactly as given here.

Composition: editorial and asymmetric, big contrast in scale, lots of empty graphite. Information is
drawn or set as type, never boxed.

Must not appear: cards, boxes or panels with borders or fills, chat bubbles, avatars, robot or sparkle
icons, any icon, emoji, logos of companies or models, tag pills or chips, blue links, coloured buttons
other than the one lime button style, gradients, any person.

## a-cited

The current layout, made sharper. Small lime index "ASK", headline "Ask the site." and one dim lede
line. The question sits on a waveform burst as large grotesk type (about 44 px) on a single faint
underline, with a small lime "Ask" button at the right end of the line. Under it, the answer on its own
burst, set large in the grotesk (about 30 px), with small lime superscript citation numbers after the
claims ("Municipality Chatbot¹", "SynGraph²"). Below, the matches as numbered rows on faint full-width rules,
each with a lime tick on the trace, its number matching the citation (a dim "01" in lime for the cited
ones), the project name in the grotesk, one dim line of what it is, and its path in dim monospace at
the far right. On the phone the same, stacked, the path under the line.

## b-signal

The trace answers. The question runs as one line of large grotesk type along the trace, which is flat
under it. Where the answer starts, the trace swells into a long waveform that runs across the page under
the answer text, as if the site were speaking it. The answer sits above that waveform in the grotesk at
about 32 px. From words in the answer, thin faint leader lines drop to the matches, which hang off the
right half of the page as labels: the name in off-white grotesk, the path in dim monospace, the lit
words in lime, like annotations on a patent drawing. No list rows. On the phone the waveform runs down
the left lane beside the answer and the matches follow below it as annotated labels.

## c-index

The whole site as an index. Two columns on desktop. The left column holds the question (large grotesk
on a faint underline), the answer in the grotesk at about 26 px and the status line. The right column is
a dense index of every page on the site in small monospace, grouped under dim headings "Projects",
"Papers", "Pages": about 24 short names in three columns, most of them dim. The three matches are lit
off-white with a lime dot before them and their lit word in lime, and thin faint leader lines run from
the answer to them. It shows that the search looked at the whole site and what it picked. On the phone
the index comes below the answer as a single dim list with the matches lit.

## d-overlay

Ask from anywhere. The landing page is shown dimmed far into the graphite behind, and over it a
full-width layer opened from the header's "Ask": no box, just the graphite darkened under it. At the
top of the layer the question as very large grotesk type (about 56 px) with a lime caret, and at the
right a dim monospace hint "esc". Under it the answer in the grotesk at about 28 px, then the matches as
a tight keyboard list in monospace: the first row selected with a lime bar on the trace and its name
lime, the rest off-white, each with its path dim at the right. At the bottom a dim monospace line of key
hints: "↑↓ move · enter open · esc close". On the phone the layer fills the screen under the header,
the question at the top, the answer and the list below, with a dim "Close" at the top right instead of
"esc".
