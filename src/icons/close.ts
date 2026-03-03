import { defineComponent, h } from 'vue';
import './icons.scss';

export default defineComponent({
  name: 'VsIconClose',
  props: {
    hover: { type: [String, Boolean], default: null },
  },
  setup(props, { attrs }) {
    return () =>
      h('i', {
        class: ['sv-icon-close', props.hover ? `sv-icon-hover-${props.hover}` : ''],
        ...attrs,
      });
  },
});
