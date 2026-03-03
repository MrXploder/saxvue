import type { App } from 'vue';
import component from './svSelectOption';
import './style.scss';

component.install = (app: App) => {
  app.component('SvOption', component);
};

export default component;
