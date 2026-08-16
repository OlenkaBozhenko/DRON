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

---

## 2026-08-15 — the back control: a dead exit, a second typeface, and a half-size target

Opened by the designer on `contact-support`, closed as rev 86. Three findings on one 45×21 box.

### The exit was dead when the page was opened first in a tab

Rev 84 wired `.dr-back` to `history.back()` — the `HIG · Navigation bars` behaviour, since the back
control returns to wherever the user actually came from, and `contact-support` has **six** ways in.
But the shell calls `preventDefault()` only when `history.length > 1`. **14 of the 24** back
controls were `<button>` with no `href`, so on a deep link they did nothing at all: a nav bar with a
dead exit, against §1's no-dead-ends rule. The other 10 were already `<a href>` and survived it.

All 14 are now `<a class="dr-back" href="…">` naming the canonical previous screen. History still
wins inside the walk; the link is only the floor. The role is accurate too — the control loads
another document, so `WCAG 4.1.2 Name, Role, Value` wants `role=link`, and §7 had already said
*"`<a>` for navigation"*.

### The 14 buttons had been rendering in Arial

Not a consequence of the swap — a fault it uncovered. Measured with the same class and the same
text at the 375 preset: `<button class="dr-back">` renders **Arial · line-height `normal` · 41.67 ×
17.6**; `<a class="dr-back">` renders **`-apple-system` · 21px · 45.63 × 21**. A `<button>`
inherits neither `font-family` nor `line-height` — the UA sheet sets `font: 400 13.333px Arial` —
and `.dr-back` overrides only `font-size` and `font-weight`. So the product's top bar had been
carrying **two typefaces**, 14 back controls in Arial against 10 in SF, contradicting §5's
*one family, no pairing*. All 24 now render identically.

### The target was 48% of the HIG minimum

**45.63 × 21** against `HIG · 44pt minimum target`. Width passed; height was **21 of 44**. Fixed in
`ui/kit.css` with `padding: 11.5px 0; margin: -11.5px 0` — border box **45.63 × 44**, margin box
still 21, so the bar centres what it centred before and the label does not move. Every text label
clears the width: narrowest is `‹ Help` at **45.63**.

### Open, not fixed: the filters close control is 10px wide

`listings-filters` uses `.dr-back` for a **close** control whose label is a bare `&times;` —
**10.07 × 44** after the padding fix, still **23%** of the required 44 width. It is not a back
control and was not touched here. It needs its own decision: a wider hit area, or a real close
control of its own with the 44 × 44 that `HIG · 44pt minimum target` asks for.

### ~~Open, not fixed:~~ RESOLVED (rev 91) — the label does not name the screen it returns to

`voice.md` and `HIG · Navigation bars` ask the back control to carry the title of the screen you
return to. Nine of the 24 did not:

- **`‹ Help` × 6** (`contact-support`, `-error`, `report-issue`, `-empty`, `-loading`, `resolution`)
  returns to `support.html`, whose title is **"Help & support"**.
- **`‹ Order` × 3** (`order-setup`, `-empty`, `-error`) returns to `listings.html`, which carries
  **no screen title at all** — its bar holds the mark alone. ("Kyiv, UA ▾" stood beside it until
  2026-08-16, when the city moved into the filter's place pick.) "Order" is the tab's label.

The remaining five match exactly. Width is not the obstacle: `‹ Help & support` measures **124.18**,
and with the title and the language switcher that is **280.46 of 341.4** — **60.94px** free.
`WCAG 2.4.4 Link Purpose` passes either way, so this is a HIG and voice question, not an
accessibility one.

**Resolved 2026-08-15 (designer, Variant A) — see `microcopy.md` D8.** The two findings had one cause:
the rule named a *source* for the string ("the title") that some screens do not have. The rule now
resolves the name in three steps — nav-bar title, else **tab label** (a tab root shows a brand mark
instead of a title, so the tab label *is* its name), else bare `‹ Back`. Under it:

- **`‹ Order` × 3 was already right** and is now covered rather than excepted: `listings` is the Order
  tab root, and `Order` is its name in `sitemap.md` §7.3 and `CLAUDE.md` § IA.
- **`‹ Help` × 6 was right and the *title* was wrong.** The screen had **two** names — `Help` in the
  tab bar, the global nav and all six back buttons, `Help & support` in its own bar. The bar was the
  single outlier, so `support.html`'s title became **`Help`**. Widening the six back labels to
  `‹ Help & support` (the option this entry had measured room for) was rejected: it would have moved
  six strings to match one, and left the tab bar disagreeing with the title on the same screen.

Re-audited after the change: **44 back controls, 43 name their destination exactly, 1 is the documented
`‹ Back` fallback** (`operator-fee-terms` → the title-less onboarding slider), 0 failures.
`listings-filters`' `×` is a modal close and stays out of the rule.

### Superseded by rev 93 — the back control lost its label entirely

Revs 91 and 92 both answered *which* name the back control carries. The designer's reading, 2026-08-16,
is that it should carry **none**: *"має бути іконка і назва"*. A labelled back button puts a second
screen name in the bar, and measured on the build the two are the same colour (`#1A1A1A`) at the same
weight (600), 2px apart in size — the only one of the four rank separators in use. So they read as two
titles rather than a control and the name of this screen. `microcopy.md` **D9** carries the decision;
the audit table below is kept because it is the record of how the labels stood when they were removed.

All **43** labelled controls are now `<a>` with the chevron icon and no text (the 44th is
`listings-filters`' modal close, untouched). The destination is not deleted — it moves to
`aria-label="Back to {destination}"`, which `WCAG 4.1.2 Name, Role, Value` requires on an icon-only
control and which, being invisible, cannot engage `WCAG 2.5.3 Label in Name`. Measured after:
**44 of 44 at exactly 44 × 44**, every one carrying an accessible name, **0 with visible text**.
Navigation re-verified on both paths — `href` fallback **44/44**, `history.back()` **44/44**.

**This closes the `listings-filters` × finding above by accident, and properly.** That control was
**10.08 × 44** — 23% of the required width. It shares the `.dr-back` class, and the rule is no longer
padding around a text label but a **44 × 44 box with a 22px icon centred**, so the close control now
measures **44 × 44** too. Its glyph is still the text `&times;` rather than an icon from the system;
that is the one piece left, and it is a question for the designer, not a defect to fix silently.

**A conforming departure, recorded not corrected.** `HIG · Navigation bars` permits the bare chevron
but **prefers** the labelled form, because the label is what tells a sighted user where back goes. The
project rule — one bar, one name — wins here, deliberately, the way `concept.md` §5's outline-only
selected tab already departs from the filled-symbol convention. Sighted users lose the destination
name; assistive-tech users keep it.

**And it re-opened one thing cheaply — taken in rev 94.** Centring the title was rejected under rev 92
because the back label collided with it on 4 of 19 pairs, two of them by ~1px and 0.19px. With the label
gone the chevron occupies 34px of the bar, so no pair can collide. The designer asked for it the same
day, and `HIG · Navigation bars` wanted it all along.

### rev 94 — the title is centred, and the language switch leaves the mobile bar

**Centred.** The title used to flow after the back label, drifting **−82.7px to +30.4px** off centre with
that label's length. Measured after: **68 titles, all 0.00px off centre, 0 collisions, 0 clipped** — and
re-run in the desktop preview, where the language switch is still in the bar: **68 checked, 0 problems.**

Done with `position:absolute; left:50%` rather than a three-column grid, because four bars carry a third
child (`job-checklist` ×2 the operator name, `listings-filters` its *Clear all*) and a grid would need
re-declaring per shape. `pointer-events:none` keeps a long title from swallowing a click meant for the
control under it; `max-width` + ellipsis keeps it off both edges. One page needed a fix to comply:
`payment-loading` carried an inline `padding-left:16px` on its title that fought the centring.

*A note on measuring this.* The first collision sweep reported 40-odd overlaps, all against
`.dr-topbar__spacer`. They were not real: the spacer is an empty `flex:1` filler, and taking the title
out of flow let it expand across the whole bar. The check excludes zero-content spacers.

**Language switch — desktop only.** Designer, 2026-08-16: *"мови з навігаційного бару забери, але в
адаптивному варіанті для десктопа мови залиш, бо я потім для десктопа навігацію зміню."* The mobile bar
now carries the back control and one name, nothing else. It is keyed off `html[data-wf-viewport]`, which
the viewport switcher sets, rather than off the frame width — the switch is injected after the switcher
runs, so a width test or a JS toggle would depend on init order. Verified in all three previews:
**mobile hidden, tablet hidden, desktop visible at 72px**, the title at 0.00px off centre in each, and
the choice surviving a reload.

This is prototype chrome, not product UI, so nothing in `voice.md` or `microcopy.md` moves — the row
stays in `_conventions.md` §1.7, now recorded as desktop-scoped.

### Also fixed in rev 91: ten back controls did not navigate at all

`job-brief` ×2, `job-checklist` ×2, `result-upload` ×3 and `withdraw` ×3 shipped as
`<button class="back">` with no `href`. `_wf-shell.js` wires every `.back` to `history.back()` **only
when `history.length > 1`**, and unlike the other 34 these had no link to fall back on. Measured on the
pre-fix file: clicking `‹ Earnings` on a directly-opened `withdraw.html` left the prototype for
`about:blank` instead of reaching `wallet.html`. All ten are now `<a class="back" href>`.

Verified after the fix on **both** paths the control can take, because one test cannot cover them — a
harness context starts on `about:blank`, which counts as history and makes the shell intercept, so a
single click test silently measures only the `history.back()` path and reports success while the `href`
is never exercised:

- **`href` fallback** (deep-link, no history) — JavaScript disabled so the shell cannot intercept:
  **44 / 44** reached the screen their label names.
- **`history.back()`** — walked in from the destination first: **44 / 44** returned to it.

**Two size observations, both pre-existing and neither introduced here.** `listings-filters`' `×` close
measures **10.08 × 44** — the width finding this file already has open above, still needing its own
decision. And `order-review` / `-loading` show their back control at **137.83 × 65**: the label wraps to
two lines. That is the shell's **EN/UA switcher**, which is prototype chrome and not part of the screen —
removing it gives **138.89 × 44** on the same page. It affects only the two longest labels and no
product surface, so it is recorded, not fixed.

**Target size, same pass.** `.back` had `padding: 0`, so it rendered at two different heights depending
on its tag — `a.back` **21px**, `button.back` **40px** (a `<button>` does not inherit `body`'s
`line-height: 1.4`). Both fail `HIG · 44pt minimum target`. `.back` now carries the same
`padding: 11.5px 0; margin: -11.5px 0` rev 87 gave `.dr-back`: all 44 measure **44.00**, label unmoved.
`text-decoration: none` was added with it — `_wireframe.css` has no bare-`a` reset, so the ten operator
back links had been rendering underlined while the `<button>` ones were not.

---

## 2026-08-16 — the aerial record's location and its photograph do not describe the same place

### Open, not fixed: `order-details-aerial` says *Trukhaniv Island* over a whitewater gorge

**What is built.** The 14 Jun *Aerial photo & video* order carries `Location · Trukhaniv Island` in its
summary and `scenes/aerial-rafting-run.jpg` in its deliverable well — a raft of paddlers in helmets and
yellow life vests dropping through white water between wet rock walls.

**Why the two disagree.** Trukhaniv is a flat sand island in the Dnipro inside Kyiv. It has no rapids,
no gorge and no drop. The two strings came from different places and neither is wrong on its own: the
location is what the `order-history` card has said since the screen was built, and the photograph is
the frame the designer supplied on 2026-08-16 (Figma `YlGWlsWWjKSCxhONMzGG2F` node `96:14`) to close
`visuals/gaps.md` **B3 #17**, which had been open because the repo held no aerial deliverable at all.

**Why it matters here more than elsewhere.** `voice.md` **P2** is *show the proof, not the adjective*,
and this zone exists to answer `RJ-C4` — the client checking what came back. A deliverable that
contradicts the order it belongs to is worse than no deliverable: it is the one place in the product
where a picture is evidence rather than decoration (`concept.md` §6, *imagery is real, never
decoration*).

**What was done about it in the build.** Nothing was silently reconciled. The location string is kept
exactly as the designer wrote it, and the `alt` describes **the frame and only the frame** — *"Six
people in helmets and life vests riding a raft over a drop in white water, shot from above."* It does
not repeat *Trukhaniv Island*, because an alt that echoed the label would state as fact something the
image contradicts, which is the failure `WCAG 1.1.1` exists to prevent. So the mismatch is visible to a
sighted reader and to a screen-reader user alike, rather than hidden from one of them.

**The options, each with its consequence:**

1. **Change the location to the picture** — e.g. *Migiya, Southern Bug*, Ukraine's actual whitewater
   run. Two strings move (`order-history`'s card and this record); the order becomes coherent and the
   photograph becomes evidence. `microcopy.md` rows for both files would be updated with it.
2. **Change the picture to the location** — a flat-water or riverside aerial over Trukhaniv. Reopens
   `visuals/gaps.md` **B3 #17**, which this frame just closed, and needs a new asset.
3. **Keep both as built** — the record reads as it does now. Costs `P2` on the one screen whose whole
   job is proof, and costs it silently on every later reading of the frames.

**Option 3, on her word — asked before the copy was written, not after.** The three options above were
put to the designer on 2026-08-16 with the frame and the label shown side by side, and she chose to keep
*Trukhaniv Island*. So this is a decision, not an oversight, and it is not re-proposed later as a new
idea. What it costs is stated once, here: `voice.md` **P2** on the one screen whose whole job is proof.
What it does not cost is `WCAG 1.1.1` — the alt was written to the frame precisely so that her call
lands on the copy and not on the accessible name.


---

## 2026-08-16 — one order-setup screen was serving three services

### Fixed: six links sent a shoot or an inspection into the delivery form

**Found by the designer**, pressing *Book again* on `order-details-aerial`: *«коли я натискаю кнопку
book again то має відкритись не delivery package wireframe but wireframe where I can order aerial photo
& video. Бачу це пропустили в wireframes»*. She was right, and it was wider than the one button.

**What was built.** `order-setup.html` existed once and was painted as a single service — nav title
*Package delivery*, fields *Pickup address · Drop-off address · Parcel size (up to 2 / 5 / 10 kg)*. It
was never a service-neutral form. Six links pointed non-delivery services at it:

| File | Line | Control |
|---|---|---|
| `listings.html` | 286, 297 | the *Aerial photo & video* and *Inspection* cards |
| `listings-filtered.html` | 273, 284 | the same two cards |
| `order-details-aerial.html` | 152 | **Book again** — the one she pressed |
| `order-details-inspection.html` | 96 | **Book again** |

**What the guideline prescribes.** `WCAG 2.4.4 Link Purpose (In Context)`, **level A**: the purpose of
each link must be determinable from the link text together with its context. *Book again* inside a
record of an aerial shoot reads as "book the shoot again". `WCAG 3.2.3 Consistent Navigation`, level AA,
is the second reading: three cards with three names resolving to one service's form.

**Whether it passes.** It did not — six failures at level A, the lowest bar the project holds. Not a
matter of taste and not deferrable to the concept layer.

**The second thing the same gap had hidden.** `time-slot.html` and `time-slot-empty.html` were built
and reachable from **no screen in the order flow**. `sitemap.md` **CE-2** gives every service a *flow
mode — auto-dispatch vs calendar-first*; the two calendar-first services are exactly the two that had
no setup screen, so the slot list had no entrance. Its own back button read *Back to Package delivery*
— naming the one service that never reaches it.

**Fixed, on the designer's call:** one setup file per service, the shape she had set for the order
record two entries earlier. `order-setup-aerial.html` (Location · Shoot · Duration · **What you get**)
and `order-setup-inspection.html` (Location · **Structure**), both handing off to `time-slot`; delivery
keeps `order-setup.html` and its straight run to review. All six links rewired, `time-slot`'s back
button corrected to the aerial setup. Recorded in `_screens.md` §5, `_conventions.md` §12,
`microcopy.md`, and `voice.md` **O5** — which had to be amended, because *What you get* means the
aerial deliverable is now chosen by the client and so has three names, not one.

### Open, not fixed: `time-slot`'s back button can only name one of the two services that reach it

Aerial and inspection both arrive at the slot list, and a static file carries one destination. The back
button now names the aerial setup, which is the path the prototype walks. In the product this title is
whichever setup the client actually came from — a runtime fact the wireframe cannot hold. Recorded
rather than smoothed over, in the same spirit as the entry above: `HIG · Navigation Bars` is satisfied
for one of the two entrances and stated as unsatisfiable for the other.

---

## Finding #2 fully closed — 2026-08-16 (`tracking` · `tracking-empty` · `tracking-error`)

Finding **#2** above repointed six recovery links away from `account.html`, and for the three
**Contact operator** buttons it moved them to `support.html` — the Help hub. That fixed the broken
recovery and left the real defect standing: **a control naming the *operator* loaded a screen about
*support*.** A client whose parcel is 6 minutes away and who needs to say "the gate code is 4471" was
handed a triage list.

The designer named it on the built screen the same day: *«by clicking on "Contact operator" open
drawer with opportunity to select call, chat, support and add wireframes with a chat with operator»*.

**What was fixed.** The button became a `<button aria-haspopup="dialog">` raising a drawer that asks
*how* — **Call operator** (`tel:`, a masked DRON line, answered by the OS dialer) · **Send message**
(`chat.html`, new) · **Contact support** (`support.html`, where it used to send everyone). Applied to
**all three** tracking files that carry the button, on `concept.md` rev 26's standing rule for this
exact control — *the same control at the same weight in every state*; `tracking-loading` has no
operator card and is untouched.

**Recorded, not filed as a defect.** `sitemap.md §4` deletes *Client ↔ operator chat*, and that
verdict is not reversed: it deletes the **pre-booking negotiation** thread (the Rover / Kabanchik
anti-pattern), while what was built opens only on a **paid job with an operator already dispatched**,
where the price is locked and the operator was not chosen. The annotation is in `sitemap.md §4` and
`§8`, the screen in `_screens.md §9b`.

**Still open, and the designer's to settle:** she said *chat*; the visible row says **Send message**,
which is `voice.md` **A9**'s own words and the Button rule's *"never a bare noun"*. The file is
`chat.html` because *chat* is the object's name in the sitemap — a file name is not a product string.
One string on three files if she wants her word on the screen.

**Closed the same day — the row is `Chat with the operator`.** The open question above was put to the
designer with the standards first (`voice.md`'s Button rule, **A9**) and all three shapes measured;
she chose her own word. It costs nothing: *chat* there is a **verb taking its object**, the grammar of
`Book again` and `Add photo`, not the bare noun the Button rule bars — which is why *Chat* alone was
never offered. Fixed as `voice.md` **A12**, so the destination has one name on every surface, and
**A9** keeps the composer's `Send message`: that button commits one message, the row opens the
conversation. The label does not wrap — 22 characters in a 309.4 column — and no measurement on the
sheet moved. Recorded in `concept.md` rev 142.

---

## 2026-08-16 — the order review priced every service like a delivery

### Fixed: summary, breakdown, back control and CTA were all delivery-shaped

**Found by the designer**, immediately after the setup screens split three ways: *«order-review для
них буде різним в частині summary яке має відображати відмінності в частині деталей що вже
змінені»*. She named the summary; the screen was wrong in four places.

**What was built.** One `order-review.html`, and every part of it assumed a parcel:

| Part | As built | Why it fails on a shoot or an inspection |
|---|---|---|
| Summary | Service · **Pickup** · **Drop-off** · **Parcel** · When | neither service has a pickup, a drop-off or a parcel |
| Price | Base fare · **Distance · 7.4 km** · Service fee | a shoot is paid for by the hour it occupies, not the kilometres to it |
| Back | *Back to Package delivery* → `order-setup.html` | the calendar-first path is setup → **time-slot** → review, so the previous screen is *Pick a time* (`HIG · Navigation Bars`) |
| CTA + drawer | **Pay ₴180**, twice | the aerial record was paid ₴800, the inspection ₴650 |

**What the guideline prescribes.** `voice.md` **P3** and `jtbd.md` **RJ-C3** — the full cost upfront,
locked, no "plus fees". The practical test is that the rows reconcile: delivery's do, 90 + 70 + 20 =
180. `HIG · Navigation Bars` covers the back control. `WCAG 1.3.1` is unaffected — the key/value
pairing was never the problem.

**Fixed:** `order-review-aerial.html` and `order-review-inspection.html`, on the same
one-file-per-service shape as the setup screens and the order records. Both reconcile exactly —
500 + 280 + 20 = 800 and 480 + 150 + 20 = 650 — and neither total is invented: each is what the
matching record was paid, and `time-slot`'s action bar had been showing `₴800` since it was built.
**The deliverable takes its own price line**, the designer's call over a delivery-shaped *base fare +
variable + fee*: she had just made *What you get* a client choice, and `voice.md` **P3** says a choice
that moves the price shows its price before the tap.

**A second thing the same gap had hidden.** `time-slot`'s four slot cards and its *Confirm slot*
button all pointed at `order-review.html` — the delivery build — so the one screen that only
calendar-first services can reach handed every one of them a parcel summary. All five exits rewired.

### Open, not fixed: the payment chain below review is still the delivery build

Every review file's drawer hands off into `payment` (`₴180`, twice), `payment-error`,
`payment-loading`, then `order-confirmed` (*En route to pickup*), `tracking`, `delivery` and `rate` —
all written for a parcel. `order-review-loading` is in the same position: its skeleton is the price,
but the resolved summary above it is delivery's. Splitting that chain is roughly fifteen files per
service and is the designer's call, not an assumption to make inside a review fix. Recorded here so
the gap is visible rather than discovered later.
