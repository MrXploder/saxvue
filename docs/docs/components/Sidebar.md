# Sidebar

<card>

## Default

The `<sv-sidebar>` component creates a navigation sidebar.

<template #example>
<ClientOnly><SidebarDefault /></ClientOnly>
</template>

```vue
<template>
  <sv-sidebar v-model="active" :open.sync="open">
    <template #logo>
      <img src="/logo.svg" alt="Logo" />
    </template>
    <sv-sidebar-item id="home">
      <template #icon>
        <i class="bx bx-home"></i>
      </template>
      Home
    </sv-sidebar-item>
    <sv-sidebar-item id="users">
      <template #icon>
        <i class="bx bx-user"></i>
      </template>
      Users
    </sv-sidebar-item>
    <sv-sidebar-group>
      <template #header>
        <sv-sidebar-item arrow>
          <template #icon>
            <i class="bx bx-grid-alt"></i>
          </template>
          Components
        </sv-sidebar-item>
      </template>
      <sv-sidebar-item id="button">Button</sv-sidebar-item>
      <sv-sidebar-item id="input">Input</sv-sidebar-item>
    </sv-sidebar-group>
  </sv-sidebar>
</template>

<script setup>
import { ref } from 'vue';
const active = ref('home');
const open = ref(true);
</script>
```

</card>

<card>

## Color

Change the sidebar color.

<template #example>
<ClientOnly><SidebarColor /></ClientOnly>
</template>

```html
<sv-sidebar color="primary" v-model="active" :open.sync="open">
  <!-- sidebar items -->
</sv-sidebar>
```

</card>

<card>

## Reduce

Reduce the sidebar to icon-only mode.

<template #example>
<ClientOnly><SidebarReduce /></ClientOnly>
</template>

```html
<sv-sidebar reduce v-model="active" :open.sync="open">
  <!-- sidebar items -->
</sv-sidebar>
```

</card>

<card>

## Hover Expand

Auto-expand on hover when reduced.

<template #example>
<ClientOnly><SidebarReduceExpand /></ClientOnly>
</template>

```html
<sv-sidebar reduce hover-expand v-model="active" :open.sync="open">
  <!-- sidebar items -->
</sv-sidebar>
```

</card>

<card>

## Square

Make the sidebar square-cornered.

<template #example>
<ClientOnly><SidebarSquare /></ClientOnly>
</template>

```html
<sv-sidebar square v-model="active" :open.sync="open">
  <!-- sidebar items -->
</sv-sidebar>
```

</card>

<card>

## Not Shadow

Remove the sidebar shadow.

<template #example>
<ClientOnly><SidebarNotShadow /></ClientOnly>
</template>

```html
<sv-sidebar not-shadow v-model="active" :open.sync="open">
  <!-- sidebar items -->
</sv-sidebar>
```

</card>

<card>

## Right

Position the sidebar on the right side.

<template #example>
<ClientOnly><SidebarRight /></ClientOnly>
</template>

```html
<sv-sidebar right v-model="active" :open.sync="open">
  <!-- sidebar items -->
</sv-sidebar>
```

</card>

<card>

## Text White

Use white text (useful with colored backgrounds).

<template #example>
<ClientOnly><SidebarTextWhite /></ClientOnly>
</template>

```html
<sv-sidebar text-white color="primary" v-model="active" :open.sync="open">
  <!-- sidebar items -->
</sv-sidebar>
```

</card>

<card>

## Group

Use `sv-sidebar-group` to create collapsible groups of sidebar items.

<template #example>
<ClientOnly><SidebarGroup /></ClientOnly>
</template>

```html
<sv-sidebar v-model="active" open>
  <sv-sidebar-item id="home">
    <template #icon><i class="bx bx-home"></i></template>
    Home
  </sv-sidebar-item>
  <sv-sidebar-group>
    <template #header>
      <sv-sidebar-item arrow>
        <template #icon><i class="bx bx-group"></i></template>
        Social media
      </sv-sidebar-item>
    </template>
    <sv-sidebar-item id="instagram">Instagram</sv-sidebar-item>
    <sv-sidebar-item id="twitter">Twitter</sv-sidebar-item>
  </sv-sidebar-group>
</sv-sidebar>
```

</card>

<card>

## Open

Use `v-model:open` together with a navbar button to toggle the sidebar from outside.

<template #example>
<ClientOnly><SidebarOpen /></ClientOnly>
</template>

```html
<sv-navbar>
  <template #left>
    <sv-button @click="open = !open" flat icon>
      <i class="bx bx-menu"></i>
    </sv-button>
  </template>
</sv-navbar>
<sv-sidebar absolute v-model="active" v-model:open="open">
  <!-- sidebar items -->
</sv-sidebar>
```

</card>

## API

### sv-sidebar

| Property       | Type      | Description          | Default |
| -------------- | --------- | -------------------- | ------- |
| `v-model`      | `String`  | Active item id       | —       |
| `open`         | `Boolean` | Open state           | `true`  |
| `color`        | `String`  | Sidebar color        | —       |
| `reduce`       | `Boolean` | Icon-only mode       | `false` |
| `hover-expand` | `Boolean` | Expand on hover      | `false` |
| `square`       | `Boolean` | Square corners       | `false` |
| `not-shadow`   | `Boolean` | Remove shadow        | `false` |
| `right`        | `Boolean` | Right position       | `false` |
| `text-white`   | `Boolean` | White text           | `false` |
| `absolute`     | `Boolean` | Absolute positioning | `false` |
| `relative`     | `Boolean` | Relative positioning | `false` |

### sv-sidebar-item

| Property | Type      | Description             | Default |
| -------- | --------- | ----------------------- | ------- |
| `id`     | `String`  | Item identifier         | —       |
| `to`     | `String`  | Router link             | —       |
| `href`   | `String`  | External link           | —       |
| `arrow`  | `Boolean` | Show arrow (for groups) | `false` |

### sv-sidebar-group

Use this to group sidebar items under a collapsible header.

### Slots

| Name      | Description    |
| --------- | -------------- |
| `#logo`   | Sidebar logo   |
| `#header` | Sidebar header |
| `#footer` | Sidebar footer |
| `#icon`   | Item icon      |
