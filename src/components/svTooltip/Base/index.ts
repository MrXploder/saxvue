import type { App } from 'vue';
import component from './svTooltip';
import './style.scss';

component.install = (app: App) => {
  app.component('SvTooltip', component);
};

export default component;
