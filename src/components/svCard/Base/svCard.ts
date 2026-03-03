import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'SvCard',
  props: {
    type: { type: [String, Number], default: '1' },
  },
  setup(props, { slots, attrs }) {
    return () => {
      const title = slots.title ? h('div', { class: 'sv-card__title' }, slots.title()) : null;

      const text = h('div', { class: 'sv-card__text' }, [title, slots.text ? slots.text() : null]);

      const buttons = slots.buttons
        ? h('div', { class: 'sv-card__buttons' }, slots.buttons())
        : null;

      const interactions = slots.interactions
        ? h('div', { class: 'sv-card__interactions' }, slots.interactions())
        : null;

      const img = slots.img
        ? h('div', { class: 'sv-card__img' }, [slots.img(), interactions])
        : null;

      const card = h('div', Object.assign({ class: 'sv-card' }, attrs), [
        img,
        slots.text ? text : null,
        slots.buttons ? buttons : null,
      ]);

      return h('div', { class: ['sv-card-content', `type-${props.type}`] }, [card]);
    };
  },
});
