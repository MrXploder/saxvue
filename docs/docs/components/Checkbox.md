# Checkbox

<card>

## Default

The `<sv-checkbox>` component creates a styled checkbox.

<template #example>
<ClientOnly><CheckboxDefault /></ClientOnly>
</template>

```vue
<template>
  <sv-checkbox v-model="checked">Option 1</sv-checkbox>
</template>

<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>
```

</card>

<card>

## Color

Change the checkbox color.

<template #example>
<ClientOnly><CheckboxColor /></ClientOnly>
</template>

```html
<sv-checkbox color="primary" v-model="opt1">Primary</sv-checkbox>
<sv-checkbox color="success" v-model="opt2">Success</sv-checkbox>
<sv-checkbox color="danger" v-model="opt3">Danger</sv-checkbox>
<sv-checkbox color="warn" v-model="opt4">Warning</sv-checkbox>
<sv-checkbox color="dark" v-model="opt5">Dark</sv-checkbox>
```

</card>

<card>

## Boolean Value

<template #example>
<ClientOnly><CheckboxBoolean /></ClientOnly>
</template>

```vue
<template>
  <sv-checkbox v-model="active">Active: {{ active }}</sv-checkbox>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(true);
</script>
```

</card>

<card>

## Array Value

Use an array to collect multiple selected values.

<template #example>
<ClientOnly><CheckboxArray /></ClientOnly>
</template>

```vue
<template>
  <sv-checkbox v-model="selected" val="html">HTML</sv-checkbox>
  <sv-checkbox v-model="selected" val="css">CSS</sv-checkbox>
  <sv-checkbox v-model="selected" val="js">JavaScript</sv-checkbox>
  <p>Selected: {{ selected }}</p>
</template>

<script setup>
import { ref } from 'vue';
const selected = ref([]);
</script>
```

</card>

<card>

## Icon

Change the check icon using the `#icon` slot.

<template #example>
<ClientOnly><CheckboxIcon /></ClientOnly>
</template>

```html
<sv-checkbox v-model="opt1">
  <template #icon>
    <i class="bx bx-check"></i>
  </template>
  Custom Icon
</sv-checkbox>
```

</card>

<card>

## Label

Add a label on the right side.

<template #example>
<ClientOnly><CheckboxLabel /></ClientOnly>
</template>

```html
<sv-checkbox v-model="opt1" label-before>Label Before</sv-checkbox>
```

</card>

<card>

## Loading

Add a loading state.

<template #example>
<ClientOnly><CheckboxLoading /></ClientOnly>
</template>

```html
<sv-checkbox loading v-model="opt1">Loading</sv-checkbox>
```

</card>

<card>

## Line Through

Add a line-through effect on the text when checked.

<template #example>
<ClientOnly><CheckboxLineThrough /></ClientOnly>
</template>

```html
<sv-checkbox line-through v-model="opt1">Line Through</sv-checkbox>
```

</card>

<card>

## Indeterminate

Show an indeterminate state.

<template #example>
<ClientOnly><CheckboxIndeterminate /></ClientOnly>
</template>

```html
<sv-checkbox indeterminate v-model="opt1">Indeterminate</sv-checkbox>
```

</card>

## API

| Property        | Type                | Description                       | Default   |
| --------------- | ------------------- | --------------------------------- | --------- |
| `v-model`       | `Boolean` / `Array` | Checkbox value                    | —         |
| `val`           | `String`            | Value when using array model      | —         |
| `color`         | `String`            | Checkbox color                    | `primary` |
| `loading`       | `Boolean`           | Loading state                     | `false`   |
| `line-through`  | `Boolean`           | Line-through on text when checked | `false`   |
| `indeterminate` | `Boolean`           | Indeterminate state               | `false`   |
| `label-before`  | `Boolean`           | Put label before checkbox         | `false`   |

### Slots

| Name       | Description         |
| ---------- | ------------------- |
| `#default` | Checkbox label text |
| `#icon`    | Custom check icon   |
