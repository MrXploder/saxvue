import type { App } from 'vue';
import component from './svSidebarItem';
import './style.scss';

component.install = (app: App) => {
  app.component('SvSidebarItem', component);
};

export default component;
