<template>
  <div
    class="center"
    style="display: flex; align-items: center; justify-content: center; gap: 10px"
  >
    <sv-switch v-model="activeLoading">Active Loading</sv-switch>
    <sv-switch :loading="activeLoading" v-model="active2" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeLoading = ref(true);
    const active2 = ref(false);

    return { activeLoading, active2 };
  },
});
</script>
