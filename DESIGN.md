---
name: witp
description: A glass anatomical workspace for a personal pain journal.
colors:
  accent: "#a1efd4"
  background: "#0e2025"
  foreground: "#edf4f2"
  muted: "#acbfbe"
  error: "#ffb7ac"
typography:
  headline:
    fontFamily: "Geist, sans-serif"
    fontSize: "clamp(2.3rem, 3.7vw, 3.7rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: "2rem"
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "0.875rem"
    lineHeight: "1.25rem"
  label:
    fontFamily: "Geist, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: "1rem"
rounded:
  field: "0.5rem"
  panel: "1rem"
  capsule: "9999px"
spacing:
  small: "0.5rem"
  medium: "1rem"
  large: "1.5rem"
  panel-wide: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.background}"
    rounded: "{rounded.capsule}"
    padding: "0.75rem 1.25rem"
  button-icon:
    textColor: "{colors.muted}"
    rounded: "{rounded.capsule}"
    size: "2.5rem"
  field:
    backgroundColor: "rgb(0 0 0 / 15%)"
    textColor: "{colors.foreground}"
    rounded: "{rounded.field}"
    padding: "0.625rem 0.75rem"
  glass-panel:
    backgroundColor: "rgb(255 255 255 / 5%)"
    rounded: "{rounded.panel}"
    padding: "{spacing.large}"
  capsule-nav:
    backgroundColor: "rgb(255 255 255 / 10%)"
    rounded: "{rounded.capsule}"
    padding: "0.75rem 1.25rem"
  view-toggle:
    rounded: "{rounded.capsule}"
    textColor: "{colors.muted}"
    padding: "0 0.75rem"
---

# Design System: witp

## Overview

**Creative North Star: "Glass cockpit"**

Deep blue-green ground, frosted controls, a porcelain body model, and mint selection define the implemented interface. Geist typography and restrained borders keep the workspace legible around the interactive anatomy.

**Key Characteristics:**

- Frosted panels and capsule navigation.
- Mint actions and selection against a dark ground.
- A directly interactive 3D body with contextual journal controls.

## Colors

Primary mint (`accent`) marks actions, focus, intensity values, and status. The neutral set supplies the blue-green background, pale foreground, and muted supporting text; `error` is the warm alert color. White overlays create glass surfaces. The model uses separate material colors: porcelain at rest, lighter mint on hover, and emissive mint when selected.

## Typography

Geist sans serves headings, controls, and prose. The headline becomes 2rem below 640px; journal titles use the title role. Supporting paragraphs use the body size with relaxed line height (1.625). Field labels use the label role. Intensity is a tabular 3rem numeral. Geist Mono is available in the theme but has no defining role in this workspace.

## Layout

The workspace is capped at 1600px. Below 1024px it stacks introduction, model, and journal; the model stage is 440px tall. Desktop uses three columns with minimum widths of 220px, 330px, and 290px, a 680px model stage, and a scrollable journal. Horizontal gutters progress from 1.5rem to 3rem at 640px and 5rem at 1400px. The fixed navigation is centered, 1.5rem from the top, with a 64rem maximum width.

## Elevation & Depth

Glass combines white at 5% opacity, a white 15% border, and 24px backdrop blur. Navigation increases the fill to 10% and border to 20%, adding the Tailwind large ambient shadow (`0 25px 50px -12px rgb(0 0 0 / 25%)`). A radial light and blurred floor shadow ground the body model. The journal reveals over 300ms with an 8px rise; reduced-motion preferences suppress CSS animation and smooth camera movement.

## Shapes

Capsules unify navigation, primary actions, and view controls. Fields have the smaller field radius; journal panels and mobile navigation use the panel radius. Thin translucent borders separate surfaces without opaque card frames.

## Components

- Primary actions use mint fill, dark text, semibold body type, a minimum 44px height, and a white hover fill. Disabled actions fade.
- Icon controls are 40px circles with 16px icons; hover adds a white 10% surface and white ink.
- Fields use a dark translucent fill, white 20% border, and a minimum 44px height. Date and intensity controls retain native input behavior.
- Focus uses a mint 2px outline with a 4px offset. Preserve visible labels and accessible names for icon buttons.
- Journal panels use 1.5rem padding, increasing to 1.75rem at 640px. Region selection replaces the empty state with the region title and form; no extra eyebrow precedes that title.
- Navigation shows inline links from 1024px; smaller widths expose a menu button and a separate frosted link panel. Front/back view buttons expose their pressed state with a white 15% capsule fill.

## Do's and Don'ts

- Do reuse the existing glass, field, primary-button, and icon-button styles.
- Do retain keyboard focus, native form controls, and reduced-motion behavior.
- Don't replace the interactive body with a raster mockup.
- Don't introduce another palette or opaque treatment for the established glass controls.

Source of truth: `src/app/globals.css`, `src/shared/ui/Navbar.tsx`, and the anatomy/pain components. `.impeccable/design.json` provides representative component previews; its tonal ramps are preview metadata, not additional application tokens. No raster artwork ships in this visual system.
