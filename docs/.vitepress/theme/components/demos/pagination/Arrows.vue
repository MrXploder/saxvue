<template>
  <div class="center" style="flex-direction: column; gap: 15px">
    <sv-pagination v-model="p1" :length="10" not-arrows />
    <sv-pagination v-model="p2" :length="10" only-arrows />
  </div>
</template>
<script>
export default {
  data: () => ({ p1: 1, p2: 1 }),
};
</script>
