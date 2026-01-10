import { skills } from '../../data/skills';
import styles from './CommandOutput.module.css';

export function Skills() {
  return (
    <div className={styles.output}>
      {skills.map((category, index) => (
        <div key={index} className={styles.skillCategory}>
          <div className={styles.categoryName}>{category.name}:</div>
          <div className={styles.categoryItems}>
            {category.items.join(' | ')}
          </div>
        </div>
      ))}
    </div>
  );
}
