import type { OutputEntry } from '../../commands/types';
import styles from './Terminal.module.css';

interface TerminalOutputProps {
  entries: OutputEntry[];
}

export function TerminalOutput({ entries }: TerminalOutputProps) {
  return (
    <div className={styles.outputArea} role="log" aria-live="polite">
      {entries.map((entry) => (
        <div key={entry.id} className={styles.outputEntry}>
          {entry.command && (
            <div className={styles.commandLine}>
              <span className={styles.prompt}>
                <span className={styles.promptUser}>youssef</span>
                <span className={styles.promptAt}>@</span>
                <span className={styles.promptHost}>portfolio</span>
                <span className={styles.promptColon}>:</span>
                <span className={styles.promptPath}>~</span>
                <span className={styles.promptSymbol}>$</span>
              </span>
              <span className={styles.commandText}>{entry.command}</span>
            </div>
          )}
          {entry.output && (
            <div className={styles.outputContent}>{entry.output}</div>
          )}
        </div>
      ))}
    </div>
  );
}
