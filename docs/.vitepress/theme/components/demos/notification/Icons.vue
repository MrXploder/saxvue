<template>
  <div class="center">
    <sv-button flat @click="open">With Icons</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    open() {
      this.$sv.notification({
        title: 'SaxVue',
        text: 'Notification with custom icon',
        icon: '<i class="bx bxs-bell-ring"></i>',
      });
    },
  },
};
</script>
