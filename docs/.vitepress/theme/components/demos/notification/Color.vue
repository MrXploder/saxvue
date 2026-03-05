<template>
  <div class="center">
    <sv-button flat @click="open('primary')">Primary</sv-button>
    <sv-button flat success @click="open('success')">Success</sv-button>
    <sv-button flat danger @click="open('danger')">Danger</sv-button>
    <sv-button flat warn @click="open('warn')">Warning</sv-button>
    <sv-button flat dark @click="open('dark')">Dark</sv-button>
    <sv-button flat color="#7d33ff" @click="open('#7d33ff')">HEX</sv-button>
    <sv-button flat color="rgb(59,222,200)" @click="open('rgb(59,222,200)')">RGB</sv-button>
  </div>
</template>
<script>
export default {
  methods: {
    open(color) {
      this.$sv.notification({ title: 'SaxVue', text: `Notification with color: ${color}`, color });
    },
  },
};
</script>
