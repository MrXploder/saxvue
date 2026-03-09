import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'SvTableTd',
  props: {
    checkbox: { type: Boolean, default: false },
    edit: { type: Boolean, default: false },
  },
  emits: ['click'],
  setup(props, { slots, attrs, emit }) {
    return () => {
      return h(
        'td',
        Object.assign({}, attrs, {
          class: [
            {
              'sv-table__td': true,
              isCheckbox: props.checkbox,
              isEdit: props.edit,
            },
            attrs.class,
          ],
          onClick: (evt: MouseEvent) => emit('click', evt),
        }),
        slots.default ? slots.default() : null,
      );
    };
  },
});
