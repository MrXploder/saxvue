<template>
  <div class="center" style="gap: 10px">
    <sv-tooltip not-hover v-model="show">
      <sv-button flat @click="show = !show">Click me</sv-button>
      <template #tooltip>Programmatic tooltip</template>
    </sv-tooltip>
  </div>
</template>
<script>
export default {
  data: () => ({ show: false }),
};
</script>
