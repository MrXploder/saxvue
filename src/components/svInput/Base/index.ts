import type { App } from 'vue';
import component from './svInput';
import './style.scss';

component.install = (app: App) => {
  app.component('SvInput', component);
};

export default component;
