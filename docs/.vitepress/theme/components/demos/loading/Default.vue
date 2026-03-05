<template>
  <div class="center">
    <sv-button flat @click="openLoading">Open Loading</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading() {
      const loading = this.$sv.loading();
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
  },
};
</script>
