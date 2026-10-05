# Portfolio design

Status: round 1 of the hero (`design/specs/hero-r1-*.md`). Nothing is approved yet. Once a hero is
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

1. A round is a spec per variant in `design/specs/<surface>-r<round>[-<variant>].md`, plus a
   `-common.md` for what the variants share. The spec is the prompt: render size, palette hexes, type
   described by feel, layout with exact copy, depth, and what must not appear.
2. Codex renders it with the references attached with `-i`. Renders go in `design/mockups/` with the
   spec's stem (`hero-r1-a.png`).
3. Berkay picks. Later rounds are edits of the pick: "Edit the attached image. Keep everything exactly as
   it is, with these changes only." Each edit round is a new spec file (`hero-r2-a.md`).
4. The approved image moves to `design/approved/` and this file is updated with what it settled.
5. Text, the underline's position and numbers are fixed in code, not re-rendered.

### Running a spec

From the repo root, in PowerShell, with `$G` pointing at the Genomlyst checkout:

```powershell
$G = "E:\Dev\.me\projects\genomlyst"
codex exec `
  -i "$G\design\approved\landing-desktop.png" `
  -i "$G\design\assets\character-raw.png" `
  -i public\images\profile.jpg `
  "Read design/specs/hero-r1-common.md and design/specs/hero-r1-a.md. Generate the image they describe with your image generation tool, 1536x1024, and save it as design/mockups/hero-r1-a.png. Do not change any other file."
```

Each spec lists the references it needs, in order. The Genomlyst images are style references only and are
never copied into this repo (Genomlyst is private).

### Illustration assets (after the hero is approved)

Each illustration renders at 1024x1024 on flat pure white `#FFFFFF`, at least 60 px margin, no floor, no
shadow, with the approved character attached as the style reference. The raw render stays in
`design/assets/<name>-raw.png`; a flood-fill cut-out script makes the transparent `.webp` for
`public/images/site/`. Layers that animate separately (a stamp, a chip) are split with small PIL scripts
kept next to the raw files.

## Files

- Specs: `design/specs/<surface>-r<round>[-<variant>].md`, lowercase kebab-case.
- Renders: `design/mockups/<same stem>.png`. Approved: `design/approved/<surface>-<desktop|mobile-N>.png`.
- Raw assets: `design/assets/<name>-raw.png`.
