# System Architecture

The Nexora application is built as a highly modularized Single Page Application (SPA) using TypeScript, Vite, and Vanilla CSS. The architecture separates concerns into discrete modules, ensuring that state management, UI rendering, 3D graphics, and side effects are isolated and maintainable.

## Core Modules

### 1. `main.ts` - The Entry Point and Orchestrator
This file initializes the application. It maps UI elements to their corresponding handler functions, binds global event listeners (like window resizing for canvases), and bootstraps the initial state of the application. 

### 2. `state.ts` - State Management
Acts as a centralized store for application data. It holds references to:
- The currently selected view/route.
- The active language/locale.
- The current 3D model being displayed.
Any cross-module data requirements flow through state accessors and mutators defined here.

### 3. `router.ts` - View Controller
Manages SPA navigation. It handles DOM manipulation to show or hide the various application sections (e.g., Hologram view, Telemetry form, Team view) and triggers corresponding transition sounds via the `audio.ts` module.

### 4. `hologram.ts` & `hologram-models.ts` - 3D Rendering Engine
A custom, lightweight 3D rendering pipeline built directly on the HTML5 `<canvas>` 2D context.
- **`hologram-models.ts`**: Contains the static 3D coordinate geometry (vertices and edges) for components.
- **`hologram.ts`**: Handles orthographic projection, matrix rotation, momentum-based drag controls, and the actual drawing loop.

### 5. `pcb.ts` - Procedural Background Animator
Generates the animated PCB substrate. It independently manages its own canvas context to draw copper traces, solder pads, vias, and the dynamic "electron" pulses moving along the circuits.

### 6. `audio.ts` - Sound Synthesis
Encapsulates Web Audio API logic. It defines the oscillators, gain nodes, and frequency ramps needed to produce authentic retro-hardware beeps and UI feedback sounds.

### 7. `datasheet.ts` & `form.ts` - Data Handling
- **`datasheet.ts`**: Responsible for querying and populating the UI with technical specifications from `resources.json`.
- **`form.ts`**: Manages the "Secure Telemetry Uplink" form, handling data collection, fake encryption animation logs, and form submission states.

### 8. `i18n.ts` - Internationalization
Handles language switching between English and Persian (Farsi). It dynamically updates the DOM elements with translations from `resources.json` and adjusts the `dir` attribute for proper LTR/RTL rendering.

### 9. `startup.ts` - Boot Sequence
Contains the logic for the initial "terminal bootloader" sequence, simulating a hardware startup before handing control over to the main application interface.