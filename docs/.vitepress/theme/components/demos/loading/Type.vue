<template>
  <div class="center">
    <sv-button flat @click="openLoading('atoms')">Atoms</sv-button>
    <sv-button flat @click="openLoading('rotateSquare')">Rotate Square</sv-button>
    <sv-button flat @click="openLoading('stretch')">Stretch</sv-button>
    <sv-button flat @click="openLoading('scale')">Scale</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading(type) {
      const loading = this.$sv.loading({ type });
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
  },
};
</script>
