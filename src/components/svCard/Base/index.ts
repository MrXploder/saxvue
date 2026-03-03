import type { App } from 'vue';
import component from './svCard';
import './style.scss';

component.install = (app: App) => {
  app.component('SvCard', component);
};

export default component;
