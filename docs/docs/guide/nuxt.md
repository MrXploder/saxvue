# SaxVue + Nuxt

<card>

## Installation

Add SaxVue to your Nuxt 3 project:

```bash
npm install @mrxploder/saxvue
```

<img src="/nuxt-ui-vuesax.png" alt="Nuxt UI framework selection" />

</card>

<card>

## Plugin Setup

Create a plugin file to register SaxVue in your Nuxt app.

Create `plugins/saxvue.ts`:

```ts
import { defineNuxtPlugin } from '#app';
import SaxVue from '@mrxploder/saxvue';
import '@mrxploder/saxvue/dist/saxvue.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SaxVue);
});
```

</card>

<card>

## Test a Component

Now that SaxVue is registered, you can use any component in your pages.

### Add a Component

Try adding a simple component like [SvButton](/docs/components/):

```vue
<template>
  <div class="app">
    <sv-button> Hello World SaxVue + Nuxt </sv-button>
  </div>
</template>

<style>
.app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

And if we see the page we find something like this:

<img src="/nuxt-test-page.png" alt="Nuxt test page result" />

</card>

<card>

## Configuration

You can pass options when registering SaxVue:

```ts
// plugins/saxvue.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SaxVue, {
    colors: {
      primary: '#5b3cc4',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)',
    },
  });
});
```

</card>
