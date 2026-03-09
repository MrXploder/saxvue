import {
  defineComponent,
  h,
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
  watch,
  getCurrentInstance,
} from 'vue';
import SvIconsClose from '../../../icons/close';
import { insertBody } from '../../../util/index';
import { svColorProps, useSvComponent } from '../../../mixins/component';

export default defineComponent({
  name: 'SvDialog',
  props: {
    ...svColorProps,
    modelValue: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    fullScreen: { type: Boolean, default: false },
    notClose: { type: Boolean, default: false },
    preventClose: { type: Boolean, default: false },
    notPadding: { type: Boolean, default: false },
    overflowHidden: { type: Boolean, default: false },
    blur: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    autoWidth: { type: Boolean, default: false },
    scroll: { type: Boolean, default: false },
    notCenter: { type: Boolean, default: false },
    width: { type: String, default: null },
    routerClose: { type: Boolean, default: false },
  },
  setup(props, { slots, emit }) {
    const rebound = ref(false);
    const dialogContentRef = ref<HTMLElement | null>(null);

    const esc = (evt: KeyboardEvent) => {
      if (evt.which === 27 && !props.preventClose) {
        emit('update:modelValue', false);
        emit('close');
      }
    };

    const addEsc = () => window.addEventListener('keydown', esc);

    const insertDialog = () => {
      addEsc();
      nextTick(() => {
        const dialog = dialogContentRef.value as HTMLElement | null;
        if (dialog) insertBody(dialog, document.querySelector('#app'));
      });
    };

    watch(
      () => props.modelValue,
      (val: boolean) => {
        if (val) {
          insertDialog();
          if (props.overflowHidden) document.body.style.overflow = 'hidden';
        } else {
          window.removeEventListener('keydown', esc);
          if (props.overflowHidden) document.body.style.overflow = '';
        }
      },
    );

    onMounted(() => {
      // nothing extra here besides watch behavior
    });

    onBeforeUnmount(() => {
      if (dialogContentRef.value && dialogContentRef.value.parentNode) {
        try {
          dialogContentRef.value.parentNode.removeChild(dialogContentRef.value);
        } catch (e) {
          /* ignore */
        }
      }
    });

    const inst = getCurrentInstance();
    const { getColor } = useSvComponent(props);

    return () => {
      const header = h('header', { class: 'sv-dialog__header' }, [
        slots.header ? slots.header() : null,
      ]);

      const content = h(
        'div',
        {
          class: ['sv-dialog__content', { notFooter: !slots.footer }],
        },
        [slots.default ? slots.default() : null],
      );

      const footer = h('footer', { class: 'sv-dialog__footer' }, [
        slots.footer ? slots.footer() : null,
      ]);

      const close = h(
        'button',
        {
          class: 'sv-dialog__close',
          onClick: (evt: MouseEvent) => {
            emit('update:modelValue', !props.modelValue);
            emit('close');
          },
        },
        [h(SvIconsClose, { hover: 'x' } as Record<string, unknown>)],
      );

      const loading = h('div', { class: 'sv-dialog__loading' }, [
        h('div', { class: 'sv-dialog__loading__load' }),
      ]);

      const dialog = h(
        'div',
        {
          style: { width: props.width },
          class: [
            'sv-dialog',
            {
              'sv-dialog--fullScreen': props.fullScreen,
              'sv-dialog--rebound': rebound.value,
              'sv-dialog--notPadding': props.notPadding,
              'sv-dialog--square': props.square,
              'sv-dialog--autoWidth': props.autoWidth,
              'sv-dialog--scroll': props.scroll,
              'sv-dialog--loading': props.loading,
              'sv-dialog--notCenter': props.notCenter,
            },
          ],
        },
        [
          props.loading && loading,
          !props.notClose && close,
          slots.header ? header : null,
          content,
          slots.footer ? footer : null,
        ],
      );

      const dialogContent = h(
        'div',
        {
          ref: dialogContentRef,
          class: ['sv-dialog-content', { blur: props.blur, fullScreen: props.fullScreen }],
          onClick: (evt: MouseEvent) => {
            const target = evt.target as Element;
            if (!target.closest('.sv-dialog') && !props.preventClose) {
              emit('update:modelValue', !props.modelValue);
              emit('close');
            }

            if (props.preventClose && !target.closest('.sv-dialog')) {
              rebound.value = true;
              setTimeout(() => {
                rebound.value = false;
              }, 300);
            }
          },
        },
        [dialog],
      );

      return h('transition', { name: 'sv-dialog' }, [props.modelValue && dialogContent]);
    };
  },
});
