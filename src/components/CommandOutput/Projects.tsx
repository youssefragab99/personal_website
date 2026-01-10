import { projects } from '../../data/projects';
import styles from './CommandOutput.module.css';

export function Projects() {
  return (
    <div className={styles.output}>
      {projects.map((project, index) => (
        <div key={index} className={styles.project}>
          <div className={styles.projectName}>{project.name}</div>
          <div className={styles.projectTech}>
            Tech: {project.tech.map((t, i) => (
              <span key={i}>
                <span className={styles.projectTechItem}>{t}</span>
                {i < project.tech.length - 1 && ', '}
              </span>
            ))}
          </div>
          <div className={styles.projectDescription}>
            {project.description.map((desc, dIndex) => (
              <div key={dIndex} className={styles.projectDescItem}>
                {desc}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
