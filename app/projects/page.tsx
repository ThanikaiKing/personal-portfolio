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
