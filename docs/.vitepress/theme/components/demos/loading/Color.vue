<template>
  <div class="center">
    <sv-button flat @click="openLoading('primary')">Primary</sv-button>
    <sv-button flat success @click="openLoading('success')">Success</sv-button>
    <sv-button flat danger @click="openLoading('danger')">Danger</sv-button>
    <sv-button flat warn @click="openLoading('#7d33ff')">#7d33ff</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    openLoading(color) {
      const loading = this.$sv.loading({ color });
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
  },
};
</script>
