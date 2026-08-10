export default function TimelineItem({ item, isOpen, onToggle }) {
  return (
    <div className="timeline-item">
      <button
        type="button"
        onClick={onToggle}
        className="timeline-header"
      >
        <div>
          <div className="timeline-title">{item.product}</div>
          <div className="timeline-org">{item.org}</div>
          <span className="timeline-toggle">{isOpen ? 'Hide details −' : 'Learn more +'}</span>
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
  );
}
