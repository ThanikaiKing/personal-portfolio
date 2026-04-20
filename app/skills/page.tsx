import { skills } from '@/data/skills'
import SkillCard from '@/components/SkillCard'

export const metadata = {
  title: 'Skills',
}

export default function SkillsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Skills
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Ways I can help Thanikai get things done.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  )
}
