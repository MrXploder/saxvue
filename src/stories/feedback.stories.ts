import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, watch } from 'vue';
import SvAlert from '../components/svAlert/Base/svAlert';
import SvDialog from '../components/svDialog/Base/svDialog';
import SvTooltip from '../components/svTooltip/Base/svTooltip';
import SvButton from '../components/svButton/Base/SvButton';

const meta: Meta<typeof SvAlert> = {
  title: 'SaxVue/Feedback',
  component: SvAlert,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SvAlert>;

export const Alert: Story = {
  render: (args) => ({
    components: { SvAlert },
    setup() {
      const visible = ref(args.value ?? true);
      watch(
        () => args.value,
        (val) => (visible.value = !!val),
      );
      return { args, visible };
    },
    template: `
      <sv-alert v-bind="args" :value="visible" @input="visible = $event">
        <template #title>Heads up</template>
  This is a SaxVue alert with slots for content.
        <template #footer>
          <div style="font-size:12px;">Footer content</div>
        </template>
      </sv-alert>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-alert v-model="visible" closable :progress="40">
  <template #title>Heads up</template>
  This is a SaxVue alert with slots for content.
  <template #footer>
    <div style="font-size:12px;">Footer content</div>
  </template>
</sv-alert>`,
      },
    },
  },
  args: {
    value: true,
    solid: false,
    border: false,
    shadow: true,
    gradient: false,
    flat: false,
    relief: false,
    closable: true,
    progress: 40,
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
  },
};

export const Dialog: StoryObj<typeof SvDialog> = {
  render: (args) => ({
    components: { SvDialog, SvButton },
    setup() {
      const open = ref(args.value ?? false);
      watch(
        () => args.value,
        (val) => (open.value = !!val),
      );
      return { args, open };
    },
    template: `
      <div>
        <sv-button @click="open = true">Open dialog</sv-button>
        <sv-dialog v-bind="args" :value="open" @input="open = $event">
          <template #header>
            <h3 style="margin:0;">Dialog title</h3>
          </template>
          <p>This dialog shows the default slots and actions.</p>
          <template #footer>
            <sv-button @click="open = false" flat>Close</sv-button>
          </template>
        </sv-dialog>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-button @click="open = true">Open dialog</sv-button>

<sv-dialog v-model="open">
  <template #header>
    <h3 style="margin:0;">Dialog title</h3>
  </template>
  <p>This dialog shows the default slots and actions.</p>
  <template #footer>
    <sv-button @click="open = false" flat>Close</sv-button>
  </template>
</sv-dialog>`,
      },
    },
  },
  args: {
    value: false,
    fullScreen: false,
    notClose: false,
    preventClose: false,
    notPadding: false,
    blur: false,
    square: false,
    autoWidth: false,
    scroll: false,
    notCenter: false,
    width: '520px',
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
  },
};

export const Tooltip: StoryObj<typeof SvTooltip> = {
  render: (args) => ({
    components: { SvTooltip, SvButton },
    setup() {
      return { args };
    },
    template: `
      <div style="padding:40px;">
        <sv-tooltip v-bind="args">
          <template #tooltip>
            Tooltip content
          </template>
          <sv-button>Hover me</sv-button>
        </sv-tooltip>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-tooltip>
  <template #tooltip>Tooltip content</template>
  <sv-button>Hover me</sv-button>
</sv-tooltip>`,
      },
    },
  },
  args: {
    bottom: false,
    left: false,
    right: false,
    notHover: false,
    shadow: true,
    interactivity: false,
    notArrow: false,
    square: false,
    circle: false,
    border: false,
    borderThick: false,
    delay: null,
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
  },
};
