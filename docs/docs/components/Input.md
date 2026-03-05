# Input

<card>

## Default

The `<sv-input>` component creates a styled input field.

<template #example>
<ClientOnly><InputDefault /></ClientOnly>
</template>

```vue
<template>
  <sv-input v-model="value" placeholder="Name" />
</template>

<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

</card>

<card>

## Label

Add a label with the `label` property.

<template #example>
<ClientOnly><InputLabel /></ClientOnly>
</template>

```html
<sv-input v-model="value" label="Name" placeholder="Enter your name" />
```

</card>

<card>

## Label Placeholder

The `label-placeholder` property combines label and placeholder into one.

<template #example>
<ClientOnly><InputLabelPlaceholder /></ClientOnly>
</template>

```html
<sv-input v-model="value" label-placeholder="Email" />
```

</card>

<card>

## Color

Change the input color with the `color` property.

<template #example>
<ClientOnly><InputColor /></ClientOnly>
</template>

```html
<sv-input color="success" v-model="value" placeholder="Success" />
<sv-input color="danger" v-model="value" placeholder="Danger" />
<sv-input color="#7d33ff" v-model="value" placeholder="Custom" />
```

</card>

<card>

## Icon

Add icons with the `#icon` slot.

<template #example>
<ClientOnly><InputIcon /></ClientOnly>
</template>

```html
<sv-input v-model="value" placeholder="Search">
  <template #icon>
    <i class="bx bx-search"></i>
  </template>
</sv-input>
```

</card>

<card>

## State

Use `state` to show validation states.

<template #example>
<ClientOnly><InputState /></ClientOnly>
</template>

```html
<sv-input state="success" v-model="value" placeholder="Success" />
<sv-input state="danger" v-model="value" placeholder="Danger" />
<sv-input state="warn" v-model="value" placeholder="Warning" />
```

</card>

<card>

## Progress

Show a password strength progress bar.

<template #example>
<ClientOnly><InputProgress /></ClientOnly>
</template>

```html
<sv-input type="password" :progress="70" v-model="value" placeholder="Password" />
```

</card>

<card>

## Loading

Add a loading state.

<template #example>
<ClientOnly><InputLoading /></ClientOnly>
</template>

```html
<sv-input loading v-model="value" placeholder="Loading..." />
```

</card>

<card>

## Border

Change to a border-only style.

<template #example>
<ClientOnly><InputBorder /></ClientOnly>
</template>

```html
<sv-input border v-model="value" placeholder="Border Input" />
```

</card>

<card>

## Shadow

Add a shadow to the input.

<template #example>
<ClientOnly><InputShadow /></ClientOnly>
</template>

```html
<sv-input shadow v-model="value" placeholder="Shadow Input" />
```

</card>

## API

| Property            | Type      | Description                                    | Default   |
| ------------------- | --------- | ---------------------------------------------- | --------- |
| `v-model`           | `String`  | Input value                                    | —         |
| `color`             | `String`  | Input color                                    | `primary` |
| `label`             | `String`  | Input label                                    | —         |
| `label-placeholder` | `String`  | Floating label/placeholder                     | —         |
| `placeholder`       | `String`  | Placeholder text                               | —         |
| `state`             | `String`  | Validation state (`success`, `danger`, `warn`) | —         |
| `progress`          | `Number`  | Progress bar value (0-100)                     | —         |
| `loading`           | `Boolean` | Loading state                                  | `false`   |
| `border`            | `Boolean` | Border-only style                              | `false`   |
| `shadow`            | `Boolean` | Shadow style                                   | `false`   |
| `type`              | `String`  | HTML input type                                | `text`    |

### Slots

| Name       | Description         |
| ---------- | ------------------- |
| `#icon`    | Input icon          |
| `#message` | Message below input |
