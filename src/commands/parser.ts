import { commands } from './registry';
import type { Command, ParseResult } from './types';

export function parseCommand(input: string): ParseResult {
  const trimmed = input.trim().toLowerCase();
  const parts = trimmed.split(/\s+/);
  const commandName = parts[0];
  const args = parts.slice(1);

  if (!commandName) {
    return { command: null, args: [], rawInput: input };
  }

  // Find command by name or alias
  const command = commands.find(
    (cmd) => cmd.name === commandName || cmd.aliases.includes(commandName)
  );

  if (!command) {
    return {
      command: null,
      args,
      rawInput: input,
      error: `Command not found: ${commandName}. Type 'help' for available commands.`,
    };
  }

  return { command, args, rawInput: input };
}

export function getAutocompleteSuggestions(partial: string): string[] {
  if (!partial) return [];

  const lower = partial.toLowerCase();
  const matches: string[] = [];

  commands
    .filter((cmd) => !cmd.hidden)
    .forEach((cmd) => {
      if (cmd.name.startsWith(lower)) {
        matches.push(cmd.name);
      }
      cmd.aliases.forEach((alias) => {
        if (alias.startsWith(lower) && !matches.includes(cmd.name)) {
          matches.push(cmd.name);
        }
      });
    });

  return [...new Set(matches)].sort();
}

export function findCommand(name: string): Command | undefined {
  const lower = name.toLowerCase();
  return commands.find(
    (cmd) => cmd.name === lower || cmd.aliases.includes(lower)
  );
}
