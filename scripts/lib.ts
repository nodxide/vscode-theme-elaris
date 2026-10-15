/** Shared filesystem and process helpers for the Elaris maintenance scripts. */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';

/**
 * Resolve the repository root from the script's location, not the caller's
 * current working directory. This keeps commands reliable when invoked from
 * npm scripts or from another directory.
 */
export const ROOT = path.resolve(
  path.dirname(path.resolve(process.argv[1] ?? process.cwd())),
  '..',
);

/** A JSON object whose values are intentionally treated as untrusted input. */
export type JsonObject = Record<string, unknown>;

/** Return true for ordinary JSON objects, excluding null and arrays. */
export function isRecord(value: unknown): value is JsonObject {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Read and parse a UTF-8 JSON file. Callers can validate the parsed shape
 * separately because parsing JSON does not guarantee that its contents match
 * the schema expected by a theme or extension manifest.
 */
export function readJsonFile(filePath: string): unknown {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as unknown;
}

/** Ensure a project-relative path stays inside the repository before using it. */
export function resolveInRoot(root: string, relativePath: string): string | null {
  const resolved = path.resolve(root, relativePath);
  const relative = path.relative(root, resolved);

  // Reject parent traversal and absolute paths outside the repository.
  if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    return null;
  }

  return resolved;
}

/**
 * Find a CLI executable on PATH. On Windows, PATHEXT is used to consider
 * standard executable and command-shim extensions such as .exe and .cmd.
 */
export function findCommand(command: string): string | null {
  const pathValue = process.env.PATH ?? '';
  const extensions = process.platform === 'win32'
    ? (process.env.PATHEXT ?? '.COM;.EXE;.BAT;.CMD').split(';')
    : [''];
  const hasPathSeparator = command.includes('/') || command.includes('\\');
  const directories = hasPathSeparator ? [''] : pathValue.split(path.delimiter);

  for (const directory of directories) {
    const base = hasPathSeparator ? command : path.join(directory, command);
    const candidates = path.extname(base) ? [base] : extensions.map((extension) => `${base}${extension}`);

    for (const candidate of candidates) {
      try {
        fs.accessSync(candidate, process.platform === 'win32' ? fs.constants.F_OK : fs.constants.X_OK);
        return path.resolve(candidate);
      } catch {
        // Continue searching PATH; missing candidates are expected here.
      }
    }
  }

  return null;
}

/**
 * Run a CLI with inherited terminal output so users can see compiler and
 * packaging diagnostics directly. Throw on launch errors and non-zero exits.
 */
export function runCommand(command: string, args: string[], cwd = ROOT): void {
  const result = spawnSync(command, args, {
    cwd,
    stdio: 'inherit',
    // Windows CLI tools are frequently .cmd shims; they require a shell.
    shell: process.platform === 'win32',
  });

  if (result.error) {
    throw new Error(`Could not start '${command}': ${result.error.message}`);
  }

  if (result.status !== 0) {
    throw new Error(`'${command}' exited with status ${result.status ?? 'unknown'}.`);
  }
}

/** Format unexpected thrown values without assuming they are Error objects. */
export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
