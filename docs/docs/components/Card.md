# Card

<card>

## Default

The `<sv-card>` component creates a styled card container.

<template #example>
<ClientOnly><CardDefault /></ClientOnly>
</template>

```html
<sv-card>
  <template #title>
    <h3>Card Title</h3>
  </template>
  <template #text>
    <p>Card content goes here. You can put anything inside a card.</p>
  </template>
</sv-card>
```

</card>

<card>

## Color

Change the card color.

<template #example>
<ClientOnly><CardColor /></ClientOnly>
</template>

```html
<sv-card color="primary">
  <template #title>
    <h3>Primary Card</h3>
  </template>
  <template #text>
    <p>This card has a primary color accent.</p>
  </template>
</sv-card>
```

</card>

<card>

## Type

Change the card type.

<template #example>
<ClientOnly><CardTypes /></ClientOnly>
</template>

```html
<sv-card type="1">
  <template #title><h3>Type 1</h3></template>
  <template #text><p>Card type 1</p></template>
</sv-card>

<sv-card type="2">
  <template #title><h3>Type 2</h3></template>
  <template #text><p>Card type 2</p></template>
</sv-card>

<sv-card type="3">
  <template #title><h3>Type 3</h3></template>
  <template #text><p>Card type 3</p></template>
</sv-card>

<sv-card type="4">
  <template #title><h3>Type 4</h3></template>
  <template #text><p>Card type 4</p></template>
</sv-card>

<sv-card type="5">
  <template #title><h3>Type 5</h3></template>
  <template #text><p>Card type 5</p></template>
</sv-card>
```

</card>

<card>

## Card Group

Group cards together with `<sv-card-group>`.

<template #example>
<ClientOnly><CardGroup /></ClientOnly>
</template>

```html
<sv-card-group>
  <sv-card>
    <template #title><h3>Card 1</h3></template>
    <template #text><p>First card</p></template>
  </sv-card>
  <sv-card>
    <template #title><h3>Card 2</h3></template>
    <template #text><p>Second card</p></template>
  </sv-card>
  <sv-card>
    <template #title><h3>Card 3</h3></template>
    <template #text><p>Third card</p></template>
  </sv-card>
</sv-card-group>
```

</card>

<card>

## Interactions

Add hover effects with the `interactions` slot.

<template #example>
<ClientOnly><CardInteractions /></ClientOnly>
</template>

```html
<sv-card>
  <template #title><h3>Interactive Card</h3></template>
  <template #text><p>Hover to see interactions</p></template>
  <template #interactions>
    <sv-button icon flat>
      <i class="bx bx-heart"></i>
    </sv-button>
    <sv-button icon flat>
      <i class="bx bx-chat"></i>
    </sv-button>
    <sv-button icon flat>
      <i class="bx bx-share-alt"></i>
    </sv-button>
  </template>
</sv-card>
```

</card>

## API

### sv-card

| Property | Type                | Description     | Default |
| -------- | ------------------- | --------------- | ------- |
| `color`  | `String`            | Card color      | —       |
| `type`   | `String` / `Number` | Card type (1-5) | `1`     |

### sv-card-group

Groups multiple cards in a horizontal layout.

### Slots

| Name            | Description               |
| --------------- | ------------------------- |
| `#title`        | Card title                |
| `#text`         | Card content              |
| `#buttons`      | Card action buttons       |
| `#interactions` | Hover interaction buttons |
| `#img`          | Card image                |
