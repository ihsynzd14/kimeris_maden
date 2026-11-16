---
target: homepage src/app/page.tsx
total_score: 16
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
target_identity: "file:C:\\dev\\github\\kimeris_maden\\src\\app\\page.tsx"
target_fingerprint: "sha256:2cab2306bc035f1832a27247a8ff10923a98756aad4138c641e0afa43f3988b3"
target_path: "C:\\dev\\github\\kimeris_maden\\src\\app\\page.tsx"
timestamp: 2026-11-12T01-24-11Z
slug: src-app-page-tsx
---
# Critique — KIMERIS MADEN homepage (`src/app/page.tsx`)

`⚠️ DEGRADED: single-context (subagent depth limit reached — no nested sub-agent tool available in this session; Assessment A and B ran sequentially in one context)`

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Ticker renders stale 2015 fallback dates as live "Borsa Verileri" |
| 2 | Match System / Real World | 1 | Foreign listed-company data (S32, ASX/LSE/JSE) on an unlisted concept company |
| 3 | User Control and Freedom | 2 | Autoplay loop video has no pause control (WCAG 2.2.2) |
| 4 | Consistency and Standards | 1 | New sections discard the committed world: shadows, gradient, dark flip, raster wall, radius drift |
| 5 | Error Prevention | 2 | Silent fallback to decade-old stock data prevents nothing |
| 6 | Recognition Rather than Recall | 3 | Quick links duplicate nav with labels + icons; visible, discoverable |
| 7 | Flexibility and Efficiency | n/a | Persuade surface |
| 8 | Aesthetic and Minimalist Design | 2 | 100svh of content-free video competes with the H1; two visual languages fight |
| 9 | Error Recovery | 2 | No error paths surface; ticker mislead has no correction |
| 10 | Help and Documentation | n/a | Persuade surface |
| **Total** | | **16/32** | **Acceptable (50%) — borderline; the committed baseline alone scores far higher** |

## Design Specificity Verdict

**Mixed: an authored base wearing a category-interchangeable layer.**

**LLM assessment:** The committed homepage is genuinely authored — the geological-survey world (paper ground, hairline strata, seam-draw gesture) is a point of view no template ships. Every uncommitted addition points the other way: a cinematic autoplay video banner, a 2×2 machinery photo collage, a stock-exchange ticker. Those are the exact moves the surface brief names as refused: "replaces the category's cinematic stock-photo hero and metric tiles." Any mining company could use the new layer unchanged; only KIMERIS could have built the old one.

**Deterministic scan:** 6 findings, all advisory `design-system-font-size`, all in the dirty-tree files — `CompanyStatement.tsx:134` (13px), `Hero.tsx:119` (13px), `HeroQuickLinks.tsx:119` (11px), `HeroQuickLinks.tsx:123` (16px), `StockTickerList.tsx:59` (11px), `StockTickerList.tsx:66` (13px). False positives: the two 13px figcaption hits match DESIGN.md's documented Meta range (13–15px) in the prose body — the detector reads only the frontmatter token block, which lacks the Meta step. `StockTickerList.tsx:66` 13px is borderline (data rows, not captions). Real: both 11px hits and the 16px display hit.

**Visual overlays:** No user-visible overlay is available. Browser visualization was skipped: no harness browser tool exists in this session and Playwright is not installed (downloading browsers is not permitted in this run). Fallback signal: SSR HTML from the live dev server (port 3000) confirmed the rendered tree — 1 `<h1>` (SVG stroke text only), `banner_video.mp4` present, "Borsa Verileri" present, 17 stroke-text markup clusters.

## Overall Impression

The committed survey world still exists underneath and still works. The uncommitted layer buries it under two full screens of borrowed cinema and someone else's stock prices. Biggest opportunity: delete the additions, not redesign around them.

## What's Working

1. **Honesty instinct survives in captions.** "Saha ve operasyon görüntüleri; temsilidir." on the hero photos and "Temsili katman çizimi" on the statement figure keep the dated-honesty voice even inside rule-breaking components.
2. **Reduced-motion discipline is consistent.** All three new client components (`VideoBanner`, `StrokeText`, `StockTickerList`) check `prefers-reduced-motion` and settle to static/end states. That matches the world's motion rule.
3. **Quick-link cards are structurally sound.** Real `<Link>` anchors, labeled icons, snap-scroll with mask fade on mobile, 116px targets. The pattern is good; only its styling breaks the system.

## Priority Issues

1. **[P0] Fabricated, misattributed market data on the homepage.** `CompanyStatement.tsx` fetches `https://www.south32.net/api/stockprice`, renders S32 prices for ASX/LSE/JSE under "Borsa Verileri", and silently falls back to hard-coded 2015 values. KIMERIS is an unlisted fictional company. This breaks PRODUCT.md's hard rule ("no invented... stock ticker, investor returns"; §7.17: investor data only for a listed issuer; §2.3: "do not copy... stock data", "don't put investors/stock prices on a private-company site") and DESIGN.md's refusal of unverifiable KPI strips. It misleads every visitor who trusts the number, and it makes the site a live dependency of the reference company's API.
   **Fix:** Remove `StockTicker`, `StockTickerList`, the fetch, and the unreferenced money assets (`form-8.png`, `money-8.png`, `icon-money-stats.svg`).
   **Suggested command:** `/impeccable distill src/components/home/CompanyStatement.tsx`

2. **[P0] 100svh decorative autoplay video sits above all content.** `VideoBanner` is `aria-hidden`, carries no copy, no CTA, and no pause control. It pushes the H1 a full viewport down, autoplays an mp4 on mobile (PRODUCT.md §16: "do not preload large video on mobile"; LCP budget), misses WCAG 2.2.2 pause-stop-hide, and fades out through a `bg-gradient-to-b` — gradients are banned outright by the Hairline Rule. The first-viewport contract in the surface brief (paper hero, ink H1 left, strata field, primary CTA) is gone.
   **Fix:** Remove `VideoBanner` from `page.tsx` and restore the hero as the first section. If motion above the fold is wanted, the world already owns that answer: the seam-draw gesture.
   **Suggested command:** `/impeccable distill src/app/page.tsx`

3. **[P1] Hero flipped worlds and lost its real text.** The hero is now `bg-ink-strong` with a 2×2 raster photo grid — the mining photo wall the world refuses — and the H1 is three `StrokeText` SVGs. That H1 has no real DOM text (only `aria-label` per span), renders `visibility:hidden` until JS measures it (empty headline for no-JS visitors and non-JS crawlers; animations must not be content gates), uses fixed 64px instead of the documented clamp ramp, and paints one full word in seam — blowing the ~10% seam budget. Self-draw on scroll also breaks "seams draw once on load" and adds a second motion system beside the strata gesture.
   **Fix:** Restore the paper hero with real-text H1 on the documented display ramp; keep a stroke-draw effect only as enhancement layered over real text, or drop it.
   **Suggested command:** `/impeccable polish src/components/home/Hero.tsx` (+ `/impeccable typeset` for the ramp)

4. **[P1] Hairline Rule broken in the quick links.** `HeroQuickLinks` hovers lift into `hover:shadow-[0_18px_36px_-18px_rgba(23,19,16,0.55)]` — the system's first box shadow — plus `rounded-lg` against the single 6px radius, and off-ramp 11px/16px type. "If a surface needs separation, it gets a 1px hairline or a tonal band change — never a box shadow."
   **Fix:** Replace the shadow hover with hairline border + canvas band shift; `rounded-md`; documented type steps.
   **Suggested command:** `/impeccable polish src/components/home/HeroQuickLinks.tsx`

5. **[P2] Type ramp and motion-system drift.** Beyond the quick links, 11px labels (`StockTickerList.tsx:59`, `HeroQuickLinks.tsx:119`) and a 16px display size sit off the documented ramp, and GSAP + ScrollTrigger entered the bundle for three homepage components against PRODUCT.md §16 ("avoid broad animation libraries"). Either return to the tokens or consciously amend DESIGN.md.
   **Suggested command:** `/impeccable typeset src/app/page.tsx`

## Persona Red Flags

**Jordan (first-timer):** Lands on a full screen of video with no words; the company name and H1 only arrive after a full viewport of scrolling. "Borsa Verileri" showing "S32 · ASX" answers none of Jordan's questions and raises one: what company is this? Five quick-link cards plus five nav links present ~10 doors in two viewports.

**Riley (stress tester):** With JS disabled the `<h1>` is empty — no fallback text. When the South32 API 403s (Cloudflare-blocked, per the code comment), the ticker silently prints 2015 dates as current data. On a slow network the mp4, four webp photos, and two webfonts all load before the headline is legible.

**Casey (distracted mobile user):** Two full screen-heights — autoplaying video, then hero — before any text; autoplay video burns battery and data on the go. Quick links scroll horizontally with snap (good) but are announced by nothing on the first screen.

**Trust-auditing partner (from PRODUCT.md §4):** This audience visits to verify claims. The most prominent data on the page belongs to another company, and the hero imagery is stock-labeled "temsilidir". The evidence-led positioning inverts into its exact opposite: a greenwashed-adjacent front door.

## Minor Observations

- `public/Commodities.svg`, `public/Environment.svg`, `public/form-8.png`, `public/money-8.png`, `public/icon-money-stats.svg` are unreferenced anywhere in `src/` — dead weight, and the money imagery signals more unplanned KPI work.
- `Hero.tsx` mobile `min-h-[calc(100svh-5rem)]` vs `lg:min-h-[calc(50svh-5rem)]` inverts the usual priority: mobile gets the taller hero, stacking three tall blocks before content.
- `btn-inverse` is a new button style outside DESIGN.md's two documented buttons.
- Seam is doing double duty as the ticker's "down" color — data semantics on the accent reserved for state changes.

## Questions to Consider

- If the brand promise is verifiable honesty, why is the loudest data on the page another company's stock price?
- What would the survey world's own answer to "cinema" be — a drawing that draws once, not a video that loops forever?
- Should the first viewport sell a mood, or orient a visitor who has three clicks to understand a company?
