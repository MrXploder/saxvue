import { createApp, nextTick, ComponentPublicInstance } from 'vue';
import './style.scss';
import component from './svLoading';

interface LoadingVm extends ComponentPublicInstance {
  text?: string;
  color?: string;
  background?: string;
  opacity?: string;
  percent?: string;
  type?: string;
  progress?: string;
  progressTransitionSpeed?: number;
  scale?: string;
  isVisible?: boolean;
}

interface LoadingParams {
  type?: string;
  text?: string;
  hidden?: boolean;
  color?: string;
  background?: string;
  opacity?: string;
  percent?: string;
  progress?: string;
  progressTransitionSpeed?: number;
  target?: string | HTMLElement | { $el: HTMLElement };
  scale?: string;
}

const loading = (params: LoadingParams = {}) => {
  const app = createApp(component);

  let target: HTMLElement;
  if (typeof params.target === 'string') {
    target = document.querySelector(params.target) as HTMLElement;
  } else if (params.target) {
    target = (params.target as { $el: HTMLElement }).$el || (params.target as HTMLElement);
  } else {
    target = document.body;
  }

  const container = document.createElement('div');
  target.appendChild(container);
  document.body.style.overflowY = params.hidden ? 'hidden' : '';

  const vm = app.mount(container) as LoadingVm;

  vm.text = params.text;
  vm.color = params.color;
  vm.background = params.background;
  vm.opacity = params.opacity;
  vm.percent = params.percent;
  vm.type = params.type;
  vm.progress = params.progress;
  vm.progressTransitionSpeed = params.progressTransitionSpeed;
  vm.scale = params.scale;

  nextTick(() => {
    vm.isVisible = true;
  });

  const api = {
    vm,
    close: () => {
      setTimeout(() => {
        vm.isVisible = false;
        document.body.style.overflowY = 'auto';
      }, vm.progressTransitionSpeed);
      setTimeout(() => {
        try {
          app.unmount();
          if (vm.$el && vm.$el.parentNode) vm.$el.parentNode.removeChild(vm.$el);
        } catch (e) {
          /* ignore */
        }
      }, (vm.progressTransitionSpeed || 0) + 250);
    },
    changePercent: (val: string) => {
      if (val) vm.percent = val;
    },
    changeProgress: (val: string) => {
      if (val) vm.progress = val;
    },
    changeText: (val: string) => {
      if (val) vm.text = val;
    },
    unmount: () => {
      try {
        app.unmount();
        if (vm.$el && vm.$el.parentNode) vm.$el.parentNode.removeChild(vm.$el);
      } catch (e) {
        /* ignore */
      }
    },
  };

  return api;
};

export default loading;
