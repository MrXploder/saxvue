import { defineComponent, h, getCurrentInstance, ref } from 'vue';

export default defineComponent({
  name: 'SvNavbarGroup',
  setup(_, { slots }) {
    const inst = getCurrentInstance();
    const proxy = inst && inst.proxy;
    const parent = proxy ? (proxy.$parent as unknown as Record<string, unknown>) : null;
    const itemRef = ref<HTMLElement | null>(null);

    const setModel = (id: string) => {
      if (parent && typeof parent.setModel === 'function')
        (parent.setModel as (id: string) => void)(id);
    };

    const setLeftLine = () => {
      try {
        const left = (proxy!.$el as HTMLElement).offsetLeft;
        if (parent && typeof parent.setLeftLine === 'function')
          (parent.setLeftLine as (v: number) => void)(left);
        const width = itemRef.value ? itemRef.value.scrollWidth : 0;
        if (parent && typeof parent.setWidthLine === 'function')
          (parent.setWidthLine as (v: number) => void)(width);
      } catch (e) {
        // ignore
      }
    };

    const setWidthLine = () => {
      /* no-op placeholder kept for API compatibility */
    };

    return () => {
      const item = h(
        'button',
        {
          class: 'sv-navbar__group__item',
          ref: itemRef,
        },
        [slots.default ? slots.default() : null],
      );

      const items = h(
        'div',
        {
          class: 'sv-navbar__group__items',
        },
        [slots.items ? slots.items() : null],
      );

      return h(
        'div',
        {
          class: 'sv-navbar__group',
        },
        [item, items],
      );
    };
  },
});
