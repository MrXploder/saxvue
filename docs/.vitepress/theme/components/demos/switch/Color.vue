<template>
  <div
    class="center"
    style="display: flex; align-items: center; justify-content: center; gap: 10px"
  >
    <sv-switch v-model="a1" />
    <sv-switch success v-model="a2" />
    <sv-switch danger v-model="a3" />
    <sv-switch warn v-model="a4" />
    <sv-switch dark v-model="a5" />
    <sv-switch color="#7d33ff" v-model="a6" />
    <sv-switch color="rgb(59,222,200)" v-model="a7" />
  </div>
</template>
<script>
export default {
  data: () => ({ a1: true, a2: true, a3: true, a4: true, a5: true, a6: true, a7: true }),
};
</script>
