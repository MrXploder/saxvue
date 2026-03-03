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
import { insertBody, setCordsPosition } from '../../../util/index';
import { svColorProps } from '../../../mixins/component';

export default defineComponent({
  name: 'SvTooltip',
  props: {
    ...svColorProps,
    value: {},
    loading: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    notHover: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    interactivity: { type: Boolean, default: false },
    notArrow: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    borderThick: { type: Boolean, default: false },
    delay: { type: [String, Number], default: null },
  },
  setup(props, { slots, emit }) {
    const activeTooltip = ref(false);
    const isHoverTooltip = ref(false);
    const tooltip = ref<HTMLElement | null>(null);
    const content = ref<HTMLElement | null>(null);

    const insertTooltip = () => {
      const t = tooltip.value;
      if (!t) return;
      insertBody(t, document.body);

      let position = 'top';
      if (props.bottom) position = 'bottom';
      else if (props.left) position = 'left';
      else if (props.right) position = 'right';

      setCordsPosition(t, content.value, position);
    };

    const handlerMouseEnter = () => {
      if (props.delay) {
        setTimeout(() => {
          activeTooltip.value = true;
          nextTick(() => insertTooltip());
        }, Number(props.delay));
      } else {
        activeTooltip.value = true;
        nextTick(() => insertTooltip());
      }
    };

    const removeTooltip = () => {
      activeTooltip.value = false;
      emit('input', false);
    };

    const handleResize = () => {
      let position = 'top';
      if (props.bottom) position = 'bottom';
      else if (props.left) position = 'left';
      else if (props.right) position = 'right';

      const t = tooltip.value;
      if (!t) return;

      nextTick(() => {
        setCordsPosition(t, content.value, position);
      });
    };

    const handleMouseDownNotHover = (evt: MouseEvent | TouchEvent) => {
      if (
        !(evt.target as HTMLElement).closest('.sv-tooltip') &&
        !(evt.target as HTMLElement).closest('.sv-tooltip-content')
      ) {
        removeTooltip();
      }
    };

    watch(
      () => props.value,
      (val: boolean) => {
        activeTooltip.value = val;
        if (val) nextTick(() => insertTooltip());
      },
    );

    onMounted(() => {
      window.addEventListener('popstate', () => {
        const tooltips = document.querySelectorAll('.sv-tooltip');
        tooltips.forEach((t) => t.remove());
      });

      window.addEventListener('resize', handleResize);
      if (props.notHover) window.addEventListener('mousedown', handleMouseDownNotHover);
      window.addEventListener('touchstart', handleMouseDownNotHover);
    });

    onBeforeUnmount(() => {
      activeTooltip.value = false;
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleMouseDownNotHover);
      window.removeEventListener('touchstart', handleMouseDownNotHover);
    });

    const inst = getCurrentInstance();
    const getColor = inst && (inst.proxy as unknown as Record<string, unknown>).getColor;

    return () => {
      const loadingNode = h('div', { class: 'sv-tooltip__loading' });

      const tooltipNode = h(
        'div',
        {
          ref: tooltip,
          style: { ['--sv-color']: props.color ? getColor : '' },
          class: [
            'sv-tooltip',
            {
              top: !props.bottom && !props.left && !props.right,
              bottom: props.bottom,
              left: props.left,
              right: props.right,
              shadow: props.shadow,
              notArrow: props.notArrow,
              square: props.square,
              circle: props.circle,
              border: props.border,
              borderThick: props.borderThick,
              loading: props.loading,
            },
            { [`sv-component--primary`]: !!props.primary },
            { [`sv-component--danger`]: !!props.danger },
            { [`sv-component--warn`]: !!props.warn },
            { [`sv-component--success`]: !!props.success },
            { [`sv-component--dark`]: !!props.dark },
          ],
          onMouseenter: () => {
            if (props.interactivity) {
              isHoverTooltip.value = true;
              handlerMouseEnter();
            }
          },
          onMouseleave: () => {
            isHoverTooltip.value = false;
            removeTooltip();
          },
        },
        [slots.tooltip ? slots.tooltip() : null, props.loading && loadingNode],
      );

      return h(
        'div',
        {
          ref: content,
          class: 'sv-tooltip-content',
          onMouseenter: () => {
            if (!props.notHover) handlerMouseEnter();
          },
          onMouseleave: () => {
            if (!props.notHover) {
              if (props.interactivity) {
                setTimeout(() => {
                  if (!isHoverTooltip.value) removeTooltip();
                }, 250);
              } else {
                removeTooltip();
              }
            }
          },
        },
        [
          h(
            'transition',
            {
              name: 'sv-tooltip',
            },
            [activeTooltip.value && tooltipNode],
          ),
          slots.default ? slots.default() : null,
        ],
      );
    };
  },
});
