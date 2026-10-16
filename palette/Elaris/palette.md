<h1 align="center">Elaris Color Palette</h1>

![All colors](../../assets/colors/colors-gradient.svg)

[← Back to the Elaris README page](../../README.md)

**At a glance**

- **Surfaces** define the editor and workbench layers.
- **Text** establishes foreground hierarchy and quieter secondary information.
- **Syntax and state accents** distinguish code constructs and interface feedback.

> This palette reflects the current Elaris brighter variant. HEX values are the base colors used by the theme; selections, highlights, borders, and other UI states may use transparency variants.

## 1. Surfaces

| Color                                                                                                           | Role                  | Color name        | HEX       | Purpose                                                            |
| --------------------------------------------------------------------------------------------------------------- | --------------------- | ----------------- | --------- | ------------------------------------------------------------------ |
| <img src="../../assets/colors/editor-background.png" width="24" height="24" alt="Charcoal color swatch" />      | **Editor background** | Charcoal          | `#17171D` | Deepest surface; keeps source code visually dominant.              |
| <img src="../../assets/colors/sidebar-tabs.png" width="24" height="24" alt="Graphite color swatch" />           | **Sidebar and tabs**  | Graphite          | `#1D1D26` | Separates navigation from the editor without a hard contrast jump. |
| <img src="../../assets/colors/panels.png" width="24" height="24" alt="Slate charcoal color swatch" />           | **Panels**            | Slate charcoal    | `#22222C` | Defines the lower panel and secondary workbench layer.             |
| <img src="../../assets/colors/widgets-menus.png" width="24" height="24" alt="Elevated graphite color swatch" /> | **Widgets and menus** | Elevated graphite | `#252530` | Used for suggestions, hover cards, menus, and input surfaces.      |
| <img src="../../assets/colors/hover-surface.png" width="24" height="24" alt="Soft graphite color swatch" />     | **Hover surface**     | Soft graphite     | `#2A2A35` | Marks interactive hover states without bright fills.               |

## 2. Text

| Color                                                                                                           | Role               | Color name       | HEX       | Purpose                                            |
| --------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------- | --------- | -------------------------------------------------- |
| <img src="../../assets/colors/primary-text.png" width="24" height="24" alt="Warm ivory color swatch" />         | **Primary text**   | Warm ivory       | `#EBE7E1` | Main editor and interface foreground.              |
| <img src="../../assets/colors/secondary-text.png" width="24" height="24" alt="Pale mauve-white color swatch" /> | **Secondary text** | Pale mauve-white | `#DED7DE` | Supporting labels and secondary interface content. |
| <img src="../../assets/colors/muted-text.png" width="24" height="24" alt="Quiet gray color swatch" />           | **Muted text**     | Quiet gray       | `#96909D` | Inactive labels and low-priority details.          |

## 3. Syntax and state accents

| Color                                                                                                                    | Role                           | Color name              | HEX       | Purpose                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ----------------------- | --------- | -------------------------------------------------------------------- |
| <img src="../../assets/colors/focus-active.png" width="24" height="24" alt="Luminous sage color swatch" />               | **Focus and active states**    | Luminous sage           | `#DBE4A8` | Cursor, focus borders, active indicators, and primary actions.       |
| <img src="../../assets/colors/keywords-decorators.png" width="24" height="24" alt="Bright mineral lilac color swatch" /> | **Keywords and decorators**    | Bright mineral lilac    | `#D2B7EE` | Language structure, control flow, and decorators.                    |
| <img src="../../assets/colors/functions-methods.png" width="24" height="24" alt="Warm apricot color swatch" />           | **Functions and methods**      | Warm apricot            | `#F0B394` | Makes callable names easier to identify.                             |
| <img src="../../assets/colors/types-namespaces.png" width="24" height="24" alt="Periwinkle mist color swatch" />         | **Types and namespaces**       | Periwinkle mist         | `#B8CEF0` | Classes, types, interfaces, namespaces, and related symbols.         |
| <img src="../../assets/colors/properties-object-keys.png" width="24" height="24" alt="Clear seafoam color swatch" />     | **Properties and object keys** | Clear seafoam           | `#9FD4C5` | Fields, properties, object keys, and selected informational details. |
| <img src="../../assets/colors/strings.png" width="24" height="24" alt="Soft sage color swatch" />                        | **Strings**                    | Soft sage               | `#D2DEAD` | String values and related text literals.                             |
| <img src="../../assets/colors/numbers-literals.png" width="24" height="24" alt="Warm amber color swatch" />              | **Numbers and literals**       | Warm amber              | `#E5C98F` | Numeric values, booleans, constants, and warning accents.            |
| <img src="../../assets/colors/parameters.png" width="24" height="24" alt="Soft mauve color swatch" />                    | **Parameters**                 | Soft mauve              | `#DED2D4` | Function parameters and argument names.                              |
| <img src="../../assets/colors/comments.png" width="24" height="24" alt="Bright muted mauve-gray color swatch" />         | **Comments**                   | Bright muted mauve-gray | `#A7A0AD` | Quiet explanatory text with improved visibility.                     |
| <img src="../../assets/colors/success-additions.png" width="24" height="24" alt="Spring sage color swatch" />            | **Success and additions**      | Spring sage             | `#BEDAA4` | Successful operations, passing tests, and added lines.               |
| <img src="../../assets/colors/errors-deletions.png" width="24" height="24" alt="Soft coral color swatch" />              | **Errors and deletions**       | Soft coral              | `#EF9BA4` | Errors, failed tests, and removed lines.                             |
| <img src="../../assets/colors/operators-punctuation.png" width="24" height="24" alt="Silver lavender color swatch" />    | **Operators and punctuation**  | Silver lavender         | `#C1B9C8` | Operators and structural punctuation without excessive emphasis.     |

## Implementation notes

- **Base colors:** HEX values identify the base color for each role. Individual workbench tokens may use 8-digit HEX values to add transparency.
- **Syntax rendering:** The final appearance of syntax colors can vary by language grammar, semantic highlighting, installed extensions, and language-server support.
- **Swatch assets:** Each swatch is a 96 × 96 PNG stored in `assets/colors/`; the Markdown table renders it at 24 × 24 pixels.
