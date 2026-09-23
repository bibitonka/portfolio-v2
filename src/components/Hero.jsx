import Bee from './Bee.jsx'
import { portraitPhoto } from '../data.js'

export default function Hero({ onSeeWork }) {
  return (
    <section className="hero wrap" id="hero">
      <div className="hero-copy">
        <h1 className="display hero-name">
          BIBI<span className="ana">ana</span>
          <span className="hero-last">Tonková</span>
        </h1>
        <p className="hero-place">
          <span className="hero-role">Multimedia designer</span>
          <span aria-hidden="true"> · </span>
          Aarhus, DK
        </p>
        <p className="lede">
          Design is where ideas become something you can <em>see.</em>
        </p>
        <p className="sub">Visual design, UX/UI, illustration & turning ideas into visual experiences.</p>
        <button className="btn btn-forest" onClick={onSeeWork}>
          See my work
        </button>
      </div>

      <div className="hero-visual">
        <div className="hero-bee tl float-delayed">
          <Bee size={58} index={3} />
        </div>
        <div className="hero-bee bl float">
          <Bee size={50} index={1} />
        </div>

        <div className="portrait">
          <div className="portrait__honey" />
          <div className="portrait__back" />
          <div className="portrait__hex">
            <img src={portraitPhoto} alt="Bibi — multimedia designer" />
          </div>
          <Bee size={47} index={5} className="orbit-bee" />
        </div>
      </div>
    </section>
  )
}
