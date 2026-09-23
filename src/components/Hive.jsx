import Bee from './Bee.jsx'
import { projects } from '../data.js'

export default function Hive({ onOpenProject }) {
  return (
    <section className="hive" id="hive">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2 className="display">
              Work in the <em className="italic-accent">comb</em>
            </h2>
          </div>
          <Bee size={44} index={4} className="float" />
        </div>

        <div className="hive-comb">
          {projects.map((project) => (
            <HexCell key={project.id} project={project} onOpen={onOpenProject} />
          ))}
        </div>

        <p className="hive-note">✦ each cell is a project ✦ click to explore ✦</p>
      </div>
    </section>
  )
}

function HexCell({ project, onOpen }) {
  return (
    <button
      className="hive-cell"
      style={{ '--cell': project.accent }}
      onClick={() => onOpen(project.id)}
      aria-label={`Open ${project.title}`}
    >
      <span className="hex-card">
        <span className="hex-card__fill" />
        <img src={project.image} alt="" />
        <span className="hex-card__shade" />
        <span className="hex-card__label">
          <span className="cat">{project.category.split('·')[0].trim()}</span>
          <span className="title">{project.title}</span>
        </span>
      </span>
    </button>
  )
}
