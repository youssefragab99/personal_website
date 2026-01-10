import { profile } from '../../data/profile';
import styles from './CommandOutput.module.css';

export function Contact() {
  return (
    <div className={styles.output}>
      <div className={styles.contactItem}>
        <span className={styles.contactLabel}>Email:</span>
        <a href={`mailto:${profile.email}`} className={styles.contactLink}>
          {profile.email}
        </a>
      </div>
      <div className={styles.contactItem}>
        <span className={styles.contactLabel}>LinkedIn:</span>
        <a
          href={`https://${profile.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          {profile.linkedin}
        </a>
      </div>
      <div className={styles.contactItem}>
        <span className={styles.contactLabel}>GitHub:</span>
        <a
          href={`https://${profile.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          {profile.github}
        </a>
      </div>
      <div className={styles.contactItem}>
        <span className={styles.contactLabel}>Location:</span>
        <span className={styles.contactValue}>{profile.location}</span>
      </div>
      <div className={styles.hint}>
        Feel free to reach out!
      </div>
    </div>
  );
}
