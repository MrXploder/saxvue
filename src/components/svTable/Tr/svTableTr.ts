import {
  defineComponent,
  h,
  getCurrentInstance,
  ref,
  onBeforeUnmount,
  watch,
  createApp,
  type App,
  type ComponentPublicInstance,
} from 'vue';
import expand from './svTableExpand';

interface ExpandInstance {
  app: App;
  container: HTMLElement;
  proxy: ComponentPublicInstance & Record<string, unknown>;
}

export default defineComponent({
  name: 'SvTableTr',
  props: {
    data: {},
    isSelected: { type: Boolean, default: false },
    notClickSelected: { type: Boolean, default: false },
    openExpandOnlyTd: { type: Boolean, default: false },
  },
  emits: ['selected', 'click'],
  setup(props, { emit, slots }) {
    const instanceExpand = ref<ExpandInstance | null>(null);
    const inst = getCurrentInstance();
    const proxy = inst && inst.proxy;

    const insertAfter = (element: HTMLElement) => {
      const el = proxy && proxy.$el;
      if (!el || !el.parentNode) return;
      if (el.nextSibling) el.parentNode.insertBefore(element, el.nextSibling);
      else el.parentNode.appendChild(element);
    };

    watch(
      () => props.data,
      () => {
        const el = proxy && (proxy.$el as HTMLElement | null);
        if (el) el.style.removeProperty(`--sv-color`);
        if (instanceExpand.value) {
          try {
            const p = instanceExpand.value.proxy;
            if (p && 'hidden' in p) (p as Record<string, unknown>).hidden = true;
          } catch (e) {
            /* ignore */
          }
          instanceExpand.value = null;
        }
      },
    );

    const handleClickHasExpand = () => {
      if (instanceExpand.value) {
        try {
          const p = instanceExpand.value.proxy;
          if (p && typeof (p as Record<string, unknown>).setHidden === 'function') {
            ((p as Record<string, unknown>).setHidden as (val: boolean) => void)(
              !(p as Record<string, unknown>).hidden,
            );
          }
        } catch (e) {
          // ignore
        }
        instanceExpand.value = null;
      } else {
        const parentEl = proxy && proxy.$parent && proxy.$parent.$el;
        const colspan = parentEl
          ? (parentEl as HTMLElement).querySelectorAll('thead th').length
          : 0;
        const container = document.createElement('div');
        const app = createApp({
          render: () =>
            h(
              expand as ReturnType<typeof defineComponent>,
              {
                colspan,
                onUnmounted: () => {
                  try {
                    app.unmount();
                    if (container.parentNode) container.parentNode.removeChild(container);
                  } catch (e) {
                    // ignore
                  }
                },
              },
              { default: () => (slots.expand ? slots.expand() : []) },
            ),
        });

        const proxyComp = app.mount(container) as ComponentPublicInstance & Record<string, unknown>;
        try {
          if (proxyComp && typeof proxyComp.setHidden === 'function')
            (proxyComp.setHidden as (val: boolean) => void)(false);
        } catch (e) {
          // ignore
        }

        const mountEl = container.firstElementChild as HTMLElement | null;
        if (mountEl) insertAfter(mountEl);
        instanceExpand.value = { app, container, proxy: proxyComp };
      }
    };

    onBeforeUnmount(() => {
      if (instanceExpand.value) {
        try {
          const exp = instanceExpand.value;
          if (exp.app) exp.app.unmount();
          if (exp.container && exp.container.parentNode)
            exp.container.parentNode.removeChild(exp.container);
        } catch (e) {
          // ignore
        }
        instanceExpand.value = null;
      }
    });

    return () =>
      h(
        'tr',
        {
          class: [
            'sv-table__tr',
            {
              selected: props.isSelected,
              isExpand: !!instanceExpand.value,
              expand: !!slots.expand,
            },
          ],
          onClick: (evt: MouseEvent) => {
            const target = evt.target as HTMLElement;
            if (slots.expand) {
              if (
                (props.openExpandOnlyTd ? target.nodeName == 'TD' : true) &&
                !target.className.includes('isEdit')
              ) {
                handleClickHasExpand();
              }
            }

            if (target.nodeName == 'TD' && !props.notClickSelected) {
              const parent = proxy && (proxy.$parent as unknown as Record<string, unknown>);
              if (parent && typeof parent.selected === 'function')
                (parent.selected as (val: unknown) => void)(props.data);
              emit('selected', props.data);
            }

            emit('click', evt);
          },
        },
        slots.default ? slots.default() : null,
      );
  },
});
