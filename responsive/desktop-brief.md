# Desktop twins — the brief every builder follows

Read this whole file before you write anything. The designer approved the plan on 2026-10-18.

## What you are building

Every phone page in `wireframes/<name>.html` gets a **desktop twin** `wireframes/desktop/<name>.html`, one file
for one file. The checklist of all 133 is `responsive/desktop-plan.md`; you own one group of it.

- **The look:** `responsive/_preview-desktop-ai.html` (open its source; its states are `?order`, `?pay`, `?flying`,
  `?done`, `?light`). The live map is the ground of the whole window, the header floats on it, panels are
  translucent material, a step of a flow is a centred window over the map.
- **The reference twin:** `wireframes/desktop/listings.html`. Copy its `<head>`, the map ground, the veil and the
  header exactly. Every twin starts from that skeleton.
- **Shared CSS:** `wireframes/desktop/_desktop.css` (read it: `.dk`, `.dk-veil`, `.dk-window`, `.dk-window--wide`,
  `.dk-window__title`, `.dk-window__lead`, `.dk-window__head`, `.dk-dim`, `.dk-panel`, `.dk-panel__title`,
  `.dk-talk`, `.dk-status`, `.dr-tally--link`, `.wf-twin`). **Do not edit `_desktop.css`** — other builders run at the
  same time. Anything new your screens need goes in **your own file**, `wireframes/desktop/_desktop-<group>.css`,
  linked after `_desktop.css` on your pages only.
- **Components:** use `design-system/components/*.css` classes (`dr-*`). Read `ui/kit.html` and the components you
  use. The wide ones: `dr-whead*`, `dr-iconbtn`, `dr-profilechip`, `dr-material`, `dr-stat*`, `dr-barchart*`,
  `dr-tally*`, `dr-live`, `dr-assistant*`, `dr-svc*`, `dr-fly*`, `dr-talk`, `dr-mapground*`, `dr-place`,
  `dr-console*`. Every phone component (`dr-btn`, `dr-rows`, `dr-offers`, `dr-field`, `dr-card`, `dr-rail`, …)
  works on desktop too. Never invent a `dr-*` class; a new class of yours is prefixed `dk-`.

## Hard rules

1. **Never edit, move or delete anything outside `wireframes/desktop/`.** The phone pages are frozen. You may read
   anything.
2. **Do not commit, push or run git that changes state.** The lead commits.
3. **Do not open a browser** (Playwright is shared by all builders and would collide). Check your pages by reading
   them back and with `curl -s http://localhost:8765/wireframes/desktop/<name>.html` (the server is running).
4. **Every step and every state stays.** Read each phone page completely — its copy, its states, every control and
   every link. The twin carries the same content and the same actions in the desktop layout. Keep every string
   word for word (it was checked against `voice.md`); do not add marketing copy. Keep the HTML comments short.
5. **Links:** every link that pointed to `X.html` points to the twin `X.html` in the same folder (`desktop/`).
   Assets are `../../assets/...`. Each page ends with `<a class="wf-twin" href="../<name>.html">Phone view</a>`
   then `<script src="../../ui/kit.js"></script>`. If the phone page used a drawer (`.dr-sheet` with
   `aria-controls`), keep it: on desktop it opens as a centred dialog automatically.
6. **Both themes:** the page must work light and dark. Colour only through semantic tokens
   (`--text-primary`, `--text-muted`, `--bg-*`, `--color-action`, `--border-*`, `--bg-material`…), never a hex.
   Green is a fill, never text, except `--text-accent-wide`. **One green control per screen.**
7. **Standards:** text contrast ≥ 4.5:1 (it is, if you use the roles); every control ≥ 44px tall; every control
   keeps a visible `:focus-visible` ring (the components have it — don't remove outlines); icon-only buttons get
   an `aria-label`; one `<h1>` per page; landmarks (`header`, `nav`, `main`).
8. **English only** in files.

## The skeleton

```html
<body class="dr">
<div class="wf-frame dr dr-screen dr-screen--fluid dk">
  <div class="dr-mapground" role="img" aria-label="Live map of Kyiv">…drone dots…</div>
  <div class="dk-veil" aria-hidden="true"></div>
  <header class="dr-whead">…</header>
  … the page …
</div>
<a class="wf-twin" href="../NAME.html">Phone view</a>
<script src="../../ui/kit.js"></script>
</body>
```

**Header** — copy it from the reference. Set `aria-current="page"` on the section the screen belongs to.
- Client nav: Overview → `listings.html`, Activity → `order-history.html`, Help → `support.html`,
  Account → `account.html`. The end: Order (`listings-map.html`), search, theme (`data-theme-cycle`),
  notifications (`notifications.html`), the profile chip.
- Operator nav: Jobs → `operator-listings.html`, Earnings → `wallet.html`, Ratings → `ratings.html`,
  Account → `operator-account.html`. The end: theme, notifications (`operator-notifications.html`), the profile
  chip (operator photo `../../assets/people/thumbs/operator.png`, "Andriy M." / "Operator · Kyiv"). No Order button.
- Signed-out screens (welcome, sign in, onboarding, role select, operator signup / verification / profile
  setup / fee terms): the header holds the brand and the theme button only.

## How a phone screen becomes a desktop screen

| Phone screen | Desktop |
|---|---|
| A tab root (Activity, Help, Account; Jobs, Earnings, Ratings, Account) | the map, the header with that section current, the content in a `.dk-panel material` in the middle; side rails (`.dr-console__rail` or plain material cards at the edges) only if the screen has a natural side summary |
| A step of a flow (setup, time slot, review, payment, brief, checklist, upload, withdraw, rate, report issue…) | the map, `.dk-dim`, the step's content in a `.dk-window dr-material` (back control in `.dk-window__head` as a round `dr-iconbtn` with `aria-label="Back to …"`, title `.dk-window__title`), Talk to AI in `.dk-talk` on client steps |
| Waiting / tracking / confirmed | the route and the flying drone on the map (see the preview's `?flying`: dotted route, the green swaying drone along `offset-path`), a `.dk-status` live line, the order card at the side |
| An outcome (delivered, inspection report, resolution, paid) | a `.dk-window` like the preview's `?done`: the mark, the fact, the photo, the record rows, the next step |
| Signed-out entry | a `.dk-window` over the map, no nav |
| A call or a chat | a `.dk-window--wide` over the map |
| A state file (`-empty`, `-error`, `-loading`) | the same desktop layout as its base screen, with the phone state's content (skeletons, the message, the retry) in the same place |
| A service variant (`-aerial`, `-inspection`) | the same layout as the base, with that service's content |

## When you finish

Reply with: every twin you wrote (path), any phone link whose target is outside your group (list them — the
lead checks they exist at the end), anything in a phone page you could not carry over and why, and the
classes you added in your group CSS. Mark your rows done in nothing — the lead updates `desktop-plan.md`.
