import { profile } from '../../data/profile';
import styles from './CommandOutput.module.css';

export function About() {
  return (
    <div className={styles.output}>
      <pre className={styles.ascii}>{profile.ascii}</pre>
      <div className={styles.title}>
        <span className={styles.highlight}>{profile.title}</span>
        <span className={styles.muted}> @ </span>
        <span className={styles.company}>{profile.company}</span>
        <span className={styles.muted}> | </span>
        <span>{profile.location}</span>
      </div>
      <div className={styles.summary}>
        {profile.summary.map((item, index) => (
          <div key={index} className={styles.summaryItem}>
            <span className={styles.bullet}>&gt;</span> {item}
          </div>
        ))}
      </div>
      <div className={styles.hint}>
        Type <span className={styles.command}>skills</span> to see my tech stack or{' '}
        <span className={styles.command}>projects</span> to view my work.
      </div>
    </div>
  );
}
