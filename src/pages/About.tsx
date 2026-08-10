import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Tag } from '../components/ui/Tag';
import { Timeline } from '../components/ui/Timeline';
import { philosophy, site, skills, timeline } from '../content/site';
import styles from './About.module.css';

export function About() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>About</p>
          <h1 className={styles.title}>{site.name}</h1>
          <p className={styles.lead}>{site.title}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.bioGrid}>
            <Card accent="blush" className={styles.bioCard}>
              <h2 className={styles.cardTitle}>Background</h2>
              <p>
                I&apos;ve spent the last four years as a software engineer — shipping features,
                debugging production issues, and working with teams to turn ideas into working
                products.
              </p>
              <p>
                What I keep coming back to is the early phase: talking to users, understanding
                what&apos;s actually broken, and imagining something that could fix it. That&apos;s
                why I&apos;m moving toward design engineering.
              </p>
            </Card>

            <Card accent="butter" className={styles.bioCard}>
              <h2 className={styles.cardTitle}>What I&apos;m looking for</h2>
              <p>
                A role where I can stay close to users and own more of the experience — not just
                the implementation layer. I want to prototype in code, iterate with real feedback,
                and keep learning visual and interaction design deliberately.
              </p>
              <p>
                I want to prototype in code, iterate with real feedback, and keep growing the visual
                and interaction craft around my engineering foundation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className={[styles.section, styles.sectionAlt].join(' ')}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Philosophy"
            title="How I think about building products"
          />

          <ul className={styles.philosophyList}>
            {philosophy.slice(0, 3).map((item, index) => (
              <li key={item}>
                <span className={styles.philosophyNumber}>0{index + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={[styles.section, styles.sectionAlt].join(' ')}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="Skills"
            title="Honest about where I am"
            description="Strong engineering foundation, deliberately building UI and product craft."
          />

          <div className={styles.skillsGrid}>
            <Card accent="butter">
              <h3 className={styles.skillsTitle}>Strong today</h3>
              <div className={styles.tags}>
                {skills.strong.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>

            <Card accent="blush">
              <h3 className={styles.skillsTitle}>Actively building</h3>
              <div className={styles.tags}>
                {skills.building.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Timeline items={timeline} />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Card accent="sage" className={styles.ctaCard}>
            <div>
              <h2 className={styles.ctaTitle}>Let&apos;s connect</h2>
              <p className={styles.ctaText}>
                I&apos;m exploring design engineering and product-focused roles. If that resonates,
                I&apos;d love to chat.
              </p>
            </div>
            <Button to="/contact">Get in touch</Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
