import type { App } from 'vue';
import component from './svCardGroup';
import './style.scss';

component.install = (app: App) => {
  app.component('SvCardGroup', component);
};

export default component;
