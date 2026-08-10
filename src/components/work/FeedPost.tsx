import { ArrowUpRight, Pin } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MediaPlaceholder } from './MediaPlaceholder';
import { FeedMeta } from './FeedMeta';
import type { FeedPost as FeedPostData } from '../../content/workFeed';
import styles from './FeedPost.module.css';

type FeedPostProps = {
  post: FeedPostData;
  wash: 'creme' | 'beige' | 'blush';
  isExpanded: boolean;
  onExpand: (postId: string) => void;
};

export function FeedPost({ post, wash, isExpanded, onExpand }: FeedPostProps) {
  const shouldReduceMotion = useReducedMotion();
  const isDark = post.kind === 'direction';

  return (
    <motion.article
      className={[styles.post, styles[post.kind], styles[wash], isDark ? styles.dark : '', isExpanded ? styles.expanded : ''].filter(Boolean).join(' ')}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={[styles.previewBody, isExpanded ? styles.expanded : ''].filter(Boolean).join(' ')}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? `Collapse details for ${post.title}` : `Expand details for ${post.title}`}
        onClick={() => onExpand(post.id)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onExpand(post.id);
          }
        }}
      >
        {post.dateLabel ? <time className={styles.previewDate}>{post.dateLabel}</time> : null}
        {post.company ? <span className={styles.previewCompany}>{post.company}</span> : null}
        {post.role ? <span className={styles.previewRole}>{post.role}</span> : null}
        {post.href && (
          <div className={styles.caseStudyBadge}>
            <Pin size={12} />
            <span>Case Study</span>
          </div>
        )}
        <h2>{post.title}</h2>
        <p className={styles.previewText}>{post.body}</p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className={styles.expandedContent}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.expandedInner}>
              <p className={styles.body}>{post.body}</p>
              {post.media ? <MediaPlaceholder {...post.media} /> : null}
              {post.bullets ? <ul className={styles.bullets}>{post.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
              {post.skillGroups ? (
                <div className={styles.skillGroups}>
                  {post.skillGroups.map((group) => (
                    <section key={group.label}>
                      <h3>{group.label}</h3>
                      <div className={styles.tags}>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                    </section>
                  ))}
                </div>
              ) : null}
              {post.tags ? <div className={styles.tags}>{post.tags.map((tag) => <span key={tag}>{tag}</span>)}</div> : null}
              {post.facts ? <FeedMeta facts={post.facts} /> : null}
              {post.href && post.actionLabel ? (
                <Link to={post.href} className={styles.actionLink}>
                  {post.actionLabel} <ArrowUpRight size={17} />
                </Link>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
