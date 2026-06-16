# Maintenance Guide

This document outlines common tasks for updating and maintaining the Nexora application without needing to restructure the core logic.

## 1. Updating Texts and Translations
All localized strings are stored in `resources.json`.
To add or modify text:
1. Open `resources.json`.
2. Locate the relevant key under the `"en"` (English) or `"fa"` (Persian) object.
3. Update the value. Ensure valid JSON syntax (no trailing commas, properly escaped quotes).
4. The application dynamically loads these strings; no recompilation of TypeScript logic is needed for text changes, though Vite will automatically hot-reload the UI.

## 2. Adding a New 3D Component Model
The 3D models in the "Hologram Explorer" are statically defined via coordinate geometry.
1. Open `src/hologram-models.ts`.
2. Define a new model object implementing the `HologramModel` interface:
   ```typescript
   export const MY_NEW_MODEL: HologramModel = {
     vertices: [
       { x: -1, y: -1, z: -1 },
       // ... additional 3D coordinates
     ],
     edges: [
       [0, 1], // Connects vertex index 0 to vertex index 1
       // ... additional edges
     ]
   };
   ```
3. Export the new model.
4. If this model should be selectable via the UI, ensure a button is added in `index.html` (or generated dynamically) that dispatches an event to update the state in `state.ts`.

## 3. Updating Component Datasheets
Datasheets displayed on the left side of the hologram view are loaded from `resources.json`.
1. Open `resources.json`.
2. Navigate to the `"datasheets"` object.
3. Add or modify entries. The key should match the `data-model` attribute of the button used to select the component.
   ```json
   "new_component": {
     "title": "NEW-COMP-X1",
     "desc": "Description of the component.",
     "specs": {
       "Voltage": "3.3V DC",
       "Interface": "I2C/SPI"
     }
   }
   ```

## 4. Expanding the Team / Metastate Blueprint
The team members shown in the "Metastate Blueprint Interrogator" are defined in `resources.json` under `"team"`.
1. Open `resources.json`.
2. Add a new object to the `"team"` array.
   ```json
   {
     "id": "new_member_id",
     "name": "Jane Doe",
     "role": "Systems Engineer",
     "focus": ["Embedded C", "RTOS"],
     "status": "ACTIVE"
   }
   ```
3. The UI in the Team view will need corresponding HTML elements in `index.html` to represent the node, and it will pull data based on the `data-member` attribute matching the `id` defined above.

## 5. Adding New Sounds
1. Obtain or synthesize your desired retro sound parameters (frequency, waveform, duration).
2. Open `src/audio.ts`.
3. Create a new function utilizing the `audioCtx`.
4. Export the function and trigger it from the relevant event listener in `main.ts` or `router.ts`.