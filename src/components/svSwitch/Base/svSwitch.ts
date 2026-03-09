import { defineComponent, h, computed, getCurrentInstance } from 'vue';
import { svColorProps, useSvComponent } from '../../../mixins/component';

export default defineComponent({
  name: 'SvSwitch',
  props: {
    ...svColorProps,
    modelValue: { default: '' },
    val: { default: '' },
    notValue: { default: '' },
    loading: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
    icon: { type: Boolean, default: false },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, slots, attrs }) {
    const inst = getCurrentInstance();
    const { getColor } = useSvComponent(props);

    const isChecked = computed(() => {
      let checked = false;
      if (props.modelValue) {
        if (typeof props.modelValue == 'boolean') {
          checked = props.modelValue as unknown as boolean;
        } else if (typeof props.modelValue == 'object' && props.modelValue !== null) {
          const array = props.modelValue as unknown[];
          const containValue =
            array.indexOf(props.val) === -1 &&
            JSON.stringify(array).indexOf(JSON.stringify(props.val)) === -1;
          let indexVal = 0;
          array.forEach((item: unknown, index: number) => {
            if (JSON.stringify(item) == JSON.stringify(props.val)) indexVal = index;
          });
          if (containValue) return false;
          return true;
        }
      } else {
        checked = false;
      }
      return checked;
    });

    const onInput = (evt: Event) => {
      if (typeof props.modelValue == 'boolean') {
        emit('update:modelValue', !(props.modelValue as boolean));
      } else if (typeof props.modelValue == 'object' && props.modelValue !== null) {
        const array = props.modelValue as unknown[];
        const containValue =
          array.indexOf(props.val) === -1 &&
          JSON.stringify(array).indexOf(JSON.stringify(props.val)) === -1;
        let indexVal = 0;
        array.forEach((item: unknown, index: number) => {
          if (JSON.stringify(item) == JSON.stringify(props.val)) indexVal = index;
        });
        if (containValue) array.push(props.val);
        else array.splice(indexVal, 1);
        emit('update:modelValue', array);
      } else {
        if (props.val !== props.modelValue) {
          emit('update:modelValue', props.val);
        } else {
          emit('update:modelValue', props.notValue || null);
        }
      }
      emit('change', evt);
    };

    return () => {
      const circle = h('div', { class: ['sv-switch__circle'] }, [
        slots.circle ? slots.circle() : null,
      ]);

      const textOn = h('div', { class: ['sv-switch__text', 'on'] }, [
        slots.on ? slots.on() : slots.default ? slots.default() : null,
      ]);

      const textOff = h('div', { class: ['sv-switch__text', 'off'] }, [
        slots.off ? slots.off() : slots.default ? slots.default() : null,
      ]);

      const background = h('div', { class: ['sv-switch__background'] });

      const input = h('input', {
        ...attrs,
        type: 'checkbox',
        checked: isChecked.value,
        onInput,
        class: ['sv-switch__input'],
      });

      return h(
        'div',
        {
          class: [
            'sv-switch',
            {
              'sv-switch--loading': props.loading,
              'sv-switch--square': props.square,
              'sv-switch--indeterminate': props.indeterminate,
              'sv-switch--icon': props.icon,
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
        [input, circle, textOn, textOff, background],
      );
    };
  },
});
