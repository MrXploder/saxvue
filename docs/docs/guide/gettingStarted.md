# Getting Started

<card>

## Installation

SaxVue is a framework of UI components based on Vue 3 which means that Vue 3 has to be in your project so that SaxVue can do the magic.

</card>

<card>

## NPM

You can install SaxVue through npm with the command:

```bash
npm install @mrxploder/saxvue
# OR
yarn add @mrxploder/saxvue
```

</card>

<card>

## Usage

To use SaxVue in your Vue 3 project, add this code:

```js
import { createApp } from 'vue';
import SaxVue from '@mrxploder/saxvue';
import '@mrxploder/saxvue/dist/saxvue.css';

import App from './App.vue';

const app = createApp(App);
app.use(SaxVue, {
  // options here
});
app.mount('#app');
```

</card>

<card>

## Individual Components (on demand)

There are cases that in your project you only need some components of SaxVue and for this you can add them as follows:

```js
import { createApp } from 'vue';
import { svButton, svSelect } from '@mrxploder/saxvue';
import '@mrxploder/saxvue/dist/saxvue.css';

import App from './App.vue';

const app = createApp(App);
app.use(svButton);
app.use(svSelect);
app.mount('#app');
```

</card>

<card>

## CDN

You can use SaxVue by loading it via CDN by adding a `<script>` tag to your project:

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="https://unpkg.com/@mrxploder/saxvue/dist/saxvue.css" rel="stylesheet" />
  </head>
  <body>
    <div id="app">
      <sv-button>Hello World</sv-button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://unpkg.com/@mrxploder/saxvue"></script>
    <script>
      const app = Vue.createApp({});
      app.use(SaxVue);
      app.mount('#app');
    </script>
  </body>
</html>
```

</card>
