<template>
  <div class="grid-demo">
    <sv-row>
      <sv-col :w="num" class="grid-col">{{ num }}</sv-col>
      <sv-col :w="num2" class="grid-col">{{ num2 }}</sv-col>
      <sv-col :w="num" class="grid-col">{{ num }}</sv-col>
    </sv-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    num: 2,
    num2: 8,
    interval: null,
  }),
  mounted() {
    this.interval = setInterval(() => {
      if (this.num === 2) {
        this.num = 4;
        this.num2 = 4;
      } else if (this.num === 4) {
        this.num = 1;
        this.num2 = 10;
      } else if (this.num === 1) {
        this.num = 5;
        this.num2 = 2;
      } else if (this.num === 5) {
        this.num = 2;
        this.num2 = 8;
      }
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>
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
</style>
