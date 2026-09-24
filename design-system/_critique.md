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

