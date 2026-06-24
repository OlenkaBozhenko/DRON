# DRON — Sitemap

**Status:** Draft · June 2026. Entity inventory only — no screens, no navigation yet.
**Sources:** `research/target-audience.md`, `research/jtbd.md`, `research/research.md`, `ux-research/research.md`, `ux-research/user-stories-cjm.md`.

---

## Method & Rules

This document inventories the **product entities** — the core objects a person handles to get a job done — *before* any screen or flow is designed.

**Two equal personas, always split.** DRON has two distinct but equally weighted personas:
**Client** (C-1 primary, C-2 secondary) and **Operator** (O-1 primary, O-2 secondary).
Every entity below is listed from each persona's side separately. Objects that both sides
touch are the same physical record seen from two angles — collected under **Boundary Objects**.

**Derivation rule:** an entity is listed only if a documented job in `research/jtbd.md` spawns it.

- Entity with no backing job → **Under Question** (`§4`), never the main list.
- Object only inferred, not required by a job → marked `[?]`.
- No invented objects. Where a "standard marketplace" object is absent, the absence is explained.

**Key architectural consequence — auto-dispatch.** DRON owns its operators and assigns the
nearest certified one automatically (`ux-research/research.md` §3; `research/jtbd.md` MJ-1).
The client never browses, filters, or picks an operator. This removes a whole family of
marketplace objects (search, filters, operator selection, chat-to-negotiate, operator
self-listings) that **no confirmed job requires** — they all sit in `§4 Under Question`.

---

## 1. Entities — CLIENT

> Persona: **C-1** (primary, urgent: delivery / same-day) · **C-2** (secondary, planning: aerial photo / inspection).

| # | Entity | Fields / parts | Job that spawns it | Related to |
|---|---|---|---|---|
| CE-1 | **Client account & identity** | Diia / BankID identity, name, saved payment method(s), order history, **saved address(es) — opt-in** (captured from the order, saved only if the user ticks a "save this address" checkbox) | `MJ-1` (need an identity to transact), `RJ-C5` (history + saved address enable one-tap repeat), story `C-02` (one-tap Diia/BankID) | Order, Payment, Review (authored) |
| CE-2 | **Service** (catalogue item) | Service type (delivery / aerial photo-video / inspection), use-case description, **price rule** (see note), flow mode (auto-dispatch vs calendar-first), availability / "next available" `C-01` | `MJ-1` (choose the result a drone delivers), `RJ-C3` (price visible on service details) | Order, Price |
| CE-3 | **Order** | Service type, location (pickup / target), date-time (now or scheduled slot), parcel / object details, **locked price**, status, assigned-operator reference, payment reference, result reference | `MJ-1` (hand the job over — the core object), `RJ-C3`, `RJ-C5` (re-book pre-fills it) | Service, Operator profile, Payment, Result, Operator-side **Job** |
| CE-4 | **Order live status / ETA** (live facet of CE-3) | Live operator/drone position, ETA countdown, status timeline, push ("Operator is 2 min away") | `RJ-C2` (close the void between payment and arrival), story `C-05` | Order, Operator profile |
| CE-5 | **Operator profile** (read for trust) | Name, photo, rating (X.X ★ · N reviews), "Verified by DRON" badge, "Insured" badge `[?]` amount, completed-jobs count, service specialization, credential (CAA/DASU) `[?]`, portfolio `[?]` (C-2) | `RJ-C1` (confirm who is coming is real & qualified — #1 drop-off), `EJ-1` (first use feels safe) | Order (assigned operator), Review / Rating |
| CE-6 | **Payment** (client side) | Amount, method (Apple Pay / Google Pay / Visa-Mastercard), status, timestamp, linked order | `MJ-1` (pay step of the core flow), story `C-04`; funds the operator **Payout** | Order, Operator Payout (boundary) |
| CE-7 | **Result / Deliverable** (received) | Delivery: confirmation + photo (C-1). Inspection/photo: structured report — cover photo, annotated findings, photo set, operator signature (C-2) | `RJ-C4` (receive proof the job was done), story `C-06` | Order, Operator **Result upload** (boundary) |
| CE-8 | **Review / Rating** (authored by client) | Star score, review text, service type, target operator | Consumed by `RJ-C1` (future clients) and `EJ-3` (operator reputation); contributes to `SJ-1` | Order, Operator profile, Operator Rating dashboard (boundary) |
| CE-9 | **First-use explainer** (minimal) | 15-second "what happens after you confirm"; what the drone does / won't do (noise, safety, privacy) | `EJ-1` (H-4 explainer reduces activation drop-off); drone-tech anxiety (research.md Finding 3). Broader education hub → `[?]` `HJ-2`, see `§4` | Service, first Order |
| CE-10 | **Share link / referral** | Shareable link, referral attribution `[?]` | `SJ-1` (be the one who introduced it) | Order (post-completion), Client account |
| CE-11 | **Support / dispute case** | Issue type, evidence (photo / note), linked order, resolution path (re-dispatch / refund / free re-do / human escalation), resolution status, refund cap `[?]`, SLA `[?]`, liability amount `[?]` (Finding 4) | `EJ-2` (resolution after a bad experience — scored **3** for C-1; flow scoped June 2026, see `flows.md`) | Order, Client account, Operator, Payment (refund), Payout (operator liability) |

**CE-11 — gap now scoped (June 2026).** `research/jtbd.md` recorded `EJ-2` as a score-3 job with
**no assigned function**. It is now given a resolution flow in `flows.md` (re-dispatch / no-questions
refund / free re-do / human escalation — grounded in the Airbnb · Glovo · Bolt benchmarks already in
`jtbd.md` Table 2). Remaining `[?]` are **policy inputs only**: refund cap, SLA, and third-party
liability amount (the last blocked on legal verification — `research/research.md` Finding 4).

**Note — Price.** "Price" is treated as a key **field** of Service (CE-2) and Order (CE-3),
not a standalone object, but it carries its own job (`RJ-C3`: full cost upfront, no "plus fees").
The locked-price rule is called out wherever it appears.

---

## 2. Entities — OPERATOR

> Persona: **O-1** (primary, experienced freelance pilot) · **O-2** (secondary, newly certified, no client base).

| # | Entity | Fields / parts | Job that spawns it | Related to |
|---|---|---|---|---|
| OE-1 | **Operator account & identity** | Identity, status, profile reference, verification state, wallet, job history, ratings | `MJ-2` (be a registered, dispatchable operator) | All operator entities |
| OE-2 | **Verification dossier** | License (CAA/DASU) upload, insurance docs, identity, **verification status + ETA** ("review takes 2–3 days"), approval state | `MJ-2` (verification gates job flow); Operator Stage 2 upload; Drop-off #3 (upload → silence) | Operator profile, Operator account |
| OE-3 | **Operator profile** (owned / edited) | Name, photo, bio (needs template — Stage 2 Language friction), rating, badges (Verified, Insured), credentials, service specializations, portfolio `[?]` (C-2), completed-jobs count | `RJ-C1` (client reads it), `EJ-3` (reputation); profile setup Stage 2. Credential-as-identity meaning → `[?]` `HJ-1`, see `§4` | Verification, Review / Rating dashboard, Job |
| OE-4 | **Operator status** | Available / Busy / Offline toggle state | story `O-02` (receive requests only when able) — gates dispatch | Job alert, Operator account |
| OE-5 | **Job** (operator's view of the Order) | Job ID, service type, location / distance, estimated duration, pay, client reference, status, checklist ref, result ref | `MJ-2` (steady flow of pre-qualified jobs), `RJ-O1` | Client **Order** (boundary), Checklist, Result upload, Payout |
| OE-6 | **Job alert / dispatch notification** | Service type, distance, estimated time, price, Accept / Decline (lock screen) | `RJ-O1` (decide in seconds), story `O-01` | Job, Operator status |
| OE-7 | **Job checklist** | Per-service-type steps: pre-flight → execution → delivery confirmation → result photo; checkable items; large touch targets / high contrast (gloves, sunlight) | `RJ-O2` (execute without improvising), story `O-03` | Job, Result upload |
| OE-8 | **Result upload** (authored) | Result photo(s), text note, structured report fields (inspection), operator signature | `RJ-O2` (checklist ends in result), story `O-04`; gates `RJ-O3` payment (H-7) | Job, Checklist, client **Result** (boundary), Payout |
| OE-9 | **Payout / Operator wallet** | Balance (accrues across orders), auto-release transaction (≤ 30 min of client confirmation; auto-confirm after 2h), per-job earnings, status, earnings projection (O-2 trust trigger), **minimum payout threshold, linked payout method (card / bank account), withdrawal type — instant-to-card vs bank transfer (1–3 days), withdrawal transaction** | `RJ-O3` (get paid without managing it — top-3 MVP job; withdrawal to an external account is the **final step**, only after an order is completed — Bolt / Uklon driver cash-out model), story `O-05` | Job, client **Payment** (boundary), Operator account |
| OE-10 | **Rating dashboard** (operator as subject) | Overall score, breakdown by service type, last 10 review texts | `EJ-3` (reputation worth building), story `O-06` | Review (client-authored, boundary), Operator profile |
| OE-11 | **Platform insurance / liability cover** | Platform-provided coverage, "active from first job", coverage `[?]` amount (legal verification — research.md Finding 4) | O-1 job ("work under platform protection, not solo liability"), O-2 job ("insurance cover from first job") | Operator account, Job, Verification |
| OE-12 | **Commission / fee terms** | Commission rate, shown on landing page before signup | Supports `MJ-2` activation; Operator Stage 1 ("another platform that takes 30%?"); O-1 trust trigger. *No dedicated JTBD — borderline, kept because it gates operator activation* | Operator account, Payout |
| OE-13 | **Dispute / client issue (operator side)** | Linked order + client claim, operator response, evidence, payment-hold status | `EJ-2` (operator side — respond to a client dispute; payment held until resolved) | Client `CE-11` (boundary), Job, Payout |

---

## 3. Boundary Objects (one record, two personas)

These are the contract points between the two sides — the **same** object, seen from each persona.
Splitting them per-persona above keeps each viewpoint honest; this map keeps the relationship explicit.

| Boundary object | Client side | Operator side | Spanning jobs |
|---|---|---|---|
| **Order ≡ Job** | CE-3 Order | OE-5 Job | `MJ-1` ↔ `MJ-2`, `RJ-O1` |
| **Result / Deliverable** | CE-7 received | OE-8 uploaded | `RJ-C4` ↔ `RJ-O2` / `O-04` |
| **Payment → Payout** | CE-6 pays (→ platform escrow) | OE-9 receives | `MJ-1` ↔ `RJ-O3` |
| **Review / Rating** | CE-8 authors | OE-10 reads (dashboard) | `RJ-C1` + `EJ-3` |
| **Operator profile** | CE-5 reads for trust | OE-3 owns / edits | `RJ-C1` ↔ `EJ-3` |

---

## 4. Under Question — «під питанням»

Objects with **no spawning job**, backed only by a **hypothesis**, or explicitly flagged for
removal in `research/jtbd.md`. Kept out of the main list on purpose.

Verdicts executed June 2026 (per the `§8` coverage matrix): **Delete / Attach / Backlog**.

### Client side

| Candidate object | Why it is under question | Verdict |
|---|---|---|
| **Operator search + filters** | No client job requires browsing operators. Auto-dispatch assigns one (MJ-1). `jtbd.md` lists operator-choice flows as **removal candidates**. | **Delete** |
| **Operator selection** ("choose your operator") | Backed only by `HJ-3` (hypothesis) which *conflicts* with auto-dispatch; `jtbd.md` flags it for removal — it would also re-introduce the paradox of choice for users with no criteria to judge pilots. | **Delete** |
| **Favourite / request-specific operator** `[?]` | `HJ-3` hypothesis. CJM Stage 4 nudge ("your favourite operator is available") implies it, but it is unvalidated and conflicts with auto-dispatch. | **Backlog** — gate on `HJ-3` |
| **Client ↔ operator chat / messaging** | No job requires it. Async negotiation is the Rover anti-pattern explicitly rejected in `ux-research/research.md` (M-1 "will not work"). Deliberately excluded, not forgotten. | **Delete** |
| **Expanded service-education hub** `[?]` | Beyond the minimal `EJ-1` explainer (CE-9), broader education is `HJ-2` — could be critical or noise; no data. | **Backlog** — gate on `HJ-2` |
| **Operator portfolio view** `[?]` | Serves `RJ-C1` only for C-2 on a `[?]` entity; `RJ-C1` is already closed by *Order confirmed* + *Verification* + *Profile setup* + *Rate*. | **Attach** to *Order confirmed / Profile* if C-2 validated; else **backlog** |

### Operator side

| Candidate object | Why it is under question | Verdict |
|---|---|---|
| **Operator listing / advert** | DRON is not a marketplace; operators do not self-list — jobs are dispatched to them (MJ-2). A Kabanchik concept, not a DRON object. | **Delete** |
| **SRM map view of nearby requests** (story `O-07`) | `jtbd.md` removal candidate: `RJ-O1` is already fully closed by the push notification + lock-screen accept/decline. The map is convenience, not a job. Post-MVP. | **Backlog** — post-MVP |
| **DRON credential as professional identity** `[?]` | The "Verified by DRON" badge exists as a profile field (OE-3). The deeper claim — that the badge functions as a portable professional credential — is `HJ-1`, with no operator-community data. | **Attach** (badge on Profile) + **backlog** the identity claim |

---

## 5. Resolved Decisions (June 2026)

1. **C-2 portfolio** — held `[?]` on OE-3 / CE-5 until the C-2 persona is validated. The portfolio
   field stays marked as a hypothesis, not a confirmed object.
2. **Saved addresses** (CE-1) — confirmed object, but **opt-in**: the address is captured from the
   order automatically and persisted to the address book only when the user ticks a "save this
   address" checkbox. No silent storage.
3. **Commission / fee terms** (OE-12) — kept in the main Operator list as an activation gate for
   `MJ-2`, despite having no dedicated JTBD.

---

## 6. Screens (draft)

Two separate sitemaps — one per persona type, **Client** and **Operator** — because the two
personas are equal and share almost no screens. Screens are derived from what the person is
**trying to do** (jobs + entities `§1–§3`), grouped by human logic and the object in hand,
**not** by "site sections" and **not** copied from any competitor in `research.md`.

**Depth is intentionally minimal** — only groups → screens. Sub-levels are added consciously at
step 3.

**Reading the tree**

- `(JOB-ID)` — the job from `research/jtbd.md` the screen serves. A screen with no job is an
  **`[ORPHANED]`** screen and is parked in the "Under question / orphaned" block, never the main tree.
- Persona need is tagged per screen: **bold** = the persona of that type who *primarily* needs it;
  plain = also needed, lower weight. Client type → `C-1` primary, `C-2` secondary.
  Operator type → `O-1` primary, `O-2` secondary.
- `[?]` — screen depends on an inferred / hypothesis entity.
- **States ≠ screens.** `empty`, `loading`, `error`, "operator en route" vs "in progress" are
  *states* of one screen, resolved per-screen at step 3 — they are deliberately absent here.

---

### 6.1 — CLIENT sitemap

> Primary: **C-1** (urgent: delivery / same-day). Secondary: **C-2** (planning: aerial photo / inspection).

```
CLIENT
│
├─ Getting in — identity & first contact
│   ├─ Welcome / first-use explainer .......... (EJ-1)               [ C-1 · C-2 ]
│   └─ Sign in with Diia / BankID ............. (MJ-1 enabler · C-02) [ C-1 · C-2 ]
│
├─ Ordering the job — Service → Order → Price → Pay
│   ├─ Home / start an order .................. (MJ-1 · RJ-C5 entry)  [ C-1 · C-2 ]
│   ├─ Service catalogue ..................... (MJ-1)                [ C-1 · C-2 ]
│   ├─ Order setup / details ................. (MJ-1 · RJ-C3 price)  [ C-1 · C-2 ]
│   │     └─ Time-slot pick (calendar-first) .. (MJ-1 planning mode)  [ C-2 ]
│   ├─ Order review & price .................. (RJ-C3)               [ C-1 · C-2 ]
│   └─ Payment ............................... (MJ-1 · C-04)         [ C-1 · C-2 ]
│
├─ The wait — after payment, before arrival
│   ├─ Order confirmed / operator revealed .... (RJ-C2 + RJ-C1)      [ C-1 ]
│   └─ Live tracking & ETA ................... (RJ-C2 · C-05)        [ C-1 ]
│
├─ The outcome — proof of work
│   ├─ Delivery confirmation ................. (RJ-C4)               [ C-1 ]
│   └─ Inspection report ..................... (RJ-C4)               [ C-2 ]
│
├─ Coming back — repeat & advocacy
│   ├─ Order history ......................... (RJ-C5)               [ C-1 · C-2 ]
│   ├─ Rate the order ........................ (serves EJ-3 + RJ-C1) [ C-1 · C-2 ]
│   └─ Share / refer ......................... (SJ-1)                [ C-1 ]
│
└─ When it goes wrong — resolution
    ├─ Support / dispute ..................... (EJ-2)               [ C-1 · C-2 ]
    ├─ Report an issue ....................... (EJ-2)               [ C-1 · C-2 ]
    ├─ Resolution outcome .................... (EJ-2)               [ C-1 · C-2 ]
    └─ Contact human support ................. (EJ-2)               [ C-1 · C-2 ]
```

**Under question / orphaned — Client**

```
✗ Operator portfolio view .................... (RJ-C1 for C-2; portfolio [?])  [ C-2 · [?] ]
✗ Operator search / selection ................ [ORPHANED] — conflicts with auto-dispatch (HJ-3)
✗ Education hub (beyond the explainer) ........ [ORPHANED] / [?] — HJ-2, no data
```

---

### 6.2 — OPERATOR sitemap

> Primary: **O-1** (experienced freelance pilot). Secondary: **O-2** (newly certified, no client base).

```
OPERATOR
│
├─ Getting in — join & get verified
│   ├─ Operator landing / fee terms .......... (MJ-2 activation · OE-12)        [ O-1 · O-2 ]
│   ├─ Sign up / identity .................... (MJ-2)                          [ O-1 · O-2 ]
│   ├─ Verification / document upload ........ (MJ-2 gate · Drop-off #3)       [ O-1 · O-2 ]
│   └─ Profile setup ......................... (RJ-C1 consumes · EJ-3)         [ O-1 · O-2 ]
│
├─ Ready to work — the hub
│   └─ Operator home + status toggle ......... (O-02 · MJ-2)                   [ O-1 · O-2 ]
│
├─ Taking a job — offer → decision
│   ├─ Incoming job offer / accept-decline ... (RJ-O1 · O-01)                  [ O-1 · O-2 ]
│   └─ Job brief / detail .................... (RJ-O1 · MJ-2)                  [ O-1 · O-2 ]
│
├─ Doing the job — execute → close
│   ├─ Job checklist (in progress) ........... (RJ-O2 · O-03)                  [ O-2 · O-1 ]
│   ├─ Result upload / close job ............. (RJ-O2 → result · O-04)         [ O-1 · O-2 ]
│   └─ Dispute / client issue ............... (EJ-2 — operator side)          [ O-1 · O-2 ]
│
└─ Getting paid & building standing
    ├─ Wallet / earnings .................... (RJ-O3 · O-05)                  [ O-1 ]
    ├─ Withdraw to card / bank account ...... (RJ-O3 — payout to external)    [ O-1 · O-2 ]
    └─ Ratings dashboard .................... (EJ-3 · O-06)                   [ O-1 · O-2 ]
```

**Under question / orphaned — Operator**

```
✗ SRM map view of nearby requests (O-07) ..... [ORPHANED] — RJ-O1 already closed by the job
                                               offer/notification; removal candidate (jtbd.md §Removal)
```

---

**Cross-persona note.** Client and Operator share **no** screen — they meet only through the
**boundary objects** (`§3`): the client's *Order confirmed / tracking* and the operator's *Job brief*
are two screens onto one record; the client's *Result* and the operator's *Result upload* likewise;
the client's *Rate the order* feeds the operator's *Ratings dashboard*. Each side keeps its own
sitemap.

---

## 7. Navigation

Navigation model derived from the screens in `§6`. Two separate models — **Client** and **Operator** —
because the personas share no screens. Each global entry is justified by the **job-cluster** behind it,
not by convention.

Main jobs measured for depth:
- **Client (C-1 primary):** *get a drone service done* — handed off and paid.
- **Operator (O-1 primary):** *take the order, fulfil it, receive payment.*

---

### 7.1 — Global navigation: CLIENT

Three job-clusters are always reachable, plus one persistent utility. Not "tabs because every app has tabs" — each is the doorway to a distinct client job.

| Global entry | Job-cluster behind it | Why it is global |
|---|---|---|
| **Order** (Home) | `MJ-1` — hand a drone job to a professional; `RJ-C5` — book again | The main job's launch point. Everything else exists to support placing an order. |
| **Activity** | `RJ-C2` — track who is coming and when; `RJ-C4` — receive the proof; `RJ-C5` — history → repeat | The post-payment void and the proof of work are their own anxiety jobs; the client must reach an active order's status at any moment without re-navigating the booking flow. |
| **Help** | `EJ-2` — resolution when something goes wrong | "Not feel abandoned" is a score-3 job for C-1. Must be reachable from anywhere, never buried. (Resolution flow scoped June 2026 — see `flows.md`; policy inputs still `[?]`.) |
| *Account* (utility) | enabler of `MJ-1` (identity `C-02`, saved methods, saved address) | Not a job-cluster — a persistent utility holding identity and payment so the main flow stays short. |

---

### 7.2 — Global navigation: OPERATOR

| Global entry | Job-cluster behind it | Why it is global |
|---|---|---|
| **Jobs** (Home) | `MJ-2` — a steady flow of pre-qualified jobs; `RJ-O1` — decide in seconds | The operator's main job lives here: status toggle + incoming and active jobs. |
| **Earnings** | `RJ-O3` — get paid without managing it | Payment is the #1 retention mechanism and the fastest churn trigger; the wallet must be a permanent, glanceable destination. |
| **Ratings** | `EJ-3` — reputation worth building | Reputation is the only path to standing (critical for O-2 cold-start); always reachable, not hidden behind a job. |
| *Account* (utility) | verification status, profile, insurance (`OE-2`, `OE-3`, `OE-11`) | Not a job-cluster — the trust artifacts and one-time onboarding state. |

---

### 7.3 — Depth to the main job (tap count)

**Rule check:** depth must be **≤ 3** stages from first screen to main job for the primary persona.
Measured for the **recurring** case (one-time onboarding is excluded — counted separately below).

#### Client — C-1 (primary)

The raw `§6` flow is 5 stages: *Home → Service catalogue → Order setup → Order review & price → Payment → Confirmed.* **That is > 3 — restructured** (see compromise below).

Restructured flow:

| # | Screen | Action | Tap |
|---|---|---|---|
| 1 | **Home** (service tiles) | tap "Delivery" | 1 |
| 2 | **Order setup + live price** | enter / confirm location, parcel → tap "Pay with Apple Pay" (locked price shown above the button — `RJ-C3`) | 1 |
| 3 | Apple/Google Pay sheet | authorize → **Order confirmed, operator revealed** (`RJ-C2`+`RJ-C1`) | 1 |

**Depth = 3 taps** to hand-off (the main job). Returning client via **Book again** (`RJ-C5`): **2 taps** (Book again → authorize).

**Compromise (why the restructure is safe).** Three merges removed two stages:
1. *Home* absorbs the *Service catalogue* — the service tiles **are** the home content.
2. *Order setup* absorbs *Order review & price* — price is a **live field** above the Pay button, not a separate confirmation screen.
3. *Payment* is the system Apple/Google Pay sheet (`C-04`), not an in-app screen.

The cost is the loss of a dedicated "review your price" screen. It is mitigated because `RJ-C3`
("full cost upfront, no plus-fees") is still satisfied twice: the locked price sits large directly
above the Pay button, and the Pay sheet shows the final amount before authorization. For C-1
(urgency mode, Drop-off #2 punishes any surprise *and* any extra step), removing the screen is the
correct trade, not a shortcut.

> Secondary C-2 (planning) adds **one** stage — the *Time-slot pick* (calendar-first) — for a depth of 4.
> Accepted: C-2 is in planning mode and expects scheduling coordination; the ≤3 rule is held where it
> matters, for the primary persona.

> **Depth marker.** The `flows.md` MJ-1 and RJ-C5 diagrams still render the *logical* un-merged path
> (5 and 3 screens) and carry a red ![long way](https://img.shields.io/badge/depth-long%20way-c4143c)
> badge. The merge above (Home⊃Catalogue, Setup⊃Price; Book-again → Pay) is the **physical** 3-tap /
> 2-tap target. Logical flow ≠ physical depth — kept apart on purpose, not yet re-cut in the diagrams.

#### Operator — O-1 (primary)

| # | Screen | Action | Tap |
|---|---|---|---|
| 1 | **Job offer** (push / lock screen) | tap **Accept** (`RJ-O1`, `O-01`) → **order taken** | 1 |
| — | *(physical flight — off-app)* | execute | — |
| 2 | **Job checklist** | tap through required steps (`RJ-O2`) | — |
| 3 | **Result upload / close** | upload result → tap "Complete" (`O-04`) | 1 |
| — | **Earnings / wallet** | payment **auto-released**, ≤ 30 min (`RJ-O3`) | **0** |

**Depth = 1 tap** to *take* the order (the decision point), and the close-out is ~1 more tap;
**payment is depth-0 — fully automatic.** Within the rule, no restructure needed: the design
intent (`RJ-O1` lock-screen decision + `RJ-O3` auto-payout) is what keeps it shallow.

#### One-time onboarding (excluded from recurring depth)

- **Client:** *Sign in with Diia / BankID* (`C-02`) + first-use explainer (`EJ-1`) — once.
- **Operator:** *Fee terms → Sign up → Verification → Profile setup* (`MJ-2` gate) — once, gated by review ETA.

---

### 7.4 — Global / Contextual / Deep

What is visible always, what surfaces inside a flow, and what is a rare, buried action.

| Tier | CLIENT | OPERATOR |
|---|---|---|
| **Global** (always visible) | Order (Home) · Activity · Help · Account | Jobs (Home) + status toggle · Earnings · Ratings · Account |
| **Contextual** (appears in the flow) | Order setup + price · Payment · Order confirmed / operator revealed · Live tracking · Result · Rate the order · Share · Time-slot pick (C-2 only) · Report an issue · Resolution outcome · Contact human support | Job offer / accept-decline · Job brief · Checklist · Result upload / close · Withdraw to card / bank · Dispute / client issue |
| **Deep** (rare actions) | First-use explainer · Edit profile / payment methods / saved addresses · Dispute detail (inside Help) · Language | Verification / document re-upload · Profile edit · Fee terms (pre-signup) · Insurance details |

**Reasoning.** Global = the doorways to the three job-clusters + account utility, nothing more
(adding a 5th global item would dilute the main job's prominence). Contextual = screens that only
make sense once an order/job exists — they appear in the active-order/active-job context and
disappear after, so they never compete with the global entries. Deep = one-time or low-frequency
actions (onboarding, settings, dispute drill-down) that must exist but must not occupy primary
navigation. States (`empty / loading / error`) are resolved per-screen at step 3 and are not part
of this navigation model.

---

## 8. Traceability — coverage matrix

**Rows** = every confirmed job in `research/jtbd.md` (main + related + emotional + social).
**Columns** = every **committed** screen from `§6` (the main `§6.1` / `§6.2` trees).
A `✓` means the screen actively participates in closing that job. Empty = no participation.

Presented in two halves by screen owner — **Client screens** and **Operator screens** — because
jobs cross personas (e.g. the client's `RJ-C1` is also closed by operator-side *Verification* and
*Profile setup*; `RJ-O3` is gated by the client confirming the result). A job is **covered** if it
has a `✓` in *either* half.

**Hypotheses `HJ-1/2/3` are excluded from the rows** by design — they are not committed jobs, and
their candidate screens live in `§4 Under question`. They are handled in the orphan-jobs list below
as backlog, not as live rows.

### Column codes

**Client screens** — WEL Welcome / first-use explainer · SGN Sign in (Diia/BankID) · HOM Home / start an order · CAT Service catalogue · SET Order setup / details · SLT Time-slot pick · PRC Order review & price · PAY Payment · CNF Order confirmed / operator revealed · TRK Live tracking & ETA · DLV Delivery confirmation · RPT Inspection report · HIS Order history · RAT Rate the order · SHR Share / refer · SUP Support / dispute · RIS Report an issue · ROU Resolution outcome · HSP Contact human support

**Operator screens** — FEE Operator landing / fee terms · OSG Sign up / identity · VER Verification / document upload · PRO Profile setup · OHM Operator home + status toggle · OFF Incoming job offer / accept-decline · BRF Job brief / detail · CHK Job checklist · RES Result upload / close job · WAL Wallet / earnings · WDR Withdraw to card / bank · RTG Ratings dashboard · DSP Dispute / client issue

### Matrix A — Jobs × CLIENT screens

| Job | WEL | SGN | HOM | CAT | SET | SLT | PRC | PAY | CNF | TRK | DLV | RPT | HIS | RAT | SHR | SUP | RIS | ROU | HSP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **MJ-1** Hand job to professional | | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | | | | | | | | | |
| **MJ-2** Steady job flow | | | | | | | | | | | | | | | | | | | |
| **RJ-C1** Confirm operator qualified | | | | | | | | | ✓ | | | | | ✓ | | | | | |
| **RJ-C2** Close post-payment void | | | | | | | | | ✓ | ✓ | | | | | | | | | |
| **RJ-C3** Price upfront | | | | | ✓ | | ✓ | ✓ | | | | | | | | | | | |
| **RJ-C4** Proof of work | | | | | | | | | | | ✓ | ✓ | | | | | | | |
| **RJ-C5** Repeat without starting over | | | ✓ | | ✓ | | | ✓ | ✓ | | | | ✓ | | | | | | |
| **RJ-O1** Quick job decision | | | | | | | | | | | | | | | | | | | |
| **RJ-O2** Execute without improvising | | | | | | | | | | | | | | | | | | | |
| **RJ-O3** Auto payment | | | | | | | | | | | ✓ | | | ✓ | | | | | |
| **EJ-1** First use feels safe | ✓ | | | | | | | | ✓ | | | | | | | | | | |
| **EJ-2** Resolution after bad experience | | | | | | | | | | | | | | | | ✓ | ✓ | ✓ | ✓ |
| **EJ-3** Operator reputation worth building | | | | | | | | | | | | | | ✓ | | | | | |
| **SJ-1** Client as introducer | | | | | | | | | | | | | | | ✓ | | | | |

### Matrix B — Jobs × OPERATOR screens

| Job | FEE | OSG | VER | PRO | OHM | OFF | BRF | CHK | RES | WAL | WDR | RTG | DSP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **MJ-1** Hand job to professional | | | | | | | | | | | | | |
| **MJ-2** Steady job flow | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | | | | | | |
| **RJ-C1** Confirm operator qualified | | | ✓ | ✓ | | | | | | | | | |
| **RJ-C2** Close post-payment void | | | | | | | | | | | | | |
| **RJ-C3** Price upfront | | | | | | | | | | | | | |
| **RJ-C4** Proof of work | | | | | | | | | ✓ | | | | |
| **RJ-C5** Repeat without starting over | | | | | | | | | | | | | |
| **RJ-O1** Quick job decision | | | | | ✓ | ✓ | ✓ | | | | | | |
| **RJ-O2** Execute without improvising | | | | | | | | ✓ | ✓ | | | | |
| **RJ-O3** Auto payment | | | | | | | | | ✓ | ✓ | ✓ | | ✓ |
| **EJ-1** First use feels safe | | | ✓ | | | | | | | | | | |
| **EJ-2** Resolution after bad experience | | | | | | | | | | | | | ✓ |
| **EJ-3** Operator reputation worth building | | | | ✓ | | | | | | | | ✓ | |
| **SJ-1** Client as introducer | | | | | | | | | | | | | |

### Coverage check

- **No empty job row** — every confirmed job has at least one `✓` across A + B. Pass.
- **No empty screen column** — every committed screen has at least one `✓`. Pass.

The committed matrix is fully traced both ways. The defects below therefore live **outside** the
committed set: in the `§4 Under-question` screens (orphan columns) and the deferred hypotheses
(orphan rows). Both are listed with a resolution so the committed sitemap stays clean.

### Defect list 1 — ORPHAN SCREENS (screen exists, no confirmed job)

These are the `§4 Under-question` screens — they appear in `sitemap.md` but earn **zero `✓`**
against any confirmed job. Each gets a verdict.

| Persona | Orphan screen | Why orphan | Resolution |
|---|---|---|---|
| Client | **Operator search + filters** | No client job — auto-dispatch removes browsing (`MJ-1`) | **Delete** — conflicts with the core architecture |
| Client | **Operator selection** ("choose operator") | Backed only by `HJ-3` (hypothesis); undermines `RJ-C1` | **Delete** — removal candidate in `jtbd.md` |
| Client | **Favourite / request-specific operator** | `HJ-3` `[?]`, conflicts with auto-dispatch | **Backlog** — revisit only if `HJ-3` is validated |
| Client | **Client ↔ operator chat** | No job; the rejected Rover async-negotiation anti-pattern | **Delete** — deliberately excluded |
| Client | **Education hub** (beyond the explainer) | `HJ-2` `[?]`; the committed slice already lives in *Welcome / explainer* (`EJ-1`) | **Backlog** — expand only if `HJ-2` is validated |
| Client | **Operator portfolio view** | Serves `RJ-C1` only for C-2, on a `[?]` entity; `RJ-C1` is already closed by *Order confirmed* + *Verification* + *Profile setup* + *Rate* | **Attach** — fold into *Order confirmed / Profile* if C-2 is validated; otherwise **backlog** |
| Operator | **Operator listing / advert** | Not a marketplace; jobs are dispatched (`MJ-2`) | **Delete** — Kabanchik concept, not a DRON object |
| Operator | **SRM map view of nearby requests** (`O-07`) | `RJ-O1` already closed by *Job offer* + *Job brief* | **Backlog** — post-MVP convenience, not a job |
| Operator | **DRON credential as professional identity** | `HJ-1` `[?]`; the badge is already a field on *Verification / Profile* | **Attach** (badge exists) + **backlog** the identity claim |

### Defect list 2 — ORPHAN JOBS (job exists, no screen)

- **Among confirmed jobs: none.** Every `MJ / RJ / EJ / SJ` row is closed by at least one committed
  screen (see the coverage check). No product hole at the committed scope.
- **Deferred (hypotheses, not live rows — backlog, where they would attach if validated):**

| Job | The human would do this on… | Resolution |
|---|---|---|
| `HJ-1` Platform credential as identity (Operator) | *Profile setup* / *Ratings dashboard* (badge surfacing) | **Backlog** — needs operator-community data |
| `HJ-2` Understand what services exist (Client) | *Education hub* / expanded *Welcome explainer* | **Backlog** — needs first-session data |
| `HJ-3` Choose a specific operator (Client) | *Operator selection* / *Favourite operator* | **Backlog** — conflicts with auto-dispatch; validate before building |

### Result

Acting on Defect list 1 (delete 4, attach 2, backlog 3) leaves the sitemap with **no unjustified
screen**; Defect list 2 confirms **no unfilled confirmed job**. Goal met: zero empty rows, zero empty
columns in the committed matrix.

**Critique follow-up (June 2026).** The flow review surfaced one cross-persona hole the matrix had
masked: `EJ-2` was client-only, yet a dispute holds the operator's pay and needs their response.
Added screen **`Dispute / client issue`** (`OE-13`, column `DSP`) gives `EJ-2` operator-side coverage
and ties `RJ-O3` to the payment-hold; Matrix B `DSP` column is non-empty. See `flows.md` Operator
MAIN (`disputes` branch) and EJ-2 resolution flow.
