import { defineComponent, h } from 'vue';
import './icons.scss';

export default defineComponent({
  name: 'VsIconCheck',
  props: {
    indeterminate: { type: Boolean, default: false },
  },
  setup(props, { attrs }) {
    return () =>
      h(
        'i',
        {
          class: ['sv-icon-check', { indeterminate: props.indeterminate }],
          ...attrs,
        },
        [h('span', {}, [h('div', { class: 'line1' }), h('div', { class: 'line2' })])],
      );
  },
});
