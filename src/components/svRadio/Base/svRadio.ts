import { defineComponent, h, computed, getCurrentInstance } from 'vue';
import { svColorProps, useSvComponent } from '../../../mixins/component';

export default defineComponent({
  name: 'SvRadio',
  props: {
    ...svColorProps,
    modelValue: {},
    val: {},
    name: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    labelBefore: { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const inst = getCurrentInstance();
    const uid = inst ? `vs-${inst.uid}` : `vs-${Math.random().toString(36).slice(2)}`;
    const { getColor } = useSvComponent(props);

    const isChecked = computed(() => props.modelValue == props.val);

    return () => {
      const radioInput = h('input', {
        type: 'radio',
        id: uid,
        value: props.val,
        name: props.name || String(props.modelValue),
        checked: isChecked.value,
        onInput: () => emit('update:modelValue', props.val),
      });

      const radioEffect = h('span', { class: 'sv-radio__effect' }, [
        h('span', { class: 'sv-radio__effect__icon' }, [slots.icon ? slots.icon() : null]),
        h('span', { class: 'sv-radio__effect__loading' }),
      ]);

      const label = h('label', { class: 'sv-radio__label', for: uid }, [
        slots.default ? slots.default() : null,
      ]);

      const radio = h('div', { class: 'sv-radio' }, [radioInput, radioEffect]);

      return h(
        'div',
        {
          class: [
            'sv-radio-content',
            { disabled: props.disabled, loading: props.loading, active: isChecked.value },
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
        [props.labelBefore && label, radio, !props.labelBefore && label],
      );
    };
  },
});
