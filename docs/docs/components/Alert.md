# Alert

<card>

## Default

The `<sv-alert>` component is used to display important messages to the user.

<template #example>
<ClientOnly><AlertDefault /></ClientOnly>
</template>

```html
<sv-alert>
  <template #title>SaxVue Alert</template>
  This is a default alert message with important information for the user.
</sv-alert>
```

</card>

<card>

## Color

Change the alert color with the `color` property.

<template #example>
<ClientOnly><AlertColor /></ClientOnly>
</template>

```html
<sv-alert color="primary">
  <template #title>Primary</template>
  Primary alert message.
</sv-alert>

<sv-alert color="success">
  <template #title>Success</template>
  Success alert message.
</sv-alert>

<sv-alert color="danger">
  <template #title>Danger</template>
  Danger alert message.
</sv-alert>

<sv-alert color="warn">
  <template #title>Warning</template>
  Warning alert message.
</sv-alert>

<sv-alert color="dark">
  <template #title>Dark</template>
  Dark alert message.
</sv-alert>
```

</card>

<card>

## Solid

Use the `solid` property for a solid-fill style.

<template #example>
<ClientOnly><AlertSolid /></ClientOnly>
</template>

```html
<sv-alert solid>
  <template #title>Solid Alert</template>
  This is a solid alert.
</sv-alert>
```

</card>

<card>

## Border

Use the `border` property for a left-border style.

<template #example>
<ClientOnly><AlertBorder /></ClientOnly>
</template>

```html
<sv-alert border>
  <template #title>Border Alert</template>
  This alert has a left border indicator.
</sv-alert>
```

</card>

<card>

## Shadow

Use the `shadow` property to add a shadow.

<template #example>
<ClientOnly><AlertShadow /></ClientOnly>
</template>

```html
<sv-alert shadow>
  <template #title>Shadow Alert</template>
  This alert has a shadow.
</sv-alert>
```

</card>

<card>

## Gradient

Use the `gradient` property for a gradient background.

<template #example>
<ClientOnly><AlertGradient /></ClientOnly>
</template>

```html
<sv-alert gradient>
  <template #title>Gradient Alert</template>
  This alert has a gradient background.
</sv-alert>
```

</card>

<card>

## Relief

Use the `relief` property for a 3D-relief style.

<template #example>
<ClientOnly><AlertRelief /></ClientOnly>
</template>

```html
<sv-alert relief>
  <template #title>Relief Alert</template>
  This alert has a relief style.
</sv-alert>
```

</card>

<card>

## Closable

Use the `closable` property with `v-model` to make the alert dismissible.

<template #example>
<ClientOnly><AlertClosable /></ClientOnly>
</template>

```vue
<template>
  <sv-button flat @click="active = !active">
    {{ active ? 'Close Alert' : 'Open Alert' }}
  </sv-button>

  <sv-alert closable v-model="active">
    <template #title>Closable Alert</template>
    This alert can be closed by the user.
  </sv-alert>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(true);
</script>
```

</card>

<card>

## Hidden Content

Use `hidden-content` to collapse the alert body.

<template #example>
<ClientOnly><AlertHiddenContent /></ClientOnly>
</template>

```html
<sv-alert :hidden-content="true">
  <template #title>Hidden Content</template>
  This content is initially hidden.
</sv-alert>
```

</card>

<card>

## Pagination

Use the `page` property along with `#page-{n}` slots to create paginated alert content.

<template #example>
<ClientOnly><AlertPagination /></ClientOnly>
</template>

```vue
<template>
  <sv-alert :page="page">
    <template #title>Paginated Alert</template>
    <template #page-1>Content of page 1</template>
    <template #page-2>Content of page 2</template>
    <template #page-3>Content of page 3</template>
  </sv-alert>
</template>

<script setup>
import { ref } from 'vue';
const page = ref(1);
</script>
```

</card>

<card>

## Footer

Add a footer using the `#footer` slot.

<template #example>
<ClientOnly><AlertFooter /></ClientOnly>
</template>

```html
<sv-alert>
  <template #title>Alert with Footer</template>
  Main content of the alert.
  <template #footer>
    <sv-button flat size="small">Accept</sv-button>
    <sv-button flat size="small" dark>Cancel</sv-button>
  </template>
</sv-alert>
```

</card>

## API

| Property         | Type      | Values                                         | Description                | Default   |
| ---------------- | --------- | ---------------------------------------------- | -------------------------- | --------- |
| `v-model`        | `Boolean` | `true` / `false`                               | Control alert visibility   | `true`    |
| `color`          | `String`  | primary, success, danger, warn, dark, RGB, HEX | Alert color                | `primary` |
| `solid`          | `Boolean` | `true` / `false`                               | Solid fill style           | `false`   |
| `border`         | `Boolean` | `true` / `false`                               | Left border style          | `false`   |
| `shadow`         | `Boolean` | `true` / `false`                               | Shadow style               | `false`   |
| `gradient`       | `Boolean` | `true` / `false`                               | Gradient style             | `false`   |
| `relief`         | `Boolean` | `true` / `false`                               | Relief style               | `false`   |
| `closable`       | `Boolean` | `true` / `false`                               | Show close button          | `false`   |
| `hidden-content` | `Boolean` | `true` / `false`                               | Hide alert body            | `false`   |
| `page`           | `Number`  | Any number                                     | Active page for pagination | —         |

### Slots

| Name        | Description                |
| ----------- | -------------------------- |
| `#title`    | Alert title                |
| `#default`  | Alert content              |
| `#footer`   | Alert footer               |
| `#page-{n}` | Paginated content per page |
