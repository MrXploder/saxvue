import { mount } from '@vue/test-utils';
import SvCard from '../../src/components/svCard/Base/svCard';

describe('SvCard', () => {
  // --- Rendering ---

  it('renders sv-card-content wrapper', () => {
    const wrapper = mount(SvCard);
    expect(wrapper.find('.sv-card-content').exists()).toBe(true);
  });

  it('renders sv-card inner element', () => {
    const wrapper = mount(SvCard);
    expect(wrapper.find('.sv-card').exists()).toBe(true);
  });

  // --- Type prop ---

  it('applies type-1 class by default', () => {
    const wrapper = mount(SvCard);
    expect(wrapper.find('.type-1').exists()).toBe(true);
  });

  it('applies custom type class', () => {
    const wrapper = mount(SvCard, {
      props: { type: '2' },
    });
    expect(wrapper.find('.type-2').exists()).toBe(true);
  });

  it('applies numeric type class', () => {
    const wrapper = mount(SvCard, {
      props: { type: 3 },
    });
    expect(wrapper.find('.type-3').exists()).toBe(true);
  });

  // --- Title slot ---

  it('renders title slot inside sv-card__title', () => {
    const wrapper = mount(SvCard, {
      slots: { title: '<h3>Card Title</h3>', text: 'body' },
    });
    expect(wrapper.find('.sv-card__title').exists()).toBe(true);
    expect(wrapper.text()).toContain('Card Title');
  });

  // --- Text slot ---

  it('renders text slot inside sv-card__text', () => {
    const wrapper = mount(SvCard, {
      slots: { text: '<p>Card body content</p>' },
    });
    expect(wrapper.find('.sv-card__text').exists()).toBe(true);
    expect(wrapper.text()).toContain('Card body content');
  });

  it('does not render sv-card__text when text slot is absent', () => {
    const wrapper = mount(SvCard);
    expect(wrapper.find('.sv-card__text').exists()).toBe(false);
  });

  // --- Img slot ---

  it('renders img slot inside sv-card__img', () => {
    const wrapper = mount(SvCard, {
      slots: { img: '<img src="photo.jpg" alt="photo" />' },
    });
    expect(wrapper.find('.sv-card__img').exists()).toBe(true);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('does not render sv-card__img when img slot is absent', () => {
    const wrapper = mount(SvCard);
    expect(wrapper.find('.sv-card__img').exists()).toBe(false);
  });

  // --- Buttons slot ---

  it('renders buttons slot inside sv-card__buttons', () => {
    const wrapper = mount(SvCard, {
      slots: { buttons: '<button>Click</button>' },
    });
    expect(wrapper.find('.sv-card__buttons').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('does not render sv-card__buttons when buttons slot is absent', () => {
    const wrapper = mount(SvCard);
    expect(wrapper.find('.sv-card__buttons').exists()).toBe(false);
  });

  // --- Interactions slot ---

  it('renders interactions slot inside sv-card__interactions (within img)', () => {
    const wrapper = mount(SvCard, {
      slots: {
        img: '<img src="photo.jpg" />',
        interactions: '<span class="like-btn">♥</span>',
      },
    });
    expect(wrapper.find('.sv-card__interactions').exists()).toBe(true);
    expect(wrapper.find('.like-btn').exists()).toBe(true);
  });

  it('does not render interactions without img slot', () => {
    const wrapper = mount(SvCard, {
      slots: { interactions: '<span>♥</span>' },
    });
    // interactions is nested inside img container, so without img slot
    // the entire img container is not rendered
    expect(wrapper.find('.sv-card__interactions').exists()).toBe(false);
  });

  // --- Full card ---

  it('renders a complete card with all slots', () => {
    const wrapper = mount(SvCard, {
      slots: {
        img: '<img src="photo.jpg" />',
        title: 'My Title',
        text: 'My body',
        buttons: '<button>OK</button>',
        interactions: '<span>♥</span>',
      },
    });
    expect(wrapper.find('.sv-card__img').exists()).toBe(true);
    expect(wrapper.find('.sv-card__title').exists()).toBe(true);
    expect(wrapper.find('.sv-card__text').exists()).toBe(true);
    expect(wrapper.find('.sv-card__buttons').exists()).toBe(true);
    expect(wrapper.find('.sv-card__interactions').exists()).toBe(true);
  });
});
