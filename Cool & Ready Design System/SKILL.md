---
name: cool-and-ready-design
description: Use this skill to generate well-branded interfaces and assets for Cool & Ready (a B2B seafood supply-chain company), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and
create static HTML files for the user to view. If working on production code, you can copy
assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build
or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Quick map
- `README.md` — brand context, voice & tone, visual foundations, iconography, file index.
- `colors_and_type.css` — all design tokens (color, type, spacing, radii, shadow, motion)
  plus semantic helper classes. Import this first; build everything from its variables.
- `assets/` — logo variants (transparent charcoal / white / Harbor teal + original).
- `preview/` — standalone spec cards (colors, type, spacing, components, brand).
- `ui_kits/marketing/` — marketing-website components (`parts.jsx`, `sections.jsx`, `index.html`).
- `ui_kits/portal/` — B2B ordering-portal components (`parts.jsx`, `screens.jsx`, `index.html`).

## House rules (short version)
- **Color**: Harbor teal does the heavy lifting; Tide aqua for accents/links/data; Marine
  blue is the sparse high-priority-CTA accent (~5% of a surface). Pages breathe on Ice, not
  pure white. Dark sections use Harbor-900.
- **Type**: Space Grotesk (display/headlines), IBM Plex Sans (body/UI), IBM Plex Mono (data —
  SKUs, lots, temps, order IDs). Sentence case everywhere; ALL-CAPS only for short overlines.
- **Icons**: Lucide, stroke style, via CDN. No emoji.
- **Voice**: "we" / "you", direct and reassuring, concrete numbers, no hype, no emoji.
- **Shape**: 10px radius on controls, 16px on cards, soft sea-tinted shadows, hairline borders.
- Use brand-gradient placeholders for imagery; ask the user for real cool-toned photos.
