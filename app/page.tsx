import Hero from '@/components/Hero'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="max-w-5xl mx-auto px-4 pb-16 animate-fade-slide-up">
        <div className="relative rounded-2xl overflow-hidden p-px animate-gradient-shift bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          <div className="rounded-2xl bg-white dark:bg-gray-900 px-8 py-10 flex items-center gap-6">
            <span className="text-5xl animate-wave">👋</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-1">
                Special Shoutout
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Hey Saurabh! 🎉
              </h2>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Great to have you here — welcome to Anton&apos;s corner of the internet!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
