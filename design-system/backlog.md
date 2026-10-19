# Design system backlog

What the system could not supply when a screen was built from it alone. **Each entry is an order
for the system, not an exception for a screen:** nothing listed here was drawn by hand on the
screen that found it. When an entry is built, it follows *Contributing to the system* in
`CLAUDE.md` — into `tokens.css`, `components/` with its `docs/` page, or `patterns/` — and its
line here moves to **Done** with the revision that built it.

How entries arrive: a screen is assembled in `design-system/examples/` from existing components,
patterns and tokens only — no `<style>`, no `style` attribute, no class a component does not
declare. Whatever is missing is written here, with the job that asked for it.

---

## Open

### B-1 · The dark theme cannot follow the device by itself

- **Found by:** `examples/operator-profile.html` (2026-10-17).
- **What is missing:** the dark build is keyed only on `[data-theme="dark"]` in `tokens.css`, and
  only a script sets that attribute — the wireframe shell (`_wf-shell.js`) or the docs' switch.
  A page that links `design-system/index.css` and nothing else always renders light. There is no
  `@media (prefers-color-scheme: dark)` anywhere in the package.
- **Why it matters:** `docs/src/why.md` says the dark theme *follows the device setting* (`HIG · Dark Mode`: an app respects the system appearance). Without the shell, that is
  not true of the system.
- **What the example did instead:** nothing on the screen. It renders light; dark was verified by
  setting the attribute from outside.
- **Belongs in:** `tokens.css` — the dark semantic block also applied under
  `@media (prefers-color-scheme: dark)` for a page with no explicit `data-theme`, so an explicit
  choice still wins. Needs the designer's call on whether the device or the stored choice leads.

### B-2 · The profile head has no line for the rating and the job count

- **Found by:** `examples/operator-profile.html`, the client reading the operator who is coming.
- **What is missing:** `.dr-profile` carries a photo, a name and credential chips, and no stat
  line. The rule that drew one, `.dr-profile__rating`, is in the archive (`ui/kit.css:2789`) and was
  never ported: `components/avatar.css` names the class only inside a `:has()` test, so a screen
  that writes it gets an unstyled span.
- **Why it matters:** `RJ-C1` — confirm the person coming is real and qualified — asks for the
  rating and the job count *beside the name, no tap* (`jtbd.md` Table 2; `sitemap.md` CE-5
  "Name, photo, rating (X.X ★ · N reviews)").
- **What the example did instead:** the rating and the job count are the first two rows of the
  *Record* panel (Labelled detail rows), one zone below the name. Correct, but not beside it.
- **Belongs in:** `components/avatar.css` + `docs/src/profile-head.md` — port `.dr-profile__rating`
  from the archive as a variant of the profile head, with its States, or decide it stays a row.

### B-3 · No stage to present a screen outside the wireframe shell

- **Found by:** `examples/operator-profile.html`.
- **What is missing:** `.dr-screen` is a fixed 375 × 812 frame. On its own page it sits in the
  top-left corner on the browser's default 8px margin; placing it on a page ground is done by
  the wireframe shell (`_wireframe.css`, `_wf-shell.js`) and by the docs' `.dsd-plate`, neither of
  which is part of the package.
- **Why it matters:** an example, a landing (`landing.md`) or a review page that shows one screen
  has to write layout CSS of its own — exactly what a screen built from the system must not do.
- **What the example did instead:** left the frame where it falls. No style was added.
- **Belongs in:** `components/frame.css` + a docs page — a presentation stage (e.g. `.dr-stage`:
  the page ground, the screen centred, a gutter) that is not part of any product screen.

---

## Done

### B-5 · A countdown for a decision with a fixed time — **done, rev 344**

- **Found by:** `animations/motion-inventory.md` §8 (2026-10-19): `job-offer` gave the operator 10
  seconds to accept (`flows.md` MJ-2) and showed them as a still figure.
- **Chosen:** the designer, on the live compare: *words + a bar that empties*.
- **Built:** `components/countdown.css` (`.dr-countdown` · `__bar` · `__fill`), desktop only, page
  `docs/countdown.html`, kit specimen; tokens `--time-10` and `--bg-meter`. Words count 10 → 0 in
  `_desktop.js` (`role="timer"`), at 0 *Offer expired*; the bar empties linear over 10s, in steps
  under reduced motion. Measured: the remaining part on its track **11.54:1** light / **19.26:1**
  dark, on the window ground **17.40:1** / **12.48:1** (`WCAG 1.4.11`); words and bar 8 apart.
  On `wireframes/desktop/job-offer` and `-inspection`. The phone is frozen and keeps its still
  figure.

### B-4 · The profile head's read-only form is undocumented — **done, rev 312**

- **Found by:** `examples/operator-profile.html`.
- **What is missing:** nothing in CSS — `.dr-profile__photo` without `.dr-avatar-edit` renders a
  plain 120 photo, and the example uses it. But `docs/src/profile-head.md` shows only the owner's
  head with the edit disc, so the read-only head someone else's profile needs cannot be found.
- **Belongs in:** `docs/src/profile-head.md` — a *Read-only* variant (a `<span>`, no link, no disc,
  `alt` naming the person).
- **Done:** `docs/src/profile-head.md` has the *Read-only* variant (the designer: *«шапка профілю може бути без кнопки редагувати якщо це перегляд профілю»*) and `ui/kit.html` its specimen.
