<template>
  <div class="center" style="flex-direction: column; align-items: flex-start; gap: 5px">
    <sv-radio v-model="picked" val="1">Label</sv-radio>
    <sv-radio label-before v-model="picked" val="2">Label Before</sv-radio>
  </div>
</template>
<script>
export default {
  data: () => ({ picked: '1' }),
};
</script>
