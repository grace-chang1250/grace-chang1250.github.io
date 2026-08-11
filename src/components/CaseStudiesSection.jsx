import { useState } from 'react'
import { caseStudies } from '../data/caseStudies'
import PatentReviewWorkspace from './PatentReviewDemo'
import './CaseStudiesSection.css'

function CaseStudyModal({ project, view, setView, onClose }) {
  if (view === 'prototype') {
    return (
      <div className="patent-demo-overlay" role="dialog" aria-modal="true" aria-labelledby="case-study-prototype-title">
        <PatentReviewWorkspace inline onClose={() => setView('story')} />
      </div>
    )
  }

  return (
    <div className="case-study-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="case-study-modal-title">
      <div className="case-study-modal">
        <header className="case-study-modal-header">
          <div className="case-study-modal-controls">
            <button type="button" className="case-study-modal-back" onClick={onClose}>
              ← Back
            </button>
          </div>
          <button type="button" className="case-study-modal-close" onClick={onClose} aria-label="Close case study">
            ×
          </button>
        </header>
        <div className="case-study-modal-body">
          <p className="card-eyebrow">{project.timeline}</p>
          <h2 id="case-study-modal-title">{project.title}</h2>
          <p className="modal-summary">{project.summary}</p>
          <div className="modal-meta">
            <span>{project.role}</span>
            <span>{project.stack.join(' · ')}</span>
          </div>
          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="modal-tag">{tag}</span>
            ))}
          </div>

          <div className="modal-sections">
            <section>
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </section>
            <section>
              <h3>Discovery</h3>
              <p>{project.discovery}</p>
            </section>
            <section>
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </section>
            <section>
              <h3>What I built</h3>
              <p>{project.contribution}</p>
            </section>
            <section>
              <h3>Outcome</h3>
              <p>{project.outcome}</p>
            </section>
            <section>
              <h3>What I learned</h3>
              <p>{project.learning}</p>
            </section>
            <section>
              <h3>Next step</h3>
              <p>{project.nextStep}</p>
            </section>
          </div>

          {project.id === 'patent-assignment-mvp' ? (
            <div className="prototype-launch">
              <h3>Prototype UI</h3>
              <p>Launch the full patent review workspace without leaving this case study.</p>
              <button type="button" className="case-study-link" onClick={() => setView('prototype')}>
                Launch prototype
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default function CaseStudiesSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null)
  const [modalView, setModalView] = useState('story')

  const openCaseStudy = (project) => {
    setActiveCaseStudy(project)
    setModalView('story')
  }

  const closeCaseStudy = () => {
    setActiveCaseStudy(null)
    setModalView('story')
  }

  return (
    <section id="case-studies" className="case-studies">
      <div className="case-studies-header">
        <p className="eyebrow">Featured case studies</p>
        <h2>Two product stories from Dell engineering.</h2>
        <p className="section-copy">Deep dives for the internal TCO workflow and the patent review assignment prototype.</p>
      </div>

      <div className="case-study-grid">
        {caseStudies.map((project) => (
          <article key={project.id} className="case-study-card">
            <div className="case-study-card-body">
              <p className="card-eyebrow">{project.timeline}</p>
              <h3>{project.title}</h3>
              <p className="card-summary">{project.summary}</p>
              <div className="card-meta">
                <span>{project.role}</span>
                <span>{project.stack.join(' · ')}</span>
              </div>
            </div>
            <div className="case-study-card-footer">
              <button type="button" className="case-study-link" onClick={() => openCaseStudy(project)}>
                View case study
              </button>
            </div>
          </article>
        ))}
      </div>

      {activeCaseStudy ? (
        <CaseStudyModal
          project={activeCaseStudy}
          view={modalView}
          setView={setModalView}
          onClose={closeCaseStudy}
        />
      ) : null}
    </section>
  )
}
