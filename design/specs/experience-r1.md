# Experience r1: the career wave drawn from real GitHub commits

Status: a-annotated approved and built (2026-10-06, `design/approved/experience-r1-a-annotated.png`).
b and c were not picked and are deleted; git history keeps them. The data comes from `lib/github.ts`
(GITHUB_TOKEN at build time, refreshed daily); without a token the section keeps the drawn wave.
The build counts all GitHub contributions (mostly commits), so the copy says contributions.

Experience (`design/approved/landing-s4-experience.png`) runs a time axis from 2021 at the left to now at
the right, with a waveform on it that grows with the years and four moments hung off it. The waveform is
made up: hand-placed peaks. This round mocks three ways to make every bar one week of Berkay's GitHub
contributions, fetched at build time, so the wave is data with context.

The real data (GitHub contribution calendar for Berkay2002, private contributions included), per year:
2021: 1, 2022: 24, 2023: 10, 2024: 99, 2025: 1,431, 2026 so far: 2,893. That is about 300 weeks, near
zero through 2023, a first rise in late 2024, steady activity through 2025 and tall spikes in 2026. The
busiest week is the week of 8 March 2026 with 526; the next are 27 September 2026 (414) and 4 January
2026 (266). Heights follow the square root of each week's count, so the quiet years read as a low flat
line with a few small ticks rather than nothing.

References attached with -i, in this order: the approved Experience section
(`design/approved/landing-s4-experience.png`) for its layout, moments and labels; the approved landing hero
(`design/approved/landing-desktop.png`) for colours, type, header and the trace.

## Shared

A clean presentation board, 1536x1024, flat deep graphite #0A0B0C. On the left, about 1080 px wide, a
flat screenshot crop of a desktop web page section (no browser chrome, no header). On the right, one
iPhone-style screen (390x844 proportions, thin dark bezel, rounded corners), straight on, no perspective,
no hands, showing the same section on a phone. Even gaps, nothing else on the board, no watermark.

The website is Berkay Orhan's portfolio in the look of the second attached image. The section is
Experience, as in the first attached image: a small lime monospace index "04 / EXPERIENCE" and the
headline "Where I've been." in the grotesk. Under it the trace, one thin lime line about 2 px, comes in
from the far left and becomes a horizontal time axis across the page, with year labels 2021 to 2026 in dim
monospace and short dashed faint ticks. Four moments hang off the axis with small lime ring dots and thin
leader lines, as in the first attached image: "BSc, Media Technology / Linköping University · 2021–2024",
"MSc, Machine Learning / Linköping University · 2024–2026", "Thesis, then R&D intern / Ericsson ·
Jan–Sep 2026" and, in lime, "Software Developer / Ericsson · Linköping · since Oct 2026".

The waveform on the axis is now data: about 300 thin vertical lime bars, one per week from January 2021
to October 2026, evenly spaced and mirrored above and below the axis like an oscilloscope signal. It is
almost flat from 2021 to mid 2024 (a hairline with three or four tiny ticks), rises a little in late
2024, is a steady low-to-medium texture through 2025, and through 2026 has tall irregular spikes, the
tallest in early March 2026 and another near the right end in late September 2026. It must look like real
irregular data, not a smooth curve.

On the phone the axis runs top to bottom 88 px in from the left with the years at its left and the same
weekly bars turned to run sideways, the moments to the right of it, one under the other.

Palette: background deep graphite #0F1012 with a very subtle grain, text off-white #ECEAE4, dim text
#8A8C90, faint #2A2D31 for rules and guide lines, one accent acid lime #C8F542. No other hues, no
gradients, no glow, no gloss, no shadows, no 3D. Type: headlines in a geometric grotesk like Space
Grotesk 600 with tight tracking; everything else in a monospace like JetBrains Mono. All text in English,
crisp and legible.

Composition: editorial and asymmetric, lots of empty graphite. Information is drawn on the line or set as
type, never boxed.

Must not appear: cards, boxes or panels with borders or fills, chart frames, gridlines, y-axis numbers,
legends, a GitHub logo or any logo, icons, the green GitHub contribution squares, tag pills or chips,
emoji, gradients, glowing lines, any person.

## a-annotated

The wave as described, with three pieces of context set as type on it. Under the axis at the far left,
one line of dim monospace: "Each bar is a week of my GitHub commits." The busiest week carries a small
lime dot at its tip and a thin leader up to a two-line label in monospace: "526 commits" in off-white,
"week of 8 March 2026" in dim. Under each year label, its total in small dim monospace: "1", "24", "10",
"99", "1,431", "2,893 so far". The four moments stay where they are.

On the phone: the same line of dim text under the headline, the year totals next to the years, and the
busiest week's label to the right of its spike.

## b-totals

The year totals are the context. Above the wave, centred over each year's stretch of the axis, its total
set in the grotesk, sized by how much there is: "1" and "10" small and dim, "24" small, "99" a little
bigger, "1,431" large in off-white and "2,893" largest, with a dim monospace "so far" after it. Under the
axis at the far left one line of dim monospace: "Weekly GitHub commits, 2021 to now." The jump in scale
between the numbers tells the story without any chart furniture. The four moments stay, their labels
moved below the axis where the totals sit above it.

On the phone: each year's total set to the left of its stretch of the axis, small to large, in place of
the plain year labels ("2025 · 1,431").

## c-detail

As a patent drawing's detail view. The wave as described runs the axis. The last twelve months (October
2025 to October 2026) are also drawn a second time, magnified about three times, as a larger waveform
floating above the right half of the section, its bars wider apart so single weeks are readable. Two thin
faint guide lines run from the ends of that stretch on the axis up to the ends of the magnified wave, and
a small dim monospace label "Detail A, the last 12 months" sits at its left end. On the magnified wave
the busiest week has a small lime dot and the label "526 commits / week of 8 March 2026", and under the
whole section one line of dim monospace: "Each bar is a week of my GitHub commits." The four moments keep
their places; the last one hangs below the axis so the detail has room.

On the phone: the magnified last twelve months sits as a second, wider sideways wave to the right of the
lower end of the axis, joined to it by the two guide lines, with "Detail A, the last 12 months" above it.
