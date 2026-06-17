# DRON — Site Navigation

Single source of truth for the left sidebar shown on every page.
The sidebars in the HTML files (`research.html`, `ux-research.html`, and any future page)
are a **visual preview** of this file — never the source. **Update this file first,
then mirror the change into the HTML visual preview.**

## Pages

The "Pages" group of the sidebar. The currently open page is marked `active`.

| # | Title       | Visual preview (HTML) | Source content   | Status |
|---|-------------|-----------------------|------------------|--------|
| 1 | Research    | research.html         | `research/`      | live   |
| 2 | UX Research | ux-research.html      | `ux-research/`   | live   |

To add a page: add a row here, create its `.md` source folder, build the HTML
visual preview, and add one `<a>` under the "Pages" group of every sidebar.

## On this page (section anchors)

The "On this page" group lists in-page section anchors, per page.

### research.html
- `#competitors` — Competitors
- `#benchmark` — Benchmark
- `#patterns` — Patterns
- `#conclusions` — Conclusions

### ux-research.html
- _(to be defined — currently uses its own top nav)_

## Sidebar specification

- Position: fixed, left, full height
- Width: **240px**
- Background: `--bg-2`, right border `--border`
- Groups, top to bottom:
  1. Brand (`DRON`) + tagline (`Drone-as-a-service`)
  2. **Pages** — the page list above
  3. **On this page** — section anchors for the current page
  4. Footer: GitHub link (pinned to bottom)
- Responsive: below 768px the sidebar collapses into a horizontal scrolling top bar.
