<template>
  <div class="grid-demo">
    <sv-row>
      <sv-col :w="num" class="grid-col">{{ num }}</sv-col>
      <sv-col :w="num2" class="grid-col">{{ num2 }}</sv-col>
      <sv-col :w="num" class="grid-col">{{ num }}</sv-col>
    </sv-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  setup() {
    const num = ref(2);
    const num2 = ref(8);
    let interval: number | null = null;

    onMounted(() => {
      interval = setInterval(() => {
        if (num.value === 2) {
          num.value = 4;
          num2.value = 4;
        } else if (num.value === 4) {
          num.value = 1;
          num2.value = 10;
        } else if (num.value === 1) {
          num.value = 5;
          num2.value = 2;
        } else if (num.value === 5) {
          num.value = 2;
          num2.value = 8;
        }
      }, 2000);
    });

    onBeforeUnmount(() => {
      if (interval) clearInterval(interval);
    });

    return { num, num2 };
  },
});
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
