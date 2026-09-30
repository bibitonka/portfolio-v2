import { useEffect, useState } from 'react'
import { caseStudies, projects } from '../data.js'

function CaseArtTile({ image, onOpen }) {
  return (
    <figure className="art-tile">
      <button type="button" onClick={() => onOpen(image)}>
        <img src={image.src} alt={image.alt} />
      </button>
    </figure>
  )
}

function CaseArtPair({ main, side, onOpen }) {
  return (
    <div className="case-pair">
      <figure className="art-tile art-tile--hero">
        <button type="button" onClick={() => onOpen(main)}>
          <img src={main.src} alt={main.alt} />
        </button>
      </figure>
      <figure className="art-tile art-tile--cover">
        <button type="button" onClick={() => onOpen(side)}>
          <img src={side.src} alt={side.alt} />
        </button>
      </figure>
    </div>
  )
}

function CaseArtGrid({ images, onOpen, soloHero = false }) {
  if (!images.length) return null
  if (soloHero && images.length === 1) {
    return (
      <figure className="art-tile art-tile--hero">
        <button type="button" onClick={() => onOpen(images[0])}>
          <img src={images[0].src} alt={images[0].alt} />
        </button>
      </figure>
    )
  }
  return (
    <div className="art-grid">
      {images.map((image) => (
        <CaseArtTile key={image.caption || image.src} image={image} onOpen={onOpen} />
      ))}
    </div>
  )
}

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

function Lightbox({ image, onClose, art = false }) {
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
      className={`lightbox${art ? ' lightbox--art' : ''}`}
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

export default function CaseStudy({ projectId = 'hidden-holds', onBack }) {
  const hero = projects.find((project) => project.id === projectId) || projects[0]
  const study = caseStudies[projectId] || caseStudies['hidden-holds']
  const [discover, define, develop, deliver] = study.phases
  const [activeImage, setActiveImage] = useState(null)
  const nextProject = projects[projects.findIndex((project) => project.id === projectId) + 1]
  const discoverImages = discover.images || []
  const defineImages = define.images || []
  const developImages = develop.images || []
  const developLofi = develop.lofi || []
  const developDoodle = develop.doodle
  const deliverScreens = deliver.screens || []
  const tileGallery = study.imageGallery === 'tiles'

  return (
    <article className="case">
      <div className="case-shell">
        <header className="case-top">
          <div className="case-intro">
            {study.kicker && <p className="kicker">{study.kicker}</p>}
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
            <div className="case-hex" style={{ '--cell': hero.accent }}>
              <div className="case-hex__forest" />
              <div className="case-hex__photo">
                <img src={hero.image} alt="" />
              </div>
            </div>
            {(study.liveUrl || study.figmaUrl) && (
              <div className="case-hex-actions">
                {study.liveUrl && (
                  <a href={study.liveUrl} target="_blank" rel="noreferrer">
                    Live project
                  </a>
                )}
                {study.figmaUrl && (
                  <a href={study.figmaUrl} target="_blank" rel="noreferrer">
                    Open Figma
                  </a>
                )}
              </div>
            )}
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
          <div
            className={`phase-grid${discoverImages.length && !tileGallery ? '' : ' phase-grid--solo'}`}
          >
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
              {discover.methods && <MethodsFlow methods={discover.methods} />}
            </div>
            {!tileGallery && discoverImages.length > 0 && (
              <div className="phase-mosaic">
                {discoverImages.map((image) => (
                  <ZoomableFigure
                    key={image.caption}
                    image={image}
                    className={`is-${image.size}`}
                    enlarge
                    onOpen={setActiveImage}
                  />
                ))}
              </div>
            )}
            {tileGallery && <CaseArtGrid images={discoverImages} onOpen={setActiveImage} />}
            <div className="insight-board">
              <p className="phase-box__label">{discover.insightsTitle}</p>
              <div
                className={`insight-board__grid${discover.insights.length > 3 ? ' is-four' : ''}`}
              >
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
          <div className={`phase-grid phase-grid--define${define.list ? '' : ' phase-grid--solo'}`}>
            <div className="phase-copy">
              {define.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {define.methods && <MethodsFlow methods={define.methods} />}
            </div>
            {define.list && (
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
            )}
          </div>
          {defineImages.some((image) => image.size !== 'vpc') && (
            <div className="phase-mosaic phase-mosaic--define">
              {defineImages
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
          )}
          {defineImages.some((image) => image.size === 'vpc') && (
            <div className="phase-mosaic phase-mosaic--vpc">
              {defineImages
                .filter((image) => image.size === 'vpc')
                .map((image) => (
                  <ZoomableFigure key={image.caption} image={image} enlarge onOpen={setActiveImage} />
                ))}
            </div>
          )}
        </section>

        <section className="phase" id="develop">
          <h2>
            <span>{develop.number}</span>
            {develop.title}
          </h2>
          {develop.paragraphs ? (
            develop.paragraphs.map((paragraph) => (
              <p className="phase-lead" key={paragraph}>
                {paragraph}
              </p>
            ))
          ) : (
            <p className="phase-lead">{develop.text}</p>
          )}
          {develop.methods && <MethodsFlow methods={develop.methods} />}
          {tileGallery && developLofi[0] && developDoodle ? (
            <div className="lofi-block">
              <p className="lofi-block__label">Low-fidelity wireframes</p>
              <CaseArtPair main={developLofi[0]} side={developDoodle} onOpen={setActiveImage} />
            </div>
          ) : (
            developLofi.length > 0 && (
              <div className="lofi-block">
                <p className="lofi-block__label">Low-fidelity wireframes</p>
                {tileGallery ? (
                  <CaseArtGrid images={developLofi} onOpen={setActiveImage} soloHero />
                ) : (
                  <div className="process-gallery process-gallery--pair">
                    {developLofi.map((image) => (
                      <ZoomableFigure key={image.caption} image={image} enlarge onOpen={setActiveImage} />
                    ))}
                  </div>
                )}
              </div>
            )
          )}
          {tileGallery ? (
            <CaseArtGrid images={developImages} onOpen={setActiveImage} />
          ) : (
            developImages.length > 0 && (
              <div className="process-gallery process-gallery--wide">
                {developImages.map((image) => (
                  <ZoomableFigure
                    key={image.caption}
                    image={image}
                    className={image.size ? `is-${image.size}` : ''}
                    enlarge
                    onOpen={setActiveImage}
                  />
                ))}
              </div>
            )
          )}
        </section>

        <section className="phase" id="deliver">
          <h2>
            <span>{deliver.number}</span>
            {deliver.title}
          </h2>
          {deliver.paragraphs ? (
            deliver.paragraphs.map((paragraph) => (
              <p className="phase-lead" key={paragraph}>
                {paragraph}
              </p>
            ))
          ) : (
            <p className="phase-lead">{deliver.text}</p>
          )}
          {deliverScreens.length > 0 &&
            (tileGallery ? (
              <CaseArtGrid images={deliverScreens} onOpen={setActiveImage} />
            ) : (
              <div className="solution-grid">
                {deliverScreens.map((screen) => (
                  <ZoomableFigure key={screen.caption} image={screen} onOpen={setActiveImage} />
                ))}
              </div>
            ))}
        </section>

        <div className="case-next">
          <div>
            {nextProject && (
              <>
                <p className="label">Next project</p>
                <p>{nextProject.title}</p>
              </>
            )}
          </div>
          <div className="case-next__actions">
            {study.liveUrl && (
              <a className="btn btn-honey" href={study.liveUrl} target="_blank" rel="noreferrer">
                Visit live site
              </a>
            )}
            {!study.liveUrl && study.figmaUrl && (
              <a className="btn btn-honey" href={study.figmaUrl} target="_blank" rel="noreferrer">
                Open Figma
              </a>
            )}
            <button className="btn btn-forest" onClick={onBack}>
              ← Back to hive
            </button>
          </div>
        </div>
      </div>

      {activeImage && (
        <Lightbox
          image={activeImage}
          onClose={() => setActiveImage(null)}
          art={tileGallery}
        />
      )}
    </article>
  )
}
