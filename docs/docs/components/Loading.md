# Loading

<card>

## Default

The loading function `$sv.loading()` opens a loading overlay on the page or a specific element.

<template #example>
<ClientOnly><LoadingDefault /></ClientOnly>
</template>

```js
const loadingInstance = this.$sv.loading();

// Close after some time
setTimeout(() => {
  loadingInstance.close();
}, 3000);
```

</card>

<card>

## Type

Change the loading animation type with the `type` property.

<template #example>
<ClientOnly><LoadingType /></ClientOnly>
</template>

```js
this.$sv.loading({ type: 'default' });
this.$sv.loading({ type: 'waves' });
this.$sv.loading({ type: 'corners' });
this.$sv.loading({ type: 'border' });
this.$sv.loading({ type: 'points' });
this.$sv.loading({ type: 'square' });
this.$sv.loading({ type: 'gradient' });
this.$sv.loading({ type: 'rectangle' });
this.$sv.loading({ type: 'circles' });
this.$sv.loading({ type: 'square-rotate' });
this.$sv.loading({ type: 'scale' });
```

</card>

<card>

## Color

Change the loading color with the `color` property.

<template #example>
<ClientOnly><LoadingColor /></ClientOnly>
</template>

```js
this.$sv.loading({ color: 'danger' });
this.$sv.loading({ color: '#7d33ff' });
this.$sv.loading({ color: 'rgb(59,222,200)' });
```

</card>

<card>

## Background

Change the background color of the loading overlay.

<template #example>
<ClientOnly><LoadingBackground /></ClientOnly>
</template>

```js
this.$sv.loading({ background: 'rgba(0, 0, 0, 0.6)' });
```

</card>

<card>

## Text

Add text to the loading overlay.

<template #example>
<ClientOnly><LoadingText /></ClientOnly>
</template>

```js
this.$sv.loading({ text: 'Loading data...' });
```

</card>

<card>

## Target

Apply loading to a specific element using `target`.

<template #example>
<ClientOnly><LoadingTarget /></ClientOnly>
</template>

```js
this.$sv.loading({ target: this.$refs.myElement });
```

</card>

## API

| Property     | Type          | Description              | Default                 |
| ------------ | ------------- | ------------------------ | ----------------------- |
| `type`       | `String`      | Loading animation type   | `default`               |
| `color`      | `String`      | Loading color            | `primary`               |
| `background` | `String`      | Overlay background color | `rgba(255,255,255,0.9)` |
| `text`       | `String`      | Loading text             | —                       |
| `target`     | `HTMLElement` | Target element           | `document.body`         |
| `scale`      | `String`      | Scale of the animation   | `1`                     |
| `opacity`    | `String`      | Overlay opacity          | —                       |
