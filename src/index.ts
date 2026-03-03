import { App, Plugin } from 'vue';
import * as svComponents from './components/index';
import defineSaxVueFunctions from './functions/defineSaxVueFunctions';
import * as svLayouts from './layout/index';
import './styles/saxvue.scss';
import { defineSaxVueOptions, SaxVueOptions } from './util/defineSaxVueOptions';

const install = (app: App, options?: SaxVueOptions) => {
  // Components
  Object.values(svComponents).forEach((svComponent) => {
    if (typeof (svComponent as { install?: (app: App) => void }).install === 'function') {
      app.use(svComponent as unknown as Plugin);
    }
  });
  // layout
  Object.values(svLayouts).forEach((svLayout) => {
    if (typeof (svLayout as { install?: (app: App) => void }).install === 'function') {
      app.use(svLayout as unknown as Plugin);
    }
  });

  if (options) {
    defineSaxVueOptions(options);
  }

  defineSaxVueFunctions(app);
};

export default install;
