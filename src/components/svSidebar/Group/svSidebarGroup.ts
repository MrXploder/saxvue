import { defineComponent, h, ref, onMounted, nextTick, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'SvSidebarGroup',
  props: {
    open: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const group = true;
    const openState = ref<boolean>(false);
    const contentRef = ref<HTMLElement | null>(null);

    const instance = getCurrentInstance();
    const parent =
      instance && instance.proxy
        ? ((instance.proxy as unknown as Record<string, unknown>).$parent as Record<
            string,
            unknown
          > | null)
        : null;

    // Watch prop open and adjust parent's content height when needed
    const handleOpen = (val: boolean) => {
      nextTick(() => {
        const scrollH = contentRef.value?.scrollHeight || 0;
        if (parent && parent.group) {
          try {
            const parentContent = (parent.$refs as Record<string, HTMLElement>).content;
            if (val) {
              parentContent.style.height = `${parentContent.scrollHeight + scrollH - 1}px`;
            } else {
              parentContent.style.height = `${parentContent.scrollHeight - scrollH + 1}px`;
            }
          } catch (e) {
            // ignore
          }
        }
      });
    };

    // mimic watch on prop
    if (props.open) {
      handleOpen(props.open);
    }

    const handleClickItem = (id: string) => {
      if (parent && typeof parent.handleClickItem === 'function')
        (parent.handleClickItem as (id: string) => void)(id);
    };

    const getValue = () => (parent ? parent.getValue : undefined);

    const beforeEnter = (el: Element) => {
      (el as HTMLElement).style.height = '0';
    };

    const enter = (el: Element, done: () => void) => {
      const scrollH = (el as HTMLElement).scrollHeight;
      (el as HTMLElement).style.height = scrollH - 1 + 'px';
      done();
    };

    const leave = (el: Element, done: () => void) => {
      (el as HTMLElement).style.minHeight = '0px';
      (el as HTMLElement).style.height = '0px';
      done();
    };

    onMounted(() => {
      const el = instance && instance.proxy ? instance.proxy.$el : null;
      if ((el && el.querySelector('.active')) || props.open) {
        openState.value = true;
      }
    });

    return () => {
      const header = h(
        'div',
        {
          class: 'sv-sidebar__group__header',
          onClick: () => {
            openState.value = !openState.value;
            handleOpen(openState.value);
          },
        },
        [slots.header ? slots.header() : null],
      );

      const content = h(
        'div',
        {
          class: 'sv-sidebar__group__content',
          ref: contentRef,
        },
        [slots.default ? slots.default() : null],
      );

      const transition = h(
        'transition',
        {
          onBeforeEnter: beforeEnter,
          onEnter: enter,
          onLeave: leave,
        },
        [openState.value ? content : null],
      );

      return h(
        'div',
        {
          class: ['sv-sidebar__group', { open: openState.value }],
        },
        [header, transition],
      );
    };
  },
});
