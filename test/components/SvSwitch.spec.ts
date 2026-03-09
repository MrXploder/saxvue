import { mount } from '@vue/test-utils';
import SvSwitch from '../../src/components/svSwitch/Base/svSwitch';

describe('SvSwitch', () => {
  it('renders the sv-switch wrapper', () => {
    const wrapper = mount(SvSwitch);
    expect(wrapper.find('.sv-switch').exists()).toBe(true);
  });

  it('renders a checkbox input', () => {
    const wrapper = mount(SvSwitch);
    const input = wrapper.find('input.sv-switch__input');
    expect(input.exists()).toBe(true);
    expect(input.attributes('type')).toBe('checkbox');
  });

  it('renders the circle element', () => {
    const wrapper = mount(SvSwitch);
    expect(wrapper.find('.sv-switch__circle').exists()).toBe(true);
  });

  it('renders the background element', () => {
    const wrapper = mount(SvSwitch);
    expect(wrapper.find('.sv-switch__background').exists()).toBe(true);
  });

  // --- Toggle ---

  it('emits input with false when value is true (boolean toggle)', async () => {
    const wrapper = mount(SvSwitch, { props: { modelValue: true as unknown as string } });
    await wrapper.find('input').trigger('input');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(false);
  });

  it('emits input with true when value is false (boolean toggle)', async () => {
    const wrapper = mount(SvSwitch, { props: { modelValue: false as unknown as string } });
    await wrapper.find('input').trigger('input');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(true);
  });

  it('emits change event on toggle', async () => {
    const wrapper = mount(SvSwitch, { props: { modelValue: true as unknown as string } });
    await wrapper.find('input').trigger('input');
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  // --- Style props ---

  it('applies loading class when loading is true', () => {
    const wrapper = mount(SvSwitch, { props: { loading: true } });
    expect(wrapper.find('.sv-switch--loading').exists()).toBe(true);
  });

  it('applies square class when square is true', () => {
    const wrapper = mount(SvSwitch, { props: { square: true } });
    expect(wrapper.find('.sv-switch--square').exists()).toBe(true);
  });

  it('applies indeterminate class when indeterminate is true', () => {
    const wrapper = mount(SvSwitch, { props: { indeterminate: true } });
    expect(wrapper.find('.sv-switch--indeterminate').exists()).toBe(true);
  });

  it('applies icon class when icon is true', () => {
    const wrapper = mount(SvSwitch, { props: { icon: true } });
    expect(wrapper.find('.sv-switch--icon').exists()).toBe(true);
  });

  // --- Color variants ---

  it('applies primary class by default', () => {
    const wrapper = mount(SvSwitch);
    expect(wrapper.find('.sv-component--primary').exists()).toBe(true);
  });

  it('applies danger class when danger prop is true', () => {
    const wrapper = mount(SvSwitch, { props: { danger: true } });
    expect(wrapper.find('.sv-component--danger').exists()).toBe(true);
  });

  it('applies success class when success prop is true', () => {
    const wrapper = mount(SvSwitch, { props: { success: true } });
    expect(wrapper.find('.sv-component--success').exists()).toBe(true);
  });

  // --- Slots ---

  it('renders on slot text', () => {
    const wrapper = mount(SvSwitch, {
      slots: { on: 'ON' },
    });
    expect(wrapper.find('.sv-switch__text.on').text()).toContain('ON');
  });

  it('renders off slot text', () => {
    const wrapper = mount(SvSwitch, {
      slots: { off: 'OFF' },
    });
    expect(wrapper.find('.sv-switch__text.off').text()).toContain('OFF');
  });

  it('renders default slot in both on and off when no specific slots', () => {
    const wrapper = mount(SvSwitch, {
      slots: { default: 'Toggle' },
    });
    expect(wrapper.find('.sv-switch__text.on').text()).toContain('Toggle');
    expect(wrapper.find('.sv-switch__text.off').text()).toContain('Toggle');
  });

  it('renders circle slot content', () => {
    const wrapper = mount(SvSwitch, {
      slots: { circle: "<span class='circle-icon'>●</span>" },
    });
    expect(wrapper.find('.sv-switch__circle .circle-icon').exists()).toBe(true);
  });
});
