<template>
  <div class="center" style="flex-direction: column; gap: 15px">
    <sv-pagination v-model="p1" :length="10" circle />
    <sv-pagination v-model="p2" :length="10" square />
    <sv-pagination v-model="p3" :length="10" buttons-dotted />
  </div>
</template>
<script>
export default {
  data: () => ({ p1: 1, p2: 1, p3: 1 }),
};
</script>
