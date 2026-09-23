import { useEffect, useState } from 'react'
import { digitalArtCollection, projects } from '../data.js'

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
      className="lightbox lightbox--art"
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

function ArtTile({ image, className, onOpen }) {
  return (
    <figure className={className}>
      <button type="button" onClick={() => onOpen({ ...image, caption: image.alt })}>
        <img src={image.src} alt={image.alt} />
      </button>
    </figure>
  )
}

function ArtSet({ set, onOpen }) {
  const [hero, ...rest] = set.images
  const featured = set.featured ? ' art-set--featured' : ''
  const solo = rest.length === 0 ? ' art-set--solo' : ''

  return (
    <article className={`art-set${featured}${solo}`}>
      <p className="art-set__label">{set.title}</p>
      {rest.length === 0 ? (
        <ArtTile image={hero} className="art-tile art-tile--hero" onOpen={onOpen} />
      ) : (
        <div className="art-set__body">
          <ArtTile image={hero} className="art-tile art-tile--hero" onOpen={onOpen} />
          <div className="art-set__thumbs">
            {rest.map((image) => (
              <ArtTile key={image.src} image={image} className="art-tile art-tile--thumb" onOpen={onOpen} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export default function DigitalArt({ onBack }) {
  const project = projects.find((item) => item.id === 'digital-art')
  const [activeImage, setActiveImage] = useState(null)

  return (
    <article className="case">
      <div className="case-shell">
        <header className="art-top">
          <h1 className="display">{project.title}</h1>
          <p className="case-summary">{project.description}</p>
        </header>

        <nav className="case-phases art-legend" aria-label="Collection legend">
          {digitalArtCollection.map((group, index) => (
            <span key={group.id} className="case-phases__item">
              {index > 0 && <span className="case-phases__sep">›</span>}
              <a href={`#${group.id}`}>
                <span className="art-legend__num">{group.number}</span>
                {group.title}
              </a>
            </span>
          ))}
        </nav>

        {digitalArtCollection.map((group) => (
          <section className="art-group" id={group.id} key={group.id}>
            <h2>
              <span>{group.number}</span>
              {group.title}
            </h2>
            {group.sets ? (
              <div className="art-sets">
                {group.sets.map((set) => (
                  <ArtSet key={set.title} set={set} onOpen={setActiveImage} />
                ))}
              </div>
            ) : (
              <div className="art-grid">
                {group.images.map((image) => (
                  <ArtTile key={image.src} image={image} className="art-tile" onOpen={setActiveImage} />
                ))}
              </div>
            )}
            {group.credits && (
              <ul className="art-credits">
                {group.credits.map((credit) => (
                  <li key={credit.value || credit.text}>
                    {credit.text}
                    {credit.href ? (
                      <a href={credit.href} target="_blank" rel="noreferrer">
                        {credit.value}
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="case-next">
          <div>
            <p className="label">Back</p>
            <p>Work in the comb</p>
          </div>
          <div className="case-next__actions">
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
