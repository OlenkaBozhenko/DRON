# Motion inventory

**Status:** for review, 2026-10-19. Nothing here is animated by this file. It lists the moments
where an animation *could* do one of the three jobs in `DESIGN.md` § Motion. The designer picks
which of them are worth it.

**Sources read:** `flows.md` (every flow, every state node) and every page in `wireframes/` and
`wireframes/desktop/`, including the `-loading` / `-empty` / `-error` state pages and the
`-aerial` / `-inspection` variants (folded into their screen below).

**The rule (DESIGN.md § Motion):** an animation does one of three jobs, or it is not added.

| Job | What the movement tells the user |
|---|---|
| **Connect** | how two states relate: where the new one came from, where it goes back to |
| **Status** | that a process is running, or has just ended |
| **Answer** | that the action was received, before the result arrives |

A moment that cannot name one of these is **not in the table** and gets no animation. The moments
that were considered and left out are listed at the end, with the reason, so they are not proposed
again as new.

**Built rev 345 (desktop only):** the microinteractions of §1 (answer on hover, press and focus), the group-tab and language selections, a step window arriving, content arriving in place after its own loading state, and the skeleton leaving on payment. See `DESIGN.md` § Motion.

**Where:** *Phone*, *Desktop* or *Both*. The phone is frozen as built (designer, 2026-10-18), so a
phone moment here is an inventory entry only; animating it would first need her word to reopen
the phone. **Built** means the motion already exists in `design-system/components/` today.

---

## 1. Every screen

| Moment (screen, action) | Job | Component |
|---|---|---|
| Any screen · a button is pressed | Answer | Button (`button.css`: sinks 1px, scales .99). **Built** |
| Any pushed screen · it opens, or Back returns to the screen before (Both) | Connect | Pushed screen pattern; on desktop the Desktop window replaces in place (`window.css`) |
| Any screen · a drawer opens or closes: Date, Time, Filters, Contact operator, Contact client, Pay, any picker (Both) | Connect | Sheet + scrim (`sheet.css`: rises from the edge it closes back into). **Built** |
| Any screen with a centred dialog (desktop) · it opens | Connect | Sheet, dialog variant (`dr-dialog-in`). **Built** |
| Any screen · a toast confirms an action: *Link copied.*, *Issue marked resolved.*, *Saved. We'll tell you…* (Both) | Answer | Toast (`toast.css`). **Built** |
| Any form on phone · a field takes focus and the keyboard rises | Connect | On-screen keyboard (`keyboard.css`). **Built** |
| Desktop lists (Activity, Jobs) · the pointer rests on a card | Answer | Hanging cards (`float.css`: lifts 4). **Built** |
| Any toggle row · a switch is flipped (Account edit) | Connect | Switch (`form.css`: the knob travels off → on). **Built** |

## 2. Getting in: entry and onboarding

| Moment (screen, action) | Job | Component |
|---|---|---|
| `welcome`, `onboarding-client`, `onboarding-operator` · a swipe or Next moves to the next slide (Both) | Connect | Onboarding slider + Pager (`media.css`: the green moves to the next dot). Pager **built**, slide change not |
| `signin-loading` · waiting for Diia / BankID to confirm (Both) | Status | Activity spinner (`dr-spin`) + Skeleton. **Built** |
| `operator-signup-loading` · *Confirming your details with Diia* (Both) | Status | Activity spinner + Skeleton. **Built** |
| `switch-role` · the switch is confirmed and lands on the other side | Status (ended) | Milestone mark (`.dr-mark`) |
| Desktop entry window · the step window changes step (sign in → role → onboarding) | Connect | Entry window (`entry.css`) |

## 3. Ordering the job (MJ-1)

| Moment (screen, action) | Job | Component |
|---|---|---|
| `listings` · a date is picked in the calendar | Answer | Date picker (`calendar.css`) |
| `listings-filters` · a filter chip is toggled, the price range is dragged | Answer | Chip, Price range |
| `listings-loading` · *Find* is tapped: *Looking for drones near Podil, 21…* (Both) | Status | Finder: the disabled *Find* + status line |
| `listings` → `listings-map` · the search form becomes results on the map (Both) | Connect | Map screen + Offer cards (`dr-offer`) |
| `listings-map` · an offer is chosen and *Order* opens its setup (Both) | Connect | Offer card → Pushed screen |
| `time-slot` · the time group is switched | Connect | In-page tabs (`dr-groups`) |
| `order-review-loading` · *Calculating the final price…* (Both) | Status | Skeleton (`dr-pulse`). **Built** |
| `payment-loading` · Apple Pay / card is being charged (Both) | Status | Activity spinner (`dr-spin`) + Skeleton. **Built** |
| `payment-loading` (desktop) · *Payment confirmed*, then `order-confirmed` opens by itself (rev 339) | Status (ended), then Connect | Milestone mark, then Desktop window |
| `order-confirmed-loading` · finding the nearest certified operator (Both) | Status | Skeleton on the operator card. **Built** |
| `order-confirmed-loading` → `order-confirmed` · the placeholder becomes the named operator: photo, name, verified, insured (Both) | Connect | Operator card. **Built rev 344 (desktop):** `.dr-op--reveal`, the card rises into place (`--move-md`, `--dur-slow`, `--ease-enter`). The designer first kept the instant swap, then chose this |

## 4. The wait (RJ-C1, RJ-C2)

| Moment (screen, action) | Job | Component |
|---|---|---|
| `tracking-loading` · *Getting a live signal from the operator…* (Both) | Status | Skeleton. **Built** |
| `tracking`, `order-confirmed`, `call`, `chat` (desktop) · the drone moves along the route to the address | Status | Flight (`flight.css`, 7s along the route). **Built** |
| `tracking` · a step on the rail is reached: dispatched → in flight → arrived (Both) | Status | Progress rail node (`progress.css`) |
| `tracking-empty` · the ETA slips and *Running late* appears (Both) | Status | Chip (warning) on the ETA |
| `order-history` · the live order is in progress (Both) | Status | Status indicator, live (`dr-ping`). **Built** |
| `call` · *Calling…* while the line connects. State traced in `flows.md`, **not built** | Status | Call surface |
| `chat`, `chat-client` · a sent message lands in the thread | Answer | Chat thread (`dr-bubble`) |

## 5. The outcome (RJ-C4, SJ-1)

| Moment (screen, action) | Job | Component |
|---|---|---|
| `delivery-loading` · the delivery photo is not uploaded yet (Both) | Status | Skeleton. **Built** |
| `inspection-report-loading` · *The operator is still uploading the report…* (Both) | Status | Skeleton + upload arrow (`dr-up`). **Built** |
| `rate` · a star is tapped and the stars up to it fill (Both) | Answer | Rating input (`rating.css`) |

## 6. Coming back (RJ-C5, notifications)

| Moment (screen, action) | Job | Component |
|---|---|---|
| `order-history-loading` · *Loading your orders…* (Both) | Status | Skeleton. **Built** |
| `order-history` → `order-details` · a past order opens its record (Both) | Connect | Order card → Pushed screen / Desktop window |
| `order-details` · *Book again* opens a filled order setup (Both) | Connect | Pushed screen |
| `notifications-loading` · *Loading your notifications…* (Both) | Status | Skeleton. **Built** |
| `notifications` · a row opens the screen it names (Both) | Connect | Alert row (`dr-choice`) → Pushed screen |
| Any top bar · a new alert arrives and the bell's count changes | Status | Notification bell (`dr-bell`) |

## 7. When it goes wrong (EJ-2)

| Moment (screen, action) | Job | Component |
|---|---|---|
| `report-issue` · a photo is added as evidence (Both) | Status | Upload zone |
| `report-issue-loading` · *Issue under review…* (Both) | Status | Skeleton. **Built** |

## 8. Operator: taking and doing the job (MJ-2, RJ-O3)

| Moment (screen, action) | Job | Component |
|---|---|---|
| `operator-listings` · the status toggle goes Available ⇄ Offline (Both) | Connect | Availability badge / Switch |
| `operator-listings`, `operator-jobs` · the job group tab is switched (Both) | Connect | In-page tabs (`dr-groups`) |
| `job-offer` · the offer counts down: *decide before it expires* (10s, `flows.md` MJ-2) (Both) | Status | **Built rev 344 (desktop):** Countdown (`countdown.css`), backlog B-5 done. The phone keeps its still figure |
| `job-offer` → `job-brief` · *Accept* opens the job (Both) | Connect | Pushed screen / Desktop window |
| `job-checklist` · a step is ticked (Both) | Answer | Checkbox (`dr-pick`) |
| `job-checklist-error` · *Close* with a step open: the alert appears (desktop shows it on open) | Answer | Toast (`role="alert"`). **Built** |
| `result-upload` (desktop) · a file is dragged over the drop zone | Answer | Drop zone |
| `result-upload-loading` · *Sending the delivery photo.* (Both) | Status | Upload zone (`dr-up`: the arrow leaves the tray). **Built** |
| `withdraw-loading` · the transfer is being sent (Both) | Status | Activity spinner (`dr-spin`). **Built** |
| `withdraw-loading` → `withdraw-sent` · spinner becomes the check mark (Both) | Status (ended) | Milestone mark (`.dr-mark`) |

## 9. Operator: getting verified (MJ-2 activation)

| Moment (screen, action) | Job | Component |
|---|---|---|
| `operator-verification`, `operator-profile-setup` · a licence, insurance or profile photo is added (Both) | Status | Upload zone |

## 10. Desktop only: the shell and the assistant

| Moment (screen, action) | Job | Component |
|---|---|---|
| Desktop home · a card opens in the centre and the chat folds into *Talk to AI* (rev 339) | Connect | Console → Talk to AI (`console.css`: slides out over `--dur-slow`). **Built** |
| *Talk to AI* · it is pressed and the chat on the home opens again | Connect | Talk to AI → Console |
| Assistant · it is composing an answer. **State not drawn** | Status | Assistant orb |

---

## Already moving, with no job named

The rule applies to what is built too. These loops run today and the inventory could not name a
job for them. **Decided 2026-10-19: kept as built**, by the designer's choice after the live compare
(`_compare-findings.html`, question 1), with the cost stated: endless motion with no stop control on
the page fails `WCAG 2.2.2 Pause, Stop, Hide` (level A). The options declined were: remove all three,
turn only while the assistant answers, keep and add a pause control.

| Built motion | Where | Why no job was found |
|---|---|---|
| `dr-orb-spin`: the assistant's rings, one turn in 24s, always | every desktop page with the assistant | It turns whether the assistant is working or idle, so it does not report a process. It would do **Status** if it ran only while an answer is being composed (row in §10). |
| `dr-talk-ring`: the light around *Talk to AI*, one turn in 3.2s, always | 117 desktop pages | It points at the button, but nothing has happened, so it is not an answer and not a status. |
| `dr-fly-sway` + `dr-fly-prop`: the drone mark in *Talk to AI* sways and its propellers turn | 117 desktop pages | It is a brand mark at rest. |

All three stop under `prefers-reduced-motion` (`assistant.css`).

## Considered and left out

| Moment | Why there is no animation |
|---|---|
| A tab-bar switch (Order · Activity · Help · Account) | `HIG · Tab bars`: switching tabs is instant, with no transition between roots. The selected fill only changes; nothing connects the two roots. |
| An error message appearing (`payment-error`, `signin-error`, `*-error`) | The state is reached by a push or a reload, which is covered in §1. Shaking or flashing an error adds alarm, not information (`voice.md` P5: plain, not dramatic). |
| An empty state (`*-empty`) | Nothing is running and nothing was done; the screen states why it is empty and the one way out. |
| `operator-verification-loading` · *Under review, ETA 2–3 business days* | The process takes days. A loop would claim the screen is working on it now, so it is a fact in words, not a status in motion. |
| `job-offer-empty` · the offer expired | A process has ended, but the offer is gone, so there is no state to connect to. The page says it in words. |
| `role-select` · choosing Client or Operator | The choice navigates at once; the button press (§1) already answers it. |
| The map ground's drones on desktop (*128 drones in the air*) | They stand at fixed places in the wireframe. Moving them without live positions would invent data; once they are fed live positions, they become **Status**. |
| Stat cards and the deliveries chart on the desktop rail | Counting a number up or growing bars on load is a presentation effect; the figure is the same either way. |
