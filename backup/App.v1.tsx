import { useState, useEffect } from 'react'
import HiddenHoldsHero from './imports/hidden_holds_hero.png'
import TattooPhoto from './imports/tattoo_shop_hero.png'
import BlasolPhoto from './imports/bla_sol_hero.png'
import IllustrationsPhoto from './imports/illustration_hero.png'
import PortraitPhoto from './imports/me.png'
import AboutPhoto from './imports/me_climb.JPG'
import Bee1Url from './imports/Bee_1.svg'
import Bee2Url from './imports/Bee_2.svg'
import Bee3Url from './imports/Bee_3.svg'
import Bee4Url from './imports/Bee_4.svg'
import Bee5Url from './imports/Bee_5.svg'
import Bee6Url from './imports/Bee_6.svg'

const BEE_SOURCES = [Bee1Url, Bee2Url, Bee3Url, Bee4Url, Bee5Url, Bee6Url]

function Bee({
  size = 48,
  className = '',
  index = 0,
  fit = 0.88,
}: {
  size?: number
  className?: string
  index?: number
  fit?: number
}) {
  const inner = Math.round(size * fit)
  return (
    <div
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className={className}
      aria-hidden="true"
    >
      <img
        src={BEE_SOURCES[index % 6]}
        alt=""
        style={{
          width: inner,
          height: inner,
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  )
}

function PoppyFlower() {
  const petalColors = ['#D4826A','#C9725C','#DC8E78','#CB7A68','#D47A6A','#C57060','#D07268','#C66058']
  return (
    <svg viewBox="0 0 120 190" fill="none" width="105" height="165" className="flower-svg">
      <path d="M60 190 Q58 165 59 138" stroke="#5E7D50" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M59 168 Q37 160 32 144 Q47 147 59 160" fill="#6E8E5A" opacity="0.85" />
      <path d="M59 152 Q82 143 87 129 Q73 132 60 146" fill="#6E8E5A" opacity="0.85" />
      {[0,45,90,135,180,225,270,315].map((a, i) => {
        const rad = (a * Math.PI) / 180
        const cx = 60 + Math.sin(rad) * 25
        const cy = 92 + Math.cos(rad) * 25
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="13.5" ry="19"
            fill={petalColors[i % 8]} transform={`rotate(${a} ${cx} ${cy})`} opacity="0.9" />
        )
      })}
      <circle cx="60" cy="92" r="13" fill="#1E1B16" />
      <circle cx="60" cy="92" r="8" fill="#2E1A0A" />
      {[30,90,150,210,270,330].map((a, i) => {
        const rad = (a * Math.PI) / 180
        return <circle key={i} cx={60 + Math.sin(rad)*5} cy={92 - Math.cos(rad)*5} r="1.3" fill="#E6B93A" opacity="0.9" />
      })}
    </svg>
  )
}

function TulipFlower() {
  return (
    <svg viewBox="0 0 120 190" fill="none" width="105" height="165" className="flower-svg">
      <path d="M60 190 Q57 162 58 128" stroke="#5E7D50" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M58 156 Q36 148 31 132 Q47 136 58 150" fill="#6E8E5A" opacity="0.85" />
      <path d="M58 168 Q80 158 87 144 Q72 146 60 160" fill="#6E8E5A" opacity="0.85" />
      <path d="M37 125 Q35 94 50 78 Q55 71 60 67 Q65 71 70 78 Q85 94 83 125 Q74 116 60 116 Q46 116 37 125Z" fill="#E6B93A" />
      <path d="M47 123 Q45 94 56 80" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" fill="none"/>
      <path d="M73 123 Q75 94 64 80" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" fill="none"/>
      <path d="M39 123 Q29 103 33 82 Q39 72 50 75 Q44 92 43 118Z" fill="#D4A830" opacity="0.88" />
      <path d="M81 123 Q91 103 87 82 Q81 72 70 75 Q76 92 77 118Z" fill="#D4A830" opacity="0.88" />
    </svg>
  )
}

function WildRoseFlower() {
  const pColors = ['#C87D82','#BE6D74','#D08A8E','#C47A80','#C07076']
  return (
    <svg viewBox="0 0 120 190" fill="none" width="105" height="165" className="flower-svg">
      <path d="M60 190 Q62 162 60 133" stroke="#5E7D50" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M60 168 Q40 160 35 145 Q50 147 62 161" fill="#6E8E5A" opacity="0.85" />
      <path d="M60 152 Q83 143 88 128 Q74 131 61 145" fill="#6E8E5A" opacity="0.85" />
      {[0,72,144,216,288].map((a, i) => {
        const rad = (a * Math.PI) / 180
        const cx = 60 + Math.sin(rad) * 22
        const cy = 90 - Math.cos(rad) * 22
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="16" ry="22"
            fill={pColors[i % 5]} transform={`rotate(${a} ${cx} ${cy})`} opacity="0.88" />
        )
      })}
      <circle cx="60" cy="90" r="12" fill="#F0B840" />
      {[0,45,90,135,180,225,270,315].map((a, i) => {
        const rad = (a * Math.PI) / 180
        return <circle key={i} cx={60 + Math.sin(rad)*6.5} cy={90 - Math.cos(rad)*6.5} r="1.8" fill="#C07810" opacity="0.8" />
      })}
      <circle cx="60" cy="90" r="4.5" fill="#A86010" />
    </svg>
  )
}

function ChamomileFlower() {
  return (
    <svg viewBox="0 0 120 190" fill="none" width="105" height="165" className="flower-svg">
      <path d="M60 190 Q63 160 61 135" stroke="#5E7D50" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M61 168 Q39 160 34 145 Q49 147 61 162" fill="#6E8E5A" opacity="0.85" />
      {Array.from({ length: 14 }, (_, i) => {
        const a = (i * (360/14) * Math.PI) / 180
        const deg = i * (360/14)
        const cx = 60 + Math.sin(a) * 27
        const cy = 88 - Math.cos(a) * 27
        return (
          <ellipse key={i} cx={cx} cy={cy} rx="6.5" ry="19"
            fill="white" stroke="#E8E0D0" strokeWidth="0.5"
            transform={`rotate(${deg} ${cx} ${cy})`} opacity="0.96" />
        )
      })}
      <circle cx="60" cy="88" r="17" fill="#E6B93A" />
      <circle cx="60" cy="88" r="12" fill="#D4A030" />
      {[0,40,80,120,160,200,240,280,320].map((a, i) => {
        const rad = (a * Math.PI) / 180
        return <circle key={i} cx={60 + Math.sin(rad)*6.5} cy={88 - Math.cos(rad)*6.5} r="1.5" fill="#A87010" opacity="0.75" />
      })}
      <circle cx="60" cy="88" r="4" fill="#906010" />
    </svg>
  )
}

type Project = {
  id: string
  title: string
  category: string
  description: string
  role: string
  skills: string[]
  Flower: React.ComponentType
  accentColor: string
  bgColor: string
  image?: string
}

const projects: Project[] = [
  {
    id: 'hidden-holds',
    title: 'Hidden Holds Aarhus',
    category: 'UX/UI · Research · Visual Design',
    description: "An independent UX/UI project exploring how international newcomers experience climbing in Aarhus, translating research insights into a responsive digital experience focused on discovery, confidence and community.",
    role: 'Lead UX/UI Designer',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Figma'],
    Flower: PoppyFlower,
    accentColor: '#C87868',
    bgColor: '#F5E8E4',
    image: HiddenHoldsHero,
  },
  {
    id: 'bla-sol',
    title: 'Blå Sol Festival',
    category: 'UX Research · UX/UI · Wayfinding',
    description: 'Wayfinding system and digital companion app for a Danish music festival. Designed to feel clean for helping visitors explore without getting lost.',
    role: 'UX Researcher & Visual Designer',
    skills: ['Wayfinding Design', 'UX Research', 'Illustration', 'Brand Identity'],
    Flower: TulipFlower,
    accentColor: '#C49820',
    bgColor: '#FAF0C0',
    image: BlasolPhoto,
  },
  {
    id: 'tattoo-shop',
    title: 'Tattoo Shop',
    category: 'Visual Design · Photography · UX Research',
    description: "Brand identity, photography direction and booking interface for an independent tattoo studio. Balancing edge with accessibility, making the studio feel both daring, welcoming and keeping it's unique atmosphere.",
    role: 'Visual Designer & Photographer',
    skills: ['Photography', 'Brand Identity', 'UI Design', 'Art Direction'],
    Flower: WildRoseFlower,
    accentColor: '#C87D74',
    bgColor: '#F5E8E4',
    image: TattooPhoto,
  },
  {
    id: 'illustrations',
    title: 'Illustrations',
    category: 'Illustration',
    description: 'A personal collection of illustrations, character studies and hand-drawn work produced with digital softwares, my hand and imagination.',
    role: 'Illustrator',
    skills: ['Hand-drawing', 'Digital illustration'],
    Flower: ChamomileFlower,
    accentColor: '#5E7D50',
    bgColor: '#E8F0E4',
    image: IllustrationsPhoto,
  },
]

function Nav({ onNavigate, onBack, isCaseStudy }: { onNavigate: (id: string) => void; onBack: () => void; isCaseStudy: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navItems = ['garden', 'about', 'contact'] as const
  const label = (id: string) => id === 'garden' ? 'Work' : id.charAt(0).toUpperCase() + id.slice(1)

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          boxSizing: 'border-box', width: '100%', height: '64px',
          backgroundColor: scrolled || menuOpen ? 'rgba(250,247,240,0.97)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(30,27,22,0.08)' : '1px solid transparent',
          transition: 'background-color 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease',
          padding: '0 2.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <button
          onClick={isCaseStudy ? onBack : () => onNavigate('hero')}
          style={{
            fontFamily: 'Fraunces, serif', fontSize: '1.4rem', fontWeight: 900,
            color: 'var(--charcoal)', border: 'none', background: 'none', cursor: 'pointer',
            letterSpacing: '-0.03em', padding: 0, display: 'flex', alignItems: 'baseline', gap: '0.05em',
          }}
          aria-label="Home"
        >
          <span style={{ color: 'var(--charcoal)' }}>BIBI</span><span style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--leaf)', fontSize: '1.1rem' }}>ana</span>
          <span style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--leaf)', fontSize: '1.1rem' }}>Tonková</span>
        </button>

        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {isCaseStudy ? (
            <button onClick={onBack} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--muted-text)', textTransform: 'uppercase', border: 'none', background: 'none', cursor: 'pointer' }}>
              ← Back to portfolio
            </button>
          ) : (
            navItems.map(id => (
              <button key={id} onClick={() => onNavigate(id)}
                style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--charcoal-soft)', textTransform: 'uppercase', border: 'none', background: 'none', cursor: 'pointer', padding: '0.25rem 0', borderBottom: '1.5px solid transparent', transition: 'border-color 0.2s, color 0.2s' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.borderBottomColor = 'var(--honey)'; (e.target as HTMLElement).style.color = 'var(--charcoal)' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.borderBottomColor = 'transparent'; (e.target as HTMLElement).style.color = 'var(--charcoal-soft)' }}
              >
                {label(id)}
              </button>
            ))
          )}
          <Bee size={54} index={0} />
        </div>

        <div className="nav-mobile" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
          <Bee size={50} index={0} />
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            {menuOpen ? (
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '1.2rem', color: 'var(--charcoal)', lineHeight: 1 }}>✕</span>
            ) : (
              <>
                <span style={{ display: 'block', width: 24, height: 2, backgroundColor: 'var(--charcoal)', borderRadius: 2, transition: 'all 0.2s' }} />
                <span style={{ display: 'block', width: 18, height: 2, backgroundColor: 'var(--charcoal)', borderRadius: 2, transition: 'all 0.2s' }} />
                <span style={{ display: 'block', width: 24, height: 2, backgroundColor: 'var(--charcoal)', borderRadius: 2, transition: 'all 0.2s' }} />
              </>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          backgroundColor: 'rgba(250,247,240,0.97)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(30,27,22,0.08)',
          display: 'flex', flexDirection: 'column', padding: '1.5rem 2.5rem 2rem',
          gap: '1.5rem', animation: 'fadeIn 0.2s ease',
        }}>
          {isCaseStudy ? (
            <button onClick={() => { onBack(); setMenuOpen(false) }} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', letterSpacing: '0.08em', color: 'var(--muted-text)', textTransform: 'uppercase', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left' }}>
              ← Back to portfolio
            </button>
          ) : (
            navItems.map(id => (
              <button key={id} onClick={() => { onNavigate(id); setMenuOpen(false) }}
                style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', letterSpacing: '0.08em', color: 'var(--charcoal)', textTransform: 'uppercase', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left', padding: '0.25rem 0', borderBottom: '1.5px solid var(--border-soft)' }}
              >
                {label(id)}
              </button>
            ))
          )}
        </div>
      )}
    </>
  )
}

function Hero({ onScrollToGarden }: { onScrollToGarden: () => void }) {
  const [beeMode, setBeeMode] = useState(false)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '6rem 2.5rem 4rem',
        maxWidth: '1280px', margin: '0 auto',
        position: 'relative',
      }}
    >
      <div style={{ flex: '1 1 50%', paddingRight: '3rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <span style={{
            fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--leaf)', display: 'inline-flex',
            alignItems: 'center', gap: '0.5rem',
          }}>
            <span style={{ width: 24, height: 1.5, backgroundColor: 'var(--leaf)', display: 'inline-block' }} />
            Multimedia Designer
          </span>
        </div>

        <h1 style={{ fontFamily: 'Fraunces, serif', lineHeight: 0.88, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
          <span style={{ display: 'block', fontSize: 'clamp(4.5rem,12vw,10rem)', fontWeight: 900, color: 'var(--charcoal)' }}>
            BIBI<span style={{ fontSize: 'clamp(2rem,5.5vw,4.5rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--leaf)', letterSpacing: '0.02em' }}>ana</span>
          </span>
          <span style={{ display: 'block', fontSize: 'clamp(2rem,5.5vw,4.5rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--leaf)', letterSpacing: '0.02em' }}>
            Tonková
          </span>
        </h1>

        <div style={{
          fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--muted-text)',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.75rem',
        }}>
          Aarhus, DK
        </div>

        <p style={{
          fontSize: '1.1rem', color: 'var(--charcoal-soft)', lineHeight: 1.65,
          maxWidth: '38ch', marginBottom: '2.5rem', fontWeight: 300,
        }}>
          Design is where ideas become something you can{' '}
          <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', color: 'var(--charcoal)', fontWeight: 400 }}>see.</span>
          <br />
          <span style={{ fontSize: '0.95rem', color: 'var(--muted-text)', marginTop: '0.5rem', display: 'block' }}>
            Visual design, UX/UI, illustration & turning ideas into visual experiences.
          </span>
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={onScrollToGarden}
            style={{
              backgroundColor: 'var(--charcoal)', color: 'var(--cream)',
              padding: '0.85rem 2rem', borderRadius: '100px', border: 'none',
              fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', fontWeight: 500,
              cursor: 'pointer', letterSpacing: '0.01em',
              transition: 'background-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              ;(e.target as HTMLElement).style.backgroundColor = 'var(--leaf)'
              ;(e.target as HTMLElement).style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              ;(e.target as HTMLElement).style.backgroundColor = 'var(--charcoal)'
              ;(e.target as HTMLElement).style.transform = 'none'
            }}
          >
            See my work
          </button>
        </div>
      </div>

      <div style={{
        flex: '1 1 50%', display: 'flex', justifyContent: 'center', alignItems: 'center',
        position: 'relative', minHeight: '520px',
      }}>
        <div className="hero-blob" style={{
          position: 'absolute', width: '420px', height: '460px',
          backgroundColor: '#FFEA9D',
          borderRadius: '62% 38% 46% 54% / 56% 44% 56% 44%',
          zIndex: 0, top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              width: 340, height: 400,
              overflow: 'hidden',
              position: 'relative',
              cursor: beeMode ? 'default' : 'pointer',
            }}
            className="blob-portrait"
            onClick={() => !beeMode && setBeeMode(true)}
            title={beeMode ? '' : 'Click to meet the bee'}
          >
            <img
              src={PortraitPhoto}
              alt="Bibi — multimedia designer drawing at her desk"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                opacity: beeMode ? 0 : 1,
                transform: beeMode ? 'scale(1.08)' : 'scale(1)',
              }}
            />
            {beeMode && (
              <div
                className="animate-bee-entrance"
                style={{
                  position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'var(--honey-light)',
                  gap: '1rem',
                }}
              >
                <div style={{ overflow: 'hidden', height: 165 }}>
                  <Bee size={210} index={2} fit={0.75} className="animate-float" />
                </div>
                <p style={{
                  fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1.1rem',
                  color: 'var(--charcoal)', opacity: 0.8, letterSpacing: '0.01em',
                }}>
                  Follow the bee
                </p>
              </div>
            )}
          </div>

          {!beeMode && (
            <div style={{
              position: 'absolute', bottom: '1rem', right: '-1.5rem',
              backgroundColor: 'var(--honey-light)', borderRadius: '100px',
              padding: '0.4rem 0.8rem', fontSize: '0.7rem', fontFamily: 'DM Mono, monospace',
              color: 'var(--honey-dark)', letterSpacing: '0.06em',
              border: '1px solid var(--honey)',
              animation: 'fadeIn 1s ease 1.5s both',
            }}>
              click me ✦
            </div>
          )}
        </div>

      </div>

      <div style={{ position: 'absolute', top: '7rem', right: '2.5rem', pointerEvents: 'none', zIndex: 1 }} className="animate-float-right">
        <Bee size={42} index={3} />
      </div>
      <div style={{ position: 'absolute', bottom: '3.5rem', left: '2.5rem', pointerEvents: 'none', zIndex: 1 }} className="animate-float">
        <Bee size={36} index={1} />
      </div>
    </section>
  )
}

function FlowerCard({
  project, index, onSelect,
}: {
  project: Project; index: number; onSelect: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const offsets = [
    { top: '12%', left: '3%'  },
    { top: '0%',  left: '27%' },
    { top: '8%',  left: '53%' },
    { top: '2%',  left: '77%' },
  ]

  const FlowerComp = project.Flower

  return (
    <div
      style={{
        position: 'absolute',
        ...offsets[index],
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        cursor: 'pointer', width: '20%', minWidth: '140px',
        transition: 'transform 0.2s',
      }}
      className="flower-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect()}
      aria-label={`Open ${project.title}`}
    >
      <FlowerComp />
      <div style={{ textAlign: 'center', marginTop: '0.75rem' }}>
        <p style={{
          fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', letterSpacing: '0.1em',
          textTransform: 'uppercase', color: 'var(--leaf)', marginBottom: '0.25rem',
        }}>
          {project.category.split('·')[0].trim()}
        </p>
        <p style={{
          fontFamily: 'Fraunces, serif', fontSize: '1rem', fontWeight: 700,
          color: 'var(--charcoal)', lineHeight: 1.2,
          transition: 'color 0.2s',
          ...(hovered ? { color: project.accentColor } : {}),
        }}>
          {project.title}
        </p>
        <div style={{
          width: 20, height: 1.5, backgroundColor: project.accentColor,
          margin: '0.4rem auto 0', opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s, width 0.2s',
          ...(hovered ? { width: 40 } : {}),
        }} />
      </div>
    </div>
  )
}

function Garden({ onOpenProject }: { onOpenProject: (id: string) => void }) {
  return (
    <section id="garden" style={{ padding: '5rem 2.5rem 3rem', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem' }}>
        <div>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--leaf)', marginBottom: '0.6rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <span style={{ width: 24, height: 1.5, backgroundColor: 'var(--leaf)', display: 'inline-block' }} />
            The Garden
          </p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--charcoal)' }}>
            Projects in <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--leaf)' }}>bloom</span>
          </h2>
        </div>
        <div style={{ pointerEvents: 'none', flexShrink: 0, paddingBottom: '0.5rem' }} className="animate-float">
          <Bee size={44} index={4} />
        </div>
      </div>

      <div style={{ position: 'relative', height: '420px', width: '100%' }}>
        {projects.map((p, i) => (
          <FlowerCard key={p.id} project={p} index={i} onSelect={() => onOpenProject(p.id)} />
        ))}

        <svg
          viewBox="0 0 1200 80" preserveAspectRatio="none"
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 80 }}
          aria-hidden="true"
        >
          <path d="M0 40 Q150 10 300 40 Q450 70 600 40 Q750 10 900 40 Q1050 70 1200 40 L1200 80 L0 80 Z" fill="var(--cream-deep)" />
        </svg>
      </div>

      <div style={{ backgroundColor: 'var(--cream-deep)', borderRadius: '0 0 2rem 2rem', padding: '1rem 2rem' }}>
        <p style={{
          fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'var(--muted-text)',
          letterSpacing: '0.08em', textAlign: 'center',
        }}>
          ✦ each flower is a project ✦ click to explore ✦
        </p>
      </div>

      <div style={{ display: 'none' }} className="mobile-garden">
        {projects.map(p => {
          const FlowerComp = p.Flower
          return (
            <div key={p.id} onClick={() => onOpenProject(p.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem',
                backgroundColor: p.bgColor, borderRadius: '1.25rem', marginTop: '1rem',
                cursor: 'pointer',
              }}
            >
              <div style={{ width: 70, flexShrink: 0 }}>
                <FlowerComp />
              </div>
              <div>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: p.accentColor, marginBottom: '0.25rem' }}>
                  {p.category}
                </p>
                <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--charcoal)' }}>
                  {p.title}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function ProjectOverlay({
  projectId, onClose, onExplore,
}: {
  projectId: string; onClose: () => void; onExplore: () => void
}) {
  const project = projects.find(p => p.id === projectId)!
  const FlowerComp = project.Flower

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        backgroundColor: 'rgba(30,27,22,0.6)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
        animation: 'fadeIn 0.3s ease',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        style={{
          backgroundColor: 'var(--cream)', borderRadius: '2rem',
          padding: '3rem', maxWidth: '820px', width: '100%',
          position: 'relative', maxHeight: '90vh', overflowY: 'auto',
          animation: 'scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.5rem', right: '1.5rem',
            background: 'var(--cream-deep)', border: 'none', borderRadius: '50%',
            width: 38, height: 38, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', color: 'var(--charcoal-soft)',
          }}
          aria-label="Close"
        >
          ✕
        </button>

        <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', justifyContent: 'center', width: 120 }}>
            <FlowerComp />
          </div>

          <div style={{ flex: 1, minWidth: '260px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--leaf)', marginBottom: '0.5rem',
            }}>
              {project.category}
            </p>
            <h2 style={{
              fontFamily: 'Fraunces, serif', fontSize: '2rem', fontWeight: 900,
              letterSpacing: '-0.03em', color: 'var(--charcoal)', marginBottom: '0.75rem', lineHeight: 1.05,
            }}>
              {project.title}
            </h2>

            <div style={{
              width: '100%', height: '200px', borderRadius: '1rem',
              backgroundColor: project.bgColor, marginBottom: '1.5rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: `1.5px solid ${project.accentColor}28`,
              position: 'relative', overflow: 'hidden',
            }}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block', position: 'absolute', inset: 0 }}
                />
              )}
              <div style={{
                position: 'absolute', bottom: '0.75rem', right: '0.75rem',
                backgroundColor: project.accentColor, borderRadius: '100px',
                padding: '0.2rem 0.6rem', fontSize: '0.65rem', color: 'white',
                fontFamily: 'DM Mono, monospace', letterSpacing: '0.06em',
              }}>
                {project.role}
              </div>
            </div>

            <p style={{ color: 'var(--charcoal-soft)', lineHeight: 1.7, fontSize: '0.97rem', marginBottom: '1.5rem' }}>
              {project.description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', fontFamily: 'DM Mono, monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-text)', marginBottom: '0.6rem' }}>
                Key skills
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.skills.map(s => (
                  <span key={s} className="skill-tag" style={{ backgroundColor: project.bgColor }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {projectId === 'hidden-holds' && (
              <button
                onClick={onExplore}
                style={{
                  backgroundColor: project.accentColor, color: 'white',
                  padding: '0.8rem 2rem', borderRadius: '100px', border: 'none',
                  fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', fontWeight: 500,
                  cursor: 'pointer', transition: 'transform 0.2s, opacity 0.2s',
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.transform = 'none' }}
              >
                Explore case study →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  const [illustrationMode, setIllustrationMode] = useState(false)

  return (
    <section id="about" style={{ padding: '6rem 2.5rem', maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
      <div style={{ display: 'flex', gap: '5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 auto', position: 'relative' }}>
          <div style={{
            width: 340, height: 400, position: 'relative', overflow: 'hidden',
            borderRadius: '44% 56% 62% 38% / 55% 45% 55% 45%',
            transition: 'border-radius 0.6s ease',
            cursor: 'pointer',
          }}
          onClick={() => setIllustrationMode(m => !m)}
          title="Click to see the artist"
          >
            <img
              src={AboutPhoto}
              alt="Bibi"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'filter 0.7s ease, transform 0.7s ease',
                filter: illustrationMode
                  ? 'grayscale(1) contrast(1.4) brightness(1.1) sepia(0.3)'
                  : 'saturate(1.1) brightness(1.02)',
                transform: illustrationMode ? 'scale(1.04)' : 'scale(1)',
              }}
            />
          </div>

          <div style={{
            position: 'absolute', bottom: '-1.5rem', left: '50%', transform: 'translateX(-50%)',
            backgroundColor: 'var(--charcoal)', color: 'var(--cream)',
            padding: '0.35rem 1.1rem', borderRadius: '100px', whiteSpace: 'nowrap',
            fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.08em',
            cursor: 'pointer',
          }}
          onClick={() => setIllustrationMode(m => !m)}
          >
            {illustrationMode ? '← the person' : 'the artist →'}
          </div>

          <div style={{
            position: 'absolute', top: '-1rem', right: '-1rem',
            width: 60, height: 60,
            backgroundColor: 'var(--honey-light)',
            borderRadius: '50%', zIndex: -1,
          }} />
        </div>

        <div style={{ flex: '1 1 340px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--leaf)', marginBottom: '0.6rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <span style={{ width: 24, height: 1.5, backgroundColor: 'var(--leaf)', display: 'inline-block' }} />
            About Bibi
          </p>

          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--charcoal)', marginBottom: '1.5rem' }}>
            Artist + designer,<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--leaf)' }}>always curious.</span>
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--charcoal-soft)', lineHeight: 1.75, marginBottom: '2rem' }}>
            Hi, I'm Bibiana — but everyone calls me Bibi. I'm a multimedia design student who likes turning ideas, conversations and observations into something visual and memorable.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Visual design','Illustration','UX/UI','User research','Creative collaboration','Photography','Storytelling'].map(t => (
              <span key={t} style={{
                padding: '0.35rem 0.9rem', borderRadius: '100px',
                backgroundColor: '#FFEA9D', fontSize: '0.82rem',
                fontFamily: 'DM Mono, monospace', letterSpacing: '0.02em',
                color: 'var(--charcoal-soft)',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', top: '5rem', right: '2.5rem', pointerEvents: 'none' }} className="animate-float-right">
        <Bee size={36} index={2} />
      </div>
    </section>
  )
}

function Skills() {
  const categories = [
    {
      name: 'Design',
      color: 'var(--rose)',
      skills: ['Figma','UI/UX','Wireframing','Prototyping','Visual Design','Illustration','Storytelling'],
    },
    {
      name: 'Research',
      color: 'var(--leaf)',
      skills: ['User Interviews','Observation','Pattern Recognition','User Research'],
    },
    {
      name: 'Creative Tools',
      color: 'var(--honey-dark)',
      skills: ['Clip Studio Paint','Adobe Lightroom','Photography','Video Editing'],
    },
    {
      name: 'Web',
      color: 'var(--charcoal-soft)',
      skills: ['HTML','CSS','Basic JavaScript','AI-assisted Development'],
    },
  ]

  return (
    <section id="skills" style={{ padding: '4rem 2.5rem 5rem', backgroundColor: 'var(--charcoal)', color: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        <div style={{ marginBottom: '3rem', position: 'relative' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--honey)', marginBottom: '0.6rem',
            display: 'flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <span style={{ width: 24, height: 1.5, backgroundColor: 'var(--honey)', display: 'inline-block' }} />
            Skills & tools
          </p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem,4.5vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--cream)', maxWidth: 'min(100%, 520px)' }}>
            What I bring<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--honey)' }}>to the table.</span>
          </h2>
          <div style={{ position: 'absolute', top: 0, right: 0, pointerEvents: 'none' }} className="animate-float-right">
            <Bee size={38} index={1} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
          {categories.map(cat => (
            <div key={cat.name}>
              <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.1rem', fontWeight: 700, color: cat.color, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                {cat.name}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {cat.skills.map(s => (
                  <span key={s} style={{
                    padding: '0.3rem 0.85rem', borderRadius: '100px',
                    border: '1.5px solid rgba(250,247,240,0.15)',
                    fontFamily: 'DM Mono, monospace', fontSize: '0.75rem',
                    color: 'rgba(250,247,240,0.8)', letterSpacing: '0.02em',
                    transition: 'background 0.2s, border-color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLElement).style.backgroundColor = `${cat.color}22`
                    ;(e.target as HTMLElement).style.borderColor = cat.color
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent'
                    ;(e.target as HTMLElement).style.borderColor = 'rgba(250,247,240,0.15)'
                  }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', pointerEvents: 'none' }} className="animate-float">
          <Bee size={34} index={0} />
        </div>
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section style={{ padding: '6rem 2.5rem', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ position: 'relative', padding: '3rem', backgroundColor: 'var(--honey-light)', borderRadius: '2rem' }}>
        <div style={{
          position: 'absolute', top: '-1.5rem', left: '2.5rem',
          fontFamily: 'Fraunces, serif', fontSize: '6rem', fontWeight: 900,
          color: 'var(--honey)', lineHeight: 1, opacity: 0.6,
          userSelect: 'none', pointerEvents: 'none',
        }}>
          "
        </div>

        <p style={{
          fontFamily: 'Fraunces, serif', fontSize: 'clamp(1rem,2.2vw,1.2rem)', fontStyle: 'italic',
          color: 'var(--charcoal)', lineHeight: 1.75, marginBottom: '1.75rem',
          position: 'relative', zIndex: 1,
        }}>
          Working with Bibiana on our project together was an absolute delight! Her creative energy was the core driving force, from initial conceptualization to drawing sketches and creating the prototype, she was instrumental in shaping the final result of the product. Her expertise in UX & UI paired with her understanding of design and her creative skills are unmatched. On top of that her positive, energetic work ethic was contagious, creating a productive and friendly work atmosphere, which made working together a fun, pleasurable experience.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: 50, height: 50, borderRadius: '50%',
            backgroundColor: 'var(--rose-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden', flexShrink: 0,
          }}>
            <div style={{ position: 'relative', left: -2, top: 2 }}>
              <Bee size={50} index={4} />
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 600, color: 'var(--charcoal)', fontSize: '0.9rem' }}>Project collaborator</p>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', color: 'var(--muted-text)', letterSpacing: '0.06em' }}>
              MULTIMEDIA DESIGN, AARHUS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" style={{
      backgroundColor: 'var(--cream-deep)', padding: '4rem 2.5rem 2.5rem',
      borderTop: '1px solid var(--border-soft)',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--charcoal)', lineHeight: 1, marginBottom: '0.5rem' }}>
              BIBI<span style={{ fontWeight: 300, fontStyle: 'italic', color: 'var(--leaf)', fontSize: '1.8rem' }}>ana</span>
              <span style={{ display: 'block', fontWeight: 300, fontStyle: 'italic', color: 'var(--leaf)', fontSize: '1.8rem' }}>Tonková</span>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.6 }}>
              Multimedia Designer<br />Aarhus, Denmark
            </p>
          </div>

          <div style={{ maxWidth: '360px' }}>
            <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--charcoal)', lineHeight: 1.3, marginBottom: '1.25rem' }}>
              "Have an idea? Let's make it visible."
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="mailto:bibitonka@gmail.com" style={{
                backgroundColor: 'var(--charcoal)', color: 'var(--cream)',
                padding: '0.7rem 1.5rem', borderRadius: '100px', textDecoration: 'none',
                fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.06em',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.backgroundColor = 'var(--leaf)' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.backgroundColor = 'var(--charcoal)' }}
              >
                bibitonka@gmail.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" style={{
                backgroundColor: 'transparent', color: 'var(--charcoal)',
                padding: '0.7rem 1.5rem', borderRadius: '100px', textDecoration: 'none',
                fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.06em',
                border: '1.5px solid var(--border-soft)', transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = 'var(--charcoal)' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = 'var(--border-soft)' }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--muted-text)', letterSpacing: '0.06em' }}>
            © 2026 Bibiana · Portfolio prototype v.2.0
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Bee size={50} index={5} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', color: 'var(--muted-text)', letterSpacing: '0.06em' }}>
              Made with curiosity & caffeine
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function CaseStudy({ onBack }: { onBack: () => void }) {
  const sections: { label: string; content: string; placeholder?: boolean }[] = [
    { label: 'Finding the overlooked', content: "Climbing can feel overwhelming when you're just starting out, especially when you're new to both the sport and the local community.\n\nFor this project, I explored the experience of international climbers in Aarhus and discovered three less-visible climbing locations: Aarhus Klatreklub, Aarhus Boulders Nord and Midtby Boulderen.\n\nThe goal was to create a digital experience that makes discovering these places easier while helping newer climbers feel more confident, informed and connected.", placeholder: true },
    { label: 'My role', content: "Independent project, which I carried from research to final implementation.\n\nI conducted desk and field research, visited climbing locations, interviewed international climbers, analyzed the findings and translated them into a visual and functional solution.\n\nI worked through the process from research → definition → ideation → wireframing → visual design → prototyping → development." },
    { label: 'The challenge', content: "\"How might we help climbers in their first months discover different climbing spaces in Aarhus and feel more comfortable navigating the local climbing community?\"\n\nResearch showed that the gyms themselves were generally easy to find, but the differences between them were less clear to newer climbers. Participants also mentioned uncertainty around things like grading systems, technique, safety and social norms.\n\nAt the same time, the social atmosphere was an important part of what made climbing enjoyable for each beginner-climber.", placeholder: true },
    { label: 'From research to solution', content: "I used interviews, observations and desk research to identify recurring patterns in the experiences of early-stage climbers. I then translated these insights into a persona, affinity mapping, a VPC and a set of requirements for the solution.\n\nFrom there, I explored different directions through sketches and low-fidelity wireframes before testing the structure with users.\n\nTesting helped me identify issues with navigation, content clarity and visual hierarchy, which I then carried into the high-fidelity design.", placeholder: true },
    { label: 'The final solution', content: "The result is a responsive website that brings together climbing locations, practical information, community-oriented content and beginner-friendly guidance in one place.\n\nThe visual identity was designed around the atmosphere of climbing: relaxed, welcoming and playful, while still keeping large amounts of information easy to navigate.\n\nI also developed the final solution using HTML, CSS and JavaScript, including responsive layouts, mobile navigation, expandable content and custom CSS shapes inspired by climbing holds.", placeholder: true },
    { label: "What I'm proud of", content: "Taking the entire project from an open-ended problem to a finished solution.\n\nThis was also one of the projects where I had the most creative freedom, which allowed me to combine my interests in research, visual design, illustration, UX and development rather than focusing on only one part of the process." },
  ]

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', fontFamily: 'Outfit, sans-serif' }}>
      <div style={{
        height: '55vh', minHeight: '380px', position: 'relative', overflow: 'hidden',
        backgroundColor: '#D4C4B8', zIndex: 0,
      }}>
        <img
          src={HiddenHoldsHero}
          alt="Indoor bouldering wall at Hidden Holds Aarhus"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,27,22,0.7) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '2.5rem', color: 'white',
        }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.75, marginBottom: '0.5rem' }}>
            UX/UI · Research · Visual Design · Development
          </p>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
            Hidden Holds Aarhus
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2.5rem 6rem' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem',
          padding: '2rem', backgroundColor: 'var(--cream-deep)', borderRadius: '1.25rem', marginBottom: '3.5rem',
        }}>
          {[
            { label: 'Role', value: 'Lead UX/UI Designer' },
            { label: 'Duration', value: '3,5 weeks' },
            { label: 'Tools', value: 'Figma, VSCode' },
            { label: 'Team', value: 'Solo' },
            { label: 'Project type', value: 'Semester project' },
          ].map(item => (
            <div key={item.label}>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-text)', marginBottom: '0.25rem' }}>
                {item.label}
              </p>
              <p style={{ fontWeight: 500, color: 'var(--charcoal)', fontSize: '0.92rem' }}>{item.value}</p>
            </div>
          ))}
        </div>

        {sections.map((sec, i) => (
          <div key={sec.label} style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span style={{
                fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'white', backgroundColor: 'var(--charcoal)',
                padding: '0.2rem 0.6rem', borderRadius: '100px',
              }}>
                0{i + 1}
              </span>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.4rem', fontWeight: 700, color: 'var(--charcoal)', letterSpacing: '-0.02em' }}>
                {sec.label}
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {sec.content.split('\n\n').map((para, j) => (
                <p key={j} style={{ fontSize: '1rem', color: 'var(--charcoal-soft)', lineHeight: 1.8, margin: 0 }}>
                  {para}
                </p>
              ))}
              {sec.placeholder && (
                <div style={{
                  marginTop: '1.5rem',
                  borderRadius: '1rem',
                  border: '1.5px dashed var(--border-soft)',
                  backgroundColor: 'var(--cream-deep)',
                  height: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted-text)',
                }}>
                  <span style={{ fontSize: '1.5rem', opacity: 0.4 }}>⬚</span>
                </div>
              )}
            </div>
          </div>
        ))}

        <div style={{
          padding: '2.5rem', backgroundColor: 'var(--cream-deep)', borderRadius: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem',
        }}>
          <div>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted-text)', marginBottom: '0.3rem' }}>Next project</p>
            <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.2rem', fontWeight: 700, color: 'var(--charcoal)' }}>Blå Sol Festival</p>
          </div>
          <button onClick={onBack} style={{
            backgroundColor: 'var(--charcoal)', color: 'var(--cream)',
            padding: '0.8rem 2rem', borderRadius: '100px', border: 'none',
            fontFamily: 'Outfit, sans-serif', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer',
          }}>
            ← Back to garden
          </button>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState<'home' | 'case-study'>('home')
  const [activeProject, setActiveProject] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleBack = () => {
    setPage('home')
    setTimeout(() => scrollToSection('garden'), 100)
  }

  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh' }}>
      <Nav onNavigate={scrollToSection} onBack={handleBack} isCaseStudy={page === 'case-study'} />

      {page === 'case-study' ? (
        <div style={{ paddingTop: '64px' }}>
          <CaseStudy onBack={handleBack} />
        </div>
      ) : (
        <>
          <Hero onScrollToGarden={() => scrollToSection('garden')} />
          <Garden onOpenProject={id => setActiveProject(id)} />
          <About />
          <Skills />
          <Testimonial />
          <Footer />
        </>
      )}

      {activeProject && (
        <ProjectOverlay
          projectId={activeProject}
          onClose={() => setActiveProject(null)}
          onExplore={() => { setActiveProject(null); setPage('case-study') }}
        />
      )}
    </div>
  )
}
