import path from "node:path";
import process from "node:process";
import { errorMessage, findCommand, ROOT, runCommand } from "./lib";
import { packageExtension } from "./package";

/**
 * Install the freshly created package, never publish it to the Marketplace.
 * Set VSCODE_CLI if your VS Code executable has a non-standard name or path.
 */
function installLocal(): void {
  // Allow users with multiple VS Code builds to choose the target CLI explicitly.
  const preferredCli = process.env.VSCODE_CLI;
  const codeCli = preferredCli
    ? findCommand(preferredCli)
    : (findCommand("code") ?? findCommand("code-insiders"));

  if (!codeCli) {
    throw new Error(
      "The VS Code CLI was not found on PATH. Try setting VSCODE_CLI to its executable path, " +
        "or add 'code' to PATH. For example: VSCODE_CLI=code-insiders npm run install:local",
    );
  }

  // Rebuild before installation so the installed VSIX matches the current files.
  const vsixPath = packageExtension();
  runCommand(codeCli, ["--install-extension", vsixPath, "--force"], ROOT);

  console.log("\nElaris has been installed locally.");
  console.log(
    "In VS Code, run “Preferences: Color Theme” and select the Elaris theme.",
  );
}

// Keep installation side effects limited to direct execution of this script.
if (
  path.basename(process.argv[1] ?? "").replace(/\.(?:ts|js)$/i, "") ===
  "install-local"
) {
  try {
    installLocal();
  } catch (error) {
    console.error(`\nLocal installation failed: ${errorMessage(error)}`);
    process.exitCode = 1;
  }
}
