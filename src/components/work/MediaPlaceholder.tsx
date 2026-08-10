import styles from './MediaPlaceholder.module.css';
import type { MediaPlaceholder as MediaPlaceholderData } from '../../content/workFeed';

type MediaPlaceholderProps = MediaPlaceholderData;

export function MediaPlaceholder({ label, caption, aspectRatio = 'wide', tone = 'creme' }: MediaPlaceholderProps) {
  return (
    <figure className={[styles.placeholder, styles[aspectRatio], styles[tone]].join(' ')}>
      <div className={styles.pixelMark} aria-hidden="true" />
      <figcaption>
        <strong>{label}</strong>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
