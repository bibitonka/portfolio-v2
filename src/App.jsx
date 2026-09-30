import { useEffect, useState } from 'react'
import HoneycombBg from './components/HoneycombBg.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Hive from './components/Hive.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Testimonial from './components/Testimonial.jsx'
import Footer from './components/Footer.jsx'
import ProjectOverlay from './components/ProjectOverlay.jsx'
import CaseStudy from './components/CaseStudy.jsx'
import DigitalArt from './components/DigitalArt.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  const [activeProject, setActiveProject] = useState(null)
  const [caseId, setCaseId] = useState('hidden-holds')

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (id === 'digital-art') {
      setPage('digital-art')
      return
    }
    if (!id) return
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [])

  const handleBack = () => {
    setPage('home')
    setTimeout(() => scrollTo('hive'), 80)
  }

  return (
    <div className="page">
      <HoneycombBg />
      <Nav
        onNavigate={scrollTo}
        onBack={handleBack}
        isSubpage={page === 'case-study' || page === 'digital-art'}
      />

      {page === 'case-study' ? (
        <CaseStudy projectId={caseId} onBack={handleBack} />
      ) : page === 'digital-art' ? (
        <DigitalArt onBack={handleBack} />
      ) : (
        <>
          <Hero onSeeWork={() => scrollTo('hive')} />
          <Hive onOpenProject={setActiveProject} />
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
          onExplore={() => {
            const nextPage = activeProject === 'digital-art' ? 'digital-art' : 'case-study'
            if (nextPage === 'case-study') setCaseId(activeProject)
            setActiveProject(null)
            setPage(nextPage)
            window.scrollTo(0, 0)
          }}
        />
      )}
    </div>
  )
}
