# SaxVue

<img src="assets/saxvue-preview.jpg" alt="SaxVue preview" width="900" />

**Actively maintained** — this is a living project, built because I love Vuesax and want it to thrive in Vue 3.

> 💬 **Project status:** This is still baby steps and a **WIP**. Don't expect perfection yet — I'm improving it little by little and would **really, really** love any help from the community.

A Vue 3 UI component library with **15 components**, global functions, dark mode, CSS custom-property theming, and a full [VitePress documentation site](https://mrxploder.github.io/saxvue/) with 130+ live demos.

All components are globally available after `app.use(SaxVue)` and use the `sv-*` element naming convention.

---

## ✨ Features

- **15 components** — Button, Input, Select, Checkbox, Switch, Radio, Avatar, Tooltip, Alert, Dialog, Pagination, Table, Navbar, Sidebar, Card
- **Layout grid** — `<sv-row>` / `<sv-col>` with 12-column support, offsets, and responsive breakpoints
- **Global functions** — `$sv.loading()`, `$sv.notification()`, `$sv.toggleTheme()`, `$sv.setColor()`
- **Dark mode** — one-call toggle with CSS custom properties
- **Color system** — every component accepts `color`, `primary`, `success`, `danger`, `warn`, `dark` props
- **Tree-shakeable** — import the full bundle or individual components
- **TypeScript** — full type declarations included
- **Zero `.vue` SFCs** — all components use `defineComponent()` + `h()` render functions
- **Storybook 8** — component development and visual testing
- **VitePress docs** — 17 component pages, 130+ interactive demos, guide & theme pages

---

## 📦 Install

```bash
npm install @mrxploder/saxvue
# or
pnpm add @mrxploder/saxvue
# or
yarn add @mrxploder/saxvue
```

---

## 🚀 Quick Start

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import SaxVue from '@mrxploder/saxvue'
import '@mrxploder/saxvue/dist/saxvue.css'

const app = createApp(App)
app.use(SaxVue)
app.mount('#app')
```

After `app.use(SaxVue)` every `sv-*` component is available globally — no per-component imports needed.

### Configuration

Pass an options object to customize theme colors:

```ts
app.use(SaxVue, {
  colors: {
    primary: '#5b3cc4',
    success: 'rgb(23, 201, 100)',
    danger: 'rgb(242, 19, 93)',
    warn: 'rgb(255, 130, 0)',
    dark: 'rgb(36, 33, 69)',
  },
})
```

### Nuxt 3

Create `plugins/saxvue.ts`:

```ts
import { defineNuxtPlugin } from '#app'
import SaxVue from '@mrxploder/saxvue'
import '@mrxploder/saxvue/dist/saxvue.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SaxVue)
})
```

---

## 📚 Documentation

Full documentation with live demos is available at **[mrxploder.github.io/saxvue](https://mrxploder.github.io/saxvue/)**.

| Section        | Pages                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Guide**      | Introduction, Getting Started, Configuration, Nuxt integration                                                                            |
| **Theme**      | Colors — default palette, JS/CSS/runtime customization                                                                                    |
| **Components** | Button, Alert, Avatar, Card, Checkbox, Dialog, Input, Loading, Navbar, Notification, Pagination, Radio, Select, Sidebar, Switch, Table, Tooltip |
| **Layout**     | Grid system (`sv-row` / `sv-col`)                                                                                                         |

Run the docs locally:

```bash
npm run docs:dev      # http://localhost:5173/saxvue/
```

---

## 🧩 Components

### Button

```html
<sv-button color="primary">Primary</sv-button>
<sv-button flat>Flat</sv-button>
<sv-button border>Border</sv-button>
<sv-button gradient>Gradient</sv-button>
<sv-button relief>Relief</sv-button>
<sv-button transparent>Transparent</sv-button>
<sv-button shadow>Shadow</sv-button>
<sv-button loading>Loading</sv-button>
<sv-button icon><i class="bx bx-home-alt"></i></sv-button>

<!-- Button group -->
<sv-button-group>
  <sv-button>One</sv-button>
  <sv-button>Two</sv-button>
  <sv-button>Three</sv-button>
</sv-button-group>
```

### Input

```html
<sv-input v-model="value" label="Name" placeholder="Enter your name" />
<sv-input v-model="value" label="Password" type="password" />
<sv-input v-model="value" state="success" />
<sv-input v-model="value" loading />
```

### Select

```html
<sv-select v-model="selected" label="Fruit">
  <sv-option value="apple">Apple</sv-option>
  <sv-option value="banana">Banana</sv-option>
  <sv-option value="cherry">Cherry</sv-option>
</sv-select>
```

Supports multiple selection, filtering, option groups, loading, and state messages.

### Checkbox / Switch / Radio

```html
<sv-checkbox v-model="checked">Accept terms</sv-checkbox>

<sv-switch v-model="active" />

<sv-radio v-model="picked" val="a">Option A</sv-radio>
<sv-radio v-model="picked" val="b">Option B</sv-radio>
```

### Avatar

```html
<sv-avatar size="60">
  <img src="/avatar.png" alt="User" />
</sv-avatar>

<sv-avatar-group max="3">
  <sv-avatar v-for="u in users" :key="u.id">
    <img :src="u.avatar" :alt="u.name" />
  </sv-avatar>
</sv-avatar-group>
```

### Tooltip

```html
<sv-tooltip>
  <sv-button flat>Hover me</sv-button>
  <template #tooltip>This is a tooltip</template>
</sv-tooltip>
```

### Alert

```html
<sv-alert>Default alert</sv-alert>
<sv-alert color="success" solid>Success</sv-alert>
<sv-alert color="danger" gradient>Danger gradient</sv-alert>
<sv-alert closable>Closable alert</sv-alert>
```

### Dialog

```html
<sv-dialog v-model="open">
  <template #header>Confirm</template>
  Are you sure?
  <template #footer>
    <sv-button @click="open = false">OK</sv-button>
  </template>
</sv-dialog>
```

### Pagination

```html
<sv-pagination v-model="page" :length="20" />
```

### Table

```html
<sv-table>
  <template #header>
    <sv-th sort>Name</sv-th>
    <sv-th sort>Email</sv-th>
  </template>
  <template #body>
    <sv-tr v-for="row in data" :key="row.id">
      <sv-td>{{ row.name }}</sv-td>
      <sv-td>{{ row.email }}</sv-td>
    </sv-tr>
  </template>
</sv-table>
```

Supports striped rows, single/multiple selection, search, sort, expand, and pagination.

### Card

```html
<sv-card>
  <template #title>Card title</template>
  <template #text>Card body content</template>
  <template #interactions>
    <sv-button flat icon><i class="bx bx-heart"></i></sv-button>
  </template>
</sv-card>
```

### Navbar

```html
<sv-navbar>
  <template #left>
    <img src="/logo.svg" alt="Logo" />
  </template>
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

---

## 📐 Layout Grid

`SvRow` and `SvCol` are globally registered alongside all other components.

```html
<sv-row justify="center">
  <sv-col w="4">33.3%</sv-col>
  <sv-col w="4">33.3%</sv-col>
  <sv-col w="4">33.3%</sv-col>
</sv-row>
```

`SvCol` props: `w` (1-12), `offset`, `order`, `lg`, `sm`, `xs`.

---

## ⚡ Global Helper — \$sv

After `app.use(SaxVue)` every component instance has access to `this.$sv`:

```ts
// Loading overlay
const handle = this.$sv.loading({ text: 'Saving...' })
handle.close()

// Notification toast
this.$sv.notification({
  title: 'Saved',
  text: 'Your changes have been saved.',
  color: 'success',
})

// Theme
this.$sv.toggleTheme()   // toggle light <-> dark
this.$sv.setTheme('dark') // explicit

// Runtime color change
this.$sv.setColor('primary', '#6C63FF')

// Table helpers
const page  = this.$sv.getPage(data, 1, 10)
const total = this.$sv.getLength(data, 10)
const hits  = this.$sv.getSearch(data, 'alice')
const sorted = this.$sv.sortData(data, 'name', 'asc')
this.$sv.checkAll(data)
```

---

## 🎨 Color Props

All components accept these color props via the shared `svColorProps` mixin:

| Prop      | Type    | Description                                                        |
| --------- | ------- | ------------------------------------------------------------------ |
| `color`   | String  | Any CSS color — hex, rgb, or theme name (`primary`, `success`, …)  |
| `primary` | Boolean | Shorthand for `color="primary"`                                    |
| `success` | Boolean | Shorthand for `color="success"`                                    |
| `danger`  | Boolean | Shorthand for `color="danger"`                                     |
| `warn`    | Boolean | Shorthand for `color="warn"`                                       |
| `dark`    | Boolean | Shorthand for `color="dark"`                                       |
| `active`  | Boolean | Active state styling                                               |

---

## 🌙 Dark Mode

```ts
this.$sv.toggleTheme()     // toggle light <-> dark
this.$sv.setTheme('dark')  // explicit set
this.$sv.setTheme('light')
```

Override theme colors via CSS custom properties:

```css
:root {
  --sv-primary: 91, 60, 196;
  --sv-success: 23, 201, 100;
  --sv-danger: 242, 19, 93;
  --sv-warn: 254, 130, 0;
  --sv-dark: 36, 33, 69;
}
```

---

## 🌳 Tree-Shaking (per-component imports)

Import only what you need instead of the full bundle:

```ts
import svButton from '@mrxploder/saxvue/dist/svButton/index.js'
import svInput  from '@mrxploder/saxvue/dist/svInput/index.js'
import '@mrxploder/saxvue/dist/base.css'

app.use(svButton)
app.use(svInput)
```

---

## 🛠 Development

```bash
npm install

# Documentation site (VitePress)
npm run docs:dev          # Dev server -> http://localhost:5173/saxvue/
npm run docs:build        # Static build
npm run docs:preview      # Preview static build

# Component development (Storybook)
npm run storybook:dev     # Storybook dev server -> http://localhost:6006
npm run storybook:build   # Static storybook build

# Testing
npm test                  # Jest unit tests
npm run test:coverage     # Jest with coverage report
npm run test:storybook    # Visual regression tests

# Build and quality
npm run build             # Production build -> dist/
npm run lint              # ESLint
npm run lint:fix          # ESLint auto-fix
npm run verify:treeshake  # Verify per-component bundle sizes
npm run test:types        # Type-check declarations
```

---

## 📁 Project Structure

```
src/
  components/        15 components (defineComponent + h() render functions)
  functions/         $sv global functions (loading, notification, table helpers)
  icons/             Render-function icon components
  layout/            Grid system (SvRow, SvCol)
  mixins/            Shared color props and useSvComponent composable
  styles/            SCSS theme (_colors, _dark, _mixins, _vars)
  util/              Color utilities, ripple effect
docs/                VitePress documentation site
  docs/components/   17 component doc pages with live demos
  docs/guide/        Getting Started, Configuration, Nuxt
  docs/theme/        Color system documentation
build/               Webpack build configs (UMD, per-component, styles)
test/                Unit tests
types/               TypeScript declarations
```

---

## 📄 License

MIT © [MrXploder](https://github.com/MrXploder)
