import { useCallback, useEffect, useRef, useState } from 'react'
import PetalBackground from './PetalBackground'
import TimelineItem from './components/TimelineItem'
import { PrototypeWindow } from './components/PatentReviewDemo.tsx'
import { timeline } from './data/timeline'
import './App.css'

function App() {
  const [open, setOpen] = useState(null)
  const [prototype, setPrototype] = useState(null)
  const scrollPosition = useRef({ x: 0, y: 0 })
  const savedStyles = useRef(null)
  const closeTimer = useRef(null)
  const closeFrame = useRef(null)

  const toggleDetails = (itemId) => {
    setOpen((current) => (current === itemId ? null : itemId))
  }

  const lockPage = useCallback(() => {
    const { scrollX: x, scrollY: y } = window
    const body = document.body
    const html = document.documentElement
    scrollPosition.current = { x, y }
    savedStyles.current = { body: { position: body.style.position, top: body.style.top, left: body.style.left, width: body.style.width, overflow: body.style.overflow }, html: { overflow: html.style.overflow } }
    html.style.overflow = 'hidden'
    body.style.position = 'fixed'
    body.style.top = `${-y}px`
    body.style.left = `${-x}px`
    body.style.width = '100%'
    body.style.overflow = 'hidden'
  }, [])

  const restorePagePositionBehindOverlay = useCallback(() => {
    const saved = savedStyles.current
    if (!saved) return
    const body = document.body
    body.style.position = saved.body.position
    body.style.top = saved.body.top
    body.style.left = saved.body.left
    body.style.width = saved.body.width
    body.style.overflow = saved.body.overflow
    // The fullscreen prototype remains opaque while the browser returns to this exact offset.
    window.scrollTo({ left: scrollPosition.current.x, top: scrollPosition.current.y, behavior: 'auto' })
  }, [])

  const unlockPage = useCallback(() => {
    const saved = savedStyles.current
    if (!saved) return
    document.documentElement.style.overflow = saved.html.overflow
    savedStyles.current = null
  }, [])

  const launchPrototype = useCallback((e) => {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    lockPage()
    setPrototype({ rect, phase: 'entering' })
    requestAnimationFrame(() => setPrototype((current) => current && { ...current, phase: 'open' }))
  }, [lockPage])

  const closePrototype = useCallback(() => {
    if (!prototype || prototype.phase === 'closing') return
    window.clearTimeout(closeTimer.current)
    cancelAnimationFrame(closeFrame.current)

    // Restore the fixed body and its scroll offset before the exit animation begins.
    // Keep html locked until the morph is complete so keyboard/touch cannot move the page.
    restorePagePositionBehindOverlay()
    closeFrame.current = requestAnimationFrame(() => {
      // A second frame guarantees the restored page has painted underneath the opaque prototype.
      closeFrame.current = requestAnimationFrame(() => {
        setPrototype((current) => current && { ...current, phase: 'closing' })
        closeTimer.current = window.setTimeout(() => {
          unlockPage()
          setPrototype(null)
        }, 640)
      })
    })
  }, [prototype, restorePagePositionBehindOverlay, unlockPage])

  // Handle Escape key to close prototype
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && prototype) {
        closePrototype()
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [prototype, closePrototype])

  useEffect(() => () => {
    window.clearTimeout(closeTimer.current)
    cancelAnimationFrame(closeFrame.current)
    restorePagePositionBehindOverlay()
    unlockPage()
  }, [restorePagePositionBehindOverlay, unlockPage])

  return (
    <>
      <div className={`app ${prototype ? 'prototype-active' : ''}`}>
        <PetalBackground />
        <nav>
          <div className="nav-content">
            <span className="nav-brand">Grace Chang</span>
            <div className="nav-links">
              <a href="#experience">Timeline</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-content">
            <h1>Building resilient systems through <span className="accent">technical adaptability</span>.</h1>
          </div>
          <div className="hero-text">
            <p>Software Engineer at Dell Technologies, specialized in the full lifecycle of data infrastructure—from Kubernetes storage control planes to modern cloud interfaces.</p>
            <a href="#experience" className="cta-button">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </span>
              View timeline
            </a>
          </div>
        </section>

        <section id="experience" className="experience">
          <div className="section-header">
            <h2>Career Trajectory</h2>
            <h3>Four years, four Dell rotations: frontend, backend, infrastructure, and full stack.</h3>
          </div>

          <p className="timeline-path" aria-label="Career timeline summary">
            <span className="timeline-path-entry"><time dateTime="2021">2021-2022</time> · Software Engineering Intern <span>- Liberty Mutual, IBM</span></span>
            <span className="timeline-path-divider" aria-hidden="true">|</span>
            <span className="timeline-path-entry"><time dateTime="2023/2026">2023–2026</time> · Software Engineer I & II <span>- Dell Technologies</span></span>
          </p>

          <div className="timeline">
            {timeline.map((item) => {
              const isOpen = open === item.id
              return (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isOpen={isOpen}
                  onToggle={() => toggleDetails(item.id)}
                  onLaunchPrototype={launchPrototype}
                />
              )
            })}
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-content">
            <div className="about-image">
              <img src="/portrait.jpg" alt="Portrait of the engineer working at a desk in warm natural light" loading="lazy" />
            </div>
            <div className="about-text">
              <h2>Adaptable by design.</h2>
              <div className="about-text-content">
                <p>I thrive in technical ambiguity. Three and a half years in the Dell Engineering Rotation Program taught me that the strongest engineers aren't masters of a single language—they're architects who can absorb a new domain quickly and ship. I went from Angular UI components to Ansible validation tooling to Golang control planes to full-stack React and AI-assisted delivery.</p>
                <p>Beyond the terminal, I build processes and people. I mentored four summer interns across four projects, ran requirement-gathering sessions directly with product owners, and turned raw stakeholder pain points into working prototypes.</p>
                <div className="toolkit">
                  <h4>Current Toolkit</h4>
                  <div className="toolkit-items">
                    <div className="toolkit-item"><span>Python & Go</span></div>
                    <div className="toolkit-item"><span>TypeScript & React</span></div>
                    <div className="toolkit-item"><span>Kubernetes & Docker</span></div>
                    <div className="toolkit-item"><span>Ansible & SQL</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="contact">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Ready for the<br />next challenge.</h2>
              <p>Currently seeking mid-to-senior software engineering roles in platform engineering, infrastructure, or full-stack product teams.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:hello@example.com" className="contact-email">hello@example.com</a>
              <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
                <a href="#">Resume</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Built with craftsmanship & intent</span>
            <span>Boston, Massachusetts</span>
          </div>
        </footer>
      </div>

      {prototype && (
        <div className={`prototype-overlay prototype-${prototype.phase}`} style={{ '--origin-left': `${prototype.rect.left}px`, '--origin-top': `${prototype.rect.top}px`, '--origin-width': `${prototype.rect.width}px`, '--origin-height': `${prototype.rect.height}px` }}>
          <PrototypeWindow onClose={closePrototype} skipOverlay={true} />
        </div>
      )}
    </>
  )
}

export default App
