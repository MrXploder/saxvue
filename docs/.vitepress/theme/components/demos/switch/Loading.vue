<template>
  <div
    class="center"
    style="display: flex; align-items: center; justify-content: center; gap: 10px"
  >
    <sv-switch v-model="activeLoading">Active Loading</sv-switch>
    <sv-switch :loading="activeLoading" v-model="active2" />
  </div>
</template>
<script>
export default {
  data: () => ({ activeLoading: true, active2: false }),
};
</script>
