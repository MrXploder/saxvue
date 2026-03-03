import type { App } from 'vue';
import component from './svSidebarGroup';
import './style.scss';

component.install = (app: App) => {
  app.component('SvSidebarGroup', component);
};

export default component;
