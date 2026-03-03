import { App } from 'vue';
import { setColor } from '../util/index';
import { setTheme, toggleTheme } from './toggleTheme/index';
import loading from './svLoading/Base/index';
import notification from './svNotification/Base/index';
import { checkAll, getLength, getPage, getSearch, sortData } from './svTable/index';

const defineSaxVueFunctions = (app: App) => {
  const svFunctions = {
    setColor(color: string, val: string) {
      setColor(color, val, document.body);
    },
    loading,
    toggleTheme,
    setTheme,
    notification,
    getPage,
    getLength,
    checkAll,
    getSearch,
    sortData,
  };

  if (app && app.config && app.config.globalProperties) {
    app.config.globalProperties.$sv = svFunctions;
  }
};

export default defineSaxVueFunctions;
