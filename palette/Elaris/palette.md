<h1 align="center">Elaris Color Palette</h1>

[← Back to the Elaris README](../../README.md)

## At a glance

- **Surfaces** define the editor and workbench layers.
- **Text** establishes foreground hierarchy and quiet secondary information.
- **Syntax and state accents** distinguish code constructs and interface feedback.

> The HEX values below are the original palette values and have not been changed. The theme may use transparency variants of these colors for selections, highlights, borders, and other UI states.

## 1. Surfaces

| Color                                                                                                           | Role                  | Color name        | HEX       | Purpose                                                            |
| --------------------------------------------------------------------------------------------------------------- | --------------------- | ----------------- | --------- | ------------------------------------------------------------------ |
| <img src="../../assets/colors/editor-background.png" width="24" height="24" alt="Charcoal color swatch" />      | **Editor background** | Charcoal          | `#17171D` | Deepest surface; keeps the code visually dominant.                 |
| <img src="../../assets/colors/sidebar-tabs.png" width="24" height="24" alt="Graphite color swatch" />           | **Sidebar and tabs**  | Graphite          | `#1D1D26` | Separates navigation from the editor without a hard contrast jump. |
| <img src="../../assets/colors/panels.png" width="24" height="24" alt="Slate charcoal color swatch" />           | **Panels**            | Slate charcoal    | `#22222C` | Gives bottom and secondary panels their own layer.                 |
| <img src="../../assets/colors/widgets-menus.png" width="24" height="24" alt="Elevated graphite color swatch" /> | **Widgets and menus** | Elevated graphite | `#252530` | Used for suggestions, hover cards, menus, and inputs.              |
| <img src="../../assets/colors/hover-surface.png" width="24" height="24" alt="Soft graphite color swatch" />     | **Hover surface**     | Soft graphite     | `#2A2A35` | Indicates interactive states without bright fills.                 |

## 2. Text

| Swatch                                                                                                         | Role               | Color name      | HEX       | Purpose                                                  |
| -------------------------------------------------------------------------------------------------------------- | ------------------ | --------------- | --------- | -------------------------------------------------------- |
| <img src="../../assets/colors/primary-text.png" width="24" height="24" alt="Warm ivory color swatch" />        | **Primary text**   | Warm ivory      | `#E7E2DB` | Main editor and interface foreground.                    |
| <img src="../../assets/colors/secondary-text.png" width="24" height="24" alt="Pale mauve-gray color swatch" /> | **Secondary text** | Pale mauve-gray | `#D5CDD4` | Supporting labels and secondary content.                 |
| <img src="../../assets/colors/muted-text.png" width="24" height="24" alt="Quiet gray color swatch" />          | **Muted text**     | Quiet gray      | `#87818D` | Inactive labels, line numbers, and low-priority details. |

## 3. Syntax and state accents

| Swatch                                                                                                              | Role                           | Color name       | HEX       | Purpose                                                          |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------------- | --------- | ---------------------------------------------------------------- |
| <img src="../../assets/colors/focus-active.png" width="24" height="24" alt="Soft lime color swatch" />              | **Focus and active states**    | Soft lime        | `#D0D49A` | Cursor, focus borders, active indicators, and primary actions.   |
| <img src="../../assets/colors/keywords-decorators.png" width="24" height="24" alt="Mineral lilac color swatch" />   | **Keywords and decorators**    | Mineral lilac    | `#C0A5D9` | Language structure and control-flow cues.                        |
| <img src="../../assets/colors/functions-methods.png" width="24" height="24" alt="Warm copper color swatch" />       | **Functions and methods**      | Warm copper      | `#DFA486` | Makes callable names easy to identify.                           |
| <img src="../../assets/colors/types-namespaces.png" width="24" height="24" alt="Mist blue color swatch" />          | **Types and namespaces**       | Mist blue        | `#A7BCD9` | Classes, types, interfaces, and related symbols.                 |
| <img src="../../assets/colors/properties-object-keys.png" width="24" height="24" alt="Muted teal color swatch" />   | **Properties and object keys** | Muted teal       | `#8EBFB1` | Fields, properties, links, and selected informational details.   |
| <img src="../../assets/colors/strings.png" width="24" height="24" alt="Pale sage color swatch" />                   | **Strings**                    | Pale sage        | `#C4D0A3` | String values and related text literals.                         |
| <img src="../../assets/colors/numbers-literals.png" width="24" height="24" alt="Soft amber color swatch" />         | **Numbers and literals**       | Soft amber       | `#D8B982` | Numeric values, booleans, constants, and warnings.               |
| <img src="../../assets/colors/parameters.png" width="24" height="24" alt="Warm gray color swatch" />                | **Parameters**                 | Warm gray        | `#D1C5C6` | Function parameters and argument names.                          |
| <img src="../../assets/colors/comments.png" width="24" height="24" alt="Muted mauve-gray color swatch" />           | **Comments**                   | Muted mauve-gray | `#97909B` | Deliberately quieter explanatory text.                           |
| <img src="../../assets/colors/success-additions.png" width="24" height="24" alt="Sage green color swatch" />        | **Success and additions**      | Sage green       | `#AFCA98` | Successful operations, tests, and added lines.                   |
| <img src="../../assets/colors/errors-deletions.png" width="24" height="24" alt="Soft coral color swatch" />         | **Errors and deletions**       | Soft coral       | `#E58F98` | Errors, failed tests, and removed lines.                         |
| <img src="../../assets/colors/operators-punctuation.png" width="24" height="24" alt="Lavender gray color swatch" /> | **Operators and punctuation**  | Lavender gray    | `#B2AAB7` | Structural punctuation and operators without excessive emphasis. |

## Implementation notes

- **Base colors:** The HEX values identify the base color for each role. Individual workbench tokens may use 8-digit HEX values to add transparency.
- **Syntax rendering:** The final appearance of syntax colors can vary with the language grammar, semantic tokens, and installed extensions or language servers.
