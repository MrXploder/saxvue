# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

---

## [0.7.0] – 2026-03-08

### Added

- **Light / Dark theme system** — CSS custom properties (`--sv-background`, `--sv-text`, `--sv-gray-1..4`, `--sv-dark`) defined in `:root` for the light defaults; `[sv-theme='dark']` attribute in `_dark.scss` activates dark values
- **`$sv.setTheme(theme)`** — forces `'dark'` or `'light'` by toggling the `sv-theme` attribute on `<body>`; no `localStorage` or `sessionStorage` involved
- **`$sv.toggleTheme()`** — convenience wrapper that reads the current attribute and flips it; returns the newly active theme string
- Smooth CSS transition on `body` (`background-color` and `color`, 0.25 s ease) when switching themes
- **Boxicons** bundled as a direct dependency and imported into the base stylesheet — icon classes (`bx bx-*`) are available out of the box without extra CDN links

### Changed

- `src/functions/toggleTheme/index.ts` fully rewritten: removed all `localStorage`, `window.matchMedia`, and storage reads; logic is now pure DOM attribute manipulation
- `src/styles/_vars.scss`: added light-mode colour tokens alongside the existing root variables
- `src/styles/_reset.scss`: removed hardcoded Google Fonts import; `[class*='sv-']` now falls back to `inherit` for `font-family`; added `body` transition rule

### Fixed

- Native HTML elements (`button`, `input`, `textarea`, `select`, `a`) now explicitly inherit `font-family` from the cascade instead of using the browser default

---

## [0.6.0] – 2026-03-07

### Added

- **Font inheritance from `:root`** — `--sv-font-family` defaults to `inherit` so every SaxVue component respects whatever `font-family` the host application sets on `:root` or `body`; developers can override via `--sv-font-family` CSS variable
- **Typography section** in the Configuration guide documenting font inheritance and the `--sv-font-family` override

### Removed

- Removed hardcoded Google Fonts (Poppins) `@import` from the base reset stylesheet

---

## [0.5.0] – 2026-03-07

### Added

- **Boxicons** added as a production dependency (`^2.1.4`)
- Boxicons CSS bundled into `saxvue.scss` so icon classes are available automatically after `import '@mrxploder/saxvue/dist/saxvue.css'`

---

## [0.4.0] – 2026-03-07

### Fixed

- Native HTML elements (`button`, `input`, `textarea`, `select`, `a`) now carry `font-family: inherit` in the base reset, so they pick up the application's root font

---

## [0.3.0] – 2026-03-04

### Changed

- Removed Storybook and cleaned project configuration
- Updated docs layout (hero showcase positioning, floating logo centering)
- Added docs Configuration guide (colors table, global functions reference)
- Fixed floating logos: hidden by default, shown on hero button hover; centering matches legacy behavior

### Fixed

- Hero showcase: replaced all placeholder images with real legacy images
- Docs logo: replaced legacy VuePress logo with `saxvue-logo.svg`

---

## [0.2.0] – 2026-03-04

### Added

- **VitePress documentation site** — guide pages (Getting Started, Configuration, Nuxt), theme/colors page, 17 component pages, license page, and interactive homepage showcase
- 130+ demo SFC files with live component previews and automated demo injection
- `docs:dev`, `docs:build`, `docs:preview` npm scripts and `vitepress` dev dependency
- Legacy VuePress public images (avatars, fotos) migrated into `docs/public/`; demo pages updated to reference local assets
- `.prettierignore` to prevent Prettier from rewriting `README.md` during pre-commit hooks

### Fixed

- **SCSS private function rename** — renamed `-color()`, `-var()`, `-rgba()` to `sv-color()`, `sv-var()`, `sv-rgba()` across 28 SCSS files (200+ call sites); Dart Sass `@use` module system treated `-` prefix as private, breaking compilation
- **Sass `global-builtin` deprecation** — added `@use 'sass:string'` and replaced `unquote()` with `string.unquote()` in `_mixins.scss`
- **Sass `legacy-js-api` deprecation** — set `scss.api: 'modern'` in VitePress config
- **`svSelect` class rendering** — replaced incorrect `className` usage with proper `class: [...]` arrays in `svSelect.ts` to fix `[object Object]` class output
- **Docs logo** — replaced VitePress docs logo with `saxvue-logo.svg`; demo navbars updated accordingly

### Changed

- Removed hardcoded `max-width: 350px` from `.sv-card` base styles for fluid-width cards
- External image URLs (picsum, unsplash, avatars.githubusercontent.com) replaced with local `docs/public/` assets for offline stability

---

## [0.1.0] – 2026-03-04

### Added

- **First public release** of the SaxVue component library
- All components use the `sv*` naming convention (`sv-button`, `sv-input`, etc.) and are registered via `app.use(SaxVue)`
- Global helper property `$sv` on every Vue instance (`$sv.loading()`, `$sv.notification()`, `$sv.setColor()`, `$sv.toggleTheme()`)
- Layout grid system: `SvRow` / `SvCol` (`<sv-row>`, `<sv-col>` global components)
- Shared `svColorProps` spread + `useSvComponent()` composable used by every component
- Full unit test suite — 384 tests across 18 suites (Jest + @vue/test-utils) with coverage reporting
- `babel.config.js` to fix production build (was missing, causing build failures)
- `exports` map in `package.json` for modern bundler resolution and `peerDependencies` for `vue ^3.0.0`
- ESLint configuration with `@typescript-eslint`; `lint`/`lint:fix` scripts covering `src/` and `test/`
- Proper TypeScript declarations for `$sv` global and all component exports
- All 35 SCSS files migrated from `@import` to `@use` (zero Sass deprecation warnings)
- `-rgba()` Sass helper in `_mixins.scss` for CSS custom property compatibility
- Husky + lint-staged pre-commit hook (ESLint fix + Prettier on staged files)
- `build/verify-treeshake.js` and `verify:treeshake` npm script for per-component tree-shake verification
- Package published under `@mrxploder/saxvue` with `publishConfig.access: 'public'`

### Changed

- Eliminated all 387 `any` usages (ESLint `no-explicit-any: error`)
- Replaced 300+ `setTimeout` polling loops with Vue `nextTick()` calls
- Removed `src/` from `files` in `package.json` (consumers use `dist/` only)

### Removed

- Removed dead code, unused variables, and legacy placeholder tests
- Removed `tslint.json` (superseded by ESLint)
