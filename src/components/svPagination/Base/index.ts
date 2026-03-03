import type { App } from 'vue';
import component from './svPagination';
import './style.scss';

component.install = (app: App) => {
  app.component('SvPagination', component);
};

export default component;
