import { defineComponent, h, ref, watch, nextTick, type PropType } from 'vue';

export default defineComponent({
  name: 'SvTableExpand',
  props: {
    colspan: { type: Number, default: 0 },
    // optional callback invoked when the component wants the host to remove it
    onUnmounted: { type: Function as PropType<() => void>, default: null },
  },
  setup(props, { slots, expose }) {
    const hidden = ref(true);
    const contentRef = ref<HTMLElement | null>(null);

    watch(hidden, (val) => {
      if (val) {
        // allow transition to run, then notify host to remove
        setTimeout(() => {
          if (props.onUnmounted) props.onUnmounted();
        }, 300);
      } else {
        nextTick(() => {
          const content = contentRef.value;
          if (content) content.style.height = `${content.scrollHeight}px`;
        });
      }
    });

    const setHidden = (val: boolean) => {
      hidden.value = val;
    };

    // expose methods via the component proxy
    expose({ hidden, contentRef, setHidden });

    return () => {
      const subContent = h(
        'div',
        {
          class: 'sv-table__expand__td__content__sub',
        },
        slots.default ? slots.default() : null,
      );

      const content = h(
        'div',
        {
          class: 'sv-table__expand__td__content',
          ref: contentRef,
        },
        [subContent],
      );

      const td = h(
        'td',
        {
          class: 'sv-table__expand__td',
          colspan: props.colspan,
        },
        [content],
      );

      const expand = h(
        'tr',
        {
          class: 'sv-table__tr__expand',
        },
        [td],
      );

      return h(
        'transition',
        {
          name: 'fade-expand',
        },
        [!hidden.value && expand],
      );
    };
  },
});
