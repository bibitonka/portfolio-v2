import { useEffect } from 'react'
import { projects } from '../data.js'

export default function ProjectOverlay({ projectId, onClose, onExplore }) {
  const project = projects.find((item) => item.id === projectId)

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="overlay-card" role="dialog" aria-modal="true" aria-labelledby="overlay-title">
        <button className="overlay-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="overlay-grid">
          <div className="overlay-hex" style={{ '--cell': project.accent }}>
            <span />
            <img src={project.image} alt="" />
          </div>
          <div className="overlay-copy">
            <p className="cat">{project.category}</p>
            <h2 id="overlay-title">{project.title}</h2>
            <p className="role">{project.role}</p>
            <p>{project.description}</p>
            <div className="overlay-skills">
              {project.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className="overlay-actions">
              {project.hasCaseStudy ? (
                <button className="btn btn-honey" onClick={onExplore}>
                  Explore case study →
                </button>
              ) : project.hasCollection ? (
                <button className="btn btn-honey" onClick={onExplore}>
                  Explore collection →
                </button>
              ) : (
                <button className="btn btn-disabled" type="button" disabled>
                  Under maintenance — come check again soon!
                </button>
              )}
              {project.liveUrl && (
                <a className="btn btn-ghost" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visit live site
                </a>
              )}
              {project.figmaUrl && (
                <a className="btn btn-ghost" href={project.figmaUrl} target="_blank" rel="noreferrer">
                  Open Figma
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
