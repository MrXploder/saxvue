<template>
  <div class="center" style="flex-direction: column; align-items: flex-start">
    <sv-checkbox line-through v-model="option">Option</sv-checkbox>
    <sv-checkbox line-through v-model="option2">Option 2</sv-checkbox>
  </div>
</template>
<script>
export default {
  data: () => ({ option: true, option2: false }),
};
</script>
