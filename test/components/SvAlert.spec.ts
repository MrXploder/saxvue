import { mount } from '@vue/test-utils';
import SvAlert from '../../src/components/svAlert/Base/svAlert';

describe('SvAlert', () => {
  it('renders the alert wrapper with primary class by default', () => {
    const wrapper = mount(SvAlert);
    expect(wrapper.find('.sv-component--primary').exists()).toBe(true);
  });

  it('renders default slot content', () => {
    const wrapper = mount(SvAlert, {
      slots: { default: 'Alert message' },
    });
    expect(wrapper.text()).toContain('Alert message');
  });

  it('renders title slot', () => {
    const wrapper = mount(SvAlert, {
      slots: { title: 'Warning!' },
    });
    expect(wrapper.find('.sv-alert__title').exists()).toBe(true);
    expect(wrapper.text()).toContain('Warning!');
  });

  it('renders footer slot', () => {
    const wrapper = mount(SvAlert, {
      slots: { footer: 'Footer info' },
    });
    expect(wrapper.find('.sv-alert__footer').exists()).toBe(true);
    expect(wrapper.text()).toContain('Footer info');
  });

  it('renders icon slot', () => {
    const wrapper = mount(SvAlert, {
      slots: { icon: "<span class='custom-icon'>⚠️</span>" },
    });
    expect(wrapper.find('.sv-alert__icon').exists()).toBe(true);
    expect(wrapper.find('.custom-icon').exists()).toBe(true);
  });

  // --- Close button ---

  it('renders close button when closable is true', () => {
    const wrapper = mount(SvAlert, { props: { closable: true } });
    expect(wrapper.find('.sv-alert__close').exists()).toBe(true);
  });

  it('does not render close button when closable is false', () => {
    const wrapper = mount(SvAlert, { props: { closable: false } });
    expect(wrapper.find('.sv-alert__close').exists()).toBe(false);
  });

  it('emits input event when close button is clicked', async () => {
    const wrapper = mount(SvAlert, {
      props: { closable: true, value: true },
    });
    await wrapper.find('.sv-alert__close').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(false);
  });

  // --- Style variants ---

  it('applies solid class when solid prop is true', () => {
    const wrapper = mount(SvAlert, { props: { solid: true } });
    expect(wrapper.find('.sv-alert--solid').exists()).toBe(true);
  });

  it('applies border class when border prop is true', () => {
    const wrapper = mount(SvAlert, { props: { border: true } });
    expect(wrapper.find('.sv-alert--border').exists()).toBe(true);
  });

  it('applies shadow class when shadow prop is true', () => {
    const wrapper = mount(SvAlert, { props: { shadow: true } });
    expect(wrapper.find('.sv-alert--shadow').exists()).toBe(true);
  });

  it('applies gradient class when gradient prop is true', () => {
    const wrapper = mount(SvAlert, { props: { gradient: true } });
    expect(wrapper.find('.sv-alert--gradient').exists()).toBe(true);
  });

  it('applies flat class when flat prop is true', () => {
    const wrapper = mount(SvAlert, { props: { flat: true } });
    expect(wrapper.find('.sv-alert--flat').exists()).toBe(true);
  });

  it('applies relief class when relief prop is true', () => {
    const wrapper = mount(SvAlert, { props: { relief: true } });
    expect(wrapper.find('.sv-alert--relief').exists()).toBe(true);
  });

  // --- Color variants ---

  it('applies primary class by default', () => {
    const wrapper = mount(SvAlert);
    expect(wrapper.find('.sv-component--primary').exists()).toBe(true);
  });

  it('applies danger class when danger prop is true', () => {
    const wrapper = mount(SvAlert, { props: { danger: true } });
    expect(wrapper.find('.sv-component--danger').exists()).toBe(true);
  });

  it('applies success class when success prop is true', () => {
    const wrapper = mount(SvAlert, { props: { success: true } });
    expect(wrapper.find('.sv-component--success').exists()).toBe(true);
  });

  it('applies warn class when warn prop is true', () => {
    const wrapper = mount(SvAlert, { props: { warn: true } });
    expect(wrapper.find('.sv-component--warn').exists()).toBe(true);
  });

  // --- Progress ---

  it('renders progress bar when progress > 0', () => {
    const wrapper = mount(SvAlert, { props: { progress: 60 } });
    expect(wrapper.find('.sv-alert__progress').exists()).toBe(true);
  });

  it('sets progress bar width', () => {
    const wrapper = mount(SvAlert, { props: { progress: 40 } });
    const bar = wrapper.find('.sv-alert__progress__bar');
    expect(bar.exists()).toBe(true);
    expect(bar.attributes('style')).toContain('40%');
  });

  // --- Color prop ---

  it('sets --sv-color style when color prop is provided', () => {
    const wrapper = mount(SvAlert, { props: { color: '#ff0000' } });
    // The root div doesn't have a .sv-alert class; find the element with inline style
    const rootDiv = wrapper.find('[style]');
    expect(rootDiv.exists()).toBe(true);
    expect(rootDiv.attributes('style')).toContain('--sv-color');
  });
});
