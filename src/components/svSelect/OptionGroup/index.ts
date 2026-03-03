import type { App } from 'vue';
import component from './svOptionGroup';
import './style.scss';

component.install = (app: App) => {
  app.component('SvOptionGroup', component);
};

export default component;
