import { defineComponent, h, ref, onMounted, getCurrentInstance } from 'vue';
import '../../svCheckbox/Base/style.scss';
import svCheckbox from '../../svCheckbox/Base/svCheckbox';

interface SelectParent {
  isSelect: boolean;
  childOptions: unknown[];
  renderSelect?: boolean;
  uids: (string | number)[];
  value: unknown;
  hoverOption: number;
  multiple: boolean;
  targetSelect: boolean;
  targetClose: boolean;
  activeOptions: boolean;
  setHover?: () => void;
  clickOption?: (value: unknown, label: unknown) => void;
  [key: string]: unknown;
}

export default defineComponent({
  name: 'SvSelectOption',
  props: {
    modelValue: { default: null },
    disabled: { type: Boolean, default: false },
    label: { default: null },
  },
  setup(props, { slots, attrs }) {
    const activeOption = ref(false);
    const hiddenOption = ref(false);

    const instance = getCurrentInstance();
    const _uid = instance ? instance.uid : Math.random().toString(36).slice(2);

    const getParent = (): SelectParent | null => {
      const proxy = instance && instance.proxy;
      if (!proxy) return null;
      const p = (proxy as unknown as Record<string, unknown>).$parent as
        | Record<string, unknown>
        | undefined;
      if (!p) return null;
      return p.isSelect
        ? (p as unknown as SelectParent)
        : p.$parent && (p.$parent as Record<string, unknown>).isSelect
        ? (p.$parent as unknown as SelectParent)
        : null;
    };

    onMounted(() => {
      const parent = getParent();
      if (!parent) return;

      const childOpts = parent.childOptions;
      const filter = childOpts.findIndex((item: unknown) => {
        try {
          return (
            (item as Record<string, unknown>).$vnode &&
            ((item as Record<string, unknown>).$vnode as Record<string, unknown>).key ===
              instance!.vnode!.key
          );
        } catch (e) {
          return false;
        }
      });

      if (filter === -1) parent.childOptions.push(instance!.proxy);
      else if (!parent.renderSelect) parent.childOptions.push(instance!.proxy);

      parent.uids.push(_uid);

      activeOption.value =
        typeof parent.value === 'number'
          ? parent.value === props.value
          : Array.isArray(parent.value) && parent.value.indexOf(props.value) !== -1;
      parent.setHover && parent.setHover();
    });

    const isActive = () => {
      const parent = getParent();
      if (!parent) return false;
      return typeof parent.value == 'number'
        ? parent.value == props.value
        : Array.isArray(parent.value) && parent.value.indexOf(props.value) !== -1;
    };

    const isHover = () => {
      const parent = getParent();
      if (!parent) return false;
      return parent.uids.indexOf(_uid) == parent.hoverOption;
    };

    const isMultiple = () => {
      const parent = getParent();
      return parent ? parent.multiple : false;
    };

    return () => {
      const checkbox = h(
        svCheckbox as unknown as ReturnType<typeof defineComponent>,
        { checkedForce: isActive() },
        slots.default ? slots.default() : [],
      );

      const onMousedown = () => {
        const parent = getParent();
        parent && parent.clickOption && parent.clickOption(props.value, props.label);
      };

      const onBlur = () => {
        const parent = getParent();
        if (parent && !parent.targetSelect && !parent.targetClose) parent.activeOptions = false;
      };

      return h(
        'button',
        {
          ...(attrs as Record<string, unknown>),
          disabled: props.disabled,
          class: [
            'sv-select__option',
            {
              activeOption: isActive(),
              isHover: isHover(),
              isMultiple: isMultiple(),
              hiddenOption: hiddenOption.value,
            },
          ],
          onMousedown,
          onBlur,
        },
        [isMultiple() ? checkbox : slots.default ? slots.default() : null],
      );
    };
  },
});
