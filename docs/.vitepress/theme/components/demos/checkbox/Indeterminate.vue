<template>
  <div class="center" style="flex-direction: column; align-items: flex-start">
    <sv-checkbox indeterminate v-model="option">Indeterminate</sv-checkbox>
  </div>
</template>
<script>
export default {
  data: () => ({ option: true }),
};
</script>
