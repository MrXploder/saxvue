import type { App } from 'vue';
import component from './svAlert';
import './style.scss';

component.install = (app: App) => {
  app.component('SvAlert', component);
};

export default component;
