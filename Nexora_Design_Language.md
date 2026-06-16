# NEXORA — Brand Identity Playbook v2.0
Codifying "Neo-Corpo Engineering" & "Medical Cybernetics" for Critical Systems

## 1. Strategic Positioning & Brand Archetype

Nexora (formerly Micromed) is an elite, high-performance engineering contractor specializing in professional Research & Development (R&D), hardware-software co-design, and clinical functional safety. We design and program the safety-critical mainboards, multi-layer control firmware, and low-level instrumentation blocks inside high-stakes laboratory and medical hardware.

Founded in 1382 Shamsi (2003/2004 AD), the company boasts over two decades of technical resilience, successfully navigating the transitions from legacy 8-bit microcontrollers to 32-bit ARM Cortex architectures, and from traditional C/C++ to bare-metal Embedded Rust.

```
                  ┌─────────────────────────────────────────┐
                  │        THE "DUAL-CORE" ADVANTAGE        │
                  └─────────────────────────────────────────┘
                                       │
                 ┌─────────────────────┴─────────────────────┐
                 ▼                                           ▼
      [ MONIB MOKHTARI ] (CEO)                    [ FAEZ BARGHASA ] (CTO)
• Physical Realm, Hardware, EMC               • Digital Ecosystem, Cloud, HMI
• "If the compiler agrees, the                • Actix-web, SurrealDB, React/Vite,
  hardware will agree."                         Unified Systems Integration.
```

### 1.1 Brand Personality Attributes
* **Technical & Methodical**: Our layouts look like the physical hardware schematics and memory maps we design. Documentation is king.
* **Trustworthy & Quietly Confident**: Backed by 20+ years of hardware-software co-design; we let compiler-enforced safety guarantees verify our work. We do not boast; we demonstrate.
* **Modern & Professional**: We combine standard corporate order ("Corpo") with cutting-edge telemetry and data density ("Cyberpunk"). The result is "Medical Cybernetics".

### 1.2 Strict Brand Exclusions ("What We Are Not")
* **Not a Startup**: No flashy SaaS landing templates, playful vector graphics, soft drop-shadows, or colorful marketing jargon.
* **Not a "Hacker" / "Gamer" Brand**: No glowing neon-green terminal fonts over a completely black backdrop. We maintain a clinical corporate standard.
* **Not a Medical Device Manufacturer**: We do not build consumer end-products; we develop the safe processing brains inside them.

### 1.3 Tone of Voice
* **Precise and Clinical**: Use accurate engineering terminology (e.g., "RTOS latency," "fail-safe state," "SPI bus throughput").
* **Direct and Unapologetic**: Remove filler words. State facts, metrics, and outcomes.

## 2. The Geometry & Trace System (Core Blueprint)

The geometry system is the core visual identifier of the Nexora brand. It treats graphic design elements as physical copper traces routed on a multi-layer PCB, now rendered dynamically via the `<PCBBackground />` React component or static vector assets.

```
       [O] Node (Via)
        │
        └─── 180° Horizontal
             ╲
              ╲  135° Mitered Bend
               ╲
                └─── 0° Start/Terminus Node [O]
```

### Rule 1: Strict 135° Angle Routing (Zero Exceptions)
Arbitrary angles, loose diagonals, and organic, flowing curves are completely banned. All graphical line routing must adhere to strict trace-routing constraints:
* **Allowed Angles**: Only $0^\circ$, $45^\circ$, $135^\circ$, and $180^\circ$.
* **Zero Right Angles**: Visual layouts must never use raw $90^\circ$ corners for background traces or structural icons. Every direction change must use an elegant, mitered chamfer transitioning through a $45^\circ$ or $135^\circ$ bend.

### Rule 2: Explicit Trace Closure
Every design trace line must start from a circular node and end at a circular node:
$$\text{Node} \ \ (\circ) \xrightarrow{\hspace{1cm}} \text{Trace Path} \xrightarrow{\hspace{1cm}} \text{Node} \ \ (\circ)$$
Background traces must never end in an arbitrary visual vacuum. This implies a closed-loop system, representing verified circuitry.

### Rule 3: The Via Node Rule
Nodes are represented as nested concentric circles, mimicking "vias" on a physical PCB:
$$\text{Outer Radius } (R) = 8\text{px}, \ \ \text{Inner Radius } (r) = 3\text{px}$$
These elements are functional, utilized as bullets, active status indicators, timeline markers, and section anchors.

## 3. Logo & Lockup System (Hybrid Construction)

The primary signature for Nexora is the Logomark-Wordmark Hybrid Lockup. This composition represents intelligence flowing smoothly through trusted, engineered pathways.

```
     [ ABSTRACT LOGOMARK ]      │      [ WORDMARK ASSEMBLY ]
                                │
          ○   ○                 │      nexora
          │╲  │  ○              │      ───────────────────────────
          │ ╲ │  │              │      EMBEDDED MEDICAL SYSTEMS
          ○  ╲│  ○              │
              ○                 │
```

### 3.1 The Logomark (Clean Trace Composition)
The logomark is an abstract vector composed of five circular via nodes interconnected by three trace lines routing vertically with strict $135^\circ$ mitered bends.
* **Stroke Weight**: The stroke weight of the traces scales proportionally with the diameter of the via nodes, maintaining an exact ratio of:
   $$\text{Stroke Weight} = \frac{1}{3} \times \text{Via Outer Diameter}$$

### 3.2 The Separation Rule & Clear Space
* **Divider**: A thin, low-contrast vertical line separator in `Border` (#1A2830) is positioned exactly halfway between the logomark and the wordmark assembly. The vertical height of the divider line must match the maximum vertical bounds of the logomark.
* **Clear Space (Protection Zone)**: The logo must be surrounded by a minimum clear space equal to the height of the wordmark's "n". No other graphic elements may intrude into this zone.

### 3.3 The Wordmark Assembly
The right side of the hybrid lockup consists of two typographical elements divided by a clean horizontal rule:
* **The Brand Wordmark**: `nexora` set in lowercase monospace (IBM Plex Mono). The prefix "nex" is styled in sterile clinical off-white (#E8F4F0), while the suffix "ora" is isolated in vibrant Signal Green (#00E5A0).
* **The Anchor Rule**: A solid, low-contrast horizontal divider line positioned directly below the wordmark.
* **The Subtitle**: `EMBEDDED MEDICAL SYSTEMS` set in an all-caps, highly tracked sans-serif typeface (Inter). The character spacing must extend to align precisely with the outer edges of the wordmark above it.

## 4. Visual Assets & Typography System

The typographical ecosystem is structured as a dual-layer system. It establishes a visual boundary between technical system specifications and corporate narrative text.

### Font Configurations
```
┌────────────────────────────────────────────────────────────────────────┐
│ DISPLAY / DATA LAYERS (IBM Plex Mono)                                  │
├────────────────────────────────────────────────────────────────────────┤
│ • Used for logos, headers, <TechBox /> titles, and code readouts       │
│ • Vibe: Exact, Mathematical, Rigorous                                  │
└────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────┐
│ CORPORATE / NARRATIVE LAYERS (Inter / Vazirmatn for RTL)               │
├────────────────────────────────────────────────────────────────────────┤
│ • Used for primary body paragraphs, datasheets, proposals, legal docs  │
│ • Vibe: Clean, Highly Legible, Clinical, Corporate                     │
└────────────────────────────────────────────────────────────────────────┘
```

### Type Scale Rules (Snapping to the 8px Grid)
All typography sizes, margins, line heights, and container padding must snap strictly to an 8px base grid system (multiples of $8$, $16$, $24$, $32$, $64$, or $128\text{px}$). Text rendering should be `antialiased` across all modern browsers.

| Element | Font Face | Weight | Size | Purpose |
|---------|-----------|--------|------|---------|
| **H1** | IBM Plex Mono | Bold | $72\text{px}$ | High-level system headers / Title pages |
| **H2** | IBM Plex Mono | Semibold | $48\text{px}$ | Major section headings |
| **H3** | IBM Plex Mono | Semibold | $32\text{px}$ | Subsections & card titles |
| **Label** | IBM Plex Mono | Medium | $12\text{px}$ | UI element labels, axis markers |
| **Body** | Inter / Vazirmatn | Regular | $16\text{px}$ | Narrative documentation and paragraphs |

## 5. Color System: Neon on Sterile Slate

The Nexora color system balances terminal-style developer spaces with clinical-grade laboratories.

```
       DARK CORE (95% Canvas Area)                    SIGNAL INDICATORS
┌───────────────────────────────────┐      ┌───────────────────────────────────┐
│ Void (Bg)      #0A0E14            │      │ Signal (Primary) #00E5A0          │
│ Surface (Card) #0D1620            │      │ Signal Dim (Sec) #008C5F          │
│ Border         #1A2830            │      │ Foreground (Text) #E8F4F0          │
└───────────────────────────────────┘      └───────────────────────────────────┘
```

### Core Token Mappings
* **Void (#0A0E14)**: The primary background color. Establishes the deep dark-mode console environment.
* **Surface (#0D1620)**: Modular container background. Creates clear visual structure for cards and content boxes.
* **Border (#1A2830)**: Used for strict layout division. Defines boundaries without adding visual clutter.
* **Signal (#00E5A0)**: The high-emission "Bio-Green." It acts as the primary brand neon color representing nominal operation, live power, and successful compiled code.
* **Signal Dim (#008C5F)**: Used for interactive states, hover effects, and primary text highlights to avoid over-saturating the display.
* **Foreground (#E8F4F0)**: Clinical off-white text. A sterile white with a microscopic green-blue tint to reduce eye strain.

### Industrial Semantic Colors (Status Indicators)
* **Info / Telemetry (#5BA3E8)**: Used for standard data readouts, connection states, and non-critical system updates.
* **Warning / Halt (#FF8C42)**: Represents compiler warnings, thermal threshold proximity, or paused mechanical states.
* **Critical / Fault (#E84545)**: Reserved explicitly for kernel panics, emergency stops (E-STOP), physical hardware faults, and error logs.

## 6. Systematic Silkscreen Nomenclature & Iconography

All physical hardware boards produced by Nexora must feature systematic nomenclature printed directly in white ink on the board substrate and seamlessly matched in the UI metadata. 

### Global Prefix Rule
The standardized prefix across all hardware and software registries is now **NEX-**.

* **Laminar Hood Controllers**: `NEX-LMH-CTL-[REV]`
* **Lab Mixer Rotator Boards**: `NEX-MXR-CTL-[REV]` (AC Motor Controllers)
* **CO₂ Incubator Controllers**: `NEX-INC-CTL-[REV]`
* **Autoclave Controllers**: `NEX-ATC-CTL-[REV]`
* **Bain-Marie Controllers**: `NEX-BMR-CTL-[REV]`

### UI Matching (Digital Twins)
When an interface controls a specific hardware module, the UI must display the exact hardware nomenclature in a `TechBox` silkscreen header. For instance, an autoclave's active diagnostic window must be labeled `NEX-ATC-CTL-REV3.2 // DIAGNOSTICS`.

### Iconography Rules
* **Grid**: All icons must be designed on a $24\times24\text{px}$ grid.
* **Stroke**: 1.5px to 2px consistent stroke weight.
* **Style**: Linear, sharp, mimicking circuit schematics (e.g., open circuits for toggle switches, diode symbols for data flow).