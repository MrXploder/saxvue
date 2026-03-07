# SaxVue – Copilot Instructions

## What This Is

Vue 3 UI component library (fork of Vuesax, renamed **SaxVue**). Ships as a UMD bundle consumed via `app.use(SaxVue)`. VitePress is the development/demo environment.

## Architecture

### Component structure (every component follows this)

```
src/components/svButton/
  Base/
    index.ts      ← plugin wrapper: imports style.scss, sets component.install, re-exports
    SvButton.ts   ← defineComponent() with render-function (h()), NOT SFC
    style.scss    ← component-scoped styles (SCSS syntax)
  group/          ← optional sub-components (Group, Item, Option, etc.)
```

**Key pattern:** Components use `defineComponent` + `h()` render functions — there are **zero `.vue` SFCs**. All templates are programmatic VNodes.

### Plugin entry (`src/index.ts`)

Registers all components and layouts via `app.use()`, attaches `$vs` global helper (`defineSaxVueFunctions.ts`), and applies theme options (`defineSaxVueOptions.ts`).

### Color system (`src/util/index.ts`)

`setColor()` / `getColor()` convert any color format (hex, rgb, named) into CSS custom properties (`--sv-*`). Components reference these via props: `color`, `primary`, `danger`, `success`, `warn`, `dark`.

### Shared color props & composable (`src/mixins/component.ts`)

- **`svColorProps`** — a plain object with the 7 standard color prop definitions (`color`, `danger`, `success`, `warn`, `dark`, `primary`, `active`). Spread into every component's `props`:
  ```ts
  import { svColorProps } from "../../../mixins/component";
  props: { ...svColorProps, myOtherProp: { ... } }
  ```
- **`useSvComponent(props)`** — Composition API composable that returns `{ getColor, componentColor, isColorDark, isColor }`. Call inside `setup()` when the component needs reactive color values. Also patches `getColor` onto the instance proxy for backward compat.

### Global functions (`src/functions/`)

`$vs.loading()`, `$vs.notification()`, `$vs.toggleTheme()`, `$vs.setColor()`, plus table helpers — all mounted on `app.config.globalProperties.$vs`.

### Icons (`src/icons/`)

Small render-function components (`VsIconArrow`, `VsIconClose`, etc.) using `<i>` elements styled via `icons.scss`.

## Build Pipeline

```
npm run build          → runs 3 webpack builds sequentially (build/index.js):
  1. build/lib/webpack.umd.js       → dist/saxvue.js + dist/saxvue.min.js (full UMD bundle)
  2. build/components/webpack.components.js → dist/<name>/index.js (per-component tree-shakeable)
  3. build/styles/webpack.styles.js  → dist/base.css (standalone stylesheet)
```

All configs merge from `build/webpack.base.js`. Vue is externalized. Component entry points live in `build/components/components.json`.

## Developer Commands

| Command              | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `npm run build`      | Full production build → `dist/`                 |
| `npm run lint:fix`   | ESLint auto-fix (`.ts`/`.tsx`/`.vue` in `src/`) |
| `npm test`           | Jest (test files in `test/`)                    |
| `npm run test:types` | Type-check `types/` declarations                |

## Conventions & Rules

- **No SFCs** — all components are `defineComponent()` + `h()` render functions in `.ts` files.
- **Styles:** SCSS syntax (`.scss`) for component styles, SCSS (`.scss`) for global/theme styles.
- **Naming:** component folders `vs<Name>/`, component files `vs<Name>.ts`, registered as `Vs<Name>` (e.g. `SvButton`).
- **Props pattern:** color props come from `...svColorProps` (spread from `src/mixins/component.ts`). **Never duplicate them manually** — always spread the shared object. Use `useSvComponent(props)` in `setup()` when you need reactive `getColor`/`isColor`/`isColorDark`.
- **Sub-components** go in sibling folders (`Group/`, `Item/`, `Option/`) under the parent component directory.
- **Docs demos** live under `docs/.vitepress/theme/components/demos/` and component docs live in `docs/docs/`.
- **Barrel exports:** `src/components/index.ts` re-exports every component; add new components there and in `build/components/components.json`.

## Adding a New Component

1. Create `src/components/vsNewThing/Base/vsNewThing.ts` — `defineComponent` + `h()` render function, spread `...svColorProps` in props, call `useSvComponent(props)` in setup
2. Create `src/components/vsNewThing/Base/style.scss` — component styles
3. Create `src/components/vsNewThing/Base/index.ts` — import style, set `.install`, export
4. Add export to `src/components/index.ts`
5. Add entry to `build/components/components.json`
6. Add demo usage in `docs/.vitepress/theme/components/demos/` and document it in `docs/docs/`
7. Add type declaration in `types/components/`
