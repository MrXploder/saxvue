import type { App } from 'vue';
import component from './SvButton';
import './style.scss';

component.install = (app: App) => {
  app.component('SvButton', component);
};

export default component;
