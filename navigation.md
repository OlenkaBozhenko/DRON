# DRON — Site Navigation

Single source of truth for the left sidebar shown on every page.
The sidebars in the HTML files (`research.html`, `ux-research.html`, and any future page)
are a **visual preview** of this file — never the source. **Update this file first,
then mirror the change into the HTML visual preview.**

## Pages

The "Pages" group of the sidebar. Each page is a collapsible dropdown
(`<details>/<summary>` with a chevron arrow) whose children are its section anchors.

### Research → `research.html` (`research/`) — live
- `#competitors` — Competitors
- `#benchmark` — Benchmark
- `#patterns` — Patterns
- `#conclusions` — Conclusions

### UX Research → in-page sections of `research.html` (`ux-research/`) — live
Personas and CJM render as sections **on `research.html` itself** (same page as the
Research sections), not on a separate page. `ux-research.html` remains as a standalone
full report (user stories, benchmarks, etc.).
- `#personas` — User personas
- `#cjm` — CJM

### Target Audience → `target-audience.html` (`research/`) — live
- `#personas` — Personas
- `#conclusions` — Conclusions
- `#gaps` — Knowledge gaps

### JTBD → in-page sections of `target-audience.html` — live
- `#jobs` — Jobs hierarchy
- `#matrix` — Matrix

Every page shows the same four dropdowns (Research, UX Research, Target Audience,
JTBD); cross-page entries link to the owning page's anchors, so all four render with
the same collapsible-dropdown UI, never as plain links.

## Coming soon

Non-clickable placeholder pages in their own "Coming soon" group, each tagged `Soon`.

- Design system → `design-system/`
- Components → `components/`
- Wireframe → `wireframes/`

## Sidebar specification

- Position: fixed, left, full height
- Width: **240px**
- Background: `--bg-2`, right border `--border`
- Groups, top to bottom:
  1. Brand (`DRON`) + tagline (`Drone-as-a-service`)
  2. **Pages** — collapsible dropdowns (chevron arrow); children are section anchors
  3. **Coming soon** — non-clickable placeholder pages, each tagged `Soon`
  4. Footer: GitHub link (pinned to bottom)

## Mobile behaviour (≤ 900px)

On small screens the fixed sidebar is replaced by a slide-in drawer:

- A fixed **mobile header** (52px) appears at the top with the `DRON` brand,
  a **theme toggle** (sun / moon — light ↔ dark, persisted in `localStorage`
  under `dron-theme`), and a **hamburger** button.
- Tapping the hamburger slides the sidebar in from the left over a dimmed
  overlay; tapping the overlay, the close (`✕`) button, any link, or `Esc`
  closes it.
- The same header and drawer are shared by every page (`research.html`,
  `ux-research.html`, `target-audience.html`).
- The light/dark theme applies site-wide via the `data-theme` attribute on
  `<html>`, set before paint to avoid a flash.
