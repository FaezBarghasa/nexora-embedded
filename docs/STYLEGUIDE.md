# Styling & UI Guide

Nexora utilizes a combination of Tailwind CSS for structural layout utility and Vanilla CSS for custom design tokens, themes, and complex animations.

## Core Aesthetic
The application is designed to mimic a retro-futuristic, high-fidelity embedded systems hardware diagnostic interface. The core aesthetic elements are:
- Matte carbon/substrate backgrounds.
- High-contrast neon green typography and accents (silkscreen).
- CRT (Cathode Ray Tube) scanlines and phosphor glow effects.
- Monospace, technical typography.

## CSS Custom Variables (Design Tokens)
All primary colors and thematic elements are defined as CSS Custom Variables in `:root` inside `style.css`. Always use these variables rather than hardcoding hex values.

```css
:root {
  --color-bg-deep: #050606;
  --color-pcb-dark: #0a0c0d;
  --color-pcb-light: #151a1d;
  --color-silkscreen: #00ff66;
  --color-silkscreen-dim: rgba(0, 255, 102, 0.5);
  --color-silkscreen-off: rgba(0, 255, 102, 0.1);
  --color-trace-dim: #003314;
  --color-trace-active: #00ff66;
  --color-danger: #ff3333;
  --color-danger-dim: rgba(255, 51, 51, 0.2);
  --font-mono: 'JetBrains Mono', 'Share Tech Mono', monospace;
  --font-fa: 'Vazirmatn', sans-serif;
  --glass-bg: rgba(5, 6, 6, 0.8);
  --glass-border: rgba(0, 255, 102, 0.2);
}
```

## Typography
- **English**: `JetBrains Mono` and `Share Tech Mono` are used to provide a crisp, coding/terminal aesthetic.
- **Persian**: `Vazirmatn` is used for clear, legible rendering of RTL text.
- Font family toggling is managed automatically via the `[dir='rtl']` CSS selector in `style.css`.

## UI Components

### Glass Panels
Main content areas utilize a "glassmorphism" effect to float above the procedural PCB canvas background.
- Apply `background: var(--glass-bg);` and `backdrop-filter: blur(4px);` to container elements.
- Use thin borders `border: 1px solid var(--glass-border);`.

### Buttons & Interactive Elements
- Text should glow on hover (`text-shadow: 0 0 8px var(--color-silkscreen);`).
- Borders and backgrounds should transition smoothly.
- Example class combination (via Tailwind + Custom): `border border-[#00ff66]/30 text-[#00ff66] hover:bg-[#00ff66]/10 transition-all`.

### CRT Scanline Overlay
The `.scanlines` class provides the retro CRT effect. It uses a repeating linear gradient over the entire viewport with `pointer-events-none` to allow clicking through the overlay.

## Best Practices
1. **Avoid inline styles**: Keep logic in TypeScript and presentation in CSS/Tailwind.
2. **Use Tailwind for layout**: Margins, padding, flexbox, and grid should be handled via Tailwind classes in the HTML.
3. **Use CSS for custom effects**: Complex shadows, custom animations, glowing text, and highly specific retro aesthetics should be maintained in `style.css`.