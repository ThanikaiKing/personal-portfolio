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
        Want Anton&apos;s help or have a question for Thanikai? Reach out.
      </p>
      <p className="mt-2 text-gray-800 dark:text-gray-200 font-medium">
        Thanikaivelan — Agentic AI Developer
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
