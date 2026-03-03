import type { App } from 'vue';
import './style.scss';

import svCol from './SvCol';
import svRow from './SvRow';

svCol.install = (app: App) => {
  app.component('SvCol', svCol);
};

svRow.install = (app: App) => {
  app.component('SvRow', svRow);
};

export { svCol, svRow };
