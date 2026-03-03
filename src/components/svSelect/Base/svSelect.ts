import {
  defineComponent,
  h,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
  getCurrentInstance,
  VNode,
} from 'vue';
import SvIconsArrow from '../../../icons/arrow';
import SvIconsClose from '../../../icons/close';
import { insertBody, setCords, getColor } from '../../../util/index';
import { svColorProps } from '../../../mixins/component';

export default defineComponent({
  name: 'SvSelect',
  props: {
    ...svColorProps,
    value: { default: null },
    multiple: { type: Boolean, default: false },
    filter: { type: Boolean, default: false },
    placeholder: { type: String, default: '' },
    labelPlaceholder: { type: String, default: '' },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    collapseChips: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    state: { type: String, default: null },
    block: { type: Boolean, default: false },
  },
  emits: ['input', 'change', 'blur', 'focus'],
  setup(props, { slots, attrs, emit }) {
    const renderSelect = ref(false);
    const activeOptions = ref(false);
    const valueLabel = ref<string | Array<{ label: string; value: string | number }> | null>(null);
    const hoverOption = ref(-1);
    const uids = ref<(string | number)[]>([]);
    const childOptions = ref<
      Array<{ value: string | number; label: string; disabled?: boolean; $el?: HTMLElement }>
    >([]);
    const targetSelect = ref(false);
    const targetSelectInput = ref(false);
    const targetClose = ref(false);
    const activeFilter = ref(false);
    const textFilter = ref<string | null>('');
    const childVisibles = ref(0);

    const selectRef = ref<HTMLElement | null>(null);
    const optionsRef = ref<HTMLElement | null>(null);
    const contentRef = ref<HTMLElement | null>(null);
    const inputRef = ref<HTMLElement | null>(null);
    const chipsRef = ref<HTMLElement | null>(null);
    const chipsInputRef = ref<HTMLInputElement | null>(null);
    const placeholderRef = ref<HTMLElement | null>(null);

    const instance = getCurrentInstance();
    const uid = instance ? instance.uid : Math.random().toString(36).slice(2);

    const insertOptions = () => {
      const optionsEl = optionsRef.value;
      if (!optionsEl) return;
      insertBody(optionsEl, document.body);
      setCords(optionsEl, selectRef.value!);
    };

    const clickOption = (value: string | number, label: string) => {
      if (props.multiple) {
        const oldVal = Array.isArray(props.value) ? [...props.value] : [];
        const idx = oldVal.indexOf(value);
        if (idx === -1) oldVal.push(value);
        else oldVal.splice(idx, 1);
        emit('input', oldVal);
      } else {
        emit('input', value);
        valueLabel.value = label;
      }

      setTimeout(() => {
        if (props.multiple && activeOptions.value && chipsRef.value) {
          (chipsRef.value as HTMLElement).focus();
        }
      }, 10);
      if (!props.multiple) {
        handleBlur();
      }
    };

    const setHover = () => {
      let index = -1;
      childOptions.value.forEach((item, i: number) => {
        if (item.value == props.value) index = i;
      });
      hoverOption.value = index;
    };

    const getValue = () => {
      const options = childOptions.value;
      const filterOptions = options.filter((option) => {
        return typeof props.value == 'number'
          ? props.value == option.value
          : Array.isArray(props.value) && props.value.indexOf(option.value) !== -1;
      });
      const label: Array<{ label: string; value: string | number }> = [];
      filterOptions.forEach((item) => {
        label.push({ label: item.label, value: item.value });
      });
      if (Array.isArray(props.value)) {
        label.sort((a, b) => props.value.indexOf(a.value) - props.value.indexOf(b.value));
      }
      valueLabel.value = label;
    };

    const getValueLabel = () => {
      const vl = valueLabel.value;
      const labels: string[] = [];
      if (Array.isArray(vl)) {
        vl.forEach((item) => labels.push(item.label));
      } else {
        return vl;
      }
      return labels;
    };

    const handleBlur = (evt?: FocusEvent) => {
      if (!props.multiple) {
        activeOptions.value = false;
      } else {
        if (!evt || !evt.relatedTarget) {
          activeOptions.value = false;
        } else if (!targetSelectInput.value || (!targetSelect.value && !activeOptions.value)) {
          activeOptions.value = false;
        }
      }
      if (props.filter) activeFilter.value = false;
      emit('blur');
    };

    const handleKeydown = (evt: KeyboardEvent) => {
      const optionsEl = optionsRef.value;
      // Reposition options dropdown after DOM update
      nextTick(() => {
        if (optionsEl && selectRef.value) setCords(optionsEl, selectRef.value);
      });
      if (evt.code == 'ArrowDown') {
        evt.preventDefault();
        if (hoverOption.value < childOptions.value.length - 1) hoverOption.value++;
        else hoverOption.value = 0;
      } else if (evt.code == 'ArrowUp') {
        evt.preventDefault();
        if (hoverOption.value > 0) hoverOption.value--;
        else hoverOption.value = childOptions.value.length - 1;
      } else if (evt.code == 'Enter') {
        evt.preventDefault();
        if (hoverOption.value !== -1) {
          const opt = childOptions.value[hoverOption.value];
          if (!opt.disabled) {
            clickOption(opt.value, opt.label);
            if (!props.multiple && inputRef.value) {
              handleBlur();
              (inputRef.value as HTMLElement).blur();
            }
          }
        }
      }

      if (hoverOption.value !== -1 && contentRef.value) {
        const opt = childOptions.value[hoverOption.value];
        const optEl: HTMLElement | undefined = opt && opt.$el;
        if (optEl && contentRef.value) contentRef.value.scrollTop = optEl.offsetTop - 66;
      }
    };

    const notData = () => {
      const children = slots.default ? slots.default() : [];
      const childOpts: VNode[] = [];
      children.forEach((option: VNode) => {
        if (option && option.type) {
          childOpts.push(option);
        }
      });
      return childOpts.length == 0;
    };

    const handleWindowClick = (evt: MouseEvent) => {
      if (!targetSelectInput.value) handleBlur();
      if (props.filter && !activeOptions.value) activeFilter.value = false;
      if (evt.target == inputRef.value && activeOptions.value && !props.filter) {
        handleBlur();
        setTimeout(() => {
          if (inputRef.value) (inputRef.value as HTMLElement).blur();
        }, 100);
      }
    };

    const handleResize = () => {
      const optionsEl = optionsRef.value;
      if (!optionsEl) return;
      nextTick(() => {
        if (optionsEl && selectRef.value) setCords(optionsEl, selectRef.value);
      });
    };

    const handleScroll = () => {
      const optionsEl = optionsRef.value;
      if (optionsEl && selectRef.value) setCords(optionsEl, selectRef.value);
    };

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

    watch(textFilter, (val) => {
      if (val) {
        if (placeholderRef.value) placeholderRef.value.style.transition = '0s';
      } else {
        if (placeholderRef.value) placeholderRef.value.style.transition = '';
      }
    });

    watch(
      () => props.value,
      (val) => {
        getValue();
        setTimeout(() => emit('change', val), 10);
        if (props.multiple) {
          nextTick(() => {
            if (chipsRef.value && inputRef.value) {
              const height = (chipsRef.value as HTMLElement).scrollHeight;
              (inputRef.value as HTMLElement).style.height = `${height}px`;
              const optionsEl = optionsRef.value;
              if (activeOptions.value && optionsEl && selectRef.value) {
                nextTick(() => setCords(optionsEl, selectRef.value));
              }
            }
          });
        }
        if (val) {
          if (placeholderRef.value) placeholderRef.value.style.transition = '0s';
        } else {
          if (placeholderRef.value) placeholderRef.value.style.transition = '';
        }
      },
      { immediate: true },
    );

    watch(activeOptions, (val) => {
      nextTick(() => {
        if (val) insertOptions();
      });
      uids.value = [];
    });

    onMounted(() => {
      getValue();
      renderSelect.value = true;
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      handleBlur();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    });

    const getMessage = (type: string) => {
      return slots &&
        (slots as Record<string, ((...args: unknown[]) => VNode[]) | undefined>)[`message-${type}`]
        ? h('transition', { onBeforeEnter: beforeEnter, onEnter: enter, onLeave: leave }, [
            h(
              'div',
              {
                class: ['sv-select__message', `sv-select__message--${type}`],
              },
              (slots as Record<string, ((...args: unknown[]) => VNode[]) | undefined>)[
                `message-${type}`
              ]!(),
            ),
          ])
        : null;
    };

    const getChips = () => {
      const chip = (
        item: { label: string; value: string | number | null },
        isCollapse: boolean,
      ) => {
        return h('span', { class: 'sv-select__chips__chip', 'data-value': item.value }, [
          item.label,
          !isCollapse
            ? h(
                'span',
                {
                  class: 'sv-select__chips__chip__close',
                  onMouseenter: () => {
                    targetClose.value = true;
                  },
                  onMouseleave: () => {
                    targetClose.value = false;
                  },
                  onClick: () => {
                    setTimeout(() => {
                      targetClose.value = false;
                    }, 100);
                    if (!activeOptions.value) {
                      if (chipsRef.value) (chipsRef.value as HTMLElement).blur();
                      if (props.filter && chipsInputRef.value)
                        (chipsInputRef.value as HTMLElement).blur();
                    }
                    clickOption(item.value, item.label);
                  },
                },
                [h(SvIconsClose, { hover: 'less' })],
              )
            : null,
        ]);
      };

      let chips: (VNode | false)[] = [];
      if (Array.isArray(valueLabel.value)) {
        valueLabel.value.forEach((item: { label: string; value: string | number }) =>
          chips.push(chip(item, false)),
        );
      }
      if (props.collapseChips) {
        chips = [
          chips[0],
          chips.length > 1 && chip({ label: `+${chips.length - 1}`, value: null }, true),
        ];
      }
      return chips;
    };

    return () => {
      // simplified options vnode to avoid very large single-line expression during migration
      const optionsContent = h('div', { class: 'sv-select__options__content', ref: contentRef }, [
        notData()
          ? h('div', { class: 'sv-select__options__content__not-data' }, [
              slots.notData ? slots.notData() : 'No data available',
            ])
          : null,
        slots.default ? slots.default() : null,
      ]);
      const optionsVNode = h('transition', { name: 'sv-select' }, [
        activeOptions.value
          ? h(
              'div',
              {
                class: ['sv-select__options'],
                ref: optionsRef,
                style: {
                  ['--sv-color']: props.color ? getColor(props.color) : '',
                },
                onMouseleave: () => {
                  targetSelect.value = false;
                  targetSelectInput.value = false;
                },
                onMouseenter: () => {
                  targetSelect.value = true;
                  targetSelectInput.value = true;
                },
              },
              [optionsContent],
            )
          : null,
      ]);

      const inputVNode = h(
        'input',
        {
          readonly: !props.filter,
          id: !props.multiple ? uid : undefined,
          class: [
            'sv-select__input',
            {
              multiple: props.multiple,
              simple: !props.multiple && !props.filter,
            },
          ],
          ref: inputRef,
          value: activeFilter.value ? textFilter.value : getValueLabel(),
          onKeydown: handleKeydown,
          onFocus: (evt: FocusEvent) => {
            activeOptions.value = true;
            emit('focus', evt);
            if (props.filter) activeFilter.value = true;
            window.addEventListener('mousedown', handleWindowClick);
          },
          onInput: (evt: Event) => {
            textFilter.value = (evt.target as HTMLInputElement).value;
          },
        },
        slots.default ? slots.default() : null,
      );

      const chipsVNode = h(
        'button',
        {
          class: 'sv-select__chips',
          ref: chipsRef,
          onKeydown: handleKeydown,
          onFocus: (evt: FocusEvent) => {
            if (!targetClose.value) {
              activeOptions.value = true;
              emit('focus', evt);
            }
            if (props.filter && props.multiple && chipsInputRef.value)
              (chipsInputRef.value as HTMLElement).focus();
          },
          onBlur: handleBlur,
        },
        [
          ...getChips(),
          props.filter
            ? h('input', {
                class: 'sv-select__chips__input',
                ref: chipsInputRef,
                placeholder: props.placeholder,
                id: uid,
                value: textFilter.value,
                onFocus: (evt: FocusEvent) => {
                  if (!targetClose.value) {
                    activeOptions.value = true;
                    emit('focus', evt);
                  }
                },
                onBlur: handleBlur,
                onInput: (evt: Event) => {
                  textFilter.value = (evt.target as HTMLInputElement).value;
                },
              })
            : null,
        ],
      );

      const icon = h(SvIconsArrow, {
        onClick: () => {
          if (activeOptions.value) activeOptions.value = false;
          else if (inputRef.value) (inputRef.value as HTMLElement).focus();
        },
      });

      const labelVNode = h(
        'label',
        {
          class: 'sv-select__label',
          for: uid,
          className: {
            'sv-select__label--placeholder': props.labelPlaceholder,
            'sv-select__label--label': props.label,
            'sv-select__label--hidden': !!props.value,
          },
        },
        [props.labelPlaceholder || props.label],
      );

      const placeholderVNode = h(
        'label',
        {
          class: 'sv-select__label',
          ref: placeholderRef,
          for: uid,
          className: {
            'sv-select__label--hidden': !!props.value || !!textFilter.value,
          },
        },
        [props.placeholder],
      );

      const loadingVNode = h('div', { class: 'sv-select__loading' });

      const messageSuccess = getMessage('success');
      const messageDanger = getMessage('danger');
      const messageWarn = getMessage('warn');
      const messagePrimary = getMessage('primary');

      const selectContent = h(
        'div',
        {
          class: 'sv-select',
          ref: selectRef,
          className: {
            [`sv-select--state-${props.state}`]: true,
            'sv-select--disabled': props.disabled,
            activeOptions: activeOptions.value,
            loading: props.loading,
          },
          onMouseleave: (evt: MouseEvent) => {
            if (evt.relatedTarget !== optionsRef.value) {
              targetSelectInput.value = false;
              targetSelect.value = false;
            }
          },
          onMouseenter: () => {
            targetSelectInput.value = true;
          },
        },
        [
          inputVNode,
          !props.multiple || props.label ? labelVNode : null,
          !props.multiple && !props.labelPlaceholder ? placeholderVNode : null,
          props.multiple ? chipsVNode : null,
          optionsVNode,
          props.loading ? loadingVNode : null,
          icon,
        ],
      );

      return h(
        'div',
        {
          class: [
            'sv-select-content',
            {
              block: props.block,
              'sv-component--primary':
                !props.danger && !props.success && !props.warn && !props.dark && !props.color,
            },
          ],
          style: { ['--sv-color']: props.color ? getColor(props.color) : '' },
        },
        [selectContent, messageSuccess, messageDanger, messageWarn, messagePrimary],
      );
    };
  },
});
