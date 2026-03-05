# Grid

<card>

## Default

In the grid system, we define the frame outside the information area according to the row and column, to ensure that each area can have a stable layout.

The following is a brief glimpse of how it works:

- Establish a set of columns in the horizontal space defined by row
- Your content items should be placed directly in the column, and only the column should be placed directly in the row
- The column grid system has a value of **1** to **12** to represent its range intervals. For example, `w="4"` can create three columns of equal width (**33.3%**)
- If the sum of the column segments in a row is greater than **12**, then the overflowing column will start a new line layout

With the `w` directive define the column width. Its value is **1-12**, an example of sizes would be: `12=100%`, `6=50%`, `4=33%`.

<template #example>
<ClientOnly><GridDefault /></ClientOnly>
</template>

```html
<sv-row>
  <sv-col w="12">100%</sv-col>
</sv-row>

<sv-row>
  <sv-col w="6">50%</sv-col>
  <sv-col w="6">50%</sv-col>
</sv-row>

<sv-row>
  <sv-col w="4">33.3%</sv-col>
  <sv-col w="4">33.3%</sv-col>
  <sv-col w="4">33.3%</sv-col>
</sv-row>
```

</card>

<card>

## Offset

To give a distance from the left we have the offset property that with the same measurements **1-12** we add the specific space.

<template #example>
<ClientOnly><GridOffset /></ClientOnly>
</template>

```html
<sv-row>
  <sv-col offset="3" w="6">offset - 3</sv-col>
</sv-row>

<sv-row>
  <sv-col offset="2" w="4">offset - 2</sv-col>
  <sv-col offset="2" w="4">offset - 2</sv-col>
</sv-row>
```

</card>

<card>

## Flex Justify

Change the alignment of all columns using the `justify` property. Allowed values:

- `flex-start`
- `center`
- `flex-end`
- `space-around`
- `space-between`

<template #example>
<ClientOnly><GridFlexJustify /></ClientOnly>
</template>

```html
<sv-row justify="center">
  <sv-col w="2">col - 2</sv-col>
  <sv-col w="2">col - 2</sv-col>
  <sv-col w="2">col - 2</sv-col>
</sv-row>
```

</card>

<card>

## Flex Align

Change the alignment of all columns on the vertical axis using the `align` property. Allowed values:

- `flex-start`
- `center`
- `flex-end`

<template #example>
<ClientOnly><GridFlexAlign /></ClientOnly>
</template>

```html
<sv-row align="center">
  <sv-col w="4">col - 4</sv-col>
  <sv-col w="4">col - 4</sv-col>
  <sv-col w="4">col - 4</sv-col>
</sv-row>
```

</card>
