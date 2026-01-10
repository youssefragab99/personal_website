import { useState, useCallback } from 'react';

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const addToHistory = useCallback((command: string) => {
    if (command.trim()) {
      setHistory((prev) => [...prev, command]);
      setHistoryIndex(-1);
    }
  }, []);

  const navigateHistory = useCallback(
    (direction: 'up' | 'down', currentInput: string): string => {
      if (history.length === 0) return currentInput;

      if (direction === 'up') {
        const newIndex =
          historyIndex === -1
            ? history.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        return history[newIndex] || currentInput;
      } else {
        if (historyIndex === -1) return currentInput;
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          return '';
        }
        setHistoryIndex(newIndex);
        return history[newIndex] || '';
      }
    },
    [history, historyIndex]
  );

  const resetHistoryNavigation = useCallback(() => {
    setHistoryIndex(-1);
  }, []);

  return {
    history,
    addToHistory,
    navigateHistory,
    resetHistoryNavigation,
  };
}
