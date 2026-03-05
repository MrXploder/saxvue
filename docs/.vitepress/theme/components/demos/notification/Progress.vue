<template>
  <div class="center">
    <sv-button flat @click="open">With Progress</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    open() {
      this.$sv.notification({
        title: 'SaxVue',
        text: 'Notification with progress bar',
        progress: 'auto',
      });
    },
  },
};
</script>
