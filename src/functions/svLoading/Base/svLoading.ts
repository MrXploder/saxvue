import { defineComponent, h, ref, watch, nextTick, getCurrentInstance } from 'vue';
import { setColor, setVar } from '../../../util/index';

export default defineComponent({
  name: 'SvLoading',
  setup() {
    const text = ref<string | null>(null);
    const type = ref<string>('default');
    const color = ref<string | null>(null);
    const background = ref<string | null>(null);
    const opacity = ref<string | null>(null);
    const percent = ref<string | null>(null);
    const progress = ref<string | null>(null);
    const progressTransitionSpeed = ref<number>(0);
    const scale = ref<string | null>(null);
    const target = ref<HTMLElement | null>(null);
    const isVisible = ref<boolean>(false);

    const inst = getCurrentInstance();
    const proxy = inst && inst.proxy;

    watch(isVisible, () => {
      nextTick(() => {
        try {
          const el = proxy && (proxy.$el as HTMLElement | null);
          if (el) {
            setColor('color', color.value, el);
            setColor('background', background.value, el);
            if (opacity.value) setVar('opacity', opacity.value, el);
          }
        } catch (e) {
          /* ignore */
        }
      });
    });

    return () => {
      const animation = h('div', { class: ['sv-loading__load__animation'] }, [
        h('div', { class: 'sv-loading__load__percent' }, [percent.value]),
        h('div', { class: 'sv-loading__load__animation__1' }),
        h('div', { class: 'sv-loading__load__animation__2' }),
        h('div', { class: 'sv-loading__load__animation__3' }),
      ]);

      const textEl = h('div', { class: ['sv-loading__load__text'] }, text.value);

      const loading = h(
        'div',
        { class: ['sv-loading__load'], style: { transform: `scale(${scale.value})` } },
        [animation, textEl],
      );

      const progressEl = h('div', { class: ['sv-loading__progress'] }, [
        h('div', {
          class: 'sv-loading__progress__bar',
          style: {
            transform: `translateX(calc(-100% + ${progress.value}%))`,
            transition: `transform ${progressTransitionSpeed.value}ms ease`,
          },
        }),
      ]);

      return h(
        'transition',
        { name: 'loading' } as Record<string, string>,
        isVisible.value
          ? h(
              'div',
              {
                class: [
                  `sv-loading--${type.value || 'default'}`,
                  { 'sv-loading--target': !!target.value },
                  { 'sv-loading--background': !!background.value },
                ],
              },
              [loading, progress.value && progressEl],
            )
          : null,
      );
    };
  },
});
