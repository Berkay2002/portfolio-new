# Portfolio design

Status: round 1 of the hero (`design/specs/hero-r1.md`). Nothing is approved yet. Once a hero is
approved, its image goes in `design/approved/` and this file records the system the build follows.

The redesign takes its language from the Genomlyst landing (`genomlyst/design/README.md`): the page
feels like a well-made printed document with one warm human moment, a hand-drawn character. Depth comes
from paper planes, light, shadow and motion between those planes. Never from gradients, glow or glossy 3D.

## Starting system (from Genomlyst, to be confirmed by round 1)

### Palette

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F3EEE5` | Page background, linen with fine grain |
| `sheet` | `#FBF8F2` | Project sheets, paper chips, cards, anything that is a piece of paper on the page |
| `ink` | `#242424` | Headline, body, nav, line work |
| `ink-muted` | `#5F5A53` | Captions, dates, fine print |
| `black` | `#111111` | Pill buttons |
| `accent` | `#C8643B` terracotta (variant: `#2B4BA8` pen blue) | Overline, hand underline, stamp, the thread. One accent moment per region. |
| `butter` | `#F7C977` | The character's sweater, highlight marker behind numbers |

No other hues. Accent text only for the overline and short labels, never body text.

### Type

| Role | Family | Notes |
|---|---|---|
| Display, section titles | Fraunces (variable), 750-800, SOFT 30 | Tracking -0.022em |
| Lede, body, nav | Source Serif 4 | |
| Overline, buttons | Inter 500-600 | Overline uppercase, tracking 0.18em |
| Dates, stacks, metrics | IBM Plex Mono 400/500 | Chips, sheet rows, timeline dates |

All four are on Google Fonts, so `next/font/google` loads them.

### Components to carry over

- Pill button: black, fully rounded, 47 px tall at 1440, lifts 2 px on hover, 3 px accent focus ring.
- Paper chip: `sheet`, radius 3 px, soft shadow, a label and a mono value.
- Document sheet with a folded corner top right, mono text, a dashed rule.
- Stamp: accent ring and word, rotated about -8 deg, ink texture. Once per page.
- Hand underline and hand circle: one SVG stroke each, drawn once on entrance.
- Islands (project and paper pages): rounded `sheet` planes, radius 24 px, a soft long shadow.

### Depth and motion

- One warm light from the upper left; shadows fall down and to the right.
- Planes back to front: paper, a blurred page upper right, the scene, the sheet, chips, stamp, a blurred
  page bottom right cropped by the frame. Nothing floats over text, buttons or the header.
- Entrance once, about 3 s; idle bob of a few px on 9-14 s cycles; pointer parallax by depth; one accent
  thread drawn down the page by scroll, ending in a loop around the closing contact pill.
- `prefers-reduced-motion: reduce` and `?still` render the final state with no motion.

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
`design/mockups/`. From the repo root in PowerShell, for hero round 1:

```powershell
$G = "E:\Dev\.me\projects\genomlyst"
$refs = "$G\design\approved\landing-desktop.png", "$G\design\assets\character-raw.png", "public\images\profile.jpg"
foreach ($k in "a-workbench", "b-paper", "c-desk") {
  .\design\scripts\render.ps1 -Spec design/specs/hero-r1.md -Key $k -Refs $refs
}
.\design\scripts\render.ps1 -Spec design/specs/hero-r1.md -Key a2-blue -Refs design\mockups\hero-r1-a-workbench.png -Edit
```

Add `-Model gpt-6-luna` to pin the model, as Genomlyst did. The underlying call, if you run it by hand:

```
codex exec -s workspace-write "Read design/specs/hero-r1.md. Use your built-in image generation tool exactly once, at 1536x1024, ... Do not write code and do not edit files." -i <ref1> -i <ref2> < /dev/null > codex.log 2>&1
```

The prompt goes before `-i`: `-i` takes several values, so a prompt after it is read as an image path.
Closing stdin (`< /dev/null`, or piping `$null` in PowerShell) keeps codex from waiting on it.

The Genomlyst images are style references only and are never copied into this repo (Genomlyst is
private).

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
- Renders: `design/mockups/<spec stem>-<key>.png`. Approved: `design/approved/<surface>-<desktop|mobile-N>.png`.
- Raw assets: `design/assets/<name>-raw.png`.
