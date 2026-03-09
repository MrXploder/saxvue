import { mount } from '@vue/test-utils';
import SvCheckbox from '../../src/components/svCheckbox/Base/svCheckbox';

describe('SvCheckbox', () => {
  it('renders the sv-checkbox-content wrapper', () => {
    const wrapper = mount(SvCheckbox);
    expect(wrapper.find('.sv-checkbox-content').exists()).toBe(true);
  });

  it('renders a checkbox input', () => {
    const wrapper = mount(SvCheckbox);
    const input = wrapper.find('input.sv-checkbox');
    expect(input.exists()).toBe(true);
    expect(input.attributes('type')).toBe('checkbox');
  });

  it('renders default slot as label', () => {
    const wrapper = mount(SvCheckbox, {
      slots: { default: 'Accept terms' },
    });
    expect(wrapper.find('.sv-checkbox-label').exists()).toBe(true);
    expect(wrapper.text()).toContain('Accept terms');
  });

  // --- Checked state ---

  it('applies checked class when value is true (boolean)', () => {
    const wrapper = mount(SvCheckbox, { props: { modelValue: true as unknown as string } });
    expect(wrapper.find('.sv-checkbox--checked').exists()).toBe(true);
  });

  it('does not apply checked class when value is false', () => {
    const wrapper = mount(SvCheckbox, { props: { modelValue: false as unknown as string } });
    expect(wrapper.find('.sv-checkbox--checked').exists()).toBe(false);
  });

  // --- Emit toggle ---

  it('emits input with false when value is true (boolean toggle)', async () => {
    const wrapper = mount(SvCheckbox, { props: { modelValue: true as unknown as string } });
    const input = wrapper.find('input.sv-checkbox');
    await input.trigger('input');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(false);
  });

  it('emits input with true when value is false (boolean toggle)', async () => {
    const wrapper = mount(SvCheckbox, { props: { modelValue: false as unknown as string } });
    const input = wrapper.find('input.sv-checkbox');
    await input.trigger('input');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(true);
  });

  // --- String value mode ---

  it('emits val when value is empty string and val is set', async () => {
    const wrapper = mount(SvCheckbox, { props: { modelValue: '', val: 'option1' } });
    await wrapper.find('input.sv-checkbox').trigger('input');
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe('option1');
  });

  it('emits null when value matches val (deselect)', async () => {
    const wrapper = mount(SvCheckbox, { props: { modelValue: 'option1', val: 'option1' } });
    await wrapper.find('input.sv-checkbox').trigger('input');
    expect(wrapper.emitted('update:modelValue')![0][0]).toBeNull();
  });

  it('emits notValue when value matches val and notValue is provided', async () => {
    const wrapper = mount(SvCheckbox, { props: { modelValue: 'a', val: 'a', notValue: 'b' } });
    await wrapper.find('input.sv-checkbox').trigger('input');
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe('b');
  });

  // --- Props ---

  it('applies loading class when loading prop is true', () => {
    const wrapper = mount(SvCheckbox, { props: { loading: true } });
    expect(wrapper.find('.sv-checkbox--loading').exists()).toBe(true);
  });

  it('applies label-before class when labelBefore prop is true', () => {
    const wrapper = mount(SvCheckbox, {
      props: { labelBefore: true },
      slots: { default: 'Label' },
    });
    expect(wrapper.find('.sv-checkbox--label-before').exists()).toBe(true);
  });

  it('applies lineThrough class on label when lineThrough prop is true', () => {
    const wrapper = mount(SvCheckbox, {
      props: { lineThrough: true },
      slots: { default: 'Strikethrough' },
    });
    expect(wrapper.find('.sv-checkbox-label.lineThrough').exists()).toBe(true);
  });

  // --- Color variants ---

  it('applies primary class by default', () => {
    const wrapper = mount(SvCheckbox);
    expect(wrapper.find('.sv-component--primary').exists()).toBe(true);
  });

  it('applies danger class when danger prop is true', () => {
    const wrapper = mount(SvCheckbox, { props: { danger: true } });
    expect(wrapper.find('.sv-component--danger').exists()).toBe(true);
  });

  it('applies success class when success prop is true', () => {
    const wrapper = mount(SvCheckbox, { props: { success: true } });
    expect(wrapper.find('.sv-component--success').exists()).toBe(true);
  });

  // --- Custom icon slot ---

  it('renders custom icon slot in checkbox mask', () => {
    const wrapper = mount(SvCheckbox, {
      slots: { icon: "<span class='custom-check'>✓</span>" },
    });
    expect(wrapper.find('.sv-checkbox-mask .custom-check').exists()).toBe(true);
  });
});
