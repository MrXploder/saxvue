# SaxVue

A Vue 3 UI component library. All components are globally available after `app.use(SaxVue)` and use the `sv-*` element naming convention.

## Install

```bash
npm install @mrxploder/saxvue
# or
pnpm add @mrxploder/saxvue
# or
yarn add @mrxploder/saxvue
```

## Setup

Register the plugin in your app entry point:

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import SaxVue from '@mrxploder/saxvue';
import '@mrxploder/saxvue/dist/base.css';

const app = createApp(App);
app.use(SaxVue);
app.mount('#app');
```

After `app.use(SaxVue)` every `sv-*` component is available globally — no per-component import needed.

## Components

### Buttons

```vue
<sv-button color="primary">Primary</sv-button>
<sv-button color="danger" flat>Danger flat</sv-button>
<sv-button color="success" border>Success border</sv-button>
<sv-button loading>Loading state</sv-button>
```

### Input

```vue
<sv-input v-model="value" label="Name" placeholder="Enter your name" />
<sv-input v-model="value" label="Password" type="password" />
```

### Select

```vue
<sv-select v-model="selected" label="Fruit">
  <sv-option value="apple">Apple</sv-option>
  <sv-option value="banana">Banana</sv-option>
  <sv-option value="cherry">Cherry</sv-option>
</sv-select>
```

### Checkbox / Switch / Radio

```vue
<sv-checkbox v-model="checked" label="Accept terms" />
<sv-switch v-model="active" label="Enable notifications" />
<sv-radio v-model="picked" val="a" label="Option A" />
```

### Avatar

```vue
<sv-avatar>
  <img src="/avatar.png" alt="User" />
</sv-avatar>

<sv-avatar-group max="3">
  <sv-avatar v-for="u in users" :key="u.id">
    <img :src="u.avatar" :alt="u.name" />
  </sv-avatar>
</sv-avatar-group>
```

### Tooltip / Alert / Dialog

```vue
<sv-tooltip text="Helpful tip"><sv-button>Hover me</sv-button></sv-tooltip>

<sv-alert color="success">File saved successfully.</sv-alert>

<sv-dialog v-model="open" title="Confirm">Are you sure?</sv-dialog>
```

### Pagination

```vue
<sv-pagination v-model="page" :total-items="200" :items-per-page="10" />
```

### Table

```vue
<sv-table :data="rows" v-model:search="search">
  <template #header>
    <sv-th sort-key="name">Name</sv-th>
    <sv-th sort-key="email">Email</sv-th>
  </template>
  <template #tbody="{ data }">
    <sv-tr v-for="row in data" :key="row.id" :data="row">
      <sv-td>{{ row.name }}</sv-td>
      <sv-td>{{ row.email }}</sv-td>
    </sv-tr>
  </template>
</sv-table>
```

### Navbar

```vue
<sv-navbar>
  <template #left>
    <sv-navbar-group>
      <sv-navbar-item to="/">Home</sv-navbar-item>
      <sv-navbar-item to="/about">About</sv-navbar-item>
    </sv-navbar-group>
  </template>
</sv-navbar>
```

### Sidebar

```vue
<sv-sidebar v-model="sidebarOpen">
  <sv-sidebar-group>
    <sv-sidebar-item>Dashboard</sv-sidebar-item>
    <sv-sidebar-item>Settings</sv-sidebar-item>
  </sv-sidebar-group>
</sv-sidebar>
```

### Card

```vue
<sv-card>
  <template #title>Card title</template>
  <template #text>Card body content</template>
  <template #buttons>
    <sv-button flat>Cancel</sv-button>
    <sv-button color="primary">OK</sv-button>
  </template>
</sv-card>
```

## Layout Grid

`SvRow` and `SvCol` are globally registered alongside all other components.

```vue
<sv-row justify="space-between" align="stretch" style="gap: 12px">
  <sv-col w="4">Column 1</sv-col>
  <sv-col w="4">Column 2</sv-col>
  <sv-col w="4">Column 3</sv-col>
</sv-row>
```

`SvCol` props: `w` (1–12), `offset`, `order`, `lg`, `sm`, `xs`, `type`, `justify`.

## Global Helper – `$sv`

After `app.use(SaxVue)` every component instance has access to `this.$sv`:

```ts
// Loading overlay
const handle = this.$sv.loading({ text: 'Saving…' });
handle.close();

// Notification toast
this.$sv.notification({ title: 'Saved', text: 'Your changes have been saved.' });

// Theme
this.$sv.toggleTheme();
this.$sv.setTheme('dark');

// Set a named theme color
this.$sv.setColor('primary', '#6C63FF');

// Table helpers
const page = this.$sv.getPage(data, 1, 10);
const total = this.$sv.getLength(data, 10);
const hits = this.$sv.getSearch(data, 'alice');
```

## Color Props

All components accept these color props:

| Prop      | Description                     |
| --------- | ------------------------------- |
| `color`   | Any CSS color, hex, or var name |
| `primary` | Boolean shorthand for primary   |
| `success` | Boolean shorthand for success   |
| `danger`  | Boolean shorthand for danger    |
| `warn`    | Boolean shorthand for warn      |
| `dark`    | Boolean shorthand for dark      |

## Dark Mode

```ts
this.$sv.toggleTheme(); // toggle
this.$sv.setTheme('dark'); // explicit
this.$sv.setTheme('light');
```

## Tree-shaking (per-component imports)

```ts
import svButton from '@mrxploder/saxvue/dist/svButton/index.js';
import svInput from '@mrxploder/saxvue/dist/svInput/index.js';

app.use(svButton);
app.use(svInput);
```

## Development

```bash
npm install
npm run storybook:dev    # Storybook dev server → http://localhost:6006
npm test                 # Jest unit tests (384 tests, 18 suites)
npm run build            # Production build → dist/
npm run lint             # ESLint
```

## License

MIT © MrXploder
