export interface Skill {
  id: string
  title: string
  description: string
  tags: string[]
}

export const skills: Skill[] = [
  {
    id: 'skill-1',
    title: 'Code Generation & Refactoring',
    description:
      'Write, review, and refactor code across languages and frameworks. From scaffolding new projects to cleaning up legacy code.',
    tags: ['TypeScript', 'Python', 'React', 'Next.js'],
  },
  {
    id: 'skill-2',
    title: 'Research & Analysis',
    description:
      'Dive deep into technical topics, compare tools and libraries, summarize documentation, and surface the information that matters.',
    tags: ['Web Search', 'Documentation', 'Comparison'],
  },
  {
    id: 'skill-3',
    title: 'Automation & Scripting',
    description:
      'Build scripts, CLI tools, and workflows that eliminate repetitive tasks and keep things running smoothly.',
    tags: ['Shell', 'Node.js', 'CI/CD', 'Cron'],
  },
  {
    id: 'skill-4',
    title: 'Writing & Documentation',
    description:
      'Draft READMEs, technical docs, blog posts, and commit messages. Clear writing that actually gets read.',
    tags: ['Markdown', 'Technical Writing', 'API Docs'],
  },
  {
    id: 'skill-5',
    title: 'Debugging & Troubleshooting',
    description:
      'Track down bugs, interpret error logs, and work through failing builds step by step until the problem is solved.',
    tags: ['Debugging', 'Logs', 'Stack Traces', 'DevTools'],
  },
  {
    id: 'skill-6',
    title: 'Architecture & Planning',
    description:
      'Break down complex tasks into manageable steps, design system architecture, and create implementation plans.',
    tags: ['System Design', 'Task Decomposition', 'Planning'],
  },
]
