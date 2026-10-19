# DRON — Motion

How DRON moves. Motion here is an interface's, not a presentation's: short, moderate, and always
for a reason. Every value is a motion token in `design-system/tokens.css`, every rule lives in the
component it moves, and every movement does one of three jobs. **Built for the desktop:** the phone
is frozen as built (the designer, 2026-10-18), and everything from rev 344 on is scoped to the
desktop frame. **One exception, found while writing this page:** rev 342 retimed four shared
components (button, switch, pager, toast) without that scope, so the phone took the new timings too;
see *Decisions and departures*.

**The three jobs.** An animation does one of these, or it is not added:

1. **Connect** — it shows how two states relate: where the new one came from, where it goes back
   to. A sheet rises from the edge it closes into; a window arrives; the selected fill moves to
   the item chosen.
2. **Status** — it shows that a process is running, or has just ended. A skeleton pulses while a
   list loads; the countdown empties; the drone flies the route.
3. **Answer** — it says the action was received, before the result arrives. A button sinks under
   a press; a row's fill changes under the pointer.

**The rule:** an animation that does none of the three is not added. Decoration, attention-seeking
and "making it feel alive" are not jobs. A proposed animation names its job in the change that adds
it; one that cannot is declined. The moments where motion could do a job, screen by screen, are
listed in `animations/motion-inventory.md`.

## The scale — three durations, three curves, two distances

Primitives in `tokens.css`, § *PRIMITIVE / MOTION*. Where the build already spent a number, the
token reads it rather than writing it again. Click a track to play it again.

| Token | Value | For |
|---|---|---|
| `--dur-fast` | .12s | a micro-response: hover, press. Answer |
| `--dur-base` | .2s | a change inside a component; a state's content arriving. Connect |
| `--dur-slow` | .32s | an element entering: a window, a sheet, a toast. Connect |
| `--ease-standard` | `cubic-bezier(.4,0,.2,1)` | most movement, from one resting place to another |
| `--ease-enter` | `cubic-bezier(.22,.61,.36,1)` | appearing: arrives fast, settles slowly |
| `--ease-exit` | `cubic-bezier(.4,0,1,1)` | leaving: starts slowly, leaves fast |
| `--move-sm` | 4px | a nudge: a lift on hover, an error arriving |
| `--move-md` | 12px | the travel of an entering element, a success settling |

### The three durations, side by side

```html
<div data-motion-demo="replay" class="dsd-mdemo"><p class="dsd-mdemo__k">--dur-fast .12s</p><div class="dsd-mtrack"><span class="dsd-mdot" style="animation-duration:var(--dur-fast);animation-timing-function:var(--ease-standard)"></span></div><p class="dsd-mdemo__k">--dur-base .2s</p><div class="dsd-mtrack"><span class="dsd-mdot" style="animation-duration:var(--dur-base);animation-timing-function:var(--ease-standard)"></span></div><p class="dsd-mdemo__k">--dur-slow .32s</p><div class="dsd-mtrack"><span class="dsd-mdot" style="animation-duration:var(--dur-slow);animation-timing-function:var(--ease-standard)"></span></div></div>
```

### The three curves, slowed to 1.1s so the shape shows

```html
<div data-motion-demo="replay" class="dsd-mdemo"><p class="dsd-mdemo__k">--ease-standard</p><div class="dsd-mtrack"><span class="dsd-mdot" style="animation-duration:var(--time-1-1);animation-timing-function:var(--ease-standard)"></span></div><p class="dsd-mdemo__k">--ease-enter</p><div class="dsd-mtrack"><span class="dsd-mdot" style="animation-duration:var(--time-1-1);animation-timing-function:var(--ease-enter)"></span></div><p class="dsd-mdemo__k">--ease-exit</p><div class="dsd-mtrack"><span class="dsd-mdot" style="animation-duration:var(--time-1-1);animation-timing-function:var(--ease-exit)"></span></div></div>
```

No curve overshoots, so nothing in DRON springs or bounces.

### The two distances

```html
<div data-motion-demo="replay" class="dsd-mdemo dsd-mdemo--row"><div class="dsd-mrise"><span class="dsd-mbox" style="--rise:var(--move-sm)"></span><p class="dsd-mdemo__k">--move-sm 4</p></div><div class="dsd-mrise"><span class="dsd-mbox" style="--rise:var(--move-md)"></span><p class="dsd-mdemo__k">--move-md 12</p></div></div>
```

**Moderate on purpose.** The longest step is .32s: anything longer makes the user wait for the
interface. An exit is not slower than its entrance, because a thing leaving needs no attention.

## Microinteractions — hover, press, focus

Each lives in its component's file, scoped to the desktop frame (`.dr-desk`), so animating a
component once animates it everywhere it stands. Each component page shows it live in its
*Motion (desktop)* section.

| Job | Duration · curve | What moves | Components |
|---|---|---|---|
| Answer | `--dur-fast` · `--ease-standard` | fill, colour, edge; a press sinks to .99 | [Button](button.html), [Desktop header](wide-header.html), [Assistant](assistant.html) (service cards, Send, Talk to AI), [Date picker](date-picker.html), [Disclosure row](disclosure-row.html), [Picker row](picker-row.html), [Tally card](tally-card.html), [Operator home](operator-home.html), [Pay list and share channels](pay-list.html), [Field](field.html), [Text area](text-area.html), [Upload zone](upload-zone.html), [Hanging cards](hanging-cards.html) (lift `--move-sm`) |
| Connect | `--dur-base` · `--ease-standard` | the selected fill moves to the item chosen | [In-page tabs](in-page-tabs.html), Jobs tabs in [Hanging cards](hanging-cards.html), [Language switch](language-switch.html), [Switch](switch.html), [Pager](pager.html) |

**Focus.** The ring is drawn on the first frame (`WCAG 2.4.7`); only its `outline-offset` settles
from 0 to 2 over `--dur-fast`. Motion never delays where focus is.

## Windows and states — how a screen arrives

**A window arrives.** A step's window rises `--move-md` and fades in over `--dur-slow` on
`--ease-enter`, on `translate`, so its centring `transform` is untouched. Tab roots (Activity,
Jobs, Order) are panels and do not move: switching tabs stays instant (`HIG · Tab bars`).

**The same screen keeps its window.** When the page before was the same screen in another state
(`payment` → `payment-error`, `withdraw-loading` → `withdraw-sent`), the window stays and only its
content arrives, **in the tone of the state's words** (`voice.md` § Microcopy).
`wireframes/desktop/_arrive.js` sets the class; the motion is in [Desktop window](desktop-window.html),
where all four tones play live.

| Tone | Words | Duration | Curve | Amplitude | Direction |
|---|---|---|---|---|---|
| **Error** | what happened + what to do; plain, no "!" | `--dur-fast` | `--ease-standard` | `--move-sm` | up, in place |
| **Empty** | why it is empty + one way out | `--dur-base` | `--ease-standard` | 0 | a fade |
| **Loading** | names what is loading | `--dur-base`, then the loops | `--ease-standard` | 0 | a fade |
| **Success** | the fact, then the next step | `--dur-base` | `--ease-enter` | `--move-md` | up, settling |
| **Back to the form** | the form as it was | `--dur-base` | `--ease-standard` | 0 | a fade |
| **List → detail** | | `--dur-slow` | `--ease-enter` | `--move-md` | from the list's side |

### Error and empty, on the note on the map

```html
<div data-motion-demo="replay" class="dsd-mdemo"><div class="dr-desk dsd-mstage"><section class="dr-mapnote dr-material dr-mapnote--arrive-error" aria-label="Live tracking"><div class="dr-msg" role="alert"><p class="dr-msg__title">Live tracking lost</p><p class="dr-msg__body">We've lost the live signal from the operator's device. Your order is still active.</p></div></section></div><div class="dr-desk dsd-mstage"><section class="dr-mapnote dr-material dr-mapnote--arrive-empty" aria-label="Live tracking"><div class="dr-msg" role="status"><p class="dr-msg__title">Running a few minutes late</p><p class="dr-msg__body">Traffic near the drop-off is slowing your operator. They're still on the way.</p></div></section></div></div>
```

Above, the error: short and small. Below, the empty state: a fade, no movement. Click to play again.
The note stands in the middle of the screen (the designer, rev 346).

**List → detail.** The desktop has no list and detail side by side in the centre. The one place a
list stands beside the detail it opens is the right rail (*Your work*): a window opened from there
comes in from the right, the side the list is on.

**The skeleton leaves.** Where content replaces it in place (payment's *Payment confirmed*), the
placeholder fades out over `--dur-base` on `--ease-exit` before it is removed
([Skeleton](skeleton.html)).

## Loops — status that runs

A loop is the one motion that repeats, so it has to report something real and repeat evenly.

| Loop | Time | Curve | What it reports |
|---|---|---|---|
| `dr-pulse` | 1.4s | `ease-in-out` | a skeleton, 1 → .5 → 1, while content loads |
| `dr-spin` | 1.1s | `linear` | system work with no object of its own; 0.91 Hz |
| `dr-ping` | 1.8s | `--ease-out` | a live status disc: the order is in progress |
| `dr-up` | 1.6s | `--ease-out` | a file going up, the arrow leaving the tray |
| `dr-flyer-flight` | 7s | `--ease-flight` | the drone flying the route on desktop tracking |
| `dr-countdown` | 10s | `linear` | the job offer's time running out ([Countdown](countdown.html)) |

Each was checked keyframe by keyframe for an even repeat: `dr-ping` and `dr-up` restart while they
are at opacity 0, so the restart cannot be seen. Every loop stops under reduced motion; the
countdown steps instead of gliding.

## Accessibility

- **`WCAG 2.3.3` Animation from Interactions** and **`HIG · Motion`** (make motion optional;
  replace movement with a dissolve): under `prefers-reduced-motion: reduce` both `--move-*` tokens
  are 0, so everything that travels fades in place. Durations stay, because a fade still says that
  something changed.
- **`WCAG 2.2.2` Pause, Stop, Hide:** nothing on the scale runs longer than 5s. The loops that do
  are status and stop with their process, with one recorded departure (below).
- **`WCAG 2.3.1` Three Flashes:** nothing flashes; the fastest loop is 0.91 Hz.
- **`WCAG 2.4.7` Focus Visible:** focus is never animated into view; the ring is there on the first
  frame.

## Decisions and departures

- **The assistant's three loops stay as built** (rev 343, the designer's call after a live compare):
  the rings (24s), the light round *Talk to AI* (3.2s) and the drone mark's sway run without end and
  have no stop control on the page. That fails `WCAG 2.2.2` (A). Declined: remove them; turn only
  while the assistant answers; a pause control.
- **The operator card rises into place** on `order-confirmed` (rev 344), after first being kept as an
  instant swap.
- **Toast and hanging card** moved onto the scale in rev 342; **countdown** built in rev 344
  (backlog B-5).
- **Open: the phone took rev 342.** The button's hover (.15 → .12s), the switch knob and the pager
  dot (.12 → .2s) and the toast (in .32s from 12, out .2s) were retimed in `button.css`, `form.css`,
  `media.css` and `toast.css` with no `.dr-desk` scope, so the frozen phone changed with the desktop.
  Found on 2026-10-20 while writing this page. The designer's call: keep it on the phone, or scope
  the four rules to the desktop and give the phone back its rev 341 timings.
- **Open: T-1.** On desktop `job-checklist-error` and `result-upload`, an error is shown as a toast,
  which arrives slowly, travels 12 and leaves after 4s; `voice.md` says an error is never a toast.
  The full list of tone mismatches is `animations/state-tone.md`.
- Every revision, with the designer's words, is in `concept/concept.md`, revs 341–346.
