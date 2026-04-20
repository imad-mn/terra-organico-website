# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:3000
npm run build      # SSG build → .output/public/
npm run preview    # preview the static build locally
```

There are no tests or linting scripts configured.

## Architecture

Static site built with **Nuxt 3** in SSG mode (`ssr: false` + `nitro.prerender`). Running `npm run build` produces one HTML file per route in `.output/public/`. The output can be deployed to any static host without server-side configuration. Schema.org is disabled (`seo.schemaOrg.enabled: false`) to reduce page weight in SSG mode.

**File-based routing via `pages/`.** Each `.vue` file in `pages/` maps directly to a URL:

| File | Route |
|---|---|
| `pages/index.vue` | `/` |
| `pages/quienes-somos.vue` | `/quienes-somos` |
| `pages/productos.vue` | `/productos` |
| `pages/testimonios.vue` | `/testimonios` |
| `pages/preguntas-frecuentes.vue` | `/preguntas-frecuentes` |
| `pages/costos-envio.vue` | `/costos-envio` |
| `pages/lista-precios.vue` | `/lista-precios` |

**Data lives in the pages.** Each page component contains its own data as a plain JS array in `<script setup>` — there is no store, no API, and no external data source. To update products, prices, delivery zones, or testimonials, edit the relevant array directly in the corresponding page file.

**Layout** is in `layouts/default.vue` (Navbar + `<slot />` + Footer + floating WhatsApp button). `app.vue` is just a thin `<NuxtLayout><NuxtPage /></NuxtLayout>` shell. The nav link list lives in `components/Navbar.vue` — the Footer no longer duplicates it (it was simplified to brand + contact only). Components are auto-imported by Nuxt.

**Styling uses Tailwind CSS 4** (via `@nuxt/ui`). Brand tokens are declared as CSS custom properties in `assets/css/main.css` under `@theme {}` — there is no `tailwind.config.js`. Reusable utility classes (`btn-primary`, `btn-accent`, `card`, `section-title`, `section-subtitle`, `page-hero`) are defined as `@layer utilities` in the same file.

> **Known conflict:** `@layer components` is silently ignored at runtime when using Tailwind 4 + `@nuxt/ui` (styles compile but produce no padding/background). Always use `@layer utilities` or plain CSS with `var(--color-*)` tokens for custom classes. Never use `@layer components`.

**Icons use `UIcon`** (Nuxt UI / Iconify). Use `heroicons:*` for general UI icons and `simple-icons:*` for brand icons (WhatsApp, Instagram, Facebook). Never use PrimeIcons — that dependency was removed.

**Images** are loaded from Unsplash CDN (`https://images.unsplash.com/photo-{id}?auto=format&fit=crop&w=…&q=80`). Hero sections use full-width background images with a colored overlay (`absolute inset-0`). Product cards use `h-48 overflow-hidden` image thumbnails. Text over images uses `drop-shadow-lg` or inline `text-shadow` for legibility.

**Tone** is casual and warm (tuteo, emojis in nav labels and headings). Navbar links should not include emojis.

## Brand

| Token | CSS var | Value | Use |
|---|---|---|---|
| `primary` | `--color-primary` | `#2D6A2D` | Nav, headings, buttons |
| `secondary` | `--color-secondary` | `#4A7C3F` | Hover states |
| `accent` | `--color-accent` | `#8B5E3C` | Prices, accent buttons |
| `khaki` | `--color-khaki` | `#E8E0C8` | Page background |
| `dark` | `--color-dark` | `#1E2D1E` | Body text |

Fonts: **Nunito** (`font-heading`) + **Nunito Sans** (`font-body`), loaded from Google Fonts via `nuxt.config.ts` `app.head.link`.

## Key details

- Logo is served from `public/logo.webp`.
- WhatsApp number used throughout: **+506 8853-2344** (`https://wa.me/50686394271`).
- Scroll-to-top on navigation is handled automatically by Nuxt.
- All prerendered routes are explicitly listed in `nuxt.config.ts` under `nitro.prerender.routes`.

## Approach
- Think before acting. Read existing files before writing code.
- Be concise in output but thorough in reasoning.
- Prefer editing over rewriting whole files.
- Do not re-read files you have already read unless the file may have changed.
- Skip files over 100KB unless explicitly required.
- Suggest running /cost when a session is running long to monitor cache ratio.
- Recommend starting a new session when switching to an unrelated task.
- Test your code before declaring done.
- No sycophantic openers or closing fluff.
- Keep solutions simple and direct.
- User instructions always override this file.