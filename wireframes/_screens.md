# DRON — Key screens of the MAIN flow (order for wireframing)

**Status:** Draft · step 7 order · July 2026.
**Sources of truth:** [`sitemap.md`](../sitemap.md) `§6` (screen names), [`flows.md`](../flows.md) (place in flow + states), [`research/jtbd.md`](../research/jtbd.md) (the job each screen closes).
**Scope:** only the screens on the **main path** of each main job. Everything else (recovery branches, onboarding beyond the fork, dispute/support, history, share, inspection report, time-slot pick) is **not** touched here — it is step 8.

**Main jobs measured**
- **Client (MJ-1):** *get a drone service done* — hand the job over, get the outcome. Terminal: service delivered.
- **Operator (MJ-2 + RJ-O3):** *take the order, fulfil it, receive payment* — accept → do → close → get paid → withdraw. Terminal: money on card/bank.

**Selection rule applied.** A screen is listed only if it has **both** a backing job (`jtbd.md`) **and** a place on the main path (`flows.md`). Screens with neither are excluded (see the tail of this file).

---

## State legend

Four states are evaluated per screen: **Empty · Error · Loading · Success**.

- **✓** — the state is real: the scenario genuinely produces it and it must be designed.
- **—** — the scenario does not produce it, so no such screen state exists.
- **Success is not automatic.** It is marked **✓ only** where there is a dedicated "it worked" screen — a screen whose whole purpose is to show the job (or a job-critical milestone) succeeded. A screen that merely hands off to the next step does **not** get a success mark.
- Where a state is real by scenario logic but not yet drawn as an explicit node in `flows.md` (e.g. an external-ID sign-in that can fail), it is still **✓** and the reason column says so.

---

# CLIENT — main path (MJ-1)

Flow spine (`flows.md` MJ-1): **Sign in → Choose role → Home → Service catalogue → Order setup → Order review & price → Payment → Order confirmed / operator revealed → Live tracking & ETA → Delivery confirmation → Rate the order → "main job done".**

### 1. Sign in with Diia / BankID
- **Job:** `MJ-1` enabler — *"hand the job to a certified professional without managing anything"* needs an identity to transact (`C-02`, one-tap Diia / BankID).
- **Place in flow:** MJ-1 entry gate — `Signed in? → no → Sign in`, then on to the role fork.
- **States:**
  - **Empty —** nothing to be empty; it is an auth hand-off, not a list.
  - **Error ✓** — external identity auth can be declined / fail (Diia / BankID rejection). Real, though not yet an explicit node in `flows.md`.
  - **Loading ✓** — redirect to the external provider; waiting for the auth result.
  - **Success —** no dedicated success screen; a valid sign-in just routes onward (to the role fork / Home).

### 2. Choose your role — Client or Operator  *(NEW · shared · one-time)*
- **Job:** `MJ-1` · `MJ-2` enabler — routes the person to the side that closes their main job (Client → get a service; Operator → provide services). `sitemap.md §6.0`.
- **Place in flow:** immediately after first registration — `SHARED — Role fork` in `flows.md`; also inline at the start of MJ-1 (`Sign in → Choose role → Home`). Returning users skip it.
- **States:**
  - **Empty —** two fixed options, always present.
  - **Error —** a local choice; nothing to fail.
  - **Loading —** resolves instantly, no fetch.
  - **Success —** it is a fork, not an outcome; it hands off to a main flow.
  - *(A stateless decision screen — listed because it is on the main path and was added this step, but it carries no real data states.)*

### 2b. Client onboarding  *(NEW · one-time · after the fork)*
- **Job:** `EJ-1` — *"feel that someone accountable is coming... 'a stranger with a drone' stops feeling like a risk I take alone"* (the 15-second first-run explainer).
- **Place in flow:** right after the role fork on the Client branch — `Choose role → Client → Client onboarding → Home` (`flows.md` SHARED / MJ-1 inline). Re-shown only on a first-time switch from Operator.
- **States:**
  - **Empty ✓** — *"skipped / too long"* → one-card 15-second fallback (`flows.md` SHARED / EJ-1).
  - **Error —** fixed content; nothing to fail.
  - **Loading —** not produced.
  - **Success —** hands off to Home; no dedicated "it worked" screen.

### 3. Home / start an order
- **Job:** `MJ-1` — the launch point of the main job; `RJ-C5` entry (*"get back to confirmed in a single action"* — Book again lives here).
- **Place in flow:** MJ-1 node `Home` — first screen of the ordering cluster (`RFD → Client → Home`).
- **States:**
  - **Empty ✓** (as the merged listings screen) — a search / filter returns nothing → *"loosen filters"* recovery (`listings-empty.html`). *(As a bare Home the tiles are always present; the empty belongs to the absorbed Service catalogue.)*
  - **Error ✓** *(added July 2026, build decision)* — the data-driven service list can fail to load (network) → retry / support (`listings-error.html`); consistent with `flows.md`'s error-recovery pattern (*"Retry, … or leave"*; errors route to Support).
  - **Loading ✓** — fetching order history / personalisation to surface "Book again" (`flows.md` RJ-C5: *"Loading: fetching order history"*).
  - **Success —** hands off to the catalogue; no "it worked" screen.

### 4. Service catalogue
- **Job:** `MJ-1` — *"choose the result a drone delivers"* (`CE-2` Service).
- **Place in flow:** MJ-1 node `Service catalogue`, between Home and Order setup.
- **States:**
  - **Empty ✓** — *"not in your region yet"* when coverage gate fails (`flows.md` MJ-1: `Service available in region? → no → Empty`).
  - **Error —** not produced here.
  - **Loading —** not shown on the main path.
  - **Success —** hands off to Order setup.

### 5. Order setup / details
- **Job:** `MJ-1` (enter the job) · `RJ-C3` — *"see the full cost upfront"* (price is a live field on this screen).
- **Place in flow:** MJ-1 node `Order setup / details`, between catalogue and price/payment; core input screen.
- **States:**
  - **Empty ✓** — *"none available now — next slot ~40 min"* (`Operator available now? → no → Empty`), surfaced at setup before payment.
  - **Error ✓** — *"address outside service zone"* (`Address within service zone? → no → Error → back to setup`).
  - **Loading —** price shows as a live field, not a loading screen, on the main path.
  - **Success —** hands off to review/payment.

### 6. Order review & price
- **Job:** `RJ-C3` — *"decide without being surprised at checkout"* (the locked price before commitment).
- **Place in flow:** MJ-1 node `Order review & price`, between setup and Payment. *Per `sitemap.md §7.3` this is physically merged into Order setup (price above the Pay button) — a thin screen.*
- **States:**
  - **Empty —** not produced.
  - **Error —** only on the re-book path (`RJ-C5`: *"previous service or price changed"*), which is out of this main-path scope.
  - **Loading ✓** — the final price must resolve / lock before it can be shown (`RJ-C3` "locked price" rule). Real pre-render state.
  - **Success —** no "it worked" screen; hands off to Payment.

### 7. Payment
- **Job:** `MJ-1` — the pay step of the core flow (`C-04`, Apple / Google Pay / card).
- **Place in flow:** MJ-1 node `Payment`, after review, before auto-dispatch. System Pay sheet (`§7.3`).
- **States:**
  - **Empty —** not applicable to a payment sheet.
  - **Error ✓** — *"payment failed"* → retry / change method / leave (`Payment authorized? → no → Error`).
  - **Loading ✓** — authorising the payment.
  - **Success —** no dedicated in-app success screen; a paid order flows into the dispatch loading, then to Order confirmed.

### 8. Order confirmed / operator revealed
- **Job:** `RJ-C2` — *"know who is coming... so the gap doesn't feel like a void"* **+** `RJ-C1` — *"see proof of who will come... commit without lingering doubt"*.
- **Place in flow:** MJ-1 node `Order confirmed / operator revealed`, right after successful auto-dispatch (`Operator confirmed? → yes`). The pivot screen of the main job.
- **States:**
  - **Empty ✓** — *"0 reviews — newly certified operator"*: the reviews section is empty (`flows.md` RJ-C1).
  - **Error ✓** — *"no operator confirmed — auto-refund"* (MJ-1) / *"trust signals not loaded"* (RJ-C1) / *"generic 'order received', no operator — the void"* (RJ-C2).
  - **Loading ✓** — *"finding nearest certified operator"* (MJ-1) / *"operator credentials"* (RJ-C1).
  - **Success ✓** — the dedicated "it worked" screen: operator revealed, booking confirmed, the void closed (`RJ-C1` *"commits with confidence"*, `RJ-C2` *"void closed"*).

### 9. Live tracking & ETA
- **Job:** `RJ-C2` — *"know... where they are right now"* (`C-05`).
- **Place in flow:** MJ-1 node `Live tracking & ETA`, between Confirmed and Delivery.
- **States:**
  - **Empty ✓** — *"ETA slipping, push 'running late'"*: a late / no-progress state (`flows.md` RJ-C2).
  - **Error ✓** — *"tracking lost"* (GPS not recovered within timeout).
  - **Loading ✓** — *"waiting for GPS signal"*.
  - **Success —** tracking has no "it worked" screen; the success is arrival itself, shown on Delivery confirmation.

### 10. Delivery confirmation
- **Job:** `RJ-C4` — *"see a clear, documented result... evidence I can use, share, or act on"*.
- **Place in flow:** MJ-1 node `Delivery confirmation`, after tracking; the outcome screen (`flows.md` RJ-C4).
- **States:**
  - **Empty —** the "not there yet" case is framed as loading, not empty.
  - **Error ✓** — *"no proof — job cannot complete"* (proof not uploaded within timeout).
  - **Loading ✓** — *"result not uploaded yet"* (waiting on the operator's upload).
  - **Success ✓** — the dedicated outcome screen: proof received, delivery done (this client confirm is also what releases the operator's pay, `RJ-O3`).

### 11. Rate the order
- **Job:** serves `EJ-3` (operator reputation) **+** `RJ-C1` (feeds future clients' trust). *Post-outcome tail; it is the screen the flow's terminal renders behind.*
- **Place in flow:** MJ-1 node `Rate the order`, the last node before the green terminal *"service delivered, main job done"*.
- **States:**
  - **Empty —** not produced.
  - **Error —** not produced.
  - **Loading —** not produced.
  - **Success ✓** — submitting the rating reaches the flow's terminal *"main job done"*; the success renders here.

---

# OPERATOR — main path (MJ-2 + RJ-O3)

Flow spine (`flows.md` MJ-2 + RJ-O3): **Operator home + status toggle → Incoming job offer / accept-decline → Job brief / detail → Job checklist → Result upload / close job → Wallet / earnings → Withdraw to card / bank account → "money on card/bank, flow complete".**

*(The role fork — screen 2 above — is the operator's shared entry too. Right after it comes **Operator onboarding** (below, one-time). The activation gate beyond it — landing / sign up / verification / profile setup — is one-time onboarding and stays excluded from this recurring main path; see the tail.)*

### 11b. Operator onboarding  *(NEW · one-time · after the fork)*
- **Job:** `MJ-2` activation — introduces how working on DRON runs (dispatch, checklist, payout) before the fee/verification gate, so the operator reaches "live" without silence.
- **Place in flow:** right after the role fork on the Operator branch — `Choose role → Operator → Operator onboarding → Operator landing / fee terms` (`flows.md` SHARED / MJ-2 activation). Re-shown only on a first-time switch from Client.
- **States:**
  - **Empty —** fixed intro content.
  - **Error —** nothing to fail.
  - **Loading —** not produced.
  - **Success —** a stateless lead-in; hands off to the activation gate, no "it worked" screen.

### 12. Operator home + status toggle
- **Job:** `MJ-2` — *"a steady stream of pre-qualified jobs to reach me"*; `O-02` — receive requests only when able (the status toggle gates dispatch).
- **Place in flow:** MJ-2 start node `Operator home + status toggle` → `Status = Available?`.
- **States:**
  - **Empty ✓** — *"Idle: no offers while Offline / Busy"* (`Status = Available? → no`).
  - **Error —** not produced here.
  - **Loading —** not produced here.
  - **Success —** the hub, not an outcome; no "it worked" screen.

### 13. Incoming job offer / accept-decline
- **Job:** `RJ-O1` — *"accept or pass without stopping to ask questions"* (`O-01`, lock-screen decision).
- **Place in flow:** MJ-2 node `Incoming job offer / accept-decline` → `Accept within 10s?`.
- **States:**
  - **Empty ✓** — *"offer expired, reassigned"* (`Accept within 10s? → no`).
  - **Error —** not produced here.
  - **Loading —** not produced here.
  - **Success —** accepting hands off to the Job brief; no "it worked" screen.

### 14. Job brief / detail
- **Job:** `RJ-O1` / `MJ-2` — *"see everything I need — location, service type, duration, pay — in one glance"*.
- **Place in flow:** MJ-2 node `Job brief / detail` → `Details sufficient?` → `Able to fly (airspace / weather)?`.
- **States:**
  - **Empty —** not produced (insufficient-details → decline, back to offers).
  - **Error ✓** — *"stand down — airspace / weather; re-dispatched, client refunded"* (`Able to fly? → no`).
  - **Loading —** not produced here.
  - **Success —** hands off to the checklist; no "it worked" screen.

### 15. Job checklist (in progress)
- **Job:** `RJ-O2` — *"a structured checklist... so I don't miss a required step"* (`O-03`; large touch targets for gloves / sunlight).
- **Place in flow:** MJ-2 node `Job checklist (in progress)` → `All steps + result captured?`.
- **States:**
  - **Empty —** not produced.
  - **Error ✓** — *"required step skipped — cannot close"* → back to the checklist.
  - **Loading —** not produced here.
  - **Success —** completing it hands off to Result upload; no "it worked" screen.

### 16. Result upload / close job
- **Job:** `RJ-O2` — the checklist ends in a result (`O-04`); this upload **gates** `RJ-O3` payment (proof before pay, `H-7`).
- **Place in flow:** MJ-2 node `Result upload / close job` → `Upload succeeded?` → `Client response?`.
- **States:**
  - **Empty —** not produced.
  - **Error ✓** — *"slow or failed upload"* → retry / queue offline.
  - **Loading ✓** — *"saved offline — uploads when online; payment held until proof"* and *"awaiting confirmation (up to 2h)"*.
  - **Success —** payment success lands on Wallet, not here; this screen has no "it worked" state of its own.

### 17. Wallet / earnings
- **Job:** `RJ-O3` — *"the payment to move to my account on its own"* (`O-05`; auto-release ≤ 30 min of client confirmation).
- **Place in flow:** MJ-2 node `Wallet / earnings`, reached from `Order paid: earnings added to balance` (`confirms / 2h auto → PAID → Wallet`).
- **States:**
  - **Empty ✓** — *"below minimum — keep earning"* (`Balance above minimum? → no`).
  - **Error —** payout errors live on the Withdraw screen, not here.
  - **Loading —** transfers are on the Withdraw screen.
  - **Success ✓** — the dedicated "you got paid" screen: earnings added to balance within 30 min (closes `RJ-O3`'s core promise).

### 18. Withdraw to card / bank account
- **Job:** `RJ-O3` — *"never have to chase money"*: the payout to an external account is the **final** step (Bolt / Uklon cash-out model).
- **Place in flow:** MJ-2 Phase B (last step) — `Balance above minimum? → yes → Withdraw` → `Method linked? / valid? / payout type? / transfer succeeded?`.
- **States:**
  - **Empty —** not produced (below-minimum is caught upstream on Wallet).
  - **Error ✓** — *"invalid card / bank details"* and *"payout failed, funds returned to balance"*.
  - **Loading ✓** — *"link and verify card / bank"*, *"instant transfer to card"*, *"bank transfer, 1-3 business days"*.
  - **Success ✓** — the dedicated final "it worked" screen: *"money on card / bank account — flow complete"*.

---

## State matrix — screens × states

Rows = main-path screens (in flow order). Columns = the four states. **✓** = real state to design · **—** = scenario does not produce it.

### Client (MJ-1)

| # | Screen | Empty | Error | Loading | Success |
|---|---|:---:|:---:|:---:|:---:|
| 1 | Sign in with Diia / BankID | — | ✓ | ✓ | — |
| 2 | Choose your role — Client or Operator | — | — | — | — |
| 2b | Client onboarding | ✓ | — | — | — |
| 3 | Home / start an order | — | ✓ | ✓ | — |
| 4 | Service catalogue | ✓ | — | — | — |
| 5 | Order setup / details | ✓ | ✓ | — | — |
| 6 | Order review & price | — | — | ✓ | — |
| 7 | Payment | — | ✓ | ✓ | — |
| 8 | Order confirmed / operator revealed | ✓ | ✓ | ✓ | ✓ |
| 9 | Live tracking & ETA | ✓ | ✓ | ✓ | — |
| 10 | Delivery confirmation | — | ✓ | ✓ | ✓ |
| 11 | Rate the order | — | — | — | ✓ |

### Operator (MJ-2 + RJ-O3)

| # | Screen | Empty | Error | Loading | Success |
|---|---|:---:|:---:|:---:|:---:|
| 11b | Operator onboarding | — | — | — | — |
| 12 | Operator home + status toggle | ✓ | — | — | — |
| 13 | Incoming job offer / accept-decline | ✓ | — | — | — |
| 14 | Job brief / detail | — | ✓ | — | — |
| 15 | Job checklist (in progress) | — | ✓ | — | — |
| 16 | Result upload / close job | — | ✓ | ✓ | — |
| 17 | Wallet / earnings | ✓ | — | — | ✓ |
| 18 | Withdraw to card / bank account | — | ✓ | ✓ | ✓ |

**Success screens (deliberately few — five, not everywhere):** *Order confirmed / operator revealed*, *Delivery confirmation*, *Rate the order* (Client); *Wallet / earnings*, *Withdraw to card / bank account* (Operator). Each is a real "it worked" milestone; every other screen only hands off.

---

## Excluded from this pass (step 8)

Screens with a job **but** off the main path, or one-time onboarding — not wireframed here, listed so nothing is silently dropped:

- **Client:** Welcome / first-use explainer (`EJ-1`, one-time) · Time-slot pick (`C-2` planning branch) · Inspection report (`RJ-C4`, `C-2` variant of the outcome) · Order history (`RJ-C5`) · Share / refer (`SJ-1`) · Support / dispute · Report an issue · Resolution outcome · Contact human support (`EJ-2`).
- **Operator:** Operator landing / fee terms · Sign up / identity · Verification / document upload · Profile setup (`MJ-2` activation, one-time) · Dispute / client issue (`EJ-2`, operator side) · Ratings dashboard (`EJ-3`).

These carry real jobs and belong to the product; they are simply not on the main happy path being cut into wireframes now.

**Global action — Switch role (Client ⇄ Operator).** Not a main-path screen but reachable in every flow via **Account → Switch role** (`sitemap.md §7.4`; `flows.md` *CHANGE PERSONA*). It re-enters the fork (screen 2) and, on a first-time switch, re-runs that side's onboarding (2b / 11b). Wireframed with the Account/settings cluster in step 8, not here.
