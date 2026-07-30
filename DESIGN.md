---
name: Blume & Co.
description: National multi-category flower, cake & gift prototype with a warm, premium-but-approachable identity.
colors:
  gallery-white: "#fafaf9"
  warm-fog: "#f3f2f0"
  whisper-white: "#f6f5f3"
  espresso-ink: "#201c1a"
  warm-slate: "#6b6660"
  faint-stone: "#e4e2df"
  marigold-gold: "#f4c95d"
  deep-marigold: "#d9a93b"
  blossom-pink: "#f7c5cc"
  lilac-mist: "#d8c7e8"
  living-coral: "#e8927c"
  deep-coral: "#d07660"
typography:
  display:
    fontFamily: "Outfit, Plus Jakarta Sans, -apple-system, sans-serif"
    fontWeight: 600
    lineHeight: 1.1
  body:
    fontFamily: "Plus Jakarta Sans, -apple-system, Segoe UI, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "8px"
  md: "16px"
  lg: "32px"
  full: "9999px"
components:
  button-primary:
    backgroundColor: "{colors.living-coral}"
    textColor: "{colors.espresso-ink}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.deep-coral}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.espresso-ink}"
    rounded: "{rounded.full}"
  card-product:
    backgroundColor: "{colors.warm-fog}"
    rounded: "{rounded.md}"
  card-signature:
    backgroundColor: "{colors.espresso-ink}"
    textColor: "{colors.gallery-white}"
    rounded: "{rounded.lg}"
---

# Design System: Blume & Co.

## Overview

**Creative North Star: "The Neighborhood Florist, Scaled Nationally"**

Blume & Co. reads like a beloved corner florist that happens to ship to 35 cities: warm, a little playful, hand-picked-feeling, but organized with the discipline of a real national catalog. The canvas is a clean off-white gallery wall, not a rustic cream paper stock, so the two brand accents (marigold gold and living coral) and the pastel category tints (blossom pink, lilac mist) read as deliberate pops of personality rather than blending into a uniformly warm haze. Cards and content blocks are playful and full of energy, not restrained; the CTA (a solid coral pill) is unmistakably the one thing to press on any given screen.

The system is a deliberate hybrid of three references, each owning a different job: **Pinterest** supplies the floating capsule navigation and the pin-card product grid (full-bleed image, overlay pill badge, flat meta below); **Notion** supplies the pastel-tint grouping used to visually cluster related items (mega-menu columns, category card grids) without adding borders; **Airtable** supplies the section pacing and the signature full-bleed dark stat card that punctuates the page rhythm. No single reference owns the whole site; each is used exactly where it's strongest.

**Key Characteristics:**
- Clean off-white base (never cream/beige) with two confident brand accents, not a diffuse warm palette
- Playful, energetic card treatment; CTAs are the loudest element on any screen
- Pastel tints group content (Notion), never decorate it
- One full-pill / one soft / one signature radius, applied by strict role, never mixed within a role
- Flat by default; shadow appears only on things that float above the page (dropdowns, the floating WhatsApp button, overlapping hero photography)

## Colors

The palette is intentionally small: one warm neutral family, two brand accents, two pastel tints reserved for category grouping.

### Primary
- **Living Coral** (`#e8927c`): the CTA color. Every primary action on the site ("Order via WhatsApp," the site's only real conversion path) is this exact color, full-pill, everywhere. **Deep Coral** (`#d07660`) is its hover/active state.

### Secondary
- **Marigold Gold** (`#f4c95d`): the brand's second accent. Used for the logo-adjacent warmth and as a Notion-style tint (`marigold-gold/20`) inside pastel category groupings; never used as a second CTA color alongside coral on the same screen. **Deep Marigold** (`#d9a93b`) is its hover/active state.

### Tertiary
- **Blossom Pink** (`#f7c5cc`) and **Lilac Mist** (`#d8c7e8`): Notion-pattern grouping tints only. They differentiate category clusters (mega-menu columns, the Kategori Utama gradient overlays) at low opacity; they never carry text or appear as a CTA.

### Neutral
- **Gallery White** (`#fafaf9`): page background. A cool, barely-tinted off-white, deliberately not `#ffffff` (too glaring) and not cream (reads rustic/craft, not premium).
- **Warm Fog** (`#f3f2f0`): card and grouped-content surface, one step down from Gallery White.
- **Whisper White** (`#f6f5f3`): section banding (e.g. the trust-bar strip), between Gallery White and Warm Fog.
- **Espresso Ink** (`#201c1a`): all body and heading text, and the fill for the signature dark card. Deep and cool enough to hold strong contrast against Gallery White without reading as pure black.
- **Warm Slate** (`#6b6660`): secondary/muted text (prices, captions, helper copy).
- **Faint Stone** (`#e4e2df`): all hairline borders and dividers.

### Named Rules
**The One-CTA-Color Rule.** Living Coral is the only filled button color on the entire site. If a section needs a second button, it's an outline/ghost button in Espresso Ink, never a second filled color (gold, or anything else). **Exception:** on a section whose background is itself Living Coral (e.g. the closing CTA band), the button flips to a white fill with Espresso Ink text instead - a coral button on a coral background has no contrast, so white is the correct substitution there, not a second accent color.

**The Tint-Never-Text Rule.** Blossom Pink and Lilac Mist appear only as low-opacity backgrounds/gradients for grouping. Neither ever carries foreground text or a border used for emphasis.

## Typography

**Display Font:** Outfit (with Plus Jakarta Sans, -apple-system fallback)
**Body Font:** Plus Jakarta Sans (with -apple-system, Segoe UI fallback)

**Character:** Outfit is a geometric, confident sans used only for headings and product/brand names, self-hosted at 400-700. Plus Jakarta Sans is a warmer, slightly humanist body sans that carries every paragraph, label, and button. Both self-hosted via `@fontsource`; neither is ever swapped for a serif, and Inter is never used.

### Hierarchy
- **Display** (Outfit, 600, `text-3xl` to `text-6xl` responsive, `leading-[1.1]`): page H1s and the homepage hero headline. Capped at 2 lines on desktop.
- **Headline** (Outfit, 600, `text-2xl`/`text-3xl`): section headings (`Kategori Utama`, `New Arrival`, etc).
- **Title** (Outfit, 500-600, `text-lg`/`text-xl`): card and component titles (product names, category card names).
- **Body** (Plus Jakarta Sans, 400, `text-sm`/`text-base`, `leading-relaxed`): paragraph copy, product descriptions.
- **Label** (Plus Jakarta Sans, 500, `text-xs`/`text-sm`): button text, badges, muted metadata (prices, captions).

### Named Rules
**The No-Eyebrow Rule.** Section headings stand alone. No small uppercase-tracked kicker label above a headline; the headline and its position on the page are the only labeling a section gets.

## Layout

Every page is contained in `max-w-6xl` (1152px) with `px-4` gutters, centered. Product grids use CSS Grid, never flex-percentage math: 2 columns on mobile, 3 on tablet, 4 on desktop (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4`). Section rhythm on desktop is `py-16` (96px); mobile tightens to `py-12` so a content-heavy page (the homepage has 12 stacked sections) doesn't turn into unnecessary dead-space scroll. Large catalog grids (30+ products) reveal the first 12 items and disclose the rest behind a "Tampilkan Lebih Banyak" button rather than dumping the full list.

The navigation is a floating capsule (`sticky top-4`, `rounded-full`, `backdrop-blur`) rather than a full-width bar docked to the viewport edge - it reads as an object sitting on the page, in keeping with the Pinterest reference.

## Elevation & Depth

Flat by default. Surfaces at rest use tonal layering (Gallery White vs. Warm Fog vs. Whisper White) instead of shadow to indicate grouping. Shadow is reserved for things that visually float above the page: the mega-menu dropdown panels, the floating WhatsApp button, and the overlapping fanned photography in the hero. All shadows use Tailwind's default neutral shadow scale (`shadow-sm`/`shadow-lg`) - never a pure-black drop shadow.

### Named Rules
**The Floats-Get-Shadow Rule.** If an element is pinned/overlaid/fixed above other content, it gets `shadow-lg`. If it sits in normal document flow, it stays flat and relies on background-color contrast instead.

## Shapes

Four radii, strictly role-locked, no exceptions or one-off values anywhere on the site:
- **8px (`rounded-sm`):** form inputs, small inline chips.
- **16px (`rounded-md`):** every card - product cards, category tint cards, dropdown panels.
- **32px (`rounded-lg`):** the signature full-bleed dark stat card only (e.g. the "35 Kota" section).
- **Full pill (`rounded-full`):** every interactive/clickable element - buttons, the nav capsule, badges, filter chips.

### Named Rules
**The Role-Locked Radius Rule.** Radius is assigned by what the element *is* (button vs. card vs. signature block), never by taste on a given screen. A button is always full-pill; a card is always 16px; there is no third option.

## Components

Buttons and cards are the two components that carry the brand's "playful and full of energy" character; navigation and inputs stay quieter and more functional.

### Buttons
- **Shape:** full pill (`9999px`), always.
- **Primary:** Living Coral fill, Espresso Ink text (never white text on coral - contrast fails at that combination), `px-6 py-3` for standalone CTAs, tighter `px-3 py-2.5` inside product cards.
- **Hover / Active:** background shifts to Deep Coral; `active:scale-[0.98]` gives a tactile press-down feel.
- **Secondary / Ghost:** transparent fill, `border border-hairline` (Faint Stone), Espresso Ink text, `hover:bg-surface-card`.

### Cards / Containers
- **Corner Style:** 16px, universally.
- **Background:** Warm Fog for product cards; pastel tints (Blossom Pink/Lilac Mist/Marigold Gold, all at reduced opacity) for Notion-style grouped category cards.
- **Shadow Strategy:** flat at rest (see Elevation).
- **Internal Padding:** `p-3` mobile / `p-4` desktop for product cards; `p-6` for larger content cards.

### Navigation
- **Style:** floating pill capsule, `sticky top-4`, semi-transparent white with `backdrop-blur`, `shadow-sm`.
- **Desktop:** logo left, menu items centered, dropdowns open on hover with a short close-delay (100ms) to tolerate normal mouse movement without feeling laggy; every dropdown panel (simple or grouped) shares the same width and grid-based layout so no menu reads as disproportionately long.
- **Mobile:** collapses to a hamburger-triggered accordion, not a scaled-down mega-menu.

### Signature Component: The Full-Bleed Stat Card
A recurring, deliberately rare full-width card with Espresso Ink background, Gallery White text, 32px radius, and one oversized display-weight statistic (e.g. "35 Kota") as its focal point. This is the one place the ink/gallery-white relationship inverts, and it's used sparingly (once per page at most) so it keeps its punctuation power.

## Do's and Don'ts

### Do:
- **Do** keep Living Coral as the only filled-button color, everywhere, always.
- **Do** use tonal layering (Gallery White / Warm Fog / Whisper White) to separate sections instead of adding borders or shadow.
- **Do** keep every dropdown, card, and grid on the four-radius lock (8 / 16 / 32 / full) - no arbitrary radius values.
- **Do** let pastel tints (Blossom Pink, Lilac Mist, Marigold Gold-at-low-opacity) group content, and stop there.
- **Do** break up any run of 3+ identically-sized cards/tiles with an asymmetric or staggered treatment instead of a flat equal grid.

### Don't:
- **Don't** use white text on Living Coral or Marigold Gold - both fail contrast; Espresso Ink is the only text color that works on either.
- **Don't** introduce a second neutral-base family (no cream, no beige, no warm paper) - Gallery White is the one and only background.
- **Don't** add an eyebrow/kicker label above a section heading.
- **Don't** let a large product/city grid render unbounded - reveal the first 12 and disclose the rest.
- **Don't** use emoji anywhere in UI copy or headings.
