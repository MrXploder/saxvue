<template>
  <div class="center">
    <sv-button flat @click="open(false)">Default</sv-button>
    <sv-button flat @click="open(true)">Border</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    open(border) {
      this.$sv.notification({
        title: 'SaxVue',
        text: border ? 'Border style notification' : 'Default notification',
        border: border ? 'primary' : undefined,
      });
    },
  },
};
</script>
