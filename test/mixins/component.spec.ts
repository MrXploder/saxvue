import { defineComponent, h, type ComputedRef } from 'vue';
import { mount } from '@vue/test-utils';
import { svColorProps, useSvComponent, type SvColorPropValues } from '../../src/mixins/component';

describe('svColorProps', () => {
  it('defines all 7 standard color props', () => {
    const keys = Object.keys(svColorProps);
    expect(keys).toEqual(
      expect.arrayContaining(['color', 'danger', 'success', 'warn', 'dark', 'primary', 'active']),
    );
    expect(keys).toHaveLength(7);
  });

  it('has correct default values', () => {
    expect(svColorProps.color.default).toBeNull();
    expect(svColorProps.danger.default).toBe(false);
    expect(svColorProps.success.default).toBe(false);
    expect(svColorProps.warn.default).toBe(false);
    expect(svColorProps.dark.default).toBe(false);
    expect(svColorProps.primary.default).toBe(false);
    expect(svColorProps.active.default).toBe(false);
  });

  it('has correct types', () => {
    expect(svColorProps.color.type).toBe(String);
    expect(svColorProps.danger.type).toBe(Boolean);
    expect(svColorProps.success.type).toBe(Boolean);
  });
});

describe('useSvComponent', () => {
  interface ComposableResult {
    componentColor: string | null;
    getColor: string | undefined;
    isColorDark: ComputedRef<boolean>;
    isColor: ComputedRef<boolean>;
  }

  const createWrapper = (propsData: Partial<SvColorPropValues> = {}) => {
    const TestComponent = defineComponent({
      props: { ...svColorProps },
      setup(props) {
        const result = useSvComponent(props as SvColorPropValues);
        return { composable: result };
      },
      render() {
        return h('div', { class: 'test' });
      },
    });

    const wrapper = mount(TestComponent, {
      props: {
        color: null,
        danger: false,
        success: false,
        warn: false,
        dark: false,
        primary: false,
        active: false,
        ...propsData,
      } as Record<string, unknown>,
    });

    const composable = (wrapper.vm as unknown as { composable: ComposableResult }).composable;
    return { wrapper, composable };
  };

  it('returns isColor false when no color props are set', () => {
    const { composable } = createWrapper();
    expect(composable.isColor.value).toBe(false);
  });

  it('returns isColor true when color is set', () => {
    const { composable } = createWrapper({ color: '#ff0000' });
    expect(composable.isColor.value).toBe(true);
  });

  it('returns isColor true when primary is set', () => {
    const { composable } = createWrapper({ primary: true });
    expect(composable.isColor.value).toBe(true);
  });

  it('returns isColor true when danger is set', () => {
    const { composable } = createWrapper({ danger: true });
    expect(composable.isColor.value).toBe(true);
  });

  it('returns isColor true when success is set', () => {
    const { composable } = createWrapper({ success: true });
    expect(composable.isColor.value).toBe(true);
  });

  it('returns isColor true when warn is set', () => {
    const { composable } = createWrapper({ warn: true });
    expect(composable.isColor.value).toBe(true);
  });

  it('returns isColorDark true when dark prop is set', () => {
    const { composable } = createWrapper({ dark: true });
    expect(composable.isColorDark.value).toBe(true);
  });

  it("returns isColorDark true when color is 'dark'", () => {
    const { composable } = createWrapper({ color: 'dark' });
    expect(composable.isColorDark.value).toBe(true);
  });

  it('returns isColorDark false for non-dark colors', () => {
    const { composable } = createWrapper({ color: '#ff0000' });
    expect(composable.isColorDark.value).toBe(false);
  });

  it('provides getColor value for hex color', () => {
    const { composable } = createWrapper({ color: '#ff0000' });
    expect(composable.getColor).toBe('255,0,0');
  });

  it('provides undefined getColor when color is null', () => {
    const { composable } = createWrapper({ color: null });
    expect(composable.getColor).toBeUndefined();
  });
});
