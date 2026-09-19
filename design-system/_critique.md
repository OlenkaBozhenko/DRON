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
names that as `--color-verified`. So the role has a semantic token; it simply does not point at
the blue.

**Options.**
1. **Leave both primitive** (as built). The pair stays declared so a rejected idea is not
   re-proposed as a new one — which is the reason `kit.css` keeps them and `DESIGN.md` keeps
   the reasoning.
2. **Delete them.** Honest about the build, but loses the record of a decision already made
   and reversed. `--sh-card` and `--sh-onphoto` are kept on exactly this principle.
3. **Bring blue back for a distinction green cannot make.** There is one in the product today:
   `--color-verified` and `--bg-selected` are **the same primitive**, so a confirmed credential
   and a chosen filter are the same colour. A cool hue would separate them. This is a design
   decision, not a token one, and it is the designer's.

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

## §06c · Two roles, one primitive — recorded, not resolved

`tokens.css` declares `--bg-selected` and `--color-verified` and both point at `--green-100`.

That is deliberate. The audit's §5 finds **"Selection / state"** and **"Trust"** landing on the
same wash: `.dr-tab[aria-current]` and `.dr-fchip` on one side, `.dr-chip--claim` on the other.
So in the built product **a chosen thing and a confirmed thing are the same colour**, and each
relies on an ink change or a glyph to be told apart — which is what keeps `WCAG 1.4.1` satisfied.

Two names are declared so that the day the two roles part, only one of them has to move.

The same pattern, for the same reason, applies to `--bg-muted` / `--bg-disabled` and
`--text-muted` / `--text-disabled`: disabled has no colour of its own and borrows the secondary
pair at **4.77:1**. `concept.md` §4 names `--disabled-bg` / `--disabled-ink` and **neither name
exists in `kit.css`** — 0 occurrences. `tokens.css` gives that pair its names at last.

---

## §06d · One naming decision that departs from the brief, and why

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
