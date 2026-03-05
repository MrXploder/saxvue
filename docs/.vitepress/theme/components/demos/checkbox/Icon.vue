<template>
  <div class="center" style="flex-direction: column; align-items: flex-start">
    <sv-checkbox v-model="option1"
      ><template #icon><i class="bx bx-check"></i></template>Check</sv-checkbox
    >
    <sv-checkbox v-model="option2"
      ><template #icon><i class="bx bx-x"></i></template>Cancel</sv-checkbox
    >
    <sv-checkbox v-model="option3"
      ><template #icon><i class="bx bxs-heart"></i></template>Heart</sv-checkbox
    >
    <sv-checkbox v-model="option4"
      ><template #icon><i class="bx bxs-star"></i></template>Star</sv-checkbox
    >
  </div>
</template>
<script>
export default {
  data: () => ({ option1: true, option2: false, option3: true, option4: false }),
};
</script>
