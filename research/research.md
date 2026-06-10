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
