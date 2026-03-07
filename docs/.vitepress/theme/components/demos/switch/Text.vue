<template>
  <div
    class="center"
    style="display: flex; align-items: center; justify-content: center; gap: 10px"
  >
    <sv-switch v-model="active">Subscribe</sv-switch>
    <sv-switch v-model="active2"
      ><template #off>Off</template><template #on>On</template></sv-switch
    >
    <sv-switch v-model="active3"
      ><template #off>Default</template><template #on>Premium</template></sv-switch
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const active = ref(false);
    const active2 = ref(false);
    const active3 = ref(false);

    return { active, active2, active3 };
  },
});
</script>
