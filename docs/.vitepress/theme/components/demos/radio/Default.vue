<template>
  <div class="center" style="flex-direction: column; align-items: flex-start; gap: 5px">
    <sv-radio v-model="picked" val="1">Option A</sv-radio>
    <sv-radio v-model="picked" val="2">Option B</sv-radio>
    <sv-radio disabled v-model="picked" val="3">Option C</sv-radio>
    <sv-radio v-model="picked" val="4">Option D</sv-radio>
  </div>
</template>
<script>
export default {
  data: () => ({ picked: '1' }),
};
</script>
