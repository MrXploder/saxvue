import { mount } from '@vue/test-utils';
import SvSidebar from '../../src/components/svSidebar/Base/svSidebar';

describe('SvSidebar', () => {
  // --- Rendering ---

  it('renders sv-sidebar-content wrapper', () => {
    const wrapper = mount(SvSidebar);
    expect(wrapper.find('.sv-sidebar-content').exists()).toBe(true);
  });

  it('renders sv-sidebar inner element', () => {
    const wrapper = mount(SvSidebar);
    expect(wrapper.find('.sv-sidebar').exists()).toBe(true);
  });

  // --- Slots ---

  it('renders default slot inside sv-sidebar', () => {
    const wrapper = mount(SvSidebar, {
      slots: { default: '<div class="menu-item">Home</div>' },
    });
    expect(wrapper.find('.sv-sidebar .menu-item').exists()).toBe(true);
  });

  it('renders logo slot', () => {
    const wrapper = mount(SvSidebar, {
      slots: { logo: '<img src="logo.png" />' },
    });
    expect(wrapper.find('.sv-sidebar__logo').exists()).toBe(true);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('does not render logo container when logo slot is absent', () => {
    const wrapper = mount(SvSidebar);
    expect(wrapper.find('.sv-sidebar__logo').exists()).toBe(false);
  });

  it('renders header slot', () => {
    const wrapper = mount(SvSidebar, {
      slots: { header: '<h3>Menu</h3>' },
    });
    expect(wrapper.find('.sv-sidebar__header').exists()).toBe(true);
    expect(wrapper.text()).toContain('Menu');
  });

  it('does not render header container when header slot is absent', () => {
    const wrapper = mount(SvSidebar);
    expect(wrapper.find('.sv-sidebar__header').exists()).toBe(false);
  });

  it('renders footer slot', () => {
    const wrapper = mount(SvSidebar, {
      slots: { footer: '<span>v1.0</span>' },
    });
    expect(wrapper.find('.sv-sidebar__footer').exists()).toBe(true);
    expect(wrapper.text()).toContain('v1.0');
  });

  it('does not render footer container when footer slot is absent', () => {
    const wrapper = mount(SvSidebar);
    expect(wrapper.find('.sv-sidebar__footer').exists()).toBe(false);
  });

  // --- Props as classes ---

  it('applies open class when open prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { open: true },
    });
    expect(wrapper.find('.open').exists()).toBe(true);
  });

  it('applies reduce class when reduce prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { reduce: true },
    });
    expect(wrapper.find('.reduce').exists()).toBe(true);
  });

  it('applies square class when square prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { square: true },
    });
    expect(wrapper.find('.square').exists()).toBe(true);
  });

  it('applies right class when right prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { right: true },
    });
    expect(wrapper.find('.right').exists()).toBe(true);
  });

  it('applies relative class when relative prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { relative: true },
    });
    expect(wrapper.find('.relative').exists()).toBe(true);
  });

  it('applies absolute class when absolute prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { absolute: true },
    });
    expect(wrapper.find('.absolute').exists()).toBe(true);
  });

  it('applies textWhite class when textWhite prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { textWhite: true },
    });
    expect(wrapper.find('.textWhite').exists()).toBe(true);
  });

  it('applies notShadow class when notShadow prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { notShadow: true },
    });
    expect(wrapper.find('.notShadow').exists()).toBe(true);
  });

  it('applies notLineActive class when notLineActive prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { notLineActive: true },
    });
    expect(wrapper.find('.notLineActive').exists()).toBe(true);
  });

  // --- Color variants ---

  it('applies primary class when primary prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { primary: true },
    });
    expect(wrapper.find('.sv-component--primary').exists()).toBe(true);
  });

  it('applies danger class when danger prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { danger: true },
    });
    expect(wrapper.find('.sv-component--danger').exists()).toBe(true);
  });

  it('applies success class when success prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { success: true },
    });
    expect(wrapper.find('.sv-component--success').exists()).toBe(true);
  });

  it('applies warn class when warn prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { warn: true },
    });
    expect(wrapper.find('.sv-component--warn').exists()).toBe(true);
  });

  it('applies dark class when dark prop is true', () => {
    const wrapper = mount(SvSidebar, {
      props: { dark: true },
    });
    expect(wrapper.find('.sv-component--dark').exists()).toBe(true);
  });

  it('applies is-color class when color prop is provided', () => {
    const wrapper = mount(SvSidebar, {
      props: { color: '#ff0000' },
    });
    expect(wrapper.find('.sv-component--is-color').exists()).toBe(true);
  });

  // --- Full sidebar ---

  it('renders a complete sidebar with all slots', () => {
    const wrapper = mount(SvSidebar, {
      props: { open: true },
      slots: {
        logo: '<img src="logo.png" />',
        header: '<h3>Menu</h3>',
        default: '<ul><li>Home</li></ul>',
        footer: '<span>v1.0</span>',
      },
    });
    expect(wrapper.find('.sv-sidebar__logo').exists()).toBe(true);
    expect(wrapper.find('.sv-sidebar__header').exists()).toBe(true);
    expect(wrapper.find('.sv-sidebar').exists()).toBe(true);
    expect(wrapper.find('.sv-sidebar__footer').exists()).toBe(true);
  });
});
