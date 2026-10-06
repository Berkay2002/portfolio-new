# Portfolio design

Status: approved and built (2026-10-06). The hero is `hero-r2-e4-hoodie` (`design/approved/landing-desktop.png`),
the rest of the page is `landing-r2.md` ("the signal", `design/approved/landing-s*.png`) and the phone
boards are `landing-mobile-r1.md` (`design/approved/landing-mobile-*.png`). The build is `app/page.tsx`
with `components/landing/`; screenshots of it are in `design/screens/`.

## The system

- Palette (`.landing` in `app/globals.css`): graphite `#0F1012`, off-white `#ECEAE4`, dim `#8A8C90`,
  faint `#2A2D31`, one accent acid lime `#C8F542`. No other hues, no gradients, no glow.
- Type: Space Grotesk 600 with tight tracking for headlines (`.font-display`), JetBrains Mono for
  everything else.
- The portrait is Berkay's own photo, cropped from the approved hero (`public/images/hero-portrait.jpg`)
  and faded into the background. It appears only in the hero. Never generate his body or face.
- No cards, boxes, tables, tag pills, skill bars or icons. Information is drawn on the trace.
- Photos in About are Berkay's own from Japan and Portugal (`public/images/photography/`, 800x600 webp
  with metadata stripped), shown in greyscale with colour on hover.
- The trace: one thin lime line down the whole page. It becomes each section's drawing (the FastTalk
  pipeline, the retrieval fan-out, the career axis, the stack line, the contact waveform). In code,
  sections place zero-size anchors (`<A />` in `components/landing/trace.tsx`) and the root joins them
  with curves; an anchor hidden at a breakpoint is skipped, so desktop and phone route differently.
- Motion: the trace draws itself on scroll down to a pen at 75 % of the viewport, with a lime dot at its
  tip. Each waveform (`<Wave />`) swells from flat when the line reaches it; the hero's is already on.
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
   lands in `design/mockups/<spec stem>-<key>.png`.
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

An edit round passes the previous render with `-Edit`, e.g. `-Key a2-blue -Refs design\mockups\hero-r1-a-workbench.png -Edit`.

Add `-Model gpt-6-luna` to pin the model, as Genomlyst did. The underlying call, if you run it by hand:

```
codex exec -s workspace-write "Read design/specs/hero-r2.md. Use your built-in image generation tool exactly once, at 1536x1024, ... Do not write code and do not edit files." -i <ref1> -i <ref2> < /dev/null > codex.log 2>&1
```

The prompt goes before `-i`: `-i` takes several values, so a prompt after it is read as an image path.
Closing stdin (`< /dev/null`, or piping `$null` in PowerShell) keeps codex from waiting on it.

### Illustration assets (after the hero is approved)

Each illustration renders at 1024x1024 on flat pure white `#FFFFFF`, at least 60 px margin, no floor, no
shadow, with the approved character attached as the style reference. The raw render stays in
`design/assets/<name>-raw.png`, and `design/scripts/cutout.py` (numpy, pillow, scipy) cuts it out:

```
python design/scripts/cutout.py design/assets/<name>-raw.png public/images/site/<name>.webp preview.png
```

It makes the near-white region connected to the image border transparent (min channel >= 232) with a
soft one-pixel edge, crops to the content plus 8 px and saves webp at quality 88. White inside the
drawing stays because it does not touch the border. Layers that animate separately (a stamp, a chip)
are split with small PIL scripts kept next to the raw files.

## Files

- Specs: `design/specs/<surface>-r<round>.md`, lowercase kebab-case, one section per variant.
- Renders: `design/mockups/<spec stem>-<key>.png`. Approved: `design/approved/<surface>-<desktop|mobile-N|section>.png`.
- Screenshots of the build: `design/screens/<name>.<width>[.full].png`.
- Raw assets: `design/assets/<name>-raw.png`.
