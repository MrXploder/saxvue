import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'SvCol',
  props: {
    w: { type: [String, Number], default: '12' },
    offset: { type: [String, Number], default: '0' },
    order: { type: [String, Number], default: '0' },
    lg: { type: [String, Number], default: '0' },
    sm: { type: [String, Number], default: '0' },
    xs: { type: [String, Number], default: '0' },
    type: { type: String, default: 'block' },
    justify: { type: String, default: 'flex-start' },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: [
            'sv-col',
            `sv-col--w-${props.w}`,
            `sv-col--offset-${props.offset}`,
            `sv-col--lg-${props.lg}`,
            `sv-col--sm-${props.sm}`,
            `sv-col--xs-${props.xs}`,
          ],
          style: {
            order: props.order,
            display: props.type,
            justifyContent: props.justify,
          },
        },
        slots.default ? slots.default() : null,
      );
  },
});
