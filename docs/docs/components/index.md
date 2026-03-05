# Button

<card>

## Default

The `<sv-button>` component is used to create a button with SaxVue styles.

<template #example>
<ClientOnly><ButtonDefault /></ClientOnly>
</template>

```html
<sv-button>Default</sv-button>
<sv-button active>Active</sv-button>
<sv-button disabled>Disabled</sv-button>
```

</card>

<card>

## Color

Change the color of the component with the `color` property. The allowed values are SaxVue colors: `primary`, `success`, `danger`, `warning`, `dark`, or any HEX/RGB value.

<template #example>
<ClientOnly><ButtonColor /></ClientOnly>
</template>

```html
<sv-button color="primary">Primary</sv-button>
<sv-button color="success">Success</sv-button>
<sv-button color="danger">Danger</sv-button>
<sv-button color="warn">Warning</sv-button>
<sv-button color="dark">Dark</sv-button>
<sv-button color="#7d33ff">HEX</sv-button>
<sv-button color="rgb(59,222,200)">RGB</sv-button>
```

</card>

<card>

## Flat

The `flat` property changes the style of the button to a flat style.

<template #example>
<ClientOnly><ButtonFlat /></ClientOnly>
</template>

```html
<sv-button flat>Flat Primary</sv-button>
<sv-button flat color="success">Flat Success</sv-button>
<sv-button flat color="danger">Flat Danger</sv-button>
```

</card>

<card>

## Border

The `border` property changes the style of the button to only have a border.

<template #example>
<ClientOnly><ButtonBorder /></ClientOnly>
</template>

```html
<sv-button border>Border</sv-button>
```

</card>

<card>

## Gradient

The `gradient` property adds a gradient style to the button.

<template #example>
<ClientOnly><ButtonGradient /></ClientOnly>
</template>

```html
<sv-button gradient>Gradient</sv-button>
<sv-button gradient color="success">Gradient Success</sv-button>
```

</card>

<card>

## Relief

The `relief` property gives the button a relief-style (3D effect).

<template #example>
<ClientOnly><ButtonRelief /></ClientOnly>
</template>

```html
<sv-button relief>Relief</sv-button>
```

</card>

<card>

## Transparent

The `transparent` property changes the button to a transparent style.

<template #example>
<ClientOnly><ButtonTransparent /></ClientOnly>
</template>

```html
<sv-button transparent>Transparent</sv-button>
```

</card>

<card>

## Shadow

The `shadow` property adds a shadow to the button.

<template #example>
<ClientOnly><ButtonShadow /></ClientOnly>
</template>

```html
<sv-button shadow>Shadow</sv-button>
```

</card>

<card>

## Size

Change the size of the button with the `size` property. Available values: `xl`, `large`, `default`, `small`, `mini`.

<template #example>
<ClientOnly><ButtonSize /></ClientOnly>
</template>

```html
<sv-button size="xl">XL</sv-button>
<sv-button size="large">Large</sv-button>
<sv-button>Default</sv-button>
<sv-button size="small">Small</sv-button>
<sv-button size="mini">Mini</sv-button>
```

</card>

<card>

## Loading

Add a loading state to the button with the `loading` property.

<template #example>
<ClientOnly><ButtonLoading /></ClientOnly>
</template>

```html
<sv-button loading>Loading</sv-button>
```

</card>

<card>

## Upload

Add an upload animation with the `upload` property.

<template #example>
<ClientOnly><ButtonUpload /></ClientOnly>
</template>

```html
<sv-button upload> <i class="bx bxs-wallet"></i> Wallet </sv-button>
```

</card>

<card>

## Block

Use the `block` property to make the button span the full width of its container.

<template #example>
<ClientOnly><ButtonBlock /></ClientOnly>
</template>

```html
<sv-button block>Block Button</sv-button>
```

</card>

<card>

## Icon

Use the `icon` property when the button only contains an icon.

<template #example>
<ClientOnly><ButtonIcon /></ClientOnly>
</template>

```html
<sv-button icon>
  <i class="bx bx-home-alt"></i>
</sv-button>
<sv-button icon color="success">
  <i class="bx bx-bell"></i>
</sv-button>
```

</card>

<card>

## Icon + Text

You can combine icons with text inside the button.

<template #example>
<ClientOnly><ButtonIconText /></ClientOnly>
</template>

```html
<sv-button> <i class="bx bx-home-alt"></i> Home </sv-button>
<sv-button> Notifications <i class="bx bx-bell"></i> </sv-button>
```

</card>

<card>

## Square

Use the `square` property for square-cornered buttons.

<template #example>
<ClientOnly><ButtonSquare /></ClientOnly>
</template>

```html
<sv-button square>Square</sv-button> <sv-button square flat>Square Flat</sv-button>
```

</card>

<card>

## Circle

Use the `circle` property for fully rounded buttons.

<template #example>
<ClientOnly><ButtonCircle /></ClientOnly>
</template>

```html
<sv-button circle>Circle</sv-button> <sv-button circle flat>Circle Flat</sv-button>
```

</card>

<card>

## Floating

Use the `floating` property for a floating action button style.

<template #example>
<ClientOnly><ButtonFloating /></ClientOnly>
</template>

```html
<sv-button floating icon>
  <i class="bx bx-plus"></i>
</sv-button>
```

</card>

<card>

## Button Group

Group buttons together using the `<sv-button-group>` component.

<template #example>
<ClientOnly><ButtonGroup /></ClientOnly>
</template>

```html
<sv-button-group>
  <sv-button>One</sv-button>
  <sv-button>Two</sv-button>
  <sv-button>Three</sv-button>
</sv-button-group>
```

</card>

<card>

## To / Href

Add vue-router navigation with `to` or external links with `href`.

<template #example>
<ClientOnly><ButtonToHref /></ClientOnly>
</template>

```html
<sv-button to="/">Router Link</sv-button>
<sv-button href="https://github.com/MrXploder/saxvue" blank> External Link </sv-button>
```

</card>

## API

| Property      | Type      | Values                                         | Description                    | Default   |
| ------------- | --------- | ---------------------------------------------- | ------------------------------ | --------- |
| `color`       | `String`  | primary, success, danger, warn, dark, RGB, HEX | Change the color of the button | `primary` |
| `active`      | `Boolean` | `true` / `false`                               | Set the active state           | `false`   |
| `flat`        | `Boolean` | `true` / `false`                               | Flat style                     | `false`   |
| `border`      | `Boolean` | `true` / `false`                               | Border-only style              | `false`   |
| `gradient`    | `Boolean` | `true` / `false`                               | Gradient style                 | `false`   |
| `relief`      | `Boolean` | `true` / `false`                               | Relief (3D) style              | `false`   |
| `transparent` | `Boolean` | `true` / `false`                               | Transparent style              | `false`   |
| `shadow`      | `Boolean` | `true` / `false`                               | Shadow style                   | `false`   |
| `loading`     | `Boolean` | `true` / `false`                               | Loading state                  | `false`   |
| `upload`      | `Boolean` | `true` / `false`                               | Upload animation               | `false`   |
| `block`       | `Boolean` | `true` / `false`                               | Full-width button              | `false`   |
| `icon`        | `Boolean` | `true` / `false`                               | Icon-only button               | `false`   |
| `circle`      | `Boolean` | `true` / `false`                               | Fully rounded                  | `false`   |
| `square`      | `Boolean` | `true` / `false`                               | Square corners                 | `false`   |
| `floating`    | `Boolean` | `true` / `false`                               | Floating style                 | `false`   |
| `size`        | `String`  | `xl`, `large`, `default`, `small`, `mini`      | Button size                    | `default` |
| `to`          | `String`  | vue-router path                                | Router link                    | —         |
| `href`        | `String`  | URL                                            | External link                  | —         |
| `blank`       | `Boolean` | `true` / `false`                               | Open link in new tab           | `false`   |
