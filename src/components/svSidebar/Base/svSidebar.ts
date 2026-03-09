import {
  defineComponent,
  h,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
  getCurrentInstance,
} from 'vue';
import { setColor } from '../../../util/index';
import { svColorProps } from '../../../mixins/component';

export default defineComponent({
  name: 'SvSidebar',
  props: {
    ...svColorProps,
    modelValue: {},
    reduce: { type: Boolean, default: false },
    hoverExpand: { type: Boolean, default: false },
    open: { type: Boolean, default: false },
    notLineActive: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    textWhite: { type: Boolean, default: false },
    notShadow: { type: Boolean, default: false },
    relative: { type: Boolean, default: false },
    absolute: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    background: { type: String, default: 'background' },
  },
  setup(props, { emit, slots, attrs }) {
    const rootRef = ref<HTMLElement | null>(null);
    const staticWidth = ref<number>(260);
    const forceExpand = ref<boolean>(false);
    const reduceInternal = ref<boolean>(props.reduce);

    const inst = getCurrentInstance();
    const getColor = inst && (inst.proxy as unknown as Record<string, unknown>).getColor;

    const clickCloseSidebar = (evt: MouseEvent) => {
      if (!(evt.target as HTMLElement).closest('.sv-sidebar-content')) {
        emit('update:open', false);
      }
    };

    watch(
      () => props.open,
      (val: boolean) => {
        if (val) {
          setTimeout(() => {
            window.addEventListener('click', clickCloseSidebar);
          }, 200);
        } else {
          window.removeEventListener('click', clickCloseSidebar);
        }
      },
    );

    watch(
      () => props.reduce,
      (val: boolean) => {
        reduceInternal.value = val;
        const el = rootRef.value;
        if (el) {
          el.style.width = val ? '50px' : `${staticWidth.value}px`;
        }
      },
    );

    watch(
      () => reduceInternal.value,
      (val: boolean) => {
        const el = rootRef.value;
        if (el) {
          el.style.width = val ? '50px' : `${staticWidth.value}px`;
        }
      },
    );

    watch(
      () => props.background,
      () => {
        const el = rootRef.value;
        if (el) setColor('background', props.background, el, true);
      },
    );

    const handleClickItem = (id: string) => emit('update:modelValue', id);

    onMounted(() => {
      const el = rootRef.value;
      if (el) staticWidth.value = el.offsetWidth;
      reduceInternal.value = props.reduce;

      if (props.background !== 'background' && el) {
        setColor('background', props.background, el, true);
      }

      if (props.textWhite && el) {
        setColor('text', '#fff', el, true);
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener('click', clickCloseSidebar);
    });

    return () => {
      const logo = h('div', { class: 'sv-sidebar__logo' }, [slots.logo ? slots.logo() : null]);
      const header = h('div', { class: 'sv-sidebar__header' }, [
        slots.header ? slots.header() : null,
      ]);
      const footer = h('div', { class: 'sv-sidebar__footer' }, [
        slots.footer ? slots.footer() : null,
      ]);
      const sidebar = h('div', { class: 'sv-sidebar' }, [slots.default ? slots.default() : null]);

      return h(
        'div',
        {
          ref: rootRef,
          class: [
            'sv-sidebar-content',
            {
              reduce: reduceInternal.value,
              open: props.open,
              notLineActive: props.notLineActive,
              square: props.square,
              notShadow: props.notShadow,
              textWhite: props.textWhite,
              relative: props.relative,
              absolute: props.absolute,
              right: props.right,
            },
            { [`sv-component--primary`]: !!props.primary },
            { [`sv-component--danger`]: !!props.danger },
            { [`sv-component--warn`]: !!props.warn },
            { [`sv-component--success`]: !!props.success },
            { [`sv-component--dark`]: !!props.dark },
            { [`sv-component--is-color`]: !!props.color },
          ],
          style: { ['--sv-color']: props.color ? getColor : '' },
          onMouseenter: () => {
            if (props.hoverExpand) reduceInternal.value = false;
          },
          onMouseleave: () => {
            if (props.hoverExpand) reduceInternal.value = true;
          },
          ...attrs,
        },
        [
          slots.logo ? logo : null,
          slots.header ? header : null,
          sidebar,
          slots.footer ? footer : null,
        ],
      );
    };
  },
});
