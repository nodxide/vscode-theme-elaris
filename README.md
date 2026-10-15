<h1 align="center">Elaris VSCode Color Theme</h1>

<p align="center">
  <img src="assets/logo/elaris-logo-158.png" alt="Elaris logo" width="158" height="158">
</p>

<p align="center">
  <a href="https://github.com/nodxide/vscode-theme-elaris">
    <img
      src="https://img.shields.io/badge/Visual_Studio_Code-Color_Theme-252530?style=for-the-badge&logo=visualstudiocode&logoColor=C0A5D9&labelColor=17171D"
      alt="Visual Studio Code Theme"
    >
  </a>
  <img
    src="https://img.shields.io/badge/Dark-Interface-252530?style=for-the-badge&logo=visualstudiocode&logoColor=D0D49A&labelColor=17171D"
    alt="Dark Interface"
  >
  <img
    src="https://img.shields.io/badge/Pastel-Color_Palette-252530?style=for-the-badge&labelColor=17171D"
    alt="Pastel Color Palette"
  >
</p>

<p align="center">
  <a href="https://github.com/nodxide/vscode-theme-elaris/stargazers">
    <img
      src="https://img.shields.io/github/stars/nodxide/vscode-theme-elaris?style=for-the-badge&logo=github&logoColor=C0A5D9&labelColor=17171D&color=252530"
      alt="GitHub Stars"
    >
  </a>
  <a href="https://github.com/nodxide/vscode-theme-elaris/blob/main/LICENSE">
    <img
      src="https://img.shields.io/github/license/nodxide/vscode-theme-elaris?style=for-the-badge&labelColor=17171D&color=252530"
      alt="License"
    >
  </a>
</p>

<p align="center">
  <strong>
    Charcoal surfaces, warm neutrals, and restrained mineral accents — designed to make code easier to scan without turning the editor into a light show.
  </strong>
</p>

<p align="center">
  <img src="assets/elaris-theme-code-preview.png" alt="Elaris color theme code preview" width="1020">
</p>

<p align="center">
  <a href="palette/Elaris/palette.md">Color palette</a>
  ◦
  <a href="https://github.com/be5invis/Iosevka">Iosevka Font</a>
</p>

<p align="center"><em>Less visual noise. More attention on the code.</em></p>

---

<h2 align="center">Overview</h2>

Elaris is a dark color theme for Visual Studio Code built around one principle: **the interface should support the code, not compete with it.**

The theme combines a near-black charcoal editor with warm off-white text, muted lavender-gray neutrals, and a deliberate set of mineral-inspired syntax accents. Each color has a role: soft lime identifies focus and active states, teal distinguishes properties and links, sage colors strings, cool blue marks types, lilac highlights language keywords, amber identifies literals, and copper adds warmth to selected syntax. Coral is reserved for errors and destructive states.

That visual language continues throughout the workbench — from tabs and sidebars to terminal output, diagnostics, source control, diffs, debugging, tests, and notebooks. The aim is a cohesive workspace where hierarchy stays clear and emphasis is used intentionally.

<h2 align="center">Design principles</h2>

### A clear visual hierarchy

The editor uses the darkest surface in the workbench. Sidebars, panels, menus, and completion widgets sit on subtly lighter layers. Fine borders and restrained hover states add structure without heavy outlines.

### Syntax colors with distinct roles

Keywords, functions, types, properties, strings, literals, parameters, comments, and diagnostics use recognizable color roles. This separation helps the eye identify code structure without making every token equally prominent.

### Accents with restraint

Lime is reserved for focus and active states. Teal, sage, blue, lilac, amber, and copper provide useful distinctions, while coral communicates errors. The accents work together as a system rather than as isolated decoration.

### Designed for real workflows

Elaris styles more than syntax. Selections, bracket matching, search results, inlay hints, suggestions, Git decorations, merge states, terminal output, debugging, tests, and notebook cells are designed to feel like parts of the same workbench.

<h2 align="center">Color palette</h2>

Elaris uses a compact color system with distinct roles for interface surfaces, readable text, syntax, and diagnostics. The complete reference—including HEX values and the intended use of each core color—is maintained separately to keep this README focused.

**[View the Elaris color palette](palette/Elaris/palette.md)**

The theme definition also uses transparency variants for selections, highlights, borders, and other interface states. For the full token-level implementation, see [`themes/elaris-color-theme.json`](themes/elaris-color-theme.json).

<h2 align="center">Preview Elaris locally</h2>

To run the theme from source in the VS Code vscode-theme-elaris Development Host:

1. Clone the repository and open it in VS Code:

   ```bash
   git clone https://github.com/nodxide/vscode-theme-elaris.git
   cd vscode-theme-elaris
   code .
   ```

2. Press **F5** or select **Run → Start Debugging**. VS Code opens a separate vscode-theme-elaris Development Host window.
3. In that window, open the Command Palette with **Ctrl+Shift+P** (**Cmd+Shift+P** on macOS).
4. Run **Preferences: Color Theme** and select **Elaris**.

For vscode-theme-elaris packaging and publishing, consult the [VS Code vscode-theme-elaris publishing documentation](https://code.visualstudio.com/api/working-with-vscode-theme-elariss/publishing-vscode-theme-elaris).

<h2 align="center">Contributing</h2>

Bug reports, suggestions, and focused improvements are welcome. When reporting a visual issue, identify the affected token or workbench element, describe the current and expected behavior, and include a screenshot or minimal reproducible example where practical.

Contributions should preserve Elaris's visual hierarchy and the distinction between syntax roles. Prefer refining an existing assignment over introducing a new accent without a clear functional reason. When changing shared colors, review both code syntax and workbench states to avoid unintended side effects.

<h2 align="center">License</h2>

Elaris is distributed under the terms specified in [`LICENSE`](LICENSE). Review that file for the applicable conditions on use, modification, and redistribution.

---

<p align="center">
  <strong>Elaris</strong><br>
  Thoughtful colors. Clearer code. A quieter workspace.
</p>
