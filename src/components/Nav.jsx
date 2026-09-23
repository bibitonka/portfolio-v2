import { useEffect, useState } from 'react'
import Bee from './Bee.jsx'

const items = [
  { id: 'hive', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ onNavigate, onBack, isSubpage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goHome = () => {
    if (isSubpage) onBack()
    else onNavigate('hero')
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`nav ${scrolled || menuOpen ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
        <button className="nav-logo" onClick={goHome} aria-label="Home">
          BIBI<em>ana</em>
          <em>Tonková</em>
        </button>

        <div className="nav-desktop">
          {isSubpage ? (
            <button className="nav-link" onClick={onBack}>
              ← Back to hive
            </button>
          ) : (
            items.map((item) => (
              <button key={item.id} className="nav-link" onClick={() => onNavigate(item.id)}>
                {item.label}
              </button>
            ))
          )}
          <Bee size={50} index={0} />
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <span className="nav-x">✕</span>
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="nav-drawer">
          {isSubpage ? (
            <button
              className="nav-link"
              onClick={() => {
                onBack()
                setMenuOpen(false)
              }}
            >
              ← Back to hive
            </button>
          ) : (
            items.map((item) => (
              <button
                key={item.id}
                className="nav-link"
                onClick={() => {
                  onNavigate(item.id)
                  setMenuOpen(false)
                }}
              >
                {item.label}
              </button>
            ))
          )}
        </div>
      )}
    </>
  )
}
