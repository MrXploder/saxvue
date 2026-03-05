<template>
  <div class="center" style="flex-direction: column; align-items: flex-start; gap: 5px">
    <sv-radio loading v-model="picked" val="1">Option 1</sv-radio>
    <sv-radio loading v-model="picked" val="2">Option 2</sv-radio>
  </div>
</template>
<script>
export default {
  data: () => ({ picked: '1' }),
};
</script>
