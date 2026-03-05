<template>
  <div class="grid-demo">
    <sv-row>
      <sv-col :key="i" v-for="(col, i) in 3" w="2" class="grid-col">Default {{ i + 1 }}</sv-col>
    </sv-row>
    <sv-row justify="center">
      <sv-col :key="i" v-for="(col, i) in 3" w="2" class="grid-col">Center {{ i + 1 }}</sv-col>
    </sv-row>
    <sv-row justify="flex-end">
      <sv-col :key="i" v-for="(col, i) in 3" w="2" class="grid-col">Flex-end {{ i + 1 }}</sv-col>
    </sv-row>
    <sv-row justify="space-around">
      <sv-col :key="i" v-for="(col, i) in 3" w="2" class="grid-col"
        >Space-around {{ i + 1 }}</sv-col
      >
    </sv-row>
    <sv-row justify="space-between">
      <sv-col :key="i" v-for="(col, i) in 3" w="2" class="grid-col"
        >Space-between {{ i + 1 }}</sv-col
      >
    </sv-row>
  </div>
</template>
<style scoped>
.grid-demo {
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
}
.grid-col {
  padding: 15px 10px;
  text-align: center;
  background: var(--vp-c-bg-soft);
  font-size: 0.75rem;
  transition: all 0.25s ease;
}
.grid-col:hover {
  transform: scale(0.93);
  box-shadow: inset 0px 10px 20px -10px rgba(0, 0, 0, 0.1);
}
</style>
