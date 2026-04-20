# Personal Portfolio

A minimal personal portfolio site with Home, Projects, and Contact pages.

## Tech Stack

- **Runtime:** Node.js 25
- **Framework:** Next.js 16.2.4 (app router, Turbopack)
- **UI:** React 19, Tailwind CSS v4
- **Language:** TypeScript 5
- **Linting:** ESLint 9

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/                 — Pages and layouts (app router)
  layout.tsx         — Root layout with Navbar, Footer, dark mode
  page.tsx           — Home page (Hero section)
  projects/page.tsx  — Projects page (card grid)
  contact/page.tsx   — Contact page (email + socials)
  globals.css        — Tailwind v4 import + dark mode variant
components/          — Shared React components
data/                — Typed data files (edit to change site content)
  profile.ts         — Name, title, bio, email, socials
  projects.ts        — Project list with tags and links
public/              — Static assets
```

## Editing Content

All site copy is driven by data files — no need to touch components:

- **`data/profile.ts`** — name, title, bio, email, social links, CTA
- **`data/projects.ts`** — project cards with title, description, tags, links

## Dark Mode

Dark mode follows OS preference automatically via a blocking inline script in the root layout that sets the `dark` class on `<html>` before first paint.

## Build

```bash
npm run build   # Production build
npm run start   # Serve production build
npm run lint    # Run ESLint
```
