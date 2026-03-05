<template>
  <div class="center">
    <sv-button flat @click="openLoading">Open Loading with Background</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading() {
      const loading = this.$sv.loading({ background: 'rgba(0,0,0,.6)', color: '#fff' });
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
  },
};
</script>
