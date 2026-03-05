<template>
  <div class="center" style="flex-direction: column; align-items: flex-start">
    <sv-checkbox label-before v-model="option">Label Before</sv-checkbox>
    <sv-checkbox v-model="option2">Label After</sv-checkbox>
  </div>
</template>
<script>
export default {
  data: () => ({ option: true, option2: true }),
};
</script>
