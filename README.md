# BIU — AI Growth Intelligence Platform (Homepage)

Production rebuild of the Boast It Up (BIU) marketing homepage. Rebuilt from a
single CDN-React HTML prototype into a Next.js app with a sharper brand identity:
rationed green system + Plus Jakarta Sans, with JetBrains Mono reserved for the
"intelligence/terminal" texture (URLs, sitemap tree, data chips).

**All marketing copy is preserved verbatim** from the source. Only design,
structure, components, motion, and tokens changed.

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS — tokens defined as CSS variables in `app/globals.css` and mapped
  in `tailwind.config.ts`
- Framer Motion for all animation
- `next/font/google` for fonts (no `<link>` tags)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project structure

```
app/
  layout.tsx          # fonts + metadata
  globals.css         # design tokens (:root variables)
  page.tsx            # composes the sections
components/
  Nav.tsx             # frosted pill nav + 3 mega-menus
  Hero.tsx            # split hero + ambient glow blobs
  SignalCard.tsx      # signature element (gradient strip, live insight reveal)
  StatsBar.tsx        # dark band, count-up on view
  Modules.tsx         # snap-scroll module row, per-module hue accents
  SitemapExplorer.tsx # tabbed tree -> page detail, layoutId underline
  Roadmap.tsx         # phase cards, bar fill + expand on click
  Journeys.tsx        # tabbed flow, staggered steps + arrows
  CaseStudies.tsx     # placeholder quote cards (offset layout)
  ClosingCTA.tsx      # closing brand-gradient band
  Footer.tsx          # dark footer from source taxonomy
  ui/                 # Button, Pill, Eyebrow, SectionHeader, MegaMenu, Reveal
lib/
  content.ts          # all copy + data arrays (single source of truth, typed)
  cn.ts               # className helper
```

## Design notes

- **Brand gradient is rationed** to exactly two places: the hero signal card
  header strip and the closing CTA band.
- **Per-section accents** (green / blue / amber / violet) are applied only to
  small elements: eyebrows, icons, card top-borders, tab states.
- The **hero signal card** is the page's signature: a live Copilot artifact with
  an insight line that reveals word-by-word on scroll-into-view.
- All motion honors `prefers-reduced-motion` (count-up, reveals, float, blob
  drift, and the insight reveal all collapse to instant).
- Brand greens live in one place (`app/globals.css` `--brand-*`). Swap in exact
  brand hexes there if they differ from the current defaults.
```
