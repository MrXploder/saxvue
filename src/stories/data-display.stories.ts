import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, watch } from 'vue';
import SvAvatar from '../components/svAvatar/Base/svAvatar';
import SvAvatarGroup from '../components/svAvatar/Group/svAvatarGroup';
import SvCard from '../components/svCard/Base/svCard';
import SvCardGroup from '../components/svCard/Group/svCardGroup';
import SvButton from '../components/svButton/Base/SvButton';
import SvTable from '../components/svTable/Base/svTable';
import SvTableTr from '../components/svTable/Tr/svTableTr';
import SvTableTh from '../components/svTable/Th/svTableTh';
import SvTableTd from '../components/svTable/Td/svTableTd';
import SvPagination from '../components/svPagination/Base/svPagination';

const meta: Meta<typeof SvAvatar> = {
  title: 'SaxVue/Data Display',
  component: SvAvatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SvAvatar>;

export const Avatar: Story = {
  render: (args) => ({
    components: { SvAvatar },
    setup() {
      return { args };
    },
    template: `
      <sv-avatar v-bind="args">
        <template #text>Jane Doe</template>
      </sv-avatar>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-avatar badge badge-color="#22c55e" circle :size="56">
  <template #text>Jane Doe</template>
</sv-avatar>`,
      },
    },
  },
  args: {
    badge: true,
    badgePosition: '',
    badgeColor: '#22c55e',
    circle: true,
    square: false,
    history: false,
    historyGradient: false,
    writing: false,
    loading: false,
    size: 56,
    color: null,
    danger: false,
    success: false,
    warn: false,
    dark: false,
  },
};

export const AvatarGroup: StoryObj<typeof SvAvatarGroup> = {
  render: () => ({
    components: { SvAvatar, SvAvatarGroup },
    template: `
      <sv-avatar-group :max="3" float>
        <sv-avatar circle color="#6366f1"><template #text>AM</template></sv-avatar>
        <sv-avatar circle color="#10b981"><template #text>JS</template></sv-avatar>
        <sv-avatar circle color="#f59e0b"><template #text>RD</template></sv-avatar>
        <sv-avatar circle color="#ef4444"><template #text>KL</template></sv-avatar>
      </sv-avatar-group>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-avatar-group :max="3" float>
  <sv-avatar circle color="#6366f1"><template #text>AM</template></sv-avatar>
  <sv-avatar circle color="#10b981"><template #text>JS</template></sv-avatar>
  <sv-avatar circle color="#f59e0b"><template #text>RD</template></sv-avatar>
  <sv-avatar circle color="#ef4444"><template #text>KL</template></sv-avatar>
</sv-avatar-group>`,
      },
    },
  },
};

export const Card: StoryObj<typeof SvCard> = {
  render: (args) => ({
    components: { SvCard, SvButton },
    setup() {
      return { args };
    },
    template: `
      <sv-card v-bind="args">
        <template #img>
          <div style="height:180px; background: linear-gradient(135deg, #60a5fa, #a78bfa);"></div>
        </template>
        <template #title>Project roadmap</template>
        <template #text>
          Align the team on priorities for the next release.
        </template>
        <template #buttons>
          <div style="display:flex; gap:8px;">
            <sv-button>Share</sv-button>
            <sv-button flat>View</sv-button>
          </div>
        </template>
      </sv-card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-card>
  <template #img>
    <div style="height:180px; background: linear-gradient(135deg, #60a5fa, #a78bfa);"></div>
  </template>
  <template #title>Project roadmap</template>
  <template #text>
    Align the team on priorities for the next release.
  </template>
  <template #buttons>
    <sv-button>Share</sv-button>
    <sv-button flat>View</sv-button>
  </template>
</sv-card>`,
      },
    },
  },
  args: {
    type: '1',
  },
};

export const CardGroup: StoryObj<typeof SvCardGroup> = {
  render: () => ({
    components: { SvCard, SvCardGroup },
    template: `
      <sv-card-group>
        <sv-card>
          <template #title>Overview</template>
          <template #text>Metrics and KPIs.</template>
        </sv-card>
        <sv-card>
          <template #title>Customers</template>
          <template #text>Insights from user research.</template>
        </sv-card>
        <sv-card>
          <template #title>Launch</template>
          <template #text>Go-to-market checklist.</template>
        </sv-card>
      </sv-card-group>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-card-group>
  <sv-card>
    <template #title>Overview</template>
    <template #text>Metrics and KPIs.</template>
  </sv-card>
  <sv-card>
    <template #title>Customers</template>
    <template #text>Insights from user research.</template>
  </sv-card>
  <sv-card>
    <template #title>Launch</template>
    <template #text>Go-to-market checklist.</template>
  </sv-card>
</sv-card-group>`,
      },
    },
  },
};

export const Table: StoryObj<typeof SvTable> = {
  render: (args) => ({
    components: { SvTable, SvTableTr, SvTableTh, SvTableTd },
    setup() {
      const selected = ref(args.value ?? '');
      watch(
        () => args.value,
        (val) => (selected.value = val ?? ''),
      );
      const rows = [
        { id: 'alpha', name: 'Alpha', status: 'Active' },
        { id: 'beta', name: 'Beta', status: 'Paused' },
        { id: 'gamma', name: 'Gamma', status: 'Active' },
      ];
      return { args, selected, rows };
    },
    template: `
      <sv-table v-bind="args" :value="selected" @input="selected = $event">
        <template #thead>
          <sv-table-tr>
            <sv-table-th sort>Name</sv-table-th>
            <sv-table-th>Status</sv-table-th>
          </sv-table-tr>
        </template>
        <template #tbody>
          <sv-table-tr v-for="row in rows" :key="row.id" :data="row" :is-selected="selected === row.id">
            <sv-table-td>{{ row.name }}</sv-table-td>
            <sv-table-td>{{ row.status }}</sv-table-td>
          </sv-table-tr>
        </template>
      </sv-table>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-table v-model="selected">
  <template #thead>
    <sv-table-tr>
      <sv-table-th sort>Name</sv-table-th>
      <sv-table-th>Status</sv-table-th>
    </sv-table-tr>
  </template>
  <template #tbody>
    <sv-table-tr v-for="row in rows" :key="row.id" :data="row" :is-selected="selected === row.id">
      <sv-table-td>{{ row.name }}</sv-table-td>
      <sv-table-td>{{ row.status }}</sv-table-td>
    </sv-table-tr>
  </template>
</sv-table>`,
      },
    },
  },
  args: {
    value: 'alpha',
    striped: true,
    loading: false,
  },
};

export const Pagination: StoryObj<typeof SvPagination> = {
  render: (args) => ({
    components: { SvPagination },
    setup() {
      const page = ref(args.value ?? 1);
      watch(
        () => args.value,
        (val) => (page.value = Number(val) || 1),
      );
      return { args, page };
    },
    template: `
      <sv-pagination v-bind="args" :value="page" @input="page = $event" />
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<sv-pagination v-model="page" :length="10" :max="7" />`,
      },
    },
  },
  args: {
    value: 1,
    length: 10,
    max: 7,
    infinite: false,
    progress: false,
    notMargin: false,
    buttonsDotted: false,
    notArrows: false,
    onlyArrows: false,
    circle: false,
    square: false,
    disabled: false,
    disabledItems: [],
    loadingItems: [],
  },
};
