import { education } from '../../data/education';
import styles from './CommandOutput.module.css';

export function Education() {
  return (
    <div className={styles.output}>
      {education.map((edu, index) => (
        <div key={index} className={styles.educationItem}>
          <div>
            <span className={styles.degree}>{edu.degree}</span>
          </div>
          <div>
            <span className={styles.school}>{edu.school}</span>
            <span className={styles.muted}>, </span>
            <span>{edu.location}</span>
          </div>
          <div>
            <span className={styles.graduation}>{edu.graduation}</span>
          </div>
          <div className={styles.educationDetails}>
            {edu.details.map((detail, dIndex) => (
              <div key={dIndex}>{detail}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
