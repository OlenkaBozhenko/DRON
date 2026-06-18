# Claim Audit — target-audience.md + jtbd.md

**Method:** Every claim classified by evidence level. Design-critical unconfirmed claims flagged separately.
**Date:** June 2026. No user interviews exist. Zero empirical data from DRON's actual users or operators.

Evidence levels used:
- ✓ **Confirmed** — backed by a published external source cited in the research
- ~ **Analog** — confirmed for another product; mapped to DRON by similarity without verification
- F **Framework** — derived from applying Whalen's model to our own designed CJM (structured prediction, not empirical)
- ? **Hypothesis** — reasonable inference, explicitly or implicitly unverified
- ✗ **Fabricated** — no basis; invented in a user story, persona description, or framing

---

## Part 1 — Claim-by-Claim Table

### PERSONA C-1

| # | Claim | Status | Basis / Note |
|---|---|---|---|
| 1 | Urban Ukraine | ✓ | CLAUDE.md geography |
| 2 | Age 18–50 | ✓ | CLAUDE.md |
| 3 | Discovers via TikTok / word of mouth / Google search | F | CJM Stage 1 Attraction — these are designed touchpoints in our CJM, not observed behavior |
| 4 | Never operated a drone, never will | ✓ | CLAUDE.md: "users have never operated a drone and never will" |
| 5 | Has a Bolt/Glovo mental model | ~ | benchmarks.md: users have been "trained by Bolt and Glovo." Applying that training to drone services is an inference, not confirmed |
| 6 | Expects booking confirmed in < 60 seconds | ~ | Derived from #5. If the mental model transfer doesn't hold, this threshold has no basis |
| 7 | Leaves if experience diverges in first 60 seconds | ? | Derived from #6; chains from an unconfirmed premise |
| 8 | Current flow: Kabanchik/OLX → message → ghosted → negotiate → trust blind | ~ | Kabanchik as current behavior: ✓ (research.md). "Ghosted" mechanic: Rover/Kinship.com analog mapped to UA drone operators without verification (Gap G-1) |
| 9 | Operators don't reply or reply days later | ~ | Source is Rover: "sitters frequently ignore messages without consequence" — Kinship.com. Applied to Ukrainian drone operators by analogy only |
| 10 | No pricing before DM on OLX/Kabanchik | ✓ | Platform structure fact: neither platform mandates price disclosure |
| 11 | No credential verification on Kabanchik/OLX | ✓ | Platform structure fact: neither platform verifies drone operator licenses |
| 12 | No live tracking in Kabanchik flow | ✓ | Platform structure fact: classifieds have no tracking layer |
| 13 | Post-payment void = highest anxiety moment | ~ | Bolt M-1 benchmark. Confirmed for ride-hailing; mapped to drone service booking |
| 14 | Photo + rating on card (without tapping) triggers trust | ~ | Airbnb Raw Studio study (+25% booking lift). Confirmed for accommodation marketplace; mapped to drone service |
| 15 | "Verified by DRON" + "Insured" badge triggers trust | ? | No user data for drone context. Derived from Zocdoc credential-first model (medical, B2C) and CLAUDE.md brand direction |
| 16 | "Insured up to 500 000 UAH" — this specific amount | ✗ | Invented. Appears in C-03 acceptance criteria with no research basis. No data on what insurance amount is meaningful to a UA drone client |
| 17 | Registration form = 60–70% drop-off | ~ | General mobile UX benchmark; not drone-specific; not a UA-specific source |
| 18 | Drone jargon creates distance | F | CJM Stage 1 Whalen Language friction — our design framework applied to the flow |
| 19 | Push notification "2 min away" triggers trust | ~ | Bolt UX pattern; mapped to drone context |
| 20 | Mood quote "I messaged three operators..." | ✗ | Explicitly a fabricated paraphrase of the Rover/Kinship.com quote. No verbatim source |

---

### PERSONA C-2

| # | Claim | Status | Basis / Note |
|---|---|---|---|
| 21 | Likely realtor, property owner, event organizer, or small business | ? | Explicitly marked [?]. Extrapolated from service types in CLAUDE.md |
| 22 | C-2 has tried Instagram aerial studios | ? | Studios listed as a competitor group in research.md — not yet analyzed. The Instagram booking friction is inferred from general knowledge of how Instagram works |
| 23 | Instagram studios = "DM for pricing," no self-serve | ? | Platform inference; not researched |
| 24 | No standard report format in B2C drone services | ? | Comparison with DroneUA (B2B); not confirmed for B2C market |
| 25 | Scheduling requires weather window, daylight, client presence | ✓ | ux-research/ux-patterns.md Calendar-First pattern explicitly documents this |
| 26 | C-2 would exit if shown auto-dispatch instead of calendar | ? | Logical inference from service type; no user data |
| 27 | "Report delivered as random file via chat" is an exit trigger | ? | Hypothesis; no source |
| 28 | Mood quote "Is this actually available where I live?" | F | CJM Stage 1 Language friction — synthesized from Whalen analysis, not a verbatim user quote |

---

### PERSONA O-1

| # | Claim | Status | Basis / Note |
|---|---|---|---|
| 29 | Flying commercially for 1–2+ years | ✗ | Invented. No data on experience range of UA drone operators seeking work |
| 30 | Currently on Kabanchik, OLX, word of mouth | ✓ | research.md: Kabanchik = "closest current behavior: this is where Ukrainians actually go to hire a drone operator today" |
| 31 | Spends significant time on non-flying activities | ? | Inferred from pain list structure; no time-use data |
| 32 | "Has likely encountered a platform that promised volume and delivered nothing" | ✗ | Invented narrative detail; no basis |
| 33 | Skeptical of new platforms — "another platform takes 30%?" | ✓ | CJM Operator Stage 1 documents this as the primary first-contact emotional state |
| 34 | Client acquisition = as much time as the work itself | ? | Explicitly marked [?]; no time data |
| 35 | Payment is informal — depends on goodwill | ~ | Platform structure (OLX/Kabanchik have no payment layer = ✓); that this is specifically painful for drone operators is an analog from general freelance market |
| 36 | Each client explains what they want differently | F | CJM O-03 acceptance criteria — documented as a design problem we built the checklist to solve |
| 37 | Solo liability risk if something goes wrong | ? | Inferred from CLAUDE.md insurance mention; no operator interview data |
| 38 | No portable reputation | ? | Platform lock-in is a real platform mechanic (✓); that operators specifically want portability is unconfirmed |
| 39 | Commission rate must be visible before signup | ✓ | CJM Stage 1 skepticism: "another platform takes 30%?" — documented as first-contact trigger |
| 40 | Verification ETA is a critical trust signal | ✓ | CJM Drop-off #3: "document upload → silence → operator goes silent" |
| 41 | Auto-payment within 30 min = loyalty trigger | ? | H-5 in ux-research/research.md — explicitly labeled as hypothesis. The 30-minute threshold is invented. |
| 42 | Payment delay > 24h = fastest churn trigger | ? | H-5 hypothesis. The 24-hour threshold is invented; no operator data confirms this specific sensitivity |
| 43 | Platform insurance + dispute handling = retention | ? | Derived from CLAUDE.md insurance as trust signal; not confirmed in operator interviews |
| 44 | Mood quote "Another platform that takes 30%?" | ✓ | CJM Stage 1 — documented as the emotional state (synthesized, not verbatim, but documented) |

---

### PERSONA O-2

| # | Claim | Status | Basis / Note |
|---|---|---|---|
| 45 | O-2 profile as a whole | ? | Explicitly marked [?] throughout. Entire persona is a hypothesis |
| 46 | Cold-start on Kabanchik: zero reviews → invisible | ~ | Review-driven ranking is a real Kabanchik mechanic (✓); applied to drone operator new entrants by analogy |
| 47 | No guidance on pricing for new operators | ✗ | Explicitly has no source. Acknowledged in the file |
| 48 | Liability risk without insurance for new operators | ? | Hypothesis; no data on insurance arrangements of newly certified UA pilots |
| 49 | Mood quote "How long will the review take?" | F | CJM Stage 2 Whalen Memory + Emotion friction — synthesized, not verbatim |

---

### JTBD — Main and Related Jobs

| # | Claim | Status | Basis / Note |
|---|---|---|---|
| 50 | MJ-1: "result only a drone can deliver" = core JTBD | ✓ | CLAUDE.md + ux-research/research.md JTBD statement |
| 51 | MJ-2: operator churn = payment friction + no platform value beyond matching | ? | H-5 in ux-research/research.md — labeled hypothesis |
| 52 | RJ-C1: operator selection = single highest drop-off point | F | CJM Drop-off #1 — Whalen Emotion framework applied to our designed CJM. Not empirical drop-off measurement |
| 53 | RJ-C2: live tracking = baseline expectation, not feature | ~ | P-1 in ux-research/research.md — every delivery product has it. That UA drone clients EXPECT it is an inference from prevalence |
| 54 | RJ-C3: hidden cost = rage-quit trigger | F | CJM Drop-off #2 — Whalen Emotion + Decision framework prediction |
| 55 | RJ-C4: Nova Poshta trained 5M+ users to expect proactive status | ✓ | Devlight Nova Poshta case study — cited in ux-research/research.md H-7 |
| 56 | RJ-C4: H-7 — requiring result photo improves first-use satisfaction | ? | Explicitly labeled H-7 in ux-research/research.md |
| 57 | RJ-C5: no "Book again" → goes to Kabanchik | ? | CJM Drop-off #4 documents the risk; "goes to Kabanchik" is a specific behavioral prediction with no data |
| 58 | RJ-O1: acceptance in < 10 seconds | F | O-01 acceptance criteria — our own design specification, not derived from operator research |
| 59 | RJ-O2: app used with gloves in sunlight (field condition) | F | O-03 acceptance criteria — our own design specification |
| 60 | RJ-O3: auto-release within 30 min | ? | H-5 hypothesis. Threshold invented |
| 61 | RJ-O3: auto-confirm after 2h silence | ✗ | Invented. No basis given for 2-hour window |
| 62 | EJ-1: 15-second explainer reduces activation drop-off | ? | H-4 in ux-research/research.md — explicitly labeled hypothesis |
| 63 | EJ-1: Emotion mind overrides all other cognitive processes | ✓ | Whalen, *Design for How People Think*, O'Reilly 2019 |
| 64 | EJ-2: one bad experience = permanent churn | F | CJM Stage 3 Whalen Emotion framework prediction; not empirical churn data |
| 65 | SJ-1: word of mouth = #2 discovery channel | F | CJM Stage 1 documents it as a touchpoint; ranking it "#2" is our framing, not an empirical finding |

---

## Part 2 — Most Dangerous Claims

*Criteria: claim affects a concrete design decision AND rests on analog, hypothesis, or fabricated data.*
*Ordered by blast radius — how wrong can the product be if this claim is incorrect.*

---

### DANGER-1 — "Clients apply their Bolt/Glovo mental model to drone services"
**Claim:** C-1 expects booking confirmed in < 60 seconds; if the experience is slower, they leave.
**Status:** ~ Analog
**Design impact:** This is the single most load-bearing claim in the document. It justifies:
- Auto-dispatch as the primary booking pattern (not marketplace browse)
- The 2-tap flow as the success benchmark
- The entire framing of Kabanchik as "too slow" = product-market fit argument

**Why dangerous:** Ordering a taxi and ordering a drone operator are cognitively different categories. Someone searching for "drone aerial photography" may expect a contractor-like experience (brief, quote, schedule) — not a Glovo-style instant dispatch. If that's the case, auto-dispatch will feel premature and untrustworthy. The market evidence (Bolt, Glovo) is from entirely different service categories with entirely different stakes.

---

### DANGER-2 — "Operator selection screen is the #1 drop-off point"
**Claim:** RJ-C1 and CJM Drop-off #1 — highest single drop-off if trust signals missing.
**Status:** F Framework (Whalen Emotion applied to our designed CJM)
**Design impact:** Drives the entire trust signal architecture:
- Which signals appear on the operator card
- That signals must be visible without tapping
- Airbnb +25% pattern applied to drone operator cards

**Why dangerous:** This is a design framework prediction, not a measurement. The actual #1 drop-off for a drone service could be registration (Diia complexity), pricing opacity, or simply not understanding what the service does. Investing heavily in operator card trust signals while the real blocker is elsewhere would miss the actual conversion problem.

---

### DANGER-3 — "Ghosting mechanic from Rover applies to Ukrainian drone operators on Kabanchik"
**Claim:** Clients message operators, get ignored — that's the pain DRON solves with instant booking.
**Status:** ~ Analog (Rover/Kinship.com)
**Design impact:** The entire C-1 problem statement. "Search → message → ghosted → trust blind" is the current-state narrative that positions DRON's instant booking as the solution.

**Why dangerous:** Rover is a US gig economy platform for pet care. Ukrainian drone operators are licensed professionals providing a B2C commercial service. They may be highly responsive (it's their livelihood) or operate primarily through word-of-mouth with no Kabanchik presence at all. If the pain isn't ghosting but something else (price opacity, no verification, no tracking), the product solves the wrong problem with the wrong mechanism.

---

### DANGER-4 — "Payment delay > 24 hours is the primary operator churn trigger"
**Claim:** H-5 — auto-payment within 30 min is the mechanism that prevents operators from building direct client relationships.
**Status:** ? Hypothesis (labeled H-5)
**Design impact:** Justifies 30-minute auto-payment as a complex infrastructure requirement in MVP. This is technically expensive and involves financial/legal flows (wallet, disbursement, dispute hold).

**Why dangerous:** Operator churn could primarily be driven by commission rate, job quality, or clients wanting to book directly for a discount — none of which auto-payment solves. Building the payment infrastructure for the wrong reason delays everything else.

---

### DANGER-5 — "C-2 (planner) will exit if shown auto-dispatch"
**Claim:** Auto-dispatch is a trust exit for photo/inspection clients; they need calendar-first.
**Status:** ? Hypothesis
**Design impact:** Justifies building TWO separate booking flows in MVP — auto-dispatch for delivery, calendar-first for photo/inspection. This is significant scope increase.

**Why dangerous:** If photo/inspection clients are actually fine with "earliest available certified operator" (they pick a day, system picks the operator), the dual-flow architecture is unnecessary. No user has been asked whether they want to pick a time slot vs. get an auto-assigned slot.

---

### DANGER-6 — "500,000 UAH insurance amount is meaningful to clients"
**Claim:** C-03 acceptance criteria: "Insured up to 500 000 UAH" visible on operator card.
**Status:** ✗ Fabricated
**Design impact:** Specific copy on operator cards and trust badges throughout the product.

**Why dangerous:** If 500k UAH is too low (doesn't cover a drone crashing into a car or roof), it signals the platform is under-insured. If it's meaninglessly large for the service context, clients will ignore it. The number is the message — and the number has no basis.

---

## Part 3 — 3 Targeted Questions

*Each question closes the most dangerous gap. Source suggestions are specific and actionable.*

---

### Q1 — How do Ukrainians currently hire a drone operator, and what actually stops them?
**Closes:** DANGER-1 (mental model claim), DANGER-3 (ghosting claim), C-1 pain section.
**What we need to know:** Is the current flow actually "message → ghosted → trust blind"? Or do operators respond quickly and the real friction is something else (price, unclear scope, no insurance)?

**Where to look:**

| Source | What to do | What to look for |
|---|---|---|
| **Kabanchik.ua** — drone operator listings | Open the top 10 listings, read ALL client reviews (they are public) | Do reviews mention slow response? Non-response? Or do they mention different problems (quality, price, no-show)? |
| **OLX.ua** → "аерозйомка" / "дрон фото" / "дрон доставка" | Read ad descriptions + any Q&A threads under listings | What do clients ask about in comments? Price? License? Insurance? How to verify? |
| **Google Reviews** → "аерофотозйомка Київ", "аерозйомка нерухомості" | Read reviews of Kyiv aerial photography studios | What do clients praise? What do they complain about? Is "didn't respond" or "hard to book" in the reviews? |
| **Instagram** → search "аерозйомка Київ" or "drone filming Ukraine" | Look at comments under recent posts | Do people ask "how to book", "what's the price", "are you licensed"? |

**Expected result:** A real picture of what the booking pain is today — possibly different from what we assumed.

---

### Q2 — Does ordering a drone feel like ordering a taxi, or like hiring a contractor?
**Closes:** DANGER-1 (60-second mental model), and by extension the auto-dispatch vs. marketplace architecture decision.
**What we need to know:** When someone books a drone service for the first time, do they expect instant assignment (Bolt model) or a brief back-and-forth before confirmation (TaskRabbit model)?

**Where to look:**

| Source | What to do | What to look for |
|---|---|---|
| **Wing app** — App Store (AU/US) or Google Play reviews | Filter for 1★ and 3★ reviews; read first-time user comments | Do users complain that booking was too slow? Too impersonal? Did they expect to choose their operator? |
| **Flytrex** — App Store reviews (US market) | Read reviews of first-time orders | Same questions as Wing |
| **Kabanchik.ua** — drone listing client reviews | Among reviews that exist: how long did the overall process take? Do clients mention the booking process as fast/slow? | Look for any timeline mentions ("responded in 10 min", "took 2 days to agree") |
| **Reddit** → r/drones, r/uavs | Search "hiring drone operator" or "drone service booking" | How do non-operators describe the booking process they went through? What was their expectation? |

**Expected result:** Evidence for whether the Bolt mental model holds, or whether drone booking is perceived as a different category entirely.

---

### Q3 — What makes Ukrainian drone operators prefer direct clients over a platform — and is payment speed actually the trigger?
**Closes:** DANGER-4 (payment churn hypothesis), DANGER-2 (operator retention assumptions), the operator churn model in the matrix.
**What we need to know:** Is the reason operators go direct: payment timing, commission rate, relationship preference, job quality, or something else?

**Where to look:**

| Source | What to do | What to look for |
|---|---|---|
| **Telegram** — search "дрон оператор", "пілот дрону", "БПЛА оператор Україна" | Join active UA drone operator channels; read threads about work/clients | Do operators complain about platforms? What specifically? Commission, payment delays, job quality, client behavior? |
| **Kabanchik.ua** — operator listing descriptions | Read how operators write their own listings; do they embed a personal contact (Telegram/WhatsApp) for "direct" booking? | A personal contact inside a Kabanchik listing = operator actively bypassing the platform; how common is this? |
| **Facebook** — "Дрони Україна", "БПЛА оператори" groups | Search group posts for "замовлення", "клієнти", "оплата", "відсоток" | Operator-to-operator discussion of platforms, payment experiences, client quality |
| **DroneUA** on LinkedIn | Read employee reviews on LinkedIn (if any); look at job postings for operator roles | What benefits do they advertise? Insurance? Steady income? Payment structure? This reveals what operators care about enough to be a recruitment pitch |

**Expected result:** A direct answer to whether "auto-payment in 30 min" is the right retention mechanism, or whether we're solving the wrong operator problem.
