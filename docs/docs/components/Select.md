# Select

<card>

## Default

The `<sv-select>` component creates a styled dropdown selector.

<template #example>
<ClientOnly><SelectDefault /></ClientOnly>
</template>

```vue
<template>
  <sv-select v-model="value" placeholder="Select">
    <sv-option label="Option 1" value="1" />
    <sv-option label="Option 2" value="2" />
    <sv-option label="Option 3" value="3" />
  </sv-select>
</template>

<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
```

</card>

<card>

## Color

Change the select color.

<template #example>
<ClientOnly><SelectColor /></ClientOnly>
</template>

```html
<sv-select color="success" v-model="value" placeholder="Success">
  <sv-option label="Option 1" value="1" />
  <sv-option label="Option 2" value="2" />
</sv-select>
```

</card>

<card>

## Label

Add a label to the select.

<template #example>
<ClientOnly><SelectLabel /></ClientOnly>
</template>

```html
<sv-select label="Country" v-model="value" placeholder="Choose...">
  <sv-option label="Chile" value="cl" />
  <sv-option label="USA" value="us" />
  <sv-option label="UK" value="uk" />
</sv-select>
```

</card>

<card>

## Group

Group options using `<sv-option-group>`.

<template #example>
<ClientOnly><SelectGroup /></ClientOnly>
</template>

```html
<sv-select v-model="value" placeholder="Select">
  <sv-option-group title="Fruits">
    <sv-option label="Apple" value="apple" />
    <sv-option label="Banana" value="banana" />
  </sv-option-group>
  <sv-option-group title="Vegetables">
    <sv-option label="Carrot" value="carrot" />
    <sv-option label="Potato" value="potato" />
  </sv-option-group>
</sv-select>
```

</card>

<card>

## Multiple

Allow multiple selections.

<template #example>
<ClientOnly><SelectMultiple /></ClientOnly>
</template>

```html
<sv-select multiple v-model="values" placeholder="Select multiple">
  <sv-option label="Vue" value="vue" />
  <sv-option label="React" value="react" />
  <sv-option label="Angular" value="angular" />
</sv-select>
```

</card>

<card>

## Filter

Enable filtering/search within the select.

<template #example>
<ClientOnly><SelectFilter /></ClientOnly>
</template>

```html
<sv-select filter v-model="value" placeholder="Search...">
  <sv-option label="Option 1" value="1" />
  <sv-option label="Option 2" value="2" />
  <sv-option label="Option 3" value="3" />
</sv-select>
```

</card>

<card>

## Loading

Show a loading state.

<template #example>
<ClientOnly><SelectLoading /></ClientOnly>
</template>

```html
<sv-select loading v-model="value" placeholder="Loading..." />
```

</card>

<card>

## State

Show validation states.

<template #example>
<ClientOnly><SelectState /></ClientOnly>
</template>

```html
<sv-select state="success" v-model="val1" placeholder="Success" />
<sv-select state="danger" v-model="val2" placeholder="Danger" />
<sv-select state="warn" v-model="val3" placeholder="Warning" />
```

</card>

<card>

## Message

Use the `message-success`, `message-danger`, and `message-warn` slots to show validation messages below the select.

<template #example>
<ClientOnly><SelectMessage /></ClientOnly>
</template>

```html
<sv-select placeholder="Success" v-model="v1">
  <template #message-success>Option Valid</template>
  <sv-option label="SaxVue" value="1">SaxVue</sv-option>
</sv-select>
<sv-select placeholder="Danger" v-model="v2">
  <template #message-danger>Required</template>
  <sv-option label="Vue" value="2">Vue</sv-option>
</sv-select>
```

</card>

## API

### sv-select

| Property      | Type               | Description               | Default   |
| ------------- | ------------------ | ------------------------- | --------- |
| `v-model`     | `String` / `Array` | Selected value(s)         | —         |
| `color`       | `String`           | Select color              | `primary` |
| `label`       | `String`           | Select label              | —         |
| `placeholder` | `String`           | Placeholder text          | —         |
| `multiple`    | `Boolean`          | Allow multiple selections | `false`   |
| `filter`      | `Boolean`          | Enable search/filter      | `false`   |
| `loading`     | `Boolean`          | Loading state             | `false`   |
| `state`       | `String`           | Validation state          | —         |

### sv-option

| Property   | Type                | Description         | Default |
| ---------- | ------------------- | ------------------- | ------- |
| `label`    | `String`            | Option display text | —       |
| `value`    | `String` / `Number` | Option value        | —       |
| `disabled` | `Boolean`           | Disable option      | `false` |

### sv-option-group

| Property | Type     | Description | Default |
| -------- | -------- | ----------- | ------- |
| `title`  | `String` | Group title | —       |
