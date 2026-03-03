import { mount } from '@vue/test-utils';
import SvNavbar from '../../src/components/svNavbar/Base/svNavbar';

describe('SvNavbar', () => {
  // --- Rendering ---

  it('renders sv-navbar-content wrapper', () => {
    const wrapper = mount(SvNavbar);
    expect(wrapper.find('.sv-navbar-content').exists()).toBe(true);
  });

  it('renders sv-navbar inner element', () => {
    const wrapper = mount(SvNavbar);
    expect(wrapper.find('.sv-navbar').exists()).toBe(true);
  });

  // --- Slots ---

  it('renders left slot', () => {
    const wrapper = mount(SvNavbar, {
      slots: { left: '<span class="brand">Logo</span>' },
    });
    expect(wrapper.find('.sv-navbar__left').exists()).toBe(true);
    expect(wrapper.text()).toContain('Logo');
  });

  it('renders default slot in center', () => {
    const wrapper = mount(SvNavbar, {
      slots: { default: '<a>Home</a>' },
    });
    expect(wrapper.find('.sv-navbar__center').exists()).toBe(true);
    expect(wrapper.text()).toContain('Home');
  });

  it('renders right slot', () => {
    const wrapper = mount(SvNavbar, {
      slots: { right: '<button class="login">Login</button>' },
    });
    expect(wrapper.find('.sv-navbar__right').exists()).toBe(true);
    expect(wrapper.find('.login').exists()).toBe(true);
  });

  // --- Line ---

  it('renders navbar line by default', () => {
    const wrapper = mount(SvNavbar);
    expect(wrapper.find('.sv-navbar__line').exists()).toBe(true);
  });

  it('hides line when notLine prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { notLine: true },
    });
    expect(wrapper.find('.sv-navbar__line').exists()).toBe(false);
  });

  // --- Props as classes ---

  it('applies fixed class when fixed prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { fixed: true },
    });
    expect(wrapper.find('.fixed').exists()).toBe(true);
  });

  it('applies shadow class when shadow prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { shadow: true },
    });
    expect(wrapper.find('.shadow').exists()).toBe(true);
  });

  it('applies square class when square prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { square: true },
    });
    expect(wrapper.find('.svNavbarSquare').exists()).toBe(true);
  });

  it('applies textWhite class when textWhite prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { textWhite: true },
    });
    expect(wrapper.find('.textWhite').exists()).toBe(true);
  });

  it('applies paddingScroll class when paddingScroll prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { paddingScroll: true },
    });
    expect(wrapper.find('.paddingScroll').exists()).toBe(true);
  });

  // --- Color variants ---

  it('applies primary class when primary prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { primary: true },
    });
    expect(wrapper.find('.sv-component--primary').exists()).toBe(true);
  });

  it('applies danger class when danger prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { danger: true },
    });
    expect(wrapper.find('.sv-component--danger').exists()).toBe(true);
  });

  it('applies success class when success prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { success: true },
    });
    expect(wrapper.find('.sv-component--success').exists()).toBe(true);
  });

  it('applies warn class when warn prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { warn: true },
    });
    expect(wrapper.find('.sv-component--warn').exists()).toBe(true);
  });

  it('applies dark class when dark prop is true', () => {
    const wrapper = mount(SvNavbar, {
      props: { dark: true },
    });
    expect(wrapper.find('.sv-component--dark').exists()).toBe(true);
  });

  it('applies is-color class when color prop is provided', () => {
    const wrapper = mount(SvNavbar, {
      props: { color: '#ff0000' },
    });
    expect(wrapper.find('.sv-component--is-color').exists()).toBe(true);
  });
});
