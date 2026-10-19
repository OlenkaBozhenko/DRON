# Onboarding gaps — what a new developer cannot work out alone

**Status:** 2026-10-20. The order for the handoff: every item below is a question the documentation
has to close. **Nothing was fixed while this list was made**, on purpose — the list is the brief.

**How it was made.** A reader with no part in any design session (a fresh agent with none of the
working history) walked the repository as a new front-end developer would: `README.md` first, then
wherever it led, down into the code. It read **only tracked files** — what a `git clone` gives —
and changed nothing; the one command run was `python design-system/docs/build.py --check`
(`83 component pages, 13 patterns, 0 errors`). The strongest claims were then checked by hand
(marked **checked**). Questions are about the product and the system, not about syntax.

Each item: **the question** as a newcomer asks it · **where** they got stuck · **what half-answers
or contradicts it** · **why it costs a developer**. The handoff closes an item by answering the
question in a place a newcomer will find.

---

## The five that block a first day, in order

1. **No document is written for a developer.** The working rules ("system first, screen second",
   what «залишаємо» means, when a change is done) live in `CLAUDE.md`, a brief addressed to an AI
   agent, and in `responsive/*-brief.md` ("brief for the agents"). `README.md` is far out of date.
   A newcomer cannot tell which document is the authority. → G-1, §9, S-1…S-6
2. **There is no "how do I run it, and where do I start".** Three different home pages; some pages
   need a server and some do not; `serve.py` is never mentioned. → G-2, G-3, G-4
3. **Which build is current — phone or desktop?** Nothing tells the newcomer. "The phone is frozen"
   is written only in change-log lines, `motion.md` and `animations/state-tone.md`; the brief still
   says *mobile-first*. **Answered by the designer (2026-10-20): both are current.** The handoff has
   to say so where a newcomer looks first. → W-1
4. **Nothing says what the repo hands to real code.** `handoff/` holds only `.gitkeep` (**checked**):
   no stack, no data model, no API, no browser support, no word on whether the `dr-*` CSS ships.
   → H-1…H-5
5. **Counts and statuses disagree from file to file** (80 / 127 / 134 / 135 pages; 31 / 53
   component files; 61 / 82 / 83 doc pages; "19 grayscale screens" / "none"), so no statement about
   the system can be trusted without recounting. → S-1…S-17

---

## 1. Getting started and running it

**G-1. Which file is my entry point?**
`README.md` line 7: *"Brief: see `CLAUDE.md`"*. `CLAUDE.md` is a 536-line brief for an AI assistant
("set by the designer", "her", "concurrent sessions"); `PRODUCT.md` opens with a tool schema
comment. There is no CONTRIBUTING or developer guide. *Cost:* the newcomer must reverse-engineer
which of `README.md`, `CLAUDE.md`, `PRODUCT.md`, `DESIGN.md`, `concept/concept.md` is the authority.

**G-2. How do I see it running?**
`serve.py` has a good docstring (`python serve.py`, caching off, and why), but `README.md` never
mentions it, and `index.html` tells you to use plain `python -m http.server` — the exact thing
`serve.py` says serves stale CSS. *Cost:* stale or half-loaded pages on day one.

**G-3. Which pages need a server and which open from disk?**
`CLAUDE.md` says the docs open with no server and the root `design-system.html` needs one;
`_wf-shell.js` (~line 408) finds the desktop twin with a `fetch(… HEAD)` that fails under
`file://`, so the *Desktop* button silently does nothing. Under `file://` the logo and drone icons
(CSS masks) also vanish. *Cost:* looks broken, is not.

**G-4. Which page is "home"?**
`CLAUDE.md`: `research.html`. `index.html`: "DRON — Project index". `serve.py` prints
`wireframes/listings.html` and `ui/kit.html`. *Cost:* no obvious start.

**G-5. Do I need to install anything? Are there tests?**
No `package.json`, `requirements.txt`, test folder or lint config. `build.py` is standard-library
Python; the Python version is never stated. `visuals/check-style.py` exists, unexplained.

**G-6. What makes the `auto:` commits — and will my edits be auto-committed?**
1,201 of the commits start with `auto:` (**checked**); nothing tracked explains the mechanism.
*Cost:* history is mostly noise; the newcomer does not know what runs on their machine.

**G-7. Is GitHub up to date?**
`master` is **154 commits ahead** of `origin/master` (**checked**); `CLAUDE.md`: "push only on her
word". *Cost:* a real clone would not contain the desktop twins or Motion, yet the docs describe them.

## 2. Map of the repo

**M-1. Which top-level folders are live, which are archive?**
The `README.md` structure table lists 6 folders; missing: `ui/`, `responsive/`, `animations/`,
`visuals/`, `ux-research/`, `assets/`, `.impeccable/`, `.playwright-mcp/`.

**M-2. Is `ui/` live or archive?**
`ui/kit.css` is "the archive, no page links it", but `ui/kit.js` beside it is live (loaded by 47
phone pages and all 135 desktop pages) and `ui/kit.html` is the specimen page every component change
must update. *Is `kit.js` part of the design system or not?*

**M-3. `tokens/` or `design-system/tokens.css`?** The working process says "4. Token decisions →
`tokens/`", but `tokens/` holds only an audit; the values live in `design-system/tokens.css`.

**M-4. Where is `components/`?** The process says "5. Components → `components/`"; there is no root
`components/` — it is `design-system/components/`.

**M-5. What are `responsive/`, `animations/`, `visuals/`?** None is in the structure table;
`responsive/desktop-brief.md` addresses "builders" and agents. Current specs, or spent working notes?

**M-6. `research/` or `ux-research/`?** Both exist, both hold a `research.md`; there is also
`ux-research.html` at the root.

**M-7. Are the root `_compare-*.html` and `_proposed-*.css` live?** 9 + 2 are tracked. `CLAUDE.md`
calls them scaffolding "not linked from anything" but never says whether they may go.

**M-8. Why are tool folders tracked?** `.playwright-mcp/motion-cards.html` is tracked (**checked**;
it came in through an auto-commit) while `concept.md` rev 348 names
`assets/design-system/cards/_motion-cards.html` as the card source — two copies. `.impeccable/` is
never explained.

**M-9. What does a leading underscore mean?** Used for shared files (`_wireframe.css`,
`_wf-shell.js`), sources (`_screens.md`, `_PAGES.md`), partials, scaffolding (`_compare-*`) and QA
shots (`desktop/_qa/`) alike. No convention is stated.

**M-10. Is `SECURITY.md` real?** It is the unedited GitHub template ("| 5.1.x | ✅").

**M-11. How do designs reach Figma and come back?** The Figma bridge (`figmosha2/`) and other
folders exist only on the designer's machine, untracked. The card art cites a Figma file key with
no word on access.

## 3. The design system — tokens, components, patterns, docs

**D-1. Is `tokens.css` generated or hand-edited?** Its header: *"GENERATED FROM ui/kit.css AT rev
272, NOT AUTHORED… nothing added."* The same file holds desktop tokens (2026-10-19) and motion
tokens (rev 341), added by hand, and `CLAUDE.md` says to edit it directly.

**D-2. How do I get "the designer's call" on a new primitive?** The rule is clear; the process (an
issue? a PR? a chat?) is not.

**D-3. Why three names for one colour?** `DESIGN.md` says `page`, `card`, `btn2`, `slate`;
`tokens.css` says `--cream-50`, `--bg-surface`, `--text-muted`; comments map to old `kit.css` names,
and `wireframe-compat.css` still declares those as aliases.

**D-4. Why two themes, and which is primary? Does dark ship?** `README.md`: dark is "a stress test…
whether dark ships is a separate, open question". Yet the desktop header has a theme toggle,
`desktop/_qa/` has light and dark shots of every screen, a dark-only accent departure exists
(`wallet`), `concept.md` rev 5 says "keep both… following the device", backlog B-1 says dark
"cannot follow the device", and `research.html` defaults to dark under a different storage key.

**D-5. Is every file in `components/` a component?** `misc.css` (resets), `responsive.css`,
`reduced-motion.css` are cross-cutting; `wireframe-compat.css` says it "is NOT a component". Where
does a new reset or utility rule go?

**D-6. Where is the line between a component and a pattern?** `CLAUDE.md`: a pattern is a
composition on 3+ screens with "no CSS and no class of its own". `design-system/index.css`: "A
pattern that ships CSS gets its own @import here." `screen-layout`, `desktop-window`, `desktop-panel`
are component pages that read like layouts.

**D-7. What in `design-system/docs/` is generated, what is hand-written?** `build.py`: "Nothing is
written into the HTML by hand". `docs.css` and `docs.js` sit beside the generated pages and are in
fact hand-written; no list says so.

**D-8. Is `ui/kit.html` or the docs source the reference?** `_PAGES.md` points into `ui/kit.html` by
line number (500, 321, 1632…) in a 4,260-line file that changes often.

**D-9. Where is the boundary between prototype (`wf-*`) and product (`dr-*`)?** `wf-twin` (prototype
chrome) is declared in `design-system/components/desk.css`; `build.py` lets two `dr-*` names through
by exception.

**D-10. Which root classes must a page carry?** A desktop root reads
`wf-frame dr dr-screen dr-screen--fluid dr-desk dr-desk--order`; `body` carries `.dr` too. "Desktop
rules match only inside `.dr-desk`" is the only stated piece of the contract.

**D-11. Why is the docs build strict and the screens unchecked?** Nothing checks pages for stray
styles or undeclared classes. `wireframes/payment.html` line 142 carries
`style="border-radius:6px;"` (**checked**) — a px value and a radius outside the closed ramp.

## 4. Screens — phone and desktop, states, scripts

**W-1. Phone or desktop: which is current, where do I build?** "The phone is frozen" (`motion.md`,
`responsive/desktop-brief.md`) vs "Primary: mobile web, mobile-first" (`CLAUDE.md`). Do I fix a bug on
the phone at all? **Answered by the designer, 2026-10-20: «і телефон і десктоп актуально» — the phone
and the desktop are both current.** Still open for the handoff: writing that down where a newcomer
reads first, and saying which kinds of change each build takes now (the phone has been held as built
while new work went to the desktop).

**W-2. Grayscale or painted?** `CLAUDE.md` and `_conventions.md`: "Grayscale only — no colour,
shadow, icon". `wireframes/payment.html` is fully painted with SVG icons. `CLAUDE.md` says 19 screens
are still grayscale; `ui/inventory.md` says "none".

**W-3. What do the file-name suffixes mean, and how is a state reached?** `-empty`, `-error`,
`-loading`, `-aerial`, `-inspection`, plus `-filters`, `-sent`, `-edit`, `-photo`; the order of
service and state in a name is not consistent (`payment-loading-aerial` vs
`tracking-aerial-empty`). The phone reaches states through the shell's tree and state switch; the
135 desktop pages have neither.

**W-4. Which scripts must a page load?** `_wf-shell.js` (phone pages), `ui/kit.js` (47 phone + all
desktop), `desktop/_arrive.js` (all desktop), `desktop/_desktop.js` (17 desktop, and it calls itself
"TEMPORARY"). `DESIGN.md` says every twin links `_desktop.js`. No checklist for a new page's head.

**W-5. May the emptied `_desktop*.css` files be deleted?** Eight are "EMPTIED… no page links this
file", kept as pointers, in a culture of "delete nothing without permission".

**W-6. What is the tablet supposed to show?** The shell offers *Tablet* (768×1024); `DESIGN.md` says
tablet takes the desktop view; there are no tablet pages, and the docs say "Coming soon".

**W-7. What is scaffolding and what is product inside a page?** The `.meta` aside (job, exit, zones)
is scaffolding; `zlabel` labels sit inside the product frame and carry a `dr-` class. What do I drop
when porting?

**W-8. Why is `operator-jobs` desktop-only?** No phone page, no row in `_screens.md` or `sitemap.md`.

**W-9. Where is the AI assistant specified?** Every desktop twin has *Talk to AI*, `dr-assistant`,
`dr-console`; `CLAUDE.md`, `PRODUCT.md`, `sitemap.md`, `flows.md`, `voice.md` never mention it.

**W-10. Why does the desktop header differ from the documented nav?** Documented: Order · Activity ·
Help · Account. Desktop: Overview · Activity · Help, then an *Order* button and a profile chip.

**W-11. What counts as "layout" in an allowed inline style?** Positions like
`style="left:31%;top:34%"` and `style="--value:22%"` are inline; "layout" is never defined.

**W-12. What do "step 7" and "step 8" mean?** `_screens.md` "Draft · step 7"; the shell tree has
"Client · step 8"; the working process has 7 steps and step 7 is Handoff.

**W-13. Is the 8px grid a rule?** `_conventions.md`: "every spacing value is a multiple of 8 (4
allowed)"; `tokens.css` has `--len-3`, `-5`, `-7`, `-9`, `-13`, `-17`, `-41`, `-45`…

## 5. Making a change — process, done, generated files

**C-1. What does "done" mean for me, and how do I check it?** Build at 0 errors, then screens, then
record, then commit (`CLAUDE.md`); `_conventions.md`'s per-page checklist link points at the wrong
heading. Change-log lines cite browser measurements ("538 page-states identical") made with scripts
that are not in the repo. Nothing automated checks a screen.

**C-2. What do «залишаємо» and "the designer's word" mean in practice?** The approval gate is real
but has no channel (PR review, issue) and no record a developer can point to, other than quotes in
`concept.md`.

**C-3. Why are there Ukrainian quotes in English documents?** The "why" behind many decisions is the
designer's own words, untranslated; `CLAUDE.md` says all files are in English.

**C-4. What is a "rev", and where is it defined?** "rev 317", "rev 348" are everywhere; they are
entries of the `concept/concept.md` change log (from line 512), not git tags, and "rev 340" is used
twice (**checked**).

**C-5. In how many places do I record one change?** `concept.md`, `DESIGN.md`, `ui/kit.html`,
`docs/src/*.md`, `microcopy.md`, `ui/inventory.md`, `backlog.md`, `_screens.md`, `_critique.md`… no
checklist of which apply to which change.

**C-6. Which way does authority run — wireframes or system?** `design-system/_critique.md`: "The
wireframes are the design." `wireframe-compat.css`: wireframes are "the source of truth and not
edited". `CLAUDE.md` (2026-10-17): system first, the screen is put right.

**C-7. Who finishes the `wireframe-compat.css` migration?** "When the prototype layer is taught the
new names, this file goes." No owner, no ticket.

**C-8. May I fix the known open defects?** `motion.md`: "Open: the phone took rev 342… the
designer's call"; "Open: T-1". Which wait on her, which may a developer take?

**C-9. Is `responsive/desktop-brief.md` still a guide?** It tells you to put new screens in
`_desktop-<group>.css` with a `dk-` prefix and lists "all 133" pages — now empty pointers, a reversed
rule and 135 pages.

## 6. Product and language

**P-1. Where is the Ukrainian UI?** The brief says English primary, Ukrainian secondary; there is no
Ukrainian string table, `microcopy.md` is English-only, no page is `lang="uk"`.

**P-2. Is this a real product or a portfolio?** `PRODUCT.md` § Evidence (~line 45): "an
educational / portfolio design project… every name, number, price… is synthetic". Absent from
`README.md`; it changes everything about handoff.

**P-3. What are MJ-1, RJ-C2, EJ-2, C-04, O-1?** Defined in `research/jtbd.md` and
`research/target-audience.md`; never said where they first appear.

**P-4. Which pages are product and which are documentation chrome?** `research.html` uses Inter and
JetBrains Mono and defaults to dark; `index.html` is "deliberately single-theme… off the DESIGN.md
ramp". Both break the product's own rules, on purpose, with no rule saying so.

**P-5. Which documents describe the product, and which present the project?** `landing.md` (and
`landing.html`) read like product copy and say "there is no desktop view of DRON". **Answered by the
designer, 2026-10-20: `landing.md` is only for presenting the project; it has no bearing on the
desktop.** Nothing in the file or the README says so, so a newcomer reads it as a spec.

## 7. Handoff to real code

**H-1. Is this the product or a prototype, and what ships?** `handoff/` holds only `.gitkeep`; README:
Handoff "Not started". No target stack; no word on whether `tokens.css` and the `dr-*` CSS ship as is.

**H-2. How does data or a back end connect?** Everything is static HTML; flows are page links.
`sitemap.md` has entities in design terms only — no data contract, no API notes.

**H-3. Which browsers are supported?** Never stated, while 21 component files use `:has()`, 8 use
container queries, and `text-wrap: balance` is used.

**H-4. What is published, and where?** `.github/workflows/deploy-pages.yml` copies
`wireframes/*.html` but **not `wireframes/desktop/`** (**checked**), while the published docs link
into it; its comments are stale ("the painted wireframes load `../ui/kit.css`"); the last deploy was
2026-10-17.

**H-5. Where do icons come from in real code?** Every page inlines its SVG paths; `concept.md` §0.2
says "SF Symbols on mobile + a matching custom set on web"; there is no icon source or sprite.

## 8. Stale or contradictory information

| # | Claim | Where | Contradicted by |
|---|---|---|---|
| S-1 | "80 HTML pages" | `README.md` l.70; `PRODUCT.md` | `CLAUDE.md` "134"; tracked: 137 phone + 135 desktop |
| S-2 | "all 127 pages link this file" | `design-system/components/index.css` | "84 files", "83 pages", "125 screens", "128" elsewhere |
| S-3 | "the 31 component files" | `design-system/index.css`; `README.md` | 53 files imported |
| S-4 | `patterns/`, `docs/`, `examples/` "empty for now" | `design-system/index.css`; `README.md` l.26 | 13 patterns, 114 docs files, 1 example |
| S-5 | "61 live component pages" | `README.md` l.27 | `CLAUDE.md` 82; the build prints 83 |
| S-6 | "most recently rev 284" | `README.md` l.118 | the change log reaches rev 348 |
| S-7 | ~~"there is no desktop view of DRON"~~ | `landing.md` | **Not a contradiction** (the designer, 2026-10-20): `landing.md` presents the project and has no bearing on the desktop build. What is left is a gap, P-5 |
| S-8 | "19 screens still grayscale" | `README.md`, `CLAUDE.md` | `ui/inventory.md`: "none"; 50 vs 53 screens |
| S-9 | twins link `_desktop.js` | `DESIGN.md`; `CLAUDE.md` | 17 of 135; all load `_arrive.js` |
| S-10 | tokens "GENERATED… nothing added" | `tokens.css` header | desktop and motion tokens added since |
| S-11 | "Grayscale only — no colour, shadow, icon" | `CLAUDE.md`; `_conventions.md` §1 | painted pages with SVG icons |
| S-12 | the wireframes load `../ui/kit.css` | `deploy-pages.yml`; `ui/shell.html` | no page links `kit.css` |
| S-13 | process "4. `tokens/`, 5. `components/`" | `README.md`, `CLAUDE.md`, `PRODUCT.md` | no root `components/`; `tokens/` is an audit |
| S-14 | "the checklist of all 133" | `responsive/desktop-brief.md` | 135 desktop pages |
| S-15 | two entries "rev 340" | `concept/concept.md` | revs are meant to be unique |
| S-16 | `examples/` never introduced | `README.md` | the deploy copies `examples/*.html` |
| S-17 | "see it" at a private claude.ai artifact URL | `ui/inventory.md` l.7 | a newcomer has no access |

## 9. `CLAUDE.md`, read as a newcomer

- **Would they know it is for them?** Probably not. `README.md` names it as "the Brief", but it
  speaks to an assistant ("every question put to the designer opens with…", "commit at once; push
  only on her word") and mixes a product brief, standing personal rules and change history.
- **What it assumes you already know:** who "the designer" is and how to reach her; what "Fauna
  Robotics language", "Direction 02 «Studio»", "Signal Green", "Designer's Taste §0" are; that "rev
  N" is a `concept.md` entry; that the phone is frozen (not stated in it); what "concurrent sessions"
  and the auto-commit are.
- **What a developer needs from it:** the clearest statement of the current workflow — *Contributing
  to the system* and its table of where each new thing goes. That belongs in a developer-facing guide
  as well, not only in an agent brief.

---

## What the handoff has to produce, from this list

Read as an order, the items group into six documents:

1. **A developer README** — what this is (a design prototype and portfolio, P-2), how to run it
   (`serve.py`, G-2…G-4), the repo map with live vs archive (M-1…M-11), and the current status
   (the phone and the desktop are both current, W-1), and which documents present the project
   rather than describe the product (`landing.md`, P-5).
2. **A contributing guide** — the change order, «залишаємо» and how approval is recorded, "done" and
   how to check it, where a change is recorded (C-1…C-9), and what a rev is (C-4).
3. **The page contract** — root classes, scripts, file naming and states, scaffolding vs product
   (D-10, W-3, W-4, W-7, W-11).
4. **The system's boundaries** — token tiers and how a primitive is approved, generated vs
   hand-written, component vs pattern, `wf-*` vs `dr-*`, themes and which is primary (D-1…D-9, D-4).
5. **The handoff to code** — stack, what ships, data and back end, browser support, icons, deploy
   (H-1…H-5).
6. **A recount** — one place where the counts live and are generated, so S-1…S-17 cannot drift again.
