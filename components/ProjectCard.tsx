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
