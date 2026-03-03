import type { App } from 'vue';
import component from './svSelect';
import './style.scss';

component.install = (app: App) => {
  app.component('SvSelect', component);
};

export default component;
