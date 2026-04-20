# Portfolio Site Implementation Plan

> **Status:** COMPLETED. All tasks implemented and production build verified.

**Goal:** Build a minimal Next.js 16 (app router) personal portfolio with Home, Projects, and Contact pages, styled with Tailwind CSS v4 and dark-mode support.

**Architecture:** Three app-router pages share a root layout that mounts a sticky Navbar and Footer. All content lives in `data/profile.ts` and `data/projects.ts` so an AI agent can update copy without touching any component. Dark mode follows OS preference via a blocking inline script that sets the `dark` class on `<html>` before first paint.

**Tech Stack:** Next.js 16.2.4 (app router, Turbopack), React 19, TypeScript 5, Tailwind CSS v4, ESLint 9, Node.js 25

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `data/profile.ts` | All personal copy — name, title, bio, email, socials, CTA |
| Create | `data/projects.ts` | Project list with types |
| Modify | `app/globals.css` | Tailwind v4 import + dark custom variant |
| Modify | `tailwind.config.ts` | `darkMode: 'class'` (Tailwind v4 uses CSS `@custom-variant` as primary) |
| Modify | `app/layout.tsx` | Root layout: Geist font, dark-mode script, Navbar, main, Footer |
| Create | `components/Navbar.tsx` | Sticky top nav with name + page links |
| Create | `components/Footer.tsx` | Copyright + social links |
| Create | `components/Hero.tsx` | Home hero: name, title, bio, CTA button |
| Modify | `app/page.tsx` | Home page — renders `<Hero />` |
| Create | `components/ProjectCard.tsx` | Single project card: title, description, tags, links |
| Create | `app/projects/page.tsx` | Projects page — renders card grid from data |
| Create | `app/contact/page.tsx` | Contact page — email + social links from data |

---

## Task 1: Bootstrap project

**Files:**
- Create: project root (via create-next-app)
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [x] **Step 1: Scaffold project**

```bash
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir=no
```

- [x] **Step 2: Verify scaffold succeeded**

- [x] **Step 3: Set dark mode to class strategy in tailwind.config.ts**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
```

> **Note:** With Tailwind v4, the primary dark mode mechanism is `@custom-variant dark (&:where(.dark, .dark *))` in `app/globals.css`. The `tailwind.config.ts` serves as a fallback config.

- [x] **Step 4: Tailwind v4 CSS setup in app/globals.css**

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

- [x] **Step 5: Remove default page content from app/page.tsx**

- [x] **Step 6: Verify TypeScript compiles**

- [x] **Step 7: Commit**

---

## Task 2: Create data files

**Files:**
- Create: `data/profile.ts`
- Create: `data/projects.ts`

- [x] **Step 1: Create data/profile.ts**

```typescript
export interface Social {
  label: string
  href: string
}

export interface Profile {
  name: string
  title: string
  bio: string
  email: string
  socials: Social[]
  ctaLabel: string
  ctaHref: string
}

export const profile: Profile = {
  name: 'Jane Doe',
  title: 'Full-Stack Engineer',
  bio: 'I build fast, accessible web products. Focused on React, Node.js, and developer tooling.',
  email: 'jane@example.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/janedoe' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' },
    { label: 'Twitter', href: 'https://twitter.com/janedoe' },
  ],
  ctaLabel: 'View my work',
  ctaHref: '/projects',
}
```

- [x] **Step 2: Create data/projects.ts**

```typescript
export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  href?: string
  repoHref?: string
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Open Source CLI',
    description:
      'A developer tool that automates repetitive scaffolding tasks with a single command.',
    tags: ['Node.js', 'TypeScript', 'Commander'],
    href: 'https://example.com',
    repoHref: 'https://github.com/janedoe/cli-tool',
  },
  {
    id: 'project-2',
    title: 'Dashboard UI',
    description:
      'An analytics dashboard built with React and Recharts, powering a SaaS product.',
    tags: ['React', 'Recharts', 'Tailwind'],
    href: 'https://dashboard.example.com',
    repoHref: 'https://github.com/janedoe/dashboard',
  },
  {
    id: 'project-3',
    title: 'API Gateway',
    description:
      'A lightweight API gateway with rate limiting, auth middleware, and request logging.',
    tags: ['Node.js', 'Express', 'Redis'],
    repoHref: 'https://github.com/janedoe/api-gateway',
  },
]
```

- [x] **Step 3: Verify types compile**

- [x] **Step 4: Commit**

---

## Task 3: Root layout with Navbar and Footer

**Files:**
- Create: `components/Navbar.tsx`
- Create: `components/Footer.tsx`
- Modify: `app/layout.tsx`

- [x] **Step 1: Create components/Navbar.tsx**

```tsx
import Link from 'next/link'
import { profile } from '@/data/profile'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          {profile.name}
        </Link>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
```

- [x] **Step 2: Create components/Footer.tsx**

```tsx
import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
```

- [x] **Step 3: Replace app/layout.tsx**

Uses `Geist` font (Next.js 16 convention) instead of `Inter`:

```tsx
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { profile } from '@/data/profile'

const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: { default: profile.name, template: `%s — ${profile.name}` },
  description: profile.bio,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.className}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-color-scheme:dark)').matches){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [x] **Step 4: Verify TypeScript and start dev server**

- [x] **Step 5: Commit**

---

## Task 4: Home page — Hero section

**Files:**
- Create: `components/Hero.tsx`
- Modify: `app/page.tsx`

- [x] **Step 1: Create components/Hero.tsx**

```tsx
import Link from 'next/link'
import { profile } from '@/data/profile'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-24 sm:py-32">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl font-medium text-indigo-600 dark:text-indigo-400">
        {profile.title}
      </p>
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
        {profile.bio}
      </p>
      <div className="mt-10">
        <Link
          href={profile.ctaHref}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
        >
          {profile.ctaLabel}
        </Link>
      </div>
    </section>
  )
}
```

- [x] **Step 2: Replace app/page.tsx**

```tsx
import Hero from '@/components/Hero'

export default function HomePage() {
  return <Hero />
}
```

- [x] **Step 3: Verify in browser**

- [x] **Step 4: Commit**

---

## Task 5: Projects page

**Files:**
- Create: `components/ProjectCard.tsx`
- Create: `app/projects/page.tsx`

- [x] **Step 1: Create components/ProjectCard.tsx**

```tsx
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-medium bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {(project.href || project.repoHref) && (
        <div className="mt-4 flex gap-4">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Live &rarr;
            </a>
          )}
          {project.repoHref && (
            <a
              href={project.repoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Code &rarr;
            </a>
          )}
        </div>
      )}
    </div>
  )
}
```

- [x] **Step 2: Create app/projects/page.tsx**

```tsx
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Projects
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        A selection of things I&apos;ve built.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
```

- [x] **Step 3: Verify in browser**

- [x] **Step 4: Commit**

---

## Task 6: Contact page

**Files:**
- Create: `app/contact/page.tsx`

- [x] **Step 1: Create app/contact/page.tsx**

```tsx
import { profile } from '@/data/profile'

export const metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Contact
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl">
        Have a project in mind or want to chat? Reach out directly.
      </p>
      <div className="mt-10 space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Email
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-block text-lg text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            {profile.email}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Social
          </p>
          <div className="mt-2 flex flex-wrap gap-6">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {social.label} &rarr;
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [x] **Step 2: Verify in browser**

- [x] **Step 3: Commit**

---

## Task 7: Final build verification

**Files:** none (verification only)

- [x] **Step 1: Run TypeScript check** — passed, no errors

- [x] **Step 2: Run ESLint** — passed, no errors or warnings

- [x] **Step 3: Run production build** — passed

```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /contact
└ ○ /projects

○  (Static)  prerendered as static content
```

All routes are static (○), compiled successfully with Turbopack.

- [x] **Step 4: Smoke-test production build**

- [x] **Step 5: Final commit**
