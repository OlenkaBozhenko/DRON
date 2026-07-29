---
target: wireframes/order-history.html (+ -empty, -loading)
total_score: 29
max_score: 36
na_heuristics: 9
p0_count: 0
p1_count: 2
timestamp: 2026-07-23T01-28-09Z
slug: wireframes-order-history-html
---
Method: dual-agent (A: design-review subagent · B: detector-evidence subagent)

Target: wireframes/order-history.html + order-history-empty.html + order-history-loading.html — first application of the Studio visual layer (concept/concept.html) onto the Order history screen. Error state intentionally absent per _screens.md C4.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Live pill + ETA + named loading line excellent; skeletons initially misrepresented card shape (fixed post-critique) |
| 2 | Match System / Real World | 4 | Bolt-model "Book again", taxi From→To dots, ₴ facts |
| 3 | User Control and Freedom | 2 | Delivered card offers only re-book/delete; no path to the past order's receipt/deliverable; delete behind kebab with no confirm signal |
| 4 | Consistency and Standards | 3 | Tap-card does different things by status (live → tracking, delivered → new booking); kebab means only "delete" |
| 5 | Error Prevention | 3 | Book again routes through setup (good); 28px kebab beside full-card link invited mis-taps (fixed: 44px hit area) |
| 6 | Recognition Rather Than Recall | 4 | Route, date, price all on-card; zero memory load |
| 7 | Flexibility and Efficiency | 4 | Book again is a textbook accelerator |
| 8 | Aesthetic and Minimalist Design | 3 | Language well applied; cards ~1.8/viewport; four identical grey CTAs risk banner-blindness |
| 9 | Error Recovery | n/a | Error state excluded from this screen's state matrix by design |
| 10 | Help and Documentation | 3 | Help tab one tap away; screen self-explanatory |
| **Total** | | **29/36** | **Good (80%)** |

## Design Specificity Verdict

**LLM assessment (A):** Authored, not interchangeable. Route dot grammar (hollow origin → filled destination, mono FROM/TO micro-labels), tabular ₴ prices, banded warm-grey card anatomy, single solid-green CTA, and the drone-with-green-package empty-state render are recognizably DRON/Studio. Two generic residues: stock media-object skeletons (fixed post-critique) and the Phosphor set never appearing inside card content (tab bar only).

**Deterministic scan (B):** CLI: 5 findings (2× single-font, 3× flat-type-hierarchy) — all judged false positives (CLI sees only the inline style block; body font comes from _wireframe.css; the fixed-rem Operate scale is deliberate). Browser detector: 48 findings across 3 pages, of which ~40 target wireframe scaffold chrome (#909090 sidebar/toolbar text, wf-seg state switcher, wf-frame clipping — all _wf-shell.js, not product UI). Genuine product findings: undersized-ui-text on .oh-addr-lbl 10.5px (6 instances — fixed to 11px) and text-occlusion ×4 (scan-time scroll artifact — content under sticky bars; verified fine at rest).

**Visual overlays:** injection succeeded on all three pages via live-server detect.js; findings read from console; live server stopped after.

## Overall Impression

The Studio language lands on this screen as intended: the live order reads as the hero, green stays scarce and meaningful, and the empty state is a genuine brand moment. The residual weaknesses are structural (flow/IA), not visual: the history list treats the past purely as a re-sell surface, and the screen's namesake action never wears the brand's action color in any shipped state.

## What's Working

1. Live-order card as de-facto hero: position #1, green-wash pulse pill, ETA fact, the screen's only solid-green button — hierarchy, trust job RJ-C2, and the one-accent rule land in one decision.
2. Route dot grammar: hollow origin → filled destination with connector, degrading to a single "Location" dot — an ownable pattern encoding DRON's logistics DNA at 9px.
3. State discipline for AT: p[role=status] names what loads, skeletons aria-hidden, card links carry full-sentence labels, reduced-motion fallbacks everywhere.

## Priority Issues

1. **[P1] Kebab touch target 28×28 inside a fully-clickable card.** Only destructive entry = smallest target. → FIXED: ::after expands hit area to 44×44 (CSS only).
2. **[P1] Focus ring failed non-text contrast.** #9BCF4A outline = 1.69:1 on page / 1.52:1 on card (needs 3:1, WCAG 1.4.11). → FIXED: all :focus-visible/:focus-within outlines switched to green-ink #3F5B18 (7.09:1 / 6.37:1) in all three files. NOTE: concept.html itself uses the raw-green focus ring — same defect upstream; flag to concept.
3. **[P2] Skeletons didn't rehearse the real card** (media-object shape vs banded anatomy → arrival reflow + fake-out on empty first run). → FIXED: CSS-only rebuild as band slab / date line / route lines / button slab, pulsing, no markup change.
4. **[P2] "Book again" never visually primary; reads semi-disabled** (1.25:1 surface delta, no affordance). → PARTIALLY FIXED: btn-secondary now carries --sh-sm so it reads pressable. The state rule (promote most-recent "Book again" to btn-primary when no live order exists) is recorded as a design-system rule — that state has no shipped page to change.
5. **[P3] Cards texturally identical** — a 20px Phosphor service glyph in the header band (package/camera/roof) would aid pre-attentive scanning and put the icon language inside the product surface. NOT APPLIED: adds markup; structure frozen at this step. Recommend at component-build step.
6. **[P3] Undersized micro-labels** (From/To/Location 10.5px, below the 11px functional floor; detector + persona Sam agree). → FIXED: 11px.

## Persona Red Flags

- **Casey (one-handed, distracted):** kebab-over-card-link mis-tap (fixed); four identical grey buttons invite booking the wrong order when skimming; "View details" comfortably in thumb zone (good).
- **Sam (SR/keyboard/contrast):** invisible green focus ring (fixed); 10.5px labels (fixed); no heading elements inside the frame (.oh-title is a span) — must become h2 at build step; "Delivered" pill 4.77:1 passes AA with no margin — do not drift the tint.
- **Jordan (first-timer):** tapping a delivered card opens a NEW booking flow where a Bolt-trained user expects an order receipt — invisible mode switch (flow-level; out of visual-layer scope); loading→empty skeleton fake-out mitigated by anatomy-true skeletons.

## Minor Observations

- Shell EN/UA switcher renders inside the phone frame in raw #111 — scaffold pollution of every visual read; worth skinning to Studio tones (in _wf-shell.js, out of these files' scope).
- "Today · 9 Jul 2026" vs visual-layer date 23 Jul — sample-data realism nit.
- Price (17/700) outweighs title (16/600) — kept deliberately: P3 voice, price as fact.
- Live green-wash pill on the media band is nearly luminance-identical (1.11:1 surface delta); text+dot carry it — acceptable, watch it.
- Empty-state block was top-aligned over a ~250px void → FIXED: +56px optical shift.
- Route connector 2px #D9D5CE disappears at low display brightness — acceptable, decorative.

## Questions to Consider

1. Where does a client revisit a finished order's deliverable? For an inspection client the report IS the product; the Activity tab currently treats the past purely as a re-sell surface.
2. If RJ-C5 is the screen's reason to exist, should the no-live-order state promote "Book again" to the one green CTA? (Recorded as proposed rule.)
3. Should a first-run user ever see skeletons — or should the app know it has no orders before pretending to fetch three?
