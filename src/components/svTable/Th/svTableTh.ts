import { defineComponent, h } from 'vue';
import SvIconsArrow from '../../../icons/arrow';

export default defineComponent({
  name: 'SvTableTh',
  props: {
    sort: { type: Boolean, default: false },
  },
  setup(props, { slots, attrs }) {
    return () => {
      const icon2 = h(SvIconsArrow, { class: 'icon-sort-2' });
      const icon = h(SvIconsArrow, { class: 'icon-sort-1' });

      const icons = h('div', { class: 'sv-table__th__content__icons' }, [icon, icon2]);

      const content = h('div', { class: 'sv-table__th__content' }, [
        slots.default ? slots.default() : null,
        props.sort ? icons : null,
      ]);

      return h(
        'th',
        Object.assign({}, attrs, {
          class: ['sv-table__th', { sort: props.sort }, attrs.class],
        }),
        [content],
      );
    };
  },
});
