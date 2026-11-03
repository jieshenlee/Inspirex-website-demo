# InspireX — design.md

Design brief for building the InspireX website / landing pages with Claude Code.
Sources: InspireX Company Profile (PDF) for brand truth; Rope Digital, Code94 Labs, Roar Global (live computed styles) and Surge Global (metadata only) for structural and stylistic inspiration.

> Confidence note: InspireX hex values are sampled by eye from the PDF render, so treat them as close approximations and replace with official brand values if you have them. Rope, Code94 and Roar values were read from the live sites. Surge could not be opened in the browser, so only its section order, copy tone and stats pattern are used.

---

## 1. Brand essence

- **Who:** InspireX is a Sri Lankan digital growth and innovation company (conversational AI, data analytics, innovation, digital disruption).
- **Tagline:** "Your Growth Engine. Powered by AI and Predictive Analytics."
- **Positioning:** a growth architect, not a vendor. Outcome-first, with numbers (73% enrolment contribution, 400% enrolment growth, 100 Mn+ revenue, 3 Mn USD valuation).
- **Personality:** confident, intelligent, modern, warm. Dark and futuristic for hero and proof moments, soft and friendly pastel for explanation moments.
- **Signature motifs:** brush-stroke wordmark with a cyan-to-purple "X"; glowing translucent butterfly (transformation / disruption); city-skyline-at-night imagery under a navy overlay.

## 2. Design principles

1. **Proof over adjectives.** Every section earns its place with a number, a client, or an outcome.
2. **Two moods, one system.** Dark navy for hero, case studies, stats and CTA. Warm off-white with pastel cards for services, industries and process.
3. **One accent.** Periwinkle violet is the highlight colour for key words, stat numbers, eyebrows and icons. Do not add a second accent.
4. **Calm density.** Generous whitespace, large rounded cards, short copy.
5. **Motion with purpose.** Subtle reveal, count-up and glow. Never decorative noise.

## 3. Colour tokens

```css
:root {
  /* Core brand (approx., from PDF) */
  --ix-navy-950: #020A33;   /* deepest card / section bg */
  --ix-navy-900: #0B1235;   /* dark page bg */
  --ix-navy-800: #1B2347;   /* raised dark surface, hero overlay */
  --ix-navy-700: #2E3350;   /* case-study card on dark */
  --ix-violet-400: #A29BFE; /* THE accent: highlights, stat numbers, icons */
  --ix-violet-300: #C5C1FF; /* hover / soft gradient end */
  --ix-cyan-400:  #3FB7F5;  /* logo X start, gradient stripe start */
  --ix-purple-500:#6B5BE0;  /* logo X end, gradient stripe end */

  /* Light surfaces */
  --ix-paper:   #F4F2ED;    /* warm off-white page bg */
  --ix-white:   #FFFFFF;
  --ix-ink:     #0A0F3C;    /* headings on light */
  --ix-slate:   #5B6385;    /* body on light */

  /* Pillar pastels (service cards) */
  --ix-sky:   #A8D8FF;      /* AI & DevOps */
  --ix-rose:  #FFB3B5;      /* Data Analytics */
  --ix-lilac: #A29BFE;      /* Business Model Innovation */
  --ix-mint:  #B5E6B5;      /* Creative & Content */
  /* Digital Strategy uses --ix-navy-950 */

  /* Gradients */
  --ix-brand-gradient: linear-gradient(90deg, #3FB7F5 0%, #6B5BE0 100%);
  --ix-hero-overlay: linear-gradient(180deg, rgba(11,18,53,.55), rgba(11,18,53,.92));

  /* Text on dark */
  --ix-on-dark: #F4F2ED;
  --ix-on-dark-muted: rgba(244,242,237,.65);
}
```

**Usage rules**
- Headline on dark: `--ix-on-dark` with the *second line* in `--ix-violet-400` (as in "Your Growth Engine. / Powered by AI…").
- Stat numbers and eyebrows: always `--ix-violet-400`.
- Pastels are only for the five pillar cards and tiny tags. Never as page backgrounds.
- Contrast: violet-400 on navy passes for large text. Do not use violet-400 for small body text on `--ix-paper`; use `--ix-ink` or `--ix-slate`.

## 4. Typography

| Role | Font | Notes |
|---|---|---|
| Display / headings | **Inter** (fallback: Helvetica Neue, Arial) | Matches the Helvetica-style headings in the profile. Weight 700 for H1/H2, 600 for H3. Tight tracking (-0.02em). |
| Body | **Inter** 400/500 | 16–18px, line-height 1.6 |
| Slide-style impact titles (optional) | **Poppins** 600 | Used on the Awards and Case Study slides; use sparingly for big section titles on dark. |
| Eyebrow | Inter 500, uppercase, 0.12em tracking, 13px | e.g. "OUR ECOSYSTEM", "EXPERTISE", "THE PROBLEM", "CASE STUDY" in `--ix-violet-400` |
| Wordmark | Brush-script lockup (image/SVG) | Never retype it in a font; use the logo asset. |

**Scale (desktop):** H1 72–88px / H2 48–56px / H3 24px / body 17px / eyebrow 13px / stat 64–88px (weight 700).
**Mobile:** H1 40–48px, H2 32px, stat 48px.

## 5. Layout, spacing, shape

- Container: max 1280px, 24px gutters mobile, 48px desktop.
- Section padding: 96–128px vertical desktop, 64px mobile.
- 12-column grid; card rows are 5-up (pillars, industries), 4-up (case studies, challenges), 2-up (partners). Collapse to 2-up then 1-up.
- **Radius:** cards 24px, large containers/hero panels 32–40px, pills/tags/buttons 999px, icon tiles 16px.
- **Shadows:** almost none on light (use soft 1px border `rgba(10,15,60,.08)`); on dark use a faint violet glow `0 0 40px rgba(162,155,254,.18)` for the butterfly and active cards.
- Icons: outline, 1.75px stroke, Lucide-style (code `<>`, bar-chart, lightbulb, video, palette, graduation-cap, landmark, factory, plane, heart). Placed in a 56px rounded tile with a slightly darker tint of the card colour.

## 6. Components

**Navigation:** sticky, floating pill (inspired by Rope), translucent navy with blur, wordmark left, links centre (Services, Industries, Work, Awards, About), gradient or violet "Book a Discovery Call" pill on the right.

**Hero (dark):** full-bleed navy panel with rounded corners (32px+), skyline image under overlay, two-line headline (white + violet), one-line supporting copy, tag row "Conversational AI · Data Analytics · Innovation · Digital Disruption", primary + secondary CTA. Glowing butterfly on the right as the focal graphic (SVG, slow float/glow animation).

**Buttons**
- Primary: `--ix-violet-400` fill, `--ix-navy-950` text, 999px radius, 14×28px padding, hover lifts to violet-300 with glow.
- Secondary: transparent, 1px border `rgba(244,242,237,.3)`, white text.
- On light: primary = `--ix-navy-950` fill with white text.

**Pillar card (light section):** pastel fill, 24px radius, icon tile, 20px/600 title in ink, 15px body in slate-tinted ink. Five cards in a row. Hover: translateY(-4px).

**Industry card (dark-on-light):** `--ix-navy-950` card, violet outline icon, white title, muted body.

**Case-study stat card (dark):** `--ix-navy-700` fill, 24px radius, eyebrow (industry) in violet, client name white 600, **huge violet stat**, one-line metric label, muted description, small ↗ arrow top-right. Count-up animation on scroll.

**Problem / challenge card:** frosted light card, gradient violet icon tile, bold title, short body. Used for "The Challenge" style narrative blocks.

**Chart panel:** dark rounded panel, violet bars for volume, light-blue line for cost, dashed faint grid, two check-mark outcome chips below. Follow the dataviz palette: violet-400 + sky `#A8D8FF` on navy.

**Awards band:** three rows (Innovation / Digital Marketing / Creative Branding), each a trophy image strip sitting on a cyan→violet gradient bar with an uppercase caption.

**Client logo wall:** white rounded panel (32px) on dark background, 6-column grid of full-colour logos; or a slow horizontal marquee on mobile.

**Partners:** two large white cards on `--ix-paper` (Zoho, Yandex) with logo tile, name, one-line descriptor.

**Footer:** navy-950, wordmark, 3–4 link columns, newsletter input pill, small copy, social icons.

## 7. Page structure (home)

1. Sticky nav
2. Hero: "Your Growth Engine. Powered by AI and Predictive Analytics."
3. Client logo marquee (trust strip, from Code94 / Surge pattern)
4. **The InspireX Five Pillars** (pastel cards): AI & DevOps, Data Analytics, Business Model Innovation, Creative and Content Production, Digital Strategy
5. **Stats strip** (Surge / Roar pattern): 3–4 big numbers. Use verified figures only (e.g. 400+ hotels onboarded, 100 Mn+ revenue, 3 Mn USD valuation) and confirm with the client before publishing.
6. **Case studies** grid (8 cards from the profile: APIIT, UCL, Pay&Go, DSI Tyres, Niwadu, Travelverse, HealthX, Inspire College), each linking to a detail page
7. **Industries We Transform:** Education, FinTech, Manufacturing, Travel & Tourism, HealthTech
8. **Awards Galore**
9. **Authorised partnerships:** Zoho, Yandex
10. **Testimonials** (Code94 / Surge pattern): quote, headshot, company
11. **Insights / blog** preview (3 cards)
12. **FAQ** accordion
13. Final CTA band + footer

**Case study detail template** (from the APIIT slides): Eyebrow "CASE STUDY" → title "Our Growth Story with {client}" → "The Challenge" four-card row → "The Approach" → chart panel → outcome chips → CTA.

## 8. What to borrow from each reference site

| Site | Take | Leave |
|---|---|---|
| **Rope Digital** (dark `#0C0E16`/`#05070F`, cyan `#00C8FF`, Manrope + Bai Jamjuree, pill buttons, 16/24/32px radii) | Floating pill nav; eyebrow with coloured dots; "Build / Grow / Staff" three-line hero headline with the first word coloured, which maps well to InspireX's coloured second line; hero 3D object on the right (swap for the butterfly); glassy translucent cards (`rgba(255,255,255,.03–.1)`) | Cyan as the primary accent (InspireX uses violet) |
| **Code94 Labs** (Space Grotesk + Inter, near-black, cyan `#01E7FD`, huge 104–192px display type, full-pill buttons) | Oversized uppercase statement headlines; video hero; client logo carousel; stats counters; FAQ accordion; insights cards | 192px type is too loud for InspireX; cap at about 88px |
| **Surge Global** (metadata only: red gradient video backgrounds, fullscreen hero video, three-pillar capabilities, industry sections with video backgrounds, stats "400+ specialists / 12+ countries / 75% retention") | Section order (hero → logos → capabilities → industries → testimonials → stats → CTA); "partners, not vendors" tone; looping background video per section | Red palette |
| **Roar Global** (white/`#F5F6FA` light base, brand `#4E5FFD`, Onest + Bricolage Grotesque, 78px light-weight headings, 100px light stat numbers, 100px pills, 8px buttons) | Big light-weight stat numbers ("150+", "$30M+"); portfolio card grid with uniform logo + description + "Learn more"; interactive map for reach; news feed; purple-blue brand tone close to InspireX violet | Light-weight 300 numbers on dark (InspireX stats should be bold 700) |

## 9. Imagery and motion

- **Photography:** real people (students, founders, teams) with a navy duotone overlay when used under text. Skyline / data-city imagery for hero.
- **Illustration:** the butterfly (glow, translucent violet), line icons only. No stock 3D clip-art.
- **Motion:** 400–600ms ease-out reveal (fade + 16px rise), stat count-up, card hover lift 4px, nav blur on scroll, butterfly slow float (6–8s loop). Respect `prefers-reduced-motion`.
- **Video:** optional looping hero background, muted, with a static poster; compress under 3MB mobile.

## 10. Copy and tone

- Headlines: short, declarative, outcome-led. "Shaping Student Success, Powering Institutional Growth."
- Two-tone pattern: plain statement in white, then the differentiator in violet.
- Use verbs like *architect, engineer, accelerate, transform*. Avoid jargon walls.
- Always pair a claim with a metric or named client.
- Region-appropriate spelling: British ("Authorised", "Enrolment").
- CTAs: "Book a Discovery Call", "See our work", "Talk to a growth architect".

## 11. Accessibility and performance

- WCAG AA contrast on all text; visible focus ring (2px `--ix-violet-300` offset 2px).
- Min touch target 44px; semantic landmarks; alt text for logos and trophies.
- Images AVIF/WebP, lazy-load below the fold; self-host Inter; `font-display: swap`.
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1.

## 12. Build instructions for Claude Code

- Stack suggestion: Next.js + Tailwind CSS (map section 3 tokens into `tailwind.config` / CSS variables), Framer Motion for reveals, Lucide for icons.
- Create `components/` for: `Nav`, `Hero`, `LogoMarquee`, `PillarCard`, `StatCard`, `CaseStudyCard`, `IndustryCard`, `AwardsBand`, `PartnerCard`, `Testimonial`, `FAQ`, `CTABand`, `Footer`.
- Keep all colour, radius and spacing values in tokens; no hard-coded hex in components.
- Use the logo and butterfly as SVG/PNG assets from the brand folder; do not recreate the wordmark in CSS.
- Content source of truth: the InspireX Company Profile. Do not invent numbers, clients or awards.
- Verify at 390px, 768px and 1440px widths, and in both dark and light sections, before calling a page done.

## 13. Open items to confirm

1. Official hex codes and font files for the brand.
2. Which stats are cleared for public use (e.g. Niwadu revenue, HealthX valuation).
3. Permission to show each client logo on the web.
4. Whether to ship dark-first (matches hero) or light-first (matches the pillars slide) as the default page background.
