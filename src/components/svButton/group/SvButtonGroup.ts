import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'SvButtonGroup',
  setup(_, { slots }) {
    return () => h('div', { class: 'sv-button-group' }, slots.default ? slots.default() : null);
  },
});
