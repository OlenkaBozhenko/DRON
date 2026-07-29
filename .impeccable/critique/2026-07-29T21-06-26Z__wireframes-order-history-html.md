---
target: Order history (3 states) — Studio language pass
total_score: 30
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 0
timestamp: 2026-07-29T21-06-26Z
slug: wireframes-order-history-html
---
# Order History — Studio design-language critique

**Method**: dual-agent (A: design review · B: detector + browser evidence), both isolated sub-agents, synthesized by the parent.

## Design Health Score — 30/40 (Good)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Loading names what's loading, skeletons rehearse real anatomy, live order gets pill+ETA; kebab-delete has no visible result state |
| 2 | Match Between System and Real World | 4 | Real Kyiv neighborhoods, hryvnia, natural date/time, conventional route dots |
| 3 | User Control and Freedom | 2 | No undo/confirm modeled for the one destructive action (kebab delete) |
| 4 | Consistency and Standards | 4 | Verified in-browser: all 4 repeated cards, 3 secondary buttons, 4 kebabs, all pills identical computed styles |
| 5 | Error Prevention | 2 | Destructive delete is one tap behind a 28px icon, no confirm step visible in this trio |
| 6 | Recognition Rather Than Recall | 3 | Cards self-contained; no per-service icon (see Design Specificity below) |
| 7 | Flexibility and Efficiency of Use | 3 | "Book again" is a genuine RJ-C5 accelerator — the screen's reason to exist |
| 8 | Aesthetic and Minimalist Design | 4 | Clean, one accent, empty-state photo now matches concept.html's own technique (fixed this run) |
| 9 | Error Recovery | 2 | No error state exists for this screen (correctly — not in `_screens.md`'s matrix); delete has no recovery path |
| 10 | Help and Documentation | 2 | Global Help tab exists, nothing contextual — acceptable for this screen's scope |
| **Total** | | **30/40** | **Good** |

## Design Specificity Verdict

Copy and structure are unmistakably DRON (real Kyiv geo, hryvnia, MVP service names, `voice.md`-exact button labels). Palette/type/form now trace 1:1 to `concept/concept.html`'s live token values (verified numerically, not just visually — see Fixes below). The one architectural gap Assessment A flagged — no per-service icon-well, unlike concept.html's spacious example cards — was attempted and reverted after empirical testing: at 375px, an icon-well pushed "Aerial photo & video" and even "Package delivery" past available width and silently truncated the title text on all 4 cards. No other list-row screen in the 80-page prototype (checked `operator-listings.html`) uses a leading service icon either — this is a genuine density-class difference between concept.html's spacious single-card demos and a dense list row, not an oversight. Text-only titles stay as the correct call for this context.

## What's Working

1. **Card/button/pill consistency across all repeated instances** — verified via computed styles, not just visual read: 4 cards' head-band backgrounds, 4 price colors, 3 secondary-button backgrounds, 4 kebab hit-areas (44px, confirmed) all return identical values.
2. **Loading skeleton rehearses real card anatomy** (media slab, 3 body lines, button slab) with staggered pulse + `prefers-reduced-motion` fallback — no reflow on data arrival.
3. **`.card-link` focus-within ring** wraps the full rounded card cleanly, uses green-ink (not raw green) specifically because raw `#9BCF4A` fails WCAG 1.4.11 non-text contrast (1.69:1/1.52:1 vs required 3:1) — this is documented, computed, and correct.

## Fixes Applied This Run

- **[Fixed] Secondary-button box-shadow deviation** — `.btn-secondary` had a shadow `concept.html`'s own `.btn.secondary` doesn't have (only `.primary` gets one). Removed for exact parity.
- **[Fixed] Empty-state photo mismatch (was P1)** — the embedded drone photo was a *different* crop than `concept.html`'s canonical `--drone-img` (Operator card), with no `background-blend-mode:multiply`, so it sat as a dark rectangle in an otherwise light, warm layout. Swapped to `concept.html`'s exact same asset + exact same multiply-blend technique (byte-identical CSS pattern) — now traces 1:1 to the approved asset instead of a separately-sourced one.
- **[Attempted, reverted after testing] Icon-well per card (was P2)** — added, measured truncation on all 4 titles at 375px (real content, not synthetic), reverted rather than ship hidden service names. See Design Specificity Verdict.
- **[Verified false positive] `single-font`, `flat-type-hierarchy`** (detector, all 3 files) — detector misses the linked `_wireframe.css`'s base SF-stack rule (only sees the inline `<style>` block's `--mono` override); tight size range (11-17px) is `_conventions.md`'s explicit wireframe-stage rule ("no final type scale — deferred").
- **[Verified false positive] `low-contrast` (#909090/#ffffff), `all-caps-body`, `cramped-padding`, `clipped-overflow-container`** (browser injection, all 3 files) — traced to the `.meta` annotation sidebar / base `_wireframe.css` shell chrome (`--wf-muted:#909090` sitewide default, `.state-switch` pills), explicitly out of scope per this screen's own header comment: "Studio applied to the phone frame only; the wireframe annotation sidebar keeps its own chrome."

## Remaining (not fixed — P2/P3, genuinely optional)

- **[P2] Destructive delete has no confirm/undo modeled** in this trio of files. Likely lives on a different screen/interaction (confirm sheet) not in scope here — worth confirming rather than assuming. → `/impeccable harden` if in scope.
- **[P3] Kebab "⋮" has no visible text label** (has `aria-label`, sighted users get an icon-only affordance). Low risk given Bolt/Glovo-class familiarity.

## Persona Red Flags

**Jordan (first-timer)**: Most likely lands on *empty* first — clear single CTA, and the photo now reads as a real, credible product shot instead of a stray dark tile. Good first trust-moment.
**Casey (thumb-zone, distracted)**: CTAs sit at card bottom (thumb-reachable), touch targets check out (44px verified). No error state exists in this trio if the loading fetch stalls — confirm whether that's in scope elsewhere.

## Contrast — verified by direct computation (not trusted from comments)

All documented pairs recomputed from hex values independently; every one matches or exceeds AA. One stale figure was found and noted: `concept.html`'s own §07 table says "ink/card → 15.8:1" but the live token values compute to 14.37:1 (still comfortably AAA — cosmetic inaccuracy in concept.html's own docs, out of this task's scope, not touched).
