<template>
  <div class="grid-demo">
    <sv-row>
      <sv-col offset="5" w="6" class="grid-col">offset = 5</sv-col>
    </sv-row>
    <sv-row>
      <sv-col offset="0" w="2" class="grid-col">offset = 0</sv-col>
    </sv-row>
    <sv-row>
      <sv-col offset="2" w="8" class="grid-col">offset = 2</sv-col>
    </sv-row>
    <sv-row>
      <sv-col offset="9" w="3" class="grid-col">offset = 9</sv-col>
    </sv-row>
    <sv-row>
      <sv-col offset="4" w="4" class="grid-col">offset = 4</sv-col>
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
  transition: all 0.25s ease;
}
.grid-col:hover {
  transform: scale(0.93);
  box-shadow: inset 0px 10px 20px -10px rgba(0, 0, 0, 0.1);
}
</style>
