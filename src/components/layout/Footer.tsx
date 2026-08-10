import { site } from '../../content/site';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.note}>
          © {year} {site.name}
        </p>

        <div className={styles.links}>
          <a href={`mailto:${site.emailUser}@${site.emailDomain}`}>Email</a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={site.links.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
