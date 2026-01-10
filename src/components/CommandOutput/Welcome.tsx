import styles from './CommandOutput.module.css';

export function Welcome() {
  return (
    <div className={styles.output}>
      <div className={styles.welcomeTitle}>YOUSSEF RAGAB SYSTEMS v1.0.0</div>
      <div className={styles.muted}>
        Type <span className={styles.command}>help</span> to see available commands.
      </div>
    </div>
  );
}
