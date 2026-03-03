import type { App } from 'vue';
import component from './svNavbar';
import './style.scss';

component.install = (app: App) => {
  app.component('SvNavbar', component);
};

export default component;
