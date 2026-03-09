import { defineComponent, h, computed, watch, onMounted, getCurrentInstance } from 'vue';
import SvIconsCheck from '../../../icons/check';
import { svColorProps, useSvComponent } from '../../../mixins/component';

export default defineComponent({
  name: 'SvCheckbox',
  props: {
    ...svColorProps,
    modelValue: { default: '' },
    val: { default: '' },
    notValue: { default: '' },
    indeterminate: { type: Boolean, default: false },
    lineThrough: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
    checkedForce: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    labelBefore: { type: Boolean, default: false },
  },
  emits: ['update:modelValue', 'mousedown', 'blur'],
  setup(props, { emit, slots, attrs }) {
    const inst = getCurrentInstance();
    const uid = inst ? `vs-${inst.uid}` : `vs-${Math.random().toString(36).slice(2)}`;
    const { getColor } = useSvComponent(props);

    watch(
      () => props.indeterminate,
      (val: boolean) => {
        emit('update:modelValue', !!val);
      },
    );

    onMounted(() => {
      if (props.checked && typeof props.modelValue == 'boolean') {
        emit('update:modelValue', true);
      }
    });

    const isChecked = computed(() => {
      let checked = false;
      if (props.modelValue) {
        if (typeof props.modelValue == 'boolean') checked = props.modelValue as unknown as boolean;
        else if (typeof props.modelValue == 'object' && props.modelValue !== null) {
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
      } else checked = false;
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
        if (props.val !== props.modelValue) emit('update:modelValue', props.val);
        else emit('update:modelValue', props.notValue || null);
      }
      emit('mousedown', evt);
    };

    const onBlur = (evt: Event) => emit('blur', evt);

    return () => {
      const InputCheckbox = h('input', {
        class: 'sv-checkbox',
        ...attrs,
        type: 'checkbox',
        id: uid,
        checked: props.checkedForce || isChecked.value,
        onInput,
        onBlur,
      });

      const checkbox = h('div', { class: 'sv-checkbox-mask' }, [
        !slots.icon &&
          h(SvIconsCheck, { indeterminate: props.indeterminate } as Record<string, unknown>),
        slots.icon ? slots.icon() : null,
      ]);

      const label = h(
        'label',
        { class: ['sv-checkbox-label', { lineThrough: props.lineThrough }], for: uid },
        [slots.default ? slots.default() : null],
      );

      const conCheckbox = h('div', { class: 'sv-checkbox-con' }, [InputCheckbox, checkbox]);

      return h(
        'div',
        {
          class: [
            'sv-checkbox-content',
            { 'sv-checkbox--checked': isChecked.value },
            {
              'sv-checkbox--disabled': (attrs as Record<string, unknown>).hasOwnProperty(
                'disabled',
              ),
            },
            { 'sv-checkbox--loading': props.loading },
            { 'sv-checkbox--label-before': props.labelBefore },
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
        [conCheckbox, slots.default ? label : null],
      );
    };
  },
});
