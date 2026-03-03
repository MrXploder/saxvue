import { mount } from '@vue/test-utils';
import SvButton from '../../src/components/svButton/Base/SvButton';

describe('SvButton', () => {
  it('renders a <button> element', () => {
    const wrapper = mount(SvButton);
    expect(wrapper.element.tagName).toBe('BUTTON');
  });

  it('renders default slot content', () => {
    const wrapper = mount(SvButton, {
      slots: { default: 'Click me' },
    });
    expect(wrapper.text()).toContain('Click me');
  });

  it('has sv-button class', () => {
    const wrapper = mount(SvButton);
    expect(wrapper.classes()).toContain('sv-button');
  });

  // --- Color variant classes ---

  it('applies sv-button--primary when no color variant is set', () => {
    const wrapper = mount(SvButton);
    expect(wrapper.classes()).toContain('sv-button--primary');
  });

  it('applies sv-button--danger when danger prop is true', () => {
    const wrapper = mount(SvButton, { props: { danger: true } });
    expect(wrapper.classes()).toContain('sv-button--danger');
    expect(wrapper.classes()).not.toContain('sv-button--primary');
  });

  it('applies sv-button--success when success prop is true', () => {
    const wrapper = mount(SvButton, { props: { success: true } });
    expect(wrapper.classes()).toContain('sv-button--success');
  });

  it('applies sv-button--warn when warn prop is true', () => {
    const wrapper = mount(SvButton, { props: { warn: true } });
    expect(wrapper.classes()).toContain('sv-button--warn');
  });

  it('applies sv-button--dark when dark prop is true', () => {
    const wrapper = mount(SvButton, { props: { dark: true } });
    expect(wrapper.classes()).toContain('sv-button--dark');
  });

  // --- Style variant classes ---

  it('applies sv-button--default when no style variant is set', () => {
    const wrapper = mount(SvButton);
    expect(wrapper.classes()).toContain('sv-button--default');
  });

  it('applies sv-button--flat when flat prop is true', () => {
    const wrapper = mount(SvButton, { props: { flat: true } });
    expect(wrapper.classes()).toContain('sv-button--flat');
    expect(wrapper.classes()).not.toContain('sv-button--default');
  });

  it('applies sv-button--border when border prop is true', () => {
    const wrapper = mount(SvButton, { props: { border: true } });
    expect(wrapper.classes()).toContain('sv-button--border');
  });

  it('applies sv-button--gradient when gradient prop is true', () => {
    const wrapper = mount(SvButton, { props: { gradient: true } });
    expect(wrapper.classes()).toContain('sv-button--gradient');
  });

  it('applies sv-button--relief when relief prop is true', () => {
    const wrapper = mount(SvButton, { props: { relief: true } });
    expect(wrapper.classes()).toContain('sv-button--relief');
  });

  it('applies sv-button--transparent when transparent prop is true', () => {
    const wrapper = mount(SvButton, { props: { transparent: true } });
    expect(wrapper.classes()).toContain('sv-button--transparent');
  });

  it('applies sv-button--shadow when shadow prop is true', () => {
    const wrapper = mount(SvButton, { props: { shadow: true } });
    expect(wrapper.classes()).toContain('sv-button--shadow');
  });

  it('applies sv-button--floating when floating prop is true', () => {
    const wrapper = mount(SvButton, { props: { floating: true } });
    expect(wrapper.classes()).toContain('sv-button--floating');
  });

  // --- Shape / sizing classes ---

  it('applies sv-button--icon when icon prop is true', () => {
    const wrapper = mount(SvButton, { props: { icon: true } });
    expect(wrapper.classes()).toContain('sv-button--icon');
  });

  it('applies sv-button--circle when circle prop is true', () => {
    const wrapper = mount(SvButton, { props: { circle: true } });
    expect(wrapper.classes()).toContain('sv-button--circle');
  });

  it('applies sv-button--square when square prop is true', () => {
    const wrapper = mount(SvButton, { props: { square: true } });
    expect(wrapper.classes()).toContain('sv-button--square');
  });

  it('applies sv-button--block when block prop is true', () => {
    const wrapper = mount(SvButton, { props: { block: true } });
    expect(wrapper.classes()).toContain('sv-button--block');
  });

  it('applies size class', () => {
    const wrapper = mount(SvButton, { props: { size: 'large' } });
    expect(wrapper.classes()).toContain('sv-button--size-large');
  });

  // --- State classes ---

  it('applies sv-button--loading when loading prop is true', () => {
    const wrapper = mount(SvButton, { props: { loading: true } });
    expect(wrapper.classes()).toContain('sv-button--loading');
    expect(wrapper.find('.sv-button__loading').exists()).toBe(true);
  });

  it('does not render loading element when loading is false', () => {
    const wrapper = mount(SvButton, { props: { loading: false } });
    expect(wrapper.find('.sv-button__loading').exists()).toBe(false);
  });

  it('applies sv-button--active when active prop is true', () => {
    const wrapper = mount(SvButton, { props: { active: true } });
    expect(wrapper.classes()).toContain('sv-button--active');
  });

  // --- Events ---

  it('emits click event on click', async () => {
    const wrapper = mount(SvButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('passes the MouseEvent on click', async () => {
    const wrapper = mount(SvButton);
    await wrapper.trigger('click');
    const clickEvents = wrapper.emitted('click');
    expect(clickEvents).toBeTruthy();
    expect(clickEvents![0][0]).toBeInstanceOf(MouseEvent);
  });

  // --- Color prop → CSS custom property ---

  it('sets --sv-color style when color prop is a hex value', () => {
    const wrapper = mount(SvButton, { props: { color: '#ff0000' } });
    expect(wrapper.attributes('style')).toContain('--sv-color');
    expect(wrapper.attributes('style')).toContain('255,0,0');
  });

  // --- Slots ---

  it('renders animate slot when provided', () => {
    const wrapper = mount(SvButton, {
      slots: {
        default: 'Main',
        animate: 'Animated',
      },
    });
    expect(wrapper.find('.sv-button__animate').exists()).toBe(true);
    expect(wrapper.text()).toContain('Animated');
  });

  it('does not render animate slot when not provided', () => {
    const wrapper = mount(SvButton, {
      slots: { default: 'Main' },
    });
    expect(wrapper.find('.sv-button__animate').exists()).toBe(false);
  });

  // --- Link behavior ---

  it('opens href in new tab when blank is true', async () => {
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const wrapper = mount(SvButton, {
      props: { href: 'https://example.com', blank: true },
    });
    await wrapper.trigger('click');
    expect(openSpy).toHaveBeenCalledWith('https://example.com', '_blank');
    openSpy.mockRestore();
  });

  it('opens href in same tab when blank is false', async () => {
    const openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const wrapper = mount(SvButton, {
      props: { href: 'https://example.com', blank: false },
    });
    await wrapper.trigger('click');
    expect(openSpy).toHaveBeenCalledWith('https://example.com', '_self');
    openSpy.mockRestore();
  });
});
