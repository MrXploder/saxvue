# Colors

<card>

## Default Colors

SaxVue has the main colors that are maintained throughout the application to facilitate change and effective operation.

The main colors can be changed and customized to the taste of each developer for a more personalized application.

Default colors:

- **primary** — `rgb(26, 92, 255)`
- **success** — `rgb(23, 201, 100)`
- **danger** — `rgb(242, 19, 93)`
- **warn** — `rgb(255, 130, 0)`
- **dark** — `rgb(36, 33, 69)`

</card>

<card>

## Customize Theme Colors

You can change the colors as you want and at any time. SaxVue uses native CSS variables which means you can access them and change them whenever you want.

SaxVue gives you several ways to change the main colors either by CSS or JavaScript.

</card>

<card>

## JavaScript

<template #example>
<ClientOnly><ColorsDefault /></ClientOnly>
</template>

```js
import { createApp } from 'vue';
import SaxVue from '@mrxploder/saxvue';

const app = createApp(App);
app.use(SaxVue, {
  colors: {
    primary: '#5b3cc4',
    success: 'rgb(23, 201, 100)',
    danger: 'rgb(242, 19, 93)',
    warning: 'rgb(255, 130, 0)',
    dark: 'rgb(36, 33, 69)',
  },
});
```

</card>

<card>

## CSS

You can change the SaxVue variables by means of CSS like any other CSS variable.

::: warning HEX Format Numbers Only
It is important that the colors are in HEX format and only the numerical value. For example: `rgb(255, 100, 50)` is equivalent to `255, 100, 50`.
:::

```css
:root {
  --sv-primary: 91, 60, 196;
  --sv-success: 23, 201, 100;
  --sv-danger: 242, 19, 93;
  --sv-warn: 254, 130, 0;
  --sv-dark: 36, 33, 69;
}
```

</card>

<card>

## SV Function

You can change the main colors at any point of your application but only on the client side with the existence of the `document` object with the function `$sv.setColor`:

```js
// Inside a Vue component
this.$sv.setColor('primary', '#00bcd4');
```

Or using the Composition API:

```js
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();
proxy.$sv.setColor('primary', '#00bcd4');
```

</card>
