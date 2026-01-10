import { useState, useCallback, type ReactNode } from 'react';
import type { OutputEntry } from '../commands/types';
import { parseCommand } from '../commands/parser';
import { useCommandHistory } from './useCommandHistory';

let outputIdCounter = 0;

function generateId(): string {
  return `output-${Date.now()}-${outputIdCounter++}`;
}

export function useTerminal(initialOutput?: ReactNode) {
  const [outputs, setOutputs] = useState<OutputEntry[]>(() => {
    if (initialOutput) {
      return [
        {
          id: generateId(),
          output: initialOutput,
          timestamp: new Date(),
        },
      ];
    }
    return [];
  });

  const { addToHistory, navigateHistory, resetHistoryNavigation } =
    useCommandHistory();

  const executeCommand = useCallback(
    (input: string) => {
      const trimmedInput = input.trim();
      if (!trimmedInput) return;

      addToHistory(trimmedInput);
      resetHistoryNavigation();

      const result = parseCommand(trimmedInput);

      // Handle clear command specially
      if (result.command?.name === 'clear') {
        setOutputs([]);
        return;
      }

      // Create output entry
      const entry: OutputEntry = {
        id: generateId(),
        command: trimmedInput,
        output: result.error ? (
          <span style={{ color: 'var(--term-red)' }}>{result.error}</span>
        ) : (
          result.command?.execute() || null
        ),
        timestamp: new Date(),
      };

      setOutputs((prev) => [...prev, entry]);
    },
    [addToHistory, resetHistoryNavigation]
  );

  const clearOutputs = useCallback(() => {
    setOutputs([]);
  }, []);

  const addOutput = useCallback((output: ReactNode, command?: string) => {
    setOutputs((prev) => [
      ...prev,
      {
        id: generateId(),
        command,
        output,
        timestamp: new Date(),
      },
    ]);
  }, []);

  return {
    outputs,
    executeCommand,
    clearOutputs,
    addOutput,
    navigateHistory,
    resetHistoryNavigation,
  };
}
