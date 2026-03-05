<template>
  <div class="center">
    <sv-button @click="active = true">Not Close</sv-button>
    <sv-dialog not-close v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px">Not closeable</h4>
      </template>
      <p style="padding: 10px">This dialog has no close button.</p>
      <template #footer>
        <sv-button @click="active = false" block>Accept</sv-button>
      </template>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false }),
};
</script>
