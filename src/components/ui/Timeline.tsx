import { useState } from 'react';
import type { TimelineItem } from '../../content/site';
import styles from './Timeline.module.css';

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.timelineSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.eyebrow}>Career Trajectory</h2>
          <h3 className={styles.title}>
            Six teams, six stacks, one continuous line.
          </h3>
        </div>

        <ol className={styles.timeline}>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.period} className={styles.timelineItem}>
                <span className={styles.timelineDot} />
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={styles.timelineButton}
                >
                  <div className={styles.timelineButtonContent}>
                    <div className={styles.product}>{item.product}</div>
                    <div className={styles.org}>{item.org}</div>
                    <span className={styles.toggleText}>
                      {isOpen ? "Hide details −" : "Learn more +"}
                    </span>
                  </div>
                  <div className={styles.period}>{item.period}</div>
                </button>

                <div
                  className={[
                    styles.details,
                    isOpen ? styles.detailsOpen : styles.detailsClosed,
                  ].filter(Boolean).join(' ')}
                >
                  <div className={styles.detailsInner}>
                    <div className={styles.detailsCard}>
                      <div className={styles.role}>{item.role}</div>
                      <p className={styles.summary}>{item.summary}</p>
                      <div className={styles.stack}>
                        {item.stack.map((tech) => (
                          <span key={tech} className={styles.chip}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}