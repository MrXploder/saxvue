import type { Meta, StoryObj } from '@storybook/vue3';
import SvRow from '../layout/grid/SvRow';
import SvCol from '../layout/grid/SvCol';

const meta: Meta<typeof SvRow> = {
  title: 'SaxVue/Layout',
  component: SvRow,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SvRow>;

export const Grid: Story = {
  render: (args) => ({
    components: { SvRow, SvCol },
    setup() {
      return { args };
    },
    template: `
      <sv-row v-bind="args" style="gap:12px;">
        <sv-col w="4">
          <div style="background:#e2e8f0; padding:12px; border-radius:8px;">Column 1</div>
        </sv-col>
        <sv-col w="4">
          <div style="background:#e2e8f0; padding:12px; border-radius:8px;">Column 2</div>
        </sv-col>
        <sv-col w="4">
          <div style="background:#e2e8f0; padding:12px; border-radius:8px;">Column 3</div>
        </sv-col>
      </sv-row>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-row justify="space-between" align="stretch">
  <sv-col w="4">Column 1</sv-col>
  <sv-col w="4">Column 2</sv-col>
  <sv-col w="4">Column 3</sv-col>
</sv-row>`,
      },
    },
  },
  args: {
    justify: 'space-between',
    align: 'stretch',
    direction: 'row',
  },
};

export const ColumnOptions: StoryObj<typeof SvCol> = {
  render: (args) => ({
    components: { SvRow, SvCol },
    setup() {
      return { args };
    },
    template: `
      <sv-row style="gap:12px;">
        <sv-col v-bind="args">
          <div style="background:#cbd5f5; padding:12px; border-radius:8px;">Configurable column</div>
        </sv-col>
      </sv-row>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-row>
  <sv-col w="6">Configurable column</sv-col>
</sv-row>`,
      },
    },
  },
  args: {
    w: '6',
    offset: '0',
    order: '0',
    lg: '0',
    sm: '0',
    xs: '0',
    type: 'block',
    justify: 'flex-start',
  },
};
