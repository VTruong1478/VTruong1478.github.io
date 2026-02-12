# DESIGN_RULES.md

Source of truth: Figma
Goal: Implement screens 1:1 with Figma using existing tokens and utilities.

## 0) Non-negotiables

- Follow WCAG 2.1 AA.
- Do not invent new design tokens.
- If a new token seems needed (color, spacing, radius, shadow, blur, border width, z-index scale, etc.), STOP and ask me first.
- If any UI violates a rule below, call it out explicitly before proceeding and suggest the smallest compliant fix.

---

## 1) Breakpoints (responsive targets)

Use these viewport ranges for layout decisions:

- Large Desktop: 1440px and up
- Small Desktop: 1024px to 1439px
- Tablet: 768px to 1023px
- Mobile: 375px to 767px

---

## 2) Grid system

### Large Desktop, Small Desktop, Tablet

- 12 columns
- Margin (outer): 32px
- Gutter: 20px

### Mobile

- 8 columns
- Margin (outer): 24px
- Gutter: 16px

### Implementation notes

- Align major blocks, windows, widgets, and desktop icons to the grid.
- Keep consistent margins and gutters per breakpoint.
- No ad hoc pixel offsets unless Figma explicitly shows it.

---

## 3) Tokens only

Only use values defined in `tokens.css` for:

- colors
- spacing
- radius

Use Tailwind mappings from `tailwind.config.js`:

- `bg-bg`, `bg-window`, `bg-widget`, `bg-grey98`
- `text-text`, `text-darkgrey`
- `bg-primary`, `bg-secondary`, `bg-tertiary`
- `rounded-m`

If a value is missing and you think a new token is required, ask me before creating it.

---

## 4) Typography rules

### Desktop-related UI (Pixelify Sans)

Use Pixelify Sans for:

- desktop background UI
- desktop icons + labels
- footer/taskbar
- widgets on the desktop (right-side widgets)
- any “OS chrome” elements outside the window content area

### Window content (Inter)

Use Inter for:

- all text inside window bodies (content area)
- forms, paragraphs, lists, headings inside windows
- anything that reads like a normal web page inside a window

### Consistency

- Do not mix fonts inside the same “zone” unless Figma explicitly does.
- Use typography classes from `typography.css` instead of inventing new sizes.

---

## 5) Windows behavior

- Windows are draggable.
- Windows can be focused (active window on top).
- Clicking minimize triggers a minimize animation:
  - window animates down toward its matching footer icon
  - after animation, window is hidden and footer icon shows active/minimized state
- Multiple windows can be open at once.
- Footer/taskbar shows an icon per open window (like a desktop OS).
- Clicking a footer icon:
  - if minimized, restores the window
  - if visible, focuses it
  - optional: toggles minimize/restore only if Figma shows that behavior

---

## 6) Accessibility (WCAG 2.1 AA)

- Color contrast must meet AA:
  - normal text: at least 4.5:1
  - large text (at least 24px regular or 18.66px bold): at least 3:1
- Interactive elements must be keyboard accessible:
  - visible focus states
  - logical tab order
- Buttons and controls must have accessible names (aria-label when needed).
- Motion:
  - respect `prefers-reduced-motion` for minimize/drag animations.
- If any Figma styling seems to violate AA contrast, flag it and propose the closest token-compliant alternative, then ask me to approve.

---

## 7) When unsure

If a detail is unclear from the mockup:

- choose the most conservative option that preserves the system:
  - align to grid
  - use existing tokens
  - keep typography zone rules
- explicitly list what was assumed.
