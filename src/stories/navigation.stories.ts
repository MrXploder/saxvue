import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import SvNavbar from '../components/svNavbar/Base/svNavbar';
import SvNavbarItem from '../components/svNavbar/Item/svNavbarItem';
import SvNavbarGroup from '../components/svNavbar/Group/svNavbarGroup';
import SvSidebar from '../components/svSidebar/Base/svSidebar';
import SvSidebarItem from '../components/svSidebar/Item/svSidebarItem';
import SvSidebarGroup from '../components/svSidebar/Group/svSidebarGroup';
import SvButton from '../components/svButton/Base/SvButton';

const meta: Meta<typeof SvNavbar> = {
  title: 'SaxVue/Navigation',
  component: SvNavbar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SvNavbar>;

export const Navbar: Story = {
  render: (args) => ({
    components: { SvNavbar, SvNavbarItem, SvNavbarGroup },
    setup() {
      const active = ref('home');
      return { args, active };
    },
    template: `
      <sv-navbar v-bind="args">
        <template #left>
          <sv-navbar-item id="home" :active="active === 'home'">Home</sv-navbar-item>
          <sv-navbar-item id="docs" :active="active === 'docs'">Docs</sv-navbar-item>
        </template>
        <sv-navbar-item id="pricing" :active="active === 'pricing'">Pricing</sv-navbar-item>
        <template #right>
          <sv-navbar-group>
            <template #default>More</template>
            <template #items>
              <sv-navbar-item id="about" :active="active === 'about'">About</sv-navbar-item>
              <sv-navbar-item id="contact" :active="active === 'contact'">Contact</sv-navbar-item>
            </template>
          </sv-navbar-group>
        </template>
      </sv-navbar>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-navbar>
  <template #left>
    <sv-navbar-item id="home" :active="active === 'home'">Home</sv-navbar-item>
    <sv-navbar-item id="docs" :active="active === 'docs'">Docs</sv-navbar-item>
  </template>
  <sv-navbar-item id="pricing" :active="active === 'pricing'">Pricing</sv-navbar-item>
  <template #right>
    <sv-navbar-group>
      <template #default>More</template>
      <template #items>
        <sv-navbar-item id="about">About</sv-navbar-item>
        <sv-navbar-item id="contact">Contact</sv-navbar-item>
      </template>
    </sv-navbar-group>
  </template>
</sv-navbar>`,
      },
    },
  },
  args: {
    fixed: false,
    shadow: true,
    shadowScroll: false,
    hideScroll: false,
    textWhite: false,
    square: false,
    paddingScroll: false,
    notLine: false,
    leftCollapsed: false,
    centerCollapsed: false,
    rightCollapsed: false,
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
  },
};

export const Sidebar: StoryObj<typeof SvSidebar> = {
  render: (args) => ({
    components: { SvSidebar, SvSidebarItem, SvSidebarGroup, SvButton },
    setup() {
      const selected = ref('dashboard');
      const open = ref(true);
      return { args, selected, open };
    },
    template: `
      <div style="display:flex; gap:16px; align-items:flex-start;">
        <sv-sidebar v-bind="args" :value="selected" :open="open" @input="selected = $event" @update:open="open = $event">
          <template #logo>
            <strong>SaxVue</strong>
          </template>
          <sv-sidebar-item id="dashboard" arrow>
            <template #icon>📊</template>
            Dashboard
          </sv-sidebar-item>
          <sv-sidebar-item id="projects">
            <template #icon>📁</template>
            Projects
          </sv-sidebar-item>
          <sv-sidebar-group>
            <template #header>
              <strong>Settings</strong>
            </template>
            <sv-sidebar-item id="profile">
              Profile
            </sv-sidebar-item>
            <sv-sidebar-item id="billing">
              Billing
            </sv-sidebar-item>
          </sv-sidebar-group>
          <template #footer>
            <sv-button flat size="small">Logout</sv-button>
          </template>
        </sv-sidebar>
        <div style="padding:8px;">
          Selected: <strong>{{ selected }}</strong>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-sidebar v-model="selected" :open="open" @update:open="open = $event">
  <template #logo>
    <strong>SaxVue</strong>
  </template>
  <sv-sidebar-item id="dashboard" arrow>
    <template #icon>📊</template>
    Dashboard
  </sv-sidebar-item>
  <sv-sidebar-item id="projects">
    <template #icon>📁</template>
    Projects
  </sv-sidebar-item>
  <sv-sidebar-group>
    <template #header>
      <strong>Settings</strong>
    </template>
    <sv-sidebar-item id="profile">Profile</sv-sidebar-item>
    <sv-sidebar-item id="billing">Billing</sv-sidebar-item>
  </sv-sidebar-group>
  <template #footer>
    <sv-button flat size="small">Logout</sv-button>
  </template>
</sv-sidebar>`,
      },
    },
  },
  args: {
    reduce: false,
    hoverExpand: false,
    open: true,
    notLineActive: false,
    square: false,
    textWhite: false,
    notShadow: false,
    relative: false,
    absolute: false,
    right: false,
    background: 'background',
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
  },
};
