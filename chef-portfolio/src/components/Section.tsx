import { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ title, subtitle, children, className, id }: SectionProps) => {
  return (
    <section className={`${styles.section} ${className || ''}`} id={id}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};

export default Section;