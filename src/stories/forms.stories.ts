import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, watch } from 'vue';
import SvInput from '../components/svInput/Base/svInput';
import SvCheckbox from '../components/svCheckbox/Base/svCheckbox';
import SvRadio from '../components/svRadio/Base/svRadio';
import SvSwitch from '../components/svSwitch/Base/svSwitch';
import SvSelect from '../components/svSelect/Base/svSelect';
import SvOption from '../components/svSelect/Option/svSelectOption';
import SvOptionGroup from '../components/svSelect/OptionGroup/svOptionGroup';

const meta: Meta<typeof SvInput> = {
  title: 'SaxVue/Forms',
  component: SvInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SvInput>;

export const Input: Story = {
  render: (args) => ({
    components: { SvInput },
    setup() {
      const value = ref(args.value ?? '');
      watch(
        () => args.value,
        (val) => (value.value = val ?? ''),
      );
      return { args, value };
    },
    template: `
      <div style="max-width:360px;">
        <sv-input v-bind="args" :value="value" @input="value = $event" placeholder="Type here" />
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-input v-model="value" label="Email" label-placeholder="Email" placeholder="Type here" />`,
      },
    },
  },
  args: {
    value: '',
    label: 'Email',
    labelPlaceholder: 'Email',
    block: false,
    iconAfter: false,
    visiblePassword: false,
    loading: false,
    color: null,
    state: null,
    progress: 20,
    border: false,
    shadow: true,
    transparent: false,
    textWhite: false,
    square: false,
  },
};

export const Checkbox: StoryObj<typeof SvCheckbox> = {
  render: (args) => ({
    components: { SvCheckbox },
    setup() {
      const checked = ref(!!args.value);
      watch(
        () => args.value,
        (val) => (checked.value = !!val),
      );
      return { args, checked };
    },
    template: `
      <sv-checkbox v-bind="args" :value="checked" @input="checked = $event">
        Accept terms
      </sv-checkbox>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-checkbox v-model="checked">Accept terms</sv-checkbox>`,
      },
    },
  },
  args: {
    value: 'true',
    indeterminate: false,
    lineThrough: false,
    checked: false,
    checkedForce: false,
    loading: false,
    labelBefore: false,
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
  },
};

export const Radio: StoryObj<typeof SvRadio> = {
  render: (args) => ({
    components: { SvRadio },
    setup() {
      const model = ref(args.value ?? 'first');
      watch(
        () => args.value,
        (val) => (model.value = val ?? 'first'),
      );
      return { args, model };
    },
    template: `
      <div style="display:flex; gap:16px;">
        <sv-radio v-bind="args" :value="model" val="first" @input="model = $event">First</sv-radio>
        <sv-radio v-bind="args" :value="model" val="second" @input="model = $event">Second</sv-radio>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-radio v-model="selected" val="first">First</sv-radio>
<sv-radio v-model="selected" val="second">Second</sv-radio>`,
      },
    },
  },
  args: {
    value: 'first',
    disabled: false,
    loading: false,
    labelBefore: false,
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
  },
};

export const Switch: StoryObj<typeof SvSwitch> = {
  render: (args) => ({
    components: { SvSwitch },
    setup() {
      const model = ref(!!args.value);
      watch(
        () => args.value,
        (val) => (model.value = !!val),
      );
      return { args, model };
    },
    template: `
      <sv-switch v-bind="args" :value="model" @input="model = $event">
        Notifications
      </sv-switch>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-switch v-model="active">Notifications</sv-switch>`,
      },
    },
  },
  args: {
    value: 'true',
    loading: false,
    square: false,
    indeterminate: false,
    icon: false,
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
  },
};

export const Select: StoryObj<typeof SvSelect> = {
  render: (args) => ({
    components: { SvSelect, SvOption, SvOptionGroup },
    setup() {
      const model = ref(args.multiple ? ['design'] : 'design');
      watch(
        () => args.multiple,
        (val) => {
          model.value = val ? ['design'] : 'design';
        },
      );
      return { args, model };
    },
    template: `
      <div style="max-width:360px;">
        <sv-select v-bind="args" :value="model" @input="model = $event">
          <sv-option label="Design" value="design">Design</sv-option>
          <sv-option label="Engineering" value="engineering">Engineering</sv-option>
          <sv-option-group>
            <template #title>Other</template>
            <sv-option label="Marketing" value="marketing">Marketing</sv-option>
            <sv-option label="Sales" value="sales">Sales</sv-option>
          </sv-option-group>
        </sv-select>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-select v-model="team" placeholder="Pick a team" label="Team">
  <sv-option label="Design" value="design">Design</sv-option>
  <sv-option label="Engineering" value="engineering">Engineering</sv-option>
  <sv-option-group>
    <template #title>Other</template>
    <sv-option label="Marketing" value="marketing">Marketing</sv-option>
    <sv-option label="Sales" value="sales">Sales</sv-option>
  </sv-option-group>
</sv-select>`,
      },
    },
  },
  args: {
    value: 'design',
    multiple: false,
    filter: false,
    placeholder: 'Pick a team',
    labelPlaceholder: 'Team',
    label: 'Team',
    disabled: false,
    collapseChips: false,
    loading: false,
    state: null,
    block: false,
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
  },
};
