import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { featuredProjects, site } from '../content/site';
import styles from './Home.module.css';

export function Home() {
  const greeting = "Hi, I'm Grace";
  const [typedGreeting, setTypedGreeting] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedGreeting(greeting);
      return;
    }

    let characterIndex = 0;
    const timer = window.setInterval(() => {
      characterIndex += 1;
      setTypedGreeting(greeting.slice(0, characterIndex));

      if (characterIndex >= greeting.length) {
        window.clearInterval(timer);
      }
    }, 105);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={styles.homePage}>
      <section className={styles.landing} aria-label="Grace Chang introduction">
        <div className={styles.videoColumn}>
          <video className={styles.video} src="/petals-fallings.mp4" autoPlay loop muted playsInline aria-label="Pixel-art petals falling" />
        </div>
        <header className={styles.sceneHeader}>
          <Link className={styles.wordmark} to="/">GC<span>.</span></Link>
          <nav className={styles.sceneNav} aria-label="Home sections">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <div className={styles.introColumn}>
          <div className={styles.introContent}>
            <p className={styles.kicker}>Software engineer / creative builder</p>
            <h1 className={styles.typedHeading} aria-label={greeting}>
              <span aria-hidden="true">{typedGreeting}</span>
            </h1>
            <p className={styles.subtitle}>Software Engineer &amp; Creative Builder</p>
            <p className={styles.bio}>
              I write clean code by day and make room for small, tactile adventures after hours.
              You&apos;ll find me baking something buttery, weaving glass beads, or traveling somewhere new.
              I like building thoughtful digital experiences with the same care I bring to everything else.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.cta} href="#selected-work">See selected work</a>
            </div>
          </div>
        </div>
        <a className={styles.scrollCue} href="#selected-work">
          <span>Scroll the story</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section className={styles.workSection} id="selected-work">
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>Selected work</p>
          <h2>Problems first.<br /><em>Useful things after.</em></h2>
          <p>{site.pitch}</p>
        </div>
        <div className={styles.projectList}>
          {featuredProjects.map((project, index) => (
            <Link className={styles.projectRow} to={`/work/${project.slug}`} key={project.slug}>
              <span className={styles.projectIndex}>0{index + 1}</span>
              <span className={styles.projectDetails}>
                <span className={styles.projectType}>{project.type}</span>
                <strong>{project.title}</strong>
                <span>{project.summary}</span>
              </span>
              <ArrowUpRight className={styles.projectArrow} size={22} />
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.goalsSection}>
        <div className={styles.goalsIntro}>
          <p className={styles.kicker}>A little more context</p>
          <h2>Engineering with<br /><em>room to wonder.</em></h2>
        </div>
        <div className={styles.goalsCopy}>
          <p>
            I&apos;ve spent four years shipping software and keep gravitating toward the beginning of a product:
            understanding what people need, finding the shape of a useful solution, and making it real.
          </p>
          <p>
            I&apos;m moving toward design engineering to prototype in code, learn from real users, and own more of
            the experience from the first question to the finished interface.
          </p>
          <Link to="/about">More about me <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className={styles.contactPrompt}>
        <p className={styles.kicker}>Start a conversation</p>
        <h2>Have a useful problem<br /><em>to untangle?</em></h2>
        <Link to="/contact">Get in touch <ArrowUpRight size={17} /></Link>
      </section>
    </div>
  );
}
