<template>
  <div class="center" style="flex-direction: column; gap: 10px">
    <sv-button flat @click="active = !active">{{
      active ? 'Close Alert' : 'Open Alert'
    }}</sv-button>
    <sv-alert closable v-model="active">
      <template #title> SaxVue Framework </template>
      SaxVue is a <b>UI component framework</b> built with Vue.js. This alert can be closed with the
      X button.
    </sv-alert>
  </div>
</template>
<script>
export default {
  data: () => ({ active: true }),
};
</script>
