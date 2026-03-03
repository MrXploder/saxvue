import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { createMemoryHistory, createRouter } from 'vue-router';
import SaxVue from '../src/index';
import '../src/styles/saxvue.scss';

setup((app: any) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'home', component: { template: '<div />' } },
      { path: '/docs', name: 'docs', component: { template: '<div />' } },
    ],
  });

  app.use(router);
  app.use(SaxVue);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: {
        language: 'html',
      },
    },
  },
};

export default preview;
