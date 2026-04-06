# DT Mindmapper

---

### Overview

A visual node editor and mind-mapping tool built with React and React Flow. This project focuses on seamless UI/UX, state management with Zustand, and a clean "Telegram-inspired" design system.

### Currently implemented

- **Dynamic Node Management**: Support for Text, Image, and Shape nodes with real-time updates.

### 🚀 Roadmap

- [x] **Core Flow Engine**: Integration with React Flow and custom node types.
- [x] **Global State**: Centralized management using Zustand with shallow-render optimizations.
- [x] **Node Configuration**: Advanced Dialog-based editor for properties (text, colors, images).
- [x] **Theming**: Unified "TG-Style" design system.
- [ ] **Persistence**: LocalStorage and Cloud sync using Zustand persist middleware.
- [ ] **Advanced Connectivity**: Custom edge types with animated paths and logic-based routing.
- [ ] **Auto-Layout**: Integration with dagre or elkjs for automatic tree organization.
- [ ] **Collaborative Editing**: Real-time multi-user support via WebSockets/SignalR.
- [ ] **Templates**: Pre-defined node structures for common workflows (Workflows, Brainstorming).

### Tech Stack

- **Framework**: React 18+ (Vite)
- **Flow Engine**: React Flow
- **Other**: Zustand, Tailwind, Lucide React

### Installation & Setup

1. **Clone the repo**: `git clone https://github.com/dmitrii1011sg/dertopf-mindmapper.git`
2. **Install dependencies**: `pnpm install`
3. **Run the app**: `pnpm dev`
