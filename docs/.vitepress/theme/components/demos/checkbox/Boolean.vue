<template>
  <div class="center" style="flex-direction: column; align-items: flex-start">
    <sv-checkbox v-model="option1">Option</sv-checkbox>
    <sv-checkbox v-model="option2">Option 2</sv-checkbox>
    <span style="background: rgba(0, 0, 0, 0.03); padding: 10px 20px; border-radius: 18px"
      >{{ option1 }} / {{ option2 }}</span
    >
  </div>
</template>
<script>
export default {
  data: () => ({ option1: true, option2: false }),
};
</script>
