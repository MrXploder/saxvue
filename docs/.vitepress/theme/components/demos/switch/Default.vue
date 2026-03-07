<template>
  <div
    class="center"
    style="display: flex; align-items: center; justify-content: center; gap: 10px"
  >
    <sv-switch v-model="active" />
    <sv-switch v-model="active2" />
    <sv-switch v-model="active3" disabled />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const active = ref(false);
    const active2 = ref(true);
    const active3 = ref(false);

    return { active, active2, active3 };
  },
});
</script>
