<template>
  <div class="grid-demo">
    <sv-row>
      <sv-col w="3" class="grid-col">1</sv-col>
      <sv-col w="3" class="grid-col">2</sv-col>
      <sv-col order="-1" w="3" class="grid-col" style="background: rgba(var(--sv-primary), 0.2)"
        >3 (order: -1)</sv-col
      >
      <sv-col w="3" class="grid-col">4</sv-col>
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
  padding: 10px;
  text-align: center;
  background: var(--vp-c-bg-soft);
  border: 2px solid var(--vp-c-divider);
  transition: all 0.25s ease;
}
.grid-col:hover {
  transform: scale(0.93);
  box-shadow: inset 0px 10px 20px -10px rgba(0, 0, 0, 0.1);
}
</style>
