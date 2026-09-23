import { useEffect, useState } from 'react'
import { hiddenHoldsCase, projects } from '../data.js'

function ZoomableFigure({ image, onOpen, className = '', enlarge = false }) {
  return (
    <figure className={className}>
      {enlarge ? (
        <div className="static-shot">
          <img src={image.src} alt={image.alt} />
        </div>
      ) : (
        <button type="button" className="zoom-shot" onClick={() => onOpen(image)}>
          <img src={image.src} alt={image.alt} />
        </button>
      )}
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  )
}

function Lightbox({ image, onClose }) {
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

  return (
    <div
      className="lightbox"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button className="lightbox__close" type="button" onClick={onClose} aria-label="Close image">
        ✕
      </button>
      <img src={image.src} alt={image.alt} />
      {image.caption && <p className="lightbox__caption">{image.caption}</p>}
    </div>
  )
}

function MethodsFlow({ methods }) {
  return (
    <p className="phase-flow">
      {methods.map((method, index) => (
        <span key={method}>
          {index > 0 && <span className="phase-flow__arrow">→</span>}
          {method}
        </span>
      ))}
    </p>
  )
}

export default function CaseStudy({ onBack }) {
  const hero = projects.find((project) => project.id === 'hidden-holds')
  const study = hiddenHoldsCase
  const [discover, define, develop, deliver] = study.phases
  const [activeImage, setActiveImage] = useState(null)

  return (
    <article className="case">
      <div className="case-shell">
        <header className="case-top">
          <div className="case-intro">
            <p className="kicker">{study.kicker}</p>
            <h1 className="display">{study.title}</h1>
            <p className="case-summary">{study.summary}</p>
            <div className="case-facts">
              {study.meta.map((item) => (
                <div className="case-fact" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="case-aside">
            <div className="case-hex">
              <div className="case-hex__forest" />
              <div className="case-hex__photo">
                <img src={hero.image} alt="Indoor bouldering wall at Hidden Holds Aarhus" />
              </div>
            </div>
            <div className="case-hex-actions">
              <a href={study.liveUrl} target="_blank" rel="noreferrer">
                Live project
              </a>
              <a href={study.figmaUrl} target="_blank" rel="noreferrer">
                Open Figma
              </a>
            </div>
          </div>
        </header>

        <nav className="case-phases" aria-label="Project phases">
          {study.phases.map((phase, index) => (
            <span key={phase.id} className="case-phases__item">
              {index > 0 && <span className="case-phases__sep">›</span>}
              <a href={`#${phase.id}`}>{phase.title}</a>
            </span>
          ))}
        </nav>

        <section className="phase" id="discover">
          <h2>
            <span>{discover.number}</span>
            {discover.title}
          </h2>
          <div className="phase-grid">
            <div className="phase-copy">
              <blockquote className="phase-quote">“{discover.quote}”</blockquote>
              <div className="phase-box">
                <p className="phase-box__label">{discover.listTitle}</p>
                <ol>
                  {discover.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
              <MethodsFlow methods={discover.methods} />
            </div>
            <div className="phase-mosaic">
              {discover.images.map((image) => (
                <ZoomableFigure
                  key={image.caption}
                  image={image}
                  className={`is-${image.size}`}
                  enlarge
                  onOpen={setActiveImage}
                />
              ))}
            </div>
            <div className="insight-board">
              <p className="phase-box__label">{discover.insightsTitle}</p>
              <div className="insight-board__grid">
                {discover.insights.map((insight) => (
                  <article className="insight-card" key={insight.title}>
                    <h3>{insight.title}</h3>
                    <p>{insight.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="phase" id="define">
          <h2>
            <span>{define.number}</span>
            {define.title}
          </h2>
          <div className="phase-grid phase-grid--define">
            <div className="phase-copy">
              {define.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <MethodsFlow methods={define.methods} />
            </div>
            <div className="phase-box">
              <p className="phase-box__label">{define.listTitle}</p>
              <ol>
                {define.list.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="phase-mosaic phase-mosaic--define">
            {define.images
              .filter((image) => image.size !== 'vpc')
              .map((image) => (
                <ZoomableFigure
                  key={image.caption}
                  image={image}
                  className={`is-${image.size}`}
                  enlarge
                  onOpen={setActiveImage}
                />
              ))}
          </div>
          <div className="phase-mosaic phase-mosaic--vpc">
            {define.images
              .filter((image) => image.size === 'vpc')
              .map((image) => (
                <ZoomableFigure key={image.caption} image={image} enlarge onOpen={setActiveImage} />
              ))}
          </div>
        </section>

        <section className="phase" id="develop">
          <h2>
            <span>{develop.number}</span>
            {develop.title}
          </h2>
          <p className="phase-lead">{develop.text}</p>
          <MethodsFlow methods={develop.methods} />
          <div className="process-gallery process-gallery--wide">
            {develop.images.map((image) => (
              <ZoomableFigure
                key={image.caption}
                image={image}
                className={image.size ? `is-${image.size}` : ''}
                enlarge
                onOpen={setActiveImage}
              />
            ))}
          </div>
          <div className="lofi-block">
            <p className="lofi-block__label">Low-fidelity wireframes</p>
            <div className="process-gallery process-gallery--pair">
              {develop.lofi.map((image) => (
                <ZoomableFigure key={image.caption} image={image} enlarge onOpen={setActiveImage} />
              ))}
            </div>
          </div>
        </section>

        <section className="phase" id="deliver">
          <h2>
            <span>{deliver.number}</span>
            {deliver.title}
          </h2>
          <p className="phase-lead">{deliver.text}</p>
          <div className="solution-grid">
            {deliver.screens.map((screen) => (
              <ZoomableFigure key={screen.caption} image={screen} onOpen={setActiveImage} />
            ))}
          </div>
        </section>

        <div className="case-next">
          <div>
            <p className="label">Next project</p>
            <p>Blå Sol Festival</p>
          </div>
          <div className="case-next__actions">
            <a className="btn btn-honey" href={study.liveUrl} target="_blank" rel="noreferrer">
              Visit live site
            </a>
            <button className="btn btn-forest" onClick={onBack}>
              ← Back to hive
            </button>
          </div>
        </div>
      </div>

      {activeImage && <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />}
    </article>
  )
}
