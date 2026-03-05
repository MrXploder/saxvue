<template>
  <div class="center">
    <sv-button @click="active = true">Blur Dialog</sv-button>
    <sv-dialog blur v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px">Blur Background</h4>
      </template>
      <p style="padding: 10px">The background is blurred when this dialog is open.</p>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false }),
};
</script>
