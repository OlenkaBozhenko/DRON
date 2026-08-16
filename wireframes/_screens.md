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
- **The category row is live from 2026-08-16 (designer's call:** *«зроби клікабельні чіпси ну і відповідно
  картки під ними по категоріях»***).** The four chips over the list — *All · Delivery · Aerial photo & video ·
  Inspection* — were drawn but inert; on `listings.html` they now filter the cards under them, in place. **Not a
  state and not a sub-view**, so it takes no row in the matrix: it is a control on this page, the same reading
  the date drawer already gets above. `aria-current` moves between the chips and the rows that do not match
  take `hidden`, so a filtered-out service leaves the layout and the tab order together. **The catalogue is
  CE-2's three service types and a service belongs to exactly one**, so each of the three named chips resolves
  to a single card and *All* to three — the row narrows the list it names rather than opening a longer one.
  Whether the catalogue should hold more than one service per category is the designer's call and is not
  assumed here. **The four sibling states (`-filtered`, `-empty`, `-error`, `-loading`) carry the same chip row
  and it is still inert on all four** — reported, not carried over: each is a separate page and the change was
  asked for on the base.
- **Filter sub-views (added July 2026, build decision):** because *Service catalogue* is merged into Home,
  browsing needs to be narrowable. Two named sub-views (not data states):
  - **`listings-filters`** — the filter panel open, **three titled cards of one kind, in this order**:
    **Location** (*Where you need the service* — four picker rows, Country ▸ Region ▸ City ▸ District, each
    opening its own screen; it was a flat district radio list until
    2026-08-16), **Date &amp; time** (*When you need the service* — Available now / Today / This week / Pick a
    date &amp; time), **Price** (a titled range
    card: *Price range* over a bar chart of how services are priced, two draggable bullets on the rail, and the
    chosen ends printed below as **Minimum** / **Maximum**). **The first two zones were given their title and
    subtitle on 2026-08-16** (*«добав заголовок і підзаголовок у два фільта вище Location & available date»*),
    the day after the Price zone got its own: until then the only word standing over either was the mono
    `.zlabel`, which is the **wireframe's** structure annotation and vanishes with the shell's annotation
    toggle, so with annotations off the panel showed two unnamed cards under one named one. The card title is
    **Date &amp; time** where the annotation still reads **Time** — the zone sets a day *and* a time within it,
    and it is the wording the option and the drawer already use. **The Price zone lost its three preset bands on
    2026-08-16** — *Low / Medium / High*, and the *Insured* chip that rode on *High* — on the designer's call
    against a Figma reference (*«зроби такий вю»*, node `94:6`): the reference has no preset rows, and she was
    asked which way to take it before it was built. The band is the whole control now, and the figures it states
    are the only price words in the zone. **Location leads the panel from 2026-08-16**, the designer's call on the built page
    (*«помісти картку самою першою на сторінці»*); it had stood second, under Time, since the panel was built.
    **The Time zone's fourth option opens a date picker** — *Pick a date & time…* raises a **calendar
    drawer** (`.dr-cal`, added 2026-08-16 on the designer's call *«при кліку відкрий дата пікер як у IOS»*):
    month grid with `‹ ›` paging, no date before today, a 24-hour time below it, *Cancel* / *Done*. **Done
    writes the value into the option itself** — the row then reads `Sat 22 Aug, 17:30` — and **Cancel puts
    back whichever option was checked before the drawer rose.** Not a state and not a sub-view: it is a
    control on this page, so it takes no row in the matrix.
    *Apply* → filtered;
    *Close / Clear all* → Home. *(The **Price** dimension was here once before as
    Recommended / Low→High / High→Low — **a sort by another name**, and it went when **sorting was removed
    across the product, designer's call 2026-08-13**: the counter's Sort button left all five listings states
    with it, and the counter row itself came off the same day on her word on the built error page — the count
    was the list restating its own length. The operator side had its sort removed earlier for the same model —
    see `_critique.md` fix 4. **What returned 2026-08-15 is not that.** An ordering rearranges the whole list
    and removes nothing; a band **narrows** it, which is what a filter is for. The rejected idea stays
    rejected: there is no Recommended / Low→High / High→Low control anywhere.)*
  - **`listings-filtered`** — filters applied: the leading *All* chip + the removable applied-filter chips, the
    filtered result list, and the Filters button showing its active count. No dead-end — every chip exits to the full list,
    *All* first among them (it replaced the *Clear all* text button, designer's call 2026-08-13).
  - **`listings-filter-country` · `listings-filter-region` · `listings-filter-city` · `listings-filter-district`**
    *(added 2026-08-16, designer's call)* — the **place pick**, four dependent levels of one filter dimension:
    **Country → Region → City → District of the city**. The designer, on the built `listings` top bar:
    *«помісти вибір міста у фільтр де юзер обирає регіон, спочатку він має обрати місто область потім вже
    район міста»*, and the depth settled at **three** when she was shown the two-step and three-step rows
    side by side. **`Country` was added the same day**, on her word on the built filter panel: *«добав ще
    Cauntry»*. It is the level the product's own geography asked for and the filter did not have —
    `CLAUDE.md §Geography` is *Ukraine and European countries*, so the country was a standing fact the
    client could see nowhere and change nowhere. **Its list is a coverage list, not an atlas**, the same
    reading as Region's 25 (*where DRON operates*): **8 rows**, Ukraine current, and picking one resets the
    region, the city and the district. At 8 × 44 = **352px** in a 710 area it fits whole, so it takes **no
    search field** — the same measured rule that gives Region one and District none. Each level is its
    own **pushed screen**, not a drawer, because `_conventions.md`'s picker rule is a count and every list
    here clears it — 8 countries, 25 regions, 11 districts. This is the **first page the `≥ 7` half of that
    rule has ever had**; it was written 2026-08-16 (rev 102) and stood empty until now. Back (`‹`) returns to
    `listings-filters` with the pick made; picking a country resets the region, the city and the district,
    picking a region resets the city and the district, picking a
    city resets the district. **Not data states** — four named sub-views, like `listings-filters` itself,
    so they take no row in the state matrix and no column in `sitemap.md §8`.
  - Grounded in the merged-catalogue model (`sitemap.md §7.3`) and the existing `listings-empty` *"loosen filters"* recovery.

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
- **Pay opens a drawer, not a screen, from 2026-08-16** (designer: *«по кліку на pay має відкриватись дровер а
  не сторінка … кнопки з іконкою чорного кольору apple pay та google pay або можливість обрати картку … лиш усі
  кнопки залиті праймері»*, against a Figma reference — file `YlGWlsWWjKSCxhONMzGG2F`, node `95:10`, an eSIM
  checkout whose bottom edge is a black Apple Pay button over a *Pay with card* text action). **Not a state and
  not a sub-view, so it takes no row in the matrix** — a control on this page, the same reading `listings`'
  category chips and the date drawer already get. Three options, so it is a **drawer** by the ≤ 6 rule
  (`_conventions.md` §the picker rule; `HIG · Action sheets`).
  **It does not delete a node, it forks one.** *Pay with card* still pushes **Payment**, which keeps that
  screen and its error / loading states on the main path; **Apple Pay** and **Google Pay** skip the method
  screen — the method is already chosen — and land on **`payment-loading`** (*"Authorizing your payment…"*),
  which is where an express charge actually is. Nothing is orphaned: `payment.html` keeps its own three
  methods for the card path and for anyone who opens it directly.
- **Job:** `MJ-1` — the pay step of the core flow (`C-04`, Apple / Google Pay / card).
- **Place in flow:** MJ-1 node `Payment`, after review, before auto-dispatch. System Pay sheet (`§7.3`).
- **Two zones: the locked amount, then a titled card of methods** — **Payment method** ▸ *How you pay for this
  order*, over Apple Pay / Google Pay / the saved card. **The title and subtitle arrived 2026-08-16** on the
  designer's call to give every card that takes entered data the same two lines
  (*«якщо в проекті ще є аналогічні картки добав до них так само заголовок і підзаголовок»*); the amount block
  above it takes none, being a figure and not a card. The subtitle says **for this order** because
  `account-edit`'s card is the saved default and this one is the choice being made now.
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

# STEP 8 — remaining sitemap screens (built July 2026)

Everything in `sitemap.md §6.1 / §6.2 / §6.0` that is **not** on the main happy path above: the recovery
branches, one-time onboarding/activation, the C-2 planning + inspection variants, history/advocacy, the
whole `EJ-2` resolution cluster, and the global role switch. Each is a real product screen with a backing
job and a place in a `flows.md` diagram. Same contract as the main path (`_conventions.md`).

**State rule (unchanged).** A state page exists only where the screen's `flows.md` node genuinely produces
it. States below are each traced to a flow node. `—` = not produced.

### Shared / entry — Step 8

| # | Screen (`sitemap.md`) | Job | Flow position (`flows.md`) | States (real) | Files |
|---|---|---|---|:---|---|
| S1 | **Switch role (Client ⇄ Operator)** | `§7.4` global utility | *CHANGE PERSONA*: Account → confirm? → re-enter fork | base only (a confirm/decision screen; decline → back, confirm → fork) | `switch-role.html` |
| S2 | **Account / profile** | `§7.4` identity &amp; preferences utility + MJ-2 credentials | Account tab (every tab bar) → Edit → save | base + **edit** sub-view (edit personal details, upload drone documents / insurance, save; no dead-end — Save / Cancel → Account) + **photo** sub-view (change the profile photo — take a photo, choose from library, remove; no dead-end — Save photo / Cancel / back → Account) | `account.html`, `account-edit.html`, `account-photo.html` |

**`account-edit`'s form is three titled cards from 2026-08-16** — **Personal details** ▸ *What the operator
needs to reach you* (name · phone · saved address), **Payment & language** ▸ *How you pay and the language you
see*, and the two upload cards, which have carried their own title and subtitle since they were built. The
same designer's call as `payment` and the filter panel. **The heading that stood *above* the upload pair is
not restored by it** — that came off on her word at rev 120, and what these two cards get is a title *inside*
the card, which is a different thing.

**`account-photo.html` is a sub-view, not a new sitemap screen.** Added 2026-08-16 on the designer's word —
«добав іконку едіт карандаш на аватарку і добав ще один wireframe де можна загрузити аватарку». It is the
destination of the pencil badge now sitting on the avatar in `account.html`, the same way `account-edit.html`
is the destination of the pencil beside the name. `sitemap.md §7.4` still lists **one** Account screen; both
files are states of it, and both are listed in the `Files` column above rather than given a row of their own.
It carries **base only** — no `flows.md` node produces an empty, error or loading state for it (an empty
avatar is the *base*: the initials fallback, which `account.html` already ships as `OB`).

### Client — Step 8

| # | Screen | Job | Flow position | States (real) | Files |
|---|---|---|:---|:---|---|
| C1 | **Welcome / first-use explainer** | `EJ-1` | *EJ-1*: first-time open → Welcome → understood? | **Empty** ✓ (skipped / too long → one-card 15-sec fallback) | `welcome.html`, `welcome-empty.html` |
| C2 | **Time-slot pick (calendar-first)** | `MJ-1` planning (`C-2`) | *MJ-1* setup → schedule a slot (aerial / inspection) → review | **Empty** ✓ (no slots free that day → pick another day) | `time-slot.html`, `time-slot-empty.html` |
| C3 | **Inspection report** *(base = success)* | `RJ-C4` (`C-2` outcome) | *RJ-C4*: service type = photo/inspection → report | **Error** ✓ (no proof — job cannot complete) · **Loading** ✓ (report not uploaded yet) | `inspection-report.html`, `inspection-report-error.html`, `inspection-report-loading.html` |
| C4 | **Order history** | `RJ-C5` | *RJ-C5*: Home → history → past order → Book again | **Empty** ✓ (no history / hard to find) · **Loading** ✓ (fetching order history) · **sub-view** `order-details` — **one file per service, three of them** (base only: a finished order is a record, so it has no empty, no error and no loading of its own; the list already carried those) | `order-history.html`, `order-details.html`, `order-details-inspection.html`, `order-details-aerial.html`, `order-history-empty.html`, `order-history-loading.html` |
| C5 | **Share / refer** | `SJ-1` | *SJ-1*: after a good order → Rate → Share | **Empty** ✓ (opened, didn't send → back to share) | `share.html`, `share-empty.html` |
| C6 | **Support / dispute** | `EJ-2` (entry) | *EJ-2*: entry hub → "What went wrong?" triage | base only (a triage router; loadings live on the target screens) | `support.html` |
| C7 | **Report an issue** | `EJ-2` | *EJ-2*: "result not as expected" → evidence? → review | **Empty** ✓ (no evidence — weaker claim, manual review) · **Loading** ✓ (issue under review) | `report-issue.html`, `report-issue-empty.html`, `report-issue-loading.html` |
| C8 | **Resolution outcome** | `EJ-2` | *EJ-2*: review → Resolution? (refund / free re-do / human) | base only (shows the outcome; branches are links, not states) | `resolution.html` |
| C9 | **Contact human support** | `EJ-2` | *EJ-2*: safety/trust or unresolved → agent | **Error** ✓ (unresolved with agent → escalation queue) | `contact-support.html`, `contact-support-error.html` |

**`order-details` is three files, one per service — not three states.** Added 2026-08-16 on the designer's
word: «у мене є три різні сторінки have already made orders де є доставка, огляд криші та фото — так от вони
мають мати різні назви відповідно і різні фотки». `order-history` lists three finished orders and all three
cards opened the **same** record, so a client who tapped the roof inspection was shown a parcel on a doorstep
under the heading *Package delivery*. The record is per-order data, and the two things that differ per service
are exactly the two she named — **the heading** and **the deliverable in the well**:

| File | Heading (nav bar) | Summary rows | Deliverable zone | Frame |
|---|---|---|---|---|
| `order-details.html` | Package delivery | From · To · Parcel · Delivered · Operator · **Paid** | **Delivery photo** | `scenes/delivered-at-door.jpg` |
| `order-details-inspection.html` | Roof inspection | Location · Structure · Delivered · Operator · **Paid** | **Inspection report** | `scenes/inspection-roof-cracked-tiles.jpg` |
| `order-details-aerial.html` | Aerial photo &amp; video | Location · Shoot · Delivered · Operator · **Paid** | **Photo &amp; video set** | `scenes/aerial-rafting-run.jpg` |

The three zone names are not invented for this screen — `voice.md` **O5** already fixes one name per
deliverable: *delivery photo* · *inspection report* · *photo/video set*. Structure, zone order, action bar
(`Book again` / `Delete order`) and the single `Paid` line are byte-identical across the three; only the
per-order strings and the one `<img>` differ, which is what makes them one screen with three instances rather
than three screens. Still **base only**, for the reason the row above gives, and still no traceability column
moves in `sitemap.md §6.1`.

**`Paid` is the summary card's last row, not a zone of its own** — 2026-08-16, the designer on the built
aerial record: «помісти інфу Paid 800 у картку з самері і так само на ще 2 аналогічних фреймах». The screen
had **three zones** and the middle one of the two card zones held **one row**: rev 132 took the breakdown off
(`Base fare` / `Distance` / `Service fee`), and what was left was a card whose label said nothing the row
below it did not already say. `Paid` now closes the summary, so the record reads **what · where · when · who ·
how much** in one panel and the deliverable is the only thing between the summary and the action bar. The
zone list per file drops from four to three: **Summary** ▸ *what was done · where · what it cost* ·
**deliverable** ▸ *what the operator sent back* · **Action bar**.

The row takes the card's own style — **13 slate key / 15 medium value**, identical to the four facts above
it — and not the **20/700 tabular** money step it carried as a total. Her call, put with the standards first
and both readings conforming (`HIG · inset grouped lists` ships either a uniform row or an emphasised total
row; `WCAG 1.4.3` unchanged at key **5.95:1** / value **14.37:1** on `--card`, `1.3.1` keeps the key/value
pairing either way). The reasoning that decided it: with the breakdown gone there is no column for a total to
total, so the sum is a fact of the record like the other four. `.dr-rows__row--total` is therefore spent on
`order-review` alone, which is where a total still has rows to add up.

### Operator — Step 8

| # | Screen | Job | Flow position | States (real) | Files |
|---|---|---|:---|:---|---|
| O1 | **Operator landing / fee terms** | `MJ-2` activation · `OE-12` | *MJ-2 activation*: onboarding → landing → commission acceptable? | base only (informational gate; decline is a legit exit, not a state page) | `operator-fee-terms.html` |
| O2 | **Sign up / identity** | `MJ-2` | *MJ-2 activation*: fee accepted → Sign up → Verification | **Error** ✓ (identity declined / failed — Diia/BankID) · **Loading** ✓ (verifying identity) | `operator-signup.html`, `operator-signup-error.html`, `operator-signup-loading.html` |
| O3 | **Verification / document upload** | `MJ-2` gate · Drop-off #3 | *MJ-2 activation*: upload → docs complete? → under review → approved? | **Error** ✓ (missing/invalid docs, or rejected → reason + resubmit) · **Loading** ✓ (under review — ETA 2-3 business days) | `operator-verification.html`, `operator-verification-error.html`, `operator-verification-loading.html` |
| O4 | **Profile setup** | `RJ-C1` consumes · `EJ-3` | *MJ-2 activation*: approved → Profile setup → home | base only (a setup form; no data state in the flow) | `operator-profile-setup.html` |
| O5 | **Dispute / client issue (operator side)** | `EJ-2` operator side · `OE-13` | *MJ-2 main*: client disputes → payment held pending EJ-2 | **Error** ✓ (payment held pending resolution) | `operator-dispute.html`, `operator-dispute-error.html` |
| O6 | **Ratings dashboard** | `EJ-3` · `O-06` | *EJ-3*: home → Ratings → has ratings? | **Empty** ✓ (no ratings yet — cold-start O-2; auto-dispatch keeps feeding jobs) | `ratings.html`, `ratings-empty.html` |
| O7 | **Operator account / profile** | `§7.4` operator utility + role switch | *Account tab*: operator taps Account → own account (mode dropdown Operator ⇄ Client) | base only (fixes the leak where the operator Account tab opened the client `account.html` and dropped them into the client flow) | `operator-account.html` |

**Not a new screen.** *Service catalogue* (`sitemap.md §6.1`) stays **merged into `listings.html`** per
`sitemap.md §7.3` (Home ⊃ Catalogue) — no separate file, by design. Recorded here so its absence is explicit.

**Milestone (success = base) in Step 8:** only **Inspection report** (the `C-2` outcome, mirror of *Delivery
confirmation*). Every other Step-8 base is a normal/entry view, not an "it worked" screen.
