import type { App } from 'vue';
import component from './svNavbarGroup';
import './style.scss';

component.install = (app: App) => {
  app.component('SvNavbarGroup', component);
};

export default component;
