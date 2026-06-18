# Target Audience — Personas

**Status:** Built on competitive analysis, benchmark study, and CJM only.
No real user interviews conducted. Where data is absent: `[?]` — marked as hypothesis, not fact.

Sources referenced:
- `research/research.md` — competitive analysis (Kabanchik, OLX, Nova Poshta, Glovo, Wing, Zipline)
- `ux-research/benchmarks.md` — trust benchmarks (Bolt, Airbnb, Zocdoc, TaskRabbit, Rover)
- `ux-research/ux-patterns.md` — dispatch pattern analysis
- `ux-research/user-stories-cjm.md` — CJM with Whalen drop-off mapping
- `ux-research/research.md` — synthesis, hypotheses, gaps
- `CLAUDE.md` — product brief

---

## Primary vs. Secondary — Selection Logic

| Persona | Role | Why primary / secondary |
|---|---|---|
| **C-1** | Urgent client (delivery / same-day) | **PRIMARY** — represents the core JTBD; auto-dispatch is designed for this mental model; all 5 CJM drop-off points are most lethal for this person's first session |
| **C-2** | Planning client (aerial photo / inspection) | **SECONDARY** — same platform, different flow mode; lower urgency gives more time to build trust; serves a distinct but narrower use case |
| **O-1** | Experienced freelance drone pilot | **PRIMARY** — without this person there is no supply; carries the highest churn risk (direct client bypass); defines what the SRM must do |
| **O-2** | Newly certified pilot, no client base | **SECONDARY** — less churn risk, less market-defining; important for supply scaling but there is no research data specific to their experience |

---

## PERSONA C-1 — PRIMARY CLIENT
### "I want it done. I don't want to think about it."

**Context**
Urban Ukraine. Heard about drone delivery or aerial service from a friend, TikTok, or a quick Google search ("замовити дрон"). First or second time ever considering using a drone service. They don't understand how drones work and don't intend to learn. Has a Bolt/Glovo mental model: open app → tap → thing happens. If the experience diverges from that model in the first 60 seconds, they leave.

Current discovery path (before DRON): search Kabanchik or OLX → find a listing → message the operator → wait → maybe get ghosted → negotiate → agree on terms → trust blindly.

Source: `research/research.md` — Kabanchik listed as "closest current behavior: this is where Ukrainians actually go to hire a drone operator today"; Gap G-1 — "search → message → negotiate → trust blind."

---

**Jobs (what they're trying to do)**

| Job | Type |
|---|---|
| Get a parcel, document, or item delivered to a hard-to-reach location | Functional |
| Not touch or think about the drone at all | Functional |
| Know a qualified professional is handling it — not a random person from the internet | Emotional |
| Confirm something happened and have proof it happened | Emotional |

---

**Pains with today's solutions**

| Pain | Where it comes from | Source |
|---|---|---|
| `[?]` Messages operators and gets no reply or slow reply — **hypothesis, not confirmed for drone operators** | Rover/Kinship.com ghosting is documented for pet care gig workers. Post-persona research (June 2026) found zero drone-specific ghosting reviews on Kabanchik; drone operators have 87+ reviews and appear professionally responsive. Ghosting may not be the real pain here. | `ux-research/benchmarks.md` — Rover analog; `research/research.md` — Finding 2 |
| Pricing opacity before booking — **confirmed for studios, partially confirmed for Kabanchik** | Professional studios (Instagram, ABD Video): no pricing listed, must DM or call. Kabanchik: pricing range IS visible (500–1,500 UAH/session) — but individual quotes may vary. Pain is real for studio bookings; less severe for Kabanchik. | `research/research.md` — Finding 1; abd-video.com fetch |
| No drone license or insurance visible on operator cards | Kabanchik shows passport verification, review count, and experience years — but NOT drone certification (CAA/DASU) or liability insurance. Professional studios show no credentials either. | `research/research.md` — Finding 1; kabanchik.ua direct fetch |
| No live tracking during job execution | Current Kabanchik/OLX flow has no tracking layer | Inferred from `ux-research/research.md` — P-1: "live tracking is the baseline, not a feature" |
| After payment, no visibility into who is coming or when | Post-booking vacuum documented as highest-anxiety moment in on-demand services | `ux-research/benchmarks.md` — Bolt M-1; `ux-research/user-stories-cjm.md` — Stage 2, post-booking |

---

**Trust triggers**

| Triggers trust | Triggers exit |
|---|---|
| Operator photo + star rating visible on list card without tapping | Operator card with no photo or "0 reviews" |
| "Verified by DRON" + insurance badge visible before payment — **Note: specific UAH amount removed; "500,000 UAH" was fabricated. Real UA commercial insurance amounts require legal verification.** | Any "plus fees" or line-item surprise on payment screen |
| Price shown on service details screen — locked, no surprises | Generic "order received" screen after payment (no operator name) |
| Operator identity on confirmation screen: name, photo, ETA, live map | Registration form — manual input is a hard stop |
| Push notification "Operator is 2 min away" | Drone jargon (UAV, payload, LiPo) — creates distance |
| **[NEW — post-persona research]** Explanation of what the drone does / won't do (noise, safety, privacy) — drone technology anxiety precedes operator anxiety in first-time users | No explanation of the drone itself before or during the first order |

Sources: `ux-research/benchmarks.md` — M-1 (Bolt), M-2 (Airbnb +25%), M-3 (Zocdoc); `ux-research/user-stories-cjm.md` — C-03, C-08, Drop-off #1, #2; `research/research.md` — Finding 3 (drone anxiety research 2024–2025).

---

**Mood quote**

> *"I messaged three operators on Kabanchik. Two never replied. One replied four days later."*

**⚠ UPDATED after post-persona research (June 2026):** This quote is a paraphrase of the Rover/Kinship.com platform failure, applied to drone operators by analogy. Direct research of Kabanchik drone operator listings found no evidence of ghosting — drone operators have 87+ reviews in Kyiv alone and appear professionally responsive. The ghosting narrative does NOT appear in drone-specific reviews. **This quote should not be used as a design input until confirmed by actual client interviews or mystery-shopping.** See `research/research.md` — Finding 2.

---

## PERSONA C-2 — SECONDARY CLIENT
### "I need professional aerial documentation. I'm planning, not rushing."

**Context**
`[?]` Exact profile unconfirmed — hypothesis based on service type logic.
Likely a realtor, property owner, event organizer, or small business owner. Needs aerial photography for a listing, a roof inspection report, or footage from a wedding/event. Scheduling matters: weather window, daylight, client presence. They've tried finding local aerial studios on Instagram — the booking process was opaque ("DM for pricing", no formal report format, hard to verify quality upfront).

Source: `research/research.md` — "Aerial photo/video studios (local Kyiv agencies on Instagram)" listed as incumbents in the photo/video vertical; "Booking flow, portfolio presentation, how they build trust without an app" — not yet analyzed. `[?]` This profile is an extrapolation from service types defined in `CLAUDE.md`.

---

**Jobs (what they're trying to do)**

| Job | Type |
|---|---|
| Schedule aerial work for a specific date, time, and weather window | Functional |
| Receive a structured deliverable (annotated photo set, inspection report) they can use professionally | Functional |
| Show clients / insurers / buyers documented proof from a qualified operator | Emotional |
| Not spend hours DMing Instagram accounts to get a quote | Functional |

---

**Pains with today's solutions**

| Pain | Where it comes from | Source |
|---|---|---|
| Professional studios require DM or call for pricing — no self-serve discovery | ABD Video (Kyiv professional aerial studio) confirmed: *"Cost depends on team size, expertise level, and hours"* — no price listed, consultation required | `research/research.md` — Finding 5; abd-video.com fetch |
| Result format is undefined upfront — no standard for what "aerial inspection" delivers | B2B players like DroneUA have structured reports; B2C does not | `research/research.md` — DroneUA: "service catalog structure" (not yet analyzed); `ux-research/research.md` — Gap G-2 |
| No formal verification of operator license or insurance visible on studio pages | ABD Video mentions equipment insurance and flight coordination with authorities — but no pilot certification or client liability insurance listed | `research/research.md` — Finding 5 |
| `[?]` Whether they compare DRON to hiring a local studio directly — price/quality tradeoff unknown | Kabanchik range: 500–1,500 UAH/hr. Studios: quote-only. No direct comparison data. | `ux-research/research.md` — Gap G-4; `research/research.md` — Finding 1 |

---

**Trust triggers**

| Triggers trust | Triggers exit |
|---|---|
| Ability to pick a specific date/time slot (Calendar-First flow) | Auto-dispatch for a planned service ("I don't want whoever is available right now") |
| Portfolio examples visible on operator profile | No example of what the final report looks like |
| License and insurance on profile header — before bio | "Message us for details" — any friction before pricing |
| Structured in-app result delivery (photos + notes + operator signature) | Report delivered as a random file via chat |

Sources: `ux-research/ux-patterns.md` — Calendar-First pattern; `ux-research/user-stories-cjm.md` — C-06; `ux-research/benchmarks.md` — M-3 (Zocdoc).

---

**Mood quote**

> *"Is this actually available where I live?"*

Source: `ux-research/user-stories-cjm.md` — Stage 1 Attraction, Social media ad touchpoint — documented as the first language friction point when a potential client discovers a drone service. `[?]` Not a verbatim user quote — synthesized from CJM Whalen Language friction analysis.

---

## PERSONA O-1 — PRIMARY OPERATOR
### "I want jobs, not a second job finding jobs."

**Context**
Has been flying commercially for 1–2+ years. Licensed, insured, has equipment. Currently finds clients through Kabanchik.ua listings, OLX, word of mouth, or direct repeat clients. Spends a significant part of their working time on activities that aren't flying: messaging prospects, negotiating scope, chasing payments, handling admin. Has likely encountered at least one platform that promised volume and delivered nothing or took a large cut without providing protection. Skeptical of new platforms.

Source: `research/research.md` — Kabanchik listed as "Closest current behavior: this is where Ukrainians actually go to hire a drone operator today"; `ux-research/user-stories-cjm.md` — Operator Stage 1: "Facebook/Telegram drone communities — 'another platform that takes 30%?'"

---

**Jobs (what they're trying to do)**

| Job | Type |
|---|---|
| Receive a steady flow of pre-qualified jobs without hunting for clients | Functional |
| Accept or decline a job in under 10 seconds from a push notification | Functional |
| Get paid automatically after job close — no invoicing, no chasing | Functional |
| Build a verifiable reputation (rating + reviews) they can take with them | Emotional |
| Work under platform insurance/legal protection rather than solo liability | Functional |

---

**Pains with today's solutions**

| Pain | Where it comes from | Source |
|---|---|---|
| Client acquisition takes as much time as the work itself | Kabanchik/OLX listing maintenance, DM negotiations, prospect drop-offs | `research/research.md` — Kabanchik group; Gap G-1 (current flow unanalyzed → `[?]` exact time cost) |
| Payment is informal — depends on client goodwill, sometimes delayed or disputed | No structured payment layer on Kabanchik/OLX; cash or bank transfer | `ux-research/user-stories-cjm.md` — O-05, Drop-off #5; `ux-research/research.md` — H-5 |
| Each client explains what they want differently — no standard job format | No structured service definition on classifieds | `ux-research/user-stories-cjm.md` — O-03 |
| Solo liability if something goes wrong (property damage, airspace incident) — **wartime context: individual drone insurance suspended** | During martial law in Ukraine, individual drone insurance is not available; only commercial entities receive coverage. Operators working through a company (DRON) have different risk profile than solo freelancers. | `research/research.md` — Finding 4; isure.in.ua fetch |
| No portable reputation — reviews stay locked in each platform's silo | Kabanchik/OLX ratings don't transfer | `ux-research/user-stories-cjm.md` — O-06 |

---

**Trust triggers**

| Triggers trust | Triggers exit |
|---|---|
| Commission rate stated clearly on the landing page — before signup | "Contact us for pricing" on the operator sign-up page |
| Verification ETA shown immediately after document upload ("Review takes 2–3 business days") | Document upload → silence → no status update |
| Automatic payment to wallet within 30 min of client confirmation | Payment delay > 24 hours |
| Transparent, breakable-down rating (per service type + review text) | Rating shown but no way to understand what drove a low score |
| Platform provides insurance cover and handles client disputes | Platform takes cut but operator is still alone with problems |

Sources: `ux-research/user-stories-cjm.md` — Drop-off #3, #5; O-01, O-05, O-06; `ux-research/research.md` — H-5.

---

**Mood quote**

> *"Another platform that takes 30%?"*

Source: `ux-research/user-stories-cjm.md` — Operator Stage 1 Attraction, Facebook/Telegram community touchpoint — documented as the primary first-contact emotional state. `[?]` Synthesized from CJM analysis, not a verbatim quote. Hypothesis: actual commission skepticism confirmed once OLX/Kabanchik operator community research is conducted (Gap G-1).

---

## PERSONA O-2 — SECONDARY OPERATOR
### "I have a license and a drone. I need someone to give me the first job."

**Context**
`[?]` Profile is a hypothesis — no research data specific to newly certified operators.
Recently passed the drone operator certification exam. Has equipment. Has never done a paid commercial job or has done only 1–2 through personal connections. The cold-start problem: zero reviews make it hard to win jobs on Kabanchik/OLX where experienced operators with ratings dominate listings. Motivated but uncertain about professional standards (what does a "good inspection" look like? what do clients actually expect?).

Source: `ux-research/user-stories-cjm.md` — Operator Stage 2: "Document upload: effort + uncertainty — 'How long will review take?'" This persona type is inferred from the verification flow friction; no direct research confirms their existence or market size. `[?]`

---

**Jobs (what they're trying to do)**

| Job | Type |
|---|---|
| Land the first paying commercial jobs to build a portfolio and rating | Functional |
| Understand professional job standards (checklists, client communication, report format) | Functional |
| Get platform-provided insurance cover while building independent coverage | Functional |
| Establish a reputation that works for them as they grow | Emotional |

---

**Pains with today's solutions**

| Pain | Where it comes from | Source |
|---|---|---|
| Cold-start on Kabanchik/OLX: zero reviews → invisible in listing rankings | Platforms favor operators with existing reviews; new entries can't compete | `research/research.md` — Kabanchik group; `[?]` not directly analyzed |
| No guidance on how to price services or what to include | No standards on classifieds | `[?]` Hypothesis — no source |
| Client expectations are unclear before arrival — each job is a guess | No structured job brief in current tools | `ux-research/user-stories-cjm.md` — O-03 |
| Liability risk without established insurance arrangements | Newly certified operators may not have full commercial insurance yet | `[?]` Hypothesis |

---

**Trust triggers**

| Triggers trust | Triggers exit |
|---|---|
| Platform assigns jobs — no need to compete with zero reviews on day 1 | Lengthy unguided verification process — submitted documents, no status |
| Structured job checklists remove field uncertainty | Vague operator onboarding ("set up your profile" with no template) |
| Platform insurance cover active from first job | No explanation of how rating is built or what affects it |
| Clear earning projection before joining | Commission not stated until after onboarding is complete |

Sources: `ux-research/user-stories-cjm.md` — Operator Stage 2 (document upload drop-off, first job excitement); O-01, O-03; `ux-research/research.md` — H-5.

---

**Mood quote**

> *"How long will the review take?"*

Source: `ux-research/user-stories-cjm.md` — Operator Stage 2 Activation — documented as the friction question at document upload. `[?]` Not a verbatim user quote — synthesized from Whalen Memory + Emotion friction at verification step.

---

## What We Do NOT Know (honest gaps)

| # | Unknown | Why it matters | Status |
|---|---|---|---|
| N-1 | **Partially answered (June 2026):** Kabanchik is confirmed active for UA drone/aerial services (87+ reviews in Kyiv, pricing 500–1,500 UAH/hr visible). Operator cards show passport verification, experience, rating — but NOT license or insurance. Ghosting pattern not confirmed for drone operators. Still unknown: OLX flow, booking friction at DM stage, what clients actually ask before hiring. | Partially closed — see `research/research.md` Finding 1, 2 |
| N-2 | **Partially answered (June 2026):** Kabanchik aerial photography: 500–1,500 UAH/session, ~1,290 UAH/hr average. Studios: pricing undisclosed (quote-on-request). Still unknown: inspection and delivery price expectations, what clients consider fair vs. expensive. | Partially closed — see `research/research.md` Finding 1, 5 |
| N-3 | Diia / BankID registration conversion rate on mobile | If low, a fallback flow is required for activation | Gap G-5 — no public data |
| N-4 | How Wing and Zipline handle first-time user anxiety about a drone arriving | Critical for DRON onboarding design | Gap G-3 — behind app login |
| N-5 | What a B2C operator SRM dashboard looks like in practice | DroneDeploy is enterprise B2B; no consumer-job-management UI reference exists | Gap G-2 — no reference found |
| N-6 | How many newly certified pilots exist in UA market and how they seek work | Defines whether O-2 is a real segment or marginal | No data |
| N-7 | Demographic breakdown within 18–50 | An 18-year-old and a 49-year-old need different products | No data |
| N-8 | Real triggers for a first order (what makes someone try for the first time) — **new nuance (June 2026):** primary barrier is drone technology anxiety (privacy, noise, safety), not operator distrust. 87% positive after first use. The design problem may be normalizing the technology, not verifying the human. | `research/research.md` — Finding 3; drone acceptance research 2024–2025 |
| N-9 | What the client considers an acceptable wait time per service type | ETA display expectations are inferred from Glovo/Bolt, not confirmed for drone context | No data |
| N-10 | Whether the C-2 persona (photo/inspection) is B2C, micro-business, or both | Affects pricing model, invoice format, and tax handling | No data |
