<template>
  <div
    style="
      width: 100%;
      border: 1px solid var(--vp-c-divider);
      border-radius: 12px;
      overflow: hidden;
    "
  >
    <sv-navbar :color="color">
      <template #left>
        <b style="color: #fff">SaxVue</b>
      </template>
      <sv-navbar-item active>Home</sv-navbar-item>
      <sv-navbar-item>News</sv-navbar-item>
    </sv-navbar>
    <div style="display: flex; gap: 5px; padding: 10px">
      <sv-button flat @click="color = 'primary'">Primary</sv-button>
      <sv-button flat success @click="color = 'success'">Success</sv-button>
      <sv-button flat danger @click="color = 'danger'">Danger</sv-button>
      <sv-button flat warn @click="color = 'warn'">Warn</sv-button>
      <sv-button flat dark @click="color = 'dark'">Dark</sv-button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({ color: 'primary' }),
};
</script>
