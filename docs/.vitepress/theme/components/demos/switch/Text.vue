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
<script>
export default {
  data: () => ({ active: false, active2: false, active3: false }),
};
</script>
