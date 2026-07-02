# DRON wireframes — critique & fix log

**Status:** Pass 1 · July 2026. A meticulous audit of every `wireframes/*.html` (80 files) against
[`_conventions.md`](_conventions.md) (the contract), [`../sitemap.md`](../sitemap.md) (screens/zones) and
[`../flows.md`](../flows.md) (states, exits). Source of truth is the `.md` files; this log records what was
checked, what was wrong, and what was fixed.

## Method

- **Deterministic static scans** (grep across all 80 files) for: shadows/elevation, `<img>`/`<svg>`/icon-fonts/emoji,
  lorem/placeholder markers, state-file completeness vs the `_conventions.md §12` map, off-map file stems,
  and a recovery-action presence check on every `-empty`/`-error` page.
- **Three read-only review agents** (shared+ordering · wait/outcome/EJ-2 · operator) read every file in full and
  judged the semantic classes static can't: copy quality, "zone without a main action", and real dead-ends —
  each told explicitly that grayscale-only, flat type scale, and uppercase media-label placeholders (§8) are
  **intentional, not defects**.

## Defect classes reviewed

1. Look regressions — a shadow or icon crept in.
2. Placeholders — lorem / "Heading 1" instead of real domain text (listing, Kyiv district, price, profile).
3. Missing states — not all `_screens.md` states closed / reachable.
4. Dead-end — a state with no exit (empty without recovery, error without retry).
5. Zone without a main action — unclear what to do next.
6. Off-map — a screen absent from `sitemap.md` / `flows.md`.

## Result — overwhelmingly clean

No shadows, no `<img>`/`<svg>`/icon-fonts, no lorem/placeholder copy, **80 expected state files = 80 on disk**
(nothing missing, nothing extra), no off-map screens, and every `-empty`/`-error` page already carried an
in-frame recovery action (**no hard dead-ends**). Classes **2 (filler)** and **5 (zone without action)** returned
**zero** findings across all three reviewers. Four real defects were found and fixed.

## Findings & fixes (fixed in this pass — dead-ends / missing states first)

| # | Screen(s) | Class | What was wrong | What was fixed |
|---|---|---|---|---|
| 1 | `operator-listings.html` | 3 · missing state | Base screen had **no `.state-switch` nav** — its `empty` sibling was reachable only from the left tree, not the screen's own state row. The only base screen missing it (it also uniquely uses inline CSS, so it didn't inherit the shared rule). | Added the `success ↔ empty` `.state-switch` nav to the `.meta` aside **and** the small `.state-switch` rules to its inline `<style>` so it renders. |
| 2 | `order-confirmed-error.html`, `tracking.html`, `tracking-empty.html`, `tracking-error.html` (6 links) | 4 · recovery → wrong target | "Contact support" / "Contact operator" recovery links pointed at `account.html` (the profile), so the recovery didn't reach the resolution path. Not a hard dead-end, but a broken recovery. | Repointed all 6 to `support.html` (the EJ-2 Help hub). |
| 3 | `share.html` | 1 · icon crept in | A glyph `⧉` was used as a copy icon inside the frame — outside the allowed text-affordance set; §8 forbids glyph icons. | Replaced the glyph with a text `COPY` label (the adjacent "Copy link" button already carries the action). |
| 4 | `operator-listings.html` | 6 · off-model | A "Sort: Soonest ▾" control let the operator browse/re-sort pushed offers — contradicts auto-dispatch (`sitemap.md §4`: operators do not search/sort; nearest is assigned). | Removed the sort button; counter now reads "…· nearest first" and the zone/legend labels say offers are auto-dispatched, no manual sort. |

## Checked and deliberately **not** reported (intentional per the contract)

- Grayscale-only surfaces; flat / uniform type sizes — final type scale is deferred (`_conventions.md §3`).
- Uppercase text labels inside bordered boxes (`MAP`, `LIVE MAP`, `OPERATOR PHOTO`, `RESULT PHOTO`, `COVER PHOTO`,
  `INSPECTION IMAGE`, `LICENCE (CAA/DASU)`, `FLIGHT LOG / PHOTO`, `LOGO`, `EARNINGS CHART`, state markers like
  `DONE`/`EMPTY`/`ERROR`) — the required way to represent media/icons (§8), not filler.
- Missing real icons (deferred, §8); the `<aside class="meta">` annotation panel and the injected left nav tree +
  Preview toolbar (wireframe scaffolding, not the screen); the San Francisco system-font stack.
- Text affordances `› ‹ ▾ ▸ ★ · — →` — plain characters, within the allowed set.

## Verification after fixes

- **0 dead links** across all 80 files (re-run post-fix).
- `operator-listings.html`: `.state-switch` nav renders; sort control gone.
- `share.html`: `⧉` removed, `COPY` label present.
- No `Contact support/operator` link points at `account.html` anymore.
- No shadow/`<img>`/`<svg>` regressions introduced.
