<template>
  <div class="center">
    <sv-button flat @click="open('top-right')">Top Right</sv-button>
    <sv-button flat @click="open('top-left')">Top Left</sv-button>
    <sv-button flat @click="open('bottom-left')">Bottom Left</sv-button>
    <sv-button flat @click="open('bottom-right')">Bottom Right</sv-button>
    <sv-button flat @click="open('bottom-center')">Bottom Center</sv-button>
    <sv-button flat @click="open('top-center')">Top Center</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    open(position) {
      this.$sv.notification({ title: 'SaxVue', text: `Position: ${position}`, position });
    },
  },
};
</script>
