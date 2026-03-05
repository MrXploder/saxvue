<template>
  <div class="center">
    <sv-button
      @click="handleClick"
      :icon="success"
      :upload="sending"
      :color="success ? 'success' : 'primary'"
    >
      <span v-if="!success" style="display: flex; align-items: center"
        ><i class="bx bx-mail-send" style="padding-right: 5px"></i> Send</span
      >
      <i class="bx bx-check" v-else></i>
    </sv-button>
  </div>
</template>
<script>
export default {
  data: () => ({
    sending: false,
    success: false,
  }),
  methods: {
    handleClick() {
      this.sending = true;
      setTimeout(() => {
        this.sending = false;
        this.success = !this.success;
      }, 2000);
    },
  },
};
</script>
