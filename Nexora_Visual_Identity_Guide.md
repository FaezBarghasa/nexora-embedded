# NEXORA — UI/UX Design & React Component Playbook (v2.0)
Code Name: Neo-Corpo Engineering

This document is the official interface design playbook for Nexora. It is compiled specifically for UI/UX designers and front-end engineers utilizing our React/Vite/Tailwind stack to guarantee consistent brand application.

## 1. Grid, Layout Math & Tailwind Configuration

Everything in the Nexora design language snaps to a strict $8\text{px}$ Base Grid System. Complex technical dashboards scale across screens without subpixel interpolation issues using Tailwind's spacing scale.

$$S(n) = 8n \quad (\text{where } n \in \mathbb{N}^+)$$

### 1.1 Layout Geometry Rules
* **Container Alignment**: All layout cards (e.g., `<TechBox />`) must be defined using a rigid structure. Use sharp corners or a minimal border-radius: `rounded-sm` (2px). No fully rounded elements except nodes/vias.
* **Visual Dividers**: All structural separators must be a solid, single-pixel line set to the `Border` token (`border-[#1A2830]`).
* **Padding & Margins**: Inner paddings generally use $16\text{px}$ (`p-4`) or $24\text{px}$ (`p-6`). Margins between discrete functional blocks use $32\text{px}$ (`m-8`).

### 1.3 Typography & Font Stacks
Nexora utilizes a dual-font strategy: `IBM Plex Mono` for all code, data, and technical readouts, and `Inter` for general UI elements. This reinforces the distinction between system output and user interaction. All text should be `text-foreground` by default.


### 1.2 Tailwind Theme Configuration (vite.config.ts / tailwind.config.js spec)
Ensure your theme extends these exact tokens:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        void: '#0A0E14',
        surface: '#0D1620',
        border: '#1A2830',
        signal: '#00E5A0',
        signalDim: '#008C5F',
        foreground: '#E8F4F0',
        info: '#5BA3E8',
        warning: '#FF8C42',
        critical: '#E84545',
        muted: '#3A5048'
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'], // For general UI elements
      },
      boxShadow: {
        'glow-signal': '0 0 12px 0 rgba(0, 229, 160, 0.3)',
        'glow-critical': '0 0 12px 0 rgba(232, 69, 69, 0.3)',
      },
      transitionTimingFunction: {
        'mechanic': 'cubic-bezier(0.16, 1, 0.3, 1)', // Snappy, machine-like
      }
    }
  }
}
```

## 2. React Component Architecture Guidelines

With the migration to a modern React architecture, visual consistency is maintained at the component level. Avoid monolithic pages; assemble UIs from discrete, testable systems.

### 2.1 `<PCBBackground />` Component
* **Purpose**: Renders the global trace network background canvas.
* **Rule**: Must strictly calculate $135^\circ$ mitered bends for all procedural bus definitions. $90^\circ$ corners are explicitly forbidden in the rendering loop. Trace opacity must remain low (15-25%) to preserve foreground contrast.
* **Concentric Vias**: Render via rings at the start and end of all generated trace points:
   $$\text{Outer Radius } (R) = 8\text{px}, \ \text{Inner Core Radius } (r) = 3\text{px}, \ \text{Stroke } (W) = 3.5\text{px}$$
* **Performance**: Should utilize HTML Canvas or WebGL if rendering more than 50 traces to prevent DOM bloat.

### 2.2 `<TechBox />` (Card Modules)
* **Purpose**: The standard `Surface` (#0D1620) container for all UI modules, representing isolated physical hardware blocks (like memory banks or ICs).
* **Styling**: Must feature a $1\text{px}$ `Border` (#1A2830).
* **Silkscreen Headers**: Include absolute-positioned tracking text in the top-right corner to simulate PCB metadata (e.g., `DESIGNATOR // U2 // CORE`). Rendered in `text-[10px]` or `text-xs` using `text-muted`.

### 2.3 `<TelemetryChart />` & `<DataGrid />` (Data Dense Views)
* **Purpose**: Displaying real-time sensor streams and tabular data (e.g., thermal mapping, motor RPM).
* **Styling**: 
  - Grids must use visible $1\text{px}$ `border-border` lines for both rows and columns (spreadsheet aesthetic). 
  - Charts should use SVG or Canvas, rendering step-lines instead of smooth splines to reinforce digital accuracy.

### 2.4 `<HologramViewer />` Component
* **Purpose**: 3D volumetric projection of Nexora flagships (Bain-Marie, Mixers, ESP32 transceivers).
* **Styling**: Wireframes must render using the `Signal` color token (#00E5A0). Ensure structural targeting rings are rendered at a low opacity (`rgba(0, 229, 160, 0.03)`). Anti-aliasing should be enabled.

### 2.5 `<HeaderNav />` Component
* **Purpose**: The master control unit and global navigation.
* **Styling**: Must house the Nexora Hybrid Lockup SVG and display system bus diagnostics (e.g., `SYS_BUS_LINK`). Use active pulsing node animations for live system states.

## 3. Interactive Components & Micro-Interactions

Interactive states must feel fast, digital, and reliable. There should be no soft, organic, sluggish transitions.

```
[ DEFAULT CONTAINER ]  ────►  [ HOVER / FOCUS STATE ]  ────►  [ ACTIVE EXECUTION ]
border-border                 border-signal                   border-signal
Glow: None                    Glow: Soft dim green            Pulse wave animation
```

### 3.1 Interactive States Table

| UI Element | Default Tailwind Classes | Hover / Focus Classes |
|------------|--------------------------|-----------------------|
| **Primary Buttons** | `bg-signal/10 border-signalDim text-signal` | `hover:bg-signal hover:text-void transition-colors duration-200` |
| **Data Tabs** | `border-border bg-surface/30 text-muted` | `hover:border-signal/50 hover:bg-signal/5 text-foreground` |
| **Form Inputs** | `bg-void border-border text-foreground` | `focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal` |
| **Danger Actions** | `bg-critical/10 border-critical/50 text-critical` | `hover:bg-critical hover:text-white hover:shadow-glow-critical` |

### 3.2 Micro-Animations & Timing Curves
* **Avoid bouncy spring dynamics or slow easing functions.** Industrial systems require immediate feedback.
* **Duration Constant**: Keep all transition durations snappy (`duration-150` to `duration-200`).
* **Visual Micro-Interactions**:
  * **The Pulse Effect**: Glowing state indicators (via `animate-pulse` or custom keyframes) must oscillate to indicate nominal RTOS or hardware states.
  * **Trace Propagation**: Ensure the `<PCBBackground />` component features a glowing pulse propagating from the start node to the end node along the $135^\circ$ paths upon user actions like form submission or data refresh.
  * **Glitch/Typing Text**: Terminal prompts or data load states should render text sequentially or with a brief sub-millisecond glitch effect to emphasize the computational nature.

## 4. Imagery & Photography Guidelines

Our visual language thrives on raw technical execution. We strictly reject standard medical or corporate stock clichés.

```
    AVOID (Stock Clichés)                 PREFER (R&D Reality)
┌──────────────────────────────┐     ┌──────────────────────────────┐
│ ❌ Doctors smiling at camera │     │ ✔ Microchip macro structures │
│ ❌ Clean, empty hospital lab │     │ ✔ Oscilloscopes & wave forms │
│ ❌ Blue-glowing generic DNAs │     │ ✔ Real thermal-map testing   │
└──────────────────────────────┘     └──────────────────────────────┘
```

### 4.1 Acceptable Content Categories
* **Hardware Macros**: Close-up photography of microchips (STM32H7, ESP32, RP2040), solder points, resistor chains, and copper-plated traces. Black and white or green-tinted filters are encouraged.
* **Instrumentation Views**: Real-world laboratory diagnostic feeds, logic analyzer traces, digital multimeters, thermal heat maps, and oscilloscopes displaying true electrical outputs.
* **Workstation Environments**: Developer IDE setups displaying Rust compilation outputs (`cargo build --release`), firmware debug loops, and active circuit debugging blocks.
* **CAD/CAM Renderings**: Clean, high-contrast renders of enclosures or PCB layouts exported directly from Altium or KiCad, overlaid with vector UI elements.

## 5. Accessibility (a11y) & HMI Ergonomics
* **Contrast Ratios**: All text against `void` or `surface` must meet at least AA WCAG standards. The `muted` token (#3A5048) should only be used for non-essential decorative text.
* **Touch Targets (HMI)**: If the UI is deployed on a physical touch screen (e.g., 7" Lab Display), interactive targets must have a minimum physical size corresponding to 44x44 CSS pixels.
* **Visual Feedback for Gloved Users**: Interfaces meant for lab environments must have pronounced, high-contrast focus states (`focus:ring-2 focus:ring-signal`) as operators may use resistive touch screens or thick nitrile gloves.