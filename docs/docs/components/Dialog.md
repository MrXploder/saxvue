# Dialog

<card>

## Default

The `<sv-dialog>` component creates a modal dialog.

<template #example>
<ClientOnly><DialogDefault /></ClientOnly>
</template>

```vue
<template>
  <sv-button @click="active = true">Open Dialog</sv-button>

  <sv-dialog v-model="active">
    <template #header>
      <h4>Welcome to SaxVue</h4>
    </template>
    <p>This is a dialog content area.</p>
    <template #footer>
      <sv-button @click="active = false">Accept</sv-button>
    </template>
  </sv-dialog>
</template>

<script setup>
import { ref } from 'vue';
const active = ref(false);
</script>
```

</card>

<card>

## Color

Change the dialog header color.

<template #example>
<ClientOnly><DialogColor /></ClientOnly>
</template>

```html
<sv-dialog color="danger" v-model="active">
  <template #header>
    <h4>Danger Dialog</h4>
  </template>
  <p>This dialog has a danger color theme.</p>
</sv-dialog>
```

</card>

<card>

## Not Close

Prevent closing when clicking outside.

<template #example>
<ClientOnly><DialogNotClose /></ClientOnly>
</template>

```html
<sv-dialog not-close v-model="active">
  <template #header>
    <h4>Persistent Dialog</h4>
  </template>
  <p>This dialog can only be closed via the footer button.</p>
  <template #footer>
    <sv-button @click="active = false">Close</sv-button>
  </template>
</sv-dialog>
```

</card>

<card>

## Scroll

Enable scrolling for long content.

<template #example>
<ClientOnly><DialogScroll /></ClientOnly>
</template>

```html
<sv-dialog scroll v-model="active">
  <template #header>
    <h4>Scrollable Dialog</h4>
  </template>
  <p>Long content that requires scrolling...</p>
</sv-dialog>
```

</card>

<card>

## Loading

Add loading state to the dialog.

<template #example>
<ClientOnly><DialogLoading /></ClientOnly>
</template>

```html
<sv-dialog loading v-model="active">
  <template #header>
    <h4>Loading Dialog</h4>
  </template>
  <p>Processing your request...</p>
</sv-dialog>
```

</card>

<card>

## Full Screen

Make the dialog full screen.

<template #example>
<ClientOnly><DialogFullScreen /></ClientOnly>
</template>

```html
<sv-dialog full-screen v-model="active">
  <template #header>
    <h4>Full Screen Dialog</h4>
  </template>
  <p>This dialog takes up the full screen.</p>
</sv-dialog>
```

</card>

<card>

## Blur

Add a blur effect to the background.

<template #example>
<ClientOnly><DialogBlur /></ClientOnly>
</template>

```html
<sv-dialog blur v-model="active">
  <template #header>
    <h4>Blur Background</h4>
  </template>
  <p>The background is blurred.</p>
</sv-dialog>
```

</card>

<card>

## Square

Make the dialog square-cornered.

<template #example>
<ClientOnly><DialogSquare /></ClientOnly>
</template>

```html
<sv-dialog square v-model="active">
  <template #header>
    <h4>Square Dialog</h4>
  </template>
  <p>This dialog has square corners.</p>
</sv-dialog>
```

</card>

<card>

## Not Padding

Remove the default content padding.

<template #example>
<ClientOnly><DialogNotPadding /></ClientOnly>
</template>

```html
<sv-dialog not-padding v-model="active">
  <template #header>
    <h4>No Padding</h4>
  </template>
  <p>Content without default padding.</p>
</sv-dialog>
```

</card>

<card>

## Overflow Hidden

Prevent body scroll when dialog is open.

<template #example>
<ClientOnly><DialogOverflowHidden /></ClientOnly>
</template>

```html
<sv-dialog overflow-hidden v-model="active">
  <template #header>
    <h4>Overflow Hidden</h4>
  </template>
  <p>Body scroll is prevented when this dialog is open.</p>
</sv-dialog>
```

</card>

<card>

## Type

Use the `type` prop to create alert, confirm, or prompt dialogs with appropriate button layouts.

<template #example>
<ClientOnly><DialogType /></ClientOnly>
</template>

```html
<sv-button @click="type = 'alert'; active = true">Alert</sv-button>
<sv-button @click="type = 'confirm'; active = true">Confirm</sv-button>
<sv-button @click="type = 'prompt'; active = true">Prompt</sv-button>
<sv-dialog :type="type" v-model="active">
  <template #header><h4>Dialog {{ type }}</h4></template>
  <p>This is a dialog of type: {{ type }}</p>
</sv-dialog>
```

</card>

<card>

## Nested Dialogs

Dialogs can be nested inside each other.

<template #example>
<ClientOnly><DialogNested /></ClientOnly>
</template>

```html
<sv-dialog v-model="active">
  <template #header><h4>First Dialog</h4></template>
  <sv-button @click="inner = true">Open Inner Dialog</sv-button>
  <sv-dialog v-model="inner">
    <template #header><h4>Inner Dialog</h4></template>
    <p>This is a nested dialog.</p>
  </sv-dialog>
</sv-dialog>
```

</card>

<card>

## Prevent Close

Use `prevent-close` to disable closing the dialog by clicking the overlay. The user must use the close button.

<template #example>
<ClientOnly><DialogPreventClose /></ClientOnly>
</template>

```html
<sv-dialog prevent-close v-model="active">
  <template #header><h4>Prevent close on overlay</h4></template>
  <p>Clicking the overlay will not close this dialog. Use the X button.</p>
</sv-dialog>
```

</card>

<card>

## Animation

Use the `animation` prop to change how the dialog enters and exits. There are **9 built-in animations**. The default is `scale` which preserves the original rebound behavior.

<template #example>
<ClientOnly><DialogAnimation /></ClientOnly>
</template>

```vue
<template>
  <sv-button v-for="anim in animations" :key="anim" @click="openDialog(anim)">
    {{ anim }}
  </sv-button>

  <sv-dialog v-model="active" :animation="currentAnimation">
    <template #header>
      <h4>
        Animation: <b>{{ currentAnimation }}</b>
      </h4>
    </template>
    <p>
      This dialog uses the <code>{{ currentAnimation }}</code> animation.
    </p>
    <template #footer>
      <sv-button @click="active = false">Close</sv-button>
    </template>
  </sv-dialog>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(false);
const currentAnimation = ref('scale');
const animations = [
  'scale',
  'fade',
  'slide-up',
  'slide-down',
  'slide-left',
  'slide-right',
  'zoom',
  'door',
  'flip',
];

function openDialog(anim) {
  currentAnimation.value = anim;
  active.value = true;
}
</script>
```

### Animation values

| Value         | Description                               |
| ------------- | ----------------------------------------- |
| `scale`       | Rebound scale bounce _(default)_          |
| `fade`        | Simple opacity fade                       |
| `slide-up`    | Slides in from below                      |
| `slide-down`  | Slides in from above                      |
| `slide-left`  | Slides in from the left                   |
| `slide-right` | Slides in from the right                  |
| `zoom`        | Elastic zoom from small to full size      |
| `door`        | 3D perspective rotate like a door opening |
| `flip`        | 3D flip on the X-axis with a bounce       |

</card>

## API

| Property          | Type      | Description                 | Default   |
| ----------------- | --------- | --------------------------- | --------- |
| `v-model`         | `Boolean` | Dialog visibility           | `false`   |
| `color`           | `String`  | Dialog color                | —         |
| `animation`       | `String`  | Open/close animation style  | `'scale'` |
| `not-close`       | `Boolean` | Prevent outside-click close | `false`   |
| `scroll`          | `Boolean` | Enable scroll               | `false`   |
| `loading`         | `Boolean` | Loading state               | `false`   |
| `full-screen`     | `Boolean` | Full screen mode            | `false`   |
| `blur`            | `Boolean` | Blur background             | `false`   |
| `square`          | `Boolean` | Square corners              | `false`   |
| `not-padding`     | `Boolean` | Remove padding              | `false`   |
| `overflow-hidden` | `Boolean` | Prevent body scroll         | `false`   |
| `auto-width`      | `Boolean` | Auto-size to content        | `false`   |
| `width`           | `String`  | Custom width                | —         |
| `prevent-close`   | `Boolean` | Disable overlay close       | `false`   |

### Slots

| Name       | Description    |
| ---------- | -------------- |
| `#header`  | Dialog header  |
| `#default` | Dialog content |
| `#footer`  | Dialog footer  |
