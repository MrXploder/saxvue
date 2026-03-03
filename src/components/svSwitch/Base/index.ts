import type { App } from 'vue';
import component from './svSwitch';
import './style.scss';

component.install = (app: App) => {
  app.component('SvSwitch', component);
};

export default component;
