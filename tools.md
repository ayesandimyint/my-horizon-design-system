# tools.md — what this project is built with

Stack (specs and commands only). Rules about how we work live in `CLAUDE.md`.

## Stack

- **Framework**: React js with Vite
- **Language**: TypeScript, strict
- **Package manager**: npm
- **Styling**: CSS (token properties, generated from tokens)
- **Tokens**: Style Dictionary v5, reading the Figma "Design Tokens" plugin export
- **Component**: Storybook 10 (react-vite)
- **Tools**: Vite
- **Accessibility**: Storybook a11y addon

## Commands

| Job | Command |
|-----|---------|
| Install | `npm install` |
| Build tokens | `npm run build:tokens` |
| Run Storybook | `npm run storybook` |
| Build Storybook | `npm run build:storybook` |
| Test | `npm test` |
| Type check | `npm run lint` |

## Paths

- **Token source**: `design-tokens/tokens.json` (exported from Figma, committed)
- **Token config**: `style-dictionary.config.js`
- **Generated output**: `build/tokens/` (never edit by hand, gitignored)
- **Components**: `src/components/<Name>/`
- **Agents**: `.claude/agents/`
- **Skills**: `.claude/skills/`

## Dependency rules

- Match the package manager in this file. This project uses npm, not yarn or pnpm.
- Use the existing package scripts before inventing commands.
- Do not add a dependency without explaining why in your report.
- Do not add a CLI or component library. This repo is the component library.
- If this file disagrees with package.json, inspect the repo and say so.

## Project Structure

```
horizon-design-system/
├── .claude/
│   ├── agents/
│   │   ├── token-runner.md
│   │   ├── engineer.md
│   │   └── qa.md
│   └── skills/
│       ├── build/SKILL.md
│       └── test/SKILL.md
├── design-tokens/
│   ├── core.value.tokens.json
│   ├── semantic.light.tokens.json
│   ├── semantic.dark.tokens.json
│   └── typography.*.tokens.json
├── stories/
│   ├── Colors.stories.js
│   ├── SemanticColors.stories.js
│   └── Typography.stories.js
├── .storybook/
│   ├── main.js
│   └── preview.js
├── build/
│   ├── css/tokens.css (generated)
│   └── ios/Tokens.swift (generated)
├── CLAUDE.md
├── SKILL.md
└── tools.md (this file)
```
