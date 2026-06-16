# 📟 NEXORA Interface

A retro-futuristic UI simulating a mission-critical embedded systems hardware firm's interface, built with React and Tailwind CSS.

This project is a complete rewrite of the original vanilla TypeScript implementation, now using a modern React frontend stack.

---

## 🛠 Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

---

## 📡 Core Features

- **Animated PCB Background**: A dynamic, animated background that simulates a printed circuit board.
- **Simulated Boot Sequence**: A startup screen that mimics a firmware boot process.
- **Multiple Views**: The application is split into several views:
    - `GatewayView`: The main landing page.
    - `IdentityView`: Displays identity information.
    - `DirectoryView`: A directory of personnel or assets.
    - `UplinkView`: A form for data submission.
- **Multi-Language Support**: Supports English and Farsi (Persian), with dynamic layout adjustments for RTL and LTR languages.
- **Audio Feedback**: Provides audio cues for user interactions.

---

## 📂 Project Structure

The project is organized into the following directory structure:

```
nexora/
├── src/
│   ├── components/      # Reusable React components
│   │   ├── HeaderNav.tsx
│   │   ├── PCBBackground.tsx
│   │   └── Views.tsx
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles and Tailwind directives
├── public/              # Static assets
├── package.json         # Project dependencies and scripts
└── vite.config.ts       # Vite configuration
```

---

## 🚀 Getting Started

Ensure you have [Node.js](https://nodejs.org/) installed.

### 1. Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### 2. Development

Start the local development server:

```bash
npm run dev
```

### 3. Production Build

Build the application for production:

```bash
npm run build
```

The output will be in the `dist` directory.