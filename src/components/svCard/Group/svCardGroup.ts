import { defineComponent, h, ref } from 'vue';
import SvIconsArrow from '../../../icons/arrow';

export default defineComponent({
  name: 'SvCardGroup',
  setup(_, { slots }) {
    const cardsRef = ref<HTMLElement | null>(null);

    const prev = () => {
      const cards = cardsRef.value;
      if (!cards) return;
      cards.scrollTo(cards.scrollLeft - cards.clientWidth, 0);
    };

    const next = () => {
      const cards = cardsRef.value;
      if (!cards) return;
      cards.scrollTo(cards.scrollLeft + cards.clientWidth, 0);
    };

    return () => {
      const arrowPrev = h('button', { class: 'sv-card__group-prev', onClick: prev }, [
        h(SvIconsArrow),
      ]);

      const arrowNext = h('button', { class: 'sv-card__group-next', onClick: next }, [
        h(SvIconsArrow),
      ]);

      const space = h('div', { class: 'sv-card__group-space' });

      const cards = h('div', { class: 'sv-card__group-cards', ref: cardsRef }, [
        slots.default ? slots.default() : null,
        space,
      ]);

      return h('div', { class: 'sv-card__group' }, [arrowPrev, cards, arrowNext]);
    };
  },
});
