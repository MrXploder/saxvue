import type { App } from 'vue';
import component from './SvButtonGroup';
import './style.scss';

component.install = (app: App) => {
  app.component('SvButtonGroup', component);
};

export default component;
