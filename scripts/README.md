# Elaris maintenance scripts

A small TypeScript toolkit for validating, packaging, and locally testing the Elaris VS Code color theme. The scripts intentionally avoid a task runner or custom build framework.

## Scripts

| File | Purpose |
| --- | --- |
| `scripts/check.ts` | Validates `package.json`, contributed theme JSON, the icon, required files, README image references, and the optional machine-readable palette. |
| `scripts/package.ts` | Runs the checks and creates `dist/<name>-<version>.vsix` with the official `@vscode/vsce` CLI. |
| `scripts/install-local.ts` | Rebuilds the VSIX and installs it into the local VS Code installation. It does **not** publish the extension. |
| `scripts/lib.ts` | Shared path, command, and JSON utilities used by the scripts. |
| `tsconfig.scripts.json` | Strict TypeScript type-checking configuration for these maintenance scripts. |
| `.vscodeignore` | Excludes development scripts and generated files from the extension package. |

## One-time setup

Run this from the root of the Elaris repository:

```bash
npm install --save-dev @vscode/vsce tsx typescript @types/node
```

- `tsx` runs TypeScript scripts without a separate compilation step.
- `typescript` and `@types/node` provide static type checking for the scripts.
- `@vscode/vsce` builds the installable VS Code extension package.

Merge the following entries into the existing `scripts` object in `package.json`. Preserve any scripts already present:

```json
{
  "scripts": {
    "check": "tsx scripts/check.ts",
    "typecheck:scripts": "tsc --noEmit -p tsconfig.scripts.json",
    "package:vsix": "tsx scripts/package.ts",
    "install:local": "tsx scripts/install-local.ts"
  }
}
```

## Daily workflow

Check files and JSON before making a package:

```bash
npm run check
```

Type-check the maintenance scripts:

```bash
npm run typecheck:scripts
```

Build a VSIX for review or manual installation:

```bash
npm run package:vsix
```

Install the package into VS Code for a real preview:

```bash
npm run install:local
```

The package command places the result in `dist/`. The install command rebuilds that archive first, then calls `code --install-extension`. It prefers `code` and falls back to `code-insiders`. To target another VS Code executable, set `VSCODE_CLI`, for example:

```bash
VSCODE_CLI=code-insiders npm run install:local
```

## What the checks cover

- Required extension metadata and a basic semantic-version format.
- A Marketplace-compatible PNG/JPEG icon path.
- At least one theme contribution and a valid JSON theme file.
- Basic shapes for `colors`, `tokenColors`, and `semanticTokenColors` when those fields are present.
- Presence of `README.md` and `LICENSE`.
- Local image references in Markdown and HTML within the README.
- Valid JSON for `assets/palette/elaris-palette.json`, when that optional file exists.

These are practical repository checks, not a full validation against every VS Code manifest or theme schema. Always inspect the rendered theme in VS Code before publishing.

## Safety and scope

The scripts do not bump versions, create Git commits, or publish to the Marketplace. Review the VSIX and update the version intentionally before a release. The `.vscodeignore` file is a starting point—merge it with your current rules if your repository already has one.
