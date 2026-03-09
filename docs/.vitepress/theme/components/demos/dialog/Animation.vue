<template>
  <div class="center" style="display: flex; flex-wrap: wrap; gap: 8px">
    <sv-button v-for="anim in animations" :key="anim" @click="openDialog(anim)">
      {{ anim }}
    </sv-button>

    <sv-dialog v-model="active" :animation="currentAnimation">
      <template #header>
        <h4 style="margin: 0; padding: 10px; font-weight: normal">
          Animation: <b>{{ currentAnimation }}</b>
        </h4>
      </template>
      <div style="padding: 10px">
        <p>
          This dialog uses the <code>{{ currentAnimation }}</code> animation.
        </p>
      </div>
      <template #footer>
        <sv-button @click="active = false">Close</sv-button>
      </template>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false,
    currentAnimation: 'scale',
    animations: [
      'scale',
      'fade',
      'slide-up',
      'slide-down',
      'slide-left',
      'slide-right',
      'zoom',
      'door',
      'flip',
    ],
  }),
  methods: {
    openDialog(anim) {
      this.currentAnimation = anim;
      this.active = true;
    },
  },
};
</script>
