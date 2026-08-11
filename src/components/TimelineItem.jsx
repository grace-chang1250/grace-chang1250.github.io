import { useRef } from 'react'

export default function TimelineItem({ item, isOpen, onToggle, onLaunchPrototype }) {
  const triggerRef = useRef(null)
  return (
    <div className="timeline-item">
      <button
        type="button"
        onClick={onToggle}
        className="timeline-header"
      >
        <div>
          <div className="timeline-title">{item.product}</div>
          <div className="timeline-org">
            {item.org}
            {!isOpen && <span className="timeline-toggle">+</span>}
            {isOpen && <span className="timeline-toggle-visible">−</span>}
          </div>
        </div>
        <div className="timeline-period">{item.period}</div>
      </button>

      <div className={`timeline-details ${isOpen ? 'open' : ''}`}>
        <div className="timeline-details-content">
          <div className="timeline-divider"></div>
          <div className="timeline-role">{item.role}</div>
          <p className="timeline-summary">{item.summary}</p>
          <div className="timeline-stack">
            {item.stack.map((tech, index) => (
              <span key={tech} className="tech-item">
                {tech}
                {index < item.stack.length - 1 && <span className="tech-separator"> | </span>}
              </span>
            ))}
          </div>
          {item.links ? (
            <div className="timeline-action-links">
              {item.links.map((link) => (
                <button
                  key={link.href}
                  ref={triggerRef}
                  onClick={(e) => {
                    e.preventDefault()
                    onLaunchPrototype(e, link.label, triggerRef.current)
                  }}
                  className="prototype-trigger-link"
                >
                  {link.label} ↗
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
