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
