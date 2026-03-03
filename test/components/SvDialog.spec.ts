import { mount } from '@vue/test-utils';
import SvDialog from '../../src/components/svDialog/Base/svDialog';

describe('SvDialog', () => {
  it('does not render dialog content when value is false', () => {
    const wrapper = mount(SvDialog, { props: { value: false } });
    expect(wrapper.find('.sv-dialog-content').exists()).toBe(false);
  });

  it('renders dialog content when value is true', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true },
      attachTo: document.body,
    });
    // Dialog is inserted into body via insertBody, so we check the DOM directly
    const dialogContent = document.querySelector('.sv-dialog-content');
    expect(dialogContent).toBeTruthy();
    wrapper.unmount();
  });

  it('renders the sv-dialog element when visible', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true },
      attachTo: document.body,
    });
    const dialog = document.querySelector('.sv-dialog');
    expect(dialog).toBeTruthy();
    wrapper.unmount();
  });

  // --- Slots ---

  it('renders header slot', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true },
      slots: { header: '<h3>Title</h3>' },
      attachTo: document.body,
    });
    const header = document.querySelector('.sv-dialog__header');
    expect(header).toBeTruthy();
    expect(header!.textContent).toContain('Title');
    wrapper.unmount();
  });

  it('renders default slot content', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true },
      slots: { default: '<p>Body content</p>' },
      attachTo: document.body,
    });
    const content = document.querySelector('.sv-dialog__content');
    expect(content).toBeTruthy();
    expect(content!.textContent).toContain('Body content');
    wrapper.unmount();
  });

  it('renders footer slot', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true },
      slots: { footer: '<button>OK</button>' },
      attachTo: document.body,
    });
    const footer = document.querySelector('.sv-dialog__footer');
    expect(footer).toBeTruthy();
    expect(footer!.textContent).toContain('OK');
    wrapper.unmount();
  });

  // --- Close button ---

  it('renders close button by default', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true },
      attachTo: document.body,
    });
    const closeBtn = document.querySelector('.sv-dialog__close');
    expect(closeBtn).toBeTruthy();
    wrapper.unmount();
  });

  it('hides close button when notClose is true', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true, notClose: true },
      attachTo: document.body,
    });
    const closeBtn = document.querySelector('.sv-dialog__close');
    expect(closeBtn).toBeFalsy();
    wrapper.unmount();
  });

  // --- Style variants ---

  it('applies fullScreen class when fullScreen prop is true', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true, fullScreen: true },
      attachTo: document.body,
    });
    expect(document.querySelector('.sv-dialog--fullScreen')).toBeTruthy();
    wrapper.unmount();
  });

  it('applies square class when square prop is true', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true, square: true },
      attachTo: document.body,
    });
    expect(document.querySelector('.sv-dialog--square')).toBeTruthy();
    wrapper.unmount();
  });

  it('applies notPadding class when notPadding prop is true', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true, notPadding: true },
      attachTo: document.body,
    });
    expect(document.querySelector('.sv-dialog--notPadding')).toBeTruthy();
    wrapper.unmount();
  });

  it('applies blur class when blur prop is true', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true, blur: true },
      attachTo: document.body,
    });
    expect(document.querySelector('.sv-dialog-content.blur')).toBeTruthy();
    wrapper.unmount();
  });

  it('applies loading class and element when loading prop is true', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true, loading: true },
      attachTo: document.body,
    });
    expect(document.querySelector('.sv-dialog--loading')).toBeTruthy();
    expect(document.querySelector('.sv-dialog__loading')).toBeTruthy();
    wrapper.unmount();
  });

  it('sets custom width', () => {
    const wrapper = mount(SvDialog, {
      props: { value: true, width: '800px' },
      attachTo: document.body,
    });
    const dialog = document.querySelector('.sv-dialog') as HTMLElement | null;
    expect(dialog).toBeTruthy();
    expect(dialog!.style.width).toBe('800px');
    wrapper.unmount();
  });

  // --- Events ---

  it('emits close and input when close button is clicked', async () => {
    const wrapper = mount(SvDialog, {
      props: { value: true },
      attachTo: document.body,
    });
    const closeBtn = document.querySelector('.sv-dialog__close') as HTMLElement | null;
    expect(closeBtn).toBeTruthy();
    closeBtn!.click();
    expect(wrapper.emitted('close')).toBeTruthy();
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')![0][0]).toBe(false);
    wrapper.unmount();
  });
});
