import type { App } from 'vue';
import component from './svAvatarGroup';
import './style.scss';

component.install = (app: App) => {
  app.component('SvAvatarGroup', component);
};

export default component;
