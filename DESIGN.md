---
name: KIMERIS MADEN
description: Industrial editorial minimalism for a Turkish corporate mining site — warm paper, mineral ink, one terracotta seam.
colors:
  paper: "#FDFBF7"
  canvas: "#F4EEE8"
  ink: "#201A18"
  ink-strong: "#171310"
  muted: "#5D5350"
  soft: "#B8B2AC"
  hairline: "#E3DACF"
  seam: "#964F4C"
  seam-deep: "#7E423F"
  seam-bright: "#C87F7B"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 6.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0em"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.14em"
  control:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0em"
rounded:
  md: "6px"
spacing:
  touch-target: "44px"
  touch-target-lg: "56px"
  gutter: "24px"
  gutter-lg: "48px"
  section-y: "96px"
  section-y-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.control}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.seam}"
    textColor: "{colors.paper}"
  link-quiet:
    textColor: "{colors.ink}"
    height: "44px"
  link-quiet-hover:
    textColor: "{colors.seam}"
  link-row:
    textColor: "{colors.ink}"
    height: "44px"
  link-row-hover:
    textColor: "{colors.seam}"
---

# Design System: KIMERIS MADEN

## Overview

**Creative North Star: "The Geological Survey"**

The site reads as a geological survey of a company: layered strata, hairline rules, and dated honesty. A warm paper ground carries oversized ink editorial type; terracotta appears only as a seam — a thin deposit of color threaded through ink strokes, hovers, and the caret. The recurring material is an authored strata contour drawing, not photography: nine hand-set SVG paths that draw themselves once on load, then sit still. Depth never comes from shadows; it comes from tonal band alternation (paper → canvas → deep ink) and 1px hairlines, like rules on a survey sheet.

The world refuses the mining-category defaults: no cinematic photo wall, no unverifiable KPI strip, no dark/grunge pit aesthetic, no gradients, no box shadows. Empty states are designed panels, not blank rectangles — "no published news yet" is a real, styled answer. Turkish is the primary voice, so display type is wrapped in ch-based measures and guarded with hyphenation.

**Key Characteristics:**

- Warm paper ground (#FDFBF7) with mineral ink editorial type; terracotta seam accent held to ~10% of any surface.
- Manrope ExtraBold display with tight tracking (−0.03em to −0.035em) against Inter body at 18px/1.625 in muted ink.
- Hairline-only depth: 1px borders plus paper/canvas/ink-strong band alternation; zero box shadows, zero gradients.
- Authored strata contour SVG as the sole imagery — decorative, `aria-hidden`, and captioned as representative when mistakable for data.
- One motion gesture: seams draw once on load (1.6s expo-out, 0.12s stagger per path), fully gated by `prefers-reduced-motion: no-preference`.
- WCAG 2.2 AA: 44px minimum targets, seam focus-visible outlines with a bright variant on dark bands, verified contrast pairs.

## Colors

A warm mineral palette: two locked hues (paper, terracotta) and a ladder of warm neutrals derived from them.

### Primary
- **Warm Paper** (#FDFBF7): The ground. Owner-locked primary. Every light band, the body background, header, and button text on ink.
### Secondary
- **Terracotta Seam** (#964F4C): Owner-locked secondary and the only saturated color. Seam strokes in the strata drawings, link hovers, selection background, caret, focus rings, and the button hover fill.
- **Deep Seam** (#7E423F): Darker terracotta held in reserve for pressed/graded accent states.
- **Bright Seam** (#C87F7B): Terracotta lightened for ink-strong surfaces — hover text, arrow accents, and the paper-tone wordmark accent (5.96:1 on ink-strong).
### Neutral
- **Warm Canvas** (#F4EEE8): Alternate section band and panel fill inside cards; the "second page" of the survey.
- **Mineral Ink** (#201A18): Primary text, display type, button fill.
- **Deep Ink** (#171310): Footer and responsibility band background; the darkest stratum.
- **Muted Ash** (#5D5350): Body copy and intros on light bands (7.2:1 on paper, 6.5:1 on canvas).
- **Soft Stone** (#B8B2AC): Secondary text on ink-strong (8.8:1), footer column labels, and the scrollbar thumb on a paper track.
- **Hairline Sand** (#E3DACF): All 1px rules, borders, and dividers on light surfaces; ink bands use white at 10% instead.

### Named Rules
**The Two Locks Rule.** Paper #FDFBF7 and seam #964F4C are owner-locked brand commitments (11 Nov 2026). Derived neutrals may evolve; these two values may not.

**The Seam Budget Rule.** The terracotta family covers at most ~10% of any surface. Its rarity is the point: it marks seams, state changes, and nothing else.

**The Bright-Seam Rule.** seam-bright exists only on ink-strong surfaces. Never set it on paper or canvas — it does not carry contrast there.

Verified pairs (WCAG 2.2 AA): ink/paper 16.6:1, muted/paper 7.2:1, muted/canvas 6.5:1, soft/ink-strong 8.8:1, seam-bright/ink-strong 5.96:1, seam/paper 5.77:1.

## Typography

**Display Font:** Manrope (variable, self-hosted via next/font, `--font-manrope`, swap, latin + latin-ext)
**Body Font:** Inter (variable, self-hosted via next/font, `--font-inter`, swap, latin + latin-ext)

**Character:** A geometric grotesque at ExtraBold weight speaks; a quiet workhorse text face explains. The pairing is one voice with two registers — headline confidence, document calm.

### Hierarchy
- **Display** (Manrope 800, `clamp(2.9rem,6.5vw,6rem)`, lh 0.98, −0.035em, max 14ch): Homepage hero H1 only.
- **Page display** (Manrope 800, `clamp(2.4rem,5vw,4.5rem)`, lh 1.02, −0.035em, max 18ch): Internal route H1s.
- **Closing display** (Manrope 800, `clamp(2.1rem,4.5vw,3.75rem)`, lh 1.02, −0.035em, max 18ch): The final contact CTA H2.
- **Headline** (Manrope 800, `clamp(1.9rem,3.4vw,3rem)`, −0.03em): Section H2s.
- **Title** (Manrope 700, 24px, lh 1.33, tight): Row and drawer headings; 20px panel sub-headings.
- **Body** (Inter 400, 18px, lh 1.625, muted): Intros and leads, max ~52–62ch; default 16px body elsewhere.
- **Meta** (Inter 400, 13–15px): Captions, footer body, nav links (15px medium).
- **Label** (Manrope 700, 14px, uppercase, +0.14em, soft): Footer column headers only.

### Named Rules
**The Two Voices Rule.** Manrope speaks (display, headlines, titles, buttons, wordmark); Inter explains (body, navigation, meta). No third face, no system display substitute.

**The Long-Word Guard.** Every h1–h3 gets `overflow-wrap: break-word` and `hyphens: auto`; Turkish compounds never force horizontal overflow.

## Layout

Sticky paper header (80px tall, hairline bottom border, z-40) over a single content column. Container is `max-w-7xl` (1280px) with 24px gutters doubling to 48px at `lg`. Sections are full-bleed bands alternating ground — paper → paper → canvas → ink-strong → paper → canvas → paper, footer ink-strong — separated by hairline top borders on light bands and white-10% rules inside ink bands.

Vertical rhythm: `py-24` (96px) rising to `py-28` (112px) at `md` per section; the closing CTA deepens to 128px. Editorial splits run on a 12-column grid (`gap-12`, 48px, → 64px at `lg`): 7/5 statement, 6/5 careers, 5/7 responsibility. The hero is `min-h-[75svh]` (680px at `md`), content bottom-padded 112px over the strata field at the lower 62%. Page heroes for stub routes: 80/96px top, 64/80px bottom padding. List rows divide with hairlines (`divide-y`) inside hairline `border-y` frames.

Breakpoints in use: `md` (768px) and `lg` (1024px). Below `lg` the header nav collapses to a full-screen paper drawer (Escape, focus trap, scroll lock, focus restore; 56px row targets).

## Elevation & Depth

No shadows. The system is flat by conviction: depth is tonal (paper → canvas → ink-strong band alternation) plus 1px hairline rules (#E3DACF on light, white at 10% on ink). The only "lift" anywhere is the 2px seam focus-visible outline, offset 2px; dark bands switch it to seam-bright via `.on-ink`. Surfaces at rest never cast anything.

### Shadow Vocabulary
None. This section exists to say so explicitly.

### Named Rules
**The Hairline Rule.** If a surface needs separation, it gets a 1px hairline or a tonal band change — never a box shadow, glow, or gradient.

## Shapes

Corners are nearly square: a single 6px radius (`rounded-md`) on interactive and contained elements — buttons, menu triggers, panels, strata plates, skip link. Bands themselves are square-edged full-bleed. The recurring geometry is the strata contour: thin ink strokes (1.4–2.6px, rounded caps, opacities 0.18–0.9) crossed by heavier terracotta seams, `pathLength={1}` so each can draw. The wordmark repeats the motif at 30×26 — three rounded strokes, the middle one seam-colored. Arrow affordances are 18×12 open strokes that nudge 4px right on group hover.

## Components

### Buttons
- **Shape:** nearly square (6px radius)
- **Primary (`.btn-primary`):** ink fill, paper text, Manrope 700 at 15px, padding 12px 24px, min-height 44px
- **Hover / Focus:** fill shifts to seam in 200ms; focus-visible takes the global 2px seam outline
- **Quiet (`.link-quiet`):** text link, medium weight, ink text underlined by a 2px seam decoration at 7px offset; hover turns the text seam. Used for secondary CTAs.

### Row Link (`.link-row`)
Editorial list action: Manrope 700 at 18px, ink, 44px target, trailing 18×12 arrow that translates 4px on hover while the label turns seam.

### Cards / Containers
- **Corner Style:** 6px radius
- **Background:** canvas panels on paper bands; paper panels on canvas bands (each band inverts its panel)
- **Border:** 1px hairline
- **Shadow Strategy:** none (see Elevation & Depth)
- **Internal Padding:** 32–40px (`p-8` → `p-10`/`p-12`)
- **Notice panels:** the designed empty state — display-weight heading, muted body, quiet link. News, pending route stubs, and careers principles all reuse this pattern.

### Navigation
Sticky paper header: wordmark left, five Turkish section links (15px medium ink, hover seam) at `lg`, İletişim as btn-primary far right, 28px gaps. Below `lg`, a bordered 44px hamburger opens a full-screen paper drawer — 24px display-weight rows over hairline dividers, İletişim set in seam, Escape closes, Tab is trapped, body scroll locks, focus returns to the trigger.

### Strata Field (signature)
Authored 9-path SVG contour drawing, two variants: `field` (820×480 hero plate, `xMidYMax slice`, anchored to the lower 62% of the hero) and `core` (tighter crop for inline panels, framed by a hairline border and captioned "Temsili katman çizimi"). Ink strokes with terracotta seams, `aria-hidden`, decorative only. On load each path draws once — `stroke-dashoffset` 1 → 0 over 1.6s, `cubic-bezier(0.16,1,0.3,1)`, staggered 0.12s per path — and the whole gesture is wrapped in `prefers-reduced-motion: no-preference`.

### Wordmark (signature)
Placeholder identity: Manrope ExtraBold 17px, −0.02em — "KIMERIS" in ink, "MADEN" in seam (seam-bright in paper tone) — beside a 30×26 three-stroke strata mark, the middle stroke seam-colored. Links home with an aria-label.

## Do's and Don'ts

### Do:
- **Do** carry all depth with hairlines and band alternation (1px #E3DACF on light, white 10% on ink).
- **Do** cap terracotta at ~10% of any surface: seam strokes, hovers, selection, caret, focus.
- **Do** keep every interactive target at least 44px tall (56px in the mobile drawer).
- **Do** mark decorative SVGs `aria-hidden` and caption any drawing mistakable for data ("Temsili katman çizimi").
- **Do** scope `.on-ink` on dark bands so focus rings switch to seam-bright.
- **Do** wrap display type in ch-based measures (14–18ch) so Turkish long words break instead of overflowing.
- **Do** theme the browser surfaces from the palette: seam selection and caret, seam focus rings, and a soft-stone scrollbar thumb on a paper track (Firefox via `scrollbar-color`, WebKit via `::-webkit-scrollbar`).

### Don't:
- **Don't** use box shadows, glows, or gradients — depth is hairline and tonal only.
- **Don't** place seam-bright on paper or canvas; it exists for ink-strong surfaces (5.96:1 there).
- **Don't** introduce a third typeface or substitute a system display face; Manrope and Inter only.
- **Don't** ship raster photography, invented metrics, or KPI tiles; this world refuses the mining photo wall and unverifiable numbers.
- **Don't** uppercase headings; uppercase is reserved for 14px footer column labels.
- **Don't** animate for users who prefer reduced motion; the seam-draw stays behind its media query.
