<template>
  <div class="center">
    <sv-button @click="active = true">Prevent Close</sv-button>
    <sv-dialog prevent-close v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px">Prevent close on overlay</h4>
      </template>
      <p style="padding: 10px">
        Clicking the overlay will not close this dialog. Use the X button.
      </p>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false }),
};
</script>
