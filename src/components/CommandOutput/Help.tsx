import styles from './CommandOutput.module.css';

const commands = [
  { name: 'help', description: 'Display this help message' },
  { name: 'whoami', description: 'Display information about me' },
  { name: 'skills', description: 'List technical skills' },
  { name: 'experience', description: 'Show work experience' },
  { name: 'projects', description: 'View featured projects' },
  { name: 'education', description: 'Educational background' },
  { name: 'contact', description: 'Get in touch' },
  { name: 'clear', description: 'Clear terminal screen' },
];

export function Help() {
  return (
    <div className={styles.output}>
      <div className={styles.welcome}>Available commands:</div>
      <div className={styles.helpTable}>
        {commands.map((cmd, index) => (
          <div key={index} className={styles.helpRow}>
            <span className={styles.helpCommand}>{cmd.name}</span>
            <span className={styles.helpDescription}>{cmd.description}</span>
          </div>
        ))}
      </div>
      <div className={styles.helpTip}>
        Tip: Use Tab for autocomplete, Up/Down for command history
      </div>
    </div>
  );
}
