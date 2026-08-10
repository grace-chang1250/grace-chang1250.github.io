import { useState } from 'react'
import PetalBackground from './PetalBackground'
import './App.css'

function App() {
  const [open, setOpen] = useState(null)

  const timeline = [
    {
      period: "Nov 2025 — Aug 2026",
      role: "Rotation IV · Full-stack & Leadership",
      product: "DPC TCO Tool & Patent Assignment",
      org: "Dell Technologies",
      summary: "Containerized Total Cost of Ownership platform with two PdMs — multi-step wizard, real-time ROI engine, Okta SSO, RBAC — then prototyped a patent-assignment MVP as sole stakeholder while mentoring four interns.",
      stack: ["React", "Python", "Docker", "SQLite", "Okta OIDC"],
    },
    {
      period: "Feb 2025 — Nov 2025",
      role: "Rotation III · Infrastructure",
      product: "AI Storage Control Plane",
      org: "Dell Technologies",
      summary: "Serviceability API for node and bundle state, label-driven node add/remove, and Kubernetes CRD isolation on Canonical K8s.",
      stack: ["Go", "Kubernetes", "Canonical K8s", "REST"],
    },
    {
      period: "Feb 2024 — Jan 2025",
      role: "Rotation II · Open Source",
      product: "Omnia Backend",
      org: "Dell Technologies",
      summary: "Dual-level jsonschema and Ansible validation across 15 config files, catching IP overlaps before they became multi-hour bare-metal install failures.",
      stack: ["Python", "Ansible", "Linux"],
    },
    {
      period: "Feb 2023 — Jan 2024",
      role: "Rotation I · Frontend",
      product: "PowerProtect Data Manager",
      org: "Dell Technologies",
      summary: "UI features and end-to-end tests for a multicloud data protection platform. Won the internal UI hackathon with PPDM 3D — a unified instance carousel with an AI chatbot.",
      stack: ["Angular", "TypeScript", "Cypress"],
    },
    {
      period: "Summer 2022",
      role: "Software Engineer Intern",
      product: "Netezza Performance Server UDX",
      org: "IBM",
      summary: "Built user-defined extensions on the Netezza Performance Server, a massively parallel analytics database.",
      stack: ["Java", "SQL", "Netezza"],
    },
    {
      period: "Summer 2021",
      role: "Software Engineer Intern",
      product: "Claims-filing data pipeline",
      org: "Liberty Mutual",
      summary: "Data pipeline supporting automated insurance claims filing and ingestion.",
      stack: ["Python", "ETL"],
    },
  ]

  const toggleDetails = (index) => {
    setOpen(open === index ? null : index)
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
    }
  }

  return (
    <div className="app">
      <PetalBackground />
      <nav>
        <div className="nav-content">
          <span className="nav-brand">Grace Chang</span>
          <div className="nav-links">
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Timeline</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Building resilient systems through <span className="accent">technical adaptability</span>.</h1>
        </div>
        <div className="hero-text">
          <p>Software Engineer at Dell Technologies, specialized in the full lifecycle of data infrastructure—from Kubernetes storage control planes to modern cloud interfaces.</p>
          <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="cta-button">
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
          {timeline.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.period} className="timeline-item">
                <button
                  type="button"
                  onClick={() => toggleDetails(i)}
                  className="timeline-header"
                >
                  <div>
                    <div className="timeline-title">{item.product}</div>
                    <div className="timeline-org">{item.org}</div>
                    <span className="timeline-toggle">{isOpen ? "Hide details −" : "Learn more +"}</span>
                  </div>
                  <div className="timeline-period">{item.period}</div>
                </button>

                <div className={`timeline-details ${isOpen ? 'open' : ''}`}>
                  <div className="timeline-details-content">
                    <div className="timeline-role">{item.role}</div>
                    <p className="timeline-summary">{item.summary}</p>
                    <div className="timeline-stack">
                      {item.stack.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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