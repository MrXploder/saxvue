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
<script>
export default {
  data: () => ({ active: false, active2: true, active3: false }),
};
</script>
