<template>
  <div class="center" style="flex-direction: column; gap: 15px">
    <sv-pagination v-model="p1" :length="10" color="primary" />
    <sv-pagination v-model="p2" :length="10" color="success" />
    <sv-pagination v-model="p3" :length="10" color="danger" />
    <sv-pagination v-model="p4" :length="10" color="warn" />
    <sv-pagination v-model="p5" :length="10" color="dark" />
    <sv-pagination v-model="p6" :length="10" color="#7d33ff" />
  </div>
</template>
<script>
export default {
  data: () => ({ p1: 1, p2: 2, p3: 3, p4: 4, p5: 5, p6: 1 }),
};
</script>
