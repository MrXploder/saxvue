import { defineComponent, h, ref, getCurrentInstance, watch, VNode } from 'vue';

export default defineComponent({
  name: 'SvOptionGroup',
  setup(_, { slots }) {
    const hiddenOptionGroup = ref(false);
    const textFilter = ref<string | null>(null);

    const instance = getCurrentInstance();
    const getParent = (): Record<string, unknown> | null => {
      const proxy = instance && instance.proxy;
      return proxy && (proxy as unknown as Record<string, unknown>).$parent
        ? ((proxy as unknown as Record<string, unknown>).$parent as Record<string, unknown>)
        : null;
    };

    const labels = () => {
      const nodes = slots.default ? slots.default() : [];
      let out = '';
      nodes.forEach((node: VNode) => {
        if (node && node.props && node.props.label) out += node.props.label;
      });
      return out;
    };

    watch(
      () => getParent() && (getParent() as Record<string, unknown>).textFilter,
      (val: unknown) => {
        if (val) {
          if (
            labels()
              .toLowerCase()
              .indexOf((val as string).toLowerCase()) === -1
          )
            hiddenOptionGroup.value = true;
          else hiddenOptionGroup.value = false;
        } else {
          hiddenOptionGroup.value = false;
        }
        textFilter.value = val as string;
      },
    );

    const clickOption = (value: string | number, label: string) => {
      const parent = getParent();
      parent &&
        typeof parent.clickOption === 'function' &&
        (parent.clickOption as (v: string | number, l: string) => void)(value, label);
    };

    return () =>
      h(
        'div',
        {
          class: ['sv-select__option-group', { hiddenOptionGroup: hiddenOptionGroup.value }],
        },
        [h('h5', {}, slots.title ? slots.title() : []), slots.default ? slots.default() : null],
      );
  },
});
