import type { App } from 'vue';
import component from './svNavbarItem';
import './style.scss';

component.install = (app: App) => {
  app.component('SvNavbarItem', component);
};

export default component;
