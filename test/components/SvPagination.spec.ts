import { mount } from '@vue/test-utils';
import SvPagination from '../../src/components/svPagination/Base/svPagination';

describe('SvPagination', () => {
  // --- Rendering ---

  it('renders sv-pagination-content wrapper', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 10 },
    });
    expect(wrapper.find('.sv-pagination-content').exists()).toBe(true);
  });

  it('renders sv-pagination inner element', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 10 },
    });
    expect(wrapper.find('.sv-pagination').exists()).toBe(true);
  });

  // --- Buttons ---

  it('renders page buttons', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5 },
    });
    const buttons = wrapper.findAll('.sv-pagination__button');
    expect(buttons.length).toBe(5);
  });

  it('marks the active page button', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 3, length: 5 },
    });
    const activeBtn = wrapper.find('.sv-pagination__button.active');
    expect(activeBtn.exists()).toBe(true);
    expect(activeBtn.text()).toBe('3');
  });

  // --- Arrows ---

  it('renders prev and next arrows by default', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5 },
    });
    expect(wrapper.find('.sv-pagination__arrow.prev').exists()).toBe(true);
    expect(wrapper.find('.sv-pagination__arrow.next').exists()).toBe(true);
  });

  it('hides arrows when notArrows prop is true', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, notArrows: true },
    });
    expect(wrapper.find('.sv-pagination__arrow').exists()).toBe(false);
  });

  it('emits input on next arrow click', async () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5 },
    });
    await wrapper.find('.sv-pagination__arrow.next').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(2);
  });

  it('emits input on prev arrow click when not on first page', async () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 3, length: 5 },
    });
    await wrapper.find('.sv-pagination__arrow.prev').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(2);
  });

  it('emits input when a page button is clicked', async () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5 },
    });
    const buttons = wrapper.findAll('.sv-pagination__button');
    await buttons[2].trigger('click'); // page 3
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(3);
  });

  // --- onlyArrows ---

  it('hides page buttons when onlyArrows is true', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, onlyArrows: true },
    });
    expect(wrapper.find('.sv-pagination').exists()).toBe(false);
    expect(wrapper.find('.sv-pagination__arrow.prev').exists()).toBe(true);
    expect(wrapper.find('.sv-pagination__arrow.next').exists()).toBe(true);
  });

  // --- Active indicator ---

  it('renders active indicator element', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5 },
    });
    expect(wrapper.find('.sv-pagination__active').exists()).toBe(true);
  });

  // --- Progress ---

  it('renders progress bar when progress prop is true', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 3, length: 10, progress: true },
    });
    expect(wrapper.find('.sv-pagination__progress').exists()).toBe(true);
  });

  it('does not render progress bar when progress is false', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, progress: false },
    });
    expect(wrapper.find('.sv-pagination__progress').exists()).toBe(false);
  });

  // --- Style variants ---

  it('applies circle class when circle prop is true', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, circle: true },
    });
    expect(wrapper.find('.circle').exists()).toBe(true);
  });

  it('applies square class when square prop is true', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, square: true },
    });
    expect(wrapper.find('.square').exists()).toBe(true);
  });

  it('applies disabled class when disabled prop is true', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, disabled: true },
    });
    expect(wrapper.find('.disabled').exists()).toBe(true);
  });

  it('applies notMargin class when notMargin prop is true', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, notMargin: true },
    });
    expect(wrapper.find('.notMargin').exists()).toBe(true);
  });

  it('applies buttonsDotted class when buttonsDotted prop is true', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, buttonsDotted: true },
    });
    expect(wrapper.find('.buttonsDotted').exists()).toBe(true);
  });

  // --- Color variants ---

  it('applies primary class by default', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5 },
    });
    expect(wrapper.find('.sv-component--primary').exists()).toBe(true);
  });

  it('applies danger class when danger prop is true', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, danger: true },
    });
    expect(wrapper.find('.sv-component--danger').exists()).toBe(true);
  });

  it('applies success class when success prop is true', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, success: true },
    });
    expect(wrapper.find('.sv-component--success').exists()).toBe(true);
  });

  it('sets --sv-color style when color prop is provided', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, color: '#ff0000' },
    });
    expect(wrapper.find('.sv-pagination-content').attributes('style')).toContain('--sv-color');
  });

  // --- Infinite ---

  it('wraps to last page on prev click when infinite and on page 1', async () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5, infinite: true },
    });
    await wrapper.find('.sv-pagination__arrow.prev').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(5);
  });

  it('wraps to first page on next click when infinite and on last page', async () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 5, length: 5, infinite: true },
    });
    await wrapper.find('.sv-pagination__arrow.next').trigger('click');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')![0][0]).toBe(1);
  });

  // --- Dotted pagination (many pages) ---

  it('renders dotted separator for many pages', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 20 },
    });
    expect(wrapper.find('.sv-pagination__dotted').exists()).toBe(true);
  });

  // --- Slot ---

  it('renders default slot content instead of buttons', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5 },
      slots: { default: '<span class="custom-content">Page 1</span>' },
    });
    expect(wrapper.find('.sv-pagination__slot').exists()).toBe(true);
    expect(wrapper.find('.custom-content').exists()).toBe(true);
  });

  // --- Arrow slots ---

  it('renders custom arrowPrev slot', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5 },
      slots: { arrowPrev: '<span class="custom-prev">←</span>' },
    });
    expect(wrapper.find('.custom-prev').exists()).toBe(true);
  });

  it('renders custom arrowNext slot', () => {
    const wrapper = mount(SvPagination, {
      props: { modelValue: 1, length: 5 },
      slots: { arrowNext: '<span class="custom-next">→</span>' },
    });
    expect(wrapper.find('.custom-next').exists()).toBe(true);
  });
});
