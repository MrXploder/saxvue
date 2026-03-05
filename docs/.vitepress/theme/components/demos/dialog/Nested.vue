<template>
  <div class="center">
    <sv-button @click="active = true">Nested Dialogs</sv-button>
    <sv-dialog v-model="active">
      <template #header>
        <h4 style="margin: 0; padding: 10px">First Dialog</h4>
      </template>
      <div style="padding: 10px">
        <sv-button @click="inner = true">Open Inner Dialog</sv-button>
      </div>
      <sv-dialog v-model="inner">
        <template #header>
          <h4 style="margin: 0; padding: 10px">Inner Dialog</h4>
        </template>
        <p style="padding: 10px">This is a nested dialog.</p>
      </sv-dialog>
    </sv-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({ active: false, inner: false }),
};
</script>
