# Landing r1: the rest of the page below the approved hero

Same method as Genomlyst's landing r5: one shared rules section, then one section per screen. Each image
is one scrolled screen of the same long page, below the approved hero (`design/approved/landing-desktop.png`,
attached with -i as the only reference). Copy comes from the current site (`lib/data`); every number
carries the context that explains it, since bare facts were rejected in hero r2. The portrait appears
only in the hero; no screen draws or generates Berkay.

## Shared

One screen of Berkay Orhan's personal portfolio website, further down the same long page as the attached
hero, which is the style reference: match its colours, type, spacing, flat matte look and restraint
exactly. Do NOT repeat its headline, its portrait or its layout.

Render: one landscape image, 1536x1024, a flat desktop website screenshot of one scrolled screen (1440 px
viewport), no browser chrome, no site header (we are mid-page). All text in English, spelled exactly as
written here, crisp and legible.

Palette: background deep graphite #0F1012 with a very subtle grain, raised surfaces (cards, panels)
#16181B with a 1 px border #26292E, text off-white #ECEAE4, muted text #8A8C90, one accent acid lime
#C8F542 used sparingly: overlines, small markers, one line motif per screen, the primary button (lime
fill, graphite text). No other hues, no gradients, no glow, no bloom, no glossy 3D.

Type: headlines in a geometric grotesk like Space Grotesk, weight 600, about 56 px, tight tracking.
Everything else in a monospace like JetBrains Mono: body about 18 px, labels and tags about 14 px.

Layout: left margin 58 px like the reference. Each screen starts with a small letter-spaced lime
monospace overline with a two-digit index (for example "02 / SELECTED WORK"), then the headline. One idea
per screen. Generous empty graphite. Cards have 8 px corners.

Must not appear: any person, face, portrait or body; robots, brains, circuit boards, glowing networks,
particles, code rain, emoji, logos of companies, any text or number not written here.

## s2-work

Overline "02 / SELECTED WORK". Headline "Things I've shipped." To the right of the headline, a quiet text
link "All 19 projects →".

Below, a 2x2 grid of project cards filling the width. Each card: a dark preview panel on top (about 40 %
of the card) holding one simple lime line drawing named below, no text in it; then the title in the
grotesk, one line of description, and a row of small outlined monospace tags.
- "FastTalk" / "Real-time voice assistant: speech to text, LLM and speech back, streamed end to end." /
  tags "Python", "FastAPI", "vLLM", "WebSocket". Preview: a voice waveform.
- "SynGraph" / "Deep-research agent: a supervisor plans, parallel workers search, it writes a cited
  brief." / tags "LangGraph", "Next.js", "Gemini". Preview: a small graph of nodes and arrows fanning
  out from one node.
- "wikillm" / "CLI that compiles raw sources into cross-linked Obsidian wikis for coding agents." / tags
  "TypeScript", "Node.js", "npm". Preview: stacked document outlines linked by thin lines.
- "LiTHePlan" / "Course planner for Linköping University: 339 courses, 15 programmes, valid 90 hp plans."
  / tags "Next.js", "React", "Supabase". Preview: a simple grid of course blocks, a few filled lime.

## s3-research

Overline "03 / RESEARCH". Headline "My master's thesis, at Ericsson."

Left column, about 620 px wide: the thesis title in the grotesk, about 30 px: "When Agentic Workflows
Help: Hybrid Retrieval for Test Case Recommendation". Under it in muted monospace: "Master's thesis ·
Ericsson · Jan–Jun 2026". Then one paragraph: "An AI assistant that helps engineers find the right
tests. It searches Ericsson's production test cases with dense, keyword, SQL and graph retrieval, and I
compared two agent workflows on the same tasks." Then a lime button "Read the thesis" and a text link
"See the benchmark →".

Right: one raised panel with four rows separated by thin rules. Each row: a large number in the grotesk
in off-white, and next to it a label that explains it in muted monospace:
- "11,366" / "production test cases the assistant searches"
- "52" / "hand-built retrieval tasks to evaluate it"
- "2" / "agent workflows compared: ReAct and orchestrator-worker"
- "3" / "open models tested: GLM-5.1, DeepSeek-V3.2, Qwen3-Coder"

Bottom of the screen, a small heading "Other papers" and two thin rows, each with a title, a muted
author line and a text link "PDF →":
- "SynGraph: Deep Research Agent" / "Berkay Orhan"
- "AniMatch: A Content-Based Anime Recommendation System" / "Berkay Orhan, Jonatan Ebenholm"

## s4-experience

Overline "04 / EXPERIENCE". Headline "Where I've been."

A vertical timeline down the left half: one thin graphite line with small square markers; the top
marker is filled lime, the others outlined. Each entry: dates in muted monospace on the left of the
line, then on the right the role in the grotesk, the place in monospace, and one line of description.
- "Jun 2026 – now" / "AI Engineer, R&D" / "Ericsson · Linköping" / "Applied AI systems in R&D, continuing
  the work from my thesis."
- "Jan – Jun 2026" / "Master's thesis" / "Ericsson" / "Agentic hybrid retrieval for test case
  recommendation."
- "2024 – now" / "MSc, Machine Learning" / "Linköping University" / "Machine learning, image processing
  and cybersecurity."
- "2021 – 2024" / "BSc, Media Technology" / "Linköping University" / "Programming and applied
  mathematics."

Right half: empty graphite, with one thin lime waveform line running horizontally at the height of the
top entry and fading out to the right.

## s5-about

Overline "05 / ABOUT". Headline "Engineer first, then the AI."

Left column, about 560 px: two short paragraphs in monospace: "I like the part after the demo: making
retrieval return the right thing, making a voice agent answer fast enough to feel like a conversation,
and building the web app people actually use." and "Outside work: photography, games and friends."
Then a text link "Download CV →".

Right: a raised panel titled "Stack" in small lime monospace, with five rows, each a muted label on the
left and the tools in off-white monospace on the right:
- "Languages" / "TypeScript, Python, C++"
- "AI" / "LangGraph, LangChain, PyTorch, vLLM"
- "Web" / "Next.js, React, FastAPI, Tailwind"
- "Data" / "PostgreSQL, Supabase, Qdrant, Neo4j"
- "Infra" / "Docker, Kubernetes, Vercel, GCP"

## s6-contact

The last screen. Top two thirds, centred: overline "06 / CONTACT", then a large headline in the grotesk,
about 88 px, two lines: "Building something" / "that has to work?" Under it in muted monospace: "I read
every message. Linköping, or remote." Then the lime button "Email me" and next to it the outlined
buttons "GitHub" and "LinkedIn". Under the buttons, small muted monospace: "berkayorhan@hotmail.se".

A thin lime waveform line runs across the full width just below the buttons, flat at both ends with a
small burst in the middle.

Footer at the bottom, separated by a thin rule #26292E: left "Berkay Orhan" in the grotesk and "© 2026"
in muted monospace; right, muted monospace links "Work", "Research", "Experience", "CV", "Back to top ↑".
