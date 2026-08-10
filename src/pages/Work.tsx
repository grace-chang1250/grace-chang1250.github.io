import { useEffect, useState } from 'react';
import { FeedPost } from '../components/work/FeedPost';
import { workFeed } from '../content/workFeed';
import styles from './Work.module.css';

export function Work() {
  const [columnCount, setColumnCount] = useState(4);
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const updateColumnCount = () => {
      if (window.innerWidth <= 460) setColumnCount(1);
      else if (window.innerWidth <= 640) setColumnCount(2);
      else if (window.innerWidth <= 900) setColumnCount(3);
      else setColumnCount(4);
    };

    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.timeline-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handlePostExpand = (postId: string) => {
    setExpandedPostId(postId === expandedPostId ? null : postId);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Work</p>
          <h1 className={styles.title}>Things I&apos;ve built,<br /><em>learned, and shipped.</em></h1>
          <p className={styles.lead}>
            A scrolling record of software engineering work, product thinking, and the projects I've shipped.
          </p>
          <div className={styles.profileMeta}>
            <span>Grace Chang</span>
            <span>Software Engineer</span>
          </div>
        </div>
      </section>

      <section className={styles.timeline} aria-labelledby="career-timeline-title">
        <div className={styles.timelineInner}>
          <div>
            <p className={styles.eyebrow}>Career timeline</p>
            <h2 id="career-timeline-title">The path so far.</h2>
          </div>
          <ol className={styles.timelineList}>
            <li>
              <span>Summer 2021</span>
              <strong>Software Engineering Intern</strong>
              <small>Liberty Mutual Insurance</small>
            </li>
            <li>
              <span>Summer 2022</span>
              <strong>Software Engineering Intern</strong>
              <small>IBM</small>
            </li>
            <li>
              <span>2023 - 2026</span>
              <strong>Software Engineer I &amp; II</strong>
              <small>Dell Technologies</small>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.skillsSection}>
        <div className={styles.skillsContainer}>
          <p className={styles.eyebrow}>Skills & Expertise</p>
          <h2>The tools I use to turn ideas into working things.</h2>
          
          <div className={styles.skillGroups}>
            <div className={styles.skillGroup}>
              <h3>Languages</h3>
              <div className={styles.skillTags}>
                {['JavaScript', 'TypeScript', 'Java', 'Python', 'Golang', 'C / C++', 'SQL', 'HTML', 'CSS'].map(skill => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
            
            <div className={styles.skillGroup}>
              <h3>Frameworks and tools</h3>
              <div className={styles.skillTags}>
                {['React.js', 'Angular', 'Node.js', 'Docker', 'Kubernetes', 'Ansible', 'SQLite', 'MongoDB', 'REST APIs', 'Git'].map(skill => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
            
            <div className={styles.skillGroup}>
              <h3>Product and UI strengths</h3>
              <div className={styles.skillTags}>
                {['Rapid frontend prototyping', 'Debugging and shipping', 'API design', 'Stakeholder collaboration', 'Validation and feedback loops', 'Accessibility and interaction details'].map(skill => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={[styles.section, 'timeline-section'].join(' ')}>
        <div className={[styles.sectionHeader, activeSection === 0 ? styles.activeHeader : ''].filter(Boolean).join(' ')}>
          <p className={styles.eyebrow}>Recent Work</p>
          <h2>Latest Experience</h2>
          <span className={styles.sectionYear}>2025-2026</span>
        </div>
        <div className={[styles.feed, expandedPostId ? styles.hasExpanded : ''].filter(Boolean).join(' ')} style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}>
          {workFeed.slice(0, 3).map((post, index) => (
            <FeedPost
              key={post.id}
              post={post}
              wash={['creme', 'beige', 'blush'][index % 3] as 'creme' | 'beige' | 'blush'}
              isExpanded={expandedPostId === post.id}
              onExpand={handlePostExpand}
            />
          ))}
        </div>
      </section>

      <section className={[styles.section, 'timeline-section'].join(' ')}>
        <div className={[styles.sectionHeader, activeSection === 1 ? styles.activeHeader : ''].filter(Boolean).join(' ')}>
          <p className={styles.eyebrow}>Core Engineering</p>
          <h2>Engineering Rotations</h2>
          <h3>Frontend, Backend, Infrastructure</h3>
          <p>As part of the new grad program at Dell, I rotated through 3 engineering teams across 3 years, accelerating my technical adaptability by delivering high-impact features in diverse stack environments.</p>
          <span className={styles.sectionYear}>2023-2025</span>
        </div>
        <div className={[styles.feed, expandedPostId ? styles.hasExpanded : ''].filter(Boolean).join(' ')} style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}>
          {workFeed.slice(3, 6).map((post, index) => (
            <FeedPost
              key={post.id}
              post={post}
              wash={['creme', 'beige', 'blush'][index % 3] as 'creme' | 'beige' | 'blush'}
              isExpanded={expandedPostId === post.id}
              onExpand={handlePostExpand}
            />
          ))}
        </div>
      </section>

      <section className={[styles.section, 'timeline-section'].join(' ')}>
        <div className={[styles.sectionHeader, activeSection === 2 ? styles.activeHeader : ''].filter(Boolean).join(' ')}>
          <p className={styles.eyebrow}>Early Career</p>
          <h2>Internships + Education</h2>
          <span className={styles.sectionYear}>2019-2022</span>
        </div>
        <div className={[styles.feed, expandedPostId ? styles.hasExpanded : ''].filter(Boolean).join(' ')} style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}>
          {workFeed.slice(6).map((post, index) => (
            <FeedPost
              key={post.id}
              post={post}
              wash={['creme', 'beige', 'blush'][index % 3] as 'creme' | 'beige' | 'blush'}
              isExpanded={expandedPostId === post.id}
              onExpand={handlePostExpand}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
