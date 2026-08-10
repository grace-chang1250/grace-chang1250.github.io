import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { PatentReviewDemo } from '../components/work/PatentReviewDemo';
import { featuredProjects } from '../content/site';
import styles from './CaseStudy.module.css';

export function CaseStudy() {
  const { slug } = useParams();
  const projectIndex = featuredProjects.findIndex((project) => project.slug === slug);
  const project = featuredProjects[projectIndex];

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p className={styles.eyebrow}>Work</p>
        <h1>That project is not here.</h1>
        <Button to="/work" variant="secondary">Back to work</Button>
      </div>
    );
  }

  const nextProject = featuredProjects[(projectIndex + 1) % featuredProjects.length];

  return (
    <article className={styles.page}>
      <header className={[styles.hero, styles[project.accent]].join(' ')}>
        <div className={styles.container}>
          <Link to="/work" className={styles.backLink}>
            <ArrowLeft size={16} />
            All work
          </Link>
          <p className={styles.eyebrow}>{project.type}</p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
          <dl className={styles.meta}>
            <div><dt>Role</dt><dd>{project.role}</dd></div>
            <div><dt>Timeline</dt><dd>{project.timeline}</dd></div>
            <div><dt>Stack</dt><dd>{project.stack.join(' · ')}</dd></div>
          </dl>
        </div>
      </header>

      <div className={styles.container}>
        <section className={styles.introGrid}>
          <div>
            <p className={styles.sectionLabel}>The user</p>
            <h2>Designed for {project.audience}</h2>
          </div>
          <p className={styles.introCopy}>{project.problem}</p>
        </section>

        <div className={styles.storyGrid}>
          <div className={styles.story}>
            <StorySection label="How I found the problem" text={project.discovery} />
            <StorySection label="What I imagined" text={project.solution} />
            <StorySection label="What I built" text={project.contribution} />
          </div>
          <aside className={styles.workflow}>
            <p className={styles.sectionLabel}>Key workflow</p>
            <p>{project.workflow}</p>
          </aside>
        </div>

        {project.slug === 'patent-assignment-mvp' ? <PatentReviewDemo /> : null}

        <section className={styles.detailGrid}>
          <StorySection label="Constraints & tradeoffs" text={project.tradeoffs} />
          <StorySection label="Outcome" text={project.outcome} />
          <StorySection label="What I learned" text={project.learning} />
          <StorySection label="What I would change next" text={project.nextStep} />
        </section>

        <nav className={styles.nextProject} aria-label="Next project">
          <div>
            <p className={styles.sectionLabel}>Next story</p>
            <h2>{nextProject.title}</h2>
          </div>
          <Link to={`/work/${nextProject.slug}`} className={styles.nextLink} aria-label={`Read ${nextProject.title}`}>
            <ArrowUpRight size={22} />
          </Link>
        </nav>
      </div>
    </article>
  );
}

type StorySectionProps = {
  label: string;
  text: string;
};

function StorySection({ label, text }: StorySectionProps) {
  return (
    <section className={styles.storySection}>
      <p className={styles.sectionLabel}>{label}</p>
      <p>{text}</p>
    </section>
  );
}
