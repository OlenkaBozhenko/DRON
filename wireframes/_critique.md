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

---

## 2026-08-02 — `welcome`: Skip moves into the action bar

**What was built.** `welcome` and `welcome-empty` carried Skip as `a.skip`, a bare text link at
the right end of the top bar. Measured on the render: **33.17 × 21px**, `--wf-text-2` `#5A5A5A`
on `#FFFFFF`.

**What the guideline says.** `HIG · 44pt target` sets 44 × 44pt as the minimum for any control a
finger operates. `WCAG 1.4.3` governs the label's contrast.

**Whether it passed.** The label was fine — **6.90:1**, well over the 4.5:1 AA asks. The target
was not: **33 × 21** is **11px short across and 23px short down**, failing on both axes with no
fixed-height mechanism making it up. Moved into the action bar as `.btn.btn-secondary.btn-block`
it becomes **341 × 44** and clears the guideline.

**No new pattern was invented.** `onboarding-client` and `onboarding-operator` — the two screens
that share this slider — already carry exactly `Skip` (secondary, block) above `Get started`
(primary, block). `welcome` now matches them, and the order follows the action-bar rule already
in the system: secondary above primary, so the thumb reaches the primary first.

**Consequence, reported and not acted on.** The action bar grew from 81px to **133px** (12 + 44 +
8 + 44 + 24 + 1). The full-bleed picture layer is anchored to the frame's bottom edge, so the bar
now covers **133px of its 284px band — 47%**. On slide 3 the drone is nearly gone. Raising the
artwork to stand on the bar's top edge would fix it in one line; that is the designer's call, not
a change to make unasked.

**Also open, unchanged by this:** the pager still sits on the artwork — active dot **1.00:1** over
the operator's jacket against the 3:1 `WCAG 1.4.11` asks of a state indicator; the inactive dot is
**1.18:1** on every page in the set (`--wf-fill` on `--wf-bg`), which predates all of this.

**`welcome-empty` note.** Its Skip and its primary `Continue` both point at `signin.html`. The
structure now matches its base file, as §12 requires, but two controls with one destination is a
question for whoever owns that state.

### Same day — the picture is raised to stand on the action bar

Asked for after the bar grew to 133px and swallowed 47% of the artwork. The layer no longer
anchors to the frame; `main` is made its containing block, so it stops exactly where the content
area stops. No number in the rule names the action bar, and the layer re-sizes itself if the bar
ever gains or loses a button.

Re-measured on the render, all three slides:

| | title `#252525` | lead `#5A5A5A` |
|---|---|---|
| slide 1 · handover | 13.94:1 | 6.27:1 |
| slide 2 · operator | 13.94:1 | 6.27:1 |
| slide 3 · drone | 13.94:1 | 6.27:1 |

**The pager got worse, and it is still not fixed.** Raising the artwork raised what sits under the
dots. `WCAG 1.4.11` asks **3:1** of a state indicator:

| | active dot `#111111` | inactive dot `#E2E2E2` |
|---|---|---|
| slide 1 | 17.17:1 | **1.18:1** |
| slide 2 | **1.01:1** | 4.17:1 |
| slide 3 | **1.00:1** | 3.19:1 |

On slides 2 and 3 the mark that says which slide you are on is invisible. Three ways out, none
taken without the designer: move the pager off the artwork (tried once, reverted — it changes a
component that was not in scope); give the dots a ground of their own; or restyle the two dot
states so both survive any background. The inactive dot's 1.18:1 on slide 1 is the base pair
`--wf-fill` on `--wf-bg` and fails identically on every page in the set, picture or none.

### Same day — the treatment rolls out to `onboarding-client` and `onboarding-operator`

Asked for after `welcome` was accepted. Both sliders take `.is-bleed`, and in both the picture moves
below its copy in the markup — it is decorative (`alt=""`) and absolutely positioned, so a screen
reader should reach the heading first.

**One rule changed to make it possible.** The earlier note said a slider had to wait until every
slide had its asset, or it would "read as broken". Three of the nine slides are still labels, so
that rule was holding two finished screens hostage to one missing file. Instead, the frame is now
dropped by `.slide-ph:has(img)` rather than by `.is-bleed` — a slide without its picture keeps the
dashed well and its label, stretched across the same band the artwork would occupy. It reads as
*pending*, the composition does not jump as you swipe, and the slide closes itself the day the file
lands with no edit to the page.

Copy re-measured on the render, all six new slides, both inks:

| | title `#252525` | lead `#5A5A5A` |
|---|---|---|
| `onboarding-client` 1 · 2 · 3 | 13.94:1 | 6.27:1 |
| `onboarding-operator` 1 · 2 · 3 | 13.94:1 | 6.27:1 |

**The pager fails here the same way it fails on `welcome`**, and for the same reason — it sits on
the artwork, so its contrast is whatever the picture happens to put under it. `WCAG 1.4.11` asks 3:1:

| | active `#111111` | inactive `#E2E2E2` |
|---|---|---|
| `onboarding-client` 1 | **1.00:1** | 4.91:1 |
| `onboarding-client` 2 | 17.17:1 | **1.18:1** |
| `onboarding-client` 3 | 16.28:1 | **1.12:1** |
| `onboarding-operator` 1 | **1.08:1** | **1.02:1** |
| `onboarding-operator` 2 | 16.28:1 | **1.12:1** |
| `onboarding-operator` 3 | 16.28:1 | **1.12:1** |

Nine slides now carry it. On three of them the mark saying which slide you are on is invisible; on
seven the mark saying how many slides there are is. One decision fixes all nine at once, and it is
the designer's.

**Also standing, and older:** the pending well's label is `--wf-muted` `#909090` on `--wf-recessed`
`#EEEEEE` — **2.75:1**, under the 4.5:1 `WCAG 1.4.3` asks. That is the placeholder pair used by
every media well in the set (§8), not something this change introduced.

---

## 2026-08-02 — `operator-listings`: the header loses two things and gains a face

### The notifications control is removed — from all seven pages that carried it

**What was built.** A `24 × 24` bordered square, `aria-label="Notifications"`, in the top-right of
`listings` · `-empty` · `-error` · `-filtered` · `-loading` and `operator-listings` · `-empty`.
Empty, because §8 says an icon is a bordered box until the icon set exists.

**What the guideline says.** `_conventions.md` §10: *a state exists only where a `flows.md` node
produces it — do not invent screens or states*. §11: **no dead ends**. `HIG · Navigation bars`:
every bar control leads somewhere.

**Whether it passed.** It did not. Searched `sitemap.md`, `navigation.md`, `flows.md` and
`_screens.md`: **there is no notifications screen anywhere in the product**. The only match is
`sitemap.md` OE-6, a *push* notification on the operator's lock screen closing `RJ-O1` — an OS
surface, not an in-app centre, and it is reached by the phone, not by a button in DRON's header. So
the control was an affordance with no destination: a dead end by the file's own definition, and a
screen invented at the header rather than in `_screens.md`.

**Removed on all seven.** If a notifications centre is ever wanted, it starts in `sitemap.md` and
`_screens.md` and arrives here afterwards — which is the order this file exists to keep.

### The DRON mark leaves the operator's own top bar

`operator-listings` and `-empty` carried the mark **and** the operator's avatar and name. That is
two identities in one 56px bar. On the operator's home the bar answers *who is signed in*, not
*whose app is this* — the client's `listings` keeps the mark because it has no personal identity to
show. The avatar and the name are now flush left, which is where the eye starts.

Count corrected: **27 files carry the mark**, not the 29 before.

### Ivan gets a face

`person-operator-ivan.png` — `visuals/gaps.md` B1 #1, the highest-value gap in the register, since a
face is the load-bearing trust signal in `RJ-C1` and the initials `IK` carry none of it. It replaces
the initials in the 28px top-bar circle on both listing screens and in the 56px card circle on
`operator-account`. The circle keeps a `--wf-recessed` fill of its own: the portrait is a cutout, so
without one the top bar shows through beside the shoulders and the head floats.
