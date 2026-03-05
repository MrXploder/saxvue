<template>
  <div class="center">
    <sv-alert :hidden-content="hidden" @update:hidden-content="hidden = $event">
      <template #title> SaxVue Framework </template>
      SaxVue is a <b>UI component framework</b> built with Vue.js. Click the icon to toggle content
      visibility.
    </sv-alert>
  </div>
</template>
<script>
export default {
  data: () => ({ hidden: true }),
};
</script>
