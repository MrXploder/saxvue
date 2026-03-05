# Navbar

<card>

## Default

The `<sv-navbar>` component creates a navigation bar.

<template #example>
<ClientOnly><NavbarDefault /></ClientOnly>
</template>

```html
<sv-navbar>
  <template #left>
    <img src="/logo.svg" alt="Logo" />
  </template>
  <sv-navbar-item active>Home</sv-navbar-item>
  <sv-navbar-item>About</sv-navbar-item>
  <sv-navbar-item>Contact</sv-navbar-item>
  <template #right>
    <sv-button flat icon>
      <i class="bx bx-bell"></i>
    </sv-button>
  </template>
</sv-navbar>
```

</card>

<card>

## Color

Change the navbar color.

<template #example>
<ClientOnly><NavbarColor /></ClientOnly>
</template>

```html
<sv-navbar color="primary">
  <sv-navbar-item active>Home</sv-navbar-item>
  <sv-navbar-item>About</sv-navbar-item>
</sv-navbar>
```

</card>

<card>

## Square

Make the navbar square-cornered.

<template #example>
<ClientOnly><NavbarSquare /></ClientOnly>
</template>

```html
<sv-navbar square>
  <sv-navbar-item active>Home</sv-navbar-item>
  <sv-navbar-item>About</sv-navbar-item>
</sv-navbar>
```

</card>

<card>

## Not Line

Remove the active indicator line.

<template #example>
<ClientOnly><NavbarNotLine /></ClientOnly>
</template>

```html
<sv-navbar not-line>
  <sv-navbar-item active>Home</sv-navbar-item>
  <sv-navbar-item>About</sv-navbar-item>
</sv-navbar>
```

</card>

<card>

## Center

Center the navbar items.

<template #example>
<ClientOnly><NavbarCenter /></ClientOnly>
</template>

```html
<sv-navbar center>
  <sv-navbar-item active>Home</sv-navbar-item>
  <sv-navbar-item>About</sv-navbar-item>
</sv-navbar>
```

</card>

<card>

## Hide Scroll

Hide the navbar on scroll.

<template #example>
<ClientOnly><NavbarHideScroll /></ClientOnly>
</template>

```html
<sv-navbar hide-scroll>
  <sv-navbar-item active>Home</sv-navbar-item>
  <sv-navbar-item>About</sv-navbar-item>
</sv-navbar>
```

</card>

<card>

## Shadow

Add a shadow.

<template #example>
<ClientOnly><NavbarShadow /></ClientOnly>
</template>

```html
<sv-navbar shadow>
  <sv-navbar-item active>Home</sv-navbar-item>
  <sv-navbar-item>About</sv-navbar-item>
</sv-navbar>
```

</card>

## API

### sv-navbar

| Property         | Type                | Description        | Default |
| ---------------- | ------------------- | ------------------ | ------- |
| `v-model`        | `String` / `Number` | Active item        | —       |
| `color`          | `String`            | Navbar color       | —       |
| `square`         | `Boolean`           | Square corners     | `false` |
| `not-line`       | `Boolean`           | Remove active line | `false` |
| `center`         | `Boolean`           | Center items       | `false` |
| `hide-scroll`    | `Boolean`           | Hide on scroll     | `false` |
| `shadow`         | `Boolean`           | Shadow             | `false` |
| `padding-scroll` | `Boolean`           | Padding on scroll  | `false` |
| `text-white`     | `Boolean`           | White text         | `false` |
| `fixed`          | `Boolean`           | Fixed position     | `false` |

### sv-navbar-item

| Property | Type      | Description   | Default |
| -------- | --------- | ------------- | ------- |
| `active` | `Boolean` | Active state  | `false` |
| `to`     | `String`  | Router link   | —       |
| `href`   | `String`  | External link | —       |

### Slots

| Name       | Description        |
| ---------- | ------------------ |
| `#left`    | Left side content  |
| `#right`   | Right side content |
| `#default` | Navbar items       |
