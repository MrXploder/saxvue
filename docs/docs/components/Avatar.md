# Avatar

<card>

## Default

The `<sv-avatar>` component creates an avatar element to represent users or entities.

<template #example>
<ClientOnly><AvatarDefault /></ClientOnly>
</template>

```html
<sv-avatar>
  <template #text>SV</template>
</sv-avatar>
```

</card>

<card>

## Size

Change the avatar size with the `size` property.

<template #example>
<ClientOnly><AvatarSize /></ClientOnly>
</template>

```html
<sv-avatar size="20" />
<sv-avatar size="30" />
<sv-avatar />
<sv-avatar size="50" />
<sv-avatar size="60" />
```

</card>

<card>

## Color

Change the avatar color.

<template #example>
<ClientOnly><AvatarColor /></ClientOnly>
</template>

```html
<sv-avatar color="primary">
  <template #text>P</template>
</sv-avatar>
<sv-avatar color="success">
  <template #text>S</template>
</sv-avatar>
<sv-avatar color="danger">
  <template #text>D</template>
</sv-avatar>
```

</card>

<card>

## Badge

Add a badge to the avatar.

<template #example>
<ClientOnly><AvatarBadge /></ClientOnly>
</template>

```html
<sv-avatar badge>
  <template #text>SV</template>
</sv-avatar>

<sv-avatar badge badge-color="danger">
  <template #text>SV</template>
</sv-avatar>
```

</card>

<card>

## Circle

Make the avatar fully circular.

<template #example>
<ClientOnly><AvatarCircle /></ClientOnly>
</template>

```html
<sv-avatar circle>
  <template #text>SV</template>
</sv-avatar>
```

</card>

<card>

## Square

Make the avatar square.

<template #example>
<ClientOnly><AvatarSquare /></ClientOnly>
</template>

```html
<sv-avatar square>
  <template #text>SV</template>
</sv-avatar>
```

</card>

<card>

## History

Add a gradient border effect (like stories).

<template #example>
<ClientOnly><AvatarHistory /></ClientOnly>
</template>

```html
<sv-avatar history>
  <template #text>SV</template>
</sv-avatar>
```

</card>

<card>

## Icon

Use an icon as avatar content.

<template #example>
<ClientOnly><AvatarIcons /></ClientOnly>
</template>

```html
<sv-avatar>
  <i class="bx bx-user"></i>
</sv-avatar>
```

</card>

<card>

## Avatar Group

Group avatars together with `<sv-avatar-group>`.

<template #example>
<ClientOnly><AvatarGroup /></ClientOnly>
</template>

```html
<sv-avatar-group max="4">
  <sv-avatar>
    <template #text>A</template>
  </sv-avatar>
  <sv-avatar>
    <template #text>B</template>
  </sv-avatar>
  <sv-avatar>
    <template #text>C</template>
  </sv-avatar>
  <sv-avatar>
    <template #text>D</template>
  </sv-avatar>
  <sv-avatar>
    <template #text>E</template>
  </sv-avatar>
</sv-avatar-group>
```

</card>

<card>

## Loading

Add the `loading` prop to show a loading state on the avatar.

<template #example>
<ClientOnly><AvatarLoading /></ClientOnly>
</template>

```html
<sv-avatar loading><i class="bx bx-user"></i></sv-avatar>
<sv-avatar loading success><template #text>SV</template></sv-avatar>
```

</card>

<card>

## Icons

Avatars can contain any boxicon as their content.

<template #example>
<ClientOnly><AvatarIcons /></ClientOnly>
</template>

```html
<sv-avatar><i class="bx bx-user"></i></sv-avatar>
<sv-avatar><i class="bx bx-home-alt"></i></sv-avatar>
<sv-avatar><i class="bx bx-bell"></i></sv-avatar>
<sv-avatar><i class="bx bx-calendar"></i></sv-avatar>
```

</card>

## API

### sv-avatar

| Property      | Type                | Description       | Default   |
| ------------- | ------------------- | ----------------- | --------- |
| `color`       | `String`            | Avatar color      | `primary` |
| `size`        | `String` / `Number` | Avatar size in px | `40`      |
| `badge`       | `Boolean`           | Show badge        | `false`   |
| `badge-color` | `String`            | Badge color       | `primary` |
| `circle`      | `Boolean`           | Circle shape      | `false`   |
| `square`      | `Boolean`           | Square shape      | `false`   |
| `history`     | `Boolean`           | Gradient border   | `false`   |

### sv-avatar-group

| Property | Type      | Description         | Default |
| -------- | --------- | ------------------- | ------- |
| `max`    | `Number`  | Max visible avatars | —       |
| `float`  | `Boolean` | Floating style      | `false` |
