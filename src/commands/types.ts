import type { ReactNode } from 'react';

export interface Command {
  name: string;
  aliases: string[];
  description: string;
  hidden?: boolean;
  execute: () => ReactNode;
}

export interface ParseResult {
  command: Command | null;
  args: string[];
  rawInput: string;
  error?: string;
}

export interface OutputEntry {
  id: string;
  command?: string;
  output: ReactNode;
  timestamp: Date;
}
