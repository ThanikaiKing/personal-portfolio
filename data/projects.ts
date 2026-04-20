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
