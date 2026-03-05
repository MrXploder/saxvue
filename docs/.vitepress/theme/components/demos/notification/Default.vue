<template>
  <div class="center">
    <sv-button @click="openNotification">Open Notification</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    openNotification() {
      this.$sv.notification({
        title: 'SaxVue Notification',
        text: 'This is a default notification created with SaxVue.',
      });
    },
  },
};
</script>
