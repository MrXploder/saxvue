# Notification

<card>

## Default

The notification function `$sv.notification()` creates a floating notification.

<template #example>
<ClientOnly><NotificationDefault /></ClientOnly>
</template>

```js
this.$sv.notification({
  title: 'Default',
  text: 'This is a notification message',
});
```

</card>

<card>

## Color

Change the notification color.

<template #example>
<ClientOnly><NotificationColor /></ClientOnly>
</template>

```js
this.$sv.notification({
  color: 'primary',
  title: 'Primary',
  text: 'Primary notification',
});

this.$sv.notification({
  color: 'success',
  title: 'Success',
  text: 'Success notification',
});
```

</card>

<card>

## Position

Change the notification position with the `position` property.

<template #example>
<ClientOnly><NotificationPosition /></ClientOnly>
</template>

```js
this.$sv.notification({
  position: 'top-right',
  title: 'Top Right',
  text: 'Notification at top-right',
});

// Positions: top-right, top-left, bottom-right, bottom-left, top-center, bottom-center
```

</card>

<card>

## Icon

Add an icon to the notification.

<template #example>
<ClientOnly><NotificationIcons /></ClientOnly>
</template>

```js
this.$sv.notification({
  icon: '<i class="bx bxs-bell"></i>',
  title: 'With Icon',
  text: 'Notification with a custom icon',
});
```

</card>

<card>

## Duration

Control how long the notification stays visible (in milliseconds). Use `none` to make it permanent.

<template #example>
<ClientOnly><NotificationDuration /></ClientOnly>
</template>

```js
this.$sv.notification({
  duration: 5000,
  title: '5 Seconds',
  text: 'This will close after 5 seconds',
});

this.$sv.notification({
  duration: 'none',
  title: 'Permanent',
  text: 'This notification stays until manually closed',
});
```

</card>

<card>

## Square

Make the notification square-cornered.

<template #example>
<ClientOnly><NotificationSquare /></ClientOnly>
</template>

```js
this.$sv.notification({
  square: true,
  title: 'Square',
  text: 'Square notification',
});
```

</card>

<card>

## Border

Add a border-only style.

<template #example>
<ClientOnly><NotificationBorder /></ClientOnly>
</template>

```js
this.$sv.notification({
  border: true,
  title: 'Border',
  text: 'Border notification',
});
```

</card>

<card>

## Flat

Use a flat style.

<template #example>
<ClientOnly><NotificationFlat /></ClientOnly>
</template>

```js
this.$sv.notification({
  flat: true,
  title: 'Flat',
  text: 'Flat notification',
});
```

</card>

<card>

## Loading

Add a loading state to the notification.

<template #example>
<ClientOnly><NotificationLoading /></ClientOnly>
</template>

```js
this.$sv.notification({
  loading: true,
  title: 'Loading',
  text: 'Processing...',
});
```

</card>

<card>

## Progress

Show a progress bar.

<template #example>
<ClientOnly><NotificationProgress /></ClientOnly>
</template>

```js
this.$sv.notification({
  progress: 'auto',
  title: 'Progress',
  text: 'Notification with progress bar',
});
```

</card>

## API

| Property            | Type                | Description                | Default        |
| ------------------- | ------------------- | -------------------------- | -------------- |
| `title`             | `String`            | Notification title         | —              |
| `text`              | `String`            | Notification text          | —              |
| `color`             | `String`            | Notification color         | —              |
| `position`          | `String`            | Position on screen         | `bottom-right` |
| `icon`              | `String`            | HTML icon string           | —              |
| `duration`          | `Number` / `String` | Duration in ms or `'none'` | `4000`         |
| `square`            | `Boolean`           | Square corners             | `false`        |
| `border`            | `Boolean`           | Border-only style          | `false`        |
| `flat`              | `Boolean`           | Flat style                 | `false`        |
| `loading`           | `Boolean`           | Loading state              | `false`        |
| `progress`          | `String`            | Progress bar (`'auto'`)    | —              |
| `sticky`            | `Boolean`           | Sticky notification        | `false`        |
| `clickClose`        | `Boolean`           | Close on click             | `false`        |
| `classNotification` | `String`            | Custom CSS class           | —              |
