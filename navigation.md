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
- Responsive: below 768px the sidebar collapses into a horizontal scrolling top bar.
