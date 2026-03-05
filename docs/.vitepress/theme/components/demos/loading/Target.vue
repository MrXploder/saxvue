<template>
  <div class="center">
    <div
      ref="target"
      style="
        position: relative;
        width: 200px;
        height: 120px;
        background: #f0f0f0;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <p>Target element</p>
    </div>
    <sv-button style="margin-top: 10px" flat @click="openLoading">Load on target</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading() {
      if (typeof window === 'undefined') return;
      const loading = this.$sv.loading({
        target: this.$refs.target,
        text: 'Loading...',
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
  },
};
</script>
