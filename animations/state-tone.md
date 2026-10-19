# State tone: how a screen's state arrives

**Status:** proposal, 2026-10-20, shown live on `_compare-state-tone.html`. Desktop only (the phone
is frozen). Nothing here is built until the designer says so.

**Sources:** `voice.md` § Microcopy (the state rows: error, empty, loading, success, toast) and
`animations/motion-inventory.md`.

## The rule

A state's motion takes the tone of its words. Four quantities set the tone: **duration, curve,
amplitude, direction**. Every value is a motion token. No curve in the system overshoots, so
nothing springs or bounces. Under reduced motion both distances are 0, and every tone becomes a
fade (`WCAG 2.3.3`).

| Tone | Words (`voice.md`) | Duration | Curve | Amplitude | Direction |
|---|---|---|---|---|---|
| **Error** | what happened + what it means + the next action; no apology, no joke, no "!" | `--dur-fast` .12s | `--ease-standard` | `--move-sm` 4 | up, in place |
| **Empty** | why it is empty + the one way out; no pep talk | `--dur-base` .2s | `--ease-standard` | 0 | none, a fade |
| **Loading** | names the thing being fetched | `--dur-base` .2s in, then the built loops | pulse `ease-in-out`, spinner `linear` | 0 | none |
| **Success** | the fact, then the next step; no celebration | `--dur-base` .2s | `--ease-enter`, soft | `--move-md` 12 | up, settling |
| **Back** to the form (after an error) | the form as it was | `--dur-base` .2s | `--ease-standard` | 0 | none, a fade |
| **List → detail** (a rail's list opens a window) | | `--dur-slow` .32s | `--ease-enter` | `--move-md` 12 | from the list's side |

**The same screen keeps its window.** When the page before was the same screen in another state
(`payment` → `payment-error`, `withdraw-loading` → `withdraw-sent`), the window does not arrive
again; only its content arrives, in the new state's tone. A different screen still arrives as a
window (`--dur-slow`, rev 345).

**Loading loops checked for an even repeat**, keyframe by keyframe: `dr-pulse` 1 → .5 → 1 over
1.4s `ease-in-out`, continuous; `dr-spin` one turn, `linear`; `dr-ping` and `dr-up` restart while
they are at opacity 0, so the restart cannot be seen. No jerk in any of them.

**Split view.** The desktop has no list and detail side by side in the centre: Activity and Jobs
replace their list with the detail. The one place a list stands beside the detail it opens is the
**right rail** (*Your work* on the operator's screens; on the client's, *Your orders* opens the live
order). A window opened from there comes in **from the right**, the side the list is on. The
tablet's two panes are being redesigned (2026-10-18) and are not drawn yet.

## Tone mismatches between the words and the motion

Each is a defect: the words say one thing and the movement says another.

| # | Where | The words | The motion as built | Why it is a mismatch | Status |
|---|---|---|---|---|---|
| **T-1** | desktop `job-checklist-error`; desktop `result-upload` (*Submit* with no photo) | *You can't close the job until every required step is checked. 'Capture delivery photo' is still open.* / *Add a delivery photo to close the job.* Calm, plain errors | a **toast** (`role="alert"`): arrives over `--dur-slow` .32s, rises `--move-md` 12, **leaves after 4s** | The slowest, largest arrival in the system, for a calm error, and then it disappears. `voice.md` § Toast: *never for an error: an error is a state the user must be able to re-read, and a toast leaves.* The words are an error and the motion is a notification | **Open, the designer's call:** keep the toast but in error tone (.12s, 4), or make it an error message that stays in the window |
| **T-2** | every desktop error, empty and loading page (`payment-error`, `order-setup-empty`, `payment-loading` and the rest) | calm, short | the whole window **arrives again** over `--dur-slow` .32s, rising 12 (rev 345), as if it were a new screen | A calm error gets the largest movement there is, and the same screen pretends to be another one | **Fixed by this proposal:** the window stays, the content arrives in its tone |
| **T-3** | every desktop error and loading page | calm error; a named, specific loading line | the assistant's rings (24s), the light round *Talk to AI* (3.2s) and the drone mark's sway keep turning | Endless decorative motion beside a calm error, and a second, meaningless loop beside the real loading loop | **Kept by the designer** (rev 343, with the `WCAG 2.2.2` cost recorded). Listed so the mismatch is known |
| **T-4** | desktop `payment-loading` → *Payment confirmed* | the fact and the next step | the words swap **in one frame**, no motion | Not a contradiction, a gap: the only success said in place has none of the success tone | **Fixed by this proposal:** the confirmed block settles in, success tone |
| **T-5** | desktop `tracking-error`, `tracking-empty` (the note on the map) | *Live tracking lost* / *Running a few minutes late* | appears in one frame | A gap, not a contradiction | **Fixed by this proposal:** error tone / empty tone |

No mismatch found in: the countdown reaching *Offer expired* (the words change, nothing moves);
the success screens' check mark (static); the skeleton and spinner loops (even, as above).
