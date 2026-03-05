<template>
  <div class="center">
    <sv-checkbox v-model="option">Option</sv-checkbox>
  </div>
</template>
<script>
export default {
  data: () => ({ option: true }),
};
</script>
