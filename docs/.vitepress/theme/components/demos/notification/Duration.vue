<template>
  <div class="center">
    <sv-button flat @click="open(2000)">2 seconds</sv-button>
    <sv-button flat @click="open(5000)">5 seconds</sv-button>
    <sv-button flat @click="open('none')">No auto-close</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    open(duration) {
      this.$sv.notification({ title: 'SaxVue', text: `Duration: ${duration}`, duration });
    },
  },
};
</script>
