import type { App } from 'vue';
import component from './svCheckbox';
import './style.scss';

component.install = (app: App) => {
  app.component('SvCheckbox', component);
};

export default component;
