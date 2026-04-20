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
