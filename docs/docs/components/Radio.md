# Radio

<card>

## Default

The `<sv-radio>` component creates a styled radio button.

<template #example>
<ClientOnly><RadioDefault /></ClientOnly>
</template>

```vue
<template>
  <sv-radio v-model="picked" val="1">Option 1</sv-radio>
  <sv-radio v-model="picked" val="2">Option 2</sv-radio>
  <sv-radio v-model="picked" val="3">Option 3</sv-radio>
</template>

<script setup>
import { ref } from 'vue';
const picked = ref('1');
</script>
```

</card>

<card>

## Color

Change the radio color.

<template #example>
<ClientOnly><RadioColor /></ClientOnly>
</template>

```html
<sv-radio color="primary" v-model="picked" val="1">Primary</sv-radio>
<sv-radio color="success" v-model="picked" val="2">Success</sv-radio>
<sv-radio color="danger" v-model="picked" val="3">Danger</sv-radio>
<sv-radio color="warn" v-model="picked" val="4">Warning</sv-radio>
<sv-radio color="dark" v-model="picked" val="5">Dark</sv-radio>
```

</card>

<card>

## Label

Add a label before the radio.

<template #example>
<ClientOnly><RadioLabel /></ClientOnly>
</template>

```html
<sv-radio label-before v-model="picked" val="1">Label Before</sv-radio>
```

</card>

<card>

## Loading

Add a loading state.

<template #example>
<ClientOnly><RadioLoading /></ClientOnly>
</template>

```html
<sv-radio loading v-model="picked" val="1">Loading</sv-radio>
```

</card>

## API

| Property       | Type                | Description            | Default   |
| -------------- | ------------------- | ---------------------- | --------- |
| `v-model`      | `String` / `Number` | Selected value         | —         |
| `val`          | `String` / `Number` | Radio value            | —         |
| `color`        | `String`            | Radio color            | `primary` |
| `loading`      | `Boolean`           | Loading state          | `false`   |
| `label-before` | `Boolean`           | Put label before radio | `false`   |
| `disabled`     | `Boolean`           | Disable radio          | `false`   |
