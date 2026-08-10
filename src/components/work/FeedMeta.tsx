import styles from './FeedMeta.module.css';
import type { FeedFact } from '../../content/workFeed';

type FeedMetaProps = {
  facts: FeedFact[];
};

export function FeedMeta({ facts }: FeedMetaProps) {
  return (
    <dl className={styles.meta}>
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
