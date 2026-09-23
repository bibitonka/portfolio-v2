import Bee from './Bee.jsx'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <h2 className="display">
              BIBI<span className="ana italic-accent">ana</span>
              <span className="hero-last">Tonková</span>
            </h2>
            <p className="footer-place">
              Multimedia Designer
              <br />
              Aarhus, Denmark
            </p>
          </div>
          <div className="footer-cta">
            <p>“Have an idea? Let&apos;s make it visible.”</p>
            <div className="footer-actions">
              <a className="btn btn-forest" href="mailto:bibitonka@gmail.com">
                bibitonka@gmail.com
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.linkedin.com/in/bibiana-tonkov%C3%A1-0b269a435"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Bibiana · Portfolio v.2.0</p>
          <div className="footer-made">
            <Bee size={46} index={5} />
            <span>Made with curiosity & caffeine</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
