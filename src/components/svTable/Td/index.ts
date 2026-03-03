import type { App } from 'vue';
import component from './svTableTd';
import './style.scss';

component.install = (app: App) => {
  app.component('VsTd', component);
};

export default component;
