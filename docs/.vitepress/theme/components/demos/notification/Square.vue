<template>
  <div class="center">
    <sv-button flat @click="open(false)">Default</sv-button>
    <sv-button flat @click="open(true)">Square</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    open(square) {
      this.$sv.notification({
        title: 'SaxVue',
        text: square ? 'Square notification' : 'Default notification',
        square,
      });
    },
  },
};
</script>
