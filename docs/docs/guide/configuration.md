# Configuration

<card>

## Instance Config

You can customize SaxVue when installing it in your Vue 3 application. Pass an options object as the second argument to `app.use()`.

```js
import { createApp } from 'vue';
import SaxVue from '@mrxploder/saxvue';
import '@mrxploder/saxvue/dist/saxvue.css';
import App from './App.vue';

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

app.mount('#app');
```

</card>

<card>

## Colors

Customize the default color palette by passing a `colors` object:

| Key       | Type     | Default             |
| --------- | -------- | ------------------- |
| `primary` | `String` | `rgb(26, 92, 255)`  |
| `success` | `String` | `rgb(23, 201, 100)` |
| `danger`  | `String` | `rgb(242, 19, 93)`  |
| `warning` | `String` | `rgb(255, 130, 0)`  |
| `dark`    | `String` | `rgb(36, 33, 69)`   |

Colors can be in any valid CSS format: HEX, RGB, or named colors.

</card>

<card>

## Global Functions

After installing SaxVue, global functions are available on the Vue instance via `$sv`:

| Function             | Description                         |
| -------------------- | ----------------------------------- |
| `$sv.loading()`      | Show a loading overlay              |
| `$sv.notification()` | Show a notification                 |
| `$sv.setColor()`     | Change a theme color at runtime     |
| `$sv.toggleTheme()`  | Toggle between light and dark theme |

### Usage Example

```js
// Options API
this.$sv.loading({ text: 'Loading...' });
this.$sv.notification({ title: 'Hello', text: 'World' });
this.$sv.setColor('primary', '#00bcd4');

// Composition API
import { getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
proxy.$sv.loading({ text: 'Loading...' });
```

</card>
