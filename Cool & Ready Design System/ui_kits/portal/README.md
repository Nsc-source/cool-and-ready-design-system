# B2B ordering portal — UI Kit

A high-fidelity recreation of the logged-in **Cool & Ready** ordering portal, built as a
click-through prototype. Open `index.html`.

## What's here
- **`index.html`** — renders `<PortalApp />` (the app shell + view router).
- **`parts.jsx`** — shell + primitives, exported to `window`:
  - `Icon`, `Button`, `StatusPill` (delivered / transit / packing / scheduled / alert),
    `Money`, `Avatar`, `Sidebar` (dark Harbor nav rail), `TopBar` (sticky, with cart),
    `ProductCard` (with qty stepper), plus demo data: `PRODUCTS`, `ORDERS`, `SHIPMENTS`.
- **`screens.jsx`** — screens + app, exported to `window`:
  - `Dashboard` (stat cards, arriving-today cold-chain timeline, quick reorder, recent
    orders table), `Catalog` (filter chips + search + product grid), `Orders`,
    `Shipments` (cold-chain timeline + temperature log), `CartDrawer` (slide-in),
    and `PortalApp`.

## Interactions (faked)
- Left-rail nav switches screens; active item is highlighted with a tide accent bar.
- Catalog: filter by category, search by name/SKU, add items and adjust quantities.
- Cart drawer opens from the top-bar cart or "Review order"; quantities are editable;
  "Place order" clears the cart, toasts, and jumps to live shipment tracking.

## Notes
- Product imagery uses brand-gradient `image slot` placeholders — swap for real photos.
- The **mono** typeface is used throughout for SKUs, lot numbers, temperatures, order IDs
  and tracking codes — a deliberate "logistics/precision" motif.
- `Invoices` is intentionally a labelled placeholder (not part of the demo scope).
- Icons via [Lucide](https://lucide.dev) CDN; tokens from `../../colors_and_type.css`.
