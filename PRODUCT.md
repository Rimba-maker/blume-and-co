# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

End-shopper persona the site is designed for: Indonesian consumers looking for spontaneous gifts across life moments (wedding, birthday, sympathy/funeral, corporate events, graduation, anniversary, newborn, "girlfriend day"), people sending gifts to a city other than their own, and corporate/event organizers needing bulk flower stands (bunga papan) or hampers.

Actual near-term audience: prospective clients this prototype is shown to, evaluating whether to commission a real version of this kind of multi-category gifting platform for their own brand.

## Product Purpose

A client-facing prototype demonstrating a national, multi-category (flower / cake / gift / bunga papan) e-commerce site for the fictional brand "Blume & Co." It exists to show a prospective client what a professional-grade version of this concept looks and feels like — full navigation depth, occasion/location curation, WhatsApp-only ordering flow — well enough to win their confidence to commission the real thing. Success means the prototype reads as production-quality, not a placeholder mockup, when presented to a client.

## Positioning

Two differentiators drive the whole information architecture: curation by Occasion (9 dedicated occasion pages, products tagged and filtered rather than duplicated) and national Location coverage (35 cities, each with a dedicated page and delivery-time note) rather than a generic single-city flower shop. No cart/checkout — every order routes through a pre-filled WhatsApp deep link, a deliberate simplification a cart-based competitor wouldn't share.

## Operating Context

- Fully static Astro build, ~94 generated pages (product subcategories across 3 top-level categories, 9 occasion pages, ~30 location pages, core pages).
- Ordering flow: every "Order via WhatsApp" CTA opens `wa.me` with a pre-filled message templated per context (product, occasion, or city).
- No product detail pages by design — products appear only as cards in category/occasion/location grids.
- No cart, no checkout, no payment integration, no backend/CMS — all content lives in Astro Content Collections (`products.json`, `occasions.json`, `locations.json`).

## Capabilities and Constraints

- Content Collections schema locked (products/occasions/locations) per the original PRD; category set is `flower`, `cake-gift`, `bunga-papan`.
- Cake & Gift has 28+ real subcategories grouped into 5 visual clusters in the mega menu (Cakes, Hampers, Gifts & Personalized, Home & Ambience, Lainnya) to avoid a flat 28-item dropdown.
- Product images are real photos sourced from Pexels, matched per product name/subcategory — not visual placeholders — even though the products themselves are representative/dummy inventory, not a real catalog.
- Business contact facts are intentionally still placeholder at the prototype stage: WhatsApp number (`62XXXXXXXXXX`), Instagram handle, physical address, NIB (Nomor Induk Berusaha). These get real values only if/when a client commissions the real build — do not fabricate real-looking values for them.
- Design system is a deliberate hybrid: Pinterest (pill nav, pin-card product grid), Notion (pastel-tint grouping for mega-menu columns/category clusters), Airtable (section pacing, signature full-bleed stat/CTA cards) — locked, not to be second-guessed without a reason.

## Brand Commitments

- Brand name: "Blume & Co." Tagline: "For Every Occasion, Everywhere in Indonesia."
- Voice: modern, warm, a little premium but approachable — explicitly not stiff/corporate.
- Palette: off-white/near-white neutral base (deliberately moved off cream for a more premium feel), warm gold (`#F4C95D`) and coral (`#E8927C`) as the two brand accents, pastel pink/purple as Notion-style category tints. Deep near-black ink text, cool-neutral grays for secondary text/borders.
- Typography: Outfit (display) + Plus Jakarta Sans (body), both self-hosted via `@fontsource`.
- Shape system locked: 8px (buttons/inputs), 16px (cards), 32px (signature cards), full-pill (nav/badges/CTAs) — no other radii anywhere on the site.

## Evidence on Hand

- Full original PRD (`blume-and-co-PRD.md`, gitignored, not part of the public repo) documents the complete site map, content schema, and phased build plan this prototype followed.
- No real customer testimonials, no real product photography of Blume & Co.'s own inventory, no real business registration — all representative (Pexels photography matched to product names) or explicit placeholder. Future work must not present these as real to a client without flagging that they're prototype placeholders.

## Product Principles

1. Every category/occasion/location page is generated from three shared Content Collections (products, occasions, locations) filtered by field — never duplicate product data per page.
2. The WhatsApp deep-link is the only conversion path; never add cart/checkout without an explicit new decision to do so.
3. The design system (Pinterest/Notion/Airtable hybrid, locked palette, locked shape scale) is intentional and consistent — extend it, don't fragment it with one-off patterns.
4. Because this is a client-pitch prototype, craft and polish matter more than content authenticity — the site must read as production-grade even though the underlying business facts are placeholders.
5. Mobile is a first-class target, not an afterthought — pages should stay comfortably scrollable, not dumped as one long unbroken list.

## Accessibility & Inclusion

No formal standard mandated. General good practice enforced throughout: WCAG AA contrast minimum on all text/button combinations, verified manually during build.
