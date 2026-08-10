import type { ReactNode } from 'react';
import styles from './Card.module.css';

type CardProps = {
  children: ReactNode;
  accent?: 'blush' | 'butter' | 'sage' | 'lilac';
  className?: string;
};

export function Card({ children, accent = 'blush', className = '' }: CardProps) {
  return (
    <article className={[styles.card, styles[accent], className].filter(Boolean).join(' ')}>
      {children}
    </article>
  );
}
