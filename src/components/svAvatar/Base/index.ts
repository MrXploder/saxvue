import type { App } from 'vue';
import component from './svAvatar';
import './style.scss';

component.install = (app: App) => {
  app.component('SvAvatar', component);
};

export default component;
