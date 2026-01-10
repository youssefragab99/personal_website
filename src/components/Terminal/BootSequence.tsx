import { useBootSequence } from '../../hooks/useBootSequence';
import styles from './Terminal.module.css';

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const { currentStep, isComplete, messages } = useBootSequence();

  if (isComplete) {
    onComplete();
    return null;
  }

  return (
    <div className={styles.bootSequence}>
      {messages.slice(0, currentStep).map((msg, index) => (
        <div key={index} className={styles.bootLine}>
          <span className={styles.bootProgress}>
            [{
              '='.repeat(Math.floor(msg.progress / 4)).padEnd(25, ' ')
            }]
          </span>
          <span className={styles.bootText}>{msg.text}</span>
        </div>
      ))}
      {currentStep < messages.length && (
        <div className={styles.bootLine}>
          <span className={styles.bootProgress}>
            [{
              '='.repeat(Math.floor((messages[currentStep]?.progress || 0) / 4)).padEnd(25, ' ')
            }]
          </span>
          <span className={styles.bootText}>{messages[currentStep]?.text}</span>
          <span className={styles.bootCursor}>_</span>
        </div>
      )}
    </div>
  );
}
