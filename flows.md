# DRON — User Flows

**Status:** Draft · June 2026. Mermaid `flowchart TD` per job. Renders on GitHub.
**Source of truth:** every screen node here exists in [`sitemap.md`](sitemap.md) `§6 Screens`.
Jobs reference [`research/jtbd.md`](research/jtbd.md). Two personas kept separate — **Client** and **Operator**.

**Legend**
- `[" screen "]` — a screen (name taken from `sitemap.md`).
- `{" question? "}` — a decision, branched `-->|yes|` / `-->|no|` (or named branches).
- Stadium `([" … "])` — a **state**: `Loading`, `Empty`, `Error`, or a terminal.
  Amber = state, red = dead-end (person stuck), green = success.
- States are nodes, not happy-path only: every flow shows `empty` / `error` / `loading` and **both ends** — success and dead-ends.

---
---

# SHARED — entry

## ROLE FORK — Client or Operator (after registration, then onboarding)

> After registering with Diia / BankID for the first time, the person must declare which side they are on — **get a service done** (Client) or **provide services** (Operator) — before any persona-specific screen. Right after the fork each side runs a short **onboarding**, then enters its path. One-time; returning, already-classified users skip straight to their side. — `sitemap.md §6.0`

```mermaid
flowchart TD
  R(["Registration complete — Diia / BankID"]) --> RF["Choose your role — Client or Operator"]
  SWITCH(["Returning user: Account → Switch role"]) --> RF
  RF --> D1{"Which side?"}
  D1 -->|"Client — I want a service done"| CO["Client onboarding"]
  D1 -->|"Operator — I will provide services"| OO["Operator onboarding"]
  CO --> D2{"Understood / done? (skippable)"}
  D2 -->|"skip / too long"| COS(["Fallback: one-card 15-second version"]):::state
  COS --> CL
  D2 -->|yes| CL(["Enters CLIENT MJ-1 flow → Home / start an order"]):::done
  OO --> OP(["Enters OPERATOR MJ-2 activation flow → Operator landing / fee terms"]):::done
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Which side?* — the single classification that routes the whole product; no browsing, no mixing (`sitemap.md §6.0`).
- *Understood / done?* — Client onboarding carries the `EJ-1` explainer; if skipped it collapses to a one-card version (never a dead-end).

**States & dead-ends**
- The fork itself is a stateless local choice — two fixed options, resolves instantly, no dead-end: both branches run an onboarding, then a persona main flow.
- *Client onboarding* has one real state — `Empty` (skipped / too long) → one-card fallback. *Operator onboarding* is a stateless lead-in to the activation gate.

---

## CHANGE PERSONA — switch Client ⇄ Operator (any time, from Account)

> A person is not locked to their first choice. From **Account** on either side (`sitemap.md §7.4`, Deep) they can re-enter the role fork and switch — a client who becomes an operator, or an operator ordering a service as a client. This entry exists in **every** flow via the persistent Account utility.

```mermaid
flowchart TD
  A(["On any screen — open Account"]) --> SW["Switch role (Client ⇄ Operator)"]
  SW --> D1{"Confirm switch?"}
  D1 -->|no| BK(["Back to current side — nothing changes"]):::state
  D1 -->|yes| RF["Choose your role — Client or Operator"]
  RF --> D2{"Already onboarded on the target side?"}
  D2 -->|no| ONB["Client onboarding / Operator onboarding"]
  ONB --> HOME(["Success: now on the other side's home"]):::done
  D2 -->|yes| HOME
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Confirm switch?* — a deliberate confirm so a mis-tap doesn't drop an in-progress order/job; decline returns unchanged.
- *Already onboarded on the target side?* — first-ever switch runs that side's onboarding once; thereafter it goes straight to home.

**States & dead-ends**
- `State` — declined switch → back to the current side, no change.
- `Success` — landed on the other side's home. No dead-end: switching is always reversible from the same Account entry.

---
---

# CLIENT

## MAIN JOB · MJ-1 — Order a service quickly and reliably

> **When** I need a result only a drone can deliver, **I want** to hand the job to a certified professional without managing anything, **so that** I get the outcome without thinking about the drone or the operator. — `jtbd.md` MJ-1

![long way](https://img.shields.io/badge/depth-long%20way-c4143c) **Long way** — this diagram shows the logical 5-screen path; navigation (`sitemap.md §7.3`) merges *Service catalogue* into *Home* and *Order review & price* into *Order setup* to hit the 3-tap target. Depth deliberately not re-cut here.

```mermaid
flowchart TD
  A(["Open app"]) --> D0{"Signed in?"}
  D0 -->|no| B["Sign in with Diia / BankID"]
  D0 -->|yes| C["Home / start an order"]
  B --> RF0["Choose your role — Client or Operator"]
  RF0 --> RFD{"Client or Operator?"}
  RFD -->|Operator| OPX(["Switches to OPERATOR MJ-2 activation flow"]):::state
  RFD -->|Client| CO0["Client onboarding"]
  CO0 --> C
  C --> E["Service catalogue"]
  E --> DR{"Service available in your region?"}
  DR -->|no| NR(["Empty: not in your region yet"]):::state
  NR --> NRok(["Saved: notify me when DRON launches here"]):::done
  DR -->|yes| F["Order setup / details"]
  F --> DZ{"Address within service zone?"}
  DZ -->|no| OZ(["Error: address outside service zone"]):::state
  OZ --> F
  DZ -->|yes| D1{"Operator available now?"}
  D1 -->|no| G(["Empty: none available — next slot ~40 min"]):::state
  G --> D2{"Wait, save for later, or leave?"}
  D2 -->|wait| F
  D2 -->|"save for later"| NA1(["Saved: notify me when an operator is free"]):::done
  D2 -->|leave| H(["Dead-end: leaves without ordering"]):::dead
  D1 -->|yes| I["Order review & price"]
  I --> J["Payment"]
  J --> D3{"Payment authorized?"}
  D3 -->|no| K(["Error: payment failed"]):::state
  K --> D4{"Retry, change method, or leave?"}
  D4 -->|retry| J
  D4 -->|"another method"| J
  D4 -->|leave| L(["Dead-end: checkout abandoned"]):::dead
  D3 -->|yes| M(["Loading: finding nearest certified operator"]):::state
  M --> D5{"Operator confirmed?"}
  D5 -->|no| N(["Error: no operator confirmed — auto-refund issued"]):::state
  N --> D6{"Try again, get notified, or leave?"}
  D6 -->|"try again"| C
  D6 -->|notify| NA2(["Saved: notify me when an operator is free"]):::done
  D6 -->|leave| O(["Dead-end: refunded, churn risk"]):::dead
  D5 -->|yes| P["Order confirmed / operator revealed"]
  P --> Q["Live tracking & ETA"]
  Q --> R["Delivery confirmation"]
  R --> D7{"Result as expected?"}
  D7 -->|no| S["Support / dispute"]
  D7 -->|yes| T["Rate the order"]
  T --> U(["Success: service delivered, main job done"]):::done
  S --> V(["Continues into EJ-2 resolution flow"]):::state
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Signed in?* — no → one-tap Diia / BankID (`C-02`); yes → straight to Home.
- *Client or Operator?* — first-time only, straight after registration (`sitemap.md §6.0`), then **Client onboarding** before Home; returning clients skip both. Choosing Operator leaves this flow for the operator side. Persona is switchable later from **Account → Switch role** (`sitemap.md §7.4`; see *CHANGE PERSONA* flow above).
- *Service available in your region? / Address within service zone?* — coverage gates (geography rollout UA + EU).
- *Operator available now?* — availability shown before payment (`C-01`).
- *Payment authorized?* — Apple/Google Pay outcome (`C-04`); on failure, retry or switch method.
- *Operator confirmed?* — auto-dispatch result after payment (`MJ-1`, Bolt model M-1).
- *Result as expected?* — branches into the dispute job (`EJ-2`).

**States & dead-ends**
- `Empty` — not in your region yet → **notify when launched (saved, not churn)**.
- `Error` — address outside service zone → fix address.
- `Empty` — none available now → wait, **save for later (notify)**, or leave (dead-end).
- `Error` — payment failed → retry / change method / leave.
- `Loading` — auto-dispatch searching for an operator.
- `Error` — no operator confirmed → auto-refund → try again / **notify** / leave.
- `Success` — delivered + rated; the *Saved* recovery turns a stock-out into a lead, not a loss.
- *Hand-off* — the dispute path continues into the **EJ-2 resolution flow** (below).

---

## RELATED · RJ-C1 — Confirm the person coming is real and qualified

> **When** I've found a service but never used drone services, **I want** to see proof of who will come, **so that** I commit without lingering doubt. — `jtbd.md` RJ-C1

```mermaid
flowchart TD
  J["Payment"] --> M(["Loading: finding operator"]):::state
  M --> P["Order confirmed / operator revealed"]
  P --> LC(["Loading: operator credentials"]):::state
  LC --> D1{"Verified + Insured + rating shown?"}
  D1 -->|no| E1(["Error: trust signals not loaded"]):::state
  E1 --> D1b{"Reload succeeded?"}
  D1b -->|yes| D1
  D1b -->|no| RE(["Fallback: DRON-verified, insured-fleet reassurance + Support"]):::state
  RE --> GH["Support / dispute"]
  D1 -->|yes| D2{"Has reviews / job history?"}
  D2 -->|no| E2(["Empty: 0 reviews — newly certified operator"]):::state
  E2 --> RV(["Reassure: DRON-verified, insured, platform-backed"]):::state
  RV --> D3{"Trust anyway?"}
  D3 -->|yes| OK(["Success: client commits with confidence"]):::done
  D3 -->|no| C1{"Re-dispatch, cancel, or get help?"}
  D2 -->|yes| D4{"Profile inspires trust?"}
  D4 -->|yes| OK
  D4 -->|no| C1
  C1 -->|"re-dispatch"| RD(["Loading: assigning a different operator"]):::state
  RD --> P
  C1 -->|help| GH
  C1 -->|cancel| X2(["Dead-end: order cancelled, refund, churn risk"]):::dead
  GH --> X3(["Continues into EJ-2 resolution flow"]):::state
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Verified + Insured + rating shown?* — the no-tap trust signals (M-2); loaded, retried, or fallback reassurance.
- *Has reviews / job history?* — separates experienced (O-1) from cold-start (O-2); 0 reviews → platform reassurance.
- *Trust anyway? / Profile inspires trust?* — the commit decision.
- *Re-dispatch, cancel, or get help?* — re-dispatch a different operator is offered before cancel.

**States & dead-ends**
- `Loading` — finding operator; loading credentials.
- `Error` — trust signals not loaded → reload → fallback reassurance + Support (no more app-close).
- `Empty` — 0 reviews → platform-backed reassurance, then the trust decision.
- `Success` — client commits with confidence.
- **Dead-end** — only a deliberate cancel → refund → churn; help → **EJ-2 resolution flow** (below).

---

## RELATED · RJ-C2 — Eliminate the unknown between payment and arrival

> **When** I've paid and the money has left my account, **I want** to know who is coming, when, and where they are now, **so that** the gap doesn't feel like a void. — `jtbd.md` RJ-C2

```mermaid
flowchart TD
  P["Order confirmed / operator revealed"] --> D1{"Operator identity shown (name, photo, ETA)?"}
  D1 -->|no| E1(["Error: generic 'order received', no operator — the void"]):::state
  E1 --> D1b{"Refresh shows the operator?"}
  D1b -->|yes| D1c
  D1b -->|no| GH["Support / dispute"]
  D1 -->|yes| D1c{"Operator able to fly (airspace / weather OK)?"}
  D1c -->|no| AB(["Error: operator stood down — airspace / weather"]):::state
  AB --> RDx(["Loading: re-dispatching, or refund / reschedule"]):::state
  RDx --> P
  D1c -->|yes| T["Live tracking & ETA"]
  T --> D2{"Live position updating?"}
  D2 -->|no| L1(["Loading: waiting for GPS signal"]):::state
  L1 --> D3{"Recovered within timeout?"}
  D3 -->|no| E2(["Error: tracking lost"]):::state
  E2 --> GH
  D3 -->|yes| T
  D2 -->|yes| D4{"Operator on time?"}
  D4 -->|no| E3(["Empty/late: ETA slipping, push 'running late'"]):::state
  E3 --> D5{"Client keeps waiting?"}
  D5 -->|no| GH
  D5 -->|yes| AR["Delivery confirmation"]
  D4 -->|yes| AR
  AR --> OK(["Success: void closed, arrival confirmed"]):::done
  GH --> X2(["Continues into EJ-2 resolution flow"]):::state
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Operator identity shown?* — named human vs generic "order received"; refresh, else Support.
- *Operator able to fly (airspace / weather)?* — wartime airspace / weather abort → re-dispatch or refund (`research.md` Finding 1/4).
- *Live position updating? / Recovered within timeout?* — tracking health.
- *Operator on time? / Keeps waiting?* — delay tolerance (`N-9` unknown).

**States & dead-ends**
- `Error` — the void → refresh → Support (no dead-end).
- `Error` — operator stood down (airspace/weather) → `Loading` re-dispatch / refund.
- `Loading` — waiting for GPS; `Error` — tracking lost → Support.
- `Empty/late` — ETA slipping → wait or escalate.
- `Success` — arrival confirmed; escalation → **EJ-2 resolution flow** (below).

---

## RELATED · RJ-C5 — Repeat without starting over

> **When** I want the same service again, **I want** to get back to "confirmed" in a single action, **so that** the second time is easier than the first. — `jtbd.md` RJ-C5

![long way](https://img.shields.io/badge/depth-long%20way-c4143c) **Long way** — the *Book again* path should be 2 taps (`sitemap.md §7.3`); the longer Home → history → setup branch below is the no-shortcut fallback, not the target.

```mermaid
flowchart TD
  C["Home / start an order"] --> LH(["Loading: fetching order history"]):::state
  LH --> D1{"Has a previous order?"}
  D1 -->|no| E1(["Empty: no history — full first-time flow"]):::state
  E1 --> CAT["Service catalogue"]
  CAT --> PF["Order setup / details"]
  D1 -->|yes| D2{"'Book again' shortcut visible?"}
  D2 -->|no| HIS["Order history"]
  HIS --> D3{"Found the past order?"}
  D3 -->|no| E2(["Empty: history hard to find"]):::state
  E2 --> SR{"Search or surface 'Book again'?"}
  SR -->|yes| PF
  SR -->|no| X1(["Dead-end: leaves for Kabanchik — Drop-off #4"]):::dead
  D3 -->|yes| D2b{"Service + price still valid?"}
  D2 -->|yes| D2b
  D2b -->|no| E4(["Error: previous service or price changed — review"]):::state
  E4 --> PF
  D2b -->|yes| PF
  PF --> D4{"Operator available now?"}
  D4 -->|no| E3(["Empty: none available now"]):::state
  E3 --> D5{"Wait, save for later, or leave?"}
  D5 -->|wait| PF
  D5 -->|"save for later"| NA(["Saved: notify me when an operator is free"]):::done
  D5 -->|leave| X2(["Dead-end: re-book abandoned"]):::dead
  D4 -->|yes| PAY["Payment"]
  PAY --> CFM["Order confirmed / operator revealed"]
  CFM --> OK(["Success: re-booked in 2 taps"]):::done
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Has a previous order?* — returning vs first-time.
- *'Book again' shortcut visible?* — the one-tap path (`C-07`).
- *Found the past order? / Search?* — buried history now offers search, not instant churn.
- *Service + price still valid?* — stale re-book caught before payment.
- *Available? / Wait, save, or leave?* — stock-out offers a saved-lead recovery.

**States & dead-ends**
- `Loading` — fetching history.
- `Empty` — no history → full MJ-1 flow; buried → **search / surface Book again** before any dead-end.
- `Error` — previous service or price changed → review before paying.
- `Empty` — none available → wait, **save for later (notify)**, or leave (dead-end).
- `Success` — re-booked.

---

## RELATED · EJ-2 — Resolution after a bad experience (scoped June 2026)

> **When** the result doesn't match what I expected, **I want** a clear path to resolution — not just a rating I can leave, **so that** one bad experience doesn't become a reason to never come back. — `jtbd.md` EJ-2

**Why this flow exists.** `jtbd.md` flags EJ-2 as a score-3 job for C-1 with **no function defined** —
the gap the other client flows previously dead-ended into. This scopes it, reusing the benchmarks
already cited in `jtbd.md` Table 2: **Glovo** no-questions refund, **Bolt** re-dispatch / safety,
**Airbnb** 24/7 support. Entry points are the hand-offs from MJ-1 (result not as expected),
RJ-C1 (trust concern / cancel) and RJ-C2 (no-show / tracking lost).

```mermaid
flowchart TD
  IN(["Entry: no-show, late, tracking lost, result not as expected, or trust concern"]) --> SD["Support / dispute"]
  SD --> D1{"What went wrong?"}
  %% A — order not delivered / no-show
  D1 -->|"didn't arrive / no-show"| D2{"Order still active?"}
  D2 -->|yes| RDSP(["Loading: re-dispatching a new operator"]):::state
  RDSP --> D3{"New operator found?"}
  D3 -->|yes| CFM["Order confirmed / operator revealed"]
  CFM --> OK1(["Success: job re-dispatched, client back on track"]):::done
  D3 -->|no| REF1(["Success: auto-refund issued, no-questions (Glovo model)"]):::done
  D2 -->|no| REF1
  %% B — result not as expected
  D1 -->|"result not as expected"| RI["Report an issue"]
  RI --> D4{"Evidence attached (photo / note)?"}
  D4 -->|no| EMP(["Empty: no evidence — weaker claim, manual review only"]):::state
  EMP --> HS["Contact human support"]
  D4 -->|yes| REV(["Loading: issue under review"]):::state
  REV --> RO["Resolution outcome"]
  RO --> D5{"Resolution?"}
  D5 -->|refund| REF2(["Success: refund issued"]):::done
  D5 -->|"free re-do"| REDO["Order confirmed / operator revealed"]
  REDO --> OK2(["Success: free re-do scheduled"]):::done
  D5 -->|"needs human review"| HS
  %% C — safety / trust concern
  D1 -->|"safety / trust concern"| HS
  %% Human escalation (Airbnb 24/7 model)
  HS --> D6{"Resolved with agent?"}
  D6 -->|yes| OK3(["Success: resolved via support"]):::done
  D6 -->|no| ESC(["Error: unresolved — escalation queue"]):::state
  ESC --> D7{"Policy defined: SLA, refund cap, liability?"}
  D7 -->|yes| OK4(["Success: resolved per policy"]):::done
  D7 -->|"no, to define"| GAP(["Dead-end: policy inputs missing — SLA, refund cap, liability"]):::dead
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *What went wrong?* — routes to the right remedy: delivery failure vs quality vs safety.
- *Order still active? / New operator found?* — re-dispatch vs refund (Bolt / Glovo).
- *Evidence attached?* — strength of a quality claim.
- *Resolution?* — refund / free re-do / human review.
- *Resolved with agent? / Policy defined?* — escalation outcome (Airbnb 24/7).

**States & dead-ends**
- `Loading` — re-dispatching a new operator; issue under review.
- `Empty` — no evidence → manual review only.
- `Error` — unresolved with agent → escalation queue.
- `Success` (multiple real ends) — re-dispatched · auto-refund · free re-do · resolved via support · resolved per policy.
- **Dead-end (the only one left)** — reached *only* when policy inputs are still undefined: SLA, refund cap, and third-party liability amount `[?]` (liability blocked on legal verification — `research/research.md` Finding 4). Everything upstream now resolves; this is the single honest gap remaining.

---

## RELATED · EJ-1 — First use feels safe

> **When** I consider a drone service for the first time, **I want** to feel that someone accountable is coming, **so that** "a stranger with a drone" stops feeling like a risk I take alone. — `jtbd.md` EJ-1

```mermaid
flowchart TD
  A(["First-time open"]) --> WEL["Welcome / first-use explainer"]
  WEL --> D1{"Explainer understood (drone: noise, safety, privacy)?"}
  D1 -->|no| E1(["Empty: skipped / too long"]):::state
  E1 --> SHORT(["Fallback: one-card 15-second version"]):::state
  SHORT --> CNF
  D1 -->|yes| CNF["Order confirmed / operator revealed"]
  CNF --> D2{"Named, verified, insured operator shown?"}
  D2 -->|no| E2(["Error: no human shown — anxiety persists"]):::state
  E2 --> GH["Support / dispute"]
  D2 -->|yes| OK(["Success: handing control feels safe"]):::done
  GH --> X1(["Continues into EJ-2 resolution flow"]):::state
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Explainer understood?* — the H-4 15-second explainer; if skipped, a one-card fallback.
- *Named, verified, insured operator shown?* — Bolt-model human reveal (D-3).

**States & dead-ends**
- `Empty` — explainer skipped → short fallback.
- `Error` — no human shown → Support → **EJ-2 resolution flow**.
- `Success` — first use feels safe.

---

## RELATED · RJ-C4 — Receive proof that the job was done

> **When** the operator has finished, **I want** a clear, documented result, **so that** I have evidence I can use, share or act on. — `jtbd.md` RJ-C4

```mermaid
flowchart TD
  CLOSE(["Operator closed the job"]) --> D1{"Service type?"}
  D1 -->|delivery| DLV["Delivery confirmation"]
  D1 -->|"photo / inspection"| RPT["Inspection report"]
  DLV --> D2{"Proof present (photo / confirmation)?"}
  RPT --> D2
  D2 -->|no| L1(["Loading: result not uploaded yet"]):::state
  L1 --> D3{"Arrived within timeout?"}
  D3 -->|no| E1(["Error: no proof — job cannot complete"]):::state
  E1 --> GH["Support / dispute"]
  D3 -->|yes| D2
  D2 -->|yes| RATE["Rate the order"]
  RATE --> OK(["Success: documented result in hand; client confirm releases operator pay (RJ-O3)"]):::done
  GH --> X1(["Continues into EJ-2 resolution flow"]):::state
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Service type?* — delivery confirmation vs inspection report (C-2).
- *Proof present? / Arrived within timeout?* — proof gates completion (H-7) and the operator payout (`RJ-O3`).

**States & dead-ends**
- `Loading` — result not uploaded yet.
- `Error` — no proof → Support → **EJ-2 resolution flow**.
- `Success` — documented result; the client confirm here is what releases the operator's payment.

---

## RELATED · SJ-1 — Be the one who introduced something new

> **When** the service works the way it should, **I want** to share it in a single action, **so that** I'm the one who showed people something new. — `jtbd.md` SJ-1

```mermaid
flowchart TD
  G0(["After a good order"]) --> RATE["Rate the order"]
  RATE --> D1{"Prompt to share shown?"}
  D1 -->|no| E1(["Empty: no share entry — advocacy lost"]):::state
  E1 --> X1(["Dead-end: word-of-mouth not captured"]):::dead
  D1 -->|yes| SHR["Share / refer"]
  SHR --> D2{"Share completed?"}
  D2 -->|no| E2(["Empty: opened, didn't send"]):::state
  E2 --> SHR
  D2 -->|yes| OK(["Success: friend introduced, referral attributed"]):::done
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Prompt to share shown?* — a missing share entry is the silent advocacy leak.
- *Share completed?* — opened vs sent.

**States & dead-ends**
- `Empty` — no share entry → **word-of-mouth not captured (dead-end — fix: always offer a one-tap share)**.
- `Empty` — opened but didn't send → back to Share.
- `Success` — referral attributed.

---
---

# OPERATOR

## MAIN JOB · MJ-2 + RJ-O3 — Take the order, fulfil it, get paid, withdraw

> **When** I have the licence, equipment and capacity, **I want** pre-qualified jobs to reach me and payment to move on its own, **so that** I spend my time flying, not selling or chasing money. — `jtbd.md` MJ-2, RJ-O1, RJ-O2, RJ-O3

**Model (Bolt / Uklon driver cash-out).** Two phases. **Phase A — fulfil the order first:** earnings from each completed order land in the operator's balance. Balance accrues across orders. **Phase B — withdraw is the LAST step:** only from an accumulated balance does the operator cash out — instant to a linked card, or bank transfer in 1-3 days. No per-order withdrawal.

```mermaid
flowchart TD
  %% Phase A — fulfil the order first
  H["Operator home + status toggle"] --> D0{"Status = Available?"}
  D0 -->|no| Z(["Idle: no offers while Offline / Busy"]):::state
  Z --> H
  D0 -->|yes| OF["Incoming job offer / accept-decline"]
  OF --> D1{"Accept within 10s?"}
  D1 -->|no| E0(["Empty: offer expired, reassigned"]):::state
  E0 --> H
  D1 -->|yes| BR["Job brief / detail"]
  BR --> D2{"Details sufficient to proceed?"}
  D2 -->|no| DEC(["Declined: job lost — back to offers"]):::state
  DEC --> H
  D2 -->|yes| AB0{"Able to fly (airspace / weather OK)?"}
  AB0 -->|no| ABRT(["Error: stand down — airspace / weather; re-dispatched, client refunded"]):::state
  ABRT --> H
  AB0 -->|yes| CL["Job checklist (in progress)"]
  CL --> D3{"All steps + result captured?"}
  D3 -->|no| E1(["Error: required step skipped — cannot close"]):::state
  E1 --> CL
  D3 -->|yes| RU["Result upload / close job"]
  RU --> D4{"Upload succeeded?"}
  D4 -->|no| L1(["Error: slow or failed upload"]):::state
  L1 --> D5{"Retry or queue offline?"}
  D5 -->|retry| RU
  D5 -->|"queue offline"| OQ(["Loading: saved offline — uploads when online; payment held until proof"]):::state
  OQ --> RU
  D4 -->|yes| D6{"Client response?"}
  D6 -->|awaiting| WAIT(["Loading: awaiting confirmation (up to 2h)"]):::state
  WAIT --> D6
  D6 -->|disputes| DISP["Dispute / client issue"]
  DISP --> DH{"Resolved in operator's favour?"}
  DH -->|yes| PAID
  DH -->|no| HOLD(["Error: payment held pending EJ-2 resolution"]):::state
  HOLD --> DISP
  D6 -->|"confirms / 2h auto"| PAID(["Order paid: earnings added to balance (within 30 min)"]):::done
  PAID --> W["Wallet / earnings"]
  W --> D7{"Take another order first?"}
  D7 -->|yes| H
  %% Phase B — withdraw is the LAST step
  D7 -->|no| D8{"Balance above minimum payout?"}
  D8 -->|no| EMIN(["Empty: below minimum — keep earning"]):::state
  EMIN --> H
  D8 -->|yes| WD["Withdraw to card / bank account"]
  WD --> D9{"Payout method linked?"}
  D9 -->|no| LINK(["Loading: link and verify card / bank account"]):::state
  LINK --> D10{"Method valid?"}
  D10 -->|no| E2(["Error: invalid card / bank details"]):::state
  E2 --> WD
  D10 -->|yes| D11{"Payout type?"}
  D9 -->|yes| D11
  D11 -->|"card (instant)"| TRC(["Loading: instant transfer to card"]):::state
  D11 -->|"bank (1-3 days)"| TRB(["Loading: bank transfer, 1-3 business days"]):::state
  TRC --> D12{"Transfer succeeded?"}
  TRB --> D12
  D12 -->|no| E3(["Error: payout failed, funds returned to balance"]):::state
  E3 --> W
  D12 -->|yes| DONE(["Success: money on card / bank account — flow complete"]):::done
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Status = Available?* — gates dispatch (`O-02`). The operator can also **Switch role → Client** from Account at any time (`sitemap.md §7.4`; *CHANGE PERSONA* flow above) — e.g. to order a service as a client.
- *Accept within 10s?* — lock-screen decision (`RJ-O1`, `O-01`); declining loops back to offers, not a dead-end.
- *Able to fly (airspace / weather)?* — wartime/weather abort → re-dispatch + client refund (`research.md` Finding 1/4).
- *All steps captured? / Upload succeeded?* — execution gates; a failed upload **queues offline**, never closes without proof.
- *Client response?* — confirm / 2h auto-confirm / **dispute** (operator-side EJ-2, payment held).
- *Balance above minimum? / Method linked? / Payout type? / Transfer succeeded?* — the withdrawal tail, the last step.

**States & dead-ends**
- `Idle` — no offers while Offline/Busy.
- `Empty` — offer expired → reassigned; declined → back to offers; balance below minimum → keep earning.
- `Error` — airspace/weather stand-down → re-dispatch; step skipped → back to checklist.
- `Loading` — upload queued offline (payment held until proof); awaiting confirmation; linking method; transfers.
- `Error` — client dispute → payment held pending EJ-2; invalid payout details → fix; payout failed → funds returned to balance.
- `Success` — order paid into balance; or money withdrawn (flow complete). **No dead-ends remain in this flow.**

---

## RELATED · MJ-2 (activation) — Join and get verified

> **When** I have the licence and equipment, **I want** to get verified and live without silence, **so that** I can start receiving jobs. — `jtbd.md` MJ-2; CJM Operator Stage 2, Drop-off #3

Reached from the **role fork** (`§SHARED`) → **Operator onboarding** → the activation gate below. Persona is switchable any time from **Account → Switch role** (`sitemap.md §7.4`; *CHANGE PERSONA* flow above).

```mermaid
flowchart TD
  RF(["From role fork — chose Operator"]) --> OB["Operator onboarding"]
  OB --> L["Operator landing / fee terms"]
  L --> D0{"Commission acceptable?"}
  D0 -->|no| X0(["Dead-end: bounces — 'another platform that takes 30%?'"]):::dead
  D0 -->|yes| SU["Sign up / identity"]
  SU --> VU["Verification / document upload"]
  VU --> D1{"Docs complete (licence + insurance)?"}
  D1 -->|no| E1(["Error: missing or invalid documents"]):::state
  E1 --> VU
  D1 -->|yes| PEND(["Loading: under review — ETA 2-3 business days"]):::state
  PEND --> D2{"Verification ETA shown?"}
  D2 -->|no| NOETA(["Fix: always show ETA + push on status change"]):::state
  NOETA --> D3
  D2 -->|yes| D3{"Approved?"}
  D3 -->|no| E2(["Error: rejected — reason + resubmit path"]):::state
  E2 --> D4{"Resubmit?"}
  D4 -->|yes| VU
  D4 -->|no| X2(["Dead-end: not onboarded"]):::dead
  D3 -->|yes| PS["Profile setup"]
  PS --> HOME["Operator home + status toggle"]
  HOME --> OK(["Success: live, can receive jobs"]):::done
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Commission acceptable?* — fee shown before signup (`OE-12`).
- *Docs complete?* — licence + insurance upload.
- *Verification ETA shown?* — if missing, the fix is to **always show ETA + push** (removes the silence drop-off), not a dead-end.
- *Approved? / Resubmit?* — review outcome; rejection always carries a reason + resubmit path.

**States & dead-ends**
- `Error` — missing/invalid docs → re-upload; rejected → reason + resubmit.
- `Loading` — under review (ETA 2-3 days).
- *Fix* — the no-ETA branch routes to "always show ETA", closing Drop-off #3.
- **Dead-end (legit)** — operator rejects the fee, or declines to resubmit; both are real choices, not product holes.
- `Success` — live and dispatchable.

---

## RELATED · EJ-3 — Build a reputation worth having

> **When** I complete jobs and get rated, **I want** to see what clients valued and what they didn't, **so that** my effort turns into something I can grow. — `jtbd.md` EJ-3

```mermaid
flowchart TD
  H["Operator home + status toggle"] --> R["Ratings dashboard"]
  R --> D1{"Has any ratings yet?"}
  D1 -->|no| E1(["Empty: no ratings yet — cold-start (O-2)"]):::state
  E1 --> CS(["Path: platform still auto-dispatches jobs; ratings build from the first ones"]):::state
  CS --> H
  D1 -->|yes| D2{"Score breakdown + review text shown?"}
  D2 -->|no| E2(["Error: a single number, no 'why'"]):::state
  E2 --> RB(["Path: expand to per-service breakdown + review text"]):::state
  RB --> D3
  D2 -->|yes| D3{"Rating healthy?"}
  D3 -->|yes| OK(["Success: reputation grows, loyalty"]):::done
  D3 -->|no| IMP(["Path: see weak service type, improve next jobs"]):::state
  IMP --> H
  classDef state fill:#1c1813,stroke:#c4943a,color:#e8d9b8;
  classDef dead fill:#241313,stroke:#e05252,color:#f0d6d6;
  classDef done fill:#10241a,stroke:#4a9e6b,color:#d6f0e0;
```

**Decisions**
- *Has any ratings yet?* — cold-start (O-2) vs established (O-1); cold-start still gets auto-dispatched work.
- *Score breakdown + review text shown?* — transparency that drives loyalty (`O-06`).
- *Rating healthy?* — grow vs improve loop.

**States & dead-ends**
- `Empty` — no ratings yet → **auto-dispatch keeps feeding jobs; ratings accrue** (no cold-start dead-end).
- `Error` — only a number → **expand to breakdown + review text** (no frustration dead-end).
- `Success` — reputation grows; feedback loop back to more jobs.
