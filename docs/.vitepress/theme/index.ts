import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import './style.css';

// SaxVue library (static import so components are available before first render)
import SaxVue from '../../../src/index';

// Theme components
import Card from './components/Card.vue';
import HomeLayout from './components/HomeLayout.vue';
import DocsWarn from './components/DocsWarn.vue';
import Coloren from './components/Coloren.vue';
import Badge from './components/Badge.vue';
import Icons from './components/Icons.vue';

// All demo components
import * as demos from './components/demos/index';

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register SaxVue library (synchronous — all sv-* components available immediately)
    app.use(SaxVue as any);

    // Register global doc components
    app.component('card', Card);
    app.component('HomeLayout', HomeLayout);
    app.component('DocsWarn', DocsWarn);
    app.component('Coloren', Coloren);
    app.component('badge', Badge);
    app.component('Icons', Icons);

    // Register all demo components globally
    for (const [name, component] of Object.entries(demos)) {
      app.component(name, component as any);
    }
  },
};

export default theme;
