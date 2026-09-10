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
- **One file per service, three of them — 2026-08-16.** The screen was built once and painted as
  *Package delivery* (Pickup · Drop-off · Parcel size), while all three service cards and all three
  *Book again* buttons pointed at it — **6 links** sending a non-delivery service into a delivery form
  (`listings` ×2, `listings-filtered` ×2, `order-details-aerial`, `order-details-inspection`). That is
  `WCAG 2.4.4 Link Purpose (In Context)` at **level A**: *Book again* on an aerial record read as
  "book the shoot again" and resolved to a form asking parcel weight. Found by the designer on
  `order-details-aerial`, closed on her call — the same *one file per service* shape she had set two
  entries earlier for the order record:

  | File | Nav title | The thing ordered | Exit |
  |---|---|---|---|
  | `order-setup.html` | Package delivery | Pickup · Drop-off · **Parcel size** | → `order-review` (auto-dispatch) |
  | `order-setup-aerial.html` | Aerial photo &amp; video | Location · **Shoot** · **Duration** · **What you get** | → `time-slot` (calendar-first) |
  | `order-setup-inspection.html` | Inspection | Location · **Structure** | → `time-slot` (calendar-first) |

  **Why two of them end at a time slot and one does not:** `sitemap.md` CE-2 gives each service a *flow
  mode — auto-dispatch vs calendar-first*. Delivery is dispatched now; a shoot and an inspection are
  booked for an hour. This is also what finally gives `time-slot.html` / `time-slot-empty.html` an
  entrance — both were built and, until this pass, **reachable from no screen in the order flow**.

  **`What you get` is aerial's alone, and it is new (designer's call, 2026-08-16).** The client picks
  *Photo* / *Video* / *Photo &amp; video*, so the aerial deliverable is chosen rather than fixed — see
  `voice.md` **O5**, amended in the same pass. A delivery photo and an inspection report are single
  files and have nothing to choose.
- **States are not repeated per service.** `order-setup-empty.html` / `order-setup-error.html` stay on
  the delivery file. Both are service-independent by their own flow nodes — *"none available now"* is a
  fleet fact and *"address outside service zone"* is a coverage fact, neither of which changes wording
  or shape with the service. Repeating them would add four pages that differ only in a nav title.
  Recorded as a decision, **not** an omission.

### 6. Order review & price
- **Job:** `RJ-C3` — *"decide without being surprised at checkout"* (the locked price before commitment).
- **Place in flow:** MJ-1 node `Order review & price`, between setup and Payment. *Per `sitemap.md §7.3` this is physically merged into Order setup (price above the Pay button) — a thin screen.*
- **States:**
  - **Empty —** not produced.
  - **Error —** only on the re-book path (`RJ-C5`: *"previous service or price changed"*), which is out of this main-path scope.
  - **Loading ✓** — the final price must resolve / lock before it can be shown (`RJ-C3` "locked price" rule). Real pre-render state.
  - **Success —** no "it worked" screen; hands off to Payment.
- **One file per service, three of them — 2026-08-16**, the pass after the setup screens split. The
  designer, on the rewired flow: *«order-review для них буде різним в частині summary яке має
  відображати відмінності в частині деталей що вже змінені»*. Correct, and it reached past the
  summary — the built screen also priced the order by `Distance · 7.4 km`, named *Package delivery*
  in its back button and said `Pay ₴180` twice:

  | File | Summary rows | Price rows | Back | Total |
  |---|---|---|---|---|
  | `order-review.html` | Service · Pickup · Drop-off · Parcel · When | Base fare · **Distance · 7.4 km** · Service fee | Package delivery | ₴180 |
  | `order-review-aerial.html` | Service · Location · **Shoot** · **What you get** · When | **Shoot · 30 min** · **Photo &amp; video** · Service fee | Pick a time | ₴800 |
  | `order-review-inspection.html` | Service · Location · **Structure** · When | **Inspection · 3 parts** · **Inspection report** · Service fee | Pick a time | ₴650 |

  **The deliverable is priced on its own line** — the designer's call, taken over a delivery-shaped
  *base fare + variable + fee*. `voice.md` **P3**: she had just made *What you get* a client choice,
  and a choice that moves the price must show its price before the tap rather than hide it in a base
  fare. Applied to inspection too, so the two calendar-first services do not disagree about what a
  breakdown is; there the line is the report, which is what `target-audience.md` says C-2 is buying.
  **Every breakdown reconciles exactly** — 500 + 280 + 20 = 800, 480 + 150 + 20 = 650 — because a
  breakdown that does not add up is the "plus fees" surprise `RJ-C3` exists to prevent. Neither total
  is invented: both are what the matching record was paid, and `time-slot`'s action bar was already
  showing `₴800`.
  **Shoot and Duration share one summary row** (*Event · 30 min*), as on the finished record: the
  form takes them as two pickers because nine combinations do not belong in one sheet, and the
  summary joins two facts with the middot the product already uses. Review and record read
  identically, which is what makes *Book again* a promise the next screen keeps.
  **`When` is a booked hour, not an ETA**, on both calendar-first files — they are reached through
  `time-slot`, so the row states the slot chosen there rather than *Now · ~25 min*.
  **Back names `Pick a time`**, not the setup form: on these two services the slot list is the
  previous screen (`HIG · Navigation Bars`).
- **The chain below review was split in the same pass, on the designer's call — 2026-08-16.** Which
  files needed it was **measured, not estimated**: a scan for the delivery-bound strings (`parcel`,
  `pickup`, `drop-off`, `₴180`, `Package delivery`, `En route`) found **seven** carrying them, and
  only seven. The rest of the chain — `payment-error`, `payment-loading`, the three
  `order-confirmed` states, `tracking-loading`, `delivery-error`, `delivery-loading`, `rate` — is
  already service-neutral and was left alone.

  | Screen | Was bound by | Now |
  |---|---|---|
  | Payment | `₴180`, *Package delivery* | `payment-aerial` ₴800 · `payment-inspection` ₴650 |
  | Order confirmed | *En route to pickup* | `order-confirmed-aerial` · `-inspection` — **When / Booked**, not an ETA |
  | Live tracking + `-empty` + `-error` | *En route to drop-off* | `tracking-aerial*` (*to the shoot*) · `tracking-inspection*` (*to the site*) |
  | Delivery confirmation | *parcel* | `delivery-aerial` — the aerial *Photo &amp; video set*; inspection keeps `inspection-report` |
  | Order review · loading | *Pickup* · *Drop-off* under the skeleton | `order-review-loading-aerial` · `-inspection` |

  **What is deliberately unchanged in the split files:** the operator card, rating and both trust
  badges on `order-confirmed` and every `tracking` state — `RJ-C1` does not weaken because the
  operator arrives on Wednesday rather than in eight minutes. The four-node rail (*Accepted · En
  route · On-site · Done*) already fitted all three services. The `cc-*` autocomplete tokens
  (`WCAG 1.3.5`), the drawn labels (`3.3.2`), the 44pt rows and the Contact-operator drawer are carried
  byte for byte — the drawer's masking note included until 2026-08-24, when it came off all nine files at
  once and left them byte-identical still (§9a).
  **`order-confirmed` states the booking rather than asserting motion.** *Your operator is on the
  way* is false for a service booked for Wednesday; the two calendar-first files say *Your shoot /
  inspection is booked for Wed 2 Jul, 09:00* and their rows read **When** and **Booked**. *Track
  live* stays the exit — a prototype compresses time, as the delivery flow already does by not
  making anyone wait 25 minutes — and the screen tells the truth about when that is.
- **The slot list had to split too — two files beyond the thirteen, and stated rather than folded
  in.** `time-slot` was one file serving both calendar-first services, so its five exits could name
  only one review: with it pointing at aerial, **six of the thirteen new files were unreachable by
  walking the prototype** and could only be opened from the shell tree. `time-slot-inspection.html`
  and `time-slot-inspection-empty.html` close that. **All three chains now walk end to end** —
  verified by following the links, not by reading them.
  `time-slot.html` remains the **aerial** instance. The unsuffixed file is the default instance, as
  `order-setup.html` and `order-review.html` are for delivery — except that delivery never reaches a
  slot list at all, so the name is doing less work than usual. Renaming it to `time-slot-aerial.html`
  is the designer's call and is not assumed.

- **Pay opens a drawer, not a screen, from 2026-08-16** (designer: *«по кліку на pay має відкриватись дровер а
  не сторінка … кнопки з іконкою чорного кольору apple pay та google pay або можливість обрати картку … лиш усі
  кнопки залиті праймері»*, against a Figma reference — file `YlGWlsWWjKSCxhONMzGG2F`, node `95:10`, an eSIM
  checkout whose bottom edge is a black Apple Pay button over a *Pay with card* text action). **Not a state and
  not a sub-view, so it takes no row in the matrix** — a control on this page, the same reading `listings`'
  category chips and the date drawer already get. Three options, so it is a **drawer** by the ≤ 6 rule
  (`_conventions.md` §the picker rule; `HIG · Action sheets`).
  **It does not delete a node, it forks one.** *Pay with card* still pushes **Payment**, which keeps that
  screen and its error / loading states on the main path; **Apple Pay** and **Google Pay** skip it — the
  method is already chosen — and land on **`payment-loading`** (*"Authorizing your payment…"*),
  which is where an express charge actually is.
  **What the pushed screen holds changed on 2026-08-16**, the designer reading the built drawer:
  *«по кліку на кнопку "Pay with card" відкриваються поля вводу номера картки дати csv та ім'я власника
  та сторінка яку ти відкриваєш вже не релевантна»*. Until then `payment.html` carried its own three
  methods, so the drawer asked *which method* and the screen asked it a second time. It now takes the
  **card**, which is the only thing left to ask once the drawer has answered the method — see §7 below.
- **Job:** `MJ-1` — the pay step of the core flow (`C-04`, Apple / Google Pay / card).
- **Place in flow:** MJ-1 node `Payment`, after review, before auto-dispatch. System Pay sheet (`§7.3`).
- **Two zones: the locked amount, then a titled card of card fields** — **Card** ▸ *Visa or Mastercard,
  charged once for this order*, over five typed rows: **Card number · Expiry · CVV · First name · Last name**.
  **The title and subtitle arrived 2026-08-16** on the designer's call to give every card that takes entered
  data the same two lines (*«якщо в проекті ще є аналогічні картки добав до них так само заголовок і
  підзаголовок»*); the amount block above it takes none, being a figure and not a card. The subtitle says
  **for this order** because `account-edit`'s card is the saved default and this one is the charge being
  made now, and it names **Visa or Mastercard** because which cards work is a fact the client needs before
  typing sixteen digits, not after (`voice.md` P3).
  **The method list came off the same day** and with it the three radios (Apple Pay / Google Pay / Visa ••••
  4921): the drawer on `order-review` had already answered *how you pay*, so repeating it here asked a
  settled question and delayed the only unsettled one.
- **The card is entered, not chosen — so `WCAG 1.3.5 Identify Input Purpose` (AA) governs this screen.**
  Each of the five inputs carries the criterion's own token — `cc-number` · `cc-exp` · `cc-csc` ·
  `cc-given-name` · `cc-family-name` —
  and the same attribute is what makes iOS offer *Scan Credit Card* over the keyboard (`HIG · Text fields`),
  so one attribute pays both. `3.3.2` is carried by the drawn `.dr-field__label` on every row (no
  placeholder-only field), `HIG · 44pt` by `.dr-field`'s `min-height: --h-control` = 44px, and `2.4.7` by the
  caret rather than a ring — the rev 100 rule for text fields, inherited, not re-decided.
  **The security code is masked** (`type="password"`), the one field on the screen whose value should not
  stand readable over a shoulder; label **CVV** is the designer's word (*«csv»*), where Mastercard prints CVC
  and Apple's own forms say *Security Code*.
- **The name is two rows, not one — the designer's call, 2026-08-16:** *«імя прізвище»*. She was shown both
  with the standards first: `WCAG 1.3.5` names **both** shapes and both conform — `cc-name` for a single
  field, `cc-given-name` + `cc-family-name` for the split — and `HIG · Text fields` asks for the fewest
  fields, the name being printed on the card as one line. So it was a taste call with nothing failing either
  way, and she took the split. **Cardholder** retires with it; the two labels are **First name** · **Last
  name**, the same pair `account-edit` would take if its `Full name` were ever split.
- **Five stacked rows, not two-up.** *Expiry* and *CVV* are half-length values and sit side by side in most
  checkouts, but the kit has no two-up row: `.dr-field--half` is the **rate** screen's half-*screen*-height
  textarea, not a half-width field. Building the pair would mean adding a component, which is the designer's
  call and not a side effect of this change. Recorded here so the shape is a decision, not an oversight.
- **The rows take `.dr-rows--card`, and it was measured before it was added.** Built without it the group hit
  rev 98's plain-list strip — the fields lose their own 16 while `.dr-zone > .dr-rows` still bleeds the group
  out by −16 — so on the 375 frame every label stood at **x 17 against a title at 33**, 16px left of the card
  it lives in, and all three separators ran **0 → 0**, edge to edge instead of starting at the card's inset
  (`HIG · Lists and tables`, the inset grouped list). Both alignments are WCAG-clean; this is HIG and the
  project's one-axis rule (`ui/inventory.md` rev 114), not contrast and not a target. Same modifier and same
  reason as `account-edit`'s Personal card (rev 124) — the product's other titled card of typed rows.
  (The before-figures are the four-row build; the split into `First name` / `Last name` came after.)
  **Measured after, 375 × 812, on the five-row card:** card **341 × 317.98**, labels **33** on the title's own
  axis, values **183** (= 166 in the frame, rev 114's figure for a group that keeps its card), all four
  separators **16 → trailing edge**, every row **44** (`HIG · 44pt` ✓), no horizontal overflow. The card ends
  at **591.54** against the action bar at **691** — **99.5** of clearance, so the fifth row costs nothing.
  Value track **159**; the 4-4-4-4 number measures **157**, so it fits by **2px** — a 19-digit Maestro number
  would clip, and is recorded, not designed around.
- **`Save this card for next time`** sits on the bottom edge above `Pay ₴180`, the same component and the
  same sentence shape as `order-setup`'s `Save this address for next time` — checkbox `.dr-box--check` in
  the action bar, `form="card-form"` so it stays a control of the form it left (`WCAG 1.3.1 / 4.1.2`), placed
  **before** the button so DOM order equals reading order (`WCAG 2.4.3`). It is also what gives
  `account-edit`'s saved **Visa •••• 4921** an origin in the flow: without it, no screen in the product ever
  saves a card. Chosen 2026-08-16 over a form with no switch (the saved card would have no source) and over
  a saved-card row above the form (which would put a chooser back on a screen that just lost one).
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
- **Sub-view ✓** — `chat.html`, the message thread with the operator (base only). Reached from the
  **Contact operator** drawer, not from the flow spine; see below.

**"Contact operator" opens a drawer, and one of its ways out is a new screen** — 2026-08-16, the
designer on the built `tracking`: *"by clicking on 'Contact operator' open drawer with opportunity to
select call, chat, support and add wireframes with a chat with operator."* The button was a plain
`<a href="support.html">`, so a client who wanted to reach **the operator** was handed **the Help hub**
— the one target the recovery sweep in `_critique.md` #2 repointed it to when it pointed at the profile,
and still not the person the label names. The control now asks the question its label asks: **who, and
how.**

| Way out | Row label | Target | Why it is that shape |
|---|---|---|---|
| the phone | **Call operator** | `call.html` | **The second new screen** — built 2026-08-16 on the designer's word, *«зроби фрейм який відкриє дзвінок»*. It shipped for one build as a `tel:` handoff to a masked line, on the reading that the OS dialer answers a call; she asked for the call to be DRON's own screen, which is what a masked in-app call actually is — the number was never the client's to see, so neither is the dialer. `voice.md` **A2** permits the phone-only action to say *Call*, and the row label does not move. **The invented masked number leaves with the `tel:`** — nothing on any frame states a phone number now. |
| the thread | **Chat with the operator** | `chat.html` | The new screen. Her own word, fixed as `voice.md` **A12**: *chat* here is a **verb taking its object**, which is what the Button rule asks for — not the bare noun that names a room. `A9`'s *Send message* stays on the composer's own button, one message at a time. |
| the platform | **Contact support** | `support.html` | `voice.md` **A2**'s fixed string, unchanged — where the button used to land for everyone. |

**Three options is a drawer, not a screen** — the `≤ 6 → drawer` / `≥ 7 → push` rule (`ui/kit.js`), and
`HIG · Action sheets` says the same. It is the product's **eighth** drawer and the **second** raised by
an action-bar CTA rather than by a field row, after `order-review`'s Pay drawer (rev 129), so `kit.js`
needs no widening: `.dr-btn[aria-controls]` already matches.

**All three tracking states take it, not just the base.** `concept.md` rev 26 fixed the rule for this
exact control — *"the same control at the same weight in every state"* — after `tracking-error` and
`tracking-empty` had drifted to the grey secondary. A control that opens a drawer on one state and
navigates on two others is the same drift arriving through behaviour instead of through colour.
`tracking-loading` has no operator card and no such button, so it is untouched.

**The masking sentence came off all nine client drawers on 2026-08-24 — her word.** It read *Calls and
messages go through DRON. Your number is not shared with the operator.* and it is kept struck through in
`microcopy.md`, not deleted from the record. The instruction was given on `job-checklist` (*«delete this
sentence»*) and the scope was hers when it was put to her: **everywhere** — the two operator checklist
states and the three tracking trios, **eleven frames**. `aria-describedby` came off each `<section>` with
it, an IDREF resolving to nothing being invalid (`ARIA 1.2`); every drawer keeps its accessible name from
`aria-labelledby` (`WCAG 4.1.2` ✓, verified on the built frames — **0 dangling IDREFs**). Measured: the
client drawer stands at **276.8** against **324.8** (36 of note + the sheet's 12 gap), all four rows still
**44** (`HIG · 44pt`), **0px** horizontal overrun; the drawer block is verified **byte-identical across all
nine files** after the cut, which is the rule the paragraph above sets.

**What it cost is written here rather than discovered later.** The sentence answered
`ux-research/user-stories-cjm.md`'s 🔴 risk *"direct channel bypasses platform"* by telling the client why
DRON sits in the middle. **The mechanism is untouched** — the call still runs down DRON's own screen and
no frame states a number — but the client is no longer told why, and with `call`'s own line already gone
at rev 144 the masking fact is now stated **nowhere in the product**, on either side. One instruction puts
it back; that is why the string is kept.

### 9b. Chat with the operator  *(sub-view of 9 · base only)*
- **Job:** `RJ-C2` — the void between payment and arrival, closed by a channel to the person named on
  the screen above; `RJ-C1` keeps the operator a real, reachable human rather than a photograph.
- **Place in flow:** *not on the MJ-1 spine.* `Live tracking & ETA` → **Contact operator** drawer →
  *Chat with the operator* → here; back returns to tracking. Nothing downstream depends on it.
- **States:** **base only.** No `flows.md` node produces an empty, error or loading thread — the thread
  is opened from a live job that already has an operator, so it is never empty; a failed send is a
  per-message state, not a screen. Built as one file, `chat.html`.
- **Scope, and the sitemap verdict it does *not* overturn:** `sitemap.md §4` deletes *Client ↔ operator
  chat / messaging* as the Rover **async-negotiation** anti-pattern — bargaining over a job **before**
  booking, which `ux-research/research.md` (Finding M-1) says *"will not work"* for a Bolt/Glovo
  audience. This is the other thing: a channel that exists **only while a paid job is running**, between
  a client and the one operator already dispatched to them, with nothing to negotiate — the price is
  locked (`RJ-C3`) and the operator was auto-assigned. It is the Bolt in-ride message, not the
  Kabanchik thread. The deletion verdict stands for what it deleted; `sitemap.md §4` is annotated rather
  than reversed.

### 9c. Call the operator  *(sub-view of 9 · base only)*
- **Job:** `RJ-C2` — the fastest channel to the person on a live job, for the thing that cannot wait
  for a typed message (a locked gate, a wrong entrance, a drone already overhead); `RJ-C1` keeps the
  operator a reachable human.
- **Place in flow:** *not on the MJ-1 spine.* `Live tracking & ETA` → **Contact operator** drawer →
  *Call operator* → here; **Minimise** and **End call** both return to tracking. Nothing downstream
  depends on it.
- **States:** **base only** — the connected call. Built as one file, `call.html`.
- **It is DRON's own screen, not the OS dialer.** Built 2026-08-16 on the designer's word —
  *«зроби фрейм який відкриє дзвінок»* — replacing the `tel:` handoff rev 141 shipped. Her call is
  also the more coherent one: the number is masked (`ux-research/user-stories-cjm.md` logs the
  direct-channel risk in red), so it was never the client's to see, and handing them a dialer showing
  a number DRON invented is the one thing the masking exists to prevent. **The invented number left
  with the `tel:`** — no frame in the product states a phone number now.
- **Built to her own reference, and it is the product's one dark screen.** She pointed at Figma
  `YlGWlsWWjKSCxhONMzGG2F` node `99:26` — *«зроби цей екран як тут»* — then *«лиш без емоджі і меню
  3 dots»*, so the emoji reaction and the "…" overflow are the two things from that frame
  deliberately absent. **The dark ground is the platform rather than a second theme:** WhatsApp,
  Telegram, Messenger, FaceTime and iOS's own CallKit are all dark whatever the app's theme is,
  because a call is a full-screen takeover that has to recede. `#F7F5F2` stays the product's ground
  on every other screen. Two tokens carry it — `--night` (the same `#1A1A1A` as `--ink`, named for
  the role, the way `--on-green` is) and `--night-raised` `#2E2E2E`, **the one new colour value.**
- **Three things from the reference were not copied**, each because a project rule already answers
  it: the **doodle wallpaper** (WhatsApp's own decoration — §0's imagery rule is *real, never
  decoration*; the ground is flat `--night`, and if this surface ever carries a texture it has to be
  DRON's); the **filled iOS glyphs** (§5's icons are flat outline on a 24-grid at 1.7, declared once
  — one screen does not get its own icon language); and the **magenta portrait disc** (outside the
  palette entirely).
- **The portrait is a placeholder, and so is the reference's.** `visuals/gaps.md` B1 #4 records that
  the product's one human cutout, `operator.png`, is shot three-quarters *from behind*, so a circular
  crop gives the back of a head — the same finding that left `order-confirmed`'s `avatar:AM` slot
  unplaced. The disc is `--night-raised` holding the kit's own outline person glyph, which is exactly
  what the reference shows for *Samuel*, who has no photo either. When
  `people/person-operator-andriy.png` arrives it drops into this disc as a picture and nothing else
  on the screen moves.
- **No nav bar — `HIG · Modality`.** A call is presented modally rather than pushed onto a stack, so
  the ways out are the two the reference draws: **Minimise** (back to the map, the call carries on)
  and **End call**. It is the product's only screen with neither a back control nor the DRON mark,
  which `_conventions.md §12b`'s checklist does not provide for because the checklist assumes a
  navigational screen. Recorded as a departure, not filed as a defect.
- **Minimise answers the cost the first build recorded, and only half of it.** That frame's one exit
  was *End call*, and its note said plainly that you could not watch the map while you talked; her
  reference draws the control that fixes it. **The other half is not built** — a call banner on
  `tracking`, so a running call is visible once you are back on the map, is a second screen's change.
- **Two controls have no job behind them in `sitemap.md`**, and both are in her frame rather than
  invented here: **Video** (a video call with the operator) and the **person+** top right, built as
  *Add support to the call* → `contact-support.html`, which is the nearest thing DRON does have
  (`EJ-2`, reach a human). Flagged rather than smoothed over: if the second is not that, it should
  come off rather than be invented into something. The bubble beside it opens `chat.html`, a real
  screen, and needs no interpretation.
- **No green at all, and the one saturated fill is red.** `--green` is 1.69:1 on the light page and
  would be a different colour again on `--night`, so the accent simply does not come here — the count
  rule holding rather than bending. `End call` is `.dr-btn--danger-solid.dr-btn--icon`, the first
  spend of `--danger` as a fill since it was declared at rev 25. **Icon-only, so `WCAG 1.4.3` does
  not apply at all** — the thin 4.53:1 text pair the light build carried is gone with the label; what
  remains is `1.4.11` on the glyph, `--page` on `--danger` at **4.53:1** against a 3:1 floor. The
  frame carries **no shadow**, verified by computed style.
- **Measured, 375 × 812.** Bar **234 × 60**, centred, four **44 × 44** discs on **14px** gaps — all
  three numbers read off the reference rather than chosen: its five discs measure 35px in a 295-wide
  frame, which is 44 at 375, on 46px centres. Portrait disc **176** (`--sz-avatar-call`, the
  reference's 48.1% of frame width landed on the 8-grid at 46.9%), centred between the top row and
  the bar at **184 / 192** — the reference balances it the same way. Zero scroll, zero horizontal
  overflow, every target 44 or wider. Pairs: `--page` on `--night` **15.99:1**, `--btn2` on `--night`
  **11.54:1** (the duration), `--night-raised` on `--night` **1.28:1** (the tone step, between the
  light side's 1.11 and 1.25), `--page` on `--night-raised` **12.48:1**. **`--slate` is barred on
  this surface at 2.42:1** — a real `1.4.3` failure — which is why the secondary ink here is `--btn2`
  and never the one the light screens use.
- **Two states are traceable and deliberately not built:** **calling** (loading — the seconds before
  the operator picks up) and **no answer** (error — with *Chat with the operator* / *Contact support*
  as the way out, so it is not a dead-end). The designer asked for *a* frame, singular; these are
  recorded here so their absence is a decision rather than an oversight, and they are one word away.

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

**The three cards now open their own screens (2026-08-21).** Both offer cards sent their tap to the
same `job-offer.html` and their **Accept** to the same `job-brief.html`, and the active card sent its
tap there too — three different jobs, two shared destinations, both headed *Package delivery*. The
split is recorded at §13 and §14; **on this page only the `href`s move**, and no card, string, zone or
value is touched.

### 13. Incoming job offer / accept-decline
- **Job:** `RJ-O1` — *"accept or pass without stopping to ask questions"* (`O-01`, lock-screen decision).
- **Place in flow:** MJ-2 node `Incoming job offer / accept-decline` → `Accept within 10s?`.
- **States:**
  - **Empty ✓** — *"offer expired, reassigned"* (`Accept within 10s? → no`).
  - **Error —** not produced here.
  - **Loading —** not produced here.
  - **Success —** accepting hands off to the Job brief; no "it worked" screen.

**Two files, one per service, not two states (2026-08-21).** The designer, on the built list:
*«коли я обираю accept мають відкриватись відповідні картки якщо це roof inspaction то і картка має
бути відповідна відкриватись»*, and on how far it goes: *«офер бриф та ще й нотатки якщо клієнт
залишив якісь»*. `operator-listings` carries two incoming offers and both pointed at this one file,
which names **Package delivery · ₴180 · Podil → Osokorky**. Tapping *Roof inspection · ₴650 · Obolon
district* therefore opened a parcel — `WCAG 2.4.4 Link Purpose (In Context)`, level **A**, failed by
the same reading that closed `order-details` on 2026-08-16 and `earning-details` on 2026-08-21: the
card's own accessible name is `Roof inspection job — open brief`, so the link states a purpose its
destination does not carry.

| File | Nav bar | Offer card | Second zone | Client note | Countdown | Accept → |
|---|---|---|---|---|---|---|
| `job-offer.html` | New job | Package delivery · 2.3 km · ~18 min · **₴180** | **Route** — Pickup *Podil, 21* → Drop-off *Osokorky, 14* | **not built** — see the open question below | Expires in 8s | `job-brief.html` |
| `job-offer-inspection.html` | New job | Roof inspection · 5.1 km · ~35 min · **₴650** | **Site** — Location *Obolon district* · Structure *Roof · gutters · chimney* | **Notes** — *Two storeys. Ladder access from the yard, gate code 22B. The north slope is where the water comes in.* | Expires in 6s | `job-brief-inspection.html` |

**The second zone changes name with the service, because the shape of the trip does.** A delivery has
two stops and reads `Route ▸ pickup → drop-off`; an inspection has one site and reads `Site ▸ where it
is · what is checked`. **Nothing is invented:** the distance, the minutes, the pay and the countdown
are `operator-listings`' own card, read off the frame; the structure string is the client's record
(`order-details-inspection`); the drone in the well is `drone-11.png`, the thumbnail `listings.html`
already gives Inspection.

**The inspection offer carries the client's note from 2026-08-24 — her call, and it reverses the one
recorded here on 2026-08-21.** The designer, on the built frame: *«зроби ще одну картку з повідомленням
від client»*. The reading it replaces is kept, not deleted, so it is not re-proposed later as a
discovery: `RJ-O1` gives this screen a ten-second decision, and the note was held one screen back —
on the brief, *"everything in one glance"* — on the ground that prose competes with the countdown for
those seconds. **What the build shows is that there were seconds to spare.** Measured on the frame in
product view (annotations off, `375 × 812`): the column stands at **577 of 577** with the note in it —
**no scroll** — and *Expires in 6s* ends **125.83px clear** of the bottom of the scroller, in the place
it already had. The countdown is still the last thing in the column, directly over **Accept**, so the
seconds are read where the tap is made.

**The note is the same string, not a second version of it.** The client writes it once, in
`order-setup-inspection`'s *Notes for the operator* field (placeholder *«Height, access to the roof,
what you want checked…»*), and `job-brief-inspection` and `job-offer-inspection` both read that one
record. The zone is named `Notes ▸ client instructions` on both screens for the same reason —
`voice.md` keeps one word per concept, and the concept is *what the client wrote*.

**Open question, put to her and not taken: the delivery offer.** `job-offer.html` has a client note on
its brief (*Leave with the concierge, entrance code 4417.*) and does not carry it on the offer, so the
two offer files now differ in structure where §13's whole point was that they differ only in data. Her
instruction named the inspection frame; carrying it across is one card and one zone label, and it is
hers to say. `job-brief-aerial`'s answer for an empty field applies if it goes across — *the absence is
stated, not dropped*.

**No `-aerial` offer file.** The aerial job on the list is already **In progress** (*checklist 3 / 5*):
it was accepted before the frame opens, so there is no offer of it to draw. It joins at §14.

### 14. Job brief / detail
- **Job:** `RJ-O1` / `MJ-2` — *"see everything I need — location, service type, duration, pay — in one glance"*.
- **Place in flow:** MJ-2 node `Job brief / detail` → `Details sufficient?` → `Able to fly (airspace / weather)?`.
- **States:**
  - **Empty —** not produced (insufficient-details → decline, back to offers).
  - **Error ✓** — *"stand down — airspace / weather; re-dispatched, client refunded"* (`Able to fly? → no`).
  - **Loading —** not produced here.
  - **Success —** hands off to the checklist; no "it worked" screen.

**Three files, one per service, not three states (2026-08-21)** — §13's split carried one screen down,
because **Accept** on an offer *and* the tap on an active card both land here. All three of
`operator-listings`' jobs opened `job-brief.html`, headed *Package delivery*.

| File | Well | Details rows | Notes | Action bar |
|---|---|---|---|---|
| `job-brief.html` | Route · Podil → Osokorky | Service · Client *Olena H.* · Pickup · Drop-off · **Pay ₴180** · ~18 min | *Leave with the concierge, entrance code 4417.* | **Start job** → `job-checklist.html` |
| `job-brief-aerial.html` | Site · Trukhaniv Island | Service · Client *Olena H.* · Location · Shoot *Event · 30 min* · **Pay ₴800** · ~30 min | **none left** — *The client left no notes.* | **Continue** → `job-checklist.html` |
| `job-brief-inspection.html` | Site · Obolon district | Service · Client *Maria D.* · Location · Structure *Roof · gutters · chimney* · **Pay ₴650** · ~35 min | *Two storeys. Ladder access from the yard, gate code 22B. The north slope is where the water comes in.* | **Start job** → `job-checklist.html` |

**The aerial file says `Continue`, not `Start job`, and that is the card's own verb.** It is the only
one of the three reached from an **active** job — *In progress · checklist 3 / 5* — so the work has
already begun and *Start job* would offer to begin it a second time. `operator-listings` already writes
**Continue** on that card; the brief repeats the word rather than inventing a second one for the same
act (`voice.md`, one word per concept). The delivery and inspection files are reached from an offer that
was just accepted, so they keep **Start job**.

**The Notes zone is the client's own field, and that field is optional.** All three `order-setup*`
screens carry a free `Notes for the operator` textarea — *"Floor, entrance code, what's inside…"* /
*"What to capture, access to the site, anything to avoid…"* / *"Height, access to the roof, what you
want checked…"* — and none of them requires it. So a brief can arrive with nothing in it, which is the
case the designer asked to see: *«нотатки якщо клієнт залишив якісь»*. **The aerial brief is the
instance that carries none**, and it **states the absence instead of dropping the zone**: an operator
who finds no Notes heading cannot tell *the client left none* from *it did not load*, and `voice.md`
**P5** asks for the plain fact rather than a silence. The line is not actionable, so it takes
`.dr-listing__desc` — `--slate` on `--card`, **5.95:1**, where `WCAG 1.4.3` needs **4.5:1** — and not
the note's own `--ink` **14.37:1**, which `job-brief` spends on the one line the operator has to act on.
**Open for the designer:** dropping the zone entirely on a noteless job is the other honest reading, and
it is one element away.

**Where it still diverges — reported, not fixed.** All three action bars go to `job-checklist.html`,
whose steps read *Parcel secured* and *Capture delivery photo* and whose CTA is *Complete &amp; add
delivery photo*; `result-upload` beyond it names *Package delivery*. That is `WCAG 2.4.4` again, one and
two screens further down, and it is **outside the scope the designer set** — *«офер бриф»*. §15 and §16
stay single-service until she says otherwise.

**One fact disagrees with itself, and it is left alone.** `operator-listings`' inspection card says
**Obolon district**; `earning-details-inspection` and the client's `order-details-inspection` say
**Osokorky, 14**. The two new files carry the card's string, because the whole point of the split is
that the destination matches the tap. They can also be read as two different roof inspections — a live
offer and a settled payout. **Open for the designer:** whether the list card should say *Osokorky, 14*.

### 15. Job checklist (in progress)
- **Job:** `RJ-O2` — *"a structured checklist... so I don't miss a required step"* (`O-03`; large touch targets for gloves / sunlight).
- **Place in flow:** MJ-2 node `Job checklist (in progress)` → `All steps + result captured?`.
- **States:**
  - **Empty —** not produced.
  - **Error ✓** — *"required step skipped — cannot close"* → back to the checklist.
  - **Loading —** not produced here.
  - **Success —** completing it hands off to Result upload; no "it worked" screen.

**`Contact client` opens a drawer, added 2026-08-21 on the designer's word** — *«додай сюди ще Contact
with client, по кліку відкривай дровер як у клієнта: дзвінок, повідомлення; додай wireframes яких не
вистачає»*. It is the **mirror of `§9a`'s `Contact operator` drawer**, built on the same
`ui/kit.js` contract and pointed the other way down the same channel.

**It is `RJ-O2`, not a new job.** The checklist's own last two steps are *Capture delivery photo* and
**Confirm handover with the client** — the two that cannot be completed alone. `ux-research`'s field
cases for them are a locked courtyard gate, a wrong entrance and nobody at the door, and until now the
operator's only answer on this screen was to improvise off-app, which is the exact thing `RJ-O2`
exists to remove. The channel already existed and only ran one way: `chat.html` is the client writing
*"the code is 4471"*, and no frame let the operator read it.

| Way out | Row label | Target | Why it is that shape |
|---|---|---|---|
| the phone | **Call client** | `call-client.html` | The **second new screen**. `voice.md` **A2** permits the phone-only action to say *Call*; the object changes and the verb does not. The number is masked in **both** directions — the operator has never been shown the client's — so this is DRON's own screen for the same reason `call.html` is, and not a `tel:`. |
| the thread | **Chat with the client** | `chat-client.html` | The new screen, and the **same conversation** `chat.html` already draws — the same five messages, read from the other end. `voice.md` **A12**: *chat* as a verb taking its object, the shape the designer fixed on 2026-08-16; `A9`'s *Send message* stays on the composer's own button. |

**There is no third row, and that is a finding rather than a trim.** The client's drawer ends in
*Contact support* → `support.html`, the Help hub. **The operator has no support hub in the product** —
`sitemap.md §6.2` gives the operator side no `EJ-2` entry of its own, and `operator-dispute` is a
*client-raised* issue on a closed job, not a channel to DRON. Inventing a target for a third row would
have been inventing a screen; pointing it at the client's hub would have crossed the two personas'
navigation. **Two rows is the honest count, and the gap is logged here for the designer** — the whole
operator-side `EJ-2` route is one decision, not one row on one drawer.

**Both checklist states take it, at the same weight.** `concept.md` rev 26's rule — *"the same control
at the same weight in every state"* — is what kept `Contact operator` from drifting to grey on
`tracking-error`. Here the weight is the **grey secondary** on both files, because the green budget is
already spent: `job-checklist` spends it on *Complete & add delivery photo* and `job-checklist-error`
on *Complete the step* inside the blocking notice. On the error state the drawer also does real work —
the close is blocked, and the person who can unblock it is at the other end of it.

**The masking sentence came off the drawer on 2026-08-24 — her word, *«delete this sentence»*.** It read
*Calls and messages go through DRON. Your number is not shared with the client.* and it is kept struck
through in `microcopy.md` rather than deleted from the record. What it was doing: `voice.md` **P3**'s
discipline — state the fact **before** the tap — applied to privacy instead of to price, and it was true
in this direction too, the masking being bilateral. **The structure it explained does not change:** *Call
client* is still a row with no number anywhere on the frame and it still opens DRON's own call screen
rather than a `tel:`. `aria-describedby` came off the `<section>` with it, because an IDREF that resolves
to nothing is invalid (`ARIA 1.2`); the drawer keeps its accessible name from `aria-labelledby`, which is
what `WCAG 4.1.2` asks of it. **Two consequences are reported and neither is decided here.** First, with
`call`'s own masking line already removed at rev 144, **the operator side now states the fact nowhere** —
the client's four `tracking` drawers still state it. Second, the instruction named `job-checklist` only,
so `job-checklist-error` kept the sentence for an hour; **put to her, the scope came back «everywhere»**,
and the error twin went with it — the two states are identical again, verified byte-identical in the
drawer block — along with the nine client drawers at §9a. Nothing in `wireframes/` was deleted without her
word: the base frame on her instruction, the other ten on her answer.

### 15a. Chat with the client  *(sub-view of 15 · base only)*
- **Job:** `RJ-O2` — the step *Confirm handover with the client* completed without improvising; it is
  `RJ-C2`'s counterpart, read from the operator's end.
- **Place in flow:** *not on the MJ-2 spine.* `Job checklist (in progress)` → **Contact client** drawer
  → *Chat with the client* → here; back returns to the checklist. Nothing downstream depends on it.
- **States:** **base only.** Same reading as `§9b`: the thread is opened from a live job that already
  has both parties, so it is never empty, and a failed send is a per-message state, not a screen. Built
  as one file, `chat-client.html`.
- **It is one thread, drawn twice.** The five messages are `chat.html`'s five, with `--in` and `--out`
  swapped and the `.dr-sr` speaker names exchanged — *Olena H.* is now the one being read and *You* is
  the operator. Nothing is written for this frame that the client's frame does not already say, which
  is the only way two screens of one conversation can be trusted to be one conversation.
- **`sitemap.md §4` is not re-opened by this either.** The deleted object is the **pre-booking
  negotiation** thread. This is the same in-job channel `§9b` scoped on 2026-08-16 — a paid job, one
  auto-dispatched operator, a locked price — reached only from the checklist of a job already accepted.

### 15b. Call the client  *(sub-view of 15 · base only)*
- **Job:** `RJ-O2` — the channel that does not wait for a typed answer, for the thing happening now: a
  gate that will not open with a drone already overhead.
- **Place in flow:** *not on the MJ-2 spine.* `Job checklist (in progress)` → **Contact client** drawer
  → *Call client* → here; **Minimise** and **End call** both return to the checklist.
- **States:** **base only** — the connected call. Built as one file, `call-client.html`.
- **The third instance of `.dr-call`, not a third call screen.** Everything it shares with `call.html`
  and `call-support.html` is byte-identical — the `--night` ground, the 22/700 name over the tabular
  duration, the 176px portrait disc, the `--night-raised` pill of four 44px discs, *End call* as the
  one saturated fill. **Three things differ, each forced by who is on the line:** the **name** is
  *Olena H.*, the string `job-brief` and `result-upload` already carry for this client; **both exits**
  return to `job-checklist.html`, because that is the screen the call was raised from and the job is
  still open on it; and the **top-right column keeps one control, not two** — the bubble to
  `chat-client.html` stays, and *Add support to the call* comes off, having no operator-side target
  (see the two-rows finding under `§15`).
- **The portrait disc is a placeholder for good, not a slot waiting on a file.** `visuals/gaps.md` B1
  #4 leaves the operator's own portrait pending; the **client's** portrait is a different thing — DRON
  has no client photograph in the repo and no reason to hold one, and the operator seeing a face before
  the door opens is not a job anything asks for. The disc stays the kit's outline person, the way
  `call-support`'s does.
- **`Video` is inherited, not re-decided** — the same reading `§9c` and `C9` already carry: a video
  call has no `sitemap.md` job on either side. It is here because the control bar is one component and
  one screen does not re-cut it; it comes off in one line, on all three call screens at once, if it is
  not wanted.
- **Two states are traced and not built:** *calling* (loading) and *no answer* (error — whose way out
  is the thread, so it is not a dead-end). The same pair `§9c` records, held to the same decision.

### 16. Result upload / close job
- **Job:** `RJ-O2` — the checklist ends in a result (`O-04`); this upload **gates** `RJ-O3` payment (proof before pay, `H-7`).
- **Place in flow:** MJ-2 node `Result upload / close job` → `Upload succeeded?` → `Client response?`.
- **States:**
  - **Base —** the frame as the checklist hands it over, and it has **no photograph yet**. The tray is the empty
    `.dr-upload` (`Add photo`) and `Replace photo` stands under it **disabled** — there is nothing to replace until a
    file lands. **Corrected 2026-08-21 on the designer's word** (*«тут має бути загрузити фото, кнопка "Replace photo" не активна
    відповідно»*): from 2026-08-16 the base drew the delivered-package photograph, which showed the `H-7` gate as
    already met at the moment you arrive and left the screen no way to do the one thing it exists for.
  - **Empty —** no page of its own: the base frame **is** the screen before the upload, so an `-empty` file would
    have nothing left to say.
  - **Error ✓** — *"slow or failed upload"* → retry / queue offline.
  - **Loading ✓** — *"saved offline — uploads when online; payment held until proof"* and *"awaiting confirmation (up to 2h)"*.
    **Rebuilt 2026-08-21 on the designer's word** (*«цей wairframes не правильний бо він має показувати анімацію
    загрузки та тій самій структурі сторінки що і success»*). It had been a **centred takeover** — one status block, a
    120px skeleton, one hint — with **all three of the base frame's zones gone**: `_conventions.md` §10's *"do not
    restructure the page per state"* broken outright, and the page's own sidebar legend (*"Only the content changes:
    Result photo → uploading status + photo skeleton"*) describing a page it was not. **§10's one exception — a system
    action with no layout to rehearse (`payment-loading`, `operator-verification-loading`) — does not reach here:**
    the form is on screen at the moment *Submit & close job* is tapped, and the tray is exactly the box the picture
    lands in. **It is now the base layout, re-contented in one zone.** `Job` rows and `Notes` stand as built — they are
    the facts being submitted, not content that is arriving — and only `Result photo` changes: the label reads
    *▸ uploading…*, the `.dr-upload` tray keeps its box and takes the kit's `.dr-sk-arrow` motion inside it: the tray
    holds still and only the arrow leaves it. **Since 2026-08-24 the waiting tray IS the loaded tray's own class** —
    `.dr-upload` + `.dr-sk-tray`, the modifier adding only the `--media` ground that `.dr-upload` paints for
    `[role="button"]` alone — so the box is the same box by construction rather than by two numbers agreeing. It had
    been `.dr-sk-block` with an inline `min-height` restating `--sz-upload-min` **140px** (and 120 before the rebuild,
    so the box jumped **20px** when the photo landed — the no-reflow contract the skeleton exists to keep). **The
    status line sits inside the tray, under the glyph**, in the slot *Add photo* holds on the base frame — the
    designer, 2026-08-24: *«write this text under the loading upload icon»*. It had stood under the tray as a fourth
    item in the stack, which was the frame's **only** remaining delta against success: the `Result photo` section drew
    **220** there against the base frame's **192**. Measured after the move, both frames draw **192**, `.dr-main`
    **629** on each, the tray **326 × 140** at `#E4E1DA` / 13px / no shadow on each, and *Replace photo* opens at
    **+148** from the section top on each — nothing under the thumb moves between the two states. The sentence is
    `--slate` on `--media`, **5.51:1** at 14px (`WCAG 1.4.3` ✓), centred by `.dr-upload`'s own `text-align` and
    wrapping to 2 lines on a 278px measure. *Replace photo* keeps its place carrying `disabled` (`--slate` on
    `--btn2`, **4.77:1**, `WCAG 1.4.3` ✓ — built, not dimmed). The `role="status"` that named the wait is **re-homed,
    not dropped** (`WCAG 4.1.3`), and the `aria-hidden` that had sat on the whole skeleton block moved onto the glyph
    alone — a live region inside an `aria-hidden` container is never announced.
  - **Success —** payment success lands on Wallet, not here; this screen has no "it worked" state of its own.

### 17. Wallet / earnings
- **Job:** `RJ-O3` — *"the payment to move to my account on its own"* (`O-05`; auto-release ≤ 30 min of client confirmation).
- **Place in flow:** MJ-2 node `Wallet / earnings`, reached from `Order paid: earnings added to balance` (`confirms / 2h auto → PAID → Wallet`).
- **States:**
  - **Empty ✓** — *"below minimum — keep earning"* (`Balance above minimum? → no`).
  - **Error —** payout errors live on the Withdraw screen, not here.
  - **Loading —** transfers are on the Withdraw screen.
  - **Success ✓** — the dedicated "you got paid" screen: earnings added to balance within 30 min (closes `RJ-O3`'s core promise).

### 17b. Earning details  *(sub-view of 17 · one file per service, three of them · base only)*
- **Job:** `RJ-O3` — the wallet says *how much*; the record says *what for*. An operator who reads three
  amounts in a list and cannot tell which job produced which one has to trust the number instead of
  checking it, which is the operator-side shape of the same anxiety `RJ-C1` names on the client side.
- **Place in flow:** *not on the MJ-2 spine.* `Wallet / earnings` → **View details** on an earnings card →
  here; the back chevron returns to Earnings. Nothing downstream depends on it.
- **States:** **base only** — a settled payout is a record, exactly the reading `C4` gives `order-details`:
  no empty, no error and no loading of its own, and the wallet above it already carries the empty.
- **Three files, one per service, not three states** — the shape the designer set on 2026-08-16 for
  `order-details` («вони мають мати різні назви відповідно»), applied here for the same reason: the wallet
  lists three different finished jobs, and one shared record would head a roof inspection *Package delivery*.

| File | Heading (nav bar) | Summary rows | Payout rows |
|---|---|---|---|
| `earning-details.html` | Package delivery | Service · From · To · Done · **Earned ₴180** | Status · Released · To |
| `earning-details-aerial.html` | Aerial photo &amp; video | Service · Location · Shoot · Done · **Earned ₴800** | Status · Released · To |
| `earning-details-inspection.html` | Roof inspection | Service · Location · Structure · Done · **Earned ₴650** | Status · Released · To |

**Nothing on the three is invented.** The delivery's stops and pay are `job-brief.html`'s own rows
(*Podil, 21 → Osokorky, 14*, Pay ₴180); the aerial and inspection facts are the ones the client's records
already carry (*Trukhaniv Island · Event · 30 min*; *Osokorky, 14 · Roof · gutters · chimney*); the times
are the wallet cards' own; and the Payout zone quotes `operator-fee-terms.html` — **Auto-release ≤30 min
after client confirms**. The Payout zone is byte-identical across the three; only the heading and the
summary strings move.

**There is deliberately no commission breakdown, and that is a gap reported rather than filled.**
`operator-fee-terms` states **18% per job**, but `job-brief` states ₴180 as the operator's **Pay** — so the
figure the wallet lists is already net, and a fee row would need a gross the project has never set. Writing
one here would put arithmetic on the record that disagrees with the list above it. **Open for the designer:**
whether the wallet's three amounts are gross or net, and whether the record should show the split.

**`Earned`, not `Paid`, is the summary's last row.** `voice.md` keeps one word per concept and the client's
record already spends *Paid* for what the **client** paid (`order-details`). The same figure seen from the
operator's side is what they kept, so *Earned* says it without either screen borrowing the other's word.

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
| 9b | Chat with the operator *(sub-view of 9)* | — | — | — | — |
| 9c | Call the operator *(sub-view of 9)* | — | — † | — † | — |
| 10 | Delivery confirmation | — | ✓ | ✓ | ✓ |
| 11 | Rate the order | — | — | — | ✓ |

† **9c — two states are traced but not built** (`§9c`): *calling* (loading) and *no answer* (error). The designer asked for one frame; recorded so the gap is a decision, not an oversight.

### Operator (MJ-2 + RJ-O3)

| # | Screen | Empty | Error | Loading | Success |
|---|---|:---:|:---:|:---:|:---:|
| 11b | Operator onboarding | — | — | — | — |
| 12 | Operator home + status toggle | ✓ | — | — | — |
| 13 | Incoming job offer / accept-decline | ✓ | — | — | — |
| 14 | Job brief / detail | — | ✓ | — | — |
| 15 | Job checklist (in progress) | — | ✓ | — | — |
| 15a | Chat with the client *(sub-view of 15)* | — | — | — | — |
| 15b | Call the client *(sub-view of 15)* | — | — ‡ | — ‡ | — |
| 16 | Result upload / close job | — | ✓ | ✓ | — |
| 17 | Wallet / earnings | ✓ | — | — | ✓ |
| 18 | Withdraw to card / bank account | — | ✓ | ✓ | ✓ |

‡ **15b — two states are traced but not built** (`§15b`), the same pair and the same decision as `§9c`: *calling* (loading) and *no answer* (error, whose way out is the thread). Recorded so the gap reads as a decision, not an oversight.

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
| S2 | **Account / profile** | `§7.4` identity &amp; preferences utility + MJ-2 credentials | Account tab (every tab bar) → Edit → save | base + **edit** sub-view (edit personal details, set notifications, upload drone documents / insurance, save; no dead-end — Save / Cancel → Account) + **photo** sub-view (change the profile photo — take a photo, choose a picture, delete; **a modal from 2026-08-16 (rev 146)**: no dead-end — Cancel / Save → Account, and no back chevron, because a view that commits with Save is dismissed by its named Cancel) | `account.html`, `account-edit.html`, `account-photo.html` |

**`account-edit`'s form is three titled cards from 2026-08-16** — **Personal details** ▸ *What the operator
needs to reach you* (name · phone · saved address), **Payment & language** ▸ *How you pay and the language you
see*, and the two upload cards, which have carried their own title and subtitle since they were built. The
same designer's call as `payment` and the filter panel. **The heading that stood *above* the upload pair is
not restored by it** — that came off on her word at rev 120, and what these two cards get is a title *inside*
the card, which is a different thing.

**The Preferences card became two cards on 2026-09-10 (rev 231)**, the designer's call on the built screen
(*«devide Payment and language into 2 cards»*): **Payment method** ▸ *How you pay* and **Language** ▸ *The
language you see*, one picker row in each. The form is now **six** cards — Personal details, Payment method,
Language, Notifications, and the two upload zones. **No string is authored for it**: both titles already
existed as the row label and the drawer title (rev 102), and both subtitles are the two halves of the retired
*How you pay and the language you see*. `HIG · Settings` groups **related** settings and ships one-row groups
throughout iOS Settings, and each card is its own `role="group"` named by `aria-labelledby` — so `WCAG 1.3.1`
reads the boundary the eye now sees. **What it costs is the title and the row's label saying the same word**,
44px apart, on both cards; iOS answers that shape by letting a one-row group's row carry only the value.
**Open, and hers** — the rows are left exactly as built until she picks.

**A fourth card joined them on 2026-08-24 — Notifications** ▸ *What we tell you, and how*, on the designer's
call, and the shape was hers too: the question was put as a row that pushes its own screen versus a card in
place, and she chose the card («third card, inline»), then the control («make a toggle»).

- **Why it belongs on this screen and nowhere else.** `HIG · Settings` keeps app-level preferences in one
  place rather than scattered across the flows they affect, and `sitemap.md §7.4` files settings under
  **Deep**. Depth is unchanged at 3 — Account (tab) → Edit account → the card. It is a **preferences facet of
  `CE-1`**, so no `§6.1` screen and no traceability column is added; `sitemap.md §7.4` carries the reasoning.
- **What it holds, and every row is grounded.** *Order updates* and *Operator on the way* are `CE-4`'s push,
  the one the sitemap has named since the first cut (`RJ-C2`); *Offers and news* is the marketing channel and
  is the one row that ships **off**; *Push* and *SMS* are the two channels. Five switch rows, one card.
- **The control is a switch, and it is the kit's existing selected-state pair in a new shape** — a green fill
  behind a charcoal knob, `--on-green` on `--green` at **9.46:1**, the same recipe as the checked `.dr-box`
  (2026-08-03), the checked radio, the walked progress node and `.dr-range`'s thumb. Off is that box's other
  half: a `--box-edge` charcoal ring with nothing filled in, knob at the left. **The green budget is settled by
  the 2026-08-03 rule's own words** — *"on the green budget a checked box counts as a status mark, like the
  node — not as the screen's one green control"* — so with three switches on, **Save changes** is still this
  screen's one green control, and `concept.md`'s *green is never spent inside card UI* is untouched: that
  clause governs green as a **control** in a card, and has excepted status marks since the checked box started
  living inside `.dr-picks`.
- **`WCAG 1.4.11`, measured in both states, and both clear 3:1.** Off: charcoal knob and charcoal ring on the
  card, **14.37:1** — a 4.79× pass. On: the ring stays charcoal, so the boundary is the same **14.37:1**, and
  the knob reads **9.46:1** inside the green — a 3.15× pass. **The ring is why it passes, and it is not a new
  idea:** `.dr-range`'s thumb was decided on this exact criterion on 2026-08-15 (*"as a ring, `--green` on
  `--card` is 1.52:1 and fails 1.4.11's 3:1 … as a fill behind an `--ink` ring the boundary still carries at
  14.37:1"*). So the switch follows the range rather than the checked `.dr-box`, which turns its own border
  green and leans on the glyph inside it — the two precedents differ, and this is the one that was decided
  against the criterion. `1.4.1` is separately satisfied: state is **knob position** as well as fill.
- **The operator half is deliberately short one row.** This screen is shared — `account.html:129` and
  `operator-account.html:242` both point *Edit profile* here — so the card is read by both sides. `OE-6`, the
  dispatch alert, is **not** offered as a switch: it is the mechanism `RJ-O1` runs on, and the operator
  already has the right control in `OE-4` (Available / Busy / Offline) on operator home. An operator's
  preferences are offers and payout only.
- **The first permission ask is not here, and no frame invents it.** `HIG · Requesting permission` wants the
  prompt in context with its reason stated; settings is where it is changed afterwards, and the priming moment
  in the order flow stays an open decision (`sitemap.md §7.4`). **The card's one `.dr-note` — *Push works only
  after you allow it on this device* — was cut on the designer's word 2026-08-31 (rev 210).** No criterion
  moved: the note was named by no `aria-describedby` (the group takes `#acc-notif-sub`), and each switch keeps
  its own visible `<label>`, so `WCAG 3.3.2` stands on the rows. What went with it is the only line in the
  product saying the OS, not the switch, has the last word on Push. The card is five rows and nothing under
  them.
- **Still no state pages.** A settings form has none; the card does not change that.

**`account-photo.html` is a sub-view, not a new sitemap screen.** Added 2026-08-16 on the designer's word —
«добав іконку едіт карандаш на аватарку і добав ще один wireframe де можна загрузити аватарку». It is the
destination of the pencil badge now sitting on the avatar in `account.html`, the same way `account-edit.html`
is the destination of the pencil beside the name. `sitemap.md §7.4` still lists **one** Account screen; both
files are states of it, and both are listed in the `Files` column above rather than given a row of their own.
It carries **base only** — no `flows.md` node produces an empty, error or loading state for it (an empty
avatar is the *base*: the initials fallback, which `account.html` already ships as `OB`).

**It became a modal on 2026-08-16 (rev 146), on the designer's reference** (Figma `100:30`): *«залиш
зображення аватарки посередині а кнопки … зроби у ботом барі»*. The photo now stands alone in the content
area and the three ways to change it — **Take a photo · Choose a picture · Delete** — sit on the bottom edge
as an action bar, in the shape her frame draws as an iOS action sheet. **The state matrix does not move:**
still base only, still one file. **What moves is the exit** — `HIG · Modality` puts *Cancel* and *Save* in the
navigation bar of a view that commits, so the back chevron came off and the bar's own Cancel went with it;
the screen still has no dead-end, with two named ways out instead of three.

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
| C9 | **Contact human support** | `EJ-2` | *EJ-2*: safety/trust or unresolved → agent | **Error** ✓ (unresolved with agent → escalation queue) · **sub-view** `call-support` — the voice channel to the same agent (base only: the connected call; **Minimise** and **End call** both return here) | `contact-support.html`, `contact-support-error.html`, `call-support.html` |
| C10 | **Notifications — the alert log** | `RJ-C2` (`CE-4` push) | *SHARED · Notifications*: Home → the bell in the top bar → the log → the screen an alert names | **Empty** ✓ (nothing sent yet → Browse services) · **Loading** ✓ (fetching the log, matching `order-history`) · **Error** — traced, not drawn: the same fetch failure `order-history` has never drawn either (`flows.md`) | `notifications.html`, `notifications-empty.html`, `notifications-loading.html` |

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
| `order-details-aerial.html` | Aerial photo &amp; video | Location · Shoot · Delivered · Operator · **Paid** | **Photo &amp; video set** — **two cards**: the photograph, then the video. *The zone is named for **what that order asked for**, from 2026-08-16: with `order-setup-aerial` letting the client pick Photo / Video / Photo &amp; video (`voice.md` **O5**), a photo-only order is headed **Photo set** and holds one card, a video-only order **Video**. **This record is a Photo &amp; video order**, so the built frame is correct as it stands and is not touched.* | `scenes/aerial-rafting-run.jpg` + `scenes/aerial-rafting-boulders.jpg` |

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

**The aerial record's deliverable zone holds two cards, one per file** — 2026-08-16 (rev 140), the
designer against the single card the first build made: «має бути дві картки одна просто зображення …
друга картка відео». The zone has been named *Photo & video set* (`voice.md` **O5**) since the day it
was built and held one photograph, so it was naming a deliverable it did not carry. It now carries
both: **the photograph on its own**, then **the video** — a preview across the card's top edge, the
name and the facts under it, and the file's one action at the end of that line. **The other two
records do not change**: a delivery photo and an inspection report are single files. This is the
first place the three instances differ in **structure** rather than in strings and one `<img>`; they
are still one screen, because what differs is the deliverable, which is the per-service data the
split was made for.

**The structure is hers, from a card she pointed at** (Figma `97:18`) — cover, title, meta line,
circular action — and so is the second picture (`97:22`, now `scenes/aerial-rafting-boulders.jpg`,
`visuals/gaps.md` B3 #19). It is a **different** run from the photo card's frame, which is what lets
the two files be told apart by what they show instead of by a badge. rev 137's readings, where one
picture served as both photo and poster, existed only because the repo had one aerial frame; they are
recorded in `concept.md` and are not to be re-proposed.

**The cover runs to the card's three edges**, and that is the imagery rule rather than a new taste: a
photograph *is* the surface and covers it, so a picture inset in a padded card is the sticker the
rule forbids. The card gives up its padding, clips with its own 16 radius, and the padding moves onto
the line below — the only thing left that needs it.

**The play mark carries no outline** — her word on the built frame, «забери stroke з цієї кнопки у
мене така кнопка без обводок». It was built with a 2px `--ink` ring for `WCAG 1.4.11` and the ring
came off; what carries the criterion now is the glyph, `--ink` on `--btn2` at **11.54:1**, the reading
`.dr-avatar-edit__badge` and `.dr-upload` already use. Measured on this cover, the disc's edge against
the picture runs **6.46:1 mean**, 74% of the circumference at or above 3:1, 1.00:1 at its worst.
Recorded as a decision, not filed as a defect.

**Measured on the build.** Zone **341 × 440**: photograph **341 × 180**, video card **341 × 248**
(cover 180 + line 68). `main` **scrollHeight 743 against clientHeight 577** — **166px** of scroll, and
this is the first of the three records that scrolls. Zero horizontal overflow; the action bar is a
fixed footer, so `Book again` and `Delete order` never leave the screen. Every target **44 × 44** or
wider; green unchanged at **15,124px² · 4.97%** with `Book again` still the only green control.

**`call-support.html` is a sub-view of C9, not a new sitemap screen.** Added 2026-08-16 on the
designer's word: «зроби таку сторінку `call.html` яка буде відкриватись при кліку на кнопку "Call
support"». `sitemap.md §6.1` still lists **one** *Contact human support* screen; this file is a
sub-view of it, listed in the `Files` column above rather than given a row of its own — the same
shape as `account-photo` under S2 and `chat` / `call` under §9.

- **What it closes is a control that named an act and performed none.** `Call support` was
  `<button type="button">` with no target, no handler and no `data-toast` — a dead 44px button in the
  action bar since rev 106. Both `microcopy.md` and `concept.md` rev 106 describe it as *"hands off
  to the phone app"*, and that description stopped being true at **rev 141/144**, when the
  masked-number reading took every `tel:` and every stated phone number out of the product. The
  button now does what `Call operator` does: it opens DRON's own call screen.
- **Why a second file and not `call.html`.** Three things would have been wrong on the shared one.
  The name — `voice.md`'s vocabulary rule never crosses **operator** and **support**, and `call.html`
  says *Andriy M.* The exits — `call.html`'s **Minimise** and **End call** both return to `tracking`,
  which would drop a client mid-issue onto the map of an order that may not even be the one they are
  disputing. And the top-right pair, below. One surface, two instances.
- **Everything the two calls share is byte-identical**: `.dr-call` on `--night`, the 22/700 name over
  the tabular duration in `--btn2`, the 176px portrait disc, the `--night-raised` pill holding four
  44px discs on 14px gaps, `End call` as the one saturated fill. Three things differ, each forced by
  **who is on the line**: the name, both exits, and the side actions.
- **The two side actions come off, and that is the flag on `call.html` being answered rather than
  copied.** *Add support to the call* is meaningless when support **is** the call; *Chat with the
  operator* is the wrong object here, and the typed channel to **this** agent is the message form on
  the screen behind — where **Minimise** already goes, so a second control for it would be one act
  with two names. What is left is one control on the left, and `.dr-call__side--empty` holds the
  matching 44px on the right so the name stays optically centred (`.dr-call__top`'s three columns
  need the outer two equal; there is no nav bar here to hang an absolute title on).
- **`Video` is inherited, not re-decided.** §9c flags it as a control with no `sitemap.md` job,
  present because the designer's reference draws it. Keeping the bar identical across both instances
  keeps one component; the flag travels with it and comes off both screens in one line, together.
- **The `HIG · Modality` departure travels too** — no nav bar, no back control, no DRON mark, because
  a call is presented modally rather than pushed. `_conventions.md §12b`'s checklist assumes a
  navigational screen; recorded as a departure, not filed as a defect.
- **States: base only** — the connected call. `calling` (loading) and `no answer` (error) are traced
  and not built, exactly as at §9c, and the error's way out is the message form behind it, so it is
  not a dead-end.

### Operator — Step 8

| # | Screen | Job | Flow position | States (real) | Files |
|---|---|---|:---|:---|---|
| O1 | **Operator landing / fee terms** | `MJ-2` activation · `OE-12` | *MJ-2 activation*: onboarding → landing → commission acceptable? | base only (informational gate; decline is a legit exit, not a state page) | `operator-fee-terms.html` |
| O2 | **Sign up / identity** | `MJ-2` | *MJ-2 activation*: fee accepted → Sign up → Verification | **Error** ✓ (identity declined / failed — Diia/BankID) · **Loading** ✓ (verifying identity) | `operator-signup.html`, `operator-signup-error.html`, `operator-signup-loading.html` |
| O3 | **Verification / document upload** | `MJ-2` gate · Drop-off #3 | *MJ-2 activation*: upload → docs complete? → under review → approved? | **Error** ✓ (missing/invalid docs, or rejected → reason + resubmit) · **Loading** ✓ (under review — ETA 2-3 business days) | `operator-verification.html`, `operator-verification-error.html`, `operator-verification-loading.html` |
| O4 | **Profile setup** | `RJ-C1` consumes · `EJ-3` | *MJ-2 activation*: approved → Profile setup → home | base only (a setup form; no data state in the flow) | `operator-profile-setup.html` |
| O5 | **Dispute / client issue (operator side)** | `EJ-2` operator side · `OE-13` | *MJ-2 main*: client disputes → payment held pending EJ-2 | **Error** ✓ (payment held pending resolution) | `operator-dispute.html`, `operator-dispute-error.html` |
| O6 | **Ratings dashboard** | `EJ-3` · `O-06` | *EJ-3*: home → Ratings → has ratings? | **Empty** ✓ (no ratings yet — cold-start O-2; auto-dispatch keeps feeding jobs) | `ratings.html`, `ratings-empty.html` |
| O7 | **Operator account / profile** | `§7.4` operator utility + role switch | *Account tab*: operator taps Account → own account (mode dropdown Operator ⇄ Client) | base + **photo** sub-view (change the profile photo — take a photo, choose a picture, delete; the same modal `account-photo` is, so no dead-end — Cancel / Save → Operator account, and no back chevron) | `operator-account.html`, `operator-account-photo.html` |
| O8 | **Notifications — the alert log** | `RJ-O1` (`OE-6` dispatch) · `RJ-O3` (paid) · `EJ-3` (rating) | *SHARED · Notifications*: Jobs → the bell in the top bar → the log → the screen an alert names | **Empty** ✓ (nothing sent yet → Find jobs) · **Loading** — not drawn, on his own side's precedent: `wallet` and `ratings`, the operator's two list screens, are each base + empty · **Error** — traced, not drawn (`flows.md`) | `operator-notifications.html`, `operator-notifications-empty.html` |

**`operator-account-photo.html` is a sub-view of O7, not a new sitemap screen** — added 2026-08-21 on the
designer's word: «додай для оператора біля бейджу з рейтингом редагувати фото і додай wireframes як у клієнта
з можливістю загрузити фото або зробити». It is the twin of `account-photo.html` under S2 and stands in the
same relation to its parent: the destination of a pencil badge that now rides on the operator's own avatar,
beside the rating pill. Same modal shape (Cancel · *Profile photo* · Save in the bar; Take a photo · Choose a
picture · Delete on the bottom edge), same **base only** — no `flows.md` node produces an empty, error or
loading state, and an empty avatar is the base. **What differs is whose face and whose reader:** the note
under the picture says the **client** sees it, where the client's says the **operator** does, because that is
the person on the other side of each order. `sitemap.md §7.4` still lists one operator Account screen; the
file is a state of it, listed in the `Files` column above rather than given a row of its own.

**C10 / O8 — the alert log, added 2026-08-31 on the designer's word:** *«Add on the right side of the header
on the home page, in front of the DRON button icon, “notification” for both client and operator modes. And add
wireframes by clicking this button with notification history.»* Two screens, one per persona, plus their states.

**It is a screen, not a sub-view, and the difference is that it has its own entrance.** `account-photo` and
`order-details` are sub-views because they are reached from inside one parent screen and are that parent's
record seen closer. The log is reached from a **control in the home screen's navigation bar**, holds records
from every part of the product, and exits into eight different screens. `sitemap.md §6.1 / §6.2` carries it as
a screen for that reason; `§8`'s traceability matrix does **not** gain a column, because the log originates no
record — every row is a doorway into a screen that already holds one.

**Two of the four states are deliberately absent and both absences are precedent, not omission.** Client
`error` and operator `loading` / `error` are traced in `flows.md` and not drawn: the client's list neighbour
(`order-history`) carries `empty` + `loading` and no error, and the operator's list neighbours (`wallet`,
`ratings`) carry `empty` alone. Matching the neighbour is the reason; drawing the missing three is one word
and this note is where that decision would be recorded.

**The unread state is carried by a word, not by a colour — and since 2026-09-03 it is carried on the row
rather than by the heading.** The list was grouped **New** / **Earlier** under `.dr-sect` until the designer
asked for the relative dates `HIG · Lists and tables` prescribes; the headings are now **Today**, **Yesterday**
and then `d MMMM`, and unread rides the row as a **New** chip. Nothing depends on seeing a hue either way, so
`WCAG 1.4.1 Use of Color` is not engaged, before or after. **What the move bought is that read-state and
recency stopped being one axis:** the operator's *Your documents are approved* is unread and sits under
**Yesterday**, a pair of facts the old two headings could not state together. The bell's count badge is the one place the count is a number,
and it is `aria-hidden` with the count spoken by the control's own name (`WCAG 4.1.2`), exactly as
`listings-filtered`'s filter count already is.

**Not a new screen.** *Service catalogue* (`sitemap.md §6.1`) stays **merged into `listings.html`** per
`sitemap.md §7.3` (Home ⊃ Catalogue) — no separate file, by design. Recorded here so its absence is explicit.

**Milestone (success = base) in Step 8:** only **Inspection report** (the `C-2` outcome, mirror of *Delivery
confirmation*). Every other Step-8 base is a normal/entry view, not an "it worked" screen.
