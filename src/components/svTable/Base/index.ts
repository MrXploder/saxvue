import type { App } from 'vue';
import component from './svTable';
import './style.scss';

component.install = (app: App) => {
  app.component('SvTable', component);
};

export default component;
