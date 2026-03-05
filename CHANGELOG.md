# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- **VitePress documentation site** — full docs at `/saxvue/` with guide pages (Introduction, Getting Started, Configuration, Nuxt integration), theme/colors page, 17 component pages (Button, Alert, Avatar, Card, Checkbox, Dialog, Input, Navbar, Pagination, Radio, Select, Sidebar, Switch, Table, Tooltip, Grid), license page, and homepage with interactive component showcase
- Added 130+ demo SFC files with live component previews and automated demo injection
- Added `docs:dev`, `docs:build`, `docs:preview` npm scripts
- Added `vitepress` as a dev dependency

### Fixed

- **SCSS private function rename** — renamed `-color()`, `-var()`, `-rgba()` to `sv-color()`, `sv-var()`, `sv-rgba()` across 28 SCSS files (200+ call sites); functions prefixed with `-` were treated as private members under Dart Sass's `@use` module system, breaking compilation
- **Sass `global-builtin` deprecation** — added `@use 'sass:string'` and replaced `unquote()` with `string.unquote()` in `_mixins.scss`
- **Sass `legacy-js-api` deprecation** — configured `css.preprocessorOptions.scss.api: 'modern'` and `sass.api: 'modern'` in VitePress config

### Changed

- Removed hardcoded `max-width: 350px` from `.sv-card` base styles for fluid-width cards

## [0.1.0] – 2026-03-04

### Added

- **First public release** of the SaxVue component library.
- All components use the `sv*` naming convention (`sv-button`, `sv-input`, etc.).
- Global helper property `$sv` available on every Vue instance after `app.use(SaxVue)`.
- Layout grid system: `SvRow` / `SvCol` (`<sv-row>`, `<sv-col>` global components).

### Added

- Renamed project from Vuesax to **Saxvue** (all references, filenames, banners, docs)
- Migrated Storybook from Webpack 5 to **Vite** (Storybook 8.6)
- Migrated all components to shared `vsColorProps` + `useVsComponent()` composable
- Added **Poppins** as default font family
- Added full **unit test suite** — 384 tests across 18 suites (Jest + @vue/test-utils)
- Added **code coverage** reporting with minimum thresholds
- Added `babel.config.js` to fix production build (was missing, causing build failures)
- Added **GitHub Actions CI** workflow (lint → test → type-check → build)
- Added `.npmignore` to exclude dev-only files from published package
- Added `.nvmrc` pinning Node 18
- Added `exports` map in `package.json` for modern bundler resolution
- Added `peerDependencies` for `vue ^3.0.0`
- Added **"Show Code"** toggle to every Storybook story
- Added all shadow props default to `true` in Storybook stories
- Added ESLint configuration (`.eslintrc.cjs`) with `@typescript-eslint`
- Added proper type declarations for `$vs` global and component exports
- Migrated all 35 SCSS files from `@import` to `@use` (zero Sass deprecation warnings)
- Added `-rgba()` Sass helper in `_mixins.scss` for CSS custom property compatibility
- Added **Storybook visual regression tests** — 22 snapshot tests via `@storybook/test-runner` + `jest-image-snapshot`
- Added `test:storybook` and `test:storybook:ci` npm scripts for visual regression
- Added visual regression step to GitHub Actions CI (build Storybook → Playwright → snapshot compare)
- Extended `lint` / `lint:fix` scripts to include `test/` directory
- Added ESLint `overrides` for test files (Jest env globals, relaxed `no-explicit-any`)
- Added **Husky + lint-staged** pre-commit hook (ESLint fix + Prettier on staged files)
- Added **MDX component documentation** — Getting Started guide + per-category prop tables and usage examples (Buttons, Forms, Data Display, Feedback, Navigation, Layout)
- Added `verify:treeshake` npm script — verifies per-component import sizes vs full bundle
- Added `build/verify-treeshake.js` script for tree-shaking verification

### Changed

- Set `@typescript-eslint/no-explicit-any` to `"error"` — eliminated all 387 `any` usages
- Replaced 300× `setTimeout` polling loops with Vue `nextTick()` calls
- Replaced raw `addEventListener` with lifecycle-scoped handlers
- Consolidated duplicate color logic into `useVsComponent` composable
- Updated Sass deprecation silencing in Storybook config (`legacy-js-api`, `import`)
- Removed `src/` from `files` in `package.json` (consumers should use `dist/` only)

### Removed

- Removed dead code, unused variables, and legacy placeholder tests
- Removed `tslint.json` dependency (superseded by ESLint)
