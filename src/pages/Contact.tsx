import { useState } from 'react';
import { Copy, Github, Linkedin, Mail, Check, ArrowUpRight } from 'lucide-react';
import { site } from '../content/site';
import styles from './Contact.module.css';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = `${site.emailUser}@${site.emailDomain}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Contact / 03</p>
          <h1 className={styles.title}>Let&apos;s talk<br /><em>useful things.</em></h1>
          <p className={styles.lead}>
            Open to design engineering, product engineering, and frontend roles where user problems
            come first. Reach out anytime.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Mail size={20} />
                <h2 className={styles.cardTitle}>Email</h2>
              </div>
              <p className={styles.cardText}>{email}</p>
              <div className={styles.actions}>
                <a className={styles.primaryLink} href={`mailto:${email}`}>Send email <ArrowUpRight size={17} /></a>
                <button className={styles.copyButton} type="button" onClick={copyEmail}>
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied' : 'Copy address'}
                </button>
              </div>
              <p className={styles.copyStatus} aria-live="polite">{copied ? 'Email address copied.' : ''}</p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Linkedin size={20} />
                <h2 className={styles.cardTitle}>LinkedIn</h2>
              </div>
              <p className={styles.cardText}>
                Find my professional background and get in touch through LinkedIn.
              </p>
              <a className={styles.textLink} href={site.links.linkedin} target="_blank" rel="noreferrer">Visit LinkedIn <ArrowUpRight size={17} /></a>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Github size={20} />
                <h2 className={styles.cardTitle}>GitHub</h2>
              </div>
              <p className={styles.cardText}>A closer look at the code, experiments, and things I&apos;m learning.</p>
              <div className={styles.links}>
                <a href={site.links.github} target="_blank" rel="noreferrer">
                  <Github size={16} />
                  View GitHub <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
