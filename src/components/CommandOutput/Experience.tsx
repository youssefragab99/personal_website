import { experience } from '../../data/experience';
import styles from './CommandOutput.module.css';

export function Experience() {
  return (
    <div className={styles.output}>
      {experience.map((job, index) => (
        <div key={index} className={styles.experienceItem}>
          <div className={styles.experienceHeader}>
            <span className={styles.experienceCompany}>{job.company}</span>
            <span className={styles.muted}> — </span>
            <span className={styles.experienceTitle}>{job.title}</span>
          </div>
          <div className={styles.experienceHeader}>
            <span className={styles.experienceLocation}>{job.location}</span>
            <span className={styles.muted}> | </span>
            <span className={styles.experiencePeriod}>{job.period}</span>
          </div>
          <div className={styles.experienceHighlights}>
            {job.highlights.map((highlight, hIndex) => (
              <div key={hIndex} className={styles.experienceHighlight}>
                {highlight}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
