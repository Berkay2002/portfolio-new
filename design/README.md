# Portfolio design

Status: approved and built (2026-10-06). The hero is `hero-r2-e4-hoodie` (`design/approved/landing-desktop.png`),
the rest of the page is `landing-r2.md` ("the signal", `design/approved/landing-s*.png`) and the phone
boards are `landing-mobile-r1.md` (`design/approved/landing-mobile-*.png`). About's "how I build" is
`stack-r4.md` a-surfaces (`design/approved/landing-s5-stack.png`), with each layer's line running on
to the projects built with it from `about-r1.md` b-used-in (`design/approved/about-used-in.png`;
wide screens only, phones list them under the layer), and the photo section is
`photos-r3.md` b-prints (`design/approved/photos-prints.png`). The build is `app/page.tsx`
with `components/landing/`; screenshots of it are in `design/screens/`.

The other pages follow `pages-r1.md` (`design/approved/pages-*.png`, built 2026-10-06):
`app/(site)/layout.tsx` gives them the landing's header and footer and runs the trace straight down
the left lane; sections hang a burst off it
(`components/landing/page-parts.tsx`), list rows a dot. The pages are `components/landing/pages.tsx`,
the thesis benchmark `thesis.tsx` and the FastTalk benchmark `fasttalk.tsx`. Departures from the
mockups: the thesis tradeoff scatter and the FastTalk radar chart are left out, and FastTalk's run
chart plots the 20 per-run values the data has (10 short, 10 medium questions), not 30.
A project's media follow `project-media-r1.md` a-reel (`design/approved/project-media-reel.png`): the
cover runs wide under the lede and the screenshots or videos run as a sideways reel with "01 / 07
Next". The Stats for Spotify and LiTHePlan screenshots had their browser frame cropped off.
`/ask` (Ask the site, `components/landing/ask.tsx`) is built from the `pages-r1` parts without a round of
its own: a page head, the question on a burst, the answer on a burst, and the matches as list rows with a tick
(`design/screens/ask.*.png`). The hero asks too (`components/landing/hero-ask.tsx`): it keeps main's overline,
headline, lede and two buttons, and a quiet "Or ask me about my work" line under them, led by a burst, opens the
composer of `ask-r7.md` (`design/approved/landing-hero-ask.png`) in their place (`ask-r9.md`). The composer's
bottom edge carries the trace, lime round the corner into a burst that swells while an answer is on its way. The
first question turns the hero into the conversation of `ask-r8.md` a-bubbles
(`design/approved/landing-hero-ask-chat.png`): questions in rounded bubbles on
the right, answers on the left with the pages they name linked, the composer docked one line tall above the
hero's waveform. While the model is off, a question goes to `/ask?q=`.

How a project works follows `project-arch-r1.md` a-across (`design/approved/project-arch-across.png`):
under the lede the trace leaves the lane, runs right through the project's stations and drops back into
the lane (on phones the stations sit on the lane, top to bottom). Each station is a small lime drawing of
what kind of step it is (what comes in, a model, a stream, stored data, a split) with a two-line label;
the stations are in `lib/data/flows.ts` and the drawing is `components/landing/flow.tsx`.

## The system

- Palette (`.landing` in `app/globals.css`): graphite `#0F1012`, off-white `#ECEAE4`, dim `#8A8C90`,
  faint `#2A2D31`, one accent acid lime `#C8F542`. No other hues, no gradients, no glow.
- Type: Space Grotesk 600 with tight tracking for headlines (`.font-display`), JetBrains Mono for
  everything else.
- The portrait (`public/images/hero-portrait.jpg`) is rendered with Codex from his real profile photo
  (`design/specs/portrait-r1.md`, variant b-plain, with dark headroom added) and faded into the
  background. It appears only in the hero. On phones it shows his head and shoulders in the middle, as tall as the
  screen has room for above the buttons, so the headline, both buttons and the ask line fit on the first screen. It must stay a faithful photo of him: never a drawn
  character, never an invented body, and Berkay sees any new render before it is used.
- No cards, boxes, tables, tag pills, skill bars or icons. Information is drawn on the trace, except "how
  I build": an exploded patent drawing of five plates (`components/landing/stack.tsx`), each machined
  with a finish for its layer (a layout grid, a looping groove, a weight matrix, contour lines, a rack
  of slots) and one lime element. Rounds 1 to 3 (waveforms on the trace, generic diagrams, slabs and
  glass) were rejected as not saying what each layer is or as looking AI-made.
- Photos are Berkay's own from Japan and Portugal (`public/images/photography/<place>-<n>.webp`, 1800 px,
  and `-sm.webp`, 720 px, metadata stripped; listed in `lib/data/photos.ts`). They have their own
  section after About, "06 / Off the clock" (`photos-r3.md` b-prints, headline just "Photography."):
  five prints with a thin off-white border dealt across the page (`components/landing/prints.tsx`),
  the middle one straight and in colour, the rest greyscale with colour on hover; `/photography` shows all of them in colour, in columns that keep
  each photo's shape, with a click opening the large one.
- The trace: one thin lime line down the whole page. It becomes each section's drawing (the FastTalk
  pipeline, the retrieval fan-out, the career axis, the contact waveform). In code,
  sections place zero-size anchors (`<A />` in `components/landing/trace.tsx`) and the root joins them
  with curves; an anchor hidden at a breakpoint is skipped, so desktop and phone route differently.
- Motion: the trace draws itself on scroll down to a pen at 75 % of the viewport, with a lime dot at its
  tip. Each waveform (`<Wave />`) swells from flat when the line reaches it; the career axis and the contact waveform fill bar by bar as the line runs through them, and the line always joins a waveform at its end, never inside it. The stack's plates open with the scroll: closed as the drawing comes up, fully open once the whole drawing is on screen, and closing again on the way back up, with the guides and labels fading in last. While open each plate's finish loops (the focus field steps across the layout, a dash runs the groove, matrix cells blink, contour rings ripple, slots light in turn); with reduced motion the stack is open and still. The photo prints work much the same way: piled in the middle as the row comes up, dealt out over half a screen of scrolling, piled again on the way back up; on phones the dealt row runs off both edges and swipes sideways a print at a time, starting on the middle one. On desktop the hero's signal fills from left to right as the page starts to scroll and the trace leaves from its right end (on phones it is already on). Experience runs from 2021 on the left to now on the right, a bar per week of GitHub contributions read at build time and refreshed hourly (`lib/github.ts`, `experience-r1.md`), each as tall as the square root of its count, with year totals under the years and the busiest week called out; the years before 2024 barely show on GitHub, so they get a third of the width of the later ones; on phones the axis runs down 96 px in with the early years squeezed tighter still, only the years at its left, the moments at its right and the busiest week as one line; without a GITHUB_TOKEN the drawn wave stands in.
  With prefers-reduced-motion the trace is drawn in full and nothing moves.
- Phone: the trace runs in a lane 20 px from the left edge, text starts at 48 px, drawings run top to
  bottom, tap targets are at least 44 px. The header is "Berkay Orhan", Contact and a menu on every screen.

Round 1 (`hero-r1.md`) reused Genomlyst's palette, fonts, paper and character style and was rejected
as a reskin. From Genomlyst the portfolio takes only the method below (spec-driven Codex rounds, one
accent, one human moment), never its look. No Genomlyst image is attached as a reference.

## How a round works

The pipeline is Genomlyst's, recovered from its scripts on 2026-10-05.

1. A round is one spec file, `design/specs/<surface>-r<round>.md`, with a `## Shared` section and one
   section per variant (`## a-workbench`). The sections are the prompt, passed to the image tool word for
   word: render size, palette hexes, type described by feel, layout with exact copy, depth, and what must
   not appear. Notes for people go above `## Shared`.
2. Plain `codex exec` renders it: Codex reads the spec, calls its built-in image tool exactly once, and
   passes `## Shared` followed by the variant section verbatim. References go in with `-i`. The render
   lands in `design/mockups/<spec stem>-<key>.png`. Renders that were not picked are deleted once the
   round is settled; git history keeps them.
3. Berkay picks. Edit rounds are the same call with the previous render attached first and "editing the
   first attached image" in the instruction; they pass only their own section.
4. The approved image moves to `design/approved/` and this file is updated with what it settled.
5. Text, the underline's position and numbers are fixed in code, not re-rendered.

Sizes: mockups ask for 1536x1024 in the instruction to Codex; illustrations ask for 1024x1024 in the
spec itself.

### Running a spec

`design/scripts/render.ps1` makes the call, then copies the newest png from
`~/.codex/generated_images/<session id>/` (the id comes from the Codex log in `%TEMP%`) into
`design/mockups/`. From the repo root in PowerShell, for hero round 2:

```powershell
foreach ($k in "d-grid", "e-console", "f-poster") {
  .\design\scripts\render.ps1 -Spec design/specs/hero-r2.md -Key $k -Refs public\images\profile.jpg
}
```

An edit round passes the previous render with `-Edit`, e.g. `-Key a2-blue -Refs design\mockups\<spec stem>-<key>.png -Edit`.

Add `-Model gpt-6-luna` to pin the model, as Genomlyst did. The underlying call, if you run it by hand:

```
codex exec -s workspace-write "Read design/specs/hero-r2.md. Use your built-in image generation tool exactly once, at 1536x1024, ... Do not write code and do not edit files." -i <ref1> -i <ref2> < /dev/null > codex.log 2>&1
```

The prompt goes before `-i`: `-i` takes several values, so a prompt after it is read as an image path.
Closing stdin (`< /dev/null`, or piping `$null` in PowerShell) keeps codex from waiting on it.

`design/scripts/cutout.py` (from Genomlyst, unused so far) cuts a render on white out to a transparent webp.

## Files

- Specs: `design/specs/<surface>-r<round>.md`, lowercase kebab-case, one section per variant.
- Renders: `design/mockups/<spec stem>-<key>.png`. Approved: `design/approved/<surface>-<desktop|mobile-N|section>.png`.
- Screenshots of the build: `design/screens/<name>.<width>[.full].png`.
- Raw assets: `design/assets/<name>-raw.png`.
