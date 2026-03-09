import { defineComponent, h, getCurrentInstance } from 'vue';
import { getColor } from '../../../util/index';

export default defineComponent({
  name: 'SvInput',
  props: {
    modelValue: { default: '' },
    labelPlaceholder: { default: '' },
    label: { default: '' },
    block: { type: Boolean, default: false },
    iconAfter: { type: Boolean, default: false },
    visiblePassword: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    color: { type: String, default: null },
    state: { type: String, default: null },
    progress: { type: Number, default: 0 },
    border: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    transparent: { type: Boolean, default: false },
    textWhite: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
  },
  emits: ['update:modelValue', 'click-icon'],
  setup(props, { slots, attrs, emit }) {
    const instance = getCurrentInstance();
    const uid = instance ? instance.uid : Math.random().toString(36).slice(2);

    const getId = () => `sv-input--${(attrs as Record<string, unknown>).id || uid}`;

    const hasColor = () =>
      !!(
        props.color ||
        (attrs as Record<string, unknown>).primary ||
        (attrs as Record<string, unknown>).danger ||
        (attrs as Record<string, unknown>).success ||
        (attrs as Record<string, unknown>).dark ||
        (attrs as Record<string, unknown>).warn
      );

    const beforeEnter = (el: Element) => {
      (el as HTMLElement).style.height = '0';
    };
    const enter = (el: Element, done: () => void) => {
      const scrollH = (el as HTMLElement).scrollHeight;
      (el as HTMLElement).style.height = scrollH - 1 + 'px';
      done();
    };
    const leave = (el: Element) => {
      (el as HTMLElement).style.minHeight = '0px';
      (el as HTMLElement).style.height = '0px';
    };

    const getMessage = (type: string) => {
      return slots[`message-${type}`]
        ? h('transition', { onBeforeEnter: beforeEnter, onEnter: enter, onLeave: leave }, [
            h(
              'div',
              { class: ['sv-input__message', `sv-input__message--${type}`] },
              slots[`message-${type}`]!(),
            ),
          ])
        : null;
    };

    const onInput = (evt: Event) =>
      emit('update:modelValue', (evt.target as HTMLInputElement).value);
    const onClickIcon = (evt: Event) => emit('click-icon', (evt.target as HTMLInputElement).value);

    return () => {
      const input = h(
        'input',
        Object.assign({}, attrs, {
          class: [
            'sv-input',
            {
              'sv-input--has-icon': !!slots.icon,
              'sv-input--has-icon--after': !!props.iconAfter,
            },
          ],
          value: props.modelValue,
          id: getId(),
          placeholder: '',
          type: props.visiblePassword ? 'text' : (attrs as Record<string, unknown>).type,
          onInput,
        }),
      );

      const label = h(
        'label',
        {
          for: getId(),
          class: [
            'sv-input__label',
            {
              'sv-input__label--placeholder': props.labelPlaceholder,
              'sv-input__label--hidden':
                props.modelValue !== '' ||
                (attrs as Record<string, unknown>).type == 'date' ||
                (attrs as Record<string, unknown>).type == 'time',
              'sv-input__label--label': props.label,
            },
          ],
        },
        [
          props.label ||
            String((attrs as Record<string, unknown>).placeholder || '') ||
            props.labelPlaceholder,
        ],
      );

      const placeholder = h(
        'label',
        {
          for: getId(),
          class: ['sv-input__label', { 'sv-input__label--hidden': props.modelValue !== '' }],
        },
        [String((attrs as Record<string, unknown>).placeholder || '')],
      );

      const icon = slots.icon
        ? h(
            'span',
            {
              class: [
                'sv-input__icon',
                {
                  'sv-input__icon--after': props.iconAfter,
                  'sv-input__icon--click': !!(attrs as Record<string, unknown>)['onClick-icon'],
                },
              ],
              onClick: onClickIcon,
            },
            slots.icon(),
          )
        : null;

      const messageSuccess = getMessage('success');
      const messageDanger = getMessage('danger');
      const messageWarn = getMessage('warn');
      const messagePrimary = getMessage('primary');

      const progressBar =
        props.progress > 0
          ? h(
              'div',
              {
                class: [
                  'sv-input__progress',
                  {
                    'sv-input__progress--danger': props.progress < 33,
                    'sv-input__progress--warn': props.progress < 66 && props.progress > 33,
                    'sv-input__progress--success': props.progress > 66,
                  },
                ],
              },
              [
                h('div', {
                  class: 'sv-input__progress__bar',
                  style: { width: `${props.progress}%` },
                }),
              ],
            )
          : null;

      const loading = h('div', { class: 'sv-input__loading' });

      const effects = h('div', { class: 'sv-input__affects' }, [
        h('div', { class: 'sv-input__affects__1' }),
        h('div', { class: 'sv-input__affects__2' }),
        h('div', { class: 'sv-input__affects__3' }),
        h('div', { class: 'sv-input__affects__4' }),
      ]);

      const inputContent = h(
        'div',
        {
          class: [
            'sv-input-content',
            {
              'sv-input-content--has-color': hasColor(),
              'sv-input-content--has-label': props.label || props.labelPlaceholder,
            },
          ],
        },
        [
          input,
          props.label ? placeholder : null,
          label,
          slots.icon ? icon : null,
          props.loading ? loading : null,
          effects,
        ],
      );

      return h(
        'div',
        {
          class: [
            'sv-input-parent',
            `sv-input-parent--state-${props.state}`,
            {
              'sv-input-parent--border': !!props.border,
              'sv-input-parent--shadow': !!props.shadow,
              'sv-input-content--has-label': props.label || props.labelPlaceholder,
              block: props.block,
              transparent: props.transparent,
              textWhite: props.textWhite,
              square: props.square,
              'sv-component--primary':
                !(attrs as Record<string, unknown>).danger &&
                !(attrs as Record<string, unknown>).success &&
                !(attrs as Record<string, unknown>).warn &&
                !(attrs as Record<string, unknown>).dark &&
                !props.color,
            },
          ],
          style: {
            ['--sv-color']: props.color ? getColor(props.color) : '',
          },
        },
        [inputContent, progressBar, messageSuccess, messageDanger, messageWarn, messagePrimary],
      );
    };
  },
});
