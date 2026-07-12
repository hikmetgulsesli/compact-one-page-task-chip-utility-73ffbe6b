---
name: Precision Task Utility
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  heading-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
  mono-label:
    fontFamily: Geist Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  gutter: 12px
  container-padding: 16px
---

## Brand & Style
The design system is centered on "Dense but Calm" utility—a philosophy that prioritizes information density without sacrificing cognitive clarity. The target audience consists of power users, developers, and project managers who require a high-throughput interface for task orchestration.

The visual style is **Corporate / Modern** with a lean toward **Minimalism**. It rejects decorative ornamentation in favor of a deterministic, systematic aesthetic. The emotional response is one of controlled efficiency, reliability, and technical precision. Every pixel is intentional, utilizing subtle borders and a rigorous grid to maintain order in complex data environments.

## Colors
The palette is built on a foundation of neutral Slate grays to provide a low-fatigue environment for long-duration work.

- **Primary (Blue 600):** Used exclusively for primary actions, active states, and focus indicators. It provides a sharp, authoritative anchor in the monochromatic field.
- **Neutral Stack:** A range of grays (Slate 50 to Slate 900) defines the hierarchy. Surface backgrounds use the lightest tints, while borders and secondary text use mid-range grays to reduce visual noise.
- **Semantics:** High-saturation tokens for Success, Warning, and Error are used sparingly—only for status indicators and feedback loops to ensure they capture immediate attention within the dense UI.

## Typography
This design system utilizes **Inter** for its exceptional legibility at small sizes and high x-height. A secondary monospaced font (**Geist Mono**) is reserved for technical IDs, timestamps, and data values to reinforce the utility-first nature of the tool.

The scale is intentionally compact. Body text defaults to 13px to allow for high data density. Headlines are restrained, relying on font weight rather than size to establish hierarchy. This prevents "layout bloat" and keeps the focus on the tasks.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 4px baseline rhythm. Given the task-heavy nature of the utility, padding is kept tight (sm/md) to maximize the "above-the-fold" content.

- **Mobile:** Single column with 12px horizontal margins.
- **Desktop:** Multi-column dashboard layouts using 12px gutters. 
- **Density:** Elements like task chips and list items use "compact" padding (4px vertical, 8px horizontal) to allow users to scan dozens of items without excessive scrolling.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-contrast outlines** rather than shadows. This minimizes visual "fuzziness" and keeps the interface feeling crisp and professional.

- **Surface Level 0:** The main application background (Slate 50).
- **Surface Level 1:** Task containers and cards (White) with a 1px border (Slate 200).
- **Active State:** Elements being dragged or interacted with receive a subtle 2px blur shadow, but otherwise, elevation is strictly flat. 
- **Dividers:** 1px solid Slate 200/100 lines are used to separate logical sections.

## Shapes
The shape language is **Soft** but disciplined. A 4px (0.25rem) radius is the standard for almost all UI elements, providing a modern feel that is still efficient for alignment.

- **Standard Elements:** 4px radius (Buttons, Inputs, Task Chips).
- **Containers:** 8px radius (Large cards, modals).
- **Status Indicators:** 100% circular for purely decorative status pips.

## Components

### Task Chips
Small-scale indicators for status and metadata. Use `body-sm` typography. 
- **Style:** Light gray background with a 1px inset border. 
- **States:** A colored 6px dot (pip) on the left indicates status (e.g., Green for "Done").

### Buttons
- **Primary:** Solid Blue 600, White text. No gradients.
- **Secondary:** White background, Slate 200 border, Slate 900 text.
- **Size:** Compact height (28px - 32px) to match the dense typography.

### Input Fields
- **Style:** Subtle 1px border (Slate 300). On focus, the border transitions to Blue 600 with a 2px outer glow (Blue 100).
- **Labeling:** Use `label-caps` positioned directly above the input to save horizontal space.

### List Items
High-density rows with a 1px bottom border. Hover state uses Slate 50. Leading icons should be simplified glyphs at 14px size.

### Feedback States
- **Toasts/Banners:** Flat color bars (2px) on the left edge of a white container to indicate type (Error/Success) without overwhelming the user with high-saturation backgrounds.