import type { App } from 'vue';
import component from './svTableTh';
import './style.scss';

component.install = (app: App) => {
  app.component('VsTh', component);
};

export default component;
