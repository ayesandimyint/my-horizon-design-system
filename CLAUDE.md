# CLAUDE.md — how we work in this repo

This file holds the culture: how components are built here, what is allowed, and
what to avoid. It codifies what the product uses, and what it rejects, so that
teams ship a consistent system in every corner.

Before changing tokens, dependencies, tests, package scripts, or deployment
configuration, rescan `./tools.md` and read it as the source of truth as it
describes the current state.
S
## The system

- Tokens are the only source of visual values. Every color, space, radius, and
  font value in a component references a token.

- Semantic tokens point at primitives. Components use semantic tokens only,
  never primitives directly.

- A component referencing a raw hex is a bug. Report it rather than filling it in.

- Mode comes from types. A token that exists in one mode and not another is a
  design gap: report it rather than filling it in.

- Never edit anything in `build/tokens/`. It is generated. Fix it in Figma,
  re-export `design-tokens/tokens.json`, and rebuild.

## Naming

- **Components**:all small letter, one folder per component in `src/components/`.
  Prop names match the Figma property names exactly. If Figma says `size`,
  the prop is `size`. If it says `Color`, the prop is `Color`.

- **Token names** use category, then property, then role:
  - `color-action-primary`, `spacing-md`, `radius-sm`

- **CSS values always use `var(--token-name)`**. Never hex, px, or font names.

## Components

- Every component covers every interaction state the product uses:
  default, hover, pressed, focus, disabled, loading, error, as applicable.

- Every variant and every state has a story.

- A component's props are its documented API. Undocumented behaviour is a bug.

- Our components follow the subcomponent nesting pattern. When a component is
  used as a subcomponent, break it down into its subcomponent structures and
  then integrate their components into the parent component.

## Roles

- The engineer builds and fixes. It never verifies its own work.
- QA tests and reports. It never repairs.
- A human approves. No agent approves its own work, ever.

## Common failures to avoid

- Inventing a token that does not exist. Report the gap instead and stop.
- Copying a component's styles instead of importing the component.
- Raw hex, px, or font values inside a component file.
- Adding a dependency to solve a problem the existing stack already solves.

## Typography

- Install required font and load properly from Google Font CDN.
  See: https://fonts.google.com/

- Font family, weight, size, and line-height come from tokens.
- Leading and tracking (letter-spacing) come from tokens, never hardcoded.

## Icon

- Install and import material symbols from https://fonts.google.com/icons
- Every icon name resolves to the Material Symbols set.
- Icon sizing and color use tokens.

## Token Files (Edit these)

- `design-tokens/core.value.tokens.json` — Base color, spacing, radius, typography
- `design-tokens/semantic.light.tokens.json` — Light theme semantic colors
- `design-tokens/semantic.dark.tokens.json` — Dark theme semantic colors
- `design-tokens/typography.*.tokens.json` — Typography definitions

## Generated Files (Never edit)

- `build/css/tokens.css` — CSS custom properties (read-only)
- `build/ios/Tokens.swift` — iOS tokens (read-only)
- `storybook-static/` — Static Storybook build (read-only)

**Fix at source**: Edit token files in `design-tokens/`, then rebuild with
`npm run build:tokens`. The output will update automatically.

## Commands & Stack

| Command | Purpose |
|---------|---------|
| `npm run build:tokens` | Rebuild token outputs |
| `npm run storybook` | Start Storybook dev (http://localhost:6008) |
| `npm run build:storybook` | Build static Storybook site |

See `tools.md` for full stack and detailed command reference.

## Git workflow

- **Branch naming**: `tokens/sync-<2-3-word-description>`
  Example: `tokens/sync-primary-orange-anchor`

- **Commits**: Describe what changed in semantic language.
  Example: "Updated blue-600 to pure hue anchor, simplified aqua description"

- **Pull requests**: Always create from feature branch. Never merge to main
  directly. Get review before merging token changes.

- **Token updates use token-runner agent**: Creates branch, builds tokens,
  commits changes, and pushes—ready for PR review.

## References

- **Token source**: `design-tokens/` — edit these files
- **Generated output**: `build/css/tokens.css` — read-only, never hand-edit
- **Storybook**: http://localhost:6008 (run `npm run storybook`)
- **Commands & stack**: `tools.md`
- **Skills reference**: `SKILL.md`
- **Agent details**: `.claude/agents/token-runner.md`
