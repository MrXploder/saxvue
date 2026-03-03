import { defineComponent, h, ref, nextTick, watch, onMounted, getCurrentInstance } from 'vue';
import SvIconsArrow from '../../../icons/arrow';
import { svColorProps, useSvComponent } from '../../../mixins/component';

export default defineComponent({
  name: 'SvPagination',
  props: {
    ...svColorProps,
    value: {},
    infinite: { type: Boolean, default: false },
    progress: { type: Boolean, default: false },
    notMargin: { type: Boolean, default: false },
    buttonsDotted: { type: Boolean, default: false },
    notArrows: { type: Boolean, default: false },
    onlyArrows: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    disabledItems: { type: Array as () => number[], default: (): number[] => [] },
    loadingItems: { type: Array as () => number[], default: (): number[] => [] },
    length: { type: Number, default: 0 },
    max: { type: Number, default: 9 },
    dottedNumber: { type: Number, default: 5 },
  },
  emits: ['input'],
  setup(props, { emit, slots }) {
    const val = ref<number>(0);
    const leftActive = ref<number>(42);
    const activeClassMove = ref<boolean>(false);
    const paginationRef = ref<HTMLElement | null>(null);
    const buttonRefs = ref<Record<string, HTMLElement>>({});
    const inst = getCurrentInstance();
    const proxy = inst && inst.proxy;
    const { getColor } = useSvComponent(props);

    const isDisabledItem = (item: number) => (props.disabledItems || []).indexOf(item) !== -1;
    const isLoadingItem = (item: number) => (props.loadingItems || []).indexOf(item) !== -1;

    const setValuePage = (NumberPage: number) => emit('input', NumberPage);

    const handleLength = () => {
      nextTick(() => {
        try {
          const paginationEl = paginationRef.value;
          const buttonEl = buttonRefs.value[`btn${props.value}`];
          if (!paginationEl || !buttonEl) return;
          const offsetLeftPagination = paginationEl.offsetLeft;
          leftActive.value = buttonEl.offsetLeft + offsetLeftPagination;
          setTimeout(() => {
            activeClassMove.value = false;
          }, 300);
        } catch (e) {
          /* ignore */
        }
      });
    };

    watch(() => props.length, handleLength);

    const handleValue = (valNew: number, prevValue: number) => {
      if (isDisabledItem(valNew) || isLoadingItem(valNew)) {
        let newVal = valNew;
        if (valNew > prevValue) newVal += 1;
        else newVal -= 1;

        if (newVal > props.length) newVal = props.infinite ? 1 : prevValue;
        else if (newVal <= 0) newVal = props.infinite ? props.length : prevValue;

        val.value = newVal;
        setValuePage(newVal);
      } else {
        val.value = valNew;
        try {
          if (paginationRef.value) {
            activeClassMove.value = true;
            nextTick(() => {
              const paginationEl = paginationRef.value;
              const buttonEl = buttonRefs.value[`btn${valNew}`];
              if (!paginationEl || !buttonEl) return;
              const offsetLeftPagination = paginationEl.offsetLeft;
              leftActive.value = buttonEl.offsetLeft + offsetLeftPagination;
              setTimeout(() => {
                activeClassMove.value = false;
              }, 300);
            });
          }
        } catch (e) {
          /* ignore */
        }
      }
    };

    watch(
      () => props.value,
      (v: unknown, ov: unknown) => handleValue(Number(v), Number(ov)),
    );

    const renderDotted = (text: string = '...') => {
      return h(
        'div',
        {
          class: [
            'sv-pagination__dotted',
            { next: props.value == props.length ? false : text == '...>' },
          ],
          onClick: () => {
            let newVal = (props.value == props.length ? false : text == '...>')
              ? (val.value += props.dottedNumber)
              : (val.value -= props.dottedNumber);
            if (newVal > props.length) newVal = props.length;
            else if (newVal < 1) newVal = 1;
            setValuePage(newVal);
          },
        },
        [
          h('span', { class: 'dotted' }, ['...']),
          h('span', { class: 'con-arrows' }, [h(SvIconsArrow), h(SvIconsArrow)]),
        ],
      );
    };

    const renderButton = (NumberPage: number = 1) =>
      h(
        'button',
        {
          ref: (el: Element | null) => {
            if (el) buttonRefs.value[`btn${NumberPage}`] = el as HTMLElement;
          },
          class: [
            'sv-pagination__button',
            {
              active: NumberPage == props.value,
              prevActive: NumberPage == Number(props.value) - 1,
              nextActive: NumberPage == Number(props.value) + 1,
              disabled: isDisabledItem(NumberPage),
              loading: isLoadingItem(NumberPage),
            },
          ],
          onClick: () => setValuePage(NumberPage),
        },
        props.buttonsDotted ? '' : `${NumberPage}`,
      );

    const renderButtons = (array: (number | string)[]) =>
      array.map((item: number | string) =>
        item === '...>' || item === '<...'
          ? renderDotted(item as string)
          : renderButton(item as number),
      );

    const getButtons = (start: number = 1, end: number = 7) => {
      const buttons: number[] = [];
      for (let i = Math.max(1, start); i <= end; i++) buttons.push(i);
      return buttons;
    };

    const isMobile = () => {
      if (typeof window === 'undefined') return false;
      return window.innerWidth < 600;
    };

    const getPages = () => {
      const length = Number(props.length);
      const max = isMobile() ? 5 : props.max;
      const even = max % 2 === 0 ? 1 : 0;
      const prevRange = Math.floor(max / 2);
      const nextRange = length - prevRange + 1 + even;

      if (
        Number(props.value) > prevRange &&
        Number(props.value) <= nextRange &&
        !props.buttonsDotted
      ) {
        const start = Number(props.value) - prevRange + 2;
        const end = Number(props.value) + prevRange - 2 - even;
        return renderButtons([1, '<...', ...getButtons(start, end), '...>', props.length]);
      } else if (!props.buttonsDotted && props.length > 7) {
        return renderButtons([
          ...getButtons(1, prevRange),
          '...>',
          ...getButtons(nextRange, length),
        ]);
      } else if (props.buttonsDotted || props.length <= 7) {
        return renderButtons([...getButtons(1, props.length == 0 ? 1 : props.length)]);
      }

      return [];
    };

    const getProgress = () => {
      let percent = 0;
      percent = (Number(props.value) * 100) / props.length;
      return percent;
    };

    onMounted(() => {
      val.value = Number(props.value);
      // call handleValue with previous value as val+1 to match previous behavior
      handleValue(Number(props.value), (val.value += 1));
    });

    return () => {
      const active = h(
        'div',
        {
          class: ['sv-pagination__active', { move: activeClassMove.value }],
          style: { left: `${leftActive.value}px` },
        },
        props.buttonsDotted ? '' : String(props.value),
      );

      const pagination = h('div', { class: 'sv-pagination', ref: paginationRef }, [getPages()]);

      const prev = h(
        'button',
        {
          class: ['sv-pagination__arrow', 'prev'],
          attrs: { disabled: props.infinite ? false : val.value <= 1 } as Record<string, unknown>,
          onClick: () => {
            const newVal = (val.value -= 1);
            if (newVal > 0) setValuePage(newVal);
            else if (props.infinite) setValuePage(props.length);
          },
        },
        [slots.arrowPrev ? slots.arrowPrev() : h(SvIconsArrow)],
      );

      const next = h(
        'button',
        {
          class: ['sv-pagination__arrow', 'next'],
          attrs: { disabled: props.infinite ? false : val.value >= props.length } as Record<
            string,
            unknown
          >,
          onClick: () => {
            const newVal = (val.value += 1);
            if (newVal <= props.length) setValuePage(newVal);
            else if (props.infinite) setValuePage(1);
          },
        },
        [slots.arrowNext ? slots.arrowNext() : h(SvIconsArrow)],
      );

      const slot = h('div', { class: 'sv-pagination__slot' }, [
        slots.default ? slots.default() : null,
      ]);

      const progressEl = h('div', { class: 'sv-pagination__progress' }, [
        h('div', { class: 'progress', style: { width: `${getProgress()}%` } }),
      ]);

      return h(
        'div',
        {
          class: [
            'sv-pagination-content',
            {
              buttonsDotted: props.buttonsDotted,
              circle: props.circle,
              square: props.square,
              disabled: props.disabled,
              notMargin: props.notMargin,
            },
            {
              [`sv-component--primary`]:
                !props.danger && !props.success && !props.warn && !props.dark && !props.color,
            },
            { [`sv-component--danger`]: !!props.danger },
            { [`sv-component--warn`]: !!props.warn },
            { [`sv-component--success`]: !!props.success },
            { [`sv-component--dark`]: !!props.dark },
          ],
          style: { ['--sv-color']: props.color ? getColor : '' },
        },
        [
          !props.onlyArrows && !slots.default && active,
          !props.notArrows && prev,
          slots.default && slot,
          !props.onlyArrows && !slots.default && pagination,
          !props.notArrows && next,
          props.progress && progressEl,
        ],
      );
    };
  },
});
