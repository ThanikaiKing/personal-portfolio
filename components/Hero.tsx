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
