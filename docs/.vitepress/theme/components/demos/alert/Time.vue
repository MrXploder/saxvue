<template>
  <div class="center" style="flex-direction: column; gap: 10px">
    <sv-button flat @click="active = true">Open Alert 6s</sv-button>
    <sv-alert :progress="progress" v-model="active">
      <template #title> SaxVue Framework </template>
      This alert will close after 6 seconds with a progress indicator.
    </sv-alert>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false,
    time: 6000,
    progress: 0,
  }),
  watch: {
    active(val) {
      if (val) {
        const interval = setInterval(() => {
          this.progress++;
        }, this.time / 100);
        setTimeout(() => {
          this.active = false;
          clearInterval(interval);
          this.progress = 0;
        }, this.time);
      }
    },
  },
};
</script>
