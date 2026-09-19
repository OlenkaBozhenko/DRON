# DRON — Landing page

**What this is.** The public page for the project: one phone, the real product inside it, and a
handful of sections that each show a single feature working. Mobile view only — there is no desktop
view of DRON on the landing, because there is no desktop view of DRON.

**Status, 2026-09-19.** Rev 1. The mechanism below is specified in full and **one section is
built** — §5.1, the RJ-C2 reel. Everything else in §5 is written down and not yet made.

**Source of truth.** This file. `landing.html`, `ui/landing.css` and `ui/tape.js` are the display
layer and are written *from* this document, never the other way round (CLAUDE.md → Content Rules).

---

## 0. The standing prohibition — `wireframes/` is never touched

Set by the designer, **2026-09-19**. It has no exceptions and no expiry.

> **Nothing inside `wireframes/` changes for the landing. Ever.**
> Not a class, not an `id`, not an attribute, not a `data-` hook, not a query parameter, not a new
> file in that directory, not one character of one page.

**Why.** The wireframes are the source of truth for the product. The landing is a consumer of that
truth. A consumer that edits its source stops being able to tell you what is true — the moment a
page carries a hook that exists only for the landing, the page is no longer only the product.

**What this forbids, concretely**

- Adding `id="lp-cta"` or `class="js-tape-target"` to a screen so a tape can find it.
- Teaching `_wf-shell.js` an `?embed=1` / `?bare=1` mode, or any other landing-aware branch.
- Adding a landing-only stylesheet, partial or asset inside `wireframes/`.
- "Just one attribute." Especially that.

**What this forces instead** — and all of it is already possible

- The landing **injects its own stylesheet into the iframe from the parent document** (§4.2). The
  page is rendered untouched and dressed from outside.
- Tapes address elements **only by selectors that already exist** in the built page — `.dr-op__name`,
  `.dr-btn--primary`, `a[href="chat.html"]`, `button[aria-controls="sheet-contact"]`.
- **When a selector breaks, the tape is fixed, never the page.** A renamed class is the product
  moving; the landing follows it. This is the running cost of the rule, and it is accepted.
- If something is genuinely impossible without touching a screen, it **does not get built** until
  the designer changes the screen for the product's own reasons.

Related standing rule: `wireframes/_conventions.md` is the contract for those pages; this section is
the landing's side of the same wall.

---

## 1. Who it is for

Someone meeting DRON for the first time, on a phone or a laptop, who has never flown a drone and
never will (CLAUDE.md → Audience). The page has one job: **make the product believable in under a
minute**, by showing it rather than describing it.

That is why the phone holds the real prototype and not a picture of one.

---

## 2. One component, three modes

There is a single player (`ui/tape.js`). A block chooses its behaviour with `data-mode`. The choice
is **per block**, not per page — the designer's call, 2026-09-19.

| Mode | Where it is used | What the visitor sees | Interactive |
|---|---|---|---|
| **`live`** | the "try it" block, at the end | nothing moves until touched; the real prototype from its first screen, plus **Start over** | yes, fully |
| **`reel`** | every feature section | the flow plays itself on a loop; **touch it and it stops and hands over** | on take-over |
| **`video`** | held in reserve, not built | a recording, for motion the DOM cannot produce | no |

`video` exists in this table so that it is not re-proposed later as a new idea. It is the fallback
for one case only: motion the live page genuinely cannot show (continuous map panning, camera
movement). It costs `WCAG 1.4.4` — a recording turns the whole interface into an image of text that
zoom cannot enlarge — so it is not used for anything the DOM can do.

---

## 3. What each mode owes the standards

Checked before building, per CLAUDE.md → *The conformance check*.

| Criterion | What it says | `live` | `reel` |
|---|---|---|---|
| **WCAG 2.2.2** Pause, Stop, Hide (A) | motion that auto-starts, runs > 5 s and sits beside other content needs a mechanism to pause it | **not engaged** — nothing auto-starts | **engaged.** A visible Pause/Play button, reachable by keyboard |
| **WCAG 2.1.1** Keyboard (A) | every control operable from the keyboard | native | the Pause button is a real `<button>`; **"touch to take over" is a bonus, never the mechanism** — a keyboard user does not touch |
| **HIG · Motion** + **WCAG 2.3.3** (AAA) | respect Reduce Motion | crossfade becomes an instant swap | **no autoplay at all**: first screen + Play, and swaps are instant |
| **WCAG 4.1.2** Name, Role, Value | a frame needs an accessible name | `title` on every `<iframe>` | same, and the off-screen layer is `inert` + `aria-hidden` |
| **WCAG 1.4.4** Resize text (AA) | text must survive 200% zoom | real DOM, so yes | real DOM, so yes |
| **HIG · 44pt** minimum target | targets stay at or above 44pt | yes at 1:1 — see §4.4 | yes at 1:1 |
| **WCAG 1.4.3 / 1.4.11** | 4.5:1 text, 3:1 UI | landing chrome measured in §6.2 | same |

**The one place the two standards pull apart.** `WCAG 2.3.3` is AAA and the project targets AA — but
HIG treats Reduce Motion as a plain requirement, not an extra. The stricter reading is taken: on
Reduce Motion the reel does not start.

**A conforming departure, recorded not corrected.** While a reel is playing, the phone is `inert` —
a keyboard user cannot tab into a screen that is changing underneath them. Pressing Pause lifts the
`inert` and the prototype becomes fully operable. So the content *is* keyboard-reachable
(`WCAG 2.1.1`), through one deliberate gate rather than directly.

---

## 4. How it works

### 4.1 Two layers, one crossfade

Each player holds **two stacked `<iframe>`s**. The next screen loads into the hidden layer; when it
has loaded, the two crossfade (260 ms). Without this, every step is a real navigation and the
visitor sees a white flash between screens.

### 4.2 The injected stylesheet

On each `load`, the **parent** writes one `<style>` into the iframe document. Same-origin, so this
is allowed, and §0 is kept — the wireframe file is never edited:

```css
.wf-toolbar, .wf-tree, .wf-scrim, .wf-voice-drawer, .wf-voice-scrim,
.meta, .state-switch { display: none !important; }
body, body.wf-shelled { margin: 0 !important; padding: 0 !important;
                        background: transparent !important; display: block !important; }
.wf-frame { border: 0 !important; border-radius: 0 !important; }
```

`body.wf-shelled` is named explicitly because `_wf-shell.js` sets
`.wf-shelled{ padding:52px 24px 24px 272px !important }` — a class selector beats a bare `body`
even when both are `!important`, so the override has to match its specificity.

`.wf-frame` keeps its natural **375 × 812**. The stage is built to that size, so nothing is
stretched and nothing is scaled. See §4.4.

### 4.3 It needs an http origin

`file://` treats each file as its own opaque origin, so the parent cannot reach into the iframe and
the injection silently fails. Run the repo the way `index.html` already assumes:

```
python -m http.server        # then open http://localhost:8000/landing.html
```

The player detects the failure and says so inside the frame rather than showing a broken page.

### 4.4 Narrow screens — where the 44pt floor bends

The frame is 375 CSS px. The landing is read on phones narrower than that.

- **375px wide and up:** the bezel and section padding collapse below 560px; the frame stays
  **1:1**, so every target keeps its designed size. `HIG · 44pt` holds exactly.
- **Under 375px wide:** the whole phone is scaled by `100vw / 375`, origin top-centre. At a 360px
  viewport that is **0.96 — a 44pt target renders 42.2pt, 4% under the floor.**

**Recorded as a departure, with its number.** The alternative is a horizontal scrollbar on the
landing, which fails worse (`WCAG 1.4.10` Reflow). A scaled phone is a picture of a phone; a phone
you must scroll sideways is a broken page. Say the word and it flips.

### 4.5 Taking over

In `reel`, the first `pointerdown` inside the phone pauses the tape and hands control to the
visitor. The button then reads **Play** — pressing it reloads the current step's screen and resumes,
so the reel is always deterministic and never resumes into a screen the visitor wandered into.

### 4.6 Links inside the frame

In `live` mode, clicks on `<a href="….html">` inside the frame are intercepted by the **parent** and
routed through the crossfade, so browsing the prototype has no white flashes either. Anything that
is not a same-directory `.html` link behaves natively. In-page behaviour — drawers, sheets, toggles,
the language switch — is the page's own `ui/kit.js` and is never intercepted.

---

## 5. The tapes

A tape is a list of steps. Each step may carry:

| Key | Meaning |
|---|---|
| `page` | crossfade to this file in `wireframes/` |
| `point` | draw the tap pulse over this selector — **no click**, the page does not navigate |
| `tap` | pulse **and** dispatch a real click (used only on in-page controls, never on links) |
| `hold` | milliseconds to rest after the action |

Captions are **not** in the tape. They are the `<li>`s of the step list beside the phone, in
`landing.html`, so they are real text with JavaScript off and are readable by anyone who never sees
the motion. A step points at its caption with `cap`, a zero-based index into that list — an index
rather than position, because two steps can share one caption (the reel below does). Clicking a
caption jumps to the first step that carries it. The lit caption also takes `aria-current="true"`,
so the motion has a spoken position, not only a visible one.

### 5.1 RJ-C2 — the void between paying and arriving · **BUILT**

Why this one first: `RJ-C2` is the second of the top-three MVP jobs and the largest single drop-off
in the CJM (CLAUDE.md → Design Focus). It is also the moment that earns trust, which is the primary
emotional driver.

| # | Action | Selector | Hold | Caption (the `<li>`) |
|---|---|---|---|---|
| 1 | `page` `payment-loading.html` | — | 1500 | Payment clears first. Nothing is booked until it does. |
| 2 | `page` `order-confirmed.html` | — | 2200 | Your operator is named before the drone leaves: Andriy M., verified and insured. |
| 3 | `point` | `.dr-btn--primary` | 800 | One tap from the confirmation to the map. |
| 4 | `page` `tracking.html` | — | 2800 | Live position and ETA, the whole way. |
| 5 | `tap` | `button[aria-controls="sheet-contact"]` | 1800 | Reach the operator from inside the order. |
| 6 | `point` | `a[href="chat.html"]` | 700 | *(no caption of its own — step 5 stays lit)* |
| 7 | `page` `chat.html` | — | 2600 | One thread, tied to this order. |

Then it loops to step 1.

Copy is checked against `voice.md`: outcome not equipment (P1), proof not adjective (P2), the word
**operator** (never "pilot"), no exclamation marks, no "successfully".

Step 5 is the only real click in the tape — `button[aria-controls="sheet-contact"]` is an in-page
control, so `ui/kit.js` opens the sheet exactly as it does for a person. Step 6 only points at the
row; the navigation is done by step 7's crossfade rather than by following the link, so the flash
described in §4.1 never happens.

### 5.2 RJ-C1 — find and book · *not built*

Screens: `listings.html` → badge → `listings-map.html` → `order-setup.html` → `order-review.html`.
The job it carries: confirm the operator is real and qualified without tapping — verified badge and
insurance visible on the card.

### 5.3 The outcome · *not built*

Screens: `delivery.html` / `delivery-aerial.html` / `inspection-report.html`. The deliverable
arrives as a **delivery photo** / **inspection report** (`voice.md` vocabulary).

### 5.4 RJ-O3 — the operator is paid · *not built*

Screens: `result-upload.html` → `wallet.html` → `withdraw.html`. Auto-release within 30 minutes of
client confirmation; the fastest churn trigger if absent.

### 5.5 The "try it" block · *not built*

`data-mode="live"`, opening on `welcome.html` or `listings.html`, with **Start over**. It sits last:
the visitor has been shown four things and is then handed the controls.

---

## 6. Files, and what is still open

### 6.1 Files

| File | Role |
|---|---|
| `landing.md` | this document — the source |
| `landing.html` | the page; currently the §5.1 section only |
| `ui/landing.css` | the landing's own surface — nothing here is loaded by a product page |
| `ui/tape.js` | the player: modes, crossfade, injection, pulse, pause |

`ui/*.css` and `ui/*.js` are already copied by `.github/workflows/deploy-pages.yml`. **`landing.html`
is not yet in that workflow's root copy list** (line 37) — one line to add when the page is ready to
be published. Left undone on purpose: publishing is the designer's call.

### 6.2 The palette is provisional

The probe borrows `index.html`'s dark surface — `--page #0b0e14`, `--card #11161f`, `--line #1f2633`,
`--ink #e6e9ef`, `--muted #7B8393` — so the warm product glows inside a quiet room, which is also
what the reference landing does.

Measured on the built page: ink on page **15.89:1**, muted on page **5.09:1**, muted on card
**4.81:1** — all over the 4.5:1 of `WCAG 1.4.3`. (`index.html` recorded 5.07 and 4.76 for the same
two pairs; the hundredths differ by rounding, both pass.)

**The accent rule travels unchanged.** `#9BCF4A` would measure 10.48:1 as text on `#0b0e14` and is
still **not used as text** — `concept.md` §0 makes it a fill, and a landing that spent it as a label
would contradict every product screen. It appears only as a fill under `--on-green #1A1A1A`,
**9.46:1**, exactly as the primary button does in the product.

**Open:** whether the finished landing stays dark or moves to the Studio warm `#F7F5F2`. Both
conform; this is a taste decision and it is the designer's.

### 6.3 Type and shape are the landing's own — flagged, undecided

`ui/landing.css` uses sizes and radii that are **not** on the DESIGN.md ramp: **30 / 26 / 16 / 15 /
13 / 12 px** type and **48 / 36 / 12 / 8 / 999 px** radii. The project's design hook flags each of
them, correctly — they are off the documented scale.

They are left as built, for the reason `index.html` already records for itself: **DESIGN.md scopes
itself to the phone frame** ("the layer applies to `.wf-frame`, 375 x 812"), and its ten steps top
out at 22px because they were measured on a 375px screen. Snapping a full-width landing onto a
phone ramp would make the page read as a product screen, which is exactly what it must not do —
the product is the thing *inside* the glass.

**Two ways to close this, and it is the designer's call**

1. **Keep it, record it** — as here and in `index.html`. The landing is a second non-product
   surface with its own ramp, and the two already agree with each other.
2. **Put the landing on the ramp** — the page then shares the product's type and radii. Honest,
   and it will make the chrome and the screen harder to tell apart, which is the risk.

Nothing is suppressed in the hook's config until that is decided. Inside the phone nothing changes
either way: those pixels are the product's own and are not this file's to move (§0).

### 6.4 Other open questions

- Where the landing is linked from — `index.html`, `research.html`, both, or neither.
- Language: the page is English (CLAUDE.md → primary). A UA version is not specified yet.
- Whether §5.5 opens on `welcome.html` (the explainer) or `listings.html` (the real start).

---

## 7. Change log

**Rev 1 — 2026-09-19.** Built and checked without a browser: the Playwright profile was held by
another session and the Chrome extension was not connected, so the probe is verified from the files
— the tape parses, all six captions are addressed, and every selector it names resolves exactly
once in the page it names. The motion itself is unverified until it is opened. Written from the session where the approach was chosen. The designer's calls
recorded here: the mode is **per block, not per site**; "hybrid" means *a block that plays itself
and hands over when touched*, not a split between technologies; `wireframes/` is **never** modified
(§0); the first built section is RJ-C2 (§5.1).
