<template>
  <div class="center">
    <sv-button flat @click="openLoading">Open Loading with Text</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading() {
      const loading = this.$sv.loading({ text: 'Loading...' });
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
  },
};
</script>
