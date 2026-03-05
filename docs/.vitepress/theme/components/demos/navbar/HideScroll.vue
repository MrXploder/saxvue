<template>
  <div
    style="
      width: 100%;
      border: 1px solid var(--vp-c-divider);
      border-radius: 12px;
      overflow: hidden;
      position: relative;
    "
  >
    <sv-navbar target-scroll="#hide-scroll-content" hide-scroll center-collapsed v-model="active">
      <template #left>
        <b>SaxVue</b>
      </template>
      <sv-navbar-item :active="active == 'guide'" id="guide">Guide</sv-navbar-item>
      <sv-navbar-item :active="active == 'docs'" id="docs">Documents</sv-navbar-item>
      <sv-navbar-item :active="active == 'components'" id="components">Components</sv-navbar-item>
      <sv-navbar-item :active="active == 'license'" id="license">License</sv-navbar-item>
      <template #right>
        <sv-button flat>Login</sv-button>
        <sv-button>Get Started</sv-button>
      </template>
    </sv-navbar>
    <div
      id="hide-scroll-content"
      style="
        height: 400px;
        position: relative;
        overflow: auto;
        width: 100%;
        background: rgb(240, 240, 240);
      "
    >
      <div
        style="
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        "
      >
        child 1
      </div>
      <div
        style="
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        "
      >
        child 2
      </div>
      <div
        style="
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        "
      >
        child 3
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: 'guide',
  }),
};
</script>
