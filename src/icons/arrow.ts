import { defineComponent, h } from 'vue';
import './icons.scss';

export default defineComponent({
  name: 'VsIconArrow',
  props: {
    less: { type: Boolean, default: false },
  },
  setup(props, { attrs }) {
    return () =>
      h('i', {
        class: ['sv-icon-arrow', { less: props.less }],
        ...attrs,
      });
  },
});
