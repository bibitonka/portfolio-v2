import { useState } from 'react'
import Bee from './Bee.jsx'
import { aboutDotIdle, aboutGallery } from '../data.js'

const FRAME = 1099
const HEX_W = 951.762
const HEX_H = 1099
const PHOTO_W = 837.447
const PHOTO_H = 967
const HEX_TOP = [0, 340, 690]
const DOT_W = 54
const DOT_TOP = [0, 220, 440]
const Z_ORDER = [
  [2, 1, 0],
  [0, 2, 1],
  [0, 1, 2],
]

export default function About() {
  const [active, setActive] = useState(2)
  const [flip, setFlip] = useState(0)

  function showPhoto(index) {
    if (index === active) return
    setActive(index)
    setFlip((value) => value + 1)
  }

  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-gallery">
          <div className="about-gallery__inner">
            <div className="about-dots" role="tablist" aria-label="About photos">
              {aboutGallery.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  className="about-dot"
                  style={{ top: DOT_TOP[index], width: DOT_W, height: DOT_W }}
                  onClick={() => showPhoto(index)}
                >
                  <img src={aboutDotIdle} width={DOT_W} height={DOT_W} alt="" />
                  <img
                    className="about-dot__on"
                    src={slide.dot}
                    width={DOT_W}
                    height={DOT_W}
                    alt=""
                  />
                  <span className="sr-only">{slide.label}</span>
                </button>
              ))}
            </div>

            <div className="about-stack">
              {aboutGallery.map((slide, index) => (
                <button
                  key={active === index && flip > 0 ? `${slide.id}-${flip}` : slide.id}
                  type="button"
                  className={`about-hex${active === index ? ' is-front' : ''}${
                    active === index && flip > 0 ? ' is-flip' : ''
                  }`}
                  style={{
                    top: HEX_TOP[index],
                    zIndex: Z_ORDER[active].indexOf(index) + 1,
                    width: FRAME,
                    height: FRAME,
                  }}
                  onClick={() => showPhoto(index)}
                  aria-label={slide.label}
                  aria-pressed={active === index}
                >
                  <img
                    className="about-hex__frame"
                    src={slide.frame}
                    width={HEX_W}
                    height={HEX_H}
                    alt=""
                  />
                  <img
                    className="about-hex__photo"
                    src={slide.photo}
                    width={PHOTO_W}
                    height={PHOTO_H}
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="about-copy">
          <h2 className="display">
            Artist + designer,
            <br />
            <em className="italic-accent">always exploring, always creating</em>
          </h2>
          <div className="bio">
            <p>
              Hai hai! I am Bibi (or, if you&apos;d prefer my full name, Bibiana), a multimedia designer in
              the making and an artist at heart.
            </p>
            <p>
              Since I was a little kid, a pencil, sketchbook and colorful markers have been my best friends
              — and apparently, I decided to bring them with me into adulthood, together with my short
              height (but big personality!) :D
            </p>
            <p>
              I&apos;m a very social and communicative person, and my creativity tends to come along for the
              ride. Together, they&apos;ve shaped the way I approach design: I love listening to people,
              collecting little observations and turning ideas into something visual, meaningful and
              memorable.
            </p>
            <p>
              To me, good design is more than something that looks nice. It&apos;s something that makes you
              feel something — like a great piece of art.
            </p>
            <p>
              Outside of design, I&apos;m an enthusiastic… well, everything! I rarely do anything just for
              the sake of doing it — when something catches my interest, I tend to throw my whole self into
              it and see where it takes me. In summer, you&apos;ll probably find me on my motorcycle,
              obsessing over good weather, curvy roads and loud exhausts. But when the weather gets colder,
              search for me on plastic rocks in bouldering and climbing gyms instead. I&apos;m always up for
              trying something new, especially when there&apos;s a little bit of adrenaline involved (here
              you have a bungee jumping buddy if you ever need one).
            </p>
          </div>
        </div>
      </div>
      <div className="hero-bee tl float-delayed" style={{ right: '2.5rem', top: '4rem' }}>
        <Bee size={36} index={2} />
      </div>
    </section>
  )
}
