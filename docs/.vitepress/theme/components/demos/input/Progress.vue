<template>
  <div class="center content-inputs">
    <sv-input type="password" v-model="v1" label-placeholder="Password" :progress="getProgress">
      <template #message-danger>Insecure password</template>
    </sv-input>
  </div>
</template>
<script>
export default {
  data: () => ({ v1: '' }),
  computed: {
    getProgress() {
      let progress = 0;
      if (/[a-z]/.test(this.v1)) progress += 25;
      if (/[A-Z]/.test(this.v1)) progress += 25;
      if (/[0-9]/.test(this.v1)) progress += 25;
      if (/[^a-zA-Z0-9]/.test(this.v1)) progress += 25;
      return progress;
    },
  },
};
</script>
