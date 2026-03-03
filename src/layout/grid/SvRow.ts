import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'SvRow',
  props: {
    w: { type: Number, default: 12 },
    justify: { type: String, default: 'flex-start' },
    align: { type: String, default: 'flex-start' },
    direction: { type: String, default: 'row' },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: 'sv-row',
          style: {
            justifyContent: props.justify,
            alignItems: props.align,
            flexDirection: props.direction,
          },
        },
        slots.default ? slots.default() : null,
      );
  },
});
