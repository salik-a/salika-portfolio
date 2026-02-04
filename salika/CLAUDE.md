# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Alper Salik, a React-Native Developer. Built with React, TypeScript, and Vite.

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production (runs TypeScript compiler + Vite build)
npm run build

# Lint code (TypeScript and TSX files)
npm run lint

# Preview production build locally
npm run preview
```

## Architecture

### Component Structure

The app follows a single-page layout with six main sections rendered in `App.tsx`:
1. Navbar - Navigation menu
2. Hero - Landing section with profile, CV download, and social links
3. About - About section
4. Experience - Work history and skills display
5. Projects - Portfolio projects showcase
6. Contact - Contact information

All components are exported through a barrel export in `src/components/index.ts`.

### Data Management

Portfolio content is data-driven using JSON files:
- `src/components/Experience/skills.json` - Skills list with icons
- `src/components/Experience/history.json` - Work experience entries
- `src/components/Projects/projects.json` - Project details with skills, links, and images

Components map over these JSON arrays to render content dynamically.

### Asset Handling

Assets are stored in `src/assets/` and accessed via the `getImageUrl()` utility:
```typescript
getImageUrl("path/to/asset.png") // Returns proper URL for Vite asset
```

This utility uses Vite's `import.meta.url` for proper asset resolution in both dev and production.

### Styling

Each component has its own CSS Module (e.g., `Hero.module.css`). Styles are imported as objects and applied via `className={styles.propertyName}`.

### CV Download Feature

The Hero component includes a programmatic download function that creates a temporary anchor element to trigger CV download from the assets folder.
