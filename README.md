<h1 align="center">Elaris VSCode Color Theme</h1>

<p align="center">
  <img src="assets/logo/elaris-logo-158.png" alt="Elaris logo" width="158" height="158">
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=nodxide.vscode-theme-elaris">
    <img src="https://img.shields.io/visual-studio-marketplace/v/nodxide.vscode-theme-elaris?style=flat-square&label=version&logo=visualstudiocode&logoColor=C0A5D9&labelColor=17171D&color=252530" alt="Marketplace version">
  </a>
  <img src="https://img.shields.io/visual-studio-marketplace/i/nodxide.vscode-theme-elaris?style=flat-square&label=installs&logo=download&logoColor=D0D49A&labelColor=17171D&color=252530" alt="Marketplace installs">
  <img src="https://img.shields.io/visual-studio-marketplace/r/nodxide.vscode-theme-elaris?style=flat-square&label=rating&logo=star&logoColor=DFA486&labelColor=17171D&color=252530" alt="Marketplace rating">
</p>

<p align="center">
  <a href="https://github.com/OWNER/REPOSITORY/stargazers">
    <img src="https://img.shields.io/github/stars/nodxide/vscode-theme-elaris?style=flat-square&label=stars&logo=github&logoColor=C0A5D9&labelColor=17171D&color=252530" alt="GitHub stars">
  </a>
  <img src="https://img.shields.io/github/license/nodxide/vscode-theme-elaris?style=flat-square&label=license&labelColor=17171D&color=252530" alt="License">
  <img src="https://img.shields.io/badge/theme-dark-252530?style=flat-square&labelColor=17171D&logo=visualstudiocode&logoColor=D0D49A" alt="Dark theme">
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
  ○
  <a href="https://github.com/be5invis/Iosevka">Iosevka Font</a>
  ○
  <a href="https://marketplace.visualstudio.com/items?itemName=thang-nm.flow-icons">Flow Icons(flow-you)</a>
</p>

<p align="center"><em>Less visual noise. More attention on the code.</em></p>

---

## Overview

Elaris is a dark color theme for Visual Studio Code built around one principle: **the interface should support the code, not compete with it.**

The theme combines a near-black charcoal editor with warm off-white text, muted lavender-gray neutrals, and a deliberate set of mineral-inspired syntax accents. Each color has a role: soft lime identifies focus and active states, teal distinguishes properties and links, sage colors strings, cool blue marks types, lilac highlights language keywords, amber identifies literals, and copper adds warmth to selected syntax. Coral is reserved for errors and destructive states.

That visual language continues throughout the workbench — from tabs and sidebars to terminal output, diagnostics, source control, diffs, debugging, tests, and notebooks. The aim is a cohesive workspace where hierarchy stays clear and emphasis is used intentionally.

## Design principles

### A clear visual hierarchy

The editor uses the darkest surface in the workbench. Sidebars, panels, menus, and completion widgets sit on subtly lighter layers. Fine borders and restrained hover states add structure without heavy outlines.

### Syntax colors with distinct roles

Keywords, functions, types, properties, strings, literals, parameters, comments, and diagnostics use recognizable color roles. This separation helps the eye identify code structure without making every token equally prominent.

### Accents with restraint

Lime is reserved for focus and active states. Teal, sage, blue, lilac, amber, and copper provide useful distinctions, while coral communicates errors. The accents work together as a system rather than as isolated decoration.

### Designed for real workflows

Elaris styles more than syntax. Selections, bracket matching, search results, inlay hints, suggestions, Git decorations, merge states, terminal output, debugging, tests, and notebook cells are designed to feel like parts of the same workbench.

## Highlights

- **Deep charcoal surfaces** with warm, readable foregrounds.
- **Semantic highlighting** for supported semantic tokens, complemented by TextMate grammar rules.
- **Broad syntax coverage** with language-specific rules for programming, markup, query, configuration, and infrastructure languages.
- **Cohesive workbench styling** across tabs, sidebars, panels, menus, notifications, inputs, terminals, and editor widgets.
- **Developer-state colors** for errors, warnings, Git changes, diffs, merge conflicts, debugging, tests, and notebooks.
- **Subtle active-line highlighting** that helps track the cursor without creating a prominent stripe.
- **Consistent terminal colors** with a coordinated ANSI palette.

Syntax highlighting depends on the language grammar and, where applicable, semantic-token support from installed language vscode-theme-elariss and language servers. Exact highlighting can therefore vary between languages and vscode-theme-elariss.

## Color palette

Elaris uses a compact color system with distinct roles for interface surfaces, readable text, syntax, and diagnostics. The complete reference—including HEX values and the intended use of each core color—is maintained separately to keep this README focused.

**[View the Elaris color palette](palette/Elaris/palette.md)**

The theme definition also uses transparency variants for selections, highlights, borders, and other interface states. For the full token-level implementation, see [`themes/elaris-color-theme.json`](themes/elaris-color-theme.json).

## Preview Elaris locally

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

## Contributing

Bug reports, suggestions, and focused improvements are welcome. When reporting a visual issue, identify the affected token or workbench element, describe the current and expected behavior, and include a screenshot or minimal reproducible example where practical.

Contributions should preserve Elaris's visual hierarchy and the distinction between syntax roles. Prefer refining an existing assignment over introducing a new accent without a clear functional reason. When changing shared colors, review both code syntax and workbench states to avoid unintended side effects.

## License

Elaris is distributed under the terms specified in [`LICENSE`](LICENSE). Review that file for the applicable conditions on use, modification, and redistribution.

---

<p align="center">
  <strong>Elaris</strong><br>
  Thoughtful colors. Clearer code. A quieter workspace.
</p>
