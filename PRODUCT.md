# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Register

product

## Users

**Clients (primary surface):** Urban Ukraine, 18–50. People who need a drone-specific result (delivery, aerial photo/video, structural inspection) and have zero interest in operating or understanding drone technology. Mental model: Bolt/Glovo — open app, tap, thing happens. Primary emotional driver is trust: they are handing control of a situation to a stranger with a flying machine.

**Operators (SRM surface):** Licensed drone pilots with 1–2+ years of commercial experience, currently finding work through Kabanchik/OLX. They want jobs dispatched to them, not a second job finding jobs. Payment friction and platform opacity are churn triggers.

## Product Purpose

DRON is a drone-as-a-service platform connecting clients with in-house verified operators. Company-owned fleet, not a marketplace. Clients order a service; a certified operator handles everything. Success = client books without anxiety, operator gets paid without admin overhead. Geography: Ukraine and European countries. MVP services: aerial photo/video, package delivery, structural inspection.

## Positioning

Company-owned fleet with in-house certified operators — not a marketplace. The client never chooses or evaluates an executor: auto-dispatch assigns the operator, and the operator is paid automatically after client confirmation of the result. A marketplace or courier app cannot truthfully copy this claim of end-to-end accountability for the operator, the drone, and the outcome. (Confirmed 2026-07-23.)

## Operating Context

**Inside the product (designed scenario):** entry via Diia or BankID; payment online only (Visa/Mastercard, Apple Pay, Google Pay); the client's order runs Choose service → details → price → pay → operator revealed → live tracking → result → rate; the operator's job runs accept → checklist → upload result → client confirms → auto-payout to wallet. Mobile web is the primary surface, desktop responsive secondary; no native app in MVP. Interface languages: English and Ukrainian.

**Around the project (real workflow):** this repository is a staged design process — research/ → wireframes/ → concept/ → tokens/ → components/ → design-system/ → handoff/. All content truth lives in `.md` files; HTML pages are a display layer. Product strings are governed by `voice.md` and inventoried in `microcopy.md`; screens and their states exist only where `sitemap.md` / `flows.md` / `wireframes/_screens.md` define them.

## Capabilities and Constraints

- MVP services: aerial photo/video, package delivery, structural inspection. Post-MVP: agricultural spraying/imaging, advertising, wall art, search-and-rescue support.
- Auto-dispatch only: the client cannot pick an operator. Operator payout auto-releases after client confirmation.
- Terminology is fixed by `voice.md`: operator (never "pilot"); client-side **order** vs operator-side **job**; **issue**/**dispute**; **delivery photo**/**inspection report**; **Withdraw**; **Sign in**; **client**.
- One page per screen state; a state exists only where a `flows.md` node produces it — screens and states are never invented ad hoc.
- No native app in MVP; mobile web follows Apple HIG conventions, desktop and operator SRM target WCAG 2.1 AA.

## Evidence on Hand

This is an educational / portfolio design project. Real artifacts of the project itself:

- Research: `research/target-audience.md`, `research/jtbd.md`, `research/research.md`, `research/claim-audit.md`
- Structure: `sitemap.md`, `flows.md`, `navigation.md`; voice: `voice.md`, `microcopy.md`
- Wireframes: `wireframes/` (80 pages; contract in `_conventions.md`, state matrix in `_screens.md`, audit log in `_critique.md`)
- Concept: `concept/concept.md`, `concept/concept.html` (chosen direction 02 Studio, incl. drone render and map imagery)

**Absences that must not be fabricated:** there are no real customers, operators, orders, prices, benchmarks, testimonials, or usage metrics. Every name, number, price, and order shown in the UI is authored synthetic demonstration data and must never be presented as a real commercial claim.

## Brand Personality

Futuristic, precise, accountable. Not cold — confidence earned through transparency, not through authority.

References:
- FlowTune SaaS Dashboard — layout density, UI maturity
- DJI EXPRESS UAV — drone-native visual language
- Solva Air Brand Identity — air/motion brand confidence

Anti-references: anything that looks like a generic freelance marketplace (OLX/Kabanchik aesthetic), anything that feels consumer-drone-hobbyist (DJI retail), anything warm-neutral SaaS.

## Anti-references

- OLX / Kabanchik aesthetic: raw classifieds, no verification layer, trust-blind
- Consumer drone hobbyist visual language: adventure orange, stock footage of fields, GoPro energy
- Warm-neutral SaaS cream: the cross-project monoculture beige
- Ride-share me-too: the exact Bolt/Glovo color language (even though those are benchmark references for UX patterns, the visual should be its own)

## Product Principles

1. **Trust is architectural, not decorative.** Credentials, insurance, job count — on the list card, before any tap. Not on a profile page behind a click.
2. **Transparency converts anxiety.** Every moment of uncertainty (post-payment void, operator identity, ETA) resolved with a specific human face, not a brand confirmation screen.
3. **No decisions the user can't make.** Auto-dispatch exists because users have no criteria to evaluate drone operators. Remove the choice; don't expose it.
4. **Operator economics are product.** If payment is delayed, the supply side evaporates. Operator tooling (SRM) is a first-class surface, not an afterthought.
5. **The drone is the foreign object, not just the operator.** Primary anxiety is about the drone itself — noise, privacy, safety — before it's about the human. Design normalizes the technology, not just the person.

## Accessibility & Inclusion

- Client mobile: Apple Human Interface Guidelines
- Client desktop + Operator SRM: WCAG 2.1 AA
- Interface languages: Ukrainian (primary), English
