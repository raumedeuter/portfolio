import { useState, useRef } from 'react'
import { projects } from '../data/projects'

function ProjectVideo({ src, title }) {
  const videoRef = useRef(null)

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      onMouseEnter={() => videoRef.current.play()}
      onMouseLeave={() => {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }}
      className="w-full rounded-lg"
      aria-label={title}
    />
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>

      {featuredProjects.map((project, index) => {
        const isEven = index % 2 === 0
        return (
          <div
            key={project.id}
            className={`flex flex-col ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-8 items-center mb-24`}
          >
            <div className="w-full sm:w-1/2">
              {project.video ? (
                <ProjectVideo src={project.video} title={project.title} />
              ) : (
                project.image && (
                  <img src={project.image} alt={project.title} className="w-full rounded-lg" />
                )
              )}
            </div>

            <div className={`w-full sm:w-1/2 ${isEven ? 'sm:text-left' : 'sm:text-right'}`}>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-600 mb-4">{project.description}</p>
              <ul className={`flex flex-wrap gap-2 text-xs text-neutral-500 mb-4 ${isEven ? '' : 'sm:justify-end'}`}>
                {project.stack.map((tech) => (
                  <li key={tech} className="border border-neutral-200 rounded px-2 py-1">
                    {tech}
                  </li>
                ))}
              </ul>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline">
                  View Live →
                </a>
              )}
            </div>
          </div>
        )
      })}

      {showAll && (
        <div className="mt-16 divide-y divide-neutral-200">
          {otherProjects.map((project) => (
            <div key={project.id} className="py-5 flex justify-between items-center flex-wrap gap-2">
              <div>
                <h4 className="font-medium">{project.title}</h4>
                <p className="text-sm text-neutral-500">{project.stack.join(' · ')}</p>
              </div>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm underline">
                  View →
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {!showAll && otherProjects.length > 0 && (
        <button
          onClick={() => setShowAll(true)}
          className="mx-auto block border border-neutral-900 rounded-full px-6 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors"
        >
          See More Projects
        </button>
      )}
    </section>
  )
}