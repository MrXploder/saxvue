import {
  defineComponent,
  h,
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
  getCurrentInstance,
  type VNode,
  type ComponentPublicInstance,
} from 'vue';
import SvIconsClose from '../../../icons/close';
import { setColor } from '../../../util/index';

/** Shape of refs exposed by setup() and consumed in render(). */
interface NotificationInstance extends ComponentPublicInstance {
  isVisible: boolean;
  content: VNode | null;
  title: string | null;
  text: string | null;
  color: string | null;
  colorName: string | null;
  border: string | null;
  icon: string | null;
  onClickClose: (() => void) | null;
  onClick: (() => void) | null;
  buttonClose: boolean;
  flat: boolean;
  onDestroy: (() => void) | null;
  sticky: boolean;
  square: boolean;
  width: string | null;
  loading: boolean;
  progressAuto: boolean;
  progress: number;
  duration: number;
  notPadding: boolean | null;
  clickClose: boolean;
  classNotification: string | null;
  close: () => void;
  handleClickClose: () => void;
  beforeEnter: (el: Element) => void;
  enter: (el: Element, done: () => void) => void;
  leave: (el: Element, done: () => void) => void;
  getProgress: () => number;
}

export default defineComponent({
  name: 'SvNotification',
  props: {
    // legacy props may be injected when used programmatically; keep flexible typing
  },
  setup(_, { emit }) {
    const isVisible = ref<boolean>(false);

    const content = ref<VNode | null>(null);
    const title = ref<string | null>(null);
    const text = ref<string | null>(null);
    const color = ref<string | null>(null);
    const colorName = ref<string | null>(null);
    const border = ref<string | null>(null);
    const icon = ref<string | null>(null);
    const onClickClose = ref<(() => void) | null>(null);
    const onClick = ref<(() => void) | null>(null);
    const buttonClose = ref<boolean>(true);
    const flat = ref<boolean>(true);
    const onDestroy = ref<(() => void) | null>(null);
    const sticky = ref<boolean>(false);
    const square = ref<boolean>(false);
    const width = ref<string | null>(null);
    const loading = ref<boolean>(false);
    const progressAuto = ref<boolean>(false);
    const progress = ref<number>(0);
    const duration = ref<number>(4000);
    const intervalProgress = ref<ReturnType<typeof setInterval> | null>(null);
    const notPadding = ref<boolean | null>(null);
    const clickClose = ref<boolean>(false);
    const classNotification = ref<string | null>(null);

    const inst = getCurrentInstance();
    const proxy = inst?.proxy as NotificationInstance | null;

    const close = () => {
      isVisible.value = false;
    };

    const handleClickClose = () => {
      isVisible.value = false;
    };

    const beforeEnter = (el: Element) => {
      (el as HTMLElement).style.maxHeight = `0px`;
      (el as HTMLElement).style.padding = `0px 20px`;
    };

    const enter = (el: Element, done: () => void) => {
      const h = el.scrollHeight;
      (el as HTMLElement).style.maxHeight = `${h + 40}px`;
      if (window.innerWidth < 600) {
        (el as HTMLElement).style.padding = `15px`;
      } else {
        (el as HTMLElement).style.padding = `20px`;
      }
      done();
    };

    const leave = (el: Element, done: () => void) => {
      const parent = proxy && proxy.$el ? proxy.$el.parentNode : null;
      setTimeout(() => {
        done();
        try {
          if (parent && parent.childNodes.length == 1) {
            document.body.removeChild(parent);
          }
          if (proxy && proxy.$el && proxy.$el.parentNode) {
            proxy.$el.parentNode.removeChild(proxy.$el);
          }
        } catch (e) {
          // ignore DOM removal errors
        }
        if (onDestroy.value) {
          try {
            onDestroy.value();
          } catch (e) {
            // ignore
          }
        }
      }, 250);
    };

    watch(isVisible, () => {
      nextTick(() => {
        const el = proxy && proxy.$el ? proxy.$el : null;
        if (el) {
          setColor('color', color.value, el);
          setColor('border', border.value, el);
        }
      });
    });

    const getProgress = () => {
      // keep legacy side-effectal behavior (starts a tiny interval) and return a placeholder
      setInterval(() => {
        progress.value++;
      }, 1);
      return 20;
    };

    onMounted(() => {
      if (progressAuto.value) {
        intervalProgress.value = setInterval(() => {
          progress.value++;
        }, duration.value / 100);
      }
    });

    onBeforeUnmount(() => {
      clearInterval(intervalProgress.value);
    });

    return {
      // expose internal refs/methods for programmatic use (some code mounts this component and sets props)
      isVisible,
      content,
      title,
      text,
      color,
      colorName,
      border,
      icon,
      onClickClose,
      onClick,
      buttonClose,
      flat,
      onDestroy,
      sticky,
      square,
      width,
      loading,
      progressAuto,
      progress,
      duration,
      notPadding,
      clickClose,
      classNotification,
      close,
      handleClickClose,
      beforeEnter,
      enter,
      leave,
      getProgress,
    };
  },
  render() {
    const self = this as unknown as NotificationInstance;

    const title = h(
      'header',
      {
        class: 'sv-notification__content__header',
      },
      [
        h('h4', {
          innerHTML: self.title,
        }),
      ],
    );

    const text = h(
      'div',
      {
        class: 'sv-notification__content__text',
      },
      [
        h('p', {
          innerHTML: self.text,
        }),
      ],
    );

    const content = h(
      'div',
      {
        class: 'sv-notification__content',
      },
      [self.title && title, self.text && text, self.content && h(self.content)],
    );

    const icon = h('div', {
      class: 'sv-notification__icon',
      innerHTML: self.icon,
    });

    const closeBtn = h(
      'button',
      {
        class: 'sv-notification__close',
        onClick: self.handleClickClose,
      },
      [h(SvIconsClose, { hover: 'less' })],
    );

    const loading = h('div', {
      class: 'sv-notification__loading',
    });

    const progress = h('div', {
      class: 'sv-notification__progress',
      style: {
        width: `${self.progress}%`,
      },
    });

    return h(
      'transition',
      {
        name: 'notification',
        onBeforeEnter: self.beforeEnter,
        onEnter: self.enter,
        onLeave: self.leave,
      },
      [
        self.isVisible &&
          h(
            'div',
            {
              class: [
                'sv-notification',
                { 'sv-notification--color': self.color },
                { 'sv-notification--border': self.border },
                { 'sv-notification--icon': self.icon },
                { 'sv-notification--onClick': self.onClick },
                { 'sv-notification--onClickClose': self.onClickClose },
                { 'sv-notification--flat': self.flat },
                { 'sv-notification--sticky': self.sticky },
                { 'sv-notification--square': self.square },
                { 'sv-notification--width-all': self.width == '100%' },
                { 'sv-notification--width-auto': self.width == 'auto' },
                { 'sv-notification--loading': self.loading },
                { 'sv-notification--notPadding': self.notPadding },
                `sv-notification--${self.colorName}`,
                self.classNotification,
              ],
              onClick: () => {
                if (self.onClick) {
                  try {
                    self.onClick();
                  } catch (e) {
                    /* ignore */
                  }
                }
                if (self.clickClose) {
                  self.close();
                  if (self.onClickClose) {
                    try {
                      self.onClickClose();
                    } catch (e) {
                      /* ignore */
                    }
                  }
                }
              },
            },
            [
              !self.loading && self.icon && icon,
              !self.loading && content,
              self.buttonClose && closeBtn,
              self.loading && loading,
              progress,
            ],
          ),
      ],
    );
  },
});
