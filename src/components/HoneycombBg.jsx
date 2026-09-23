import { useEffect, useRef } from 'react'

export default function HoneycombBg() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const onMove = (event) => {
      root.style.setProperty('--mx', `${event.clientX}px`)
      root.style.setProperty('--my', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="comb-bg" ref={ref} aria-hidden="true">
      <svg className="comb-bg__grid" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="comb" width="56" height="97" patternUnits="userSpaceOnUse">
            <polygon
              points="28,3 53,17.5 53,46.5 28,61 3,46.5 3,17.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <polygon
              points="56,48.5 81,63 81,92 56,106.5 31,92 31,63"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            />
            <polygon
              points="0,48.5 25,63 25,92 0,106.5 -25,92 -25,63"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#comb)" />
      </svg>
      <div className="comb-bg__glow" />
    </div>
  )
}
