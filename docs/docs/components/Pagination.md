# Pagination

<card>

## Default

The `<sv-pagination>` component creates a pagination control.

<template #example>
<ClientOnly><PaginationDefault /></ClientOnly>
</template>

```vue
<template>
  <sv-pagination v-model="page" :length="20" />
</template>

<script setup>
import { ref } from 'vue';
const page = ref(1);
</script>
```

</card>

<card>

## Color

Change the pagination color.

<template #example>
<ClientOnly><PaginationColor /></ClientOnly>
</template>

```html
<sv-pagination color="danger" v-model="page" :length="20" />
<sv-pagination color="success" v-model="page" :length="20" />
<sv-pagination color="#7d33ff" v-model="page" :length="20" />
```

</card>

<card>

## Disabled

Disable the pagination.

<template #example>
<ClientOnly><PaginationDisabled /></ClientOnly>
</template>

```html
<sv-pagination disabled v-model="page" :length="20" />
```

</card>

<card>

## Not Margin

Remove default margins.

<template #example>
<ClientOnly><PaginationNotMargin /></ClientOnly>
</template>

```html
<sv-pagination not-margin v-model="page" :length="20" />
```

</card>

<card>

## Only Arrows

Show only the arrow buttons.

<template #example>
<ClientOnly><PaginationArrows /></ClientOnly>
</template>

```html
<sv-pagination only-arrows v-model="page" :length="20" />
```

</card>

<card>

## Circle

Make the buttons circular.

<template #example>
<ClientOnly><PaginationShape /></ClientOnly>
</template>

```html
<sv-pagination circle v-model="page" :length="20" />
```

</card>

<card>

## Square

Make the buttons square.

<template #example>
<ClientOnly><PaginationSquare /></ClientOnly>
</template>

```html
<sv-pagination square v-model="page" :length="20" />
```

</card>

<card>

## Buttons Dotted

Show dots instead of numbers.

<template #example>
<ClientOnly><PaginationDottedNumber /></ClientOnly>
</template>

```html
<sv-pagination buttons-dotted v-model="page" :length="20" />
```

</card>

<card>

## Disabled Items

Disable specific page items.

<template #example>
<ClientOnly><PaginationDisabledItems /></ClientOnly>
</template>

```html
<sv-pagination :disabled-items="[2, 5, 8]" v-model="page" :length="20" />
```

</card>

<card>

## Loading Items

Show loading state on specific page items.

<template #example>
<ClientOnly><PaginationLoadingItems /></ClientOnly>
</template>

```html
<sv-pagination :loading-items="[3]" v-model="page" :length="20" />
```

</card>

<card>

## Slot

Customize pagination content using the `#default` slot to render a custom element in place of the active page button.

<template #example>
<ClientOnly><PaginationInfinite /></ClientOnly>
</template>

```html
<sv-pagination v-model="page" :length="20">
  <sv-button>{{ page }} / 20</sv-button>
</sv-pagination>
```

</card>

<card>

## Infinite

Use the `infinite` prop so that clicking the last arrow wraps back to page 1 (and vice-versa).

<template #example>
<ClientOnly><PaginationInfinite /></ClientOnly>
</template>

```html
<sv-pagination v-model="page" infinite :length="20" />
```

</card>

<card>

## Progress

Use the `progress` prop to display a progress bar below the pagination that reflects the current page position.

<template #example>
<ClientOnly><PaginationProgress /></ClientOnly>
</template>

```html
<sv-pagination v-model="page" :length="10" progress />
```

</card>

## API

| Property         | Type      | Description            | Default   |
| ---------------- | --------- | ---------------------- | --------- |
| `v-model`        | `Number`  | Current page           | —         |
| `length`         | `Number`  | Total pages            | —         |
| `color`          | `String`  | Pagination color       | `primary` |
| `disabled`       | `Boolean` | Disable all            | `false`   |
| `not-margin`     | `Boolean` | Remove margins         | `false`   |
| `only-arrows`    | `Boolean` | Show only arrows       | `false`   |
| `circle`         | `Boolean` | Circle buttons         | `false`   |
| `square`         | `Boolean` | Square buttons         | `false`   |
| `buttons-dotted` | `Boolean` | Dotted buttons         | `false`   |
| `disabled-items` | `Array`   | Disabled page numbers  | `[]`      |
| `loading-items`  | `Array`   | Loading page numbers   | `[]`      |
| `not-arrows`     | `Boolean` | Hide arrows            | `false`   |
| `progress`       | `Boolean` | Show progress bar      | `false`   |
| `dotted-number`  | `Number`  | Number of dotted items | `5`       |
| `infinite`       | `Boolean` | Infinite loop          | `false`   |
