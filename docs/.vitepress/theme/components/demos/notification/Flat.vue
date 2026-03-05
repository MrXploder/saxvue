<template>
  <div class="center">
    <sv-button flat @click="open(false)">Default</sv-button>
    <sv-button flat @click="open(true)">Flat</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    open(flat) {
      this.$sv.notification({
        title: 'SaxVue',
        text: flat ? 'Flat style notification' : 'Default notification',
        flat: flat,
      });
    },
  },
};
</script>
