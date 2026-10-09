# Design system — critique log

Findings raised while building the design system, each with the evidence behind it.
Sources: `tokens/tokens-audit.md` (measured on the built frames), `ui/kit.css`, `DESIGN.md`.

**The wireframes are the design.** Nothing here proposes a change to `wireframes/`. Where a
finding names a colour, it names what is built and asks a question about the *token*, not
about the frame.

---

## §06 · Colours that stand in exactly one place

`tokens.css` gives a semantic token only to a colour whose role repeats. Four colours were
held back at the primitive tier because each stands, in the whole product, in **one file and
one class** — or in none at all. That is not a verdict that they are wrong. It is a statement
that **there is not yet enough evidence to say what role they name**, and each may turn out to
be a real unique role that simply has not repeated.

Each is listed with the measurement, the question it raises, and what would settle it.

### 06.1 · `--amber-500` `#E4A11B` — the rating's yellow

**What is built.** One file, one class: `rate.html` × `.dr-star[aria-pressed="true"]`.
`kit.css` declares it on two further selectors — `.dr-profile__rating` and `.dr-stars__fill` —
and **neither class appears in any page's markup**, so neither is drawn.
`DESIGN.md` records the second spend, the operator's rating pill, as deleted at rev 204 on the
designer's *«delete rating badge»*.

**What the guideline says.** `WCAG 1.4.1 Use of Colour` — colour may not be the only means of
conveying information. `WCAG 1.4.11 Non-text Contrast` — a graphical object that carries
meaning needs 3:1 against what is adjacent.

**Whether it passes, and by how much.** `#E4A11B` is **2.05:1** on `--page` and **1.84:1** on
`--card`. As a lone carrier it fails 1.4.11 by a wide margin — 0.68× and 0.61× of the 3:1 floor.
It does not fail in the build, because the star is `fill + aria-pressed` and the rating pill was
the number written on it: the state is never the colour alone. `--ink` on it is **7.80:1**,
1.73× the 4.5 an 11px line needs.

**The question.** Is yellow *the rating's colour*, or is it *the colour of one filled star*?
Those are different roles and the build cannot yet tell them apart. A single star is a
component decision. A rating colour would be a role.

**What would settle it.** A second, unrelated place where the same yellow means "rating" —
a score on a card, a rating row in a list, a histogram. If that arrives, `--color-rating` is
the name the audit's evidence would support. If it never arrives, the yellow belongs to
`.dr-star` and should stay there.

**Options, each with its consequence.**
1. **Leave it primitive** (as built). `.dr-star` reads `var(--amber-500)` directly. Costs
   nothing; the day a second spend appears, one line promotes it.
2. **Mint `--color-rating` now.** Names the intent before the evidence. If the second spend
   never comes, the design system carries a role with one member — the same shape as
   `--trust-*` below, which is how that pair ended up retired.
3. **Fold it into the warn family.** It already shares the family's shape
   (`--amber-100` / `--amber-500` / `--amber-800`). But warn means *ETA slipping* in this
   product and a rating is not trouble, so this would name two unrelated things alike.

---

### 06.2 · `--blue-700` `#2A5C7D` and `--blue-100` `#D8E6F2` — the retired trust pair

**What is built.** Nothing. Both are declared in `kit.css` on `.dr-chip--trust`, and that class
is in **zero** pages' markup. `DESIGN.md` records why: **retired 2026-08-18 (rev 157)**, when
the designer said *«оператор сірий лайсенс і insurance зелені»* and then, asked whether the
client screens should follow, said everywhere the same. `.dr-chip--trust` became
`.dr-chip--claim` on 14 files — **17 by the audit's count today** — and the product's rule reads
in one line: *green means DRON confirmed this document, grey means a plain supporting fact.*

**What the guideline says.** `WCAG 1.4.3` for the ink on its wash; `WCAG 1.4.1` for whether the
badge is carried by hue alone.

**Whether it passes, and by how much.** The blue ink is **5.65:1** on its wash — the family's own
rung, the exact figure `--warn-ink` stands at, and 1.26× the 4.5 floor. The green pair that
replaced it is **14.75:1**, 2.6× the blue. So the replacement did not cost contrast; it gained it.

**The question.** This is the one candidate role in the audit that **has a token and no
surface** — and, per the project brief, trust is the product's highest job (RJ-C1, the verified
badge on the list card, named the highest single drop-off in the CJM). The role is real. The
colour is not what carries it.

**Where the role actually lives today** — and this is the finding worth keeping: verified is
carried by `--green-100` under `--text-primary`, on `.dr-chip--claim`, 17 pages. `tokens.css`
names that ground `--bg-accent-tint` (see §06c). So the role is carried — it simply is not
carried by the blue, and it is not carried by a colour of its own at all: the word *Insured* is
what says which, exactly as the kit's chip block prescribes.

**Options.**
1. **Leave both primitive** (as built). The pair stays declared so a rejected idea is not
   re-proposed as a new one — which is the reason `kit.css` keeps them and `DESIGN.md` keeps
   the reasoning.
2. **Delete them.** Honest about the build, but loses the record of a decision already made
   and reversed. `--sh-card` and `--sh-onphoto` are kept on exactly this principle.
3. **Bring blue back for a distinction green cannot make.** A confirmed credential and a chosen
   filter share one ground today (§06c). A cool hue would separate them by colour instead of by
   word. Note what that would cost: the frames' rule is that a chip is never reduced to a colour,
   and blue against grey is **1.03:1**, which is why the blue chip had to keep a checkmark. This
   is a design decision, not a token one, and it is the designer's.

---

### 06.3 · `--green-300` `#B7DA7C` — the fifth green with no surface

**What is built.** Nothing at all: **zero uses** in `kit.css`, and so zero pages. Its one site,
`.dr-balance--banner` on `ratings`, went back to solid `--green-500` on **2026-09-03** on the
designer's word (*«make background colour as on this page bunner [wallet]»*).

**What is worth keeping about it.** The value is **derived, not picked**: `--green-500` 70% +
`--cream-50` 30% in sRGB. It is arithmetic between two members of the palette, which is exactly
the kind of thing nobody should have to re-derive by eye. `--on-action` on it is **11.05:1**.

**The one thing it may never do.** It is **1.17:1 against `--green-500` itself**. Two greens that
close cannot sit side by side and read as two surfaces — it is a *replacement* fill on one card,
never a second tone beside the first.

**Options.** Leave it primitive and unspent (as built, and as `DESIGN.md` states it); or delete
it and accept that one word from the designer would mean re-deriving the mix.

---

## §06b · Six colours spent on a single class across several files

Not caught by the one-place rule — each appears in more than one file — but none of them has a
second class either. A role that lives in one class is still a component decision. Listed so a
second spend is noticed when it arrives.

| Primitive | Value | Its one class | Files | Given a semantic token? |
|---|---|---|---|---|
| `--cream-100` | `#F2F0EC` | `.dr-inset` | 3 | Yes — `--bg-inset`. The audit's §5 names a four-rung surface ramp and this is a rung of it. |
| `--green-700` | `#4F6B22` | `.dr-btn--text` | 2 | **No.** The only place green may be a word. `DESIGN.md` still records its home as the `Clear all` button, which rev 51 replaced — the doc is behind the build here, and the audit is the measured source. |
| `--amber-800` | `#7A5200` | `.dr-mark--warn` | 7 | Yes — `--color-warning`. The wash/ink family shape is named in the audit §5. |
| `--amber-100` | `#F6E7C4` | `.dr-mark--warn` | 7 | Yes — `--bg-warning`. |
| `--rust-500` | `#C4462A` | `.dr-btn--danger-solid` | 3 | **No.** It is a *fill* and its only site is the end-call button. `--color-danger` names the ink, which is the hue that is a word, on three classes and nine pages. |
| `--rust-100` | `#F2D8CF` | `.dr-mark--danger` | 9 | Yes — `--bg-danger`. |

**The pattern this exposes.** The palette already has a **semantic family shape** — fill · ink ·
wash — and it repeats exactly for warn, danger and the retired trust pair. Green does **not**
follow it: `--green-700` (the ink) has one spend, and `--green-500` is the fill everywhere.
Whether green should be made to follow the family shape, or whether the accent is rightly
exempt from it, is a question for the design system and not for the token file.

---

## §06c · Two roles, one primitive — **resolved, by reading the frames**

`tokens.css` was first drafted with **two** semantic tokens, `--bg-selected` and
`--color-verified`, both pointing at `--green-100`, on the reading that *chosen* and *confirmed*
are two roles that happen to share a value. That was left open rather than decided.

**The frames had already decided it**, and they say so four times, in four separate rules, in
their own words. The wireframes are the design, so this is not an opinion to weigh against
others — it is the answer.

| Rule in `ui/kit.css` | What it says |
|---|---|
| `.dr-tab[aria-current]` | *"HIG tints the selected label with the accent. Raw green as a label is 1.69:1, so the accent moves into the **FILL** and **the ink darkens with it** — two signals where the convention gives one."* |
| `.dr-chip--claim` | *"A chip is **never reduced to a colour** — each keeps its words… Same word, same geometry, two jobs, and **the word is what carries it**."* |
| `.dr-mark--milestone` | *"Delivered and waiting **share ONE well**… **The difference is the glyph and the title**."* |
| `.dr-grouptab__count` | *"**the hue carries it, not the luminance**."* |

And where three of these selectors — `.dr-chip--claim`, `.dr-avail-badge[data-state="available"]`
and `.dr-chip--unread` — sit in a **single declaration**, the kit states the governing rule out
loud: *"the kit's own rule is that **a value is stated once** — so the badge is named here beside
the claim rung rather than repeating `--green-wash` / `--ink` in its own block further down.
**Same pair, two roles**: a CRITERION being claimed, and a state that is LIVE right now."*

### The resolution

**One token: `--bg-accent-tint`.** The tint is a **ground**. It never carries the meaning. The
word, the glyph or the title carries it, and the tint only agrees.

Eight selectors, six declarations, 48 pages, and every one of them is a case of the same thing:

| Selector | What the tint agrees with | What actually carries the meaning |
|---|---|---|
| `.dr-tab[aria-current="page"]` | this tab is the one you are on | the ink darkens to `--text-primary` — a second signal |
| `.dr-chip--claim` | this criterion is claimed | the word (*Insured*, *Verified*) |
| `.dr-avail-badge[data-state="available"]` | this operator is live now | the word *Available* |
| `.dr-chip--unread` | this alert is unread | the word *Unread* |
| `.dr-fchip` | this filter is applied | the filter's own text, plus its ✕ |
| `.dr-grouptab__count` | this tab has a count | the digit — it is the tab's accessible name |
| `.dr-mark--milestone` | this step is reached | the glyph and the title |
| `.dr-balance__glyph` | — | a plate behind an icon; no state at all |

### Why two names would have been wrong

1. **It would claim a distinction the build does not make.** Naming *selected* and *verified*
   separately asserts that they can be told apart by colour. They cannot: they are the same
   `#E7F0D2` under the same `--ink`, and in every case something else does the telling.
2. **It is the same defect the audit is about.** `tokens-audit.md` §A5 counts **36 values
   carrying more than one name** in `kit.css`, and this file exists to collapse exactly that.
   Minting a second name for `--green-100` would re-open it in the semantic tier.
3. **`WCAG 1.4.1` is satisfied by the word, not by the tint** — which is the frames' whole
   argument. A token named for a state would suggest the colour is the state.

### What the tint's ink is, and why it matters

`--text-primary` at **14.75:1**, never `--on-action`. Charcoal here is the plain primary ink,
which is what makes the tab's second signal a **darkening** rather than a swap — `--slate`
5.51:1 → `--ink` 14.75:1 as the tab becomes current.

### What would make it two

A place where the tint means *confirmed* and nothing else says so — no word, no glyph, no
checkmark. That has not happened, and the chip block forbids it in advance. If the designer
ever wants confirmed separated from chosen **by colour**, §06.2 option 3 is that decision, and
it brings the blue back rather than splitting the green.

---

## §06d · The same shape elsewhere — and why none of it collapses

Four more groups of semantic tokens share a primitive. **None is the tint's case**, and the
test that separates them is the one the frames gave: *do the two names describe the same job on
the same surface?* For the tint they did. For these they do not.

| Primitive | Names on it | Why they stay apart |
|---|---|---|
| `--charcoal-900` | `--text-primary` · `--on-action` · `--bg-night` | Different surfaces and different jobs — ink on light, the only colour allowed on a green fill, and a ground. **`kit.css` itself already declares this value three times**, as `--ink`, `--on-green` and `--night`, for exactly this reason: *"--night IS --ink, declared again under the name of the role it plays here, which is the palette's own habit."* |
| `--cream-50` | `--bg-page` · `--text-on-night` | A ground on the light screen; an **ink** on the one dark screen. Inverted pair, same value. |
| `--cream-500` | `--bg-muted` · `--text-on-night-muted` · `--bg-disabled` | A ground, an ink on dark (because `--slate` is barred there at **2.42:1**), and the disabled ground. |
| `--cream-700` | `--text-muted` · `--text-disabled` | Disabled has no colour of its own; it borrows the secondary ink at **4.77:1**. |

The last one is worth its own note. `concept.md` §4 **already names that pair** —
`--disabled-bg` / `--disabled-ink` — and **neither name exists in `kit.css`**, 0 occurrences,
which the audit records as a gap. So the second name there is not a claim about colour; it is a
name the design system was asked for and never got. `tokens.css` gives it at last.

---

## §06e · One naming decision that departs from the brief, and why

The brief asked for primitive families named `--space-4`, `--radius-md`, `--size-control`.
`tokens.css` uses **one length ramp named by value** — `--len-4`, `--len-16`, `--len-44` — instead
of three families.

**The reason is measured, not stylistic.** The three scales share their numbers:

- **2px** is a radius (`--r-hairline`), a gap (`--sp-2`) **and five box sizes**.
- **12px** is a type step, a radius, a gap, a glyph size and a skeleton bar.
- **16px** is a radius, the screen gutter, a bar height, a glyph and a background offset.
- **44px** is the HIG target, the status bar, the icon action and a media well.

Splitting them back into `--space-*` / `--radius-*` / `--size-*` would give the same number a
second and a third name — which is the drift (`tokens-audit.md` §A5, 36 values under more than
one name) that this file exists to close. `--size-control` would also have to pick one of 44px's
four jobs and hide the other three.

**This is the designer's call to reverse.** If the families are wanted back, the cost is stated
plainly above, and the change is mechanical.

## §07 · The port into `components/` — what the wireframes settled

`components/` holds **29 files plus `index.css`**, ported out of `ui/kit.css`. `ui/kit.css` is
not deleted: it stays the archive of *why* every value is what it is, and the component files
carry a pointer to it rather than a copy of the reasoning, so the two cannot drift from each
other.

### 07.1 · The wireframes decided what exists, and it was not what the showcase shows

`ui/kit.html` was the named reference for "the same classes and structure". Measured, it is not
the product:

| | families | classes |
|---|---|---|
| **`wireframes/` markup** | **86** | **319** |
| `ui/kit.html` | 62 | 203 |
| declared in `ui/kit.css` | 94 | 377 |

The showcase is missing **30 families and 144 classes** the product draws — `dr-call`, `dr-cal`,
`dr-mapview`, `dr-route`, `dr-price`, `dr-profile`, `dr-range`, `dr-offer`, `dr-finder`, `dr-fab`,
`dr-fchip`, `dr-bell`, `dr-zone`, `dr-star`, `dr-slider` among them — and it shows **six** the
product does not. Built from the showcase, the component layer would have been two thirds of the
product plus four dead components.

**608 of kit.css's 705 component rules are ported.** The 97 that are not are the rules whose
selector needs one of the **41** classes that appear in no page's markup and are built by no
script (`tokens-audit.md` §3).

### 07.2 · The colour rule and the one-place rule collided, and the frames broke the tie

`components/` may read colour only through a semantic token. Five colours had none. **The
wireframes resolved three of them by not drawing them at all**: `.dr-chip--trust` (the blue pair)
and `.dr-stars` / `.dr-profile__rating` are in no page's markup, so they are not ported and the
question does not arise.

Three colours the wireframes **do** draw had to be named. §06 had held two of them back:

| Primitive | Where the wireframes draw it | Name given | Source of the name |
|---|---|---|---|
| `--amber-500` | `rate.html` × `.dr-star[aria-pressed]` | `--color-rating` | §06.1 named it in advance as the name the evidence would support |
| `--cream-500` | `.dr-star` at rest | `--color-rating-empty` | kit.css: *"a filled star is yellow… an unfilled star is grey with no outline"* |
| `--rust-500` | `.dr-btn--danger-solid`, 3 call pages | `--bg-danger-solid` | the audit: *"a fill, and its only site is the end-call button"* |
| `--green-700` | `.dr-btn--text`, 2 pages | `--text-action` | kit.css: *"the green that may SPEAK"* |

**§06.1 is superseded for `--amber-500`, and the reasoning there is kept rather than deleted.**
It still stands in one file and one class; what changed is that a component may not write a
literal, so the colour had to be named or the star could not be drawn.

### 07.3 · Two defects this pass found in work already committed

1. **Five tokens in `tokens.css` were dead.** Five section headers opened `/*` and never closed
   it, so the first declaration in each section was swallowed by the comment: `--num-0-5`,
   `--track-n0-02`, `--time-0-12`, `--font-ui` and `--ratio-stack` were not being declared at all.
   Found because the component mapper could not resolve them. Fixed; re-checked at **zero** dead
   declarations.
2. **The `:root` move had left the class literals behind.** The brief said every value in
   `kit.css` moves to PRIMITIVE, and the first pass moved only the `:root` tokens — the **20
   literals `tokens-audit.md` §C1 lists** stayed inside classes. Six of them had no primitive at
   all (`23px`, `40px`, `46px`, `.04em`, `#000`, `#FFF`); they are tokens now, each commented with
   the class it came from. **This closes §C1** instead of carrying it into the component layer.

`--black` and `--white` are the palette's one licensed exception — Apple Pay and Google Pay ship
their own black button and neither brand permits it recoloured. kit.css line 55 reads *"No
#FFFFFF and no #000000 anywhere"*; naming the exception is how it stops being invisible.

### 07.4 · The cascade was measured, not assumed

Splitting one stylesheet into 29 can change what wins at equal specificity. Two things were done
about it:

- **Import order is kit.css's order.** Each file holds a contiguous run of kit.css's rules, and
  the files are imported by the position of their first rule.
- **Every `@media` block was pulled out**, because scattering them by component put five
  `prefers-reduced-motion` overrides *before* the animations they silence — animations would have
  played with reduced motion on. `responsive.css` and `reduced-motion.css` are imported last, in
  that order.

Checked afterwards for pairs where source order decides — same subject, same ancestors, equal
specificity, a shared property, and the order reversed: **one**, and it is a false positive,
because `:has()` raises specificity and specificity decides it.

### 07.5 · The result, measured in a browser

`ui/kit.html` rendered against `kit.css`, and again against `tokens.css` + `components/index.css`.
Computed style read for 45 properties on every element in `<body>`, animations paused at time 0.

**2 549 elements. 2 414 compared. Zero real differences.**

The 135 excluded elements are the dropped components, their subtrees and their siblings. Six
differences survived the exclusion and all six trace to `.dr-field__clear`, a class the wireframes
never draw: it is 20px wide, and without it the one `.dr-rows` panel that contains it re-solves
its `max-content` column — 194px → 197.333px — which moves the two labels and two values in that
panel. The panels without it did not move. The seventh, `.dr-sk-arrow`'s
`matrix(1, 0, 0, 1, 0, 0)` against `none`, is the same transform written two ways.

**So: for every component the wireframes draw, the ported CSS computes identically.**

### 07.6 · What the showcase now shows, and the decision it needs

`ui/kit.html` links `tokens.css` and `components/index.css`, and its own chrome was moved onto the
new token names. Six specimens in it now render **unstyled**, because the product does not use
them: `.dr-chip--trust`, `.dr-stars`, `.dr-disclosure`, `.dr-segment`, `.dr-track`,
`.dr-field__clear`.

**Settled: option 3 — the six left the showcase.** The designer's rule, in her words: if the
wireframes do not have it, it does not belong on the page.

| Specimen | What was done |
|---|---|
| Disclosure | the whole row removed — every part of it was the dead component |
| Segmented control | the whole row removed, same reason |
| `.dr-field__clear` | the one `<span>` cut out; `.dr-field` and `.dr-search` are alive and stayed |
| `.dr-track` | its plate cut; the `.dr-rail` plate beside it is alive and stayed, and the caption and lede were rewritten so neither names the vertical track |
| `.dr-stars` | its plate cut. `.dr-listing__score` is alive, so the row survives as **Earned score**, retitled to the surviving thing, with notes rewritten to be true of it |
| `.dr-chip--trust` | the blue chip cut. `--claim` is alive, so the row survives as **The credential chip**, and the notes now state the product's one rule instead of a two-wash comparison |

One more was found by the same test and removed with them: **`.dr-ic--26`**, a modifier in no
wireframe. It was redundant anyway — every use sat inside `.dr-mark`, whose own
`.dr-mark .dr-ic` rule already sets the 26, so nothing changed size.

**The reasoning was not lost, it moved to where this project keeps records.** `ui/kit.css` still
holds every one of these rules with its full commentary; `DESIGN.md` documents the trust pair's
retirement; §06 and §07 here carry the measurements. The chip's note now ends with one line saying
the blue chip stood there until rev 157 and where to read why — so a rejected idea still cannot
come back as a new one.

**Checked after the cut:** 189 `.dr-*` classes remained in the showcase, **every one of them with
a rule** in `components/` or in the page's own chrome, and **not one absent from the wireframes**.
464 elements carried a `dr-` class and **none had a zero box**. HTML nesting validated with no
unclosed tag. (Those figures are the state at that cut; §08 re-counts after the sweep that
followed.)

---

## §08 — The two-way sweep against the frames

The cut above answered one question: *does the showcase draw something the product does not?* It
did not answer the other one: *does the product draw something the showcase does not?* This sweep
asks both, in both directions, off the filesystem.

**The rule it is run under, in the designer's words:** `wairframes не чіпати якщо знаходиш
розбіжності робиш так як у wairframes` — touch nothing in `wireframes/`; where a divergence is
found, the other file moves. Nothing in `wireframes/` was edited for any finding below.

### 08a — Base frames are the design; state frames have fallen behind

`CLAUDE.md` sets it: *base file = normal/success; `-empty` / `-error` / `-loading` are separate
files with the same structure.* A page self-labels its state in the shell header, and the label is
written four ways — `success (base)`, `base only`, `base`, or the state's own name. Matching only
`(base)` in parentheses mis-files `account`, `call`, `chat`, `switch-role` and `notifications` as
states, which is the error that made this sweep wrong on its first run.

Counted correctly: **72 base pages, 53 state pages, 3 option partials.**

**Where a base and its states disagree, the base wins and the states are stale.** `listings.html`
(edited 15 Sep) draws the finder; its four state files (edited 10 Sep) still draw the
`.dr-groups--tabs` underline row the finder replaced. The showcase was twice corrected off those
state files before the rule was applied. Nothing was changed in either — the state pages keep their
own history, and the showcase now reads the base.

### 08b — What the base frames draw and the showcase did not (closed)

**24 classes**, all now in `ui/kit.html`, added across four passes and measured in the browser:

| Group | Classes | Where it came from |
|---|---|---|
| The finder's route | `.dr-route__open` `__swap` `--single` | the frame builds each row as a `<button aria-haspopup="dialog">`; the showcase drew static `<span>`s |
| The drawers it opens | `.dr-sheet--steady` `--tall` `__scroll` `.dr-picker__lead` `__sub` | `listings`, `listings-filters` |
| The price shelf | `.dr-price` `__lbl` `__val` | `time-slot`, `time-slot-inspection` |
| Cards | `.dr-card__link` `.dr-card__row` | `order-history`, `wallet` |
| The card field | `.dr-field__marks` `.dr-paymark--fit` | `account-edit` |
| Zone rungs | `.dr-main--zones` `--center` `.dr-stack--zones` `.dr-center--tight` `.dr-rail--zone` `.dr-rows__row--stack` | `rate`, `support`, `role-select`, `switch-role`, `account-edit`, `tracking`, `inspection-report` |
| Leftovers | `.dr-slide--floor` `.dr-call__side--empty` `.dr-note--balance` | `onboarding-operator`, `call-support`, `account-photo` |

**Re-run after the last pass: 0 classes in the base frames are missing from the showcase.**

### 08c — What the showcase drew and no frame does (two findings)

The reverse run turns up **52** classes in the showcase that no *base* frame carries — **50**
after the two findings below were removed. Thirty of them are correct and stay: `.dr-sk-*`, `.dr-msg*`, `.dr-mark--danger` / `--warn`, `.dr-hint`,
`.dr-inset--sk`, `.dr-well--acquiring`, `.dr-avail*` — these are the empty / error / loading
components, and a state component by definition lives only on a state page. Twenty are built by a
script rather than written in markup, so a source grep cannot see them: **twelve** `.dr-kb*`
(`ui/kit.js`), three `.dr-cal__day` / `--today` / `.dr-cal__time`, `.dr-fchip` / `__x` and
`.dr-range__bar--in` (the four `listings` pages) — **nineteen**. The twentieth,
`.dr-backlink`, is the showcase's own chrome, not a product class at all.

That leaves two real ones.

**1. `.dr-chip--live` was invented in the showcase.** It stood on the *card that is one link*
specimen, reading *In progress*. It is in **no frame, no page script and no stylesheet** — not in
`components/`, not even in `ui/kit.css`. It had no rule, so it rendered as a bare `.dr-chip` and
looked plausible.

*Corrected as the frame builds it.* `order-history` marks a live order two ways and neither is a
chip: a `.dr-status .dr-status--live` dot on the `.dr-well` over the drone, with
`role="img" aria-label="In progress"`, and a plain `.dr-chip` in the fee row carrying a clock and
*ETA ~6 min*. The specimen now draws both.

**2. `.dr-fchip--all` is a rule with no surface.** `components/badge.css` declares
`.dr-fchip--all{ background: var(--bg-muted) }` — ported faithfully out of `ui/kit.css`, which
declares it too. Nothing applies it: not one of the 125 wireframes, not the partials, and not the
chip-building script, which sets `chip.className = 'dr-fchip'` and nothing else.

*Removed from the showcase, kept in the stylesheet.* Drawing it implies the product has an *All*
chip, and it does not. The rule stays in `badge.css` because the port is a port and this file is
where the finding belongs — it joins the 22 variables and 38 dead classes `tokens-audit.md`
already records as declared-with-no-surface. **If it is still unused when `components/` is
trimmed, it goes with them.**

The same pass corrected the chips' element: the script builds a `<button type="button">` with
`aria-label="Remove filter: {label}"`, and the showcase drew `<span>`s. A removable filter that is
not a button is not operable by keyboard — `WCAG 2.1.1` — and the name it is given puts the drawn
text inside the accessible name, which is what `WCAG 2.5.3` asks.

### 08d — After the sweep

**324** `.dr-*` classes in the showcase, **0** absent from the wireframes once script-built and
state-only classes are traced to the page or script that builds them, **0** with a zero box, **0**
console errors, and no element in a specimen wider than its frame. **66** specimen rows. Every
figure here was read off the rendered page, not the source.

---

## §09 — `tokens.css` and `components/` against the frames

§08 checked the showcase. This checks the layer under it: does `components/` still render what
`ui/kit.css` renders, and does `tokens.css` carry everything it needs? Four checks, run as
programs against the files rather than by reading:

1. every `dr-*` class a frame carries → is there a rule for it in `components/`
2. every selector in `kit.css` → is it in `components/`, and does it say the same thing
3. every `@media` block and every `@keyframes` in `kit.css` → did it survive the port
4. every `var()` a component reads → is it defined, and is it a *semantic* token where it is a
   colour

Check 2 is the one that needed care. A first run reported 24 selectors disagreeing; every one was
false, because the comparison was flattening `kit.css`'s `@media (max-width: 389px)` `:root` over
its base `:root` and then comparing a narrow-tier value against a base one. Corrected to compare
base with base and media with media, the real count was **one**. The numbers below are from the
corrected run.

### 09a — Seven keyframes were named and none defined *(fixed)*

`components/` carries nine `animation:` declarations naming **seven** keyframes — `dr-ping`,
`dr-pulse`, `dr-up`, `dr-spin`, `dr-sheet-rise`, `dr-scrim-in`, `dr-kb-rise` — and defined **none
of them**. An animation naming a keyframe that does not exist is not an error; it simply does not
run. Measured on the built page before the fix:

| | `wireframes/*` (reads `ui/kit.css`) | `ui/kit.html` (reads `components/`) |
|---|---|---|
| `@keyframes` defined | 7 | **0** |
| animations running | 1 (`dr-up`, on a loading page) | **0** |

So the skeleton did not pulse, the upload arrow did not travel, the drawer did not rise and the
live ring did not ping. `tokens-audit.md` §0 had already noticed the shape of this from the other
side — four variables that score 0 pages because they are *spent only inside `@keyframes`* — and
it says of them, correctly for the kit, «The animations run.» In the port they did not.

**Fixed by putting each keyframe in the one component file that spends it** — `dr-ping` in
`badge.css`, the two drawer loops in `sheet.css`, the three skeleton loops in `skeleton.css`,
`dr-kb-rise` in `keyboard.css` — which is the one-file-per-component rule the port already
follows. Two primitives the loops need had been dropped with them and are restored: `--pct-100`
(the sheet and the keyboard rise their own height) and `--deg-360` (one turn of the activity
ring). Colour still goes through the semantic tier: `dr-ping` mixes `--color-action`, not
`--green-500`.

**After: 7 keyframes defined, 11 animations running** — eight skeleton bars, the upload arrow and
two transitions — and `prefers-reduced-motion: reduce` still takes every one of them back to
zero, verified by emulating it.

### 09b — The narrow tier was dropped in the port *(fixed)*

`kit.css` spends its one breakpoint by re-binding four tokens on `:root`:

```
@media (max-width: 389px){ :root{ --sp-group: 16 · --sp-list: 22 · --sz-well-w/h: 68 } }
```

`components/responsive.css` carried the three *class* rules from that block and not the `:root`,
so below 389px a page on `components/` kept the wide tier: the card well stayed **96** where the
frame steps it to **68**, and the list gap stayed 28 against the frame's 22.

**`tokens.css` cannot answer this in kind, and that is not a gap in it.** Its lengths are named by
their value — `--len-20` *is* 20 — so re-binding one to 16 would make the name a lie, and geometry
takes no semantic token by the designer's rule for this layer. The re-binding therefore has to be
spent where it lands. The 17 selectors in `kit.css` whose declarations reach one of the four were
found by resolving the token chains rather than by memory, and each one now has its narrow-tier
line in `responsive.css`.

Verified by loading a frame and the showcase side by side at 380px — the frame renders from
`kit.css`, the showcase from `components/` — and reading the same properties off both:

| | frame | showcase |
|---|---|---|
| `.dr-well` | 68 × 68 | 68 × 68 |
| `.dr-list` gap | 22 | 22 |
| `.dr-card` gap / padding | 18 · 24 16 | 18 · 24 16 |
| `.dr-inset` padding | 14 | 14 |
| `.dr-order__top` gap | 12 | 12 |

One consequence is named in the file rather than left to be discovered: under the `:root` form a
**new** consumer of `--sp-group` would step at this width for free, and under this one it will
not. When a component starts spending one of the four, its narrow-tier line belongs there too.

### 09c — `.dr-finder__services`: `components/` was a revision behind *(fixed)*

The only declaration-level disagreement in the whole port, and it was live on four pages.
`components/card.css` held the row as it was *before* rev 273 — `flex-wrap: wrap`, no padding, no
scroll — while `kit.css` had turned it into a single scrolling line, on the designer's word:
«те що не влазить по ширині не переноситься на нижній рядок а має горизонтальний скрол».

The rule also has to be written at **0-2-0**, and `kit.css` says why in a comment that names this
trap for `.dr-zone`, `.dr-range` and `.dr-segment` as well: this component is a `<fieldset>`, and
the reset `.dr fieldset{ padding: 0 }` is 0-1-1, which out-specifies a bare class. The port had
written it bare. Restored as `.dr .dr-finder__services`, with the `::-webkit-scrollbar` rule that
goes with it, and measured: padding **6px 16px**, margin **−6px −16px**, `flex-wrap: nowrap`,
`overflow-x: auto`, the scroller **44** tall around **32** of chip ink, and the first chip landing
back on the form's own measure — the negative margin giving the gutter back exactly.

### 09d — What is missing and staying missing

**Two classes the frames carry have no rule anywhere, and correctly so.** `.dr-listing`
(9 pages) and `.dr-profile__name` (2 pages) have no rule in `components/` **and none in
`ui/kit.css` either**. They are namespaces — the look comes from a co-class — so there is nothing
to port. This is not a hole.

**Twenty-six classes `components/` declares are carried by no frame.** Twenty are built by a
script and so cannot appear in markup (`.dr-kb*`, `.dr-toast`, `.dr-lang`, `.dr-cal__day--today`,
`.dr-fchip`). The rest are genuinely without a surface, and they are the same list
`tokens-audit.md` keeps: `.dr-disclosure__item`, `.dr-listing--service`, `.dr-route__input`,
`.dr-sk-dir`, `.dr-groups--tabs` (the underline row the search replaced), `.dr-fchip--all` and
`.dr-cal__time`. **Nothing was deleted.** The port is a port; these stay until the designer says
to trim them, and this is the list to trim from.

**`.dr-cal__time` cost the showcase a specimen.** It is a wrapper `kit.css` declares from the
revision when date and time shared one sheet; they have been two drawers since, and the clock
rides a `.dr-pick` row inside the second one (`.dr-pick > .dr-cal__clock{ margin-left: auto }`).
The date-picker specimen had rebuilt them as one. Corrected to the two drawers the frame builds —
the third invented thing this sweep has found, after `.dr-chip--live` and the `--all` chip.

**One duplicate primitive.** `--num-1-99` and `--ratio-map` are both `1.99`, both PRIMITIVE, and
only `--ratio-map` is read. Two primitive names on one raw value is the drift `tokens.css` exists
to end. It is **marked in the file and left standing** rather than deleted without the designer's
word.

### 09e — The state after

| Check | Result |
|---|---|
| frame classes with no rule in `components/` | **2**, both namespace-only, neither in `kit.css` either |
| selectors where `components/` says something different | **0** |
| `@media` conditions carried | **2 of 2**, contents verified declaration by declaration |
| `@keyframes` carried | **7 of 7** |
| `var()` read by a component and not defined | **0** |
| raw hex or px written into a component class | **0** |
| primitive colour read straight by a component | **0** — every colour goes through a semantic role |
| `tokens.css` | 178 definitions · 170 distinct values · 1 marked duplicate |
| `components/` | 30 files · 2 316 declarations |

---

## §10 — The screen portraits: the classes were right, the composition was not

§08 asked *which classes* each side carries and came back clean in both directions. The designer,
reading the built showcase, asked a third question about two of those same specimens — «це
виглядає не так як на wairframes» on the centred main, «картинки на онбордингу виглядають не так
як на wairframes» on the slider — and it is a question neither sweep could have answered: **a
specimen that portrays one named screen can carry every one of that screen's classes and still
not be that screen.**

Same rule as §08, in her words: `wairframes не чіпати` — nothing in `wireframes/` was touched for
anything below. Only `ui/kit.html` moved.

### 10a — The onboarding slider drew a pairing no frame builds *(fixed)*

**What was built.** The specimen named `welcome`, `onboarding-client` and `onboarding-operator`,
and drew one frame **640px tall** holding **two** slides: `welcome`'s first two, with
`.dr-slide--floor` on the second.

**What the frames build:**

| | showcase | frames |
|---|---|---|
| frame | 375 × **640** | 375 × **812** (`.dr-screen` = `--len-375` / `--len-812`; `.wf-frame` is 375 × 812 too) |
| slides drawn | 2 | **3**, on each of the three screens |
| `--floor` | `welcome` w2, `people/wide/operator.png` | `onboarding-operator` **oo1**, `scenes/onboarding-dispatch.png` — the only one of the nine |
| w2's sub-line | ends at *…live position.* | *…live position. Someone accountable is on the way.* |

**The height is the finding, not a detail.** The art band is whatever the copy leaves: the slide
spends 48 on top padding and two text blocks, and `.dr-slide__art` is `flex: 1 1 auto` on the
rest. The 172px came off the band alone — and because the picture is `object-fit: contain` inside
it, the band's height is what decides how large the drawing is drawn. A short frame does not show
the same picture smaller; it shows a different composition, which is what she was looking at.

**`--floor` on w2 is `.dr-chip--live` (§08c) one level up.** The class is real, the frame that
builds it is real, and no frame puts it on this slide. `kit.css` says why in the rule's own
comment: `onboarding-dispatch` is the one picture of the nine whose subject is cut by its own
canvas, so standing it on the floor reads as a figure walking out of frame; the other eight are
composed with space under the subject and lose nothing by floating. On `operator.png` — a
portrait cutout already height-led at 289.1 × 341.0 — the modifier pushes a whole figure 7px past
the floor and clips it for nothing in the drawing.

**Corrected to two frames, each one screen as built.** `welcome` with its three slides, none of
them `--floor`; `onboarding-operator` with its three, the first of them `--floor`. Both 375 × 812,
both with the frames' own status bar. The modifier keeps a specimen and the showcase stops
inventing one.

### 10b — The centred main drew a different screen's mark *(fixed)*

**What was built.** A **341 × 420** frame; no status bar; no back control; a
`.dr-mark--milestone` circle with a swap-arrows glyph; *Switch to operator*; the lead *Your client
orders stay where they are.*; one button, *Switch*.

**What `switch-role` builds.** 375 × 812; the status bar; a back chevron to Account, no visible
word, `aria-label="Back to Account"` (`microcopy.md` **D9**); a 64px circle carrying the client's
own photograph; `<h1 class="dr-display">Switch to Operator?</h1>`; the lead *You're in Client
mode. Switching shows the Operator app — jobs, earnings and ratings. Your Diia identity stays the
same.*; and an action bar of **two** — primary *Switch to Operator*, secondary *Cancel*.

**The mark is the real finding.** `.dr-mark--milestone` is a true component — **15** pages build
it — and `switch-role` is not one of them. Its circle is `.success-mark`, declared in
`wireframes/_wireframe.css` (the grayscale layer) and finished by the page's own `:has(img)`
block: the one live page-local CSS rule left in the painted set, which `CLAUDE.md` already
records. So the specimen swapped a photograph for a green-tint glyph circle, and in doing so it
hid the one painted screen whose mark the kit does not own.

**The kit has no 64.** Measured in `components/avatar.css`: `.dr-avatar-sm` **28** ·
`.dr-avatar-md` **56** · `.dr-avatar-lg` **120**. The frame therefore could not have been drawn
out of kit classes at all. The showcase now carries the page's own two rules inside its chrome
block, marked as the page's and not the kit's — the chrome block already claims exactly that
honesty at the top of the file.

**Open, and hers.** A screen builds a component the kit does not have. Two ways to end that, and
keeping it as built is one of them:

1. **Give the kit the rung** — a 64px photo mark beside the three avatar sizes — and
   `switch-role`'s page-local block becomes unnecessary. It would leave the painted set with
   **zero** live page-local CSS, which is the state `CLAUDE.md` describes as the goal of having
   one shared `kit.css`.
2. **Leave it page-local.** One screen spends it; a rung spent once is the thing the closed-ramp
   rule argues against. The cost is that the last page-local block stays, and the showcase goes
   on carrying a copy of it.

Neither is a conformance question — the mark is `aria-hidden` decoration, so no contrast criterion
is engaged either way. It is a system question, and it is not answered here.

### 10c — One divergence left standing, also hers

**The showcase's pager cannot follow a swipe.** `ui/kit.html` links no script; the three
carousel frames link `ui/kit.js`, whose fourth behaviour (rev 270, on her word «коли я свайпаю
слайдер не показує на якому я скріні 1, 2 чи 3») moves `.on` to the slide nearest the centre on
every scroll frame. So in the showcase the lit dot stays on slide 1 — the exact thing she asked
to have fixed on the frames.

Adding `<script src="kit.js"></script>` to `ui/kit.html` would close it and change nothing else:
of the file's four blocks, two return immediately without a `.wf-frame` and the third needs an
`input[autocomplete="cc-number"]`, which the card specimen deliberately does not have
(`autocomplete="off"`). Not done without her word, because a showcase page that has never run a
script is a decision someone made.

### 10d — After, read off both pages side by side

Every number below was measured in a browser on `ui/kit.html` and then on the frame itself, the
same property on each.

| | frame | showcase |
|---|---|---|
| `welcome` frame | 375 × 812 | **375 × 812** |
| `welcome` `.dr-main` | 373.7 × 578 | **373.7 × 578** |
| `welcome` art wells | 341.5 / 341.5 / 287.4 | **341.5 / 341.5 / 287.4** |
| `onboarding-operator` art wells | 396.7 / 364.7 / 364.7 | **396.7 / 364.7 / 364.7** |
| `object-position` on oo1 | `50% calc(100% + 7px)` | **`50% calc(100% + 7px)`**, and on no other slide |
| `switch-role` frame | 375 × 812 | **375 × 812** |
| `switch-role` `.dr-center` | 341.7 × 188.5 | **341.7 × 188.5** |
| the mark | 64 × 64, `#EEEEEE`, `rgba(0,0,0,.15)` hairline, photo 62.7 | **the same four** |
| `--floor` in the showcase | — | **1**, on the slide that builds it |
| elements wider than their frame · page scroll-x · console errors | — | **0 · 0 · 0** |

One side effect, kept: the caption rule was written `.plate .st`, and the 24 captions that sit
directly under a specimen rather than inside a plate had been rendering as body text since they
were written. The selector is now `.st`, so every caption on the page reads as the mono label it
was meant to be.
---

## §11 — The frames move off `ui/kit.css`, and what that cost

The designer, 2026-09-24: `Переведи всі екрани wireframes/*.html зі сторінками станів з ui/kit.css
на tokens.css і components/index.css … Це рефакторинг: вигляд не має змінитися ні на піксель. Якщо
чогось не вистачає або протирічить добавляй в компоненти не у Wireframes … Знайшов різницю —
лагодиться tokens.css чи components/, не екран.`

**127 pages moved, one line each** — 127 files, 127 insertions, 127 deletions, and the only line
that moved is the last `<link>`. `_navbar-options.html` is the 128th file in the directory and is
not in the count: it links no stylesheet at all. `ui/kit.css` is not deleted; it stays as the
archive, and as the thing every comparison below is run against.

Split by role across four passes — **Спільне 18 · Оператор 36 · Клієнт 58 · Взаємодія 15** — each
of which swapped its own pages and then had to prove the swap changed nothing.

### 11a — How "not a pixel" was made checkable

A claim that two stylesheets agree is worth exactly what the method behind it is worth, so the
method is written down.

A page is loaded **once**. The `<link>` is replaced in place — same cascade position — with
`ui/kit.css`, and every element is fingerprinted: its box, its `scrollWidth`/`scrollHeight`, **151
computed properties**, and the same 151 again for `::before` and `::after` wherever they exist. The
link is then replaced with `components/index.css` and the page is fingerprinted again. Only
differences are reported. The DOM is never reloaded between the two passes, so element identity is
exact rather than matched by guesswork.

**Three things had to be got right before any of its answers meant anything**, and each was found
by the harness disagreeing with itself:

1. **The sheet loads before its imports apply.** `components/index.css` is 31 `@import`s; the
   link's own `load` event fires before they land. The wait now walks every nested import and then
   waits for the total reachable rule count to stop moving.
2. **Chrome resolves `var()`-driven computed values a tick after a link is replaced.** Measured:
   the primary button read `rgba(0,0,0,0)` immediately after the swap and `rgb(155,207,74)` 800ms
   later. The harness now waits for the rendered result to stop changing, not for the sheet to load.
3. **A stylesheet swap restarts every animation and transition the new sheet declares.** Freezing
   them all at frame 0 froze a risen drawer back down and a settled button colour back to its
   pre-swap value. Finite ones are now jumped to their end; only the infinite loops — skeleton
   pulse, live ring — are frozen at 0, where both passes agree.

**The self-test is the licence.** Run with `kit.css` on *both* sides, the harness reports **0
differences** on every page tried, including a loading page full of skeleton animation. Until that
was true, every finding was suspect — and the first three "findings" it produced were its own.

### 11b — Four gaps, and none of them was visible in a stylesheet

**1 · The prototype layer still speaks kit.css's names.** `_wf-shell.js` reads nine token names and
the two option partials read six more; `tokens.css` defines **none** of them. Eight of the nine
shell fallbacks happen to equal kit's value, so they hid — but `var(--r-btn, 6px)` against kit's
**12px** did not, and the language toggle rendered at 6 on **124 pages**. The partials lost their
ground and their ink outright. `components/wireframe-compat.css` declares the fourteen names, each
bound to the token that already carries the value; no hex and no px is written into it.

**2 · `ui/kit.js` writes two more of them into *inline styles*.** When the onscreen keyboard rises,
the lifted drawer's `bottom` and the bar's or main's `margin` are all
`calc(var(--h-kb) + var(--h-control))`. An undefined var makes the whole `calc()` invalid at
computed-value time, so the property falls back to `auto` — and the open drawer jumped **62.20px**
to the top of the frame. **This exists only with the drawer open.** No default-state sweep of any
size would have found it; the harness learned to drive a state open first, and found it on the
designer's own control screen.

**3 · Two rules the port left behind.** `kit.css:2979–2984` sizes the edit disc on a head with no
rating pill at **44** with a **22** glyph. `account` and `operator-account` both match it — the
rating pill was cut at rev 204 — and both rendered at **20/12**. §09d had reported the unported
rules as "drawn on no page"; that reading was taken off **class names**, and both classes here do
exist. It was the *compound* selector that was never ported. A class-level audit cannot see that.

**4 · The narrow tier beats modifiers the token re-binding never could.** This is the deepest one
and it is structural. `kit.css` spends the `≤389px` breakpoint by **re-binding four tokens on
`:root`** — a change that reaches only the rules that *read* those tokens. `components/` cannot do
that (its lengths are named by their value: `--len-20` **is** 20), so the tier is **written out per
selector** — and a written-out rule sits inside a media block that cascades *after* the component
file, where it beats any modifier that was escaping the token by declaring its own value.

Four modifiers were losing:

| Modifier | What it declares | What it was getting below 389px | Live? |
|---|---|---|---|
| `.dr-list--snug` | `gap: 8` | **22** | yes — notifications, +28px of log |
| `.dr-well--map` · `--photo` | `width/height: auto`, box from an aspect-ratio | **68 × 68** | yes — 10 pages; the map well fell from **322 × 161.80** and everything under it rose **93.80px** |
| `.dr-card--cover` | `padding: 0` | **24 / 16** | yes — `order-details-aerial` |
| `.dr-toast--over-sheet` | `bottom: calc(100% + 12)` off the sheet's top edge | the frame floor, under the sheet it clears | no page shows it at rest |

The last one is the one worth keeping in mind: `_wf-shell.js` builds it when a toast fires over an
open drawer, so **no sweep at any viewport could have reached it**. It was found by reading the
cascade after the other three had taught what to look for.

And the third one taught its own lesson: re-stating `gap: 0` alongside `padding: 0` was *wrong*,
because `kit.css`'s narrow block writes a literal `.dr-card{gap}` that beats `--cover` there too.
18 at that width is kit's own outcome; restating it would have been a change, not a restoration.
`order-details-aerial` — the one page that draws the card — is what said so.

**The rule this leaves behind:** any modifier that overrides a property the narrow tier writes out
has to be re-stated inside that media block. It is now written at the top of `responsive.css` and
in `index.css`'s header, where the next person will meet it.

### 11c — What was measured, and what each check covers

| Check | Scope | Result |
|---|---|---|
| Harness self-test (`kit.css` against itself) | 8 pages incl. a loading page | **0** |
| `kit.css` vs `components/` per page | **127** pages @ 1280 | **0** |
| `kit.css` vs `components/` per page | **127** pages @ 380 | **0** |
| Pre-migration build vs migrated build, end to end | **127** pages @ 1280 | **0** |
| Same, narrow tier | 4 control screens @ 380 | **0** |
| Open states — drawers, nested drawers, keyboards, checked radios, toggles, pickers, the availability switch, forced `aria-pressed` | ~40 surfaces across the four groups | **0** |
| `prefers-reduced-motion: reduce` | 5 animated pages | **0** |
| Showcase `ui/kit.html` under both sheets | whole page | **30 → 0** |
| Behaviour (drawer + focus return, keyboard lift, pager, shell tree) | old build vs new build | identical |
| Unported selectors matched by any page | 78 selectors × 127 pages | **0** |

**The showcase's 30 is the one that is not a zero**, and it is the useful one. `ui/kit.html` has
read `components/` since the port, so it was never rendering what the frames render: its
edit-disc specimen drew **20 × 20** where `kit.css` draws **44 × 44**. The showcase had been
carrying the defect that finding 3 fixed. It now agrees with `kit.css` across the whole page.

### 11d — Left standing, and named rather than swept

- **`ui/shell.html`** still links `kit.css`. It is outside `wireframes/` and outside what was
  asked; it is the grayscale shell reference and it is the last page on the archive.
- **`wireframes/_conventions.md`** names `ui/kit.css` as the painted layer in five places, and
  `.claude/prompts/operator-paint.md` tells a new page to link it. Both are contracts for work
  that has not happened yet, and both would put the next page on the archive. Not edited —
  `_conventions.md` is in `wireframes/`, and the standing rule is that nothing there moves without
  the designer's word.
- **The comparison harness** lives in a session scratchpad, not in the repo. Every number in this
  section is reproducible only while it does.
---

## §12 — A dark theme as a stress test, and the three holes it found

The designer, 2026-09-25: `Семантичний шар готовий — стрес-тестуємо його доказом, не фічею
продукту … Якщо для теми довелося лізти в components/ — це діра: компонент десь читає primitive
напряму. Знайди і виправ.`

The premise is the interesting part. A theme is not asked for as a feature; it is asked for as a
**probe**. If colour really reaches a component only through a semantic role, then redefining the
roles should repaint the whole product and nothing else should have to move. Anything that does
*not* flip is reading below the tier it should be reading from — and that is a defect the light
build cannot show, because in one theme a wrong role and a right role can resolve to the same
colour.

**Whether dark ships is not settled here. It is inert** — no page sets `data-theme` at rest, and a
build with no stored choice renders exactly as it did before.

### 12a — What the block is allowed to do

`[data-theme="dark"]` in `tokens.css` redefines **semantic roles only**. No PRIMITIVE moves. Every
dark value is built from primitives that already existed — charcoal, cream, green, rust, amber —
lifted with `color-mix()`, which is the mechanism `--scrim` and `--halo-action` already used. **No
new hex enters the file.**

Five roles are deliberately *not* redefined, each for a stated reason: the action pair (green gets
*better* in the dark — the fill stands at 9.46:1 against the page where in light it stands at
1.69:1), the night pair (the call screen was already dark), `--bg-danger-solid`, and `--bg-pay` /
`--on-pay`, because Apple and Google ship those and a theme does not override a licence.

### 12b — Measured, not asserted

Thirty-nine pairs, computed in a browser with the browser resolving the `color-mix()`. **0 failing.**
A selection, dark against light:

| | dark | light | needs |
|---|---|---|---|
| primary ink on the page | 15.99 | 15.99 | 4.5 |
| primary ink on a card | 12.48 | 14.37 | 4.5 |
| secondary ink on a card | 9.00 | 5.95 | 4.5 |
| secondary ink on the secondary button | 5.53 | 4.77 | 4.5 |
| the only ink allowed on green | 9.46 | 9.46 | 4.5 |
| the tint under the primary ink | 9.84 | 14.75 | 4.5 |
| the danger word on a card | 4.99 | 6.14 | 4.5 |
| disabled, built not dimmed | 4.52 | 4.77 | 4.5 |
| a filled star (graphic) | 7.80 | 2.05 | 3 |
| the green fill against the page (graphic) | 9.46 | 1.69 | 3 |

Two roles had to take the other end of their own family, and both are named in the block: the dark
inks `--danger-ink` (2.61:1 on charcoal) and `--warn-ink` (1.72:1) fail outright on a dark ground,
and `--text-action`'s dark olive is 2.03:1. Each takes the lighter member of its family instead.

**One correction on the way, recorded because the standing rule is that numbers are measured:** the
first version of the `--bg-raised` comment carried ratios of 1.86 and 2.14 that I had *predicted*
and not yet measured. Measured, they were **1.60 and 1.84**. The comment now carries the measured
pair and the value was re-chosen against it.

### 12c — Three holes, and not one of them was what the brief expected

The brief predicted a component reading a **primitive**. A scan found none — `components/` reads no
primitive colour and contains no raw hex. The layer is clean by that test.

What the theme found instead is one level subtler and worse: **components painting one kind of
thing with the role for another kind of thing.** In light every one of them resolves to the right
colour by luck, so nothing is visible until the roles move apart.

**1 · `.dr-toast` — an ink role used as a ground.** It was
`background: var(--text-primary); color: var(--text-on-night)`. In light that is charcoal under
cream and reads 15.99:1. In dark `--text-primary` becomes cream and `--text-on-night` stays cream:
measured live on `share`, by firing the real toast, **background #F7F5F2, ink #F7F5F2, ratio 1:1 —
the text was invisible.** A toast is an *inverse* surface, so it is named as one:
`--bg-inverse` / `--text-on-inverse`, whose light values are exactly what the misused roles
resolved to. Light does not move; dark flips to a light pill with charcoal text at 15.99:1.

**2 · `.dr-btn--night[aria-pressed="true"]` — a page role used as a fill on a fixed-dark surface.**
It was `background: var(--bg-page); color: var(--bg-night)`. The call screen is a platform takeover
that is dark in *both* themes, so its pressed control must invert within the night pair, not borrow
the page. In dark `--bg-page` and `--bg-night` are the same colour and the control vanished into
its own bar. Now `background: var(--text-on-night)` — that surface's own ink — with the night
ground as the label. Identical in light, correct in dark.

**3 · `.dr-sheet` — the page role used for a surface that floats over the page.** In light the
drawer and the page are the same colour and the *scrim* carries the separation: the page behind
resolves to #9F9D9C and the drawer stands at **2.48:1** over it. On a dark page there is nothing
left to darken into — at 66% black the page behind is #090909 and the drawer stood at **1.15:1**.
No scrim value fixes that; the role does. `--bg-raised` is the page's own value in light (so the
light build does not move) and a lifted charcoal in dark, giving **1.84:1** over the scrimmed page.

That last one has a ceiling worth writing down. At a 24% lift the separation reaches 2.42:1 and
matches light almost exactly — but the surface lands on `--bg-muted`, and a secondary button
standing *on* the drawer disappears into it. At 16% that button reads 1.28:1 on the drawer, which
is the light build's own 1.34:1. **The lift is capped by what sits on the drawer, not by the page
under it**, and 16% is the value that keeps the internal relationship the light build has.

### 12d — What the audit could and could not see

Every page was rendered twice, light then dark, and every element compared: text whose contrast
clears AA in light and falls below it in dark, and painted surfaces whose colour did not move at
all.

**0 broken text** across the sample, and **0 unexplained frozen surfaces**: everything that stayed
put is either the prototype's own grayscale chrome (`wf-*`, which correctly does not follow a
product theme) or one of the roles deliberately left alone — the green accent, the night pair, the
end-call fill.

**The audit could not have found hole 1.** A toast is script-built and `opacity: 0` at rest, so no
static sweep reaches it; it was found by reading the roles and then confirmed by firing the real
toast in both themes. The same is true of hole 3, which needs an *open* drawer. A sweep finds what
is on the screen; a theme finds what is in the roles.

### 12e — The control

Two halves, one state, matching how Language is already split in this product: a segmented
**Light / Dark** control injected into the screen's top bar and shown only in the desktop preview,
and an **Appearance** row with the kit's own switch in the profile settings on `account-edit`. Both
write one key and both repaint from it, so they cannot disagree — verified by setting the theme on
one screen and finding it carried, with the desktop control's `aria-pressed` already correct, on
another.

It lives in `_wf-shell.js` for one reason: the shell is injected into all 127 pages and `ui/kit.js`
is linked by 43, and a theme that works on a third of the prototype proves nothing. **If dark
ships, the control becomes a product component and that block goes.**

### 12f — The state after

| Check | Result |
|---|---|
| dark pairs measured | **39**, 0 failing AA |
| primitives moved | **0** |
| components reading a primitive colour | **0** (before and after) |
| components painting with the wrong *kind* of role | **3 found, 3 fixed** |
| semantic roles added | **3** — `--bg-raised`, `--bg-inverse`, `--text-on-inverse` |
| light build, 127 pages against `ui/kit.css` | **0 differences** |
| broken text in dark | **0** |
| frozen surfaces with no reason | **0** |

### 12g — Four changes she made on the built dark theme

Read on the running prototype, 2026-09-25, and all four are **dark-only**: the light build is
measured unchanged at 127 pages / 0 differences after every one of them.

**1 · The pay buttons take the brands' own dark variant.** `.dr-btn--pay` was black in both
themes. `HIG · Apple Pay Buttons` ships three variants and says which to use — black on a light
background, **white on a dark one** — and Google Pay's brand kit ships the same pair. So white on
a charcoal page is not a recolour, it is the prescribed variant, and black there is the departure.
**My earlier note in `tokens.css` said "a theme does not get to override a licence" and that was
too broad; it is corrected in the file.** Measured: black #000 / white ink at 21:1 in light,
white #FFF / black ink at 21:1 in dark.

**On hover it takes the secondary button's own ground, her call.** White is the top of the ramp and
has nowhere to lift to, so the press reads as a step DOWN. Measured in dark: hover resolves to
**#4E4E4D / #F7F5F2**, which is byte-identical to `.dr-btn--secondary` at rest. Light's hover is
unchanged at #1A1A1A.

**2 · The balance plate's mark goes green — a departure from the fill-only rule, scoped and
recorded.** `concept.md` §0 says Signal Green is a fill or a tint, *never an icon stroke*. That rule
exists for a measured reason: green as a stroke on a light card is **1.52:1** and fails
`WCAG 1.4.11`'s 3:1 for a graphic. On the dark tint plate the same green measures **5.82:1**, so
the failure the rule prevents cannot occur there. The departure is therefore scoped to dark and
light keeps charcoal at 14.75:1. The mark is `aria-hidden` and the words *Available to withdraw*
carry the meaning, so `1.4.1` is not engaged either way. `CLAUDE.md`'s rule row now carries it.

**3 · The drone renders are lifted off the dark ground.** A render is a dark object on a transparent
ground: on `role-select` the drone was all but invisible on its own card. **`invert()` alone would
have broken the palette** — it turns a render's green cargo magenta — so the filter inverts the
luminance and puts the hue back, which lifts the object and keeps green green. The picture stays a
render rather than becoming a silhouette, which is the *Imagery is real* rule; a flat white
silhouette was the alternative and is hers to take.

**It is scoped by what the picture IS, not by where it hangs:** `/drones/` renders only. `/people/`
holds photographs of faces, and inverting a face is never right — verified on `welcome`, where the
operator's photo computes `filter: none` in both themes while the drone on the same set computes
the inversion.

**4 · The Appearance card moved under Language, where it was asked for.** It had landed between
Payment and Language because the anchor I matched — a row with a chevron — occurs first in the
Payment zone. Moving it also had to not break the comment that opens the Notifications zone, which
the first attempt did: the block landed inside it and the whole card was commented out. Checked
after: 14 comment openers, 14 closers, and the card outside all of them.


---

## §13 The dark theme swept over every page (2026-10-09)

The theme was built as a stress test of the semantic tier, and a stress test that is only ever
looked at on four screens has not been run. This is the sweep: **125 pages, each loaded twice —
once with no `data-theme`, once with `data-theme="dark"` — and every visible element inside `.dr`
measured in both.** Two questions, both answered with a number rather than a look:

**A. Does any text in dark fall below WCAG AA for its size?** Every element with its own text is
measured against its effective background — the first ancestor-or-self that actually paints one —
and held to `WCAG 1.4.3`: 4.5:1, or 3:1 where the type is large (≥24px, or ≥18.66px at 700).
Translucent pairs and text over a photograph are skipped rather than guessed at.

**B. Does any product surface or ink NOT move between the two themes?** This is the question that
finds the holes. A component that reads a **primitive** instead of a semantic role cannot respond
to a theme, so it paints the same colour in both — and that sameness is visible to a sweep even
when the colour looks perfectly reasonable in each theme on its own.

### What it found

**Two leaks, both the same defect: a PRODUCT element painted with the PROTOTYPE CHROME's palette.**
`--wf-*` is the grayscale of the shell around the frame. It has no theme and is not meant to have
one, so anything in the product that reads it is frozen at a light-build value.

| Where | What it read | Light | Dark | Verdict |
|---|---|---|---|---|
| `report-issue-loading.html:34` — `<p role="status">` inline style | `--wf-text` | #252525 on #F7F5F2 = **14.09:1** | #252525 on #1A1A1A = **1.14:1** | fails `WCAG 1.4.3` (needs 4.5:1) by a factor of four — the string "Issue under review…" is not dim, it is invisible |
| `switch-role.html` page `<style>` — `.success-mark:has(img)` | `--wf-recessed` | #EEEEEE | #EEEEEE | a near-white plate on a dark page; no text, so no 1.4.3 failure, but it is the same leak |

Neither can be fixed where it is written — one is an inline style, the other a page block, and
`wireframes/` is the source of truth and is not edited. So both names are **re-bound under `.dr`**
in `components/wireframe-compat.css`, which is the file whose own header had claimed "nothing under
`.dr` reads any of these names". That sentence was false when it was written; the sweep is what
made it false out loud.

**The cost in light, measured, not estimated** — the two fixes move exactly two elements on two
pages, and nothing else on any of the other 123:

- `report-issue-loading` — that one `<p>`: ink #252525 → #1A1A1A, i.e. **14.09:1 → 15.99:1** on the
  cream page. The chrome ink and the product ink were always near-identical in light, which is
  precisely why the leak survived unseen for so long.
- `switch-role` — that one photo well: #EEEEEE → `--bg-well` #E4E1DA, **1.066:1 → 1.200:1** against
  the page. It is a ground behind a photograph, carrying no text.

### What it found and did NOT file as a defect

**The call screen is dark in both themes on purpose.** `call`, `call-client` and `call-support` read
`--bg-night`, `--bg-night-raised`, `--text-on-night` and `--text-on-night-muted` — dedicated
semantic roles for a surface that is dark whatever the theme is, the way a system call screen is.
Eight of the sweep's "did not move" rows are these, and they are a decision, not a hole: the test is
whether a component reads a **primitive**, and these read roles.

**The danger-solid red `#C4462A` is also constant** across themes, on the end-call control. Left as
built; whether danger should shift with the theme is the designer's, and it is listed with the other
open questions rather than answered here.

### The result

**0 WCAG AA text failures in dark, across 125 pages.** Every remaining cross-theme constant is
accounted for above.

### Two corrections to the harness, recorded because they each produced a false accusation

1. **`color(srgb 0..1)` read as bytes.** Chrome serialises a `color-mix()` result in that form, and
   the parser treated the components as 0–255. It called a disabled button's **4.96:1** pair
   **1:1** and reported four failures that do not exist. Same bug as the one closed in the
   contrast harness earlier; it had not been carried into this one.
2. **Probing before the `@import`s applied.** `components/index.css` is 31 imports, and an
   `@import` takes effect *after* the linking sheet's load event. The first run read the UA
   defaults on `tracking.html` and accused it of browser-blue links and a `buttonface` primary —
   on a page that is one of the four fully painted surfaces. The sweep now waits for the total
   rule count to stop moving before it measures anything.

Both are worth keeping in writing for the same reason: a measurement harness that is wrong is more
expensive than no harness, because it is believed.

---

## §14 The other half of the check: non-text contrast and focus, in dark (2026-10-09)

§13 measured text. `WCAG 1.4.3` is only half of what this project holds itself to, and the half it
leaves out is the one a theme flip is most likely to break: an icon stroke and a focus ring were
both chosen against a cream page. So the same ten painted screens were swept again for
**`WCAG 1.4.11` non-text contrast (3:1)** — every `.dr-ic` against the ground it sits on, and the
**real `:focus-visible` ring** the browser paints on every focusable, read by actually focusing it.

### Icons

**0 under 3:1, in dark.** The icon system is `currentColor` on a 24-grid, so an icon inherits the
ink of whatever it stands in, and the ink is a semantic role. It follows the theme for free. This
is the payoff of the rule, and it is worth recording as a pass rather than a silence.

### Focus — and three accusations the harness got wrong

The sweep first reported five failures. **Three of them were mine, and all three have the same
cause: I measured the ring against the element's own background, when `outline-offset` means the
ring does not touch it.**

| Reported | Why it is not a failure |
|---|---|
| `.dr-btn--primary` ring cream on green = 1.69:1, 9 pages | `.dr-btn:focus-visible` is `2.5px solid var(--text-primary)` at **`outline-offset: 2px`**. The ring sits two pixels clear of the fill, on the page or the card — cream on #1A1A1A is **15.99:1**. The green is not an adjacent colour. |
| `.dr-card__link` ring #101010 on #2E2E2E = 1.40:1 | The link never carries the indicator. `.dr-card:has(> .dr-card__link:focus-visible)` puts a 2.5px `--text-primary` outline **on the card**. I measured the UA default on a child that is covered by a parent rule. |
| `.dr-route__open` — "no ring" | Same shape: `.dr-route__row:has(.dr-route__open:focus-visible)` outlines **the row**, inset by 2px. |

This is the second time in two days a harness has accused the build of something it does not do —
after `color(srgb)` read as bytes, and probing before the `@import`s landed. The lesson is
cumulative and belongs in writing: **a focus check must follow the indicator, not the element**,
because a design system of any maturity moves the ring to the parent.

### The one that is real — and it is not the dark theme's

**`.dr-field__input:focus-visible{ outline: none; }`** — `components/form.css:59`. The outline is
removed explicitly and **no parent rule replaces it**: `form.css` has `:has(input:focus-visible)`
treatments for `.dr-pick` and for `.dr-field--toggle`'s switch, but nothing for the text field. The
only remaining signal that the field has focus is the caret, `caret-color: var(--text-primary)`.

**It stands on 18 pages**, and it measures the same in both themes — **light fails it exactly as
dark does**. So it is a pre-existing defect in the approved build that the dark sweep merely walked
past, not a regression the theme introduced. It is reported here and **left as built**, because
changing it changes the light build and that is the designer's call:

1. **What is built** — a text input whose focus outline is set to `none`, with a tinted caret and
   no parent indicator, on 18 pages.
2. **What the guideline prescribes** — `WCAG 2.4.7 Focus Visible` (AA, which this project targets):
   a keyboard-operable interface must have a mode where the focus indicator is **visible**. Its
   Understanding document does accept the text cursor as the indicator *for a text field*, which is
   why this is genuinely borderline rather than plainly broken. `WCAG 2.4.11 Focus Appearance`
   would not be met by a caret alone — but 2.4.11 is WCAG **2.2**, and the project standard in
   `CLAUDE.md` is **2.1 AA**, where it does not exist.
3. **Whether it passes** — under 2.1 AA, for a text field, arguably yes, on the caret. For anything
   `.dr-field__input` is used on that is **not** a text field, no. The caret is also the one signal
   that disappears for a user who navigates by keyboard and does not type.
4. **The options** — (a) keep as built, and record it as a deliberate reading of 2.4.7; (b) give
   the field the same parent ring the route row already has — `.dr-field:has(.dr-field__input:focus-visible)`
   with the 2.5px inset outline, which is one rule in `form.css`, costs nothing in dark, and
   changes the light build only while a field is focused; (c) hold it until the project moves to
   WCAG 2.2, where the answer stops being arguable.

### The result

**Dark introduces no non-text contrast failure and no focus regression.** Icons pass at 3:1 on
every painted screen; every focus indicator that exists follows `--text-primary` and therefore
follows the theme. The single open item predates the theme and is listed above for decision.

---

## §15 The shell does not follow the theme — decided, not left open (2026-10-09)

Closing the one question §13 and §14 left standing. **The prototype chrome stays light in dark
mode, on the designer's word.** Only the screen inside the frame darkens.

**Both options conform**, which is why this was a question of taste and not a defect. The shell is
measured separately from the product, and it holds `WCAG 1.4.3` either way — with one asymmetry
worth recording: the **light** shell's `--wf-muted` is **#909090 on #F4F4F4 = 2.90:1**, already
under 4.5:1 for body text today, while the dark candidate measured 5.43:1 and passed everywhere.
So the decision was not made to avoid a failure; it was made in spite of one that already exists
in the shell, and that failure is now written down rather than discovered again later.

**The reason given:** the chrome is scaffolding, not product. No user ever sees it, and a light
shell around a dark screen states plainly where the mock ends and the tool begins.

**What this does NOT decide:** whether the dark theme ships at all; `prefers-color-scheme`; and
whether the danger-solid `#C4462A` should shift with the theme. Those stay open.

The side-by-side that produced the decision — `preview-chrome.html`, two panes of the same page
with a pixel-identical phone frame and only the shell differing — is **deleted now that it has
been used**. Its candidate ramp and every measured pair are in the commit that added it
(`83ec139`), so the work is recoverable without the file standing around pretending to be part of
the prototype.

---

## §16 The full audit of tokens, components and screens (2026-10-10)

Her seven checks, run over `tokens.css`, the 31 files in `components/` and all 128 pages, plus
`/impeccable audit` and its detector. **Then fixed.** What follows is what was found, what it cost
to confirm, and what was deliberately left.

### What passed, which is also an answer

**0** hex colours in a component declaration · **0** literal font names (every `font-family` reads
`var(--font-ui)`) · **0** components reading a colour primitive past the semantic tier · **0**
duplicate roles — all five candidate pairs **diverge in dark**, so they are genuinely two jobs ·
**0** semantic tokens without a provenance comment · **0** pages linking `ui/kit.css` · **0**
images without `alt` · **0** horizontal overflow at 380px · **0** icons under 3:1 in dark.

### Fixed

| What | Measured | Where it was fixed |
|---|---|---|
| `.dr-star` — five buttons with **no accessible name**, and `aria-pressed` describing a single rating as five independent toggles | `WCAG 4.1.2`, **level A**. The tree read `button, pressed` ×5 | `role="radiogroup"` + `role="radio"` + `aria-checked` + names, on 15 buttons across 3 screens; `rating.css` repointed from `aria-pressed` to `data-on` |
| `.dr-label__act` on the call screen | #5A5751 on #1A1A1A = **2.42:1**, needs 4.5 (`WCAG 1.4.3`). Failed in **both** themes | one rule in `call.css`; now **11.54:1** |
| Inline type on `report-issue-loading` — the only inline type in 128 pages, painted with the chrome's ink | 1.14:1 in dark | the `title` step (17/600) got a class, `.dr-title` in `type.css` |
| 19,804-byte JPEG as a base64 data URI | **83%** of that page's bytes | `assets/drones/drone-cargo-banner.jpg`; page 31,896 → 5,504 bytes |
| 11 pages carrying a `<style>` block | see below | 8 removed; 3 specimens keep theirs |
| **81 literal lengths** in `components/`, all percentages | the geometry check had looked for px/rem/em and missed `%` entirely | 70 converted to `--pct-*`; **24 of 24 page snapshots identical** |
| Shadows had no semantic tier and no statement either way | 7 components read the primitive | stated in `tokens.css` and in `CLAUDE.md`: shadow follows geometry |

### The page-CSS finding, which was not what the documents said

`CLAUDE.md` said *three pages keep CSS of their own and only one is alive*. Measured: **eleven**
pages held a block, and five of them were alive inside `.dr`.

The reason was worth the digging. On `listings.html`, of **86 rules only five match anything inside
the frame and exactly one changes a pixel** — the universal reset. Same shape on
`operator-listings`: 114 rules, 6 matching, 1 biting. The one live rule was the reset because
**these five pages do not link `_wireframe.css` at all** — they carry ~11.7KB of it inline. The
block was never a leftover; it was the chrome stylesheet, duplicated five times. They link the
shared file now, and each page was checked against **its own earlier rendering** at 420 and 1280:
the only difference in any of the ten snapshots is that one head element is a `LINK` where it was
a `STYLE`.

`account` and `operator-account` were genuinely dead — 0 computed differences with the block
disabled — and are deleted. `switch-role`'s two live rules moved to `components/avatar.css`, which
also fixed what they did in dark: their ground was `--wf-recessed`, #EEEEEE, a near-white plate.

### Left as built, each with its reason

- **The filter chip's touch target.** 28px tall where `HIG` asks 44. The designer's word:
  *«чипи не міняй, я хочу щоб візуально все було як є»*. The fix was built and measured first so
  the decision was made against a real thing: an unpainted `::before` at 44px, **0 layout
  differences**, a tap 16px off-centre landing instead of missing. Recorded as a departure from
  HIG, not as a defect — and note `WCAG 2.1 AA`, the project's other standard, has **no**
  target-size criterion at all (2.5.5 is AAA), while WCAG 2.2's 2.5.8 asks 24×24, which it passes.
- **`.dr-grouptab` and `.dr-route__open`** looked like the same problem at 32px and 35px and are
  not: their real hit areas measure **44px and 59px**, already extended by an existing
  pseudo-element. A blanket fix would have **shrunk** the address row by 15px. They pass HIG today
  and nothing said so anywhere.
- **`.dr-field__input`'s focus** — `outline: none` with no parent ring, on 18 pages, identical in
  both themes (§14). Borderline under 2.1 AA, which accepts the caret for a text field.
- **`[fill="#FFF"]`** in `button.css` — a hex in a *selector*, matching an SVG attribute. Fixing it
  means the frames must carry a class; left as the cheaper truth.
- **Two negative animation delays** in `skeleton.css`, `-.47s` and `-.93s` — offsets that keep
  three shimmer rows out of step. A token each would have one spend and no second reader.
- **`@media (max-width: 389px)`** — not fixable: CSS does not allow `var()` in a media query.

### Four false accusations, all mine, all recorded

The first pass reported 98 findings. **Thirty-nine survived contact with the evidence**, and the
corrections are the useful part:

1. **20 "font-family in a component"** — every one was `font-family: var(--font-ui)`, which is the
   rule being followed. The check flagged the property, not the value.
2. **13 "semantic token with no comment"** — the detector did not track multi-line comments, so it
   stopped at the previous declaration. Re-run with real comment spans: **0**.
3. **5 "duplicate roles"** — each pair shares a value in light and **diverges in dark**. The dark
   block is what proves they are two roles, not one.
4. **A `broken-image`** reported by the detector on `operator-account-photo.html:71` — the literal
   `<img>` sits **inside an HTML comment**, so no element is created. I had checked that it was
   unescaped and not that it was commented out.

And one that was not a false positive but a trap I had already named and then walked into: these
pages carry the literal string `"<style>"` inside a head comment. The first removal cut from that
one, destroying the comment's terminator and leaving the stylesheet links inside an unterminated
comment — the page rendered with no CSS at all. Reverted; redone with a comment-aware scan.

### `/impeccable audit` score

| Dimension | Before | After |
|---|---|---|
| Accessibility | 3 | **4** — the 1.4.3 failure and the 4.1.2 level-A failure are both closed |
| Performance | 4 | **4** — the 19KB data URI is out of the markup |
| Theming | 4 | **4** — the shadow tier is declared rather than inferred |
| Responsive | 3 | **3** — unchanged on her word; the chip stays as built |
| Implementation integrity | 3 | **4** — no screen carries CSS of its own |
| **Total** | **17/20** | **19/20** |
