import { mount } from '@vue/test-utils';
import SvRadio from '../../src/components/svRadio/Base/svRadio';

describe('SvRadio', () => {
  // --- Rendering ---

  it('renders sv-radio-content wrapper', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a' },
    });
    expect(wrapper.find('.sv-radio-content').exists()).toBe(true);
  });

  it('renders sv-radio inner element', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a' },
    });
    expect(wrapper.find('.sv-radio').exists()).toBe(true);
  });

  it('renders a radio input', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a' },
    });
    const input = wrapper.find('input[type="radio"]');
    expect(input.exists()).toBe(true);
  });

  // --- Checked state ---

  it('is checked when value equals val', () => {
    const wrapper = mount(SvRadio, {
      props: { modelValue: 'a', val: 'a' },
    });
    expect(wrapper.find('.active').exists()).toBe(true);
    const input = wrapper.find('input[type="radio"]');
    expect((input.element as HTMLInputElement).checked).toBe(true);
  });

  it('is not checked when value differs from val', () => {
    const wrapper = mount(SvRadio, {
      props: { modelValue: 'b', val: 'a' },
    });
    expect(wrapper.find('.active').exists()).toBe(false);
  });

  // --- Emit ---

  it('emits input with val on input event', async () => {
    const wrapper = mount(SvRadio, {
      props: { modelValue: 'b', val: 'a' },
    });
    await wrapper.find('input[type="radio"]').trigger('input');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe('a');
  });

  // --- Label ---

  it('renders default slot as label', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a' },
      slots: { default: 'Option A' },
    });
    expect(wrapper.find('.sv-radio__label').exists()).toBe(true);
    expect(wrapper.text()).toContain('Option A');
  });

  it('renders label before radio when labelBefore prop is true', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a', labelBefore: true },
      slots: { default: 'Option A' },
    });
    const children = wrapper.find('.sv-radio-content').element.children;
    // Label should come before the radio div
    expect(children[0].classList.contains('sv-radio__label')).toBe(true);
    expect(children[1].classList.contains('sv-radio')).toBe(true);
  });

  it('renders label after radio by default', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a' },
      slots: { default: 'Option A' },
    });
    const children = wrapper.find('.sv-radio-content').element.children;
    expect(children[0].classList.contains('sv-radio')).toBe(true);
    expect(children[1].classList.contains('sv-radio__label')).toBe(true);
  });

  // --- Disabled ---

  it('applies disabled class when disabled prop is true', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a', disabled: true },
    });
    expect(wrapper.find('.disabled').exists()).toBe(true);
  });

  // --- Loading ---

  it('applies loading class when loading prop is true', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a', loading: true },
    });
    expect(wrapper.find('.loading').exists()).toBe(true);
  });

  // --- Effect elements ---

  it('renders radio effect elements', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a' },
    });
    expect(wrapper.find('.sv-radio__effect').exists()).toBe(true);
    expect(wrapper.find('.sv-radio__effect__icon').exists()).toBe(true);
    expect(wrapper.find('.sv-radio__effect__loading').exists()).toBe(true);
  });

  // --- Icon slot ---

  it('renders custom icon slot', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a' },
      slots: { icon: '<span class="custom-radio-icon">✓</span>' },
    });
    expect(wrapper.find('.custom-radio-icon').exists()).toBe(true);
  });

  // --- Name attribute ---

  it('sets name attribute on radio input', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a', name: 'myGroup' },
    });
    const input = wrapper.find('input[type="radio"]');
    expect(input.attributes('name')).toBe('myGroup');
  });

  // --- Color variants ---

  it('applies primary class by default', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a' },
    });
    expect(wrapper.find('.sv-component--primary').exists()).toBe(true);
  });

  it('applies danger class when danger prop is true', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a', danger: true },
    });
    expect(wrapper.find('.sv-component--danger').exists()).toBe(true);
  });

  it('applies success class when success prop is true', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a', success: true },
    });
    expect(wrapper.find('.sv-component--success').exists()).toBe(true);
  });

  it('applies warn class when warn prop is true', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a', warn: true },
    });
    expect(wrapper.find('.sv-component--warn').exists()).toBe(true);
  });

  it('applies dark class when dark prop is true', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a', dark: true },
    });
    expect(wrapper.find('.sv-component--dark').exists()).toBe(true);
  });

  it('sets --sv-color style when color prop is provided', () => {
    const wrapper = mount(SvRadio, {
      props: { val: 'a', color: '#ff0000' },
    });
    expect(wrapper.find('.sv-radio-content').attributes('style')).toContain('--sv-color');
  });
});
