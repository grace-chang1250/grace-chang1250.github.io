import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import styles from './PageShell.module.css';

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <main className={styles.homeMain}>{children}</main>;
  }

  return (
    <>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
