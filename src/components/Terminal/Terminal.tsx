import { useState, useEffect, useRef } from 'react';
import { useTerminal } from '../../hooks/useTerminal';
import { useBootSequence } from '../../hooks/useBootSequence';
import { TerminalInput, type TerminalInputHandle } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { Welcome } from '../CommandOutput';
import styles from './Terminal.module.css';

const QUICK_COMMANDS = ['help', 'whoami', 'skills', 'projects', 'contact'];

export function Terminal() {
  const [bootComplete, setBootComplete] = useState(false);
  const { isComplete: bootSequenceComplete, currentStep, messages } = useBootSequence();
  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<TerminalInputHandle>(null);

  const { outputs, executeCommand, navigateHistory } = useTerminal();

  // Add welcome message after boot
  useEffect(() => {
    if (bootSequenceComplete && !bootComplete) {
      setBootComplete(true);
    }
  }, [bootSequenceComplete, bootComplete]);

  // Auto-scroll to bottom when new output is added
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [outputs, bootComplete]);

  const handleQuickCommand = (command: string) => {
    executeCommand(command);
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={`${styles.windowFrame} ${styles.scanlines}`} onClick={handleTerminalClick}>
      {/* Title Bar */}
      <div className={styles.titleBar}>
        <div className={styles.trafficLights}>
          <div className={`${styles.trafficLight} ${styles.red}`} />
          <div className={`${styles.trafficLight} ${styles.yellow}`} />
          <div className={`${styles.trafficLight} ${styles.green}`} />
        </div>
        <div className={styles.titleText}>youssef@portfolio — zsh</div>
      </div>

      {/* Terminal Content */}
      <div className={styles.content} ref={contentRef}>
        {!bootComplete ? (
          // Boot Sequence
          <div className={styles.bootSequence}>
            {messages.slice(0, currentStep).map((msg, index) => (
              <div key={index} className={styles.bootLine}>
                <span className={styles.bootProgress}>
                  [{'='.repeat(Math.floor(msg.progress / 4)).padEnd(25, ' ')}]
                </span>
                <span className={styles.bootText}>{msg.text}</span>
              </div>
            ))}
            {currentStep < messages.length && (
              <div className={styles.bootLine}>
                <span className={styles.bootProgress}>
                  [{'='.repeat(Math.floor((currentStep + 1) * 5)).padEnd(25, ' ')}]
                </span>
                <span className={styles.bootText}>{messages[currentStep]?.text}</span>
                <span className={styles.bootCursor}>_</span>
              </div>
            )}
          </div>
        ) : (
          // Main Terminal
          <div className={styles.terminal}>
            {/* Welcome message */}
            {outputs.length === 0 && (
              <div className={styles.outputEntry}>
                <Welcome />
              </div>
            )}

            {/* Output history */}
            <TerminalOutput entries={outputs} />

            {/* Input line */}
            <TerminalInput
              ref={inputRef}
              onSubmit={executeCommand}
              onNavigateHistory={navigateHistory}
            />
          </div>
        )}
      </div>

      {/* Mobile Quick Commands */}
      {bootComplete && (
        <div className={styles.mobileHints}>
          {QUICK_COMMANDS.map((cmd) => (
            <button
              key={cmd}
              className={styles.hintChip}
              onClick={() => handleQuickCommand(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
