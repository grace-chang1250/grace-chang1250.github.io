import { caseStudies } from '../data/caseStudies'
import PatentReviewDemo from './PatentReviewDemo'
import './CaseStudyDetail.css'

export default function CaseStudyDetail() {
  return (
    <section className="case-study-details">
      {caseStudies.map((project) => (
        <article key={project.id} id={`case-study-${project.id}`} className="case-study-detail-card">
          <div className="case-study-detail-header">
            <p className="card-eyebrow">{project.timeline}</p>
            <h2>{project.title}</h2>
            <p className="detail-summary">{project.summary}</p>
            <div className="detail-meta">
              <span>{project.role}</span>
              <span>{project.stack.join(' · ')}</span>
            </div>
          </div>

          <div className="detail-grid">
            <div>
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
            </div>

            <aside>
              <div className="project-focus">
                <h3>What I built</h3>
                <p>{project.contribution}</p>
              </div>
              <div className="project-focus">
                <h3>Outcome</h3>
                <p>{project.outcome}</p>
              </div>
            </aside>
          </div>

          <div className="detail-grid">
            <section>
              <h3>Learning</h3>
              <p>{project.learning}</p>
            </section>
            <section>
              <h3>Next step</h3>
              <p>{project.nextStep}</p>
            </section>
          </div>

          {project.id === 'patent-assignment-mvp' ? <PatentReviewDemo /> : null}
        </article>
      ))}
    </section>
  )
}
