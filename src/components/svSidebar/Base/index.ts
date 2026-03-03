import type { App } from 'vue';
import component from './svSidebar';
import './style.scss';

component.install = (app: App) => {
  app.component('SvSidebar', component);
};

export default component;
