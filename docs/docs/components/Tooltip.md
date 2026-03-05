# Tooltip

<card>

## Default

The `<sv-tooltip>` component wraps any element to show a tooltip on hover.

<template #example>
<ClientOnly><TooltipDefault /></ClientOnly>
</template>

```html
<sv-tooltip>
  <sv-button flat>Hover me</sv-button>
  <template #tooltip>This is a tooltip</template>
</sv-tooltip>
```

</card>

<card>

## Position

Change the tooltip position.

<template #example>
<ClientOnly><TooltipPosition /></ClientOnly>
</template>

```html
<sv-tooltip bottom>
  <sv-button flat>Bottom</sv-button>
  <template #tooltip>Bottom tooltip</template>
</sv-tooltip>

<sv-tooltip left>
  <sv-button flat>Left</sv-button>
  <template #tooltip>Left tooltip</template>
</sv-tooltip>

<sv-tooltip right>
  <sv-button flat>Right</sv-button>
  <template #tooltip>Right tooltip</template>
</sv-tooltip>
```

</card>

<card>

## Color

Change the tooltip color.

<template #example>
<ClientOnly><TooltipColor /></ClientOnly>
</template>

```html
<sv-tooltip color="primary">
  <sv-button flat>Primary</sv-button>
  <template #tooltip>Primary tooltip</template>
</sv-tooltip>

<sv-tooltip color="success">
  <sv-button flat>Success</sv-button>
  <template #tooltip>Success tooltip</template>
</sv-tooltip>
```

</card>

<card>

## Border

Add a border style.

<template #example>
<ClientOnly><TooltipBorder /></ClientOnly>
</template>

```html
<sv-tooltip border>
  <sv-button flat>Border</sv-button>
  <template #tooltip>Border tooltip</template>
</sv-tooltip>
```

</card>

<card>

## Shadow

Add a shadow.

<template #example>
<ClientOnly><TooltipShadow /></ClientOnly>
</template>

```html
<sv-tooltip shadow>
  <sv-button flat>Shadow</sv-button>
  <template #tooltip>Shadow tooltip</template>
</sv-tooltip>
```

</card>

<card>

## Not Arrow

Remove the tooltip arrow.

<template #example>
<ClientOnly><TooltipNotArrow /></ClientOnly>
</template>

```html
<sv-tooltip not-arrow>
  <sv-button flat>No Arrow</sv-button>
  <template #tooltip>No arrow tooltip</template>
</sv-tooltip>
```

</card>

<card>

## Square

Make the tooltip square-cornered.

<template #example>
<ClientOnly><TooltipSquare /></ClientOnly>
</template>

```html
<sv-tooltip square>
  <sv-button flat>Square</sv-button>
  <template #tooltip>Square tooltip</template>
</sv-tooltip>
```

</card>

<card>

## Circle

Make the tooltip fully rounded.

<template #example>
<ClientOnly><TooltipCircle /></ClientOnly>
</template>

```html
<sv-tooltip circle>
  <sv-button flat>Circle</sv-button>
  <template #tooltip>Circle tooltip</template>
</sv-tooltip>
```

</card>

<card>

## Not Hover

Disable hover trigger (control programmatically).

<template #example>
<ClientOnly><TooltipNotHover /></ClientOnly>
</template>

```html
<sv-tooltip not-hover v-model="show">
  <sv-button flat @click="show = !show">Click me</sv-button>
  <template #tooltip>Programmatic tooltip</template>
</sv-tooltip>
```

</card>

<card>

## Loading

Add loading state.

<template #example>
<ClientOnly><TooltipLoading /></ClientOnly>
</template>

```html
<sv-tooltip loading>
  <sv-button flat>Loading</sv-button>
  <template #tooltip>Loading tooltip</template>
</sv-tooltip>
```

</card>

## API

| Property    | Type      | Description           | Default |
| ----------- | --------- | --------------------- | ------- |
| `v-model`   | `Boolean` | Show/hide tooltip     | —       |
| `color`     | `String`  | Tooltip color         | —       |
| `bottom`    | `Boolean` | Position bottom       | `false` |
| `left`      | `Boolean` | Position left         | `false` |
| `right`     | `Boolean` | Position right        | `false` |
| `border`    | `Boolean` | Border style          | `false` |
| `shadow`    | `Boolean` | Shadow style          | `false` |
| `not-arrow` | `Boolean` | Hide arrow            | `false` |
| `square`    | `Boolean` | Square corners        | `false` |
| `circle`    | `Boolean` | Circle shape          | `false` |
| `not-hover` | `Boolean` | Disable hover trigger | `false` |
| `loading`   | `Boolean` | Loading state         | `false` |
| `delay`     | `Number`  | Show delay in ms      | —       |

### Slots

| Name       | Description     |
| ---------- | --------------- |
| `#default` | Trigger element |
| `#tooltip` | Tooltip content |
