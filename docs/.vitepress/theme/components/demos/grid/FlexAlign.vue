<template>
  <div class="grid-demo">
    <sv-row justify="center">
      <sv-col :key="i" v-for="(col, i) in 3" w="2" class="grid-col">Default {{ i + 1 }}</sv-col>
    </sv-row>
    <sv-row align="center" justify="center" style="min-height: 70px">
      <sv-col :key="i" v-for="(col, i) in 3" w="2" class="grid-col">Center {{ i + 1 }}</sv-col>
    </sv-row>
    <sv-row align="flex-end" justify="center" style="min-height: 70px">
      <sv-col :key="i" v-for="(col, i) in 3" w="2" class="grid-col">Flex-end {{ i + 1 }}</sv-col>
    </sv-row>
    <sv-row align="center" justify="space-around" direction="column" style="min-height: 170px">
      <sv-col :key="i" v-for="(col, i) in 3" w="2" class="grid-col"
        >Space-around {{ i + 1 }}</sv-col
      >
    </sv-row>
    <sv-row align="center" justify="space-between" direction="column" style="min-height: 170px">
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
.grid-demo :deep(.sv-row),
.grid-demo :deep(.vs-row) {
  background: var(--vp-c-divider);
  border-bottom: 1px dashed var(--vp-c-bg-soft);
  min-height: 70px;
}
.grid-col {
  padding: 5px 10px;
  text-align: center;
  background: var(--vp-c-bg-soft);
  font-size: 0.75rem;
  transition: all 0.25s ease;
}
.grid-col:hover {
  transform: scale(0.93);
}
</style>
