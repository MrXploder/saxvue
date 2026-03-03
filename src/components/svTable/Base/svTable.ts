import { defineComponent, h, ref, onMounted, computed } from 'vue';

export default defineComponent({
  name: 'SvTable',
  props: {
    value: {},
    striped: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },
  emits: ['input'],
  setup(props, { emit, slots }) {
    const colspan = ref<number>(0);
    const theadRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (theadRef.value) {
        const tds = theadRef.value.querySelectorAll('th');
        colspan.value = tds.length;
      }
    });

    const isMultipleSelected = computed(() => Array.isArray(props.value));

    const selected = (val: unknown) => {
      if (isMultipleSelected.value) selectedMultiple(val);
      else emit('input', val);
    };

    const selectedMultiple = (val: unknown) => {
      const newVal = Array.isArray(props.value) ? (props.value as unknown[]).slice() : [];
      const idx = newVal.indexOf(val);
      if (idx !== -1) newVal.splice(idx, 1);
      else newVal.push(val);
      emit('input', newVal);
    };

    return () => {
      const footer = h('footer', { class: 'sv-table__footer' }, [
        slots.footer ? slots.footer() : null,
      ]);

      const header = h('header', { class: 'sv-table__header' }, [
        slots.header ? slots.header() : null,
      ]);

      const thead = h('thead', { ref: theadRef, class: 'sv-table__thead' }, [
        slots.thead ? slots.thead() : null,
      ]);

      const notFound = h('tbody', { class: 'sv-table_not-found' }, [
        h('tr', [
          h(
            'td',
            {
              colspan: colspan.value,
            },
            [slots.notFound ? slots.notFound() : 'No matching records found'],
          ),
        ]),
      ]);

      const tbody = h('tbody', { class: 'sv-table__tbody' }, [slots.tbody ? slots.tbody() : null]);

      const table = h(
        'div',
        {
          class: [
            'sv-table',
            {
              isSelectedValue: !!props.value,
              striped: props.striped,
              isMultipleSelected: isMultipleSelected.value,
            },
          ],
        },
        [h('table', {}, [thead, tbody, notFound])],
      );

      return h('div', { class: 'sv-table-content' }, [
        slots.header && header,
        table,
        slots.footer && footer,
      ]);
    };
  },
});
