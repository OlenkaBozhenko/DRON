# Desktop into the design system — brief for the agents (2026-10-19)

The designer: *«все готово, тепер я хочу добавити в дизайн систему ще нові токени, компоненти і
патерни із десктоп та використай їх на десктоп, але так щоб зовнішній вигляд не змінився ні для
мобільного ні для десктопу … спочатку токени, потім компоненти, усі вирівнювання, doc, стани — все
як вже організовано в дизайн системі. Це не зміни, це доповнення.»* And: *«Wide shell в дизайн
системі не вірно зроблено, бо це була помилка із неправильного desktop.»*

This is her «залишаємо» for the desktop twins: the temporary `wireframes/desktop/_desktop*.css`
move into `design-system/`, and the twins consume the system.

## The one hard rule: not one pixel changes

- Every phone page and every desktop twin, light and dark, must render **identically** before and
  after. The gate, run from `.playwright-mcp/pixel/`: `node shoot.js --gate gold <new-dir>` (use a
  fresh folder name each time, e.g. `p1-a`, `p1-b`; `rm -rf` is not allowed here). It shoots all 538
  pages (~8 min), reshoots any that differ up to twice (one-off render flicker), and prints
  `IDENTICAL 538/538` or the list that still differs. A ±3 colour-level noise tolerance is built in
  (glass blur). `gold/` is the baseline, taken before any change. Run the gate after every phase and
  before every commit. A phase that is not IDENTICAL is not done — find the cause and fix it. To look
  at a difference, open both PNGs (`gold/<name>` and `<new-dir>/<name>`).
- The dev server must be running at `http://localhost:8765` (`python serve.py 8765` from the repo
  root). Do not start a second one.

## Read first

`CLAUDE.md` (Design system, Tokens, Contributing to the system, UX principles / proximity),
`DESIGN.md` § Layout › Wide screens, `design-system/docs/src/_PAGES.md`, one existing component page
in `design-system/docs/src/` (e.g. `stat-card.md`) as the model, `design-system/patterns/*.md` and
`design-system/docs/build.py` (what the build checks).

## Phases, in order — one agent per phase, each finishes and commits before the next starts

1. **Tokens.** Every literal in `wireframes/desktop/_desktop*.css` (px, %, colours, rgba, times,
   shadows, font sizes and weights) becomes a token in `design-system/tokens.css` at the tier that
   owns it: an existing `--len-*` / `--pct-*` / `--num-*` / `--type-*` / semantic colour where one
   already holds that exact value; otherwise a new one, named like its neighbours, with a dark
   counterpart in the `[data-theme="dark"]` block for every colour role. The desktop CSS then reads
   `var(--…)` everywhere. Values are copied, never rounded: 300px stays 300px. New colour pairs are
   measured and written into `DESIGN.md` § Colors. Gate: IDENTICAL.
2. **Components.** The desktop rules move out of `wireframes/desktop/` into
   `design-system/components/` — one file per component, imported from `components/index.css` **after**
   everything already there, in the order `_desktop.css` and the group files declare them, so the
   cascade is unchanged. Where a desktop class is a component of its own (window, panel, foot,
   scroll, rail, float card, review card, drop zone, jobs tabs, slider nav, toast placement, brand
   link, stat brand, assistant home …), it gets the system name `dr-…` (rename `dk-x` → `dr-x`
   across the twins and the CSS together, checking no `dr-` name collides with an existing one).
   Where a desktop rule only tunes an existing component on a wide screen, it goes into that
   component's file under its wide section. The group files `_desktop-*.css` empty out the same way.
   The twins then link only `design-system/index.css` (and `_desktop.js` until it is ported).
   Gate: IDENTICAL.
3. **Docs and states.** Every new component gets `design-system/docs/src/<slug>.md` with all five
   sections (Anatomy, Variants, States, When to use, Rule and Anti-rule), a row in `_PAGES.md` in the
   *Wide screens* group, and a specimen in `ui/kit.html`. States in both themes; a control that can be
   unavailable gets a disabled rule (only if the twins already show one — never invent a look).
   **Wide shell is replaced**: the page documents the real desktop shell (header, rails, the centred
   window or panel with head / scroll / foot, Talk to AI), not the phone shell stretched. Rules that
   only served the stretched phone shell are removed **only if** the gate stays IDENTICAL without them.
   `python design-system/docs/build.py` must report `0 errors`.
   **Every existing wide-screen page is audited against the real twins** (her words: *«виправ в дизайн
   системі де ти бачиш неспівпадіння для desktop, ось тут також наприклад Wide workspace»*): Wide shell,
   Material panel, Stat card, Assistant, Map ground, Wide grid, Wide header, Bar chart, Tally card, Place
   field, Console, and the `wide-workspace` pattern. Each describes and shows what
   `wireframes/desktop/` actually renders — specimens copied from a named twin, not the stretched phone
   column with a tab-bar navigation (the twins' header nav is Overview · Activity · Help for the client,
   Overview · Jobs · Earnings · Ratings for the operator; Order is a green button, Account the profile
   chip). The designer's rule for this (2026-10-19): *«те що не відповідає існуючому
   десктоп вю, що я правила, з дизайн системи прибирається, а нове добавляється»* — whatever in the
   wide-screen part of the system does not match the desktop twins as she corrected them is **removed**
   (its docs page, its `_PAGES.md` row, its kit specimen, its pattern, and its CSS once the gate shows
   nothing renders it), and what the twins use is **added**. Phone components and their pages are not
   touched. List every mismatch found and how it was resolved in the commit.
4. **Patterns.** A desktop composition becomes `design-system/patterns/<slug>.md` only if it stands
   on three or more screens (states folded): e.g. *Desktop step window* (head, scroll, foot),
   *Desktop tab panel*, *Hanging cards over the map*, *Desktop message window*. Build: 0 errors.
5. **Record.** `DESIGN.md` § Layout › Wide screens, `CLAUDE.md` (the desktop section: the twins now
   consume the system; the temporary exception is over), a line in `concept/concept.md`'s change log
   (rev 324+) with her words and the gate result, `responsive/desktop-plan.md`.

## Rules that do not bend

- No change to any phone page, phone component rule or token value. Additions only.
- A screen carries no `<style>` block and no class no component declares.
- Commit after each phase with specific paths (never `git add -A`; the repo has untracked junk —
  pngs, `.playwright-mcp/`, `_compare-*`, `figmosha2/` — that is never staged). Do not push.
- Do not delete `design-system/docs/__pycache__`. Do not run `git checkout` / `git reset`.
- All files in English.
