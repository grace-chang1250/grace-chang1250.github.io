import styles from './Tag.module.css';

type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return <span className={styles.tag}>{children}</span>;
}
