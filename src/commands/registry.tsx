import type { Command } from './types';
import {
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
  Help,
} from '../components/CommandOutput';
import styles from '../components/CommandOutput/CommandOutput.module.css';

export const commands: Command[] = [
  {
    name: 'help',
    aliases: ['?', 'commands', 'h'],
    description: 'Display available commands',
    execute: () => <Help />,
  },
  {
    name: 'whoami',
    aliases: ['about', 'me', 'who'],
    description: 'Display information about me',
    execute: () => <About />,
  },
  {
    name: 'skills',
    aliases: ['tech', 'stack', 'technologies'],
    description: 'List technical skills',
    execute: () => <Skills />,
  },
  {
    name: 'experience',
    aliases: ['work', 'exp', 'jobs', 'career'],
    description: 'Show work experience',
    execute: () => <Experience />,
  },
  {
    name: 'projects',
    aliases: ['portfolio', 'works'],
    description: 'View featured projects',
    execute: () => <Projects />,
  },
  {
    name: 'education',
    aliases: ['edu', 'school', 'degree'],
    description: 'Educational background',
    execute: () => <Education />,
  },
  {
    name: 'contact',
    aliases: ['email', 'social', 'connect', 'reach'],
    description: 'Get in touch',
    execute: () => <Contact />,
  },
  {
    name: 'clear',
    aliases: ['cls', 'reset', 'c'],
    description: 'Clear terminal screen',
    execute: () => null,
  },
  // Easter Eggs
  {
    name: 'sudo',
    aliases: ['su'],
    description: '',
    hidden: true,
    execute: () => (
      <span className={styles.error}>
        Nice try! But you don't have root access here.
      </span>
    ),
  },
  {
    name: 'vim',
    aliases: ['vi', 'nano', 'emacs', 'nvim'],
    description: '',
    hidden: true,
    execute: () => (
      <span>
        Opening vim... Just kidding. This terminal is read-only. Type{' '}
        <span className={styles.command}>help</span> to see available commands.
      </span>
    ),
  },
  {
    name: 'rm',
    aliases: ['delete', 'remove'],
    description: '',
    hidden: true,
    execute: () => (
      <span className={styles.error}>
        rm: permission denied. This portfolio is read-only!
      </span>
    ),
  },
  {
    name: 'hire',
    aliases: ['hire-me', 'recruit', 'job'],
    description: '',
    hidden: true,
    execute: () => (
      <div>
        <span className={styles.success}>Excellent choice! </span>
        <span>Let's connect: </span>
        <a href="mailto:yragab99@gmail.com">yragab99@gmail.com</a>
      </div>
    ),
  },
  {
    name: 'coffee',
    aliases: ['brew', 'cafe'],
    description: '',
    hidden: true,
    execute: () => (
      <pre style={{ color: 'var(--term-yellow)' }}>
{`
   ( (
    ) )
  ........
  |      |]
  \\      /
   \`----'

Brewing coffee... Best fuel for ML models!
`}
      </pre>
    ),
  },
  {
    name: 'ls',
    aliases: ['dir', 'list'],
    description: '',
    hidden: true,
    execute: () => (
      <div>
        <span className={styles.highlight}>about.txt</span>{' '}
        <span className={styles.highlight}>skills.md</span>{' '}
        <span className={styles.highlight}>projects/</span>{' '}
        <span className={styles.highlight}>experience.log</span>{' '}
        <span className={styles.highlight}>education.txt</span>{' '}
        <span className={styles.highlight}>contact.json</span>
        <div className={styles.hint} style={{ marginTop: '8px' }}>
          Hint: Try running one of these as a command!
        </div>
      </div>
    ),
  },
  {
    name: 'cat',
    aliases: ['read', 'open'],
    description: '',
    hidden: true,
    execute: () => (
      <span className={styles.muted}>
        Usage: Just type the section name directly (e.g., <span className={styles.command}>skills</span>)
      </span>
    ),
  },
  {
    name: 'exit',
    aliases: ['quit', 'logout', 'bye'],
    description: '',
    hidden: true,
    execute: () => (
      <div>
        <span>Thanks for visiting! </span>
        <span className={styles.muted}>
          (But you can't really exit... this is a website)
        </span>
      </div>
    ),
  },
  {
    name: 'neofetch',
    aliases: ['screenfetch', 'sysinfo'],
    description: '',
    hidden: true,
    execute: () => (
      <pre style={{ color: 'var(--term-cyan)' }}>
{`
  ╭─────────────────────────────╮
  │  youssef@portfolio          │
  │  ─────────────────────      │
  │  OS: Web 3.0                │
  │  Host: GitHub Pages         │
  │  Kernel: React 18.x         │
  │  Shell: TypeScript          │
  │  Resolution: Responsive     │
  │  Theme: Terminal Dark       │
  │  CPU: Vite Turbo            │
  │  Memory: Unlimited Dreams   │
  ╰─────────────────────────────╯
`}
      </pre>
    ),
  },
  {
    name: 'secret',
    aliases: ['easter', 'eggs'],
    description: '',
    hidden: true,
    execute: () => (
      <div>
        <div className={styles.success}>You found the secrets!</div>
        <div className={styles.muted}>
          Hidden commands: sudo, vim, rm, hire, coffee, ls, neofetch, exit
        </div>
      </div>
    ),
  },
];

export function getVisibleCommands(): Command[] {
  return commands.filter((cmd) => !cmd.hidden);
}

export function getAllCommandNames(): string[] {
  const names: string[] = [];
  commands.forEach((cmd) => {
    names.push(cmd.name);
    names.push(...cmd.aliases);
  });
  return names;
}
