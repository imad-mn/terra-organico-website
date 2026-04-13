# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

There are no tests or linting scripts configured.

## Architecture

Single-page application built with **Vue 3 + Vite**. Routing uses `createWebHashHistory` (hash-based URLs), so the `dist/` output works on any static host without server-side rewrite rules.

**Data lives in the views.** Each page component in `src/views/` contains its own data as a plain JS array in `<script setup>` — there is no store, no API, and no external data source. To update products, prices, delivery zones, or testimonials, edit the relevant array directly in the corresponding view file.

**Styling is a mix of Tailwind utilities and PrimeVue.** Global brand tokens (colors, fonts) are defined in `tailwind.config.js`. Reusable utility classes (`btn-primary`, `card`, `section-title`, etc.) are defined as `@layer components` in `src/style.css`. PrimeVue uses the Aura preset with dark mode disabled (`darkModeSelector: false`).

**Shared layout** (`Navbar`, `Footer`) is composed in `src/App.vue` along with the global floating WhatsApp button. The nav link list is duplicated between `Navbar.vue` and `Footer.vue` — keep them in sync when adding routes.

## Brand

| Token | Value | Use |
|---|---|---|
| `primary` | `#2D6A2D` | Nav, headings, buttons |
| `secondary` | `#4A7C3F` | Hover states |
| `accent` | `#8B5E3C` | Prices, accent buttons |
| `khaki` | `#E8E0C8` | Page background |
| `dark` | `#1E2D1E` | Body text |

Fonts: **Playfair Display** (headings) + **Lato** (body), loaded from Google Fonts in `index.html`.

## Key details

- Logo is served from `public/logo.png` (static asset, not imported as a module).
- WhatsApp number used throughout: **+506 8853-2344** (`https://wa.me/50688532344`).
- The `ListaPrecios.vue` print button calls `window.print()`; print styles are scoped inside that file.
- Vue Router scroll behavior resets to `top: 0` on every navigation.
