import { createApp, nextTick, ComponentPublicInstance } from 'vue';
import './style.scss';
import component from './svNotification';

interface NotificationVm extends ComponentPublicInstance {
  title?: string;
  text?: string;
  color?: string;
  colorName?: string;
  border?: string;
  icon?: string;
  onClick?: (() => void) | null;
  onClickClose?: (() => void) | null;
  flat?: boolean;
  onDestroy?: (() => void) | null;
  sticky?: boolean;
  square?: boolean;
  width?: string;
  loading?: boolean;
  notPadding?: boolean | string;
  clickClose?: boolean;
  classNotification?: string;
  duration?: number | string;
  progressAuto?: boolean;
  progress?: string | number;
  buttonClose?: boolean;
  isVisible?: boolean;
  content?: string | (() => void);
  close?: () => void;
}

interface NotificationParams {
  title?: string;
  text?: string;
  position?: string;
  color?: string;
  border?: string;
  icon?: string;
  duration?: number | string;
  onClick?: (() => void) | null;
  onClickClose?: (() => void) | null;
  buttonClose?: boolean;
  flat?: boolean;
  onDestroy?: (() => void) | null;
  sticky?: boolean;
  square?: boolean;
  width?: string;
  loading?: boolean;
  progress?: string | number;
  notPadding?: boolean | string;
  content?: string | (() => void);
  clickClose?: boolean;
  classNotification?: string;
}

const notification = (params: NotificationParams = {}) => {
  const app = createApp(component);
  // create or reuse parent container for position
  const parent: HTMLElement =
    (document.querySelector(
      `.sv-notification-parent--${params.position || 'bottom-right'}`,
    ) as HTMLElement) || document.createElement('div');

  if (!document.querySelector(`.sv-notification-parent--${params.position || 'bottom-right'}`)) {
    parent.className = 'sv-notification-parent';
    parent.classList.add(`sv-notification-parent--${params.position || 'bottom-right'}`);
  }

  if (params.classNotification) {
    parent.classList.add(params.classNotification);
  }

  const container = document.createElement('div');
  parent.appendChild(container);
  if (!parent.parentNode) document.body.appendChild(parent);

  const vm = app.mount(container) as NotificationVm;

  // set data on the component instance
  vm.title = params.title;
  vm.text = params.text;
  vm.color = params.color;
  vm.colorName = params.color;
  vm.border = params.border;
  vm.icon = params.icon;
  vm.onClick = params.onClick;
  vm.onClickClose = params.onClickClose;
  vm.flat = params.flat;
  vm.onDestroy = params.onDestroy;
  vm.sticky = params.sticky;
  vm.square = params.square;
  vm.width = params.width;
  vm.loading = params.loading;
  vm.notPadding = params.notPadding;
  vm.clickClose = params.clickClose;
  vm.classNotification = params.classNotification;
  if (params.duration !== 'none') {
    vm.duration = params.duration || 4000;
  }
  if (params.progress == 'auto' && params.duration !== 'none') {
    vm.progressAuto = true;
  } else {
    vm.progress = params.progress;
  }
  if (typeof params.buttonClose == 'boolean') {
    vm.buttonClose = params.buttonClose;
  }

  if (params.width == '100%' || window.innerWidth < 600) {
    if (params.position === 'top-left' || params.position === 'top-right') {
      params.position = 'top-center';
    } else if (
      params.position === 'bottom-left' ||
      params.position === 'bottom-right' ||
      !params.position
    ) {
      params.position = 'bottom-center';
    }
  }

  if (typeof params.position !== 'string') {
    params.position = 'bottom-right';
  }

  // expose utility methods that mirror the old API
  const api = {
    vm,
    close: () => {
      try {
        vm.close && vm.close();
      } catch (e) {
        /* ignore */
      }
    },
    setLoading: (val: boolean) => {
      vm.loading = val;
    },
    changeProgress: (val: number) => {
      if (val) vm.progress = val;
    },
    toggleClass: (val: string) => {
      if (val) {
        vm.classNotification = val;
        const el = vm && vm.$el ? vm.$el.closest('.sv-notification-parent') : null;
        if (el) el.classList.toggle(val);
      }
    },
    unmount: () => {
      try {
        app.unmount();
        if (container.parentNode) container.parentNode.removeChild(container);
      } catch (e) {
        /* ignore */
      }
    },
  };

  nextTick(() => {
    vm.isVisible = true;
    vm.content = params.content;
  });

  if (params.duration !== 'none') {
    setTimeout(() => api.close(), Number(params.duration) || 4000);
  }

  return api;
};

export default notification;
