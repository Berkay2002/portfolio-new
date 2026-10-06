# Ask r2: Ask in the hero

Status: rejected (2026-10-06).

After `ask-r1` Berkay asked for Ask in the hero, "like the composer": the place to ask sits on the
landing's first screen instead of only on `/ask`. Every board shows the approved hero with a composer
added: the desktop after a question was answered, the phone before anyone asked.

References attached with -i, in this order: the approved landing hero (`design/approved/landing-desktop.png`)
and the approved phone boards (`design/approved/landing-mobile-1.png`, the first phone only). Keep the
portrait exactly as it is there; it is a real photo and must not be redrawn.

## Shared

A clean presentation board, 1536x1024, flat deep graphite #0A0B0C. On the left, about 1080 px wide, a
flat screenshot of the first screen of a desktop website, starting with its header (no browser chrome).
On the right, one iPhone-style screen (390x844 proportions, thin dark bezel, rounded corners), straight
on, no perspective, no hands, showing the first screen on a phone. Even gaps, nothing else on the board,
no watermark.

The website is Berkay Orhan's portfolio hero exactly as in the first attached image, with the same
portrait on the right fading into the graphite, the same header ("Berkay Orhan" left; "Work",
"Research", "Experience", "About", "EN / SV" in small monospace; a lime "Contact" button), the overline
"AI ENGINEER · LINKÖPING" in lime, the headline "I build AI that" / "works outside the demo." and the
lede "Agentic retrieval, voice pipelines and the web apps around them. Now in R&D at Ericsson." The
phone matches the first phone of the second attached image. What changes is one thing: a composer, a
place to type a question about Berkay's work, is added to the hero as the variant describes.

On the desktop the visitor has asked "Which projects use LangGraph?" and the answer has come back:
"Two of them. The Municipality Chatbot uses LangGraph to orchestrate its answers, and SynGraph uses it
to run a supervisor and its worker agents." The matches are "Municipality Chatbot" (/projects/municipality-chatbot)
and "SynGraph" (/projects/researcher). A tiny dim monospace status line with a small lime dot reads
"answers from a free model on my home server". On the phone nobody has asked yet: the composer is
empty, showing its placeholder "Ask about my work", and under it three dim example questions in small
monospace: "Which projects use LangGraph?", "What does he do at Ericsson?", "Anything with voice?".

The hero's lime waveform still runs across under the hero, as in the reference.

Palette: background deep graphite #0F1012, text off-white #ECEAE4, dim text #8A8C90, faint #2A2D31 for
rules and outlines, one accent acid lime #C8F542. No other hues, no gradients, no glow, no gloss, no
shadows, no 3D. Type: headlines in a geometric grotesk like Space Grotesk 600 with tight tracking;
everything else in a monospace like JetBrains Mono. All text in English, crisp and legible, exactly as
given here.

Must not appear: cards or panels with fills, chat bubbles, avatars, robot or sparkle icons, emoji,
logos of companies or models, tag pills or chips, blue links, gradients, glow, any other person, any
change to the portrait.

## a-composer

A real composer, in the style of the hero's "Download CV" button. Under the lede, where the two buttons
were, one input field as wide as the lede: a thin 1 px faint outline, square corners, about 56 px tall,
no fill. Inside it the question in off-white monospace, and at its right end a small lime square key
with a graphite return arrow drawn as two strokes. The buttons "See my work" (lime) and "Download CV"
(outlined) move under it, smaller. On the desktop the answer sits between the composer and the buttons:
the answer in the grotesk at about 22 px in off-white, under it the two matches as monospace links
with the path dim ("Municipality Chatbot  /projects/municipality-chatbot"), then the status line. On the
phone the composer is full width under the lede, the example questions under it, then the two buttons.

## b-line

No box at all. Under the lede, one long faint underline as wide as the lede, with the question in
off-white grotesk at about 26 px sitting on it, a lime text caret after it, and a small lime "Ask ↵"
in monospace at the right end of the line. The answer appears under the line in off-white monospace at
about 16 px, with "Municipality Chatbot" and "SynGraph" in it lit lime and underlined as links, then
the status line. The buttons "See my work" and "Download CV" stay below as they are. On the phone the
same, stacked.

## c-wave

The hero's waveform is the composer. The question sits on the waveform line itself, in off-white
monospace at about 18 px, left of the burst, as if typed onto the signal, with a lime caret; the
waveform is flat under the text and swells after it. The answer appears just under the waveform in the
grotesk at about 22 px, and from the burst two thin faint leader lines drop to the two matches set as
small labels (name in off-white, path in dim monospace), like annotations on a patent drawing. The lede
and the two buttons stay above, as in the reference. On the phone the empty composer is the flat part of
the phone's waveform at the bottom, with the placeholder written on it, the example questions above it.

## d-prompt

A terminal prompt. Under the lede, in place of the buttons, one line of monospace at about 18 px: a lime
"›" then the question in off-white, then a lime block cursor. Under it, indented to the question, the
answer in dim off-white monospace, the project names lit lime, then the status line. The buttons "See
my work" and "Download CV" sit on one line under that. On the phone the prompt line is empty with the
placeholder dim after the lime "›", the example questions listed under it, each starting with a dim "›".
