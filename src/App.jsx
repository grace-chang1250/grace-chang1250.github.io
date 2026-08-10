import { useState } from 'react'
import PetalBackground from './PetalBackground'
import TimelineItem from './components/TimelineItem'
import { timeline } from './data/timeline'
import './App.css'

function App() {
  const [open, setOpen] = useState(null)

  const toggleDetails = (itemId) => {
    setOpen((current) => (current === itemId ? null : itemId))
  }

  return (
    <div className="app">
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
            View technical case studies
          </a>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="section-header">
          <h2>Career Trajectory</h2>
          <h3>Six teams, six stacks, one continuous line.</h3>
        </div>

        <div className="timeline">
          {timeline.map((item) => {
            const isOpen = open === item.id
            return (
              <TimelineItem
                key={item.id}
                item={item}
                isOpen={isOpen}
                onToggle={() => toggleDetails(item.id)}
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
  )
}

export default App