import { defineComponent, h } from 'vue';
import './icons.scss';

export default defineComponent({
  name: 'VsIconPlus',
  props: {
    less: { type: Boolean, default: false },
  },
  setup(props, { attrs }) {
    return () =>
      h('i', {
        class: ['sv-icon-plus', { less: props.less }],
        ...attrs,
      });
  },
});
