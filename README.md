# SaxVue# SaxVue

<img src="assets/saxvue-preview.jpg" alt="SaxVue preview" width="900" />

**Actively maintained** — this is a living project, built because I love Vuesax and want it to thrive in Vue 3.**Actively maintained** — this is a living project, built because I love Vuesax and want it to thrive in Vue 3.

> 💬 **Project status:** This is still baby steps and a **WIP**. Don't expect perfection yet — I'm improving it little by little and would **really, really** love any help from the community.> 💬 **Project status:** This is still baby steps and a **WIP**. Don’t expect perfection yet — I’m improving it little by little and would **really, really** love any help from the community.

A Vue 3 UI component library with 15 components, global functions, dark mode, CSS custom-property theming, and a full [VitePress documentation site](https://mrxploder.github.io/saxvue/) with 130+ live demos. All components are globally available after `app.use(SaxVue)` and use the `sv-*` element naming convention.A Vue 3 UI component library. All components are globally available after `app.use(SaxVue)` and use the `sv-*` element naming convention.

## ✨ Features## Install

- **15 components** — Button, Input, Select, Checkbox, Switch, Radio, Avatar, Tooltip, Alert, Dialog, Pagination, Table, Navbar, Sidebar, Card```bash

- **Layout grid** — `<sv-row>` / `<sv-col>` with 12-column support, offsets, responsive breakpointsnpm install @mrxploder/saxvue

- **Global functions** — `$sv.loading()`, `$sv.notification()`, `$sv.toggleTheme()`, `$sv.setColor()`# or

- **Dark mode** — one-call toggle with CSS custom propertiespnpm add @mrxploder/saxvue

- **Color system** — every component accepts `color`, `primary`, `success`, `danger`, `warn`, `dark` props# or

- **Tree-shakeable** — import the full bundle or individual componentsyarn add @mrxploder/saxvue

- **TypeScript** — full type declarations included```

- **Zero `.vue` SFCs** — all components use `defineComponent` + `h()` render functions

- **384 unit tests** across 18 suites (Jest + @vue/test-utils)## Setup

- **Storybook 8** — visual regression tests with `jest-image-snapshot`

- **VitePress docs** — 17 component pages, 130+ interactive demos, guide & theme pagesRegister the plugin in your app entry point:

- **CI/CD** — GitHub Actions (lint → test → type-check → build)

````ts

## 📦 Install// main.ts

import { createApp } from 'vue';

```bashimport App from './App.vue';

npm install @mrxploder/saxvue

# orimport SaxVue from '@mrxploder/saxvue';

pnpm add @mrxploder/saxvueimport '@mrxploder/saxvue/dist/base.css';

# or

yarn add @mrxploder/saxvueconst app = createApp(App);

```app.use(SaxVue);

app.mount('#app');

## 🚀 Quick Start```



```tsAfter `app.use(SaxVue)` every `sv-*` component is available globally — no per-component import needed.

// main.ts

import { createApp } from 'vue'## Components

import App from './App.vue'

### Buttons

import SaxVue from '@mrxploder/saxvue'

import '@mrxploder/saxvue/dist/saxvue.css'```vue

<sv-button color="primary">Primary</sv-button>

const app = createApp(App)<sv-button color="danger" flat>Danger flat</sv-button>

app.use(SaxVue)<sv-button color="success" border>Success border</sv-button>

app.mount('#app')<sv-button loading>Loading state</sv-button>

````

After `app.use(SaxVue)` every `sv-*` component is available globally — no per-component import needed.### Input

### Configuration```vue

<sv-input v-model="value" label="Name" placeholder="Enter your name" />

Pass an options object to customize theme colors:<sv-input v-model="value" label="Password" type="password" />

````

```ts

app.use(SaxVue, {### Select

  colors: {

    primary: '#5b3cc4',```vue

    success: 'rgb(23, 201, 100)',<sv-select v-model="selected" label="Fruit">

    danger: 'rgb(242, 19, 93)',	<sv-option value="apple">Apple</sv-option>

    warning: 'rgb(255, 130, 0)',	<sv-option value="banana">Banana</sv-option>

    dark: 'rgb(36, 33, 69)',	<sv-option value="cherry">Cherry</sv-option>

  },</sv-select>

})```

````

### Checkbox / Switch / Radio

### Nuxt 3

````vue
Create `plugins/saxvue.ts`:
<sv-checkbox v-model="checked" label="Accept terms" />

<sv-switch v-model="active" label="Enable notifications" />

```ts
<sv-radio v-model="picked" val="a" label="Option A" />

import { defineNuxtPlugin } from '#app'``` import SaxVue from '@mrxploder/saxvue' import
'@mrxploder/saxvue/dist/saxvue.css'### Avatar export default defineNuxtPlugin((nuxtApp) => {```vue
nuxtApp.vueApp.use(SaxVue)
<sv-avatar>

})	<img src="/avatar.png" alt="User" />

```</sv-avatar>

## 📚 Documentation
<sv-avatar-group max="3">

	<sv-avatar v-for="u in users" :key="u.id">

Full documentation with live demos is available at **[mrxploder.github.io/saxvue](https://mrxploder.github.io/saxvue/)**.		<img :src="u.avatar" :alt="u.name" />

	</sv-avatar>

The docs site includes:</sv-avatar-group>
````

| Section | Pages |

|---------|-------|### Tooltip / Alert / Dialog

| **Guide** | Introduction, Getting Started, Configuration, Nuxt integration |

| **Theme** | Colors — default palette, JS/CSS/runtime customization |```vue

| **Components** | Button, Alert, Avatar, Card, Checkbox, Dialog, Input, Loading, Navbar, Notification, Pagination, Radio, Select, Sidebar, Switch, Table, Tooltip |<sv-tooltip text="Helpful tip"><sv-button>Hover me</sv-button></sv-tooltip>

| **Layout** | Grid system (`sv-row` / `sv-col`) |

| **License** | MIT license details |<sv-alert color="success">File saved successfully.</sv-alert>

Run the docs locally:<sv-dialog v-model="open" title="Confirm">Are you sure?</sv-dialog>

````

```bash

npm run docs:dev      # http://localhost:5173/saxvue/### Pagination

````

```vue
## 🧩 Components
<sv-pagination v-model="page" :total-items="200" :items-per-page="10" />
```

### Buttons

### Table

````html
<sv-button color="primary">Primary</sv-button>```vue

<sv-button flat>Flat</sv-button
><sv-table :data="rows" v-model:search="search">
  <sv-button border>Border</sv-button>
  <template #header>
    <sv-button gradient>Gradient</sv-button> <sv-th sort-key="name">Name</sv-th>

    <sv-button relief>Relief</sv-button> <sv-th sort-key="email">Email</sv-th>

    <sv-button transparent>Transparent</sv-button>
  </template>

  <sv-button shadow>Shadow</sv-button>
  <template #tbody="{ data }">
    <sv-button loading>Loading</sv-button>
    <sv-tr v-for="row in data" :key="row.id" :data="row">
      <sv-button icon><i class="bx bx-home-alt"></i></sv-button> <sv-td>{{ row.name }}</sv-td>

      ``` <sv-td>{{ row.email }}</sv-td>
    </sv-tr>

    Button group:
  </template>
</sv-table>

```html```

<sv-button-group>
  <sv-button>One</sv-button>### Navbar

  <sv-button>Two</sv-button>

  <sv-button>Three</sv-button>```vue </sv-button-group
><sv-navbar>
  ```
  <template #left>
    <sv-navbar-group>
      ### Input <sv-navbar-item to="/">Home</sv-navbar-item>

      <sv-navbar-item to="/about">About</sv-navbar-item>

      ```html
    </sv-navbar-group>

    <sv-input v-model="value" label="Name" placeholder="Enter your name" />
  </template>

  <sv-input v-model="value" state="success"
/></sv-navbar>

<sv-input v-model="value" loading />```
````

### Sidebar

### Select

````vue
```html
<sv-sidebar v-model="sidebarOpen">

<sv-select v-model="selected" label="Fruit">	<sv-sidebar-group>

  <sv-option value="apple">Apple</sv-option>		<sv-sidebar-item>Dashboard</sv-sidebar-item>

  <sv-option value="banana">Banana</sv-option>		<sv-sidebar-item>Settings</sv-sidebar-item>

</sv-select>	</sv-sidebar-group>

```</sv-sidebar>
````

Supports multiple selection, filtering, option groups, loading, and state messages.

### Card

### Checkbox / Switch / Radio

````vue

```html<sv-card>

<sv-checkbox v-model="checked">Accept terms</sv-checkbox>	<template #title>Card title</template>

<sv-switch v-model="active" />	<template #text>Card body content</template>

<sv-radio v-model="picked" val="a">Option A</sv-radio>	<template #buttons>

```		<sv-button flat>Cancel</sv-button>

		<sv-button color="primary">OK</sv-button>

### Avatar	</template>

</sv-card>

```html```

<sv-avatar size="60">

  <img src="/avatar.png" alt="User" />## Layout Grid

</sv-avatar>

`SvRow` and `SvCol` are globally registered alongside all other components.

<sv-avatar-group max="3">

  <sv-avatar v-for="u in users" :key="u.id">```vue

    <img :src="u.avatar" :alt="u.name" /><sv-row justify="space-between" align="stretch" style="gap: 12px">

  </sv-avatar>	<sv-col w="4">Column 1</sv-col>

</sv-avatar-group>	<sv-col w="4">Column 2</sv-col>

```	<sv-col w="4">Column 3</sv-col>

</sv-row>

### Tooltip```



```html`SvCol` props: `w` (1–12), `offset`, `order`, `lg`, `sm`, `xs`, `type`, `justify`.

<sv-tooltip>

  <sv-button flat>Hover me</sv-button>## Global Helper – `$sv`

  <template #tooltip>This is a tooltip</template>

</sv-tooltip>After `app.use(SaxVue)` every component instance has access to `this.$sv`:

````

````ts

### Alert// Loading overlay

const handle = this.$sv.loading({ text: 'Saving…' });

```htmlhandle.close();

<sv-alert>Default alert</sv-alert>

<sv-alert color="success" solid>Success</sv-alert>// Notification toast

<sv-alert color="danger" gradient>Danger gradient</sv-alert>this.$sv.notification({ title: 'Saved', text: 'Your changes have been saved.' });

<sv-alert closable>Closable alert</sv-alert>

```// Theme

this.$sv.toggleTheme();

### Dialogthis.$sv.setTheme('dark');



```html// Set a named theme color

<sv-dialog v-model="open">this.$sv.setColor('primary', '#6C63FF');

  <template #header>Confirm</template>

  Are you sure?// Table helpers

  <template #footer>const page = this.$sv.getPage(data, 1, 10);

    <sv-button @click="open = false">OK</sv-button>const total = this.$sv.getLength(data, 10);

  </template>const hits = this.$sv.getSearch(data, 'alice');

</sv-dialog>```

````

## Color Props

### Card

All components accept these color props:

````html
<sv-card
  >| Prop | Description |

  <template #title>Card title</template>| --------- | ------------------------------- |

  <template #text>Card body content</template>| `color` | Any CSS color, hex, or var name |

  <template #interactions
    >| `primary` | Boolean shorthand for primary |

    <sv-button flat icon><i class="bx bx-heart"></i></sv-button>| `success` | Boolean shorthand for
    success | </template
  >| `danger` | Boolean shorthand for danger | </sv-card
>| `warn` | Boolean shorthand for warn | ```| `dark` | Boolean shorthand for dark | ### Pagination##
Dark Mode ```html```ts

<sv-pagination v-model="page" :length="20" />this.$sv.toggleTheme(); // toggle
```this.$sv.setTheme('dark'); // explicit this.$sv.setTheme('light'); ### Table``` ```html##
Tree-shaking (per-component imports)

<sv-table>
  <template #header
    >```ts

    <sv-th sort>Name</sv-th>import svButton from '@mrxploder/saxvue/dist/svButton/index.js';

    <sv-th sort>Email</sv-th>import svInput from '@mrxploder/saxvue/dist/svInput/index.js';
  </template>

  <template #body
    >app.use(svButton);

    <sv-tr v-for="row in data" :key="row.id"
      >app.use(svInput);

      <sv-td>{{ row.name }}</sv-td>```

      <sv-td>{{ row.email }}</sv-td> </sv-tr
    >## Development
  </template> </sv-table
>```bash ```npm install npm run storybook:dev # Storybook dev server → http://localhost:6006
Supports striped rows, single/multiple selection, search, sort, expand, and pagination.npm test #
Jest unit tests (384 tests, 18 suites) npm run build # Production build → dist/ ### Navbarnpm run
lint # ESLint
````

```html
<sv-navbar
  >## License

  <template #left> <img src="/logo.svg" alt="Logo" />MIT © MrXploder </template>
  <sv-navbar-item active>Home</sv-navbar-item>
  <sv-navbar-item>About</sv-navbar-item>
  <template #right>
    <sv-button flat icon><i class="bx bx-bell"></i></sv-button>
  </template>
</sv-navbar>
```

### Sidebar

```html
<sv-sidebar v-model="active" :open.sync="open">
  <template #logo>
    <img src="/logo.svg" alt="Logo" />
  </template>
  <sv-sidebar-item id="home">
    <template #icon><i class="bx bx-home"></i></template>
    Home
  </sv-sidebar-item>
  <sv-sidebar-group>
    <template #header>
      <sv-sidebar-item arrow>
        <template #icon><i class="bx bx-grid-alt"></i></template>
        Components
      </sv-sidebar-item>
    </template>
    <sv-sidebar-item id="button">Button</sv-sidebar-item>
  </sv-sidebar-group>
</sv-sidebar>
```

## 📐 Layout Grid

```html
<sv-row justify="center">
  <sv-col w="4">33.3%</sv-col>
  <sv-col w="4">33.3%</sv-col>
  <sv-col w="4">33.3%</sv-col>
</sv-row>
```

`SvCol` props: `w` (1-12), `offset`, `order`, `lg`, `sm`, `xs`.

## ⚡ Global Functions — `$sv`

After `app.use(SaxVue)` every component instance has access to `this.$sv`:

```ts
// Loading overlay
const handle = this.$sv.loading({ text: 'Saving...' });
handle.close();

// Notification toast
this.$sv.notification({
  title: 'Saved',
  text: 'Your changes have been saved.',
  color: 'success',
});

// Theme
this.$sv.toggleTheme();

// Runtime color change
this.$sv.setColor('primary', '#6C63FF');

// Table helpers
const page = this.$sv.getPage(data, 1, 10);
const total = this.$sv.getLength(data, 10);
const hits = this.$sv.getSearch(data, 'alice');
```

## 🎨 Color Props

All components accept these color props via the shared `svColorProps` mixin:

| Prop      | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| `color`   | Any CSS color — hex, rgb, or theme name (`primary`, `success`, etc.) |
| `primary` | Boolean shorthand                                                    |
| `success` | Boolean shorthand                                                    |
| `danger`  | Boolean shorthand                                                    |
| `warn`    | Boolean shorthand                                                    |
| `dark`    | Boolean shorthand                                                    |

## 🌙 Dark Mode

```ts
this.$sv.toggleTheme(); // toggle light <-> dark
```

Or via CSS custom properties:

```css
:root {
  --sv-primary: 91, 60, 196;
  --sv-success: 23, 201, 100;
  --sv-danger: 242, 19, 93;
  --sv-warn: 254, 130, 0;
  --sv-dark: 36, 33, 69;
}
```

## 🌳 Tree-Shaking (per-component imports)

```ts
import svButton from '@mrxploder/saxvue/dist/svButton/index.js';
import svInput from '@mrxploder/saxvue/dist/svInput/index.js';

app.use(svButton);
app.use(svInput);
```

## 🛠 Development

```bash
npm install

# Documentation site (VitePress)
npm run docs:dev         # Dev server -> http://localhost:5173/saxvue/
npm run docs:build       # Static build
npm run docs:preview     # Preview static build

# Component development (Storybook)
npm run storybook:dev    # Storybook dev server -> http://localhost:6006

# Testing
npm test                 # Jest unit tests (384 tests, 18 suites)
npm run test:storybook   # Visual regression tests (22 snapshots)

# Build & quality
npm run build            # Production build -> dist/
npm run lint             # ESLint
npm run lint:fix         # ESLint auto-fix
npm run verify:treeshake # Verify per-component bundle sizes
npm run test:types       # Type-check declarations
```

## 📁 Project Structure

```
src/
  components/       # 15 components (defineComponent + h() render functions)
  functions/        # $sv global functions (loading, notification, table helpers)
  icons/            # Render-function icon components
  layout/           # Grid system (SvRow, SvCol)
  mixins/           # Shared color props & useSvComponent composable
  styles/           # SCSS theme (_colors, _dark, _mixins, _vars)
  util/             # Color utilities, ripple effect
docs/               # VitePress documentation site
  docs/components/  # 17 component doc pages with live demos
  docs/guide/       # Getting Started, Configuration, Nuxt
  docs/theme/       # Color system documentation
build/              # Webpack build configs (UMD, per-component, styles)
test/               # Unit tests
types/              # TypeScript declarations
```

## 📄 License

MIT © [MrXploder](https://github.com/MrXploder)
