# KIMERIS MADEN — PRODUCT.md

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Business partners and customers (capabilities, minerals, sites, contact); government and regulators (identity, governance, notices); local community and NGOs (site facts, environmental safeguards, feedback); job seekers (culture, openings, process); suppliers and contractors (procurement principles, enquiry); press and general public (updates, media assets, contact). Audiences are the concept's designed-for targets, per §4 of the PRD body.

## Product Purpose

Concept site: an original, premium corporate-mining website for the fictional company KIMERIS MADEN, inspired by South32's information architecture, editorial presentation, and interactions — patterns only, never cloned assets. Success: a visitor understands the company, its activities, and its responsible-operations story in under three clicks, and the result feels as polished as a major international mining company while presenting only plausible, clearly conceptual content.

## Positioning

An evidence-led mining-sector web experience: transparent safety/environment/community framing, map-plus-list project discovery, and audience-separated journeys instead of promotional greenwashing — the neighboring-product claim a clone-or-template site could not make.

## Operating Context

Turkish-first (`tr-TR`), English planned; route segments English in every locale. CMS-driven editorial workflow (draft → review → publish) is the design target. Corporate website, not e-commerce. WCAG 2.2 AA and Core Web Vitals budgets apply. KVKK-aware consent and legal-review gates remain in the PRD as specification.

## Capabilities and Constraints

P0 scope: homepage, about, activities overview, project detail, sustainability overview, news + article, careers landing, contact, legal pages. P1 (minerals catalogue, map explorer, documents, search, EN) and P2 (investor center) conditional. Constraints: no copying of South32 logo, text, photos, or distinctive assets; no invented claim presented as real-world fact (concept content stays plausible and clearly conceptual); route map per §6.2. Owner decisions in §27 remain open unless the concept status resolves them.

## Brand Commitments

- Name: KIMERIS MADEN.
- Binding palette, set by owner on 11 November 2026: primary `#FDFBF7`, secondary `#964F4C`. This supersedes the §3.2 proposed ink/yellow token values; §3.2's remaining directives stay proposals.
- Logo direction in §3.3 is a design task, not a finished asset.

## Evidence on Hand

- The full PRD body below: South32 reference audit with dated sources (§26), page blueprints (§7), content model (§10), Turkish draft copy (§23).
- No verified company facts, photographs, logo assets, documents, or contact channels exist — this is a concept project. Future work must not present invented specifics as real-world claims.

## Product Principles

1. Make a complex technical business understandable and verifiable in under three clicks.
2. Evidence-led communication: separate existing from planned; no greenwashing, no unverifiable superlatives.
3. Audience-separated journeys for partners, community, job seekers, suppliers, and press.
4. Non-developers publish safely through a structured CMS (design target).
5. Original identity at international-mining-company polish — never a South32 clone.

## Accessibility & Inclusion

WCAG 2.2 AA target, verified with automated and manual keyboard/screen-reader testing (§15).

<!-- Legacy PRD body follows, unchanged. -->

---

> **Product Requirements Document + UX/UI Blueprint + Implementation Specification**  
> **Product:** KIMERIS MADEN corporate mining website  
> **Version:** 1.0  
> **Prepared:** 10 November 2026  
> **Primary language:** Turkish (`tr-TR`); English (`en`) planned  
> **Primary reference:** [South32](https://www.south32.net/)  
> **Project type:** Corporate website for a mining / minerals business, **not an e-commerce store**  
> **Status:** Build-ready specification; real-world company facts and legal disclosures require owner approval

---

## 0. How to use this document

This document is written so a designer, product manager, or AI coding agent can build **KIMERIS MADEN** as an original, credible, modern mining-company website inspired by South32's **information architecture, editorial presentation and interactions**.

**The implementation must not copy South32's logo, proprietary text, photographs, illustrations, colors pixel-for-pixel, or other distinctive brand assets.** Build an original product using equivalent *patterns*, not a cloned website.

### Evidence and constraints

Research covered the publicly available South32 homepage imagery, indexed navigation and page routes, the agency's website redesign case study, South32's published sustainability and annual reporting content, and South32's live external careers portal. Direct machine access to several `south32.net` HTML pages returned **403 Forbidden**, so an exhaustive live click-through and exact DOM/layout measurements were **not possible**. Observations are labeled accordingly. Details of KIMERIS MADEN are **proposals**, not assertions about a known company.

**Evidence levels used below:**
- **Observed:** supported by an accessible reference, screenshot, live associated site, or the redesign agency's case study.
- **Inferred pattern:** reasonable UX extrapolation, not a claim of exact South32 behavior.
- **KIMERIS decision:** intentional new feature/design choice.
- **Conditional:** activate only if the company actually has the corresponding operation, report, program, or legal status.

### Hard rule: no invented claims

No developer, content writer, or generative AI may invent KIMERIS MADEN's:
- operational or exploration sites, coordinates, country/region footprint or mine ownership;
- mineral types, reserve/resource figures, capacity, extraction methods or production output;
- environmental permits, licenses, certifications, emissions or safety statistics;
- number of employees, local hiring rate, investments, community donations or financial results;
- listed-company status, stock ticker, investor returns, partnerships, awards or customer names.

Use an approved CMS draft status or explicit `[VERIFIED DATA REQUIRED]` placeholders until documents and stakeholders confirm claims. **Never show placeholders or sample metrics on the production site.** Entire sections should be hidden if no verified content is available.

---

## 1. Executive product vision

**KIMERIS MADEN** will be a premium, contemporary corporate website that communicates a mining company's identity, operational scope, technical competence, people, responsible practices and professional contacts. It must be credible to potential partners and contractors while remaining understandable to citizens, job seekers and non-specialist visitors.

**Core experience:** an editorial homepage with a striking industry photograph or short cinematic video; clear information architecture; a geographical presentation of verified sites; explanations of minerals and operations; transparent safety, environment and community information; a useful careers experience; a document library; a clean news feed; and simple ways to contact the correct team.

**North-star principle:** *Make a complex, technical business understandable and verifiable in under three clicks.*

### Product promises

1. **Understand:** Explain who KIMERIS MADEN is and what it actually does without exaggerated marketing.
2. **Discover:** Explore verified projects, locations and minerals through content cards and an interactive map.
3. **Trust:** Give substance to environmental, social and safety information, with evidence where available.
4. **Connect:** Help partners, suppliers, journalists, job seekers and communities reach the right destination.
5. **Maintain:** Let non-developers publish updates safely through a structured content management system.

### Scope classification

| Tier | Definition | Launch stance |
|---|---|---|
| P0 | Essential company website and operational credibility | Must ship |
| P1 | Richer discovery and editorial features | Ship if real content exists |
| P2 | Enterprise or high-maintenance integrations | Later / conditional |
| EXCLUDED | Features not appropriate without supporting business need | Do not build by default |

**MVP (P0):** homepage; about; activities/operations overview; at least one real site or project page if applicable; sustainability overview with approved claims; news; contact; legal pages; responsive navigation; SEO; analytics consent; accessible design; CMS editing.

**P1:** minerals catalogue, advanced site map/filtering, career positions, suppliers page, publication library, English localization, related content, global search.

**P2:** stock-market feeds, investor center, dashboards, GIS data layers, complex ATS and ERP integrations, full rich-media newsroom. Only if necessary and factually appropriate.

---

## 2. Reference-site audit: South32

### 2.1 What the benchmark actually does

**South32's primary navigation** includes **About us, What we do, Investors, Sustainability, Careers, and News and Media**, with utility access to contact, suppliers and search indicated in a published design review. Its homepage uses large-scale landscape imagery/video, a short mineral-resources message, and a strong route into the company's operations. The visual style favors bold headlines, generous white space, authentic people-focused photography, yellow graphic accents and concise, scannable modules. **Observed** in published visual review: [Deploi mining website showcase](https://deploi.ca/blog/mining-website-design-examples).

The digital agency responsible for the redesigned South32 site confirms these **specific functional patterns**:
- a structured information architecture validated against varied audiences;
- global **interactive operations/office map**;
- compact **business, operational, financial and sustainability metric snapshots**;
- investor pages with **live share-price feeds, performance charts and exchange announcements**;
- a people-centered visual direction emphasizing culture, relationships and sustainability;
- strong search engine optimization, responsive content organization and scalable CMS infrastructure.

Reference: [Equilibrium (equ) — South32 website case study](https://equ.com.au/work/south32/).

### 2.2 Functional page families identified

| Reference family | South32 example / evidence | Transfer into KIMERIS MADEN | Confidence |
|---|---|---|---|
| Home | Major photographic/video hero, concise positioning | Impactful original hero, overview, key activities, featured project, trust content | Observed |
| About | About company, purpose/strategy, leadership | About, history, mission, vision, values, management | Observed/inferred |
| What we do | Minerals/metals and geographic locations | Activities, sites, commodities, process explanation | Observed |
| Locations | Global operations map and location details | Verified project map and filterable location list | Observed |
| Sustainability | Safety, communities, ethics, environment, climate themes | Evidence-led responsibility section with topic pages | Observed |
| Investors | Financial/report library, share performance, releases | Corporate documents initially; optional investor center only if appropriate | Observed |
| Careers | Dedicated jobs search, locations and vacancy detail | Careers landing, jobs list and job details, or a managed external application link | Observed |
| News and media | Corporate news and external communication | News listing, articles, media contact, document downloads | Observed/inferred |
| Suppliers | Supplier-facing utility path | Supplier qualification info and enquiry channel | Observed as nav item / proposed implementation |
| Search | Utility search | Cross-site, localized search | Observed as nav item / proposed implementation |

**Known South32 paths from indexed or linked references** include `https://www.south32.net/about-us`, `/what-we-do/our-commodities`, `/what-we-do/our-locations`, `/sustainability`, `/investors`, `/investors/annual-reporting-suite` and `/investors/presentations-speeches`. Treat these as reference paths, not a complete verified sitemap.

### 2.3 Lessons KIMERIS should adopt

**Adopt:** confident but modest tone; high-quality authentic photographs; separated journeys for different audiences; modular page sections; map + list; concise proof-based metrics; downloadable documents; career and supplier touchpoints; SEO-friendly page structure; manageable back-office.

**Improve:** avoid all-movement hero autoplay on slow devices; maintain sharp contrast with a yellow accent; support keyboard interactions in map/filter/navigation; make project facts explicitly dated and sourced; replace generic claims of sustainability with actual programs, measurements and reports; don't put investors/stock prices on a private-company site.

**Do not copy:** South32 logo grid, proprietary taglines, exact photo compositions, original iconography, distinctive motion choreography, stock data, ownership map or published business copy.

---

## 3. Brand platform for KIMERIS MADEN

### 3.1 Positioning

**Category:** Mining, geology, mineral resources, responsible extraction and/or minerals processing as verified by the company.

**Personality:** Precise, confident, contemporary, transparent, technically informed, human, grounded and internationally credible.

**Tone:** Short headings, clear Turkish language, restrained claims, technical depth when requested. Prefer “süreç”, “faaliyet”, “yaklaşım”, “uygulama”, “ölçüm”, “proje” to unsupported promotional superlatives.

**Content writing rules:**
- Every line describes a true, approved activity or an explicitly framed commitment.
- Avoid “sektör lideri”, “%100 sürdürülebilir”, “sıfır etki”, “dünyanın en iyisi” without independently supportable evidence.
- Separate **existing** activities from **planned** initiatives: “yürütüyoruz” versus “hedefliyoruz”.
- Explain jargon on first mention; publish a glossary for technical concepts if needed.
- Do not refer to exploration projects as producing mines.

### 3.2 Visual design direction

**Direction:** *Industrial editorial minimalism* — modern, architectural corporate design using oversized imagery, strong typography, purposeful spacing, clean lines and a restrained mineral-yellow accent. Do not default to an old-fashioned dark/grunge mining look.

**Proposed color tokens** (new KIMERIS identity; not South32 tokens):

| Token | Hex | Role |
|---|---|---|
| `--km-ink` | `#142A31` | Main dark blue-green / industrial ink; replaces flat gray |
| `--km-ink-strong` | `#102027` | Darkest hero overlays/footer |
| `--km-paper` | `#FFFFFF` | Main background |
| `--km-canvas` | `#F6F8F6` | Alternate section background |
| `--km-accent` | `#FFF20F` | Brand yellow; thin rules, icons, accent backgrounds, key CTA only |
| `--km-accent-hover` | `#E8DA00` | Yellow interactive hover |
| `--km-secondary` | `#DCE6E1` | Muted mint-gray surfaces and dividers |
| `--km-text` | `#152329` | Main typography |
| `--km-muted` | `#51646A` | Secondary copy; validate contrast |
| `--km-border` | `#D6DEDA` | Borders and section separators |
| `--km-danger` | `#B3261E` | Form error text and indicators |

**Color allocation:** roughly 60% white/off-white, 30% industrial ink / neutral materials, 10% yellow accent. Yellow should never carry small white text. On yellow buttons use `#102027` text; check WCAG contrast. Dark full-width sections are strategic, not the default for all content.

**Typography:**
- Display and headings: **Manrope** or **Plus Jakarta Sans**, variable if available and licensed for web use.
- Body: **Inter** or **Source Sans 3** with full Turkish glyph support.
- Primary letter spacing for large titles: approximately `-0.035em`; body spacing normal.
- Desktop hero H1: `clamp(3.25rem, 6.4vw, 7rem)`; internal H1 `clamp(2.75rem, 5vw, 5.5rem)`.
- Body: 16–18px, `line-height: 1.55–1.7`; smaller metadata 13–14px.
- Line length: 58–75 characters for long paragraphs.

**Grid and spacing:**
- 12-column fluid desktop grid; 4/6/8-column intermediate layouts; 4-column mobile grid.
- Content max width 1280–1360px with 24–48px gutters; article width 720–800px.
- 8px spacing scale; typical section padding 96–128px desktop and 56–80px mobile.
- Corners 0–8px for sober surfaces; cards may use 6–12px where appropriate; avoid bubbly UI.
- Thin rules and bold negative space; avoid heavy box shadows and dashboard-like decoration.

**Photography and video:**
- Real geology, site landscapes, surveying, mine operations, minerals, laboratory work, staff with appropriate PPE, partner/community activities **only if authentic and consented**.
- Maintain factual captions, locations, credits and alt text; flag illustrative/stock imagery if necessary.
- Aerial wide-angle 16:9 hero; vertical 4:5 human portraits; 3:2 project gallery.
- Avoid unrealistic AI imagery of mines or environmental practices used as factual documentary evidence.
- If video is available: 8–15 seconds, silent background loop, poster fallback; honor reduced-motion settings and disable autoplay as needed.

**Micro-interactions:** subtle underline expansion, color shift, image scale <=1.04, section reveal <=350ms. Never make content invisible until an animation finishes. Prioritize performance over cinematic effects.

### 3.3 Logo direction (design task, not finished asset)

Create a custom uppercase `KIMERIS MADEN` wordmark with an abstract geometry inspired by mineral layering, strata, a contour/section cut, or a technical monogram K. It should reproduce in white, dark ink and single-color forms, with no resemblance to the South32 brand symbol. Provide SVG and PNG deliverables, favicon, inverse version, clear space and minimum size rules.

---

## 4. Audiences and priority journeys

| Audience | What they need | Success path |
|---|---|---|
| Business partners and customers | Real capabilities, minerals, site information, contact | Home → Activities → Mineral/Project → Contact |
| Government and regulators | Company identity, governance, licenses where publishable, notices | Home → About → Compliance & Documents → Contact |
| Local community and NGOs | Nearby site facts, environmental safeguards, feedback channels | Home → Projects → Site → Community/Environment → Contact |
| Job seekers | Culture, job availability, application process | Home → Careers → Role → Apply |
| Suppliers and contractors | Procurement principles and enquiry procedure | Home/Utility → Suppliers → Requirements → Enquiry |
| Press / general public | Timely updates, approved media assets, press contact | News → Article → Media contact |
| Investors / financiers | Verified reports, leadership, disclosures | Corporate information → Documents; optional investor module |

### Critical user questions the UI must answer

1. What is KIMERIS MADEN and where does it operate?
2. What exactly does it explore, extract, develop or process?
3. What can I verify from its official information?
4. How does it manage safety, environmental impacts and community relations?
5. How do I apply for a role, submit a supplier enquiry or contact the business?

---

## 5. Outcomes, KPIs and event definitions

**Product outcomes:** high comprehension, credible stakeholder engagement, lower friction to content, quality inbound enquiries and maintainable publishing.

| Metric | Initial target / methodology |
|---|---|
| Homepage engagement | Track click-through into Activities, Projects, About, Sustainability |
| Key information discovery | At least 80% of moderated test users find a project/mineral/contact within three clicks |
| Contact conversion | Measure legitimate submissions vs visits to contact route; baseline first 30 days |
| Career conversion | Measure `apply_click` from qualified job-detail views |
| Document utility | Track document downloads by category, language and document ID |
| Organic acquisition | Monitor non-branded and branded impressions/clicks in Search Console |
| Accessibility | WCAG 2.2 AA target with documented manual tests |
| Core Web Vitals | p75 LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 |
| Editorial efficiency | Routine news publishing without code deployment |

Do not claim numeric improvements before real analytics establish a baseline. Define events and dashboards in §18.

---

## 6. Full information architecture and routes

**Default locale is Turkish.** Favor simple, readable, ASCII route segments. **Route segments are English in every locale**; visible interface text, navigation labels and page copy stay Turkish in the default locale. Route names are product decisions, not mirrored South32 URL paths.

### 6.1 Primary navigation

`Kurumsal` · `Faaliyetlerimiz` · `Sürdürülebilirlik` · `Kariyer` · `Haberler`  
Utility navigation: `Tedarikçiler` · `İletişim` · `TR / EN` · `Ara`.

The website should not overload the top-level menu. If a verified project portfolio is a key business priority, `Projelerimiz` may become an independent top-level entry; otherwise it belongs under `Faaliyetlerimiz`.

### 6.2 Sitemap

```text
/                               Ana Sayfa [P0]
/about                          Hakkımızda / Kurumsal [P0]
/about/history                  Tarihçe [P1, if documented]
/about/mission-vision           Misyon, Vizyon ve Değerler [P0 content on About; P1 dedicated]
/about/leadership               Yönetim / Liderlik [P1, if approved]
/about/ethics-compliance        Etik ve Uyum [P1]
/activities                     Faaliyetlerimize Genel Bakış [P0]
/activities/projects            Projeler ve Tesisler [P0/P1, if verified]
/activities/projects/[slug]     Site / Project Detail [P0, as applicable]
/activities/minerals            Madenler / Mineraller [P1]
/activities/minerals/[slug]     Mineral Detail [P1]
/activities/processes           Arama → Üretim / Süreçler [P1]
/sustainability                 Responsible Operations Overview [P0]
/sustainability/safety          İş Sağlığı ve Güvenliği [P1]
/sustainability/environment     Çevre ve Kaynak Yönetimi [P1]
/sustainability/community       Toplum ve Paydaşlarla İlişkiler [P1]
/sustainability/ethics          Etik / İnsan Hakları [P1]
/careers                        Kariyer [P0]
/careers/jobs                   Açık Pozisyonlar [P1, if genuine jobs]
/careers/jobs/[slug]            Job Detail [P1]
/news                           Haberler ve Duyurular [P0]
/news/[slug]                    News / Article Detail [P0]
/publications                   Raporlar ve Dokümanlar [P1]
/suppliers                      Tedarikçiler [P1]
/contact                        İletişim [P0]
/search                         Site Search [P1]
/privacy-policy                 Privacy Notice [P0]
/cookie-policy                  Cookie Policy [P0]
/personal-data-notice           Personal Data Notice [P0, legal review]
/terms-of-use                   Terms of Use [P0]
/404                            Not Found [P0]
```

**Optional, only for a listed company or a genuine investor-disclosure need:**

```text
/investor-relations              Investor Relations [P2, conditional]
/investor-relations/reports      Reports [P2]
/investor-relations/announcements Exchange / Regulatory Announcements [P2]
/investor-relations/share-price  Share-price Charts [P2, listed-company only]
```

Route slugs are English in every locale, so the English site reuses the same segments under an `/en` prefix (e.g. `/en/about`). No locale-specific slug divergence. The Turkish root remains canonical for Turkish-language pages.

### 6.3 Header behavior

**Desktop:**
- Transparent header over hero only when white logo/links have sufficient contrast; switch to white/solid dark ink on scroll.
- Logo left, top-level menu center/right, utilities far right; `İletişim` can be distinct but must not crowd navigation.
- Hover and click mega-menu accessible via keyboard; each main menu entry navigates to a landing page in addition to opening the menu.
- Dropdown includes section overview, 2–5 direct sublinks and optionally one spotlight teaser/image.
- Sticky header after initial scroll, height ~72–88px; no jump in content layout.
- Search opens an accessible full-width dialog or dedicated results page.

**Mobile:**
- Logo left; search and menu button right.
- Full-height nav drawer with accordion groups, obvious close button, scroll lock, focus trap and Escape support.
- No hover-only features. Language switch and contact are easy to access.

**Footer:** full sitemap clusters; physical legal entity/address only when verified; email and phone only when verified; social icons only for official accounts; privacy/cookie/KVKK links; copyright year; document revision when relevant.

---

## 7. Page-by-page build blueprints

Each page below describes **section order**, data content, interaction rules and minimum acceptance conditions. Components should be reusable and content-driven.

### 7.1 Homepage — `/` [P0]

**Purpose:** Explain the company and send visitors rapidly into an appropriate journey. Most important design page.

**Section architecture:**

| Order | Block | Exact implementation notes |
|---|---|---|
| 01 | Immersive hero | Full viewport-ish (`min-height: 680px` desktop / `min-height: 75svh` mobile). Original mine/site/landscape image or video, subtle dark gradient, category kicker, short H1, one-line summary, primary CTA, optional secondary CTA. |
| 02 | Company statement | White editorial split layout: `KIMERIS MADEN` identity, 60–100 words approved text, link to Kurumsal; optional mini-eyebrow. |
| 03 | At a glance | 2–4 **verified** metrics only: active projects, years, relevant workforce/site numbers, etc. Hide this block if fewer than two credible metrics. Each has unit, reference year and optional data-source link. |
| 04 | Activities / minerals | 2–4 image cards introducing exploration, mining, processing or mineral commodities **only if applicable**; each card links to relevant page. |
| 05 | Featured project | Large image and one verified project: location, status (`Arama`, `Geliştirme`, `Üretim`, `Rehabilitasyon`), summary, project details CTA. No invented output figure. |
| 06 | Our footprint | Country/Türkiye map or simplified geo panel with verified project markers; fallback to location cards if no usable coordinates or fewer than two sites. |
| 07 | Responsible operations | Dark ink section with one honest intro, 3 links: İSG, Çevre, Toplum. Avoid greenwashing stock imagery and false statistics. |
| 08 | People / careers | Genuine field-worker portraits, staff story or understated career invitation; careers CTA. |
| 09 | News | Most recent 3 *published* news items with dates, category, thumbnail, link. If zero, editorial alternative: publications/contact. |
| 10 | Closing contact CTA | Large, confident invitation to business enquiries with direct contact link and contextual copy. |

**Hero copy example — DRAFT, subject to company validation:**

> Eyebrow: `KIMERIS MADEN`  
> H1: `Yer altındaki potansiyele, geleceğe dönük bir bakış.`  
> Description: `Maden kaynakları ve projelerimiz hakkında doğrulanabilir bilgiye ulaşın; faaliyetlerimizi, yaklaşımımızı ve çalışma alanlarımızı keşfedin.`  
> CTA: `Faaliyetlerimizi Keşfedin`  
> Secondary: `Bizi Tanıyın`

**Interactions:** fade/scroll hint only if user motion allowed; CTA jumps to pages (not dead anchors); visual tile hover and focus state; swipe-friendly news cards on small screens only if a non-carousel fallback remains available.

**Acceptance:** correct hero crop at 360px to 1920px; visible H1 without text collision; logical headings; exact image source/alt; all CTA destinations work; no fabricated metric; homepage usable with JS disabled wherever possible.

### 7.2 About / Kurumsal — `/about` [P0]

**Purpose:** Company identity, legal presence and credibility.

**Sections:**
1. Compact cinematic/banner hero: `KIMERIS MADEN Hakkında`.
2. Company narrative: verified founding context, actual business model and operating area.
3. `Ne Yapıyoruz?` three-step activities summary with links.
4. Mission, vision and values cards (approved, not South32 copied).
5. Company milestones / timeline **only if fact checked**.
6. Governance/management teaser with approved portraits/titles.
7. A transparent callout for licenses/policies/public documents where legally publishable.
8. CTA to projects / contact.

**Key fields:** legal name, brand name, registration details if public, HQ location, verified activities, mission, vision, values, leadership, timeline, image gallery, revision date.

**Acceptance:** corporate structure and claims approved by authorized company owner; leadership bio has no fake credentials; if no timeline, collapse spacing correctly.

### 7.3 Activities overview — `/activities` [P0]

**Purpose:** Business understanding and discoverability for technical and non-technical visitors.

**Sections:**
1. Hero with `Faaliyetlerimiz` and one succinct explanatory sentence.
2. Exploration / development / production / beneficiation cards reflecting **actual** lifecycle stages.
3. Filterable project overview (location, status, material type) if enough sites.
4. Minerals grid linking to mineral detail pages if verified.
5. `Nasıl Çalışıyoruz?` visual operating process with accessible text alternative.
6. Safety/standards deep links, and contact for business enquiries.

**Interaction:** filter state represented in URL query (`?status=exploration&region=...`), resetting filters is obvious, list works independently from map.

**Acceptance:** no stage or commodity listed unless supported by project data; filters produce deterministic results; empty state states `Bu filtrelere uygun proje bulunamadı.`

### 7.4 Project / operations listing — `/activities/projects` [P0/P1]

**Sections:** title and description, map/list switch, filters, project cards, no-results state, optional source/last updated footer.

**Project card anatomy:**
- Photo with correct rights and alt.
- Project name.
- Province/district (`il/ilçe`) if publishable.
- Status badge (not status color alone).
- Material tags only when verified.
- Short 1–2 sentence summary.
- `Projeyi İncele` link.

**Map:** MapLibre GL JS or equivalent optional integration with geocoded/owner-approved coordinates; cluster when needed; markers expose accessible popup containing title/status/link; keyboard alternate list; never geocode sensitive coordinates beyond permitted resolution.

**Acceptance:** keyboard-only access to all site links; geolocation and marker accuracy approved; an inaccessible map never blocks information.

### 7.5 Project detail — `/activities/projects/[slug]` [P0/P1]

**Purpose:** The company's most important factual page type.

**Recommended content order:**
1. Hero: real project image, name, location and operational status.
2. At-a-glance fact strip: site type, location, stage, relevant mineral(s), operator/ownership **only if approved**.
3. Description: factual narrative, geology and present operational stage.
4. Activities and processes: exploration, mining, processing, support operations as applicable.
5. Location: static map or interactive map + site context, sensitive detail redacted as needed.
6. Environment and safety: actual site-specific procedures / verified documents.
7. Community engagement: verified initiatives and feedback contact.
8. Image gallery (captions, credits, modal with keyboard escape).
9. Related reports, permits and notices if publishable (document category/date/version).
10. Related projects, relevant news, contact CTA.

**Project factual data schema (minimum):** name; slug; status; region; city; public coordinates or approximate geometry; short description; full approved body; material references; hero image; last_verified_at; owner/editor; public/private flags. Optional: mine method, processing method, geological context, production data + unit + year + source, certifications, downloadable reports, related staff stories.

**Acceptance:** project pages distinguish operating sites from exploration; no coordinates leak restricted details; metadata is current and approved; related content only links published pages.

### 7.6 Minerals catalogue — `/activities/minerals` [P1]

**Purpose:** Educate a business audience about the commodities KIMERIS actually handles.

**Sections:** introduction → filter by mineral/category → mineral cards → industry applications infographic → project links → technical enquiry CTA.

**Each mineral page** (`/activities/minerals/[slug]`) includes title, hero imagery/specimen, short plain-language description, industrial applications, relevant general mineral properties, KIMERIS relationship (`exploration`, `extraction`, `processing`, `study only`), associated verified projects, downloadable technical sheet only when approved, and references for scientific claims.

**Rule:** no generic inventory of gold, copper, lithium, boron, marble, etc. unless it is truly relevant. **This is not a commodity e-commerce product page; no shopping cart.**

### 7.7 Sustainability overview — `/sustainability` [P0]

**Purpose:** Earn stakeholder trust through transparency rather than generic green messaging.

**Structure:**
1. Intro: commitment, scope and limitations (plain Turkish).
2. Five adaptable themes benchmarked against responsible-mining communications: (a) İş Sağlığı ve Güvenliği, (b) Çevre / Su / Biyoçeşitlilik, (c) Toplum ve Yerel Kalkınma, (d) Etik / İnsan Hakları, (e) İklim / Enerji (only if verified/relevant).
3. Site-specific actions linking to real project detail pages.
4. Measured outcomes with **measurement date, unit and methodology** only if data available.
5. Documents / policy / assurance library.
6. Community reporting/contact channel.

**Important:** A promise to respect the environment is not equivalent to evidence. Make an honest, transparent distinction between goals, results, policies and future plans.

**Safety page** `/sustainability/safety`: training approach, risk assessment, incident reporting principles, approved KPIs, worker health and emergency preparation (no disclosure of sensitive security plans).

**Environment page** `/sustainability/environment`: water use, biodiversity, waste and tailings if applicable, land rehabilitation, monitoring and permit disclosures. Explain baseline, mitigation and measurement period where reporting numbers exist.

**Community page** `/sustainability/community`: local engagement, stakeholder listening process, training, community investment, grievance mechanism and concrete examples only with evidence and appropriate consent.

**Ethics page** `/sustainability/ethics`: code of conduct, procurement integrity, human rights principles, grievance/whistleblowing contact, privacy and conflicts-of-interest policies.

**Acceptance:** no empty ESG promises; every published numerical claim has citation or documented source; historical periods are visible; site-level risks are not whitewashed.

### 7.8 Careers landing — `/careers` [P0]

**Purpose:** Employer identity plus opportunities.

**Sections:** workforce-focused hero; why KIMERIS (approved and realistic); work environments/roles; values/culture; development and safety; recent genuine jobs (if any); application process; equality and privacy notice; CTA.

**If there are no vacancies:** display `Şu anda yayınlanmış açık pozisyon bulunmuyor.` followed by an approved HR enquiry or future opportunities option; do not fabricate openings.

**Privacy:** do not collect CVs by default until the company has a privacy notice, lawful processing basis, data retention policy and recruitment operating process. Use `mailto:` or a verified ATS link for MVP if needed.

### 7.9 Job list & job detail — `/careers/jobs`, `/careers/jobs/[slug]` [P1]

**Listing filters:** keyword; region/site; work arrangement; department/job category; posting date. Show count and clear filters.

**Job detail fields:** title, requisition ID, site/office, country/city, work type, employment type, posting/closing dates (actual), department, company overview, duties, qualifications, benefits if confirmed, work environment/safety note, legal/privacy link, exact application channel.

**Application:** outbound ATS link is the preferred first implementation. If building internal applications, add server-side validation, file scanning, storage with lifecycle policy, admin RBAC, consent/notice text and secure notification flow.

**Acceptance:** closed roles never accept new submissions; application CTA is honest about external redirects; search includes accessible text results even if a map exists.

### 7.10 News listing — `/news` [P0]

**Purpose:** Updated, searchable editorial credibility.

**Sections:** hero, featured article, category chips (`Kurumsal`, `Projeler`, `Sürdürülebilirlik`, `Etkinlikler`, `Duyurular`), year filter, searchable/paginated grid, media contact CTA.

**Card:** category, original image, date (Turkish date format), title, 1–2-line excerpt, read link.

**Acceptance:** stable pagination, crawlable article links, correct chronological order, no fake news content.

### 7.11 News article — `/news/[slug]` [P0]

**Fields:** title, date published, last updated, category, lead, hero/attribution, semantic content blocks (headings, figures, quotes, links, data tables, attachments), related articles, contact or media details.

**UI:** readable article width with generous vertical rhythm, reading progress optional, sticky share controls optional (copy link only is sufficient), breadcrumbs, accessible figure captions.

**SEO:** `NewsArticle` JSON-LD where valid; title/description, accurate `datePublished`, `dateModified`, publisher logo and OG image.

### 7.12 Publications / document center — `/publications` [P1]

**Purpose:** Single source of truth for downloadable policies, environmental reports, company PDFs and technical papers.

**Filter toolbar:** type, year, project, language, search text. Display total results. Cards show document title, document category, issue date, file size, language, version, relevant project and clear `PDF İndir` action.

**Download rules:** only public-approved documents, safe MIME types, virus scan on upload, meaningful filenames, explicit file size/type, server-side access authorization for any restricted document, no sensitive draft leakage.

### 7.13 Supplier page — `/suppliers` [P1]

**Sections:** supplier partnership statement, procurement categories (actual), expected standards, registration process (actual), ethics and compliance, local suppliers if true, FAQs, supplier contact.

**MVP action:** vendor enquiry form or verified procurement email. Do not imply a formal supplier qualification portal exists until it does.

**Future:** authenticated vendor onboarding and attachments via approved procurement system, not a public DIY database.

### 7.14 Contact page — `/contact` [P0]

**Top section:** prominent title, brief direction to appropriate team, verified office/contact data.

**Contact channels:** general, HR, supplier, media, community feedback. Display only genuine inboxes and phone numbers.

**Form fields:**
- Name (`required`, 2–120 chars)
- Email (`required`, valid and normalized)
- Topic (`required`: genel / iş birliği / tedarik / kariyer / medya / çevre-toplum / diğer)
- Company name (`optional`, 0–160 chars)
- Message (`required`, 20–4000 chars)
- Privacy notice acknowledgement (`required` only where legally necessary; keep consent separate from acknowledgement)
- Anti-spam hidden honeypot + rate limiting / optional challenge

**Form flow:** client validation → server validation → spam checks → encrypted storage or secure e-mail/CRM relay → no sensitive PII in analytics → success confirmation with non-enumerating message. Return `202` on accepted queue if asynchronous delivery; notify user on delivery failure only when truthful.

**Success message (draft):** `Mesajınız alınmıştır. İlgili ekibimiz değerlendirdikten sonra sizinle iletişime geçecektir.` Do not promise a response time without an operational SLA.

**Other UI:** optional map embed after user action to avoid privacy/performance overhead, open-in-maps link, company address, social profiles, privacy notice.

### 7.15 Search — `/search` [P1]

**Global UX:** search icon → command-style overlay with suggestions or navigate to dedicated results; query threshold 2 chars; keyboard navigation; clear query; result groups (pages, projects, minerals, news, jobs, documents); highlighted matching text; accessible result count; no-results suggestions.

**Search source:** published content in current locale only. Never return CMS drafts or private documents. Search engine can be a CMS-backed server query for modest volumes; use hosted search only if scale justifies it.

### 7.16 Error and legal pages [P0]

- 404: plain message `Aradığınız sayfa bulunamadı.` with CTA to homepage, search and relevant sections.
- 500: generic safe message, do not leak technical details.
- Legal: actual entity/publisher info, privacy notice, personal data notice, cookie policy, terms of use. These require Turkish legal review; never present sample legal text as final.
- Custom cookie preference settings available from footer once consent manager is installed.

### 7.17 Investor center — conditional [P2]

The South32 reference has a strong investor section, but **KIMERIS should not display stock charts, trading symbols, audited annual reports or stock-exchange releases unless those exist and are authorized**. If KIMERIS is a private company, use a modest `Kurumsal Belgeler`/`Yayınlar` page instead. If a public issuer, add compliant market release feeds, investor contacts, financial disclosure archive and verified chart data with time zone and delay disclosures. Requires separate review by legal/investor relations.

---

## 8. Design wireframes (structural, not pixel-perfect)

### 8.1 Home desktop

```text
┌─────────────────────────────────────────────────────────────────────┐
│ KIMERIS MADEN       Kurumsal Faaliyetlerimiz ...         TR EN  ☰  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│         [ORIGINAL FULL-BLEED MINE / LANDSCAPE VIDEO or IMAGE]       │
│                                                                     │
│  KIMERIS MADEN                                                      │
│  YER ALTINDAKİ POTANSİYELE,                                         │
│  GELECEĞE DÖNÜK BİR BAKIŞ.                                         │
│  [Brief supporting copy]                                            │
│  [Faaliyetlerimizi Keşfedin] [Bizi Tanıyın]                          │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│ [Large editorial statement, left]   [Portrait / geology image]      │
├─────────────────────────────────────────────────────────────────────┤
│ [VERIFIED STAT]       [VERIFIED STAT]       [VERIFIED STAT]          │
├─────────────────────────────────────────────────────────────────────┤
│ Faaliyet Alanlarımız                                                 │
│ [Large card]             [Card]                  [Card]             │
├─────────────────────────────────────────────────────────────────────┤
│ Öne Çıkan Proje    [Text + tags + CTA]     [Large project photo]    │
├─────────────────────────────────────────────────────────────────────┤
│ Faaliyet Haritası           [interactive map]  [project list]       │
├─────────────────────────────────────────────────────────────────────┤
│ [DARK INK]  Sorumlu Faaliyetler     İSG | Çevre | Toplum           │
├─────────────────────────────────────────────────────────────────────┤
│ Ekibimiz / Kariyer                 [People image]                   │
├─────────────────────────────────────────────────────────────────────┤
│ Haberlerden                  [Card] [Card] [Card]                   │
├─────────────────────────────────────────────────────────────────────┤
│ İletişime Geçin                 [CTA]                                │
├─────────────────────────────────────────────────────────────────────┤
│ Footer: company + nav + policy + contact + social                    │
└─────────────────────────────────────────────────────────────────────┘
```

### 8.2 Mobile home

```text
┌───────────────────────────┐
│ KIMERIS           Search ☰│
├───────────────────────────┤
│ [Mobile-cropped hero]     │
│ KIMERIS MADEN             │
│ Large 3–4 line headline  │
│ One short sentence        │
│ [Primary CTA full width]  │
│ [Secondary text link]     │
├───────────────────────────┤
│ Company story             │
│ [Image]                   │
├───────────────────────────┤
│ Metrics (2 across)        │
├───────────────────────────┤
│ Activities (stacked)      │
│ [Card] [Card] [Card]      │
├───────────────────────────┤
│ Featured Project          │
├───────────────────────────┤
│ Map / accessible list     │
├───────────────────────────┤
│ Responsibility cards      │
├───────────────────────────┤
│ Careers + News + CTA      │
├───────────────────────────┤
│ Footer                    │
└───────────────────────────┘
```

**Mobile behavior:** never rely on horizontal hover menus; avoid a slider for essential content; disable heavy hero video on low-power/network save-data; minimum 44×44 CSS pixel touch targets; map has always-visible `Listeyi Gör` fallback.

---

## 9. Component inventory and precise behavior

| Component | Type | Requirements |
|---|---|---|
| `SiteHeader` | global | Sticky/transparent variants, responsive keyboard nav, locale links |
| `MegaMenu` | nav | Trigger + close, focus management, Escape, click outside |
| `MobileNavDrawer` | nav | Accordion, focus trap, no scroll bleed |
| `HeroMedia` | layout | Image/video poster, gradient, content slots, dark/light contrast |
| `SectionIntro` | layout | Eyebrow, H2, intro, contextual link |
| `EditorialSplit` | layout | Text/image alternating positions, predictable mobile order |
| `KpiStrip` | data | Verified data only; value, unit, period, optional citation |
| `ActivityCard` | content | Icon/photo, heading, description, semantic link |
| `ProjectCard` | content | Verified status, location, material chips, image |
| `ProjectExplorer` | data | Map/list synchronized selection and filters |
| `MineralCard` | content | Category, representative image, description, project links |
| `ResponsibilityPillarCard` | content | Distinct topic, evidence-led teaser |
| `PeopleStoryCard` | content | Portrait, consented quote, role/site |
| `NewsCard` | content | Date, category, headline, excerpt, image |
| `DocumentCard` | content | File metadata, public download, accessible name |
| `JobCard` | content | Title, location, employment info, live state |
| `FilterToolbar` | interaction | URL state, clear filters, readable count |
| `Breadcrumbs` | nav | Hierarchical links, `BreadcrumbList` schema |
| `Pagination` | nav | URL-persisted page, accessible labels |
| `ImageGallery` | media | Keyboard lightbox, descriptive captions |
| `ContactForm` | form | Validation, rate limits, safe server processing |
| `CookieSettings` | consent | Preference choice, revisable, category-based |
| `ContentRenderer` | CMS | Structured blocks, sanitized rich text |
| `RelatedContent` | CMS | Curated or taxonomy-based; only published content |
| `SiteFooter` | global | Legal, social and contact information |
| `SearchDialog` | interaction | Keyboard support, result suggestions, route to full search |

### Interaction rules

- All clickable cards contain an actual anchor; card is not a `div` click handler with inaccessible semantics.
- `:focus-visible` must be strongly visible on white, dark and yellow surfaces.
- Loading/skeleton states must reserve layout height to avoid shifting.
- Empty states are designed, not blank rectangles.
- Buttons express actions (`Gönder`, `PDF İndir`); text links express navigation (`Projeyi İncele`).
- Never nest interactive elements inside interactive parent controls.
- Animations are progressive enhancement, not functional dependencies.

---

## 10. Content model / CMS schema

Use a relational CMS or document CMS with typed fields, localization and workflow support. **Payload CMS + PostgreSQL** is the recommended option if the application is built in a Next.js/TypeScript monorepo. **Sanity** or **Strapi** are viable alternatives; choose one rather than mixing platforms. Model below is platform-neutral.

### 10.1 Common fields (all publishable entities)

```ts
type PublishedEntity = {
  id: string;
  slug: string;             // unique per locale/content family
  locale: 'tr' | 'en';
  title: string;
  summary?: string;
  heroImage?: MediaRef;
  seo: SeoFields;
  status: 'draft' | 'in_review' | 'approved' | 'published' | 'archived';
  publishedAt?: string;     // ISO-8601
  updatedAt: string;
  createdAt: string;
  reviewedBy?: string;
  lastVerifiedAt?: string;  // for facts about operations and metrics
};

type SeoFields = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: MediaRef;
  noindex?: boolean;
};

type MediaRef = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width: number;
  height: number;
  usageRights: string;
  focalPoint?: { x: number; y: number };
};
```

### 10.2 Entities and relationships

| Collection | Important fields | Relations |
|---|---|---|
| `siteSettings` | legal/brand/contact, nav, logo, social, languages, consent | singleton |
| `pages` | title, modular blocks, SEO, locale, route | related documents, projects, news |
| `projects` | stage, location, safe coordinates, minerals, approved facts, gallery, fact-source refs | minerals, documents, news, KPIs |
| `locations` | country, province, public pin, description, privacy precision | projects |
| `minerals` | name, overview, applications, stage in company operations, hero, sources | projects |
| `sustainabilityTopics` | theme, commitment, actual measures, docs, action items, content | projects, documents, metrics |
| `metrics` | value, unit, period, label, scope, methodology/source, approval status | pages, projects |
| `newsArticles` | headline, category, date, author/editor, lead, rich blocks, image | projects, minerals, documents |
| `documents` | title, file, category, year, language, version, issue date, public flag, source | projects, topics |
| `jobs` | title, reference, site, category, type, publishedAt, closesAt, ATS URL | locations |
| `people` | name, role, portrait, approved biography, display order | governance, stories |
| `enquiries` | encrypted contact form data, category, status, consent evidence, retention | admin only |
| `navigation` | labels, href, visibility, menu groups, locale | pages |
| `redirects` | old path, new path, type, active | SEO migration |

### 10.3 Project schema expanded

```ts
type Project = PublishedEntity & {
  statusLabel: 'exploration' | 'development' | 'operating' | 'care_and_maintenance' | 'closure' | 'rehabilitation';
  countryCode: string;
  province?: string;
  district?: string;
  publicCoordinates?: { lat: number; lng: number; precision: 'exact_public' | 'approximate' };
  coordinatesApprovedForPublication: boolean;
  mineralIds: string[];
  operatorName?: string;
  ownershipStatement?: string;
  miningMethod?: string;
  processingMethod?: string;
  geologySummary?: string;
  approvedMetrics: string[];
  sections: CmsBlock[];
  gallery: MediaRef[];
  relatedDocumentIds: string[];
  relatedArticleIds: string[];
  legalApprovalAt?: string;
};
```

### 10.4 Content block types

`textWithMedia`, `fullBleedMedia`, `richText`, `quote`, `metricGroup`, `cardGrid`, `projectExplorer`, `documentList`, `timeline`, `accordion`, `table`, `ctaBanner`, `gallery`, `video`, `relatedContent`.

**Block constraints:** heading levels validated, image alt required or explicitly decorative, embedded video transcripts/captions required when speech, links validated, table headers required, documents not linked if unpublished.

### 10.5 Editorial roles and state machine

| Role | Permissions |
|---|---|
| Super Admin | Infrastructure configuration, users, permissions, publishing |
| Content Editor | Create/edit drafts, upload cleared media, propose publication |
| Technical Reviewer | Approve operational/geological technical claims, metrics and maps |
| Legal/Compliance Reviewer | Approve legal, permit, privacy and sensitive disclosure content |
| Publisher | Publish/schedule approved content, archive/rollback |
| Media/HR Editor | Limited rights for news or careers collections |

`draft → in_review → approved → published → archived`

- New edits to published sensitive content create a **new draft revision**, never silently overwrite approved text.
- Log author, approver, timestamp, before/after changes.
- Support preview links with time-limited token; preview routes excluded from search indexing.
- Missing translations either fall back to a designated published base-locale page with clear language handling or hide the locale switch for that page; never show untranslated mixed-language content without context.

---

## 11. Functional requirements and acceptance IDs

| ID | Requirement | Priority | Acceptance condition |
|---|---|---|---|
| FR-001 | Responsive global navigation | P0 | All top-level links work at 360/768/1024/1440px; keyboard navigation passes |
| FR-002 | Modular homepage composition | P0 | Admin can reorder approved blocks without code changes |
| FR-003 | Draft/published CMS lifecycle | P0 | Unpublished content never appears in public routes, sitemap or search |
| FR-004 | Media library with attribution | P0 | Upload requires metadata; generated sizes and modern formats available |
| FR-005 | News and article publishing | P0 | List/detail routes, dates, SEO, related content, pagination operational |
| FR-006 | Contact form routing | P0 | Valid submissions routed by topic, throttled, stored/handled securely |
| FR-007 | Legal / consent UX | P0 | Nonessential scripts held until appropriate consent where required |
| FR-008 | Project overview and detail | P0 | Only verified projects render; accurate link and metadata |
| FR-009 | CMS page preview / revision | P0 | Editor can safely preview before approval and publish |
| FR-010 | Project map/list explorer | P1 | Markers align to public-approved projects; keyboard list equivalent |
| FR-011 | Mineral index and detail | P1 | Only verified company-related minerals appear; unique slugs |
| FR-012 | Sitewide search | P1 | Published localized content searchable; results categorized |
| FR-013 | Job posting UI | P1 | Open roles listed, closing dates obeyed, ATS action works |
| FR-014 | Document library | P1 | File/date/type/language/year filters work; safe downloads |
| FR-015 | English localization | P1 | hreflang/canonical and locale navigation correct |
| FR-016 | Supplier enquiry | P1 | Enquiry reaches configured owner; qualification claims verified |
| FR-017 | Approved metrics | P1 | Unit, date/period and source maintained for each statistic |
| FR-018 | Investor market data | P2 | Only if verified listed issuer; licensed data source and delay metadata |
| FR-019 | Advanced GIS layers | P2 | External data licensing, geo privacy and accessibility approved |
| FR-020 | Internal ATS/CV processing | P2 | Recruitment workflow, retention, security and legal approvals complete |

### Key edge cases

- CMS project deleted/archived → map marker and related-card links removed or redirected.
- Article/news with no hero → use designed neutral text-first fallback, not broken image.
- Video fails → poster image and readable content remain.
- Map fails/blocked → full project list remains usable.
- No job vacancies → clear empty state, never dummy ads.
- No documents → filter panel not displayed; use friendly explanation.
- Form service unavailable → error message without suggesting success.
- EN translation absent → explicit fallback or hide locale link; no 404 loop.
- Date in the future → article remains unpublished except approved scheduled release.
- Mobile low bandwidth → no auto-playing heavy video and all images lazy-loaded below fold.

---

## 12. Technical architecture

### 12.1 Recommended stack

| Layer | Recommendation | Why |
|---|---|---|
| Front-end | **Next.js** (App Router) + React + TypeScript | SSR/SSG, SEO, route-based content, mature ecosystem |
| Styling | Tailwind CSS + CSS custom properties | Consistent responsive tokens and maintainable components |
| UI primitives | Radix UI / shadcn/ui selectively | Robust accessible dialog, accordion, popover behavior |
| CMS | **Payload CMS** + PostgreSQL | Full-schema editorial data, roles, media and versioning; convenient TypeScript integration |
| Forms | Server actions or API routes + Zod validation | Consistent server-side data integrity |
| Map | MapLibre GL JS, only if justified | Accessible paired list and no forced proprietary map provider |
| Search | CMS-backed server search, upgrade to Meilisearch/Algolia when needed | Avoid needless external complexity |
| Hosting | Vercel / compliant cloud deployment | CDN, preview deployments, CI integration |
| Media | Optimized object storage + image CDN | Responsive imagery and delivery |
| Monitoring | Error tracking + uptime + consent-aware analytics | Operational reliability |
| E-mail | Transactional mail provider / official SMTP with DKIM, SPF, DMARC | Deliverable safe contact notifications |

**Stack is a recommendation**, not a claim about South32's internal technology. Equ's case study says South32 used headless Sitefinity/.NET Core/AWS; KIMERIS need not replicate enterprise infrastructure for a smaller site.

### 12.2 Suggested repository structure

```text
kimeris-maden/
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── activities/page.tsx
│   │   │   ├── activities/projects/page.tsx
│   │   │   ├── activities/projects/[slug]/page.tsx
│   │   │   ├── activities/minerals/[slug]/page.tsx
│   │   │   ├── sustainability/page.tsx
│   │   │   ├── careers/page.tsx
│   │   │   ├── news/page.tsx
│   │   │   ├── news/[slug]/page.tsx
│   │   │   ├── publications/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   └── search/page.tsx
│   │   ├── api/
│   │   │   ├── contact/route.ts
│   │   │   └── revalidate/route.ts
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   ├── cards/
│   │   ├── projects/
│   │   ├── forms/
│   │   ├── search/
│   │   └── cms-blocks/
│   ├── cms/
│   │   ├── collections/
│   │   ├── globals/
│   │   ├── access/
│   │   └── hooks/
│   ├── lib/
│   │   ├── seo.ts
│   │   ├── queries.ts
│   │   ├── validation.ts
│   │   ├── tracking.ts
│   │   └── permissions.ts
│   ├── i18n/
│   │   ├── tr.json
│   │   └── en.json
│   └── styles/
│       ├── tokens.css
│       └── globals.css
├── public/
│   ├── icons/
│   └── brand/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   ├── CONTENT_INVENTORY.md
│   ├── BRAND_GUIDELINES.md
│   ├── SEO_CHECKLIST.md
│   └── EDITORIAL_WORKFLOW.md
├── .env.example
└── PRODUCT.md
```

The route folder tree above is illustrative; when using `next-intl` prefix routing, implement locale-aware `app/[locale]/...` or middleware/rewrite strategy consistently rather than duplicating every page.

### 12.3 Rendering strategy

- Static / ISR: home, about, sustainability, locations, news and documents (revalidate on content publish).
- Server-rendered: search/filter results when needed.
- Client hydration: map, menu/dialog, filters and interactive media only.
- Heavy map code loaded on intersection/interaction; do not make whole homepage client-rendered.
- Cache public CMS reads and invalidate targeted paths/tags with authenticated webhooks.
- Dynamic slugs generated only from published CMS entities; invalid slugs return 404/410/redirect as appropriate.

### 12.4 Environments and deployment

`local`, `preview/staging`, `production` with separate CMS databases/storage buckets; production media never inadvertently overwritten by staging. Use environment variables for API secrets, mail credentials, map keys, preview secret, captcha tokens and analytics settings. Enforce CI checks, preview URL auth/noindex, release branch checks and rollback procedures.

---

## 13. API contracts and data operations

### Read interfaces (internal server side)

```text
getSiteSettings(locale)
getHomepageBlocks(locale)
getPublishedPage(path, locale)
getProjects({ locale, status, region, mineral, q, page })
getProject(slug, locale)
getMinerals(locale)
getNews({ locale, category, year, q, page })
getNewsArticle(slug, locale)
getPublishedDocuments({ locale, type, project, year, q })
getJobs({ locale, location, department, q })
getSearchResults({ locale, q, type, page })
```

**Do not expose private CMS collections or full personal records to the browser.** Use server-side content projections with whitelisted fields. Validate search/pagination with bounded limits. Rate-limit public endpoints and redact server logs.

### Contact POST request contract

```json
{
  "name": "Sample Person",
  "email": "sample@example.com",
  "topic": "supplier",
  "company": "Example Co.",
  "message": "An example enquiry with no personal secrets.",
  "privacyNoticeVersion": "2026-01",
  "locale": "tr",
  "turnstileToken": "OPTIONAL_SERVER_VERIFIED_TOKEN"
}
```

**Server behavior:** validate all fields; reject scripts/HTML not needed in free text; avoid email header injection; spam/rate-limit by privacy-preserving signals; record consent/notice version as legally justified; queue notification; persist only for approved retention period. Return generic success and errors, without exposing internal mail routing.

---

## 14. SEO and discoverability

### Technical baseline

- Unique, descriptive Turkish title and meta description per page.
- `https://canonical-domain/...` canonical URLs; `hreflang=tr-TR/en` and `x-default` as appropriate.
- Semantic headings: a single main H1 per page, logical H2/H3, HTML links for navigation.
- XML sitemap of public indexable URLs; `robots.txt`; exclude CMS preview, admin, filtered duplicates and form endpoints.
- Breadcrumbs on detail pages; `Organization`, `WebSite`, `BreadcrumbList`, `Article`/`NewsArticle`, `JobPosting` (only valid genuine jobs), optional `Place`/`LocalBusiness` when factual.
- Open Graph/Twitter sharing images with licensed original visuals, accurate page titles and descriptions.
- Meaningful Turkish slugs; avoid ambiguity and redirects; Unicode Turkish visible text can coexist with ASCII URLs.
- News paginated with crawlable links, not endless JS-only feed.
- Public PDF files have meaningful filename, content type, size metadata and HTML context page where relevant.
- Internal links naturally connect projects, minerals, sustainability and news; no isolated pages.

### Example metadata (draft)

| Route | Suggested title | Suggested description |
|---|---|---|
| `/` | `KIMERIS MADEN | Kurumsal Web Sitesi` | `KIMERIS MADEN hakkında bilgi edinin. Faaliyetlerimizi, projelerimizi ve kurumsal duyurularımızı inceleyin.` |
| `/about` | `Hakkımızda | KIMERIS MADEN` | `KIMERIS MADEN'in kurumsal yapısı, çalışma alanları ve yaklaşımı hakkında bilgi alın.` |
| `/activities` | `Faaliyetlerimiz | KIMERIS MADEN` | `KIMERIS MADEN'in doğrulanmış maden ve proje faaliyetlerini keşfedin.` |
| `/sustainability` | `Sorumlu Faaliyetler | KIMERIS MADEN` | `İş güvenliği, çevre ve paydaş ilişkilerine yönelik yayımlanmış politikalarımızı inceleyin.` |
| `/contact` | `İletişim | KIMERIS MADEN` | `KIMERIS MADEN ile iş birliği, tedarik ve genel konular için iletişim kurun.` |

Use approved company language before launch; descriptions must not imply unverified services or programs.

---

## 15. Accessibility specification

**Target:** WCAG 2.2 AA, verified with automated and manual testing.

- Descriptive link labels; avoid multiple generic `Devamını Oku` anchors without accessible context.
- Keyboard operation of all menus, search, filters, map list and lightbox.
- High-contrast text and strong focus visibility on any background.
- Video control: pause, captions where spoken content, no blocking auto motion, motion reduced preference honored.
- Screen-reader labels for map buttons; marker alternatives in an ordered HTML list.
- Form labels and field-level error text linked with `aria-describedby`; focus to error summary after failed submit.
- Responsive zoom up to 200–400%; no clipped page content or horizontally scrolling paragraphs.
- Meaningful charts with a data table / textual alternative.
- Consistent visible navigation and clear page language (`lang="tr"`).
- No reliance on color alone to convey project stages or errors.
- Consent UI keyboard accessible and easy to reject or modify nonessential categories.

---

## 16. Performance and reliability

### Budgets

| Metric | Target / rule |
|---|---|
| LCP (p75 field) | <=2.5 seconds on mobile |
| INP (p75 field) | <=200 milliseconds |
| CLS (p75 field) | <=0.1 |
| Initial hero | Responsive AVIF/WebP image with properly sized fallback; preload only necessary LCP asset |
| Hero video | Optional; compressed; lightweight poster; do not preload large video on mobile |
| Site map | Dynamic-import when visible or activated |
| Fonts | Self-hosted/subset licensed web fonts; `font-display: swap` or equivalent |
| Images | Use width/height, lazy-load below fold, focal point, CDN resizing |
| Script | Avoid broad animation libraries and excessive third-party tags |
| Availability | Uptime monitoring, graceful error/fallback paths, rollback plan |

Use Lighthouse/PageSpeed and actual field data rather than claiming target numbers are already achieved. Test on a mid-range mobile device with throttled 4G.

---

## 17. Privacy, legal, safety and security

**Compliance review required:** Turkish **KVKK** personal data rules, applicable cookie/e-privacy obligations, sector-specific disclosures and any other jurisdiction based on actual business, audience and processing. This PRD is not legal advice.

**Security requirements:**
- TLS/HTTPS everywhere; HSTS after deployment validation; secure headers including appropriate CSP.
- CMS/admin uses role-based permissions, 2FA, strong session configuration, audit trail.
- All user input server-validated; prevent injection and XSS through safe CMS rendering.
- Protect form endpoints from abuse; no exposed secret keys.
- Uploaded PDFs/media validated, scanned if needed and served with safe headers.
- Contact submissions stored with explicit retention, access controls and appropriate encryption.
- Backups with restore tests; least-privilege credentials; staging separate from production.
- No private operational coordinates, security procedures or internal technical mine plans inadvertently published.
- Copyright/right-to-use and staff consent verified for each public image/video.
- No false environmental certifications or claims; source and scope required.

**Consent manager:** block optional advertising/marketing/behavioral scripts until appropriate user action; allow necessary processing by default; maintain versioned notice and a revisable preferences control. Ask legal counsel to confirm categories and consent design.

---

## 18. Analytics, event taxonomy and governance

Use a consent-aware analytics solution and avoid recording IP addresses or form content beyond legitimate purposes and configured controls. Configure Search Console and uptime/error monitoring.

| Event | Trigger | Safe parameters |
|---|---|---|
| `nav_click` | Primary menu link | `menu_group`, `destination`, `locale` |
| `hero_cta_click` | Homepage hero CTA | `cta_id`, `destination`, `locale` |
| `project_card_open` | Project selection | `project_id` (public slug), `source_section` |
| `project_filter_change` | Projects filtering | `filter_name`, `selected_public_value` |
| `map_marker_open` | Map marker selection | `project_id` |
| `document_download` | Public file download | `document_id`, `document_category`, `language` |
| `career_apply_click` | Apply link | `job_id`, `source_page` |
| `news_article_open` | News click | `article_id`, `category` |
| `contact_form_submit` | Successful accepted enquiry | `topic`, `locale` — **no text, name, email or phone** |
| `site_search` | Search submission | `result_count`, `result_category`, optionally anonymized aggregated query |
| `language_change` | Locale switch | `from_locale`, `to_locale` |

**Dashboards:** content discovery, location/project interest, documents, careers, forms, search zero-results, Web Vitals. Review monthly and prioritize fixes according to user friction, not just page views.

---

## 19. Localization and content governance

**Turkish first:** all interface strings, errors, taxonomy and dates in idiomatic Turkish; number formatting `tr-TR`; region names as published, not generated. Currency/metrics with explicit unit and period.

**English:** professional transcreation, not word-for-word machine translation. Maintain separate approval for important technical/geological/legal statements. If an English page is not ready, don't silently publish Turkish under `/en`.

**Editorial review:**
- CMS item has content owner, technical reviewer (if operational), legal reviewer (if regulated), publish and re-check dates.
- News: time-sensitive, editorial approval, clear future schedule.
- Project facts: periodic review cadence agreed with operations team.
- Sustainability metrics: owner, period, methodology and changes tracked.
- Documents: version/expiry flags and clearly retired versions.
- Recheck contact emails and application links routinely.

---

## 20. SEO, UX and content acceptance tests

### Representative end-to-end journeys

**E2E-01 — First-time user:** opens `/` on mobile, understands company category from hero, visits `/activities`, opens a verified project, reaches contact. No broken layouts or dead links.

**E2E-02 — Responsible operations:** user finds sustainability overview, reads safety/environment page, accesses genuine policy/document and sees period/ownership/limitations where applicable.

**E2E-03 — Project discovery:** user filters by region, sees expected projects in both list and map, selects a marker via keyboard-accessible alternative; clearing filters restores results.

**E2E-04 — Recruitment:** user opens careers, filters jobs (if present), reads complete role and proceeds to valid apply destination. Expired role cannot be submitted.

**E2E-05 — Press:** user finds latest published article, navigates to attachment and sees correct date/metadata.

**E2E-06 — Enquiry:** required fields produce helpful errors; valid submission succeeds only when accepted by server; duplicate/spam requests are limited; admin receives intended topic.

**E2E-07 — CMS:** editor creates project/news draft; reviewer approves; publisher publishes; English version handled separately; draft remains invisible to search/sitemap.

**E2E-08 — Consent:** optional analytics absent before required consent; preferences can be changed; no breakage with consent refused.

**E2E-09 — Performance:** 360/390/768/1024/1440/1920px visual checks, keyboard audit, reduced-motion check, slow network test, Lighthouse baseline and field monitoring.

**E2E-10 — SEO:** no duplicate titles, valid canonicals, multilingual alternates, real slugs, proper `robots`, `sitemap`, structured data, no orphan pages.

### Cross-browser/device matrix

Chromium, Edge, Firefox, Safari; iOS Safari and Android Chrome; narrow mobile landscape; desktop 100/125/200% zoom. Test disabled JS core navigation and basic content fallback. Validate screen-reader navigation with NVDA and/or VoiceOver.

### Definition of done (per page)

- Approved and fact-checked Turkish content.
- Design reviewed at desktop/tablet/mobile.
- Semantic structure and alt text completed.
- Links and error states tested.
- SEO and social metadata completed.
- Analytics events verified without PII.
- CMS draft/publish behavior correct.
- No legal/sensitive disclosure problems.
- Performance budget checked.

---

## 21. Prioritized implementation roadmap

### Phase 0 — Discovery and content validation

**Deliverables:** confirmed legal company name, activity status, existing projects/minerals, current brand/assets, allowed location data, contact routing, approved draft copy, audience priorities, language requirements, legal/privacy reviewer, photo rights, website domain.

**Gate:** real facts and media content inventory approved. **Do not fill missing facts with AI-generated company data.**

### Phase 1 — Brand and design system

**Deliverables:** KIMERIS logo variants, type/color tokens, desktop/mobile header, hero, typography rules, buttons, image cards, footer, form elements, accessible interactions. Create Figma examples for home, listing, detail and contact.

**Gate:** brand and key templates approved at 390px and 1440px before full build.

### Phase 2 — MVP foundation [P0]

**Build:** Next.js application, CMS + DB, localization foundation, reusable components, homepage, About, Activities, project detail, Sustainability overview, News/Article, Careers landing, Contact, legal, SEO, security headers, analytics gating.

**Gate:** content team can publish a complete live narrative without developer intervention and pass primary E2E journeys.

### Phase 3 — Discovery enhancements [P1]

**Build:** project map/list, mineral catalogue, sustainable topic pages, documents center, suppliers, genuine jobs integration, on-site search, EN translation, expanded news features.

**Gate:** verified content quantity justifies features; no empty catalogue/filters/maps.

### Phase 4 — Enterprise extensions [P2]

**Optional:** investor relations (if real), high-volume ATS, GIS datasets, multilingual editorial expansion, rich analytics dashboards, supplier portal, source-system integrations. Each needs an individual business case and owner.

---

## 22. Initial content inventory required from KIMERIS MADEN

**Company:** official spelling/legal name, logo/brand assets, short description, corporate story, actual activities and strategic objectives, management bios/portraits, HQ/contact channels, registered information where suitable.

**Operations:** verified name/status/location for every site; active permits and public-safe details; site photos; mineral links; operations summaries; approved coordinates (or intentionally approximate); technical reviewer.

**Sustainability:** policies, safety guidance, available performance indicators, environmental permits/reports publishable by law, community programs, complaint process, methodology/sources, claim owner.

**Media:** 1 hero visual, 6–12 project/landscape photos, 4–8 people/operations photos, captions/licensing/permissions, optional short video with poster image.

**Careers:** recruitment owner, verified jobs or ATS link, recruiting privacy notice, job posting format.

**Documents:** downloadable policy/report set, versions, publication dates, source owner, visibility authorization.

**Legal:** privacy/cookie/KVKK texts, terms, contact form notice, retention/access policy, approved cookie strategy.

**Content gates:** Each asset must have status `missing`, `draft`, `in_review`, `approved` or `published`. Do not ship pages with dummy achievements, empty project lists, or lorem ipsum.

---

## 23. Draft Turkish content starter pack (NOT FACTUAL COMPANY CLAIMS)

These are editorial examples for tone and layout. They require approval and adjustment to real activities.

### Homepage hero option A

**Eyebrow:** `KIMERIS MADEN`  
**Headline:** `Kaynakları anlamak. Geleceği sorumlulukla şekillendirmek.`  
**Supporting line:** `Faaliyetlerimiz, projelerimiz ve yaklaşımımız hakkında bilgi edinin.`  
**Primary CTA:** `Faaliyetlerimizi Keşfedin`  
**Secondary CTA:** `Hakkımızda`

### Homepage hero option B (more cinematic)

**Eyebrow:** `KIMERIS MADEN`  
**Headline:** `Yer altındaki potansiyele yeni bir bakış.`  
**Supporting line:** `Maden ve doğal kaynaklar alanındaki çalışmalarımızı yakından tanıyın.`  
**Primary CTA:** `Projelerimizi İnceleyin` (only if the company has verified projects)

### About intro

**Heading:** `KIMERIS MADEN'i Tanıyın`  
**Body:** `KIMERIS MADEN'in faaliyet alanlarını, çalışma yaklaşımını ve kurumsal yapısını bu bölümde bulabilirsiniz. Projelerimizle ilgili teknik ve güncel bilgilere ilgili sayfalardan ulaşabilirsiniz.`

### Activities intro

**Heading:** `Faaliyet Alanlarımız`  
**Body:** `Her projenin kendine özgü jeolojik, teknik ve çevresel koşulları vardır. Bu bölümde çalışmalarımızın kapsamını ve yayımlanmış proje bilgilerini bir arada sunuyoruz.`

### Sustainability intro

**Heading:** `Sorumlu Faaliyetler`  
**Body:** `İş sağlığı ve güvenliği, çevresel etkiler ve paydaşlarla iletişim, madencilik faaliyetlerinin temel değerlendirme alanlarıdır. Bu sayfada KIMERIS MADEN'in onaylanmış uygulamalarına ve ilgili belgelere yer verilecektir.`

### Contact CTA

**Heading:** `Birlikte değerlendirebileceğimiz bir konu mu var?`  
**Body:** `İş birliği, tedarik ve diğer talepleriniz için ilgili ekibimize ulaşabilirsiniz.`  
**CTA:** `İletişime Geçin`

**Important:** These draft lines intentionally avoid any specific unverifiable success, location, certification or mineral. Replace them with distinctive and verifiable company language as facts become available.

---

## 24. Design details for developer / AI coding agent

### Code quality

- Use strict TypeScript, reusable server components by default, client components only for interactions.
- No hardcoded lorem ipsum or phantom enterprise statistics in pages.
- Copy must come from the CMS or approved locale dictionaries.
- Use named design tokens, not scattered inline hex values.
- Page layout sections should be a typed block union and gracefully skip unpublished items.
- A `ProjectCard` and `NewsCard` must have consistent design in every context.
- Centralized image component with focal-point behavior, caption/alt conventions and mobile crop rules.
- Use native links/buttons, not role-clickable divs.
- Support keyboard, reduced motion and low-bandwidth fallbacks from the first sprint.
- Maintain `.env.example`, dev setup, testing docs and seed data distinctly marked **DEMO ONLY**.

### Validation strategy

- Unit tests: formatting, slug, access rules, content block rendering, filter query parsing.
- Integration tests: CMS published query visibility, form submission/routing, revalidation hooks.
- E2E tests: journeys in §20, consent scenarios, broken image fallback, 404/redirect behavior.
- Visual regression: representative mobile/tablet/desktop screenshots for all core templates.
- Content audits: broken links, image rights, source metadata, outdated content, orphan routes.

### Required production outputs

```text
✅ Fully responsive site, built around original KIMERIS MADEN branding
✅ Content-editable homepage and interior page templates
✅ Projects/minerals only where real verified content exists
✅ Responsible-operations pages with source-aware content
✅ News publishing and contact functionality
✅ Careers and suppliers entry points
✅ SEO / accessibility / Core Web Vitals foundations
✅ Editable CMS with role-based approval and preview
✅ Deployment environment, tests, monitoring and documentation
```

---

## 25. Launch checklist

### Brand and content

- [ ] Logo and brand assets are unique, properly licensed and approved.
- [ ] Company description, operational scope and naming are verified.
- [ ] Every project, commodity, metric, photo and testimonial approved.
- [ ] No fake sites, certifications, staff counts, partnerships or stock prices.
- [ ] Media captions, alt text and image credits complete.
- [ ] Careers, supplier and contact destinations are operational.

### Development and UX

- [ ] Primary page routes finished and linked.
- [ ] Navigation works at desktop, mobile and with keyboard only.
- [ ] Map works or accessible list fallback works.
- [ ] Forms work with input validation, anti-spam and privacy notices.
- [ ] Loading/empty/error states completed.
- [ ] Lighthouse and Web Vitals tested on real conditions.
- [ ] Automated + manual accessibility audits passed or deviations documented.

### SEO and deployment

- [ ] Real domain and HTTPS configured; production secrets set.
- [ ] Content publishing and revalidation tested.
- [ ] Sitemap, robots, canonicals, language alternates correct.
- [ ] SEO titles/descriptions/OG cards validated.
- [ ] Analytics and cookie logic reviewed and tested.
- [ ] Security and backup/restore checks completed.
- [ ] Preview/staging protected and noindexed.
- [ ] Search Console configured and post-launch monitor assigned.

---

## 26. Reference sources, dates and limitations

Accessed/researched in **November 2026**:

1. [South32 — corporate website](https://www.south32.net/) — primary inspiration; direct automated retrieval of main HTML pages was intermittently blocked by HTTP 403; publicly indexed navigation, paths and imagery were used.
2. [equ — South32 website redesign case study](https://equ.com.au/work/south32/) — primary evidence for UX research, site IA, people-centered visual direction, interactive map, live investor data, KPI summaries, headless CMS and SEO approach.
3. [Deploi — mining website design examples](https://deploi.ca/blog/mining-website-design-examples) — published South32 homepage screenshot and commentary on cinematic hero and map.
4. [South32 careers portal](https://careers.south32.net/) — active external jobs experience, keyword/location search, vacancy pages and talent community.
5. [South32 — Our locations](https://www.south32.net/what-we-do/our-locations) and [Our commodities](https://www.south32.net/what-we-do/our-commodities) — reference information architecture paths corroborated in public links/indexing.
6. [South32 — Sustainability](https://www.south32.net/sustainability) — sustainability topic taxonomy and public policies reflected in its reporting.
7. [South32 — Annual reporting suite](https://www.south32.net/investors/annual-reporting-suite) — investment/report archive reference and document classification.
8. [South32 — 2026 annual report text, FinancialFilings mirror](https://financialfilings.com/filings/south32-limited/annual-report-esef/2026/59426601/) — current public context for the company's minerals, operations, reporting themes and sustainability scope. **No South32 numerical values are appropriate for KIMERIS.**

### Distinction between research and specification

The existence of South32's operations map, investor feeds, career portal and relevant page families is documented by sources above. This document's particular KIMERIS page layouts, content components, information architecture, colors, stack, acceptance tests and Turkish drafts are **proposed product design**, not a claim that South32 implements those exact details.

---

## 27. Decisions to finalize with the company before launch

| Decision | Recommended default | Owner must confirm |
|---|---|---|
| Company geography | Türkiye-first language and navigation | Legal location / target countries |
| Actual business stage | Support exploration, development and producing statuses | Which stages really exist |
| Minerals shown | None until approved | Actual mineral portfolio |
| Operations map | Only after public-site locations approved | Safe pin precision and project count |
| Investor section | Disabled | Whether KIMERIS has genuine investor reporting obligations |
| Careers applications | External ATS/e-mail link first | HR procedure and privacy |
| Supplier onboarding | Public enquiry page first | Procurement owner and process |
| Languages | Turkish now, English next | Business audience and translation capacity |
| CMS | Payload + PostgreSQL | Team's infrastructure/maintenance preference |
| Analytics | Minimal and consent-aware | Data governance/legal approval |
| Logo/color direction | Ink + white + yellow | Official brand decision |

### Final product principle

**KIMERIS MADEN should feel as polished and navigable as a major international mining company while communicating only its own verified reality.** The highest-quality outcome is not the page count or animation density. It is a distinctive identity, a well-structured project portfolio, defensible content, reliable interaction and a credible way for stakeholders to connect.
