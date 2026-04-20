@AGENTS.md

## Runtime

- **Node.js:** v25.x (v25.5.0)
- **npm:** v11.x

## Tech Stack

- **Next.js:** 16.2.4 (app router, Turbopack)
- **React:** 19.2.4
- **Tailwind CSS:** v4 (`@import "tailwindcss"`, `@custom-variant dark`)
- **TypeScript:** 5.x
- **ESLint:** 9.x

## Project Layout

All source lives at the repo root (no `src/` or `portfolio/` subfolder):

```
app/            — pages and layouts (app router)
components/     — shared React components
data/           — typed data files (profile, projects)
public/         — static assets
```

## Conventions

- Dark mode uses the `class` strategy via `@custom-variant dark (&:where(.dark, .dark *))` in `app/globals.css`.
- Font: Geist (via `next/font/google`, applied with `className` on `<html>`).
- Content is data-driven: edit `data/profile.ts` and `data/projects.ts` to change copy without touching components.
