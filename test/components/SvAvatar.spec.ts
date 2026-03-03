import { mount } from '@vue/test-utils';
import SvAvatar from '../../src/components/svAvatar/Base/svAvatar';

describe('SvAvatar', () => {
  // --- Rendering ---

  it('renders sv-avatar-content wrapper', () => {
    const wrapper = mount(SvAvatar);
    expect(wrapper.find('.sv-avatar-content').exists()).toBe(true);
  });

  it('renders sv-avatar inner element', () => {
    const wrapper = mount(SvAvatar);
    expect(wrapper.find('.sv-avatar').exists()).toBe(true);
  });

  // --- Default slot ---

  it('renders default slot content (image)', () => {
    const wrapper = mount(SvAvatar, {
      slots: { default: '<img src="avatar.png" />' },
    });
    expect(wrapper.find('img').exists()).toBe(true);
  });

  // --- Text slot ---

  it('renders text slot with short text', () => {
    const wrapper = mount(SvAvatar, {
      slots: { text: 'AB' },
    });
    expect(wrapper.text()).toContain('AB');
  });

  it('renders text slot with long text (initials)', () => {
    const wrapper = mount(SvAvatar, {
      slots: { text: 'John Michael Doe Smith Jr' },
    });
    // Long text (>5 chars) gets split into initials
    expect(wrapper.text()).toContain('J');
  });

  it('applies letter-length class for long text', () => {
    const wrapper = mount(SvAvatar, {
      slots: { text: 'John Michael Doe Smith Jr' },
    });
    // The component adds sv-avatar--letter--N class when text length > 2
    const avatarEl = wrapper.find('.sv-avatar');
    const classes = avatarEl.classes();
    const hasLetterClass = classes.some((c) => c.startsWith('sv-avatar--letter--'));
    expect(hasLetterClass).toBe(true);
  });

  // --- Badge ---

  it('renders badge when badge prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { badge: true },
    });
    expect(wrapper.find('.sv-avatar__badge').exists()).toBe(true);
  });

  it('renders badge slot content', () => {
    const wrapper = mount(SvAvatar, {
      slots: { badge: '<span>3</span>' },
    });
    expect(wrapper.find('.sv-avatar__badge').exists()).toBe(true);
    expect(wrapper.find('.sv-avatar__badge.isSlot').exists()).toBe(true);
  });

  it('does not render badge when badge prop is false and no badge slot', () => {
    const wrapper = mount(SvAvatar);
    expect(wrapper.find('.sv-avatar__badge').exists()).toBe(false);
  });

  // --- Icons slot ---

  it('renders icons slot', () => {
    const wrapper = mount(SvAvatar, {
      slots: { icons: '<i class="custom-icon"></i>' },
    });
    expect(wrapper.find('.sv-avatar__icons').exists()).toBe(true);
    expect(wrapper.find('.custom-icon').exists()).toBe(true);
  });

  it('applies hasIcons class when icons slot is provided', () => {
    const wrapper = mount(SvAvatar, {
      slots: { icons: '<i></i>' },
    });
    expect(wrapper.find('.sv-avatar-content--hasIcons').exists()).toBe(true);
  });

  // --- Writing ---

  it('renders writing dots when writing is true and badge is present', () => {
    const wrapper = mount(SvAvatar, {
      props: { writing: true, badge: true },
    });
    expect(wrapper.find('.sv-avatar__points').exists()).toBe(true);
    expect(wrapper.findAll('.sv-avatar__points__point')).toHaveLength(3);
  });

  // --- Shape props ---

  it('applies circle class when circle prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { circle: true },
    });
    expect(wrapper.find('.sv-avatar-content--circle').exists()).toBe(true);
  });

  it('applies square class when square prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { square: true },
    });
    expect(wrapper.find('.sv-avatar-content--square').exists()).toBe(true);
  });

  // --- History ---

  it('applies history class when history prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { history: true },
    });
    expect(wrapper.find('.history').exists()).toBe(true);
  });

  it('applies history--gradient class when historyGradient prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { historyGradient: true },
    });
    expect(wrapper.find('.history--gradient').exists()).toBe(true);
  });

  // --- Loading ---

  it('renders loading element when loading prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { loading: true },
    });
    expect(wrapper.find('.sv-avatar__loading').exists()).toBe(true);
  });

  it('does not render loading element when loading is false', () => {
    const wrapper = mount(SvAvatar);
    expect(wrapper.find('.sv-avatar__loading').exists()).toBe(false);
  });

  // --- Size ---

  it('sets custom size via style', () => {
    const wrapper = mount(SvAvatar, {
      props: { size: 80 },
    });
    const el = wrapper.find('.sv-avatar-content');
    expect(el.attributes('style')).toContain('width: 80px');
    expect(el.attributes('style')).toContain('height: 80px');
  });

  it('applies size class when size prop is set', () => {
    const wrapper = mount(SvAvatar, {
      props: { size: 80 },
    });
    expect(wrapper.find('.sv-avatar-content--size').exists()).toBe(true);
  });

  // --- Pointer ---

  it('sets cursor to pointer when pointer prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { pointer: true },
    });
    const el = wrapper.find('.sv-avatar-content');
    expect(el.attributes('style')).toContain('cursor: pointer');
  });

  // --- Color variants ---

  it('applies primary class when primary prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { primary: true },
    });
    expect(wrapper.find('.sv-component--primary').exists()).toBe(true);
  });

  it('applies danger class when danger prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { danger: true },
    });
    expect(wrapper.find('.sv-component--danger').exists()).toBe(true);
  });

  it('applies success class when success prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { success: true },
    });
    expect(wrapper.find('.sv-component--success').exists()).toBe(true);
  });

  it('applies warn class when warn prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { warn: true },
    });
    expect(wrapper.find('.sv-component--warn').exists()).toBe(true);
  });

  it('applies dark class when dark prop is true', () => {
    const wrapper = mount(SvAvatar, {
      props: { dark: true },
    });
    expect(wrapper.find('.sv-component--dark').exists()).toBe(true);
  });

  it('sets --sv-color style when color prop is provided', () => {
    const wrapper = mount(SvAvatar, {
      props: { color: '#ff0000' },
    });
    expect(wrapper.find('.sv-avatar-content').attributes('style')).toContain('--sv-color');
    expect(wrapper.find('.sv-component--is-color').exists()).toBe(true);
  });
});
