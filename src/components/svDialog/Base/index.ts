import type { App } from 'vue';
import component from './svDialog';
import './style.scss';

component.install = (app: App) => {
  app.component('SvDialog', component);
};

export default component;
