# Marketing website — UI Kit

A high-fidelity recreation of the **Cool & Ready** public marketing site, built as a
click-through prototype. Open `index.html`.

## What's here
- **`index.html`** — assembles the full homepage and renders `<MarketingApp />`.
- **`parts.jsx`** — shared primitives, exported to `window`:
  - `Icon` (Lucide wrapper), `Logo` (mark + wordmark lockup, light/dark variants),
    `Button` (primary / accent / secondary / ghost / onDark), `Tag`, `Overline`,
    `Container`, `ImageSlot` (photo placeholder), `Nav`, `Footer`.
- **`sections.jsx`** — page sections, exported to `window`:
  - `Hero`, `TrustBar`, `ValueProps`, `Categories`, `ColdChainBand` (dark stat band),
    `Testimonial`, `CTASection`, and the `MarketingApp` that ties them together.

## Interactions (faked)
- Any "Become a customer" / CTA button fires a confirmation toast.
- Nav links and category cards have hover states; category cards lift on hover.

## Notes
- All photography is represented by `ImageSlot` gradient placeholders — drop in real
  cool-toned seafood / coastal photography for production.
- Icons are [Lucide](https://lucide.dev) via CDN. Fonts via Google Fonts CDN.
- Colors and type come entirely from `../../colors_and_type.css` — no local overrides.
