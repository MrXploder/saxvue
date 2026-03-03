import { defineComponent, h, onMounted, nextTick, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'SvNavbarItem',
  props: {
    active: { type: Boolean, default: false },
    to: { type: String, default: undefined },
    id: { type: String, default: undefined },
    href: { type: String, default: undefined },
    target: { type: String, default: '_blank' },
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const inst = getCurrentInstance();
    const proxy = inst && inst.proxy;
    const parent = proxy ? (proxy.$parent as unknown as Record<string, unknown>) : null;
    const router = proxy
      ? ((proxy as unknown as Record<string, unknown>).$router as
          | { push: (to: string) => void }
          | undefined)
      : null;

    const handleLine = () => {
      nextTick(() => {
        if (props.active && proxy) {
          const left = (proxy.$el as HTMLElement).offsetLeft;
          if (parent && typeof parent.setLeftLine === 'function')
            (parent.setLeftLine as (v: number) => void)(left);
          const width = (proxy.$el as HTMLElement).scrollWidth;
          if (parent && typeof parent.setWidthLine === 'function')
            (parent.setWidthLine as (v: number) => void)(width);
        }
      });
    };

    const handleClick = () => {
      if (props.to && router) {
        router.push(props.to);
      } else if (props.href) {
        window.open(props.href, props.target);
      }
    };

    const handleActive = () => {
      if (parent && typeof parent.setModel === 'function')
        (parent.setModel as (id: string | undefined) => void)(props.id);
      handleLine();
    };

    onMounted(() => {
      setTimeout(() => {
        if (props.active && proxy) {
          const el = proxy.$el as HTMLElement;
          if (parent && typeof parent.setLeftLine === 'function')
            (parent.setLeftLine as (v: number) => void)(el.offsetLeft);
          if (parent && typeof parent.setWidthLine === 'function')
            (parent.setWidthLine as (v: number) => void)(el.scrollWidth);
        }
      }, 150);
    });

    return () =>
      h(
        'button',
        {
          class: ['sv-navbar__item', { active: props.active }],
          onClick: (evt: MouseEvent) => {
            emit('click', evt);
            handleLine();
            handleClick();
            handleActive();
          },
        },
        slots.default ? slots.default() : null,
      );
  },
});
