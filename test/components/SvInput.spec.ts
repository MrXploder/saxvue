import { mount } from '@vue/test-utils';
import SvInput from '../../src/components/svInput/Base/svInput';

describe('SvInput', () => {
  it('renders the sv-input-parent wrapper', () => {
    const wrapper = mount(SvInput);
    expect(wrapper.find('.sv-input-parent').exists()).toBe(true);
  });

  it('renders an <input> element', () => {
    const wrapper = mount(SvInput);
    expect(wrapper.find('input.sv-input').exists()).toBe(true);
  });

  it('sets the input value from the value prop', () => {
    const wrapper = mount(SvInput, { props: { modelValue: 'Hello' } });
    expect(wrapper.find('input').element.value).toBe('Hello');
  });

  // --- Emit ---

  it('emits input event on typing', async () => {
    const wrapper = mount(SvInput, { props: { modelValue: '' } });
    const input = wrapper.find('input');
    await input.setValue('test');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe('test');
  });

  // --- Label & placeholder ---

  it('renders label text when label prop is provided', () => {
    const wrapper = mount(SvInput, { props: { label: 'Email' } });
    const labels = wrapper.findAll('label.sv-input__label');
    const labelTexts = labels.map((l) => l.text());
    expect(labelTexts).toContain('Email');
  });

  it('renders labelPlaceholder in label element', () => {
    const wrapper = mount(SvInput, { props: { labelPlaceholder: 'Username' } });
    const labels = wrapper.findAll('label.sv-input__label');
    const labelTexts = labels.map((l) => l.text());
    expect(labelTexts).toContain('Username');
  });

  it('applies has-label class when label is provided', () => {
    const wrapper = mount(SvInput, { props: { label: 'Name' } });
    expect(wrapper.find('.sv-input-content--has-label').exists()).toBe(true);
  });

  // --- Style variants ---

  it('applies border class when border prop is true', () => {
    const wrapper = mount(SvInput, { props: { border: true } });
    expect(wrapper.find('.sv-input-parent--border').exists()).toBe(true);
  });

  it('applies shadow class when shadow prop is true', () => {
    const wrapper = mount(SvInput, { props: { shadow: true } });
    expect(wrapper.find('.sv-input-parent--shadow').exists()).toBe(true);
  });

  it('applies block class when block prop is true', () => {
    const wrapper = mount(SvInput, { props: { block: true } });
    expect(wrapper.find('.block').exists()).toBe(true);
  });

  it('applies transparent class when transparent prop is true', () => {
    const wrapper = mount(SvInput, { props: { transparent: true } });
    expect(wrapper.find('.transparent').exists()).toBe(true);
  });

  it('applies square class when square prop is true', () => {
    const wrapper = mount(SvInput, { props: { square: true } });
    expect(wrapper.find('.square').exists()).toBe(true);
  });

  // --- State ---

  it('applies state class', () => {
    const wrapper = mount(SvInput, { props: { state: 'danger' } });
    expect(wrapper.find('.sv-input-parent--state-danger').exists()).toBe(true);
  });

  // --- Loading ---

  it('renders loading element when loading is true', () => {
    const wrapper = mount(SvInput, { props: { loading: true } });
    expect(wrapper.find('.sv-input__loading').exists()).toBe(true);
  });

  it('does not render loading element when loading is false', () => {
    const wrapper = mount(SvInput, { props: { loading: false } });
    expect(wrapper.find('.sv-input__loading').exists()).toBe(false);
  });

  // --- Icon slot ---

  it('renders icon slot when provided', () => {
    const wrapper = mount(SvInput, {
      slots: { icon: "<span class='test-icon'>🔍</span>" },
    });
    expect(wrapper.find('.sv-input__icon').exists()).toBe(true);
    expect(wrapper.find('.test-icon').exists()).toBe(true);
  });

  it('applies icon-after class when iconAfter prop is true', () => {
    const wrapper = mount(SvInput, {
      props: { iconAfter: true },
      slots: { icon: '<span>→</span>' },
    });
    expect(wrapper.find('.sv-input__icon--after').exists()).toBe(true);
    expect(wrapper.find('.sv-input--has-icon--after').exists()).toBe(true);
  });

  // --- Progress bar ---

  it('renders progress bar when progress > 0', () => {
    const wrapper = mount(SvInput, { props: { progress: 50 } });
    expect(wrapper.find('.sv-input__progress').exists()).toBe(true);
  });

  it('does not render progress bar when progress is 0', () => {
    const wrapper = mount(SvInput, { props: { progress: 0 } });
    expect(wrapper.find('.sv-input__progress').exists()).toBe(false);
  });

  it('applies danger class when progress < 33', () => {
    const wrapper = mount(SvInput, { props: { progress: 20 } });
    expect(wrapper.find('.sv-input__progress--danger').exists()).toBe(true);
  });

  it('applies warn class when progress between 33 and 66', () => {
    const wrapper = mount(SvInput, { props: { progress: 50 } });
    expect(wrapper.find('.sv-input__progress--warn').exists()).toBe(true);
  });

  it('applies success class when progress > 66', () => {
    const wrapper = mount(SvInput, { props: { progress: 80 } });
    expect(wrapper.find('.sv-input__progress--success').exists()).toBe(true);
  });

  // --- Color ---

  it('sets --sv-color style when color prop is set', () => {
    const wrapper = mount(SvInput, { props: { color: '#00ff00' } });
    expect(wrapper.find('.sv-input-parent').attributes('style')).toContain('--sv-color');
  });

  // --- Visible password ---

  it('sets input type to text when visiblePassword is true', () => {
    const wrapper = mount(SvInput, {
      props: { visiblePassword: true },
      attrs: { type: 'password' },
    });
    expect(wrapper.find('input').attributes('type')).toBe('text');
  });

  // --- Message slots ---

  it('renders message-success slot', () => {
    const wrapper = mount(SvInput, {
      slots: { 'message-success': 'Looks good!' },
    });
    expect(wrapper.find('.sv-input__message--success').exists()).toBe(true);
    expect(wrapper.text()).toContain('Looks good!');
  });

  it('renders message-danger slot', () => {
    const wrapper = mount(SvInput, {
      slots: { 'message-danger': 'Required field' },
    });
    expect(wrapper.find('.sv-input__message--danger').exists()).toBe(true);
    expect(wrapper.text()).toContain('Required field');
  });

  // --- Effects ---

  it('always renders affects (animation) elements', () => {
    const wrapper = mount(SvInput);
    expect(wrapper.find('.sv-input__affects').exists()).toBe(true);
    expect(wrapper.findAll('.sv-input__affects__1')).toHaveLength(1);
    expect(wrapper.findAll('.sv-input__affects__2')).toHaveLength(1);
    expect(wrapper.findAll('.sv-input__affects__3')).toHaveLength(1);
    expect(wrapper.findAll('.sv-input__affects__4')).toHaveLength(1);
  });
});
