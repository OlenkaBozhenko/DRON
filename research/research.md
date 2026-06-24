# Research

## Status
- [x] Competitive analysis
- [x] Competitor comparison table
- [ ] User interviews
- [ ] Domain research

---

## Competitive Analysis

**Framework:** three competitor groups — Hard, Soft, Aspirational.
**JTBD (core):** "I need a result that only a drone can deliver — I don't want to operate anything myself, I want to trust a professional."

---

### Group 1 — HARD
> Same product, same audience, same market (Ukraine)

| Name | Type | Why in this group | What to study |
|---|---|---|---|
| [Kabanchik.ua](https://kabanchik.ua) — drone operators | Freelance marketplace with drone operator listings | Closest current behavior: this is where Ukrainians actually go to hire a drone operator today | How operators describe services, what trust signals they use, pain points in the current flow |
| [Nova Poshta](https://novaposhta.ua) | Logistics giant piloting drone delivery in UA | Direct competitor in the delivery vertical; established brand trust already | How they communicate drone delivery to users, UX of the pilot, what they hide vs highlight |
| [DroneUA](https://droneua.com) | Drone services company (agriculture, aerial, inspection) | Established Ukrainian drone services company, B2B-leaning but moving toward B2C | Service catalog structure, pricing model, operator credentialing |
| OLX — drone services | Classifieds (individual operators) | Reveals raw demand: how users phrase their needs, what questions they ask, price expectations | Listing language, user reviews, red flags users mention |
| Aerial photo/video studios (local Kyiv agencies on Instagram) | Niche studios offering aerial filming | Incumbents in the photo/video vertical; users already hire them | Booking flow, portfolio presentation, how they build trust without an app |

---

### Group 2 — SOFT
> Different product, same JTBD: "I want the result — someone else does the work"

| Name | Type | Why in this group | What to study |
|---|---|---|---|
| [Kabanchik.ua](https://kabanchik.ua) | On-demand task services (handyman, courier, etc.) | Core JTBD match: hire a professional, trust them with your problem, pay for outcome | Trust system (verification, reviews, insurance), service categorization, mobile booking flow |
| [Glovo](https://glovoapp.com) | On-demand delivery | Same delivery JTBD; strongest real-time tracking UX in UA market | Order flow, live tracking screen, status communication, empty states |
| [Bolt](https://bolt.eu) | On-demand transport with verified drivers | Best-in-class trust model for "stranger comes to do something for me" | Driver verification UX, rating system, safety features, operator profile card |
| [Nova Poshta app](https://novaposhta.ua/mobilnyj_dodatocok) | Parcel tracking and logistics | Benchmark for delivery UX that Ukrainians already know and trust | Tracking screen patterns, notification copy, status language |
| [Airbnb](https://airbnb.com) | Marketplace: hire a stranger's space/experience | Gold standard for building trust with strangers at scale | Host verification, review system, how they reduce anxiety before first use |

---

### Group 3 — ASPIRATIONAL
> International benchmarks in drone-as-a-service

| Name | Type | Why in this group | What to study |
|---|---|---|---|
| [Wing](https://wing.com) (Alphabet/Google) | Consumer drone delivery, AU/US/FI | Most mature consumer drone delivery UX in production | End-to-end order flow, how they communicate safety, delivery zone UX |
| [Zipline](https://zipline.com) | Medical + commercial drone delivery, US/Africa | Exceptional brand trust-building despite operating invisible technology | Brand voice, how they explain drone safety to non-technical users, operator credentialing story |
| [Flytrex](https://flytrex.com) | Consumer drone delivery platform, US | Closest model to DRON: consumer-facing app, delivery from local businesses | Full UX flow, pricing transparency, tracking screen |
| [DroneDeploy](https://dronedeploy.com) | Drone inspection and mapping SaaS | Best-in-class operator-side tooling (our SRM benchmark) | Operator dashboard UX, job management, client report delivery |
| [Percepto](https://percepto.co) | Industrial drone inspection on demand | How to present technical inspection results to non-technical clients | Client-facing report UX, before/after presentation, trust through data |

---

## Competitor Deep Comparison

**Scope:** Nova Poshta · DroneUA · Glovo · Nova Poshta app · Wing · Zipline · Flytrex · DroneDeploy
**Screenshots:** see [`screens/`](screens/)

| | Nova Poshta | DroneUA | Glovo | Nova Poshta app | Wing | Zipline | Flytrex | DroneDeploy |
|---|---|---|---|---|---|---|---|---|
| **Audience** | All UA, B2C + B2B, parcel senders/receivers | B2B — farmers, industrial, developers | Urban 18–35, smartphone-native, impulse delivery | Active UA senders/receivers, mobile-first | Suburban households in AU/US/FI service zones | Convenience-focused consumers; B2B medical | Suburban US consumers, food delivery by drone | Enterprise B2B — construction, mining, utilities |
| **Product foundation** | Physical branch network (30+ yrs) + digital layer | Own drone fleet + training + software | Gig courier network + merchant partnerships | Digital interface over Nova Poshta's physical network | Alphabet-backed autonomous drone fleet + partner API | Own VTOL drone network (Platform 2) | Autonomous drone network + DoorDash/Uber integration | SaaS platform for drone data capture + AI analysis |
| **Key mechanism** | Dense branch coverage + real-time tracking; user always knows parcel location | Technical expertise + certifications; operator training program | Massive catalog + real-time courier tracking + speed promise | All shipments in one place + proactive push notifications + QR | 3-step flow (shop → pick location → receive) + second-precise tracking | "Look up" moment — watch drone arrive in real time; 86-sec record | Backyard delivery in minutes; order through DoorDash, receive by drone | "One login for all data" — unifies drone/360/robotics with AI analysis |
| **Trust** | Established UA brand + physical presence everywhere + govt-level recognition | Certifications, military track record, technical credibility | Brand familiarity + ratings + no-questions refund + courier photo | Same brand trust + biometric auth + in-app card security | Google heritage ("12+ yrs innovation from Google labs") + 1M+ deliveries + Walmart | "60K lives saved" (medical) + "reliable, predictable, every time" + zero-emission | FAA-certified + 200K+ deliveries + real-time drone map with zero delay | "3M sites in 180 countries" + marquee clients (Turner, BP) + Trust Center |
| **Monetization** | Per-delivery fee (weight/size/distance) + COD + insurance | Project-based contracts + equipment sales + training | Delivery fee + service fee + merchant commission + Prime subscription | Drives frequency/loyalty for Nova Poshta core revenue | Per-delivery fee + B2B API licensing to merchant partners | Per-delivery fee (consumer) + B2B logistics contracts (medical) | Delivery fee + platform partnership fees (DoorDash, Uber) + merchant fees | SaaS subscription (tiered) + Data on Demand services + robotics products |

*[?] = behind login, not screenshotted: DroneUA operator dashboard, DroneDeploy project dashboard, Flytrex order flow*

---

### 3 Common Patterns

1. **Real-time transparency is non-negotiable.** Every delivery product — Nova Poshta, Glovo, Wing, Zipline, Flytrex — shows live order/drone status. Users have been trained by Glovo and Bolt to expect to see exactly where their order is at every moment. No tracking = no trust.

2. **Maximum 3-step simplified flow.** All mature delivery products reduce ordering to 3 steps or fewer: Wing (shop → pick location → receive), Glovo (order → track → get), Zipline (pick → watch → get). Complexity kills conversion on mobile.

3. **Quantified credibility over claims.** All use hard numbers to establish trust rather than adjectives: Wing (1M+ deliveries, 12 years), Zipline (60K lives saved, 70M miles flown), DroneDeploy (3M sites, 180 countries), Flytrex (200K deliveries). Numbers do what "trusted" and "reliable" cannot.

---

### 3 Key Differences

1. **Trust anchor differs by origin.** Ukrainian/local players (Nova Poshta) rely on physical presence and brand heritage. Global tech players (Wing, Zipline) rely on technology lineage and corporate credibility. Drone-specific platforms (Flytrex) rely on regulatory certification (FAA). DRON must build its trust from scratch — operator verification + insurance is the right call.

2. **B2B vs B2C architecture.** DroneUA and DroneDeploy are purely B2B with no consumer-facing flow. Glovo and Nova Poshta app are purely B2C. Wing/Zipline/Flytrex serve B2C consumers while exposing B2B APIs for partners. DRON's two-user-type model (client + operator SRM) is unique in this set.

3. **Operator visibility is hidden in all peers.** In Glovo, Nova Poshta, Wing, and Flytrex, the operator/courier is invisible — they work under the brand. DRON's model shows a verified human operator — closer to Bolt or Airbnb. None of the 8 competitors offer this pattern, which is both a risk (unfamiliar) and an opportunity (differentiator).

---

### 3 Open Questions

1. **First-use anxiety flow.** How do Wing and Zipline handle the moment a first-time user realizes a drone is landing in their yard? Is there an education/onboarding screen, or do they skip it? This is critical for DRON's first-order experience design.

2. **What does a consumer-service operator dashboard actually look like?** DroneDeploy is the closest SRM reference but it's enterprise B2B (maps, site data). There's no clear UI reference for an operator managing individual consumer jobs (arrive → execute → deliver result → close). Needs separate research.

3. **Current Ukrainian discovery behavior for drone operators.** OLX and Kabanchik analysis not yet done. The gap between how users find drone operators today (search → message → negotiate → trust blind) and DRON's proposed flow (browse verified operators → instant booking) is unresearched. This gap IS the product.

---

---

## Post-Persona Research — June 2026

**Trigger:** claim audit (`research/claim-audit.md`) identified three unconfirmed claims affecting design decisions: (1) ghosting on Kabanchik, (2) pricing opacity before conversation, (3) "stranger with a drone" as primary anxiety. Targeted web research conducted to test these claims.

**Sources fetched:** kabanchik.ua/kyiv/category/aeroziomka · kabanchik.ua specific operator listing · kabanchik.info/forum/12 · abd-video.com · isure.in.ua · wing app store reviews · SciTechDaily drone delivery acceptance study · Springer / Future Business Journal drone acceptance research · Google drone consumer trust studies 2024–2025.

---

### Finding 1 — Kabanchik aerial photography: pricing IS visible, license is NOT

**What we found:**
Kabanchik drone operator cards in Kyiv show: star rating, review count, years of experience, passport verification badge. Pricing range is publicly visible on the category page: **500–1,500 UAH/session**, average ~1,290 UAH/hour. One operator's listing showed 1,000 UAH per flight (one battery charge).

What is **not** shown on operator cards: drone pilot certification (CAA/DASU), liability insurance, airspace authorization. The platform guarantees up to 1,000 UAH compensation for unreliable service — not drone-specific.

**Market size signal:** 87+ completed reviews in the Kyiv aerial photography category. One operator (Yaroslav K.) has 468 reviews at 4.9★. One operator notes: *"Drone footage (pending military approval during wartime)"* — wartime airspace restrictions are an active operational constraint, visible to clients.

**Source:** kabanchik.ua/ua/kyiv/category/aeroziomka · kabanchik.ua/ua/advert/31893

**Impact on claims:**
- Claim "no pricing before DM on Kabanchik" → **WRONG for Kabanchik**. Pricing is visible on operator cards. Professional studios (Instagram, ABD Video) still require quote requests — pricing opacity is confirmed there.
- Claim "no credential verification on Kabanchik" → **CONFIRMED**. Passport verified; drone license and insurance not shown.

---

### Finding 2 — Ghosting on Kabanchik: documented for general services, not confirmed for drone operators

**What we found:**
The Kabanchik complaints forum (kabanchik.info) documents real platform-wide problems: *"Actual prices nearly double advertised rates"*, *"Came when absent and stole"*, *"Requested specific specialist, different person came"*, *"Terribly unqualified workers."*

However, **these complaints are from construction, plumbing, and handyman services — not from drone/aerial photography clients.** Zero drone-specific ghosting reviews found. Drone operator reviews on the category page are uniformly positive ("worked qualitatively and productively the whole day with two drones").

**Source:** kabanchik.info/uk/forum/12 · kabanchik.ua/ua/kyiv/category/aeroziomka reviews

**Impact on claims:**
- Claim "operators frequently ignore messages / ghosting" → **NOT CONFIRMED for drone operators specifically.** Remains an analog from Rover. Drone operators on Kabanchik appear to be licensed professionals with motivation to respond — not casual gig workers. This claim must be treated as a hypothesis, not a fact. The C-1 mood quote derived from this is fabricated.

---

### Finding 3 — Primary client anxiety is about the DRONE, not the operator

**What we found:**
Multiple studies on drone delivery consumer acceptance (2024–2025) consistently identify the same top fears:
- **Privacy** (surveillance, being watched)
- **Safety** (drone falling, property damage)
- **Noise** (low-altitude traffic, annoyance)

*"More than half of US respondents reported little or no trust in drones to deliver products"* — driven by these three factors, not by operator identity.

**Key counterweight:** *"87% of residents reported positive sentiment after actually experiencing the service."* The gap between pre-experience anxiety and post-experience positivity is documented: abstract fear of drone technology collapses on first use.

**What this means for DRON:** The Whalen Emotion framing in the CJM — *"a stranger with a drone near my home"* — points at the human operator as the anxiety source. The research points at the drone itself (noise, falling, surveillance) as the anxiety source. These are different design problems:
- "Stranger" anxiety → solved by operator verification, photo, credentials
- "Drone" anxiety → solved by explaining the technology, showing safety record, normalizing the experience

Both are real. But the ordering in the CJM may be wrong: drone anxiety may precede operator anxiety, not follow it.

**Source:** SciTechDaily — "First People in the US to Experience Drone Delivery" · WebSearch: drone delivery consumer trust research 2024–2025 · Springer Future Business Journal drone acceptance study

---

### Finding 4 — Drone insurance in Ukraine: wartime context changes everything

**What we found:**
Per isure.in.ua (Ukrainian drone insurance provider): *"During martial law, insurance of individuals with drones is not provided."* Only commercial entities receive insurance quotes. Coverage rates: 3.5–5% of drone value, 5–20% deductible. The insurance covers the drone itself (damage, theft) — not third-party liability.

**No published data on third-party liability insurance amounts** (what covers client property damage). The "500,000 UAH insurance" number in C-03 acceptance criteria has **no basis in the actual UA insurance market** and cannot be used as UI copy without legal verification.

**Additional wartime context:** Operators require military/aviation authority approval for flights. One Kabanchik operator lists this explicitly. This is a real friction point for the platform that appears nowhere in the current CJM.

**Source:** isure.in.ua/other/dron-insuranse-ukraine

---

### Finding 5 — Professional aerial studios: pricing opacity confirmed, zero booking UX

**What we found:**
ABD Video (Kyiv professional aerial studio): pricing not listed — *"Cost depends on team size, expertise level, and hours."* Booking requires consultation call or email. Mentions *"detailed flight coordination with authorities guaranteeing safety and legality"* and *"equipment insurance minimizes your risks"* — but no liability insurance for client property. Zero client testimonials on the page.

This confirms the C-2 pain: professional studios require DM/call for pricing, have no self-serve booking, and provide no verifiable credentials on their pages.

**Source:** abd-video.com/ua/prodakshn-studiya/aerozjomka-kiiv

---

### Open Questions After This Research

| # | Question | Status |
|---|---|---|
| Q-1 | Are Kabanchik drone operators actually responsive — or does ghosting happen at DM stage (not visible in reviews)? | Still unconfirmed. Reviews show results, not booking friction. Needs mystery shopping or operator interviews. |
| Q-2 | Does the "drone anxiety" (tech, noise, safety) precede or follow "operator anxiety" in a first UA drone service session? | Not answered by available research. All studies are US/EU markets. |
| Q-3 | What is the actual third-party liability insurance amount available to commercial drone operators in UA during martial law? | Not found. Legal/insurance consultation needed before using any number in UI copy. |

---

## Open Questions After IA (June 2026)

Building the information architecture (`sitemap.md`, `flows.md`) surfaced product-config
unknowns not covered by the competitive or persona research. Data gaps, not design gaps.

| # | Question | Why it matters | Status |
|---|---|---|---|
| Q-4 | Which UA / EU regions are in service at launch (coverage zones)? | The MJ-1 flow now has a "not in your region" empty state and an "address outside service zone" error; both need a real coverage map | Open — no rollout data |
| Q-5 | Operator payout config: minimum withdrawal amount, instant-card vs bank-transfer fees and timing in UA | The operator main flow ends in a withdrawal step (card instant / bank 1-3 days); thresholds and fees are assumed | Open — needs payment-provider terms |
| Q-6 | Dispute policy inputs: support SLA, refund cap, third-party liability amount | The EJ-2 resolution flow resolves every path except when these are undefined (the one remaining dead-end) | Partially open — see Finding 4 and Q-3 (liability blocked on legal verification) |

---

## Screens
See [`screens/`](screens/) for reference screenshots.

| File | What it shows |
|---|---|
| `novaposhta-home.png` | Nova Poshta homepage |
| `novaposhta-app.png` | Nova Post app landing page |
| `droneua-home.png` | DroneUA homepage |
| `glovo-home.png` | Glovo homepage |
| `wing-home.png` | Wing homepage |
| `zipline-home.png` | Zipline homepage |
| `flytrex-home.png` | Flytrex homepage |
| `dronedeploy-home.png` | DroneDeploy homepage |
