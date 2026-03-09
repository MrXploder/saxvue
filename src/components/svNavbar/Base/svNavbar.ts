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
import { svColorProps } from '../../../mixins/component';

export default defineComponent({
  name: 'SvNavbar',
  props: {
    ...svColorProps,
    fixed: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    shadowScroll: { type: Boolean, default: false },
    hideScroll: { type: Boolean, default: false },
    textWhite: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    paddingScroll: { type: Boolean, default: false },
    notLine: { type: Boolean, default: false },
    leftCollapsed: { type: Boolean, default: false },
    centerCollapsed: { type: Boolean, default: false },
    rightCollapsed: { type: Boolean, default: false },
    targetScroll: { default: null },
  },
  emits: ['update:modelValue', 'collapsed'],
  setup(props, { slots, emit, attrs }) {
    const leftLine = ref<number>(0);
    const widthLine = ref<number>(0);
    const scrollTop = ref<number>(0);
    const collapsedWidth = ref<number>(0);
    const hidden = ref<boolean>(false);
    const shadowActive = ref<boolean>(false);
    const paddingScrollActive = ref<boolean>(false);
    const lineNotTransition = ref<boolean>(false);
    const collapsedForced = ref<boolean>(false);

    const rootRef = ref<HTMLElement | null>(null);
    const leftRef = ref<HTMLElement | null>(null);
    const centerRef = ref<HTMLElement | null>(null);
    const rightRef = ref<HTMLElement | null>(null);

    const handleScroll = () => {
      if (props.hideScroll || props.shadowScroll || props.paddingScroll) {
        const target = props.targetScroll
          ? document.querySelector(String(props.targetScroll))
          : window;
        if (target === window) window.addEventListener('scroll', scrollHandler);
        else (target as Element).addEventListener('scroll', scrollHandler as EventListener);
      }
    };

    const scrollHandler = () => {
      const scrollTargetEl = props.targetScroll
        ? (document.querySelector(String(props.targetScroll)) as HTMLElement | null)
        : null;
      const currentScrollTop = scrollTargetEl ? scrollTargetEl.scrollTop : window.pageYOffset;
      if (props.hideScroll) {
        hidden.value = Math.sign(currentScrollTop - scrollTop.value) === 1;
      }

      if (props.shadowScroll) {
        shadowActive.value = currentScrollTop > 0;
      }

      if (props.paddingScroll) {
        paddingScrollActive.value = currentScrollTop > 0;
      }
      scrollTop.value = currentScrollTop;
    };

    const setModel = (id: string) => emit('update:modelValue', id);

    const setLeftLine = (left: number, transition: boolean = true) => {
      lineNotTransition.value = !transition;
      nextTick(() => {
        leftLine.value = left;
      });
    };

    const setWidthLine = (width: number) => {
      nextTick(() => {
        widthLine.value = width;
      });
    };

    const handleResize = () => {
      const root = rootRef.value as HTMLElement | null;
      const active = root
        ? (root.querySelector('.sv-navbar__item.active') as HTMLElement | null)
        : null;
      if (active) {
        setLeftLine(active.offsetLeft, false);
      } else {
        widthLine.value = 0;
      }

      if (leftRef.value && centerRef.value && rightRef.value) {
        if (props.leftCollapsed || props.centerCollapsed || props.rightCollapsed) {
          if ((root ? root.offsetWidth : 0) < collapsedWidth.value) {
            collapsedForced.value = true;
          }
        }
      }

      emit('collapsed', collapsedForced.value ? true : false);

      if (root && root.offsetWidth < collapsedWidth.value) {
        emit('collapsed', true);
      } else {
        emit('collapsed', false);
        collapsedForced.value = false;
      }
    };

    watch([() => props.hideScroll, () => props.paddingScroll, () => props.shadowScroll], () => {
      handleScroll();
    });

    onMounted(() => {
      setTimeout(() => {
        const leftEl = leftRef.value as HTMLElement | null;
        const centerEl = centerRef.value as HTMLElement | null;
        const rightEl = rightRef.value as HTMLElement | null;
        collapsedWidth.value =
          (leftEl ? leftEl.offsetWidth : 0) +
          (centerEl ? centerEl.offsetWidth : 0) +
          (rightEl ? rightEl.offsetWidth : 0) +
          150;
        const root = rootRef.value as HTMLElement | null;
        if (root && root.offsetWidth < collapsedWidth.value) {
          collapsedForced.value = true;
          emit('collapsed', true);
          widthLine.value = 0;
          handleResize();
        }
      }, 150);

      handleScroll();
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
      const target = props.targetScroll
        ? document.querySelector(String(props.targetScroll))
        : window;
      if (target === window) window.removeEventListener('scroll', scrollHandler);
      else (target as Element).removeEventListener('scroll', scrollHandler as EventListener);
    });

    const inst = getCurrentInstance();
    const getColor = inst && (inst.proxy as unknown as Record<string, unknown>).getColor;

    return () => {
      const left = h('div', { class: 'sv-navbar__left', ref: leftRef }, [
        slots.left ? slots.left() : null,
      ]);

      const center = h('div', { class: 'sv-navbar__center', ref: centerRef }, [
        slots.default ? slots.default() : null,
      ]);

      const right = h('div', { class: 'sv-navbar__right', ref: rightRef }, [
        slots.right ? slots.right() : null,
      ]);

      const line = h('div', {
        class: ['sv-navbar__line', { notTransition: lineNotTransition.value }],
        style: { left: `${leftLine.value}px`, width: `${widthLine.value}px` },
      });

      const navbar = h('div', { class: 'sv-navbar' }, [
        (props.leftCollapsed ? !collapsedForced.value : true) && left,
        (props.centerCollapsed ? !collapsedForced.value : true) && center,
        (props.rightCollapsed ? !collapsedForced.value : true) && right,
      ]);

      return h(
        'div',
        {
          ref: rootRef,
          class: [
            'sv-navbar-content',
            {
              fixed: props.fixed,
              shadow: props.shadow,
              hidden: hidden.value,
              shadowActive: shadowActive.value,
              textWhite: props.textWhite,
              paddingScroll: props.paddingScroll,
              paddingScrollActive: paddingScrollActive.value,
              svNavbarSquare: props.square,
            },
            { [`sv-component--primary`]: !!props.primary },
            { [`sv-component--danger`]: !!props.danger },
            { [`sv-component--warn`]: !!props.warn },
            { [`sv-component--success`]: !!props.success },
            { [`sv-component--dark`]: !!props.dark },
            { [`sv-component--is-color`]: !!props.color },
          ],
          style: { ['--sv-color']: props.color ? getColor : '' },
          ...attrs,
        },
        [navbar, !props.notLine && line],
      );
    };
  },
});
