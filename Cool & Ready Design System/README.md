# Cool & Ready — Design System

> Brand & design system for **Cool & Ready**, a B2B seafood supply-chain company.
> *Cold-chain reliability, ready-to-use product.* This system was created from a single
> brand asset (a leaping-fish logo); the broader brand identity, palette, type, voice and
> UI kits below were designed to fit that mark and the company's category.

---

## 1. Company & product context

**Cool & Ready** supplies seafood through the cold chain to professional buyers —
restaurants, grocery/retail, and food distributors. The name carries the brand's two
promises:

- **Cool** — an unbroken cold chain. Product is kept at temperature from dock to door,
  with traceability and food-safety as table stakes.
- **Ready** — product arrives prepped and ready to use (portioned, ready-to-cook,
  ready-to-plate), and the business is operationally *ready* — reliable delivery windows,
  predictable supply.

The brand sits at the intersection of **trust/logistics** (it's infrastructure for
kitchens that can't afford a bad delivery) and **appetite/freshness** (it's still food,
and the product should look delicious). The visual system balances a cool, dependable
**Harbor teal** with a vivid **Marine blue** accent that brings emphasis and energy.

### Surfaces in this system
- **Marketing website** — public-facing site: who Cool & Ready is, product categories,
  sourcing/traceability story, and a path to "Become a customer." See `ui_kits/marketing/`.
- **B2B ordering portal** — the logged-in web app where buyers browse the catalog, place
  standing/one-off orders, and track shipments through the cold chain. See `ui_kits/portal/`.

### Sources provided
- `uploads/logo.png` — the original leaping-fish logo (150×148, charcoal on solid white,
  no transparency). Processed variants live in `assets/`.
- **No** codebase, Figma file, website, or written brand guidelines were provided. Every
  decision beyond the logo (palette, type, voice, spacing, components, copy) is an original
  proposal designed to fit the mark and category, and is open to your direction.

---

## 2. Content fundamentals (voice & tone)

Cool & Ready talks like a **dependable supplier who knows kitchens** — confident, plain-spoken,
a little warm. Never corporate-stiff, never cutesy.

| Dimension | Direction |
|---|---|
| **Person** | "We" for the company, "you/your" for the customer. ("We pack it cold. You get it ready.") |
| **Casing** | Sentence case everywhere — headlines, buttons, nav, labels. Reserve ALL-CAPS for short overlines/eyebrows only (e.g. `COLD CHAIN`). |
| **Tone** | Direct and reassuring. Short declarative sentences. Lead with the customer's outcome (fresh product, on time), back it with proof (temperature, traceability). |
| **Numbers** | Concrete and specific — "Delivered within a 2-hour window," "Held at –1°C," "48 ports." Numbers build trust in a logistics brand; use real ones, not vague claims. |
| **Emoji** | Not used. The brand conveys energy through the Marine-blue accent and photography, not emoji. |
| **Jargon** | Industry terms are fine for the B2B portal (SKU, case pack, landed, lot, HACCP) but the marketing site keeps it human. |

**Voice examples**
- Hero: *"Seafood that shows up cold, fresh, and ready to cook."*
- Value prop: *"One unbroken cold chain — from the dock to your back door."*
- CTA (primary): *"Become a customer"* / *"Start an order"*
- Portal empty state: *"No orders yet. Browse the catalog to build your first one."*
- Reassurance microcopy: *"Every case is lot-tracked and temperature-logged."*
- Overline: `WILD-CAUGHT` · `FARM-RAISED` · `COLD CHAIN` · `READY-TO-COOK`

**Avoid**: exclamation-mark hype, "delicious!!!", pun overload ("o-fish-ally fresh"),
buzzword soup ("synergistic seafood solutions"). One clean pun in the wordmark spirit is
plenty; the copy stays grounded.

---

## 3. Visual foundations

**Overall vibe** — Clean, cool, and confident. Think a modern
cold-storage facility crossed with a good fishmonger's counter: lots of light "ice" space,
deep teal anchors, sharp type, and the occasional Marine-blue pop. Crisp, never clinical.

### Color
- **Primary — Harbor (deep ocean navy-teal)** (`--harbor-800` `#073F52`): the brand anchor. Used for primary
  buttons, headers, dark sections, the logo lockup. Deep, cold, trustworthy.
- **Tide (ocean aqua)** (`--tide-500` `#16A6C0`): brighter aqua for links, overlines, accents,
  data viz, focus rings.
- **Seafoam** (`--seafoam-300` `#9FE3D8`): light sea-mint for soft fills, illustrations and fresh
  accents on dark sections.
- **Ice** (`--ice-50/100/200`): cool sea-tinted off-whites used for page backgrounds and subtle
  surfaces — the system breathes on near-white, not pure white.
- **Marine blue** (`--marine-500` `#1C6FE6`): the accent. Used sparingly for the
  highest-priority CTA, badges, and emphasis. Never as a background wash.
- **Ink** (`--ink-900` `#1A2226` → `--ink-400`): cool-tinted neutral grays for text and borders.
- Semantic: kelp **success** `#2E9E6B`, amber **warning** `#E8A33D`, red **danger** `#D8412F`,
  Tide for **info**. Each has a soft `-bg` tint for badges/banners.
- **Rule of thumb**: teal does the heavy lifting; Marine blue is a seasoning (~5% of the surface).

### Typography
- **Display — Space Grotesk** (600/700): headlines, hero, wordmark, big numbers. Modern,
  slightly mechanical, reads "cool/precise." Tight tracking (`-0.02em`) on large sizes.
- **Body — IBM Plex Sans** (400/500/600): all running text, UI labels, paragraphs.
  Humanist, professional, highly legible at small sizes.
- **Mono — IBM Plex Mono** (400/500): data — SKUs, lot numbers, temperatures, order IDs,
  tracking codes. The mono face signals "logistics/precision" and is a deliberate motif.
- Type scale and semantic classes live in `colors_and_type.css` (`.cr-h1`, `.cr-body`, etc).

### Spacing & layout
- **4px base grid**; tokens `--space-1` … `--space-24`. Components use 8/12/16/24; sections
  breathe at 64/80/96.
- Generous whitespace; content max-width ~1200px on marketing, fluid app shell on portal.
- Layout favors clear horizontal rules and aligned columns over heavy boxing.

### Backgrounds
- Default page = **Ice-50** (`#F2F8F9`), not pure white. Cards sit on white above it.
- **Dark sections** use Harbor-900 (`#052B38`) for contrast moments (footers, stat bands,
  testimonial blocks) with white text and a Marine-blue or tide accent.
- Photography is full-bleed in heroes and category tiles. **No** gradient-wash backgrounds,
  **no** purple/blue tech gradients, **no** noise/grain overlays. Color comes from flat
  brand fields + real imagery. A subtle teal→transparent **protection gradient** is allowed
  over photos to keep white text legible.
- **Signature motif — "Soundings"** (`assets/soundings.svg`): bathymetric depth-contour
  lines, the ocean-chart / sonar-readout device that ties the sea to cold-chain precision.
  Use it as a **low-opacity texture on dark Harbor sections only** (e.g. the cold-chain
  band, footers, login). It's a brand texture, never foreground content; keep contrast low
  so it reads as depth, not decoration, and always pair with a protection gradient behind text.
  On the web it may **drift** slowly (`cr-drift`, ~18s, alternate) — always gated on
  `prefers-reduced-motion`.
- **Signature device — "Catch tag"** (`preview/brand-catch-tag.html`): a notched,
  hole-punched case-tag showing species, lot, origin and hold temperature. The brand's
  proof-of-provenance device — use it for hero proof-points, provenance moments and
  shipment cards. Comes in a light (white) and dark (Harbor) variant.

### Imagery
- Cool-leaning, fresh, well-lit seafood and coastal/cold-chain photography. Crisp focus,
  natural light, a slightly cool white balance (ice, steel, water). Plated-dish shots add
  appetite; facility/boat shots add credibility.
- Real photos only — this system ships **placeholders** (`.cr-img-slot`) for you to fill.
  Avoid illustration except simple iconography (below).

### Corner radii
- Tight and modern: inputs/buttons `--radius-md` (10px), cards `--radius-lg` (16px),
  pills/tags `--radius-pill`, large feature panels `--radius-xl` (24px). Nothing fully
  squared, nothing balloon-round.

### Cards & elevation
- Cards = white surface, 1px `--border` (`#DCE4E6`), `--radius-lg`, and a **soft cool-tinted
  shadow** (`--shadow-sm`/`md`) — shadows are sea-tinted (`rgba(7,63,82,…)`), never neutral gray.
- Elevation ladder: `--shadow-xs` (resting chips) → `sm` (cards) → `md` (raised/hover) →
  `lg` (popovers/menus) → `xl` (modals). Hover raises a card from `sm` to `md`.

### Borders
- Hairline 1px borders in `--ink-200`; stronger dividers in `--ink-300`. On dark surfaces
  use `--border-on-dark` (white @ 14%). Borders are the primary separation device — the
  system leans on lines + spacing more than on heavy fills.

### Motion
- Purposeful and quick. `--dur` 200ms with `--ease-out` (`cubic-bezier(0.22,1,0.36,1)`)
  for most transitions; 120ms for instant feedback. Content fades + rises ~8px on entrance.
- **No** bounce, **no** infinite loops, **no** decorative parallax. Respect
  `prefers-reduced-motion`.

### Interaction states
- **Hover**: primary buttons darken Harbor-800 → Harbor-700; accent darkens Marine-500 → Marine-600;
  cards lift one shadow step; links go Tide-500 + underline.
- **Press/active**: darken one more step (Harbor-900 / Marine-700) and a subtle 1px
  translateY down — a "press," not a shrink/scale.
- **Focus**: 2px `--ring` (Tide-400) outline with 2px offset, on every interactive element.
- **Disabled**: 40% opacity, no shadow, `not-allowed`.

### Transparency & blur
- Used sparingly: sticky nav uses a translucent white (`rgba(255,255,255,0.8)`) +
  `backdrop-filter: blur(12px)`. Photo overlays use solid-teal protection gradients, not blur.

---

## 4. Iconography

- **System: [Lucide](https://lucide.dev)** — loaded from CDN. Clean, consistent 1.75–2px
  stroke, rounded line caps/joins. It matches the brand's modern-but-warm, line-forward feel
  and covers logistics needs (truck, ship, thermometer-snowflake, package, map-pin, clock,
  shield-check, leaf, snowflake, anchor, waves).
  - **Substitution flag:** Lucide is a *chosen* icon set, not one extracted from existing
    brand assets (there were none). If you have a preferred icon library, swap it here.
- **Usage rules**
  - Stroke icons only; default size 20–24px in UI, 18px inline with text.
  - Icon color inherits text color (`currentColor`); on accent surfaces, white.
  - Pair icons with a text label in nav, buttons, and stats — icons rarely stand alone.
  - Status uses semantic color (kelp/amber/red/tide) on the icon, not just text.
- **Emoji / unicode**: not used as icons anywhere.
- **Logo as mark**: the leaping fish (`assets/logo-mark*.png`) is the brand mark, not an
  icon — don't use it inline in body copy. Use it in the nav lockup, footer, favicon,
  loading states, and empty states.

### Logo assets (in `assets/`)
| File | Use |
|---|---|
| `logo-original.png` | The source file as provided (charcoal on white). |
| `logo-mark.png` | Charcoal fish on **transparent** — for light backgrounds. |
| `logo-mark-white.png` | White fish on transparent — for **dark/teal** backgrounds. |
| `logo-mark-harbor.png` | Harbor-teal fish on transparent — tonal/brand use. |
| `soundings.svg` | "Soundings" bathymetric contour-line motif (for dark sections). |

> ⚠️ **Logo quality caveat:** the source is small (150×148) and was supplied with a baked-in
> white background; the transparent variants are recovered from luminance, so edges are
> slightly soft and there's no crisp vector. Use at small sizes (≤56px) where it holds up,
> and **please provide a high-res or vector (SVG) original** for production.

---

## 5. Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file — brand context, voice, visual foundations, iconography. |
| `colors_and_type.css` | All design tokens: color, type, spacing, radii, shadow, motion + semantic classes. |
| `SKILL.md` | Agent-Skills-compatible entry point for using this system. |
| `assets/` | Logo variants (see table above). |
| `preview/` | Standalone HTML spec cards rendered in the Design System tab. |
| `ui_kits/marketing/` | Marketing-website UI kit — `index.html` + JSX components. |
| `ui_kits/portal/` | B2B ordering-portal UI kit — `index.html` + JSX components. |

**Fonts:** loaded from Google Fonts CDN (Space Grotesk, IBM Plex Sans, IBM Plex Mono).
No font files are bundled; see the note at the top of `colors_and_type.css` to self-host.
