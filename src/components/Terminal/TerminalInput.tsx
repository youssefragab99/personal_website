import { useState, useRef, useEffect, forwardRef, useImperativeHandle, type KeyboardEvent, type ChangeEvent } from 'react';
import { getAutocompleteSuggestions } from '../../commands/parser';
import styles from './Terminal.module.css';

interface TerminalInputProps {
  onSubmit: (command: string) => void;
  onNavigateHistory: (direction: 'up' | 'down', current: string) => string;
  disabled?: boolean;
}

export interface TerminalInputHandle {
  focus: () => void;
}

export const TerminalInput = forwardRef<TerminalInputHandle, TerminalInputProps>(function TerminalInput({
  onSubmit,
  onNavigateHistory,
  disabled = false,
}, ref) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }));

  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [disabled]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        onSubmit(input);
        setInput('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newValue = onNavigateHistory('up', input);
      setInput(newValue);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newValue = onNavigateHistory('down', input);
      setInput(newValue);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const suggestions = getAutocompleteSuggestions(input);
      if (suggestions.length === 1) {
        setInput(suggestions[0]);
      } else if (suggestions.length > 1) {
        // Find common prefix
        const commonPrefix = suggestions.reduce((prefix, suggestion) => {
          while (!suggestion.startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
          }
          return prefix;
        }, suggestions[0]);
        if (commonPrefix.length > input.length) {
          setInput(commonPrefix);
        }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      onSubmit('clear');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.inputLine} onClick={handleContainerClick}>
      <span className={styles.prompt}>
        <span className={styles.promptUser}>youssef</span>
        <span className={styles.promptAt}>@</span>
        <span className={styles.promptHost}>portfolio</span>
        <span className={styles.promptColon}>:</span>
        <span className={styles.promptPath}>~</span>
        <span className={styles.promptSymbol}>$</span>
      </span>
      <div className={styles.inputWrapper}>
        <span className={styles.inputText}>{input}</span>
        <span className={styles.cursor} aria-hidden="true" />
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={styles.input}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Terminal input"
        />
      </div>
    </div>
  );
});
