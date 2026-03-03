import type { Meta, StoryObj } from '@storybook/vue3';
import SvButton from '../components/svButton/Base/SvButton';
import SvButtonGroup from '../components/svButton/Group/SvButtonGroup';

const meta: Meta<typeof SvButton> = {
  title: 'SaxVue/Buttons',
  component: SvButton,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    ripple: {
      control: { type: 'select' },
      options: ['', 'reverse', 'cut'],
    },
    size: { control: 'text' },
    to: { control: 'text' },
    href: { control: 'text' },
    blank: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof SvButton>;

export const Playground: Story = {
  render: (args) => ({
    components: { SvButton },
    setup() {
      return { args };
    },
    template: `<sv-button v-bind="args">Primary button</sv-button>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-button color="#1f74ff">Primary button</sv-button>`,
      },
    },
  },
  args: {
    color: '#1f74ff',
    size: null,
    flat: false,
    border: false,
    gradient: false,
    relief: false,
    transparent: false,
    shadow: false,
    floating: false,
    circle: false,
    square: false,
    icon: false,
    loading: false,
    upload: false,
    block: false,
    active: false,
    activeDisabled: false,
    ripple: '',
    animationType: '',
    animateInactive: false,
    to: null,
    href: null,
    blank: false,
  },
};

export const Variants: Story = {
  render: () => ({
    components: { SvButton },
    template: `
      <div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center;">
        <sv-button>Default</sv-button>
        <sv-button primary>Primary</sv-button>
        <sv-button success>Success</sv-button>
        <sv-button warn>Warn</sv-button>
        <sv-button danger>Danger</sv-button>
        <sv-button dark>Dark</sv-button>
        <sv-button flat>Flat</sv-button>
        <sv-button border>Border</sv-button>
        <sv-button gradient>Gradient</sv-button>
        <sv-button relief>Relief</sv-button>
        <sv-button transparent>Transparent</sv-button>
        <sv-button shadow>Shadow</sv-button>
        <sv-button floating>Floating</sv-button>
        <sv-button circle icon>+</sv-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-button>Default</sv-button>
<sv-button primary>Primary</sv-button>
<sv-button success>Success</sv-button>
<sv-button warn>Warn</sv-button>
<sv-button danger>Danger</sv-button>
<sv-button dark>Dark</sv-button>
<sv-button flat>Flat</sv-button>
<sv-button border>Border</sv-button>
<sv-button gradient>Gradient</sv-button>
<sv-button relief>Relief</sv-button>
<sv-button transparent>Transparent</sv-button>
<sv-button shadow>Shadow</sv-button>
<sv-button floating>Floating</sv-button>
<sv-button circle icon>+</sv-button>`,
      },
    },
  },
};

export const Group: StoryObj<typeof SvButtonGroup> = {
  render: () => ({
    components: { SvButton, SvButtonGroup },
    template: `
      <sv-button-group>
        <sv-button>Left</sv-button>
        <sv-button>Middle</sv-button>
        <sv-button>Right</sv-button>
      </sv-button-group>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-button-group>
  <sv-button>Left</sv-button>
  <sv-button>Middle</sv-button>
  <sv-button>Right</sv-button>
</sv-button-group>`,
      },
    },
  },
};

export const LinkButtons: Story = {
  render: () => ({
    components: { SvButton },
    template: `
      <div style="display:flex; flex-wrap:wrap; gap:12px; align-items:center;">
        <sv-button to="/docs" @click="(evt) => evt.preventDefault()">Router Link</sv-button>
  <sv-button href="https://saxvue.com" blank>External Link</sv-button>
  <sv-button href="https://saxvue.com" :blank="false">Same Tab</sv-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-button to="/docs">Router Link</sv-button>
<sv-button href="https://saxvue.com" blank>External Link</sv-button>
<sv-button href="https://saxvue.com" :blank="false">Same Tab</sv-button>`,
      },
    },
  },
};
