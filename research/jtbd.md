# JTBD — Jobs to Be Done

**Format:** "When [situation], I want [motivation], so that [result]."
**Rule:** No feature names in formulations — only human progress.
**Sources:** `research/target-audience.md`, `ux-research/user-stories-cjm.md`, `ux-research/benchmarks.md`, `ux-research/ux-patterns.md`, `ux-research/research.md`, `CLAUDE.md`.
Where a job has no research backing — moved to **Hypotheses**.

---

## Main Jobs of the Product

These two jobs define the two-sided market. Every other job on the list exists in service of one of them.

---

### MJ-1 — CLIENT
> **When** I need a result that only a drone can deliver — a parcel moved, footage captured, a structure documented —
> **I want** to hand the job to a certified professional without managing anything myself,
> **so that** I get the outcome without ever thinking about the drone or the operator.

**Persona:** C-1 (primary), C-2 (secondary)
**Research basis:**
- CLAUDE.md: "Users have never operated a drone and never will — they want a trusted professional to do it for them."
- `ux-research/research.md` — core JTBD: "I need a result that only a drone can deliver — I don't want to operate anything myself, I want to trust a professional."
- `ux-research/ux-patterns.md` — Reason 3: audience has no criteria to evaluate operators; auto-dispatch removes the decision entirely.

---

### MJ-2 — OPERATOR
> **When** I have the license, equipment, and capacity to do drone work,
> **I want** a steady stream of pre-qualified jobs to reach me without me hunting for them,
> **so that** I can spend my time flying, not selling.

**Persona:** O-1 (primary)
**Research basis:**
- `ux-research/user-stories-cjm.md` — Operator Epic: "Manage incoming jobs efficiently with minimal admin overhead."
- `research/target-audience.md` — O-1 pain: "Client acquisition takes as much time as the work itself."
- `ux-research/research.md` — H-5: operator churn trigger is payment friction and lack of platform value beyond matching.

---

## Related Jobs — CLIENT
*Steps on the path to MJ-1. Each is a moment where the main job can fail.*

---

### RJ-C1 — Confirm the person coming is real and qualified
> **When** I've found a service I want but I've never used drone services before,
> **I want** to see proof of who will come — credentials, insurance, job history — without digging for it,
> **so that** I can commit without a lingering doubt about who I'm trusting.

**Persona:** C-1, C-2
**Research basis:**
- `ux-research/user-stories-cjm.md` — C-03; Drop-off #1: "Operator selection screen — highest single drop-off point if trust signals missing."
- `ux-research/benchmarks.md` — M-2 (Airbnb: trust signals must appear on the list card before any tap); M-3 (Zocdoc: credentials precede bio).
- Whalen Emotion mind: "A stranger with a drone will be near my home → abandonment."

---

### RJ-C2 — Eliminate the unknown between payment and arrival
> **When** I've paid and the money has left my account,
> **I want** to know immediately who is coming, when they will arrive, and where they are right now,
> **so that** the gap between payment and completion doesn't feel like a void.

**Persona:** C-1
**Research basis:**
- `ux-research/benchmarks.md` — M-1 (Bolt): post-payment screen with operator identity is the intervention that converts the highest-anxiety moment.
- `ux-research/user-stories-cjm.md` — C-05; Stage 2 post-booking: "Anxiety converts to anticipation" when operator is shown.
- `ux-research/research.md` — P-1: "Live tracking is the baseline, not a feature. Users trained by Bolt and Glovo expect to see exactly where their order is at every moment."

---

### RJ-C3 — Know the price before any commitment
> **When** I'm considering placing an order,
> **I want** to see the full cost upfront — no estimates, no "plus fees",
> **so that** I can decide without being surprised at checkout.

**Persona:** C-1, C-2
**Research basis:**
- `ux-research/user-stories-cjm.md` — C-08; Drop-off #2: "Any 'plus fees' or surprise on payment screen = abandonment."
- `ux-research/research.md` — P-3: competitors use hard numbers, not adjectives, to build credibility. Same principle applies to pricing.
- Whalen Decision + Emotion: hidden cost is a rage-quit trigger.

---

### RJ-C4 — Receive proof that the job was done
> **When** the operator has finished the work,
> **I want** to see a clear, documented result — a photo, a report, a confirmation —
> **so that** I have evidence I can use, share, or act on.

**Persona:** C-1 (delivery confirmation), C-2 (inspection report, aerial footage)
**Research basis:**
- `ux-research/user-stories-cjm.md` — C-06: "Report delivered in-app ≤ 15 min after job close: cover photo, annotated findings, operator signature."
- `ux-research/research.md` — H-7: "If operators are required to upload a result photo before the job can be marked complete, client satisfaction on first use will be higher."
- Nova Poshta benchmark: 5M+ active UA users trained to expect proactive status evidence, not just "order completed."

---

### RJ-C5 — Repeat without starting over
> **When** I want the same service again,
> **I want** to get back to "confirmed" in a single action,
> **so that** the second time feels easier than the first, not identical to it.

**Persona:** C-1
**Research basis:**
- `ux-research/user-stories-cjm.md` — C-07; Drop-off #4: "If no 'Book again' shortcut → goes to Kabanchik instead."
- `ux-research/research.md` — H-6: "If DRON launches without a 'Book again' one-tap shortcut, repeat order rate will underperform."
- Whalen Memory: re-entry effort is the #4 critical drop-off in the CJM.

---

## Related Jobs — OPERATOR
*Steps on the path to MJ-2. Each is a moment where the operator's job can fail.*

---

### RJ-O1 — Make a job decision in seconds, not minutes
> **When** a job request appears while I'm between tasks or already on the move,
> **I want** to see everything I need — location, service type, duration, pay — in one glance,
> **so that** I can accept or pass without stopping to ask questions.

**Persona:** O-1, O-2
**Research basis:**
- `ux-research/user-stories-cjm.md` — O-01: "Accept / Decline in under 10 seconds. Push notification with service type + distance + time + price. Accept / Decline buttons on lock screen."
- Whalen Decision mind: information required to decide must fit on the notification itself.

---

### RJ-O2 — Execute the job without improvising
> **When** I'm on site and the job has started,
> **I want** a structured checklist that covers everything the client expects,
> **so that** I don't miss a required step because I had to guess what "done" looks like.

**Persona:** O-1, O-2
**Research basis:**
- `ux-research/user-stories-cjm.md` — O-03: "Checklist auto-generated at job start: pre-flight, execution, delivery confirmation, result photo."
- `research/target-audience.md` — O-2 pain: "Client expectations unclear before arrival — each job is a guess."
- Field context: app used with gloves in sunlight → large touch targets, high contrast required (O-03 acceptance criteria).

---

### RJ-O3 — Get paid without managing it
> **When** I've closed a job and the client has confirmed the result,
> **I want** the payment to move to my account on its own,
> **so that** I never have to chase money or issue an invoice.

**Persona:** O-1
**Research basis:**
- `ux-research/user-stories-cjm.md` — O-05; Drop-off #5: "Payment delay > 24h erodes trust in platform."
- `ux-research/research.md` — H-5: "If operator payment is auto-released within 30 min of client confirmation, operator retention will improve, because payment friction is the fastest trigger for direct client bypass."

---

## Emotional Jobs

---

### EJ-1 — CLIENT: Feel that handing control is safe, not reckless
> **When** I consider using a drone service for the first time,
> **I want** to feel that someone accountable — not just available — is coming to me,
> **so that** "a stranger with a drone" stops feeling like a risk I'm taking alone.

**Persona:** C-1
**Research basis:**
- `ux-research/user-stories-cjm.md` — Whalen Emotion: "A stranger with a drone will be near my home → abandonment." Key insight: "Emotion is the deepest mind. Unresolved anxiety overrides every other cognitive process."
- `ux-research/research.md` — H-4: first-time clients need a 15-second explainer before the first booking to reduce activation drop-off at the operator selection screen.
- `ux-research/benchmarks.md` — D-3: DRON shows a named, verified human operator (Bolt model) vs. competitors that hide operators behind the brand.

---

### EJ-2 — CLIENT: Not feel abandoned if something goes wrong
> **When** the result doesn't match what I expected,
> **I want** to know there's a clear path to resolution — not just a rating I can leave,
> **so that** one bad experience doesn't become a reason to never come back.

**Persona:** C-1
**Research basis:**
- `ux-research/user-stories-cjm.md` — Stage 3 Involvement: "Issue/complaint — one bad experience taints platform. No clear resolution path = permanent churn." Drop-off signal: 🔴.
- `ux-research/benchmarks.md` — Airbnb AirCover guarantee: "first-use anxiety reduction" scored ★★★★★ precisely because of damage guarantee and 24/7 support visibility.

---

### EJ-3 — OPERATOR: Feel that building reputation here is worth it
> **When** I complete jobs and get rated,
> **I want** to see clearly what clients valued and what they didn't,
> **so that** my effort to do good work translates into something I can point to and grow.

**Persona:** O-1
**Research basis:**
- `ux-research/user-stories-cjm.md` — O-06: "Ratings tab: overall score + breakdown by service type + last 10 reviews with text."
- `research/target-audience.md` — O-1 trust trigger: "Transparent, breakable-down rating (per service type + review text) = loyalty."
- Whalen Emotion: "Rating visibility — pride or frustration. Transparent, fair rating = loyalty." (Operator Stage 4.)

---

## Social Jobs

---

### SJ-1 — CLIENT: Be the person who introduced something genuinely new
> **When** the service works the way it should,
> **I want** to share it with the people around me in a single action,
> **so that** I'm the one who showed them something they hadn't seen before.

**Persona:** C-1
**Research basis:**
- `ux-research/user-stories-cjm.md` — Stage 4 Retention, Referral touchpoint: "Pride + advocate. One-tap share link." Drop-off signal: 🟢.
- Social proof is also the #2 discovery channel in CJM Stage 1: "Word of mouth — friend says 'I used a drone service, it was wild' → Trust (social proof)."

---

## Hypotheses
*Jobs not backed by research data. May belong in the main list after interviews — not before.*

---

### HJ-1 — OPERATOR: Carry the platform credential as part of professional identity
> **When** I work through DRON,
> **I want** clients and peers to recognize "DRON-certified operator" as a meaningful credential,
> **so that** the platform adds to my professional standing, not just my job count.

**Why hypothesis:** No research data on how Ukrainian drone pilots perceive platform-branded credentials vs. CAA/EASA licenses. No operator community interviews conducted.
**Persona link:** O-1, O-2
**What would confirm it:** Operator community survey; qualitative interviews on Telegram drone pilot groups.

---

### HJ-2 — CLIENT: Understand what drone services can actually do for me
> **When** I've heard of drone delivery or inspection but have never ordered it,
> **I want** to quickly grasp what exactly I can get and for how much,
> **so that** I can decide if it's relevant to my situation before investing more time.

**Why hypothesis:** Discovery and education need are implied by CJM Stage 1 (Language friction: "Is this actually available where I live?"), but no data on how much education vs. instant booking the first-time client actually needs. Could be critical or could be noise — unknown without testing.
**Persona link:** C-1, C-2
**What would confirm it:** First-session heatmaps; A/B test of homepage with/without service explainer.

---

### HJ-3 — CLIENT: Choose a specific operator rather than accepting whoever is assigned
> **When** I've had a great experience with a particular operator,
> **I want** to be able to request them specifically for future jobs,
> **so that** trust I've already built doesn't reset with every order.

**Why hypothesis:** CJM Stage 4 retention mentions "Your favorite operator is available" as a positive nudge (🟢), which implies the possibility — but it conflicts with the auto-dispatch model. No research on whether clients actually want operator choice or just consistency of quality. Could undermine the core auto-dispatch architecture.
**Persona link:** C-1
**What would confirm it:** Post-service survey on repeat clients; usage data on "Book again" shortcut (does it correlate with same-operator preference?).

---

## JTBD Matrix

Two tables: (1) importance by persona, (2) product function + competitive coverage.
Rating scale: **3** = critical, **2** = important, **1** = nice to have, **—** = not this persona's job, **[?]** = no data.

---

### Table 1 — Importance by Persona

| Job | C-1 | C-2 | O-1 | O-2 |
|---|---|---|---|---|
| **MJ-1** Hand job to professional | **3** — CLAUDE.md core JTBD; `ux-research/research.md` JTBD statement | **3** — same job, planned-service mode | — | — |
| **MJ-2** Steady job flow | — | — | **3** — O-1 persona; `target-audience.md` O-1 core job | **3** — O-2 has zero client base; this is their entire problem |
| **RJ-C1** Confirm person is qualified | **3** — CJM Drop-off #1 "highest single drop-off"; Whalen Emotion | **2** — planning mode = more evaluation time, but credentials still required | **2** — visible credentials → more bookings; indirect stake | **2** — platform vouching solves cold-start credibility gap |
| **RJ-C2** Close post-payment void | **3** — CJM Stage 2 post-booking "highest anxiety moment"; `benchmarks.md` M-1 | **1** — scheduled service; knows who and when; acute anxiety is lower | — | — |
| **RJ-C3** Price upfront | **3** — CJM Drop-off #2 "rage quit"; hidden fees = abandonment | **2** — important, but planning mode = more tolerance for quote-based pricing | **1** — transparent pricing reduces post-job client disputes | **1** — same |
| **RJ-C4** Proof of work | **3** — H-7; Nova Poshta 5M+ UA users trained to expect status evidence | **3** — inspection report IS the deliverable; without it there is no job | **2** — result photo upload gates payment release (O-05 link) | **2** — structured deliverable teaches new pilot what "done" looks like |
| **RJ-C5** Repeat without starting over | **3** — CJM Drop-off #4 "goes to Kabanchik if no shortcut"; H-6 | **1** — planned service; re-booking is rarer and less time-pressured | — | — |
| **RJ-O1** Quick job decision | — | — | **3** — O-01 "accept/decline in < 10 seconds"; lock-screen | **3** — first jobs critical; slow decision = missed job |
| **RJ-O2** Execute without improvising | — | — | **2** — experienced has mental model, but checklist reduces field errors | **3** — no established routine; checklist is professional scaffolding |
| **RJ-O3** Auto payment | — | — | **3** — CJM Drop-off #5; H-5 "payment friction = fastest churn trigger" | **2** — important, but O-2 has no existing income comparison baseline |
| **EJ-1** First use feels safe | **3** — Whalen Emotion "deepest mind overrides all else"; H-4 | **2** — anxiety present but planning context provides research time | **1** — more client trust → more bookings (indirect) | **1** — same |
| **EJ-2** Resolution after bad experience | **3** — CJM Stage 3 "one bad experience = permanent churn" 🔴 | **2** — professional context; unresolved issue blocks business use of deliverable | **2** — platform dispute protection = operator retention factor | **1** — less context on dispute scenarios |
| **EJ-3** Operator reputation worth building | — | — | **3** — O-06; "transparent fair rating = loyalty"; portable reputation | **3** — solves cold-start gap; rating is only path to standing out |
| **SJ-1** Client as introducer | **2** — CJM Stage 4 referral; word of mouth = #2 discovery channel | **1** — professional context; lower social sharing motivation | — | — |
| **HJ-1** Platform credential as identity | — | — | **[?]** no operator community data | **[?]** same |
| **HJ-2** Understand what services exist | **[?]** no data on education vs. instant-booking need | **[?]** same | — | — |
| **HJ-3** Choose specific operator | **[?]** conflicts with auto-dispatch; no validation data | **[?]** same | — | — |

---

### Table 2 — Product Function + Competitive Coverage

| Job | FUNCTION in DRON | COMPETITORS — do they close it? |
|---|---|---|
| **MJ-1** Hand job to professional | Auto-dispatch (delivery); Calendar-first + auto-assign (photo / inspection) | Kabanchik — covers JTBD via "search → message → negotiate → trust blind"; Glovo — delivery JTBD but not drone; Wing / Flytrex — drone but not in UA |
| **MJ-2** Steady job flow | SRM: push notifications + auto-dispatch assignment to operator | Kabanchik / OLX — operator self-sources; no UA drone platform pre-dispatches jobs |
| **RJ-C1** Confirm person is qualified | Operator card (list view, no tap): photo · rating · Verified badge · Insured badge · job count; credential-first profile header | Bolt — driver photo + rating on confirmation ✓; Kabanchik — no verification; OLX — no verification; DroneUA — credentials but B2B only, no consumer booking flow |
| **RJ-C2** Close post-payment void | Post-payment screen = operator name + photo + live map + ETA; never a generic "order received" | Bolt — ★★★★★ live map + driver reveal; Glovo — ★★★★★ live tracking; Wing — second-precise tracking (not UA); Kabanchik — nothing after booking |
| **RJ-C3** Price upfront | Price shown on service details screen before operator assignment; final price locked at payment, no line-item surprises | Glovo — transparent ✓; Kabanchik / OLX — no structured pricing; DroneUA / Wing — pricing behind contact or login |
| **RJ-C4** Proof of work | In-app result photo + notes upload (operator side); structured inspection report: cover photo + annotated findings + operator signature | DroneDeploy — best-in-class inspection reports (B2B, not consumer); Glovo — delivery photo ✓; Nova Poshta app — proactive push on delivery ✓; Kabanchik — no deliverable format |
| **RJ-C5** Repeat without starting over | "Book again" one-tap shortcut on home screen; pre-fills previous service details | Glovo — "Order again" ✓; Bolt — repeat ride shortcut ✓; Kabanchik — no repeat shortcut; no drone platform has this |
| **RJ-O1** Quick job decision | Push notification: service type + distance + estimated duration + price; Accept / Decline on lock screen | Kabanchik — notification exists but no structured brief; DroneDeploy — enterprise job management, not mobile lock-screen; no consumer drone platform has this |
| **RJ-O2** Execute without improvising | Auto-generated job checklist per service type: pre-flight → execution → delivery confirmation → result photo; large touch targets for gloves + sunlight | DroneDeploy — checklists for B2B enterprise ✓; no consumer drone job checklist exists in UA market |
| **RJ-O3** Auto payment | Auto-release to operator wallet within 30 min of client confirmation; auto-confirm after 2h silence | Bolt — immediate payment ✓; TaskRabbit — structured payment ✓; Kabanchik / OLX — manual cash or bank transfer; no UA drone platform has automated payment |
| **EJ-1** First use feels safe | 15-second in-app explainer before first booking (H-4); insurance badge on operator card; Bolt-model operator reveal at confirmation | Airbnb — AirCover guarantee ★★★★★; Bolt — driver identity + safety features ★★★★; Zipline — "60K lives saved" narrative; Kabanchik — no safety mechanisms |
| **EJ-2** Resolution after bad experience | **[?] NOT DEFINED** — no user story covers a dispute or support flow; this job has no assigned function in the current MVP definition | Airbnb — AirCover ★★★★; Glovo — no-questions refund ✓; Bolt — safety button + share trip ✓; Kabanchik — no dispute resolution |
| **EJ-3** Operator reputation worth building | Rating dashboard: overall score + breakdown by service type + last 10 review texts | Kabanchik — basic star rating, no breakdown; Bolt — rating shown to drivers; no drone platform has per-service-type breakdown |
| **SJ-1** Client as introducer | One-tap share link post-completion | Glovo — share delivery ✓; Bolt — share trip ✓; no drone platform referral mechanic in UA |
| **HJ-1** Platform credential as identity | DRON badge on operator profile | **[?]** no data on how UA pilots value platform vs. CAA/EASA credentials |
| **HJ-2** Understand what services exist | Service explainer / onboarding screens | Wing — technology page; Zipline — safety narrative; Kabanchik — no service education |
| **HJ-3** Choose specific operator | **Would conflict with auto-dispatch** — no function can be assigned without first resolving this against the core architecture | Airbnb — host selection ✓; TaskRabbit — tasker selection ✓; Bolt — intentionally minimal operator info (brand over individual) |

---

## Conclusions

### 3 Jobs for the MVP Core
*Criteria: critical (score 3) for primary persona + not closed by existing Ukrainian market.*

**1 — RJ-C1: Confirm the person coming is real and qualified**
- C-1 score: **3** (highest single drop-off in the entire CJM)
- Market gap: Kabanchik and OLX have zero verification layer for drone operators. Bolt solves this for transport but not in the drone context in Ukraine.
- What closes it: operator card with Verified badge + insurance + job count visible in the list without a tap. This is DRON's primary structural differentiator.

**2 — RJ-C2: Close the void between payment and arrival**
- C-1 score: **3** (documented as "highest anxiety moment" in CJM post-booking)
- Market gap: No Ukrainian drone service shows operator identity or live tracking after booking. Bolt and Glovo set the expectation; no drone player in UA meets it.
- What closes it: post-payment screen with operator name, photo, live map, and ETA — never a generic confirmation screen.

**3 — RJ-O3: Get paid without managing it**
- O-1 score: **3** (H-5 documents this as "the fastest trigger for direct client bypass")
- Market gap: Kabanchik and OLX rely on manual payment. No UA drone or freelance platform has automated payment release. This is the #1 operator retention mechanism and the #1 churn trigger if absent.
- What closes it: auto-release to operator wallet within 30 minutes of client confirmation.

---

### Feature Candidates for Removal
*Functions that do not close any documented job, or close only a hypothesis job.*

**1 — SRM map view of nearby requests (O-07)**
Closes RJ-O1 partially — but RJ-O1 is already fully closed by the push notification with lock-screen accept/decline. The map adds spatial awareness that is a convenience, not a job. O-1 and O-2 scored 3 on RJ-O1 based on the notification, not the map. Candidate for post-MVP.

**2 — Operator selection screen / "choose your operator" flow**
Would close HJ-3 — which is a hypothesis flagged as conflicting with the auto-dispatch model. Building operator selection also directly undermines RJ-C1: users who cannot evaluate drone operators (confirmed in `ux-research/ux-patterns.md` Reason 3) will be paralyzed by a choice list, not helped by it. No job in the confirmed list requires this screen.

---

### Gap: Critical Job with No Assigned Function

**EJ-2 — Resolution after a bad experience**
Scored **3** for C-1 (primary persona, CJM Stage 3: "one bad experience = permanent churn"). Scored **2** for C-2 and O-1.
No user story, no acceptance criteria, no screen is defined for dispute resolution or client support.
This is not a feature to remove — it is a missing feature. A support / resolution flow must be scoped before launch.
