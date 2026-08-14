import { useState } from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {visibleProjects.map((project) => (
          <div key={project.id} className="border border-neutral-200 rounded-lg overflow-hidden">
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            )}
            <div className="p-6">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-600 text-sm mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-2 text-xs text-neutral-500 mb-4">
                {project.stack.map((tech) => (
                  <li key={tech} className="border border-neutral-200 rounded px-2 py-1">
                    {tech}
                  </li>
                ))}
              </ul>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline"
                >
                  View Live →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {!showAll && projects.length > visibleProjects.length && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-10 mx-auto block border border-neutral-900 rounded-full px-6 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors"
        >
          See More Projects
        </button>
      )}
    </section>
  )
}