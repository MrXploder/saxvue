<template>
  <div class="center" style="flex-direction: column; align-items: flex-start">
    <sv-checkbox loading v-model="option">Loading</sv-checkbox>
    <sv-checkbox loading v-model="option2">Loading 2</sv-checkbox>
  </div>
</template>
<script>
export default {
  data: () => ({ option: true, option2: false }),
};
</script>
