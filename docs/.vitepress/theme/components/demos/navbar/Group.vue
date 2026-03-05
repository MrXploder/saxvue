<template>
  <div
    style="
      width: 100%;
      border: 1px solid var(--vp-c-divider);
      border-radius: 12px;
      overflow: hidden;
    "
  >
    <sv-navbar center-collapsed v-model="active">
      <template #left>
        <b>SaxVue</b>
      </template>
      <sv-navbar-group>
        Docs
        <template #items>
          <sv-navbar-item :active="active == 'guide'" id="guide">Guide</sv-navbar-item>
          <sv-navbar-item :active="active == 'docs'" id="docs">Documents</sv-navbar-item>
          <sv-navbar-item :active="active == 'components'" id="components"
            >Components</sv-navbar-item
          >
        </template>
      </sv-navbar-group>
      <sv-navbar-group>
        Ecosystem
        <template #items>
          <sv-navbar-item :active="active == 'Github'" id="Github">Github</sv-navbar-item>
          <sv-navbar-item :active="active == 'Discord'" id="Discord">Discord</sv-navbar-item>
          <sv-navbar-item :active="active == 'Twitter'" id="Twitter">Twitter</sv-navbar-item>
        </template>
      </sv-navbar-group>
      <sv-navbar-item :active="active == 'License'" id="License">License</sv-navbar-item>
      <template #right>
        <sv-button flat>Login</sv-button>
        <sv-button>Get Started</sv-button>
      </template>
    </sv-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 'guide',
  }),
};
</script>
