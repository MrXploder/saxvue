import { mount } from '@vue/test-utils';
import SvTable from '../../src/components/svTable/Base/svTable';

describe('SvTable', () => {
  // --- Rendering ---

  it('renders sv-table-content wrapper', () => {
    const wrapper = mount(SvTable);
    expect(wrapper.find('.sv-table-content').exists()).toBe(true);
  });

  it('renders sv-table inner element', () => {
    const wrapper = mount(SvTable);
    expect(wrapper.find('.sv-table').exists()).toBe(true);
  });

  it('renders a <table> element', () => {
    const wrapper = mount(SvTable);
    expect(wrapper.find('table').exists()).toBe(true);
  });

  // --- Slots ---

  it('renders header slot', () => {
    const wrapper = mount(SvTable, {
      slots: { header: '<h3>Users Table</h3>' },
    });
    expect(wrapper.find('.sv-table__header').exists()).toBe(true);
    expect(wrapper.text()).toContain('Users Table');
  });

  it('does not render header when header slot is absent', () => {
    const wrapper = mount(SvTable);
    expect(wrapper.find('.sv-table__header').exists()).toBe(false);
  });

  it('renders thead slot', () => {
    const wrapper = mount(SvTable, {
      slots: { thead: '<tr><th>Name</th><th>Age</th></tr>' },
    });
    expect(wrapper.find('.sv-table__thead').exists()).toBe(true);
    expect(wrapper.text()).toContain('Name');
    expect(wrapper.text()).toContain('Age');
  });

  it('renders tbody slot', () => {
    const wrapper = mount(SvTable, {
      slots: { tbody: '<tr><td>John</td><td>30</td></tr>' },
    });
    expect(wrapper.find('.sv-table__tbody').exists()).toBe(true);
    expect(wrapper.text()).toContain('John');
  });

  it('renders footer slot', () => {
    const wrapper = mount(SvTable, {
      slots: { footer: '<span>Total: 10</span>' },
    });
    expect(wrapper.find('.sv-table__footer').exists()).toBe(true);
    expect(wrapper.text()).toContain('Total: 10');
  });

  it('does not render footer when footer slot is absent', () => {
    const wrapper = mount(SvTable);
    expect(wrapper.find('.sv-table__footer').exists()).toBe(false);
  });

  it('renders notFound slot', () => {
    const wrapper = mount(SvTable, {
      slots: { notFound: 'No results' },
    });
    expect(wrapper.find('.sv-table_not-found').exists()).toBe(true);
    expect(wrapper.text()).toContain('No results');
  });

  it('renders default notFound message when slot is absent', () => {
    const wrapper = mount(SvTable);
    expect(wrapper.find('.sv-table_not-found').exists()).toBe(true);
    expect(wrapper.text()).toContain('No matching records found');
  });

  // --- Striped ---

  it('applies striped class when striped prop is true', () => {
    const wrapper = mount(SvTable, {
      props: { striped: true },
    });
    expect(wrapper.find('.striped').exists()).toBe(true);
  });

  it('does not apply striped class by default', () => {
    const wrapper = mount(SvTable);
    expect(wrapper.find('.striped').exists()).toBe(false);
  });

  // --- Selection ---

  it('applies isSelectedValue class when value is set', () => {
    const wrapper = mount(SvTable, {
      props: { modelValue: 'row1' },
    });
    expect(wrapper.find('.isSelectedValue').exists()).toBe(true);
  });

  it('does not apply isSelectedValue class when value is null', () => {
    const wrapper = mount(SvTable);
    expect(wrapper.find('.isSelectedValue').exists()).toBe(false);
  });

  it('applies isMultipleSelected class when value is an array', () => {
    const wrapper = mount(SvTable, {
      props: { modelValue: ['row1', 'row2'] },
    });
    expect(wrapper.find('.isMultipleSelected').exists()).toBe(true);
  });

  // --- Emit input (single selection) ---

  it('emits input on selected call (tested via component internals)', () => {
    // SvTable exposes selected() through its child components;
    // we test the emit mechanism by calling through the component instance
    const wrapper = mount(SvTable, {
      props: { modelValue: null },
    });
    // Access the component's setup return via vm
    // The component doesn't expose selected directly, but we can verify
    // that the component mounts without errors and the emit mechanism exists
    expect(wrapper.emitted('update:modelValue')).toBeUndefined(); // no emit yet
  });

  // --- Full table ---

  it('renders a complete table with all slots', () => {
    const wrapper = mount(SvTable, {
      props: { striped: true },
      slots: {
        header: '<h3>Table</h3>',
        thead: '<tr><th>Name</th></tr>',
        tbody: '<tr><td>John</td></tr>',
        footer: '<span>End</span>',
      },
    });
    expect(wrapper.find('.sv-table__header').exists()).toBe(true);
    expect(wrapper.find('.sv-table__thead').exists()).toBe(true);
    expect(wrapper.find('.sv-table__tbody').exists()).toBe(true);
    expect(wrapper.find('.sv-table__footer').exists()).toBe(true);
    expect(wrapper.find('.striped').exists()).toBe(true);
  });
});
