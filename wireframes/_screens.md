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
  (`WCAG 1.3.5`), the drawn labels (`3.3.2`), the 44pt rows and the Contact-operator drawer with its
  masking note are carried byte for byte.
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
| C9 | **Contact human support** | `EJ-2` | *EJ-2*: safety/trust or unresolved → agent | **Error** ✓ (unresolved with agent → escalation queue) · **sub-view** `call-support` — the voice channel to the same agent (base only: the connected call; **Minimise** and **End call** both return here) | `contact-support.html`, `contact-support-error.html`, `call-support.html` |

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
| O7 | **Operator account / profile** | `§7.4` operator utility + role switch | *Account tab*: operator taps Account → own account (mode dropdown Operator ⇄ Client) | base only (fixes the leak where the operator Account tab opened the client `account.html` and dropped them into the client flow) | `operator-account.html` |

**Not a new screen.** *Service catalogue* (`sitemap.md §6.1`) stays **merged into `listings.html`** per
`sitemap.md §7.3` (Home ⊃ Catalogue) — no separate file, by design. Recorded here so its absence is explicit.

**Milestone (success = base) in Step 8:** only **Inspection report** (the `C-2` outcome, mirror of *Delivery
confirmation*). Every other Step-8 base is a normal/entry view, not an "it worked" screen.
