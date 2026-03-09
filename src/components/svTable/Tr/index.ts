import type { App } from 'vue';
import component from './svTableTr';
import './style.scss';

component.install = (app: App) => {
  app.component('SvTableTr', component);
};

export default component;
