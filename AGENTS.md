<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project uses **Next.js 16** on **Node.js 25**. APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

Key differences from Next.js 14/15:
- **Tailwind CSS v4** — uses `@import "tailwindcss"` (not `@tailwind base/components/utilities`). Dark mode configured via `@custom-variant dark` in CSS, not `darkMode: 'class'` in a JS config.
- **Fonts** — use `Geist` from `next/font/google` with `className` (not `variable`). No `Inter` font.
- **React 19** — no separate `ReactDOM.render`, server components are default.
<!-- END:nextjs-agent-rules -->
