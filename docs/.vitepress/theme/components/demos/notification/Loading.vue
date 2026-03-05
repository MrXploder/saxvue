<template>
  <div class="center">
    <sv-button flat @click="open(false)">Default Loading</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    open() {
      const noti = this.$sv.notification({
        title: 'SaxVue',
        text: 'Loading notification...',
        loading: true,
        duration: 'none',
      });
      setTimeout(() => {
        noti.close();
      }, 4000);
    },
  },
};
</script>
