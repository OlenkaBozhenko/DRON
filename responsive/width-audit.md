# Width audit — what a wider screen gives each screen

**Status: a decision table for the designer to review. Nothing is styled yet** (2026-10-17). Every
row is a proposal; a row becomes a rule only when she keeps it (*Contributing to the system* in
`CLAUDE.md`: the shell and any new layout go into `design-system/` first, then onto the screens).

**Read from:** `flows.md`, `research/jtbd.md`, `sitemap.md`, and every screen in `wireframes/` (53
screens; state and `-aerial` / `-inspection` files follow their screen and are not listed apart).

---

## The question, and the direction

DRON is mobile-first, so the question is never *how to squeeze the desktop onto a phone*. It is
**what a wider screen gives**. Each screen gets one of three answers:

| Answer | Means | Example |
|---|---|---|
| **Same** | A wider screen adds nothing but air. The phone column is kept, centred, at a readable width. | Sign in, Rate |
| **Wider layout** | The same content, laid in more columns. Nothing new to do. | A list becomes a grid; a list of earnings becomes a table |
| **New behaviour** | Width opens something the phone could not do: two things side by side instead of one after the other. | The order list and the chosen order next to each other; the map beside the results |

**The designer's direction for the desktop (2026-10-17):** *«десктоп версія виглядала зовсім по-іншому на
зразок дашборду: сайд бар і дашборд… мені подобається коли карта велика, що можна побачити що та де»*. Her
references: a business dashboard with a left navigation and a wide work area; a delivery app's catalogue
with the order summary held on the right; listings beside a large map with prices on it; a filter
column beside a list beside a map.

### The designer's direction, 2026-10-18 — the map as the ground, an assistant in the centre

Shown a first desktop preview (sidebar, options beside a map), the designer asked for something more
inventive: *«замість глобуса карта на весь бекграунд, зліва і справа панелі керування та статистика… сайд бар
можна перенести у верхній хедер та добавити кнопку замовити… по центру над картою AI агент, який вітає клієнта і
питає, яку послугу ти хочеш замовити, під полем введення три картки послуги»*, and then: *«для планшета теж буде
таке вю як для десктопа»*. Drawn in `responsive/_preview-desktop-ai.html` (`?order` for the order window,
`?tablet` for the iPad), images `desktop-ai-*.png` and `tablet-ai-*.png`:

- **The navigation is a header**, not a sidebar: the DRON mark, Overview · Activity · Help · Account,
  then **Order**, search, the bell and the account.
- **The live map is the whole ground**, with drones in the air marked on it.
- **Left panels — what is happening:** drones in the air now, the average delivery price, the average
  arrival, deliveries by hour. **Right panels — your orders:** the live order with its rail and operator,
  drones free per service, your month.
- **The assistant in the centre** greets the client by name, asks what needs doing, takes it in their
  own words, and offers three service cards under the field.
- **Order** (or a service card) opens the order window in the centre; the assistant folds into a
  **Talk to AI** button at the bottom; the header's *Order* steps back so one green control remains.
- **Tablet takes the same view** (the designer's call), the panels narrower. This supersedes the
  sidebar rows of the shell table below for both tablet and desktop; the per-screen rows stand for
  the screens behind *Activity*, *Help* and *Account*.

- **The greeting is green in the dark build, her main dark in the light one** (the designer, 2026-10-18:
  *«на світлій буде мій основний темний»*). Asked because white read badly over the map. Measured:
  `#9BCF4A` on the dark ground **9.46:1**, on the map's light road lines **1.95:1**; white **15.99 / 3.30:1**
  (`WCAG 1.4.3`, large text 3:1). So the green is a **departure from the fill-only accent**, dark build
  only, the way the wallet plate's mark is (`CLAUDE.md`), and a soft text shadow keeps it off the lines.
  **Tablet and desktop only** (the designer, 2026-10-18: *«це виняток лише для десктоп та планшета наразі
  мобільну версію не трогаємо ніяк»*): the phone keeps every rule as it is, green never text, and nothing
  in this direction reaches the mobile screens.
- **Folded, the assistant is a Talk to AI button with a ring of green light turning round it**; still
  under reduced motion (`WCAG 2.3.3`).

- **After the order, the green drone flies the route on the map** (the designer, 2026-10-18, *for the
  future desktop rebuild*): a dotted green route from pickup to drop-off, the agent's drone moving along
  it, a *Live* line under the header (operator · arrives at), *Talk to AI* at the bottom (`?flying`).
- **When the order is done, a window opens in the centre** with the outcome, the delivery photos, the
  record (from · to · operator · paid) and *Rate the order* / *Done* (`?done`). It is the phone's
  *Delivery confirmation*, laid out once for the wide screen.
- **The theme switches in the header** with a sun / moon button beside search and the bell (`?light`).
  The light build takes a light quiet map, the greeting in the main dark, and the flying drone in the
  main dark with a green glow — green on the light map would be ~1.6:1, under `WCAG 1.4.11`'s 3:1; green
  stays a fill, as on the phone.

**Not in the system yet, so a preview:** the glass panels and their blur, the glow, the assistant and
its voice, the dark map and the white drone renders (`responsive/preview-art/`, generated in Figma).
Each goes into `design-system/` first if kept.

### The shell this table assumes

| | Phone (< 768) | Tablet (768–1279) | Desktop (≥ 1280) |
|---|---|---|---|
| **Top-level navigation** | Tab bar at the bottom | **Sidebar** on the left, icons and labels; collapsible to icons | **Sidebar** on the left, always open |
| **Top bar** | Back · title, or brand · title | Brand · search · bell · account | Brand · search · bell · account |
| **Work area** | One column, one screen at a time | Two panes where the screen has two parts | Two or three panes: list · detail · map |
| **Drawers (sheets)** | Rise from the bottom | Centred dialog | Centred dialog, or a side panel when the user keeps working beside it |

**What the standards say.** `HIG · Sidebars`: on iPad and Mac a sidebar takes the place of the tab
bar for top-level navigation, with the same destinations. `HIG · Split views`: a list and the
selected item's detail side by side is the standard shape for a wide window. `HIG · Sheets`: on a
wide screen a sheet is presented as a centred modal, not a bottom drawer. `WCAG 1.4.10 Reflow`: the
desktop layout must still collapse to one column at 320 CSS px without loss — which the phone
design already is. `WCAG 1.3.2` / `2.4.3`: when panes sit side by side, the reading and focus order
must run list → detail → map, the order a screen reader meets them.

---

## Client

| Screen | What the user does on it | Tablet | Desktop | Answer |
|---|---|---|---|---|
| **Welcome / first-use explainer** (`welcome`) | Reads what DRON does in three slides, then starts | The three slides side by side, no swipe | Same three side by side, with room for the pictures | **Wider layout** |
| **Sign in** (`signin`) | Chooses Diia or BankID | The phone column, centred | The sign-in column on one half, a DRON photograph on the other | **Same** (the picture is air, not a function) |
| **Choose your role** (`role-select`) | Picks Client or Operator | The two choices side by side | Same, side by side | **Wider layout** |
| **Client onboarding** (`onboarding-client`) | Learns how an order works | Slides side by side | Slides side by side | **Wider layout** |
| **Home / start an order** (`listings`) | Chooses the service, the date and time, filters, and taps *Find* | Search across the top, the map below filling the pane | **The map is the work area from the start**: the search bar across the top (service · date · time · filters · *Find*), the live map filling the screen, and the results appearing beside it — no separate results screen | **New behaviour** |
| **Results on the map** (`listings-map`) | Compares the options (picture, outcome, available, arrives in, price) and orders one | Options in a left pane, map on the right | **Options in a left panel, the large map on the right**, each option's price and arrival drawn on the map; hovering an option lights it on the map; *Order* in the panel. On desktop this *is* Home's lower half | **New behaviour** |
| **Filters drawer** (part of Home) | Narrows by drone type and price | A centred dialog over the map | A centred dialog over the map, the result count on its button | **Wider layout** |
| **Order setup / details** (`order-setup`) | Enters pickup, drop-off, parcel size, notes | Form on the left, order summary on the right | **The form on the left and the order summary — service, route, price — held on the right**, updating as the form is filled | **New behaviour** |
| **Order review & price** (`order-review`) | Checks the order and the price, then pays | Becomes the summary pane of setup | **Absorbed into the summary panel of setup**; *Pay* lives at the bottom of that panel, so the step disappears | **New behaviour** |
| **Time-slot pick** (`time-slot`) | Picks a day and a time for a shoot or inspection | Month calendar left, that day's slots right | Same, wider | **Wider layout** |
| **Payment** (`payment`) | Enters the card, or pays with Apple / Google Pay | Card form left, summary right | Card form left, the order summary right | **Wider layout** |
| **Order confirmed / operator revealed** (`order-confirmed`) | Sees who is coming and when | Operator and record left, map right | **The operator card and the order record on the left, the live map on the right, on one screen** — `RJ-C2`'s name, face and map at once | **New behaviour** |
| **Live tracking & ETA** (`tracking`) | Watches the drone come, sees the steps, contacts the operator | Map large, the rail and rows in a side pane | **The map is the screen**; the progress rail, ETA, route and operator sit in a panel over its left side | **New behaviour** |
| **Chat with the operator** (`chat`) | Messages the operator during the order | Opens as a pane beside the map | **Opens as a side panel beside the tracking map**, so the drone stays in view | **New behaviour** |
| **Call the operator** (`call`) | Talks to the operator | A centred call window | A small call window over the tracking map | **New behaviour** |
| **Delivery confirmation** (`delivery`) | Sees the delivery photo, confirms, goes on to rate | Photo left, record right | The delivery photo large on the left, the record and *Rate* on the right | **Wider layout** |
| **Inspection report** (`inspection-report`) | Reads the findings and the photos | Photo grid two-up, findings beside | The photos as a grid, the findings list beside it, the report downloadable | **Wider layout** |
| **Rate the order** (`rate`) | Gives stars and a review | The phone column, centred | Same | **Same** |
| **Order history — Activity** (`order-history`) | Finds a past or current order, books again | List left, the chosen order right | **The order list on the left, the chosen order's details on the right** (split view); *Book again* in the detail | **New behaviour** |
| **Past order details** (`order-details`) | Sees what a finished order was, books it again | The detail pane of Activity | The detail pane of Activity, never a page of its own | **New behaviour** |
| **Share / refer** (`share`) | Copies a link or sends it to a contact | A centred dialog | A centred dialog | **Same** |
| **Notifications** (`notifications`) | Reads what happened to the orders | A panel dropping from the bell | **A panel dropping from the bell in the top bar**, not a page; the page stays for a deep link | **New behaviour** |
| **Help / support** (`support`) | Picks the problem to solve | Topics in two columns | Topics in three columns | **Wider layout** |
| **Report an issue** (`report-issue`) | Describes what went wrong with an order | Form left, the order right | The form on the left, the order it is about on the right | **Wider layout** |
| **Resolution outcome** (`resolution`) | Reads the decision and the refund | The phone column, centred | Same | **Same** |
| **Contact support** (`contact-support`) | Writes to a person at DRON | The phone column, centred | Same | **Same** |
| **Account** (`account`, `account-edit`, `account-photo`) | Edits name, contacts, payment methods, addresses, theme, role | Sections left, the open section right | **Settings layout: the sections on the left, the chosen section's form on the right** | **New behaviour** |
| **Switch role** (`switch-role`) | Changes between client and operator | A centred dialog | A centred dialog | **Same** |

## Operator — the SRM

The operator side is where the dashboard fits best: `CLAUDE.md` names it the *SRM (Service Resource
Management dashboard)*, WCAG 2.1 AA, and an operator at home plans, checks earnings and reads reviews
at a desk. In the field (`job-checklist`, `result-upload`) the phone stays the tool.

| Screen | What the user does on it | Tablet | Desktop | Answer |
|---|---|---|---|---|
| **Operator landing / fee terms** (`operator-fee-terms`) | Reads what DRON pays and takes | Two columns of terms | Two columns of terms | **Wider layout** |
| **Sign up / identity** (`operator-signup`) | Signs up with Diia / BankID | Centred column | Centred column | **Same** |
| **Verification / documents** (`operator-verification`) | Uploads licence and insurance | Upload zones side by side | **Drag the files from the computer onto the zones**; each document's status beside it | **New behaviour** |
| **Profile setup** (`operator-profile-setup`) | Writes bio, picks services, adds a photo | Form left, preview right | **The form on the left, a live preview of the card clients will see on the right** | **New behaviour** |
| **Operator home — Jobs** (`operator-listings`) | Goes available, sees incoming offers and active jobs | Queue left, the chosen job right | **A dashboard: the availability switch in the top bar, the job queue (Incoming · Active) on the left, the chosen job's brief on the right** | **New behaviour** |
| **Incoming job offer** (`job-offer`) | Accepts or declines within the countdown | A dialog over Jobs | **A dialog over the dashboard** with the countdown, so the queue stays visible behind it | **New behaviour** |
| **Job brief** (`job-brief`) | Reads the job: where, what, pay | The detail pane of Jobs | The detail pane of Jobs, with the route on a map | **New behaviour** |
| **Job checklist** (`job-checklist`) | Ticks the steps during the job, in the field | The phone column | The phone column — the job is done outdoors, gloved, in sunlight (`RJ-O2`) | **Same** |
| **Result upload / close job** (`result-upload`) | Adds the photos or report, closes the job | Upload zone and thumbnails grid | **Drag the files from the computer**; a large drop zone and a thumbnail grid | **New behaviour** |
| **Wallet / earnings** (`wallet`) | Sees the balance and what each job paid | Balance on top, earnings as a table | **The balance card on top, the earnings as a sortable table** (date · service · amount · status) | **Wider layout** |
| **Earning details** (`earning-details`) | Sees one payout | The row's detail beside the table | **The detail pane beside the earnings table** | **New behaviour** |
| **Withdraw** (`withdraw`) | Sends the balance to a card or bank | A centred dialog over Earnings | A centred dialog over Earnings | **Same** |
| **Ratings dashboard** (`ratings`) | Sees the score, the breakdown, the reviews | Score and breakdown left, reviews right | **Score and breakdown on the left, the reviews as a grid on the right** | **Wider layout** |
| **Dispute / client issue** (`operator-dispute`) | Answers a client's issue with evidence | Case left, evidence right | **The case on the left, the evidence (photos, report) on the right** | **New behaviour** |
| **Operator account** (`operator-account`, `operator-account-photo`) | Edits profile, payout details, role | Settings layout | Settings layout, as the client's | **New behaviour** |
| **Notifications** (`operator-notifications`) | Reads alerts | A panel from the bell | A panel from the bell | **New behaviour** |
| **Operator onboarding** (`onboarding-operator`) | Learns how operating works | Slides side by side | Slides side by side | **Wider layout** |

---

## Count

| Answer | Client | Operator | All |
|---|---|---|---|
| **Same** | 6 | 3 | 9 |
| **Wider layout** | 10 | 4 | 14 |
| **New behaviour** | 12 | 10 | 22 |

## Decided by the research, recorded here

- **No map of nearby requests on the operator dashboard.** `jtbd.md` lists the SRM map view
  (story `O-07`) as a *feature candidate for removal*: `RJ-O1` is closed by the offer and its
  countdown, and the map is convenience, not a job. The large map in this table is the **client's**
  (results, confirmation, tracking) and the **job brief's route** — not a map of jobs to pick from.
  Bringing the job map back is the designer's call against that finding.
- **The client does not choose the operator** (rev 313): no table row adds operator selection;
  the results panel compares *options*, not people.
- **Order review disappears on desktop only.** `sitemap.md` §7 merges setup and review on the
  phone path too; on desktop the summary panel makes that merge visible.

## Open — for the designer

1. **Sign in on desktop:** the column alone, or the column beside a photograph (the reference she
   shared)? Either is *Same* in function.
2. **Results on desktop:** one Home screen where the map and the results live together (proposed),
   or keep *Find* opening a second screen?
3. **Tablet:** a full sidebar, or icons only until the user opens it?
