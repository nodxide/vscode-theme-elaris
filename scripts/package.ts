#!/usr/bin/env node

/** Validate and package Elaris as a VS Code-installable .vsix archive. */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import {
  errorMessage,
  findCommand,
  isRecord,
  readJsonFile,
  ROOT,
  runCommand,
} from './lib';
import { runChecks } from './check';

/**
 * Run the quality checks and create dist/<name>-<version>.vsix.
 * Additional command-line arguments are forwarded to `vsce package`, which
 * lets advanced users add flags without editing this script.
 */
export function packageExtension(extraArgs: string[] = []): string {
  // The script owns the output path; reject flags that could redirect the archive.
  if (extraArgs.some((argument) => argument === '--out' || argument.startsWith('--out='))) {
    throw new Error('Do not override --out; this script always writes the VSIX into dist/.');
  }

  const failures = runChecks(ROOT);
  if (failures > 0) {
    throw new Error(`Packaging stopped because ${failures} check(s) failed.`);
  }

  const manifestPath = path.join(ROOT, 'package.json');
  const manifest = readJsonFile(manifestPath);
  if (!isRecord(manifest) || typeof manifest.name !== 'string' || typeof manifest.version !== 'string') {
    throw new Error('package.json must define string values for "name" and "version".');
  }

  // Prefer the project's local dependency to avoid depending on a global vsce version.
  const localVsce = path.join(
    ROOT,
    'node_modules',
    '.bin',
    process.platform === 'win32' ? 'vsce.cmd' : 'vsce',
  );
  const vsce = fs.existsSync(localVsce) ? localVsce : findCommand('vsce');
  if (!vsce) {
    throw new Error(
      'The VS Code packaging CLI was not found. Install project tools with:\n' +
      '  npm install --save-dev @vscode/vsce tsx typescript @types/node',
    );
  }

  const outputDirectory = path.join(ROOT, 'dist');
  const outputPath = path.join(outputDirectory, `${manifest.name}-${manifest.version}.vsix`);
  fs.mkdirSync(outputDirectory, { recursive: true });

  // Delete an old archive first so a failed build cannot leave a stale package
  // that looks like the output of the current source revision.
  fs.rmSync(outputPath, { force: true });
  runCommand(vsce, ['package', '--out', outputPath, ...extraArgs], ROOT);

  if (!fs.existsSync(outputPath) || !fs.statSync(outputPath).isFile()) {
    throw new Error(`vsce completed without creating the expected archive: ${outputPath}`);
  }

  console.log(`\nPackage created: ${path.relative(ROOT, outputPath)}`);
  return outputPath;
}

function main(): void {
  try {
    packageExtension(process.argv.slice(2));
  } catch (error) {
    console.error(`\nPackage failed: ${errorMessage(error)}`);
    process.exitCode = 1;
  }
}

// Do not package automatically when another script imports packageExtension().
if (path.basename(process.argv[1] ?? '').replace(/\.(?:ts|js)$/i, '') === 'package') main();
