import type { App } from 'vue';
import component from './svRadio';
import './style.scss';

component.install = (app: App) => {
  app.component('SvRadio', component);
};

export default component;
