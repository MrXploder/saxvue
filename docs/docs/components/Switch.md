# Switch

<card>

## Default

The `<sv-switch>` component creates a styled toggle switch.

<template #example>
<ClientOnly><SwitchDefault /></ClientOnly>
</template>

```vue
<template>
  <sv-switch v-model="active" />
</template>

<script setup>
import { ref } from 'vue';
const active = ref(false);
</script>
```

</card>

<card>

## Color

Change the switch color.

<template #example>
<ClientOnly><SwitchColor /></ClientOnly>
</template>

```html
<sv-switch v-model="val1" />
<sv-switch color="success" v-model="val2" />
<sv-switch color="danger" v-model="val3" />
<sv-switch color="warn" v-model="val4" />
<sv-switch color="dark" v-model="val5" />
<sv-switch color="#7d33ff" v-model="val6" />
```

</card>

<card>

## Text

Add text inside the switch with the `#on` and `#off` slots.

<template #example>
<ClientOnly><SwitchText /></ClientOnly>
</template>

```html
<sv-switch v-model="active">
  <template #on>On</template>
  <template #off>Off</template>
</sv-switch>
```

</card>

<card>

## Icons

Add icons inside the switch.

<template #example>
<ClientOnly><SwitchIcons /></ClientOnly>
</template>

```html
<sv-switch v-model="active">
  <template #on><i class="bx bx-check"></i></template>
  <template #off><i class="bx bx-x"></i></template>
</sv-switch>
```

</card>

<card>

## Loading

Add a loading state.

<template #example>
<ClientOnly><SwitchLoading /></ClientOnly>
</template>

```html
<sv-switch loading v-model="active" />
```

</card>

<card>

## Square

Make the switch square shaped.

<template #example>
<ClientOnly><SwitchSquare /></ClientOnly>
</template>

```html
<sv-switch square v-model="active" />
```

</card>

<card>

## Indeterminate

Show an indeterminate state.

<template #example>
<ClientOnly><SwitchIndeterminate /></ClientOnly>
</template>

```html
<sv-switch indeterminate v-model="active" />
```

</card>

## API

| Property        | Type      | Description         | Default   |
| --------------- | --------- | ------------------- | --------- |
| `v-model`       | `Boolean` | Switch value        | —         |
| `color`         | `String`  | Switch color        | `primary` |
| `loading`       | `Boolean` | Loading state       | `false`   |
| `square`        | `Boolean` | Square shape        | `false`   |
| `indeterminate` | `Boolean` | Indeterminate state | `false`   |

### Slots

| Name      | Description                 |
| --------- | --------------------------- |
| `#on`     | Content shown when active   |
| `#off`    | Content shown when inactive |
| `#circle` | Custom circle content       |
