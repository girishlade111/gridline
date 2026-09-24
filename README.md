# GRIDLINE — A Journal of Urban Form

**GRIDLINE** is a sleek, editorial-style digital magazine/blog about cities, streets, buildings, and the decisions that shape them. It is a front-end-only single-page application built with **Vite, React 18, TypeScript, and Tailwind CSS**, designed around a concrete-and-blueprint visual language: oversized display typography, mono metadata labels, a signature "signal orange" accent, and a subtle city-grid background pattern.

Current issue in the app: **No. 31 — Summer 2026 — Proximity**.

---

## Table of contents

- [Overview](#overview)
- [Tech stack](#tech-stack)
- [Features](#features)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Client-side routing](#client-side-routing)
- [Content model](#content-model)
- [Design system](#design-system)
- [Accessibility](#accessibility)
- [Git / GitHub notes](#git--github-notes)
- [Deployment](#deployment)

---

## Overview

The app ships a complete magazine experience backed by a typed static content layer (`src/data/magazine.ts`):

- A **home page** with a full-bleed lead story, a features grid, and a photo-essay strip
- **Long-form article pages** with hero imagery, drop cap, pull quotes, and "continue reading" links
- A **photo essays** index and frame-by-frame essay viewers
- An **issue archive** with year filtering and expandable tables of contents
- A sticky masthead header (desktop nav + mobile menu) and a full site footer

There is no backend and no build-time CMS — all editorial content is TypeScript data that renders instantly.

---

## Tech stack

| Layer        | Technology                                                                 |
| ------------ | -------------------------------------------------------------------------- |
| Build tool   | [Vite 5](https://vitejs.dev/)                                              |
| UI library   | React 18 + ReactDOM                                                        |
| Language     | TypeScript 5 (strict project via `tsconfig.app.json`)                      |
| Styling      | Tailwind CSS 3 + PostCSS + Autoprefixer                                    |
| Icons        | [lucide-react](https://lucide.dev/)                                        |
| Data / API   | `@supabase/supabase-js` is installed as a dependency for future backend use (currently unused by the UI) |
| Linting      | ESLint 9 (`typescript-eslint`, `eslint-plugin-react-hooks`, `react-refresh`) |
| Fonts        | Google Fonts — Archivo (display), Newsreader (body serif), IBM Plex Mono   |
| Images       | Hotlinked from [Pexels](https://www.pexels.com/)                           |

---

## Features

- **Editorial home page** — issue kicker, oversized lead headline, dek, `PlotStamp` metadata badge, features card grid, and photo-essay section on an inverted (ink) background.
- **Article reader** (`ArticleView`) — parallax-style hero image, kicker/title/dek, plot stamp, byline with read time, structured body blocks (`p`, `h2`, `pull` quote), CSS drop cap on the first paragraph, filing line, and related-articles grid. Unknown ids render a graceful "not found" state.
- **Photo essays** (`EssaysView`) — list index plus a dark, full-frame sequence viewer with per-frame captions, `FR-01`-style frame numbers, locations, and lazy-loaded images.
- **Archive** (`ArchiveView`) — 10 back issues (No. 22–31), filterable by year, with expandable tables of contents per issue (`aria-expanded` toggles).
- **Client-side routing** — a lightweight typed `Route` union in `src/App.tsx` (no router dependency); navigation scrolls to top automatically.
- **Responsive navigation** — sticky header with desktop nav, active-link underline, and a hamburger menu on small screens.
- **Motion with care** — `.reveal` entrance animations with staggered `animation-delay`, full `prefers-reduced-motion` support.
- **Design details** — city-grid background utility, blueprint plot stamps, signal-orange accents, focus-visible outlines, styled text selection.

---

## Getting started

### Prerequisites

- **Node.js** 18+ (20 LTS recommended)
- **npm** 9+ (or pnpm/yarn — a `package-lock.json` is committed for npm)

### Installation

```bash
git clone <your-repo-url>
cd <repo-directory>

npm install        # installs dependencies (node_modules is gitignored)
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with HMR (default: `http://localhost:5173`).

### Production build

```bash
npm run build      # type-aware bundling into dist/
npm run preview    # serves the production build locally
```

> `dist/` is ignored by git. Deploy the output of `npm run build` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

---

## Available scripts

| Script              | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `npm run dev`       | Start Vite dev server with hot module replacement        |
| `npm run build`     | Build the production bundle to `dist/`                   |
| `npm run preview`   | Preview the production build locally                     |
| `npm run lint`      | Run ESLint across the project                            |
| `npm run typecheck` | Run `tsc --noEmit` against `tsconfig.app.json`           |

---

## Project structure

```
.
├── index.html                 # HTML entry — page title, meta, Google Fonts
├── package.json               # Scripts and dependencies
├── vite.config.ts             # Vite + React plugin config
├── tailwind.config.js         # Design tokens (colors, fonts) + content paths
├── postcss.config.js          # Tailwind + Autoprefixer
├── eslint.config.js           # Flat ESLint config (TS + React hooks)
├── tsconfig.json              # Project references
├── tsconfig.app.json          # App (browser) TS config
├── tsconfig.node.json         # Node/tooling TS config
└── src/
    ├── main.tsx               # React root mount
    ├── App.tsx                # Route union + view switch + layout shell
    ├── index.css              # Tailwind layers, utilities, reveal animation
    ├── vite-env.d.ts          # Vite client types
    ├── components/
    │   ├── Header.tsx         # Sticky masthead, nav, mobile menu
    │   ├── Footer.tsx         # Masthead/sections footer
    │   └── PlotStamp.tsx      # Mono metadata badge (plot / district / coords)
    ├── views/
    │   ├── Home.tsx           # Lead story + features + photo essays
    │   ├── ArticleView.tsx    # Long-form article reader
    │   ├── EssaysView.tsx     # Photo essay index + detail (same component)
    │   └── ArchiveView.tsx    # Issue archive with year filter
    └── data/
        └── magazine.ts        # Typed editorial content (articles, essays, issues)
```

---

## Client-side routing

Routing is handled by a discriminated union in `src/App.tsx` — no `react-router` required:

| Route object                          | View rendered   | Purpose                     |
| ------------------------------------- | --------------- | --------------------------- |
| `{ name: 'home' }`                    | `Home`          | Current issue / features    |
| `{ name: 'article', id }`             | `ArticleView`   | Single article by id        |
| `{ name: 'essays' }`                  | `EssaysView`    | Photo essay index           |
| `{ name: 'essay', id }`               | `EssaysView`    | Single photo essay detail   |
| `{ name: 'archive' }`                 | `ArchiveView`   | Back-issue archive          |

Navigation flows through an `onNavigate(route)` callback passed from `App` into `Header`, views, and `Footer`. The active nav item is derived in `Header.isActive()`.

---

## Content model

All editorial data lives in `src/data/magazine.ts` with exported TypeScript interfaces:

```ts
interface Article {
  id: string; slug: string; kicker: string; title: string; dek: string;
  author: string; role: string; date: string; readMinutes: number;
  district: string; coordinates: string; plot: string;
  image: string; imageCaption: string;
  body: { type: 'p' | 'h2' | 'pull'; text: string }[];
}

interface PhotoEssay {
  id: string; title: string; photographer: string; dek: string;
  date: string; district: string; cover: string;
  frames: { image: string; caption: string; location: string }[];
}

interface ArchiveIssue {
  number: number; year: number; season: string; theme: string;
  summary: string; cover: string; contents: string[];
}
```

Current seed content: **4 feature articles**, **3 photo essays**, and **10 archive issues**. To add content, append objects to the exported arrays — the views pick them up automatically.

---

## Design system

Defined in `tailwind.config.js` and used throughout via Tailwind utilities:

**Colors**

| Token           | Value     | Use                                      |
| --------------- | --------- | ---------------------------------------- |
| `concrete-50…800` | Neutral grays (`#F2F3F0` → `#2C2E2A`) | Surfaces & text |
| `ink`           | `#16181A` | Dark sections, buttons, headlines        |
| `signal`        | `#E8490F` | Accent / interactive highlight (orange)  |
| `signal-dark`   | `#C43C0A` | Accent hover state                       |
| `blueprint`     | `#1F45C9` | Secondary blueprint accent               |

**Typography**

| Token           | Font          | Role                          |
| --------------- | ------------- | ----------------------------- |
| `font-display`  | Archivo       | Headlines, UI display text    |
| `font-body`     | Newsreader    | Body copy (serif, editorial)  |
| `font-mono`     | IBM Plex Mono | Kickers, labels, metadata     |

**Utilities** (in `src/index.css`)

- `.city-grid` — 72px blueprint grid background
- `.display-tight` — tight display leading/tracking
- `.reveal` — one-shot entrance animation (disabled under reduced motion)

---

## Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `footer`, `article`, `figure/figcaption`
- `aria-label` on navs and icon-only controls; `aria-expanded` on archive toggles
- Visible `:focus-visible` outline in signal orange
- Keyboard-operable interactive elements (all navigation is `<button>`)
- `prefers-reduced-motion` disables entrance animations, smooth scroll, and transitions
- Lazy loading on below-the-fold images

---

## Git / GitHub notes

- The repository is **public** and hosted on GitHub (created/pushed with the [GitHub CLI `gh`](https://cli.github.com/)).
- `.gitignore` excludes **`node_modules/`**, `dist/`, logs, editor files, and `.env` — never commit dependencies or secrets.
- Default branch: **`main`**.
- Useful commands:

```bash
git add .
git commit -m "Describe your change"
git push
```

---

## Deployment

The project builds to static files in `dist/`. Any static host works:

1. `npm install && npm run build`
2. Publish the `dist/` directory
3. For SPAs hosted with history-style URLs, a rewrite to `index.html` may be required (this app uses in-memory routing, so a default `index.html` fallback is sufficient)

A `dist/_redirects` file (Netlify-style) is included for hosts that need it.

---

## License

No license file has been specified for this repository yet. Editorial content and imagery belong to their respective authors/sources (photography hotlinked from Pexels under the Pexels license).
