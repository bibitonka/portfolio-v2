import { useLayoutEffect, useRef, useState } from 'react'
import Bee from './Bee.jsx'
import { aboutDotIdle, aboutGallery, testimonials } from '../data.js'

export default function Testimonial() {
  const [active, setActive] = useState(0)
  const [height, setHeight] = useState(null)
  const viewportRef = useRef(null)
  const cardRefs = useRef([])

  function goTo(index) {
    setActive((index + testimonials.length) % testimonials.length)
  }

  useLayoutEffect(() => {
    const viewport = viewportRef.current
    const card = cardRefs.current[active]
    if (!viewport || !card) return

    function update() {
      const pad = parseFloat(getComputedStyle(viewport).paddingTop) || 0
      const next = card.offsetHeight + pad
      if (next > 0) setHeight(next)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(card)
    return () => observer.disconnect()
  }, [active])

  function onPointerDown(event) {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    if (event.target.closest('a, button')) return
    const startX = event.clientX

    function finish(upEvent) {
      window.removeEventListener('pointerup', finish)
      window.removeEventListener('pointercancel', finish)
      const delta = upEvent.clientX - startX
      if (delta > 50) goTo(active - 1)
      if (delta < -50) goTo(active + 1)
    }

    window.addEventListener('pointerup', finish)
    window.addEventListener('pointercancel', finish)
  }

  return (
    <section className="quote" id="testimonials" aria-roledescription="carousel" aria-labelledby="testimonials-heading">
      <div className="wrap">
        <h2 className="display" id="testimonials-heading">
          Other bees buzzed <em className="italic-accent">about me</em>
        </h2>
      </div>
      <div className="wrap quote-shell">
        <div className="quote-slider">
          <button
            type="button"
            className="quote-arrow quote-arrow--prev"
            aria-label="Previous testimonial"
            onClick={() => goTo(active - 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="quote-viewport"
            ref={viewportRef}
            style={height != null ? { height: `${height}px` } : undefined}
          >
            <div
              className="quote-track"
              style={{ transform: `translateX(-${active * 100}%)` }}
              onPointerDown={onPointerDown}
            >
              {testimonials.map((item, index) => (
                <article
                  key={item.name}
                  ref={(node) => {
                    cardRefs.current[index] = node
                  }}
                  className="quote-card"
                  aria-hidden={index !== active}
                  inert={index !== active}
                >
                  <div className="quote-mark" aria-hidden="true">
                    “
                  </div>
                  <blockquote>{item.text}</blockquote>
                  <div className="quote-who">
                    <div className="quote-avatar">
                      <Bee size={46} index={(index + 2) % 6} />
                    </div>
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                      <a className="quote-link" href={item.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="quote-arrow quote-arrow--next"
            aria-label="Next testimonial"
            onClick={() => goTo(active + 1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="quote-dots" role="tablist" aria-label="Testimonials">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={active === index}
              className="quote-dot"
              onClick={() => goTo(index)}
            >
              <img src={aboutDotIdle} width={54} height={54} alt="" />
              <img className="quote-dot__on" src={aboutGallery[index].dot} width={54} height={54} alt="" />
              <span className="sr-only">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
